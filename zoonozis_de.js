Object.assign(window.diseases, {
      zoonotic: {
        name: 'Zoonosen',
        icon: '🐾',
        color: '#059669',
        diseases: [
          {
            id: 'leptospirosis',
            name: 'Leptospirose',
            pathogen: { type: 'Spirochäte', name: '<i>Leptospira interrogans</i>', gram: 'Gram-negativ', shape: 'spiralförmig, mit Haken' },
            epidemiology: {
              incidence: 'Tropisch/Subtropisch: 10-100/100.000; Gemäßigte Zone: 0.1-1/100.000',
              risk_groups: ['Landarbeiter', 'Tierärzte', 'Schlachthofarbeiter', 'Kanalarbeiter', 'Wassersportler', 'Soldaten (Dschungel)'],
              seasonality: 'Sommer-Herbst, Regenzeit',
              transmission: 'Exposition gegenüber kontaminiertem Wasser/Boden → Haut/Schleimhaut. Übertragung durch Urin von Nagetieren/Tieren'
            },
            pathomechanism: {
              steps: [
                'Leptospiren überleben in Wasser oder Boden, der mit dem Urin infizierter Tiere (v.a. Nagetiere) kontaminiert ist. Der Erreger dringt durch verletzte Haut oder Schleimhäute (Augen, Nase, Mund) in den Körper ein.',
                'Nach dem Eindringen gelangen die Bakterien schnell in den Blutkreislauf (hämatogene Streuung) und erreichen fast alle Organe, insbesondere Leber, Nieren, Lunge und das zentrale Nervensystem.',
                'Der Erreger schädigt die Endothelzellen der Blutgefäße, was zu erhöhter vaskulärer Permeabilität, Flüssigkeitsverlust und Blutungen führt.',
                'Die schwere Verlaufsform, die Weil-Krankheit, ist durch die Trias aus Leber- und Nierenversagen, Gelbsucht (Ikterus) und schweren hämorrhagischen Komplikationen (z.B. Lungenblutung) gekennzeichnet.',
                'Ein Teil der klinischen Symptome wird durch die heftige, immunvermittelte Entzündungsreaktion des Wirts verursacht, nicht durch die direkte toxische Wirkung des Bakteriums.'
              ],
              virulence_factors: ['Äußere Membranproteine (LipL32)', 'Flagellum (Motilität)', 'Hämolysine', 'Lipopolysaccharid', 'Adhäsine']
            },
            clinical: {
              incubation: '2-30 Tage (durchschnittlich 7-12 Tage)',
              onset: 'Biphasischer Verlauf',
              symptoms: [
                { name: 'Akute/Septische Phase (erste Woche)', description: 'Plötzlich einsetzendes hohes Fieber mit Schüttelfrost, intensive Kopfschmerzen und charakteristische, quälende Muskelschmerzen, besonders in den Waden und im Lendenbereich. Häufig ist eine konjunktivale Suffusion (Rötung der Augen ohne eitrigen Ausfluss).', severity: 'severe' },
                { name: 'Immunphase (zweite Woche)', description: 'Nach der ersten Phase kann eine kurze Besserung eintreten, gefolgt von einer Rückkehr der Symptome aufgrund der Immunantwort. Hier können aseptische Meningitis, Uveitis und Organmanifestationen auftreten.', severity: 'moderate' },
                { name: 'Weil-Krankheit (schwere Form)', description: 'Entwickelt sich bei 5-10% der Patienten. Merkmale sind Gelbsucht (Ikterus), Nierenversagen (akute tubuläre Nekrose) und hämorrhagische Komplikationen wie Lungenblutungen, die mit hoher Mortalität verbunden sind.', severity: 'severe' }
              ],
              physical_exam: [
                'Hohes Fieber, Tachykardie',
                'Konjunktivale Suffusion (Bindehautinjektion)',
                'Lymphadenopathie',
                'Hepatomegalie (Weil)',
                'Wadendruckschmerz',
                'Ikterus (schwer)',
                'Meningeale Zeichen (25%)'
              ],
              complications: ['Weil-Krankheit (Ikterus, Nierenversagen)', 'ARDS', 'Myokarditis', 'Rhabdomyolyse', 'Uveitis (spät)', 'Aseptische Meningitis', 'Tod (5-15% in schweren Fällen)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose, Thrombozytopenie', interpretation: 'Unspezifisch' },
                { test: 'Niere', finding: 'Kreatinin↑, Proteinurie, Hämaturie', interpretation: 'Weil-Krankheit' },
                { test: 'Leber', finding: 'Bilirubin↑↑ (direkt), leichte Transaminasen↑', interpretation: 'Cholestatisches Muster' },
                { test: 'CK', finding: 'Erhöht', interpretation: 'Myositis' },
                { test: 'CRP/BSG', finding: 'Deutlich erhöht', interpretation: 'Entzündung' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Diffuses Infiltrat, alveoläre Blutung', significance: 'Lungenblutung' },
                { modality: 'Abdomen-US', finding: 'Hepatomegalie, Aszites', significance: 'Schweregradbeurteilung' }
              ],
              microbiology: [
                { test: 'Mikroagglutinationstest (MAT)', finding: '≥1:400 Titer oder 4x↑', significance: 'Goldstandard, aber spät (7-10 Tage)' },
                { test: 'ELISA IgM', finding: 'Positiv', significance: 'Schneller, akute Phase' },
                { test: 'Blut-/Urinkultur', finding: 'Leptospiren-Isolierung (EMJH-Medium)', significance: 'Früh (<7 Tage Blut, >7 Tage Urin), langsam (Wochen)' },
                { test: 'PCR', finding: 'Leptospiren-DNA', significance: 'Schnell, sensitiv in der Frühphase' }
              ]
            },
            differential: [
              { disease: 'Dengue-Fieber', distinguishing: 'Thrombozytopenie ausgeprägter, Tourniquet-Test+, keine Wadenschmerzen' },
              { disease: 'Malaria', finding: 'Plasmodium-Ausstrich, peripheres Blut, Periodizität des Schüttelfrosts' },
              { disease: 'Hantavirus', distinguishing: 'Nagetier-Exposition, Proteinurie schwerer, Thrombozytopenie' },
              { disease: 'Rickettsiose', distinguishing: 'Ausschlag charakteristisch, Eschar, Zeckenexposition' },
              { disease: 'Virushepatitis', distinguishing: 'Transaminasen viel höher, Serologie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '100 mg zweimal täglich p.o.', duration: '7 Tage', note: 'Erste Wahl bei leichten Fällen' },
                  { drug: 'Amoxicillin', dose: '500 mg dreimal täglich p.o.', duration: '7 Tage', note: 'Alternative (Schwangere, Kinder)' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '1.5 Mio. IE alle 4 Stunden i.v.', duration: '7 Tage', note: 'Schwere/Weil-Krankheit' },
                  { drug: 'Ceftriaxon', dose: '1-2 g einmal täglich i.v.', duration: '7 Tage', note: 'Alternative' }
                ],
                icu: [
                  { drug: 'Penicillin G', dose: '1.5 Mio. IE alle 4 Stunden i.v.', duration: '7 Tage', note: 'Schwere Weil-Krankheit' },
                  { drug: 'Dialyse', dose: 'Bei Nierenversagen', duration: '', note: 'Supportiv' },
                  { drug: 'Beatmung', dose: 'Lungenblutung', duration: '', note: 'ARDS' }
                ]
              },
              targeted: 'Leicht: Doxycyclin; Schwer: Penicillin G oder Ceftriaxon',
              supportive: ['Flüssigkeitsersatz', 'Dialyse (Nierenversagen)', 'Beatmung (ARDS)', 'Transfusion (Blutung)'],
              prevention: ['Doxycyclin-Chemoprophylaxe (200mg/Woche Extremsport)', 'Schutzkleidung bei Risikoadrbeit', 'Nagetierbekämpfung', 'Tierimpfung (Hund)', 'Reinigung von Wasserquellen']
            },
            prognosis: {
              mortality: 'Leicht: <1%; Weil-Krankheit: 5-15%; Lungenblutung: 50%+',
              prognostic_scores: ['APACHE II', 'SOFA'],
              factors: 'Ikterus, Nierenversagen, Lungenblutung, Thrombozytopenie, Alter'
            },
            gallery: [
              {
                url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Leptospirosis_conjunctival_suffusion.jpg',
                caption: 'Charakteristische konjunktivale Suffusion bei Leptospirose. Das Auge ist rot, aber ohne eitrigen Ausfluss.',
                type: 'Klinisches Bild'
              },
              {
                url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Leptospira_interrogans.jpg',
                caption: 'Dunkelfeldmikroskopie von Leptospira interrogans, die die charakteristische Spiralform mit hakenförmigen Enden zeigt.',
                type: 'Mikroskopie'
              }
            ]
          },
          {
            id: 'hantavirus',
            name: 'Hantavirus-Infektion',
            pathogen: { type: 'Virus', name: '<i>Hantavirus</i> (mehrere Serotypen)', gram: 'Negativ-Strang-RNA-Virus, Bunyaviridae', shape: 'sphärisch' },
            epidemiology: {
              incidence: 'Europa: HFRS 10.000+ Fälle/Jahr; USA: HPS <50 Fälle/Jahr',
              risk_groups: ['Landarbeiter', 'Förster', 'Soldaten', 'Camper/Wanderer', 'Berufe mit Nagetierkontakt', 'Reinigung schlecht belüfteter Gebäude'],
              seasonality: 'Frühling-Herbst (Nagetierpopulationsspitze)',
              transmission: 'Aerosol (Nagetierkot/-urin/-speichel). NICHT von Mensch zu Mensch!'
            },
            pathomechanism: {
              steps: [
                'Die Infektion erfolgt durch Inhalation von Aerosol, das mit getrocknetem Urin, Kot oder Speichel von Nagetieren (z.B. Rötelmaus) kontaminiert ist. Eine Übertragung von Mensch zu Mensch findet nicht statt.',
                'Das Virus gelangt über die Lunge in den Blutkreislauf und infiziert gezielt die Endothelzellen, die die Innenfläche der Blutgefäße auskleiden, ohne direkten Zelltod zu verursachen.',
                'Der Hauptschaden wird durch die übermäßige Immunantwort des Körpers verursacht. Aktivierte T-Zellen und Zytokine (TNF-alpha) lockern die Verbindungen zwischen den Endothelzellen, was zu einem Kapillarleck (Capillary Leak) führt.',
                'HFRS (Hämorrhagisches Fieber mit renalem Syndrom): Das Kapillarleck tritt hauptsächlich in der Niere auf, was zu akutem Nierenversagen, Proteinurie und Blutungen führt.',
                'HPS (Hantavirus-Pulmonalsyndrom): Das Leck dominiert in der Lunge, was zu einem schnell fortschreitenden, nicht-kardiogenen Lungenödem und kardiogenem Schock führt. Thrombozytopenie und Hämokonzentration sind entscheidende Laborzeichen.'
              ],
              virulence_factors: ['Nukleokapsidprotein (Immunantwort)', 'Glykoprotein Gn/Gc (Zelleintritt)', 'Endotheltropismus', 'Immunmodulation']
            },
            clinical: {
              incubation: '1-8 Wochen (durchschnittlich 2-4 Wochen)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Prodromalphase (3-5 Tage)', description: 'Plötzlich einsetzendes, hohes Fieber, Schüttelfrost, starke Kopfschmerzen und Muskelschmerzen (v.a. Rücken und Oberschenkel). Häufig sind Gesichtsrötung (Facial Flush) und konjunktivale Injektion.', severity: 'severe' },
                { name: 'HFRS (Nierenbeteiligung)', description: 'Auf die Fieberphase folgen Hypotonie und dann Oligurie/Anurie. Charakteristisch sind starke Flankenschmerzen, massive Proteinurie und Thrombozytopenie. In der Erholungsphase tritt Polyurie auf.', severity: 'severe' },
                { name: 'HPS (Lungenbeteiligung)', description: 'Nach der Prodromalphase entwickeln sich schnell fortschreitender Husten und Atemnot, die innerhalb von Stunden in ein schweres, nicht-kardiogenes Lungenödem und einen kardiogenen Schock münden. Hohe Mortalität.', severity: 'severe' }
              ],
              physical_exam: [
                'Hohes Fieber',
                'Gesichtsrötung (Facial flush)',
                'Konjunktivale Injektion',
                'Petechien (Gaumen, Achselhöhle)',
                'Proteinurie, Hämaturie',
                'Hypotonie (HPS)',
                'Lungenödemzeichen (HPS)'
              ],
              complications: ['Akutes Nierenversagen (HFRS)', 'Kardiogenes Lungenödem (HPS)', 'Schock', 'Intrakranielle Blutung', 'Hypophysenblutung', 'Tod (HFRS 1-15%, HPS 30-50%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Thrombozytopenie (<100 G/L), Leukozytose, atypische Lymphozyten', interpretation: 'Charakteristische Trias!' },
                { test: 'Niere', finding: 'Kreatinin↑↑, BUN↑, Proteinurie+++, Hämaturie', interpretation: 'HFRS' },
                { test: 'Hämokonzentration', finding: 'Hämatokrit↑', interpretation: 'Capillary Leak (HPS)' },
                { test: 'Gerinnung', finding: 'DIC-Zeichen möglich', interpretation: 'Schwerer Fall' },
                { test: 'Leberenzym', finding: 'Leichte AST/ALT↑', interpretation: 'Häufig' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Bilaterale interstitielle Infiltrate, Pleuraerguss', significance: 'HPS' },
                { modality: 'Abdomen-US', finding: 'Nierenvergrößerung, Echogenität↑, Aszites', significance: 'HFRS' }
              ],
              microbiology: [
                { test: 'ELISA IgM/IgG', finding: 'Hantavirus-spezifische Antikörper', significance: 'Goldstandard, früh positiv (3-7 Tage)' },
                { test: 'RT-PCR', finding: 'Virus-RNA (Blut, Urin)', significance: 'Frühphase, Serotypisierung' },
                { test: 'Immunhistochemie', finding: 'Virusantigen im Gewebe', significance: 'Forschung, Autopsie' }
              ]
            },
            differential: [
              { disease: 'Leptospirose', distinguishing: 'Wadenschmerzen, konjunktivale Suffusion, Wasserexposition' },
              { disease: 'Rickettsiose', distinguishing: 'Ausschlag, Eschar, Zeckenexposition' },
              { disease: 'Akute Glomerulonephritis', distinguishing: 'Ödeme, Hypertonie, Streptokokken-Anamnese' },
              { disease: 'Septischer Schock', distinguishing: 'Hohes PCT, positive Kultur' },
              { disease: 'Schwere Influenza-Pneumonie', distinguishing: 'Saisonalität, keine Thrombozytopenie/Proteinurie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'KEIN spezifisches Virostatikum', dose: 'Supportive Therapie', duration: '', note: 'Häusliche Beobachtung in leichten Fällen' }
                ],
                inpatient: [
                  { drug: 'Ribavirin', dose: '33 mg/kg i.v. Ladedosis, dann 16 mg/kg alle 6 Stunden', duration: 'für 4 Tage, dann 8 mg/kg alle 8 Stunden für 3 Tage', note: 'Wirksam bei HFRS, in der Frühphase (<5 Tage)' },
                  { drug: 'Flüssigkeitsersatz', dose: 'Vorsichtig! Wegen Kapillarleck', duration: '', note: 'Überwachung' }
                ],
                icu: [
                  { drug: 'Dialyse', dose: 'Nierenversagen', duration: '', note: 'HFRS' },
                  { drug: 'Invasive Beatmung + ECMO', dose: 'HPS', duration: '', note: 'Kardiogener Schock' },
                  { drug: 'Inotrope Unterstützung', dose: 'Dobutamin, Noradrenalin', duration: '', note: 'HPS Schockphase' }
                ]
              },
              targeted: 'Ribavirin bei HFRS in der Frühphase; Wirksamkeit bei HPS nicht belegt',
              supportive: ['Vorsichtige Flüssigkeitstherapie (Kapillarleck!)', 'Dialyse (Nierenversagen)', 'Beatmung/ECMO (HPS)', 'Inotrope Unterstützung', 'Transfusion (Thrombozytopenie)'],
              prevention: ['Nagetierbekämpfung', 'Schutzmaske an staubigen Orten', 'Lüften von Gebäuden vor der Reinigung', 'Handschuhe tragen', 'KEIN Impfstoff (experimentell)']
            },
            prognosis: {
              mortality: 'HFRS: 1-15% (serotypabhängig); HPS: 30-50%',
              prognostic_scores: ['APACHE II', 'Grad der Thrombozytopenie'],
              factors: 'Serotyp, frühe Diagnose, HPS vs HFRS, Vorhandensein von Schock'
            }
          },
          {
            id: 'lyme',
            name: 'Lyme-Borreliose',
            pathogen: { type: 'Spirochäte', name: '<i>Borrelia burgdorferi sensu lato</i>', gram: 'Gram-negativ', shape: 'spiralig' },
            epidemiology: {
              incidence: 'USA: 476.000 Fälle/Jahr; Europa: 232.000 Fälle/Jahr. In Ungarn häufig und endemisch.',
              risk_groups: ['Besucher von Waldgebieten', 'Wanderer, Camper', 'Förster, Jäger', 'Gärtner', 'Kinder'],
              seasonality: 'Frühling bis Herbst (Zeckenaktivität)',
              transmission: 'Stich der Ixodes ricinus Zecke (meist >24 Stunden Saugzeit erforderlich)'
            },
            pathomechanism: {
              steps: [
                'Während des Saugaktes einer infizierten Ixodes-Zecke gelangen Borrelien aus den Speicheldrüsen der Zecke in die Haut des Wirts (meist >24 Stunden Saugzeit erforderlich).',
                'Die Bakterien vermehren sich lokal in der Haut und breiten sich zentrifugal aus, wodurch das charakteristische Erythema migrans (EM) entsteht.',
                'Die Erreger gelangen in den Blutkreislauf (hämatogen) und das Lymphsystem und disseminieren so zu entfernten Organen (Herz, Nervensystem, Gelenke, Haut).',
                'Die Bakterien können dem Immunsystem ausweichen (Antigenvariation, Komplementhemmung), was eine Persistenz und die Entwicklung einer chronischen Entzündung ermöglicht.',
                'Die Gewebeschädigung wird primär nicht durch Toxine, sondern durch die Entzündungsreaktion des Wirts (Zytokine, Immunkomplexe) verursacht.'
              ],
              virulence_factors: ['Osp (Outer surface proteins)', 'VlsE (Antigenvariation)', 'Motilität']
            },
            clinical: {
              incubation: 'EM: 3-30 Tage (Durchschnitt 7-14 Tage)',
              onset: 'Stadienhaft',
              symptoms: [
                { name: 'Frühstadium lokalisiert (Erythema migrans)', description: 'An der Stichstelle entstehende, schmerzlose, langsam wachsende (>5 cm), oft zielscheibenförmige (kann aber auch homogen sein) Hautrötung. Dies ist das häufigste Symptom und ermöglicht eine klinische Diagnose. Allgemeine grippeähnliche Symptome (Fieber, Kopfschmerzen, Muskelschmerzen) können begleitend auftreten.', severity: 'moderate' },
                { name: 'Frühstadium disseminiert (Organe)', description: 'Tritt Wochen bis Monate nach der Streuung der Bakterien auf. Nervensystem: Bannwarth-Syndrom (nächtliche radikuläre Schmerzen, Fazialisparese, Meningitis). Herz: Lyme-Karditis (AV-Block, Rhythmusstörungen). Haut: Lymphozytom (bläulich-roter Knoten).', severity: 'severe' },
                { name: 'Spätstadium (Chronisch)', description: 'Monate bis Jahre später. Lyme-Arthritis: intermittierende Schwellung und Schmerzen großer Gelenke (v.a. Knie). Haut: Acrodermatitis chronica atrophicans (ACA) - livide Verfärbung und Atrophie der Streckseiten der Extremitäten.', severity: 'moderate' }
              ],
              physical_exam: [
                'Erythema migrans: >5 cm Durchmesser, ausbreitendes Erythem',
                'Fazialisparese (kann beidseitig sein)',
                'Meningeale Reizzeichen (mild)',
                'Gelenkschwellung (Knie)',
                'ACA: zigarettenpapierartige Haut'
              ],
              complications: ['Chronische Gelenkentzündung', 'Post-Lyme-Syndrom (subjektive Beschwerden)', 'Chronische Neuroborreliose']
            },
            diagnostics: {
              laboratory: [
                { test: 'Zweistufige Serologie (ELISA + Western Blot)', finding: 'IgM (2-4 Wochen), IgG (4-6 Wochen)', interpretation: 'Zweistufig! Im EM-Stadium NICHT empfohlen (klinische Dg, kann noch negativ sein). Bei disseminierten/späten Stadien indiziert.' },
                { test: 'Liquor', finding: 'Lymphozytäre Pleozytose, intrathekale Antikörpersynthese (AI > 1.5)', interpretation: 'Nachweis der Neuroborreliose' }
              ],
              imaging: [
                { modality: 'EKG', finding: 'AV-Block', significance: 'Bei Verdacht auf Karditis' }
              ],
              microbiology: [
                { test: 'Zeckenuntersuchung', finding: 'NICHT empfohlen', significance: 'Keine klinische Relevanz für die Behandlung' },
                { test: 'PCR', finding: 'Borrelien-DNA', significance: 'Aus Gelenkflüssigkeit oder Hautbiopsie (ACA) kann nützlich sein. Geringe Sensitivität aus Blut/Liquor.' }
              ]
            },
            differential: [
              { disease: 'Erysipel/Zellulitis', distinguishing: 'Fieber, Schmerz, schnelle Ausbreitung, Leukozytose' },
              { disease: 'Tinea corporis', distinguishing: 'Schuppender Rand, Juckreiz, KOH-positiv' },
              { disease: 'Andere Arthritis', distinguishing: 'Septisch (Fieber, Eiter), RA (symmetrisch, Serologie)' },
              { disease: 'Multiple Sklerose', distinguishing: 'MRT, oligoklonale Banden im Liquor' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100 mg p.o.', duration: '14-21 Tage (EM: 10-14 Tage)', note: 'Erste Wahl (EM, Neuroborreliose, Karditis, Arthritis, ACA). Auch für Kinder geeignet.' },
                  { drug: 'Amoxicillin', dose: '3x500-1000 mg p.o.', duration: '14-21 Tage', note: 'Alternative (EM, Arthritis, ACA, Schwangerschaft)' },
                  { drug: 'Cefuroxim-Axetil', dose: '2x500 mg p.o.', duration: '14-21 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1x2 g i.v.', duration: '14-28 Tage', note: 'Schwere Neuroborreliose (z.B. Enzephalitis), Karditis (hochgradiger Block), refraktäre Arthritis' }
                ]
              },
              targeted: 'Frühe Lokalinfektion (EM): Doxycyclin 10 Tage. Neuroborreliose (Bannwarth): Doxycyclin p.o. (genauso wirksam wie i.v. Ceftriaxon!) 14 Tage. Arthritis: Doxycyclin 28 Tage. Post-Lyme-Syndrom: Langzeitantibiotika NICHT empfohlen (unwirksam). Symptomatische Behandlung.',
              supportive: ['Symptomatische Behandlung', 'Physiotherapie'],
              prevention: ['Frühzeitige Zeckenentfernung', 'Schutzkleidung', 'Antibiotikaprophylaxe nach Stich NICHT empfohlen (ungarische Leitlinie)']
            },
            prognosis: {
              mortality: 'Sehr niedrig',
              prognostic_scores: ['Keine'],
              factors: 'Früherkennung und Behandlung'
            }
          },
          {
            id: 'tularemia',
            name: 'Tularämie (Hasenpest)',
            pathogen: { type: 'Bakterium', name: '<i>Francisella tularensis</i>', gram: 'Gram-negativ', shape: 'Kokkobazillus, intrazellulär' },
            epidemiology: {
              incidence: 'USA: 100-200 Fälle/Jahr; Europa: sporadisch',
              risk_groups: ['Jäger', 'Gerber', 'Landarbeiter', 'Laboranten', 'Förster', 'Tierärzte'],
              seasonality: 'Sommer (Zecke), Winter (Jagd)',
              transmission: 'Zecken-/Fliegenstich, Kontakt mit infizierten Tieren (Kaninchen, Nagetiere), Inhalation, Wasser/Nahrung'
            },
            pathomechanism: {
              steps: [
                'Francisella tularensis ist ein extrem ansteckendes Bakterium (<10 Organismen genügen), das durch Zeckenstiche, direkten Kontakt mit infizierten Tieren (z.B. Kaninchen) oder Inhalation von kontaminiertem Staub in den Körper gelangt.',
                'An der Eintrittsstelle wird das Bakterium von Makrophagen phagozytiert, kann aber aus dem Phagosom ins Zytoplasma entkommen, wo es sich vermehrt.',
                'Die infizierten Makrophagen wandern zu den regionalen Lymphknoten, wo sich das Bakterium weiter vermehrt, was zu schmerzhaften, nekrotisierenden Granulomen und Lymphadenitis führt.',
                'Abhängig von der Eintrittspforte entwickeln sich verschiedene klinische Formen (z.B. ulzeroglandulär, pulmonal).',
                'Die Bakterien können vom Lymphsystem in den Blutkreislauf gelangen und eine systemische Infektion (typhöse Form) sowie eine Beteiligung entfernter Organe (Lunge, Leber, Milz) verursachen.'
              ],
              virulence_factors: ['Kapsel', 'Phagosomen-Escape (iglA-D Locus)', 'LPS (toxisch)', 'Siderophore', 'Intrazelluläres Überleben']
            },
            clinical: {
              incubation: '3-5 Tage (1-14 Tage)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Ulzeroglanduläre Form (75-85%)', description: 'Die häufigste Form. An der Eintrittspforte (z.B. Stichstelle) bildet sich ein schmerzhaftes Geschwür (Ulkus) mit schwarzem Schorf, begleitet von einer schmerzhaften Schwellung der regionalen Lymphknoten (Bubo).', severity: 'moderate' },
                { name: 'Glanduläre Form (5-10%)', description: 'Ähnlich der ulzeroglandulären Form, aber das primäre Hautgeschwür fehlt, nur die schmerzhafte Lymphknotenschwellung ist vorhanden.', severity: 'moderate' },
                { name: 'Typhöse Form (5-15%)', description: 'Schwere, systemische Erkrankung mit hohem Fieber, Schüttelfrost, Kopfschmerzen, aber ohne primäre Lokalisation (Geschwür, Lymphknoten). Oft mit Lungenentzündung verbunden.', severity: 'severe' },
                { name: 'Andere Formen', description: 'Okuloglandulär (Konjunktivitis und Lymphknotenschwellung bei Eintritt ins Auge), Oropharyngeal (Tonsillitis bei Verschlucken), Pulmonal (atypische Pneumonie bei Inhalation).', severity: 'moderate' }
              ],
              physical_exam: [
                'Ulzeroglandulär (75%): Hautgeschwür (schwarzer Eschar) + druckempfindlicher Lymphknoten',
                'Glandulär: Lymphknoten KEIN Geschwür',
                'Okuloglandulär: Konjunktivitis, knötchenförmige Läsionen, Lymphknoten',
                'Oropharyngeal: Tonsillitis, zervikaler Lymphknoten',
                'Typhös: Fieber, Hepatosplenomegalie, KEINE Lokalisation',
                'Pulmonal: Pneumoniezeichen'
              ],
              complications: ['Abszessbildung (Lymphknoten)', 'Sepsis', 'ARDS', 'Meningitis', 'Perikarditis', 'Osteomyelitis', 'Tod (unbehandelt 5-15%, behandelt <2%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Normal oder Leukopenie', interpretation: 'Unspezifisch' },
                { test: 'CRP/BSG', finding: 'Erhöht', interpretation: 'Entzündung' },
                { test: 'Leberenzyme', finding: 'AST/ALT leichte Erhöhung', interpretation: 'Typhös' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Infiltrat, hiläre Lymphadenopathie, Pleuraerguss', significance: 'Pulmonal/typhös' },
                { modality: 'CT Hals/Thorax', finding: 'Nekrotisierende Lymphadenitis', significance: 'Abszessnachweis' }
              ],
              microbiology: [
                { test: 'Serologie (Agglutination)', finding: 'Titer ≥1:160 oder 4x↑', significance: 'Retrospektive Diagnose (2-3 Wochen)' },
                { test: 'PCR', finding: 'F. tularensis DNA (Geschwür, Lymphknoten)', significance: 'Schnell, sensitiv' },
                { test: 'Kultur', finding: 'Spezialmedium (BSL-3!), GEFÄHRLICH!', significance: 'Vermeiden (Laborinfektionsrisiko)' },
                { test: 'Immunhistochemie', finding: 'Antigennachweis im Gewebe', significance: 'Bei Biopsie' }
              ]
            },
            differential: [
              { disease: 'Lyme-Borreliose', distinguishing: 'EM-Ausschlag, Serologie, weniger toxisch' },
              { disease: 'Katzenkratzkrankheit', distinguishing: 'Katzenkontakt, Bartonella-Serologie' },
              { disease: 'Pyogene Lymphadenitis (Staph/Strep)', distinguishing: 'Schneller, spricht auf Antibiotika an, Kultur' },
              { disease: 'Mykobakteriose (atypisch)', distinguishing: 'Langsamer, AFB, Kultur' },
              { disease: 'Pest', distinguishing: 'Bubo noch schmerzhafter, Geografie, Yersinia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '100 mg zweimal täglich p.o.', duration: '14-21 Tage', note: 'Erste Wahl bei leichter Form' },
                  { drug: 'Ciprofloxacin', dose: '500 mg zweimal täglich p.o.', duration: '14-21 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Streptomycin', dose: '7.5-10 mg/kg zweimal täglich i.m.', duration: '10 Tage', note: 'Goldstandard in schweren Fällen' },
                  { drug: 'Gentamicin', dose: '5 mg/kg einmal täglich i.v.', duration: '10 Tage', note: 'Streptomycin nicht verfügbar' },
                  { drug: 'Doxycyclin', dose: '100 mg zweimal täglich i.v.', duration: '14-21 Tage', note: 'In Kombination' }
                ],
                icu: [
                  { drug: 'Gentamicin + Doxycyclin', dose: 'Kombination', duration: '14-21 Tage', note: 'Typhös/pulmonal schwer' },
                  { drug: 'Ciprofloxacin', dose: '400 mg zweimal täglich i.v.', duration: '14-21 Tage', note: 'Bessere Penetration bei Meningitis' }
                ]
              },
              targeted: 'Aminoglykosid (Streptomycin, Gentamicin) erste Wahl; Doxycyclin/Ciprofloxacin Alternative',
              supportive: ['Chirurgische Drainage (fluktuierender Lymphknoten)', 'Flüssigkeitsersatz', 'Isolierung NICHT erforderlich (keine Mensch-zu-Mensch-Übertragung)', 'Antipyretika'],
              prevention: ['Schutzhandschuhe bei Tierbehandlung', 'Repellents (Zecken)', 'Fleisch richtig kochen', 'Impfstoff (nur Militär-/Laborpersonal, USA)', 'Antibiotikaprophylaxe nach Hochrisikoexposition (Doxycyclin 14 Tage)']
            },
            prognosis: {
              mortality: 'Unbehandelt: 5-15%; Behandelt: <2%',
              prognostic_scores: ['Keine spezifischen'],
              factors: 'Form (typhös/pulmonal schlechter), frühe Behandlung, Alter'
            }
          },
          {
            id: 'cat_scratch',
            name: 'Katzenkratzkrankheit (Cat-Scratch Disease)',
            pathogen: { type: 'Bakterium', name: '<i>Bartonella henselae</i>', gram: 'Gram-negativ', shape: 'Stäbchen, intrazellulär' },
            epidemiology: {
              incidence: 'USA: ~12.000 Fälle/Jahr (Schätzung), unterdiagnostiziert',
              risk_groups: ['Kinder <10 Jahre', 'Katzenkontakt', 'Flohexposition', 'Immungeschwächte (HIV)', 'Tierärzte, Tierheimmitarbeiter'],
              seasonality: 'Herbst-Winter (Kätzchen)',
              transmission: 'Katzenkratzer/-biss (95%), selten Hund, Floh'
            },
            pathomechanism: {
              steps: [
                'Das Bakterium Bartonella henselae wird am häufigsten durch Kratzer oder Bisse von infizierten (aber symptomlosen) Katzen, insbesondere Jungtieren, auf die menschliche Haut übertragen. Die Katzen infizieren sich gegenseitig durch Flöhe.',
                'An der Eintrittsstelle entwickelt sich innerhalb von 3-10 Tagen eine Primärläsion, eine rote Papel oder Pustel.',
                'Die Bakterien wandern über die Lymphbahnen zu den regionalen Lymphknoten (z.B. axillär, zervikal).',
                'In den Lymphknoten bildet der Erreger charakteristische, sternförmige (stellate) nekrotisierende Granulome, was zu einer schmerzhaften Vergrößerung der Lymphknoten führt.',
                'Bei immunkompetenten Personen ist die Infektion in der Regel selbstlimitierend. Bei Immunsupprimierten (z.B. HIV) kann das Bakterium streuen und eine systemische Erkrankung wie die bazilläre Angiomatose (Gefäßwucherungen) oder Peliosis hepatis verursachen.'
              ],
              virulence_factors: ['Flagellum', 'Pili', 'Adhäsine', 'BadA-Autotransporter', 'Intrazelluläres Überleben (Erythrozyten, Endothel)']
            },
            clinical: {
              incubation: '3-10 Tage (Papel), 1-3 Wochen (Lymphadenitis)',
              onset: 'Subakut',
              symptoms: [
                { name: 'Typische Form', description: 'Nach einer primären Papel an der Kratzstelle entwickelt sich nach 1-3 Wochen eine einseitige, schmerzhafte regionale Lymphknotenschwellung (am häufigsten in der Achselhöhle oder am Hals). Leichtes Fieber und Unwohlsein können begleitend auftreten. Der Lymphknoten kann eitern.', severity: 'moderate' },
                { name: 'Parinaud-okuloglanduläres Syndrom', description: 'Der Erreger dringt durch die Bindehaut ein, was zu einer einseitigen Konjunktivitis und einer Schwellung des präaurikulären Lymphknotens führt.', severity: 'moderate' },
                { name: 'Atypische/Disseminierte Formen', description: 'Seltener, vor allem bei Immunsupprimierten, kann die Infektion streuen. Sie kann Neuroretinitis (Sehverlust), Enzephalitis, hepatosplenische Erkrankung (Leber- und Milzabszesse) oder bazilläre Angiomatose (Gefäßtumoren auf Haut und inneren Organen) verursachen.', severity: 'severe' }
              ],
              physical_exam: [
                'Papel/Pustel an der Kratzstelle (heilt, vernarbt)',
                'Einseitige regionale Lymphadenomegalie (axillär, epitrochleär, zervikal)',
                'Lymphknoten: druckempfindlich, 1-5cm, warm',
                'Fluktuierend (10-15%) → eitrig',
                'Parinaud-Syndrom: Konjunktivitis, präaurikulärer Lymphknoten',
                'Hepatosplenomegalie (disseminiert)'
              ],
              complications: ['Lymphknotenabszessbildung', 'Enzephalitis/Enzephalopathie', 'Osteomyelitis', 'Endokarditis (selten)', 'Bazilläre Angiomatose (HIV+)', 'Neuroretinitis', 'Peliosis hepatis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Normal oder leichte Leukozytose', interpretation: 'Unspezifisch' },
                { test: 'CRP/BSG', finding: 'Leichte bis mäßige Erhöhung', interpretation: 'Entzündung' },
                { test: 'Leber-/Milzenzyme', finding: 'Erhöht (disseminiert)', interpretation: 'Hepatosplenische Beteiligung' }
              ],
              imaging: [
                { modality: 'US (Lymphknoten)', finding: 'Vergrößert, hypoechogen, fluktuierend (Abszess)', significance: 'Notwendigkeit der Drainage' },
                { modality: 'CT/MRT', finding: 'Milz-/Leberläsionen (bazilläre Angiomatose)', significance: 'Disseminierte Erkrankung' }
              ],
              microbiology: [
                { test: 'Bartonella-Serologie (IgG/IgM)', finding: 'IgG ≥1:256 (akut), ≥1:512 (Endokarditis)', significance: 'Goldstandard, 2-6 Wochen positiv' },
                { test: 'PCR (Lymphknotenbiopsie)', finding: 'Bartonella-DNA', significance: 'Sensitiv, schnell' },
                { test: 'Warthin-Starry-Silberfärbung', finding: 'Bazillen in Gewebeprobe', significance: 'Histologie' },
                { test: 'Blutkultur (speziell)', finding: 'Langsames Wachstum (6-8 Wochen), schwierig', significance: 'Endokarditis' }
              ]
            },
            differential: [
              { disease: 'Pyogene Lymphadenitis (Staph/Strep)', distinguishing: 'Schnellerer Beginn, schnelles Ansprechen auf Antibiotika' },
              { disease: 'Toxoplasmose', distinguishing: 'Beidseitige zervikale Lymphknoten, Serologie' },
              { disease: 'Mykobakteriose (atypisch)', distinguishing: 'AFB positiv, langsamer, Kultur' },
              { disease: 'Tularämie', distinguishing: 'Wildtierexposition, Geschwür schwerer, Serologie' },
              { disease: 'Lymphom', distinguishing: 'Progressiv, Biopsie' },
              { disease: 'Mononukleose', distinguishing: 'Halsschmerzen, Splenomegalie, Monospot/EBV-Serologie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '500 mg an Tag 1, dann 250 mg täglich', duration: '5 Tage', note: 'Erste Wahl, reduziert Lymphknotengröße' },
                  { drug: 'Doxycyclin', dose: '100 mg zweimal täglich p.o.', duration: '4-6 Wochen', note: 'Alternative bei Erwachsenen' },
                  { drug: 'BEOBACHTUNG', dose: 'Selbstlimitierende Erkrankung', duration: '2-4 Monate', note: 'In leichten Fällen Antibiotika nicht unbedingt erforderlich' }
                ],
                inpatient: [
                  { drug: 'Azithromycin', dose: '500 mg täglich i.v.', duration: '5 Tage, dann p.o.', note: 'Wenn p.o. nicht toleriert' },
                  { drug: 'Doxycyclin + Rifampicin', dose: '100 mg zweimal täglich + 300 mg zweimal täglich p.o.', duration: '4-6 Wochen', note: 'Neuroretinitis' }
                ],
                icu: [
                  { drug: 'Gentamicin + Doxycyclin', dose: '3 mg/kg täglich i.v. + 100 mg p.o./i.v. zweimal täglich', duration: '6 Wochen', note: 'Endokarditis' },
                  { drug: 'Chirurgie', dose: 'Herzklappenersatz', duration: '', note: 'Bartonella-Endokarditis' }
                ]
              },
              targeted: 'Typische CSD: Azithromycin (optional); Neuroretinitis/schwer: Doxycyclin±Rifampicin; Endokarditis: Gentamicin+Doxycyclin±Chirurgie',
              supportive: ['Chirurgische Drainage (fluktuierender Lymphknoten)', 'Analgetika', 'Warme Kompressen', 'KEINE INZISIONSBIOPSIE (Narbenbildung, Sinusbildung)'],
              prevention: ['Katzenflohbekämpfung', 'Vermeidung von Kratzern/Bissen (Spiel)', 'Händewaschen nach Katzenberührung', 'Wunddesinfektion', 'Immungeschwächte: Katzen meiden']
            },
            prognosis: {
              mortality: '<1% (Endokarditis selten)',
              prognostic_scores: ['Keine'],
              factors: 'Immunstatus (HIV: bazilläre Angiomatose), Komplikationen (Endokarditis), Alter'
            }
          },
          {
            id: 'q_fever_zoo',
            name: 'Q-Fieber',
            pathogen: { type: 'Bakterium', name: '<i>Coxiella burnetii</i>', gram: 'Gram-negativ (intrazellulär)', shape: 'Kokkobazillus' },
            epidemiology: {
              incidence: 'Zoonose, Berufskrankheit',
              risk_groups: ['Viehzüchter', 'Schlachthofarbeiter', 'Tierärzte'],
              seasonality: 'Frühling (Ablammsaison)',
              transmission: 'Aerosol (Plazenta, Fruchtwasser, Milch, Kotstaub)'
            },
            pathomechanism: {
              steps: [
                'Coxiella burnetii ist ein hochinfektiöses, obligat intrazelluläres Bakterium. Die Infektion erfolgt am häufigsten durch Inhalation von Aerosol, das sporenähnliche Partikel aus dem Geburtsvorgang infizierter Tiere (Schafe, Ziegen, Rinder) enthält.',
                'Nach dem Eindringen in die Lunge wird der Erreger von Alveolarmakrophagen phagozytiert.',
                'Das Bakterium überlebt nicht nur in den sauren Phagosomen der Makrophagen, sondern vermehrt sich dort auch und bildet eine spezielle Vakuole.',
                'Nach Freisetzung aus den infizierten Zellen gelangt der Erreger mit dem Blutstrom (hämatogene Streuung) in verschiedene Teile des Körpers, hauptsächlich in Leber und Knochenmark.',
                'Der Körper versucht, die Infektion durch die Bildung charakteristischer, "Doughnut"-förmiger Granulome einzudämmen. Die Krankheit kann akut oder chronisch (Endokarditis) verlaufen.'
              ],
              virulence_factors: ['Sporenähnliche Form (resistent)', 'LPS-Phasenvariation']
            },
            clinical: {
              incubation: '2-3 Wochen',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Akutes Q-Fieber', description: 'Etwa 60% der Fälle sind asymptomatisch. Die symptomatische Form beginnt plötzlich mit hohem Fieber, starken retrobulbären Kopfschmerzen und grippeähnlichen Symptomen. Häufig sind eine atypische Pneumonie (milder Husten) und eine granulomatöse Hepatitis (erhöhte Leberenzyme).', severity: 'moderate' },
                { name: 'Chronisches Q-Fieber', description: 'Entwickelt sich Monate bis Jahre nach der akuten Infektion, hauptsächlich bei Patienten mit Herzklappenfehlern oder Immunsuppression. Die häufigste Manifestation ist eine kultur-negative Endokarditis. Andere Formen sind vaskuläre (Aneurysma) und Knocheninfektionen.', severity: 'severe' }
              ],
              physical_exam: [
                'Hepatomegalie',
                'Splenomegalie',
                'Relative Bradykardie'
              ],
              complications: ['Chronisches Q-Fieber (Endokarditis)', 'Osteomyelitis', 'Chronische Hepatitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Leberenzyme', finding: 'Erhöht', interpretation: 'Hepatitis' },
                { test: 'Thrombozytopenie', finding: 'Leicht', interpretation: 'Häufig' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Runde Opazitäten, multipel', significance: 'Pneumonie' },
                { modality: 'Echo', finding: 'Vegetation', significance: 'Endokarditis (chronisch)' }
              ],
              microbiology: [
                { test: 'Serologie (IF)', finding: 'Phase II (akut), Phase I (chronisch)', significance: 'Diagnostisch' },
                { test: 'PCR', finding: 'Aus Blut', significance: 'In der Frühphase' }
              ]
            },
            differential: [
              { disease: 'Brucellose', distinguishing: 'Undulierendes Fieber, Milchprodukte' },
              { disease: 'Influenza', distinguishing: 'Saisonalität, Atemwegssymptome dominieren' },
              { disease: 'Virushepatitis', distinguishing: 'Serologie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '100 mg zweimal täglich', duration: '14 Tage', note: 'Akutes Q-Fieber' }
                ],
                inpatient: [
                  { drug: 'Doxycyclin', dose: '100 mg zweimal täglich', duration: '14 Tage', note: '' }
                ],
                icu: [
                  { drug: 'Doxycyclin + Hydroxychloroquin', dose: 'Langfristig', duration: '18-24 Monate', note: 'Chronisches Q-Fieber (Endokarditis)' }
                ]
              },
              targeted: 'Doxycyclin',
              supportive: ['Fiebersenkung'],
              prevention: ['Schutzausrüstung beim Ablammen', 'Pasteurisierung von Milch', 'Impfstoff (Australien)']
            },
            prognosis: {
              mortality: 'Akut <2%, Chronisch (Endokarditis) hoch bei Nichtbehandlung',
              prognostic_scores: ['Keine'],
              factors: 'Klappenfehler, Immunsuppression'
            }
          },
          {
            id: 'rabies',
            name: 'Tollwut (Rabies)',
            pathogen: { type: 'Virus', name: '<i>Rabies lyssavirus</i>', gram: 'RNA-Virus', shape: 'projektilförmig' },
            epidemiology: {
              incidence: 'Weltweit 59.000 Todesfälle/Jahr (hauptsächlich Asien, Afrika)',
              risk_groups: ['Tierpfleger', 'Reisende in Endemiegebiete', 'Höhlenforscher (Fledermaus)'],
              seasonality: 'Keine',
              transmission: 'Biss (Speichel), Kratzer, Schleimhautkontakt'
            },
            pathomechanism: {
              steps: [
                'Das Tollwutvirus wird durch den Biss eines infizierten Tieres (z.B. Hund, Fuchs, Fledermaus) über den Speichel in den Körper, typischerweise ins Muskelgewebe, übertragen.',
                'Das Virus vermehrt sich zunächst in den Muskelzellen und dringt dann über die neuromuskuläre Endplatte (NMJ) in die peripheren Nerven ein.',
                'In den Axonen der Nervenzellen wandert es durch retrograden (zum Zentrum gerichteten) Transport zum Zentralnervensystem (ZNS), also zu Rückenmark und Gehirn.',
                'Im ZNS vermehrt sich das Virus schnell und verursacht eine schwere, tödliche Enzephalitis. In den infizierten Nervenzellen erscheinen charakteristische Einschlusskörperchen, die sogenannten Negri-Körperchen.',
                'Vom Gehirn aus gelangt das Virus zentrifugal entlang der Nerven zu anderen Organen, am wichtigsten zu den Speicheldrüsen, was eine weitere Ausbreitung ermöglicht.'
              ],
              virulence_factors: ['Neurotropismus', 'Immunumgehung']
            },
            clinical: {
              incubation: '1-3 Monate (Tage bis Jahre)',
              onset: 'Akut neurologisch nach Prodrom',
              symptoms: [
                { name: 'Prodromalstadium', description: 'Die ersten Anzeichen der Krankheit sind unspezifisch: Fieber, Kopfschmerzen, Unwohlsein. Charakteristisch können Schmerzen, Juckreiz oder Parästhesien an der Bissstelle sein.', severity: 'moderate' },
                { name: 'Akutes neurologisches Stadium', description: 'Es gibt zwei Hauptformen. Die "wütende" (enzephalitische) Form (80%) ist durch Unruhe, Verwirrtheit, Hydrophobie (Wasserscheu aufgrund schmerzhafter Kehlkopfkrämpfe beim Schluckversuch) und Aerophobie (Angst vor Luftzug) gekennzeichnet. Die "stille" (paralytische) Form (20%) ist durch eine von der Bissstelle ausgehende, aufsteigende schlaffe Lähmung charakterisiert.', severity: 'severe' },
                { name: 'Koma und Tod', description: 'Beide Formen münden schließlich in Koma und Tod durch Atem-/Kreislaufversagen, in der Regel innerhalb von 7-10 Tagen nach Symptombeginn.', severity: 'severe' }
              ],
              physical_exam: [
                'Autonome Instabilität (Hypersalivation, Piloerektion)',
                'Veränderung des Geisteszustands',
                'Fokale neurologische Zeichen',
                'Fieber'
              ],
              complications: ['Tod (~100%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Kein früher Marker', finding: '-', interpretation: 'Klinischer Verdacht!' }
              ],
              imaging: [
                { modality: 'MRT', finding: 'Unspezifische Enzephalitis', significance: 'Ausschluss' }
              ],
              microbiology: [
                { test: 'PCR', finding: 'Speichel, Nackenhautbiopsie (Haarfollikel)', significance: 'Diagnostisch (ante mortem)' },
                { test: 'Antigennachweis', finding: 'Hornhautabdruck, Haut', significance: 'DFA' },
                { test: 'Serologie', finding: 'Liquor/Serum', significance: 'Spät' }
              ]
            },
            differential: [
              { disease: 'Tetanus', distinguishing: 'Trismus, keine Hydrophobie/Pleozytose' },
              { disease: 'Andere Enzephalitis', distinguishing: 'Keine Bissanamnese, Hydrophobie' },
              { disease: 'Psychiatrische Störung', distinguishing: 'Fieber, Progression' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Postexpositionsprophylaxe (PEP)', dose: 'SOFORT!', duration: '', note: 'Lebensrettend!' }
                ],
                inpatient: [
                  { drug: 'Palliative Sedierung', dose: 'Symptomatisch', duration: '', note: 'Bei klinischer Tollwut' }
                ],
                icu: [
                  { drug: 'Milwaukee-Protokoll', dose: 'Experimentell', duration: '', note: 'Nicht routinemäßig empfohlen (erfolglos)' }
                ]
              },
              targeted: 'Keine wirksame Therapie nach Symptombeginn.',
              supportive: ['Sedierung', 'Analgesie', 'Isolierung'],
              prevention: ['PEP: Wundreinigung + Impfstoff (Tage 0, 3, 7, 14) + RIG (Immunglobulin)', 'Tierimpfung', 'Präexpositionsprophylaxe (Reisende, Berufstätige)']
            },
            prognosis: {
              mortality: '~100% nach Symptombeginn',
              prognostic_scores: ['Keine'],
              factors: 'Bissstelle (Kopf/Hals schlechter), Inokulumgröße'
            }
          },
          {
            id: 'anthrax',
            name: 'Milzbrand (Anthrax)',
            pathogen: { type: 'Bakterium', name: '<i>Bacillus anthracis</i>', gram: 'Gram-positiv', shape: 'sporenbildendes Stäbchen' },
            epidemiology: {
              incidence: 'Selten, Bioterrorismus-Risiko',
              risk_groups: ['Gerber', 'Viehzüchter', 'Laboranten'],
              seasonality: 'Keine',
              transmission: 'Sporeninokulation (Haut), Inhalation, Ingestion'
            },
            pathomechanism: {
              steps: [
                'Die Sporen von Bacillus anthracis können im Boden jahrzehntelang überleben. Die Infektion erfolgt durch das Eindringen der Sporen: über die Haut (kutan), durch Einatmen (inhalativ) oder durch Verschlucken (gastrointestinal).',
                'Im Körper werden die Sporen von Makrophagen aufgenommen, wo sie zu vegetativen Bakterien keimen und dann in die Lymphknoten gelangen.',
                'Die Bakterien besitzen zwei Hauptvirulenzfaktoren: eine antiphagozytäre Kapsel, die sie vor dem Immunsystem schützt, und ein dreikomponentiges Exotoxin.',
                'Die Komponenten des Anthrax-Toxins sind: das Protective Antigen (PA), das an die Zellen bindet, der Edema Factor (EF), der Ödeme verursacht, und der Lethal Factor (LF), der Zelltod und eine Störung der Zytokinantwort bewirkt.',
                'Die Toxine führen zu massiver Gewebenekrose, Ödemen, Blutungen und systemischem Schock, was für die hohe Mortalität der Krankheit verantwortlich ist.'
              ],
              virulence_factors: ['Poly-D-Glutaminsäure-Kapsel', 'Protektives Antigen (PA)', 'Ödemfaktor (EF)', 'Letalfaktor (LF)']
            },
            clinical: {
              incubation: 'Haut: 1-7 Tage; Inhalation: 1-60 Tage',
              onset: 'Formabhängig',
              symptoms: [
                { name: 'Hautmilzbrand (kutan) (95%)', description: 'An der Eintrittsstelle erscheint eine juckende Papel, die sich zu einer Blase und dann zu einem schmerzlosen Geschwür mit schwarzer Mitte (Eschar) entwickelt, das von einem charakteristischen, nicht-entzündlichen Ödem umgeben ist. Ohne Behandlung beträgt die Mortalität 20%.', severity: 'moderate' },
                { name: 'Lungenmilzbrand (inhalativ)', description: 'Biphasischer Verlauf. Anfangs milde, grippeähnliche Symptome (Fieber, Husten). Nach 1-3 Tagen tritt eine plötzliche Verschlechterung ein: hohes Fieber, Atemnot, Schock. Im Thorax-CT ist eine charakteristische Mediastinalverbreiterung (hämorrhagische Mediastinitis) zu sehen. Ohne Behandlung fast immer tödlich.', severity: 'severe' },
                { name: 'Magen-Darm-Milzbrand', description: 'Entwickelt sich nach dem Verzehr von infiziertem Fleisch. Verursacht Übelkeit, Erbrechen, blutigen Durchfall und starke Bauchschmerzen. Hohe Mortalität.', severity: 'severe' }
              ],
              physical_exam: [
                'Maligne Pustel (schwarzer Schorf, ödematöser Hof)',
                'Massives mediastinales Ödem (Inhalation)',
                'Meningeale Zeichen'
              ],
              complications: ['Septischer Schock', 'Meningitis', 'Mediastinitis', 'Tod']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose', interpretation: 'Entzündung' },
                { test: 'Blutkultur', finding: 'Gram+ Stäbchen', interpretation: 'Sepsis' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen/CT', finding: 'Mediastinale Verbreiterung (Lymphadenopathie), Pleuraerguss', significance: 'Lungenmilzbrand (pathognomonisch)' }
              ],
              microbiology: [
                { test: 'Gram-Färbung', finding: 'Große Gram+ Stäbchen ("Bambusrohr")', significance: 'Aus Bläschenflüssigkeit' },
                { test: 'PCR', finding: 'Positiv', significance: 'Schnell' },
                { test: 'DFA', finding: 'Kapselantigen', significance: 'Bestätigung' }
              ]
            },
            differential: [
              { disease: 'Spinnenbiss', distinguishing: 'Schmerzhaft, kein Eschar' },
              { disease: 'Tularämie', distinguishing: 'Schmerzhaftes Geschwür' },
              { disease: 'Pneumonie', distinguishing: 'Fehlen einer mediastinalen Verbreiterung' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Ciprofloxacin', dose: '500 mg zweimal täglich', duration: '60 Tage', note: 'Hautmilzbrand (60 Tage bei Bioterror-Verdacht)' },
                  { drug: 'Doxycyclin', dose: '100 mg zweimal täglich', duration: '60 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Ciprofloxacin + Meropenem + Linezolid', dose: 'IV-Kombination', duration: 'Lang', note: 'Inhalation/systemisch (Antitoxin wird auch gegeben)' }
                ],
                icu: [
                  { drug: 'Raxibacumab', dose: 'Monoklonaler Antikörper', duration: 'Einmalig', note: 'Toxinneutralisation' }
                ]
              },
              targeted: 'Ciprofloxacin, Doxycyclin, Penicillin G (wenn empfindlich)',
              supportive: ['Flüssigkeitsersatz', 'Beatmung', 'Pleuradrainage'],
              prevention: ['Impfstoff (Soldaten, Hochrisiko)', 'PEP (Ciprofloxacin 60 Tage)', 'Verbrennung von Tierkadavern']
            },
            prognosis: {
              mortality: 'Haut: <1% (behandelt), 20% (unbehandelt); Inhalation: >85% (unbehandelt), 45% (behandelt)',
              prognostic_scores: ['Keine'],
              factors: 'Inhalationsform, späte Behandlung, Meningitis'
            },
          }, {
              id: 'brucellosis',
              name: 'Brucellose (Maltafieber)',
              pathogen: { type: 'Bakterium', name: '<i>Brucella spp. (melitensis, abortus, suis)</i>', gram: 'Gram-negativ', shape: 'Kokkobazillus' },
              epidemiology: {
                incidence: 'Endemisch im Mittelmeerraum, Naher Osten',
                risk_groups: ['Tierärzte', 'Hirten', 'Schlachthofarbeiter', 'Konsumenten von Rohmilchprodukten'],
                seasonality: 'Frühling-Sommer',
                transmission: 'Direkter Kontakt, Inhalation, unpasteurisierte Milchprodukte'
              },
              pathomechanism: {
                steps: [
                  'Eintritt: Bakterien dringen über verletzte Haut, Bindehaut, Atemwege oder den Magen-Darm-Trakt ein.',
                  'Phagozytose: Makrophagen nehmen sie auf, aber die Bakterien überleben und vermehren sich intrazellulär.',
                  'Ausbreitung: Infizierte Makrophagen wandern zu regionalen Lymphknoten und in den Blutkreislauf (Bakteriämie).',
                  'Organbefall: Granulome bilden sich in retikuloendothelialen Organen (Leber, Milz, Knochenmark, Lymphknoten).'
                ],
                virulence_factors: ['LPS (glatt)', 'T4SS-Sekretionssystem', 'Intrazelluläres Überleben']
              },
              clinical: {
                incubation: '2-4 Wochen (1 Woche bis Monate)',
                onset: 'Schleichend oder plötzlich',
                symptoms: [
                  { name: 'Undulierendes Fieber', description: 'Wellenförmiger Fieberverlauf (morgens niedrig, nachmittags hoch) mit profusem, muffig riechendem Schweiß.', severity: 'moderate' },
                  { name: 'Muskuloskelettal', description: 'Gelenkschmerzen (Arthralgie), Rückenschmerzen (Sakroiliitis), Muskelschmerzen.', severity: 'moderate' },
                  { name: 'Allgemeinsymptome', description: 'Müdigkeit, Kopfschmerzen, Depression, Gewichtsverlust.', severity: 'mild' }
                ],
                physical_exam: ['Hepatomegalie', 'Splenomegalie', 'Lymphadenopathie', 'Klopfschmerz der Wirbelsäule'],
                complications: ['Osteomyelitis (Wirbel)', 'Endokarditis', 'Neurobrucellose', 'Epididymoorchitis']
              },
              diagnostics: {
                laboratory: [{ test: 'Blutbild', finding: 'Leukopenie, relative Lymphozytose', interpretation: '-' }, { test: 'Leberenzyme', finding: 'Leichte Erhöhung', interpretation: 'Granulomatöse Hepatitis' }],
                imaging: [{ modality: 'MRT Wirbelsäule', finding: 'Spondylodiszitis', significance: 'Bei Rückenschmerzen' }],
                microbiology: [
                  { test: 'Blutkultur', finding: 'Brucella spp.', significance: 'Langsames Wachstum (bis zu 3-4 Wochen), Labor informieren!' },
                  { test: 'Serologie (Wright)', finding: 'Titer ≥1:160 oder 4-facher Anstieg', significance: 'Standarddiagnose' }
                ]
              },
              differential: [
                { disease: 'Typhus', distinguishing: 'Roseolen, Bradykardie' },
                { disease: 'Tuberkulose', distinguishing: 'Atemwegssymptome, Sputum' },
                { disease: 'Malaria', distinguishing: 'Periodizität, Reise' }
              ],
              therapy: {
                empirical: { outpatient: [{ drug: 'Doxycyclin + Rifampicin', dose: '100mg 2x/Tag + 600-900mg 1x/Tag p.o.', duration: '6 Wochen', note: 'Standardtherapie' }] },
                targeted: 'Doxycyclin + Rifampicin (6 Wochen). Alternative: Doxycyclin + Streptomycin (2-3 Wochen). Neurobrucellose/Endokarditis: Doxy + Rif + Ceftriaxon/Cotrimoxazol (monatelang).',
                supportive: ['Symptomatische Behandlung'],
                prevention: ['Pasteurisierung von Milch', 'Schutzausrüstung', 'Tierimpfung']
              },
              prognosis: { mortality: '<2% (hauptsächlich durch Endokarditis)', prognostic_scores: [], factors: 'Komplikationen, Rezidiv häufig' }
                       }
                     ]
                   },
});

