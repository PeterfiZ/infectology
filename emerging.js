Object.assign(window.diseases, {
  emerging: {
    name: 'Újonnan felbukkanó kórokozók',
    icon: window.diseaseMetadata.emerging.icon,
    color: window.diseaseMetadata.emerging.color,
    diseases: [
      {
        id: 'mpox',
        name: 'Mpox (Majomhimlő)',
        pathogen: { type: 'Vírus', name: '<i>Mpox virus</i> (MPXV)', gram: 'dsDNS, Poxviridae', shape: 'tégla alakú' },
        epidemiology: {
          incidence: 'Globális járvány (2022-), endémiás Afrikában',
          risk_groups: ['MSM populáció', 'Eü. dolgozók', 'Háztartási kontaktok'],
          seasonality: 'Nincs',
          transmission: 'Szoros bőr-bőr kontaktus, cseppfertőzés, fomitok, zoonózis (rágcsálók)'
        },
        pathomechanism: {
          steps: [
            'Behatolás: A vírus sérült bőrön, nyálkahártyán vagy a légutakon keresztül jut a szervezetbe.',
            'Replikáció: A behatolási kapuban és a regionális nyirokcsomókban szaporodik (inkubációs idő).',
            'Viremia: A vírus a véráramba jut (elsődleges, majd másodlagos viremia), és eljut a bőrhöz és a belső szervekhez.',
            'Léziók: A bőrben a vírusreplikáció gyulladást, sejtnekrózist és a jellegzetes himlőszerű kiütéseket (macula-papula-vezikula-pusztula-pörk) okozza.'
          ],
          virulence_factors: ['Immunmodulációs fehérjék']
        },
        clinical: {
          incubation: '5-21 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Prodromális tünetek', description: 'Láz, intenzív fejfájás, izomfájdalom, hátfájás és kifejezett gyengeség.', severity: 'mild' },
            { name: 'Lymphadenopathia', description: 'Jellegzetes tünet (nyaki, inguinalis), amely megkülönbözteti a fekete himlőtől és a bárányhimlőtől.', severity: 'moderate' },
            { name: 'Kiütés', description: '1-3 nappal a láz után jelenik meg. Arcon kezdődik, centrifugálisan terjed (tenyér/talp érintett!). Stádiumai: Macula → Papula → Vezikula → Pusztula (köldökös behúzódással) → Pörk. A kiütések gyakran fájdalmasak, gyógyuláskor viszketnek.', severity: 'moderate' },
            { name: 'Nyálkahártya tünetek', description: 'Szájüregi, genitális és perianalis léziók. Proctitis (végbélgyulladás) gyakori szexuális terjedés esetén, ami súlyos fájdalommal jár.', severity: 'severe' }
          ],
          physical_exam: [
            'Centrifugális eloszlású kiütések (tenyér/talp is)',
            'Duzzadt, fájdalmas nyirokcsomók',
            'Genitalis/perianalis léziók',
            'Láz'
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
        pathogen: { type: 'Vírus', name: '<i>Nipah vírus</i> (NiV)', gram: 'RNS, Paramyxoviridae (Henipavirus)', shape: 'pleomorf' },
        epidemiology: {
          incidence: 'Sporadikus járványok (Dél-Ázsia, Délkelet-Ázsia)',
          risk_groups: ['Sertésgondozók', 'Pálmanedv gyűjtők/fogyasztók'],
          seasonality: 'Tél-tavasz (Banglades)',
          transmission: 'Denevér (repülőkutya) vizelet/nyál (pálmanedv), sertés, emberről emberre'
        },
        pathomechanism: {
          steps: [
            'Bejutás: Szennyezett élelmiszer (pl. pálmanedv) fogyasztásával vagy fertőzött állattal (sertés, denevér) való közvetlen kontaktussal.',
            'Szisztémás terjedés: A vírus a véráramba jut (viremia), szabadon vagy fehérvérsejtekhez kötődve.',
            'Vasculitis: Az erek endothel sejtjeit fertőzi meg (Ephrin-B2 receptor), ami szisztémás vasculitist, trombózist és szöveti ischemiát okoz.',
            'Tropizmus: Különös affinitása van a központi idegrendszerhez (átlép a vér-agy gáton) és a tüdőhöz, ahol súlyos gyulladást és nekrózist idéz elő.'
          ],
          virulence_factors: ['Fúziós fehérjék', 'Immunantagonisták']
        },
        clinical: {
          incubation: '4-14 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Prodroma', description: 'Láz, fejfájás, izomfájdalom, torokfájás és hányás.', severity: 'moderate' },
            { name: 'Légúti tünetek', description: 'Köhögés, nehézlégzés, amely atípusos pneumoniává és súlyos esetben akut légzési distressz szindrómává (ARDS) progrediálhat.', severity: 'severe' },
            { name: 'Encephalitis', description: 'Szédülés, tarkókötöttség, tudatzavar, amely gyorsan (24-48 órán belül) kómába torkollhat. Agytörzsi tünetek (areflexia, hypotonia) gyakoriak.', severity: 'severe' }
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
