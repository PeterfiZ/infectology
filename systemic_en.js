Object.assign(window.diseases, {
      sepsis_systemic: {
        name: 'Sepsis and Systemic Infections',
        icon: '⚡',
        color: '#7f1d1d',
        diseases: [
          {
            id: 'sepsis',
            name: 'Sepsis',
            pathogen: { type: 'Syndrome', name: 'Bacteria (G+/G-), Fungi, Virus', gram: 'Variable', shape: '-' },
            epidemiology: {
              incidence: 'Worldwide 49 million cases/year, 11 million deaths (20% of all deaths)',
              risk_groups: ['Elderly (>65 years)', 'Infants (<1 year)', 'Immunocompromised', 'Patients with chronic diseases', 'Patients with invasive devices'],
              seasonality: 'None (more common in winter due to respiratory origin)',
              transmission: 'Not contagious (the causative infection might be)'
            },
            pathomechanism: {
              steps: [
                'During infection, pathogen-associated molecular patterns (PAMPs) are recognized by receptors of the innate immune system (e.g., Toll-like receptors), triggering a massive inflammatory response.',
                'A pro-inflammatory cytokine storm (TNF-α, IL-1, IL-6) develops, leading to systemic endothelial activation and damage, increasing vascular permeability (capillary leakage).',
                'Activation of the coagulation cascade and inhibition of fibrinolysis lead to disseminated intravascular coagulation (DIC) and formation of microthrombi.',
                'Microcirculatory dysfunction, tissue hypoxia, and mitochondrial dysfunction ultimately lead to multiple organ dysfunction syndrome (MODS) and death.'
              ],
              virulence_factors: ['Endotoxin (LPS)', 'Superantigens', 'Exotoxins', 'Capsule']
            },
            clinical: {
              incubation: 'Depends on underlying disease',
              onset: 'Can progress within hours',
              symptoms: [
                { name: 'Fever or Hypothermia', description: '>38°C or <36°C (10-20% of patients are hypothermic)', severity: 'severe' },
                { name: 'Altered mental status', description: 'GCS <15, agitation, lethargy (common early sign in elderly)', severity: 'severe' },
                { name: 'Hypotension', description: 'Systolic BP <100 mmHg or MAP <65 mmHg', severity: 'severe' },
                { name: 'Tachypnea', description: '>22/min (often the first sign)', severity: 'moderate' },
                { name: 'Oliguria', description: '<0.5 ml/kg/hour (decreased renal perfusion)', severity: 'severe' },
                { name: 'Skin symptoms', description: 'Mottling, cold extremities (signs of shock)', severity: 'severe' }
              ],
              physical_exam: [
                'Fever or hypothermia',
                'Tachycardia (>90/min)',
                'Tachypnea (>20/min)',
                'Prolonged capillary refill time (>3 sec)',
                'Mottled skin (mottling score)',
                'Confusion'
              ],
              complications: ['Septic shock (vasopressor requirement + lactate >2)', 'ARDS', 'DIC', 'Acute kidney injury', 'Liver failure', 'Death']
            },
            diagnostics: {
              laboratory: [
                { test: 'Lactate', finding: '>2 mmol/L', interpretation: 'Tissue hypoxia/shock (Severe!)' },
                { test: 'Blood culture', finding: 'Positive (30-50%)', interpretation: 'Take BEFORE AB administration (2 sets)' },
                { test: 'PCT', finding: 'Significantly elevated', interpretation: 'Bacterial origin probable' },
                { test: 'CBC', finding: 'Leukocytosis or leukopenia', interpretation: 'Inflammation' }
              ],
              imaging: [
                { modality: 'CT/X-ray/US', finding: 'Source search', significance: 'Crucial for source control' }
              ],
              microbiology: [
                { test: 'Blood culture', finding: 'Pathogen identification', significance: 'Basis for targeted therapy' },
                { test: 'Other cultures', finding: 'Urine, sputum, wound, CSF', significance: 'Source dependent' }
              ],
              scores: [
                'SOFA score (≥2 points change from baseline defines sepsis)',
                'qSOFA (screening): Respiratory rate ≥22/min, Altered mentation (GCS<15), Systolic BP ≤100 mmHg'
              ],
              calculators: [
                {
                  name: 'qSOFA (quick SOFA) - Sepsis Screening',
                  items: [
                    { label: 'Respiratory rate ≥ 22/min', points: 1 },
                    { label: 'Altered mentation (GCS < 15)', points: 1 },
                    { label: 'Systolic BP ≤ 100 mmHg', points: 1 }
                  ],
                  interpretation: [
                    { min: 0, max: 1, text: 'Low risk. Monitor, reassess if necessary.' },
                    { min: 2, max: 3, text: 'High risk for poor outcome. Sepsis suspected, assess SOFA score.' }
                  ]
                }
              ]
            },
            differential: [
              { disease: 'Cardiogenic shock', distinguishing: 'Echo (decreased EF), elevated CVP/JVP' },
              { disease: 'Hypovolemic shock', distinguishing: 'History (bleeding, fluid loss), dry mucous membranes' },
              { disease: 'Anaphylaxis', distinguishing: 'Allergen exposure, urticaria, stridor' },
              { disease: 'Adrenal insufficiency', distinguishing: 'Hyponatremia, hyperkalemia, cortisol level' }
            ],
            therapy: {
              guidelines: ['Surviving Sepsis Campaign 2021'],
              empirical: {
                sepsis_six: {
                  title: 'Sepsis Six Bundle (Within 1 Hour!)',
                  drugs: [
                    { drug: '1. Give Oxygen', dose: 'Target SpO2 >94%', duration: 'Immediate', note: 'High flow if necessary.' },
                    { drug: '2. Take Blood Cultures', dose: '2 sets', duration: 'Before AB', note: 'Peripheral (and from line if present).' },
                    { drug: '3. Give IV Antibiotics', dose: 'Broad spectrum', duration: 'Within 1 hour', note: 'Source dependent (e.g., Pip/Tazo, Meropenem).' },
                    { drug: '4. Give IV Fluids', dose: '30 ml/kg crystalloid', duration: 'Bolus', note: 'If hypotension or lactate ≥4 mmol/L. Balanced crystalloids preferred. Consider albumin for large volumes. Avoid HES/gelatins!' },
                    { drug: '5. Measure Lactate', dose: 'Blood', duration: 'Serial', note: 'Monitor tissue perfusion.' },
                    { drug: '6. Monitor Urine Output', dose: 'Hourly', duration: 'Continuous', note: 'Assess renal function and fluid balance.' }
                  ]
                },
                icu: {
                  title: 'Intensive Care Management',
                  drugs: [
                    { drug: 'Norepinephrine', dose: 'Maintain MAP >65 mmHg', duration: 'Continuous', note: 'First choice vasopressor.' },
                    { drug: 'Vasopressin', dose: 'max 0.03 U/min', duration: 'Continuous', note: 'Adjunct to norepinephrine.' },
                    { drug: 'Hydrocortisone', dose: '200mg/day', duration: 'Continuous', note: 'For refractory shock.' }
                  ]
                }
              },
              targeted: 'De-escalation based on antibiogram (PCT can help decision). Source control (abscess drainage, necrotic tissue removal) is essential.',
              supportive: ['Lactate clearance monitoring', 'Ventilation (ARDS protocol)', 'Renal replacement therapy (CRRT)', 'Blood glucose control', 'Thrombosis prophylaxis', 'Stress ulcer prophylaxis'],
              prevention: ['Hospital hygiene', 'Vaccinations (Pneumococcus, Influenza)', 'Early removal of catheters', 'Proper wound care']
            },
            prognosis: {
              mortality: 'Sepsis: 10-20%, Septic shock: 40-60%',
              prognostic_scores: ['SOFA score (≥2 points change)', 'qSOFA (screening)', 'APACHE II'],
              factors: 'Age, comorbidity, lactate level, duration of shock, success of source control'
            }
          },
          {
            id: 'toxic_shock',
            name: 'Toxic Shock Syndrome (TSS)',
            pathogen: { type: 'Bacterium', name: '<i>Staphylococcus aureus, Streptococcus pyogenes</i>', gram: 'Gram-positive', shape: 'coccus' },
            epidemiology: {
              incidence: 'Rare (Staph: 0.5/100,000, Strep: 3/100,000)',
              risk_groups: ['Menstruating women (tampon - rarer now)', 'Surgical patients', 'Burn victims', 'Skin infections'],
              seasonality: 'None',
              transmission: 'Not directly transmitted (toxin mediated)'
            },
            pathomechanism: {
              steps: [
                'During local infection or colonization by Staphylococcus aureus or Streptococcus pyogenes, exotoxins (e.g., TSST-1, SpeA) are produced.',
                'These toxins act as superantigens: binding to MHC II molecules on antigen-presenting cells and T-cell receptors, they non-specifically activate up to 20% of T-cells (normally <0.01%).',
                'This massive T-cell activation leads to an uncontrolled cytokine storm (TNF-α, IL-1, IL-6).',
                'The cytokines cause severe capillary leakage, vasodilation, and hypotension, rapidly leading to shock and multiple organ failure.'
              ],
              virulence_factors: ['TSST-1 (Staph)', 'Streptococcal Pyrogenic Exotoxins (Spe)', 'M-protein (Strep)']
            },
            clinical: {
              incubation: 'Rapid (hours-days)',
              onset: 'Sudden',
              symptoms: [
                { name: 'High fever', description: '>38.9°C (sudden onset)', severity: 'severe' },
                { name: 'Hypotension', description: 'Systolic BP <90 mmHg (adult), orthostatic dizziness', severity: 'severe' },
                { name: 'Diffuse erythroderma', description: 'Sunburn-like rash (Staph: >90%, Strep: rarer)', severity: 'moderate' },
                { name: 'Multisystem symptoms', description: 'GI (vomiting/diarrhea), Muscle pain (CK elevation), Mucosal hyperemia', severity: 'severe' },
                { name: 'Desquamation', description: '1-2 weeks after onset (palms/soles)', severity: 'mild' }
              ],
              physical_exam: [
                'Diffuse red rash (erythroderma)',
                'Hypotension, tachycardia',
                'Mucosal hyperemia (conjunctiva, oropharynx, vagina)',
                'Strawberry tongue (mainly Strep TSS)',
                'Altered mental status (55%)',
                'Signs of local soft tissue infection (Strep TSS: necrotizing fasciitis, myositis)'
              ],
              complications: ['Shock', 'ARDS', 'DIC', 'Renal failure', 'Limb necrosis (Strep)', 'Death']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis, thrombocytopenia', interpretation: 'Systemic inflammation' },
                { test: 'Kidney/Liver', finding: 'Creatinine↑, Transaminases↑', interpretation: 'Organ failure' },
                { test: 'CK', finding: 'Elevated', interpretation: 'Rhabdomyolysis' },
                { test: 'Blood culture', finding: 'Staph: often negative (toxin!), Strep: often positive', interpretation: 'Etiology' }
              ],
              imaging: [
                { modality: 'CT/MRI', finding: 'Search for deep tissue infection', significance: 'Strep TSS (necrotizing fasciitis)' }
              ],
              microbiology: [
                { test: 'Culture', finding: 'Wound, vagina, throat, blood', significance: 'Pathogen identification' },
                { test: 'Toxin detection', finding: 'TSST-1', significance: 'Reference lab' }
              ]
            },
            differential: [
              { disease: 'Sepsis (other)', distinguishing: 'No characteristic rash/desquamation' },
              { disease: 'Meningococcemia', distinguishing: 'Petechiae/purpura, meningitis signs' },
              { disease: 'Drug reaction (DRESS)', distinguishing: 'New drug, slower, eosinophilia' },
              { disease: 'Scarlet fever', distinguishing: 'Milder, no shock' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'None', dose: '-', duration: '-', note: 'Immediate ICU admission!' }
                ],
                inpatient: [
                  { drug: 'Clindamycin', dose: '900mg IV q8h', duration: '', note: 'Inhibition of toxin production! (Crucial)' },
                  { drug: '+ Vancomycin/Linezolid', dose: 'IV', duration: '', note: 'MRSA coverage' },
                  { drug: '+ Pip/Tazo or Meropenem', dose: 'IV', duration: '', note: 'If polymicrobial suspicion' }
                ],
                icu: [
                  { drug: 'IVIG', dose: '1-2g/kg', duration: 'Single', note: 'Toxin neutralization (Strep TSS)' },
                  { drug: 'Vasopressors', dose: 'Norepinephrine', duration: '', note: 'Shock management' }
                ]
              },
              targeted: 'Staph (MSSA): Flucloxacillin (Cefazolin) + Clindamycin; MRSA: Vancomycin + Clindamycin. Strep: Penicillin G + Clindamycin (toxin inhibition). IVIG in severe cases. Source control (tampon removal, surgical exploration) is essential!',
              supportive: ['Massive fluid resuscitation', 'Ventilation', 'Dialysis', 'Wound care'],
              prevention: ['Tampon hygiene (frequent change)', 'Wound disinfection']
            },
            prognosis: {
              mortality: 'Staph TSS: <3%, Strep TSS: 30-70%',
              prognostic_scores: ['SOFA'],
              factors: 'Pathogen (Strep worse), age, underlying disease'
            }
          }
        ]
      },
      fungal: {
        name: 'Fungal Infections',
        icon: '🍄',
        color: '#d97706',
        diseases: [
          {
            id: 'candidiasis',
            name: 'Invasive Candidiasis',
            pathogen: { type: 'Fungus', name: '<i>Candida albicans</i> (and non-albicans species)', gram: 'Yeast', shape: 'oval' },
            epidemiology: {
              incidence: '4th most common cause of nosocomial bloodstream infections',
              risk_groups: ['ICU patients', 'Central venous catheter (CVC)', 'Broad-spectrum antibiotics', 'TPN', 'Abdominal surgery'],
              seasonality: 'None',
              transmission: 'Endogenous (from GI tract), exogenous (hands, devices)'
            },
            pathomechanism: {
              steps: [
                'Mucosal barrier damage (AB, chemo)',
                'Translocation into bloodstream',
                'Biofilm formation (catheter)',
                'Hematogenous spread (eye, heart, liver, spleen)'
              ],
              virulence_factors: ['Biofilm', 'Adhesins', 'Enzymes (protease, phospholipase)']
            },
            clinical: {
              incubation: 'Variable',
              onset: 'Slow or acute',
              symptoms: [
                { name: 'Persistent fever', description: 'Fever unresponsive to antibiotics (common)', severity: 'severe' },
                { name: 'Sepsis/Septic shock', description: 'Hypotension, tachycardia, altered mental status', severity: 'severe' },
                { name: 'Endophthalmitis', description: 'Visual disturbance, eye pain (10-20% in candidemia)', severity: 'moderate' },
                { name: 'Skin symptoms', description: 'Erythematous papules/pustules (5-10%)', severity: 'mild' },
                { name: 'Hepatosplenic candidiasis', description: 'Fever, abdominal pain after neutropenia', severity: 'moderate' }
              ],
              physical_exam: [
                'Fever, hemodynamic instability (signs of sepsis/shock)',
                'Fundoscopy (mandatory!): White, cotton-wool spots (Roth spot), chorioretinitis',
                'Skin symptoms: Erythematous papules or pustules',
                'New heart murmur (suspicion of endocarditis)',
                'Muscle tenderness (myositis)'
              ],
              complications: ['Septic shock', 'Endophthalmitis (blindness)', 'Endocarditis', 'Osteomyelitis', 'Death']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blood culture', finding: 'Positive (only 50-70% sensitive!)', interpretation: 'Gold standard' },
                { test: 'Beta-D-glucan', finding: 'Elevated (>80 pg/mL)', interpretation: 'Pan-fungal marker (except Mucor/Crypto)' }
              ],
              imaging: [
                { modality: 'Abdominal US/CT', finding: 'Microabscesses (liver, spleen)', significance: 'Chronic disseminated' },
                { modality: 'Ophthalmology', finding: 'Chorioretinitis', significance: 'Mandatory in all fungemic patients!' }
              ],
              microbiology: [
                { test: 'Culture', finding: 'Candida sp.', significance: 'Species identification and resistance (fluconazole!)' },
                { test: 'T2Candida', finding: 'DNA detection from blood', significance: 'Fast, sensitive' }
              ]
            },
            differential: [
              { disease: 'Bacterial sepsis', distinguishing: 'Blood culture, PCT (though can be elevated in fungal too)' },
              { disease: 'Aspergillosis', distinguishing: 'Lung dominance, Galactomannan' },
              { disease: 'Catheter infection (bact)', distinguishing: 'Culture' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'None', dose: '-', duration: '-', note: 'Hospital treatment' }
                ],
                inpatient: [
                  { drug: 'Fluconazole', dose: '800 mg loading, then 400 mg', duration: '14 days', note: 'Only for stable patients with no prior azole exposure' }
                ],
                icu: [
                  { drug: 'Echinocandin (Caspofungin)', dose: '70 mg loading, then 50 mg', duration: '14 days (after negative BC)', note: 'First choice in unstable/severe patients' }
                ]
              },
              targeted: 'C. albicans: Fluconazole (if sensitive); C. glabrata/krusei: Echinocandin. Ophthalmology: systemic + intravitreal therapy.',
              supportive: ['CVC removal (strongly recommended!)', 'Ophthalmology consultation'],
              prevention: ['Hand washing', 'Catheter care', 'Prophylaxis (transplant patients)']
            },
            prognosis: {
              mortality: '30-40% (higher in septic shock)',
              prognostic_scores: ['Candida score'],
              factors: 'Source control (catheter), early therapy'
            }
          },
          {
            id: 'aspergillosis',
            name: 'Invasive Aspergillosis',
            pathogen: { type: 'Fungus', name: '<i>Aspergillus fumigatus</i>', gram: 'Mold', shape: 'hyphae (45° branching)' },
            epidemiology: {
              incidence: '5-10% of neutropenic patients',
              risk_groups: ['Prolonged neutropenia', 'Allogeneic stem cell transplant', 'Solid organ transplant', 'High-dose steroids'],
              seasonality: 'None (construction dust risk)',
              transmission: 'Inhalation of conidia (from air)'
            },
            pathomechanism: {
              steps: [
                'Inhalation of conidia into alveoli',
                'Macrophage failure (immunosuppression)',
                'Germination into hyphae',
                'Angioinvasion (breaking into vessels)',
                'Thrombosis, infarction, tissue necrosis',
                'Hematogenous spread (brain, skin)'
              ],
              virulence_factors: ['Angioinvasion', 'Gliotoxin', 'Melanin']
            },
            clinical: {
              incubation: 'Days-weeks (during immunosuppression)',
              onset: 'Subacute/Acute',
              symptoms: [
                { name: 'Fever', description: 'Fever unresponsive to antibiotics (most common sign in neutropenia)', severity: 'severe' },
                { name: 'Cough', description: 'Dry or productive cough', severity: 'moderate' },
                { name: 'Pleuritic chest pain', description: 'Sharp, stabbing pain (sign of angioinvasion)', severity: 'moderate' },
                { name: 'Hemoptysis', description: 'Bloody sputum (late, severe sign)', severity: 'severe' },
                { name: 'Sinusitis symptoms', description: 'Facial pain, black nasal discharge (rhinosinusitis form)', severity: 'moderate' }
              ],
              physical_exam: [
                'Fever, tachypnea',
                'Lung auscultation may be sparse, or pleural friction rub',
                'Nose/sinus exam: Black, necrotic eschar on turbinate (invasive sinusitis)',
                'Focal neurological signs (brain dissemination)',
                'Skin symptoms (necrotic ulcers in disseminated case)'
              ],
              complications: ['Massive pulmonary hemorrhage', 'Brain abscess', 'Disseminated aspergillosis', 'Death']
            },
            diagnostics: {
              laboratory: [
                { test: 'Galactomannan (GM)', finding: 'Index >0.5', interpretation: 'Serum or BAL (specific for Aspergillus)' },
                { test: 'Beta-D-glucan', finding: 'Positive', interpretation: 'Non-specific' }
              ],
              imaging: [
                { modality: 'Chest CT', finding: 'Halo sign (early), Air-crescent sign (late), nodules', significance: 'Gold standard imaging' }
              ],
              microbiology: [
                { test: 'BAL culture', finding: 'Aspergillus sp.', significance: 'Proven case' },
                { test: 'Microscopy', finding: 'Septate hyphae, 45° branching', significance: 'Biopsy/BAL' }
              ]
            },
            differential: [
              { disease: 'Mucormycosis', distinguishing: 'No septa, 90° branching, Voriconazole ineffective!' },
              { disease: 'Bacterial pneumonia', distinguishing: 'Imaging (halo), GM negative' },
              { disease: 'Pulmonary embolism', distinguishing: 'Angio CT, D-dimer' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'None', dose: '-', duration: '-', note: 'Hospital treatment' }
                ],
                inpatient: [
                  { drug: 'Voriconazole', dose: '6 mg/kg followed by 4 mg/kg IV/PO', duration: '6-12 weeks', note: 'GOLD STANDARD (therapeutic drug monitoring required!)' }
                ],
                icu: [
                  { drug: 'Isavuconazole', dose: '200 mg IV/PO', duration: 'Long-term', note: 'Fewer side effects' },
                  { drug: 'Liposomal Amphotericin B', dose: '3-5 mg/kg IV', duration: '', note: 'Alternative' }
                ]
              },
              targeted: 'Voriconazole or Isavuconazole. Salvage: L-AmB, Caspofungin (combination controversial).',
              supportive: ['Reduction of immunosuppression (if possible)', 'G-CSF (neutropenia recovery)', 'Surgical resection (massive hemoptysis)'],
              prevention: ['Posaconazole prophylaxis (neutropenia)', 'HEPA filtered rooms', 'Mask wearing']
            },
            prognosis: {
              mortality: 'High (30-80% depending on risk group)',
              prognostic_scores: ['None'],
              factors: 'Duration of neutropenia, brain involvement, start of therapy'
            }
          }
        ]
      },
});
