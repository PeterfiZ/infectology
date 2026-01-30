Object.assign(window.diseases, {
  emerging: {
    name: 'Újonnan felbukkanó kórokozók',
    icon: window.diseaseMetadata.emerging.icon,
    color: window.diseaseMetadata.emerging.color,
    diseases: [
      {
        id: 'mpox',
        name: 'Mpox (Majomhimlő)',
        pathogen: { type: 'Vírus', name: 'Mpox virus (MPXV)', gram: 'dsDNS, Poxviridae', shape: 'tégla alakú' },
        epidemiology: {
          incidence: 'Globális járvány (2022-), endémiás Afrikában',
          risk_groups: ['MSM populáció', 'Eü. dolgozók', 'Háztartási kontaktok'],
          seasonality: 'Nincs',
          transmission: 'Szoros bőr-bőr kontaktus, cseppfertőzés, fomitok, zoonózis (rágcsálók)'
        },
        pathomechanism: {
          steps: [
            'Bejutás sérült bőrön/nyálkahártyán',
            'Replikáció a behatolási kapuban és regionális nyirokcsomókban',
            'Viremia',
            'Bőr és nyálkahártya léziók kialakulása'
          ],
          virulence_factors: ['Immunmodulációs fehérjék']
        },
        clinical: {
          incubation: '5-21 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Kiütés', description: 'Macula → Papula → Vezikula → Pusztula → Pörk (fájdalmas!)', severity: 'moderate' },
            { name: 'Lymphadenopathia', description: 'Jellegzetes (megkülönbözteti a himlőtől/bárányhimlőtől)', severity: 'moderate' },
            { name: 'Láz', description: 'Prodromális tünet', severity: 'mild' },
            { name: 'Proctitis', description: 'Végbélfájdalom (szexuális terjedésnél)', severity: 'severe' }
          ],
          physical_exam: [
            'Centrifugális eloszlású kiütések (tenyér/talp is)',
            'Duzzadt, fájdalmas nyirokcsomók',
            'Genitalis/perianalis léziók'
          ],
          complications: ['Bakteriális felülfertőződés', 'Pneumonia', 'Sepszis', 'Encephalitis', 'Szaruhártya hegesedés (vakság)']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Nem specifikus', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'MPXV DNS', significance: 'Gold standard (lézió alapjáról/tetejéről vett minta)' },
            { test: 'Elektronmikroszkópia', finding: 'Poxvírus morfológia', significance: 'Ritkán elérhető' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Fájdalomcsillapítás, sebkezelés, izoláció' }]
          },
          targeted: 'Súlyos esetben: Tecovirimat (antivirális).',
          supportive: ['Fájdalomcsillapítás', 'Folyadékpótlás'],
          prevention: ['Vakcináció (JYNNEOS - 3. generációs himlőoltás)', 'Izoláció', 'Kontaktkutatás']
        },
        prognosis: { mortality: 'Clade II (globális): <0.1%; Clade I (Afrika): akár 10%', prognostic_scores: [], factors: 'Klád típus, kezelés ideje' }
      },
      {
        id: 'nipah',
        name: 'Nipah vírus',
        pathogen: { type: 'Vírus', name: 'Nipah vírus (NiV)', gram: 'RNS, Paramyxoviridae (Henipavirus)', shape: 'pleomorf' },
        epidemiology: {
          incidence: 'Sporadikus járványok (Dél-Ázsia, Délkelet-Ázsia)',
          risk_groups: ['Sertésgondozók', 'Pálmanedv gyűjtők/fogyasztók'],
          seasonality: 'Tél-tavasz (Banglades)',
          transmission: 'Denevér (repülőkutya) vizelet/nyál (pálmanedv), sertés, emberről emberre'
        },
        pathomechanism: {
          steps: [
            'Bejutás (orális/respiratorikus)',
            'Viremia',
            'Endothel sejtek fertőzése (Ephrin-B2 receptor)',
            'Vasculitis, thrombosis, ischaemia',
            'KIR és tüdő érintettség'
          ],
          virulence_factors: ['Fúziós fehérjék', 'Immunantagonisták']
        },
        clinical: {
          incubation: '4-14 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Láz', description: 'Magas', severity: 'severe' },
            { name: 'Fejfájás', description: 'Súlyos', severity: 'severe' },
            { name: 'Légúti tünetek', description: 'Köhögés, atípusos pneumonia', severity: 'moderate' },
            { name: 'Encephalitis', description: 'Szédülés, tudatzavar, kóma (24-48 órán belül)', severity: 'severe' }
          ],
          physical_exam: ['Láz', 'Tarkókötöttség', 'Tudatzavar', 'Myoclonus', 'Areflexia/Hyporeflexia'],
          complications: ['Súlyos encephalitis', 'ARDS', 'Relapszus (hónapokkal/évekkel később)', 'Halál']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Thrombocytopenia, leukopenia', interpretation: '-' }],
          imaging: [{ modality: 'MRI agy', finding: 'Multiplex kis infarktusok, hyperintenzitás', significance: 'Encephalitis' }],
          microbiology: [
            { test: 'RT-PCR', finding: 'RNS (torok, vizelet, liquor)', significance: 'Akut fázis' },
            { test: 'ELISA (IgM/IgG)', finding: 'Pozitív', significance: 'Később' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Nincs', dose: '-', duration: '-', note: 'Azonnali kórházi/ICU felvétel' }]
          },
          targeted: 'Nincs bizonyított antivirális. Monoklonális antitest (m102.4) kísérleti fázisban.',
          supportive: ['Intenzív terápia', 'Lélegeztetés', 'Görcsgátlás'],
          prevention: ['Denevérekkel való kontaktus kerülése', 'Nyers pálmanedv kerülése', 'Beteg sertések izolálása/leölése', 'Kórházi infekciókontroll']
        },
        prognosis: { mortality: 'Magas (40-75%)', prognostic_scores: [], factors: 'Encephalitis kialakulása, kezelés elérhetősége' }
      }
    ]
  }
});