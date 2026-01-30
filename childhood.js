Object.assign(window.diseases, {
  childhood: {
    name: 'Gyermekkori fertőzések',
    icon: window.diseaseMetadata.childhood.icon,
    color: window.diseaseMetadata.childhood.color,
    diseases: [
      {
        id: 'measles',
        name: 'Kanyaró (Morbilli)',
        pathogen: { type: 'Vírus', name: 'Measles morbillivirus', gram: 'ssRNS, Paramyxoviridae', shape: 'pleomorf' },
        epidemiology: {
          incidence: 'Oltatlan populációban járványos',
          risk_groups: ['Oltatlanok', 'Immunszupprimáltak'],
          seasonality: 'Tél-tavasz',
          transmission: 'Cseppfertőzés (nagyon fertőző! R0=12-18)'
        },
        pathomechanism: {
          steps: ['Légúti bejutás', 'Viremia', 'Endothel/epithel/immunsejtek fertőzése', 'Immunszuppresszió (hónapokig)'],
          virulence_factors: ['Hemagglutinin', 'Fúziós protein']
        },
        clinical: {
          incubation: '10-14 nap',
          onset: 'Prodroma (láz, 3C)',
          symptoms: [
            { name: 'Prodroma (3C)', description: 'Láz (>40°C), Köhögés (Cough), Nátha (Coryza), Conjunctivitis - szinte 100%-ban', severity: 'moderate' },
            { name: 'Koplik-foltok', description: 'Pathognomikus sószemcseszerű foltok a buccán (60-70% a kiütés előtt)', severity: 'mild' },
            { name: 'Kiütés', description: 'Maculopapularis, fül mögül indul → arc → törzs (3. nap) → végtagok (confluál)', severity: 'moderate' }
          ],
          physical_exam: ['Koplik-foltok', 'Exanthema', 'Láz', 'Conjunctivitis'],
          complications: ['Otitis media', 'Pneumonia (óriássejtes)', 'Encephalitis', 'SSPE (évekkel később)']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Leukopenia', interpretation: '-' }],
          microbiology: [
            { test: 'IgM szerológia', finding: 'Pozitív (kiütés után)', significance: 'Diagnosztikus' },
            { test: 'PCR', finding: 'RNS (torok, vizelet)', significance: 'Korai fázis' }
          ]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Lázcsillapítás, folyadék' }] },
          targeted: 'A-vitamin adása csökkenti a morbiditást/mortalitást (WHO ajánlás).',
          prevention: ['MMR vakcina (15 hó, 11 év)']
        },
        guidelines: {
          diagnosis: [
            'Klinikai gyanú: Láz + 3C (köhögés, nátha, conjunctivitis) + Koplik-foltok.',
            'Megerősítés: Anti-kanyaró IgM szerológia.'
          ],
          treatment_indications: [
            'Minden esetben szupportív terápia. A-vitamin adása javasolt a szövődmények csökkentésére.'
          ]
        },
        prognosis: { mortality: 'Fejlett országokban alacsony, fejlődőkben magas (pneumonia)', prognostic_scores: [], factors: 'Életkor, vakcináció státusz' }
      },
      {
        id: 'mumps',
        name: 'Mumpsz (Járványos fültőmirigy-gyulladás / Parotitis epidemica)',
        pathogen: { type: 'Vírus', name: 'Mumps orthorubulavirus', gram: 'ssRNS, Paramyxoviridae', shape: 'pleomorf' },
        epidemiology: {
          incidence: 'Oltatlanokban',
          risk_groups: ['Oltatlanok'],
          seasonality: 'Tél-tavasz',
          transmission: 'Cseppfertőzés, nyál'
        },
        pathomechanism: {
          steps: ['Légúti bejutás', 'Viremia', 'Mirigyszövetek (parotis, here, pancreas) és KIR fertőzése'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '16-18 nap',
          onset: 'Akut',
          symptoms: [
            { name: 'Parotitis', description: 'Fültőmirigy duzzanat (95% tüneteseknél), kezdetben egyoldali, majd kétoldali (90%)', severity: 'moderate' },
            { name: 'Láz', description: 'Mérsékelt, prodromális', severity: 'mild' },
            { name: 'Orchitis', description: 'Heregyulladás (pubertás utáni fiúk 20-30%-a), fájdalmas', severity: 'severe' }
          ],
          physical_exam: ['Parotis duzzanat (fülcimpa elemelkedik)', 'Here duzzanat/fájdalom'],
          complications: ['Meningitis (aszepszis)', 'Orchitis (sterilitás ritka)', 'Pancreatitis', 'Süketség']
        },
        diagnostics: {
          laboratory: [{ test: 'Amiláz', finding: 'Emelkedett (nyálmirigy/pancreas eredet)', interpretation: '-' }],
          microbiology: [{ test: 'IgM szerológia', finding: 'Pozitív', significance: 'Diagnosztikus' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Fájdalomcsillapítás, borogatás' }] },
          targeted: 'Nincs.',
          prevention: ['MMR vakcina']
        },
        guidelines: {
          diagnosis: [
            'Klinikai gyanú: Akut, fájdalmas fültőmirigy-duzzanat.',
            'Megerősítés: Anti-mumpsz IgM szerológia.'
          ],
          treatment_indications: [
            'Szupportív terápia. Orchitis esetén ágynyugalom, here hűtése, NSAID.'
          ]
        },
        prognosis: { mortality: 'Nagyon alacsony', prognostic_scores: [], factors: 'Életkor, vakcináció' }
      },
      {
        id: 'rubella',
        name: 'Rózsahimlő (Rubella)',
        pathogen: { type: 'Vírus', name: 'Rubella virus', gram: 'ssRNS, Matonaviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Ritka (oltás miatt)',
          risk_groups: ['Oltatlanok', 'Terhesek (magzat!)'],
          seasonality: 'Tavasz',
          transmission: 'Cseppfertőzés'
        },
        pathomechanism: {
          steps: ['Légúti bejutás', 'Viremia', 'Bőr/nyirokcsomó érintettség', 'Transzplacentáris átjutás (teratogén!)'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '14-21 nap',
          onset: 'Enyhe',
          symptoms: [
            { name: 'Kiütés', description: 'Apróelemű, halvány rózsaszín (50-80%-ban), arcról terjed lefelé, 3 nap alatt eltűnik', severity: 'mild' },
            { name: 'Lymphadenopathia', description: 'Occipitalis, retroauricularis, cervicalis posterior (közel 100%)', severity: 'moderate' },
            { name: 'Arthralgia/Arthritis', description: 'Felnőtt nőkben gyakori (akár 70%)', severity: 'mild' }
          ],
          physical_exam: ['Nyirokcsomó duzzanat (tarkó)', 'Kiütés'],
          complications: ['Congenitalis Rubella Szindróma (CRS): szívhiba, katarakta, süketség', 'Arthritis', 'Encephalitis (ritka)']
        },
        diagnostics: {
          microbiology: [{ test: 'IgM szerológia', finding: 'Pozitív', significance: 'Diagnosztikus' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: '-' }] },
          targeted: 'Nincs.',
          prevention: ['MMR vakcina', 'Terhesek szűrése']
        },
        guidelines: {
          diagnosis: [
            'Klinikai gyanú: Enyhe kiütés + jellegzetes retroauricularis/occipitalis nyirokcsomó-duzzanat.',
            'Megerősítés: Anti-rubella IgM szerológia. Terhességben kritikus a diagnózis!'
          ],
          treatment_indications: [
            'Szupportív terápia. Congenitalis Rubella Szindróma megelőzése a legfőbb cél.'
          ]
        },
        prognosis: { mortality: 'Jó, kivéve CRS' }
      },
      {
        id: 'scarlatina',
        name: 'Skarlát (Vörheny)',
        pathogen: { type: 'Baktérium', name: 'Streptococcus pyogenes (GAS)', gram: 'Gram-pozitív', shape: 'lánc' },
        epidemiology: {
          incidence: 'Gyakori gyermekkorban',
          risk_groups: ['5-15 évesek'],
          seasonality: 'Tél-tavasz',
          transmission: 'Cseppfertőzés'
        },
        pathomechanism: {
          steps: ['Pharyngitis', 'Erythrogen toxin termelés (szuperantigén)', 'Bőrreakció'],
          virulence_factors: ['Erythrogen toxin (SpeA, B, C)']
        },
        clinical: {
          incubation: '2-5 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Torokfájás', description: 'Súlyos pharyngitis (>90%)', severity: 'moderate' },
            { name: 'Láz', description: 'Magas, hirtelen kezdet', severity: 'moderate' },
            { name: 'Kiütés', description: 'Diffúz vörös, "smirgli" tapintású, nyomásra elhalványul (hajlatokban Pastia-vonalak)', severity: 'moderate' },
            { name: 'Nyelv', description: 'Fehér epernyelv (1-2. nap) → Vörös málna nyelv (4-5. nap)', severity: 'moderate' }
          ],
          physical_exam: ['Pharynx hyperaemia', 'Málnanyelv', 'Filatov-jel (száj körüli sápadtság)', 'Pastia-vonalak (hajlatokban)', 'Hámlás (később)'],
          complications: ['Rheumás láz', 'Glomerulonephritis', 'Peritonsillaris tályog']
        },
        diagnostics: {
          microbiology: [
            { test: 'Torokváladék tenyésztés', finding: 'Strep. pyogenes', significance: 'Gold standard' },
            { test: 'Gyorsteszt (Strep A)', finding: 'Pozitív', significance: 'Gyors' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Penicillin V', dose: 'PO', duration: '10 nap', note: 'Első választás' },
              { drug: 'Amoxicillin', dose: 'PO', duration: '10 nap', note: 'Alternatíva' },
              { drug: 'Macrolid (pl. Azithromycin)', dose: 'PO', duration: '5 nap', note: 'Penicillin allergia esetén' }
            ]
          },
          targeted: 'Penicillin.',
          prevention: ['Higiénia', 'Nincs vakcina']
        },
        guidelines: {
          diagnosis: [
            'Klinikai gyanú (Centor/FeverPAIN score) + Strep A gyorsteszt vagy torokváladék tenyésztés.'
          ],
          treatment_indications: [
            'Minden igazolt GAS pharyngitis/tonsillitis kezelendő a reumás láz megelőzése érdekében.'
          ],
          first_line: ['Penicillin V 10 napig. Allergia esetén makrolid.']
        },
        prognosis: { mortality: 'Kezeléssel kiváló' }
      },
      {
        id: 'mononucleosis',
        name: 'Infectious Mononucleosis (Csókbetegség)',
        pathogen: { type: 'Vírus', name: 'Epstein-Barr vírus (EBV)', gram: 'dsDNS, Herpesviridae (HHV-4)', shape: 'gömb' },
        epidemiology: {
          incidence: 'Serdülők/fiatal felnőttek (90% felnőttkorra átesik)',
          risk_groups: ['Fiatalok'],
          seasonality: 'Nincs',
          transmission: 'Nyál (csók), cseppfertőzés'
        },
        pathomechanism: {
          steps: ['Oropharynx epithel fertőzése', 'B-lymphocyták fertőzése (immortalizáció)', 'Citotoxikus T-sejt válasz (atípusos lymphocyták)', 'Latencia B-sejtekben'],
          virulence_factors: ['LMP, EBNA proteinek']
        },
        clinical: {
          incubation: '4-6 hét',
          onset: 'Fokozatos',
          symptoms: [
            { name: 'Torokfájás', description: 'Súlyos, gyakran pseudomembranosus (>80%)', severity: 'severe' },
            { name: 'Láz', description: 'Elhúzódó (10-14 napig is tarthat), >90%-ban', severity: 'moderate' },
            { name: 'Lymphadenopathia', description: 'Generalizált, szimmetrikus, főleg hátsó nyaki (>90%)', severity: 'moderate' },
            { name: 'Fáradtság', description: 'Kifejezett, hetekig-hónapokig tarthat', severity: 'moderate' }
          ],
          physical_exam: ['Generalizált lymphadenopathia (nyaki dominancia)', 'Hepatosplenomegalia', 'Tonsilla lepedék', 'Ampicillin-rash (ha AB-t kapott)'],
          complications: ['Lépruptúra (ritka, de veszélyes)', 'Légúti obstrukció (tonsilla)', 'Hepatitis', 'Burkitt lymphoma (késői, endémiás)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép', finding: 'Lymphocytosis, atípusos mononuclearis sejtek (>10%)', interpretation: 'Jellegzetes' },
            { test: 'Májenzimek', finding: 'Enyhe emelkedés', interpretation: 'Gyakori' }
          ],
          microbiology: [
            { test: 'Monospot teszt', finding: 'Heterofil antitest pozitív', significance: 'Gyors (gyerekeknél gyakran negatív!)' },
            { test: 'EBV szerológia', finding: 'VCA IgM+, EBNA- (akut)', significance: 'Konfirmálás' }
          ]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Pihenés, folyadék' }] },
          targeted: 'Nincs. Szteroid csak légúti obstrukció esetén.',
          supportive: ['Fizikai kímélet (lépruptúra veszély miatt sporttilalom 3-4 hétig!)'],
          prevention: ['Higiénia']
        },
        guidelines: {
          diagnosis: [
            'Klinikai triász (láz, torokfájás, nycs. duzzanat) + Vérkép (atípusos lymphocyták) + Szerológia (Monospot vagy EBV-specifikus IgM/IgG).'
          ],
          treatment_indications: [
            'Szupportív. Amoxicillin/Ampicillin kerülendő (kiütés).',
            'Fizikai kímélet a lépruptúra megelőzése miatt.'
          ]
        },
        prognosis: { mortality: 'Nagyon alacsony' }
      },
      {
        id: 'exanthema_subitum',
        name: 'Exanthema Subitum (Roseola infantum / Háromnapos láz)',
        pathogen: { type: 'Vírus', name: 'Human Herpesvirus 6 (HHV-6)', gram: 'dsDNS, Herpesviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Csecsemők/kisdedek (6 hó - 2 év) szinte mind átesnek',
          risk_groups: ['Csecsemők'],
          seasonality: 'Egész évben',
          transmission: 'Nyál (tünetmentes hordozó felnőttektől)'
        },
        pathomechanism: {
          steps: ['Nyálkahártya fertőzés', 'Viremia', 'T-sejt tropizmus', 'Latencia'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '5-15 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Magas láz', description: '39-40°C, 3-5 napig (100%), jó általános állapot mellett', severity: 'moderate' },
            { name: 'Kiütés', description: 'Láztalanodás UTÁN jelenik meg (fontos különbség!), rózsaszín maculopapularis', severity: 'mild' },
            { name: 'Nagayama-foltok', description: 'Uvula tövénél lévő fekélyek/papulák', severity: 'mild' }
          ],
          physical_exam: ['Láz', 'Nagokayama-foltok (uvula tövénél)', 'Cervicalis/occipitalis lymphadenopathia', 'Kiütés (később)'],
          complications: ['Lázgörcs (gyakori ok!)', 'Encephalitis (ritka)']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Leukopenia', interpretation: '-' }],
          microbiology: [{ test: 'Klinikai kép', finding: 'Láz utáni kiütés', significance: 'Diagnosztikus' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Lázcsillapítás' }] },
          targeted: 'Nincs.',
          prevention: ['-']
        },
        guidelines: {
          diagnosis: [
            'Jellegzetes klinikai kép: 3-5 nap magas láz, majd a láz megszűnésével megjelenő kiütés.'
          ],
          treatment_indications: [
            'Szupportív. Lázgörcsre való felkészülés/kezelés fontos.'
          ]
        },
        prognosis: { mortality: 'Kiváló' }
      },
      {
        id: 'varicella',
        name: 'Bárányhimlő (Varicella)',
        pathogen: { type: 'Vírus', name: 'Varicella-zoster vírus (VZV)', gram: 'dsDNS, Herpesviridae (HHV-3)', shape: 'gömb' },
        epidemiology: {
          incidence: 'Nagyon gyakori gyermekkorban (oltatlanok)',
          risk_groups: ['Oltatlan gyermekek', 'Immunszupprimáltak', 'Terhesek', 'Felnőttek (súlyosabb)'],
          seasonality: 'Tél-tavasz',
          transmission: 'Cseppfertőzés, hólyagbennék (levegőben terjed!)'
        },
        pathomechanism: {
          steps: ['Légúti bejutás', 'Viremia', 'Bőr és nyálkahártya fertőzés', 'Latencia a szenzoros ganglionokban'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '10-21 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Kiütés', description: 'Polimorf (macula-papula-vezikula-pörk egyszerre), viszkető (100%)', severity: 'moderate' },
            { name: 'Láz', description: 'Mérsékelt (gyermekeknél), felnőtteknél magasabb', severity: 'mild' },
            { name: 'Enanthema', description: 'Szájnyálkahártya hólyagok, fájdalmas', severity: 'moderate' }
          ],
          physical_exam: ['Polimorf kiütések (hajas fejbőrön is!)', 'Láz', 'Lymphadenopathia'],
          complications: ['Bakteriális felülfertőződés (impetiginizálódás)', 'Cerebellitis (ataxia)', 'Pneumonia (felnőttek)', 'Encephalitis', 'Reye-szindróma (aspirin!)']
        },
        diagnostics: {
          microbiology: [{ test: 'Klinikai kép', finding: 'Jellegzetes', significance: 'Diagnosztikus' }, { test: 'PCR', finding: 'VZV DNS', significance: 'Bizonytalan esetben' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Hűsítő rázókeverék NEM javasolt (felülfertőződés), inkább hintőpor vagy semmi. Viszketéscsillapítás.' }] },
          targeted: 'Acyclovir (kockázati csoportoknak, felnőtteknek, immunszupprimáltaknak).',
          prevention: ['Varicella vakcina (kötelező)']
        },
        guidelines: {
          diagnosis: [
            'Klinikai kép: Polimorf, viszkető kiütések, melyek egyszerre több stádiumban vannak jelen.'
          ],
          treatment_indications: [
            'Egészséges gyermekeknél szupportív. Acyclovir javasolt: >12 évesek, krónikus bőr/tüdőbetegség, szteroidot szedők, felnőttek, terhesek.'
          ],
          prevention: ['Kötelező védőoltás. Post-expozíciós profilaxis (oltás vagy VZIG).']
        },
        prognosis: { mortality: 'Alacsony, de szövődmények előfordulnak' }
      },
      {
        id: 'herpes_zoster',
        name: 'Övsömör (Herpes Zoster)',
        pathogen: { type: 'Vírus', name: 'Varicella-zoster vírus (VZV) reaktiváció', gram: 'dsDNS', shape: '-' },
        epidemiology: {
          incidence: 'Főleg idősek, de immunszupprimált gyermekekben is',
          risk_groups: ['Immunszupprimáltak', 'Korábbi varicella'],
          seasonality: 'Nincs',
          transmission: 'Hólyagbennék fertőz (varicellát okozhat szeronegatívnak)'
        },
        pathomechanism: {
          steps: ['Latens vírus reaktivációja a ganglionban', 'Axonális transzport a bőrhöz', 'Dermatómális kiütés'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '-',
          onset: 'Fájdalommal kezdődik',
          symptoms: [
            { name: 'Fájdalom', description: 'Prodromális (70-80%), égető, nyilalló a dermatómában', severity: 'severe' },
            { name: 'Kiütés', description: 'Csoportos vezikulák vörös alapon, egyoldali, dermatómális', severity: 'moderate' }
          ],
          physical_exam: ['Dermatómális eloszlású vezikulák (nem lépi át a középvonalat)'],
          complications: ['Postherpeses neuralgia (PHN)', 'Ophthalmicus zoster (szem)', 'Ramsay Hunt szindróma (fül/arcideg)']
        },
        diagnostics: {
          microbiology: [{ test: 'Klinikai kép', finding: 'Jellegzetes', significance: 'Diagnosztikus' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Acyclovir', dose: '5x800mg PO', duration: '7 nap', note: '72 órán belül kezdve' }, { drug: 'Valacyclovir', dose: '3x1000mg PO', duration: '7 nap', note: 'Jobb biohasznosulás' }] },
          targeted: 'Antivirális szer + Fájdalomcsillapítás.',
          prevention: ['Zoster vakcina (időseknek)']
        },
        guidelines: {
          diagnosis: [
            'Klinikai kép: Egyoldali, dermatómának megfelelő vezikuláris kiütés, gyakran prodromális fájdalommal.'
          ],
          treatment_indications: [
            'Antivirális kezelés (Acyclovir, Valacyclovir) 72 órán belül kezdve csökkenti a tünetek súlyosságát és a postherpeses neuralgia (PHN) kockázatát.',
            'Ophthalmicus zoster esetén sürgős szemészeti konzílium szükséges.'
          ]
        },
        prognosis: { mortality: 'Alacsony, PHN életminőséget rontja' }
      },
      {
        id: 'hsv_infection',
        name: 'Herpes Simplex fertőzések (Gingivostomatitis)',
        pathogen: { type: 'Vírus', name: 'Herpes Simplex Virus 1 (HSV-1)', gram: 'dsDNS, Herpesviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Gyakori kisgyermekkorban (1-3 év)',
          risk_groups: ['Kisgyermekek'],
          seasonality: 'Nincs',
          transmission: 'Nyál, közvetlen kontaktus'
        },
        pathomechanism: {
          steps: ['Mucosa fertőzés', 'Vezikulák, fekélyek', 'Latencia a ganglionokban'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '2-12 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Gingivostomatitis', description: 'Láz, fájdalmas ínygyulladás, fekélyek (leggyakoribb primer forma gyermekeknél)', severity: 'severe' },
            { name: 'Herpes labialis', description: 'Recidíva (ajakherpesz), prodromális bizsergés', severity: 'mild' },
            { name: 'Eczema herpeticum', description: 'Atópiás dermatitis felülfertőződése (súlyos!)', severity: 'severe' }
          ],
          physical_exam: ['Duzzadt, vérző íny', 'Fekélyek a nyelven/szájpadon', 'Cervicalis lymphadenopathia', 'Láz'],
          complications: ['Dehidráció (fájdalom miatt nem iszik)', 'Eczema herpeticum', 'Herpeses ujjgyulladás (herpetic whitlow)', 'Encephalitis']
        },
        diagnostics: {
          microbiology: [{ test: 'Klinikai kép', finding: 'Jellegzetes', significance: 'Diagnosztikus' }, { test: 'PCR', finding: 'HSV DNS', significance: 'Súlyos/atípusos esetben' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Fájdalomcsillapítás, folyadék, ecsetelés' }, { drug: 'Acyclovir', dose: 'PO/IV', duration: '5-7 nap', note: 'Súlyos esetben vagy immunszuppressziónál' }] },
          targeted: 'Acyclovir.',
          prevention: ['Kontaktus kerülése aktív lézióval']
        },
        guidelines: {
          diagnosis: [
            'Klinikai kép: Fájdalmas, duzzadt, vérzékeny íny és fekélyek a szájban, lázzal kísérve kisgyermekkorban.'
          ],
          treatment_indications: [
            'Elsősorban szupportív (fájdalomcsillapítás, folyadékpótlás a dehidráció elkerülésére).',
            'Acyclovir súlyos esetekben, immunkompromittáltaknál vagy eczema herpeticum esetén javasolt.'
          ]
        },
        prognosis: { mortality: 'Alacsony, dehidráció veszély' }
      },
      {
        id: 'pertussis',
        name: 'Pertussis (Szamárköhögés)',
        pathogen: { type: 'Baktérium', name: 'Bordetella pertussis', gram: 'Gram-negatív', shape: 'bacillus' },
        epidemiology: {
          incidence: 'Oltatlan gyermekekben járványos',
          risk_groups: ['Csecsemők (<6 hó)', 'Oltatlan gyermekek', 'Felnőttek (enyhébb)'],
          seasonality: 'Tél-tavasz',
          transmission: 'Cseppfertőzés (nagyon fertőző! R0=12-17)'
        },
        pathomechanism: {
          steps: [
            'Légúti bejutás',
            'Adhézió a ciliákhoz (filamentous hemagglutinin)',
            'Toxintermelés (pertussis toxin → lymphocytosis, köhögési rohamok)',
            'Ciliák pusztulása → mukociliáris clearance zavara'
          ],
          virulence_factors: ['Pertussis toxin (PT)', 'Filamentous hemagglutinin (FHA)', 'Adenylát cikláz toxin (ACT)']
        },
        clinical: {
          incubation: '7-10 nap',
          onset: 'Katarális fázis (1-2 hét)',
          symptoms: [
            { name: 'Katarális fázis', description: 'Enyhe láz, nátha, köhögés (1-2 hét) - legfertőzőbb szakasz', severity: 'mild' },
            { name: 'Paroxysmalis fázis', description: 'Erős köhögési rohamok (100%), whoop (húzós belégzés 60-70%), hányás (50%)', severity: 'severe' },
            { name: 'Konvaleszcens fázis', description: 'Köhögés csökken, de hetekig tarthat ("100 napos köhögés")', severity: 'moderate' }
          ],
          physical_exam: [
            'Köhögési rohamok (whoop jellemző gyermekeken)',
            'Apnoe (csecsemők)',
            'Lymphocytosis (>20,000/µL)',
            'Petechiák (erőlködés miatt)'
          ],
          complications: ['Pneumonia (bakteriális/virális)', 'Encephalopathia', 'Apnoe/halál (csecsemők)', 'Atelektázis', 'Hernia (köhögés miatt)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép', finding: 'Lymphocytosis (>20,000/µL)', interpretation: 'Jellegzetes' },
            { test: 'CRP', finding: 'Normális vagy enyhén emelkedett', interpretation: 'Nem gyulladásos' }
          ],
          microbiology: [
            { test: 'Nasopharyngealis aspirátum tenyésztés', finding: 'Bordetella pertussis', significance: 'Gold standard (korai fázisban)' },
            { test: 'PCR', finding: 'DNS detektálás', significance: 'Gyors, érzékeny' },
            { test: 'Szerológia', finding: 'IgG/IgA emelkedés', significance: 'Késői diagnózis' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Azithromycin', dose: '10mg/kg/nap PO', duration: '5 nap', note: 'Első választás' },
              { drug: 'Clarithromycin', dose: '15mg/kg/nap PO', duration: '7 nap', note: 'Alternatíva' }
            ]
          },
          targeted: 'Makrolid antibiotikum (erythromycin, azithromycin).',
          supportive: ['Szupportív (oxigén, rehidráció)', 'Izoláció (5 nap antibiotikum után)', 'Köhögéscsillapítók NEM (mukus retenció!)'],
          prevention: ['DTP vakcina (kötelező, 3+1 dózis)', 'Felnőttkori emlékeztető']
        },
        guidelines: {
          diagnosis: [
            'Klinikai gyanú (elhúzódó, rohamokban jelentkező köhögés) + Labor (kifejezett lymphocytosis).',
            'Megerősítés: Nasopharyngealis PCR (gold standard).'
          ],
          treatment_indications: [
            'Minden gyanús/igazolt esetet kezelni kell a fertőzőképesség csökkentésére és a tünetek enyhítésére (ha korán kezdik).',
            'Csecsemők kórházi ellátást igényelnek (apnoe veszély).',
            'Kontaktusok profilaxisa szükséges.'
          ],
          first_line: ['Makrolidok (pl. Azithromycin 5 napig).']
        },
        prognosis: {
          mortality: 'Alacsony fejlett országokban, de csecsemőknél magas (1-2%)',
          factors: 'Korai kezelés, vakcináció'
        }
      }
    ]
  }
});