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
            calculators: [
              {
                name: 'LRINEC Score - Necrotizing Fasciitis Risk',
                items: [
                  { label: 'CRP ≥ 150 mg/L', points: 4 },
                  { label: 'WBC 15-25 G/L', points: 1 },
                  { label: 'WBC > 25 G/L', points: 2 },
                  { label: 'Hemoglobin < 13.5 g/dL', points: 1 },
                  { label: 'Hemoglobin < 11 g/dL', points: 2 },
                  { label: 'Sodium < 135 mmol/L', points: 2 },
                  { label: 'Creatinine > 141 µmol/L', points: 2 },
                  { label: 'Glucose > 10 mmol/L', points: 1 }
                ],
                interpretation: [
                  { min: 0, max: 5, text: 'Low risk (<50%). Monitor.' },
                  { min: 6, max: 7, text: 'Intermediate risk (50-75%). Close observation, surgical consult.' },
                  { min: 8, max: 13, text: 'High risk (>75%). Immediate surgical exploration!' }
                ]
              }
            ], 
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
                  { drug: 'Amoxicillin/Clavulanate', dose: '875/125 mg PO TID', duration: '7-10 days', note: 'Alternative' },
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
            id: 'impetigo',
            name: 'Impetigo',
            pathogen: { type: 'Bacterium', name: '<i>Staphylococcus aureus</i> and/or <i>Streptococcus pyogenes</i>', gram: 'Gram-positive', shape: 'coccus' },
            epidemiology: {
              incidence: 'Common, especially in children',
              risk_groups: ['Children', 'Community settings', 'Skin injuries', 'Close contact'],
              seasonality: 'None',
              transmission: 'Contact, direct or indirect'
            },
            pathomechanism: {
              steps: [
                'Pathogens enter through skin lesions or the superficial skin.',
                'Bacteria multiply locally and spread superficially.',
                'Inflammation and toxins lead to characteristic blisters and golden, “honey-colored” crusts.'
              ],
              virulence_factors: ['Exfoliative toxins', 'M protein', 'Coagulase', 'Panton-Valentine leukocidin (S. aureus)']
            },
            clinical: {
              incubation: '1-3 days',
              onset: 'Acute',
              symptoms: [
                { name: 'Erythematous, inflamed plaques', description: 'Blisters that rupture and are covered with golden, “honey-colored” crusts', severity: 'moderate' },
                { name: 'Pruritus', description: 'Mild pain or itching in the area', severity: 'mild' }
              ],
              physical_exam: [
                'Red, superficial, inflamed skin lesion',
                'Blisters and crust formation',
                'Occasionally lymph node enlargement'
              ],
              complications: ['Extensive local infection', 'Glomerulonephritis (streptococcal)', 'Recurrence']
            },
            diagnostics: {
              laboratory: [
                { test: 'Clinical diagnosis', finding: 'Sufficient', interpretation: 'Typical presentation' }
              ],
              microbiology: [
                { test: 'Wound swab/culture', finding: 'Pathogen identification', significance: 'In uncertain or severe cases' }
              ]
            },
            differential: [
              { disease: 'Herpes simplex', distinguishing: 'Vesicles, more painful, no honey crusts' },
              { disease: 'Contact dermatitis', distinguishing: 'Pruritus, no blistering' },
              { disease: 'Erysipelas', distinguishing: 'Deeper, sharp borders' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Topical mupirocin', dose: '2x/day', duration: '5-7 days', note: 'Localized, non-extensive form' },
                  { drug: 'Retapamulin', dose: '2x/day', duration: '5 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Cephalexin', dose: '4x500 mg PO', duration: '7-10 days', note: 'Extensive infection' },
                  { drug: 'Amoxicillin/Clavulanate', dose: '3x875/125 mg PO', duration: '7-10 days', note: 'Alternative' }
                ]
              },
              targeted: 'Targeted therapy according to S. aureus/GAS; systemic antibiotics in extensive cases.',
              supportive: ['Skin cleaning', 'Hygiene and contact prevention', 'Separation of affected individuals'],
              prevention: ['Hygiene rules', 'Treatment of skin injuries', 'Reduction of community contact']
            },
            guidelines: {
              diagnosis: [
                'Clinical diagnosis: the typical honey-colored crusts and superficial blisters are characteristic.'
              ],
              treatment_indications: [
                'Topical treatment in small, non-extensive cases; systemic therapy in extensive or recurrent infection.'
              ],
              first_line: [
                'Topical mupirocin or retapamulin; in extensive disease cephalexin or amoxicillin/clavulanate.'
              ]
            },
            prognosis: {
              mortality: 'Low',
              prognostic_scores: ['None'],
              factors: 'Extensive disease, immunosuppression, recurrence'
            }
          },
          {
            id: 'folliculitis',
            name: 'Folliculitis',
            pathogen: { type: 'Bacterium', name: '<i>Staphylococcus aureus</i> (most common)', gram: 'Gram-positive', shape: 'coccus' },
            epidemiology: {
              incidence: 'Common, especially in warm, sweaty environments',
              risk_groups: ['Sweaty work', 'Tight clothing', 'Skin injuries', 'Diabetes', 'Immunosuppression'],
              seasonality: 'None',
              transmission: 'Direct contact or auto-inoculation'
            },
            pathomechanism: {
              steps: [
                'In the hair follicle region, the pathogen invades and causes local inflammation.',
                'Inflammation leads to papules and pustules around the hair follicle.',
                'More severe forms may lead to deeper infection (furunculus, carbunculus).'
              ],
              virulence_factors: ['Coagulase', 'Exotoxins', 'Biofilm']
            },
            clinical: {
              incubation: '1-3 days',
              onset: 'Acute',
              symptoms: [
                { name: 'Papules/pustules', description: 'Localized, painful or itchy papules/pustules around the hair follicle', severity: 'mild' },
                { name: 'Erythema and tenderness', description: 'Inflammatory reaction around the skin', severity: 'mild' }
              ],
              physical_exam: [
                'Papules/pustules around the hair follicle',
                'Pain or itching',
                'In severe cases an abscess may develop'
              ],
              complications: ['Furunculus', 'Carbunculus', 'Abscessing folliculitis', 'Extensive local infection']
            },
            diagnostics: {
              laboratory: [
                { test: 'Clinical diagnosis', finding: 'Sufficient', interpretation: 'Typical presentation' }
              ],
              microbiology: [
                { test: 'Pus or tissue sample', finding: 'Pathogen identification', significance: 'In severe or refractory cases' }
              ]
            },
            differential: [
              { disease: 'Impetigo', distinguishing: 'Much more superficial blistering and crusting' },
              { disease: 'Herpes simplex', distinguishing: 'Vesicles, severe pain' },
              { disease: 'Erysipelas', distinguishing: 'Superficial inflammation, no follicular focus' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Topical mupirocin', dose: '2x/day', duration: '5-7 days', note: 'Mild infection' },
                  { drug: 'Clindamycin', dose: '2x/day', duration: '5-7 days', note: 'Topical' }
                ],
                inpatient: [
                  { drug: 'Cephalexin', dose: '4x500 mg PO', duration: '7-10 days', note: 'More severe or extensive' }
                ]
              },
              targeted: 'Targeted anti-staphylococcal therapy in S. aureus; culture in refractory cases.',
              supportive: ['Avoid irritating substances', 'Skin cleaning', 'Avoid tight clothing'],
              prevention: ['Hygiene', 'Avoid contaminated objects', 'Clean environment and clothing']
            },
            guidelines: {
              diagnosis: [
                'Based on clinical appearance.'
              ],
              treatment_indications: [
                'Topical therapy in milder forms; systemic therapy in extensive or recurrent cases.'
              ],
              first_line: [
                'Topical mupirocin or clindamycin; if needed cephalexin.'
              ]
            },
            prognosis: {
              mortality: 'Low',
              prognostic_scores: ['None'],
              factors: 'More severe forms, diabetes, immunosuppression'
            }
          },
          {
            id: 'diabetic_foot',
            name: 'Diabetic foot (infection/ulcer)',
            pathogen: { type: 'Polymicrobial', name: 'Staphylococcus aureus, Streptococcus spp., gram-negative organisms, anaerobes', gram: 'Mixed', shape: 'Variable' },
            epidemiology: {
              incidence: 'A common cause of hospitalization and amputation in diabetic patients',
              risk_groups: ['Diabetes mellitus', 'Neuropathy', 'Peripheral arterial disease', 'Prior ulcer/injury', 'Foot deformity', 'Immunosuppression'],
              seasonality: 'None',
              transmission: 'Not contagious, but develops through skin injury, deformity, and inflammation'
            },
            pathomechanism: {
              steps: [
                'Neuropathy reduces protective reflexes and sensation so minor injuries may go unnoticed.',
                'Peripheral arterial disease and high glucose levels impair healing and immune function.',
                'After skin and soft-tissue injury, bacteria colonize and establish infection, often as polymicrobial infection.',
                'The process can progress to abscess, osteomyelitis, and amputation.'
              ],
              virulence_factors: ['Biofilm formation', 'Adhesins', 'Toxins', 'Polymicrobial community']
            },
            clinical: {
              incubation: 'Variable',
              onset: 'Slow or acute',
              symptoms: [
                { name: 'Foot pain or sensory loss', description: 'Pain may be absent or sensation reduced because of neuropathy', severity: 'severe' },
                { name: 'Swelling and erythema', description: 'Signs of infection, particularly if the skin is injured', severity: 'moderate' },
                { name: 'Drainage/odor', description: 'Purulent discharge or unpleasant odor', severity: 'moderate' },
                { name: 'Fever', description: 'May occur in more severe infection', severity: 'moderate' }
              ],
              physical_exam: [
                'Wound/ulcer, drainage, swelling',
                'Pedal pulses, ABI',
                'Assess protective sensation and neuropathy',
                'Probe-to-bone test when osteomyelitis is suspected'
              ],
              complications: ['Osteomyelitis', 'Septic shock', 'Amputation', 'Chronic wounds', 'Death']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC, CRP, creatinine', finding: 'Inflammation, organ involvement', interpretation: 'Baseline assessment' },
                { test: 'Blood culture', finding: 'May be positive in severe disease', interpretation: 'When sepsis is suspected' }
              ],
              imaging: [
                { modality: 'US / CT / MRI', finding: 'Abscess, bone involvement, vascular disease', significance: 'Deep infection or osteomyelitis' }
              ],
              microbiology: [
                { test: 'Wound swab/biopsy', finding: 'Pathogen identification', significance: 'Targeted antibiotic therapy' }
              ],
              scores: ['IDSA/PEDIS severity classification']
            },
            differential: [
              { disease: 'Cellulitis', distinguishing: 'No open wound or deeper structure' },
              { disease: 'Osteomyelitis', distinguishing: 'Bone involvement, imaging/biopsy' },
              { disease: 'Peripheral arterial disease', distinguishing: 'Absent pulse, ABI, not primarily infection' }
            ],
            therapy: {
              guidelines: ['IWGDF 2023: off-loading, surgical debridement, good perfusion, glucose control, and targeted antibiotics.'],
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'PO', duration: '7-14 days', note: 'Mild infection' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'IV/PO', duration: '7-14 days', note: 'Moderate infection' },
                  { drug: 'Piperacillin/tazobactam', dose: 'IV', duration: '7-14 days', note: 'Severe or ischemic infection' },
                  { drug: '+ Vancomycin', dose: 'IV', duration: '', note: 'If MRSA is suspected' }
                ],
                icu: [
                  { drug: 'Meropenem/Vancomycin', dose: 'IV', duration: '', note: 'Severe sepsis, critical condition' }
                ]
              },
              targeted: 'Guided by culture; abscess/necrotic tissue requires surgical debridement and source control.',
              supportive: ['Off-loading', 'Vascular assessment and revascularization', 'Glucose control', 'Wound care and dressings', 'Physiotherapy'],
              prevention: ['Foot care', 'Proper shoes and daily inspection', 'Diabetes control', 'Early wound treatment']
            },
            prognosis: {
              mortality: 'Higher if osteomyelitis or sepsis develops',
              prognostic_scores: ['PEDIS/IDSA'],
              factors: 'Ischemia, neuropathy, delayed treatment, prior amputation'
            }
          },
          {
            id: 'chronic_ulcer',
            name: 'Chronic ulcer (venous/arterial)',
            pathogen: { type: 'Indirect', name: 'Colonization, secondary infection', gram: 'Variable', shape: '-' },
            epidemiology: {
              incidence: 'Chronic leg and foot ulcers are common consequences of impaired perfusion',
              risk_groups: ['Older adults', 'Venous insufficiency', 'Peripheral arterial disease', 'Diabetes', 'Mobility limitations', 'Obesity'],
              seasonality: 'None',
              transmission: 'Not contagious, but secondary infections can occur'
            },
            pathomechanism: {
              steps: [
                'Chronic edema, venous hypertension, or narrowed arteries reduce tissue oxygenation and healing.',
                'Poor perfusion, chronic inflammation, and local trauma slow wound regeneration.',
                'Colonization of the wound surface and secondary infection further impair healing.',
                'The process persists if the underlying cause is not treated.'
              ],
              virulence_factors: ['Colonizing microorganisms', 'Biofilm', 'Chronic inflammation']
            },
            clinical: {
              incubation: 'Months',
              onset: 'Slow',
              symptoms: [
                { name: 'Leg ulcer', description: 'Open, poorly healing, often exudative and painful wound', severity: 'moderate' },
                { name: 'Pain', description: 'Variable: usually less with venous ulcers, worse with arterial disease', severity: 'moderate' },
                { name: 'Edema', description: 'Common in venous ulcer disease', severity: 'moderate' },
                { name: 'Color and tissue change', description: 'Pigmentation, skin atrophy, necrosis', severity: 'moderate' }
              ],
              physical_exam: [
                'Size, depth, and tissue status of the ulcer',
                'Venous/arterial signs: edema, pigmentation, pulses, ABI',
                'Signs of infection: erythema, purulence, foul odor',
                'Condition of foot and lower leg'
              ],
              complications: ['Chronic infection', 'Expanding wound area', 'Osteomyelitis', 'Amputation', 'Reduced quality of life']
            },
            diagnostics: {
              laboratory: [
                { test: 'CRP, CBC', finding: 'Elevated in infection', interpretation: 'Monitor inflammation and infection' }
              ],
              imaging: [
                { modality: 'ABI, Doppler ultrasound, CT angiography', finding: 'Perfusion disorder', significance: 'Assess arteries/veins' }
              ],
              microbiology: [
                { test: 'Wound swab', finding: 'Colonization/infection', significance: 'Antibiotic decision' }
              ]
            },
            differential: [
              { disease: 'Diabetic foot infection', distinguishing: 'Neuropathy and diabetes present' },
              { disease: 'Pressure injury', distinguishing: 'Pressure and shear forces dominate' },
              { disease: 'Vascular ulcer', distinguishing: 'Arterial/venous perfusion abnormalities' }
            ],
            therapy: {
              guidelines: ['EWMA/ICG guidance: compression, off-loading, wound management, infection treatment, and addressing the cause.'],
              empirical: {
                outpatient: [
                  { drug: 'No routine antibiotic treatment without infection', dose: '-', duration: '-', note: 'Only if infection is present' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'PO/IV', duration: '7-14 days', note: 'Localized infection' },
                  { drug: 'Piperacillin/tazobactam', dose: 'IV', duration: '', note: 'Severe infection' }
                ]
              },
              targeted: 'Cause-directed management: compression, perfusion improvement, wound care, debridement, and surgery when necessary.',
              supportive: ['Compression therapy', 'Surgical or enzymatic debridement', 'Moisture balance and dressings', 'Fluid and nutritional support'],
              prevention: ['Mobility, compression, foot care', 'Improve perfusion', 'Early infection treatment']
            },
            prognosis: {
              mortality: 'Not directly high, but significant morbidity due to chronic nature and comorbidity',
              prognostic_scores: ['No single score'],
              factors: 'Perfusion, comorbidities, infection, load, and adherence'
            }
          },
          {
            id: 'decubitus',
            name: 'Pressure injury (decubitus)',
            pathogen: { type: 'Secondary', name: 'Colonization, polymicrobial infection', gram: 'Variable', shape: '-' },
            epidemiology: {
              incidence: 'Common in immobilized, severely ill patients and prolonged hospitalization',
              risk_groups: ['Mobility-impaired', 'Older adults', 'Severely ill patients', 'Incontinence', 'Malnutrition', 'Neurologic patients'],
              seasonality: 'None',
              transmission: 'Not contagious, but infection may be secondary'
            },
            pathomechanism: {
              steps: [
                'Pressure and shear reduce capillary perfusion in skin and soft tissue.',
                'Repeated ischemia and reperfusion damage tissue and delay healing.',
                'Moisture, skin irritation, and nutritional status further impair repair.',
                'Colonization and infection can spread to deeper tissue.'
              ],
              virulence_factors: ['Bacterial colonization', 'Biofilm', 'Severe localized ischemia']
            },
            clinical: {
              incubation: 'Develops over time',
              onset: 'Slow',
              symptoms: [
                { name: 'Erythema and pain', description: 'Non-blanching erythema and tenderness', severity: 'moderate' },
                { name: 'Ulcer', description: 'Damage to skin or soft tissue that may deepen by stage', severity: 'moderate' },
                { name: 'Depth of injury', description: 'Can range from superficial to bone', severity: 'severe' }
              ],
              physical_exam: [
                'Staging: I-IV or deep tissue injury',
                'Localisation based on pressure and shear',
                'Wound drainage, tissue necrosis, signs of infection',
                'General condition and nutritional status'
              ],
              complications: ['Septic shock', 'Osteomyelitis', 'Poor healing', 'Amputation', 'Death']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC, CRP', finding: 'Elevated in infection', interpretation: 'Severe infection/inflammation' }
              ],
              imaging: [
                { modality: 'US/CT/MRI', finding: 'Deep tissue involvement', significance: 'Deep pressure injury or osteomyelitis' }
              ],
              microbiology: [
                { test: 'Wound swab', finding: 'Colonization/infection', significance: 'Antibiotic decision' }
              ],
              scores: ['NPIAP/EPUAP staging']
            },
            differential: [
              { disease: 'Venous/arterial ulcer', distinguishing: 'Pressure and mobility factors dominate' },
              { disease: 'Diabetic foot', distinguishing: 'Neuropathy and diabetes present' },
              { disease: 'Infectious skin lesion', distinguishing: 'No pressure-related origin' }
            ],
            therapy: {
              guidelines: ['NPIAP/EPUAP/PPPIA guidance: pressure reduction, regular repositioning, nutrition, moisture control, debridement, and infection treatment.'],
              empirical: {
                outpatient: [
                  { drug: 'No routine antibiotics without infection', dose: '-', duration: '-', note: 'Only if infection is present' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'PO/IV', duration: '7-10 days', note: 'Localized, non-deep infection' },
                  { drug: 'Piperacillin/tazobactam', dose: 'IV', duration: '', note: 'Deep or severe infection' }
                ]
              },
              targeted: 'Based on the stage and infection: pressure relief, debridement, dressings, nutrition, and surgery if needed.',
              supportive: ['Regular repositioning (every 2-4 hours)', 'Pressure-relieving surfaces', 'Hygiene and skin care', 'Nutritional support', 'Surgical or enzymatic debridement'],
              prevention: ['Mobilization, positioning, mattresses and cushions', 'Incontinence management', 'Nutrition']
            },
            prognosis: {
              mortality: 'Higher if it is deep and infected',
              prognostic_scores: ['NPIAP stage'],
              factors: 'Mobility, nutrition, systemic disease, infection, and surgical care'
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
