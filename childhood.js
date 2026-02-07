Object.assign(window.diseases, {
  childhood: {
    name: 'Gyermekkori fertőzések',
    icon: window.diseaseMetadata.childhood.icon,
    color: window.diseaseMetadata.childhood.color,
    diseases: [
      {
        id: 'measles',
        name: 'Kanyaró (Morbilli)',
        pathogen: { type: 'Vírus', name: '<i>Measles morbillivirus</i>', gram: 'ssRNS, Paramyxoviridae', shape: 'pleomorf' },
        epidemiology: {
          incidence: 'Oltatlan populációban járványos',
          risk_groups: ['Oltatlanok', 'Immunszupprimáltak'],
          seasonality: 'Tél-tavasz',
          transmission: 'Cseppfertőzés (nagyon fertőző! R0=12-18)'
        },
        pathomechanism: {
          steps: [
            'Behatolás és Szaporodás: A vírus a légúti hámsejteken és az immunsejteken (CD150 receptor) keresztül jut be, majd a regionális nyirokcsomókban szaporodik.',
            'Virémia: A primer virémiát követően a vírus a retikuloendoteliális rendszerben (máj, lép, csontvelő) tovább szaporodik, majd egy masszív szekunder virémia során eljut a bőrhöz, kötőhártyához és a légutakhoz.',
            'Szöveti károsodás: A fertőzött sejtek fúziójával óriássejtek (Warthin-Finkeldey) képződnek. A kiütés a vírus-fertőzött endothel sejtek elleni T-sejtes immunválasz eredménye.',
            'Immunszuppresszió: A vírus átmeneti, de súlyos immunszuppressziót okoz (anergiát), ami hetekig-hónapokig tarthat, hajlamosítva a másodlagos bakteriális fertőzésekre (pl. pneumonia, otitis).'
          ],
          virulence_factors: ['Hemagglutinin', 'Fúziós protein']
        },
        clinical: {
          incubation: '10-14 nap',
          onset: 'Prodroma (láz, 3C)',
          symptoms: [
            { name: 'Prodroma (3C)', description: 'Magas láz (>40°C), Köhögés (Cough), Nátha (Coryza), Conjunctivitis - szinte 100%-ban jelen vannak a kiütés előtt.', severity: 'moderate' },
            { name: 'Koplik-foltok', description: 'Pathognomikus sószemcseszerű foltok a buccán (60-70%-ban), amelyek a kiütés előtt jelennek meg és 1-2 nap alatt eltűnnek.', severity: 'mild' },
            { name: 'Kiütés', description: 'Makulopapularis kiütés, amely a fül mögül indul, majd az arcra, törzsre és végtagokra terjed (cranio-caudalis irány). A kiütések gyakran konfluálnak, majd a megjelenés sorrendjében halványodnak el, barnás pigmentációt és finom hámlást hagyva maguk után.', severity: 'moderate' }
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
        pathogen: { type: 'Vírus', name: '<i>Mumps orthorubulavirus</i>', gram: 'ssRNS, Paramyxoviridae', shape: 'pleomorf' },
        epidemiology: {
          incidence: 'Oltatlanokban',
          risk_groups: ['Oltatlanok'],
          seasonality: 'Tél-tavasz',
          transmission: 'Cseppfertőzés, nyál'
        },
        pathomechanism: {
          steps: [
            'A vírus cseppfertőzéssel jut a felső légutakba, ahol a hámsejtekben szaporodik.',
            'Virémia révén jut el a célszervekbe: nyálmirigyek (főleg parotis), központi idegrendszer, here, pancreas, petefészek.',
            'A mirigyekben duzzanatot, interstitialis ödémát és limfocitás infiltrációt okoz.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '16-18 nap',
          onset: 'Akut',
          symptoms: [
            { name: 'Parotitis', description: 'A fültőmirigy fájdalmas duzzanata (95% tüneteseknél), amely kezdetben egyoldali, majd gyakran kétoldalivá válik. A fülcimpa elemelkedik, rágáskor fájdalmas.', severity: 'moderate' },
            { name: 'Láz', description: 'Mérsékelt láz, fejfájás, izomfájdalom a prodromális szakban.', severity: 'mild' },
            { name: 'Orchitis', description: 'Heregyulladás (pubertás utáni fiúk 20-30%-a), fájdalmas duzzanattal jár, ritkán sterilitást okoz.', severity: 'severe' }
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
        pathogen: { type: 'Vírus', name: '<i>Rubella virus</i>', gram: 'ssRNS, Matonaviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Ritka (oltás miatt)',
          risk_groups: ['Oltatlanok', 'Terhesek (magzat!)'],
          seasonality: 'Tavasz',
          transmission: 'Cseppfertőzés'
        },
        pathomechanism: {
          steps: [
            'Behatolás: A vírus a nasopharynx nyálkahártyáján keresztül jut be, majd a regionális nyirokcsomókba vándorol és ott szaporodik.',
            'Virémia: A vírus a vérárammal eljut a bőrhöz és az ízületekhez. A kiütés és az ízületi tünetek immunkomplex-mediáltak.',
            'Teratogenitás: Terhesség alatt a vírus átjut a placentán, és a magzati sejtekben gátolja a mitózist, valamint apoptózist indukál, ami súlyos fejlődési rendellenességekhez vezet (Congenitalis Rubella Szindróma).'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '14-21 nap',
          onset: 'Enyhe',
          symptoms: [
            { name: 'Kiütés', description: 'Apróelemű, halvány rózsaszín makulopapulózus kiütés, amely az arcon kezdődik és gyorsan terjed lefelé, majd 3 nap alatt nyomtalanul eltűnik.', severity: 'mild' },
            { name: 'Lymphadenopathia', description: 'Jellegzetes a tarkótáji (occipitalis) és fül mögötti (retroauricularis) nyirokcsomók fájdalmas duzzanata.', severity: 'moderate' },
            { name: 'Arthralgia/Arthritis', description: 'Felnőtt nőkben gyakori (akár 70%) ízületi fájdalom vagy gyulladás.', severity: 'mild' },
            { name: 'Forchheimer-foltok', description: 'Petechiák a lágyszájpadon (nem specifikus, de előfordul).', severity: 'mild' }
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
        pathogen: { type: 'Baktérium', name: '<i>Streptococcus pyogenes</i> (GAS)', gram: 'Gram-pozitív', shape: 'lánc' },
        epidemiology: {
          incidence: 'Gyakori gyermekkorban',
          risk_groups: ['5-15 évesek'],
          seasonality: 'Tél-tavasz',
          transmission: 'Cseppfertőzés'
        },
        pathomechanism: {
          steps: [
            'Kolonizáció: A Streptococcus pyogenes (GAS) cseppfertőzéssel jut a garatba, ahol megtapad és pharyngitist okoz.',
            'Toxin termelés: A baktérium eritrogén toxint (szuperantigén) termel, ha bakteriofággal fertőzött.',
            'Szisztémás hatás: A toxin a véráramba jutva generalizált kapilláris tágulatot és gyulladásos bőrreakciót vált ki azoknál, akik nem rendelkeznek ellenanyaggal a toxin ellen.'
          ],
          virulence_factors: ['Erythrogen toxin (SpeA, B, C)']
        },
        clinical: {
          incubation: '2-5 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Torokfájás', description: 'Hirtelen kezdődő, súlyos torokfájás, nyelési nehézség, gyakran hányással kísérve.', severity: 'moderate' },
            { name: 'Láz', description: 'Magas láz, hidegrázás.', severity: 'moderate' },
            { name: 'Kiütés', description: 'Diffúz vörös, "smirgli" tapintású kiütés, amely nyomásra elhalványul. A hajlatokban sötétebb csíkokat alkot (Pastia-vonalak). A gyógyulás során a tenyerek és talpak lemezes hámlása jellemző.', severity: 'moderate' },
            { name: 'Nyelv', description: 'Kezdetben fehér lepedékes ("fehér epernyelv"), majd a lepedék leválása után vörös és papillás ("málnanyelv").', severity: 'moderate' }
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
        pathogen: { type: 'Vírus', name: '<i>Epstein-Barr vírus</i> (EBV)', gram: 'dsDNS, Herpesviridae (HHV-4)', shape: 'gömb' },
        epidemiology: {
          incidence: 'Serdülők/fiatal felnőttek (90% felnőttkorra átesik)',
          risk_groups: ['Fiatalok'],
          seasonality: 'Nincs',
          transmission: 'Nyál (csók), cseppfertőzés'
        },
        pathomechanism: {
          steps: [
            'Az EBV a nyállal terjed és az oropharynx hámsejtjeit fertőzi meg.',
            'Ezt követően a B-limfocitákat fertőzi, amelyekben látens fertőzést alakít ki és immortalizálja őket.',
            'A szervezet erős celluláris immunválaszt ad (CD8+ T-sejtek), ami a vérképben megjelenő atípusos limfocitákhoz ("virociták") és a nyirokszervek megnagyobbodásához vezet.'
          ],
          virulence_factors: ['LMP, EBNA proteinek']
        },
        clinical: {
          incubation: '4-6 hét',
          onset: 'Fokozatos',
          symptoms: [
            { name: 'Torokfájás', description: 'Súlyos, gyakran pseudomembranosus lepedékkel fedett mandulákkal járó garatgyulladás.', severity: 'severe' },
            { name: 'Láz', description: 'Elhúzódó, akár 10-14 napig is tartó láz.', severity: 'moderate' },
            { name: 'Lymphadenopathia', description: 'Generalizált, szimmetrikus nyirokcsomó-duzzanat, amely különösen a hátsó nyaki láncot érinti.', severity: 'moderate' },
            { name: 'Fáradtság', description: 'Kifejezett gyengeség és fáradékonyság, amely hetekig-hónapokig tarthat.', severity: 'moderate' }
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
        id: 'mononucleosis_syndrome',
        name: 'Mononucleosis szindróma (CMV, Toxoplasma, HIV)',
        pathogen: { type: 'Vegyes', name: '<i>Cytomegalovirus (CMV), Toxoplasma gondii, HIV</i>', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Gyakori, heterofil-negatív mononucleosis esetek',
          risk_groups: ['Szexuálisan aktív fiatalok (CMV, HIV)', 'Macskatartók/nyers hús (Toxo)'],
          seasonality: 'Nincs',
          transmission: 'Testnedvek (CMV, HIV), feko-orális/hús (Toxo)'
        },
        pathomechanism: {
          steps: [
            'A kórokozók (CMV, Toxoplasma, HIV) szisztémás fertőzést okoznak, amely immunválaszt vált ki.',
            'Hasonlóan az EBV-hez, aktiválják a T-limfocitákat (atípusos limfociták), de nem a B-sejteket immortalizálják (kivéve EBV).',
            'A tünetek a gazdaszervezet immunválaszának következményei.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: 'Változó (CMV 20-60 nap, HIV 2-4 hét, Toxo 5-23 nap)',
          onset: 'Fokozatos',
          symptoms: [
            { name: 'Láz', description: 'Elhúzódó láz (hetekig tarthat), gyakran ez a vezető tünet.', severity: 'moderate' },
            { name: 'Lymphadenopathia', description: 'Generalizált nyirokcsomó-duzzanat, de kevésbé kifejezett, mint EBV-nél.', severity: 'mild' },
            { name: 'Pharyngitis hiánya/enyhesége', description: 'Ellentétben az EBV-vel, a torokfájás és a mandulagyulladás gyakran hiányzik vagy nagyon enyhe (kivéve akut HIV, ahol lehet fekélyes).', severity: 'moderate' },
            { name: 'Hepatomegalia/Splenomegalia', description: 'Előfordulhat, de ritkább és enyhébb, mint EBV-nél.', severity: 'mild' }
          ],
          physical_exam: ['Láz', 'Enyhe lymphadenopathia', 'Exanthema (HIV-nél gyakori)', 'Pharyngitis hiánya (CMV/Toxo)'],
          complications: ['Hepatitis', 'Pneumonia', 'Guillain-Barré szindróma', 'Congenitalis fertőzés (terhességben!)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép', finding: 'Lymphocytosis, atípusos mononuclearis sejtek', interpretation: 'Hasonló az EBV-hez' },
            { test: 'Májenzimek', finding: 'Enyhe emelkedés', interpretation: 'Gyakori' }
          ],
          microbiology: [
            { test: 'Monospot teszt', finding: 'NEGATÍV', significance: 'Kulcsfontosságú különbség az EBV-től!' },
            { test: 'CMV szerológia', finding: 'IgM pozitív', significance: 'CMV igazolása' },
            { test: 'Toxoplasma szerológia', finding: 'IgM pozitív', significance: 'Toxoplasma igazolása' },
            { test: 'HIV teszt', finding: 'Ag/Ab pozitív / PCR', significance: 'Akut HIV kizárása kötelező!' }
          ]
        },
        differential: [
          { disease: 'EBV Mononucleosis', distinguishing: 'Súlyos pharyngitis, Monospot pozitív' },
          { disease: 'Streptococcus pharyngitis', distinguishing: 'Gennyes mandulák, leukocytosis (nem lymphocytosis)' },
          { disease: 'Lymphoma', distinguishing: 'Láz, fogyás, éjszakai izzadás, fixált nyirokcsomók' }
        ],
        therapy: {
          empirical: { outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Tüneti kezelés' }] },
          targeted: 'CMV/Toxo: immunkompetenseknél általában nem igényel kezelést. HIV: ART indítása. Terhességben speciális kezelés!',
          prevention: ['Higiénia', 'Biztonságos szex', 'Húsok átsütése']
        },
        guidelines: {
          diagnosis: [
            'Mononucleosis szindróma (láz, lymphocytosis) negatív Monospot teszttel ("Heterofil-negatív mononucleosis").',
            'Differenciálás: CMV (idősebbek, láz dominál), Toxoplasma (nyaki nycs.), Akut HIV (kiütés, rizikómagatartás).'
          ],
          treatment_indications: [
            'Szupportív. Immunszupprimáltaknál vagy súlyos szervi érintettségnél specifikus terápia (Ganciclovir, Pyrimethamin/Sulfadiazin).'
          ]
        },
        prognosis: { mortality: 'Kiváló immunkompetenseknél' }
      },
      {
        id: 'exanthema_subitum',
        name: 'Exanthema Subitum (Roseola infantum / Háromnapos láz)',
        pathogen: { type: 'Vírus', name: '<i>Human Herpesvirus 6</i> (HHV-6)', gram: 'dsDNS, Herpesviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Csecsemők/kisdedek (6 hó - 2 év) szinte mind átesnek',
          risk_groups: ['Csecsemők'],
          seasonality: 'Egész évben',
          transmission: 'Nyál (tünetmentes hordozó felnőttektől)'
        },
        pathomechanism: {
          steps: [
            'A HHV-6 vírus cseppfertőzéssel terjed, és élethosszig tartó látens fertőzést hoz létre.',
            'A primer fertőzés során a vírus a nyálmirigyekben és a limfocitákban szaporodik.',
            'A virémia magas lázat okoz, majd a láz hirtelen megszűnésekor immunmediált mechanizmussal jelennek meg a kiütések.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '5-15 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Magas láz', description: 'Hirtelen kezdődő, 3-5 napig tartó magas láz (39-40°C), miközben a gyermek általános állapota meglepően jó.', severity: 'moderate' },
            { name: 'Kiütés', description: 'A láz kritikus csökkenésével egyidőben vagy utána jelennek meg a rózsaszín, makulopapulózus kiütések a törzsön, majd a nyakon.', severity: 'mild' },
            { name: 'Nagayama-foltok', description: 'Ulcerációk vagy papulák a lágyszájpadon és az uvula tövénél.', severity: 'mild' }
          ],
          physical_exam: ['Láz', 'Nagayama-foltok (uvula tövénél)', 'Cervicalis/occipitalis lymphadenopathia', 'Kiütés (később)'],
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
        pathogen: { type: 'Vírus', name: '<i>Varicella-zoster vírus</i> (VZV)', gram: 'dsDNS, Herpesviridae (HHV-3)', shape: 'gömb' },
        epidemiology: {
          incidence: 'Nagyon gyakori gyermekkorban (oltatlanok)',
          risk_groups: ['Oltatlan gyermekek', 'Immunszupprimáltak', 'Terhesek', 'Felnőttek (súlyosabb)'],
          seasonality: 'Tél-tavasz',
          transmission: 'Cseppfertőzés, hólyagbennék (levegőben terjed!)'
        },
        pathomechanism: {
          steps: [
            'Behatolás: A VZV a légutakon keresztül jut be, majd a regionális nyirokcsomókban szaporodik.',
            'Virémia: A primer virémia után a vírus a májban és lépben szaporodik, majd egy szekunder, T-sejt asszociált virémia során eljut a bőrbe és a nyálkahártyákra.',
            'Bőrtünetek: A vírus a bőrben lévő hámsejteket fertőzi, intraepidermális hólyagokat és nekrózist okozva.',
            'Latencia: A fertőzés után a vírus az érzőidegek mentén visszahúzódik a gerincvelői hátsó gyöki ganglionokba, ahol látens formában megmarad.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '10-21 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Kiütés', description: 'Viszkető, polimorf kiütések (makula, papula, vezikula, pörk) jelennek meg hullámokban, így egy időben minden stádium látható ("csillagos égbolt"). A friss hólyagok "rózsasziromra hullott harmatcseppre" emlékeztetnek.', severity: 'moderate' },
            { name: 'Láz', description: 'Mérsékelt láz a kiütések megjelenésekor.', severity: 'mild' },
            { name: 'Enanthema', description: 'Fájdalmas hólyagok a szájnyálkahártyán.', severity: 'moderate' }
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
        pathogen: { type: 'Vírus', name: '<i>Varicella-zoster vírus</i> (VZV) reaktiváció', gram: 'dsDNS', shape: '-' },
        epidemiology: {
          incidence: 'Főleg idősek, de immunszupprimált gyermekekben is',
          risk_groups: ['Immunszupprimáltak', 'Korábbi varicella'],
          seasonality: 'Nincs',
          transmission: 'Hólyagbennék fertőz (varicellát okozhat szeronegatívnak)'
        },
        pathomechanism: {
          steps: [
            'A látens VZV reaktiválódik a szenzoros ganglionokban (pl. immunszuppresszió vagy idős kor miatt).',
            'A vírus az érzőidegek axonjain keresztül vándorol a bőrhöz.',
            'A megfelelő dermatómában gyulladást, fájdalmat és hólyagos kiütést okoz.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '-',
          onset: 'Fájdalommal kezdődik',
          symptoms: [
            { name: 'Fájdalom', description: 'Prodromális, égető, nyilalló fájdalom az érintett dermatómában, amely napokkal a kiütés előtt jelentkezhet.', severity: 'severe' },
            { name: 'Kiütés', description: 'Csoportos, fájdalmas hólyagok vörös alapon, amelyek szigorúan egyoldaliak és nem lépik át a középvonalat.', severity: 'moderate' }
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
        pathogen: { type: 'Vírus', name: '<i>Herpes Simplex Virus 1</i> (HSV-1)', gram: 'dsDNS, Herpesviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Gyakori kisgyermekkorban (1-3 év)',
          risk_groups: ['Kisgyermekek'],
          seasonality: 'Nincs',
          transmission: 'Nyál, közvetlen kontaktus'
        },
        pathomechanism: {
          steps: [
            'A HSV-1 közvetlen kontaktussal fertőzi a nyálkahártyát vagy a sérült bőrt.',
            'A hámsejtekben szaporodva sejtpusztulást, hólyagképződést és fekélyeket okoz.',
            'A vírus bejut az érzőidegek végződéseibe, és retrográd transzporttal a ganglionokba jut, ahol látenssé válik.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '2-12 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Gingivostomatitis', description: 'Kisgyermekek primer fertőzése. Magas láz, fájdalmas, duzzadt, vérző íny, és számos fekély a szájnyálkahártyán. Az evés/ivás fájdalmas.', severity: 'severe' },
            { name: 'Herpes labialis', description: 'Rezidív fertőzés (ajakherpesz), amelyet prodromális bizsergés előz meg.', severity: 'mild' },
            { name: 'Eczema herpeticum', description: 'Atópiás dermatitis felülfertőződése, kiterjedt hólyagos kiütésekkel és lázzal járó súlyos állapot.', severity: 'severe' }
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
        pathogen: { type: 'Baktérium', name: '<i>Bordetella pertussis</i>', gram: 'Gram-negatív', shape: 'bacillus' },
        epidemiology: {
          incidence: 'Oltatlan gyermekekben járványos',
          risk_groups: ['Csecsemők (<6 hó)', 'Oltatlan gyermekek', 'Felnőttek (enyhébb)'],
          seasonality: 'Tél-tavasz',
          transmission: 'Cseppfertőzés (nagyon fertőző! R0=12-17)'
        },
        pathomechanism: {
          steps: [
            'Adhézió: A Bordetella pertussis a légúti csillós hámsejtekhez tapad (filamentózus hemagglutinin).',
            'Toxinhatás: Toxinokat termel (pertussis toxin, trachealis citotoxin), amelyek megbénítják a csillókat, gátolják a mukociliáris clearance-t és lokális gyulladást, nekrózist okoznak.',
            'Szisztémás hatás: A pertussis toxin gátolja a limfociták kilépését az erekből a nyirokcsomókba, ami a vérben extrém magas limfocitaszámot (lymphocytosis) eredményez.'
          ],
          virulence_factors: ['Pertussis toxin (PT)', 'Filamentous hemagglutinin (FHA)', 'Adenylát cikláz toxin (ACT)']
        },
        clinical: {
          incubation: '7-10 nap',
          onset: 'Katarális fázis (1-2 hét)',
          symptoms: [
            { name: 'Katarális fázis', description: 'Enyhe láz, nátha, köhögés (1-2 hét). Ez a legfertőzőbb szakasz, de nehéz elkülöníteni a náthától.', severity: 'mild' },
            { name: 'Paroxysmalis fázis', description: 'Rohamszerű, görcsös köhögés, amelyet mély, húzó belégzés ("whoop") kísér. A roham végén gyakran hányás jelentkezik. Csecsemőknél apnoe lehet a vezető tünet.', severity: 'severe' },
            { name: 'Konvaleszcens fázis', description: 'A köhögés lassan enyhül, de hónapokig visszatérhet ("100 napos köhögés").', severity: 'moderate' }
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
          prevention: ['DTP vakcina (kötelező, 3+1 dózis)', 'Felnőttkori emlékeztető', 'Terhesek oltása a 3. trimeszterben (magzat védelme)']
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
      },
      {
        id: 'hand_foot_mouth',
        name: 'Kéz-láb-száj betegség (Hand, Foot, and Mouth Disease)',
        pathogen: { type: 'Vírus', name: '<i>Coxsackie A16, Enterovirus 71</i>', gram: 'ssRNS, Picornaviridae', shape: 'ikozahidrális' },
        epidemiology: {
          incidence: 'Gyakori gyermekkorban (<5-10 év)',
          risk_groups: ['Kisgyermekek', 'Közösségek'],
          seasonality: 'Nyár-ősz',
          transmission: 'Feko-orális, cseppfertőzés, hólyagbennék'
        },
        pathomechanism: {
          steps: [
            'A vírus a szájüregbe jutva a garat és a bél nyirokszöveteiben szaporodik.',
            'Virémia révén jut el a bőrhöz és a nyálkahártyákhoz.',
            'A bőrön és a szájnyálkahártyán gyulladást, hólyagképződést okoz.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '3-7 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Prodroma', description: 'Láz, torokfájás, étvágytalanság, rossz közérzet.', severity: 'mild' },
            { name: 'Enanthema', description: 'Fájdalmas hólyagok és fekélyek a nyelven, pofanyálkahártyán (herpangina-szerű).', severity: 'moderate' },
            { name: 'Exanthema', description: 'Nem viszkető, vörös udvarú hólyagok vagy papulák a tenyereken, talpakon, esetleg a pelenka területén.', severity: 'moderate' }
          ],
          physical_exam: ['Hólyagok a tenyéren/talpon', 'Fekélyek a szájban', 'Láz'],
          complications: ['Dehidráció (fájdalmas nyelés)', 'Körömleválás (onychomadesis - hetekkel később)', 'Asepticus meningitis (ritka, EV71)', 'Encephalitis (EV71)']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Normál', interpretation: '-' }],
          microbiology: [
            { test: 'Klinikai kép', finding: 'Jellegzetes', significance: 'Diagnosztikus' },
            { test: 'PCR', finding: 'Enterovírus RNS (torok, széklet)', significance: 'Súlyos esetben' }
          ]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Fájdalomcsillapítás, folyadék' }] },
          targeted: 'Nincs.',
          prevention: ['Higiénia', 'Kézmosás']
        },
        guidelines: {
          diagnosis: [
            'Klinikai kép: Láz, szájüregi fekélyek és kiütések a tenyéren/talpon.'
          ],
          treatment_indications: [
            'Szupportív. Dehidráció megelőzése.'
          ]
        },
        prognosis: { mortality: 'Kiváló, kivéve EV71 encephalitis', prognostic_scores: [], factors: 'Kórokozó típusa' }
      },
      ]
  }
});