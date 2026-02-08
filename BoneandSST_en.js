Object.assign(window.diseases, {
     skin_soft_tissue: {
        name: 'Skin and Soft Tissue Infections',
        icon: '🩹',
        color: '#e11d48',
        diseases: [
          {
            id: 'necrotizing_fasciitis',
            name: 'Necrotizing Fasciitis',
            pathogen: { type: 'Bacterium', name: 'Polymicrobial (Type I) or Monomicrobial (Type II)', gram: 'Mixed', shape: 'Variable' },
            epidemiology: {
              incidence: 'Rare (0.4-1/100,000), but high mortality',
              risk_groups: ['Type I: Diabetes, immunosuppression, obesity, PVD', 'Type II: Healthy young, trauma, surgery, IV drug use', 'Type III: Seawater exposure, liver disease (Vibrio)'],
              seasonality: 'None',
              transmission: 'Endogenous (skin breach) or direct inoculation'
            },
            pathomechanism: {
              steps: [
                'Entry: Infection enters the subcutaneous tissue through a breach in the skin (even minor). Bacteria spread rapidly along the superficial fascial planes, which are poorly vascularized.',
                'Toxin Effect: Pathogens (especially GAS and Clostridium) produce potent toxins that cause direct tissue necrosis, thrombosis of small blood vessels, and inhibition of the local immune response.',
                'Tissue Necrosis: Thrombosis and inflammatory edema further compromise blood supply, leading to extensive tissue death. The process also destroys subcutaneous nerves, leading to anesthesia of the area (a late sign).',
                'Systemic Toxicity: Toxins entering the circulation cause systemic toxic shock syndrome and multi-organ failure.'
              ],
              virulence_factors: ['Strep: M protein, exotoxins (SpeA/B/C)', 'Staph: PVL, TSST-1', 'Clostridium: alpha-toxin', 'Anaerobes: gas production']
            },
            clinical: {
              incubation: 'Hours-days (after trauma)',
              onset: 'Hyperacute, fulminant',
              symptoms: [
                { name: 'Early Signs', description: 'The most important early sign is excruciating pain, which is disproportionate to the clinical findings. The skin may only show mild erythema or swelling, but the patient is systemically ill and febrile.', severity: 'severe' },
                { name: 'Late Signs', description: 'The skin turns dark purple or black, blisters (bullae) appear, and gas (crepitus) can be felt in the subcutaneous tissues. Pain may subside due to nerve death, which is a poor prognostic sign. Septic shock develops rapidly.', severity: 'severe' }
              ],
              physical_exam: [
                'Pain disproportionately severe compared with physical findings (early sign!)',
                'Tense, "woody" edema extending beyond erythema',
                'Skin: erythema → violaceous/grey → bullae → necrosis',
                'Anesthesia in the area (nerve damage)',
                'Crepitus (mainly Type I and Clostridium)',
                'Systemic signs: fever, tachycardia, hypotension, confusion'
              ],
              complications: ['Septic shock', 'Multi-organ failure (MODS)', 'Limb loss', 'Death (20-40%, 100% without treatment)']
            },
            diagnostics: {
              laboratory: [
                { test: 'LRINEC score', finding: '≥6: suspicion, ≥8: high probability (but low sensitivity!)', interpretation: 'CRP, WBC, Hb, Na, creatinine, glucose' },
                { test: 'CBC', finding: 'Leukocytosis (>15 G/L), left shift', interpretation: 'Severe infection' },
                { test: 'Sodium', finding: 'Hyponatremia (<135 mmol/L)', interpretation: 'Common indicator' },
                { test: 'Lactate', finding: 'Elevated (>2-4 mmol/L)', interpretation: 'Tissue hypoperfusion/necrosis' },
                { test: 'CK', finding: 'Elevated', interpretation: 'Muscle involvement (myositis/necrosis)' }
              ],
              imaging: [
                { modality: 'CT', finding: 'Fascial thickening, fluid, gas in soft tissues (specific!)', significance: 'Best imaging, but DO NOT delay surgery!' },
                { modality: 'MRI', finding: 'High sensitivity, low specificity', significance: 'Time consuming, avoid in unstable patients' }
              ],
              microbiology: [
                { test: 'Surgical tissue sample', finding: 'Gram stain and culture', significance: 'Gold standard (aerobe + anaerobe)' },
                { test: 'Blood culture', finding: 'Positive (mainly Type II)', significance: 'Systemic spread' },
                { test: 'Finger test', finding: 'Fascia easily separated, no bleeding, "dishwater" pus', significance: 'Bedside diagnosis' }
              ]
            }, 
            differential: [
              { disease: 'Cellulitis', distinguishing: 'No disproportionate pain, no systemic toxicity, slower' },
              { disease: 'Pyomyositis', distinguishing: 'Muscle abscess, more localized, MRI helps' },
              { disease: 'Gas gangrene (Clostridium)', distinguishing: 'Muscle necrosis dominates, faster, crepitus more pronounced' },
              { disease: 'Deep Vein Thrombosis (DVT)', distinguishing: 'Swelling, but no fever/toxicity, Doppler negative' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'No outpatient treatment!', dose: 'IMMEDIATE HOSPITAL/SURGERY!', duration: '', note: 'Surgical emergency!' }
                ],
                inpatient: [
                  { drug: 'Piperacillin/tazobactam', dose: '4x4.5g IV', duration: 'Until clinical response', note: 'Broad spectrum (G+, G-, anaerobe)' },
                  { drug: '+ Vancomycin', dose: '2x15-20 mg/kg IV', duration: '', note: 'MRSA coverage' },
                  { drug: '+ Clindamycin', dose: '3x900 mg IV', duration: '', note: 'Toxin inhibition (GAS/Staph)' }
                ],
                icu: [
                  { drug: 'Meropenem', dose: '3x1g IV', duration: '', note: 'Alternative (Type I)' },
                  { drug: '+ Vancomycin + Clindamycin', dose: '', duration: '', note: 'Standard triple therapy' },
                  { drug: 'IVIG', dose: '1g/kg day 1, then 0.5g/kg', duration: '3 days', note: 'may be considered as adjunctive therapy in streptococcal toxic shock syndrome (limited evidence)' }
                ]
              },
              targeted: 'Based on culture. Type I: broad spectrum. Type II (GAS): Penicillin G + Clindamycin. Type III (Vibrio): Doxycycline + Ceftriaxone.',
              supportive: ['IMMEDIATE aggressive surgical debridement (crucial!)', 'Fluid resuscitation', 'Vasopressors', 'Re-look surgery within 24h', 'Hyperbaric oxygen (controversial, adjunctive)'],
              prevention: ['Wound care', 'Management of chronic diseases']
            },
            guidelines: {
              diagnosis: [
                'Clinical suspicion (disproportionate pain, rapid deterioration) is sufficient for surgical exploration.',
                'LRINEC score may help, but low score does not rule out.',
                'Imaging only in stable patients if diagnosis is doubtful. Gas in tissues is specific.'
              ],
              treatment_indications: [
                'Immediate surgical intervention (necrotomy/fasciotomy) in all suspected cases.',
                'Empiric broad-spectrum antibiotics before/during surgery.'
              ],
              first_line: [
                'Surgical debridement + (Carbapenem or Pip/Tazo) + Vancomycin + Clindamycin.'
              ]
            },
            prognosis: {
              mortality: '20-40% (even with appropriate treatment), 100% untreated',
              prognostic_scores: ['LRINEC', 'FGSI (Fournier\'s Gangrene Severity Index)'],
              factors: 'Delayed surgery (>24h), old age, comorbidities, trunk/head-neck location'
            }
          },
          {
            id: 'erysipelas',
            name: 'Erysipelas',
            pathogen: { type: 'Bacterium', name: '<i>Streptococcus pyogenes</i> (Group A Streptococcus)', gram: 'Gram-positive', shape: 'coccus' },
            epidemiology: {
              incidence: 'Common skin infection, 10-100/100,000 per year',
              risk_groups: ['Elderly', 'Infants', 'Diabetes mellitus', 'Chronic venous insufficiency', 'Lymphedema', 'Skin lesions'],
              seasonality: 'Mostly winter-spring',
              transmission: 'Endogenous (skin breach) or contact'
            },
            pathomechanism: {
              steps: [
                'Entry: The pathogen (most commonly Streptococcus pyogenes) enters the upper dermis and superficial lymphatics through a minor break in the skin.',
                'Lymphatic Spread: The bacteria spread rapidly through the lymphatic system, resulting in the characteristic, sharply demarcated, flame-like advancing edge.',
                'Inflammation: Bacterial toxins cause a brisk local inflammation and systemic symptoms (fever, chills).'
              ],
              virulence_factors: ['M protein', 'Streptolysins (O, S)', 'Hyaluronidase', 'Streptokinase']
            },
            clinical: {
              incubation: '2-5 days',
              onset: 'Acute',
              symptoms: [
                { name: 'Skin Manifestations', description: 'Sudden onset of a sharply demarcated, flame-like spreading, bright red, swollen, warm, and painful skin lesion. Most commonly affects the face or lower limbs.', severity: 'severe' },
                { name: 'Systemic Symptoms', description: 'The skin manifestations are often preceded or accompanied by high fever, chills, and malaise.', severity: 'moderate' }
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
                { modality: 'Not routinely needed', finding: '-', significance: 'Clinical diagnosis' }
              ],
              microbiology: [
                { test: 'Skin swab culture', finding: 'Streptococcus pyogenes', significance: 'Confirmation' },
                { test: 'ASO titer', finding: 'Elevated', significance: 'May be elevated but has limited diagnostic value in acute infection, retrospective' }
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
                  { drug: 'Penicillin V', dose: '4x500 mg PO', duration: '10-14 days', note: 'First choice' },
                  { drug: 'Amoxicillin', dose: '3x500 mg PO', duration: '10-14 days', note: 'Alternative' },
                  { drug: 'Clindamycin', dose: '3x300 mg PO', duration: '10-14 days', note: 'In case of penicillin allergy, 30% resistance rate' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '4x4-6 million IU IV', duration: '7-10 days', note: 'In severe cases' },
                  { drug: 'Cefazolin', dose: '3x1g IV', duration: '7-10 days', note: 'Alternative' },
                  { drug: 'Ceftriaxone', dose: '1x2 g IV', duration: '7-10 days', note: 'In case of penicillin allergy' }
                ],
                icu: [
                  { drug: 'Broad-spectrum antibiotics', dose: 'IV', duration: '', note: 'In complicated cases' }
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
            pathogen: { type: 'Bacterium', name: '<i>Streptococcus pyogenes</i> or <i>Staphylococcus aureus</i> (most common)', gram: 'Gram-positive', shape: 'coccus' },
            epidemiology: {
              incidence: 'Common, 200/100,000 per year',
              risk_groups: ['Diabetes mellitus', 'Peripheral vascular disease', 'Obesity', 'Immunocompromised', 'Skin injuries', 'Lymphedema'],
              seasonality: 'Mostly summer',
              transmission: 'Endogenous (skin breach) or exogenous inoculation'
            },
            pathomechanism: {
              steps: [
                'Entry: Pathogens (S. pyogenes, S. aureus) enter the deeper dermis and subcutaneous fat through a break in the skin.',
                'Diffuse Spread: The infection spreads diffusely through the tissues, not confined to the lymphatics as in erysipelas. This results in a less sharply demarcated but deeper inflammation.'
              ],
              virulence_factors: ['Streptococcus: M protein, toxins', 'Staphylococcus: PVL, coagulase']
            },
            clinical: {
              incubation: '1-3 days',
              onset: 'Acute',
              symptoms: [
                { name: 'Skin Manifestations', description: 'Compared to erysipelas, it is a less sharply demarcated, diffuse erythema, swelling, and warmth. The skin is tense and painful.', severity: 'moderate' },
                { name: 'General Symptoms', description: 'May be accompanied by fever and chills, but not always as pronounced as in erysipelas.', severity: 'moderate' }
              ],
              physical_exam: [
                'Red, warm, swollen skin',
                'Diffuse, poorly demarcated borders',
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
                { test: 'Skin aspirate/culture', finding: 'Pathogen identification', significance: 'If possible' },
                { test: 'Wound exudate', finding: 'Often contaminated', significance: 'Not reliable' }
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
                  { drug: 'Amoxicillin/Clavulanate', dose: '3x875/125 mg PO', duration: '7-10 days', note: 'First choice' },
                  { drug: 'Cephalexin', dose: '4x500 mg PO', duration: '7-10 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/Clavulanate', dose: '875/125 mg PO TID mg PO', duration: '7-10 days', note: 'Alternative' },
                  { drug: 'Cefazolin', dose: '3x1g IV', duration: '7-10 days', note: 'Alternative' },
                  { drug: 'Ceftriaxone', dose: '1x2 g IV', duration: '7-10 days', note: 'In severe cases' },
                  { drug: '+ Vancomycin', dose: '2x15-20 mg/kg IV', duration: '', note: 'If MRSA is suspected' }
                ],
                icu: [
                  { drug: 'Piperacillin/Tazobactam', dose: '3x4.5 g IV', duration: '', note: 'Broad spectrum' }
                ]
              },
              targeted: 'Streptococcus: Penicillin; Staphylococcus: Flucloxacillin; MRSA: Vancomycin',
              supportive: ['Rest', 'Elevated limb', 'Analgesics', 'Topical antibiotics are not recommended for uncomplicated cellulitis'],
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
          },
          {
            id: 'osteomyelitis',
            name: 'Osteomyelitis',
            pathogen: { type: 'Bacterium', name: '<i>Staphylococcus aureus</i> (most common)', gram: 'Gram-positive', shape: 'coccus' },
            epidemiology: {
              incidence: 'Hematogenous in children, post-traumatic/diabetic foot in adults',
              risk_groups: ['Diabetes mellitus', 'Peripheral vascular disease', 'Trauma/surgery', 'People who inject drugs (PWID)', 'Hemodialysis'],
              seasonality: 'None',
              transmission: 'Hematogenous spread, direct spread (wound), inoculation (trauma)'
            },
            pathomechanism: {
              steps: [
                'Entry: Pathogens reach the bone via the bloodstream (hematogenous), from adjacent soft tissues (contiguous), or by direct inoculation from trauma/surgery.',
                'Inflammation and Ischemia: In the bone, they cause inflammation, leading to edema and increased pressure in the bone marrow. This compromises blood supply, leading to bone death (sequestrum).',
                'Chronicity: The body attempts to wall off the dead bone with new bone formation (involucrum). In chronic cases, bacteria persist by forming a biofilm.'
              ],
              virulence_factors: ['Biofilm formation', 'Adhesins (MSCRAMM)', 'Toxins']
            },
            clinical: {
              incubation: 'Days (acute) or weeks-months (chronic)',
              onset: 'Variable',
              symptoms: [
                { name: 'Acute Osteomyelitis', description: 'Sudden onset of localized pain, swelling, erythema, and fever. The patient is often unable to bear weight on the affected limb.', severity: 'severe' },
                { name: 'Chronic Osteomyelitis', description: 'More insidious, with a dull, deep pain, and often a draining sinus tract to the skin. Fever is rare.', severity: 'moderate' }
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
                { test: 'CBC', finding: 'Leukocytosis (acute)', interpretation: 'Inflammation (may be normal in chronic)' },
                { test: 'CRP/ESR', finding: 'Elevated', interpretation: 'Excellent for monitoring (response to therapy)' },
                { test: 'Blood culture', finding: 'Positive (50%)', interpretation: 'In hematogenous origin (important in vertebral OM)' }
              ],
              imaging: [
                { modality: 'X-ray', finding: 'Negative in early phase (10-14 days)! Later periosteal reaction, lytic lesions', significance: 'Late sign, but baseline' },
                { modality: 'MRI', finding: 'Bone marrow edema, abscess, sequestrum', significance: 'Gold standard (sensitivity >90%)' },
                { modality: 'Bone scintigraphy/PET-CT', finding: 'Increased uptake', significance: 'If MRI cannot be performed or multifocal suspicion' }
              ],
              microbiology: [
                { test: 'Bone biopsy culture', finding: 'Pathogen identification', significance: 'Gold standard diagnosis (before antibiotics!)' },
                { test: 'Sinus tract discharge', finding: 'Often contaminated', significance: 'Correlates well with bone only for S. aureus' }
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
                  { drug: 'None', dose: '-', duration: '-', note: 'Hospital investigation/sampling required' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20 mg/kg IV', duration: '4-6 weeks', note: 'MRSA coverage' },
                  { drug: '+ Ceftriaxone/Cefepime', dose: '2g IV', duration: '4-6 weeks', note: 'Gram-negative coverage (e.g. Pseudomonas)' }
                ],
                icu: [
                  { drug: 'Broad-spectrum antibiotics', dose: 'IV', duration: '', note: 'In case of sepsis' }
                ]
              },
              targeted: 'Based on bone biopsy! S. aureus: Cefazolin/Flucloxacillin. MRSA: Vancomycin. Implant-associated: Rifampicin adjunct (biofilm).',
              supportive: ['Surgical debridement (removal of necrotic bone) - CRITICAL!', 'Implant removal (if possible)', 'After initial IV therapy, an early switch to highly bioavailable oral agents is non-inferior (OVIVA trial)'],
              prevention: ['Immediate care of open fractures', 'Surgical sterility', 'Diabetic foot care']
            },
            guidelines: {
              diagnosis: [
                'Imaging: MRI is most sensitive. X-ray may be negative for 2 weeks.',
                'Microbiology: Bone biopsy (open or percutaneous) for culture and histology is mandatory before antibiotics (unless sepsis).'
              ],
              treatment_indications: [
                'All confirmed cases of osteomyelitis must be treated. Surgical debridement + antibiotics.',
                'In implant-associated infection, Rifampicin combination is recommended due to biofilm.'
              ],
              first_line: [
                'Empiric: Vancomycin + Ceftriaxone/Cefepime.',
                'Targeted: 4-6 weeks therapy. Based on OVIVA trial, early (after 1 week) oral switch (e.g., quinolones, clindamycin) is non-inferior to IV.'
              ]
            },
            prognosis: {
              mortality: 'Low, but morbidity is high (chronicity)',
              prognostic_scores: ['Cierny-Mader classification'],
              factors: 'Blood supply, presence of implant, surgical radicality'
            },
          },
          {
            id: 'septic_arthritis',
            name: 'Septic Arthritis',
            pathogen: { type: 'Bacterium', name: '<i>Staphylococcus aureus, N. gonorrhoeae</i>', gram: 'Mixed', shape: 'coccus' },
            epidemiology: {
              incidence: '2-10/100,000 per year',
              risk_groups: ['Rheumatoid arthritis', 'Joint prosthesis', 'Elderly (>80 years)', 'Diabetes', 'People who inject drugs (PWID)', 'Sexually active young people (Gonococcus)'],
              seasonality: 'None',
              transmission: 'Hematogenous (most common), direct inoculation, per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Entry: Pathogens reach the joint space via the bloodstream (hematogenous) or direct injury.',
                'Inflammatory Response: They colonize the synovial membrane, triggering a massive inflammatory response, leading to a large purulent effusion.',
                'Cartilage Damage: Enzymes released from neutrophils and inflammatory cytokines cause irreversible damage to the articular cartilage within hours to days.'
              ],
              virulence_factors: ['Adhesins', 'Toxins', 'Cartilage-damaging enzymes']
            },
            clinical: {
              incubation: 'Rapid (hours-days)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Acute Monoarthritis', description: 'Sudden onset of extremely painful swelling, redness, and warmth of a single large joint (most commonly knee, hip).', severity: 'severe' },
                { name: 'Loss of Function', description: 'The patient is unable to move the joint, either actively or passively, due to pain. High fever and chills are common.', severity: 'severe' }
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
                { test: 'CRP/ESR', finding: 'Significantly elevated', interpretation: 'Inflammation' },
                { test: 'Synovial fluid', finding: '>50,000 WBC/µL (>90% PMN)', interpretation: 'Typical for septic arthritis' }
              ],
              imaging: [
                { modality: 'X-ray', finding: 'Initially negative/soft tissue swelling, later joint space narrowing', significance: 'Baseline' },
                { modality: 'Ultrasound', finding: 'Joint fluid, synovial thickening', significance: 'Guiding puncture, early diagnosis' },
                { modality: 'MRI', finding: 'Joint effusion, bone marrow edema, abscess', significance: 'Exclusion of osteomyelitis, complications' }
              ],
              microbiology: [
                { test: 'Joint aspiration (Arthrocentesis)', finding: 'Purulent, Gram stain positive (50%)', significance: 'Perform IMMEDIATELY!' },
                { test: 'Culture (Synovial + Blood)', finding: 'Positive', significance: 'Gold standard' },
                { test: 'PCR (16S rRNA)', finding: 'Pathogen DNA', significance: 'If culture is negative (pre-treated patient)' }
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
                  { drug: 'Vancomycin', dose: '15-20 mg/kg IV', duration: '', note: 'Gram+ (MRSA) coverage' },
                  { drug: '+ Ceftriaxone', dose: '2 g IV once daily', duration: '', note: 'Gram- (Gonococcus/G- rods) coverage' }
                ],
                icu: [
                  { drug: 'Vancomycin + Meropenem', dose: 'IV', duration: '', note: 'In case of sepsis/immunosuppression' }
                ]
              },
              targeted: 'S. aureus: Cefazolin/Flucloxacillin; MRSA: Vancomycin/Daptomycin; Gonococcus: Ceftriaxone. Duration: 2-6 weeks (IV then PO switch possible - OVIVA).',
              supportive: ['Joint drainage (daily needle aspiration, arthroscopy or open washout) - CRUCIAL!', 'Analgesics', 'Early mobilization after inflammation subsides'],
              prevention: ['Sterility in prosthesis surgeries', 'Prevention of gonorrhea', 'Treatment of skin infections']
            },
            guidelines: {
              diagnosis: [
                'Joint aspiration (arthrocentesis) before antibiotics is mandatory! Cell count, Gram, culture, crystals.',
                'Blood cultures should always be obtained (50% positive).'
              ],
              treatment_indications: [
                'All septic arthritis cases require immediate antibiotics and drainage.'
              ],
              first_line: [
                'Immediate joint drainage (needle or surgical) + empiric IV antibiotics (Vancomycin + Ceftriaxone), Empiric therapy should be guided by age, risk factors, and local resistance.',
                'Based on OVIVA trial, early oral switch may be safe in stable patients.'
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
            pathogen: { type: 'Bacterium', name: '<i>Staphylococcus aureus</i> (most common), <i>Streptococcus</i> spp., Gram-negative bacteria', gram: 'Mixed', shape: 'coccus/bacillus' },
            epidemiology: {
              incidence: 'Rare, 2-7/100,000 per year',
              risk_groups: ['Elderly (>50 years)', 'Diabetes mellitus', 'Immunocompromised', 'People who inject drugs (PWID)', 'Post-spine surgery', 'Urogenital infections'],
              seasonality: 'None',
              transmission: 'Hematogenous (most common), direct (surgery, trauma), per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Hematogenous Spread: Pathogens most commonly reach the highly vascularized vertebral bodies via the bloodstream (hematogenous route), often from a distant infection (e.g., urinary tract, skin).',
                'Progression: The infection spreads from the vertebral body to the adjacent intervertebral disc and the next vertebra, causing inflammation and tissue destruction.',
                'Complications: The process can lead to the formation of an epidural or paravertebral abscess, causing spinal cord compression and neurological symptoms.'
              ],
              virulence_factors: ['Adhesins (MSCRAMM)', 'Biofilm formation', 'Toxins']
            },
            clinical: {
              incubation: 'Days-weeks',
              onset: 'Slow, insidious',
              symptoms: [
                { name: 'Back Pain', description: 'The leading symptom (>90%) is a gradually worsening, localized back pain that is present even at rest and tender to percussion.', severity: 'severe' },
                { name: 'Fever and Neurological Symptoms', description: 'Fever is often low-grade or absent. Neurological symptoms (radicular pain, limb weakness) suggest an epidural abscess and represent an emergency.', severity: 'severe' }
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
                  { drug: 'Vancomycin', dose: '15-20 mg/kg IV', duration: '4-6 weeks', note: 'MRSA coverage' },
                  { drug: '+ Ceftriaxone/Cefepime', dose: 'IV', duration: '4-6 weeks', note: 'Gram-negative coverage' }
                ],
                icu: [
                  { drug: 'Broad-spectrum antibiotics', dose: 'IV', duration: '', note: 'In case of sepsis/abscess' }
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
