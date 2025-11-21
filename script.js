// --- INÍCIO DA CONFIGURAÇÃO DE DADOS ---

// ==========================================================================
// 2. CONFIGURAÇÕES E DADOS GLOBAIS
// ==========================================================================

const defaultSettings = {
    diasDeArea: { "Base Técnica": "Segunda", "Ciências da Natureza": "Terça", "Matemática": "Terça", "Linguagens": "Quinta", "Humanas": "Sexta" },
    intervalosFixos: [ {"inicio": "09:10", "fim": "09:30"}, {"inicio": "12:00", "fim": "13:20"}, {"inicio": "15:00", "fim": "15:20"} ]
};

const substitutionLimits = {
    // Nomes padronizados (Primeira letra maiúscula, resto minúsculo)
    // Linguagens
    "Giordana": 2, "Laura": 3, "Rizia": 3, "Suzy": 3, "Zelia": 3, "Sara": 4, "Julio": 2, "Valdiego": 2, "Marcos": 1, "Gilmar": 1,
    // Humanas
    "Alex-história": 1, "Luis": 1, "Robertina": 1, "Pollyana": 1,
    // Exatas (Ciências da Natureza + Matemática)
    "Carlos": 4, "Alex": 2, "Denisson": 2, "Fernanda": 0, "Elias": 2, "Danilo": 3, "Denis": 1, "Adrielma": 3, "Vilmar": 3, "Linalda": 7, "Yuri": 1,
    // Base Técnica
    "Isa lacerda": 2, "Rodolpho": 3, "Renato": 2, "Heroiso": 3, "Ryan": 1, "Shirley": 3, "Sammya": 1, "Paulo": 1
};

// 3. Função que calcula o horário de fim (assumindo 50 minutos de aula)
const calculateEndTime = (startTime) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    date.setMinutes(date.getMinutes() + 50);
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
};

// 4. Função que processa os dados brutos para o formato que o sistema espera
const processRawData = (data) => {
    const dayMapping = {
        segunda: 'Segunda', terca: 'Terça', quarta: 'Quarta', quinta: 'Quinta', sexta: 'Sexta'
    };

    return data.professores.map(prof => {
        const horarios = [];
        for (const dayKey in prof.horario) {
            const dayName = dayMapping[dayKey];
            if (dayName) {
                prof.horario[dayKey].forEach(aula => {
                    // Ignorar reuniões ou entradas inválidas
                    if (aula.disciplina_turma.toLowerCase().includes('reun')) {
                        return;
                    }
                    horarios.push({
                        dia: dayName,
                        inicio: aula.hora,
                        fim: calculateEndTime(aula.hora),
                        turma: aula.disciplina_turma
                    });
                });
            }
        }
        return {
            nome: prof.nome.charAt(0).toUpperCase() + prof.nome.slice(1).toLowerCase(), // Padroniza o nome
            area: prof.area || 'Não definida', // Pega a área diretamente do JSON
            horarios: horarios
        };
    });
};

// 5. Objeto de dados principal que o sistema usará (será preenchido após o carregamento)
let teacherScheduleData = {
    professores: [],
    diasDeArea: { ...defaultSettings.diasDeArea },
    intervalosFixos: [ ...defaultSettings.intervalosFixos ]
};

// ==========================================================================
// 3. GERENCIAMENTO DE ESTADO DA APLICAÇÃO
// ==========================================================================

let appState = {
    confirmedSubstitutions: {},
    ignoredClasses: {},
    activityLog: [],
    currentAbsentTeachers: [],
    currentDay: null,
    currentPeriod: 'all', // NOVO: Armazena o período selecionado
};
let currentUser = null; // Armazena o usuário logado

const resetAppState = () => {
    appState.activityLog = [];
    appState.confirmedSubstitutions = {};
    appState.ignoredClasses = {};
    appState.currentAbsentTeachers = [];
    appState.currentDay = null;
    appState.currentPeriod = 'all';
};

// ==========================================================================
// 4. LÓGICA DE NEGÓCIO E UTILITÁRIOS
// ==========================================================================

const loadLocalSettings = () => {
    const savedDiasDeArea = localStorage.getItem('diasDeArea');
    const savedIntervalosFixos = localStorage.getItem('intervalosFixos');

    if (savedDiasDeArea) {
        teacherScheduleData.diasDeArea = JSON.parse(savedDiasDeArea);
    }
    if (savedIntervalosFixos) {
        teacherScheduleData.intervalosFixos = JSON.parse(savedIntervalosFixos);
    }
};

const saveLocalSettings = () => {
    // Salvar Dias de Área
    const newDiasDeArea = {};
    document.querySelectorAll('#area-days-form .area-day-item').forEach(item => {
        const area = item.dataset.area;
        const day = item.querySelector('select').value;
        newDiasDeArea[area] = day;
    });
    localStorage.setItem('diasDeArea', JSON.stringify(newDiasDeArea));
    teacherScheduleData.diasDeArea = newDiasDeArea;

    // Salvar Intervalos Fixos
    const newIntervalos = Array.from(document.querySelectorAll('#fixed-intervals-form .interval-item')).map(item => ({
        inicio: item.querySelector('input[name="start"]').value,
        fim: item.querySelector('input[name="end"]').value
    }));
    localStorage.setItem('intervalosFixos', JSON.stringify(newIntervalos));
    teacherScheduleData.intervalosFixos = newIntervalos;
};

const parseTimeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
};

const isTimeOverlap = (slotA, slotB) => {
    const startA = parseTimeToMinutes(slotA.inicio);
    const endA = parseTimeToMinutes(slotA.fim);
    const startB = parseTimeToMinutes(slotB.inicio);
    const endB = parseTimeToMinutes(slotB.fim);
    return startA < endB && endA > startB;
};

const isDuringBreak = (classSlot) => {
    return teacherScheduleData.intervalosFixos.some(breakSlot => {
        return isTimeOverlap(classSlot, breakSlot);
    });
};

const getGrade = (turma) => {
    if (!turma) return null;
    const match = turma.match(/^(\d)/); // Pega o primeiro dígito
    return match ? `${match[1]}º` : null;
};

const getCourse = (turma) => {
    if (!turma) return null;
    const match = turma.match(/\d[º°]?\s?([A-Z]{2,3})/);
    return match ? match[1] : null;
};

