Object.assign(window.diseases, {
      parasitic: {
        name: 'Parasitäre Infektionen',
        icon: '🦟',
        color: '#854d0e',
        diseases: [
           {
            id: 'malaria',
            name: 'Malaria',
            pathogen: { type: 'Protozoon', name: '<i>Plasmodium falciparum, vivax, ovale, malariae, knowlesi</i>', gram: '-', shape: 'Ringform/Gametozyt' },
            epidemiology: {
              incidence: '>200 Millionen Fälle/Jahr weltweit, >400.000 Todesfälle',
              risk_groups: ['Reisende in Endemiegebiete', 'Kinder (<5 Jahre)', 'Schwangere', 'Immungeschwächte'],
              seasonality: 'Regenzeit (Mücken)',
              transmission: 'Stich der Anopheles-Mücke'
            },
            pathomechanism: {
              steps: [
                'Während des Stichs einer infizierten Anopheles-Mücke gelangen Sporozoiten in den Blutkreislauf und wandern innerhalb von Minuten in die Leberzellen.',
                'Leberphase (exoerythrozytär): In den Hepatozyten vermehren sich die Parasiten asexuell und bilden Schizonten. Diese Phase ist asymptomatisch. P. vivax und P. ovale können Hypnozoiten (Ruheformen) bilden, die zu Rückfällen führen können.',
                'Blutphase (erythrozytär): Aus der Leber freigesetzte Merozoiten infizieren rote Blutkörperchen (Erythrozyten). Innerhalb der Erythrozyten entwickeln sie sich zu ringförmigen Trophozoiten und dann zu Schizonten, die bei der Ruptur der Erythrozyten neue Merozoiten freisetzen.',
                'Die zyklische Ruptur der Erythrozyten (alle 48-72 Stunden) verursacht die charakteristischen, periodischen Fieberanfälle durch die Freisetzung von Entzündungszytokinen (TNF-alpha, IL-1).',
                'Mit P. falciparum infizierte Erythrozyten haften über das PfEMP1-Protein an den Wänden kleiner Blutgefäße (Zytoadhärenz), was die Mikrozirkulation blockiert und zu schweren Organschäden führt (Gehirn, Nieren, Lunge).'
              ],
              virulence_factors: ['PfEMP1 (Adhäsion)', 'Antigenvariation', 'Hämozoin-Pigment']
            },
            clinical: {
              incubation: '7-30 Tage (je nach Art)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Unkomplizierte Malaria', description: 'Charakterisiert durch Fieberanfälle: Schüttelfrost, hohes Fieber (40-41°C), gefolgt von Schwitzen und Fieberabfall. Der Zyklus wiederholt sich alle 48 (P. falciparum, vivax, ovale) oder 72 Stunden (P. malariae). Begleitsymptome sind Kopfschmerzen, Muskelschmerzen, Übelkeit und Splenomegalie.', severity: 'moderate' },
                { name: 'Schwere Malaria (P. falciparum)', description: 'Ein lebensbedrohlicher Zustand. Manifestationen umfassen zerebrale Malaria (Bewusstseinsstörung, Koma, Krämpfe), schwere Anämie, ARDS (Lungenödem), Nierenversagen (Schwarzwasserfieber), metabolische Azidose, Hypoglykämie und Schock.', severity: 'severe' }
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
                  { drug: 'Artemether-Lumefantrin', dose: 'p.o. (gewichtsabhängig)', duration: '3 Tage', note: 'Mittel der ersten Wahl (ACT) bei unkomplizierter P. falciparum.' },
                  { drug: 'Dihydroartemisinin-Piperaquin', dose: 'p.o.', duration: '3 Tage', note: 'Alternative ACT.' },
                  { drug: 'Artesunat-Pyronaridin', dose: 'p.o.', duration: '3 Tage', note: 'Alternative ACT.' },
                  { drug: 'Chloroquin', dose: 'p.o.', duration: '3 Tage', note: 'Nur für P. vivax/ovale/malariae, wenn aus einem Chloroquin-sensitiven Gebiet.' }
                ],
                inpatient: [
                  { drug: 'Artesunat', dose: '2.4 mg/kg i.v./i.m.', duration: 'Mindestens 24 Stunden (0, 12, 24 Stunden)', note: 'Erste Wahl bei schwerer Malaria (Erwachsene/Kinder/Schwangere). Danach vollständiger ACT-Kurs!' },
                  { drug: 'Artemether', dose: '3.2 mg/kg i.m.', duration: '', note: 'Alternative, wenn Artesunat nicht verfügbar.' },
                  { drug: 'Chinin', dose: '20 mg/kg Ladedosis, dann 10 mg/kg alle 8h', duration: '', note: 'Reservemittel, EKG-Überwachung erforderlich!' }
                ]
              },
              targeted: 'Radikale Heilung bei P. vivax/ovale: Primaquin (0.25-0.5 mg/kg für 14 Tage) oder Tafenoquin (Einzeldosis) gegen Hypnozoiten. G6PD-Mangel-Screening ist obligatorisch!',
              supportive: ['Flüssigkeitssubstitution (vorsichtig, Gefahr des Lungenödems!)', 'Blutzuckerüberwachung (Hypoglykämie häufig)', 'Fiebersenkung (Paracetamol)', 'Transfusion (schwere Anämie)', 'Dialyse (Nierenversagen)'],
              prevention: ['Chemoprophylaxe (Atovaquon-Proguanil, Doxycyclin, Mefloquin)', 'Moskitonetz (LLIN)', 'Impfstoff (RTS,S/AS01 und R21/Matrix-M für Kinder in Endemiegebieten)']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: Fieber bei Reiserückkehrern aus Endemiegebieten',
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
            },
            gallery: [
              {
                url: 'https://www.cdc.gov/dpdx/malaria/modules/malaria_LifeCycle.gif?_=05237',
                caption: 'Malaria (Plasmodium) Lebenszyklus',
                type: 'Lebenszyklus-Abbildung'
              }
            ]
          },
          {
            id: 'toxoplasmosis',
            name: 'Toxoplasmose',
            pathogen: { type: 'Protozoon', name: '<i>Toxoplasma gondii</i>', gram: '-', shape: 'intrazellulär' },
            epidemiology: {
              incidence: '30-50% der Weltbevölkerung ist seropositiv (latent)',
              risk_groups: ['Immungeschwächte (HIV/AIDS, Transplantierte)', 'Schwangere (Fötus!)', 'Katzenhalter'],
              seasonality: 'Keine',
              transmission: 'Fäkal-oral (Katzenkot), rohes Fleisch (Zyste), vertikal'
            },
            pathomechanism: {
              steps: [
                'Die Infektion kann auf drei Wegen erfolgen: 1. Aufnahme von Oozysten aus mit Katzenkot kontaminiertem Boden/Lebensmitteln. 2. Verzehr von Gewebezysten in rohem oder unzureichend gegartem Fleisch. 3. Vertikale Übertragung (von der Mutter auf den Fötus).',
                'Im Darm wandeln sich die aus den Zysten freigesetzten Parasiten in Tachyzoiten (schnell teilende Form) um, die die Darmwand durchdringen und sich über den Blutkreislauf im ganzen Körper ausbreiten können.',
                'Unter dem Einfluss eines intakten Immunsystems wandeln sich Tachyzoiten in Bradyzoiten (langsam teilende Form) um und bilden Gewebezysten, hauptsächlich im Gehirn, in den Muskeln und in den Augen. Dies führt zu einer latenten, lebenslangen Infektion.',
                'Bei Immunsuppression (z.B. AIDS, Transplantation) können diese latenten Zysten reaktiviert werden. Bradyzoiten wandeln sich zurück in Tachyzoiten, was zu einer schweren, oft tödlichen Erkrankung (z.B. Enzephalitis) führt.'
              ],
              virulence_factors: ['Intrazelluläres Überleben', 'Zystenbildung', 'Immunmodulation']
            },
            clinical: {
              incubation: '5-23 Tage',
              onset: 'Langsam/asymptomatisch',
              symptoms: [
                { name: 'Infektion bei Immunkompetenten', description: '80-90% der Fälle sind asymptomatisch. Wenn Symptome auftreten, sind sie mild und mononukleoseähnlich: schmerzlose zervikale Lymphadenopathie, Fieber und Müdigkeit.', severity: 'mild' },
                { name: 'Okuläre Toxoplasmose', description: 'Die häufigste Ursache für Chorioretinitis. Sie verursacht verschwommenes Sehen, Augenschmerzen und "Floaters". Sie kann Folge einer Primärinfektion oder Reaktivierung sein.', severity: 'moderate' },
                { name: 'Zerebrale Toxoplasmose (AIDS)', description: 'Die häufigste opportunistische ZNS-Infektion bei AIDS (CD4<100). Gekennzeichnet durch Kopfschmerzen, Verwirrtheit, Fieber und fokale neurologische Zeichen (Krämpfe, Hemiparese). Das MRT zeigt typischerweise multiple ringförmig kontrastmittelanreichernde Läsionen.', severity: 'severe' },
                { name: 'Angeborene (kongenitale) Toxoplasmose', description: 'Folge einer primären mütterlichen Infektion während der Schwangerschaft. Die klassische Sabin-Tetrade umfasst Hydrozephalus, intrakranielle Verkalkungen, Chorioretinitis und Krämpfe. Kann schwere und bleibende Schäden verursachen.', severity: 'severe' }
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
                  { drug: 'Pyrimethamin + Sulfadiazin', dose: 'p.o.', duration: '6 Wochen', note: 'Standardtherapie (+Folinsäure!)' },
                  { drug: 'Trimethoprim/Sulfamethoxazol', dose: 'p.o./i.v.', duration: '6 Wochen', note: 'Alternative' }
                ],
                icu: [
                  { drug: 'Steroid', dose: 'Dexamethason', duration: '', note: 'Bei Masseneffekt (Hirnödem)' }
                ]
              },
              targeted: 'Schwangerschaft: Spiramycin (1. Trimenon) oder Pyrimethamin/Sulfadiazin (später). HIV-Prophylaxe: TMP/SMX.',
              supportive: ['Folinsäure-Supplementierung (Leucovorin) zum Schutz des Knochenmarks', 'Antikonvulsiva'],
              prevention: ['Fleisch gründlich garen', 'Katzenklo meiden (Schwangere)', 'Händewaschen', 'Prophylaxe bei CD4<100 (TMP/SMX)']
            },
            guidelines: {
              diagnosis: [
                'Serologie (IgM/IgG) ist grundlegend; Aviditätstest in der Schwangerschaft zur Bestimmung des Infektionszeitpunkts',
                'PCR (Liquor, Fruchtwasser, Blut) zum Nachweis einer aktiven Infektion bei Immunsupprimierten oder dem Fötus',
                'Bildgebung (MRT) bei Verdacht auf zerebrale Toxoplasmose (ringförmige Anreicherung)'
              ],
              treatment_indications: [
                'Immunkompetente: erfordern in der Regel keine Behandlung, außer bei schweren Symptomen oder Chorioretinitis',
                'Immungeschwächte (AIDS, CD4<100): erfordern immer eine Behandlung (akut + Erhaltungstherapie)',
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
            pathogen: { type: 'Helminth', name: '<i>Ascaris lumbricoides</i>', gram: '-', shape: 'Spulwurm (Nematode)' },
            epidemiology: {
              incidence: 'Häufigste Wurminfektion weltweit (>800 Millionen)',
              risk_groups: ['Kinder', 'Menschen in schlechten hygienischen Bedingungen'],
              seasonality: 'Keine',
              transmission: 'Fäkal-oral (mit Eiern kontaminierter Boden/Gemüse)'
            },
            pathomechanism: {
              steps: [
                'Die Infektion erfolgt fäkal-oral durch mit Eiern kontaminierten Boden, Gemüse oder Wasser.',
                'Die aufgenommenen Eier schlüpfen im Dünndarm, und die Larven durchdringen die Darmwand und wandern über den Pfortaderkreislauf zur Leber und dann zur Lunge.',
                'In der Lunge verursachen die Larven eine Entzündung (Löffler-Syndrom), werden hochgehustet und dann verschluckt, wodurch sie in den Dünndarm zurückkehren.',
                'Im Dünndarm reifen sie zu erwachsenen Würmern (15-35 cm), wo sie Nährstoffe aufnehmen. Bei starkem Befall kann ein Wurmknäuel einen Darm- oder Gallengangsverschluss verursachen.'
              ],
              virulence_factors: ['Protease-Inhibitoren', 'Migrationsfähigkeit']
            },
            clinical: {
              incubation: '4-8 Wochen',
              onset: 'Langsam',
              symptoms: [
                { name: 'Lungenphase (Löffler-Syndrom)', description: 'Ein vorübergehendes Syndrom während der Larvenwanderung: trockener Husten, Atemnot, leichtes Fieber und ausgeprägte Eosinophilie im Blutbild.', severity: 'moderate' },
                { name: 'Intestinale Phase', description: 'Leichte Infektionen können asymptomatisch sein. In schwereren Fällen können Bauchschmerzen, Blähungen, Übelkeit und bei Kindern Mangelernährung und Wachstumsverzögerung auftreten.', severity: 'mild' },
                { name: 'Obstruktive Komplikationen', description: 'Bei massivem Befall kann ein Wurmknäuel einen mechanischen Darmverschluss (Ileus) verursachen. Würmer, die in die Gallengänge oder den Ductus pancreaticus wandern, können Gelbsucht, Cholangitis oder Pankreatitis verursachen.', severity: 'severe' }
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
              targeted: 'Benzimidazole (Mebendazol, Albendazol). In der Schwangerschaft: Pyrantel.',
              supportive: ['Chirurgische/endoskopische Entfernung bei Obstruktion'],
              prevention: ['Gemüse waschen', 'Händewaschen', 'Abwasserbehandlung']
            },
            prognosis: { mortality: 'Niedrig, bei kompliziertem Ileus höher', prognostic_scores: [], factors: 'Alter, Obstruktion' }
          },
          {
            id: 'taeniasis',
            name: 'Taeniasis (Bandwurmbefall)',
            pathogen: { type: 'Helminth', name: '<i>Taenia saginata</i> (Rind), <i>Taenia solium</i> (Schwein)', gram: '-', shape: 'Bandwurm (Zestode)' },
            epidemiology: {
              incidence: 'Weltweit verbreitet',
              risk_groups: ['Verzehr von rohem Fleisch'],
              transmission: 'Rohes/ungenügend gegartes Fleisch (Larve/Cysticercus). T. solium Eier von Mensch zu Mensch -> Zystizerkose!'
            },
            pathomechanism: {
              steps: [
                'Taeniasis (Darmbandwurm): Entsteht durch den Verzehr von rohem oder unzureichend gegartem Rind- (T. saginata) oder Schweinefleisch (T. solium), das Larven (Zystizerken) enthält. Im Darm entwickelt sich die Larve zu einem mehrere Meter langen, erwachsenen Bandwurm.',
                'Zystizerkose (Gewebeform): Wird AUSSCHLIESSLICH durch T. solium verursacht! Die Wurmeier werden fäkal-oral aufgenommen (z.B. kontaminierte Lebensmittel, Autoinfektion). Aus den Eiern schlüpfen im Darm Larven, die in den Blutkreislauf gelangen und in Gewebe (Gehirn, Muskel, Auge) wandern, wo sie sich einkapseln (Zystizerkus).'
              ],
              virulence_factors: ['Scolex (Haken/Saugnäpfe)']
            },
            clinical: {
              incubation: '8-14 Wochen',
              onset: 'Asymptomatisch/Mild',
              symptoms: [
                { name: 'Taeniasis (Darmbandwurm)', description: 'Oft asymptomatisch. Leichte Bauchbeschwerden, Blähungen oder Appetitveränderungen können auftreten. Die Diagnose wird oft durch die Beobachtung von im Stuhl ausgeschiedenen, beweglichen Bandwurmgliedern (Proglottiden) gestellt.', severity: 'mild' },
                { name: 'Neurozystizerkose (NCC)', description: 'Die schwerste Form, die nach der Aufnahme von T. solium-Eiern auftritt. Zysten im Zentralnervensystem verursachen je nach Lokalisation epileptische Anfälle (am häufigsten), Kopfschmerzen, erhöhten Hirndruck, Hydrozephalus oder fokale neurologische Symptome.', severity: 'severe' }
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
                  { drug: 'Praziquantel', dose: '5-10 mg/kg p.o.', duration: 'Einzeldosis', note: 'Für den Darmbefall' },
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
            pathogen: { type: 'Helminth', name: '<i>Echinococcus granulosus</i> (zystisch), <i>E. multilocularis</i> (alveolär)', gram: '-', shape: 'Bandwurm (Zestode)' },
            epidemiology: {
              incidence: 'Endemisch (Mittelmeerraum, Osteuropa, Asien)',
              risk_groups: ['Hundehalter, Hirten', 'Verzehr von Waldbeeren (Fuchs - E. multilocularis)'],
              transmission: 'Fäkal-oral: Aufnahme von Eiern aus Hunde-/Fuchskot'
            },
            pathomechanism: {
              steps: [
                'Die Infektion erfolgt durch die Aufnahme von Eiern aus mit dem Kot von Hunden (E. granulosus) oder Füchsen (E. multilocularis) kontaminiertem Boden oder Gemüse. Der Mensch ist ein Zwischenwirt für den Parasiten.',
                'Im Darm schlüpfen Onkosphären (Larven) aus den Eiern, durchdringen die Darmwand, gelangen in den Pfortaderkreislauf und siedeln sich am häufigsten in der Leber (70%), seltener in der Lunge (20%) oder anderen Organen an.',
                'E. granulosus: Die Larve wächst langsam (über Jahre) zu einer flüssigkeitsgefüllten, dickwandigen Hydatidenzyste heran, die Tausende neuer Larven (Protoscolices) enthalten kann. Die Raumforderung der Zyste verursacht Symptome.',
                'E. multilocularis: Die Larve wächst tumorartig und infiltrativ und zerstört das Lebergewebe. Sie hat keine klare Grenze, was die chirurgische Entfernung erschwert.',
                'Eine Zystenruptur kann aufgrund der Freisetzung ihrer antigenen Inhalte einen schweren anaphylaktischen Schock und eine Streuung der Infektion (Dissemination) verursachen.'
              ],
              virulence_factors: ['Laminierte Schicht (Immunschutz)', 'Protoscolices']
            },
            clinical: {
              incubation: 'Jahre (langsames Wachstum)',
              onset: 'Langsam',
              symptoms: [
                { name: 'Symptome', description: 'Die Krankheit ist jahrelang asymptomatisch. Die Symptome hängen von der Größe und Lage der Zyste ab. Leberzyste: Schmerzen im rechten Oberbauch, Völlegefühl, Hepatomegalie, Gelbsucht (Gallenkompression). Lungenzyste: Brustschmerzen, Husten, Hämoptyse.', severity: 'moderate' },
                { name: 'Zystenruptur', description: 'Plötzliche Bauch- oder Brustschmerzen, Fieber, Urtikaria, Eosinophilie und in schweren Fällen anaphylaktischer Schock. Der Zysteninhalt kann sich im Körper ausbreiten und zur Bildung neuer Zysten führen.', severity: 'severe' },
                { name: 'Alveoläre Echinokokkose (E. multilocularis)', description: 'Verhält sich wie Leberkrebs: Gelbsucht, Bauchschmerzen, Gewichtsverlust, Hepatomegalie. Schlechte Prognose.', severity: 'severe' }
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
                  { drug: 'Albendazol', dose: '2x400mg p.o.', duration: 'Monatelang', note: 'Perioperativ oder bei Inoperabilität' }
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
            pathogen: { type: 'Helminth', name: '<i>Enterobius vermicularis</i>', gram: '-', shape: 'Madenwurm (Nematode)' },
            epidemiology: {
              incidence: 'Häufigste Wurminfektion in gemäßigten Zonen (auch in Industrieländern)',
              risk_groups: ['Kleinkinder', 'Gemeinschaftseinrichtungen (Kita, Schule)', 'Familienmitglieder'],
              transmission: 'Fäkal-oral, Autoinfektion (Kratzen -> Mund), Inhalation (Staub)'
            },
            pathomechanism: {
              steps: [
                'Die Infektion erfolgt durch die Aufnahme der klebrigen Eier, die unter Fingernägeln, auf Bettwäsche und im Staub zu finden sind. Autoinfektion (Hand-zu-Mund nach Kratzen) ist häufig.',
                'Larven schlüpfen aus den Eiern im Dünndarm, wandern in den Zäkalbereich und reifen zu erwachsenen Würmern heran.',
                'Der befruchtete weibliche Wurm (ca. 1 cm) wandert nachts in die Perianalfalten, legt dort seine Eier ab und stirbt dann. Die Eiablage und die Bewegung des Wurms verursachen den charakteristischen, intensiven Juckreiz.'
              ],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '2-6 Wochen',
              onset: 'Allmählich',
              symptoms: [
                { name: 'Perianaler Juckreiz (Pruritus ani)', description: 'Das Leitsymptom, typischerweise nachts am intensivsten, was zu Schlafstörungen und Unruhe führt. Kratzen kann zu sekundären bakteriellen Hautinfektionen führen.', severity: 'moderate' },
                { name: 'Andere Symptome', description: 'Selten leichte Bauchschmerzen. Bei jungen Mädchen kann der Wurm in die Vagina wandern und eine Vulvovaginitis verursachen. Die meisten Infektionen sind mild oder asymptomatisch.', severity: 'mild' }
              ],
              physical_exam: ['Perianale Exkoriation (Kratzspuren)', 'Würmer können sichtbar sein (selten)'],
              complications: ['Bakterielle Superinfektion (Kratzen)', 'Salpingitis (selten)']
            },
            diagnostics: {
              microbiology: [
                { test: 'Klebestreifen-Test (Tesafilm-Abklatsch)', finding: 'Eier in der Morgenprobe', significance: 'Goldstandard (Stuhluntersuchung oft negativ!)' }
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
            pathogen: { type: 'Helminth', name: '<i>Trichinella spiralis</i>', gram: '-', shape: 'Fadenwurm (Nematode)' },
            epidemiology: {
              incidence: 'Sporadische Ausbrüche (Hausschlachtung)',
              risk_groups: ['Verzehr von rohem/geräuchertem Schweinefleisch, Wildschwein'],
              transmission: 'Verzehr von larvenhaltigem Fleisch (unzureichende Erhitzung)'
            },
            pathomechanism: {
              steps: [
                'Die Infektion erfolgt durch den Verzehr von rohem oder unzureichend gegartem Fleisch (insbesondere Schwein, Wildschwein), das Larven enthält.',
                'Enterale Phase: Im Darm reifen die Larven zu erwachsenen Würmern, die sich in die Darmwand bohren und neue Larven produzieren. Dies verursacht Durchfall und Übelkeit.',
                'Parenterale Phase: Die neugeborenen Larven gelangen in den Blut- und Lymphkreislauf, verbreiten sich im Körper und wandern gezielt in stark durchblutete, aktive quergestreifte Muskeln (Kaumuskeln, Zwerchfell, Zunge, Augenmuskeln).',
                'In den Muskelzellen kapseln sich die Larven ein und bilden einen "Ammenzell"-Komplex, der eine chronische Entzündung und die charakteristischen Muskelschmerzen verursacht.'
              ],
              virulence_factors: ['Ammenzellbildung im Muskel']
            },
            clinical: {
              incubation: 'Enteral: 1-2 Tage; Parenteral: 1-4 Wochen',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Enterale Phase (1. Woche)', description: 'Durchfall, Übelkeit, Erbrechen und Bauchschmerzen, die einige Tage nach der Infektion auftreten.', severity: 'moderate' },
                { name: 'Parenterale Phase (ab 2. Woche)', description: 'Die Larvenwanderung verursacht die klassische Symptomtrias: 1. Hohes Fieber. 2. Starke Muskelschmerzen (Myalgie), insbesondere in den Kau- und Augenmuskeln. 3. Charakteristisches beidseitiges periorbitales Ödem (Schwellung um die Augen). Im Blutbild zeigt sich eine extreme Eosinophilie.', severity: 'severe' },
                { name: 'Komplikationen', description: 'Larven können auch den Herzmuskel (Myokarditis) oder das Zentralnervensystem (Enzephalitis) befallen, was lebensbedrohlich sein kann.', severity: 'severe' }
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
            pathogen: { type: 'Helminth', name: '<i>Toxocara canis</i> (Hund), <i>Toxocara cati</i> (Katze)', gram: '-', shape: 'Spulwurmlarven (Nematoden)' },
            epidemiology: {
              incidence: 'Weltweit verbreitete Zoonose',
              risk_groups: ['Kleinkinder (Sandkasten, Geophagie)', 'Hundehalter'],
              seasonality: 'Keine',
              transmission: 'Fäkal-oral: Aufnahme von mit Eiern kontaminiertem Boden (kein direkter Tierkontakt!)'
            },
            pathomechanism: {
              steps: [
                'Die Infektion erfolgt durch die versehentliche Aufnahme von Eiern aus mit Hunde- (T. canis) oder Katzenkot (T. cati) kontaminiertem Boden (z.B. Sandkästen). Der Mensch ist ein zufälliger oder paratenischer Wirt für den Parasiten.',
                'Im Darm schlüpfen Larven aus den Eiern, durchdringen die Darmwand und wandern über den Blutkreislauf zu verschiedenen Organen (Leber, Lunge, Gehirn, Augen).',
                'Da der Mensch nicht der natürliche Wirt ist, können sich die Larven nicht zu erwachsenen Würmern entwickeln. Stattdessen wandern sie durch das Gewebe (Larva migrans), und der Körper bildet eine granulomatöse Entzündung um sie herum, die Gewebeschäden verursacht.'
              ],
              virulence_factors: ['Gewebewanderung', 'Exkretorisch-sekretorische Antigene (TES)']
            },
            clinical: {
              incubation: 'Wochen-Monate',
              onset: 'Langsam',
              symptoms: [
                { name: 'Viszerale Larva Migrans (VLM)', description: 'Tritt typischerweise bei Kleinkindern (1-5 Jahre) auf. Symptome sind anhaltendes Fieber, Hepatomegalie, Husten und Giemen. Laboruntersuchungen zeigen eine extrem hohe Eosinophilie und Leukozytose.', severity: 'moderate' },
                { name: 'Okuläre Larva Migrans (OLM)', description: 'Häufiger bei älteren Kindern und Erwachsenen. Eine ins Auge wandernde Larve kann einseitigen Sehverlust, Strabismus und Leukokorie (weiße Pupille) verursachen, was mit einem Retinoblastom verwechselt werden kann. Systemische Symptome und Eosinophilie fehlen in der Regel.', severity: 'severe' },
                { name: 'Verdeckte (Covert) Toxocariasis', description: 'Eine Form mit milden, unspezifischen Symptomen wie Bauchschmerzen, Kopfschmerzen und Husten, mit mäßiger Eosinophilie.', severity: 'mild' }
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
                  { drug: 'Albendazol', dose: '2x400mg p.o.', duration: '5 Tage (VLM), 2-4 Wochen (OLM)', note: 'Einnahme mit fettreicher Mahlzeit' },
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

(function ensureParasiticHelminthLifecycleGalleriesDe() {
  const category = window.diseases && window.diseases.parasitic;
  if (!category || !Array.isArray(category.diseases)) return;

  const lifecycleGalleryByDiseaseId = {
    ascariasis: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ascaris_lumbricoides_life_cycle.png',
        caption: 'Ascaris lumbricoides Lebenszyklus (CDC/DPDx)',
        type: 'Lebenszyklus-Abbildung'
      }
    ],
    taeniasis: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taenia_solium_Life_cycle_%2801%29.jpg',
        caption: 'Taenia solium Lebenszyklus (CDC/DPDx)',
        type: 'Lebenszyklus-Abbildung'
      }
    ],
    echinococcosis: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Echinococcus_gran_LifeCycle_lg.jpg',
        caption: 'Echinococcus granulosus Lebenszyklus (CDC/DPDx)',
        type: 'Lebenszyklus-Abbildung'
      }
    ],
    enterobiasis: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Enterobius_vermicularis_LifeCycle.gif',
        caption: 'Enterobius vermicularis Lebenszyklus (CDC/DPDx)',
        type: 'Lebenszyklus-Abbildung'
      }
    ],
    trichinellosis: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Trichinella_LifeCycle.gif',
        caption: 'Trichinella spp. Lebenszyklus (CDC/DPDx)',
        type: 'Lebenszyklus-Abbildung'
      }
    ],
    toxocariasis: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Toxocara_canis_LifeCycle.gif',
        caption: 'Toxocara canis Lebenszyklus (CDC/DPDx)',
        type: 'Lebenszyklus-Abbildung'
      }
    ]
  };

  category.diseases.forEach((disease) => {
    if (!disease) return;
    if (Array.isArray(disease.gallery) && disease.gallery.length > 0) return;

    const gallery = lifecycleGalleryByDiseaseId[disease.id];
    if (gallery) {
      disease.gallery = gallery.map((image) => ({ ...image }));
    }
  });
})();
