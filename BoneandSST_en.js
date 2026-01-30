Object.assign(window.diseases, {
     skin_soft_tissue: {
        name: 'Skin and Soft Tissue Infections',
        icon: window.diseaseMetadata.skin_soft_tissue.icon,
        color: window.diseaseMetadata.skin_soft_tissue.color,
        diseases: [
          {
            id: 'necrotizing_fasciitis',
            name: 'Necrotizing Fasciitis',
            pathogen: { type: 'Bacterium', name: 'Polymicrobial or Strep. pyogenes/S. aureus', gram: 'Mixed', shape: 'Variable' },
            epidemiology: {
              incidence: 'Rare (0.4/100,000), but increasing incidence',
              risk_groups: ['Diabetes mellitus', 'Peripheral vascular disease', 'Immunosuppression', 'Chronic alcoholism', 'IV drug users', 'Post-trauma/surgery'],
              seasonality: 'None',
              transmission: 'Endogenous (skin breach) or direct inoculation'
            },
            pathomechanism: {
              steps: [
                'Bacteria enter subcutaneous tissues (trauma, wound, varicella)',
                'Rapid spread along fascial planes',
                'Bacterial toxins → thrombosis in microvasculature',
                'Tissue ischemia and necrosis',
                'Toxin-mediated shock (streptococcus)',
                'Skin initially intact as superficial blood supply is compromised later'
              ],
              virulence_factors: ['Strep: M protein, Streptolysins, SpeA/B/C superantigens', 'Staph: PVL, α-toxin', 'Anaerobes: collagenases, proteases']
            },
            clinical: {
              incubation: 'Hours-days (after trauma)',
              onset: 'Hyperacute, rapidly progressing',
              symptoms: [
                { name: 'Intense pain', description: 'DISPROPORTIONATE to physical findings (75-100%), early sign', severity: 'severe' },
                { name: 'Swelling/Edema', description: 'Tense, spreading edema (75-100%)', severity: 'severe' },
                { name: 'Skin changes', description: 'Erythema (70-100%), later livid discoloration, bullae, necrosis (late signs!)', severity: 'severe' },
                { name: 'Fever', description: 'Common, but may be absent', severity: 'moderate' },
                { name: 'Crepitus', description: 'Gas formation (13-30% - not always present!)', severity: 'severe' },
                { name: 'Toxic state', description: 'Hypotension, tachycardia, altered mental status', severity: 'severe' }
              ],
              physical_exam: [
                'Pain is disproportionately SEVERE to what is seen (early sign!)',
                'Tense edema, rapid spread',
                'Skin: erythema → livid → bullae → necrosis',
                'Anesthesia in the area (nerve damage)',
                'Crepitus on palpation (gas)',
                'Systemic signs: tachycardia, hypotension, confusion'
              ],
              complications: ['Septic shock', 'Multi-organ failure', 'Limb loss', 'Death (20-40% even with treatment)']
            },
            diagnostics: {
              laboratory: [
                { test: 'LRINEC score', finding: '>6: high probability', interpretation: 'CRP, white blood cell, hemoglobin, sodium, creatinine, glucose' },
                { test: 'CBC', finding: 'Leukocytosis or leukopenia', interpretation: 'Sepsis' },
                { test: 'CRP/PCT', finding: 'Extremely elevated', interpretation: 'Severe bacterial infection' },
                { test: 'Lactate', finding: 'Elevated', interpretation: 'Tissue hypoperfusion' },
                { test: 'CK', finding: 'Elevated', interpretation: 'Muscle involvement' }
              ],
              imaging: [
                { modality: 'Contrast CT', finding: 'Fascial thickening, gas in soft tissues, fluid collection', significance: 'Fast, assesses extent' },
                { modality: 'MRI', finding: 'More sensitive for fascial involvement', significance: 'If time permits and patient is stable' }
              ],
              microbiology: [
                { test: 'Blood culture', finding: 'Positive in 20-40%', significance: 'Pathogen identification' },
                { test: 'Surgical tissue sample', finding: 'Culture + Gram', significance: 'Gold standard' },
                { test: 'Finger test', finding: 'Fascia can be dissected, "dishwater" pus', significance: 'Intraoperative diagnosis' }
              ]
            }, 
            differential: [
              { disease: 'Cellulitis', distinguishing: 'Less toxic, no disproportionate pain, slower progression' },
              { disease: 'Deep Vein Thrombosis (DVT)', distinguishing: 'No fever, no significant erythema, confirmed by Doppler US' },
              { disease: 'Gas gangrene (Clostridium)', distinguishing: 'Muscle necrosis dominates, faster, bronze skin' },
              { disease: 'Pyomyositis', distinguishing: 'Muscle abscess, MRI' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'NO outpatient treatment!', dose: 'IMMEDIATE SURGERY!', duration: '', note: 'Surgical emergency!' }
                ],
                inpatient: [
                  { drug: 'Piperacillin/tazobactam', dose: '4x4.5g IV', duration: 'Based on clinical response', note: 'Broad spectrum' },
                  { drug: '+ Vancomycin', dose: '2x15-20mg/kg IV', duration: '', note: 'MRSA coverage' },
                  { drug: '+ Clindamycin', dose: '3x900mg IV', duration: '', note: 'Toxin production inhibition!' }
                ],
                icu: [
                  { drug: 'Meropenem', dose: '3x1g IV', duration: '', note: 'Alternative' },
                  { drug: '+ Vancomycin + Clindamycin', dose: '', duration: '', note: 'Triple therapy' },
                  { drug: 'IVIG', dose: '1-2g/kg', duration: '', note: 'In streptococcal toxic shock syndrome' }
                ]
              },
              targeted: 'Based on culture results. For Group A Strep (GAS): Penicillin G + Clindamycin. For MRSA: Vancomycin or Linezolid. For polymicrobial infections: continue broad-spectrum coverage guided by sensitivities.',
              supportive: ['IMMEDIATE aggressive surgical debridement', 'ICU admission', 'Vasopressors', 'Multiple revisions (every 24-48 hours)', 'HBO therapy (adjunctive)'],
              prevention: ['Wound hygiene', 'Diabetes control', 'Early cellulitis treatment']
            },
            guidelines: {
              diagnosis: [
                'Clinical suspicion: Pain disproportionate to findings, rapid progression, toxic state.',
                'LRINEC score >6 increases suspicion but does not rule it out.',
                'Imaging (CT/MRI): Gas, fascial thickening, but must not delay surgery!',
                'Definitive diagnosis: Surgical exploration ("finger test").'
              ],
              treatment_indications: [
                'All suspected cases require immediate surgical intervention.'
              ],
              first_line: [
                'Immediate and radical surgical debridement + Broad-spectrum antibiotics (e.g., Piperacillin/tazobactam OR Carbapenem + Clindamycin + Vancomycin).'
              ]
            },
            prognosis: {
              mortality: '20-40% even with treatment, 100% without treatment',
              prognostic_scores: ['LRINEC', 'SOFA'],
              factors: 'Delayed diagnosis, delayed surgery, immunosuppression, STSS, organ failure'
            }
          },
          {
            id: 'erysipelas',
            name: 'Erysipelas',
            pathogen: { type: 'Bacterium', name: 'Streptococcus pyogenes (Group A Streptococcus)', gram: 'Gram-positive', shape: 'coccus' },
            epidemiology: {
              incidence: 'Common skin infection, 10-100/100,000 per year',
              risk_groups: ['Elderly', 'Infants', 'Diabetes mellitus', 'Chronic venous insufficiency', 'Lymphedema', 'Skin lesions'],
              seasonality: 'Mostly winter-spring',
              transmission: 'Endogenous (skin breach) or contact'
            },
            pathomechanism: {
              steps: [
                'Bacteria enter the skin (injury, eczema, wound)',
                'Spread through the lymphatic system',
                'Local inflammatory response',
                'Toxin production (streptolysins, pyrogenic toxins)',
                'Systemic symptoms (fever, toxemia)'
              ],
              virulence_factors: ['M protein', 'Streptolysins (O, S)', 'Hyaluronidase', 'Streptokinase']
            },
            clinical: {
              incubation: '2-5 days',
              onset: 'Acute',
              symptoms: [
                { name: 'Prodrome', description: 'Fever, chills often precede skin symptoms (by 4-48 hours)', severity: 'moderate' },
                { name: 'Skin symptoms', description: 'Sharp-edged, raised, bright red plaque ("flame-like")', severity: 'severe' },
                { name: 'Location', description: 'Lower limb (70-80%), Face (5-20%)', severity: 'mild' },
                { name: 'Pain', description: 'Burning, tense character', severity: 'moderate' },
                { name: 'Lymph node', description: 'Regional lymphadenitis is common', severity: 'moderate' }
              ],
              physical_exam: [
                'Red, warm, swollen area',
                'Sharp, raised borders (characteristic)',
                'Bullae or pustules may be present',
                'Lymphadenitis (regional lymph nodes swollen)',
                'Systemic signs: tachycardia, hypotension'
              ],
              complications: ['Progression to cellulitis', 'Septic shock', 'Glomerulonephritis', 'Recurrence is common']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis', interpretation: 'Inflammation' },
                { test: 'CRP', finding: 'Elevated', interpretation: 'Acute phase' },
                { test: 'Blood culture', finding: 'Rarely positive', interpretation: 'In systemic infection' }
              ],
              imaging: [
                { modality: 'Not routinely needed', finding: '-', significance: 'Diagnosis is clinical. Ultrasound can rule out deeper abscess.' }
              ],
              microbiology: [
                { test: 'Blood culture', finding: 'Rarely positive (<5%)', significance: 'Should be taken in severe/systemic cases' }
              ]
            }, 
            differential: [
              { disease: 'Cellulitis', distinguishing: 'Deeper, less sharp borders, no raised plaque' },
              { disease: 'Herpes zoster', distinguishing: 'Vesicles, along a dermatome' },
              { disease: 'Erythema migrans (Lyme)', distinguishing: 'Centrifugal spread, history' },
              { disease: 'Contact dermatitis', distinguishing: 'No fever, pruritus' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Penicillin V', dose: '4x500mg PO', duration: '10-14 days', note: 'First choice' },
                  { drug: 'Amoxicillin', dose: '3x500mg PO', duration: '10-14 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '4x4-6 million IU IV', duration: '7-10 days', note: 'In severe cases' },
                  { drug: 'Ceftriaxone', dose: '1x2g IV', duration: '7-10 days', note: 'In case of penicillin allergy' }
                ],
                icu: [
                  { drug: 'Broad spectrum', dose: 'IV', duration: '', note: 'In complicated cases' }
                ]
              },
              targeted: 'Streptococcus pyogenes: Penicillin. Allergy: Erythromycin/Clindamycin',
              supportive: ['Rest', 'Elevated limb', 'Analgesics', 'Antipyretics'],
              prevention: ['Prevention of skin injuries', 'Hygiene', 'Prophylaxis for recurrence (Penicillin monthly)']
            },
            guidelines: {
              diagnosis: [
                'Clinical diagnosis: Sharp-edged, flame-like, raised red plaque.',
                'Labs: Leukocytosis, high CRP. Culture is usually not necessary.'
              ],
              treatment_indications: [
                'All cases should be treated. Hospitalization for systemic symptoms, severe local findings, comorbidities.'
              ],
              first_line: [
                'Penicillin V (PO) or Penicillin G (IV). Clindamycin for allergy.'
              ]
            },
            prognosis: {
              mortality: 'Low (<1%)',
              prognostic_scores: ['None'],
              factors: 'Old age, immunosuppression, delayed treatment'
            }
          },
          {
            id: 'cellulitis',
            name: 'Cellulitis',
            pathogen: { type: 'Bacterium', name: 'Streptococcus pyogenes or Staphylococcus aureus (most common)', gram: 'Gram-positive', shape: 'coccus' },
            epidemiology: {
              incidence: 'Common, 200/100,000 per year',
              risk_groups: ['Diabetes mellitus', 'Peripheral vascular disease', 'Obesity', 'Immunosuppression', 'Skin injuries', 'Lymphedema'],
              seasonality: 'Mostly summer',
              transmission: 'Endogenous (skin breach) or exogenous inoculation'
            },
            pathomechanism: {
              steps: [
                'Bacteria enter the dermis and subcutaneous tissues',
                'Local inflammation (neutrophils, edema)',
                'Spread in subcutaneous planes',
                'Lymphatic obstruction → increased edema',
                'Systemic response (fever, leukocytosis)'
              ],
              virulence_factors: ['Streptococcus: M protein, toxins', 'Staphylococcus: PVL, coagulase']
            },
            clinical: {
              incubation: '1-3 days',
              onset: 'Acute',
              symptoms: [
                { name: 'Skin symptoms', description: 'Diffuse, non-sharp-edged erythema, warmth, swelling', severity: 'moderate' },
                { name: 'Pain', description: 'Tenderness, tension', severity: 'moderate' },
                { name: 'Systemic symptoms', description: 'Fever, chills, malaise (common)', severity: 'moderate' },
                { name: 'Lymphangitis', description: 'Red streaks along lymphatic vessels', severity: 'mild' },
                { name: 'Location', description: 'Most commonly lower limb (unilateral)', severity: 'mild' }
              ],
              physical_exam: [
                'Red, warm, swollen skin',
                'Diffuse, non-sharp borders',
                'Tenderness',
                'Lymphangitis (red streaks)',
                'Systemic: tachycardia, fever'
              ],
              complications: ['Abscess', 'Necrotizing fasciitis', 'Septic shock', 'Osteomyelitis', 'Lymphedema']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis', interpretation: 'Inflammation' },
                { test: 'CRP', finding: 'Elevated', interpretation: 'Acute phase' },
                { test: 'Blood culture', finding: 'Rarely positive', interpretation: 'In severe cases' }
              ],
              imaging: [
                { modality: 'Ultrasound', finding: 'Fluid collection, abscess', significance: 'If suspected' },
                { modality: 'CT/MRI', finding: 'Deeper spread', significance: 'In complicated cases' }
              ],
              microbiology: [
                { test: 'Blood culture', finding: 'Rarely positive (<5-10%)', significance: 'Recommended in severe cases, immunosuppression, or systemic toxicity' }
              ]
            }, 
            differential: [
              { disease: 'Erysipelas', distinguishing: 'Superficial, sharp borders, raised plaque' },
              { disease: 'Abscess', distinguishing: 'Fluctuant swelling, puncture' },
              { disease: 'DVT', distinguishing: 'No erythema, Doppler US' },
              { disease: 'Gout', distinguishing: 'Monoarthritis, hyperuricemia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin/Clavulanate', dose: '3x875/125mg PO', duration: '7-10 days', note: 'First choice' },
                  { drug: 'Cephalexin', dose: '4x500mg PO', duration: '7-10 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxone', dose: '1x2g IV', duration: '7-10 days', note: 'In severe cases' },
                  { drug: '+ Vancomycin', dose: '2x15-20mg/kg IV', duration: '', note: 'If MRSA is suspected' }
                ],
                icu: [
                  { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g IV', duration: '', note: 'Broad spectrum' }
                ]
              },
              targeted: 'Streptococcus: Penicillin; Staphylococcus: Flucloxacillin; MRSA: Vancomycin',
              supportive: ['Rest', 'Elevated limb', 'Analgesics', 'Topical antibiotics are not effective'],
              prevention: ['Prevention of skin injuries', 'Hygiene', 'Diabetes control']
            },
            guidelines: {
              diagnosis: [
                'Clinical diagnosis: Diffuse, non-sharp-edged erythema, warmth, swelling.',
                'Imaging (Ultrasound): If abscess or deeper spread is suspected.'
              ],
              treatment_indications: [
                'All cases should be treated. Hospitalization for systemic symptoms, rapid progression, comorbidities.'
              ],
              first_line: [
                'Coverage for Streptococcus and Staphylococcus is necessary: Amoxicillin/clavulanate or a Cephalosporin. Vancomycin/Linezolid if MRSA is suspected.'
              ]
            },
            prognosis: {
              mortality: 'Low (<1%), but increases with immunosuppression',
              prognostic_scores: ['None'],
              factors: 'Delayed treatment, comorbidities'
            }
          }
        ]
      },
      bone_joint: {
        name: 'Bone and Joint Infections',
        icon: window.diseaseMetadata.bone_joint.icon,
        color: window.diseaseMetadata.bone_joint.color,
        diseases: [
          {
            id: 'osteomyelitis',
            name: 'Osteomyelitis',
            pathogen: { type: 'Bacterium', name: 'Staphylococcus aureus (most common)', gram: 'Gram-positive', shape: 'coccus' },
            epidemiology: {
              incidence: 'Hematogenous in children, post-traumatic/diabetic foot in adults',
              risk_groups: ['Diabetes mellitus', 'Peripheral vascular disease', 'Trauma/surgery', 'IV drug users', 'Hemodialysis'],
              seasonality: 'None',
              transmission: 'Hematogenous spread, direct spread (wound), inoculation (trauma)'
            },
            pathomechanism: {
              steps: [
                'Bacteria adhere to bone tissue/implant',
                'Biofilm formation (basis of chronic infection)',
                'Inflammatory exudate increases intraosseous pressure',
                'Vessel compression → bone necrosis (sequestrum)',
                'New bone formation around the necrosis (involucrum)'
              ],
              virulence_factors: ['Biofilm formation', 'Adhesins (MSCRAMM)', 'Toxins']
            },
            clinical: {
              incubation: 'Days (acute) or weeks-months (chronic)',
              onset: 'Variable',
              symptoms: [
                { name: 'Local pain', description: 'Deep, throbbing pain (>90%), worsens with weight-bearing', severity: 'severe' },
                { name: 'Fever', description: 'Common in acute hematogenous form (50-70%), rare in chronic', severity: 'moderate' },
                { name: 'Swelling/Erythema', description: 'Soft tissue swelling and redness over the affected area', severity: 'moderate' },
                { name: 'Sinus tract', description: 'Purulent discharge to the skin surface (sign of chronic osteomyelitis)', severity: 'moderate' }
              ],
              physical_exam: [
                'Local tenderness over the bone',
                'Warmth, swelling, erythema',
                'Limited movement of the affected limb',
                'Probe-to-bone test: Bone can be palpated with a probe at the base of an ulcer (high specificity)'
              ],
              complications: ['Chronic osteomyelitis', 'Pathological fracture', 'Septic arthritis', 'Systemic sepsis', 'Need for amputation']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis (acute)', interpretation: 'Inflammation' },
                { test: 'CRP/ESR', finding: 'Elevated', interpretation: 'Good for monitoring' },
                { test: 'Blood culture', finding: 'Positive (50%)', interpretation: 'In hematogenous origin' }
              ],
              imaging: [
                { modality: 'X-ray', finding: 'Negative in early phase! Later periosteal reaction, lytic lesions', significance: 'Late sign' },
                { modality: 'MRI', finding: 'Bone marrow edema, abscess', significance: 'Gold standard (most sensitive)' },
                { modality: 'Bone scintigraphy', finding: 'Increased uptake', significance: 'If MRI cannot be performed' }
              ],
              microbiology: [
                { test: 'Bone biopsy culture', finding: 'Pathogen identification', significance: 'Gold standard diagnosis' },
                { test: 'Sinus tract discharge', finding: 'Often contaminated', significance: 'Not reliable' }
              ]
            },
            differential: [
              { disease: 'Charcot foot', distinguishing: 'No fever/inflammatory labs, neuropathy dominates' },
              { disease: 'Ewing sarcoma', distinguishing: 'X-ray (onion skin), biopsy' },
              { disease: 'Cellulitis', distinguishing: 'Only soft tissue involved, MRI differentiates' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'None', dose: '-', duration: '-', note: 'Usually requires hospital treatment/investigation' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20mg/kg IV', duration: '4-6 weeks', note: 'MRSA coverage' },
                  { drug: '+ Ceftriaxone/Cefepime', dose: 'IV', duration: '4-6 weeks', note: 'Gram-negative coverage' }
                ],
                icu: [
                  { drug: 'Broad spectrum', dose: 'IV', duration: '', note: 'In case of sepsis' }
                ]
              },
              targeted: 'Based on bone biopsy! S. aureus: Flucloxacillin/Cefazolin; MRSA: Vancomycin/Daptomycin. Duration: 4-6 weeks (often IV)',
              supportive: ['Surgical debridement (removal of necrotic bone) - CRITICAL!', 'Immobilization', 'Analgesics'],
              prevention: ['Immediate care of open fractures', 'Surgical sterility', 'Diabetic foot care']
            },
            guidelines: {
              diagnosis: [
                'Imaging: MRI is the gold standard for early diagnosis.',
                'Microbiology: Bone biopsy for culture is essential for targeted therapy. Sinus tract discharge is not reliable.'
              ],
              treatment_indications: [
                'All confirmed cases of osteomyelitis must be treated.'
              ],
              first_line: [
                'Long-term (4-6 weeks) IV antibiotic therapy based on biopsy results + surgical debridement.'
              ]
            },
            prognosis: {
              mortality: 'Low, but morbidity is high (chronicity)',
              prognostic_scores: ['Cierny-Mader classification'],
              factors: 'Blood supply, presence of implant, surgical radicality'
            }
          },
          {
            id: 'septic_arthritis',
            name: 'Septic Arthritis',
            pathogen: { type: 'Bacterium', name: 'Staphylococcus aureus, N. gonorrhoeae', gram: 'Mixed', shape: 'coccus' },
            epidemiology: {
              incidence: '2-10/100,000 per year',
              risk_groups: ['Rheumatoid arthritis', 'Joint prosthesis', 'Elderly (>80 years)', 'Diabetes', 'IV drug users', 'Sexually active young people (Gonococcus)'],
              seasonality: 'None',
              transmission: 'Hematogenous (most common), direct inoculation, per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Bacteria enter the joint space',
                'Colonization of the synovial membrane',
                'Acute inflammatory response (neutrophil influx)',
                'Release of proteolytic enzymes',
                'Rapid destruction of cartilage and bone (within days!)'
              ],
              virulence_factors: ['Adhesins', 'Toxins', 'Cartilage-damaging enzymes']
            },
            clinical: {
              incubation: 'Rapid (hours-days)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Acute monoarthritis', description: 'Pain and swelling of a single joint (80-90%)', severity: 'severe' },
                { name: 'Pain', description: 'Intense, even at rest, extreme on movement', severity: 'severe' },
                { name: 'Fever', description: 'Common (60-80%), but may be absent (elderly, immunosuppressed)', severity: 'moderate' },
                { name: 'Immobility', description: 'Inability to use the affected joint', severity: 'severe' }
              ],
              physical_exam: [
                'Swollen, warm, red joint',
                'Extreme tenderness',
                'Painful passive and active movement',
                'Joint effusion',
                'Gonococcus: migratory polyarthritis, tenosynovitis, dermatitis (pustules)'
              ],
              complications: ['Joint destruction (arthrosis)', 'Ankylosis', 'Sepsis', 'Osteomyelitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis', interpretation: 'Systemic reaction' },
                { test: 'CRP/ESR', finding: 'Significantly elevated', interpretation: 'Inflammation' }
              ],
              imaging: [
                { modality: 'X-ray', finding: 'Initially negative/soft tissue swelling, later joint space narrowing', significance: 'Baseline' },
                { modality: 'Ultrasound', finding: 'Joint fluid', significance: 'Guiding puncture' }
              ],
              microbiology: [
                { test: 'Joint aspiration (Arthrocentesis)', finding: 'Purulent, >50,000 WBC/µL, >90% PMN', significance: 'DIAGNOSTIC!' },
                { test: 'Synovial fluid culture', finding: 'Positive', significance: 'Gold standard' },
                { test: 'Blood culture', finding: 'Positive (50%)', significance: 'Always take' },
                { test: 'PCR', finding: 'Gonococcus/Lyme', significance: 'If culture is negative' }
              ]
            },
            differential: [
              { disease: 'Gout', distinguishing: 'Crystals in aspirate (negative birefringence)' },
              { disease: 'Pseudogout (CPPD)', distinguishing: 'Positively birefringent crystals' },
              { disease: 'Reactive arthritis', distinguishing: 'Sterile inflammation, history (GI/GU infection)' },
              { disease: 'Lyme arthritis', distinguishing: 'Less painful, serology' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'None', dose: '-', duration: '-', note: 'Emergency hospital admission!' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20mg/kg IV', duration: '', note: 'Gram+ (MRSA) coverage' },
                  { drug: '+ Ceftriaxone', dose: '1x2g IV', duration: '', note: 'Gram- (Gonococcus) coverage' }
                ],
                icu: [
                  { drug: 'Broad spectrum', dose: 'IV', duration: '', note: 'In case of sepsis' }
                ]
              },
              targeted: 'S. aureus: Cefazolin/Oxacillin; MRSA: Vancomycin; Gonococcus: Ceftriaxone. Duration: 2-4 weeks (IV then PO)',
              supportive: ['Joint drainage (daily needle aspiration OR arthroscopy) - MANDATORY!', 'Analgesics', 'Early mobilization after inflammation subsides'],
              prevention: ['Sterility in prosthesis surgeries', 'Prevention of gonorrhea']
            },
            guidelines: {
              diagnosis: [
                'Joint aspiration (arthrocentesis) is mandatory: purulent fluid, >50,000 WBC/µL, >90% PMNs.',
                'Synovial fluid Gram stain and culture, as well as blood cultures, should be obtained.'
              ],
              treatment_indications: [
                'All suspected cases require emergency management.'
              ],
              first_line: [
                'Immediate joint drainage + empiric IV antibiotics (e.g., Vancomycin + Ceftriaxone), followed by targeted therapy.'
              ]
            },
            prognosis: {
              mortality: '10-15% (higher in polyarticular/elderly patients)',
              prognostic_scores: ['None'],
              factors: 'Delayed drainage (>24-48 hours) causes irreversible cartilage damage!'
            }
          },
          {
            id: 'spondylodiscitis',
            name: 'Spondylodiscitis',
            pathogen: { type: 'Bacterium', name: 'Staphylococcus aureus (most common), Streptococcus spp., Gram-negatives', gram: 'Mixed', shape: 'coccus/bacillus' },
            epidemiology: {
              incidence: 'Rare, 2-7/100,000 per year',
              risk_groups: ['Elderly (>50 years)', 'Diabetes mellitus', 'Immunosuppression', 'IV drug users', 'Post-spine surgery', 'Urogenital infections'],
              seasonality: 'None',
              transmission: 'Hematogenous (most common), direct (surgery, trauma), per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Bacterial spread into the bloodstream (e.g., UTI, endocarditis)',
                'Adhesion in spinal vessels (end arteries)',
                'Colonization of intervertebral disc and vertebrae',
                'Inflammatory response → edema, necrosis',
                'Biofilm formation → chronic infection'
              ],
              virulence_factors: ['Adhesins (MSCRAMM)', 'Biofilm formation', 'Toxins']
            },
            clinical: {
              incubation: 'Days-weeks',
              onset: 'Slow, insidious',
              symptoms: [
                { name: 'Back pain', description: 'Leading symptom (>90%), gradually worsening, present even at rest', severity: 'severe' },
                { name: 'Fever', description: 'Present in only ~50% of cases, often low-grade', severity: 'moderate' },
                { name: 'Neurological symptoms', description: 'Radicular pain, weakness, paresis (30-50%)', severity: 'severe' },
                { name: 'General symptoms', description: 'Fatigue, weight loss, night sweats', severity: 'mild' }
              ],
              physical_exam: [
                'Local tenderness or percussion pain over the affected vertebra',
                'Paravertebral muscle spasm',
                'Limited spinal mobility',
                'Neurological deficit (paresis, loss of reflexes, sensory disturbance)'
              ],
              complications: ['Epidural abscess', 'Paravertebral abscess', 'Septic shock', 'Spinal deformity', 'Chronic pain']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis or normal', interpretation: 'Inflammation' },
                { test: 'CRP/ESR', finding: 'Significantly elevated', interpretation: 'Excellent for monitoring' },
                { test: 'Blood culture', finding: 'Positive (50-70%)', interpretation: 'Pathogen identification' }
              ],
              imaging: [
                { modality: 'X-ray', finding: 'Late sign: vertebral destruction, disc height reduction', significance: 'Not sensitive in early stage' },
                { modality: 'MRI', finding: 'Bone marrow edema, disc inflammation, abscess', significance: 'Gold standard (sensitivity >90%)' },
                { modality: 'CT', finding: 'Bone destruction, abscess', significance: 'If MRI is not feasible' }
              ],
              microbiology: [
                { test: 'CT-guided biopsy', finding: 'Culture + histology', significance: 'Gold standard diagnosis' },
                { test: 'Blood culture', finding: 'Positive', significance: 'Often sufficient' }
              ]
            },
            differential: [
              { disease: 'Degenerative spine disease', distinguishing: 'No fever/CRP elevation, different MRI' },
              { disease: 'Spinal tumor/metastasis', distinguishing: 'History, biopsy' },
              { disease: 'Ankylosing spondylitis', distinguishing: 'Younger age, HLA-B27 positive' },
              { disease: 'Tuberculous spondylitis', distinguishing: 'Chronic, multiple vertebrae, tuberculin test' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'None', dose: '-', duration: '-', note: 'Hospitalization required' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20mg/kg IV', duration: '4-6 weeks', note: 'MRSA coverage' },
                  { drug: '+ Ceftriaxone/Cefepime', dose: 'IV', duration: '4-6 weeks', note: 'Gram-negative coverage' }
                ],
                icu: [
                  { drug: 'Broad spectrum', dose: 'IV', duration: '', note: 'In case of sepsis/abscess' }
                ]
              },
              targeted: 'Based on biopsy! S. aureus: Flucloxacillin/Cefazolin; MRSA: Vancomycin; Gram-negative: Ceftriaxone. Duration: 6-12 weeks (IV then PO)',
              supportive: ['Surgical debridement (for abscess) - often necessary!', 'Spinal stabilization', 'Analgesics', 'Physiotherapy'],
              prevention: ['UTI/endo prophylaxis', 'Surgical sterility', 'Diabetes control']
            },
            guidelines: {
              diagnosis: [
                'Clinical suspicion: New or worsening back pain with fever/elevated inflammatory markers.',
                'Imaging: MRI is the gold standard.',
                'Microbiology: Blood cultures. If negative, CT-guided biopsy is necessary.'
              ],
              treatment_indications: [
                'All confirmed cases must be treated. Surgical intervention for neurological deficit, instability, or abscess.'
              ],
              first_line: [
                'Long-term (6-12 weeks) IV, then PO antibiotic therapy based on culture results.'
              ]
            },
            prognosis: {
              mortality: '2-10%',
              prognostic_scores: ['None specific'],
              factors: 'Delayed diagnosis, neurological deficit, comorbidities'
            }
          }
        ]
      }
});