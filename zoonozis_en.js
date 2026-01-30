Object.assign(window.diseases, {
      zoonotic: {
        name: 'Zoonoses',
        icon: '🐾',
        color: '#059669',
        diseases: [
          {
            id: 'leptospirosis',
            name: 'Leptospirosis',
            pathogen: { type: 'Spirochete', name: 'Leptospira interrogans', gram: 'Gram-negative', shape: 'spiral, hooked' },
            epidemiology: {
              incidence: 'Tropical/subtropical: 10-100/100,000; Temperate: 0.1-1/100,000',
              risk_groups: ['Agricultural workers', 'Veterinarians', 'Slaughterhouse workers', 'Sewer workers', 'Water sports/extreme sports competitors', 'Soldiers (jungle environment)'],
              seasonality: 'Summer-autumn, rainy season',
              transmission: 'Exposure to contaminated water/soil → skin/mucosa. Spread by urine of rodents/animals'
            },
            pathomechanism: {
              steps: [
                'Leptospira enters through damaged skin/mucosa',
                'Rapid hematogenous spread to all organs',
                'Endothelial damage → increased vascular permeability',
                'Liver, kidney, lung involvement',
                'Weil\'s disease: severe form - liver and kidney failure, hemorrhages',
                'Immune-mediated inflammation (T-cell activation)'
              ],
              virulence_factors: ['Outer membrane proteins (LipL32)', 'Flagellum (motility)', 'Hemolysins', 'Lipopolysaccharide', 'Adhesins']
            },
            clinical: {
              incubation: '2-30 days (average 7-12 days)',
              onset: 'Biphasic course',
              symptoms: [
                { name: 'Sudden fever', description: 'Present in >95% (39-40°C), with chills', severity: 'severe' },
                { name: 'Headache', description: '>95%, severe, frontal/retrobulbar', severity: 'severe' },
                { name: 'Myalgia', description: '>80%, mainly calf and lumbar region (characteristic!)', severity: 'severe' },
                { name: 'Conjunctival suffusion', description: '30-40%, but very specific (without jaundice)', severity: 'moderate' },
                { name: 'Jaundice', description: '5-10% (Weil\'s disease)', severity: 'severe' },
                { name: 'Hemorrhagic manifestations', description: '30-40% in severe form (pulmonary hemorrhage, petechiae)', severity: 'severe' }
              ],
              physical_exam: [
                'High fever, tachycardia',
                'Conjunctival suffusion (conjunctival injection)',
                'Lymphadenopathy',
                'Hepatomegaly (Weil)',
                'Calf tenderness',
                'Jaundice (severe)',
                'Meningeal signs (25%)'
              ],
              complications: ['Weil\'s disease (jaundice, renal failure)', 'ARDS', 'Myocarditis', 'Rhabdomyolysis', 'Uveitis (late)', 'Aseptic meningitis', 'Death (5-15% in severe cases)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis, thrombocytopenia', interpretation: 'Non-specific' },
                { test: 'Kidney', finding: 'Creatinine↑, proteinuria, hematuria', interpretation: 'Weil\'s disease' },
                { test: 'Liver', finding: 'Bilirubin↑↑ (direct), mild transaminase↑', interpretation: 'Cholestatic pattern' },
                { test: 'CK', finding: 'Elevated', interpretation: 'Myositis' },
                { test: 'CRP/ESR', finding: 'Markedly elevated', interpretation: 'Inflammation' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Diffuse infiltrate, alveolar hemorrhage', significance: 'Pulmonary hemorrhage' },
                { modality: 'Abdominal US', finding: 'Hepatomegaly, ascites', significance: 'Severity assessment' }
              ],
              microbiology: [
                { test: 'Microscopic Agglutination Test (MAT)', finding: '≥1:400 titer or 4x↑', significance: 'Gold standard, but late (7-10 days)' },
                { test: 'ELISA IgM', finding: 'Positive', significance: 'Faster, acute phase' },
                { test: 'Blood/urine culture', finding: 'Leptospira isolation (EMJH medium)', significance: 'Early (<7 days blood, >7 days urine), slow (weeks)' },
                { test: 'PCR', finding: 'Leptospira DNA', significance: 'Rapid, sensitive in early phase' }
              ]
            },
            differential: [
              { disease: 'Dengue fever', distinguishing: 'Thrombocytopenia more prominent, tourniquet test+, no calf pain' },
              { disease: 'Malaria', finding: 'Plasmodium smear, peripheral blood, periodicity of chills' },
              { disease: 'Hantavirus', distinguishing: 'Rodent exposure, proteinuria more severe, thrombocytopenia' },
              { disease: 'Rickettsiosis', distinguishing: 'Rash characteristic, eschar, tick exposure' },
              { disease: 'Viral hepatitis', distinguishing: 'Transaminases much higher, serology' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycycline', dose: '2x100mg PO', duration: '7 days', note: 'First choice in mild cases' },
                  { drug: 'Amoxicillin', dose: '3x500mg PO', duration: '7 days', note: 'Alternative (pregnant, child)' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '6x1.5 million IU IV', duration: '7 days', note: 'Severe/Weil\'s disease' },
                  { drug: 'Ceftriaxone', dose: '1x1-2g IV', duration: '7 days', note: 'Alternative' }
                ],
                icu: [
                  { drug: 'Penicillin G', dose: '6x1.5 million IU IV', duration: '7 days', note: 'Severe Weil\'s disease' },
                  { drug: 'Dialysis', dose: 'If renal failure', duration: '', note: 'Supportive' },
                  { drug: 'Ventilation', dose: 'Pulmonary hemorrhage', duration: '', note: 'ARDS' }
                ]
              },
              targeted: 'Mild: Doxycycline; Severe: Penicillin G or Ceftriaxone',
              supportive: ['Fluid replacement', 'Dialysis (renal failure)', 'Ventilation (ARDS)', 'Transfusion (hemorrhage)'],
              prevention: ['Doxycycline chemoprophylaxis (200mg/week extreme sports)', 'Protective clothing in high-risk work', 'Rodent control', 'Animal vaccination (dog)', 'Water source sanitation']
            },
            prognosis: {
              mortality: 'Mild: <1%; Weil\'s disease: 5-15%; Pulmonary hemorrhage: 50%+',
              prognostic_scores: ['APACHE II', 'SOFA'],
              factors: 'Jaundice, renal failure, pulmonary hemorrhage, thrombocytopenia, age'
            }
          },
          {
            id: 'hantavirus',
            name: 'Hantavirus Infection',
            pathogen: { type: 'Virus', name: 'Hantavirus (multiple serotypes)', gram: 'Negative-sense RNA virus, Bunyaviridae', shape: 'spherical' },
            epidemiology: {
              incidence: 'Europe: HFRS 10,000+ cases/year; USA: HPS <50 cases/year',
              risk_groups: ['Agricultural workers', 'Foresters', 'Soldiers', 'Campers/hikers', 'Rodent contact work', 'Cleaning poorly ventilated buildings'],
              seasonality: 'Spring-autumn (rodent population peak)',
              transmission: 'Aerosol (rodent feces/urine/saliva). NOT person-to-person!'
            },
            pathomechanism: {
              steps: [
                'Hantavirus inhalation (rodent excreta dust)',
                'Virus infects endothelial cells (not cytopathic)',
                'Immune-mediated vascular permeability increase',
                'HFRS: kidney involvement (capillary leak syndrome)',
                'HPS: pulmonary capillary leak → pulmonary edema, cardiogenic shock',
                'Thrombocytopenia and coagulation disorders'
              ],
              virulence_factors: ['Nucleocapsid protein (immune response)', 'Glycoprotein Gn/Gc (cell entry)', 'Endothelial tropism', 'Immunomodulation']
            },
            clinical: {
              incubation: '1-8 weeks (average 2-4 weeks)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Fever', description: '100%, sudden onset (39-41°C)', severity: 'severe' },
                { name: 'Myalgia', description: '85-100% (back, thighs)', severity: 'moderate' },
                { name: 'Headache', description: '>90%', severity: 'severe' },
                { name: 'Abdominal pain', description: '30-50% (more common in HFRS)', severity: 'severe' },
                { name: 'Vision problems', description: '20-30% (HFRS - transient myopia)', severity: 'moderate' },
                { name: 'HPS symptoms', description: 'Cough, dyspnea (>90% at end of prodrome)', severity: 'severe' },
                { name: 'HFRS symptoms', description: 'Oliguria/anuria, flank pain', severity: 'severe' }
              ],
              physical_exam: [
                'High fever',
                'Facial flush',
                'Conjunctival injection',
                'Petechiae (palate, axilla)',
                'Proteinuria, hematuria',
                'Hypotension (HPS)',
                'Pulmonary edema signs (HPS)'
              ],
              complications: ['Acute renal failure (HFRS)', 'Cardiogenic pulmonary edema (HPS)', 'Shock', 'Intracranial hemorrhage', 'Pituitary hemorrhage', 'Death (HFRS 1-15%, HPS 30-50%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Thrombocytopenia (<100 G/L), leukocytosis, atypical lymphocytes', interpretation: 'Characteristic triad!' },
                { test: 'Kidney', finding: 'Creatinine↑↑, BUN↑, proteinuria+++, hematuria', interpretation: 'HFRS' },
                { test: 'Hemoconcentration', finding: 'Hematocrit↑', interpretation: 'Capillary leak (HPS)' },
                { test: 'Coagulation', finding: 'DIC signs possible', interpretation: 'Severe case' },
                { test: 'Liver enzymes', finding: 'Mild AST/ALT↑', interpretation: 'Common' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Bilateral interstitial infiltrates, pleural effusion', significance: 'HPS' },
                { modality: 'Abdominal US', finding: 'Renal enlargement, echogenicity↑, ascites', significance: 'HFRS' }
              ],
              microbiology: [
                { test: 'ELISA IgM/IgG', finding: 'Hantavirus specific antibodies', significance: 'Gold standard, early positive (3-7 days)' },
                { test: 'RT-PCR', finding: 'Viral RNA (blood, urine)', significance: 'Early phase, serotyping' },
                { test: 'Immunohistochemistry', finding: 'Tissue viral antigen', significance: 'Research, autopsy' }
              ]
            },
            differential: [
              { disease: 'Leptospirosis', distinguishing: 'Calf pain, conjunctival suffusion, water exposure' },
              { disease: 'Rickettsiosis', distinguishing: 'Rash, eschar, tick exposure' },
              { disease: 'Acute glomerulonephritis', distinguishing: 'Edema, hypertension, Streptococcus history' },
              { disease: 'Septic shock', distinguishing: 'High PCT, positive culture' },
              { disease: 'Influenza severe pneumonia', distinguishing: 'Seasonality, no thrombocytopenia/proteinuria' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'NO specific antiviral', dose: 'Supportive care', duration: '', note: 'Home observation in mild cases' }
                ],
                inpatient: [
                  { drug: 'Ribavirin', dose: '33mg/kg IV loading, then 16mg/kg q6h', duration: '4 days, then 8mg/kg q8h 3 days', note: 'Effective in HFRS, early phase (<5 days)' },
                  { drug: 'Fluid replacement', dose: 'Cautious! Due to capillary leak', duration: '', note: 'Monitoring' }
                ],
                icu: [
                  { drug: 'Dialysis', dose: 'Renal failure', duration: '', note: 'HFRS' },
                  { drug: 'Invasive ventilation + ECMO', dose: 'HPS', duration: '', note: 'Cardiogenic shock' },
                  { drug: 'Inotropic support', dose: 'Dobutamine, norepinephrine', duration: '', note: 'HPS shock phase' }
                ]
              },
              targeted: 'Ribavirin in HFRS early phase; efficacy not proven in HPS',
              supportive: ['Cautious fluid therapy (capillary leak!)', 'Dialysis (renal failure)', 'Ventilation/ECMO (HPS)', 'Inotropic support', 'Transfusion (thrombocytopenia)'],
              prevention: ['Rodent control', 'Protective mask in dusty places', 'Ventilation of buildings before cleaning', 'Gloves', 'NO vaccine (experimental)']
            },
            prognosis: {
              mortality: 'HFRS: 1-15% (serotype dependent); HPS: 30-50%',
              prognostic_scores: ['APACHE II', 'Degree of thrombocytopenia'],
              factors: 'Serotype, early diagnosis, HPS vs HFRS, presence of shock'
            }
          },
          {
            id: 'lyme',
            name: 'Lyme Disease (Borreliosis)',
            pathogen: { type: 'Spirochete', name: 'Borrelia burgdorferi sensu lato', gram: 'Gram-negative', shape: 'spiral' },
            epidemiology: {
              incidence: 'USA: 476,000 cases/year; Europe: 232,000 cases/year',
              risk_groups: ['Visitors to forested areas', 'Hikers, campers', 'Foresters, hunters', 'Gardeners', 'Children (summer play)'],
              seasonality: 'April-October (tick activity)',
              transmission: 'Ixodes tick bite (>24-36 hours attached)'
            },
            pathomechanism: {
              steps: [
                'Tick bite → Borrelia inoculation',
                'Local spread in skin → erythema migrans',
                'Hematogenous dissemination (days-weeks)',
                'Early disseminated: heart, nervous system, joints',
                'Late: chronic arthritis, neuroborreliosis',
                'Spirochete antigens may persist (immune response continues)'
              ],
              virulence_factors: ['Outer surface proteins (OspA, OspC)', 'VlsE (antigenic variation)', 'Complement resistance', 'Extracellular matrix adherence']
            },
            clinical: {
              incubation: '3-30 days (average 7 days)',
              onset: 'Staged',
              symptoms: [
                { name: 'Erythema migrans (EM)', description: 'Appears in 70-80% (bullseye or homogeneous)', severity: 'moderate' },
                { name: 'General symptoms', description: 'Fever, fatigue, headache (common in early phase)', severity: 'mild' },
                { name: 'Neuroborreliosis', description: '10-15% (in untreated): Facial palsy, meningitis, radiculopathy', severity: 'severe' },
                { name: 'Lyme Carditis', description: '1-5% (in untreated): AV block', severity: 'severe' },
                { name: 'Lyme Arthritis', description: '60% (in untreated, USA): Knee joint swelling', severity: 'moderate' },
                { name: 'Borrelia lymphocytoma', description: 'Rare (<1%), earlobe/nipple (Europe)', severity: 'mild' }
              ],
              physical_exam: [
                'Early localized: EM (diameter 5-70cm, often central clearance)',
                'Multiple EM (disseminated)',
                'Lymphocytoma (earlobe, breast)',
                'Facial palsy (uni/bilateral)',
                'Meningeal signs',
                'Monoarthritis/oligoarthritis (knee)',
                'Skin atrophy (ACA)'
              ],
              complications: ['Chronic Lyme arthritis', 'Post-Lyme syndrome', 'Encephalomyelitis', 'Keratitis', 'Chronic fatigue']
            },
            diagnostics: {
              laboratory: [
                { test: 'Two-tier serology: ELISA → Western blot', finding: 'IgM (2-4 weeks), IgG (4-6 weeks)', interpretation: 'Gold standard, but can be negative in early EM!' },
                { test: 'CSF', finding: 'Lymphocytic pleocytosis, ↑protein, intrathecal Ab production', interpretation: 'Neuroborreliosis' },
                { test: 'Joint fluid', finding: 'Inflammatory (WBC >10,000), PCR+', interpretation: 'Lyme arthritis' }
              ],
              imaging: [
                { modality: 'MRI brain', finding: 'White matter lesions (neuroborreliosis)', significance: 'Rare, differential diagnosis' },
                { modality: 'ECG', finding: 'AV block (1-3 degree)', significance: 'Lyme carditis' }
              ],
              microbiology: [
                { test: 'Serology (ELISA + Western blot)', finding: 'IgM/IgG positive', significance: 'Two-tier algorithm! False positives common' },
                { test: 'PCR (joint fluid, CSF)', finding: 'Borrelia DNA', significance: 'Low sensitivity' },
                { test: 'Culture', finding: 'Not routine (takes weeks)', significance: 'Only in special cases' }
              ]
            },
            differential: [
              { disease: 'Tinea corporis (ringworm)', distinguishing: 'Does not expand, scaly, KOH microscopy' },
              { disease: 'Southern tick-associated rash illness (STARI)', distinguishing: 'Lone Star tick, serology negative' },
              { disease: 'Reactive arthritis', distinguishing: 'GI/GU infection, HLA-B27' },
              { disease: 'Rheumatoid arthritis', distinguishing: 'RF/anti-CCP positive, symmetrical' },
              { disease: 'MS', distinguishing: 'MRI pattern, oligoclonal bands' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycycline', dose: '2x100mg PO', duration: '10-14 days (EM), 14-21 days (arthritis)', note: 'First choice adult/child >8y' },
                  { drug: 'Amoxicillin', dose: '3x500mg PO', duration: '14-21 days', note: 'Pregnant, child <8y' },
                  { drug: 'Cefuroxime axetil', dose: '2x500mg PO', duration: '14-21 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxone', dose: '1x2g IV', duration: '14-28 days', note: 'Neuroborreliosis, Lyme carditis (AV block >1°)' },
                  { drug: 'Penicillin G', dose: '4x5 million IU IV', duration: '14-28 days', note: 'Alternative neuroborreliosis' }
                ],
                icu: [
                  { drug: 'Ceftriaxone', dose: '1x2g IV', duration: '28 days', note: 'Severe neuroborreliosis' },
                  { drug: 'Pacemaker (temporary)', dose: 'Complete AV block', duration: '', note: 'Carditis' }
                ]
              },
              targeted: 'Early: Doxycycline; Neuroborreliosis/Carditis: Ceftriaxone IV',
              supportive: ['Jarisch-Herxheimer reaction possible', 'NSAIDs (arthritis)', 'Temporary pacemaker (complete block)'],
              prevention: ['Protective clothing in woods', 'Repellents (DEET)', 'Tick removal <24 hours', 'Single dose doxycycline (200mg) <72 hours after bite (in endemic area)', 'No effective vaccine']
            },
            prognosis: {
              mortality: '<0.001% (Lyme carditis rare fatality)',
              prognostic_scores: ['None specific'],
              factors: 'Early treatment, stage, organ involvement, neurological/cardiac complication'
            }
          },
          {
            id: 'tularemia',
            name: 'Tularemia (Rabbit Fever)',
            pathogen: { type: 'Bacterium', name: 'Francisella tularensis', gram: 'Gram-negative', shape: 'coccobacillus, intracellular' },
            epidemiology: {
              incidence: 'USA: 100-200 cases/year; Europe: sporadic',
              risk_groups: ['Hunters', 'Leather workers', 'Agricultural workers', 'Lab workers', 'Foresters', 'Veterinarians'],
              seasonality: 'Summer (tick), winter (hunting)',
              transmission: 'Tick/fly bite, infected animal contact (rabbit, rodent), inhalation, water/food'
            },
            pathomechanism: {
              steps: [
                'Francisella enters through skin/mucosa/inhalation',
                'Phagocytosis by macrophages/dendritic cells',
                'Intracellular replication (escape from phagosome)',
                'Regional lymph nodes → necrotizing granuloma',
                'Lymphadenitis, typhoidal spread',
                'High infectivity (<10 organisms sufficient)'
              ],
              virulence_factors: ['Capsule', 'Phagosome escape (iglA-D locus)', 'LPS (toxic)', 'Siderophores', 'Intracellular survival']
            },
            clinical: {
              incubation: '3-5 days (1-14 days)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Fever', description: '>90%, sudden onset', severity: 'severe' },
                { name: 'Ulceroglandular', description: '75-85%: Painful ulcer + regional lymph node', severity: 'moderate' },
                { name: 'Glandular', description: '5-10%: Only lymph node swelling (without ulcer)', severity: 'moderate' },
                { name: 'Typhoidal', description: '5-15%: Systemic febrile illness, without localization', severity: 'severe' },
                { name: 'Pneumonia', description: '30-80% of typhoidal cases (or primary inhalation)', severity: 'severe' },
                { name: 'Oculoglandular', description: '1-2%: Conjunctivitis + lymph node', severity: 'moderate' }
              ],
              physical_exam: [
                'Ulceroglandular (75%): skin ulcer (black eschar) + tender lymph node',
                'Glandular: lymph node NO ulcer',
                'Oculoglandular: conjunctivitis, nodular lesions, lymph node',
                'Oropharyngeal: tonsillitis, cervical lymph node',
                'Typhoidal: fever, hepatosplenomegaly, NO localization',
                'Pulmonary: pneumonia signs'
              ],
              complications: ['Abscess formation (lymph node)', 'Sepsis', 'ARDS', 'Meningitis', 'Pericarditis', 'Osteomyelitis', 'Death (untreated 5-15%, treated <2%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Normal or leukopenia', interpretation: 'Non-specific' },
                { test: 'CRP/ESR', finding: 'Elevated', interpretation: 'Inflammation' },
                { test: 'Liver enzymes', finding: 'AST/ALT mild elevation', interpretation: 'Typhoidal' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Infiltrate, hilar lymphadenopathy, pleural effusion', significance: 'Pulmonary/typhoidal' },
                { modality: 'CT neck/chest', finding: 'Necrotizing lymphadenitis', significance: 'Abscess detection' }
              ],
              microbiology: [
                { test: 'Serology (agglutination)', finding: 'Titer ≥1:160 or 4x↑', significance: 'Retrospective diagnosis (2-3 weeks)' },
                { test: 'PCR', finding: 'F. tularensis DNA (ulcer, lymph node)', significance: 'Rapid, sensitive' },
                { test: 'Culture', finding: 'Special medium (BSL-3!), DANGEROUS!', significance: 'Avoid (lab infection risk)' },
                { test: 'Immunohistochemistry', finding: 'Antigen detection in tissue', significance: 'In case of biopsy' }
              ]
            },
            differential: [
              { disease: 'Lyme disease', distinguishing: 'EM rash, serology, less toxic' },
              { disease: 'Cat-scratch disease', distinguishing: 'Cat contact, Bartonella serology' },
              { disease: 'Pyogenic lymphadenitis (Staph/Strep)', distinguishing: 'Faster, responds to antibiotics, culture' },
              { disease: 'Mycobacteriosis (atypical)', distinguishing: 'Slower, AFB, culture' },
              { disease: 'Plague', distinguishing: 'Bubo even more painful, geography, Yersinia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycycline', dose: '2x100mg PO', duration: '14-21 days', note: 'Mild form first choice' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '14-21 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Streptomycin', dose: '2x7.5-10mg/kg IM', duration: '10 days', note: 'Gold standard in severe cases' },
                  { drug: 'Gentamicin', dose: '1x5mg/kg IV', duration: '10 days', note: 'Streptomycin not available' },
                  { drug: 'Doxycycline', dose: '2x100mg IV', duration: '14-21 days', note: 'In combination' }
                ],
                icu: [
                  { drug: 'Gentamicin + Doxycycline', dose: 'Combination', duration: '14-21 days', note: 'Typhoidal/pulmonary severe' },
                  { drug: 'Ciprofloxacin', dose: '2x400mg IV', duration: '14-21 days', note: 'Better penetration in meningitis' }
                ]
              },
              targeted: 'Aminoglycoside (Streptomycin, Gentamicin) first choice; Doxycycline/Ciprofloxacin alternative',
              supportive: ['Surgical drainage (fluctuating lymph node)', 'Fluid replacement', 'Isolation NOT required (no person-to-person spread)', 'Antipyretics'],
              prevention: ['Protective gloves when handling animals', 'Repellents (tick)', 'Proper cooking of meat', 'Vaccine (only military/lab personnel, USA)', 'Antibiotic prophylaxis after high-risk exposure (doxycycline 14 days)']
            },
            prognosis: {
              mortality: 'Untreated: 5-15%; Treated: <2%',
              prognostic_scores: ['None specific'],
              factors: 'Form (typhoidal/pulmonary worse), early treatment, age'
            }
          },
          {
            id: 'cat_scratch',
            name: 'Cat-Scratch Disease',
            pathogen: { type: 'Bacterium', name: 'Bartonella henselae', gram: 'Gram-negative', shape: 'rod, intracellular' },
            epidemiology: {
              incidence: 'USA: ~12,000 cases/year (estimate), underdiagnosed',
              risk_groups: ['Children <10 years', 'Cat contact', 'Flea exposure', 'Immunosuppressed (HIV)', 'Veterinarians, shelter workers'],
              seasonality: 'Autumn-winter (kittens)',
              transmission: 'Cat scratch/bite (95%), rarely dog, flea'
            },
            pathomechanism: {
              steps: [
                'Bartonella inoculation with cat saliva (scratch/bite)',
                'Local inoculation papule/pustule',
                'Regional lymph node invasion',
                'Granulomatous lymphadenitis (with stellate necrosis)',
                'Rare dissemination (immunosuppressed): bacillary angiomatosis, endocarditis',
                'Immune response usually eradicates (weeks-months)'
              ],
              virulence_factors: ['Flagellum', 'Pili', 'Adhesins', 'BadA autotransporter', 'Intracellular survival (erythrocytes, endothelium)']
            },
            clinical: {
              incubation: '3-10 days (papule), 1-3 weeks (lymphadenitis)',
              onset: 'Subacute',
              symptoms: [
                { name: 'Lymphadenopathy', description: '85-90%: Regional, painful lymph node swelling', severity: 'moderate' },
                { name: 'Inoculation lesion', description: '25-60%: Papule/pustule at scratch site', severity: 'mild' },
                { name: 'Fever', description: '30-50%, usually mild', severity: 'mild' },
                { name: 'Systemic symptoms', description: 'Fatigue, malaise (50%)', severity: 'mild' },
                { name: 'Parinaud syndrome', description: '2-8%: Conjunctivitis + preauricular node', severity: 'moderate' },
                { name: 'Neuroretinitis', description: '1-2%: Unilateral vision loss', severity: 'severe' }
              ],
              physical_exam: [
                'Papule/pustule at scratch site (heals, scars)',
                'Unilateral regional lymphadenomegaly (axillary, epitrochlear, cervical)',
                'Lymph node: tender, 1-5cm, warm',
                'Fluctuant (10-15%) → suppurative',
                'Parinaud syndrome: conjunctivitis, preauricular lymph node',
                'Hepatosplenomegaly (disseminated)'
              ],
              complications: ['Lymph node abscess formation', 'Encephalitis/encephalopathy', 'Osteomyelitis', 'Endocarditis (rare)', 'Bacillary angiomatosis (HIV+)', 'Neuroretinitis', 'Peliosis hepatis']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Normal or mild leukocytosis', interpretation: 'Non-specific' },
                { test: 'CRP/ESR', finding: 'Mild-moderate elevation', interpretation: 'Inflammation' },
                { test: 'Liver/spleen enzymes', finding: 'Elevated (disseminated)', interpretation: 'Hepatosplenic involvement' }
              ],
              imaging: [
                { modality: 'US (lymph node)', finding: 'Enlarged, hypoechoic, fluctuant (abscess)', significance: 'Need for drainage' },
                { modality: 'CT/MRI', finding: 'Spleen/liver lesions (bacillary angiomatosis)', significance: 'Disseminated disease' }
              ],
              microbiology: [
                { test: 'Bartonella serology (IgG/IgM)', finding: 'IgG ≥1:256 (acute), ≥1:512 (endocarditis)', significance: 'Gold standard, 2-6 weeks positive' },
                { test: 'PCR (lymph node biopsy)', finding: 'Bartonella DNA', significance: 'Sensitive, rapid' },
                { test: 'Warthin-Starry silver stain', finding: 'Bacilli in tissue sample', significance: 'Histology' },
                { test: 'Blood culture (special)', finding: 'Slow growth (6-8 weeks), difficult', significance: 'Endocarditis' }
              ]
            },
            differential: [
              { disease: 'Pyogenic lymphadenitis (Staph/Strep)', distinguishing: 'Faster onset, rapid response to antibiotics' },
              { disease: 'Toxoplasmosis', distinguishing: 'Bilateral cervical lymph node, serology' },
              { disease: 'Mycobacteriosis (atypical)', distinguishing: 'AFB positive, slower, culture' },
              { disease: 'Tularemia', distinguishing: 'Wild animal exposure, ulcer more severe, serology' },
              { disease: 'Lymphoma', distinguishing: 'Progressive, biopsy' },
              { disease: 'Mononucleosis', distinguishing: 'Sore throat, splenomegaly, monospot/EBV serology' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg D1, then 250mg/day', duration: '5 days', note: 'First choice, reduces lymph node size' },
                  { drug: 'Doxycycline', dose: '2x100mg PO', duration: '4-6 weeks', note: 'Alternative in adults' },
                  { drug: 'OBSERVATION', dose: 'Self-limiting disease', duration: '2-4 months', note: 'Antibiotics not necessarily needed in mild cases' }
                ],
                inpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg IV', duration: '5 days, then PO', note: 'If PO not tolerated' },
                  { drug: 'Doxycycline + Rifampicin', dose: '2x100mg + 2x300mg PO', duration: '4-6 weeks', note: 'Neuroretinitis' }
                ],
                icu: [
                  { drug: 'Gentamicin + Doxycycline', dose: '3mg/kg/day IV + 2x100mg PO/IV', duration: '6 weeks', note: 'Endocarditis' },
                  { drug: 'Surgery', dose: 'Valve replacement', duration: '', note: 'Bartonella endocarditis' }
                ]
              },
              targeted: 'Typical CSD: Azithromycin (optional); Neuroretinitis/severe: Doxycycline±Rifampicin; Endocarditis: Gentamicin+Doxycycline±surgery',
              supportive: ['Surgical drainage (fluctuating lymph node)', 'Analgesics', 'Warm compresses', 'NO INCISIONAL BIOPSY (scarring, sinus formation)'],
              prevention: ['Cat flea control', 'Avoid scratches/bites (play)', 'Hand washing after touching cat', 'Wound disinfection', 'Immunosuppressed: avoid cats']
            },
            prognosis: {
              mortality: '<1% (endocarditis rare)',
              prognostic_scores: ['None'],
              factors: 'Immune status (HIV: bacillary angiomatosis), complications (endocarditis), age'
            }
          },
          {
            id: 'q_fever_zoo',
            name: 'Q Fever',
            pathogen: { type: 'Bacterium', name: 'Coxiella burnetii', gram: 'Gram-negative (intracellular)', shape: 'coccobacillus' },
            epidemiology: {
              incidence: 'Zoonosis, occupational disease',
              risk_groups: ['Livestock farmers', 'Slaughterhouse workers', 'Veterinarians'],
              seasonality: 'Spring (birthing season)',
              transmission: 'Aerosol (placenta, amniotic fluid, milk, feces dust)'
            },
            pathomechanism: {
              steps: [
                'Inhalation (a single bacterium can infect!)',
                'Infection of alveolar macrophages',
                'Replication in acidic phagosomes',
                'Hematogenous spread',
                'Granuloma formation (doughnut granuloma)'
              ],
              virulence_factors: ['Spore-like form (resistant)', 'LPS phase variation']
            },
            clinical: {
              incubation: '2-3 weeks',
              onset: 'Sudden',
              symptoms: [
                { name: 'Acute Q fever', description: 'Flu-like: Fever, fatigue, severe headache (>90% in symptomatic)', severity: 'severe' },
                { name: 'Hepatitis', description: '60-75% (granulomatous), hepatomegaly', severity: 'moderate' },
                { name: 'Pneumonia', description: '30-50% (atypical), often mild cough', severity: 'moderate' },
                { name: 'Chronic Q fever', description: '<5% after acute case; Endocarditis (60-70% in chronic)', severity: 'severe' }
              ],
              physical_exam: [
                'Hepatomegaly',
                'Splenomegaly',
                'Relative bradycardia'
              ],
              complications: ['Chronic Q fever (Endocarditis)', 'Osteomyelitis', 'Chronic hepatitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Liver enzymes', finding: 'Elevated', interpretation: 'Hepatitis' },
                { test: 'Thrombocytopenia', finding: 'Mild', interpretation: 'Common' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Round opacities, multiple', significance: 'Pneumonia' },
                { modality: 'Echo', finding: 'Vegetation', significance: 'Endocarditis (chronic)' }
              ],
              microbiology: [
                { test: 'Serology (IF)', finding: 'Phase II (acute), Phase I (chronic)', significance: 'Diagnostic' },
                { test: 'PCR', finding: 'From blood', significance: 'In early phase' }
              ]
            },
            differential: [
              { disease: 'Brucellosis', distinguishing: 'Undulant fever, dairy products' },
              { disease: 'Influenza', distinguishing: 'Seasonality, respiratory symptoms dominate' },
              { disease: 'Viral hepatitis', distinguishing: 'Serology' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycycline', dose: '2x100mg', duration: '14 days', note: 'Acute Q fever' }
                ],
                inpatient: [
                  { drug: 'Doxycycline', dose: '2x100mg', duration: '14 days', note: '' }
                ],
                icu: [
                  { drug: 'Doxycycline + Hydroxychloroquine', dose: 'Long-term', duration: '18-24 months', note: 'Chronic Q fever (endocarditis)' }
                ]
              },
              targeted: 'Doxycycline',
              supportive: ['Antipyretics'],
              prevention: ['Protective equipment during birthing', 'Pasteurization of milk', 'Vaccine (Australia)']
            },
            prognosis: {
              mortality: 'Acute <2%, Chronic (endocarditis) high if untreated',
              prognostic_scores: ['None'],
              factors: 'Valve defect, immunosuppression'
            }
          },
          {
            id: 'rabies',
            name: 'Rabies',
            pathogen: { type: 'Virus', name: 'Rabies lyssavirus', gram: 'RNA virus', shape: 'bullet' },
            epidemiology: {
              incidence: 'Worldwide 59,000 deaths/year (mainly Asia, Africa)',
              risk_groups: ['Animal handlers', 'Travelers to endemic areas', 'Spelunkers (bat)'],
              seasonality: 'None',
              transmission: 'Bite (saliva), scratch, mucous membrane contact'
            },
            pathomechanism: {
              steps: [
                'Inoculation (muscle tissue)',
                'Entry into peripheral nerves (NMJ)',
                'Retrograde axonal transport to CNS',
                'Replication in brain (Negri bodies)',
                'Centrifugal spread (salivary glands, cornea)'
              ],
              virulence_factors: ['Neurotropism', 'Immune evasion']
            },
            clinical: {
              incubation: '1-3 months (days to years)',
              onset: 'Acute neurological after prodrome',
              symptoms: [
                { name: 'Prodrome', description: 'Paresthesia/pain at bite site (50-80%)', severity: 'moderate' },
                { name: 'Furious (Encephalitic) form', description: '80%: Hydrophobia (50-80%), aerophobia, agitation', severity: 'severe' },
                { name: 'Paralytic (Dumb) form', description: '20%: Ascending paralysis (Guillain-Barré like)', severity: 'severe' },
                { name: 'Hydrophobia', description: 'Laryngeal spasm on drinking/seeing water (pathognomonic)', severity: 'severe' },
                { name: 'Coma', description: 'End stage, death', severity: 'severe' }
              ],
              physical_exam: [
                'Autonomic instability (hypersalivation, piloerection)',
                'Mental status change',
                'Focal neurological signs',
                'Fever'
              ],
              complications: ['Death (~100%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'No early marker', finding: '-', interpretation: 'Clinical suspicion!' }
              ],
              imaging: [
                { modality: 'MRI', finding: 'Non-specific encephalitis', significance: 'Exclusion' }
              ],
              microbiology: [
                { test: 'PCR', finding: 'Saliva, nape skin biopsy (hair follicle)', significance: 'Diagnostic (ante mortem)' },
                { test: 'Antigen detection', finding: 'Corneal impression, skin', significance: 'DFA' },
                { test: 'Serology', finding: 'CSF/serum', significance: 'Late' }
              ]
            },
            differential: [
              { disease: 'Tetanus', distinguishing: 'Trismus, no hydrophobia/pleocytosis' },
              { disease: 'Other encephalitis', distinguishing: 'No bite history, hydrophobia' },
              { disease: 'Psychiatric disorder', distinguishing: 'Fever, progression' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Post-exposure prophylaxis (PEP)', dose: 'IMMEDIATELY!', duration: '', note: 'Life-saving!' }
                ],
                inpatient: [
                  { drug: 'Palliative sedation', dose: 'Symptomatic', duration: '', note: 'In case of clinical rabies' }
                ],
                icu: [
                  { drug: 'Milwaukee protocol', dose: 'Experimental', duration: '', note: 'Not recommended routinely (unsuccessful)' }
                ]
              },
              targeted: 'No effective therapy after symptom onset.',
              supportive: ['Sedation', 'Analgesia', 'Isolation'],
              prevention: ['PEP: Wound cleaning + Vaccine (0, 3, 7, 14 days) + RIG (immunoglobulin)', 'Animal vaccination', 'Pre-exposure vaccine (travelers, professionals)']
            },
            prognosis: {
              mortality: '~100% after symptom onset',
              prognostic_scores: ['None'],
              factors: 'Bite location (head/neck worse), inoculum size'
            }
          },
          {
            id: 'anthrax',
            name: 'Anthrax',
            pathogen: { type: 'Bacterium', name: 'Bacillus anthracis', gram: 'Gram-positive', shape: 'spore-forming rod' },
            epidemiology: {
              incidence: 'Rare, bioterrorism risk',
              risk_groups: ['Leather workers / Tanners', 'Livestock farmers', 'Lab workers'],
              seasonality: 'None',
              transmission: 'Spore inoculation (skin), inhalation, ingestion'
            },
            pathomechanism: {
              steps: [
                'Spore entry → germination',
                'Toxin production (Edema toxin, Lethal toxin)',
                'Capsule (phagocytosis inhibition)',
                'Tissue necrosis, edema, systemic toxicity'
              ],
              virulence_factors: ['Poly-D-glutamic acid capsule', 'Protective Antigen (PA)', 'Edema Factor (EF)', 'Lethal Factor (LF)']
            },
            clinical: {
              incubation: 'Skin: 1-7 days; Inhalational: 1-60 days',
              onset: 'Form dependent',
              symptoms: [
                { name: 'Cutaneous anthrax', description: '95% of natural cases; Painless black eschar', severity: 'moderate' },
                { name: 'Inhalational anthrax', description: 'Rare; Biphasic: flu-like → fulminant mediastinitis/shock', severity: 'severe' },
                { name: 'GI anthrax', description: 'Rare; Abdominal pain, bloody diarrhea, ascites', severity: 'severe' },
                { name: 'Meningitis', description: 'Hemorrhagic meningitis (can complicate any form)', severity: 'severe' }
              ],
              physical_exam: [
                'Malignant pustule (black eschar, edematous halo)',
                'Massive mediastinal edema (inhalational)',
                'Meningeal signs'
              ],
              complications: ['Septic shock', 'Meningitis', 'Mediastinitis', 'Death']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis', interpretation: 'Inflammation' },
                { test: 'Blood culture', finding: 'Gram+ rods', interpretation: 'Sepsis' }
              ],
              imaging: [
                { modality: 'Chest X-ray/CT', finding: 'Mediastinal widening (lymphadenopathy), pleural effusion', significance: 'Inhalational anthrax (pathognomonic)' }
              ],
              microbiology: [
                { test: 'Gram stain', finding: 'Large Gram+ rods ("bamboo cane")', significance: 'From vesicle fluid' },
                { test: 'PCR', finding: 'Positive', significance: 'Rapid' },
                { test: 'DFA', finding: 'Capsule antigen', significance: 'Confirmation' }
              ]
            },
            differential: [
              { disease: 'Spider bite', distinguishing: 'Painful, no eschar' },
              { disease: 'Tularemia', distinguishing: 'Painful ulcer' },
              { disease: 'Pneumonia', distinguishing: 'Lack of mediastinal widening' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Ciprofloxacin', dose: '2x500mg', duration: '60 days', note: 'Cutaneous anthrax (60 days if bioterror suspicion)' },
                  { drug: 'Doxycycline', dose: '2x100mg', duration: '60 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Ciprofloxacin + Meropenem + Linezolid', dose: 'IV combination', duration: 'Long', note: 'Inhalational/systemic (antitoxin also given)' }
                ],
                icu: [
                  { drug: 'Raxibacumab', dose: 'Monoclonal antibody', duration: 'Single', note: 'Toxin neutralization' }
                ]
              },
              targeted: 'Ciprofloxacin, Doxycycline, Penicillin G (if sensitive)',
              supportive: ['Fluid replacement', 'Ventilation', 'Pleural drainage'],
              prevention: ['Vaccine (soldiers, high risk)', 'PEP (Ciprofloxacin 60 days)', 'Burning animal carcasses']
            },
            prognosis: {
              mortality: 'Cutaneous: <1% (treated), 20% (untreated); Inhalational: >85% (untreated), 45% (treated)',
              prognostic_scores: ['None'],
              factors: 'Inhalational form, delayed treatment, meningitis'
            }
          }
        ]
      },
});