(function ensureZoonoticDeDiseaseGalleries() {
  const category = window.diseases.zoonotic;
  if (!category || !Array.isArray(category.diseases)) return;

  function createInlineGalleryImage(diseaseName, categoryName) {
    const safeDiseaseName = String(diseaseName || 'Krankheit');
    const safeCategoryName = String(categoryName || 'Zoonotisch');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#dcfce7"/>
          <stop offset="100%" stop-color="#bbf7d0"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <circle cx="1030" cy="150" r="130" fill="#16a34a" opacity="0.14"/>
      <circle cx="180" cy="520" r="180" fill="#22c55e" opacity="0.12"/>
      <text x="80" y="150" font-size="62" font-family="Arial, sans-serif" font-weight="700" fill="#14532d">${safeDiseaseName}</text>
      <text x="80" y="230" font-size="36" font-family="Arial, sans-serif" fill="#166534">Kategorie: ${safeCategoryName}</text>
      <text x="80" y="340" font-size="30" font-family="Arial, sans-serif" fill="#052e16">Zoonotische Infektion - didaktische Illustration</text>
      <rect x="80" y="390" width="1040" height="8" fill="#16a34a" opacity="0.45"/>
      <text x="80" y="470" font-size="28" font-family="Arial, sans-serif" fill="#14532d">Infectologia</text>
    </svg>`;

    return {
      url: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
      caption: `${safeDiseaseName} - didaktische Illustration`,
      type: 'Illustration'
    };
  }

  category.diseases.forEach((disease) => {
    if (!disease || (Array.isArray(disease.gallery) && disease.gallery.length > 0)) return;
    disease.gallery = [createInlineGalleryImage(disease.name, category.name)];
  });
})();
