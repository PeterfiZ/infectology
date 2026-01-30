Object.assign(window.diseases, {
      parasitic: {
        name: 'Parasitäre Infektionen',
        icon: '🦟',
        color: '#854d0e',
        diseases: [
           {
            id: 'malaria',
            name: 'Malaria',
            pathogen: { type: 'Protozoon', name: 'Plasmodium falciparum, vivax, ovale, malariae', gram: '-', shape: 'Ringform/Gametozyt' },
            epidemiology: {
              incidence: '>200 Millionen Fälle/Jahr weltweit, >400.000 Todesfälle',
              risk_groups: ['Reisende in Endemiegebiete', 'Kinder (<5 Jahre)', 'Schwangere', 'Immunsupprimierte'],
              seasonality: 'Regenzeit (Mücken)',
              transmission: 'Stich der Anopheles-Mücke'
            },
            pathomechanism: {
              steps: [
                'Mückenstich → Sporozoiten ins Blut',
                'Leberphase (exoerythrozytär): Schizontenbildung',
                'Blutphase (erythrozytär): Erythrozyten-Invasion, Vermehrung, Ruptur',
                'Zyklische Fieberanfälle (Erythrozyten-Ruptur)',
                'Zytoadhärenz (P. falciparum): Blockade der Mikrozirkulation (Gehirn, Niere)'
              ],
              virulence_factors: ['PfEMP1 (Adhäsion)', 'Antigenvariation', 'Hämozoin-Pigment']
            },
            clinical: {
              incubation: '7-30 Tage (je nach Art)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Fieberanfall', description: 'Schüttelfrost → Fieber → Schwitzen (zyklisch)', severity: 'severe' },
                { name: 'Kopfschmerzen', description: 'Intensiv', severity: 'moderate' },
                { name: 'Übelkeit, Erbrechen', description: 'Häufig', severity: 'moderate' },
                { name: 'Schwere Anämie', description: 'Erythrozytenzerstörung', severity: 'severe' },
                { name: 'Zerebrale Malaria', description: 'Koma, Krämpfe (P. falciparum)', severity: 'severe' }
              ],
              physical_exam: [
                'Fieber, Tachykardie',
                'Splenomegalie (häufig)',
                'Hepatomegalie',
                'Blässe (Anämie)',
                'Ikterus (Hämolyse)'
              ],
              complications: ['Zerebrale Malaria', 'Schwere Anämie', 'ARDS', 'Nierenversagen (Schwarzwasserfieber)', 'Hypoglykämie', 'Schock']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Anämie, Thrombozytopenie', interpretation: 'Hämolyse/Sequestrierung' },
                { test: 'LDH, Bilirubin', finding: 'Erhöht', interpretation: 'Hämolyse' },
                { test: 'Blutzucker', finding: 'Kann niedrig sein', interpretation: 'Schwere Malaria' }
              ],
              imaging: [
                { modality: 'Schädel-CT', finding: 'Hirnödem', significance: 'Ausschluss zerebraler Malaria' }
              ],
              microbiology: [
                { test: 'Dicker Tropfen/Blutausstrich', finding: 'Plasmodium-Formen', significance: 'GOLDSTANDARD (Giemsa)' },
                { test: 'Schnelltest (RDT)', finding: 'HRP-2 oder pLDH-Antigen', significance: 'Schnell, aber bei niedriger Parasitämie weniger empfindlich' },
                { test: 'PCR', finding: 'DNA', significance: 'Bei niedriger Parasitämie' }
              ]
            },
            differential: [
              { disease: 'Influenza', distinguishing: 'Keine Reiseanamnese, Fehlen der Periodizität' },
              { disease: 'Dengue-Fieber', distinguishing: 'Retrobulbärer Schmerz, Ausschlag, knochenbrechende Schmerzen' },
              { disease: 'Typhus', distinguishing: 'Bradykardie, Roseolen, GI-Symptome dominieren' },
              { disease: 'Meningitis', distinguishing: 'Nackensteifigkeit, Liquorbefund' }
            ],
            therapy: {
              guidelines: ['WHO Guidelines for malaria (2023)'],
              empirical: {
                outpatient: [
                  { drug: 'Artemether-Lumefantrin', dose: 'p.o. (gewichtsabhängig)', duration: '3 Tage', note: 'Erstlinien-ACT bei unkomplizierter P. falciparum.' },
                  { drug: 'Dihydroartemisinin-Piperaquin', dose: 'p.o.', duration: '3 Tage', note: 'Alternative ACT.' },
                  { drug: 'Artesunat-Pyronaridin', dose: 'p.o.', duration: '3 Tage', note: 'Alternative ACT.' },
                  { drug: 'Chloroquin', dose: 'p.o.', duration: '3 Tage', note: 'Nur für P. vivax/ovale/malariae, wenn aus einem Chloroquin-sensitiven Gebiet.' }
                ],
                inpatient: [
                  { drug: 'Artesunat', dose: '2.4 mg/kg i.v./i.m.', duration: 'Mindestens 24 Stunden (0, 12, 24 Stunden)', note: 'Erste Wahl bei schwerer Malaria (Erwachsene/Kinder/Schwangere). Danach vollständiger ACT-Kurs!' },
                  { drug: 'Artemether', dose: '3.2 mg/kg i.m.', duration: '', note: 'Alternative, wenn Artesunat nicht verfügbar.' },
                  { drug: 'Chinin', dose: '20 mg/kg Ladedosis, dann 10 mg/kg alle 8h', duration: '', note: 'Drittlinie, EKG-Überwachung erforderlich!' }
                ]
              },
              targeted: 'Radikale Heilung bei P. vivax/ovale: Primaquin (0.25-0.5 mg/kg für 14 Tage) oder Tafenoquin (Einzeldosis) gegen Hypnozoiten. G6PD-Mangel-Screening ist obligatorisch!',
              supportive: ['Flüssigkeitssubstitution (vorsichtig, Gefahr des Lungenödems!)', 'Blutzuckerüberwachung (Hypoglykämie häufig)', 'Fiebersenkung (Paracetamol)', 'Transfusion (schwere Anämie)', 'Dialyse (Nierenversagen)'],
              prevention: ['Chemoprophylaxe (Atovaquon-Proguanil, Doxycyclin, Mefloquin)', 'Moskitonetz (LLIN)', 'Impfstoff (RTS,S/AS01 und R21/Matrix-M für Kinder in Endemiegebieten)']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: Fieber bei Reisenden aus Endemiegebieten',
                'Goldstandard: Mikroskopie (Dicker Tropfen/Blutausstrich); RDT (Schnelltest) ist nützlich, aber P. falciparum HRP2-Deletionen können auftreten'
              ],
              treatment_indications: [
                'Unkomplizierte Malaria: ACT (Artemisinin-basierte Kombinationstherapie)',
                'Schwere Malaria: IV Artesunat (jede Spezies, jedes Trimenon)',
                'P. vivax/ovale: Schizontozid (Chloroquin/ACT) + Hypnozoitozid (Primaquin/Tafenoquin)'
              ],
              first_line: [
                'Unkomplizierte P. falciparum: Artemether-Lumefantrin oder Artesunat-Amodiaquin oder Dihydroartemisinin-Piperaquin',
                'Schwere Malaria: IV Artesunat für mindestens 24 Stunden, bis der Patient schlucken kann, dann ein vollständiger 3-tägiger ACT-Kurs'
              ],
              special_populations: [
                'Schwangerschaft 1. Trimenon: Artemether-Lumefantrin (WHO 2023 Empfehlung) oder Chinin+Clindamycin',
                'Schwangerschaft 2.-3. Trimenon: ACT',
                'Schwere Malaria in der Schwangerschaft: IV Artesunat (bevorzugt gegenüber Chinin)'
              ]
            },
            prognosis: {
              mortality: 'Unkompliziert: <0.1%; Schwer: 10-20% (behandelt)',
              prognostic_scores: ['Parasitämie-Level (>5-10%)'],
              factors: 'Späte Diagnose, P. falciparum, Alter, Schwangerschaft'
            }
          },
          {
            id: 'toxoplasmosis',
            name: 'Toxoplasmose',
            pathogen: { type: 'Protozoon', name: 'Toxoplasma gondii', gram: '-', shape: 'intrazellulär' },
            epidemiology: {
              incidence: '30-50% der Weltbevölkerung ist seropositiv (latent)',
              risk_groups: ['Immunsupprimierte (HIV/AIDS, Transplantierte)', 'Schwangere (Fötus!)', 'Katzenhalter'],
              seasonality: 'Keine',
              transmission: 'Fäkal-oral (Katzenkot), rohes Fleisch (Zyste), vertikal'
            },
            pathomechanism: {
              steps: [
                'Ingestion von Oozysten/Gewebezysten',
                'Darmwandpenetration → Tachyzoiten (schnelle Vermehrung)',
                'Hämatogene Streuung (akute Phase)',
                'Immunantwort → Bradyzoiten (langsam) → Gewebezystenbildung (Muskel, Gehirn, Auge)',
                'Latenz (lebenslang)',
                'Reaktivierung (Immunsuppression): Zystenruptur → Enzephalitis'
              ],
              virulence_factors: ['Intrazelluläres Überleben', 'Zystenbildung', 'Immunmodulation']
            },
            clinical: {
              incubation: '5-23 Tage',
              onset: 'Langsam/asymptomatisch',
              symptoms: [
                { name: 'Asymptomatisch', description: '80-90% der immunkompetenten Personen', severity: 'mild' },
                { name: 'Mononukleose-ähnlich', description: 'Fieber, Lymphadenopathie, Müdigkeit', severity: 'mild' },
                { name: 'Zerebral (AIDS)', description: 'Kopfschmerzen, Verwirrtheit, Krämpfe, Hemiparese', severity: 'severe' },
                { name: 'Chorioretinitis', description: 'Verschwommenes Sehen, Augenschmerzen', severity: 'moderate' },
                { name: 'Angeboren', description: 'Hydrozephalus, Verkalkung, Chorioretinitis (Sabin-Tetrade)', severity: 'severe' }
              ],
              physical_exam: [
                'Zervikale Lymphadenopathie (schmerzlos)',
                'Fieber (selten)',
                'Fokale neurologische Zeichen (zerebrale Toxo)',
                'Fundoskopie: gelblich-weiße Läsionen'
              ],
              complications: ['Toxoplasma-Enzephalitis (TE)', 'Erblindung', 'Pneumonitis', 'Myokarditis', 'Fötaler Tod/Schädigung']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Lymphozytose', interpretation: 'Unspezifisch' },
                { test: 'CD4-Zahl', finding: '<100/µL', interpretation: 'Reaktivierungsrisiko (HIV)' }
              ],
              imaging: [
                { modality: 'Gehirn-MRT', finding: 'Multiple ringförmig kontrastmittelanreichernde Läsionen (Basalganglien)', significance: 'Zerebrale Toxo (AIDS)' },
                { modality: 'Schädel-CT', finding: 'Verkalkung (angeboren)', significance: 'Neugeborenes' }
              ],
              microbiology: [
                { test: 'Serologie (IgM/IgG)', finding: 'IgM (akut), IgG (überstanden/latent)', significance: 'Aviditätstest (Schwangerschaft)' },
                { test: 'PCR', finding: 'DNA (Liquor, Fruchtwasser, Blut)', significance: 'Nachweis einer aktiven Infektion' },
                { test: 'Histologie', finding: 'Tachyzoiten', significance: 'Biopsie (selten)' }
              ]
            },
            differential: [
              { disease: 'Mononukleose (EBV/CMV)', distinguishing: 'Serologie, Halsschmerzen dominieren' },
              { disease: 'ZNS-Lymphom', distinguishing: 'MRT (solitär, periventrikulär), EBV-PCR, Thallium-SPECT' },
              { disease: 'Katzenkratzkrankheit', distinguishing: 'Einseitiger Lymphknoten, Inokulationsstelle' },
              { disease: 'Andere Enzephalitis', distinguishing: 'Liquorbefund, Bildgebung' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Keine', dose: '-', duration: '-', note: 'Asymptomatische immunkompetente Personen benötigen keine Behandlung' }
                ],
                inpatient: [
                  { drug: 'Pyrimethamin + Sulfadiazin', dose: 'p.o.', duration: '6 Wochen', note: 'Standardbehandlung (+Folsäure!)' },
                  { drug: 'Trimethoprim/Sulfamethoxazol', dose: 'p.o./i.v.', duration: '6 Wochen', note: 'Alternative' }
                ],
                icu: [
                  { drug: 'Steroid', dose: 'Dexamethason', duration: '', note: 'Bei Masseneffekt (Hirnödem)' }
                ]
              },
              targeted: 'Schwangerschaft: Spiramycin (1. Trimenon) oder Pyrimethamin/Sulfadiazin (später). HIV-Prophylaxe: TMP/SMX.',
              supportive: ['Folsäure-Supplementierung (Leucovorin) zum Schutz des Knochenmarks', 'Antikonvulsiva'],
              prevention: ['Fleisch gründlich garen', 'Katzenklo meiden (Schwangere)', 'Händewaschen', 'Prophylaxe bei CD4<100 (TMP/SMX)']
            },
            guidelines: {
              diagnosis: [
                'Serologie (IgM/IgG) ist grundlegend; Aviditätstest in der Schwangerschaft zur Bestimmung des Infektionszeitpunkts',
                'PCR (Liquor, Fruchtwasser, Blut) zum Nachweis einer aktiven Infektion bei Immunsupprimierten oder dem Fötus',
                'Bildgebung (MRT) bei Verdacht auf zerebrale Toxoplasmose (ringförmige Anreicherung)'
              ],
              treatment_indications: [
                'Immunkompetent: erfordert in der Regel keine Behandlung, außer bei schweren Symptomen oder Chorioretinitis',
                'Immunsupprimiert (AIDS, CD4<100): erfordert immer eine Behandlung (akut + Erhaltungstherapie)',
                'Schwangerschaft: Behandlung bei akuter Infektion erforderlich, um die Übertragung zu reduzieren/den Fötus zu schützen'
              ]
            },
            prognosis: {
              mortality: 'Immunkompetent: ausgezeichnet; AIDS/TE: ohne Behandlung tödlich, Rezidiv häufig',
              prognostic_scores: ['Keine'],
              factors: 'Immunstatus, früher Behandlungsbeginn'
            }
          },
          {
            id: 'ascariasis',
            name: 'Ascariasis (Spulwurmbefall)',
            pathogen: { type: 'Helminth', name: 'Ascaris lumbricoides', gram: '-', shape: 'Rundwurm (15-35 cm)' },
            epidemiology: {
              incidence: 'Häufigste Wurminfektion weltweit (>800 Millionen)',
              risk_groups: ['Kinder', 'Menschen in schlechten hygienischen Bedingungen'],
              seasonality: 'Keine',
              transmission: 'Fäkal-oral (mit Eiern kontaminierter Boden/Gemüse)'
            },
            pathomechanism: {
              steps: [
                'Eier-Ingestion',
                'Larve schlüpft im Dünndarm',
                'Wandert über das venöse System in die Lunge (Löffler-Syndrom)',
                'Wird hochgehustet und verschluckt',
                'Erwachsener Wurm im Dünndarm (Nährstoffentzug, Obstruktion)'
              ],
              virulence_factors: ['Protease-Inhibitoren', 'Migrationsfähigkeit']
            },
            clinical: {
              incubation: '4-8 Wochen',
              onset: 'Langsam',
              symptoms: [
                { name: 'Lungenphase', description: 'Husten, Dyspnoe, Löffler-Syndrom', severity: 'moderate' },
                { name: 'Darmphase', description: 'Bauchschmerzen, Blähungen, Übelkeit', severity: 'mild' },
                { name: 'Obstruktion', description: 'Ileus (Wurmknäuel), Gallengangsobstruktion', severity: 'severe' }
              ],
              physical_exam: [
                'Oft unauffällig',
                'Bauchdruckempfindlichkeit',
                'Wurmabgang im Stuhl/Erbrochenem'
              ],
              complications: ['Mechanischer Ileus', 'Gallenwegs-Ascariasis', 'Pankreatitis', 'Mangelernährung (Kinder)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Eosinophilie (während der Lungenphase)', interpretation: 'Parasitäre Infektion' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Wandernde Infiltrate (Löffler)', significance: 'Lungenphase' },
                { modality: 'Abdomen-US', finding: 'Würmer in Gallengängen/Darm ("Eisenbahnschienen"-Zeichen)', significance: 'Komplikation' }
              ],
              microbiology: [
                { test: 'Stuhl auf Eier und Parasiten', finding: 'Charakteristische höckerige Eier', significance: 'Diagnostisch' }
              ]
            },
            differential: [
              { disease: 'Andere Wurminfektionen', distinguishing: 'Stuhluntersuchung' },
              { disease: 'Asthma/Pneumonie', distinguishing: 'Eosinophilie, wandernde Infiltrate' },
              { disease: 'Gallensteine', distinguishing: 'US-Bild' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Mebendazol', dose: '2x100mg p.o.', duration: '3 Tage', note: 'Erste Wahl' },
                  { drug: 'Albendazol', dose: '400mg p.o.', duration: 'Einzeldosis', note: 'Alternative' }
                ]
              },
              targeted: 'Benzimidazole (Mebendazol, Albendazol). In der Schwangerschaft: Pyrantel-Pamoat.',
              supportive: ['Chirurgische/endoskopische Entfernung bei Obstruktion'],
              prevention: ['Gemüse waschen', 'Händewaschen', 'Abwasserbehandlung']
            },
            prognosis: { mortality: 'Niedrig, bei kompliziertem Ileus höher', prognostic_scores: [], factors: 'Alter, Obstruktion' }
          },
          {
            id: 'taeniasis',
            name: 'Taeniasis (Bandwurmbefall)',
            pathogen: { type: 'Helminth', name: 'Taenia saginata (Rind), Taenia solium (Schwein)', gram: '-', shape: 'Plattwurm (Band)' },
            epidemiology: {
              incidence: 'Weltweit verbreitet',
              risk_groups: ['Konsumenten von rohem Fleisch'],
              transmission: 'Rohes/ungenügend gegartes Fleisch (Larve/Cysticercus). T. solium Eier von Mensch zu Mensch -> Zystizerkose!'
            },
            pathomechanism: {
              steps: [
                'Ingestion von Zystizerken aus Fleisch -> erwachsener Wurm im Darm (Taeniasis)',
                'Ingestion von T. solium EI (fäkal-oral) -> Larve schlüpft -> Gewebewanderung -> Zystizerkose (Gehirn, Muskel, Auge)'
              ],
              virulence_factors: ['Scolex (Haken/Saugnäpfe)']
            },
            clinical: {
              incubation: '8-14 Wochen',
              onset: 'Asymptomatisch/Mild',
              symptoms: [
                { name: 'Intestinal', description: 'Leichte Bauchbeschwerden, Abgang von Proglottiden (Gliedern)', severity: 'mild' },
                { name: 'Neurozystizerkose (T. solium)', description: 'Epilepsie, Kopfschmerzen, erhöhter Hirndruck', severity: 'severe' }
              ],
              physical_exam: ['Unauffällig (Darmwurm)', 'Neurologische Symptome (Zystizerkose)'],
              complications: ['Neurozystizerkose (führende Ursache für Epilepsie in Entwicklungsländern)', 'Okuläre Zystizerkose']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Eosinophilie (selten bei Darmform)', interpretation: '-' }],
              imaging: [{ modality: 'CT/MRT Gehirn', finding: 'Zysten, Verkalkungen', significance: 'Neurozystizerkose' }],
              microbiology: [
                { test: 'Stuhl', finding: 'Proglottiden oder Eier', significance: 'Diagnostisch (Artenidentifikation durch Proglottid)' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Praziquantel', dose: '5-10 mg/kg p.o.', duration: 'Einzeldosis', note: 'Für Darmwurm' },
                  { drug: 'Niclosamid', dose: '2g p.o.', duration: 'Einzeldosis', note: 'Alternative' }
                ]
              },
              targeted: 'Neurozystizerkose: Albendazol + Praziquantel + Steroide (zur Entzündungshemmung).',
              prevention: ['Fleisch gründlich garen', 'Fleischbeschau', 'Händewaschen (gegen T. solium Autoinfektion)']
            },
            prognosis: { mortality: 'Darmwurm: 0%; Neurozystizerkose: variabel, Epilepsie kann bleiben', prognostic_scores: [], factors: 'Erregertyp, Lokalisation' }
          },
          {
            id: 'echinococcosis',
            name: 'Echinokokkose (Hydatidenkrankheit)',
            pathogen: { type: 'Helminth', name: 'Echinococcus granulosus (zystisch), E. multilocularis (alveolär)', gram: '-', shape: 'Bandwurm' },
            epidemiology: {
              incidence: 'Endemisch (Mittelmeerraum, Osteuropa, Asien)',
              risk_groups: ['Hundehalter, Hirten', 'Konsumenten von Waldbeeren (Fuchs - E. multilocularis)'],
              transmission: 'Fäkal-oral: Ingestion von Eiern aus Hunde-/Fuchskot'
            },
            pathomechanism: {
              steps: [
                'Eier-Ingestion -> Onkosphäre im Darm',
                'Pfortaderkreislauf -> Leber (am häufigsten) -> Lunge -> Andere',
                'Hydatidenzystenbildung (langsames Wachstum)',
                'Zystenruptur -> Anaphylaxie und Dissemination'
              ],
              virulence_factors: ['Laminierte Schicht (Immunschutz)', 'Protoscolices']
            },
            clinical: {
              incubation: 'Jahre (langsames Wachstum)',
              onset: 'Langsam',
              symptoms: [
                { name: 'Leberzyste', description: 'Schmerzen im rechten Oberbauch, Hepatomegalie', severity: 'moderate' },
                { name: 'Lungenzyste', description: 'Husten, Brustschmerzen, Hämoptyse', severity: 'moderate' },
                { name: 'Ruptur', description: 'Anaphylaktischer Schock, Fieber, Urtikaria', severity: 'severe' }
              ],
              physical_exam: ['Hepatomegalie', 'Tastbare Raumforderung'],
              complications: ['Zystenruptur (Anaphylaxie)', 'Gallengangsobstruktion', 'Bakterielle Superinfektion']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Eosinophilie (25%)', interpretation: 'Nicht immer vorhanden' }],
              imaging: [
                { modality: 'US/CT', finding: 'Zyste, Tochterblasen ("Rosette"), Verkalkung', significance: 'Diagnostisch (WHO-Klassifikation)' }
              ],
              microbiology: [
                { test: 'Serologie (ELISA, IHA)', finding: 'Positiv', significance: 'Bestätigung (nicht immer positiv)' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Albendazol', dose: '2x400mg p.o.', duration: 'Monatelang', note: 'Vor/nach OP oder bei Inoperabilität' }
                ]
              },
              targeted: 'PAIR-Technik (Punktion, Aspiration, Injektion, Re-Aspiration) oder Chirurgische Entfernung (Vorsicht vor Ruptur!). E. multilocularis: radikale Chirurgie + lebenslang Albendazol.',
              prevention: ['Entwurmung von Hunden', 'Händewaschen', 'Waschen von Waldfrüchten']
            },
            prognosis: { mortality: 'E. granulosus: gut; E. multilocularis: schlecht (ähnelt Leberkrebs)', prognostic_scores: [], factors: 'Erregertyp, chirurgische Möglichkeit' }
          },
          {
            id: 'enterobiasis',
            name: 'Enterobiasis (Madenwurmbefall)',
            pathogen: { type: 'Helminth', name: 'Enterobius vermicularis', gram: '-', shape: 'kleiner weißer Wurm' },
            epidemiology: {
              incidence: 'Häufigste Wurminfektion in gemäßigten Zonen (auch in Industrieländern)',
              risk_groups: ['Kleinkinder', 'Gemeinschaften (Kita, Schule)', 'Familienmitglieder'],
              transmission: 'Fäkal-oral, Autoinfektion (Kratzen -> Mund), Inhalation (Staub)'
            },
            pathomechanism: {
              steps: [
                'Eier-Ingestion',
                'Larve im Dünndarm',
                'Erwachsener Wurm im Zäkum',
                'Weibchen wandert nachts in die Perianalregion zur Eiablage -> Juckreiz'
              ],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '2-6 Wochen',
              onset: 'Allmählich',
              symptoms: [
                { name: 'Perianaler Juckreiz', description: 'Hauptsächlich nachts (Pruritus ani)', severity: 'moderate' },
                { name: 'Schlafstörung', description: 'Aufgrund von Juckreiz', severity: 'mild' },
                { name: 'Vulvovaginitis', description: 'Bei jungen Mädchen (aberrante Wanderung)', severity: 'moderate' }
              ],
              physical_exam: ['Perianale Exkoriation (Kratzspuren)', 'Würmer können sichtbar sein (selten)'],
              complications: ['Bakterielle Superinfektion (Kratzen)', 'Salpingitis (selten)']
            },
            diagnostics: {
              microbiology: [
                { test: 'Klebestreifen-Test (Scotch-tape)', finding: 'Eier in der Morgenprobe', significance: 'Goldstandard (Stuhluntersuchung oft negativ!)' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Mebendazol', dose: '100mg p.o.', duration: 'Einmalig, nach 2 Wochen wiederholen', note: 'Ganze Familie behandeln!' },
                  { drug: 'Albendazol', dose: '400mg p.o.', duration: 'Einmalig, nach 2 Wochen wiederholen', note: '' }
                ]
              },
              targeted: 'Wiederholung nach 2 Wochen erforderlich (zur Verhinderung der Autoinfektion).',
              prevention: ['Nägel schneiden', 'Pyjama/Bettwäsche in heißem Wasser waschen', 'Händewaschen']
            },
            prognosis: { mortality: 'Null', prognostic_scores: [], factors: 'Keine' }
          },
          {
            id: 'trichinellosis',
            name: 'Trichinellose',
            pathogen: { type: 'Helminth', name: 'Trichinella spiralis', gram: '-', shape: 'Fadenwurm' },
            epidemiology: {
              incidence: 'Sporadische Ausbrüche (Hausschlachtung)',
              risk_groups: ['Konsumenten von rohem/geräuchertem Schweinefleisch, Wildschwein'],
              transmission: 'Verzehr von larvenhaltigem Fleisch (unzureichende Erhitzung)'
            },
            pathomechanism: {
              steps: [
                'Ingestion von enzystierten Larven',
                'Erwachsener Wurm im Darm -> neue Larven (Enterale Phase)',
                'Larven in den Blutkreislauf -> Wanderung in quergestreifte Muskulatur',
                'Enzystierung im Muskel (Parenterale Phase)'
              ],
              virulence_factors: ['Ammenzellbildung im Muskel']
            },
            clinical: {
              incubation: 'Enteral: 1-2 Tage; Parenteral: 1-4 Wochen',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Enterale Phase', description: 'Durchfall, Übelkeit, Bauchschmerzen', severity: 'moderate' },
                { name: 'Fieber', description: 'Hoch, anhaltend', severity: 'moderate' },
                { name: 'Myalgie', description: 'Starke Muskelschmerzen, Schwäche', severity: 'severe' },
                { name: 'Periorbitales Ödem', description: 'Charakteristische Gesichtsschwellung', severity: 'moderate' },
                { name: 'Splitterblutungen', description: 'Unter den Nägeln', severity: 'mild' }
              ],
              physical_exam: ['Periorbitales Ödem', 'Muskelempfindlichkeit', 'Fieber', 'Konjunktivitis'],
              complications: ['Myokarditis (Todesursache!)', 'Enzephalitis', 'Pneumonie']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Eosinophilie (bis zu 50%!)', interpretation: 'Sehr charakteristisch' },
                { test: 'CK, LDH', finding: 'Erhöht', interpretation: 'Muskelschädigung' }
              ],
              microbiology: [
                { test: 'Serologie (ELISA)', finding: 'Positiv (ab Woche 3)', significance: 'Diagnostisch' },
                { test: 'Muskelbiopsie', finding: 'Larven', significance: 'Selten erforderlich' }
              ]
            },
            differential: [
              { disease: 'Influenza', distinguishing: 'Fehlen von Eosinophilie' },
              { disease: 'Leptospirose', distinguishing: 'Nieren-/Leberbeteiligung, keine Eosinophilie' },
              { disease: 'Myositis', distinguishing: 'Autoantikörper' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Mebendazol', dose: '3x200-400mg p.o.', duration: '3 Tage, dann reduziert für 10 Tage', note: 'In der Frühphase wirksamer' },
                  { drug: 'Albendazol', dose: '2x400mg p.o.', duration: '10-14 Tage', note: '' }
                ],
                inpatient: [
                  { drug: 'Steroid (Prednisolon)', dose: '40-60mg p.o.', duration: 'Symptomatisch', note: 'Bei schwerer Entzündung/allergischer Reaktion (Herxheimer-ähnlich)' }
                ]
              },
              targeted: 'Anthelminthikum + Steroid.',
              prevention: ['Fleischbeschau (Trichinenschau)', 'Fleisch gründlich garen (>71°C)', 'Einfrieren (-15°C für 3 Wochen - bei Wildschwein nicht immer ausreichend!)']
            },
            prognosis: { mortality: 'Niedrig, aber bei Myokarditis/Enzephalitis tödlich möglich', prognostic_scores: [], factors: 'Organbeteiligung, Zeitpunkt der Behandlung' }
          },
          {
            id: 'toxocariasis',
            name: 'Toxocariasis (Larva Migrans Visceralis/Ocularis)',
            pathogen: { type: 'Helminth', name: 'Toxocara canis (Hund), Toxocara cati (Katze)', gram: '-', shape: 'Spulwurmlarve' },
            epidemiology: {
              incidence: 'Weltweit verbreitete Zoonose',
              risk_groups: ['Kleinkinder (Sandkasten, Geophagie)', 'Hundehalter'],
              seasonality: 'Keine',
              transmission: 'Fäkal-oral: Ingestion von mit Eiern kontaminiertem Boden (kein direkter Tierkontakt!)'
            },
            pathomechanism: {
              steps: [
                'Eier-Ingestion',
                'Larve schlüpft im Dünndarm',
                'Dringt durch die Darmwand und gelangt in den Kreislauf',
                'Gewebewanderung (Leber, Lunge, Gehirn, Auge)',
                'Entwickelt sich im Menschen NICHT zum erwachsenen Wurm (paratenischer Wirt)',
                'Granulomatöse Entzündung um die Larve'
              ],
              virulence_factors: ['Gewebewanderung', 'Exkretorisch-sekretorische Antigene (TES)']
            },
            clinical: {
              incubation: 'Wochen-Monate',
              onset: 'Langsam',
              symptoms: [
                { name: 'Viszerale Larva Migrans (VLM)', description: 'Fieber, Husten, Bauchschmerzen, Hepatomegalie', severity: 'moderate' },
                { name: 'Okuläre Larva Migrans (OLM)', description: 'Einseitiger Sehverlust, Strabismus, Leukokorie', severity: 'severe' },
                { name: 'Versteckte (covert) Toxocariasis', description: 'Bauchschmerzen, Kopfschmerzen, Husten', severity: 'mild' }
              ],
              physical_exam: [
                'Hepatomegalie',
                'Fieber',
                'Pulmonale Rasselgeräusche (Giemen)',
                'Fundoskopie: retinales Granulom, Chorioretinitis'
              ],
              complications: ['Erblindung (OLM)', 'Myokarditis', 'Epilepsie (zerebrales Granulom)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Extreme Eosinophilie (bei VLM, kann bei OLM fehlen!)', interpretation: 'Parasitäre Infektion' },
                { test: 'IgE', finding: 'Erhöht', interpretation: 'Allergische/parasitäre Reaktion' }
              ],
              imaging: [
                { modality: 'Abdomen-US', finding: 'Hepatomegalie, hypoechogene Läsionen', significance: 'VLM' },
                { modality: 'Augenheilkunde', finding: 'Retinales Granulom', significance: 'OLM' }
              ],
              microbiology: [
                { test: 'Serologie (ELISA)', finding: 'Positiv (TES-Antigen)', significance: 'Diagnostisch (Western Blot zur Bestätigung)' },
                { test: 'Stuhluntersuchung', finding: 'NEGATIV', significance: 'Keine erwachsenen Würmer im Menschen, keine Eiausscheidung!' }
              ]
            },
            differential: [
              { disease: 'Retinoblastom', distinguishing: 'Unterscheidung von OLM ist kritisch (Leukokorie)!' },
              { disease: 'Ascariasis', distinguishing: 'Eier im Stuhl, Lungenphase kürzer' },
              { disease: 'Allergisches Asthma', distinguishing: 'Serologie, Hepatomegalie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Albendazol', dose: '2x400mg p.o.', duration: '5 Tage (VLM), 2-4 Wochen (OLM)', note: 'Mit fettreicher Mahlzeit einnehmen' },
                  { drug: 'Mebendazol', dose: '2x100-200mg p.o.', duration: '5 Tage', note: 'Wird weniger resorbiert' }
                ]
              },
              targeted: 'Albendazol + Steroide (zur Entzündungshemmung, besonders bei OLM und schwerer VLM).',
              supportive: ['Augenärztliche Chirurgie (Vitrektomie) bei Bedarf'],
              prevention: ['Entwurmung von Hunden/Katzen', 'Händewaschen', 'Abdecken von Sandkästen']
            },
            prognosis: { mortality: 'Sehr niedrig, aber OLM kann zu Sehverlust führen', prognostic_scores: [], factors: 'Lokalisation (okulär ist schlechter)' }
      }
    ]
  }
});