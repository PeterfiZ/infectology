Object.assign(window.diseases, {
      sepsis_systemic: {
        name: 'Sepszis és szisztémás fertőzések',
        icon: '⚡',
        color: '#7f1d1d',
        diseases: [
          {
            id: 'sepsis',
            name: 'Sepszis (Sepsis)',
            pathogen: { type: 'Szindróma', name: 'Baktérium (G+/G-), Gomba, Vírus', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'Világszerte 49 millió eset/év, 11 millió halál (20% összes halál)',
              risk_groups: ['Idősek (>65 év)', 'Csecsemők (<1 év)', 'Immunszupprimáltak', 'Krónikus betegek', 'Invazív eszközökkel rendelkezők'],
              seasonality: 'Nincs (télen gyakoribb a légúti eredet miatt)',
              transmission: 'Nem fertőző (a kiváltó infekció lehet az)'
            },
            pathomechanism: {
              steps: [
                'Infekció (PAMPs) felismerése a veleszületett immunrendszer által (TLR)',
                'Pro-inflammatorikus citokin vihar (TNF-α, IL-1, IL-6)',
                'Endothel aktiváció és károsodás (vaszkuláris permeabilitás↑)',
                'Koagulációs kaszkád aktiválódása (DIC) + fibrinolízis gátlása',
                'Mikrocirkulációs zavar, szöveti hipoxia, mitokondriális diszfunkció',
                'Többszervi elégtelenség (MODS)'
              ],
              virulence_factors: ['Endotoxin (LPS)', 'Szuperantigének', 'Exotoxinok', 'Tok']
            },
            clinical: {
              incubation: 'Az alapbetegségtől függ',
              onset: 'Órák alatt progrediálhat',
              symptoms: [
                { name: 'Láz vagy Hypothermia', description: '>38°C vagy <36°C', severity: 'severe' },
                { name: 'Tachypnoe', description: '>22/perc (qSOFA)', severity: 'moderate' },
                { name: 'Tudatzavar', description: 'GCS <15 (qSOFA)', severity: 'severe' },
                { name: 'Hypotonia', description: 'Systolés RR <100 Hgmm (qSOFA)', severity: 'severe' },
                { name: 'Oliguria', description: '<0.5 ml/kg/óra', severity: 'severe' }
              ],
              physical_exam: [
                'Meleg, kipirult bőr (korai) vagy hűvös, márványozott (késői/shock)',
                'Tachycardia',
                'Tachypnoe',
                'Zavartság',
                'Kapilláris újratelődési idő >2-3 mp'
              ],
              complications: ['Szeptikus shock (vazopresszor igény + laktát >2)', 'ARDS', 'DIC', 'Akut veseelégtelenség', 'Máj elégtelenség', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Laktát', finding: '>2 mmol/L', interpretation: 'Szöveti hipoxia/shock (Súlyos!)' },
                { test: 'Hemokultúra', finding: 'Pozitív (30-50%)', interpretation: 'AB adás ELŐTT levenni (2 szett)' },
                { test: 'PCT', finding: 'Jelentősen emelkedett', interpretation: 'Bakteriális eredet valószínű' },
                { test: 'Vérkép', finding: 'Leukocytosis vagy leukopenia', interpretation: 'Gyulladás' }
              ],
              imaging: [
                { modality: 'CT/Rtg/UH', finding: 'Fókusz keresés', significance: 'Forrás kontroll miatt kulcsfontosságú' }
              ],
              microbiology: [
                { test: 'Hemokultúra', finding: 'Kórokozó azonosítás', significance: 'Célzott terápia alapja' },
                { test: 'Egyéb tenyésztés', finding: 'Vizelet, köpet, seb, liquor', significance: 'Fókusz függő' }
              ]
            },
            differential: [
              { disease: 'Kardiogén shock', distinguishing: 'Echo (csökkent EF), emelkedett CVP/JVP' },
              { disease: 'Hypovolaemiás shock', distinguishing: 'Anamnézis (vérzés, folyadékvesztés), száraz nyálkahártyák' },
              { disease: 'Anafilaxia', distinguishing: 'Allergén expozíció, urticaria, stridor' },
              { disease: 'Mellékvesekéreg elégtelenség', distinguishing: 'Hyponatraemia, hyperkalaemia, kortizol szint' }
            ],
            therapy: {
              guidelines: ['Surviving Sepsis Campaign 2021'],
              empirical: {
                initial_management: [
                  { drug: 'Antibiotikumok', dose: 'Széles spektrumú IV', duration: '1 órán belül!', note: 'Hemokultúra levétele után. Fókuszfüggő választás (pl. Pip/Tazo, Meropenem).' },
                  { drug: 'Folyadékreszuszcitáció', dose: '30 ml/kg krisztalloid', duration: 'Első 3 órában', note: 'Hypotonia vagy laktát ≥4 mmol/L esetén.' }
                ],
                icu: [
                  { drug: 'Noradrenalin', dose: 'MAP >65 Hgmm tartása', duration: 'Folyamatos', note: 'Első választású vazopresszor.' },
                  { drug: 'Vazopresszin', dose: 'max 0.03 U/perc', duration: 'Folyamatos', note: 'Noradrenalin mellé adható a dózis csökkentésére vagy ha a dózis magas.' },
                  { drug: 'Hidrokortizon', dose: '200mg/nap (pl. 50mg 6 óránként)', duration: 'Folyamatos', note: 'Ha a vazopresszor igény perzisztál (refrakter shock).' }
                ]
              },
              targeted: 'Antibiogram alapján de-eszkaláció (PCT segíthet a döntésben). Forrás kontroll (tályog drenázs, nekrotikus szövet eltávolítás) elengedhetetlen.',
              supportive: ['Laktát-clearance követése', 'Lélegeztetés (ARDS protokoll)', 'Vesepótló kezelés (CRRT)', 'Vércukor kontroll', 'Trombózis profilaxis', 'Stress fekély profilaxis'],
              prevention: ['Kórházi higiénia', 'Oltások (Pneumococcus, Influenza)', 'Katéterek korai eltávolítása', 'Megfelelő sebkezelés']
            },
            prognosis: {
              mortality: 'Sepszis: 10-20%, Szeptikus shock: 40-60%',
              prognostic_scores: ['SOFA score (≥2 pont változás)', 'qSOFA (szűrés)', 'APACHE II'],
              factors: 'Életkor, komorbiditás, laktát szint, shock időtartama, forrás kontroll sikere'
            }
          },
          {
            id: 'toxic_shock',
            name: 'Toxikus shock szindróma (TSS)',
            pathogen: { type: 'Baktérium', name: 'Staphylococcus aureus, Streptococcus pyogenes', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Ritka (Staph: 0.5/100,000, Strep: 3/100,000)',
              risk_groups: ['Menstruáló nők (tampon - ritkább ma már)', 'Sebészi betegek', 'Égési sérültek', 'Bőrfertőzések'],
              seasonality: 'Nincs',
              transmission: 'Nem közvetlenül terjed (toxin mediált)'
            },
            pathomechanism: {
              steps: [
                'Lokális fertőzés (hüvely, seb) vagy kolonizáció',
                'Exotoxin termelés (TSST-1, Enterotoxinok, SpeA/C)',
                'Szuperantigén hatás: T-sejtek nem specifikus aktiválása (akár 20%)',
                'Masszív citokin felszabadulás (Citokin vihar)',
                'Kapilláris leak, vasodilatatio, shock',
                'Többszervi elégtelenség'
              ],
              virulence_factors: ['TSST-1 (Staph)', 'Streptococcal Pyrogenic Exotoxins (Spe)', 'M-protein (Strep)']
            },
            clinical: {
              incubation: 'Gyors (órák-napok)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Magas láz', description: '>38.9°C', severity: 'severe' },
                { name: 'Diffúz erythroderma', description: 'Napégés-szerű kiütés', severity: 'moderate' },
                { name: 'Hypotonia', description: 'Shock, ájulás', severity: 'severe' },
                { name: 'Hányás, hasmenés', description: 'Gyakori prodroma', severity: 'moderate' },
                { name: 'Izomfájdalom', description: 'Súlyos myalgia', severity: 'moderate' }
              ],
              physical_exam: [
                'Diffúz vörös kiütés (később hámlik, tenyér/talp)',
                'Epernyelv (Strep)',
                'Nyálkahártya hyperaemia',
                'Hypotonia, tachycardia',
                'Tudatzavar'
              ],
              complications: ['Shock', 'ARDS', 'DIC', 'Veseelégtelenség', 'Végtag nekrózis (Strep)', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis, thrombocytopenia', interpretation: 'Szisztémás gyulladás' },
                { test: 'Vese/Máj', finding: 'Kreatinin↑, Transzaminázok↑', interpretation: 'Szervi elégtelenség' },
                { test: 'CK', finding: 'Emelkedett', interpretation: 'Rhabdomyolysis' },
                { test: 'Hemokultúra', finding: 'Staph: gyakran negatív (toxin!), Strep: gyakran pozitív', interpretation: 'Etiológia' }
              ],
              imaging: [
                { modality: 'CT/MRI', finding: 'Mély szöveti fertőzés keresése', significance: 'Strep TSS (necrotizáló fasciitis)' }
              ],
              microbiology: [
                { test: 'Tenyésztés', finding: 'Seb, hüvely, torok, vér', significance: 'Kórokozó azonosítás' },
                { test: 'Toxin kimutatás', finding: 'TSST-1', significance: 'Referencia labor' }
              ]
            },
            differential: [
              { disease: 'Sepszis (egyéb)', distinguishing: 'Nincs jellegzetes kiütés/hámlás' },
              { disease: 'Meningococcemia', distinguishing: 'Petechiae/purpura, meningitis jelek' },
              { disease: 'Gyógyszerreakció (DRESS)', distinguishing: 'Új gyógyszer, lassabb, eosinophilia' },
              { disease: 'Skarlát', distinguishing: 'Enyhébb, nincs shock' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Azonnali intenzív osztályos felvétel!' }
                ],
                inpatient: [
                  { drug: 'Clindamycin', dose: '900mg IV 8 óránként', duration: '', note: 'Toxin termelés gátlása! (Kulcsfontosságú)' },
                  { drug: '+ Vancomycin/Linezolid', dose: 'IV', duration: '', note: 'MRSA fedezet' },
                  { drug: '+ Pip/Tazo vagy Meropenem', dose: 'IV', duration: '', note: 'Polimikrobiális gyanú esetén' }
                ],
                icu: [
                  { drug: 'IVIG', dose: '1-2g/kg', duration: 'Egyszeri', note: 'Toxin semlegesítés (Strep TSS)' },
                  { drug: 'Vazopresszorok', dose: 'Noradrenalin', duration: '', note: 'Shock kezelése' }
                ]
              },
              targeted: 'Staph (MSSA): Flucloxacillin + Clindamycin; Strep: Penicillin G + Clindamycin. Forrás kontroll (tampon eltávolítás, sebészi feltárás)!',
              supportive: ['Masszív folyadékpótlás', 'Lélegeztetés', 'Dialízis', 'Sebkezelés'],
              prevention: ['Tampon higiénia (gyakori csere)', 'Sebfertőtlenítés']
            },
            prognosis: {
              mortality: 'Staph TSS: <3%, Strep TSS: 30-70%',
              prognostic_scores: ['SOFA'],
              factors: 'Kórokozó (Strep rosszabb), életkor, alapbetegség'
            }
          }
        ]
      },
      fungal: {
        name: 'Gombás fertőzések',
        icon: '🍄',
        color: '#d97706',
        diseases: [
          {
            id: 'candidiasis',
            name: 'Invasive Candidiasis',
            pathogen: { type: 'Gomba', name: 'Candida albicans (és non-albicans fajok)', gram: 'Sarjadzó gomba', shape: 'ovális' },
            epidemiology: {
              incidence: 'Nozokomiális véráramfertőzések 4. leggyakoribb oka',
              risk_groups: ['ICU betegek', 'Centrális véna (CVC)', 'Széles spektrumú AB', 'TPN', 'Hasi műtét'],
              seasonality: 'Nincs',
              transmission: 'Endogén (GI traktusból), exogén (kéz, eszközök)'
            },
            pathomechanism: {
              steps: [
                'Mucosa barrier sérülése (AB, kemo)',
                'Transzlokáció a véráramba',
                'Biofilm képzés (katéter)',
                'Haematogen szórás (szem, szív, máj, lép)'
              ],
              virulence_factors: ['Biofilm', 'Adhezinek', 'Enzimek (proteáz, foszfolipáz)']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Lassú vagy akut',
              symptoms: [
                { name: 'Perzisztáló láz', description: 'Antibiotikumra nem reagáló', severity: 'severe' },
                { name: 'Sepszis jelei', description: 'Hypotonia, tachycardia', severity: 'severe' },
                { name: 'Endophthalmitis', description: 'Látászavar, szemfájdalom', severity: 'moderate' },
                { name: 'Hepatosplenikus', description: 'Hasi fájdalom, májenzim emelkedés', severity: 'moderate' }
              ],
              physical_exam: [
                'Láz',
                'Hemodinamikai instabilitás',
                'Retina vizsgálat (fundoscopia): fehér gócok',
                'Bőrtünetek (ritka disszeminált esetben)'
              ],
              complications: ['Szeptikus shock', 'Endophthalmitis (vakság)', 'Endocarditis', 'Osteomyelitis', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Hemokultúra', finding: 'Pozitív (csak 50-70% érzékeny!)', interpretation: 'Gold standard' },
                { test: 'Beta-D-glükán', finding: 'Emelkedett (>80 pg/mL)', interpretation: 'Pan-fungális marker (kivéve Mucor/Crypto)' }
              ],
              imaging: [
                { modality: 'Has UH/CT', finding: 'Microabscessusok (máj, lép)', significance: 'Krónikus disszeminált' },
                { modality: 'Szemészet', finding: 'Chorioretinitis', significance: 'Minden fungémiás betegnél kötelező!' }
              ],
              microbiology: [
                { test: 'Tenyésztés', finding: 'Candida sp.', significance: 'Fajazonosítás és rezisztencia (fluconazol!)' },
                { test: 'T2Candida', finding: 'DNS kimutatás vérből', significance: 'Gyors, érzékeny' }
              ]
            },
            differential: [
              { disease: 'Bakteriális szepszis', distinguishing: 'Hemokultúra, PCT (bár gombánál is emelkedhet)' },
              { disease: 'Aspergillosis', distinguishing: 'Tüdő dominancia, Galactomannan' },
              { disease: 'Katéter infekció (bakt)', distinguishing: 'Tenyésztés' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Kórházi kezelés' }
                ],
                inpatient: [
                  { drug: 'Fluconazol', dose: '800mg loading, majd 400mg', duration: '14 nap', note: 'Csak stabil beteg, nem korábbi azol expozíció' }
                ],
                icu: [
                  { drug: 'Echinocandin (Caspofungin)', dose: '70mg -> 50mg', duration: '14 nap (negatív HK után)', note: 'Első választás instabil/súlyos betegnél' }
                ]
              },
              targeted: 'C. albicans: Fluconazol (ha érzékeny); C. glabrata/krusei: Echinocandin. Szemészet: szisztémás + intravitrealis.',
              supportive: ['CVC eltávolítása (erősen ajánlott!)', 'Szemészeti konzílium'],
              prevention: ['Kézmosás', 'Katéter care', 'Profilaxis (transzplantáltak)']
            },
            prognosis: {
              mortality: '30-40% (szeptikus shock esetén magasabb)',
              prognostic_scores: ['Candida score'],
              factors: 'Forrás kontroll (katéter), korai terápia'
            }
          },
          {
            id: 'aspergillosis',
            name: 'Invasive Aspergillosis',
            pathogen: { type: 'Gomba', name: 'Aspergillus fumigatus', gram: 'Penészgomba', shape: 'hifák (45° elágazás)' },
            epidemiology: {
              incidence: 'Neutropéniás betegek 5-10%-a',
              risk_groups: ['Prolongált neutropenia', 'Allogén őssejt transzplantáció', 'Szolid szerv transzplantáció', 'Nagy dózisú szteroid'],
              seasonality: 'Nincs (építkezés pora rizikó)',
              transmission: 'Konídiumok inhalációja (levegőből)'
            },
            pathomechanism: {
              steps: [
                'Konídiumok belégzése az alveolusokba',
                'Macrophagok kudarca (immunszuppresszió)',
                'Germináció hifákká',
                'Angioinvázió (erekbe törés)',
                'Thrombózis, infarktus, szöveti nekrózis',
                'Haematogen szórás (agy, bőr)'
              ],
              virulence_factors: ['Angioinvázió', 'Gliotoxin', 'Melanin']
            },
            clinical: {
              incubation: 'Napok-hetek (immunszuppresszió alatt)',
              onset: 'Szubakut/Akut',
              symptoms: [
                { name: 'Láz', description: 'Antibiotikum rezisztens', severity: 'severe' },
                { name: 'Pleurális fájdalom', description: 'Mellkasi szúró fájdalom', severity: 'moderate' },
                { name: 'Haemoptoe', description: 'Véres köpet (angioinvázió)', severity: 'severe' },
                { name: 'Dyspnoe', description: 'Nehézlégzés', severity: 'moderate' }
              ],
              physical_exam: [
                'Láz',
                'Pleurális dörzszörej',
                'Tüdő infiltrátum jelei',
                'Melléküreg érzékenység (sinusitis)',
                'Neurológiai jelek (agyi tályog)'
              ],
              complications: ['Masszív tüdővérzés', 'Agyi tályog', 'Disseminált aspergillosis', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Galactomannan (GM)', finding: 'Index >0.5', interpretation: 'Szérum vagy BAL (specifikus Aspergillusra)' },
                { test: 'Beta-D-glükán', finding: 'Pozitív', interpretation: 'Nem specifikus' }
              ],
              imaging: [
                { modality: 'CT mellkas', finding: 'Halo jel (korai), Levegő-félhold jel (késői), nodulusok', significance: 'Gold standard képalkotó' }
              ],
              microbiology: [
                { test: 'BAL tenyésztés', finding: 'Aspergillus sp.', significance: 'Bizonyított eset' },
                { test: 'Mikroszkópia', finding: 'Szeptált hifák, 45° elágazás', significance: 'Biopszia/BAL' }
              ]
            },
            differential: [
              { disease: 'Mucormycosis', distinguishing: 'Nincs szeptum, 90° elágazás, Voriconazol nem hat!' },
              { disease: 'Bakteriális pneumonia', distinguishing: 'Képalkotó (halo), GM negatív' },
              { disease: 'Tüdőembólia', distinguishing: 'Angio CT, D-dimer' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Kórházi kezelés' }
                ],
                inpatient: [
                  { drug: 'Voriconazol', dose: '6mg/kg -> 4mg/kg IV/PO', duration: '6-12 hét', note: 'GOLD STANDARD (szintmérés!)' }
                ],
                icu: [
                  { drug: 'Isavuconazol', dose: '200mg IV/PO', duration: 'Hosszú', note: 'Kevesebb mellékhatás' },
                  { drug: 'Liposomalis Amphotericin B', dose: '3-5mg/kg IV', duration: '', note: 'Alternatíva' }
                ]
              },
              targeted: 'Voriconazol vagy Isavuconazol. Salvage: L-AmB, Caspofungin (kombináció vitatott).',
              supportive: ['Immunszuppresszió csökkentése (ha lehet)', 'G-CSF (neutropenia rendezése)', 'Sebészi reszekció (masszív haemoptoe)'],
              prevention: ['Posaconazol profilaxis (neutropenia)', 'HEPA szűrős szobák', 'Maszkviselés']
            },
            prognosis: {
              mortality: 'Magas (30-80% rizikócsoporttól függően)',
              prognostic_scores: ['Nincs'],
              factors: 'Neutropenia tartama, agyi érintettség, terápia kezdete'
            }
          }
        ]
      },
});
