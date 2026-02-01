Object.assign(window.diseases, {
      bacterial_respiratory: {
        name: 'Bacterial Respiratory Infections',
        icon: window.diseaseMetadata.bacterial_respiratory.icon,
        color: window.diseaseMetadata.bacterial_respiratory.color,
        diseases: [
          {
            id: 'bacterial_pneumonia',
            name: 'Bacterial Pneumonia',
            pathogen: { type: 'Bacterium', name: 'Streptococcus pneumoniae', gram: 'Gram-positive', shape: 'diplococcus' },
            epidemiology: {
              incidence: 'Most common cause of community-acquired pneumonia (CAP) (30-40%)',
              risk_groups: ['Elderly (>65 years)', 'Patients with chronic diseases (COPD, heart failure, diabetes)', 'Immunocompromised', 'Asplenic patients', 'Patients with alcohol use disorder', 'Smokers'],
              seasonality: 'Winter-spring peak, often as influenza superinfection',
              transmission: 'Droplet infection, endogenous activation'
            },
            pathomechanism: {
              steps: [
                'Colonization: S. pneumoniae from the nasopharynx is aspirated into the lower airways',
                'Adherence: Pneumococcus surface protein A (PspA) and choline-binding proteins bind to epithelial cells',
                'Capsular polysaccharide: The capsule inhibits phagocytosis and complement activation',
                'Pneumolysin: Pore-forming toxin → cell damage, inflammation',
                'Consolidation: Alveoli fill with inflammatory exudate (red blood cells, fibrin, neutrophils)'
              ],
              virulence_factors: ['Capsular polysaccharide (93 serotypes)', 'Pneumolysin', 'Autolysin (LytA)', 'Neuraminidase', 'IgA1 protease']
            },
            clinical: {
              incubation: '1-3 days',
              onset: 'Sudden, dramatic onset',
              symptoms: [
                { name: 'Cough', description: 'Present in 90%; productive (66%), rusty sputum is classic but rare', severity: 'severe' },
                { name: 'Fever and chills', description: 'Fever (80%), chills (40-50%)', severity: 'severe' },
                { name: 'Dyspnea', description: 'Shortness of breath (66%)', severity: 'moderate' },
                { name: 'Pleuritic pain', description: 'Sharp, increases with inspiration (50%)', severity: 'moderate' },
                { name: 'Other', description: 'GI symptoms (10-20%), altered mental status (in the elderly)', severity: 'mild' }
              ],
              physical_exam: [
                'Tachypnea, tachycardia',
                'Dullness to percussion over the affected lobe',
                'Bronchial breath sounds, crepitation',
                'Increased bronchophony and tactile fremitus',
                'Cyanosis in severe cases'
              ],
              complications: ['Empyema', 'Lung abscess', 'Meningitis', 'Sepsis/septic shock', 'ARDS', 'Pericarditis']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis (15-30 G/L), left shift', interpretation: 'Typical for bacterial infection' },
                { test: 'CRP', finding: 'Significantly elevated (>100 mg/L)', interpretation: 'Marker of active inflammation' },
                { test: 'PCT', finding: '>0.5 ng/mL', interpretation: 'Suspicion of bacterial sepsis' },
                { test: 'Arterial blood gas', finding: 'Hypoxemia, possibly hypocapnia', interpretation: 'Respiratory failure' },
                { test: 'Blood culture', finding: 'Positive in 20-30%', interpretation: 'Pathogen identification' }
              ],
              imaging: [
                { modality: 'Chest X-ray (PA+lateral)', finding: 'Lobar/segmental consolidation, air bronchogram', significance: 'Typical appearance' },
                { modality: 'Chest CT', finding: 'Detailed parenchyma evaluation', significance: 'Exclusion of complications' }
              ],
              microbiology: [
                { test: 'Sputum Gram stain', finding: 'Gram+ lancet-shaped diplococci, >25 neutrophils/field', significance: 'Quick orientation' },
                { test: 'Sputum culture', finding: 'S. pneumoniae isolation', significance: 'Antibiotic susceptibility' },
                { test: 'Urine antigen test', finding: 'Pneumococcal polysaccharide detection', significance: 'Fast, specific (>90%)' },
                { test: 'PCR', finding: 'lytA gene detection', significance: 'Most sensitive method' }
              ]
            },
            differential: [
              { disease: 'Legionella pneumonia', distinguishing: 'Hyponatremia, GI symptoms, atypical X-ray' },
              { disease: 'Klebsiella pneumonia', distinguishing: 'Alcoholics, currant jelly sputum, upper lobe' },
              { disease: 'Mycoplasma pneumonia', distinguishing: 'Young people, slow onset, atypical symptoms' },
              { disease: 'Pulmonary embolism', distinguishing: 'Risk factors, D-dimer, CTPA' },
              { disease: 'Heart failure', distinguishing: 'Cardiac history, BNP, bilateral infiltrates' }
            ],
            therapy: {
              guidelines: ['NICE NG138 (Pneumonia in adults) 2024/2025', 'ATS/IDSA 2019 CAP Guidelines', 'Hungarian Society of Infectology'],
              empirical: {
                cap_outpatient: {
                    title: 'CAP - Outpatient (Mild - CURB-65 0-1)',
                    drugs: [
                        { drug: 'Amoxicillin', dose: '3x500mg-1g PO', duration: '5 days', note: 'First choice (NICE). 5-day course is usually sufficient.' },
                        { drug: 'Doxycycline', dose: '200mg stat, then 1x100mg PO', duration: '5 days', note: 'For penicillin allergy.' },
                        { drug: 'Clarithromycin', dose: '2x500mg PO', duration: '5 days', note: 'Alternative.' }
                    ]
                },
                cap_inpatient: {
                    title: 'CAP - Inpatient (Moderate - CURB-65 2)',
                    drugs: [
                        { drug: 'Amoxicillin + Clarithromycin', dose: '3x500mg-1g PO/IV + 2x500mg PO/IV', duration: '5 days', note: 'Atypical coverage may be needed. (NICE)' },
                        { drug: 'Doxycycline', dose: '200mg stat, then 1x100mg PO', duration: '5 days', note: 'Monotherapy for penicillin allergy.' },
                        { drug: 'Levofloxacin', dose: '1x500mg PO/IV', duration: '5 days', note: 'Alternative (NICE: respiratory fluoroquinolone).' }
                    ]
                },
                cap_icu: {
                    title: 'CAP - Severe (CURB-65 3-5) / ICU',
                    drugs: [
                        { drug: 'Co-amoxiclav + Clarithromycin', dose: '1.2g IV q8h + 500mg IV q12h', duration: '7-10 days', note: 'NICE recommendation for severe CAP.' },
                        { drug: 'Ceftriaxone + Clarithromycin', dose: '1x2g IV + 2x500mg IV', duration: '7-10 days', note: 'Common alternative (not NICE first-line, but widespread).' },
                        { drug: 'Levofloxacin', dose: '1x500mg IV', duration: '7-10 days', note: 'For beta-lactam allergy.' }
                    ]
                },
                hap_early: {
                    title: 'HAP - Not severe / Early',
                    drugs: [
                        { drug: 'Co-amoxiclav', dose: '625mg PO TID or 1.2g IV TID', duration: '5 days', note: 'First choice (NICE NG191).' },
                        { drug: 'Doxycycline', dose: '100mg PO', duration: '5 days', note: 'Alternative.' }
                    ]
                },
                hap_late_vap: {
                    title: 'HAP - Severe / VAP / High risk',
                    drugs: [
                        { drug: 'Antipseudomonal beta-lactam', dose: 'e.g., Piperacillin/tazobactam, Cefepime, Meropenem', duration: '7 days', note: '1st component (Gram-negative coverage).' },
                        { drug: '+ Antipseudomonal fluoroquinolone or aminoglycoside', dose: 'e.g., Ciprofloxacin, Amikacin', duration: '7 days', note: '2nd component (double G- coverage if needed).' },
                        { drug: '+ MRSA coverage', dose: 'Vancomycin or Linezolid', duration: '7 days', note: '3rd component (if MRSA risk >10-20%).' }
                    ]
                }
              },
              targeted: 'Penicillin-sensitive: Penicillin G 4x4 million IU IV; Resistant: Ceftriaxone or Vancomycin',
              supportive: ['O2 therapy (SpO2 >92%)', 'Fluid resuscitation', 'Antipyretics', 'Chest drain for empyema'],
              prevention: ['PPSV23 (23-valent polysaccharide)', 'PCV13/15/20 (conjugate)', 'Influenza vaccine']
            },
            prognosis: {
              mortality: 'CAP: 5-15%, ICU: 20-50%',
              prognostic_scores: ['CURB-65', 'PSI/PORT score'],
              factors: 'Age, comorbidity, bacteremia, multilobar involvement'
            },
            gallery: [
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=XRAY',
                caption: 'Right lower lobe consolidation on chest X-ray.',
                type: 'X-ray'
              },
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=Gram',
                caption: 'Gram-positive, lancet-shaped diplococci in sputum smear.',
                type: 'Microscopy'
              }
            ]
          },
          {
            id: 'tuberculosis',
            name: 'Pulmonary Tuberculosis',
            pathogen: { type: 'Mycobacterium', name: 'Mycobacterium tuberculosis', gram: 'Acid-fast (Ziehl-Neelsen+)', shape: 'rod' },
            epidemiology: {
              incidence: '~10 million new cases/year worldwide, ~500 cases/year in Hungary',
              risk_groups: ['People living with HIV (20-30x risk)', 'Patients with diabetes', 'Immunocompromised', 'Socially disadvantaged', 'Healthcare workers', 'Immigrants from endemic areas'],
              seasonality: 'No seasonality',
              transmission: 'Droplet infection (< 5 μm aerosol), 8+ hours exposure in a closed space'
            },
            pathomechanism: {
              steps: [
                'Inhalation: Bacilli reach the alveoli',
                'Phagocytosis: Alveolar macrophages engulf but cannot kill them',
                'Intracellular multiplication: Primary complex (Ghon focus + hilar lymph node) in 2-12 weeks',
                'Granuloma formation: T-cell mediated immune response → epithelioid cells, Langhans giant cells',
                'Latent infection: Granulomas encapsulate the bacilli (90%)',
                'Reactivation: Immunosuppression → caseating necrosis → cavity → spreads by coughing'
              ],
              virulence_factors: ['Cord factor (trehalose dimycolate)', 'Mycolic acid (cell wall)', 'Lipoarabinomannan', 'ESAT-6 and CFP-10 secreted antigens']
            },
            clinical: {
              incubation: 'Primary: 2-12 weeks; Reactivation: years-decades',
              onset: 'Slow, insidious',
              symptoms: [
                { name: 'Chronic cough', description: '>90% in active pulmonary TB; lasting >3 weeks', severity: 'severe' },
                { name: 'Fever', description: '60-80%, often afternoon/evening subfebrility', severity: 'moderate' },
                { name: 'Night sweats', description: 'Profuse (50%)', severity: 'moderate' },
                { name: 'Weight loss', description: 'Significant weight loss (common)', severity: 'moderate' },
                { name: 'Hemoptysis', description: 'Bloody sputum (20-30%), usually a late sign', severity: 'severe' },
                { name: 'Chest pain', description: 'Pleuritic or dull', severity: 'mild' }
              ],
              physical_exam: [
                'Cachexia',
                'Crepitation/bronchial breathing over upper lobes',
                'Decreased breath sounds over a cavity',
                'Pleural friction rub',
                'Lymphadenopathy (miliary/extrapulmonary)'
              ],
              complications: ['Miliary TB', 'TB meningitis', 'Pleuritis', 'Pericarditis', 'Spontaneous pneumothorax', 'Hemoptysis', 'Amyloidosis']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Normocytic anemia, lymphopenia', interpretation: 'Signs of chronic disease' },
                { test: 'CRP/ESR', finding: 'Moderately elevated', interpretation: 'Non-specific' },
                { test: 'Liver/kidney function', finding: 'Baseline before treatment', interpretation: 'Monitoring for drug toxicity' },
                { test: 'HIV serology', finding: 'Mandatory', interpretation: 'Exclusion of coinfection' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Upper lobe infiltrate, cavity, fibrotic scarring, calcification', significance: 'Screening and follow-up' },
                { modality: 'Chest CT', finding: 'Tree-in-bud sign, cavities, miliary pattern', significance: 'More sensitive, extrapulmonary' }
              ],
              microbiology: [
                { test: 'Sputum Ziehl-Neelsen stain', finding: 'Acid-fast bacilli (AFB)', significance: 'Fast, but only positive >10^4/mL' },
                { test: 'Sputum/BAL culture', finding: 'Löwenstein-Jensen/MGIT', significance: 'Gold standard, 2-8 weeks' },
                { test: 'GeneXpert MTB/RIF', finding: 'MTB DNA + rifampicin resistance', significance: 'Fast (<2 hours), sensitive' },
                { test: 'Tuberculin skin test (Mantoux)', finding: '>10mm induration', significance: 'Exposure, not active disease' },
                { test: 'IGRA (QuantiFERON/T-SPOT)', finding: 'IFN-γ production to ESAT-6/CFP-10', significance: 'Not affected by BCG' }
              ]
            },
            differential: [
              { disease: 'Lung carcinoma', distinguishing: 'Smoking, X-ray/CT, bronchoscopy, biopsy' },
              { disease: 'Non-tuberculous mycobacteriosis (NTM)', distinguishing: 'Bronchiectasis, culture, MAC most common' },
              { disease: 'Sarcoidosis', distinguishing: 'Bilateral hilar lymphadenopathy, biopsy (non-caseating)' },
              { disease: 'Fungal pneumonia', distinguishing: 'Immunosuppression, culture/antigen' },
              { disease: 'Actinomycosis', distinguishing: 'Sulfur granules, chest wall penetration' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Isoniazid (INH)', dose: '5 mg/kg (max 300mg) PO', duration: '6 months', note: 'Hepatotoxicity, peripheral neuropathy (B6!)' },
                  { drug: 'Rifampicin (RIF)', dose: '10 mg/kg (max 600mg) PO', duration: '6 months', note: 'Drug interactions (CYP450)' },
                  { drug: 'Pyrazinamide (PZA)', dose: '25 mg/kg PO', duration: '2 months', note: 'Hyperuricemia, hepatotoxicity' },
                  { drug: 'Ethambutol (EMB)', dose: '15 mg/kg PO', duration: '2 months', note: 'Optic neuritis' }
                ],
                inpatient: [
                  { drug: 'Same + isolation', dose: 'Airborne isolation', duration: '2 weeks or 3 negative sputa', note: 'Negative pressure room' }
                ],
                icu: [
                  { drug: 'IV formulations', dose: 'If PO not tolerated', duration: 'Individual', note: 'MDR-TB: individualized' }
                ]
              },
              targeted: 'MDR-TB: Bedaquiline, Linezolid, Fluoroquinolones, Aminoglycosides - expert center',
              supportive: ['Vitamin B6 (neuropathy prevention)', 'Nutrition', 'Contact tracing'],
              prevention: ['BCG vaccine (newborns)', 'LTBI treatment (INH 9 mo or RIF 4 mo)', 'Contact screening']
            },
            prognosis: {
              mortality: 'Treated: <5%; Untreated: 50%; MDR/XDR: 30-50%',
              prognostic_scores: ['No standard scores'],
              factors: 'HIV status, MDR, adherence, late diagnosis'
            },
            gallery: [
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=XRAY',
                caption: 'Right upper lobe cavity in post-primary tuberculosis.',
                type: 'X-ray'
              },
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=CT',
                caption: 'Chest CT with "tree-in-bud" pattern, indicating active endobronchial spread.',
                type: 'CT'
              }
            ]
          },
          {
            id: 'legionella',
            name: 'Legionella Pneumonia (Legionnaires\' Disease)',
            pathogen: { type: 'Bacterium', name: 'Legionella pneumophila', gram: 'Gram-negative (stains poorly)', shape: 'rod, intracellular' },
            epidemiology: {
              incidence: '2-9% of CAP, up to 30% of nosocomial pneumonia',
              risk_groups: ['Elderly (>50 years)', 'Smokers', 'COPD patients', 'Immunocompromised', 'Chronic kidney disease', 'Diabetes'],
              seasonality: 'Summer-autumn (air conditioning)',
              transmission: 'Inhalation (aerosol from contaminated water: cooling towers, showers, hot tubs). NOT transmitted person-to-person!'
            },
            pathomechanism: {
              steps: [
                'Aerosol inhalation from contaminated water source',
                'Legionella enters alveolar macrophages',
                'Dot/Icm T4SS system: Inhibition of phagosome-lysosome fusion',
                'Intracellular replication in a special vacuole',
                'Cell lysis → infection of adjacent cells',
                'Severe necrotizing alveolitis, inflammatory infiltration'
              ],
              virulence_factors: ['Dot/Icm secretion system', 'Mip (macrophage infectivity potentiator)', 'Flagellum', 'Over 300 effector proteins']
            },
            clinical: {
              incubation: '2-10 days (average 5-6 days)',
              onset: 'Prodrome for 1-2 days, then rapid progression',
              symptoms: [
                { name: 'High fever', description: '>90%, often >39°C', severity: 'severe' },
                { name: 'Cough', description: '90%; initially dry, later productive (50%)', severity: 'moderate' },
                { name: 'GI symptoms', description: 'Diarrhea (20-50%), nausea/vomiting (10-30%)', severity: 'moderate' },
                { name: 'Neurological symptoms', description: 'Confusion (25-50%), headache (40-50%)', severity: 'moderate' },
                { name: 'Dyspnea', description: 'Shortness of breath (25-60%)', severity: 'severe' }
              ],
              physical_exam: [
                'High fever with relative bradycardia (Faget\'s sign)',
                'Signs of consolidation on auscultation',
                'Mild hepatomegaly',
                'Cerebellar signs possible'
              ],
              complications: ['Respiratory failure/ARDS', 'Acute kidney injury', 'Rhabdomyolysis', 'Sepsis', 'Endocarditis', 'Encephalopathy']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis (left shift)', interpretation: 'Non-specific' },
                { test: 'Sodium', finding: 'Hyponatremia (<130 mmol/L)', interpretation: 'SIADH - characteristic!' },
                { test: 'Liver enzymes', finding: 'Elevated AST, ALT, LDH', interpretation: 'Common association' },
                { test: 'CK', finding: 'Elevated', interpretation: 'Myositis/rhabdomyolysis' },
                { test: 'CRP/PCT', finding: 'Significantly elevated', interpretation: 'Severe bacterial infection' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Rapidly progressing infiltrate, often unilateral, lobar', significance: 'Worse than clinical picture' },
                { modality: 'Chest CT', finding: 'Ground-glass and consolidation, pleural effusion', significance: 'More sensitive' }
              ],
              microbiology: [
                { test: 'Urine Legionella antigen', finding: 'L. pneumophila serogroup 1 (70%)', significance: 'Fast (<15 min), specific >95%' },
                { test: 'Culture (BCYE agar)', finding: 'Legionella isolation', significance: 'Gold standard, 3-5 days' },
                { test: 'PCR', finding: 'Legionella DNA', significance: 'Fast, detects all serotypes' },
                { test: 'Serology', finding: '4x titer rise', significance: 'Retrospective diagnosis' }
              ]
            },
            differential: [
              { disease: 'Pneumococcal pneumonia', distinguishing: 'Productive cough, no GI/neuro symptoms, normal Na' },
              { disease: 'Mycoplasma pneumonia', distinguishing: 'Younger patients, slower progression, cold agglutinins' },
              { disease: 'Q fever', distinguishing: 'Animal exposure, hepatitis dominates' },
              { disease: 'Psittacosis', distinguishing: 'Bird contact, hepatosplenomegaly' },
              { disease: 'Influenza pneumonia', distinguishing: 'Seasonality, rapid test, epidemiology' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg PO', duration: '5-7 days', note: 'First choice' },
                  { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '7-10 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x750mg IV', duration: '10-14 days', note: 'Better penetration' },
                  { drug: 'Azithromycin', dose: '1x500mg IV', duration: '10-14 days', note: 'Alternative' }
                ],
                icu: [
                  { drug: 'Levofloxacin + Azithromycin', dose: 'In combination', duration: '14-21 days', note: 'In severe cases' },
                  { drug: 'Rifampicin may be added', dose: '2x300mg IV/PO', duration: '', note: 'In immunosuppressed patients' }
                ]
              },
              targeted: 'Fluoroquinolones or macrolides (beta-lactams are ineffective!)',
              supportive: ['Fluid resuscitation', 'Electrolyte correction', 'Ventilation for ARDS'],
              prevention: ['Water system maintenance (>60°C)', 'Disinfection of cooling towers', 'Nosocomial surveillance']
            },
            prognosis: {
              mortality: 'Overall 10-15%, immunocompromised 40%',
              prognostic_scores: ['CURB-65', 'PSI'],
              factors: 'Delayed diagnosis, inappropriate antibiotics, immunosuppression'
            }
          },
          {
            id: 'mycoplasma',
            name: 'Mycoplasma Pneumonia',
            pathogen: { type: 'Bacterium', name: 'Mycoplasma pneumoniae', gram: 'No cell wall', shape: 'pleomorphic' },
            epidemiology: {
              incidence: '15-20% of CAP, 50% in epidemics',
              risk_groups: ['School-age children', 'Young adults', 'Closed communities (dorms, barracks)'],
              seasonality: 'Autumn-winter, but occurs year-round',
              transmission: 'Droplet infection (close contact)'
            },
            pathomechanism: {
              steps: [
                'Adherence to respiratory epithelial cells (P1 adhesin)',
                'Ciliostasis and ciliary destruction (hydrogen peroxide)',
                'CARDS toxin production (inflammation, vacuolization)',
                'Immune-mediated lung injury'
              ],
              virulence_factors: ['P1 adhesin', 'CARDS toxin', 'Hydrogen peroxide']
            },
            clinical: {
              incubation: '2-3 weeks',
              onset: 'Slow, gradual',
              symptoms: [
                { name: 'Cough', description: '>95%; dry, hacking, paroxysmal, lasting for weeks', severity: 'moderate' },
                { name: 'General symptoms', description: 'Headache, malaise (common)', severity: 'mild' },
                { name: 'Sore throat', description: 'Common (non-exudative)', severity: 'mild' },
                { name: 'Fever', description: 'Variable, can be high or absent', severity: 'mild' },
                { name: 'Extrapulmonary', description: 'Hemolysis (subclinical common), rash (Stevens-Johnson <10%)', severity: 'moderate' }
              ],
              physical_exam: [
                'Often sparse auscultation findings',
                'Possible rales, wheezing',
                'Bullous myringitis (eardrum blisters - rare but specific)',
                'Cervical lymphadenopathy'
              ],
              complications: ['Stevens-Johnson syndrome', 'Hemolytic anemia (cold agglutinin)', 'Encephalitis', 'Myocarditis']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Normal WBC, possibly mild leukocytosis', interpretation: 'Non-specific' },
                { test: 'CRP', finding: 'Moderately elevated', interpretation: 'Atypical feature' },
                { test: 'Cold agglutinin', finding: 'Positive (50%)', interpretation: 'Non-specific, but characteristic' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Interstitial pattern, patchy infiltrates', significance: 'Worse than clinical picture ("Walking pneumonia")' }
              ],
              microbiology: [
                { test: 'PCR', finding: 'DNA detection (throat/sputum)', significance: 'Gold standard, fast' },
                { test: 'Serology (IgM/IgG)', finding: 'Titer rise', significance: 'Retrospective, often negative in acute phase' }
              ]
            },
            differential: [
              { disease: 'Chlamydia pneumoniae', distinguishing: 'Clinically difficult to distinguish, PCR' },
              { disease: 'Viral pneumonia', distinguishing: 'Epidemiology, PCR' },
              { disease: 'Legionella', distinguishing: 'More severe, older patients, hyponatremia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '500mg D1, then 250mg D2-5', duration: '5 days', note: 'First choice' },
                  { drug: 'Doxycycline', dose: '2x100mg', duration: '7-10 days', note: 'Alternative (>8 years)' },
                  { drug: 'Clarithromycin', dose: '2x500mg', duration: '7 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x500-750mg IV/PO', duration: '10-14 days', note: 'In severe cases' },
                  { drug: 'Moxifloxacin', dose: '1x400mg IV/PO', duration: '10-14 days', note: 'Alternative' }
                ],
                icu: [
                  { drug: 'Macrolide + Beta-lactam', dose: 'Combination', duration: '', note: 'To cover mixed infection' }
                ]
              },
              targeted: 'Macrolides (resistance increasing!), Tetracyclines, Fluoroquinolones',
              supportive: ['Cough suppressants', 'Antipyretics'],
              prevention: ['Droplet precautions', 'No vaccine']
            },
            prognosis: {
              mortality: 'Very low, usually self-limiting',
              prognostic_scores: ['PSI (rarely needed)'],
              factors: 'Extrapulmonary complications'
            }
          },
          {
            id: 'chlamydia_pneumoniae',
            name: 'Chlamydia pneumoniae',
            pathogen: { type: 'Bacterium', name: 'Chlamydia pneumoniae', gram: 'Gram-negative (intracellular)', shape: 'coccoid' },
            epidemiology: {
              incidence: '5-10% of CAP',
              risk_groups: ['Elderly', 'Patients with chronic diseases', 'Closed communities'],
              seasonality: 'Year-round',
              transmission: 'Droplet infection'
            },
            pathomechanism: {
              steps: [
                'Inhalation of elementary body (EB)',
                'Intracellular transformation to reticulate body (RB)',
                'Replication, inclusion formation',
                'Cell lysis, EB release',
                'Ciliostasis'
              ],
              virulence_factors: ['Intracellular survival', 'Endotoxin-like substances']
            },
            clinical: {
              incubation: '3-4 weeks',
              onset: 'Gradual',
              symptoms: [
                { name: 'Biphasic course', description: 'Upper respiratory symptoms followed by pneumonia', severity: 'moderate' },
                { name: 'Hoarseness/Laryngitis', description: 'Characteristic accompanying symptom', severity: 'mild' },
                { name: 'Cough', description: 'Persistent, lasting for weeks-months', severity: 'moderate' }
              ],
              physical_exam: [
                'Pharyngitis',
                'Rales',
                'Signs of sinusitis'
              ],
              complications: ['Reactive arthritis', 'Myocarditis', 'Atherosclerosis (association)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Normal', interpretation: 'Non-specific' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Small infiltrates', significance: 'Non-specific' }
              ],
              microbiology: [
                { test: 'PCR', finding: 'DNA detection', significance: 'Most sensitive' },
                { test: 'Serology', finding: 'MIF (microimmunofluorescence)', significance: 'Gold standard serology' }
              ]
            },
            differential: [
              { disease: 'Mycoplasma', distinguishing: 'Practically identical clinical picture' },
              { disease: 'Viruses', distinguishing: 'PCR' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycycline', dose: '2x100mg', duration: '10-14 days', note: 'First choice' },
                  { drug: 'Azithromycin', dose: '500mg D1, 250mg D2-5', duration: '5 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x750mg', duration: '10-14 days', note: 'In more severe cases' }
                ],
                icu: [
                  { drug: 'Levofloxacin', dose: 'IV', duration: '14 days', note: '' }
                ]
              },
              targeted: 'Tetracyclines, Macrolides, Quinolones',
              supportive: ['Symptomatic treatment'],
              prevention: ['No vaccine']
            },
            prognosis: {
              mortality: 'Low',
              prognostic_scores: ['PSI'],
              factors: 'Old age, comorbidity'
            }
          },
          {
            id: 'psittacosis',
            name: 'Ornithosis (Psittacosis)',
            pathogen: { type: 'Bacterium', name: 'Chlamydia psittaci', gram: 'Intracellular', shape: 'coccoid' },
            epidemiology: {
              incidence: 'Rare, occupational disease',
              risk_groups: ['Bird owners (parrots, pigeons)', 'Veterinarians', 'Poultry workers'],
              seasonality: 'None',
              transmission: 'Inhalation of dust from bird droppings'
            },
            pathomechanism: {
              steps: [
                'Inhalation',
                'Infection of the reticuloendothelial system (liver, spleen)',
                'Hematogenous spread to the lungs',
                'Interstitial pneumonia'
              ],
              virulence_factors: ['Intracellular survival']
            },
            clinical: {
              incubation: '5-14 days',
              onset: 'Sudden',
              symptoms: [
                { name: 'Fever', description: 'Almost 100%, sudden onset', severity: 'severe' },
                { name: 'Headache', description: 'Severe, often with photophobia', severity: 'severe' },
                { name: 'Cough', description: 'Dry (50-90%)', severity: 'moderate' },
                { name: 'Splenomegaly', description: 'Detected in 10-70%', severity: 'moderate' }
              ],
              physical_exam: [
                'Relative bradycardia (Faget\'s sign)',
                'Splenomegaly (10-70%)',
                'Horder spots (pink rash - rare)',
                'Sparse lung findings'
              ],
              complications: ['Endocarditis', 'Hepatitis', 'Neurological symptoms', 'ARDS']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Normal or leukopenia', interpretation: 'Non-bacterial character' },
                { test: 'Liver enzymes', finding: 'Elevated', interpretation: 'Common' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Atypical pneumonia, fan-shaped hilar infiltrate', significance: 'Characteristic' }
              ],
              microbiology: [
                { test: 'Serology', finding: 'MIF, complement fixation', significance: '4x titer rise' },
                { test: 'PCR', finding: 'Respiratory sample', significance: 'Specific' }
              ]
            },
            differential: [
              { disease: 'Q fever', distinguishing: 'Similar, but no bird contact' },
              { disease: 'Legionella', distinguishing: 'Water exposure' },
              { disease: 'Typhoid fever', distinguishing: 'Travel, rash' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycycline', dose: '2x100mg', duration: '14-21 days', note: 'First choice' }
                ],
                inpatient: [
                  { drug: 'Doxycycline', dose: '2x100mg IV', duration: '14-21 days', note: 'In severe cases' }
                ],
                icu: [
                  { drug: 'Doxycycline', dose: 'IV', duration: '', note: '' }
                ]
              },
              targeted: 'Tetracyclines (Doxycycline), Macrolides (less effective)',
              supportive: ['Antipyretics'],
              prevention: ['Quarantine of birds', 'Protective equipment', 'Wet cleaning']
            },
            prognosis: {
              mortality: 'Treated <1%, untreated 10-20%',
              prognostic_scores: ['None'],
              factors: 'Late diagnosis'
            }
          },
          {
            id: 'q_fever_resp',
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
                'Granuloma formation (doughnut granuloma / fibrin ring granuloma)'
              ],
              virulence_factors: ['Spore-like form (resistant)', 'LPS phase variation']
            },
            clinical: {
              incubation: '2-3 weeks',
              onset: 'Sudden',
              symptoms: [
                { name: 'Acute Q fever', description: 'Flu-like: Fever, fatigue, severe headache', severity: 'severe' },
                { name: 'Pneumonia', description: 'Variable, often mild cough, but radiological findings', severity: 'moderate' },
                { name: 'Hepatitis', description: 'Hepatomegaly, right upper quadrant pain', severity: 'moderate' },
                { name: 'Chronic', description: 'Endocarditis (main manifestation)', severity: 'severe' }
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
          }
        ]
      },
      viral_respiratory: {
        name: 'Viral Respiratory Infections',
        icon: window.diseaseMetadata.viral_respiratory.icon,
        color: window.diseaseMetadata.viral_respiratory.color,
        diseases: [
          {
            id: 'influenza',
            name: 'Influenza',
            pathogen: { type: 'Virus', name: 'Influenza A/B/C virus', gram: 'RNA virus, Orthomyxoviridae', shape: 'helical' },
            epidemiology: {
              incidence: 'Seasonal epidemic: 5-20% of population/year, pandemics: up to 50%',
              risk_groups: ['Elderly (>65)', 'Children (<5)', 'Pregnant women', 'Patients with chronic diseases', 'Healthcare workers', 'Immunocompromised'],
              seasonality: 'November-March (northern hemisphere)',
              transmission: 'Droplet, contact (1-2 meters), fomites'
            },
            pathomechanism: {
              steps: [
                'Hemagglutinin (HA) binds to sialic acid receptors on respiratory epithelium',
                'Receptor-mediated endocytosis',
                'Viral RNA replication in the nucleus',
                'Neuraminidase (NA) aids in the release of new viruses',
                'Epithelial cell apoptosis, ciliary damage',
                'Cytokine storm in severe cases (IL-6, TNF-α, IFN-γ)'
              ],
              virulence_factors: ['Hemagglutinin (H1-18)', 'Neuraminidase (N1-11)', 'NS1 protein (IFN antagonist)', 'PB1-F2 (pro-apoptotic)']
            },
            clinical: {
              incubation: '1-4 days (average 2 days)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Fever', description: 'Sudden onset, 38-41°C (95% of symptomatic cases)', severity: 'severe' },
                { name: 'Cough', description: 'Dry, non-productive (>90%), often with chest pain', severity: 'moderate' },
                { name: 'Myalgia', description: 'Severe muscle pain (90%), especially back/limbs', severity: 'severe' },
                { name: 'Headache', description: 'Severe, often retro-orbital (85%)', severity: 'moderate' },
                { name: 'Sore throat', description: 'Common accompanying symptom (60-70%)', severity: 'mild' },
                { name: 'Prostration', description: 'Marked weakness, bedridden', severity: 'moderate' }
              ],
              physical_exam: [
                'Febrile, ill-appearing',
                'Conjunctivitis',
                'Pharyngeal hyperemia',
                'Clear lung auscultation (uncomplicated)',
                'Tachycardia'
              ],
              complications: ['Primary influenza pneumonia', 'Secondary bacterial pneumonia', 'Myocarditis', 'Encephalitis', 'Reye\'s syndrome (aspirin!)', 'Myositis']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukopenia or normal, lymphopenia', interpretation: 'Typical for viral infection' },
                { test: 'CRP', finding: 'Moderately elevated', interpretation: 'Lower than in bacterial' },
                { test: 'PCT', finding: 'Normal (<0.25)', interpretation: 'Exclusion of bacterial superinfection' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Normal or interstitial pattern', significance: 'Exclusion of pneumonia' },
                { modality: 'CT', finding: 'Ground-glass opacities', significance: 'Viral pneumonia' }
              ],
              microbiology: [
                { test: 'Rapid antigen test (RAT)', finding: 'Influenza A/B', significance: 'Fast (15 min), low sensitivity (50-70%)' },
                { test: 'RT-PCR', finding: 'Viral RNA detection', significance: 'Gold standard, subtyping' },
                { test: 'Virus culture', finding: 'Isolation', significance: 'Epidemiological/surveillance' }
              ]
            },
            differential: [
              { disease: 'COVID-19', distinguishing: 'Loss of smell/taste, PCR' },
              { disease: 'RSV infection', distinguishing: 'Children, elderly, bronchiolitis' },
              { disease: 'Adenovirus infection', distinguishing: 'Conjunctivitis, pharyngitis, longer febrile period' },
              { disease: 'Bacterial pneumonia', distinguishing: 'Productive sputum, localized findings, high PCT' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Oseltamivir', dose: '2x75mg PO', duration: '5 days', note: 'Within 48 hours of symptom onset!' },
                  { drug: 'Baloxavir', dose: '1x40-80mg PO', duration: 'Single dose', note: '>80kg: 80mg' }
                ],
                inpatient: [
                  { drug: 'Oseltamivir', dose: '2x75mg PO/NG', duration: '5-10 days', note: 'Longer in severe cases' },
                  { drug: 'Peramivir', dose: '1x600mg IV', duration: 'Single or repeated', note: 'If PO not tolerated' }
                ],
                icu: [
                  { drug: 'Oseltamivir', dose: '2x150mg PO/NG', duration: '10 days', note: 'Higher dose may be considered' },
                  { drug: '+ Empiric AB', dose: 'CAP coverage', duration: '', note: 'Bacterial superinfection' }
                ]
              },
              targeted: 'Neuraminidase inhibitors (oseltamivir, zanamivir, peramivir) or cap-dependent endonuclease inhibitor (baloxavir)',
              supportive: ['Antipyretics (paracetamol!)', 'Fluid resuscitation', 'Oxygen', 'Ventilation for ARDS'],
              prevention: ['Annual influenza vaccine', 'Hand hygiene', 'Patient isolation', 'Chemoprophylaxis (oseltamivir 1x75mg)']
            },
            prognosis: {
              mortality: 'Overall 0.1%, >65 years 1-2%, pandemic strain higher',
              prognostic_scores: ['None specific'],
              factors: 'Age, comorbidity, virus subtype, vaccination status'
            }
          },
          {
            id: 'covid19',
            name: 'COVID-19',
            pathogen: { type: 'Virus', name: 'SARS-CoV-2', gram: 'RNA virus, Coronaviridae', shape: 'spherical, with spike proteins' },
            epidemiology: {
              incidence: 'Pandemic from 2020, becoming endemic',
              risk_groups: ['Elderly (>65)', 'Patients with obesity (BMI>30)', 'Diabetes', 'Cardiovascular disease', 'Immunocompromised', 'Chronic lung disease'],
              seasonality: 'Winter peak, but year-round',
              transmission: 'Respiratory (aerosol + droplet), contact, fecal-oral rare'
            },
            pathomechanism: {
              steps: [
                'Spike protein binds to ACE2 receptor (lung, heart, vessels, gut)',
                'TMPRSS2 protease cleaves spike protein → fusion',
                'Viral replication and spread',
                'Endothelial dysfunction, microthrombosis',
                'Cytokine storm (IL-6, IL-1β, TNF-α) in severe cases',
                'ARDS, multi-organ failure'
              ],
              virulence_factors: ['Spike protein', 'NSP1 (host shutdown)', 'ORF8 (immunomodulation)', 'Nucleocapsid']
            },
            clinical: {
              incubation: '2-14 days (median 5 days, Omicron 3 days)',
              onset: 'Variable',
              symptoms: [
                { name: 'Fever', description: 'Common (70-90%), but may be absent (elderly)', severity: 'moderate' },
                { name: 'Cough', description: 'Dry (60-80%), persistent', severity: 'moderate' },
                { name: 'Fatigue', description: 'Pronounced (40-70%)', severity: 'moderate' },
                { name: 'Dyspnea', description: 'Shortness of breath (30-50% of hospitalized), hypoxia', severity: 'severe' },
                { name: 'Anosmia/Dysgeusia', description: 'Loss of smell/taste (variant-dependent, 20-60%)', severity: 'mild' },
                { name: 'Myalgia', description: 'Muscle pain (30-60%)', severity: 'mild' }
              ],
              physical_exam: [
                'Fever, tachypnea',
                'Decreased SpO2 (silent hypoxia!)',
                'Bilateral crepitation',
                'Tachycardia',
                'No specific physical sign'
              ],
              complications: ['ARDS', 'Pulmonary embolism', 'Myocarditis', 'Acute kidney injury', 'Stroke', 'MIS-C (children)', 'Long COVID']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Lymphopenia, normal/decreased platelets', interpretation: 'Marker of severity' },
                { test: 'D-dimer', finding: 'Elevated', interpretation: 'Thrombotic risk, poor prognosis' },
                { test: 'Ferritin', finding: 'Elevated', interpretation: 'Marker of cytokine storm' },
                { test: 'CRP/IL-6', finding: 'Elevated', interpretation: 'Degree of inflammation' },
                { test: 'LDH, troponin', finding: 'Elevated in severe cases', interpretation: 'Tissue damage' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Bilateral peripheral infiltrates', significance: 'Less sensitive' },
                { modality: 'Chest CT', finding: 'Ground-glass opacities, crazy paving, consolidation', significance: 'Characteristic pattern' }
              ],
              microbiology: [
                { test: 'RT-PCR (nasopharynx/oropharynx)', finding: 'SARS-CoV-2 RNA', significance: 'Gold standard, Ct value' },
                { test: 'Rapid antigen test', finding: 'Nucleocapsid protein', significance: 'Fast, indicates infectiousness' },
                { test: 'Serology', finding: 'Anti-S, Anti-N IgG/IgM', significance: 'Past infection, vaccine efficacy' }
              ]
            },
            differential: [
              { disease: 'Influenza', distinguishing: 'Faster course, myalgia dominates, PCR' },
              { disease: 'Bacterial pneumonia', distinguishing: 'High PCT, lobar infiltrate' },
              { disease: 'Heart failure', distinguishing: 'Cardiac history, BNP, bilateral' },
              { disease: 'Pulmonary embolism', distinguishing: 'D-dimer, CTPA' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Paxlovid (nirmatrelvir/ritonavir)', dose: '2x300/100mg PO', duration: '5 days', note: 'Early, high-risk, interactions!' },
                  { drug: 'Molnupiravir', dose: '2x800mg PO', duration: '5 days', note: 'Alternative if Paxlovid is contraindicated' }
                ],
                inpatient: [
                  { drug: 'Remdesivir', dose: '200mg IV D1, then 100mg/day', duration: '5 days (max 10)', note: 'If O2 is needed' },
                  { drug: 'Dexamethasone', dose: '6mg/day IV/PO', duration: '10 days', note: 'Only with O2 need/ventilation!' }
                ],
                icu: [
                  { drug: 'Dexamethasone', dose: '6-20mg/day', duration: '10 days', note: 'Cytokine storm' },
                  { drug: 'Tocilizumab', dose: '8mg/kg IV single dose', duration: '', note: 'IL-6 inhibitor, rapidly deteriorating' },
                  { drug: 'LMWH', dose: 'Therapeutic dose', duration: '', note: 'Thromboprophylaxis/therapy' }
                ]
              },
              targeted: 'Antiviral (Paxlovid, Remdesivir) early; Immunomodulatory (steroid, tocilizumab) in hypoxic phase',
              supportive: ['Oxygen (prone positioning!)', 'HFNC/NIV', 'Invasive ventilation', 'ECMO'],
              prevention: ['mRNA vaccines (Pfizer, Moderna)', 'Hand hygiene', 'Mask wearing', 'Isolation']
            },
            prognosis: {
              mortality: 'Omicron <1%, previously 2-5%, ICU 20-40%',
              prognostic_scores: ['4C Mortality Score', 'NEWS2'],
              factors: 'Age, comorbidity, lymphopenia, D-dimer, ferritin, vaccination status'
            }
          }
        ]
      },
           cardiovascular: {
        name: 'Cardiovascular Infections',
        icon: window.diseaseMetadata.cardiovascular.icon,
        color: window.diseaseMetadata.cardiovascular.color,
        diseases: [
          {
            id: 'endocarditis',
            name: 'Infective Endocarditis',
            pathogen: { type: 'Bacterium', name: 'Staphylococcus aureus, Viridans group streptococci', gram: 'Gram-positive', shape: 'coccus' },
            epidemiology: {
              incidence: '3-10/100,000 per year',
              risk_groups: ['Valvular defects', 'Prosthetic valves', 'People who inject drugs (PWID)', 'Congenital heart disease', 'Previous endocarditis'],
              seasonality: 'None',
              transmission: 'Bacteremia (dental procedure, skin infection, catheter)'
            },
            pathomechanism: {
              steps: [
                'Endothelial injury (turbulent flow)',
                'Sterile platelet-fibrin thrombus formation (NBTE)',
                'Bacteremia (pathogen adherence)',
                'Vegetation formation (bacteria + fibrin + platelets)',
                'Tissue destruction, embolization'
              ],
              virulence_factors: ['Adhesins (MSCRAMM)', 'Biofilm formation', 'Toxins']
            },
            clinical: {
              incubation: 'Days (acute) or weeks (subacute)',
              onset: 'Variable',
              symptoms: [
                { name: 'Fever', description: 'Most common symptom (>90%), often with chills', severity: 'moderate' },
                { name: 'Heart murmur', description: 'New or changed regurgitant murmur (85%)', severity: 'severe' },
                { name: 'Embolic symptoms', description: 'Stroke, pulmonary embolism, spleen/kidney infarct (20-50%)', severity: 'severe' },
                { name: 'Heart failure', description: 'Dyspnea, edema (40-60% - most common complication)', severity: 'severe' },
                { name: 'Skin manifestations', description: 'Petechiae (20-40%), Osler/Janeway (5-10% - rarer today)', severity: 'mild' }
              ],
              physical_exam: [
                'Fever',
                'New heart murmur (especially regurgitant)',
                'Signs of heart failure (S3, congestion)',
                'Splenomegaly (15-30%)',
                'Peripheral signs (Splinter, Osler, Janeway, Roth - rare)'
              ],
              complications: ['Heart failure (valve insufficiency)', 'Septic embolism (brain, spleen, kidney)', 'Abscess (ring)', 'Glomerulonephritis']
            },
            diagnostics: {
              criteria: [
                { name: 'Major criteria (ESC 2023)', items: ['Positive blood culture (typical pathogen: S. aureus, Enterococcus, Viridans strep, S. gallolyticus, HACEK) from 2 separate samples', 'Positive imaging (Echo/CT/PET-CT): Vegetation, abscess, pseudoaneurysm, fistula, perforation, new dehiscence', 'Paravalvular lesion on CT', 'Abnormal activity around prosthetic valve (PET/CT or SPECT/CT)'] },
                { name: 'Minor criteria', items: ['Predisposition (heart defect, prosthetic valve, previous IE)', 'Fever >38°C', 'Vascular phenomena (embolism, septic infarct, mycotic aneurysm, Janeway, imaging-confirmed lesions)', 'Immunological phenomena (Osler\'s nodes, Roth spots, RF+, Glomerulonephritis)', 'Microbiological evidence (positive culture not meeting major criteria)'] },
                { name: 'Diagnosis (Definite)', items: ['2 Major', '1 Major + 3 Minor', '5 Minor'] }
              ],
              laboratory: [
                { test: 'Blood culture', finding: 'Positive (continuous bacteremia)', interpretation: 'DUKE major criterion (3 sets!)' },
                { test: 'CBC', finding: 'Anemia, leukocytosis', interpretation: 'Chronic inflammation' },
                { test: 'CRP/ESR', finding: 'Elevated', interpretation: 'Inflammation' }
              ],
              imaging: [
                { modality: 'Echocardiography (TTE/TEE)', finding: 'Vegetation, abscess, dehiscence', significance: 'Primary imaging' },
                { modality: 'Cardiac CT / PET-CT', finding: 'Paravalvular spread, embolism', significance: 'Adjunctive (ESC 2023)' }
              ],
              microbiology: [
                { test: 'Blood culture', finding: 'Pathogen identification', significance: 'Basis of therapy' },
                { test: 'Serology', finding: 'Coxiella, Bartonella', significance: 'If blood culture is negative' }
              ]
            },
            therapy: {
              guidelines: ['ESC 2023 Guidelines for the management of endocarditis'],
              empirical: {
                native_community: {
                  title: 'Empiric: Native valve or Late prosthetic valve (>12 mo)',
                  drugs: [
                    { drug: 'Ampicillin + (Flu)cloxacillin + Gentamicin', dose: '12g + 12g + 3mg/kg IV', duration: '4-6 weeks', note: 'IB recommendation. Gentamicin only for the first few days/until pathogen is known.' },
                    { drug: 'Vancomycin + Gentamicin', dose: '30-60mg/kg + 3mg/kg IV', duration: '4-6 weeks', note: 'IB recommendation. For penicillin allergy.' },
                    { drug: 'Daptomycin + Gentamicin', dose: '10mg/kg + 3mg/kg IV', duration: '4-6 weeks', note: 'IB recommendation. Alternative.' }
                  ]
                },
                prosthetic_early: {
                  title: 'Empiric: Early prosthetic valve (<12 mo) or Nosocomial',
                  drugs: [
                    { drug: 'Vancomycin + Gentamicin + Rifampicin', dose: '30-60mg/kg + 3mg/kg + 900-1200mg IV/PO', duration: '6 weeks', note: 'IB recommendation. Rifampicin only after bacteremia has cleared (to prevent resistance).' }
                  ]
                },
                targeted_staph: {
                  title: 'Targeted: Staphylococcus spp.',
                  drugs: [
                    { drug: 'MSSA: (Flu)cloxacillin', dose: '12g/day IV', duration: '4-6 weeks', note: 'IB recommendation. Penicillin allergy (non-anaphylactic): Cefazolin 6g/day (IB).' },
                    { drug: 'MRSA: Vancomycin', dose: '30-60mg/kg/day IV', duration: '4-6 weeks', note: 'IB recommendation. Alternative: Daptomycin 10mg/kg (IB).' },
                    { drug: 'Prosthetic valve (PVE): + Rifampicin + Gentamicin', dose: 'Adjunct', duration: 'Rif: 6 weeks, Gent: 2 weeks', note: 'IB recommendation. Rifampicin 900-1200mg, Gentamicin 3mg/kg.' }
                  ]
                },
                targeted_strep: {
                  title: 'Targeted: Streptococcus spp. (Oral/Bowel)',
                  drugs: [
                    { drug: 'Penicillin G or Amoxicillin or Ceftriaxone', dose: 'Standard high dose', duration: '4 weeks', note: 'IB recommendation. Penicillin-sensitive strains.' },
                    { drug: 'Combination with Gentamicin', dose: 'Beta-lactam + 3mg/kg Gentamicin', duration: '2 weeks', note: 'IB recommendation. Can shorten course only for native valve, uncomplicated cases.' },
                    { drug: 'Penicillin allergy: Vancomycin', dose: '30mg/kg/day IV', duration: '4 weeks', note: 'IB recommendation.' }
                  ]
                },
                targeted_entero: {
                  title: 'Targeted: Enterococcus spp.',
                  drugs: [
                    { drug: 'Amoxicillin + Ceftriaxone', dose: '200mg/kg + 4g/day IV', duration: '6 weeks', note: 'IB recommendation. Preferred for E. faecalis (less nephrotoxicity than with gentamicin).' },
                    { drug: 'Ampicillin + Gentamicin', dose: '12g + 3mg/kg IV', duration: '4-6 weeks', note: 'IB recommendation. Traditional therapy.' },
                    { drug: 'Vancomycin + Gentamicin', dose: '30mg/kg + 3mg/kg IV', duration: '6 weeks', note: 'IB recommendation. For beta-lactam resistance/allergy.' }
                  ]
                },
                culture_neg: {
                  title: 'Culture-negative IE',
                  drugs: [
                    { drug: 'Coxiella burnetii', dose: 'Doxycycline + Hydroxychloroquine', duration: '>18 months', note: 'IB recommendation. Q fever endocarditis.' },
                    { drug: 'Bartonella spp.', dose: 'Doxycycline + Gentamicin (2 weeks)', duration: '6 weeks', note: 'IB recommendation.' },
                    { drug: 'Brucella spp.', dose: 'Doxycycline + Streptomycin + Rifampicin', duration: '3-6 months', note: 'IB recommendation.' }
                  ]
                }
              },
              targeted: 'See detailed protocols above. In stable patients (left-sided IE), oral switch is possible after 10-14 days of IV therapy (POET trial, IB recommendation) if TEE has excluded abscess and patient is cooperative.',
              supportive: ['Heart failure management (IB)', 'Embolism prophylaxis (anticoagulation may be contraindicated due to bleeding risk!)', 'Source control (full body CT/PET-CT)'],
              prevention: ['Antibiotic prophylaxis (Amoxicillin 2g or Clindamycin 600mg) ONLY in high-risk patients (prosthetic valve, previous IE, cyanotic congenital vitium) before dental procedures (IIa)', 'Oral hygiene (IB)']
            },
            prognosis: {
              mortality: 'In-hospital: 15-20%, 1-year: 30-40%',
              prognostic_scores: ['None specific'],
              factors: 'S. aureus, heart failure, old age, prosthetic valve'
            }
          },
          {
            id: 'myocarditis',
            name: 'Myocarditis',
            pathogen: { type: 'Virus', name: 'Coxsackie B, Adenovirus, Parvovirus B19', gram: 'RNA/DNA viruses', shape: 'variable' },
            epidemiology: {
              incidence: 'Hard to estimate (many mild cases), 10-20% of sudden cardiac death in young people',
              risk_groups: ['Young adults', 'Men', 'Immunocompromised'],
              seasonality: 'Virus-dependent (e.g., enterovirus summer-autumn)',
              transmission: 'Fecal-oral, droplet (pathogen-dependent)'
            },
            pathomechanism: {
              steps: [
                'Virus entry into cardiomyocytes (receptor-mediated)',
                'Direct cytopathic effect (replication)',
                'Activation of immune response (T-cells, cytokines)',
                'Autoimmune reaction (molecular mimicry)',
                'Myocardial necrosis, fibrosis, dilation'
              ],
              virulence_factors: ['Protease 2A (dystrophin cleavage)', 'Receptor binding (CAR)']
            },
            clinical: {
              incubation: '1-2 weeks after viral infection',
              onset: 'Variable (from asymptomatic to fulminant)',
              symptoms: [
                { name: 'Chest pain', description: 'Sharp, pericardial-like (85-95% in uncomplicated cases)', severity: 'moderate' },
                { name: 'Dyspnea', description: 'On exertion or at rest (19-49%)', severity: 'severe' },
                { name: 'Palpitations', description: 'Sensation of arrhythmias (6-18%)', severity: 'moderate' },
                { name: 'Prodromal symptoms', description: 'Fever, respiratory/GI symptoms days before (60%)', severity: 'mild' },
                { name: 'Syncope', description: 'Due to arrhythmia (rare, but dangerous)', severity: 'severe' }
              ],
              physical_exam: [
                'Tachycardia (disproportionate to fever)',
                'Signs of heart failure (S3, distended neck veins, edema)',
                'Pericardial friction rub (in myopericarditis)',
                'Arrhythmia (extrasystoles)'
              ],
              complications: ['Dilated cardiomyopathy (DCM)', 'Heart failure', 'Fatal arrhythmias', 'Sudden cardiac death']
            },
            diagnostics: {
              laboratory: [
                { test: 'Troponin (hs-cTn)', finding: 'Elevated', interpretation: 'Myocardial necrosis (high sensitivity)' },
                { test: 'NT-proBNP', finding: 'Elevated', interpretation: 'Heart failure / prognostic marker' },
                { test: 'CRP/ESR', finding: 'Elevated', interpretation: 'Inflammation' },
              ],
              imaging: [
                { modality: 'ECG', finding: 'ST-T changes, AV block, QRS widening', significance: 'Prognostic value' },
                { modality: 'Echocardiography', finding: 'Global/regional wall motion abnormalities, decreased EF, pericardial effusion', significance: 'Basic examination' },
                { modality: 'Cardiac MRI (CMR)', finding: 'Lake Louise criteria (T1/T2 signals, LGE)', significance: 'Gold standard non-invasive diagnosis (ESC 2023)' }
              ],
              microbiology: [
                { test: 'Endomyocardial biopsy (EMB)', finding: 'Inflammation + Virus PCR', significance: 'Gold standard. Indicated in: fulminant course, non-responsive HF, specific suspicion (giant cell) (ESC 2023)' },
                { test: 'Virus serology', finding: 'Not routinely recommended', significance: 'Low diagnostic value (except hepatitis, HIV, Borrelia)' }
              ]
            },
            differential: [
              { disease: 'Acute coronary syndrome (ACS)', distinguishing: 'Coronary angiography negative, young patient' },
              { disease: 'Pericarditis', distinguishing: 'Troponin less elevated, no wall motion abnormalities' },
              { disease: 'Anxiety/panic', distinguishing: 'ECG/Troponin negative' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Physical rest', dose: 'No sports', duration: '3-6 months', note: 'Crucial! (ESC 2023)' },
                  { drug: 'NSAID (e.g., Ibuprofen)', dose: 'Symptomatic', duration: 'Short term', note: 'Only for chest pain if EF is preserved!' }
                ],
                inpatient: [
                  { drug: 'Heart failure therapy (GDMT)', dose: 'ACEi/ARB/ARNI + BB + MRA + SGLT2i', duration: 'Chronic', note: 'If LVEF is reduced (ESC 2023)' },
                  { drug: 'Antiarrhythmic drugs', dose: 'Amiodarone', duration: '', note: 'In case of severe arrhythmia' }
                ],
                icu: [
                  { drug: 'Mechanical circulatory support (MCS)', dose: 'VA-ECMO, Impella', duration: '', note: 'In fulminant myocarditis / cardiogenic shock' },
                  { drug: 'High-dose steroids', dose: 'Methylprednisolone', duration: '', note: 'Only in proven autoimmune/giant cell forms (virus negative!)' }
                ]
              },
              targeted: 'Immunosuppression (Prednisolone + Azathioprine) ONLY in biopsy-proven virus-negative (PCR-) lymphocytic, giant cell, or sarcoidosis-related myocarditis (ESC 2023). Contraindicated in active viral infection!',
              supportive: ['Strict physical rest (3-6 months) until inflammation resolves', 'Heart failure management', 'ICD implantation (if inflammation has resolved and EF remains low)'],
              prevention: ['Vaccinations (Influenza, COVID, Measles)', 'Hygiene']
            },
            prognosis: {
              mortality: 'Variable: often spontaneous recovery, high in fulminant cases. 50% progress to DCM.',
              prognostic_scores: ['None'],
              factors: 'Initial EF, QRS width, troponin level'
            }
          },
          {
            id: 'pericarditis',
            name: 'Acute Pericarditis',
            pathogen: { type: 'Virus/Idiopathic', name: 'Coxsackie, Echovirus, Adenovirus, CMV, EBV', gram: 'Variable', shape: '-' },
            epidemiology: {
              incidence: 'Common (0.1% of hospitalized)',
              risk_groups: ['Men (20-50 years)', 'Post-cardiotomy patients', 'Autoimmune patients'],
              seasonality: 'Virus-dependent',
              transmission: 'Droplet (viral)'
            },
            pathomechanism: {
              steps: [
                'Inflammation of the pericardium (viral, autoimmune, neoplastic)',
                'Fibrinous deposits (dry pericarditis)',
                'Exudate formation (pericardial effusion)',
                'Risk of tamponade (if fluid accumulates rapidly)'
              ],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: 'Variable',
              onset: 'Sudden',
              symptoms: [
                { name: 'Chest pain', description: 'Sharp, pleuritic, worse when lying down, improves when leaning forward', severity: 'severe' },
                { name: 'Fever', description: 'Usually low-grade', severity: 'mild' },
                { name: 'Dyspnea', description: 'Due to pain or tamponade', severity: 'moderate' }
              ],
              physical_exam: [
                'Pericardial friction rub (systolic and diastolic components)',
                'Muffled heart sounds (effusion)',
                'Beck\'s triad (in tamponade): hypotension, muffled heart sounds, distended neck veins'
              ],
              complications: ['Pericardial tamponade', 'Constrictive pericarditis', 'Recurrent pericarditis (15-30%)']
            },
            diagnostics: {
              criteria: [
                { name: 'Diagnosis (2 out of 4)', items: ['Chest pain (typical)', 'Pericardial friction rub', 'ECG changes (ST elevation, PR depression)', 'Pericardial effusion (Echo)'] }
              ],
              laboratory: [
                { test: 'CRP/ESR', finding: 'Elevated', interpretation: 'Inflammation activity (also for follow-up!)' },
                { test: 'Troponin', finding: 'Normal or slightly elevated', interpretation: 'Exclusion of myocarditis (if high: myopericarditis)' },
                { test: 'CBC', finding: 'Leukocytosis', interpretation: 'Inflammation' }
              ],
              imaging: [
                { modality: 'ECG', finding: 'Diffuse concave ST elevation, PR depression (elevation in aVR)', significance: 'Diagnostic' },
                { modality: 'Echocardiography', finding: 'Pericardial effusion', significance: 'Exclusion of tamponade, diagnosis' },
                { modality: 'Chest X-ray', finding: 'Normal or "water bottle heart" (large effusion)', significance: 'Exclusion of other causes' }
              ],
              microbiology: [
                { test: 'Virus serology', finding: 'Not routine', significance: 'Only in special cases' },
                { test: 'Pericardiocentesis', finding: 'Culture/PCR', significance: 'Only in tamponade or suspicion of purulent/neoplastic cause' }
              ]
            },
            differential: [
              { disease: 'Acute myocarditis', distinguishing: 'Troponin elevation dominates, wall motion abnormalities' },
              { disease: 'STEMI', distinguishing: 'Convex ST elevation, reciprocal depression, regional' },
              { disease: 'Pulmonary embolism', distinguishing: 'Dyspnea dominates, D-dimer, CT' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Aspirin', dose: '750-1000mg every 8 hours', duration: '1-2 weeks, then taper', note: 'First choice (ESC 2015)' },
                  { drug: 'Ibuprofen', dose: '600mg every 8 hours', duration: '1-2 weeks, then taper', note: 'Alternative' },
                  { drug: '+ Colchicine', dose: '0.5mg once daily (<70kg) or twice (>70kg)', duration: '3 months', note: 'For prevention of recurrence (ESC 2015)!' },
                  { drug: 'PPI', dose: 'Standard', duration: 'With NSAID', note: 'Gastric protection' }
                ],
                inpatient: [
                  { drug: 'None', dose: '-', duration: '-', note: 'Only for high-risk cases (fever >38, subacute, large effusion, tamponade, anticoagulated patient)' }
                ],
                icu: [
                  { drug: 'Pericardiocentesis', dose: 'Drainage', duration: '', note: 'Life-saving in tamponade' }
                ]
              },
              targeted: 'Steroids (Prednisolone 0.2-0.5 mg/kg) ONLY if NSAID/Colchicine are contraindicated, unsuccessful, or for specific indications (autoimmune).',
              supportive: ['Physical rest (no sports) until CRP normalizes (min. 3 months for athletes)'],
              prevention: ['Colchicine for the first episode']
            },
            prognosis: {
              mortality: 'Low, life-threatening in tamponade',
              prognostic_scores: ['None'],
              factors: 'Recurrence is common, constrictive pericarditis is rare (<1% in idiopathic)'
            }
          }
        ]
      },
      upper_respiratory: {
        name: 'Upper Respiratory Infections',
        icon: window.diseaseMetadata.upper_respiratory.icon,
        color: window.diseaseMetadata.upper_respiratory.color,
        diseases: [
          {
            id: 'upper_respiratory_infections',
            name: 'Upper Respiratory Infections (Common Cold)',
            pathogen: { type: 'Virus', name: 'Rhinovirus (most common), Coronavirus, Adenovirus, Influenza', gram: 'RNA viruses', shape: 'variable' },
            epidemiology: {
              incidence: 'Most common infection, adults 2-3x/year, children 6-8x/year',
              risk_groups: ['Children', 'Elderly', 'Immunocompromised'],
              seasonality: 'Year-round, peak in autumn-winter',
              transmission: 'Droplet, contact, fomites'
            },
            pathomechanism: {
              steps: [
                'Virus entry into nasal/pharyngeal mucosa',
                'Infection of epithelial cells',
                'Local inflammation (neutrophils, edema)',
                'Ciliostasis, increased mucus production',
                'Systemic response (fever, general symptoms)'
              ],
              virulence_factors: ['Receptor binding (ICAM-1 for rhinovirus)', 'Immunomodulation']
            },
            clinical: {
              incubation: '1-3 days',
              onset: 'Sudden',
              symptoms: [
                { name: 'Rhinorrhea', description: 'Clear → mucopurulent', severity: 'mild' },
                { name: 'Sneezing', description: 'Paroxysmal', severity: 'mild' },
                { name: 'Sore throat', description: 'Mild', severity: 'mild' },
                { name: 'Cough', description: 'Dry, irritative', severity: 'mild' },
                { name: 'Fever', description: 'Mild or absent', severity: 'mild' }
              ],
              physical_exam: [
                'Nasal mucosa hyperemia, edema',
                'Mild pharyngeal redness',
                'Cervical lymphadenopathy',
                'Normal lung auscultation'
              ],
              complications: ['Sinusitis', 'Otitis media', 'Bronchitis', 'Pneumonia (rare)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Not needed', finding: '-', interpretation: 'Clinical diagnosis' }
              ],
              imaging: [
                { test: 'Not needed', finding: '-', interpretation: 'Clinical diagnosis' }
              ],
              microbiology: [
                { test: 'Virus PCR', finding: 'Etiology', significance: 'If needed (e.g., epidemic)' }
              ]
            },
            differential: [
              { disease: 'Allergic rhinitis', distinguishing: 'Pruritus, seasonality, eosinophilia' },
              { disease: 'Bacterial sinusitis', distinguishing: 'Persistent symptoms, fever, pain' },
              { disease: 'Influenza', distinguishing: 'High fever, myalgia, prostration' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Supportive', dose: '-', duration: '7-10 days', note: 'Rest, fluids, symptomatic treatment' },
                  { drug: 'Decongestant', dose: 'Oxymetazoline nasal', duration: '3-5 days', note: 'Not for longer!' },
                  { drug: 'Antihistamine', dose: 'Loratadine', duration: '', note: 'If allergy is suspected' }
                ],
                inpatient: [
                  { drug: 'Not needed', dose: '-', duration: '-', note: 'Rare' }
                ],
                icu: [
                  { drug: 'Not needed', dose: '-', duration: '-', note: 'Rare' }
                ]
              },
              targeted: 'No specific antiviral',
              supportive: ['Rest', 'Fluid intake', 'Antipyretics'],
              prevention: ['Hand hygiene', 'Mask wearing during epidemics']
            },
            prognosis: {
              mortality: 'Very low',
              prognostic_scores: ['None'],
              factors: 'Immune status'
            }
          },
          {
            id: 'rsv_infection',
            name: 'RSV Infection (Respiratory Syncytial Virus)',
            pathogen: { type: 'Virus', name: 'Human Respiratory Syncytial Virus (HRSV)', gram: 'RNA virus, Pneumoviridae', shape: 'helical' },
            epidemiology: {
              incidence: 'All children infected by age 2, adults reinfection',
              risk_groups: ['Infants (<6 months)', 'Elderly (>65)', 'Patients with chronic lung disease', 'Immunocompromised'],
              seasonality: 'Winter-spring',
              transmission: 'Droplet, contact (very contagious!)'
            },
            pathomechanism: {
              steps: [
                'Virus entry into airways',
                'Fusion with ciliated epithelial cells',
                'Syncytium formation',
                'Ciliary destruction, impaired mucociliary clearance',
                'Development of bronchiolitis or pneumonia'
              ],
              virulence_factors: ['Fusion protein (F)', 'G glycoprotein (adherence)']
            },
            clinical: {
              incubation: '4-6 days',
              onset: 'Gradual',
              symptoms: [
                { name: 'Rhinorrhea', description: 'Clear', severity: 'mild' },
                { name: 'Cough', description: 'Dry, then productive', severity: 'moderate' },
                { name: 'Fever', description: 'Mild-moderate', severity: 'mild' },
                { name: 'Dyspnea', description: 'Severe in infants', severity: 'severe' },
                { name: 'Wheezing', description: 'Sign of bronchiolitis', severity: 'moderate' }
              ],
              physical_exam: [
                'Tachypnea, retractions',
                'Wheezing, crepitation',
                'Apnea in infants',
                'Hypoxia'
              ],
              complications: ['Bronchiolitis obliterans', 'Pneumonia', 'Apnea', 'Death (rare in infants, but possible)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Normal or mild leukocytosis', interpretation: 'Non-specific' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Hyperinflation, atelectasis', significance: 'Bronchiolitis' }
              ],
              microbiology: [
                { test: 'Nasopharyngeal aspirate PCR', finding: 'RSV RNA', significance: 'Gold standard' },
                { test: 'Immunofluorescence', finding: 'Antigen detection', significance: 'Fast' }
              ]
            },
            differential: [
              { disease: 'Bronchiolitis other causes', distinguishing: 'Virus PCR' },
              { disease: 'Asthma', distinguishing: 'History, atopy' },
              { disease: 'Pertussis', distinguishing: 'Whoop, lymphocytosis' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Supportive', dose: '-', duration: '-', note: 'Oxygen, hydration' },
                  { drug: 'Bronchodilator', dose: 'Salbutamol', duration: '', note: 'If wheezing' }
                ],
                inpatient: [
                  { drug: 'Ribavirin', dose: 'Aerosol', duration: '3-5 days', note: 'In severe cases, immunocompromised' }
                ],
                icu: [
                  { drug: 'Ventilation', dose: 'NIV or intubation', duration: '', note: 'In case of apnea' }
                ]
              },
              targeted: 'Palivizumab prophylaxis for high-risk infants',
              supportive: ['Oxygen', 'Hydration', 'Physiotherapy'],
              prevention: ['Hand hygiene', 'Isolation', 'Palivizumab (monoclonal Ab)']
            },
            prognosis: {
              mortality: 'Low, but higher risk in infants',
              prognostic_scores: ['None'],
              factors: 'Age, comorbidity'
            }
          },
          {
            id: 'tonsillitis',
            name: 'Tonsillitis',
            pathogen: { type: 'Bacterium', name: 'Streptococcus pyogenes (GAS, most common)', gram: 'Gram-positive', shape: 'chain' },
            epidemiology: {
              incidence: 'Common in childhood, 5-15 years',
              risk_groups: ['Children', 'Young adults'],
              seasonality: 'Winter-spring',
              transmission: 'Droplet, contact'
            },
            pathomechanism: {
              steps: [
                'Bacterial colonization of the tonsils',
                'Local inflammation, edema',
                'Toxin production (streptolysin O)',
                'Systemic response (fever, general symptoms)'
              ],
              virulence_factors: ['M protein', 'Streptolysins', 'Hyaluronidase']
            },
            clinical: {
              incubation: '2-5 days',
              onset: 'Sudden',
              symptoms: [
                { name: 'Sore throat', description: 'Severe, difficulty swallowing', severity: 'severe' },
                { name: 'Fever', description: 'High', severity: 'moderate' },
                { name: 'Dysphagia', description: 'Pain on swallowing', severity: 'moderate' },
                { name: 'Tonsillar exudate', description: 'White, purulent', severity: 'moderate' }
              ],
              physical_exam: [
                'Tonsillar hyperemia, swelling',
                'Exudate',
                'Cervical lymphadenitis',
                'Scarlet fever symptoms (rare)'
              ],
              complications: ['Peritonsillar abscess', 'Rheumatic fever', 'Glomerulonephritis', 'Lemierre\'s syndrome']
            },
            diagnostics: {
              microbiology: [
                { test: 'Strep test', finding: 'Positive', interpretation: 'Rapid diagnosis' },
                { test: 'Throat swab culture', finding: 'GAS', significance: 'Confirmation' }
              ]
            },
            differential: [
              { disease: 'Viral pharyngitis', distinguishing: 'Mild symptoms, no exudate' },
              { disease: 'Mononucleosis', distinguishing: 'Lymphocytosis, hepatosplenomegaly' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Penicillin V', dose: '4x500mg PO', duration: '10 days', note: 'First choice' },
                  { drug: 'Amoxicillin', dose: '3x500mg PO', duration: '10 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '4x4 million IU IV', duration: '7-10 days', note: 'In severe cases' }
                ],
                icu: [
                  { drug: 'Surgical drainage', dose: 'For abscess', duration: '', note: '' }
                ]
              },
              targeted: 'Penicillin',
              supportive: ['Analgesics', 'Fluids'],
              prevention: ['Hygiene']
            },
            prognosis: {
              mortality: 'Low',
              prognostic_scores: ['None'],
              factors: 'Late treatment'
            }
          },
          {
            id: 'sinusitis',
            name: 'Sinusitis',
            pathogen: { type: 'Virus/Bacterium', name: 'Viruses (first 7-10 days), then Streptococcus pneumoniae, Haemophilus influenzae', gram: 'Mixed', shape: 'variable' },
            epidemiology: {
              incidence: 'Common, adults 1-2x/year',
              risk_groups: ['Patients with allergies', 'Smokers', 'Immunocompromised'],
              seasonality: 'Winter',
              transmission: 'Endogenous, complication of upper respiratory infection'
            },
            pathomechanism: {
              steps: [
                'Nasal mucosa inflammation (virus)',
                'Ostium obstruction',
                'Bacterial superinfection',
                'Purulent inflammation'
              ],
              virulence_factors: ['Biofilm formation']
            },
            clinical: {
              incubation: 'After upper respiratory infection',
              onset: 'Gradual',
              symptoms: [
                { name: 'Facial pain', description: 'Over forehead, sinuses', severity: 'moderate' },
                { name: 'Nasal congestion', description: 'Mucopurulent discharge', severity: 'moderate' },
                { name: 'Headache', description: 'Frontal', severity: 'moderate' },
                { name: 'Fever', description: 'In acute cases', severity: 'mild' }
              ],
              physical_exam: [
                'Facial tenderness',
                'Mucopurulent nasal discharge',
                'Postnasal drip'
              ],
              complications: ['Orbital cellulitis', 'Meningitis', 'Osteomyelitis']
            },
            diagnostics: {
              imaging: [
                { modality: 'Sinus CT', finding: 'Fluid level, mucosal thickening', significance: 'If needed' }
              ]
            },
            differential: [
              { disease: 'Migraine', distinguishing: 'Unilateral headache, aura' },
              { disease: 'Dental pain', distinguishing: 'Dental examination' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin/Clavulanate', dose: '2x875/125mg PO', duration: '7-10 days', note: 'If bacterial is suspected' },
                  { drug: 'Decongestant', dose: 'Pseudoephedrine', duration: '3-5 days', note: 'Symptomatic' }
                ],
                inpatient: [
                  { drug: 'IV antibiotics', dose: 'If complicated', duration: '', note: '' }
                ],
                icu: [
                  { drug: 'Surgical drainage', dose: 'If abscess', duration: '', note: '' }
                ]
              },
              targeted: 'Antibiotics if bacterial',
              supportive: ['Decongestants', 'Steam inhalation'],
              prevention: ['Allergy treatment']
            },
            prognosis: {
              mortality: 'Low',
              prognostic_scores: ['None'],
              factors: 'Immune status'
            }
          },
          {
            id: 'otitis_media',
            name: 'Otitis Media',
            pathogen: { type: 'Bacterium', name: 'Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis', gram: 'Mixed', shape: 'coccus/bacillus' },
            epidemiology: {
              incidence: 'Common in childhood, 80% experience by age 3',
              risk_groups: ['Infants', 'Children', 'Exposure to passive smoking'],
              seasonality: 'Winter',
              transmission: 'Complication of upper respiratory infection'
            },
            pathomechanism: {
              steps: [
                'Eustachian tube obstruction (adenoid hyperplasia, rhinitis)',
                'Bacterial ascent',
                'Purulent inflammation in the middle ear',
                'Possible eardrum perforation'
              ],
              virulence_factors: ['Biofilm', 'Toxins']
            },
            clinical: {
              incubation: 'After upper respiratory infection',
              onset: 'Sudden',
              symptoms: [
                { name: 'Ear pain', description: 'Severe, children cry', severity: 'severe' },
                { name: 'Fever', description: 'Common', severity: 'moderate' },
                { name: 'Hearing loss', description: 'Temporary', severity: 'moderate' },
                { name: 'Rhinorrhea', description: 'Associated', severity: 'mild' }
              ],
              physical_exam: [
                'Eardrum hyperemia, bulging',
                'Discharge if perforated',
                'Tympanocentesis if needed'
              ],
              complications: ['Mastoiditis', 'Meningitis', 'Labyrinthitis']
            },
            diagnostics: {
              imaging: [
                { modality: 'Otoscopy', finding: 'Eardrum examination', significance: 'Diagnostic' }
              ]
            },
            differential: [
              { disease: 'Otitis externa', distinguishing: 'Pinna is affected' },
              { disease: 'Pharyngitis', distinguishing: 'No ear pain' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin', dose: '3x40mg/kg PO', duration: '7-10 days', note: 'First choice' },
                  { drug: 'Cefuroxime', dose: '2x250mg PO', duration: '7 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'IV antibiotics', dose: 'If complicated', duration: '', note: '' }
                ],
                icu: [
                  { drug: 'Surgical drainage', dose: 'If abscess', duration: '', note: '' }
                ]
              },
              targeted: 'Antibiotics',
              supportive: ['Analgesics', 'Decongestants'],
              prevention: ['Vaccines (Pneumococcus, Hib)']
            },
            prognosis: {
              mortality: 'Low',
              prognostic_scores: ['None'],
              factors: 'Age, recurrence'
            }
          }
        ]
      }
});          