const getAreaColor = (area) => {
    switch(area) {
        case 'Linguagens': return 'bg-sky-100 text-sky-800';
        case 'Humanas': return 'bg-amber-100 text-amber-800';
        case 'Ciências da Natureza': case 'Matemática': return 'bg-teal-100 text-teal-800';
        case 'Base Técnica': return 'bg-slate-100 text-slate-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

// ==========================================================================
// 5. INICIALIZAÇÃO E MANIPULAÇÃO DE EVENTOS
// ==========================================================================

// Função principal de inicialização
async function initializeApp() {
    try {
        // Carrega os dados do arquivo JSON externo
        const response = await fetch('horarios.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        rawData = await response.json();

        // Agora que rawData está carregado, processa e preenche o objeto principal
        teacherScheduleData.professores = processRawData(rawData);

    } catch (error) {
        console.error("Falha ao carregar ou processar o arquivo de horários:", error);
        alert("ERRO: Não foi possível carregar o arquivo 'horarios.json'. Verifique se o arquivo está na mesma pasta e se você está usando um servidor local (como a extensão Live Server do VS Code).");
        return; // Interrompe a execução se os dados não puderem ser carregados
    }

    // Elementos da Tela de Login
    const loginScreen = document.getElementById('login-screen');
    const mainApp = document.getElementById('main-app');

    // Elementos do Multi-Select Personalizado
    const dateSelect = document.getElementById('absence-date');
    const findBtn = document.getElementById('find-substitute-btn');
    const periodSelect = document.getElementById('absence-period');
    const resultsArea = document.getElementById('results-area');
    const loadingSpinner = document.getElementById('loading-spinner');
    const actionsContainer = document.getElementById('actions-container');
    const exportContainer = document.getElementById('export-container');
    const areaFilterSelect = document.getElementById('area-filter');
    const multiSelectContainer = document.getElementById('custom-multiselect-container');
    const multiSelectButton = document.getElementById('absent-teachers-button');
    const multiSelectDisplay = document.getElementById('absent-teachers-display');
    const multiSelectDropdown = document.getElementById('absent-teachers-dropdown');
    const loadSessionInput = document.getElementById('load-session-input');
    const noTccWeekCheckbox = document.getElementById('no-tcc-week-checkbox');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const planningModeCheckbox = document.getElementById('planning-mode-checkbox');
    let selectedTeachers = new Set();
    
    // Elementos do Modal de Configurações
    const settingsModal = document.getElementById('settings-modal');
    const openSettingsBtn = document.getElementById('open-settings-btn');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const resetSettingsBtn = document.getElementById('reset-settings-btn');
    const settingsOverlay = document.getElementById('settings-overlay');
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    const addIntervalBtn = document.getElementById('add-interval-btn');
    const areaDaysForm = document.getElementById('area-days-form');
    const fixedIntervalsForm = document.getElementById('fixed-intervals-form');

    // Elementos do Modal da Grade Horária
    const scheduleModal = document.getElementById('schedule-modal');
    const openScheduleBtn_elem = document.getElementById('open-schedule-btn');
    const closeScheduleBtn_elem = document.getElementById('close-schedule-btn');
    const scheduleOverlay_elem = document.getElementById('schedule-overlay');
    const scheduleSearchInput = document.getElementById('schedule-search-teacher');
    const exportLogBtn = document.getElementById('export-log-btn');
    const schedulePeriodFilter = document.getElementById('schedule-filter-period');
    const printScheduleBtn = document.getElementById('print-schedule-btn');
    const scheduleAreaFilter = document.getElementById('schedule-filter-area');
    const scheduleGridContainer = document.getElementById('schedule-grid-container');

    // Carrega as configurações salvas ao iniciar
    loadLocalSettings();

    // --- LÓGICA DE LOGIN ---
    const credentials = {
        'cleone': { password: 'humanas2025', area: 'Humanas', name: 'Cleone' },
        'carlos': { password: 'exatas2025', area: 'Ciências da Natureza', name: 'Carlos' }, // Pode ser qualquer uma das duas
        'isa': { password: 'tecnica2025', area: 'Base Técnica', name: 'Isa' },
        'geferson': { password: 'linguagens2025', area: 'Linguagens', name: 'Geferson' },
        'renato': { password: 'estagio2025', area: 'Base Técnica', name: 'Renato' },
        'ryan': { password: 'adm123', area: 'Base Técnica', name: 'Ryan' }
    };

    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');
    const welcomeScreen = document.getElementById('welcome-screen');
    const welcomeMessage = document.getElementById('welcome-message');
    const togglePasswordBtn = document.getElementById('toggle-password-visibility');


    const eyeIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" /></svg>`;
    const eyeSlashIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 01-2.45 2.45l-1.514-1.514a4 4 0 00-3.05-5.814l.922.922A4.002 4.002 0 017.968 6.553zm-1.07-1.07l3.536 3.536a2 2 0 01-2.45 2.45l-3.536-3.536a4 4 0 002.45-2.45z" clip-rule="evenodd" /></svg>`;
    
    togglePasswordBtn.innerHTML = eyeIcon;
    togglePasswordBtn.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordBtn.innerHTML = eyeSlashIcon;
        } else {
            passwordInput.type = 'password';
            togglePasswordBtn.innerHTML = eyeIcon;
        }
    });

    // Define a data de hoje como padrão no seletor de data
    const setTodayDate = () => {
        const today = new Date().toISOString().split('T')[0];
        dateSelect.value = today;
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.toLowerCase();
        const password = passwordInput.value;
        const user = credentials[username];

        if (user && user.password === password) {
            // Login bem-sucedido
            currentUser = user; // Armazena o usuário logado
            loginError.classList.add('hidden');
            
            // 1. Esconde a tela de login
            loginScreen.style.opacity = '0';
            setTimeout(() => loginScreen.classList.add('hidden'), 500);

            // 2. Mostra a tela de boas-vindas
            welcomeMessage.innerHTML = `Bem-vindo(a) Coordenador(a) de ${user.area}, <br><strong>${user.name}</strong>. <br><br> Vamos começar?`;
            welcomeScreen.classList.remove('hidden');

            // 3. Após a animação, esconde a tela de boas-vindas e mostra o app
            setTimeout(() => {
                welcomeScreen.style.opacity = '0';
                welcomeScreen.style.transition = 'opacity 0.5s ease-out';
                
                // Pré-seleciona a área do coordenador
                areaFilterSelect.value = user.area;
                // Dispara o evento 'change' para popular o seletor de professores
                setTodayDate();
                areaFilterSelect.dispatchEvent(new Event('change'));

                setTimeout(() => {
                    welcomeScreen.classList.add('hidden');
                    mainApp.style.opacity = '1';
                }, 500);

            }, 2000); // Duração da tela de boas-vindas reduzida para 2 segundos

        } else {
            // Login falhou
            loginError.classList.remove('hidden');
            loginForm.classList.add('animate-shake'); // Adiciona animação de "tremor"
            setTimeout(() => loginForm.classList.remove('animate-shake'), 500);
        }
    });
    // --- FIM DA LÓGICA DE LOGIN ---

    // --- LÓGICA DO LOG DE ATIVIDADES ---
    const logActivity = (action, details) => {
        if (!currentUser) return; // Não registra se ninguém estiver logado

        if (!appState.activityLog) {
            appState.activityLog = [];
        }
        appState.activityLog.unshift({ // Adiciona no início do array
            user: currentUser.name,
            action: action,
            details: details,
            timestamp: new Date().toISOString()
        });
    };
    // Lista de professores a serem ignorados nas sugestões (ex: licença médica)
    const excludedTeachers = ['Gilmar', 'Marinalva'];

    // --- Lógica do Modal de Configurações ---
    const renderSettingsModal = () => {
        // Renderiza Dias de Área
        areaDaysForm.innerHTML = '';
        Object.entries(teacherScheduleData.diasDeArea).sort().forEach(([area, day]) => {
            areaDaysForm.innerHTML += `
                <div class="area-day-item flex items-center justify-between" data-area="${area}">
                    <label class="font-medium text-slate-600">${area}</label>
                    <select class="w-40 p-1 border border-slate-300 rounded-md">
                        <option value="Segunda" ${day === 'Segunda' ? 'selected' : ''}>Segunda</option>
                        <option value="Terça" ${day === 'Terça' ? 'selected' : ''}>Terça</option>
                        <option value="Quarta" ${day === 'Quarta' ? 'selected' : ''}>Quarta</option>
                        <option value="Quinta" ${day === 'Quinta' ? 'selected' : ''}>Quinta</option>
                        <option value="Sexta" ${day === 'Sexta' ? 'selected' : ''}>Sexta</option>
                    </select>
                </div>
            `;
        });

        // Renderiza Intervalos Fixos
        renderIntervals();
    };

    const renderIntervals = () => {
        fixedIntervalsForm.innerHTML = '';
        teacherScheduleData.intervalosFixos.forEach((interval, index) => {
            addIntervalToForm(interval.inicio, interval.fim);
        });
    };

    const addIntervalToForm = (start = '00:00', end = '00:00') => {
        const intervalItem = document.createElement('div');
        intervalItem.className = 'interval-item flex items-center justify-between gap-4 p-2 rounded-lg';
        intervalItem.innerHTML = `
            <div class="flex items-center gap-2">
                <input type="time" name="start" value="${start}" class="w-28 p-1 border border-slate-300 rounded-md">
                <span>até</span>
                <input type="time" name="end" value="${end}" class="w-28 p-1 border border-slate-300 rounded-md">
            </div>
            <button class="remove-interval-btn text-red-500 hover:text-red-700 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" /></svg>
            </button>
        `;
        fixedIntervalsForm.appendChild(intervalItem);
        intervalItem.querySelector('.remove-interval-btn').addEventListener('click', () => {
            intervalItem.remove();
        });
    };

    openSettingsBtn.addEventListener('click', () => {
        renderSettingsModal();
        settingsModal.setAttribute('aria-hidden', 'false');
        settingsModal.classList.remove('hidden');
    });

    const closeModal = () => {
        settingsModal.setAttribute('aria-hidden', 'true');
        // Espera a animação de saída terminar antes de esconder
        setTimeout(() => settingsModal.classList.add('hidden'), 300);
    };

    closeSettingsBtn.addEventListener('click', closeModal);
    settingsOverlay.addEventListener('click', closeModal);
    addIntervalBtn.addEventListener('click', () => addIntervalToForm());
    saveSettingsBtn.addEventListener('click', () => {
        saveLocalSettings();
        closeModal();
        alert('Configurações salvas com sucesso!');
    });

    resetSettingsBtn.addEventListener('click', () => {
        if (confirm('Tem certeza de que deseja redefinir todas as configurações para os valores padrão? Esta ação não pode ser desfeita.')) {
            localStorage.removeItem('diasDeArea');
            localStorage.removeItem('intervalosFixos');
            
            // Recarrega os valores padrão no estado da aplicação
            loadLocalSettings();
            renderSettingsModal();
        }
    });

    const getCourse = (turma) => {
        if (!turma) return null;
        const match = turma.match(/\d[º°]?\s?([A-Z]{2,3})/);
        return match ? match[1] : null;
    };

    // --- Lógica do Modal da Grade Horária ---
    const populateScheduleAreaFilter = () => {
        scheduleAreaFilter.innerHTML = '<option value="all">Filtrar por todas as áreas</option>';
        const areas = [...new Set(teacherScheduleData.professores.map(p => p.area))].sort();
        areas.forEach(area => {
            if (area !== 'Não definida') {
                const option = document.createElement('option');
                option.value = area;
                option.textContent = area;
                scheduleAreaFilter.appendChild(option);
            }
        });
    };

    const renderMasterSchedule = (filters = { searchTerm: '', area: 'all', period: 'all' }, highlightSlot = null) => {
        // Calcula a contagem de substituições para cada professor na sessão atual
        const substitutionCounts = Object.values(appState.confirmedSubstitutions).reduce((acc, teacherName) => {
            if (teacherName) {
                acc[teacherName] = (acc[teacherName] || 0) + 1;
            }
            return acc;
        }, {});


        const container = document.getElementById('schedule-grid-container');
        const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
        const allTimeSlots = [
            '07:30', '08:20', '09:30', '10:20', '11:10', 
            '13:20', '14:10', '15:20', '16:10'
        ];

        // Filtra os horários com base no período selecionado
        let timeSlotsToDisplay = allTimeSlots;
        if (filters.period === 'morning') {
            timeSlotsToDisplay = allTimeSlots.filter(slot => parseTimeToMinutes(slot) < parseTimeToMinutes('12:00'));
        } else if (filters.period === 'afternoon') {
            timeSlotsToDisplay = allTimeSlots.filter(slot => parseTimeToMinutes(slot) >= parseTimeToMinutes('12:00'));
        }

        let teachersToDisplay = teacherScheduleData.professores;
        if (filters.searchTerm) {
            teachersToDisplay = teachersToDisplay.filter(p => p.nome.toLowerCase().includes(filters.searchTerm.toLowerCase()));
        }
        if (filters.area && filters.area !== 'all') {
            teachersToDisplay = teachersToDisplay.filter(p => p.area === filters.area);
        }

        let tableHtml = '<table class="schedule-table"><thead><tr><th>Horário</th>';
        // Adiciona a classe de destaque no cabeçalho do dia atual
        const currentDay = appState.currentDay;
        days.forEach(day => {
            const isCurrentDay = day === currentDay;
            tableHtml += `<th class="${isCurrentDay ? 'current-day-column' : ''}">${day}</th>`;
        });
        tableHtml += '</tr></thead><tbody>';

        timeSlotsToDisplay.forEach(slot => {
            tableHtml += `<tr><td><strong>${slot}</strong></td>`;
            days.forEach(day => {
                const isCurrentDayColumn = day === currentDay;
                const cellId = `${day}-${slot}`;
                const isHighlight = highlightSlot && highlightSlot.day === day && highlightSlot.time === slot;

                const cellContent = teachersToDisplay.map(prof => {
                    const classInSlot = prof.horarios.find(h => h.dia === day && h.inicio === slot);
                    if (classInSlot) {
                        const subCount = substitutionCounts[prof.nome] || 0;
                        const areaColorClass = getAreaColor(prof.area);
                        return `
                            <div class="schedule-entry">
                                <div class="flex items-center">
                                    <strong>${prof.nome}</strong>
                                    ${subCount > 0 ? `<span class="substitution-count-badge">${subCount}</span>` : ''}
                                </div>
                                <small>${classInSlot.turma}</small>
                                <span class="mt-1 text-xs font-semibold px-1.5 py-0.5 rounded-full inline-block ${areaColorClass}">${prof.area}</span>
                            </div>
                        `;
                    }
                    return '';
                }).join('');
                // Constrói as classes da célula
                const cellClasses = [];
                if (isHighlight) cellClasses.push('highlight-slot');
                if (isCurrentDayColumn) cellClasses.push('current-day-column');
                tableHtml += `<td data-cell-id="${cellId}" class="${cellClasses.join(' ')}">${cellContent || ''}</td>`;
            });
            tableHtml += '</tr>';

            // Adiciona linha de intervalo visualmente
            if (slot === '08:20' || slot === '11:10' || slot === '14:10') {
                 tableHtml += `
                    <tr class="bg-slate-100">
                        <td colspan="${days.length + 1}" class="text-center text-xs font-semibold text-slate-500 py-1">
                            ${slot === '11:10' ? 'ALMOÇO' : 'INTERVALO'}
                        </td>
                    </tr>
                `;
            }
        });

        tableHtml += '</tbody></table>';
        container.innerHTML = tableHtml;
    };

    const updateScheduleView = (highlightSlot = null) => {
        const filters = {
            searchTerm: scheduleSearchInput.value,
            area: scheduleAreaFilter.value,
            period: schedulePeriodFilter.value
        };
        renderMasterSchedule(filters, highlightSlot);
    };

    openScheduleBtn_elem.addEventListener('click', () => {
        populateScheduleAreaFilter();
        // Limpa filtros e renderiza a grade completa ao abrir pelo botão principal
        scheduleSearchInput.value = '';
        scheduleAreaFilter.value = 'all';
        schedulePeriodFilter.value = 'all';
        updateScheduleView();
        scheduleModal.setAttribute('aria-hidden', 'false');
        scheduleModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    const closeScheduleModal = () => {
        scheduleModal.setAttribute('aria-hidden', 'true');
        setTimeout(() => scheduleModal.classList.add('hidden'), 300);
        document.body.style.overflow = ''; // Restaura o scroll
    };

    closeScheduleBtn_elem.addEventListener('click', closeScheduleModal);
    scheduleOverlay_elem.addEventListener('click', closeScheduleModal);
    scheduleSearchInput.addEventListener('input', updateScheduleView);
    schedulePeriodFilter.addEventListener('change', updateScheduleView);
    printScheduleBtn.addEventListener('click', () => window.print());
    scheduleAreaFilter.addEventListener('change', updateScheduleView);

    // --- Lógica de Salvar/Carregar Sessão ---
    const saveSession = () => {
        const sessionData = {
            version: '1.0',
            savedAt: new Date().toISOString(),
            state: {
                confirmedSubstitutions: appState.confirmedSubstitutions,
                ignoredClasses: appState.ignoredClasses,
                absentTeacherNames: appState.currentAbsentTeachers.map(p => p.nome),
                day: appState.currentDay,
                period: periodSelect.value,
                area: areaFilterSelect.value,
                planningMode: planningModeCheckbox.checked,
                noTccWeek: noTccWeekCheckbox.checked,
                activityLog: appState.activityLog || []
            }
        };

        const blob = new Blob([JSON.stringify(sessionData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sessao_substituicao_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const loadSession = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const sessionData = JSON.parse(e.target.result);
                const state = sessionData.state;

                // Restaurar estado e UI
                areaFilterSelect.value = state.area;
                selectedTeachers = new Set(state.absentTeacherNames);
                dateSelect.value = state.dateValue || new Date().toISOString().split('T')[0]; // Usa a data salva ou hoje
                periodSelect.value = state.period;
                noTccWeekCheckbox.checked = state.noTccWeek;
                planningModeCheckbox.checked = state.planningMode || false;
                appState.confirmedSubstitutions = state.confirmedSubstitutions || {};
                appState.ignoredClasses = state.ignoredClasses || {};
                appState.activityLog = state.activityLog || [];
                

                // Atualizar UI e renderizar
                populateTeacherSelect(state.area);
                updateMultiSelectDisplay();
                findBtn.click(); // Simula o clique para re-renderizar com os dados carregados

            } catch (error) {
                console.error("Erro ao carregar o arquivo de sessão:", error);
                alert("Arquivo de sessão inválido ou corrompido.");
            }
        };
        reader.readAsText(file);
        
        // Limpa o valor do input para permitir carregar o mesmo arquivo novamente
        event.target.value = '';
    };

    loadSessionInput.addEventListener('change', loadSession);

    // --- Lógica do Filtro de Área ---
    const populateAreaFilter = () => {
        const areas = [...new Set(teacherScheduleData.professores.map(p => p.area))].sort();
        areas.forEach(area => {
            if (area !== 'Não definida') {
                const option = document.createElement('option');
                option.value = area;
                option.textContent = area;
                areaFilterSelect.appendChild(option);
            }
        });
    };

    // --- Lógica do Multi-Select Personalizado ---
    const updateMultiSelectDisplay = () => {
        if (selectedTeachers.size === 0) {
            multiSelectDisplay.innerHTML = `<span class="text-slate-500">Selecione o(s) professor(es)</span>`;
        } else {
            multiSelectDisplay.innerHTML = '';
            selectedTeachers.forEach(teacherName => {
                const tag = document.createElement('span');
                tag.className = 'selected-teacher-tag text-sm font-medium mr-1 mb-1 px-2.5 py-0.5';
                tag.textContent = teacherName;
                multiSelectDisplay.appendChild(tag);
            });
        }
    };

    const populateTeacherSelect = (selectedArea = 'all') => {
        multiSelectDropdown.innerHTML = ''; // Limpa as opções
        
        let teachersToShow = teacherScheduleData.professores;
        if (selectedArea !== 'all') {
            teachersToShow = teachersToShow.filter(p => p.area === selectedArea);
        }

        multiSelectButton.classList.remove('bg-slate-100', 'cursor-not-allowed', 'text-slate-500');
        multiSelectButton.classList.add('bg-white');
        multiSelectButton.setAttribute('aria-disabled', 'false');
        updateMultiSelectDisplay();
        const sortedTeachers = [...teachersToShow].sort((a, b) => a.nome.localeCompare(b.nome));
        sortedTeachers.forEach(teacher => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'multiselect-option relative cursor-default select-none py-2 pl-10 pr-4';
            optionDiv.innerHTML = `
                <span class="font-normal block truncate">${teacher.nome}</span>
                ${selectedTeachers.has(teacher.nome) ? `
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.142 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.142z" clip-rule="evenodd" /></svg>
                </span>` : ''}
            `;
            optionDiv.addEventListener('click', () => {
                if (selectedTeachers.has(teacher.nome)) {
                    selectedTeachers.delete(teacher.nome);
                } else {
                    selectedTeachers.add(teacher.nome);
                }
                // Re-render para atualizar a marca de seleção
                populateTeacherSelect(areaFilterSelect.value);
                updateMultiSelectDisplay();
            });
            multiSelectDropdown.appendChild(optionDiv);
        });
    };

    areaFilterSelect.addEventListener('change', (e) => {
        populateTeacherSelect(e.target.value);
    });

    multiSelectButton.addEventListener('click', () => {
        if (multiSelectButton.getAttribute('aria-disabled') === 'true') return;
        multiSelectDropdown.classList.toggle('hidden');
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener('click', (e) => {
        if (!multiSelectContainer.contains(e.target)) {
            multiSelectDropdown.classList.add('hidden');
        }
    });

    populateAreaFilter();
    populateTeacherSelect(); // Popula com todos os professores inicialmente e habilita o seletor

    // Lógica principal ao clicar no botão
    findBtn.addEventListener('click', () => {
        const absentTeacherNames = Array.from(selectedTeachers);
        const selectedDate = dateSelect.value;

        if (absentTeacherNames.length === 0 || !selectedDate) {
            resultsArea.innerHTML = `<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg shadow-sm" role="alert"><p class="font-bold">Atenção</p><p>Por favor, selecione o(s) professor(es) e a data da ausência para continuar.</p></div>`;
            return;
        }

        // Converte a data selecionada para o dia da semana correspondente
        const date = new Date(selectedDate + 'T00:00:00'); // Adiciona T00:00:00 para evitar problemas de fuso horário
        const dayOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][date.getDay()];

        // **NOVO**: Verifica e exibe alertas de inconsistência de dados antes de prosseguir
        const scheduleConflicts = checkForScheduleConflicts();
        resultsArea.innerHTML = displayConflictWarning(scheduleConflicts);

        // Limpa o estado de confirmações a cada nova busca
        resetAppState();

        actionsContainer.innerHTML = '';
        exportContainer.innerHTML = '';
        loadingSpinner.classList.remove('hidden');

        setTimeout(() => {
            const absentTeachers = teacherScheduleData.professores.filter(p => absentTeacherNames.includes(p.nome));
            appState.currentAbsentTeachers = absentTeachers;
            appState.currentDay = dayOfWeek;
            appState.currentPeriod = periodSelect.value; // Armazena o período no estado

            let allClasses = absentTeachers.flatMap(teacher => 
                (teacher.horarios || [])
                    .filter(h => h.dia === dayOfWeek)
                    .map(h => ({ ...h, teacherName: teacher.nome, teacherArea: teacher.area })) // Adiciona nome do professor à aula
            );

            // Filtrar por período (manhã/tarde)
            const period = appState.currentPeriod;
            if (period === 'morning') {
                allClasses = allClasses.filter(c => parseTimeToMinutes(c.inicio) < parseTimeToMinutes('12:00'));
            } else if (period === 'afternoon') {
                allClasses = allClasses.filter(c => parseTimeToMinutes(c.inicio) >= parseTimeToMinutes('12:00'));
            }

        appState.currentClasses = allClasses; // Salva as aulas filtradas no estado
            if (allClasses.length === 0) {
                displayNoClassesMessage(absentTeacherNames.join(', '), dayOfWeek);
            } else {
                displayResults(allClasses, dayOfWeek);
            }
             loadingSpinner.classList.add('hidden');
        }, 500); // Simula um tempo de processamento
    });

    /**
     * Verifica se há professores com aulas cadastradas em seus respectivos dias de área (folga).
     * @returns {Array} Uma lista de objetos, cada um representando um conflito encontrado.
     */
    const checkForScheduleConflicts = () => {
        const conflicts = [];
        teacherScheduleData.professores.forEach(prof => {
            const areaDayOff = teacherScheduleData.diasDeArea[prof.area];
            if (areaDayOff) {
                const hasClassOnDayOff = (prof.horarios || []).some(h => h.dia === areaDayOff);
                if (hasClassOnDayOff) {
                    conflicts.push({
                        teacherName: prof.nome,
                        area: prof.area,
                        conflictDay: areaDayOff
                    });
                }
            }
        });
        return conflicts;
    };

    /**
     * Gera e exibe um alerta na interface do usuário sobre conflitos de horário encontrados.
     * @param {Array} conflicts - A lista de conflitos retornada por `checkForScheduleConflicts`.
     */
    const displayConflictWarning = (conflicts) => {
        if (conflicts.length === 0) return ''; // Retorna string vazia se não houver conflitos
        const conflictListHtml = conflicts.map(c => `<li><strong>${c.teacherName}</strong> (Área: ${c.area}) possui aulas na <strong>${c.conflictDay}</strong>, seu dia de folga.</li>`).join('');
        return `
            <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-800 p-4 rounded-lg shadow-sm mb-6" role="alert">
                <p class="font-bold">⚠️ Aviso de Inconsistência nos Dados</p>
                <p class="mt-2 mb-3 text-sm">Os seguintes professores têm aulas cadastradas em seus dias de folga, o que pode indicar um erro na grade horária. A análise prosseguirá, mas recomenda-se a verificação dos dados de origem:</p>
                <ul class="list-disc list-inside text-sm space-y-1">${conflictListHtml}</ul>
            </div>`;
    };

    // --- Lógica do Botão Limpar Tudo ---
    const clearAll = () => {
        // Reseta os filtros para o padrão
        areaFilterSelect.value = currentUser ? currentUser.area : 'all';
        setTodayDate();
        periodSelect.value = 'all';
        noTccWeekCheckbox.checked = false;
        planningModeCheckbox.checked = false;

        // Limpa a seleção de professores
        selectedTeachers.clear();
        populateTeacherSelect(areaFilterSelect.value);
        updateMultiSelectDisplay();

        // Limpa o estado de confirmações a cada nova busca
        resetAppState();

        resultsArea.innerHTML = '';
        actionsContainer.innerHTML = '';
        exportContainer.innerHTML = '';
        document.getElementById('trash-area').innerHTML = '';
        document.getElementById('activity-log-area').innerHTML = '';
    };

    document.getElementById('clear-all-btn').addEventListener('click', clearAll);

    const findOriginalClass = (classId) => {
        if (!classId) return null;
        const [_day, start, _end, ...turmaParts] = classId.split('_');
        const turmaSanitized = turmaParts.join('_');
        return teacherScheduleData.professores
            .flatMap(p => p.horarios.map(h => ({ ...h, teacherName: p.nome })))
            .find(h => h.dia === _day && h.inicio === start && h.turma.replace(/\s|\//g, '-') === turmaSanitized);
    };

    // Delegação de eventos para todos os botões de ação
    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('button'); // Garante que estamos pegando o botão
        if (!target) return;

        const classId = target.dataset.classId;
        const substituteName = target.dataset.substituteName;

        if (target.matches('.confirm-btn')) {
            const cardElement = target.closest('.card');
            
            // Adiciona a classe de animação ao card
            cardElement.style.animation = 'confirm-flash 0.6s ease-out';

            // Após a animação, atualiza o estado e renderiza novamente
            setTimeout(() => {
                appState.confirmedSubstitutions[classId] = substituteName;
                const originalClass = findOriginalClass(classId);
                if (originalClass) {
                    logActivity('confirm_substitution', {
                        substitute: substituteName,
                        originalTeacher: originalClass.teacherName,
                        classInfo: `${originalClass.turma} (${originalClass.inicio}-${originalClass.fim})`
                    });
                }
                render(); // Re-renderiza a UI com o card no estado "confirmado"
            }, 600); // O tempo deve ser igual à duração da animação
        }

        if (target.matches('.undo-btn')) {
            const undoneSubstitute = appState.confirmedSubstitutions[classId];
            delete appState.confirmedSubstitutions[classId];
            const originalClass = findOriginalClass(classId);
            if (originalClass) {
                logActivity('undo_substitution', {
                    substitute: undoneSubstitute,
                    originalTeacher: originalClass.teacherName,
                    classInfo: `${originalClass.turma} (${originalClass.inicio}-${originalClass.fim})`
                });
            }
            render();
        }

        if (target.matches('.ignore-btn')) {
            appState.ignoredClasses[classId] = true;
            render();
        }

        if (target.matches('.restore-btn')) {
            delete appState.ignoredClasses[classId];
            render();
        }
    });

    const autoConfirmAll = () => {
        // Encontra todas as aulas que ainda não foram confirmadas ou ignoradas
        const classesToAutoConfirm = document.querySelectorAll('.card:not(.border-green-500):not(.opacity-60)');

        classesToAutoConfirm.forEach(cardElement => {
            const classId = cardElement.querySelector('.confirm-btn')?.dataset.classId;
            if (!classId) return; // Pula se não for um card de sugestão

            const classSlot = findOriginalClass(classId);
            if (!classSlot || isDuringBreak(classSlot)) return;

            // Encontra o melhor candidato (o primeiro da lista)
            const candidates = findAvailableTeachers(classSlot, appState.currentDay, appState.currentAbsentTeachers, appState.confirmedSubstitutions);
            if (candidates.length > 0) {
                const bestCandidate = candidates[0];
                appState.confirmedSubstitutions[classId] = bestCandidate.nome;
                logActivity('confirm_substitution', {
                    substitute: bestCandidate.nome,
                    originalTeacher: classSlot.teacherName,
                    classInfo: `${classSlot.turma} (${classSlot.inicio}-${classSlot.fim})`,
                });
            }
        });

        // Re-renderiza apenas os resultados, sem recarregar tudo
        displayResults(appState.currentClasses, appState.currentDay);
    };

    const render = () => {
        const absentTeacherNames = Array.from(selectedTeachers);
        const selectedDate = dateSelect.value;
        const date = new Date(selectedDate + 'T00:00:00');
        const dayOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][date.getDay()];
        appState.currentAbsentTeachers = teacherScheduleData.professores.filter(p => absentTeacherNames.includes(p.nome));
        appState.currentDay = dayOfWeek;
        appState.currentPeriod = periodSelect.value; // Garante que o período seja salvo no estado
        
        let allClasses = appState.currentAbsentTeachers.flatMap(teacher => 
            (teacher.horarios || [])
                .filter(h => h.dia === dayOfWeek)
                .map(h => ({ ...h, teacherName: teacher.nome, teacherArea: teacher.area }))
        );
        appState.currentClasses = allClasses; // Armazena as aulas atuais no estado

        // Aplica o filtro de período que agora está salvo no estado
        const period = appState.currentPeriod;
        if (period === 'morning') {
            allClasses = allClasses.filter(c => parseTimeToMinutes(c.inicio) < parseTimeToMinutes('12:00'));
        } else if (period === 'afternoon') {
            allClasses = allClasses.filter(c => parseTimeToMinutes(c.inicio) >= parseTimeToMinutes('12:00'));
        }
        displayResults(allClasses, dayOfWeek);
    };

    /**
     * Pré-calcula e armazena em cache os horários livres de todos os professores para um determinado dia.
     * Isso evita a necessidade de recalcular a disponibilidade para cada aula a ser coberta.
     * @param {string} dayOfWeek - O dia da semana para o qual a disponibilidade será calculada.
     * @param {string[]} absentTeacherNames - Uma lista de nomes de professores ausentes a serem ignorados.
     * @returns {Map<string, Set<string>>} Um mapa onde a chave é o nome do professor e o valor é um Set de seus horários livres (ex: "07:30").
     */
    const precomputeAvailability = (dayOfWeek, absentTeacherNames) => {
        const availabilityCache = new Map();
        const allTimeSlots = new Set(['07:30', '08:20', '09:30', '10:20', '11:10', '13:20', '14:10', '15:20', '16:10']);

        teacherScheduleData.professores.forEach(prof => {
            // Pula professores ausentes, excluídos ou que estão no seu dia de área
            if (absentTeacherNames.includes(prof.nome) || 
                excludedTeachers.includes(prof.nome) ||
                teacherScheduleData.diasDeArea[prof.area] === dayOfWeek) {
                return;
            }

            const occupiedSlots = new Set();
            (prof.horarios || []).forEach(schedule => {
                if (schedule.dia === dayOfWeek) {
                    occupiedSlots.add(schedule.inicio);
                }
            });

            const freeSlots = new Set();
            allTimeSlots.forEach(slot => {
                if (!occupiedSlots.has(slot) && !isDuringBreak({ inicio: slot, fim: calculateEndTime(slot) })) {
                    freeSlots.add(slot);
                }
            });

            if (freeSlots.size > 0) {
                availabilityCache.set(prof.nome, freeSlots);
            }
        });

        return availabilityCache;
    };

    const findAvailableTeachers = (classToCover, dayOfWeek, absentTeachers, currentConfirmations) => {
        const candidates = [];
        const absentTeacherNames = absentTeachers.map(t => t.nome);
        const availabilityCache = precomputeAvailability(dayOfWeek, absentTeacherNames);

        availabilityCache.forEach((freeSlots, substituteName) => {
            // 1. Verifica se o professor está livre no horário da aula a ser coberta
            if (!freeSlots.has(classToCover.inicio)) return;

            const potentialSubstitute = teacherScheduleData.professores.find(p => p.nome === substituteName);
            if (!potentialSubstitute) return;
            
            // Verificar se o modo de planejamento está ativo
            const isPlanningMode = planningModeCheckbox.checked;
            const substitutionsCount = Object.values(currentConfirmations).filter(name => name === potentialSubstitute.nome).length;
            let remainingSubstitutions = Infinity; // Padrão para infinito se não houver limite
            let currentLimit = Infinity;

            // Se não estiver em modo de planejamento, verifica o limite de substituições
            if (!isPlanningMode) {
                const isNoTccWeek = noTccWeekCheckbox.checked;
                const baseLimit = substitutionLimits[potentialSubstitute.nome];

                if (baseLimit !== undefined) {
                    currentLimit = isNoTccWeek ? baseLimit + 1 : baseLimit;
                    // Se o limite já foi atingido, não sugere o professor
                    if (substitutionsCount >= currentLimit) return;
                    remainingSubstitutions = currentLimit - substitutionsCount;
                }
            }

            // 2. Verificar se o substituto já foi confirmado para um horário conflitante
            // Esta verificação é importante porque o cache de disponibilidade não conhece as confirmações atuais.
            const isConfirmedInConflict = Object.entries(currentConfirmations).some(([confirmedClassId, confirmedSubstituteName]) => {
                if (potentialSubstitute.nome === confirmedSubstituteName) {
                    const [_day, start, end] = confirmedClassId.split('_');
                    const confirmedSlot = { inicio: start, fim: end };
                    return isTimeOverlap(classToCover, confirmedSlot);
                }
                return false;
            });
            if (isConfirmedInConflict) return;

            // 3. Calcular pontuação e gerar justificativa com base nos critérios
            const scores = {
                workload: 0, // NOVO: Para balancear a carga de trabalho
                sameCourse: 0, // Novo: Prioridade para quem conhece o curso (ADM, DS, etc.)
                sameGrade: 0, // Novo: Prioridade para quem conhece a série
                sameTurma: 0, // Prioridade alta para quem já conhece a turma
                sameArea: 0,  // Prioridade baixa, como solicitado
            };
            const justifications = []; // Começa vazio, será preenchido
            scores.workload = -30 * substitutionsCount;
            
            if (substitutionsCount > 0) {
                justifications.push(`Já possui ${substitutionsCount} substituiç${substitutionsCount > 1 ? 'ões' : 'ão'}`);
            }

            const gradeToCover = getGrade(classToCover.turma);
            if (gradeToCover && potentialSubstitute.horarios.some(h => getGrade(h.turma) === gradeToCover)) {
                scores.sameGrade = 25; // Pontuação intermediária por conhecer a série
                justifications.push(`Leciona para o ${gradeToCover} ano`);
            }

            const courseToCover = getCourse(classToCover.turma);
            if (courseToCover && potentialSubstitute.horarios.some(h => getCourse(h.turma) === courseToCover)) {
                scores.sameCourse = 35; // Pontuação alta por conhecer o curso
                justifications.push(`Leciona para o curso de ${courseToCover}`);
            }

            const hasTaughtTurma = potentialSubstitute.horarios.some(schedule => schedule.turma === classToCover.turma);
            if (hasTaughtTurma) {
                scores.sameTurma = 150; // Pontuação MUITO alta por conhecer a turma
                justifications.push('<strong>Já leciona para esta turma</strong>');
            }
            
            // Encontra a área do professor da aula a ser coberta
            const originalTeacherArea = absentTeachers.find(t => t.nome === classToCover.teacherName)?.area;
            if (originalTeacherArea && potentialSubstitute.area === originalTeacherArea) {
                scores.sameArea = 5; // Pontuação muito baixa, apenas como desempate
                justifications.push(`Da mesma área: <strong>${potentialSubstitute.area}</strong>.`);
            }

            // 4. Encontrar a próxima aula do professor no mesmo dia para dar mais contexto
            const substituteClassesToday = (potentialSubstitute.horarios || [])
                .filter(h => h.dia === dayOfWeek)
                .sort((a, b) => parseTimeToMinutes(a.inicio) - parseTimeToMinutes(b.inicio));

            const nextClass = substituteClassesToday.find(h => parseTimeToMinutes(h.inicio) > parseTimeToMinutes(classToCover.inicio));

            if (nextClass) {
                justifications.push(`Próxima aula às ${nextClass.inicio}.`);
            } else if (substituteClassesToday.length > 0) {
                // Tem aulas no dia, mas nenhuma depois desta
                justifications.push('Última aula do dia seria esta.');
            } else {
                justifications.push('Sem outras aulas neste dia.');
            }

            const totalScore = Object.values(scores).reduce((sum, val) => sum + val, 0);

            candidates.push({ 
                ...potentialSubstitute, 
                score: totalScore, 
                justification: justifications.join(' | '),
                substitutionsCount: substitutionsCount,
                remainingSubstitutions: remainingSubstitutions, // Adiciona o número de substituições restantes
                limit: currentLimit // Adiciona o limite total
            });
        });
        // Ordena por pontuação (maior primeiro) e depois por nome
        return candidates.sort((a, b) => b.score - a.score || a.nome.localeCompare(b.nome));
    };

    const displayNoClassesMessage = (teacherNames, day) => {
        resultsArea.innerHTML = `
            <div class="bg-sky-100 border-l-4 border-sky-500 text-sky-800 p-4 rounded-lg shadow-sm" role="alert">
                <p class="font-bold">Nenhuma aula encontrada</p>
                <p>${teacherNames} não possui aulas cadastradas na <strong>${day}</strong> para o período selecionado.</p>
            </div>`;
    };

    const displayResults = (classes, day) => {
        const absentTeacherNames = [...new Set(classes.map(c => c.teacherName))];
        let html = `<h2 class="text-2xl font-bold mb-6 text-slate-600">Aulas de ${absentTeacherNames.join(', ')} (${day})</h2>`;
        let trashHtml = '';
        const actionsContainer = document.getElementById('actions-container');
        const exportContainer = document.getElementById('export-container');
        const trashArea = document.getElementById('trash-area');
        const absentTeachers = teacherScheduleData.professores.filter(p => absentTeacherNames.includes(p.nome));
        const activityLogArea = document.getElementById('activity-log-area');
        const activityLogContent = document.getElementById('activity-log-content');
        const sortedClasses = classes.sort((a,b) => parseTimeToMinutes(a.inicio) - parseTimeToMinutes(b.inicio));
        
        resultsArea.innerHTML = html; // Limpa e prepara para adicionar os cards

        sortedClasses.forEach((classSlot) => {
            const classId = `${day}_${classSlot.inicio}_${classSlot.fim}_${classSlot.turma.replace(/\s|\//g, '-')}`;
            if (!appState.ignoredClasses[classId]) {
                html += generateClassCard(classSlot, day, absentTeachers);
            }
        });
        resultsArea.innerHTML = html;

        // Renderiza a lixeira se houver itens ignorados
        if (trashHtml) {
            trashArea.innerHTML = `
                <div class="border-t pt-8 mt-8">
                    <h3 class="text-xl font-bold text-slate-600 mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        Aulas Ignoradas
                    </h3>
                    <div class="space-y-4">
                        ${trashHtml}
                    </div>
                </div>
            `;
        } else {
            trashArea.innerHTML = '';
        }

        // Renderiza a lixeira se houver itens ignorados
        Object.keys(appState.ignoredClasses).forEach(classId => {
            const classSlot = findOriginalClass(classId);
            if (classSlot) trashHtml += generateTrashCard(classSlot, day);
        });

        // Renderiza o Log de Atividades
        if (appState.activityLog && appState.activityLog.length > 0) {
            document.getElementById('activity-log-title').classList.remove('hidden');
            exportLogBtn.classList.remove('hidden');
            activityLogContent.innerHTML = generateActivityLogHtml();
        }

        // Adiciona o botão de auto-confirmar se houver aulas que precisam de substituto
        const needsSubstitution = sortedClasses.some(c => !isDuringBreak(c) && !appState.ignoredClasses[`${day}_${c.inicio}_${c.fim}_${c.turma.replace(/\s|\//g, '-')}`] && !appState.confirmedSubstitutions[`${day}_${c.inicio}_${c.fim}_${c.turma.replace(/\s|\//g, '-')}`]);
        if (needsSubstitution) {
            actionsContainer.innerHTML = `
                <button id="auto-confirm-btn" class="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-all duration-150 ease-in-out flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    <span>Auto-Confirmar Melhores Opções</span>
                </button>
            `;
            document.getElementById('auto-confirm-btn').addEventListener('click', autoConfirmAll);
        } else {
            actionsContainer.innerHTML = '';
        }

        // Adiciona botões de exportação se houver substituições confirmadas
        if (Object.keys(appState.confirmedSubstitutions).length > 0) {
            exportContainer.innerHTML = ``; // Limpa para reconstruir

            const pngBtn = document.createElement('button');
            pngBtn.id = 'generate-png-btn';
            pngBtn.className = 'bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition-all flex items-center gap-2';
            pngBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" /></svg> <span>Gerar Imagem (PNG)</span>`;
            pngBtn.addEventListener('click', generateImageSummary);
            
            const pdfBtn = document.createElement('button');
            pdfBtn.id = 'generate-pdf-btn';
            pdfBtn.className = 'bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-slate-700 transition-all flex items-center gap-2';
            pdfBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd" /></svg> <span>Gerar PDF</span>`;
            pdfBtn.addEventListener('click', generatePDFSummary);

            const saveBtn = document.createElement('button');
            saveBtn.id = 'save-session-btn';
            saveBtn.className = 'bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-all flex items-center gap-2';
            saveBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4zm3 2a1 1 0 00-1 1v2a1 1 0 102 0V7a1 1 0 00-1-1z" /></svg> <span>Salvar</span>`;
            saveBtn.addEventListener('click', saveSession);

            exportContainer.append(pngBtn, pdfBtn, saveBtn);
        } else {
            exportContainer.innerHTML = '';
        }
    };

    const generateImageSummary = async () => {
        const renderArea = document.getElementById('image-summary-render-area');
        const summaryHtml = generateSummaryHtmlForExport();
        renderArea.innerHTML = summaryHtml;

        try {
            const canvas = await html2canvas(renderArea, { scale: 2, useCORS: true });
            const imageUrl = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = imageUrl;
            a.download = `Resumo_Substituicoes_${new Date().toISOString().slice(0, 10)}.png`;
            a.click();
        } catch (error) {
            console.error('Erro ao gerar a imagem:', error);
            alert('Ocorreu um erro ao tentar gerar a imagem.');
        } finally {
            renderArea.innerHTML = ''; // Limpa a área de renderização
        }
    };

    const generateSummaryHtmlForExport = () => {
        const absentTeacherNames = appState.currentAbsentTeachers.map(p => p.nome);
        const dayOfWeek = appState.currentDay;
        const dateStr = new Date(dateSelect.value + 'T00:00:00').toLocaleDateString('pt-BR');

        let html = `<div class="summary-image-title">Relatório de Substituições</div>`;
        html += `<div class="summary-image-subtitle">Data: ${dateStr} (${dayOfWeek})</div>`;

        absentTeacherNames.forEach(teacherName => {
            html += `<h3 style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">Ausência: Prof. ${teacherName}</h3>`;
            html += `<table class="summary-image-table"><thead><tr><th>Horário</th><th>Turma</th><th>Substituto</th></tr></thead><tbody>`;

            const substitutionsForTeacher = Object.entries(appState.confirmedSubstitutions)
                .filter(([classId, _]) => findOriginalClass(classId)?.teacherName === teacherName)
                .sort((a, b) => parseTimeToMinutes(a[0].split('_')[1]) - parseTimeToMinutes(b[0].split('_')[1]));

            substitutionsForTeacher.forEach(([classId, substituteName]) => {
                const turma = findOriginalClass(classId)?.turma || 'N/A';
                const [_, start, end] = classId.split('_');
                html += `<tr><td>${start} - ${end}</td><td>${turma}</td><td>${substituteName}</td></tr>`;
            });
            html += `</tbody></table>`;
        });
        return html;
    };

    const generatePDFSummary = async () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
    
        // Função para carregar imagem e converter para Base64
        const loadImageAsBase64 = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    resolve(canvas.toDataURL('image/png'));
                };
                img.onerror = reject;
                img.src = url;
            });
        };
    
        try {
            // Tenta carregar o logo. Se falhar, continua sem ele.
            const logoBase64 = await loadImageAsBase64('logo.png');
            doc.addImage(logoBase64, 'PNG', 14, 15, 30, 15); // (imagem, formato, x, y, largura, altura)
        } catch (e) {
            console.warn("Logo 'logo.png' não encontrado. Gerando PDF sem o logo.");
        }
    
        const absentTeacherNames = appState.currentAbsentTeachers.map(p => p.nome);
        const dayOfWeek = appState.currentDay;
        const date = new Date(dateSelect.value + 'T00:00:00');
        const dateString = date.toLocaleDateString('pt-BR');
        const generationTime = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('Relatório de Substituições', doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
    
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text(`Data da Ausência: ${dateString} (${dayOfWeek})`, 14, 40);
    
        let lastY = 50;
    
        absentTeacherNames.forEach(teacherName => {
            const substitutionsForTeacher = Object.entries(appState.confirmedSubstitutions)
                .filter(([classId, _]) => findOriginalClass(classId)?.teacherName === teacherName)
                .sort((a, b) => parseTimeToMinutes(a[0].split('_')[1]) - parseTimeToMinutes(b[0].split('_')[1]));
    
            if (substitutionsForTeacher.length > 0) {
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.text(`Ausência: Prof. ${teacherName}`, 14, lastY);
                lastY += 7;
    
                const tableData = substitutionsForTeacher.map(([classId, substituteName]) => {
                    const [_day, start, end] = classId.split('_');
                    const turma = findOriginalClass(classId)?.turma || 'N/A';
                    return [`${start} - ${end}`, turma, substituteName];
                });
    
                doc.autoTable({ startY: lastY, head: [['Horário', 'Turma', 'Professor Substituto']], body: tableData, theme: 'striped', headStyles: { fillColor: [79, 70, 229] } });
                lastY = doc.autoTable.previous.finalY + 15;
            }
        });

        // --- INÍCIO DA SEÇÃO DE ASSINATURA ---
        // Adiciona um espaço antes da linha de assinatura
        lastY = doc.autoTable.previous.finalY > lastY ? doc.autoTable.previous.finalY : lastY;
        lastY += 25;

        doc.setDrawColor(150, 150, 150); // Define a cor da linha para cinza
        // Desenha a linha para assinatura (x1, y, x2, y)
        doc.line(70, lastY, 140, lastY);
        doc.setDrawColor(0, 0, 0); // Volta para preto para outras linhas, se houver
        lastY += 5; // Move um pouco para baixo para o texto
        const signatureText = currentUser ? `Prof.(a) ${currentUser.name}` : 'Assinatura do Coordenador(a)';
        doc.setFontSize(10);
        doc.text(signatureText, doc.internal.pageSize.getWidth() / 2, lastY, { align: 'center' });
        // --- FIM DA SEÇÃO DE ASSINATURA ---

        // Rodapé
        const pageCount = doc.internal.getNumberOfPages();
        doc.setFontSize(8);
        doc.text(`Gerado em ${new Date().toLocaleDateString('pt-BR')} às ${generationTime} - Página 1 de ${pageCount}`, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });

        // Salvar o PDF
        doc.save(`Relatorio_Substituicoes_${date.toISOString().slice(0,10)}.pdf`);
    };
    
    const generateClassCard = (classSlot, day, absentTeachers) => {
        // ID único para a aula, considerando a turma para evitar colisões se dois professores tiverem aula no mesmo horário
        const classId = `${day}_${classSlot.inicio}_${classSlot.fim}_${classSlot.turma.replace(/\s|\//g, '-')}`;
        if (isDuringBreak(classSlot)) {
            return `
                <div class="bg-white p-5 rounded-lg shadow-sm mb-6 card card-enter opacity-60 border-l-4 border-yellow-400">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-lg font-semibold text-slate-500">${classSlot.inicio} - ${classSlot.fim} | ${classSlot.turma}</h3>
                        <span class="text-sm font-medium bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Intervalo</span>
                    </div>
                    <p class="text-sm text-slate-500">Este horário coincide com um intervalo fixo. Nenhuma substituição é necessária.</p>
                </div>
            `;
        }

        const confirmedSubstitute = appState.confirmedSubstitutions[classId];
        if (confirmedSubstitute) {
            const substituteDetails = teacherScheduleData.professores.find(p => p.nome === confirmedSubstitute);
            return `
                <div class="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg shadow-sm mb-6 card card-enter">
                    <div class="flex flex-col md:flex-row justify-between md:items-center">
                        <div>
                            <h3 class="text-xl font-bold text-slate-800">${classSlot.inicio} - ${classSlot.fim}</h3>
                            <p class="text-slate-600">${classSlot.turma} <span class="text-slate-500 font-medium">(Aula de Prof. ${classSlot.teacherName})</span></p>
                        </div>
                        <div class="flex items-center gap-4 mt-2 md:mt-0">
                            <p class="font-semibold text-green-800">Confirmado: <strong>${substituteDetails.nome}</strong></p>
                            <button data-class-id="${classId}" class="undo-btn text-sm text-red-500 hover:text-red-700 font-medium">Desfazer</button>
                        </div>
                    </div>
                </div>
            `;
        }
        
        const candidates = findAvailableTeachers(classSlot, day, absentTeachers, appState.confirmedSubstitutions);
        let candidatesHtml = '';

        // Separa os candidatos: os que já dão aula para a turma e os outros
        const bestCandidates = candidates.slice(0, 3); // Mostra os 3 melhores por padrão
        const otherCandidates = candidates.slice(3);

        const renderCandidate = (c, isBestOption = false) => `
            <li class="candidate-item flex flex-col sm:flex-row justify-between sm:items-center p-3 rounded-lg ${isBestOption ? 'border-indigo-500' : ''} transition-colors hover:bg-slate-100/80">
                <div class="w-full sm:w-auto">
                    <div class="flex items-center gap-2 flex-wrap">
                        <p class="font-semibold text-slate-800">${c.nome}</p>
                        ${c.justification.includes('Já leciona para esta turma') ? '<span class="best-option-badge">Mesma Turma</span>' : ''}
                        ${
                            // Adiciona o badge de aviso se o professor estiver a 1 aula do limite
                            !planningModeCheckbox.checked && c.remainingSubstitutions === 1
                            ? `<span class="near-limit-badge px-2 py-0.5 rounded-full">No Limite</span>`
                            : ''
                        }
                    </div>
                    <p class="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-0">
                        ${c.justification}
                        ${!planningModeCheckbox.checked && c.limit !== Infinity ? `(Limite: ${c.substitutionsCount}/${c.limit})` : ''}
                    </p>
                </div>
                <div class="flex items-center gap-3 mt-3 sm:mt-0 self-end sm:self-center">
                    <span class="text-xs font-semibold px-2 py-1 rounded-full ${getAreaColor(c.area)}">${c.area}</span>
                    <button data-teacher-name="${c.nome}" data-class-start-time="${classSlot.inicio}" class="view-schedule-btn action-button text-xs font-semibold py-1 px-3 rounded-full">Ver Horário</button>
                    <button data-class-id="${classId}" data-substitute-name="${c.nome}" class="confirm-btn action-button text-xs font-bold py-1 px-3 rounded-full">Confirmar</button>
                </div>
            </li>`;

        if (candidates.length > 0) {
            // Marca o primeiro candidato como a melhor opção visualmente
            candidatesHtml = renderCandidate(candidates[0], true); 
            candidatesHtml += candidates.slice(1, 3).map(c => renderCandidate(c, false)).join('');

            if (otherCandidates.length > 0) {
                candidatesHtml += `<div class="other-options hidden">${otherCandidates.map(c => renderCandidate(c, false)).join('')}</div>`;
                candidatesHtml += `<button class="show-more-btn text-sm font-semibold text-indigo-600 hover:underline mt-3">Ver mais opções</button>`;
            }
        } else {
            candidatesHtml = `<li class="p-3 text-center text-slate-500">Nenhum professor compatível encontrado.</li>`;
        }

        const isConfirmed = !!appState.confirmedSubstitutions[classId];

        return `
            <div class="bg-white p-5 rounded-lg shadow-sm mb-6 card card-enter ${!isConfirmed ? 'border-l-4 border-indigo-500' : ''}">
                <div class="flex flex-col md:flex-row justify-between md:items-center mb-4 pb-4 border-b">
                    <div class="flex-grow">
                        <h3 class="text-xl font-bold text-indigo-700">${classSlot.inicio} - ${classSlot.fim}</h3>
                        <p class="text-slate-600">${classSlot.turma} <span class="text-sm text-slate-500">(Prof. ${classSlot.teacherName})</span></p>
                    </div>
                    <div class="flex items-center gap-2 mt-3 md:mt-0">
                        <span class="text-sm font-semibold px-3 py-1 rounded-full ${getAreaColor(classSlot.teacherArea)}">${classSlot.teacherArea}</span>
                        <button data-class-id="${classId}" class="ignore-btn p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors" title="Ignorar esta aula">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" /></svg>
                        </button>
                    </div>
                </div>
                <h4 class="text-md font-semibold text-slate-700 mb-3">Sugestões de Substitutos:</h4>
                <ul class="space-y-3">
                    ${candidatesHtml}
                </ul>
            </div>
        `;
    };

    // Event listener para o botão "Ver mais opções"
    document.body.addEventListener('click', e => {
        if (e.target.matches('.show-more-btn')) {
            e.target.previousElementSibling.classList.remove('hidden');
            e.target.remove();
        }
    });

    // Delegação de eventos para o botão "Ver Horário"
    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('.view-schedule-btn');
        if (!target) return;

        const teacherName = target.dataset.teacherName;
        const classStartTime = target.dataset.classStartTime;
        const dayOfWeek = appState.currentDay; // Pega o dia da busca atual

        if (teacherName && classStartTime && dayOfWeek) {
            // Abre o modal da grade, já filtrando pelo professor e destacando o horário
            populateScheduleAreaFilter();
            scheduleSearchInput.value = teacherName;
            scheduleAreaFilter.value = 'all';
            updateScheduleView({ day: dayOfWeek, time: classStartTime });
            scheduleModal.setAttribute('aria-hidden', 'false');
            scheduleModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    });

    const exportActivityLogAsText = () => {
        if (!appState.activityLog || appState.activityLog.length === 0) {
            alert("Não há atividades no log para exportar.");
            return;
        }

        const date = new Date();
        const dateString = date.toLocaleDateString('pt-BR');
        const timeString = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        let fileContent = `Relatório de Atividades - Gerado em ${dateString} às ${timeString}\n`;
        fileContent += "==================================================================\n\n";

        // Invertemos o log para que ele seja lido em ordem cronológica no arquivo de texto
        const chronologicalLog = [...appState.activityLog].reverse();

        chronologicalLog.forEach(log => {
            const logTime = new Date(log.timestamp).toLocaleString('pt-BR');
            let logText = `[${logTime}] - ${log.user}: `;

            if (log.action === 'confirm_substitution') {
                logText += `Confirmou ${log.details.substitute} para a aula de ${log.details.originalTeacher} (${log.details.classInfo}).`;
            } else if (log.action === 'undo_substitution') {
                logText += `Desfez a substituição de ${log.details.substitute} para a aula de ${log.details.originalTeacher}.`;
            }
            fileContent += logText + "\n";
        });

        const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `log_atividades_${date.toISOString().slice(0, 10)}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const generateTrashCard = (classSlot, day) => {
        const classId = `${day}_${classSlot.inicio}_${classSlot.fim}_${classSlot.turma.replace(/\s|\//g, '-')}`;
        return `
            <div class="bg-slate-100 p-4 rounded-lg shadow-sm flex justify-between items-center card-enter">
                <div>
                    <p class="font-semibold text-slate-700">${classSlot.inicio} - ${classSlot.fim}</p>
                    <p class="text-sm text-slate-500">${classSlot.turma}</p>
                </div>
                <button data-class-id="${classId}" class="restore-btn text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" /></svg>
                    Restaurar
                </button>
            </div>
        `;
    };

    const generateActivityLogHtml = () => {
        let logHtml = `
            <div class="timeline-container bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-slate-200">`;

        appState.activityLog.forEach(log => {
            const time = new Date(log.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            let icon = '';
            let text = '';
            let iconBg = '';

            if (log.action === 'confirm_substitution') {
                icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>`;
                iconBg = 'bg-green-100 text-green-600';
                text = `<strong>${log.user}</strong> confirmou <strong>${log.details.substitute}</strong> para a aula de <strong>${log.details.originalTeacher}</strong> (${log.details.classInfo}).`;
            } else if (log.action === 'undo_substitution') {
                icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>`;
                iconBg = 'bg-red-100 text-red-600';
                text = `<strong>${log.user}</strong> desfez a substituição de <strong>${log.details.substitute}</strong> para a aula de <strong>${log.details.originalTeacher}</strong>.`;
            }

            logHtml += `
                <div class="timeline-item">
                    <div class="activity-log-icon ${iconBg}">
                        ${icon}
                    </div>
                    <div class="timeline-content">
                        <p class="text-sm text-slate-700 leading-relaxed">${text}</p>
                        <p class="text-xs text-slate-500 mt-1">${time}</p>
                    </div>
                </div>
            `;
        });

        logHtml += `</div>`;
        return logHtml;
    };

    exportLogBtn.addEventListener('click', exportActivityLogAsText);
};

// Inicia a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeApp);