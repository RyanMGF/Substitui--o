// --- INÍCIO DA CONFIGURAÇÃO DE DADOS ---

// 1. Cole aqui os dados brutos do seu JSON
const rawData = {
  "escola": "ECITE DR. ELPÍDIO DE ALMEIDA",
  "ano": 2025,
  "relatorio": "Relatório de Professores (Individual)",
  "data_geracao": "05/10/2025 (13:49)",
  "professores": [
    {
      "nome": "ADRIELMA",
      "horario": {
        "segunda": [],
        "terca": [],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°COM/QUÍMICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°COM/QUÍMICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM III/QUÍMICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1ºDS III.../PRA. INT. II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1\"DS III.../PRA. INT. II"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°DS II/QUÍMICA"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM III/QUÍMICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3\"ADM I/QUÍMICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM IV/QUÍMICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM II/QUÍMICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM II/QUÍMICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM III/QUÍMICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM III/QUIMICA"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°DS II/QUÍMICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM IV/QUÍMICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3 ADM I/QUÍMICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM VIQUÍMICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3ºADM VIQUÍMICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°GAS/QUÍMICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°GAS/QUÍMICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2ºDS I/QUÍMICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2ºDS I/QUÍMICA"
          }
        ]
      }
    },
    {
      "nome": "ALEX",
      "horario": {
        "segunda": [],
        "terca": [
          {
            "hora": "09:30",
            "disciplina_turma": "2°ADM I/MATEMÁTICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2 ADM I/MATEMÁTICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°DS I/PV"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM I/RECOMP. MAT"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2\"ADM II/MATEMÁTICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°ADM II/MATEMÁTICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1 ADM I/PV"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "Reun"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1\"ADM II/PV"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "Reun."
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM III/PV"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2 ADM II/MATEMÁTICA"
          }
        ],
        "quinta": [
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM I/APROF MATEMATICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3ºCOM/MATEMATICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3ºCOM/MATEMÁTICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°COM/MATEMATICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°ADM II/APROF. MATEMÁTICA"
          }
        ],
        "sexta": [
          {
            "hora": "09:30",
            "disciplina_turma": "3ºADM V/MATEMÁTICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM V/MATEMATICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM V/MATEMATICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°ADM I/MATEMATICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM II/RECOMP. MAT"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°DS II/PV"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM IV/PV"
          }
        ]
      }
    },
    {
      "nome": "ALEX-HISTÓRIA",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "1\"ADM IV/HISTORIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1\"ADM IV/HISTORIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM I/HISTÓRIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1 ADM I/HISTORIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°GAS/HISTORIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°GAS/HISTÓRIA"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "1 DS III/HISTORIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°DS I/HISTORIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°DS I/HISTORIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°DS I/HISTÓRIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°DS I/HISTORIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM III/HISTÓRIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1\"ADM III/HISTÓRIA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2 GAS/HISTÓRIA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2 GAS/HISTORIA"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1\"ADM II/HISTORIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1\"ADM II/HISTORIA"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2 ADM III/HISTORIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM III/HISTORIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°DS III/HISTORIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°DS II/HISTÓRIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°DS II/HISTORIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS II/HISTÓRIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1 DS II/HISTORIA"
          }
        ],
        "sexta": []
      }
    },
    {
      "nome": "CARLOS",
      "horario": {
        "segunda": [
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM IV/MATEMÁTICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM IV/MATEMÁTICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "Reun"
          }
        ],
        "terca": [],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3ºADM III/MATEMATICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM I/MATEMÁTICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°ADM IV.../PRA INT. I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1\"ADM IV.../PRA INT. I"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "Reun"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM II/MATEMÁTICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM III/MATEMÁTICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM III/MATEMÁTICA"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM IV/MATEMÁTICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM II/MATEMÁTICA."
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM II/MATEMÁTICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM I/MATEMATICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3\"ADM I/MATEMATICA"
          }
        ]
      }
    },
    {
      "nome": "CLEONE",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM II/GEOGRAFIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2\"ADM I/GEOGRAFIA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "Reun"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS I/GEOGRAFIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°GAS/GEOGRAFIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1 ADM IV/GEOGRAFIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1 ADM III/GEOGRAFIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1\"ADM I/GEOGRAFIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM II/GEOGRAFIA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1\"DS II/GEOGRAFIA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2 ADM I/GEOGRAFIA"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS III/GEOGRAFIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°DS I/GEOGRAFIA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1 ADM IV/GEOGRAFIA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°DS II/GEOGRAFIA"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°GAS/GEOGRAFIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM II/GEOGRAFIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°ADM III/GEOGRAFIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°ADM I/GEOGRAFIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS III/GEOGRAFIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2 ADM II/GEOGRAFIA"
          }
        ],
        "sexta": []
      }
    },
    {
      "nome": "DANILO",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM I/FÍSICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM I/FÍSICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM V/FISICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3ºADM 111/FÍSICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM III/FÍSICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM III/FÍSICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM III/FÍSICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°DS I/FÍSICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°DS I/FÍSICA"
          }
        ],
        "terca": [],
        "quarta": [
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM II/FISICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3ºADM II/FÍSICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM IV.../PRA. INT. II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM IV.../PRA. INT. II"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°GAS/FÍSICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2GAS°/FÍSICA"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3ºADM IV/FISICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3 ADM IV/FÍSICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3 ADM V/FISICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°COM/FISICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°COM/FISICA"
          }
        ],
        "sexta": [
          {
            "hora": "15:20",
            "disciplina_turma": "2°DS II/FÍSICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°DS II/FÍSICA"
          }
        ]
      }
    },
    {
      "nome": "DEMOHAB",
      "horario": {
        "segunda": [],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "1\"ADM I/EMPREENDEDORISMO"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°ADM I/EMPREENDEDORISMO"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1 DS II/IC"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1\"DS II/IC"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2ºADM II/ECONOMIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2 ADM II/ECONOMIA"
          }
        ],
        "quinta": [
          {
            "hora": "08:20",
            "disciplina_turma": "2ºADM IVECONOMIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°ADM I/ECONOMIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°ADM III/ECONOMIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°ADM III/ECONOMIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM IV/EMPREENDEDORISMO"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1 ADM IV/EMPREENDEDORISMO"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM 11/EMPREENDEDORISMO"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM 11/EMPREENDEDORISMO"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1\"ADM III/EMPREENDEDORISMO"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°ADM III/EMPREENDEDORISMO"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°DS I/IC"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1 DS I/IC"
          }
        ]
      }
    },
    {
      "nome": "DENIS",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°ADM II/PV"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1 DS I/FÍSICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°DS I/FÍSICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°ADM I/PV"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM II/FISICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1 ADM II/FISICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS III/FISICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1 DS III/FÍSICA"
          }
        ],
        "terca": [],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "Reun."
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM I/FISICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2 ADM I/FISICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "Reun."
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1\"ADM I/FÍSICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1\"ADM I/FÍSICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM III/FISICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1 ADM III/FISICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1 ADM IV/FISICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1\"ADM IV/FÍSICA"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°ADM II/FISICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM 11/FÍSICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°DS II/FÍSICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°DS II/FÍSICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS III/PV"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°GAS/FÍSICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°GAS/FISICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°GAS/PV"
          }
        ]
      }
    },
    {
      "nome": "DENISSON",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°GAS/APROF. MATEMÁTICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°GAS/APROF. MATEMATICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°DS II/MATEMÁTICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°DS II/MATEMATICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1 DS II/APROF. MATEMATICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS I/APROF MATEMATICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°DS I/APROF. MATEMÁTICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS II/RECOMP MAT"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°DS I/RECOMP MAT"
          }
        ],
        "terca": [
          {
            "hora": "08:20",
            "disciplina_turma": "1°GAS/MATEMÁTICA"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°GAS/RECOMP. MAT"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°DS III/MATEMATICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°DS III/MATEMÁTICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS I/MATEMÁTICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1\"DS I/MATEMÁTICA"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS III/APROF. MATEMATICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°DS III/APROF. MATEMATICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°DS I/MATEMATICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°DS II/APROF. MATEMÁTICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°DS II/MATEMATICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1 GAS/MATEMÁTICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°GAS/MATEMÁTICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS III/RECOMP. MAT"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°DS III/MATEMÁTICA"
          }
        ],
        "sexta": []
      }
    },
    {
      "nome": "ELIAS",
      "horario": {
        "segunda": [
          {
            "hora": "08:20",
            "disciplina_turma": "1°ADM II/APROF. MATEMATICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1ºADM JI/APROF. MATEMÁTICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°ADM IV/RECOMP. MAT"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM IV/MATEMATICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM IV/MATEMÁTICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM I/MATEMÁTICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1 ADM III/MATEMATICA"
          }
        ],
        "terca": [],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM III/MATEMATICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1\"ADM III/MATEMATICA"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM II/MATEMÁTICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°ADM II/MATEMÁTICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "ADM III/RECOMP. MAT"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1 ADM II/RECOMP. MAT"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1 ADM IV/MATEMATICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1 ADM I/MATEMÁTICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1\"ADM I/MATEMÁTICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1\"ADM III/APROF. MATEMATICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM III/APROF. MATEMÁTICA"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM 11/MATEMÁTICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1\"ADM I/RECOMP. MAT"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1\"ADM IV/APROF. MATEMATICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°ADM IV/APROF. MATEMÁTICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM I/APROF MATEMATICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM I/APROF. MATEMÁTICA"
          }
        ]
      }
    },
    {
      "nome": "FERNANDA",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "20ADM III/MATEMÁTICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM III/MATEMATICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°DS I/MATEMATICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°DS II/APROF. MATEMÁTICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°ADM III/APROF MATEMÁTICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°DS II/MATEMATICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°DS I/APROF MATEMÁTICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2 GAS/RECOMP. MAT"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2 GAS/MATEMÁTICA"
          }
        ],
        "terca": [],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°DS II/MATEMÁTICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS II/MATEMÁTICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°GAS/APROF MATEMÁTICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°ADM II/PRA INT. I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°ADM II.../PRA. INT. I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM II.../PRA. INT II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM II./PRA. INT. II"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°ADM III/RECOMP MAT"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°DS II/RECOMP. MAT"
          }
        ],
        "quinta": [
          {
            "hora": "10:20",
            "disciplina_turma": "2°DS I/MATEMATICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°DS I/MATEMÁTICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°GAS/MATEMÁTICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°GAS/MATEMÁTICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2 DS I/RECOMP. MAT"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°ADM III/MATEMATICA"
          }
        ],
        "sexta": []
      }
    },
    {
      "nome": "GEFERSON",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM II/ED.FÍSICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM II/ED.FÍSICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°DS II/ED.FÍSICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM I/ED.FISICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3\"ADM I/ED.FÍSICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "Reun"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "Reun"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°DS I/ED.FÍSICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°GAS/ED FISICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°DS II/ED.FÍSICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM III/ED.FISICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM III/ED.FÍSICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°GAS/ED.FÍSICA"
          }
        ],
        "quarta": [
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM V/ED.FÍSICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM V/ED.FÍSICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM IV/ED.FÍSICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM IV/ED.FÍSICA"
          }
        ],
        "quinta": [],
        "sexta": [
          {
            "hora": "10:20",
            "disciplina_turma": "3\"COM/ED FISICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°COM/ED.FÍSICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°DS I/ED FÍSICA"
          }
        ]
      }
    },
    {
      "nome": "GILMAR",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM I/ED.FISICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1\"ADM I/ED FÍSICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2\"ADM III/ED.FÍSICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM II/ED.FÍSICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM II/ED.FÍSICA"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM III/ED.FISICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1 ADM III/ED.FÍSICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1 GAS/ED FÍSICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2 ADM I/ED FISICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM IV/ED.FÍSICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1 ADM IV/ED.FÍSICA"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS I/ED.FÍSICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°DS I/ED FÍSICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°DS III/PRA. INT. I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°DS IIL/PRA INT. 1"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2ºADM III/PRA INT II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM III.../PRA. INT II"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°ADM II/ED.FÍSICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2\"ADM I/ED.FÍSICA"
          }
        ],
        "quinta": [],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS III/ED.FÍSICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°DS III/ED FÍSICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2 ADM III/ED.FÍSICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2 ADM II/ED FÍSICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1 GAS/ED FISICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS II/ED.FÍSICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1\"DS II/ED FÍSICA"
          }
        ]
      }
    },
    {
      "nome": "GIORDANA",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM III/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°COM/PORTUGUES"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°COM/PORTUGUES"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°ADM II/PORTUGUES"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°ADM II/PORTUGUES"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2 ADM I/PORTUGUES"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°ADM I/PORTUGUES"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM V/PORTUGUÊS"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM III/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3ºADM II/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3\"ADM. II/PRODUÇÃO TEXTUAL"
          }
        ],
        "quarta": [
          {
            "hora": "10:20",
            "disciplina_turma": "3 ADM I/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM I/PRODUÇÃO TEXTUAL"
          }
        ],
        "quinta": [],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM V/PORTUGUÊS"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM V/PORTUGUES"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°COM/PORTUGUES"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3ºADM IV/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM IV/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°ADM II/PORTUGUÊS"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°ADM I/PORTUGUÊS"
          }
        ]
      }
    },
    {
      "nome": "HEROISO",
      "horario": {
        "segunda": [],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS II/INT, C. NUVEM"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°DS II/INT. C. NUVEM"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1 ADM III/IC"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1 ADM III/IC"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°DS II/INT. BANCO DE DADOS"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS VINT. C. NUVEM"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°DS I/INT. C. NUVEM"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS III/INT. C. NUVEM"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1 DS III/INT. C. NUVEM"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS II/ALG. LOG. PROG. II"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°DS II/ALG. LOG. PROG."
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1 DS III/ALG. LOG PROG. II"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°DS III/ALG. LOG. PROG. II"
          }
        ],
        "quinta": [
          {
            "hora": "13:20",
            "disciplina_turma": "2°DS I/INT. BANCO DE DADOS"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°DS I INT. BANCO DE DADOS"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS I/ALG. LOG. PROG. II"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1 DS I/ALG. LOG, PROG. II"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1\"ADM IV/IC"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°ADM IV/IC"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°DS I/FUND. IA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°DS I/FUND. IA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°DS II/FUND, IA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°DS II/FUND. IA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°DS II/INT. BANCO DE DADOS"
          }
        ]
      }
    },
    {
      "nome": "ISA LACERDA",
      "horario": {
        "segunda": [
          {
            "hora": "14:10",
            "disciplina_turma": "Reun"
          }
        ],
        "terca": [],
        "quarta": [],
        "quinta": [
          {
            "hora": "08:20",
            "disciplina_turma": "1°GAS/IC"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°GAS/IC"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°ADM II/FINANÇAS II"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°ADM II/FINANÇAS II"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM I/FINANCAS II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM I/FINANCAS II"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2 ADM III/FINANÇAS II"
          }
        ],
        "sexta": [
          {
            "hora": "09:30",
            "disciplina_turma": "2 ADM III/FINANÇAS II"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1\"DS III/IC"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°DS 111/IC"
          }
        ]
      }
    },
    {
      "nome": "JULIO",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM VINGLÉS"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM III/APROF. INGLES"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2 DS I/INGLES"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°DS I/APROF INGLÊS"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°DS II/INGLÉS"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM IV/INGLES"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°COM/INGLES"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°ADM III/INGLÉS"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°GAS/APROF. INGLES"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM II/INGLÉS"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM I/INGLÉS"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°DS 1.../PRA. INT. I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°DS L/PRA. INT. I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°DS 1../PRA INT. II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°DS I./PRA. INT. II"
          }
        ],
        "quinta": [],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3ºADM III/INGLÉS"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM I/APROF. INGLÉS"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2 GAS/INGLES"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°DS 11/APROF. INGLES"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°ADM II/APROF INGLES"
          }
        ]
      }
    },
    {
      "nome": "LAURA",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS I/RECOMP. POR"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°DS III/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1 DS III/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1 DS III/RECOMP. POR"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS II/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°DS II/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°DS /PORTUGUES"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1\"DS II/RECOMP POR"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°DS 11/PORTUGUÊS"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS II/PORTUGUES"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°GAS/PORTUGUES"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°GAS/PORTUGUES"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°GAS/RECOMP. POR"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2ºDS I/PORTUGUÊS"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°DS I/PORTUGUES"
          }
        ],
        "quarta": [
          {
            "hora": "15:20",
            "disciplina_turma": "2°ADM III/PORTUGUES"
          }
        ],
        "quinta": [],
        "sexta": [
          {
            "hora": "08:20",
            "disciplina_turma": "1°GAS/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°GAS/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°GAS/PORTUGUÊS"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°DS I/PORTUGUES"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM III/PORTUGUES"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM III/PORTUGUÊS"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS I/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°DS I/PRODUÇÃO TEXTUAL"
          }
        ]
      }
    },
    {
      "nome": "LINALDA",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS III/BIOLOGIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1\"ADM II/BIOLOGIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM III/BIOLOGIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM I/BIOLOGIA"
          }
        ],
        "terca": [],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°ADM I/BIOLOGIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1\"ADM III/BIOLOGIA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM I/BIOLOGIA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1 ADM IV/BIOLOGIA"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2ºADM II/BIOLOGIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1 DS II/BIOLOGIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°DS II/BIOLOGIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1 GAS/BIOLOGIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°GAS/BIOLOGIA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°ADM I/BIOLOGIA"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1ºDS I/BIOLOGIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1\"DS I/BIOLOGIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM IV/BIOLOGIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM II/BIOLOGIA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS III/BIOLOGIA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1\"ADM II/BIOLOGIA"
          }
        ]
      }
    },
    {
      "nome": "LUIS",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°COM/SOCIOLOGIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM V/SOCIOLOGIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°GAS/SOCIOLOGIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°ADM IV/SOCIOLOGIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1 ADM II/SOCIOLOGIA"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM II/SOCIOLOGIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3\"ADM IV/SOCIOLOGIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°ADM I/SOCIOLOGIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°ADM I/SOCIOLOGIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM III/SOCIOLOGIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1 DS III/SOCIOLOGIA"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM I/SOCIOLOGIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM III/SOCIOLOGIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°DS II/SOCIOLOGIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°ADM IL.../PRA. INTI"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°ADM II/PRA. INT. I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM II.../PRA, INT. II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1 ADM IL.../PRA. INT. II"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°DS I/SOCIOLOGIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS II/SOCIOLOGIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°GAS/SOCIOLOGIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1\"ADM III/SOCIOLOGIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM II/SOCIOLOGIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°DS I/SOCIOLOGIA"
          }
        ],
        "sexta": []
      }
    },
    {
      "nome": "MARCOS",
      "horario": {
        "segunda": [
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM I/ARTE"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°DS I/ARTE"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°DS II/ARTE"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°GAS/ARTE"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°ADM I/ARTE"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°GAS/ARTE"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2\"ADM III/ARTE"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM II/ARTE"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM V/ARTE"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2ºADM II/ARTE"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1 ADM I/ARTE"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM IV/ARTE"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°COM/ARTE"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1 ADM .../PRA, INT. I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1 ADM .../PRA. INT. I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM 1.../PRA INT. II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM .../PRA INT. II"
          }
        ],
        "quinta": [],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM III/ARTE"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM IV/ARTE"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1 ADM II/ARTE"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1\"DS VARTE"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS IIVARTE"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°DS III/ARTE"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM III/ARTE"
          }
        ]
      }
    },
    {
      "nome": "MARINALVA",
      "horario": {
        "segunda": [],
        "terca": [],
        "quarta": [],
        "quinta": [],
        "sexta": []
      }
    },
    {
      "nome": "PAULO",
      "horario": {
        "segunda": [],
        "terca": [
          {
            "hora": "13:20",
            "disciplina_turma": "1°GAS/HIS. PANIFICAÇÃO"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1 GAS/HIS. PANIFICAÇÃO"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2 GAS/COZINHA INTERNACIONAL"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°GAS/COZINHA INTERNACIONAL"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°GAS/GARDEN MANGER"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1 GAS/GARDEN MANGER"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°GAS/COZINHA BRASILEIRA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°GAS/COZINHA BRASILEIRA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°GAS/ISC"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°GAS/ISC"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1 GAS/TEC. PANIFICAÇÃO"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°GAS/TEC. PANIFICAÇÃO"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2 GAS/COZINHA CONTEMPORANEA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°GAS/COZINHA CONTEMPORANEA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°GAS/F. T. T. DIÉTICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°GAS/F. T. T. DIÉTICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°GAS/COZINHA NORDESTINA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°GAS/COZINHA NORDESTINA"
          }
        ]
      }
    },
    {
      "nome": "POLLYANA",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°ADM II/HISTÓRIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°ADM II/HISTÓRIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM IV/HISTÓRIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM IV/HISTÓRIA"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM V/HISTÓRIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM V/HISTÓRIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM I/HISTÓRIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3\"ADM I/HISTÓRIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2 ADM I/HISTÓRIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM WHISTORIA"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "Reun."
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2 ADM III/PV"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3ºADM II/HISTÓRIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM II/HISTORIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "Reun."
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°COM/HISTORIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°COM/HISTÓRIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS II/PV"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM III/HISTÓRIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM III/HISTÓRIA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°GAS/PV"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°DS I/PV"
          }
        ],
        "sexta": []
      }
    },
    {
      "nome": "RENATO",
      "horario": {
        "segunda": [
          {
            "hora": "15:20",
            "disciplina_turma": "Reun"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°ADM III/ISC"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°ADM III/CONTABILIDADE"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2\"ADM II/CONTABILIDADE"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°ADM II/CONTABILIDADE"
          }
        ],
        "quarta": [],
        "quinta": [
          {
            "hora": "09:30",
            "disciplina_turma": "2°ADM III/ISC"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°ADM I/CONTABILIDADE"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2 ADM I/CONTABILIDADE"
          }
        ],
        "sexta": [
          {
            "hora": "11:10",
            "disciplina_turma": "2°ADM III/CONTABILIDADE"
          }
        ]
      }
    },
    {
      "nome": "RIZIA",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM III/PORTUGUÊS"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1 ADM III/PORTUGUES"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2 GAS/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°GAS/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1\"ADM I/PORTUGUÊS"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1\"ADM IV/PORTUGUES"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM IV/PORTUGUES"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM 11/PORTUGUES"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°ADM II/PORTUGUES"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1\"ADM IV/PORTUGUES"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2ºDS II/RECOMP. POR"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°ADM III/RECOMP. POR"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°GAS/RECOMP POR"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°DS I/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°DS I/PRODUÇÃO TEXTUAL"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°ADM III/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM III/PRODUCÃO TEXTUAL"
          }
        ],
        "quinta": [
          {
            "hora": "09:30",
            "disciplina_turma": "2ºDS II/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°DS II/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2ºDS I/RECOMP. POR"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1\"ADM II/PORTUGUES"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1 ADM III/PORTUGUÊS"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM I/PORTUGUÉS"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°ADM I/PORTUGUES"
          }
        ]
      }
    },
    {
      "nome": "ROBERTINA",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°GAS/FILOSOFIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS I/FILOSOFIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM II/FILOSOFIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1 ADM III/FILOSOFIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2ADM °II/FILOSOFIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°DS II/FILOSOFIA"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°COM/FILOSOFIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3\"ADM III/FILOSOFIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3 ADM IV/FILOSOFIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM V/FILOSOFIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1\"ADM IV/FILOSOFIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2 ADM III/FILOSOFIA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1 GAS/FILOSOFIA"
          }
        ],
        "quarta": [
          {
            "hora": "10:20",
            "disciplina_turma": "1°ADM IIL/PRA INT. I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°ADM III.../PRA. INT. I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM III.../PRA. INT. II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1\"ADM III/PRA. INT. II"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM I/FILOSOFIA"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1ºDS II/FILOSOFIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1\"DS I/FILOSOFIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM I/FILOSOFIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°DS III/FILOSOFIA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°ADM I/FILOSOFIA"
          }
        ],
        "sexta": [
          {
            "hora": "11:10",
            "disciplina_turma": "1\"ADM II/FILOSOFIA"
          }
        ]
      }
    },
    {
      "nome": "RODOLPHO",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°ADM I/ISC"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM I/ISC"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM I/INOVAÇÃO"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°ADM VINOVAÇÃO"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM IV/INOVAÇÃO"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM IV/INOVAÇÃO"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1 ADM II/INOVAÇÃO"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM II/INOVAÇÃO"
          }
        ],
        "terca": [
          {
            "hora": "10:20",
            "disciplina_turma": "1°DS .../PRA. INT. 1"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1 DS .../PRA. INT. I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS 1.../PRA INT. II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1\"DS I.../PRA. INT. II"
          }
        ],
        "quarta": [],
        "quinta": [
          {
            "hora": "09:30",
            "disciplina_turma": "2°ADM II/ISC"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°ADM II/ISC"
          }
        ],
        "sexta": [
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM III/INOVAÇÃO"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM III/INOVAÇÃO"
          }
        ]
      }
    },
    {
      "nome": "RYAN",
      "horario": {
        "segunda": [],
        "terca": [
          {
            "hora": "08:20",
            "disciplina_turma": "1°DS III/DESENV WEB"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1 DS III/DESENV WEB"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°DS III/BANCO DE DADOS I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°DS III/BANCO DE DADOS I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS II/BANCO DE DADOS I"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1 DS II/BANCO DE DADOS I"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS I/DESENV. WEB"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°DS I/DESENV WEB"
          }
        ],
        "quarta": [
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM III/PRÁ INT. I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2ºADM III.../PRA. INT. I"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°DS II/I SEG DADOS"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS I/PI-DIA SOLUÇÕES"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°DS I/PI-DIA SOLUÇÕES"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°DS I/BANCO DE DADOS I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°DS I/BANCO DE DADOS I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2ºDS II/PI-DIA SOLUÇÕES"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°DS II/PI-DIA SOLUÇÕES"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS II/DESENV WEB"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°DS II/DESENV WEB"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°DS I/L SEG, DADOS"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS I/I. SEG. DADOS"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°DS II/I. SEG. DADOS"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM II/IC"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1 ADM II/IC"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM I/IC"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM I/IC"
          }
        ]
      }
    },
    {
      "nome": "SAMMYA",
      "horario": {
        "segunda": [],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°ADM II/CONTROLE DE ESTOQUE"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM II/CONTROLE DE ESTOQUE"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2\"ADM I/CONTROLE DE ESTOQUE"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°ADM I/CONTROLE DE ESTOQUE"
          }
        ],
        "quarta": [
          {
            "hora": "10:20",
            "disciplina_turma": "2°GAS/1°ADMI/PRA INT.I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°GAS/1°ADMI/PRA INT. I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°GAS/1°ADM L/PRA. INT. II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2 GAS/1 ADM 1/PRA INT. II"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM IV/G. EMPRESARIAL"
          },
          {
            "hora": "08:20",
            "disciplina_turma": ". EMPRESARIAL"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1 ADM IV /G"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM I/G. EMPRESARIAL"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1ºADM IVG EMPRESARIAL"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM II/G. EMPRESARIAL"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM II/G. EMPRESARIAL"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°ADM III/CONTROLE DE ESTOQUE"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM III/CONTROLE DE ESTOQUE"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1\"ADM III/G. EMPRESARIAL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1 ADM III/G. EMPRESARIAL"
          }
        ]
      }
    },
    {
      "nome": "SARA",
      "horario": {
        "segunda": [
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM IV/APROF. INGLES"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°ADM III/APROF. INGLES"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS I/INGLES"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°GAS/INGLES"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°GAS/APROF. INGLÉS"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM IV/INGLES"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°DS I/APROF, INGLES"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS III/APROF. INGLÉS"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM II/APROF. INGLES"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1\"ADM I/APROF INGLES"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM WINGLES"
          }
        ],
        "quarta": [
          {
            "hora": "09:30",
            "disciplina_turma": "2°ADM II/INGLES"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2\"ADM 1../PRA. INT. I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2 ADM 1./PRA INT. I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM .../PRA INT. II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM /PRA INT. II"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°DS II/APROF. INGLÉS"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM III/INGLES"
          }
        ],
        "quinta": [],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS JI/INGLES"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°DS III/INGLES"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°ADM I/INGLES"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°ADM II/INGLÉS"
          }
        ]
      }
    },
    {
      "nome": "SHIRLEY",
      "horario": {
        "segunda": [],
        "terca": [
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS I/ISC"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°DS I/ISC"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°DS TUISC"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°DS II/ISC"
          }
        ],
        "quarta": [
          {
            "hora": "08:20",
            "disciplina_turma": "1°ADM I/DIREITO EMPRESARIAL"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM I/DIREITO EMPRESARIAL"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "2°DS IL/PRA. INT.I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "2°DS II.../PRA. INT. I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°DS II.../PRÁ INT. II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°DS 11.../PRA. INT. II"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM III/DIREITO EMPRESARIAL"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°ADM III/DIREITO EMPRESARIAL"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM IV/DIREITO EMPRESARIAL"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°ADM IV/DIREITO EMPRESARIAL"
          }
        ],
        "sexta": [
          {
            "hora": "08:20",
            "disciplina_turma": "1°ADM II/DIREITO EMPRESARIAL"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM II/DIREITO EMPRESARIAL"
          }
        ]
      }
    },
    {
      "nome": "SUZY",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°ADM I/RECOMP. POR"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM III/PORTUGUES"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM III/PORTUGUES"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°COM/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°COM/PRODUÇÃO TEXTUAL"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM I/PORTUGUES"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM II/PORTUGUES"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°ADM II/RECOMP. POR"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM IV/PORTUGUES"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM IV/PORTUGUES"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM II/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2 ADM II/PRODUÇÃO TEXTUAL"
          }
        ],
        "quarta": [
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM IV/PORTUGUÊS"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3\"ADM V/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM V/PRODUÇÃO TEXTUAL"
          }
        ],
        "quinta": [],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM I/PORTUGUES"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM I/PORTUGUÊS"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM III/PORTUGUÊS"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM 11/PORTUGUES"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM II/PORTUGUES"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM I/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM I/PRODUÇÃO TEXTUAL"
          }
        ]
      }
    },
    {
      "nome": "THIAGO",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°DS 1/APROF. GEOGRAFIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2 GAS/GEOGRAFIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°GAS/GEOGRAFIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3ºADM V/GEOGRAFIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM V/GEOGRAFIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM III/APROF GEOGRAFIA"
          }
        ],
        "terca": [
          {
            "hora": "09:30",
            "disciplina_turma": "2°DS II/APROF GEOGRAFIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3ºCOM/GEOGRAFIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°COM/GEOGRAFIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°DS II/GEOGRAFIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "Reun."
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°DS II/GEOGRAFIA"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°DS I/GEOGRAFIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS I/GEOGRAFIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3°ADM III/GEOGRAFIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM III/GEOGRAFIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM I/APROF GEOGRAFIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM III/GEOGRAFIA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°ADM III/GEOGRAFIA"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM I/GEOGRAFIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM 11/GEOGRAFIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM I/GEOGRAFIA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "3ºADM IV/GEOGRAFIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM IV/GEOGRAFIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°ADM II/APROF GEOGRAFIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°GAS/APROF. GEOGRAFIA"
          }
        ],
        "sexta": []
      }
    },
    {
      "nome": "VALDIEGO",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM IV/ESPANHOL"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°DS III/ESPANHOL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1\"ADM I/ESPANHOL"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2 ADM III/ESPANHOL"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°ADM II/ESPANHOL"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM III/ESPANHOL"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3ºADM I/ESPANHOL"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°COM/ESPANHOL"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1\"DS I/ESPANHOL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1 ADM II/ESPANHOL"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°GAS/ESPANHOL"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1 DS II/ESPANHOL"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3 ADM V/ESPANHOL"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS I/ESPANHOL"
          }
        ],
        "quinta": [],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3ºADM II/ESPANHOL"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS II/ESPANHOL"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°GAS/ESPANHOL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°ADM III/ESPANHOL"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°ADM I/ESPANHOL"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM IV/ESPANHOL"
          }
        ]
      }
    },
    {
      "nome": "VILMAR",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS 11/QUÍMICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1\"DS II/QUÍMICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM III/QUÍMICA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM IIIVOUÍMICA"
          }
        ],
        "terca": [],
        "quarta": [
          {
            "hora": "08:20",
            "disciplina_turma": "1°GAS/QUÍMICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°GAS/QUÍMICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1\"DS II.../PRA. INT. I"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°DS II.../PRA. INT. I"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS II.../PRA. INT. II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1 DS 11.../PRA. INT. II"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "1°ADM II/QUÍMICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM II/QUÍMICA"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°DS I/QUÍMICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°ADM II/QUÍMICA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "2°ADM II/QUÍMICA"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°DS III/QUÍMICA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°DS III/QUÍMICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1 DS I/QUÍMICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1ºADM I/QUIMICA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM I/QUÍMICA"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°ADM I/QUÍMICA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2ºADM I/QUÍMICA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM IV/QUÍMICA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM IV/QUÍMICA"
          }
        ]
      }
    },
    {
      "nome": "YURI",
      "horario": {
        "segunda": [
          {
            "hora": "07:30",
            "disciplina_turma": "2°DS II/BIOLOGIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "2°DS II/BIOLOGIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM 11/BIOLOGIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3°ADM 11/BIOLOGIA"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "2°GAS/BIOLOGIA"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "2°GAS/BIOLOGIA"
          }
        ],
        "terca": [],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM IV/BIOLOGIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3 ADM IV/BIOLOGIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°GAS/1 ADM IL/PRÁ INT. 1"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°GAS/1°ADM 1.../PRA. INT.1"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1\"GAS/1 ADMI/PRA INT II"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°GAS/1 ADM 1.../PRA. INT II"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°DS I/BIOLOGIA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2°DS I/BIOLOGIA"
          }
        ],
        "quinta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°ADM V/BIOLOGIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°ADM V/BIOLOGIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM I/BIOLOGIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3ºADM I/BIOLOGIA"
          }
        ],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "3°COM/BIOLOGIA"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "3°COM/BIOLOGIA"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "3°ADM 111/BIOLOGIA"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "3ºADM III/BIOLOGIA"
          },
          {
            "hora": "15:20",
            "disciplina_turma": "2°ADM 111/BIOLOGIA"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "2\"ADM 111/BIOLOGIA"
          }
        ]
      }
    },
    {
      "nome": "ZELIA",
      "horario": {
        "segunda": [
          {
            "hora": "08:20",
            "disciplina_turma": "1°DS I/PORTUGUÊS"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM III/RECOMP. POR"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°GAS/PORTUGUES"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°GAS/PORTUGUES"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS III/PORTUGUES"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1\"DS III/PORTUGUES"
          }
        ],
        "terca": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM IV/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1 ADM IV/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1°ADM II/PRODUCÃO TEXTUAL"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1 ADM II/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°DS II/PORTUGUES"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°ADM II/RECOMP POR"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°ADM III/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1°ADM III/PRODUÇÃO TEXTUAL"
          }
        ],
        "quarta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°ADM I/RECOMP. POR"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°ADM IV/RECOMP. POR"
          }
        ],
        "quinta": [],
        "sexta": [
          {
            "hora": "07:30",
            "disciplina_turma": "1°GAS/PORTUGUÊS"
          },
          {
            "hora": "08:20",
            "disciplina_turma": "1°DS II/PORTUGUES"
          },
          {
            "hora": "09:30",
            "disciplina_turma": "1\"DS 11/PORTUGUES"
          },
          {
            "hora": "10:20",
            "disciplina_turma": "1°ADM I/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "11:10",
            "disciplina_turma": "1°ADM I/PRODUÇÃO TEXTUAL"
          },
          {
            "hora": "13:20",
            "disciplina_turma": "1°DS I/PORTUGUES"
          },
          {
            "hora": "14:10",
            "disciplina_turma": "1°DS I/PORTUGUES"
          },
          {
            "hora": "16:10",
            "disciplina_turma": "1\"DS III/PORTUGUÊS"
          }
        ]
      }
    }
  ]
};
const teacherAreas = {
    "ADRIELMA": "Ciências da Natureza", "ALEX": "Matemática", "ALEX-HISTÓRIA": "Humanas", "CARLOS": "Matemática", "CLEONE": "Humanas", "DANILO": "Ciências da Natureza", "DEMOHAB": "Base Técnica", "DENIS": "Ciências da Natureza", "DENISSON": "Matemática", "ELIAS": "Matemática", "FERNANDA": "Matemática", "GEFERSON": "Linguagens", "GILMAR": "Linguagens", "GIORDANA": "Linguagens", "HEROISO": "Base Técnica", "ISA LACERDA": "Base Técnica", "JULIO": "Linguagens", "LAURA": "Linguagens", "LINALDA": "Ciências da Natureza", "LUIS": "Humanas", "MARCOS": "Humanas", "MARINALVA": "Base Técnica", "PAULO": "Base Técnica", "POLLYANA": "Humanas", "RENATO": "Base Técnica", "RIZIA": "Linguagens", "ROBERTINA": "Humanas", "RODOLPHO": "Base Técnica", "RYAN": "Base Técnica", "SAMMYA": "Base Técnica", "SARA": "Linguagens", "SHIRLEY": "Base Técnica", "SUZY": "Linguagens", "THIAGO": "Humanas", "VALDIEGO": "Linguagens", "VILMAR": "Ciências da Natureza", "YURI": "Ciências da Natureza", "ZELIA": "Linguagens"
};

// ==========================================================================
// 2. CONFIGURAÇÕES E DADOS GLOBAIS
// ==========================================================================

const defaultSettings = {
    diasDeArea: { "Base Técnica": "Segunda", "Ciências da Natureza": "Terça", "Matemática": "Terça", "Linguagens": "Quinta", "Humanas": "Sexta" },
    intervalosFixos: [ {"inicio": "09:10", "fim": "09:30"}, {"inicio": "12:00", "fim": "13:20"}, {"inicio": "15:00", "fim": "15:20"} ]
};

// 3. Função que calcula o horário de fim (assumindo 50 minutos de aula)
const calculateEndTime = (startTime) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    date.setMinutes(date.getMinutes() + 50);
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
};

// 4. Função "tradutora" que converte os dados brutos para o formato que o sistema espera
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
            area: teacherAreas[prof.nome] || 'Não definida', // Pega a área do objeto de configuração
            horarios: horarios
        };
    });
};

// 5. Montagem final do objeto de dados que o sistema usará
const teacherScheduleData = {
    professores: processRawData(rawData),
    diasDeArea: { ...defaultSettings.diasDeArea },
    intervalosFixos: [ ...defaultSettings.intervalosFixos ]
};

// ==========================================================================
// 3. GERENCIAMENTO DE ESTADO DA APLICAÇÃO
// ==========================================================================

