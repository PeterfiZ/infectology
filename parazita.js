Object.assign(window.diseases, {
      parasitic: {
        name: 'Parazita fertőzések',
        icon: window.diseaseMetadata.parasitic.icon,
        color: window.diseaseMetadata.parasitic.color,
        diseases: [
           {
            id: 'malaria',
            name: 'Malária',
            pathogen: { type: 'Protozoon', name: '<i>Plasmodium falciparum, vivax, ovale, malariae, knowlesi</i>', gram: '-', shape: 'gyűrű/gametocyta' },
            epidemiology: {
              incidence: 'Világszerte >200 millió eset/év, >400,000 halál',
              risk_groups: ['Endémiás területre utazók', 'Gyermekek (<5 év)', 'Terhesek', 'Immunszupprimáltak'],
              seasonality: 'Esős évszak (szúnyogok)',
              transmission: 'Anopheles szúnyog csípése'
            },
            pathomechanism: {
              steps: [
                'A fertőzött Anopheles szúnyog csípése során a sporozoiták a véráramba jutnak, majd perceken belül a májsejtekbe vándorolnak.',
                'Máj fázis (exoerythrocytás): A májsejtekben a paraziták ivartalanul szaporodnak, schizontákat képezve. Ez a fázis tünetmentes. A P. vivax és ovale hipnozoitákat (alvó alakokat) képezhet, ami relapszushoz vezethet.',
                'Vér fázis (erythrocytás): A májból kiszabaduló merozoiták a vörösvértesteket (vvt) fertőzik meg. A vvt-ken belül gyűrű alakú trophozoitákká, majd schizontákká fejlődnek, amelyekből újabb merozoiták szabadulnak fel a vvt-k szétesésével (ruptúra).',
                'A vvt-k ciklikus szétesése (48-72 óránként) okozza a jellegzetes, periodikus lázrohamokat a gyulladásos citokinek (TNF-alfa, IL-1) felszabadulása miatt.',
                'A P. falciparum által fertőzött vvt-k a PfEMP1 fehérje segítségével a kiserek falához tapadnak (cytoadherencia), elzárva a mikrocirkulációt, ami súlyos szervi károsodáshoz vezet (agy, vese, tüdő).'
              ],
              virulence_factors: ['PfEMP1 (adhézió)', 'Antigén variáció', 'Hemozoin pigment']
            },
            clinical: {
              incubation: '7-30 nap (fajtól függ)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Komplikációmentes malária', description: 'Jellegzetes lázrohamok: hidegrázás, magas láz (40-41°C), majd izzadás és láztalanság. A ciklus 48 (P. falciparum, vivax, ovale) vagy 72 óránként (P. malariae) ismétlődik. Kísérő tünetek: fejfájás, izomfájdalom, hányinger, splenomegalia.', severity: 'moderate' },
                { name: 'Súlyos malária (P. falciparum)', description: 'Életveszélyes állapot. Cerebrális malária (tudatzavar, kóma, görcsök), súlyos anémia, ARDS (tüdőödéma), veseelégtelenség (fekete víz láz), metabolikus acidózis, hypoglykaemia és shock.', severity: 'severe' }
              ],
              physical_exam: [
                'Láz, tachycardia',
                'Splenomegalia (gyakori)',
                'Hepatomegalia',
                'Sápadság (anémia)',
                'Icterus (hemolízis)'
              ],
              complications: ['Cerebrális malária', 'Súlyos anémia', 'ARDS', 'Veseelégtelenség (fekete víz láz)', 'Hypoglykaemia', 'Shock']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Anémia, thrombocytopenia', interpretation: 'Hemolízis/szekvesztráció' },
                { test: 'LDH, Bilirubin', finding: 'Emelkedett', interpretation: 'Hemolízis' },
                { test: 'Vércukor', finding: 'Alacsony lehet', interpretation: 'Súlyos malária' }
              ],
              imaging: [
                { modality: 'CT koponya', finding: 'Agyödéma', significance: 'Cerebrális malária kizárása' }
              ],
              microbiology: [
                { test: 'Vastagcsepp/Vékonykenet', finding: 'Plasmodium alakok', significance: 'GOLD STANDARD (Giemsa)' },
                { test: 'Gyorsteszt (RDT)', finding: 'HRP-2 vagy pLDH antigén', significance: 'Gyors, de kevésbé érzékeny alacsony csíraszámnál' },
                { test: 'PCR', finding: 'DNS', significance: 'Alacsony parazitaemianál' }
              ]
            },
            differential: [
              { disease: 'Influenza', distinguishing: 'Utazási anamnézis, periodicitás hiánya' },
              { disease: 'Dengue-láz', distinguishing: 'Retrobulbaris fájdalom, kiütés, csonttörő fájdalom' },
              { disease: 'Tífusz', distinguishing: 'Bradycardia, roseolák, GI tünetek dominálnak' },
              { disease: 'Meningitis', distinguishing: 'Tarkókötöttség, liquor lelet' }
            ],
            therapy: {
              guidelines: ['WHO Guidelines for malaria (2023)'],
              empirical: {
                outpatient: [
                  { drug: 'Artemether-Lumefantrine', dose: 'PO (súlyalapú)', duration: '3 nap', note: 'Első vonalbeli ACT nem komplikált P. falciparum esetén.' },
                  { drug: 'Dihydroartemisinin-Piperaquine', dose: 'PO', duration: '3 nap', note: 'Alternatív ACT.' },
                  { drug: 'Artesunate-Pyronaridine', dose: 'PO', duration: '3 nap', note: 'Alternatív ACT.' },
                  { drug: 'Chloroquin', dose: 'PO', duration: '3 nap', note: 'Csak P. vivax/ovale/malariae esetén, ha klorokvin-érzékeny terület.' }
                ],
                inpatient: [
                  { drug: 'Artesunate', dose: '2.4 mg/kg IV/IM', duration: 'Legalább 24 óra (0, 12, 24 óra)', note: 'Súlyos malária első választás (felnőtt/gyermek/terhes). Utána teljes ACT kúra!' },
                  { drug: 'Artemether', dose: '3.2 mg/kg IM', duration: '', note: 'Alternatíva, ha artesunate nem elérhető.' },
                  { drug: 'Kinin', dose: '20 mg/kg telítő, majd 10 mg/kg 8 óránként', duration: '', note: 'Harmadik vonal, EKG monitorozás szükséges!' }
                ]
              },
              targeted: 'P. vivax/ovale radikális kúra: Primaquin (0.25-0.5 mg/kg 14 napig) vagy Tafenoquin (egyszeri dózis) a hipnozoiták ellen. G6PD hiány szűrése kötelező!',
              supportive: ['Folyadékpótlás (óvatosan, tüdőödéma veszély!)', 'Vércukor monitorozás (hipoglikémia gyakori)', 'Lázcsillapítás (paracetamol)', 'Transzfúzió (súlyos anémia)', 'Dialízis (veseelégtelenség)'],
              prevention: ['Kemoprofilaxis (Atovaquon-Proguanil, Doxycyclin, Mefloquin)', 'Szúnyogháló (LLIN)', 'Vakcina (RTS,S/AS01 és R21/Matrix-M gyermekeknek endémiás területen)']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: láz endémiás területről érkezőknél',
                'Gold standard: mikroszkópia (vastagcsepp/vékonykenet); RDT (gyorsteszt) hasznos, de P. falciparum HRP2 deléciók előfordulhatnak'
              ],
              treatment_indications: [
                'Nem komplikált malária: ACT (Artemisinin-based Combination Therapy)',
                'Súlyos malária: IV Artesunate (bármely faj, bármely trimeszter)',
                'P. vivax/ovale: Schizontocid (Chloroquin/ACT) + Hypnozoitocid (Primaquin/Tafenoquin)'
              ],
              first_line: [
                'Nem komplikált P. falciparum: Artemether-Lumefantrine vagy Artesunate-Amodiaquine vagy Dihydroartemisinin-Piperaquine',
                'Súlyos malária: IV Artesunate legalább 24 óráig, amíg a beteg nem tud nyelni, majd teljes 3 napos ACT kúra'
              ],
              special_populations: [
                'Terhesség 1. trimeszter: Artemether-Lumefantrine (WHO 2023 ajánlás) vagy Kinin+Clindamycin',
                'Terhesség 2-3. trimeszter: ACT',
                'Súlyos malária terhességben: IV Artesunate (előnyösebb mint a Kinin)'
              ]
            },
            prognosis: {
              mortality: 'Nem komplikált: <0.1%; Súlyos: 10-20% (kezelt)',
              prognostic_scores: ['Parazitaemia mértéke (>5-10%)'],
              factors: 'Késői diagnózis, P. falciparum, életkor, terhesség'
            }
          },
          {
            id: 'toxoplasmosis',
            name: 'Toxoplasmosis',
            pathogen: { type: 'Protozoon', name: '<i>Toxoplasma gondii</i>', gram: '-', shape: 'intracelluláris' },
            epidemiology: {
              incidence: 'Világnépesség 30-50%-a szeropozitív (latens)',
              risk_groups: ['Immunszupprimáltak (HIV/AIDS, transzplantált)', 'Terhesek (magzat!)', 'Macskatartók'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális (macska ürülék), nyers hús (ciszta), vertikális'
            },
            pathomechanism: {
              steps: [
                'A fertőzés három úton történhet: 1. Macskaürülékkel szennyezett talajból/ételből származó oociszták lenyelése. 2. Nyers vagy nem kellően átsütött húsban lévő szöveti ciszták elfogyasztása. 3. Vertikális transzmisszió (anyáról magzatra).',
                'A bélben a cisztákból kiszabaduló paraziták tachyzoitákká (gyorsan osztódó alak) alakulnak, amelyek a bélfalon átjutva a vérárammal a szervezet bármely pontjára eljuthatnak.',
                'Az ép immunrendszer hatására a tachyzoiták bradyzoitákká (lassan osztódó alak) alakulnak, és szöveti cisztákat képeznek, főleg az agyban, izmokban és a szemben. Ez a latens, élethosszig tartó fertőzés.',
                'Immunszuppresszió (pl. AIDS, transzplantáció) esetén a latens ciszták reaktiválódhatnak, a bradyzoiták visszaalakulnak tachyzoitákká, ami súlyos, gyakran halálos betegséghez (pl. encephalitis) vezet.'
              ],
              virulence_factors: ['Intracelluláris túlélés', 'Ciszta képzés', 'Immunmoduláció']
            },
            clinical: {
              incubation: '5-23 nap',
              onset: 'Lassú/tünetmentes',
              symptoms: [
                { name: 'Immunkompetens fertőzés', description: 'Az esetek 80-90%-a tünetmentes. Ha vannak tünetek, azok enyhék, mononukleózis-szerűek: fájdalmatlan nyaki nyirokcsomó-duzzanat, láz, fáradtság.', severity: 'mild' },
                { name: 'Okuláris toxoplasmosis', description: 'A chorioretinitis leggyakoribb oka. Homályos látást, szemfájdalmat, úszkáló homályokat okoz. Lehet primer fertőzés vagy reaktiváció következménye.', severity: 'moderate' },
                { name: 'Cerebrális toxoplasmosis (AIDS)', description: 'A leggyakoribb KIR opportunista fertőzés AIDS-ben (CD4<100). Fejfájás, zavartság, láz, fokális neurológiai tünetek (görcsök, hemiparesis) jellemzik. Az MRI-n jellegzetes gyűrűhalmozó gócokat mutat.', severity: 'severe' },
                { name: 'Veleszületett (congenitalis) toxoplasmosis', description: 'A terhesség alatti primer fertőzés következménye. A klasszikus Sabin-tetrád: hydrocephalus, intracranialis meszesedések, chorioretinitis és görcsök. Súlyos, maradandó károsodást okozhat.', severity: 'severe' }
              ],
              physical_exam: [
                'Cervicalis lymphadenopathia (fájdalmatlan)',
                'Láz (ritka)',
                'Fokális neurológiai jelek (cerebrális toxo)',
                'Retina vizsgálat: sárgásfehér gócok'
              ],
              complications: ['Toxoplasma encephalitis (TE)', 'Vakság', 'Pneumonitis', 'Myocarditis', 'Magzati elhalás/károsodás']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Lymphocytosis', interpretation: 'Nem specifikus' },
                { test: 'CD4 szám', finding: '<100/µL', interpretation: 'Reaktiváció rizikó (HIV)' }
              ],
              imaging: [
                { modality: 'MRI agy', finding: 'Többszörös, gyűrűszerűen kontrasztanyagot halmozó gócok (főleg a bazális ganglionokban)', significance: 'Cerebrális toxo (AIDS)' },
                { modality: 'CT agy', finding: 'Meszesedés (congenitalis)', significance: 'Újszülött' }
              ],
              microbiology: [
                { test: 'Szerológia (IgM/IgG)', finding: 'IgM (akut), IgG (átvészeltség/latencia)', significance: 'Aviditás teszt (terhesség)' },
                { test: 'PCR', finding: 'DNS (liquor, magzatvíz, vér)', significance: 'Aktív fertőzés igazolása' },
                { test: 'Szövettan', finding: 'Tachyzoiták', significance: 'Biopszia (ritka)' }
              ]
            },
            differential: [
              { disease: 'Mononukleózis (EBV/CMV)', distinguishing: 'Szerológia, torokfájás dominál' },
              { disease: 'CNS Lymphoma', distinguishing: 'MRI (szoliter, periventricularis), EBV PCR, Thallium SPECT' },
              { disease: 'Macskakarmolási betegség', distinguishing: 'Egyoldali nyirokcsomó, inokulációs hely' },
              { disease: 'Egyéb encephalitis', distinguishing: 'Liquor lelet, képalkotó' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Immundompetens tünetmentes nem igényel kezelést' }
                ],
                inpatient: [
                  { drug: 'Pyrimethamin + Sulfadiazine', dose: 'PO', duration: '6 hét', note: 'Standard kezelés (+Folinsav!)' },
                  { drug: 'Trimethoprim/Sulfamethoxazol', dose: 'PO/IV', duration: '6 hét', note: 'Alternatíva' }
                ],
                icu: [
                  { drug: 'Szteroid', dose: 'Dexamethason', duration: '', note: 'Mass effect (agyödéma) esetén' }
                ]
              },
              targeted: 'Terhesség: Spiramycin (I. trimeszter) vagy Pyrimethamin/Sulfadiazine (később). HIV profilaxis: TMP/SMX.',
              supportive: ['Folsav pótlás (Leucovorin) csontvelő védelemre', 'Görcsgátlók'],
              prevention: ['Hús alapos sütése', 'Macskaalom kerülése (terhesek)', 'Kézmosás', 'Profilaxis CD4<100 esetén (TMP/SMX)']
            },
            guidelines: {
              diagnosis: [
                'Szerológia (IgM/IgG) alapvető; aviditás vizsgálat terhességben a fertőzés idejének meghatározására',
                'PCR (liquor, amnionfolyadék, vér) aktív fertőzés igazolására immunszupprimáltaknál vagy magzatnál',
                'Képalkotó (MRI) agyi toxoplasmosis gyanúja esetén (gyűrűs halmozás)'
              ],
              treatment_indications: [
                'Immunkompetens: általában nem igényel kezelést, kivéve súlyos tünetek vagy chorioretinitis',
                'Immunszupprimált (AIDS, CD4<100): mindig kezelendő (akut + fenntartó)',
                'Terhesség: akut fertőzés esetén kezelés szükséges a transzmisszió csökkentésére/magzati károsodás mérséklésére'
              ]
            },
            prognosis: {
              mortality: 'Immundompetens: kiváló; AIDS/TE: kezelés nélkül halálos, recidíva gyakori',
              prognostic_scores: ['Nincs'],
              factors: 'Immunstátusz, kezelés korai kezdése'
            }
          },
          {
            id: 'ascariasis',
            name: 'Ascariasis (Orsóférgesség)',
            pathogen: { type: 'Helminth', name: '<i>Ascaris lumbricoides</i>', gram: '-', shape: 'hengeres féreg (15-35 cm)' },
            epidemiology: {
              incidence: 'Világszerte leggyakoribb féregfertőzés (>800 millió)',
              risk_groups: ['Gyermekek', 'Rossz higiénés körülmények között élők'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális (petékkel szennyezett talaj/zöldség)'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a petékkel szennyezett talajjal, zöldséggel vagy vízzel történő feko-orális úton jön létre.',
                'A lenyelt petékből a vékonybélben kikelnek a lárvák, amelyek átfúrják a bélfalat és a portális keringésen keresztül a májba, majd a tüdőbe vándorolnak.',
                'A tüdőben a lárvák gyulladást okoznak (Löffler-szindróma), majd felköhögés és lenyelés útján visszajutnak a vékonybélbe.',
                'A vékonybélben kifejlett, 15-35 cm-es féreggé érnek, ahol tápanyagokat vonnak el. Súlyos fertőzés esetén a férgek tömege (féreg-gombolyag) bélelzáródást (ileus) vagy epeúti obstrukciót okozhat.'
              ],
              virulence_factors: ['Proteáz inhibitorok', 'Migrációs képesség']
            },
            clinical: {
              incubation: '4-8 hét',
              onset: 'Lassú',
              symptoms: [
                { name: 'Tüdő fázis (Löffler-szindróma)', description: 'A lárvavándorlás alatt jelentkező, átmeneti tünetegyüttes: száraz köhögés, légszomj, alacsony láz és a vérképben kifejezett eozinofília.', severity: 'moderate' },
                { name: 'Bél fázis', description: 'Enyhe fertőzés esetén tünetmentes lehet. Súlyosabb esetben hasi fájdalom, puffadás, hányinger és gyermekeknél alultápláltság, növekedésbeli elmaradás jelentkezhet.', severity: 'mild' },
                { name: 'Obstrukciós szövődmények', description: 'Masszív fertőzés esetén a férgek gombolyaga mechanikus bélelzáródást (ileus) okozhat. A férgek az epeutakba vagy a ductus pancreaticusba vándorolva sárgaságot, cholangitist vagy pancreatitist idézhetnek elő.', severity: 'severe' }
              ],
              physical_exam: [
                'Gyakran negatív',
                'Hasi érzékenység',
                'Féreg ürülése széklettel/hányadékkal'
              ],
              complications: ['Mechanikus ileus', 'Biliaris ascariasis', 'Pancreatitis', 'Malnutríció (gyerekek)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Eosinophilia (tüdő fázisban)', interpretation: 'Parazitás infekció' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Vándorló infiltrátumok (Löffler)', significance: 'Tüdő fázis' },
                { modality: 'Has UH', finding: 'Férgek az epeutakban/bélben ("vasúti sín" jel)', significance: 'Komplikáció' }
              ],
              microbiology: [
                { test: 'Széklet pete vizsgálat', finding: 'Jellegzetes rücskös felszínű peték', significance: 'Diagnosztikus' }
              ]
            },
            differential: [
              { disease: 'Egyéb féregfertőzések', distinguishing: 'Székletvizsgálat' },
              { disease: 'Asthma/Pneumonia', distinguishing: 'Eosinophilia, vándorló infiltrátum' },
              { disease: 'Epekövesség', distinguishing: 'UH kép' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Mebendazol', dose: '2x100mg PO', duration: '3 nap', note: 'Első választás' },
                  { drug: 'Albendazol', dose: '400mg PO', duration: 'Egyszeri dózis', note: 'Alternatíva' }
                ]
              },
              targeted: 'Benzimidazolok (Mebendazol, Albendazol). Terhességben: Pyrantel pamoat.',
              supportive: ['Obstrukció esetén sebészi/endoszkópos eltávolítás'],
              prevention: ['Zöldségek mosása', 'Kézmosás', 'Szennyvízkezelés']
            },
            prognosis: { mortality: 'Alacsony, szövődményes ileus esetén magasabb', prognostic_scores: [], factors: 'Életkor, obstrukció' }
          },
          {
            id: 'taeniasis',
            name: 'Taeniasis (Galandférgesség)',
            pathogen: { type: 'Helminth', name: '<i>Taenia saginata</i> (marha), <i>Taenia solium</i> (sertés)', gram: '-', shape: 'laposféreg (szalag)' },
            epidemiology: {
              incidence: 'Világszerte elterjedt',
              risk_groups: ['Nyers húst fogyasztók'],
              transmission: 'Nyers/nem kellően hőkezelt hús (lárva/cysticercus). T. solium pete emberről emberre -> Cysticercosis!'
            },
            pathomechanism: {
              steps: [
                'Taeniasis (Bélférgesség): Nyers vagy nem kellően átsütött, lárvákat (cysticercus) tartalmazó marha- (T. saginata) vagy sertéshús (T. solium) fogyasztásával alakul ki. A bélben a lárvából kifejlett, több méter hosszú galandféreg fejlődik.',
                'Cysticercosis (Szöveti forma): KIZÁRÓLAG a T. solium okozza! A féregpeték feko-orális úton (pl. szennyezett étel, autoinfekció) jutnak a szervezetbe. A petékből a bélben lárvák kelnek ki, melyek a vérárammal eljutnak a szövetekbe (agy, izom, szem), ahol betokozódnak (cysticercus).'
              ],
              virulence_factors: ['Scolex (horgok/szívókák)']
            },
            clinical: {
              incubation: '8-14 hét',
              onset: 'Tünetmentes/Enyhe',
              symptoms: [
                { name: 'Taeniasis (Bélférgesség)', description: 'Gyakran tünetmentes. Enyhe hasi diszkomfort, puffadás, étvágyváltozás előfordulhat. A diagnózist gyakran a széklettel ürülő, mozgó féregízek (proglottisok) észlelése adja.', severity: 'mild' },
                { name: 'Neurocysticercosis (NCC)', description: 'A T. solium peték lenyelése után kialakuló legsúlyosabb forma. A központi idegrendszerben lévő ciszták a lokalizációtól függően epilepsziás rohamokat (leggyakoribb), fejfájást, koponyaűri nyomásfokozódást, hydrocephalust vagy fokális neurológiai tüneteket okoznak.', severity: 'severe' }
              ],
              physical_exam: ['Negatív (bélférgesség)', 'Neurológiai tünetek (cysticercosis)'],
              complications: ['Neurocysticercosis (vezető epilepszia ok fejlődő országokban)', 'Szemészeti cysticercosis']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Eosinophilia (ritka bélférgességnél)', interpretation: '-' }],
              imaging: [{ modality: 'CT/MRI agy', finding: 'Ciszták, meszesedések', significance: 'Neurocysticercosis' }],
              microbiology: [
                { test: 'Széklet', finding: 'Proglottisok vagy peték', significance: 'Diagnosztikus (fajazonosítás proglottis alapján)' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Praziquantel', dose: '5-10 mg/kg PO', duration: 'Egyszeri dózis', note: 'Bélférgességre' },
                  { drug: 'Niclosamid', dose: '2g PO', duration: 'Egyszeri dózis', note: 'Alternatíva' }
                ]
              },
              targeted: 'Neurocysticercosis: Albendazol + Praziquantel + Szteroid (a gyulladás csökkentésére).',
              prevention: ['Húsok alapos sütése', 'Húsvizsgálat', 'Kézmosás (T. solium autoinfekció ellen)']
            },
            prognosis: { mortality: 'Bélférgesség: 0%; Neurocysticercosis: változó, epilepszia maradhat', prognostic_scores: [], factors: 'Kórokozó típus, lokalizáció' }
          },
          {
            id: 'echinococcosis',
            name: 'Echinococcosis (Hydatid kór)',
            pathogen: { type: 'Helminth', name: '<i>Echinococcus granulosus</i> (cysticus), <i>E. multilocularis</i> (alveolaris)', gram: '-', shape: 'szalagféreg' },
            epidemiology: {
              incidence: 'Endémiás (Mediterráneum, K-Európa, Ázsia)',
              risk_groups: ['Kutyatartók, juhászok', 'Vadon termő bogyók fogyasztói (róka - E. multilocularis)'],
              transmission: 'Feko-orális: kutya/róka ürülékkel ürülő pete lenyelése'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a kutya (E. granulosus) vagy róka (E. multilocularis) ürülékével szennyezett talajról, zöldségről származó peték lenyelésével történik. Az ember egy köztigazda a parazita számára.',
                'A bélben a petékből onkoszférák (lárvák) kelnek ki, melyek a bélfalon át a portális keringésbe jutnak, és leggyakrabban a májban (70%), ritkábban a tüdőben (20%) vagy más szervekben telepednek meg.',
                'E. granulosus: A lárva lassan (évek alatt) egy folyadékkal telt, vastag falú hidatid cisztává nő, melyben újabb lárvák (protoscolexek) ezrei lehetnek. A ciszta térfoglaló hatása okoz tüneteket.',
                'E. multilocularis: A lárva tumor-szerűen, infiltratívan növekszik, elpusztítva a májszövetet. Nincs éles határa, ezért sebészileg nehezen eltávolítható.',
                'A ciszta megrepedése (ruptúra) a benne lévő antigének kiáramlása miatt súlyos anafilaxiás shockot és a fertőzés szóródását (disszemináció) okozhatja.'
              ],
              virulence_factors: ['Laminált réteg (immunvédelem)', 'Protoscolexek']
            },
            clinical: {
              incubation: 'Évek (lassú növekedés)',
              onset: 'Lassú',
              symptoms: [
                { name: 'Tünetek', description: 'A betegség évekig tünetmentes. A tünetek a ciszta méretétől és lokalizációjától függenek. Májciszta: jobb bordaív alatti fájdalom, teltségérzet, hepatomegalia, sárgaság (epeúti kompresszió). Tüdőciszta: mellkasi fájdalom, köhögés, hemoptoe.', severity: 'moderate' },
                { name: 'Ciszta ruptúra', description: 'Hirtelen hasi vagy mellkasi fájdalom, láz, urticaria, eosinophilia és súlyos esetben anafilaxiás shock. A cisztatartalom a szervezetben szétszóródva újabb ciszták kialakulásához vezethet.', severity: 'severe' },
                { name: 'Alveoláris echinococcosis (E. multilocularis)', description: 'A májrákhoz hasonlóan viselkedik: sárgaság, hasi fájdalom, fogyás, hepatomegalia. Rossz prognózisú.', severity: 'severe' }
              ],
              physical_exam: ['Hepatomegalia', 'Tapintható terime'],
              complications: ['Ciszta ruptúra (anafilaxia)', 'Biliaris obstrukció', 'Bakteriális felülfertőződés']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Eosinophilia (25%)', interpretation: 'Nem mindig jelenik meg' }],
              imaging: [
                { modality: 'UH/CT', finding: 'Ciszta, leányhólyagok ("rosetta"), meszesedés', significance: 'Diagnosztikus (WHO klasszifikáció)' }
              ],
              microbiology: [
                { test: 'Szerológia (ELISA, IHA)', finding: 'Pozitív', significance: 'Megerősítés (nem mindig pozitív)' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Albendazol', dose: '2x400mg PO', duration: 'Hónapokig', note: 'Műtét előtt/után vagy inoperábilis esetben' }
                ]
              },
              targeted: 'PAIR technika (Puncture, Aspiration, Injection, Re-aspiration) vagy Sebészi eltávolítás (vigyázni a ruptúrára!). E. multilocularis: radikális sebészet + élethosszig Albendazol.',
              prevention: ['Kutyák féregtelenítése', 'Kézmosás', 'Vadon termő gyümölcsök mosása']
            },
            prognosis: { mortality: 'E. granulosus: jó; E. multilocularis: rossz (hasonlít a májrákhoz)', prognostic_scores: [], factors: 'Kórokozó típus, sebészi lehetőség' }
          },
          {
            id: 'enterobiasis',
            name: 'Enterobiasis (Cérnagiliszta)',
            pathogen: { type: 'Helminth', name: '<i>Enterobius vermicularis</i>', gram: '-', shape: 'kicsi fehér féreg' },
            epidemiology: {
              incidence: 'Leggyakoribb féregfertőzés mérsékelt övben (fejlett országokban is)',
              risk_groups: ['Kisgyermekek', 'Közösségek (óvoda, iskola)', 'Családtagok'],
              transmission: 'Feko-orális, autoinfekció (vakarózás -> száj), inhaláció (por)'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a ragadós peték lenyelésével történik, melyek a körmök alatt, ágyneműn, porban is megtalálhatók. Gyakori az autoinfekció (vakarózás után a kéz szájba vétele).',
                'A petékből a vékonybélben kelnek ki a lárvák, melyek a coecum területére vándorolnak és ott ivarérett féreggé fejlődnek.',
                'A megtermékenyített nőstény féreg (kb. 1 cm) éjszaka a perianalis redőkbe vándorol, ahol lerakja petéit, majd elpusztul. A peték lerakása és a féreg mozgása okozza a jellegzetes, kínzó viszketést.'
              ],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '2-6 hét',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Perianalis viszketés (Pruritus ani)', description: 'A vezető tünet, amely jellemzően éjszaka a legintenzívebb, alvászavart, nyugtalanságot okozva. A vakarózás másodlagos bakteriális bőrfertőzéshez vezethet.', severity: 'moderate' },
                { name: 'Egyéb tünetek', description: 'Ritkán enyhe hasi fájdalom. Kislányoknál a féreg a hüvelybe vándorolva vulvovaginitist okozhat. A legtöbb fertőzés enyhe vagy tünetmentes.', severity: 'mild' }
              ],
              physical_exam: ['Perianalis excoriatio (vakarás nyom)', 'Férgek láthatók lehetnek (ritka)'],
              complications: ['Bakteriális felülfertőződés (vakarás)', 'Salpingitis (ritka)']
            },
            diagnostics: {
              microbiology: [
                { test: 'Celofánszalag (Scotch-tape) teszt', finding: 'Peték a reggeli mintában', significance: 'Gold standard (székletvizsgálat gyakran negatív!)' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Mebendazol', dose: '100mg PO', duration: 'Egyszer, majd 2 hét múlva ismételni', note: 'Egész családot kezelni!' },
                  { drug: 'Albendazol', dose: '400mg PO', duration: 'Egyszer, majd 2 hét múlva ismételni', note: '' }
                ]
              },
              targeted: 'Ismétlés szükséges 2 hét múlva (autoinfekció megelőzése).',
              prevention: ['Körömvágás', 'Pizsama/ágynemű mosása forró vízben', 'Kézmosás']
            },
            prognosis: { mortality: 'Nulla', prognostic_scores: [], factors: 'Nincs' }
          },
          {
            id: 'trichinellosis',
            name: 'Trichinellosis',
            pathogen: { type: 'Helminth', name: '<i>Trichinella spiralis</i>', gram: '-', shape: 'fonalféreg' },
            epidemiology: {
              incidence: 'Sporadikus járványok (disznóvágás)',
              risk_groups: ['Nyers/füstölt sertéshús, vaddisznó fogyasztók'],
              transmission: 'Lárvát tartalmazó hús fogyasztása (nem megfelelő hőkezelés)'
            },
            pathomechanism: {
              steps: [
                'A fertőzés lárvákat tartalmazó nyers vagy nem kellően átsütött hús (főleg sertés, vaddisznó) fogyasztásával történik.',
                'Enterális fázis: A bélben a lárvákból kifejlett férgek lesznek, melyek a bélfalba fúródva újabb lárvákat hoznak létre. Ez hasmenést, hányingert okoz.',
                'Parenterális fázis: Az újszülött lárvák a vér- és nyirokáramba jutva a szervezetben szóródnak, és célzottan a nagy oxigénellátású, aktív harántcsíkolt izmokba (rágóizmok, rekeszizom, nyelv, szemizmok) vándorolnak.',
                'Az izomsejtekben a lárvák betokozódnak, egy ún. "dajkasejt" (nurse cell) komplexet hozva létre, ami krónikus gyulladást és a jellegzetes izomfájdalmat okozza.'
              ],
              virulence_factors: ['Nurse cell képzés az izomban']
            },
            clinical: {
              incubation: 'Enterális: 1-2 nap; Parenterális: 1-4 hét',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Enterális fázis (1. hét)', description: 'A fertőzés után néhány nappal jelentkező hasmenés, hányinger, hányás, hasi fájdalom.', severity: 'moderate' },
                { name: 'Parenterális fázis (2. héttől)', description: 'A lárvavándorlás okozza a klasszikus tünettriászt: 1. Magas láz. 2. Súlyos izomfájdalom (myalgia), főleg a rágó- és szemizmokban. 3. Jellegzetes kétoldali periorbitalis ödéma (szem körüli duzzanat). A vérképben extrém eozinofília látható.', severity: 'severe' },
                { name: 'Szövődmények', description: 'A lárvák a szívizmot (myocarditis) vagy a központi idegrendszert (encephalitis) is érinthetik, ami életveszélyes lehet.', severity: 'severe' }
              ],
              physical_exam: ['Periorbitalis ödéma', 'Izomérzékenység', 'Láz', 'Conjunctivitis'],
              complications: ['Myocarditis (halálok!)', 'Encephalitis', 'Pneumonia']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Eosinophilia (akár 50%!)', interpretation: 'Nagyon jellemző' },
                { test: 'CK, LDH', finding: 'Emelkedett', interpretation: 'Izomkárosodás' }
              ],
              microbiology: [
                { test: 'Szerológia (ELISA)', finding: 'Pozitív (3. héttől)', significance: 'Diagnosztikus' },
                { test: 'Izombiopszia', finding: 'Lárvák', significance: 'Ritkán szükséges' }
              ]
            },
            differential: [
              { disease: 'Influenza', distinguishing: 'Eosinophilia hiánya' },
              { disease: 'Leptospirosis', distinguishing: 'Vese/máj érintettség, nincs eosinophilia' },
              { disease: 'Myositis', distinguishing: 'Autoantitestek' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Mebendazol', dose: '3x200-400mg PO', duration: '3 nap, majd csökkentve 10 napig', note: 'Korai fázisban hatékonyabb' },
                  { drug: 'Albendazol', dose: '2x400mg PO', duration: '10-14 nap', note: '' }
                ],
                inpatient: [
                  { drug: 'Szteroid (Prednisolon)', dose: '40-60mg PO', duration: 'Tüneti', note: 'Súlyos gyulladás/allergiás reakció esetén (Herxheimer-szerű)' }
                ]
              },
              targeted: 'Anthelmintikum + Szteroid.',
              prevention: ['Húsvizsgálat (trichinelloscopia)', 'Hús alapos sütése (>71°C)', 'Fagyasztás (-15°C 3 hétig - vaddisznónál nem mindig elég!)']
            },
            prognosis: { mortality: 'Alacsony, de myocarditis/encephalitis esetén halálos lehet', prognostic_scores: [], factors: 'Szerv érintettség, kezelés ideje' }
          },
          {
            id: 'toxocariasis',
            name: 'Toxocariasis (Larva Migrans Visceralis/Ocularis)',
            pathogen: { type: 'Helminth', name: '<i>Toxocara canis</i> (kutya), <i>Toxocara cati</i> (macska)', gram: '-', shape: 'orsóféreg lárva' },
            epidemiology: {
              incidence: 'Világszerte elterjedt zoonózis',
              risk_groups: ['Kisgyermekek (homokozó, geophagia)', 'Kutyatartók'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális: petével szennyezett talaj lenyelése (nem közvetlen állatkontaktus!)'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a kutya (T. canis) vagy macska (T. cati) ürülékével szennyezett talajból (pl. homokozó) származó peték véletlen lenyelésével történik. Az ember a parazita számára egy véletlen, ún. paratenikus gazda.',
                'A bélben a petékből kikelő lárvák átfúrják a bélfalat és a vérárammal a szervezet különböző szerveibe vándorolnak (máj, tüdő, agy, szem).',
                'Mivel az ember nem a természetes gazdája, a lárvák nem tudnak kifejlett féreggé fejlődni. Ehelyett a szövetekben vándorolnak (larva migrans), és a szervezet körülöttük granulomatózus gyulladást hoz létre, ami a szöveti károsodást okozza.'
              ],
              virulence_factors: ['Szöveti migráció', 'Exkréciós-szekréciós antigének (TES)']
            },
            clinical: {
              incubation: 'Hetek-hónapok',
              onset: 'Lassú',
              symptoms: [
                { name: 'Visceralis Larva Migrans (VLM)', description: 'Jellemzően kisgyermekeknél (1-5 év) fordul elő. Tünetei: elhúzódó láz, hepatomegalia, köhögés, sípoló légzés. A laborban extrém magas eozinofília és leukocytosis látható.', severity: 'moderate' },
                { name: 'Ocularis Larva Migrans (OLM)', description: 'Idősebb gyermekeknél és felnőtteknél gyakoribb. A szembe vándorló lárva egyoldali látásromlást, strabismust (kancsalság) és leukocoriát (fehér pupilla) okozhat, ami összetéveszthető a retinoblastomával. A szisztémás tünetek és az eozinofília általában hiányoznak.', severity: 'severe' },
                { name: 'Rejtett (Covert) toxocariasis', description: 'Enyhe, nem specifikus tünetekkel, például hasi fájdalommal, fejfájással, köhögéssel járó forma, mérsékelt eozinofíliával.', severity: 'mild' }
              ],
              physical_exam: [
                'Hepatomegalia',
                'Láz',
                'Pulmonalis zörejek (wheezing)',
                'Szemfenék: granuloma, chorioretinitis'
              ],
              complications: ['Vakság (OLM)', 'Myocarditis', 'Epilepszia (agyi granuloma)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Extrém eosinophilia (VLM-ben, OLM-ben hiányozhat!)', interpretation: 'Parazitás infekció' },
                { test: 'IgE', finding: 'Emelkedett', interpretation: 'Allergiás/parazitás válasz' }
              ],
              imaging: [
                { modality: 'Has UH', finding: 'Hepatomegalia, hypoechogén gócok', significance: 'VLM' },
                { modality: 'Szemészet', finding: 'Retina granuloma', significance: 'OLM' }
              ],
              microbiology: [
                { test: 'Szerológia (ELISA)', finding: 'Pozitív (TES antigén)', significance: 'Diagnosztikus (Western blot megerősítés)' },
                { test: 'Székletvizsgálat', finding: 'NEGATÍV', significance: 'Emberben nincs kifejlett féreg, nem ürít petét!' }
              ]
            },
            differential: [
              { disease: 'Retinoblastoma', distinguishing: 'OLM elkülönítése kritikus (leukocoria)!' },
              { disease: 'Ascariasis', distinguishing: 'Székletben pete van, tüdőfázis rövidebb' },
              { disease: 'Allergiás asthma', distinguishing: 'Szerológia, hepatomegalia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Albendazol', dose: '2x400mg PO', duration: '5 nap (VLM), 2-4 hét (OLM)', note: 'Zsíros étellel bevenni' },
                  { drug: 'Mebendazol', dose: '2x100-200mg PO', duration: '5 nap', note: 'Kevésbé szívódik fel' }
                ]
              },
              targeted: 'Albendazol + Szteroid (a gyulladás csökkentésére, főleg OLM-ben és súlyos VLM-ben).',
              supportive: ['Szemészeti műtét (vitrectomia) ha szükséges'],
              prevention: ['Kutyák/macskák féregtelenítése', 'Kézmosás', 'Homokozók fedése']
            },
            prognosis: { mortality: 'Nagyon alacsony, de OLM látásvesztést okozhat', prognostic_scores: [], factors: 'Lokalizáció (ocularis rosszabb)' }
      }
    ]
  }
});