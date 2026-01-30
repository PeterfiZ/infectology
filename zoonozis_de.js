Object.assign(window.diseases, {
      zoonotic: {
        name: 'Zoonosen',
        icon: '🐾',
        color: '#059669',
        diseases: [
          {
            id: 'leptospirosis',
            name: 'Leptospirose',
            pathogen: { type: 'Spirochäte', name: 'Leptospira interrogans', gram: 'Gram-negativ', shape: 'spiralförmig, mit Haken' },
            epidemiology: {
              incidence: 'Tropisch/Subtropisch: 10-100/100.000; Gemäßigte Zone: 0.1-1/100.000',
              risk_groups: ['Landarbeiter', 'Tierärzte', 'Schlachthofarbeiter', 'Kanalarbeiter', 'Wassersportler/Extremsportler', 'Soldaten (Dschungel)'],
              seasonality: 'Sommer-Herbst, Regenzeit',
              transmission: 'Exposition gegenüber kontaminiertem Wasser/Boden → Haut/Schleimhaut. Übertragung durch Urin von Nagetieren/Tieren'
            },
            pathomechanism: {
              steps: [
                'Leptospiren dringen durch verletzte Haut/Schleimhaut ein',
                'Schnelle hämatogene Ausbreitung in alle Organe',
                'Endothelschädigung → erhöhte Gefäßpermeabilität',
                'Leber-, Nieren-, Lungenbeteiligung',
                'Weil-Krankheit: schwere Form - Leber- und Nierenversagen, Blutungen',
                'Immunvermittelte Entzündung (T-Zell-Aktivierung)'
              ],
              virulence_factors: ['Äußere Membranproteine (LipL32)', 'Flagellum (Motilität)', 'Hämolysine', 'Lipopolysaccharid', 'Adhäsine']
            },
            clinical: {
              incubation: '2-30 Tage (durchschnittlich 7-12 Tage)',
              onset: 'Biphasischer Verlauf',
              symptoms: [
                { name: 'Plötzliches Fieber', description: '>95% vorhanden (39-40°C), mit Schüttelfrost', severity: 'severe' },
                { name: 'Kopfschmerzen', description: '>95%, schwer, frontal/retrobulbär', severity: 'severe' },
                { name: 'Myalgie', description: '>80%, hauptsächlich Waden und Lendenbereich (charakteristisch!)', severity: 'severe' },
                { name: 'Konjunktivale Suffusion', description: '30-40%, aber sehr spezifisch (ohne Ikterus)', severity: 'moderate' },
                { name: 'Ikterus', description: '5-10% (Weil-Krankheit)', severity: 'severe' },
                { name: 'Hämorrhagische Manifestationen', description: '30-40% bei schwerer Form (Lungenblutung, Petechien)', severity: 'severe' }
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
                  { drug: 'Doxycyclin', dose: '2x100mg p.o.', duration: '7 Tage', note: 'Erste Wahl bei leichten Fällen' },
                  { drug: 'Amoxicillin', dose: '3x500mg p.o.', duration: '7 Tage', note: 'Alternative (Schwangere, Kinder)' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '6x1.5 Mio. IE i.v.', duration: '7 Tage', note: 'Schwere/Weil-Krankheit' },
                  { drug: 'Ceftriaxon', dose: '1x1-2g i.v.', duration: '7 Tage', note: 'Alternative' }
                ],
                icu: [
                  { drug: 'Penicillin G', dose: '6x1.5 Mio. IE i.v.', duration: '7 Tage', note: 'Schwere Weil-Krankheit' },
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
            }
          },
          {
            id: 'hantavirus',
            name: 'Hantavirus-Infektion',
            pathogen: { type: 'Virus', name: 'Hantavirus (mehrere Serotypen)', gram: 'Negativ-Strang-RNA-Virus, Bunyaviridae', shape: 'sphärisch' },
            epidemiology: {
              incidence: 'Europa: HFRS 10.000+ Fälle/Jahr; USA: HPS <50 Fälle/Jahr',
              risk_groups: ['Landarbeiter', 'Förster', 'Soldaten', 'Camper/Wanderer', 'Arbeit mit Nagetierkontakt', 'Reinigung schlecht belüfteter Gebäude'],
              seasonality: 'Frühling-Herbst (Nagetierpopulationsspitze)',
              transmission: 'Aerosol (Nagetierkot/-urin/-speichel). NICHT von Mensch zu Mensch!'
            },
            pathomechanism: {
              steps: [
                'Hantavirus-Inhalation (Staub von Nagetierausscheidungen)',
                'Virus infiziert Endothelzellen (nicht zytopathisch)',
                'Immunvermittelte Erhöhung der Gefäßpermeabilität',
                'HFRS: Nierenbeteiligung (Capillary-Leak-Syndrom)',
                'HPS: pulmonales Capillary-Leak → Lungenödem, kardiogener Schock',
                'Thrombozytopenie und Gerinnungsstörungen'
              ],
              virulence_factors: ['Nukleokapsidprotein (Immunantwort)', 'Glykoprotein Gn/Gc (Zelleintritt)', 'Endotheltropismus', 'Immunmodulation']
            },
            clinical: {
              incubation: '1-8 Wochen (durchschnittlich 2-4 Wochen)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Fieber', description: '100%, plötzlicher Beginn (39-41°C)', severity: 'severe' },
                { name: 'Myalgie', description: '85-100% (Rücken, Oberschenkel)', severity: 'moderate' },
                { name: 'Kopfschmerzen', description: '>90%', severity: 'severe' },
                { name: 'Bauchschmerzen', description: '30-50% (häufiger bei HFRS)', severity: 'severe' },
                { name: 'Sehstörungen', description: '20-30% (HFRS - vorübergehende Myopie)', severity: 'moderate' },
                { name: 'HPS-Symptome', description: 'Husten, Dyspnoe (>90% am Ende des Prodroms)', severity: 'severe' },
                { name: 'HFRS-Symptome', description: 'Oligurie/Anurie, Flankenschmerzen', severity: 'severe' }
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
                  { drug: 'Ribavirin', dose: '33mg/kg i.v. Ladedosis, dann 16mg/kg alle 6h', duration: '4 Tage, dann 8mg/kg alle 8h für 3 Tage', note: 'Wirksam bei HFRS, in der Frühphase (<5 Tage)' },
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
            pathogen: { type: 'Spirochäte', name: 'Borrelia burgdorferi sensu lato', gram: 'Gram-negativ', shape: 'spiralförmig' },
            epidemiology: {
              incidence: 'USA: 476.000 Fälle/Jahr; Europa: 232.000 Fälle/Jahr',
              risk_groups: ['Besucher von Waldgebieten', 'Wanderer, Camper', 'Förster, Jäger', 'Gärtner', 'Kinder (Sommerspiel)'],
              seasonality: 'April-Oktober (Zeckenaktivität)',
              transmission: 'Ixodes-Zeckenstich (>24-36 Stunden angeheftet)'
            },
            pathomechanism: {
              steps: [
                'Zeckenstich → Borrelien-Inokulation',
                'Lokale Ausbreitung in der Haut → Erythema migrans',
                'Hämatogene Disseminierung (Tage-Wochen)',
                'Früh disseminiert: Herz, Nervensystem, Gelenke',
                'Spät: chronische Arthritis, Neuroborreliose',
                'Spirochäten-Antigene können persistieren (Immunantwort dauert an)'
              ],
              virulence_factors: ['Äußere Oberflächenproteine (OspA, OspC)', 'VlsE (Antigenvariation)', 'Komplementresistenz', 'Extrazelluläre Matrixadhärenz']
            },
            clinical: {
              incubation: '3-30 Tage (durchschnittlich 7 Tage)',
              onset: 'Stadienhaft',
              symptoms: [
                { name: 'Erythema migrans (EM)', description: 'Erscheint in 70-80% (Zielscheibe oder homogen)', severity: 'moderate' },
                { name: 'Allgemeinsymptome', description: 'Fieber, Müdigkeit, Kopfschmerzen (häufig in der Frühphase)', severity: 'mild' },
                { name: 'Neuroborreliose', description: '10-15% (bei Unbehandelten): Fazialisparese, Meningitis, Radikulopathie', severity: 'severe' },
                { name: 'Lyme-Karditis', description: '1-5% (bei Unbehandelten): AV-Block', severity: 'severe' },
                { name: 'Lyme-Arthritis', description: '60% (bei Unbehandelten, USA): Kniegelenkschwellung', severity: 'moderate' },
                { name: 'Borrelien-Lymphozytom', description: 'Selten (<1%), Ohrläppchen/Brustwarze (Europa)', severity: 'mild' }
              ],
              physical_exam: [
                'Früh lokalisiert: EM (Durchmesser 5-70cm, oft zentrale Aufhellung)',
                'Multiplex EM (disseminiert)',
                'Lymphozytom (Ohrläppchen, Brust)',
                'Fazialisparese (ein-/beidseitig)',
                'Meningeale Zeichen',
                'Monarthritis/Oligoarthritis (Knie)',
                'Hautatrophie (ACA)'
              ],
              complications: ['Chronische Lyme-Arthritis', 'Post-Lyme-Syndrom', 'Enzephalomyelitis', 'Keratitis', 'Chronische Müdigkeit']
            },
            diagnostics: {
              laboratory: [
                { test: 'Zweistufige Serologie: ELISA → Western Blot', finding: 'IgM (2-4 Wochen), IgG (4-6 Wochen)', interpretation: 'Goldstandard, aber bei frühem EM oft negativ!' },
                { test: 'Liquor', finding: 'Lymphozytäre Pleozytose, ↑Protein, intrathekale Ak-Produktion', interpretation: 'Neuroborreliose' },
                { test: 'Gelenkflüssigkeit', finding: 'Entzündlich (WBC >10.000), PCR+', interpretation: 'Lyme-Arthritis' }
              ],
              imaging: [
                { modality: 'MRT Gehirn', finding: 'Läsionen der weißen Substanz (Neuroborreliose)', significance: 'Selten, Differentialdiagnose' },
                { modality: 'EKG', finding: 'AV-Block (1.-3. Grad)', significance: 'Lyme-Karditis' }
              ],
              microbiology: [
                { test: 'Serologie (ELISA + Western Blot)', finding: 'IgM/IgG positiv', significance: 'Zweistufiger Algorithmus! Falsch positive häufig' },
                { test: 'PCR (Gelenkflüssigkeit, Liquor)', finding: 'Borrelien-DNA', significance: 'Geringe Sensitivität' },
                { test: 'Kultur', finding: 'Nicht routinemäßig (dauert Wochen)', significance: 'Nur in speziellen Fällen' }
              ]
            },
            differential: [
              { disease: 'Tinea corporis (Ringelflechte)', distinguishing: 'Breitet sich nicht aus, schuppt, KOH-Mikroskopie' },
              { disease: 'Southern tick-associated rash illness (STARI)', distinguishing: 'Lone Star Zecke, Serologie negativ' },
              { disease: 'Reaktive Arthritis', distinguishing: 'GI/GU-Infektion, HLA-B27' },
              { disease: 'Rheumatoide Arthritis', distinguishing: 'RF/Anti-CCP positiv, symmetrisch' },
              { disease: 'MS', distinguishing: 'MRT-Muster, oligoklonale Banden' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg p.o.', duration: '10-14 Tage (EM), 14-21 Tage (Arthritis)', note: 'Erste Wahl Erwachsene/Kinder >8J' },
                  { drug: 'Amoxicillin', dose: '3x500mg p.o.', duration: '14-21 Tage', note: 'Schwangere, Kinder <8J' },
                  { drug: 'Cefuroxim-Axetil', dose: '2x500mg p.o.', duration: '14-21 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1x2g i.v.', duration: '14-28 Tage', note: 'Neuroborreliose, Lyme-Karditis (AV-Block >1°)' },
                  { drug: 'Penicillin G', dose: '4x5 Mio. IE i.v.', duration: '14-28 Tage', note: 'Alternative Neuroborreliose' }
                ],
                icu: [
                  { drug: 'Ceftriaxon', dose: '1x2g i.v.', duration: '28 Tage', note: 'Schwere Neuroborreliose' },
                  { drug: 'Schrittmacher (temporär)', dose: 'Kompletter AV-Block', duration: '', note: 'Karditis' }
                ]
              },
              targeted: 'Früh: Doxycyclin; Neuroborreliose/Karditis: Ceftriaxon i.v.',
              supportive: ['Jarisch-Herxheimer-Reaktion möglich', 'NSAIDs (Arthritis)', 'Temporärer Schrittmacher (kompletter Block)'],
              prevention: ['Schutzkleidung im Wald', 'Repellents (DEET)', 'Zeckenentfernung <24 Stunden', 'Einzeldosis Doxycyclin (200mg) <72 Stunden nach Stich (in Endemiegebieten)', 'Kein wirksamer Impfstoff']
            },
            prognosis: {
              mortality: '<0.001% (Lyme-Karditis seltener Todesfall)',
              prognostic_scores: ['Keine spezifischen'],
              factors: 'Frühe Behandlung, Stadium, Organbeteiligung, neurologische/kardiale Komplikation'
            }
          },
          {
            id: 'tularemia',
            name: 'Tularämie (Hasenpest)',
            pathogen: { type: 'Bakterium', name: 'Francisella tularensis', gram: 'Gram-negativ', shape: 'Kokkobazillus, intrazellulär' },
            epidemiology: {
              incidence: 'USA: 100-200 Fälle/Jahr; Europa: sporadisch',
              risk_groups: ['Jäger', 'Lederverarbeiter', 'Landarbeiter', 'Laboranten', 'Förster', 'Tierärzte'],
              seasonality: 'Sommer (Zecke), Winter (Jagd)',
              transmission: 'Zecken-/Fliegenstich, Kontakt mit infizierten Tieren (Kaninchen, Nagetiere), Inhalation, Wasser/Nahrung'
            },
            pathomechanism: {
              steps: [
                'Francisella dringt durch Haut/Schleimhaut/Inhalation ein',
                'Phagozytose durch Makrophagen/dendritische Zellen',
                'Intrazelluläre Replikation (Ausbruch aus dem Phagosom)',
                'Regionale Lymphknoten → nekrotisierendes Granulom',
                'Lymphadenitis, typhöse Ausbreitung',
                'Hohe Infektiosität (<10 Organismen ausreichend)'
              ],
              virulence_factors: ['Kapsel', 'Phagosomen-Escape (iglA-D Locus)', 'LPS (toxisch)', 'Siderophore', 'Intrazelluläres Überleben']
            },
            clinical: {
              incubation: '3-5 Tage (1-14 Tage)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Fieber', description: '>90%, plötzlicher Beginn', severity: 'severe' },
                { name: 'Ulzeroglandulär', description: '75-85%: Schmerzhaftes Geschwür + regionaler Lymphknoten', severity: 'moderate' },
                { name: 'Glandulär', description: '5-10%: Nur Lymphknotenschwellung (ohne Geschwür)', severity: 'moderate' },
                { name: 'Typhös', description: '5-15%: Systemische fieberhafte Erkrankung, ohne Lokalisation', severity: 'severe' },
                { name: 'Pneumonie', description: '30-80% der typhösen Fälle (oder primäre Inhalation)', severity: 'severe' },
                { name: 'Okuloglandulär', description: '1-2%: Konjunktivitis + Lymphknoten', severity: 'moderate' }
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
                  { drug: 'Doxycyclin', dose: '2x100mg p.o.', duration: '14-21 Tage', note: 'Erste Wahl bei leichter Form' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg p.o.', duration: '14-21 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Streptomycin', dose: '2x7.5-10mg/kg i.m.', duration: '10 Tage', note: 'Goldstandard in schweren Fällen' },
                  { drug: 'Gentamicin', dose: '1x5mg/kg i.v.', duration: '10 Tage', note: 'Streptomycin nicht verfügbar' },
                  { drug: 'Doxycyclin', dose: '2x100mg i.v.', duration: '14-21 Tage', note: 'In Kombination' }
                ],
                icu: [
                  { drug: 'Gentamicin + Doxycyclin', dose: 'Kombination', duration: '14-21 Tage', note: 'Typhös/pulmonal schwer' },
                  { drug: 'Ciprofloxacin', dose: '2x400mg i.v.', duration: '14-21 Tage', note: 'Bessere Penetration bei Meningitis' }
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
            pathogen: { type: 'Bakterium', name: 'Bartonella henselae', gram: 'Gram-negativ', shape: 'Stäbchen, intrazellulär' },
            epidemiology: {
              incidence: 'USA: ~12.000 Fälle/Jahr (Schätzung), unterdiagnostiziert',
              risk_groups: ['Kinder <10 Jahre', 'Katzenkontakt', 'Flohexposition', 'Immunsupprimierte (HIV)', 'Tierärzte, Tierheimmitarbeiter'],
              seasonality: 'Herbst-Winter (Kätzchen)',
              transmission: 'Katzenkratzer/-biss (95%), selten Hund, Floh'
            },
            pathomechanism: {
              steps: [
                'Bartonella-Inokulation mit Katzenspeichel (Kratzer/Biss)',
                'Lokale Inokulationspapel/-pustel',
                'Invasion regionaler Lymphknoten',
                'Granulomatöse Lymphadenitis (mit sternförmiger Nekrose)',
                'Seltene Disseminierung (immunsupprimiert): bazilläre Angiomatose, Endokarditis',
                'Immunantwort eradiziert normalerweise (Wochen-Monate)'
              ],
              virulence_factors: ['Flagellum', 'Pili', 'Adhäsine', 'BadA-Autotransporter', 'Intrazelluläres Überleben (Erythrozyten, Endothel)']
            },
            clinical: {
              incubation: '3-10 Tage (Papel), 1-3 Wochen (Lymphadenitis)',
              onset: 'Subakut',
              symptoms: [
                { name: 'Lymphadenopathie', description: '85-90%: Regionale, schmerzhafte Lymphknotenschwellung', severity: 'moderate' },
                { name: 'Inokulationsläsion', description: '25-60%: Papel/Pustel an der Kratzstelle', severity: 'mild' },
                { name: 'Fieber', description: '30-50%, meist leicht', severity: 'mild' },
                { name: 'Systemische Symptome', description: 'Müdigkeit, Unwohlsein (50%)', severity: 'mild' },
                { name: 'Parinaud-Syndrom', description: '2-8%: Konjunktivitis + präaurikulärer Knoten', severity: 'moderate' },
                { name: 'Neuroretinitis', description: '1-2%: Einseitiger Sehverlust', severity: 'severe' }
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
                  { drug: 'Azithromycin', dose: '1x500mg T1, dann 250mg/Tag', duration: '5 Tage', note: 'Erste Wahl, reduziert Lymphknotengröße' },
                  { drug: 'Doxycyclin', dose: '2x100mg p.o.', duration: '4-6 Wochen', note: 'Alternative bei Erwachsenen' },
                  { drug: 'BEOBACHTUNG', dose: 'Selbstlimitierende Erkrankung', duration: '2-4 Monate', note: 'In leichten Fällen Antibiotika nicht unbedingt erforderlich' }
                ],
                inpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg i.v.', duration: '5 Tage, dann p.o.', note: 'Wenn p.o. nicht toleriert' },
                  { drug: 'Doxycyclin + Rifampicin', dose: '2x100mg + 2x300mg p.o.', duration: '4-6 Wochen', note: 'Neuroretinitis' }
                ],
                icu: [
                  { drug: 'Gentamicin + Doxycyclin', dose: '3mg/kg/Tag i.v. + 2x100mg p.o./i.v.', duration: '6 Wochen', note: 'Endokarditis' },
                  { drug: 'Chirurgie', dose: 'Herzklappenersatz', duration: '', note: 'Bartonella-Endokarditis' }
                ]
              },
              targeted: 'Typische CSD: Azithromycin (optional); Neuroretinitis/schwer: Doxycyclin±Rifampicin; Endokarditis: Gentamicin+Doxycyclin±Chirurgie',
              supportive: ['Chirurgische Drainage (fluktuierender Lymphknoten)', 'Analgetika', 'Warme Kompressen', 'KEINE INZISIONSBIOPSIE (Narbenbildung, Sinusbildung)'],
              prevention: ['Katzenflohbekämpfung', 'Vermeidung von Kratzern/Bissen (Spiel)', 'Händewaschen nach Katzenberührung', 'Wunddesinfektion', 'Immunsupprimierte: Katzen meiden']
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
            pathogen: { type: 'Bakterium', name: 'Coxiella burnetii', gram: 'Gram-negativ (intrazellulär)', shape: 'Kokkobazillus' },
            epidemiology: {
              incidence: 'Zoonose, Berufskrankheit',
              risk_groups: ['Viehzüchter', 'Schlachthofarbeiter', 'Tierärzte'],
              seasonality: 'Frühling (Ablammsaison)',
              transmission: 'Aerosol (Plazenta, Fruchtwasser, Milch, Kotstaub)'
            },
            pathomechanism: {
              steps: [
                'Inhalation (ein einziges Bakterium kann infizieren!)',
                'Infektion von Alveolarmakrophagen',
                'Vermehrung in sauren Phagosomen',
                'Hämatogene Streuung',
                'Granulombildung (Doughnut-Granulom)'
              ],
              virulence_factors: ['Sporenähnliche Form (resistent)', 'LPS-Phasenvariation']
            },
            clinical: {
              incubation: '2-3 Wochen',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Akutes Q-Fieber', description: 'Grippeähnlich: Fieber, Müdigkeit, starke Kopfschmerzen (>90% bei symptomatischen)', severity: 'severe' },
                { name: 'Hepatitis', description: '60-75% (granulomatös), Hepatomegalie', severity: 'moderate' },
                { name: 'Pneumonie', description: '30-50% (atypisch), oft milder Husten', severity: 'moderate' },
                { name: 'Chronisches Q-Fieber', description: '<5% nach akutem Fall; Endokarditis (60-70% bei chronischen)', severity: 'severe' }
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
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '14 Tage', note: 'Akutes Q-Fieber' }
                ],
                inpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '14 Tage', note: '' }
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
            pathogen: { type: 'Virus', name: 'Rabies lyssavirus', gram: 'RNA-Virus', shape: 'projektilförmig' },
            epidemiology: {
              incidence: 'Weltweit 59.000 Todesfälle/Jahr (hauptsächlich Asien, Afrika)',
              risk_groups: ['Tierpfleger', 'Reisende in Endemiegebiete', 'Höhlenforscher (Fledermaus)'],
              seasonality: 'Keine',
              transmission: 'Biss (Speichel), Kratzer, Schleimhautkontakt'
            },
            pathomechanism: {
              steps: [
                'Inokulation (Muskelgewebe)',
                'Eintritt in periphere Nerven (NMJ)',
                'Retrograder axonaler Transport zum ZNS',
                'Replikation im Gehirn (Negri-Körperchen)',
                'Zentrifugale Ausbreitung (Speicheldrüsen, Cornea)'
              ],
              virulence_factors: ['Neurotropismus', 'Immunumgehung']
            },
            clinical: {
              incubation: '1-3 Monate (Tage bis Jahre)',
              onset: 'Akut neurologisch nach Prodrom',
              symptoms: [
                { name: 'Prodrom', description: 'Parästhesie/Schmerz an der Bissstelle (50-80%)', severity: 'moderate' },
                { name: 'Enzephalitische Form (wütend)', description: '80%: Hydrophobie (50-80%), Aerophobie, Agitiertheit', severity: 'severe' },
                { name: 'Paralytische Form (still)', description: '20%: Aufsteigende Lähmung (Guillain-Barré-ähnlich)', severity: 'severe' },
                { name: 'Hydrophobie', description: 'Kehlkopfkrampf beim Trinken/Anblick von Wasser (pathognomonisch)', severity: 'severe' },
                { name: 'Koma', description: 'Endstadium, Tod', severity: 'severe' }
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
              prevention: ['PEP: Wundreinigung + Impfstoff (0, 3, 7, 14 Tage) + RIG (Immunglobulin)', 'Tierimpfung', 'Präexpositionsprophylaxe (Reisende, Berufstätige)']
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
            pathogen: { type: 'Bakterium', name: 'Bacillus anthracis', gram: 'Gram-positiv', shape: 'sporenbildendes Stäbchen' },
            epidemiology: {
              incidence: 'Selten, Bioterrorismus-Risiko',
              risk_groups: ['Lederverarbeiter / Gerber', 'Viehzüchter', 'Laboranten'],
              seasonality: 'Keine',
              transmission: 'Sporeninokulation (Haut), Inhalation, Ingestion'
            },
            pathomechanism: {
              steps: [
                'Sporeneintritt → Keimung',
                'Toxinproduktion (Ödemtoxin, Letaltoxin)',
                'Kapsel (Phagozytosehemmung)',
                'Gewebenekrose, Ödem, systemische Toxizität'
              ],
              virulence_factors: ['Poly-D-Glutaminsäure-Kapsel', 'Protektives Antigen (PA)', 'Ödemfaktor (EF)', 'Letalfaktor (LF)']
            },
            clinical: {
              incubation: 'Haut: 1-7 Tage; Inhalation: 1-60 Tage',
              onset: 'Formabhängig',
              symptoms: [
                { name: 'Hautmilzbrand', description: '95% der natürlichen Fälle; Schmerzloser schwarzer Schorf (Eschar)', severity: 'moderate' },
                { name: 'Lungenmilzbrand', description: 'Selten; Biphasisch: grippeähnlich → fulminante Mediastinitis/Schock', severity: 'severe' },
                { name: 'Magen-Darm-Milzbrand', description: 'Selten; Bauchschmerzen, blutiger Durchfall, Aszites', severity: 'severe' },
                { name: 'Meningitis', description: 'Hämorrhagische Meningitis (kann jede Form komplizieren)', severity: 'severe' }
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
                  { drug: 'Ciprofloxacin', dose: '2x500mg', duration: '60 Tage', note: 'Hautmilzbrand (60 Tage bei Bioterror-Verdacht)' },
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '60 Tage', note: 'Alternative' }
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
            }
          }
        ]
      },
});