let appState = {
    confirmedSubstitutions: {},
    ignoredClasses: {},
    currentAbsentTeacher: null,
    currentDay: null,
};

const resetAppState = () => {
    appState.confirmedSubstitutions = {};
    appState.ignoredClasses = {};
    appState.currentAbsentTeacher = null;
    appState.currentDay = null;
};

// ==========================================================================
// 4. LÓGICA DE NEGÓCIO E UTILITÁRIOS
// ==========================================================================

const loadSettingsFromLocalStorage = () => {
    const savedDiasDeArea = localStorage.getItem('diasDeArea');
    const savedIntervalosFixos = localStorage.getItem('intervalosFixos');

    if (savedDiasDeArea) {
        teacherScheduleData.diasDeArea = JSON.parse(savedDiasDeArea);
    }
    if (savedIntervalosFixos) {
        teacherScheduleData.intervalosFixos = JSON.parse(savedIntervalosFixos);
    }
};

const saveSettingsToLocalStorage = () => {
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

document.addEventListener('DOMContentLoaded', () => {
    const teacherSelect = document.getElementById('absent-teacher');
    const daySelect = document.getElementById('absence-day');
    const findBtn = document.getElementById('find-substitute-btn');
    const resultsArea = document.getElementById('results-area');
    const loadingSpinner = document.getElementById('loading-spinner');
    const actionsContainer = document.getElementById('actions-container');
    const exportContainer = document.getElementById('export-container');
    const areaFilterSelect = document.getElementById('area-filter');
    
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
    const scheduleAreaFilter = document.getElementById('schedule-filter-area');

    // Carrega as configurações salvas ao iniciar
    loadSettingsFromLocalStorage();

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
        saveSettingsToLocalStorage();
        closeModal();
        alert('Configurações salvas com sucesso!');
    });

    resetSettingsBtn.addEventListener('click', () => {
        if (confirm('Tem certeza de que deseja redefinir todas as configurações para os valores padrão? Esta ação não pode ser desfeita.')) {
            localStorage.removeItem('diasDeArea');
            localStorage.removeItem('intervalosFixos');
            
            // Recarrega os valores padrão no estado da aplicação
            loadSettingsFromLocalStorage();
            renderSettingsModal();
        }
    });

    const copySummaryToClipboard = () => {
        const absentTeacherName = appState.currentAbsentTeacher.nome;
        const dayOfWeek = appState.currentDay;
        const dateString = new Date().toLocaleDateString('pt-BR');

        let summaryText = `*Resumo de Substituições*\n\n`;
        summaryText += `*Data:* ${dateString}\n`;
        summaryText += `*Professor Ausente:* ${absentTeacherName}\n`;
        summaryText += `*Dia:* ${dayOfWeek}\n\n`;
        summaryText += `-------------------------------------\n\n`;

        const sortedConfirmations = Object.entries(appState.confirmedSubstitutions).sort((a, b) => parseTimeToMinutes(a[0].split('_')[1]) - parseTimeToMinutes(b[0].split('_')[1]));

        sortedConfirmations.forEach(([classId, substituteName]) => {
            const [_day, start, end] = classId.split('_');
            // Encontra a turma em qualquer horário de qualquer professor, para garantir que a informação seja encontrada.
            const classSlot = teacherScheduleData.professores.flatMap(p => p.horarios).find(h => h.dia === _day && h.inicio === start && h.fim === end);
            
            summaryText += `*Horário:* ${start} - ${end}\n`;
            summaryText += `*Turma:* ${classSlot ? classSlot.turma : 'N/A'}\n`;
            summaryText += `➡️ *Substituto:* ${substituteName}\n\n`;
        });

        navigator.clipboard.writeText(summaryText).then(() => {
            const copyBtn = document.getElementById('copy-summary-btn');
            if (copyBtn) {
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '✅ Copiado!';
                copyBtn.classList.add('bg-green-600', 'hover:bg-green-700');
                copyBtn.classList.remove('bg-slate-600', 'hover:bg-slate-700');

                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                    copyBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
                    copyBtn.classList.add('bg-slate-600', 'hover:bg-slate-700');
                }, 2000);
            }
        }).catch(err => {
            console.error('Erro ao copiar texto: ', err);
            alert('Não foi possível copiar o texto. Por favor, tente manualmente.');
        });
    };

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

    const renderMasterSchedule = (filters = { searchTerm: '', area: 'all' }) => {
        const container = document.getElementById('schedule-grid-container');
        const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
        const timeSlots = [
            '07:30', '08:20', '09:30', '10:20', '11:10', 
            '13:20', '14:10', '15:20', '16:10'
        ];

        let teachersToDisplay = teacherScheduleData.professores;
        if (filters.searchTerm) {
            teachersToDisplay = teachersToDisplay.filter(p => p.nome.toLowerCase().includes(filters.searchTerm.toLowerCase()));
        }
        if (filters.area && filters.area !== 'all') {
            teachersToDisplay = teachersToDisplay.filter(p => p.area === filters.area);
        }

        let tableHtml = '<table class="schedule-table"><thead><tr><th>Horário</th>';
        days.forEach(day => tableHtml += `<th>${day}</th>`);
        tableHtml += '</tr></thead><tbody>';

        timeSlots.forEach(slot => {
            tableHtml += `<tr><td><strong>${slot}</strong></td>`;
            days.forEach(day => {
                const cellContent = teachersToDisplay.map(prof => {
                    const classInSlot = prof.horarios.find(h => h.dia === day && h.inicio === slot);
                    if (classInSlot) {
                        const areaColorClass = getAreaColor(prof.area);
                        return `
                            <div class="schedule-entry">
                                <strong>${prof.nome}</strong>
                                <small>${classInSlot.turma}</small>
                                <span class="mt-1 text-xs font-semibold px-1.5 py-0.5 rounded-full inline-block ${areaColorClass}">${prof.area}</span>
                            </div>
                        `;
                    }
                    return '';
                }).join('');
                tableHtml += `<td>${cellContent || ''}</td>`;
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

    const updateScheduleView = () => {
        const filters = {
            searchTerm: scheduleSearchInput.value,
            area: scheduleAreaFilter.value
        };
        renderMasterSchedule(filters);
    };

    openScheduleBtn_elem.addEventListener('click', () => {
        populateScheduleAreaFilter();
        renderMasterSchedule();
        scheduleModal.setAttribute('aria-hidden', 'false');
        scheduleModal.classList.remove('hidden');
    });

    const closeScheduleModal = () => {
        scheduleModal.setAttribute('aria-hidden', 'true');
        setTimeout(() => scheduleModal.classList.add('hidden'), 300);
    };

    closeScheduleBtn_elem.addEventListener('click', closeScheduleModal);
    scheduleOverlay_elem.addEventListener('click', closeScheduleModal);
    scheduleSearchInput.addEventListener('input', updateScheduleView);
    scheduleAreaFilter.addEventListener('change', updateScheduleView);

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

    const populateTeacherSelect = (selectedArea = 'all') => {
        teacherSelect.innerHTML = '<option value="">Selecione um professor</option>';
        
        let teachersToShow = teacherScheduleData.professores;
        if (selectedArea !== 'all') {
            teachersToShow = teacherScheduleData.professores.filter(p => p.area === selectedArea);
        }

        const sortedTeachers = [...teachersToShow].sort((a, b) => a.nome.localeCompare(b.nome));
        sortedTeachers.forEach(teacher => {
            const option = document.createElement('option');
            option.value = teacher.nome;
            option.textContent = teacher.nome;
            teacherSelect.appendChild(option);
        });
        teacherSelect.disabled = false;
    };

    areaFilterSelect.addEventListener('change', (e) => {
        populateTeacherSelect(e.target.value);
    });

    populateAreaFilter();
    populateTeacherSelect(); // Popula inicialmente com todos

    // Lógica principal ao clicar no botão
    findBtn.addEventListener('click', () => {
        const absentTeacherName = teacherSelect.value;
        const dayOfWeek = daySelect.value;

        if (!absentTeacherName || !dayOfWeek) {
            resultsArea.innerHTML = `<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg shadow-sm" role="alert"><p class="font-bold">Atenção</p><p>Por favor, selecione todos os filtros para continuar.</p></div>`;
            return;
        }

        // Limpa o estado de confirmações a cada nova busca
        resetAppState();

        resultsArea.innerHTML = '';
        actionsContainer.innerHTML = '';
        exportContainer.innerHTML = '';
        loadingSpinner.classList.remove('hidden');

        setTimeout(() => {
            const absentTeacher = teacherScheduleData.professores.find(p => p.nome === absentTeacherName);
            const absentTeacherClasses = (absentTeacher.horarios || []).filter(h => h.dia === dayOfWeek);

            if (absentTeacherClasses.length === 0) {
                displayNoClassesMessage(absentTeacherName, dayOfWeek);
            } else {
                displayResults(absentTeacher, absentTeacherClasses, dayOfWeek);
            }
             loadingSpinner.classList.add('hidden');
        }, 500); // Simula um tempo de processamento
    });

    // Delegação de eventos para todos os botões de ação
    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('button'); // Garante que estamos pegando o botão
        if (!target) return;

        const classId = target.dataset.classId;
        const substituteName = target.dataset.substituteName;

        if (target.matches('.confirm-btn')) {
            appState.confirmedSubstitutions[classId] = substituteName;
            render();
        }

        if (target.matches('.undo-btn')) {
            delete appState.confirmedSubstitutions[classId];
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
        const absentTeacherName = teacherSelect.value;
        const dayOfWeek = daySelect.value;
        const absentTeacher = teacherScheduleData.professores.find(p => p.nome === absentTeacherName);
        const absentTeacherClasses = (absentTeacher.horarios || [])
            .filter(h => h.dia === dayOfWeek && !isDuringBreak(h))
            .sort((a, b) => parseTimeToMinutes(a.inicio) - parseTimeToMinutes(b.inicio));

        let currentConfirmations = { ...appState.confirmedSubstitutions };

        absentTeacherClasses.forEach(classSlot => {
            const classId = `${dayOfWeek}_${classSlot.inicio}_${classSlot.fim}`;
            // Only auto-confirm if not already confirmed
            if (!currentConfirmations[classId]) {
                const candidates = findAvailableTeachers(classSlot, dayOfWeek, absentTeacher, currentConfirmations);
                if (candidates.length > 0) {
                    currentConfirmations[classId] = candidates[0].nome; // Confirm the best candidate
                }
            }
        });

        appState.confirmedSubstitutions = currentConfirmations;
        render();
    };

    const render = () => {
        const absentTeacherName = teacherSelect.value;
        const dayOfWeek = daySelect.value;
        appState.currentAbsentTeacher = teacherScheduleData.professores.find(p => p.nome === absentTeacherName);
        appState.currentDay = dayOfWeek;
        const absentTeacherClasses = (appState.currentAbsentTeacher.horarios || []).filter(h => h.dia === dayOfWeek);
        displayResults(appState.currentAbsentTeacher, absentTeacherClasses, dayOfWeek);
    };

    const findAvailableTeachers = (classToCover, dayOfWeek, absentTeacher, currentConfirmations) => {
        const candidates = [];
        teacherScheduleData.professores.forEach(potentialSubstitute => {
            // 1. Não sugerir o próprio professor ausente
            if (potentialSubstitute.nome === absentTeacher.nome) return;

            // Extra: Ignorar professores em licença ou indisponíveis
            if (excludedTeachers.includes(potentialSubstitute.nome)) return;

            // 2. Verificar se o substituto está em seu "dia de área" (dia de folga da área)
            const diaDeAreaDoSubstituto = teacherScheduleData.diasDeArea[potentialSubstitute.area];
            if (diaDeAreaDoSubstituto === dayOfWeek) return;

            // 3. Verificar se o substituto já foi confirmado para um horário conflitante
            const isConfirmedInConflict = Object.entries(currentConfirmations).some(([confirmedClassId, confirmedSubstituteName]) => {
                if (potentialSubstitute.nome === confirmedSubstituteName) {
                    // Extrai o horário do ID da aula confirmada
                    const [_day, start, end] = confirmedClassId.split('_');
                    const confirmedSlot = { inicio: start, fim: end };
                    return isTimeOverlap(classToCover, confirmedSlot);
                }
                return false;
            });
            if (isConfirmedInConflict) return;

            // 3. Verificar se há conflito de horário com as aulas do substituto
            const hasConflict = (potentialSubstitute.horarios || []).some(schedule => 
                schedule.dia === dayOfWeek && isTimeOverlap(classToCover, schedule)
            );

            if (!hasConflict) {
                // 4. Calcular pontuação e gerar justificativa com base nos critérios
                const scores = {
                    workload: 0, // NOVO: Para balancear a carga de trabalho
                    sameCourse: 0, // Novo: Prioridade para quem conhece o curso (ADM, DS, etc.)
                    sameGrade: 0, // Novo: Prioridade para quem conhece a série
                    sameTurma: 0, // Prioridade alta para quem já conhece a turma
                    sameArea: 0,  // Prioridade baixa, como solicitado
                };
                const justifications = ['Disponível no horário']; // Sempre começa com a disponibilidade

                const substitutionsCount = Object.values(currentConfirmations).filter(name => name === potentialSubstitute.nome).length;
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
                    scores.sameTurma = 50; // Pontuação alta por conhecer a turma
                    justifications.push('Já leciona para esta turma.');
                }
                
                if (potentialSubstitute.area === absentTeacher.area) {
                    scores.sameArea = 10; // Pontuação baixa para dar prioridade à disponibilidade e turma
                    justifications.push(`Da mesma área: <strong>${potentialSubstitute.area}</strong>.`);
                }

                // 5. Encontrar a próxima aula do professor no mesmo dia para dar mais contexto
                const substituteClassesToday = (potentialSubstitute.horarios || [])
                    .filter(h => h.dia === dayOfWeek)
                    .sort((a, b) => parseTimeToMinutes(a.inicio) - parseTimeToMinutes(b.inicio));

                const nextClass = substituteClassesToday.find(h => parseTimeToMinutes(h.inicio) > parseTimeToMinutes(classToCover.inicio));

                if (nextClass) {
                    justifications.push(`Próxima aula às ${nextClass.inicio}`);
                } else if (substituteClassesToday.length > 0) {
                    // Tem aulas no dia, mas nenhuma depois desta
                    justifications.push('Última aula do dia seria esta.');
                }

                const totalScore = Object.values(scores).reduce((sum, val) => sum + val, 0);

                candidates.push({ 
                    ...potentialSubstitute, 
                    score: totalScore, 
                    justification: justifications.join(' | '),
                    substitutionsCount: substitutionsCount
                });
            }
        });
        // Ordena por pontuação (maior primeiro) e depois por nome
        return candidates.sort((a, b) => b.score - a.score || a.nome.localeCompare(b.nome));
    };

    const displayNoClassesMessage = (teacherName, day) => {
        resultsArea.innerHTML = `
            <div class="bg-sky-100 border-l-4 border-sky-500 text-sky-800 p-4 rounded-lg shadow-sm" role="alert">
                <p class="font-bold">Nenhuma aula encontrada</p>
                <p>${teacherName} não possui aulas cadastradas na <strong>${day}</strong>.</p>
            </div>`;
    };

    const displayResults = (absentTeacher, classes, day) => {
        let html = `<h2 class="text-2xl font-bold mb-6 text-slate-600">Aulas de ${absentTeacher.nome} (${day})</h2>`;
        let trashHtml = '';
        const actionsContainer = document.getElementById('actions-container');
        const exportContainer = document.getElementById('export-container');
        const trashArea = document.getElementById('trash-area');
        
        const sortedClasses = classes.sort((a,b) => parseTimeToMinutes(a.inicio) - parseTimeToMinutes(b.inicio));
        
        sortedClasses.forEach((classSlot) => {
            const classId = `${day}_${classSlot.inicio}_${classSlot.fim}`;
            if (appState.ignoredClasses[classId]) {
                trashHtml += generateTrashCard(classSlot, day);
            } else {
                html += generateClassCard(classSlot, day, absentTeacher);
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

        // Adiciona o botão de auto-confirmar se houver aulas que precisam de substituto
        const needsSubstitution = sortedClasses.some(c => !isDuringBreak(c) && !appState.ignoredClasses[`${day}_${c.inicio}_${c.fim}`]);
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
            exportContainer.innerHTML = `
                <button id="copy-summary-btn" class="bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-slate-700 transition-all">Copiar Resumo para WhatsApp</button>
            `;
            document.getElementById('copy-summary-btn').addEventListener('click', copySummaryToClipboard);
        } else {
            exportContainer.innerHTML = '';
        }

         // Adiciona a animação de entrada
        document.querySelectorAll('.card-enter').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('card-enter-active');
            }, index * 100);
        });
    };
    
    const generateClassCard = (classSlot, day, absentTeacher) => {
        const classId = `${day}_${classSlot.inicio}_${classSlot.fim}`;
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
                            <p class="text-slate-600">${classSlot.turma}</p>
                        </div>
                        <div class="flex items-center gap-4 mt-2 md:mt-0">
                            <p class="font-semibold text-green-800">Confirmado: <strong>${substituteDetails.nome}</strong></p>
                            <button data-class-id="${classId}" class="undo-btn text-sm text-red-500 hover:text-red-700 font-medium">Desfazer</button>
                        </div>
                    </div>
                </div>
            `;
        }
        
        const candidates = findAvailableTeachers(classSlot, day, absentTeacher, appState.confirmedSubstitutions);
        let candidatesHtml = '';
        if (candidates.length > 0) {
            candidatesHtml = candidates.slice(0, 5).map((c, i) => `
                <li class="flex flex-col sm:flex-row justify-between sm:items-center p-3 rounded-lg ${i === 0 ? 'bg-indigo-50/70' : ''} transition-colors hover:bg-slate-100/80">
                    <div class="w-full sm:w-auto">
                        <div class="flex items-center">
                            <p class="font-semibold text-slate-800">${c.nome}</p>
                            ${c.substitutionsCount > 0 ? `
                                <span class="ml-2 text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full" title="Este professor já tem ${c.substitutionsCount} substituição(ões) confirmada(s) hoje.">
                                    Já substitui
                                </span>
                            ` : ''}
                        </div>
                        <p class="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-0">${c.justification}</p>
                    </div>
                    <div class="flex items-center gap-3 mt-3 sm:mt-0 self-end sm:self-center">
                        <span class="text-xs font-semibold px-2 py-1 rounded-full ${getAreaColor(c.area)}">${c.area}</span>
                        <button data-class-id="${classId}" data-substitute-name="${c.nome}" class="confirm-btn bg-indigo-500 text-white text-xs font-bold py-1 px-3 rounded-full hover:bg-indigo-600">Confirmar</button>
                    </div>
                </li>
            `).join('');
        } else {
            candidatesHtml = `<li class="p-3 text-center text-slate-500">Nenhum professor compatível encontrado.</li>`;
        }

        return `
            <div class="bg-white p-5 rounded-lg shadow-sm mb-6 card card-enter border-l-4 border-indigo-500">
                <div class="flex flex-col md:flex-row justify-between md:items-center mb-4 pb-4 border-b">
                    <div class="flex-grow">
                        <h3 class="text-xl font-bold text-indigo-700">${classSlot.inicio} - ${classSlot.fim}</h3>
                        <p class="text-slate-600">${classSlot.turma}</p>
                    </div>
                    <div class="flex items-center gap-2 mt-3 md:mt-0">
                        <span class="text-sm font-semibold px-3 py-1 rounded-full ${getAreaColor(absentTeacher.area)}">${absentTeacher.area}</span>
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

    const generateTrashCard = (classSlot, day) => {
        const classId = `${day}_${classSlot.inicio}_${classSlot.fim}`;
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
});