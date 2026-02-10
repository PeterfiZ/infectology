Object.assign(window.diseases, {
      zoonotic: {
        name: 'Zoonoses',
        icon: '🐾',
        color: '#059669',
        diseases: [
          {
            id: 'leptospirosis',
            name: 'Leptospirosis',
            pathogen: { type: 'Spirochete', name: '<i>Leptospira interrogans</i>', gram: 'Gram-negative', shape: 'spiral, hooked' },
            epidemiology: {
              incidence: 'Tropical/subtropical: 10-100/100,000; Temperate: 0.1-1/100,000',
              risk_groups: ['Agricultural workers', 'Veterinarians', 'Slaughterhouse workers', 'Sewer workers', 'Participants in water sports/extreme sports', 'Soldiers (jungle environment)'],
              seasonality: 'Summer-autumn, rainy season',
              transmission: 'Exposure to contaminated water/soil → skin/mucosa. Spread via urine of rodents/animals'
            },
            pathomechanism: {
              steps: [
                'Leptospira bacteria survive in water or soil contaminated with the urine of infected animals (especially rodents). The pathogen enters the body through broken skin or mucous membranes (eyes, nose, mouth).',
                'After entry, the bacteria rapidly enter the bloodstream (hematogenous spread) and reach almost all organs, particularly the liver, kidneys, lungs, and central nervous system.',
                'The pathogen damages the endothelial cells of blood vessels, leading to increased vascular permeability, fluid leakage, and hemorrhages.',
                'The severe form, Weil\'s disease, is characterized by the triad of liver and kidney failure, jaundice (icterus), and severe hemorrhagic complications (e.g., pulmonary hemorrhage).',
                'Some clinical symptoms are caused by the host\'s intense, immune-mediated inflammatory response rather than the direct toxic effect of the bacterium.'
              ],
              virulence_factors: ['Outer membrane proteins (LipL32)', 'Flagellum (motility)', 'Hemolysins', 'Lipopolysaccharide', 'Adhesins']
            },
            clinical: {
              incubation: '2-30 days (average 7-12 days)',
              onset: 'Biphasic course',
              symptoms: [
                { name: 'Acute/Septic Phase (First Week)', description: 'Sudden onset of high fever with chills, intense headache, and characteristic, excruciating muscle pain, especially in the calves and lower back. Conjunctival suffusion (redness of the eyes without purulent discharge) is common.', severity: 'severe' },
                { name: 'Immune Phase (Second Week)', description: 'A brief improvement may follow the first phase, then symptoms return due to the immune response. This is when aseptic meningitis, uveitis, and organ manifestations can appear.', severity: 'moderate' },
                { name: 'Weil\'s Disease (Severe Form)', description: 'Develops in 5-10% of patients. It is characterized by jaundice, renal failure (acute tubular necrosis), and hemorrhagic complications like pulmonary hemorrhage, which has a high mortality rate.', severity: 'severe' }
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
                  { drug: 'Doxycycline', dose: '100 mg PO twice daily', duration: '7 days', note: 'First choice in mild cases' },
                  { drug: 'Amoxicillin', dose: '500 mg PO 3 times daily', duration: '7 days', note: 'Alternative (pregnant, child)' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '1.5 million IU IV every 4 hours', duration: '7 days', note: 'Severe/Weil\'s disease' },
                  { drug: 'Ceftriaxone', dose: '1-2 g IV once daily', duration: '7 days', note: 'Alternative' }
                ],
                icu: [
                  { drug: 'Penicillin G', dose: '1.5 million IU IV every 4 hours', duration: '7 days', note: 'Severe Weil\'s disease' },
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
            pathogen: { type: 'Virus', name: '<i>Hantavirus</i> (multiple serotypes)', gram: 'Negative-sense RNA virus, Bunyaviridae', shape: 'spherical' },
            epidemiology: {
              incidence: 'Europe: HFRS 10,000+ cases/year; USA: HPS <50 cases/year',
              risk_groups: ['Agricultural workers', 'Foresters', 'Soldiers', 'Campers/hikers', 'Occupations with rodent contact', 'Cleaning poorly ventilated buildings'],
              seasonality: 'Spring-autumn (rodent population peak)',
              transmission: 'Aerosol (rodent feces/urine/saliva). NOT person-to-person!'
            },
            pathomechanism: {
              steps: [
                'Infection occurs through inhalation of aerosolized dust contaminated with dried urine, feces, or saliva of rodents (e.g., bank vole). Person-to-person transmission does not occur.',
                'The virus enters the bloodstream via the lungs and specifically infects endothelial cells lining the blood vessels, without causing direct cell death.',
                'The main damage is caused by the body\'s excessive immune response. Activated T-cells and cytokines (TNF-alpha) loosen the junctions between endothelial cells, leading to capillary leak.',
                'HFRS (Hemorrhagic Fever with Renal Syndrome): The capillary leak primarily occurs in the kidneys, leading to acute renal failure, proteinuria, and hemorrhages.',
                'HPS (Hantavirus Pulmonary Syndrome): The leak is dominant in the lungs, leading to rapidly progressing, non-cardiogenic pulmonary edema and cardiogenic shock. Thrombocytopenia and hemoconcentration are key laboratory signs.'
              ],
              virulence_factors: ['Nucleocapsid protein (immune response)', 'Glycoprotein Gn/Gc (cell entry)', 'Endothelial tropism', 'Immunomodulation']
            },
            clinical: {
              incubation: '1-8 weeks (average 2-4 weeks)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Prodromal Phase (3-5 days)', description: 'Sudden onset of high fever, chills, severe headache, and muscle pain (especially back and thighs). Facial flushing and conjunctival injection are common.', severity: 'severe' },
                { name: 'HFRS (Renal Involvement)', description: 'The febrile phase is followed by hypotension, then oliguria/anuria. Severe flank pain, massive proteinuria, and thrombocytopenia are characteristic. Polyuria occurs during the recovery phase.', severity: 'severe' },
                { name: 'HPS (Pulmonary Involvement)', description: 'After the prodromal phase, a rapidly progressing cough and shortness of breath develop, leading to severe, non-cardiogenic pulmonary edema and cardiogenic shock within hours. High mortality rate.', severity: 'severe' }
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
                  { drug: 'Ribavirin', dose: '33 mg/kg IV loading, then 16 mg/kg every 6 hours', duration: 'for 4 days, then 8 mg/kg every 8 hours for 3 days', note: 'Effective in HFRS, early phase (<5 days)' },
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
            pathogen: { type: 'Spirochaete', name: '<i>Borrelia burgdorferi sensu lato</i>', gram: 'Gram-negative', shape: 'spiral' },
            epidemiology: {
              incidence: 'USA: 476,000 cases/year; Europe: 232,000 cases/year. Common and endemic in Hungary.',
              risk_groups: ['Visitors to wooded areas', 'Hikers, campers', 'Foresters, hunters', 'Gardeners', 'Children'],
              seasonality: 'From spring to autumn (tick activity)',
              transmission: 'Ixodes ricinus tick bite (usually >24 hours of feeding required)'
            },
            pathomechanism: {
              steps: [
                'During the feeding of an infected Ixodes tick, Borrelia spirochetes are transmitted from the tick\'s salivary glands into the host\'s skin (usually requires >24 hours of attachment).',
                'The bacteria replicate locally in the skin and spread centrifugally, creating the characteristic Erythema migrans (EM) rash.',
                'The pathogens disseminate via the bloodstream (hematogenous) and lymphatic system to distant organs (heart, nervous system, joints, skin).',
                'The bacteria can evade the immune system (antigenic variation, complement inhibition), allowing for persistence and the development of chronic inflammation.',
                'Tissue damage is primarily caused not by toxins but by the host\'s inflammatory response (cytokines, immune complexes).'
              ],
              virulence_factors: ['Osp (Outer surface proteins)', 'VlsE (antigenic variation)', 'Motility']
            },
            clinical: {
              incubation: 'EM: 3-30 days (average 7-14 days)',
              onset: 'Staged',
              symptoms: [
                { name: 'Early Localized Stage (Erythema Migrans)', description: 'A painless, slowly expanding (>5 cm) rash at the site of the tick bite, often target-like (but can be uniform). This is the most common symptom and allows for a clinical diagnosis. It may be accompanied by general flu-like symptoms (fever, headache, myalgia).', severity: 'moderate' },
                { name: 'Early Disseminated Stage (Organs)', description: 'Occurs weeks to months after bacterial spread. Nervous system: Bannwarth syndrome (nocturnal radicular pain, facial palsy, meningitis). Heart: Lyme carditis (AV block, arrhythmia). Skin: Lymphocytoma (bluish-red nodule).', severity: 'severe' },
                { name: 'Late Stage (Chronic)', description: 'Months to years later. Lyme arthritis: intermittent swelling and pain of large joints (especially the knee). Skin: Acrodermatitis chronica atrophicans (ACA) - livid discoloration and atrophy of the extensor surfaces of the limbs.', severity: 'moderate' }
              ],
              physical_exam: [
                'Erythema migrans: >5 cm in diameter, expanding erythema',
                'Facial paresis (can be bilateral)',
                'Meningeal signs (mild)',
                'Joint swelling (knee)',
                'ACA: cigarette paper-like skin'
              ],
              complications: ['Chronic arthritis', 'Post-Lyme disease syndrome (subjective complaints)', 'Chronic neuroborreliosis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Two-tier serology (ELISA + Western blot)', finding: 'IgM (2-4 weeks), IgG (4-6 weeks)', interpretation: 'Two-tier! NOT recommended in EM stage (clinical dx, may still be negative). Indicated in disseminated/late stages.' },
                { test: 'CSF', finding: 'Lymphocytic pleocytosis, intrathecal antibody synthesis (AI > 1.5)', interpretation: 'Confirmation of neuroborreliosis' }
              ],
              imaging: [
                { modality: 'ECG', finding: 'AV block', significance: 'In case of suspected carditis' }
              ],
              microbiology: [
                { test: 'Tick testing', finding: 'NOT recommended', significance: 'No clinical relevance for treatment' },
                { test: 'PCR', finding: 'Borrelia DNA', significance: 'May be useful from synovial fluid or skin biopsy (ACA). Low sensitivity from blood/CSF.' }
              ]
            },
            differential: [
              { disease: 'Erysipelas/Cellulitis', distinguishing: 'Fever, pain, rapid spread, leukocytosis' },
              { disease: 'Tinea corporis', distinguishing: 'Scaling border, itching, KOH positive' },
              { disease: 'Other arthritis', distinguishing: 'Septic (fever, pus), RA (symmetrical, serology)' },
              { disease: 'Multiple sclerosis', distinguishing: 'MRI, CSF oligoclonal bands' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycycline', dose: '100 mg BID PO', duration: '14-21 days (EM: 10-14 days)', note: 'First choice (EM, Neuroborreliosis, Carditis, Arthritis, ACA). Can also be given to children.' },
                  { drug: 'Amoxicillin', dose: '500-1000 mg TID PO', duration: '14-21 days', note: 'Alternative (EM, Arthritis, ACA, pregnancy)' },
                  { drug: 'Cefuroxime axetil', dose: '500 mg BID PO', duration: '14-21 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxone', dose: '2 g QD IV', duration: '14-28 days', note: 'Severe neuroborreliosis (e.g., encephalitis), carditis (high-grade block), refractory arthritis' }
                ]
              },
              targeted: 'Early localized (EM): Doxycycline 10 days. Neuroborreliosis (Bannwarth): Doxycycline PO (as effective as IV Ceftriaxone!) 14 days. Arthritis: Doxycycline 28 days. Post-Lyme Disease Syndrome: Prolonged antibiotics are NOT recommended (ineffective). Symptomatic treatment.',
              supportive: ['Symptomatic treatment', 'Physiotherapy'],
              prevention: ['Prompt tick removal', 'Protective clothing', 'Prophylactic antibiotics after a bite are NOT recommended (Hungarian guideline)']
            },
            prognosis: {
              mortality: 'Very low',
              prognostic_scores: ['None'],
              factors: 'Early recognition and treatment'
            }
          },          {
            id: 'tularemia',
            name: 'Tularemia (Rabbit Fever)',
            pathogen: { type: 'Bacterium', name: 'Francisella tularensis', gram: 'Gram-negative', shape: 'coccobacillus, intracellular' },
            epidemiology: {
              incidence: 'USA: 100-200 cases/year; Europe: sporadic',
              risk_groups: ['Hunters', 'Tanners', 'Agricultural workers', 'Lab workers', 'Foresters', 'Veterinarians'],
              seasonality: 'Summer (tick), winter (hunting)',
              transmission: 'Tick/fly bite, infected animal contact (rabbit, rodent), inhalation, water/food'
            },
            pathomechanism: {
              steps: [
                'Francisella tularensis is a highly infectious bacterium (<10 organisms are sufficient), which enters the body via tick bites, direct contact with infected animals (e.g., rabbits), or inhalation of contaminated dust.',
                'At the site of entry, the bacterium is phagocytosed by macrophages, but it can escape from the phagosome into the cytoplasm, where it multiplies.',
                'Infected macrophages migrate to regional lymph nodes, where the bacterium continues to replicate, causing painful, necrotizing granulomas and lymphadenitis.',
                'Different clinical forms develop depending on the portal of entry (e.g., ulceroglandular, pulmonary).',
                'The bacteria can spread from the lymphatic system into the bloodstream, causing systemic infection (typhoidal form) and involvement of distant organs (lungs, liver, spleen).'
              ],
              virulence_factors: ['Capsule', 'Phagosome escape (iglA-D locus)', 'LPS (toxic)', 'Siderophores', 'Intracellular survival']
            },
            clinical: {
              incubation: '3-5 days (1-14 days)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Ulceroglandular Form (75-85%)', description: 'The most common form. A painful ulcer with a black eschar develops at the portal of entry (e.g., bite site), accompanied by painful swelling of regional lymph nodes (bubo).', severity: 'moderate' },
                { name: 'Glandular Form (5-10%)', description: 'Similar to the ulceroglandular form, but the primary skin ulcer is absent; only painful lymph node swelling is present.', severity: 'moderate' },
                { name: 'Typhoidal Form (5-15%)', description: 'A severe, systemic illness with high fever, chills, and headache, but without a primary site of infection (ulcer, lymph node). Often associated with pneumonia.', severity: 'severe' },
                { name: 'Other Forms', description: 'Oculoglandular (conjunctivitis and lymph node swelling if it enters the eye), Oropharyngeal (tonsillitis if ingested), Pulmonary (atypical pneumonia if inhaled).', severity: 'moderate' }
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
                  { drug: 'Doxycycline', dose: '100 mg PO twice daily', duration: '14-21 days', note: 'Mild form first choice' },
                  { drug: 'Ciprofloxacin', dose: '500 mg PO twice daily', duration: '14-21 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Streptomycin', dose: '7.5-10 mg/kg IM twice daily', duration: '10 days', note: 'Gold standard in severe cases' },
                  { drug: 'Gentamicin', dose: '5 mg/kg IV once daily', duration: '10 days', note: 'Streptomycin not available' },
                  { drug: 'Doxycycline', dose: '100 mg IV twice daily', duration: '14-21 days', note: 'In combination' }
                ],
                icu: [
                  { drug: 'Gentamicin + Doxycycline', dose: 'Combination', duration: '14-21 days', note: 'Typhoidal/pulmonary severe' },
                  { drug: 'Ciprofloxacin', dose: '400 mg IV twice daily', duration: '14-21 days', note: 'Better penetration in meningitis' }
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
            pathogen: { type: 'Bacterium', name: '<i>Bartonella henselae</i>', gram: 'Gram-negative', shape: 'rod, intracellular' },
            epidemiology: {
              incidence: 'USA: ~12,000 cases/year (estimate), underdiagnosed',
              risk_groups: ['Children <10 years', 'Cat contact', 'Flea exposure', 'Immunocompromised (HIV)', 'Veterinarians, shelter workers'],
              seasonality: 'Autumn-winter (kittens)',
              transmission: 'Cat scratch/bite (95%), rarely dog, flea'
            },
            pathomechanism: {
              steps: [
                'The bacterium Bartonella henselae is most commonly transmitted to human skin by a scratch or bite from an infected (but asymptomatic) cat, especially a kitten. Cats infect each other via fleas.',
                'A primary lesion, a red papule or pustule, develops at the site of entry within 3-10 days.',
                'The bacteria migrate via the lymphatic vessels to the regional lymph nodes (e.g., axillary, cervical).',
                'In the lymph nodes, the pathogen creates characteristic, stellate (star-shaped) necrotizing granulomas, causing painful enlargement of the lymph nodes.',
                'In immunocompetent individuals, the infection is usually self-limiting. In the immunosuppressed (e.g., HIV), the bacterium can disseminate and cause systemic disease, such as bacillary angiomatosis (vascular proliferation) or peliosis hepatis.'
              ],
              virulence_factors: ['Flagellum', 'Pili', 'Adhesins', 'BadA autotransporter', 'Intracellular survival (erythrocytes, endothelium)']
            },
            clinical: {
              incubation: '3-10 days (papule), 1-3 weeks (lymphadenitis)',
              onset: 'Subacute',
              symptoms: [
                { name: 'Typical Form', description: 'Following a primary papule at the scratch site, unilateral, painful regional lymph node swelling develops after 1-3 weeks (most commonly in the axilla or neck). It may be accompanied by mild fever and malaise. The lymph node may suppurate.', severity: 'moderate' },
                { name: 'Parinaud Oculoglandular Syndrome', description: 'The pathogen enters through the conjunctiva, causing unilateral conjunctivitis and swelling of the preauricular lymph node.', severity: 'moderate' },
                { name: 'Atypical/Disseminated Forms', description: 'Less commonly, especially in the immunosuppressed, the infection can disseminate. It can cause neuroretinitis (vision loss), encephalitis, hepatosplenic disease (liver and spleen abscesses), or bacillary angiomatosis (vascular tumors on the skin and internal organs).', severity: 'severe' }
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
                  { drug: 'Azithromycin', dose: '500 mg on day 1, then 250 mg daily', duration: '5 days', note: 'First choice, reduces lymph node size' },
                  { drug: 'Doxycycline', dose: '100 mg PO twice daily', duration: '4-6 weeks', note: 'Alternative in adults' },
                  { drug: 'OBSERVATION', dose: 'Self-limiting disease', duration: '2-4 months', note: 'Antibiotics not necessarily needed in mild cases' }
                ],
                inpatient: [
                  { drug: 'Azithromycin', dose: '500 mg IV daily', duration: '5 days, then PO', note: 'If PO not tolerated' },
                  { drug: 'Doxycycline + Rifampicin', dose: '100 mg twice daily + 300 mg twice daily PO', duration: '4-6 weeks', note: 'Neuroretinitis' }
                ],
                icu: [
                  { drug: 'Gentamicin + Doxycycline', dose: '3 mg/kg IV daily + 100 mg PO/IV twice daily', duration: '6 weeks', note: 'Endocarditis' },
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
            pathogen: { type: 'Bacterium', name: '<i>Coxiella burnetii</i>', gram: 'Gram-negative (intracellular)', shape: 'coccobacillus' },
            epidemiology: {
              incidence: 'Zoonosis, occupational disease',
              risk_groups: ['Livestock farmers', 'Slaughterhouse workers', 'Veterinarians'],
              seasonality: 'Spring (birthing season)',
              transmission: 'Aerosol (placenta, amniotic fluid, milk, feces dust)'
            },
            pathomechanism: {
              steps: [
                'Coxiella burnetii is a highly infectious, obligate intracellular bacterium. Infection most commonly occurs by inhaling aerosol containing spore-like particles from the birthing products of infected animals (sheep, goats, cattle).',
                'After entering the lungs, the pathogen is phagocytosed by alveolar macrophages.',
                'The bacterium not only survives but also replicates within the acidic phagosomes of macrophages, creating a specialized vacuole.',
                'Upon release from infected cells, the pathogen spreads via the bloodstream (hematogenous spread) to various parts of the body, mainly the liver and bone marrow.',
                'The body attempts to contain the infection by forming characteristic "doughnut-shaped" granulomas. The disease can be acute or chronic (endocarditis).'
              ],
              virulence_factors: ['Spore-like form (resistant)', 'LPS phase variation']
            },
            clinical: {
              incubation: '2-3 weeks',
              onset: 'Sudden',
              symptoms: [
                { name: 'Acute Q Fever', description: 'About 60% of cases are asymptomatic. The symptomatic form presents with a sudden onset of high fever, severe retro-orbital headache, and flu-like symptoms. Atypical pneumonia (mild cough) and granulomatous hepatitis (elevated liver enzymes) are common.', severity: 'moderate' },
                { name: 'Chronic Q Fever', description: 'Develops months to years after the acute infection, mainly in patients with pre-existing heart valve defects or immunosuppression. The most common manifestation is culture-negative endocarditis. Other forms include vascular (aneurysm) and bone infections.', severity: 'severe' }
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
                  { drug: 'Doxycycline', dose: '100 mg twice daily', duration: '14 days', note: 'Acute Q fever' }
                ],
                inpatient: [
                  { drug: 'Doxycycline', dose: '100 mg twice daily', duration: '14 days', note: '' }
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
            pathogen: { type: 'Virus', name: '<i>Rabies lyssavirus</i>', gram: 'RNA virus', shape: 'bullet' },
            epidemiology: {
              incidence: 'Worldwide 59,000 deaths/year (mainly Asia, Africa)',
              risk_groups: ['Animal handlers', 'Travelers to endemic areas', 'Spelunkers (bat)'],
              seasonality: 'None',
              transmission: 'Bite (saliva), scratch, mucous membrane contact'
            },
            pathomechanism: {
              steps: [
                'The rabies virus is transmitted through the saliva of an infected animal (e.g., dog, fox, bat) via a bite, typically into muscle tissue.',
                'The virus initially replicates in muscle cells, then enters peripheral nerves at the neuromuscular junction (NMJ).',
                'It travels via retrograde axonal transport within nerve cells towards the central nervous system (CNS), i.e., the spinal cord and brain.',
                'In the CNS, the virus replicates rapidly, causing severe, fatal encephalitis. Characteristic inclusions, known as Negri bodies, appear in infected nerve cells.',
                'From the brain, the virus spreads centrifugally along nerves to other organs, most importantly the salivary glands, which allows for further transmission.'
              ],
              virulence_factors: ['Neurotropism', 'Immune evasion']
            },
            clinical: {
              incubation: '1-3 months (days to years)',
              onset: 'Acute neurological after prodrome',
              symptoms: [
                { name: 'Prodromal Stage', description: 'The first signs are non-specific: fever, headache, malaise. Pain, itching, or paresthesia at the bite site can be characteristic.', severity: 'moderate' },
                { name: 'Acute Neurological Stage', description: 'Two main forms exist. The "furious" (encephalitic) form (80%) involves agitation, confusion, hydrophobia (fear of water due to painful laryngeal spasms on attempting to swallow), and aerophobia (fear of drafts). The "dumb" (paralytic) form (20%) is characterized by ascending flaccid paralysis starting from the bite site.', severity: 'severe' },
                { name: 'Coma and Death', description: 'Both forms ultimately progress to coma and death from respiratory/circulatory failure, usually within 7-10 days of symptom onset.', severity: 'severe' }
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
              prevention: ['PEP: Wound cleaning + Vaccine (days 0, 3, 7, 14) + RIG (immunoglobulin)', 'Animal vaccination', 'Pre-exposure vaccine (travelers, professionals)']
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
            pathogen: { type: 'Bacterium', name: '<i>Bacillus anthracis</i>', gram: 'Gram-positive', shape: 'spore-forming rod' },
            epidemiology: {
              incidence: 'Rare, bioterrorism risk',
              risk_groups: ['Tanners', 'Livestock farmers', 'Lab workers'],
              seasonality: 'None',
              transmission: 'Spore inoculation (skin), inhalation, ingestion'
            },
            pathomechanism: {
              steps: [
                'Bacillus anthracis spores can survive in the soil for decades. Infection occurs through entry of the spores: via the skin (cutaneous), inhalation, or ingestion (gastrointestinal).',
                'In the body, spores are taken up by macrophages, where they germinate into vegetative bacteria and then travel to the lymph nodes.',
                'The bacteria have two main virulence factors: an antiphagocytic capsule that protects them from the immune system, and a three-component exotoxin.',
                'The components of the anthrax toxin are: Protective Antigen (PA), which binds to cells; Edema Factor (EF), which causes edema; and Lethal Factor (LF), which causes cell death and disrupts the cytokine response.',
                'The toxins induce massive tissue necrosis, edema, hemorrhage, and systemic shock, which is responsible for the high mortality of the disease.'
              ],
              virulence_factors: ['Poly-D-glutamic acid capsule', 'Protective Antigen (PA)', 'Edema Factor (EF)', 'Lethal Factor (LF)']
            },
            clinical: {
              incubation: 'Skin: 1-7 days; Inhalational: 1-60 days',
              onset: 'Form dependent',
              symptoms: [
                { name: 'Cutaneous Anthrax (95%)', description: 'An itchy papule appears at the site of entry, which develops into a vesicle and then a painless ulcer with a black center (eschar), surrounded by characteristic non-inflammatory edema. Without treatment, mortality is 20%.', severity: 'moderate' },
                { name: 'Inhalational (Pulmonary) Anthrax', description: 'Has a biphasic course. Initially, mild, flu-like symptoms (fever, cough). After 1-3 days, a sudden deterioration occurs: high fever, shortness of breath, shock. A characteristic finding on chest CT is mediastinal widening (hemorrhagic mediastinitis). Almost always fatal without treatment.', severity: 'severe' },
                { name: 'Gastrointestinal Anthrax', description: 'Develops after consuming infected meat. It causes nausea, vomiting, bloody diarrhea, and severe abdominal pain. High mortality rate.', severity: 'severe' }
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
                  { drug: 'Ciprofloxacin', dose: '500 mg twice daily', duration: '60 days', note: 'Cutaneous anthrax (60 days if bioterror suspicion)' },
                  { drug: 'Doxycycline', dose: '100 mg twice daily', duration: '60 days', note: 'Alternative' }
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
          },
          {
              id: 'brucellosis',
              name: 'Brucellosis (Malta Fever)',
              pathogen: { type: 'Bacterium', name: '<i>Brucella spp. (melitensis, abortus, suis)</i>', gram: 'Gram-negative', shape: 'coccobacillus' },
              epidemiology: {
                incidence: 'Endemic in Mediterranean, Middle East',
                risk_groups: ['Veterinarians', 'Shepherds', 'Abattoir workers', 'Consumers of unpasteurized dairy'],
                seasonality: 'Spring-Summer',
                transmission: 'Direct contact, inhalation, unpasteurized dairy products'
              },
              pathomechanism: {
                steps: [
                  'Entry: Bacteria enter through broken skin, conjunctiva, respiratory tract, or GI tract.',
                  'Phagocytosis: Macrophages engulf them, but bacteria survive and replicate intracellularly.',
                  'Dissemination: Infected macrophages travel to regional lymph nodes and bloodstream (bacteremia).',
                  'Organ involvement: Granulomas form in reticuloendothelial organs (liver, spleen, bone marrow, lymph nodes).'
                ],
                virulence_factors: ['LPS (smooth)', 'T4SS secretion system', 'Intracellular survival']
              },
              clinical: {
                incubation: '2-4 weeks (1 week to months)',
                onset: 'Gradual or sudden',
                symptoms: [
                  { name: 'Undulant Fever', description: 'Wavelike fever pattern (low in morning, high in afternoon) with profuse, moldy-smelling sweat.', severity: 'moderate' },
                  { name: 'Musculoskeletal', description: 'Joint pain (arthralgia), back pain (sacroiliitis), myalgia.', severity: 'moderate' },
                  { name: 'Constitutional', description: 'Fatigue, headache, depression, weight loss.', severity: 'mild' }
                ],
                physical_exam: ['Hepatomegaly', 'Splenomegaly', 'Lymphadenopathy', 'Spinal tenderness'],
                complications: ['Osteomyelitis (vertebral)', 'Endocarditis', 'Neurobrucellosis', 'Epididymo-orchitis']
              },
              diagnostics: {
                laboratory: [{ test: 'CBC', finding: 'Leukopenia, relative lymphocytosis', interpretation: '-' }, { test: 'Liver enzymes', finding: 'Mild elevation', interpretation: 'Granulomatous hepatitis' }],
                imaging: [{ modality: 'Spine MRI', finding: 'Spondylodiscitis', significance: 'If back pain present' }],
                microbiology: [
                  { test: 'Blood culture', finding: 'Brucella spp.', significance: 'Slow growth (up to 3-4 weeks), notify lab!' },
                  { test: 'Serology (Wright)', finding: 'Titer ≥1:160 or 4x rise', significance: 'Standard diagnosis' }
                ]
              },
              differential: [
                { disease: 'Typhoid fever', distinguishing: 'Rose spots, bradycardia' },
                { disease: 'Tuberculosis', distinguishing: 'Respiratory symptoms, sputum' },
                { disease: 'Malaria', distinguishing: 'Periodicity, travel' }
              ],
              therapy: {
                empirical: { outpatient: [{ drug: 'Doxycycline + Rifampicin', dose: '100mg BID + 600-900mg QD PO', duration: '6 weeks', note: 'Standard therapy' }] },
                targeted: 'Doxycycline + Rifampicin (6 weeks). Alternative: Doxycycline + Streptomycin (2-3 weeks). Neurobrucellosis/Endocarditis: Doxy + Rif + Ceftriaxone/Cotrimoxazole (months).',
                supportive: ['Symptomatic treatment'],
                prevention: ['Pasteurization of milk', 'Protective gear', 'Animal vaccination']
              },
              prognosis: { mortality: '<2% (mainly due to endocarditis)', prognostic_scores: [], factors: 'Complications, relapse common' }
            }
                     ]
                   },
});
