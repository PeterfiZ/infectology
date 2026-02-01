Object.assign(window.diseases, {
      gastrointestinal: {
        name: 'Gastrointestinal Infections',
        icon: '🦠',
        color: '#ca8a04',
        diseases: [
          {
            id: 'cdiff',
            name: 'Clostridioides difficile Infection',
            pathogen: { type: 'Bacterium', name: 'Clostridioides difficile', gram: 'Gram-positive', shape: 'spore-forming anaerobic rod' },
            epidemiology: {
              incidence: 'Most common cause of nosocomial diarrhea, 500,000 cases/year in the USA',
              risk_groups: ['Elderly >65 years', 'Hospitalized patients', 'Antibiotic exposure', 'PPI use', 'Inflammatory bowel disease', 'Immunosuppressed'],
              seasonality: 'None',
              transmission: 'Fecal-oral (spores), nosocomial transmission, hand hygiene!'
            },
            pathomechanism: {
              steps: [
                'Antibiotic → gut flora disruption',
                'C. difficile spore germination, colonization',
                'Toxin A (TcdA): enterotoxin – fluid secretion, inflammation',
                'Toxin B (TcdB): cytotoxin → epithelial damage',
                'Binary toxin (CDT): in hypervirulent strains (027/078)',
                'Pseudomembrane formation in the colon'
              ],
              virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB)', 'Binary toxin (CDT)', 'Spore formation', 'Adherence factors']
            },
            clinical: {
              incubation: '2-10 days after AB, up to 8 weeks later',
              onset: 'Acute',
              symptoms: [
                { name: 'Watery diarrhea', description: '3-15x/day, greenish, foul-smelling', severity: 'severe' },
                { name: 'Abdominal pain/cramps', description: 'Diffuse, crampy', severity: 'moderate' },
                { name: 'Fever', description: 'Moderate-high', severity: 'moderate' },
                { name: 'Nausea', description: 'Variable', severity: 'mild' },
                { name: 'Anorexia', description: 'Loss of appetite', severity: 'mild' }
              ],
              physical_exam: [
                'Diffuse abdominal tenderness',
                'Distension',
                'Fever, tachycardia',
                'Signs of dehydration',
                'Severe: signs of ileus, toxic megacolon'
              ],
              complications: ['Fulminant colitis', 'Toxic megacolon', 'Bowel perforation', 'Sepsis', 'Hypovolemic shock', 'Death', 'Recurrence (20-30%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis (up to >30 G/L)', interpretation: 'Marker of severity' },
                { test: 'Creatinine', finding: 'Elevated', interpretation: 'Severe CDI criterion (>1.5x baseline)' },
                { test: 'Albumin', finding: 'Decreased (<2.5 g/dL)', interpretation: 'Malnutrition, severity' },
                { test: 'Lactate', finding: 'Elevated', interpretation: 'Fulminant colitis' }
              ],
              imaging: [
                { modality: 'Abdominal X-ray', finding: 'Megacolon (>6cm)', significance: 'Toxic megacolon' },
                { modality: 'Abdominal CT', finding: 'Colonic wall thickening, accordion sign, ascites', significance: 'Severity assessment' }
              ],
              microbiology: [
                { test: 'Stool toxin (GDH + toxin A/B EIA)', finding: 'Positive', significance: 'Two-step algorithm' },
                { test: 'Stool PCR (NAAT)', finding: 'tcdB gene', significance: 'Most sensitive, but also detects colonization' },
                { test: 'Culture', finding: 'C. difficile isolation', significance: 'Typing, epidemiology' },
                { test: 'Sigmoidoscopy', finding: 'Pseudomembranes', significance: 'Not routine, diagnostic' }
              ]
            },
            differential: [
              { disease: 'Other AB-associated diarrhea', distinguishing: 'Toxin negative, milder' },
              { disease: 'Inflammatory bowel disease flare', distinguishing: 'History, endoscopy' },
              { disease: 'Ischemic colitis', distinguishing: 'Risk factors, CT angiography' },
              { disease: 'Other infectious enterocolitis', distinguishing: 'Stool culture, epidemiology' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Fidaxomicin', dose: '2x200mg PO', duration: '10 days', note: 'First choice (less recurrence)' },
                  { drug: 'Vancomycin', dose: '4x125mg PO', duration: '10 days', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '4x125mg PO', duration: '10-14 days', note: 'If fidaxomicin is not available' },
                  { drug: 'Fidaxomicin', dose: '2x200mg PO', duration: '10 days', note: 'Preferred' }
                ],
                icu: [
                  { drug: 'Vancomycin', dose: '4x500mg PO + rectal', duration: '10-14 days', note: 'Fulminant: higher dose' },
                  { drug: '+ Metronidazole', dose: '3x500mg IV', duration: '10-14 days', note: 'In case of ileus (IV penetration)' },
                  { drug: 'Surgery', dose: 'Colectomy', duration: '', note: 'Toxic megacolon, perforation' }
                ]
              },
              targeted: 'Non-severe: Vancomycin or Fidaxomicin; Severe: Vancomycin; Fulminant: Vancomycin+Metronidazole±surgery',
              supportive: ['Stop AB (if possible)', 'Fluid replacement', 'Electrolyte correction', 'NO antimotility agents!', 'Contact isolation'],
              prevention: ['Antibiotic stewardship', 'Hand washing (alcohol does not kill spores!)', 'Contact isolation', 'Bezlotoxumab (recurrence prevention)', 'FMT in recurrent cases']
            },
            guidelines: {
              diagnosis: [
                'Suspicion: new onset diarrhea after antibiotic exposure or in nosocomial setting',
                'Lab: leukocytosis, elevated creatinine/ALP, decreased albumin are signs of severity',
                'Micro: two-step algorithm (GDH + toxin EIA) and/or NAAT; positive PCR alone may indicate colonization',
                'Endoscopy only in exceptional cases (pseudomembranes)'
              ],
              treatment_indications: [
                'Acute symptoms, especially severe presentation (leukocytosis >15 G/L, fever, creatinine elevation, jaundice, ileus or toxic megacolon)',
                'In recurrent patients, early intervention (consider bezlotoxumab, FMT)'
              ],
              first_line: [
                'Non-severe/severe: Fidaxomicin 200 mg twice daily for 10 days or Vancomycin 125 mg 4 times daily for 10 days',
                'Fulminant case: Oral/rectal Vancomycin higher dose + IV Metronidazole (in case of ileus)',
              ],
              supportive: [
                'Stopping the antibacterial agent if possible, fluid and electrolyte replacement, nutrition',
                'Avoid: antimotility agents in severe patients'
              ],
              monitoring: [
                'Monitoring clinical status, leukocytosis and renal function daily in severe cases',
                'In case of recurrence consider new drug treatment (e.g. fidaxomicin) or FMT'
              ],
              prevention: [
                'Antibiotic stewardship, hand hygiene, contact isolation, environmental disinfection (sporocidal agents)'
              ],
              special_populations: [
                'Elderly, immunosuppressed and hospitalized patients are at higher risk; lower threshold for early treatment in these'
              ]
              ,
              dosing: {
                adult: {
                  fidaxomicin: '200 mg PO twice daily (BID) for 10 days',
                  vancomycin: '125 mg PO 4x/day for 10 days (non-severe); in fulminant case 500 mg PO 4x/day + consider rectal administration',
                  metronidazol_iv: '500 mg IV 3x/day (adjunctive in fulminant/ileus)'
                },
                pediatric: 'Pediatric doses according to local protocol; weight-based dosing of vancomycin required',
              },
              references: [
                'IDSA/SHEA 2021 C. difficile guideline: https://www.idsociety.org/practice-guideline/clostridioides-difficile/',
                'CDC C. difficile information: https://www.cdc.gov/cdiff/index.html'
              ]
            },
            prognosis: {
              mortality: 'Overall 5-10%, Fulminant 30-50%',
              prognostic_scores: ['ATLAS score'],
              factors: 'Age, leukocytosis, albumin, creatinine, hypervirulent strain, delayed treatment'
            }
          },
          {
            id: 'salmonellosis',
            name: 'Salmonellosis (Non-typhoidal)',
            pathogen: { type: 'Bacterium', name: 'Salmonella enterica (e.g., Enteritidis, Typhimurium)', gram: 'Gram-negative', shape: 'rod' },
            epidemiology: {
              incidence: 'Common food poisoning (more common in summer)',
              risk_groups: ['Infants', 'Elderly', 'Achlorhydria (PPI)', 'Immunosuppressed'],
              seasonality: 'Summer-autumn',
              transmission: 'Fecal-oral: contaminated food (eggs, poultry, meat), contact with reptiles'
            },
            pathomechanism: {
              steps: [
                'Ingestion (high bacterial load required, except in achlorhydria)',
                'Invasion through M-cells in the small intestine (Peyer\'s patches)',
                'Neutrophil infiltration, inflammation, fluid secretion'
              ],
              virulence_factors: ['Type III secretion system (T3SS)', 'Enterotoxin']
            },
            clinical: {
              incubation: '6-72 hours (average 12-36 hours)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Diarrhea', description: 'Watery, rarely bloody, foul-smelling', severity: 'moderate' },
                { name: 'Fever', description: 'Common (38-39°C)', severity: 'moderate' },
                { name: 'Abdominal cramps', description: 'Diffuse or periumbilical', severity: 'moderate' },
                { name: 'Nausea, vomiting', description: 'Often precedes diarrhea', severity: 'mild' }
              ],
              physical_exam: ['Fever', 'Abdominal tenderness', 'Signs of dehydration'],
              complications: ['Bacteremia (5%, mainly elderly/immunosuppressed)', 'Septic arthritis', 'Osteomyelitis (sickle cell anemia)', 'Endovascular infection (aneurysm)']
            },
            diagnostics: {
              laboratory: [{ test: 'Inflammatory markers', finding: 'CRP elevated', interpretation: 'Bacterial origin' }],
              microbiology: [{ test: 'Stool culture', finding: 'Salmonella sp.', significance: 'Diagnostic' }]
            },
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Healthy adults do NOT need antibiotics (may prolong carriage!)' }],
                inpatient: [{ drug: 'Ceftriaxone', dose: '1-2g IV', duration: '7-14 days', note: 'In severe/invasive cases' }, { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '7-10 days', note: 'Alternative (if susceptible)' }]
              },
              targeted: 'Only in risk groups (infant, elderly, immunosuppressed) or severe cases: Fluoroquinolone or Ceftriaxone.',
              supportive: ['Fluid replacement (ORS)', 'Probiotics'],
              prevention: ['Food hygiene', 'Thorough cooking of eggs/meat']
            },
            guidelines: {
              diagnosis: [
                'Suspicion: acute diarrhea with fever; higher risk for severe complications in infants/elderly/immunosuppressed',
                'Microbiology: stool culture for Salmonella identification; blood culture in severe or suspected sepsis cases'
              ],
              treatment_indications: [
                'Healthy adults, non-invasive infection: usually no antibiotics',
                'Antibiotics recommended: infants, elderly, immunosuppressed, sepsis, extraintestinal infection, pregnancy in certain situations'
              ],
              first_line: [
                'Severe/invasive case: Ceftriaxone IV or Fluoroquinolone (depending on susceptibility)'
              ],
              supportive: ['Fluid replacement, electrolyte replacement, nutrition'],
              prevention: ['Food safety, thorough cooking of eggs and poultry'],
              dosing: {
                adult: {
                  ceftriaxone: '1–2 g IV once daily (usual course 5–14 days, depending on clinical status)',
                  ciprofloxacin: '500 mg PO twice daily (7–10 days) – only for susceptible strains; local resistance must be considered'
                },
                pediatric: 'Ceftriaxone and fluoroquinolone pediatric doses are age and weight dependent; consult local pediatric protocol'
              },
              references: [
                'CDC – Salmonella: https://www.cdc.gov/salmonella/index.html',
                'WHO – Non-typhoidal Salmonella overview: https://www.who.int/news-room/fact-sheets/detail/salmonella-(non-typhoidal)'
              ]
            },
            prognosis: { mortality: 'Low (<1%), higher in sepsis', prognostic_scores: [], factors: 'Age, comorbidity' }
          },
          {
            id: 'shigellosis',
            name: 'Shigellosis (Dysentery)',
            pathogen: { type: 'Bacterium', name: 'Shigella (dysenteriae, flexneri, sonnei)', gram: 'Gram-negative', shape: 'rod' },
            epidemiology: {
              incidence: 'Common worldwide, endemic in developing countries',
              risk_groups: ['Children (daycare, kindergarten)', 'Travelers', 'MSM'],
              transmission: 'Fecal-oral (person-to-person), very low infectious dose (10-100 bacteria)!'
            },
            pathomechanism: {
              steps: [
                'Invasion of colonic epithelium',
                'Intercellular spread (actin polymerization)',
                'Shiga toxin (S. dysenteriae): protein synthesis inhibition, HUS',
                'Mucosal ulceration, inflammation'
              ],
              virulence_factors: ['Shiga toxin (Stx)', 'Invasion plasmid antigens']
            },
            clinical: {
              incubation: '1-3 days',
              onset: 'Sudden',
              symptoms: [
                { name: 'Dysentery', description: 'Bloody, mucoid, purulent stool', severity: 'severe' },
                { name: 'Tenesmus', description: 'Painful urge to defecate without passage', severity: 'severe' },
                { name: 'High fever', description: 'Common, toxic state', severity: 'moderate' },
                { name: 'Abdominal cramps', description: 'Left lower quadrant dominance', severity: 'moderate' }
              ],
              complications: ['Hemolytic uremic syndrome (HUS - S. dysenteriae)', 'Toxic megacolon', 'Rectal prolapse', 'Reactive arthritis']
            },
            diagnostics: {
              laboratory: [{ test: 'CBC', finding: 'Leukocytosis, left shift', interpretation: 'Invasive infection' }],
              microbiology: [{ test: 'Stool culture', finding: 'Shigella sp.', significance: 'Diagnostic' }]
            },
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Azithromycin', dose: '1x500mg PO', duration: '3 days', note: 'First choice' }, { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '3 days', note: 'Alternative (resistance increasing)' }]
              },
              targeted: 'Antibiotics recommended to shorten illness and reduce infectivity. Azithromycin, Ceftriaxone, Ciprofloxacin.',
              supportive: ['Fluid replacement', 'Antimotility agents (Loperamide) are FORBIDDEN!'],
              prevention: ['Strict hand hygiene', 'Patient isolation']
            },
            guidelines: {
              diagnosis: [
                'Suspicion: bloody, mucoid stool and tenesmus; low infectious dose may suggest outbreak',
                'Microbiology: stool culture; Shiga-toxin test for S. dysenteriae'
              ],
              treatment_indications: [
                'Antibiotics recommended to shorten illness and reduce spread (especially in outbreaks, severe symptoms or risk groups)'
              ],
              first_line: [
                'Azithromycin (1 g single dose or 500 mg 3 days), Alternative: Ceftriaxone IV in severe cases'
              ],
              supportive: ['Fluid replacement, symptomatic treatment'],
              prevention: ['Regular hand hygiene, contact isolation, epidemic control measures'],
              dosing: {
                adult: {
                  azithromycin: "1 g PO single dose or 500 mg PO 1x daily for 3 days (according to local protocol)",
                  ciprofloxacin: '500 mg PO 2x/day for 3 days (Alternative; resistance increasing)',
                  ceftriaxone: '1 g IV once daily in severe cases'
                },
                pediatric: 'Azithromycin and ceftriaxone pediatric doses are age and weight dependent; consult pediatric protocol'
              },
              references: [
                'CDC – Shigella: https://www.cdc.gov/shigella/index.html',
                'WHO – Shigellosis factsheet: https://www.who.int/news-room/fact-sheets/detail/shigellosis'
              ]
            },
            prognosis: { mortality: 'Low with treatment, S. dysenteriae type 1 in epidemics can be 20%', prognostic_scores: [], factors: 'Age, comorbidity, malnutrition' }
          },
          {
            id: 'campylobacter',
            name: 'Campylobacteriosis',
            pathogen: { type: 'Bacterium', name: 'Campylobacter jejuni', gram: 'Gram-negative', shape: 'spiral/gull-wing' },
            epidemiology: {
              incidence: 'Most common bacterial gastroenteritis in the developed world',
              risk_groups: ['Infants', 'Young adults', 'Elderly'],
              seasonality: 'Summer',
              transmission: 'Contaminated poultry (undercooked), raw milk, water'
            },
            pathomechanism: {
              steps: [
                'Ingestion (low infectious dose)',
                'Colonization of jejunum/ileum/colon',
                'Invasion of epithelial cells',
                'Toxin production (cytolethal distending toxin)',
                'Inflammatory response, bloody diarrhea'
              ],
              virulence_factors: ['Flagellum (motility)', 'Adhesins', 'Cytolethal distending toxin (CDT)']
            },
            clinical: {
              incubation: '2-5 days',
              onset: 'Sudden',
              symptoms: [
                { name: 'Diarrhea', description: 'Watery, often bloody', severity: 'moderate' },
                { name: 'Abdominal pain', description: 'Severe, crampy (pseudoappendicitis)', severity: 'severe' },
                { name: 'Fever', description: 'Can be a prodromal symptom', severity: 'moderate' }
              ],
              physical_exam: ['Diffuse abdominal tenderness', 'Fever', 'Signs of dehydration'],
              complications: ['Guillain-Barré syndrome (GBS) - 1/1000 cases', 'Reactive arthritis', 'Erythema nodosum']
            },
            diagnostics: {
              laboratory: [{ test: 'CBC', finding: 'Leukocytosis', interpretation: 'Inflammation' }, { test: 'Stool', finding: 'Leukocytes, RBCs', interpretation: 'Invasive' }, { test: 'CRP', finding: 'Elevated', interpretation: 'Bacterial origin' }],
              differential: [
                { disease: 'Salmonellosis', distinguishing: 'Culture, epidemiology' },
                { disease: 'Shigellosis', distinguishing: 'More severe dysentery, culture' },
                { disease: 'Appendicitis', distinguishing: 'US/CT, surgical consultation' }
              ],
              microbiology: [{ test: 'Stool culture', finding: 'Campylobacter (special medium, 42°C)', significance: 'Diagnostic' }]
            },
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Azithromycin', dose: '1x500mg PO', duration: '3 days', note: 'First choice in severe cases' }]
              },
              targeted: 'Mild cases only fluid replacement. Severe cases: macrolides (Azithromycin). Fluoroquinolone resistance is high!',
              supportive: ['Fluid replacement'],
              prevention: ['Proper cooking of poultry', 'Avoid cross-contamination in the kitchen']
            },
            guidelines: {
              diagnosis: [
                'Suspicion: acute abdominal pain, bloody diarrhea; pseudoappendicitis symptoms possible',
                'Microbiology: stool culture under special conditions (42°C); antigen/PCR where available'
              ],
              treatment_indications: [
                'Mild, non-systemic case: supportive treatment only',
                'Severe or persistent symptoms, immunosuppressed: macrolide therapy recommended'
              ],
              first_line: ['Azithromycin 500 mg single dose or 500 mg daily for 3 days (in more severe cases)'],
              supportive: ['Fluid replacement, electrolyte replacement'],
              prevention: ['Thorough cooking of poultry, kitchen hygiene'],
              dosing: {
                adult: {
                  azithromycin: '500 mg PO single dose or 500 mg PO once daily for 3 days (alternative regimen: 500 mg day 1, then 250 mg daily 2–3) ',
                  ciprofloxacin: '500 mg PO twice daily for 3 days (if susceptible and severe case)'
                },
                pediatric: 'Macrolide pediatric doses are age and weight dependent; request local protocol'
              },
              references: [
                'CDC – Campylobacter: https://www.cdc.gov/campylobacter/index.html',
                'ESCMID guidance on Campylobacter: https://www.escmid.org/'
              ]
            },
            prognosis: { mortality: 'Very low (<0.1%)', prognostic_scores: [], factors: 'GBS complication can be severe, reactive arthritis prolonged' }
          },
          {
            id: 'ecoli_enteritis',
            name: 'E. coli enteritis (ETEC, EHEC)',
            pathogen: { type: 'Bacterium', name: 'Escherichia coli (pathogenic strains)', gram: 'Gram-negative', shape: 'rod' },
            epidemiology: {
              incidence: 'ETEC: traveler\'s diarrhea; EHEC: foodborne outbreaks',
              risk_groups: ['Travelers (ETEC)', 'Children, elderly (EHEC)'],
              seasonality: 'Summer',
              transmission: 'Fecal-oral, contaminated water/food (beef, vegetables)'
            },
            pathomechanism: {
              steps: [
                'ETEC: Enterotoxins (LT/ST) → fluid secretion (cholera-like)',
                'EHEC (STEC): Shiga-toxin production → intestinal wall damage, systemic absorption → renal endothelial damage (HUS)'
              ],
              virulence_factors: ['Enterotoxins', 'Shiga-toxin (Stx1, Stx2)', 'Adhesins']
            },
            clinical: {
              incubation: 'ETEC: 1-3 days; EHEC: 3-4 days',
              onset: 'Sudden',
              symptoms: [
                { name: 'ETEC: Watery diarrhea', description: 'No fever, "Traveler\'s diarrhea"', severity: 'moderate' },
                { name: 'EHEC: Bloody diarrhea', description: 'Fever absent or low, severe abdominal cramps', severity: 'severe' }
              ],
              physical_exam: ['Dehydration', 'Abdominal tenderness (EHEC: severe)', 'Absence of fever (EHEC)'],
              complications: ['Hemolytic uremic syndrome (HUS) - 5-10% after EHEC infection (mainly children)', 'TTP (adults)']
            },
            diagnostics: {
              laboratory: [{ test: 'CBC', finding: 'Thrombocytopenia, anemia', interpretation: 'Suspicion of HUS!' }, { test: 'Renal function', finding: 'Creatinine elevation', interpretation: 'HUS' }],
              differential: [
                { disease: 'Shigellosis', distinguishing: 'Fever more common, culture' },
                { disease: 'Campylobacteriosis', distinguishing: 'Culture, GBS risk' },
                { disease: 'TTP', distinguishing: 'Adults, neurological symptoms, ADAMTS13' }
              ],
               microbiology: [
                { test: 'Stool culture', finding: 'Sorbitol-MacConkey (E. coli O157:H7)', significance: 'EHEC screening' },
                { test: 'Shiga-toxin detection', finding: 'PCR or EIA', significance: 'Rapid diagnosis' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'ETEC: Rifaximin', dose: '2x200mg PO', duration: '3 days', note: 'Traveler\'s diarrhea' },
                  { drug: 'EHEC: ANTIBIOTICS CONTRAINDICATED!', dose: '-', duration: '-', note: 'Increases risk of HUS (toxin release)!' }
                ]
              },
              targeted: 'ETEC: Ciprofloxacin or Azithromycin (in severe cases). EHEC: ONLY supportive!',
              supportive: ['Fluid replacement', 'In HUS: dialysis, transfusion'],
              prevention: ['Food hygiene', 'Thorough cooking of beef', 'Travelers: bottled water']
            },
            guidelines: {
              diagnosis: [
                'Suspicion: bloody diarrhea with HUS occurrence; treat with special caution in children',
                'Microbiology: EHEC screening (sorbitol-MacConkey, Shiga-toxin PCR/EIA)'
              ],
              treatment_indications: [
                'In EHEC infection antibiotics are generally contraindicated (increases HUS risk)',
                'In ETEC short antibiotic course may be given for severe symptoms (e.g. Rifaximin, Azithromycin)'
              ],
              supportive: ['Fluid replacement, close monitoring; in HUS nephrological care, dialysis if needed'],
              prevention: ['Food hygiene, well-cooked beef, precautions for travelers'],
              dosing: {
                adult: {
                  rifaximin: '200 mg PO 3 times daily for 3 days (ETEC, non-invasive traveler\'s diarrhea)',
                  azithromycin: '1 g PO single dose or 500 mg PO once daily for 1–3 days (severe ETEC or ciprofloxacin resistance)'
                },
                pediatric: 'Rifaximin pediatric doses limited; avoid antibiotics in children with EHEC'
              },
              references: [
                'CDC – E. coli (STEC): https://www.cdc.gov/ecoli/index.html',
                'CDC – Traveler\'s Diarrhea & Rifaximin: https://www.cdc.gov/antibiotic-use/community/for-hcp/common-conditions/travelers-diarrhea.html'
              ]
            },
            prognosis: { mortality: 'ETEC: low; EHEC: 3-5% mortality in HUS', prognostic_scores: [], factors: 'Age (child/elderly), development of HUS, antibiotic use (worsens EHEC!)' }
          },
          {
            id: 'yersiniosis',
            name: 'Yersiniosis',
            pathogen: { type: 'Bacterium', name: 'Yersinia enterocolitica', gram: 'Gram-negative', shape: 'coccobacillus' },
            epidemiology: {
              incidence: 'More common in temperate climates, in winter',
              risk_groups: ['Children', 'Iron overload patients (hemochromatosis)'],
              seasonality: 'Winter',
              transmission: 'Raw pork, milk, contaminated water. Psychrophilic (grows in refrigerator!)'
            },
            pathomechanism: {
              steps: [
                'Invasion through M-cells (ileum)',
                'Colonization of Peyer\'s patches',
                'Spread to mesenteric lymph nodes',
                'Formation of microabscesses',
                'Reactive immune response (arthritis)'
              ],
              virulence_factors: ['Yersinia outer proteins (Yops)', 'T3SS', 'Invasin']
            },
            clinical: {
              incubation: '4-7 days',
              onset: 'Gradual',
              symptoms: [
                { name: 'Enterocolitis', description: 'Fever, diarrhea (can be bloody)', severity: 'moderate' },
                { name: 'Pseudoappendicitis', description: 'Right lower quadrant pain (mesenteric lymphadenitis)', severity: 'moderate' },
                { name: 'Pharyngitis', description: 'Occurs in adults', severity: 'mild' }
              ],
              physical_exam: ['Right lower quadrant tenderness', 'Fever', 'Erythema nodosum (late)'],
              complications: ['Reactive arthritis (HLA-B27)', 'Erythema nodosum', 'Sepsis (in iron overload patients)']
            },
            diagnostics: {
              laboratory: [{ test: 'Inflammatory markers', finding: 'Elevated', interpretation: 'Bacterial' }],
              imaging: [{ modality: 'Abdominal US', finding: 'Mesenteric lymphadenopathy, terminal ileitis', significance: 'Exclusion of appendicitis' }],
              differential: [
                { disease: 'Appendicitis', distinguishing: 'US/CT, surgical consultation' },
                { disease: 'Crohn\'s disease', distinguishing: 'Chronic, endoscopy, biopsy' },
                { disease: 'Other bacterial enteritis', distinguishing: 'Culture' }
              ],
              microbiology: [{ test: 'Stool culture', finding: 'CIN agar (cold enrichment)', significance: 'Must be requested from the lab' }]
            },
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Usually self-limiting' }],
                inpatient: [{ drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '7-10 days', note: 'In severe cases' }, { drug: 'Doxycycline', dose: '2x100mg PO', duration: '7-10 days', note: 'Alternative' }]
              },
              targeted: 'Fluoroquinolones, Doxycycline, TMP-SMX. Sepsis: Ceftriaxone.',
              prevention: ['Avoid raw pork', 'Pasteurization of milk']
            },
            guidelines: {
              diagnosis: [
                'Suspicion: right lower quadrant pain, fever, occasionally bloody diarrhea; pseudoappendicitis picture possible',
                'Microbiology: stool culture on CIN agar, notify lab about need for cold enrichment'
              ],
              treatment_indications: [
                'Usually self-limiting, antibiotics only for severe systemic symptoms, systemic spread or iron overload patients'
              ],
              first_line: ['Severe case: Ciprofloxacin or Doxycycline (considering local resistance)'],
              supportive: ['Fluid replacement, antipyretics'],
              prevention: ['Education: avoid raw pork, consume pasteurized milk'],
              dosing: {
                adult: {
                  ciprofloxacin: '500 mg PO twice daily for 7–10 days',
                  doxycycline: '100 mg PO twice daily for 7–10 days'
                },
                pediatric: 'In children usually symptomatic treatment; antibiotics only in severe, systemic infection (pediatric consultation)'
              },
              references: [
                'CDC – Yersinia enterocolitica: https://www.cdc.gov/yersinia/index.html'
              ]
            },
            prognosis: { mortality: 'Low, but high in sepsis (50%)', prognostic_scores: [], factors: 'Iron overload, immunosuppression, late diagnosis' }
          },
          {
            id: 'giardiasis',
            name: 'Giardiasis',
            pathogen: { type: 'Protozoan', name: 'Giardia duodenalis (lamblia)', gram: '-', shape: 'pear-shaped (trophozoite)' },
            epidemiology: {
              incidence: 'Widespread worldwide, most common parasitic intestinal infection',
              risk_groups: ['Children', 'Campers (stream water)', 'IgA deficient individuals'],
              seasonality: 'Summer-autumn',
              transmission: 'Fecal-oral (cysts), water (chlorine-resistant!), food'
            },
            pathomechanism: {
              steps: ['Cyst ingestion', 'Excystation in the duodenum', 'Trophozoite attachment to villi (sucking disc)', 'Malabsorption, disaccharidase deficiency']
            },
            clinical: {
              incubation: '1-3 weeks',
              onset: 'Gradual',
              symptoms: [
                { name: 'Diarrhea', description: 'Foul-smelling, greasy (steatorrhea), non-bloody', severity: 'moderate' },
                { name: 'Bloating, gas', description: 'Severe meteorism, sulfurous burps', severity: 'moderate' },
                { name: 'Weight loss', description: 'Due to malabsorption', severity: 'moderate' },
                { name: 'Lactose intolerance', description: 'Secondary, may persist after infection', severity: 'mild' }
              ],
              physical_exam: ['Meteorism', 'Diffuse abdominal tenderness', 'No fever'],
              complications: ['Chronic diarrhea', 'Malabsorption (vitamin deficiency)', 'Failure to thrive (children)']
            },
            diagnostics: {
              laboratory: [{ test: 'CBC', finding: 'Normal, NO eosinophilia', interpretation: 'Non-invasive parasite' }],
              differential: [
                { disease: 'Lactose intolerance', distinguishing: 'Breath test, effect of diet' },
                { disease: 'IBS', distinguishing: 'Chronic, negative parasite test' },
                { disease: 'Cryptosporidiosis', distinguishing: 'Acid-fast stain, immunosuppression' }
              ],
              microbiology: [
                { test: 'Stool parasite exam', finding: 'Cysts or trophozoites', significance: '3 samples needed (intermittent shedding)' },
                { test: 'Stool antigen (EIA)', finding: 'Positive', significance: 'More sensitive than microscopy' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Metronidazole', dose: '3x250mg PO', duration: '5-7 days', note: 'First choice' },
                  { drug: 'Tinidazole', dose: '2g PO', duration: 'Single dose', note: 'More convenient' }
                ]
              },
              targeted: 'Nitroimidazoles (Metronidazole, Tinidazole). In pregnancy: Paromomycin.',
              prevention: ['Boil/filter water (chlorine is not enough!)', 'Hand washing']
            },
            guidelines: {
              diagnosis: [
                'Investigation of chronic/acute loose stool: 3 stool samples for parasite exam or antigen test (EIA) for faster result',
                'Eosinophilia usually absent, breath tests for differential diagnosis'
              ],
              treatment_indications: [
                'All symptomatic cases should be treated; asymptomatic carriage only treated in special epidemiological indication'
              ],
              first_line: ['Metronidazole 250–750 mg 3x daily 5–7 days or Tinidazole 2 g single dose (according to local protocol)'],
              supportive: ['Fluid replacement, diet (avoid fatty foods)'],
              prevention: ['Boil/filter drinking water, hand hygiene; hygiene measures in child communities'],
              dosing: {
                adult: {
                  metronidazole: '250–500 mg PO 3 times daily for 5–7 days (many protocols 500 mg 2–3 times daily)',
                  tinidazole: '2 g PO single dose (single dose effective alternative)'
                },
                pregnancy: 'In pregnancy: Paromomycin 500 mg PO 3 times daily for 7 days preferred (avoid metronidazole/tinidazole in first trimester)',
                pediatric: 'Pediatric doses age and weight dependent; tinidazole/metronidazole pediatric dosing according to local protocol'
              },
              references: [
                'CDC – Giardiasis: https://www.cdc.gov/parasites/giardia/index.html'
              ]
            },
            prognosis: { mortality: 'Excellent, but can become chronic without treatment', prognostic_scores: [], factors: 'IgA deficiency, reinfection' }
          },
          {
            id: 'amoebiasis',
            name: 'Amoebiasis',
            pathogen: { type: 'Protozoan', name: 'Entamoeba histolytica', gram: '-', shape: 'amoeboid' },
            epidemiology: {
              incidence: 'Endemic in tropical/subtropical areas',
              risk_groups: ['Travelers', 'Immigrants', 'Institutionalized individuals', 'MSM'],
              seasonality: 'None',
              transmission: 'Fecal-oral (cysts)'
            },
            pathomechanism: {
              steps: ['Cyst ingestion', 'Trophozoite invasion of colonic mucosa', 'Tissue lysis (histolytic enzymes)', 'Ulcer formation (flask-shaped)', 'Hematogenous spread (liver)']
            },
            clinical: {
              incubation: '2-4 weeks',
              onset: 'Gradual',
              symptoms: [
                { name: 'Amoebic dysentery', description: 'Bloody, mucoid diarrhea, abdominal pain', severity: 'severe' },
                { name: 'Amoebic liver abscess', description: 'Right upper quadrant pain, fever, weight loss (even without diarrhea!)', severity: 'severe' }
              ],
              physical_exam: ['Abdominal tenderness (cecum/colon)', 'Hepatomegaly, liver percussion tenderness (abscess)'],
              complications: ['Bowel perforation', 'Toxic megacolon', 'Abscess rupture (pleura, peritoneum, pericardium)', 'Brain abscess']
            },
            diagnostics: {
              laboratory: [{ test: 'CBC', finding: 'Leukocytosis (in abscess)', interpretation: 'Inflammation' }, { test: 'Liver enzymes', finding: 'ALP elevated', interpretation: 'Abscess' }],
              differential: [
                { disease: 'Bacterial dysentery', distinguishing: 'Culture, fever more common' },
                { disease: 'Pyogenic liver abscess', distinguishing: 'Bacterial culture, more septic' },
                { disease: 'Echinococcus cyst', distinguishing: 'Serology, imaging (daughter cysts)' }
              ],
              microbiology: [
                { test: 'Stool parasite exam', finding: 'Trophozoites (with RBCs in cytoplasm!)', significance: 'Must be distinguished from E. dispar' },
                { test: 'Stool antigen/PCR', finding: 'E. histolytica specific', significance: 'Gold standard' },
                { test: 'Serology', finding: 'Positive', significance: 'Useful in invasive disease (liver abscess)' }
              ],
              imaging: [{ modality: 'Abdominal US/CT', finding: 'Solitary liver abscess (right lobe)', significance: 'Liver abscess diagnosis' }]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Metronidazole', dose: '3x750mg PO', duration: '7-10 days', note: 'Tissue agent (invasive)' },
                  { drug: '+ Paromomycin', dose: '3x500mg PO', duration: '7 days', note: 'Luminal agent (against cyst shedding) - MANDATORY addition!' }
                ]
              },
              targeted: 'Metronidazole (tissue) + Paromomycin/Diloxanide (luminal). Liver abscess: Metronidazole + drainage if needed.',
              prevention: ['Water and food hygiene']
            },
            guidelines: {
              diagnosis: [
                'In suspicion of dysentery stool parasite exam, antigen/PCR for rapid and specific diagnosis',
                'In liver abscess imaging (US/CT) and serology help diagnosis'
              ],
              treatment_indications: [
                'Invasive amoebic dysentery or liver abscess: Metronidazole or Tinidazole (tissue treatment) mandatory, then luminal agent (Paromomycin/Diloxanide) to eliminate cysts',
                'Mild luminal infection: Paromomycin/diloxanide alone'
              ],
              first_line: ['Metronidazole 750 mg 3x daily 7–10 days + Paromomycin 500 mg 3x daily 7 days (luminal supplement)'],
              supportive: ['Fluid replacement, analgesia, nutrition; in liver abscess consider drainage indication'],
              prevention: ['Water and food hygiene, hand washing, precautions for travelers'],
              dosing: {
                adult: {
                  metronidazole: '750 mg PO 3 times daily for 7–10 days (invasive/abscess)',
                  tinidazole: '2 g PO once daily for 3 days (alternative tissue treatment according to local protocol)',
                  paromomycin: '500 mg PO 3 times daily for 7 days (luminal supplement)'
                },
                pregnancy: 'In pregnancy avoid tinidazole/metronidazole in first trimester; paromomycin preferred for luminal treatment',
                pediatric: 'Pediatric dose according to local protocol; pediatric consultation recommended'
              },
              references: [
                'CDC – Amebiasis: https://www.cdc.gov/parasites/amebiasis/index.html',
                'WHO – Amebiasis: https://www.who.int/health-topics/amebiasis'
              ]
            },
            prognosis: { mortality: 'Good with treatment (<1%), higher with complicated abscess/perforation', prognostic_scores: [], factors: 'Late diagnosis, abscess rupture' }
          },
          {
            id: 'cryptosporidiosis',
            name: 'Cryptosporidiosis',
            pathogen: { type: 'Protozoan', name: 'Cryptosporidium hominis/parvum', gram: 'Acid-fast stain', shape: 'oocyst' },
            epidemiology: {
              incidence: 'Common waterborne outbreaks (swimming pools)',
              risk_groups: ['AIDS patients (defining opportunist)', 'Children', 'Veterinarians'],
              seasonality: 'Summer-autumn',
              transmission: 'Fecal-oral, water (chlorine-resistant oocysts!)'
            },
            pathomechanism: {
              steps: [
                'Oocyst ingestion',
                'Sporozoite release',
                'Attachment to apical surface of epithelial cells (intracellular, but extracytoplasmic)',
                'Villus atrophy, crypt hyperplasia',
                'Malabsorption, secretory diarrhea'
              ],
              virulence_factors: ['Adhesins', 'Proteases']
            },
            clinical: {
              incubation: '7-10 days',
              onset: 'Sudden',
              symptoms: [
                { name: 'Watery diarrhea', description: 'Profuse, can be cholera-like', severity: 'moderate' },
                { name: 'Abdominal cramps, nausea', description: 'General symptoms', severity: 'mild' },
                { name: 'Persistent diarrhea', description: 'Can last for weeks/months in immunosuppressed, life-threatening', severity: 'severe' }
              ],
              physical_exam: ['Signs of dehydration', 'Cachexia (in chronic cases)'],
              complications: ['Severe dehydration', 'Malnutrition', 'Biliary tract involvement (AIDS)']
            },
            diagnostics: {
              laboratory: [{ test: 'CD4 count', finding: '<100/µL', interpretation: 'Risk of severe course (HIV)' }],
              differential: [
                { disease: 'Giardiasis', distinguishing: 'Stool exam, bloating dominates' },
                { disease: 'Isosporiasis', distinguishing: 'Larger oocysts, TMP-SMX effective' },
                { disease: 'Microsporidiosis', distinguishing: 'Smaller spores, special stain' }
              ],
              microbiology: [
                { test: 'Stool stain', finding: 'Acid-fast oocysts (modified Z-N)', significance: 'On special request' },
                { test: 'Stool antigen/PCR', finding: 'Positive', significance: 'More sensitive' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nitazoxanide', dose: '2x500mg PO', duration: '3 days', note: 'For immunocompetent' },
                  { drug: 'ART (Antiretroviral therapy)', dose: '-', duration: '-', note: 'Restoring the immune system is key in HIV patients!' }
                ]
              },
              targeted: 'Immunocompetent: Nitazoxanide. Immunosuppressed: ART optimization, supportive, Nitazoxanide (less effective).',
              supportive: ['Fluid replacement', 'Antimotility agents (with caution)'],
              prevention: ['Water filtration (<1 micron), avoid swimming pools during diarrhea']
            },
              guidelines: {
                diagnosis: [
                  'Suspicion: persistent watery diarrhea in immunosuppressed patient (CD4<100), in waterborne outbreaks',
                  'Diagnosis: stool antigen or PCR; acid-fast stain on special request'
                ],
                treatment_indications: [
                  'Immunocompetent: often heals spontaneously',
                  'Immunodeficient: antiviral/therapeutic intervention required; ART optimization priority'
                ],
                first_line: ['Nitazoxanide for immunocompetent patients; in immunosuppressed primarily restoration of immunocompetence (ART)'],
                supportive: ['Fluid and nutritional supplementation, electrolyte monitoring'],
                prevention: ['Filter/boil drinking water, personal hygiene, avoid swimming pool in case of diarrhea'],
                dosing: {
                  adult: {
                    nitazoxanide_immunocompetent: '500 mg PO twice daily for 3 days',
                    nitazoxanide_immunocompromised: 'Consider longer course (local protocol); ART optimization primary'
                  },
                  pediatric: 'Nitazoxanide pediatric dose according to age and weight; request local protocol'
                },
                references: [
                  'CDC – Cryptosporidium: https://www.cdc.gov/parasites/crypto/index.html',
                  'WHO – Cryptosporidiosis: https://www.who.int/news-room/fact-sheets/detail/cryptosporidiosis'
                ]
              },
            prognosis: { mortality: 'Immunocompetent: good; AIDS: high mortality with CD4<100', prognostic_scores: [], factors: 'Restoration of immune status (ART)' }
          },
          {
            id: 'viral_gastroenteritis',
            name: 'Viral Gastroenteritis',
            pathogen: { type: 'Virus', name: 'Rotavirus, Norovirus, Adenovirus, Astrovirus', gram: 'RNA/DNA', shape: 'variable' },
            epidemiology: {
              incidence: 'Norovirus: most common epidemic GE (all ages); Rotavirus: infants (before vaccine)',
              risk_groups: ['Infants (Rota)', 'Elderly (Noro)', 'Closed communities (ships, barracks)'],
              seasonality: 'Winter (Rota, Noro)',
              transmission: 'Fecal-oral, aerosol (vomiting - Noro), fomites'
            },
            pathomechanism: {
              steps: [
                'Virus replication in small intestine villus epithelium',
                'Villus atrophy, reduced absorption surface',
                'Disaccharidase deficiency (lactose intolerance)',
                'Osmotic diarrhea',
                'NSP4 enterotoxin (Rotavirus)'
              ],
              virulence_factors: ['Capsid stability', 'NSP4 (Rota)']
            },
            clinical: {
              incubation: '12-48 hours (Noro), 1-3 days (Rota)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Vomiting', description: 'Dominant in Norovirus ("winter vomiting disease")', severity: 'severe' },
                { name: 'Watery diarrhea', description: 'Non-bloody', severity: 'moderate' },
                { name: 'Fever', description: 'Mild or absent', severity: 'mild' },
                { name: 'Myalgia, headache', description: 'Viral symptoms', severity: 'mild' }
              ],
              physical_exam: ['Signs of dehydration (dry tongue, decreased turgor)', 'Diffuse abdominal tenderness'],
              complications: ['Severe dehydration (infants, elderly)', 'Electrolyte imbalances']
            },
            diagnostics: {
              laboratory: [{ test: 'Electrolytes', finding: 'Imbalances', interpretation: 'Dehydration' }, { test: 'CBC', finding: 'Normal', interpretation: 'Not bacterial' }],
              differential: [
                { disease: 'Bacterial gastroenteritis', distinguishing: 'Fever, bloody stool, culture' },
                { disease: 'Food poisoning (toxin)', distinguishing: 'Shared meal, shorter incubation' },
                { disease: 'Drug side effect', distinguishing: 'History' }
              ],
              microbiology: [
                { test: 'Stool antigen (Rota/Adeno)', finding: 'Positive', significance: 'Rapid test in children' },
                { test: 'PCR', finding: 'Norovirus', significance: 'For epidemiological purposes' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [{ drug: 'None', dose: '-', duration: '-', note: 'Antibiotics are ineffective!' }]
              },
              targeted: 'No specific antiviral agent.',
              supportive: ['Oral rehydration (ORS) - crucial!', 'Antiemetics (Ondansetron)', 'Probiotics (Lactobacillus GG, S. boulardii)'],
              prevention: ['Rotavirus vaccine (infants)', 'Hand washing (alcohol gel less effective against Norovirus!)', 'Isolation']
            },
            guidelines: {
              diagnosis: [
                'Suspicion: symptom complex with vomiting and/or watery diarrhea, frequent outbreaks in closed communities',
                'Lab: primarily assessment of fluid and electrolyte status; virus confirmation by PCR/antigen test for epidemiological purposes'
              ],
              treatment_indications: [
                'Mostly only supportive treatment needed; hospitalization in case of dehydration, severe vomiting or infants/elderly'
              ],
              first_line: ['Oral rehydration ORS, in severe vomiting antiemetic (ondansetron also applicable in children according to local protocol)'],
              supportive: ['Fluid replacement, electrolyte correction, nutrition'],
              prevention: ['Rotavirus vaccination for infants, hand hygiene, isolation in outbreaks; in Norovirus disinfection of fomites'],
              dosing: {
                vaccination: {
                  rotavirus: 'Rotavirus vaccine: according to local vaccination schedule (e.g. Rotarix 2 doses, RotaTeq 3 doses – see vaccination protocol)'
                }
              },
              references: [
                'CDC – Norovirus: https://www.cdc.gov/norovirus/index.html',
                'CDC – Rotavirus: https://www.cdc.gov/rotavirus/index.html'
              ]
            },
            prognosis: { mortality: 'Very low in developed countries, dehydration is the main danger', prognostic_scores: [], factors: 'Age (infant/elderly), comorbidity' }
          },
          {
            id: 'cholera',
            name: 'Cholera',
            pathogen: { type: 'Bacterium', name: 'Vibrio cholerae (O1, O139)', gram: 'Gram-negative', shape: 'curved rod (vibrio)' },
            epidemiology: {
              incidence: 'Endemic (Asia, Africa, Haiti), epidemic',
              risk_groups: ['People in extreme poverty', 'Victims of natural disasters', 'Travelers (rare)'],
              seasonality: 'Rainy season',
              transmission: 'Fecal-oral (contaminated water/food)'
            },
            pathomechanism: {
              steps: [
                'Ingestion (high bacterial load, acid-sensitive)',
                'Small intestine colonization (TCP pilus)',
                'Cholera toxin (CTX) production',
                'Adenylate cyclase activation (cAMP increase)',
                'Massive Cl- and water secretion (CFTR)',
                'Secretory diarrhea (rice-water stool)'
              ],
              virulence_factors: ['Cholera toxin (AB5 toxin)', 'Toxin-coregulated pilus (TCP)']
            },
            clinical: {
              incubation: 'A few hours - 5 days',
              onset: 'Sudden',
              symptoms: [
                { name: 'Rice-water stool', description: 'Painless, large volume (up to 1L/hour!)', severity: 'severe' },
                { name: 'Vomiting', description: 'Common, even without nausea', severity: 'moderate' },
                { name: 'Muscle cramps', description: 'Due to electrolyte loss (K+, Ca2+, Mg2+)', severity: 'moderate' }
              ],
              physical_exam: [
                'Severe dehydration (hypovolemic shock)',
                'Dry mucous membranes, decreased turgor',
                'Washerwoman\'s hands (wrinkled skin)',
                'Hypotension, tachycardia',
                'Fever is usually ABSENT'
              ],
              complications: ['Hypovolemic shock', 'Acute renal failure (ATN)', 'Severe hypokalemia', 'Metabolic acidosis', 'Death (50% if untreated!)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Hemoconcentration', interpretation: 'Dehydration' },
                { test: 'Electrolytes', finding: 'Hypokalemia, acidosis', interpretation: 'Loss' },
                { test: 'Renal function', finding: 'Prerenal failure', interpretation: 'Volume depletion' }
              ],
              microbiology: [
                { test: 'Stool culture', finding: 'TCBS agar (yellow colonies)', significance: 'Gold standard' },
                { test: 'Rapid test (RDT)', finding: 'Crystal VC', significance: 'In outbreaks' },
                { test: 'Dark-field microscopy', finding: 'Shooting star motility', significance: 'Rapid' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycycline', dose: '300mg PO', duration: 'Single dose', note: 'For adults' },
                  { drug: 'Azithromycin', dose: '1g PO', duration: 'Single dose', note: 'Pregnant women, children' }
                ]
              },
              targeted: 'Fluid replacement is most important! Antibiotics are only adjunctive (shorten the illness).',
              supportive: ['ORS (Oral Rehydration Solution) - WHO formula', 'IV Ringer\'s lactate (severe dehydration)'],
              prevention: ['Clean water, hygiene', 'Oral cholera vaccine (Dukoral, Shanchol)']
            },
            guidelines: {
              diagnosis: [
                'Suspicion: large volume, painless "rice water" diarrhea; high probability in epidemic context',
                'Lab: fluid and electrolyte status especially important; culture on TCBS agar for epidemiological identification'
              ],
              treatment_indications: [
                'Immediate rehydration in any severe or large volume dystrophic diarrhea; antibiotics to shorten illness in severe cases'
              ],
              first_line: [
                'General: ORS and intravenous volume replacement in severe dehydration',
                'Antibiotic: Doxycycline single 300 mg for adults, or Azithromycin 1 g for pregnant women/children (according to local guidelines)'
              ],
              supportive: ['Electrolyte replacement, monitoring (kidney, potassium), oxygen and circulatory support if needed'],
              prevention: ['Drinking water and food hygiene, mass prophylaxis with vaccine in outbreaks'],
              dosing: {
                adult: {
                  doxycycline: '300 mg PO single dose (adults) according to most protocols',
                  azithromycin: '1 g PO single dose (alternative in pregnant women/children according to local protocol)'
                },
                pediatric: 'Pediatric doses weight dependent; Azithromycin pediatric dose according to local guideline'
              },
              references: [
                'WHO – Cholera and acute diarrhoeal disease guidance: https://www.who.int/health-topics/diarrhoeal-diseases',
                'CDC – Cholera: https://www.cdc.gov/cholera/index.html'
              ]
            },
            prognosis: { mortality: 'With treatment <1%, untreated 50%', prognostic_scores: [], factors: 'Age, comorbidity' }
          },
          {
            id: 'travelers_diarrhea',
            name: "Traveler's Diarrhea",
            pathogen: { type: 'Syndrome', name: 'ETEC (most common), Campylobacter, Salmonella, Shigella, Viruses', gram: 'Variable', shape: '-' },
            epidemiology: {
              incidence: '20-60% of travelers (to developing countries)',
              risk_groups: ['Young adults', 'Immunosuppressed', 'PPI users'],
              seasonality: 'None',
              transmission: 'Fecal-oral (food, water)'
            },
            pathomechanism: {
              steps: ['Pathogen ingestion', 'Enterotoxin production (ETEC) or invasion (Campy/Shigella)', 'Inflammation/secretion'],
              virulence_factors: ['Variable']
            },
            clinical: {
              incubation: 'During travel or after return',
              onset: 'Acute',
              symptoms: [
                { name: 'Diarrhea', description: 'Usually watery, 3-5 times/day', severity: 'moderate' },
                { name: 'Abdominal cramps', description: 'Common', severity: 'mild' },
                { name: 'Nausea/vomiting', description: 'Occurs', severity: 'mild' },
                { name: 'Fever', description: 'Suggests invasive pathogen (Campy/Shigella)', severity: 'moderate' }
              ],
              physical_exam: ['Mild abdominal tenderness', 'Signs of dehydration'],
              complications: ['Dehydration', 'Post-infectious IBS', 'Reactive arthritis']
            },
            diagnostics: {
              laboratory: [{ test: '-', finding: '-', interpretation: 'Usually not necessary' }],
              microbiology: [{ test: 'Stool culture/PCR', finding: 'Multiplex panel', significance: 'Only in persistent/severe cases or immunosuppressed' }]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1000mg PO once or 500mg for 3 days', duration: '', note: 'Southeast Asia (Campy resistance) or dysentery' },
                  { drug: 'Rifaximin', dose: '2x200mg PO', duration: '3 days', note: 'In non-invasive (afebrile) cases' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '1-3 days', note: 'Other regions (but resistance is increasing)' }
                ]
              },
              targeted: '-',
              supportive: ['Fluid replacement', 'Loperamide (only if no fever/bloody stool!)'],
              prevention: ['"Boil it, cook it, peel it or forget it"', 'Hand washing', 'Rifaximin prophylaxis (only in high-risk cases)']
            },
            guidelines: {
              diagnosis: [
                'Suspicion: acute diarrhea after or during travel; mostly no microbiological examination needed in mild cases',
                'In severe, persistent or febrile cases stool culture/PCR multiplex panel recommended'
              ],
              treatment_indications: [
                'Mild case: only rehydration and symptomatic treatment',
                'Severe, febrile, dysenteric case or immunosuppressed patient: antibiotic treatment recommended'
              ],
              first_line: [
                'Non-invasive (afebrile) cases: Rifaximin 2x200 mg 3 days',
                'With dysentery or in Southeast Asia: Azithromycin 1 g single or 500 mg 3 days'
              ],
              supportive: ['ORS, loperamide only if no fever/bloody stool, electrolyte replacement'],
              prevention: ['Food and water safety during travel; prophylaxis only in exceptional cases'],
              dosing: {
                adult: {
                  rifaximin: '200 mg PO 3 times daily for 3 days (non-invasive traveler\'s diarrhea)',
                  azithromycin: '1 g PO single dose (alternative) or 500 mg PO daily for 3 days'
                },
                pediatric: 'Pediatric doses weight and age dependent; request local pediatric protocol'
              },
              references: [
                'CDC – Traveler\'s Health: Traveler\'s Diarrhea: https://wwwnc.cdc.gov/travel/yellowbook/2024/infectious-diseases-related-to-travel/traveler-s-diarrhea',
                'WHO – Management of diarrhoea: https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease'
              ]
            },
            prognosis: { mortality: 'Very low', prognostic_scores: [], factors: 'Age, immune status' }
          },
          {
            id: 'dysentery_syndrome',
            name: 'Dysentery Syndrome',
            pathogen: { type: 'Syndrome', name: 'Shigella, EIEC, EHEC, Campylobacter, Entamoeba, Salmonella', gram: 'Variable', shape: '-' },
            epidemiology: {
              incidence: 'Variable',
              risk_groups: ['Children', 'Elderly', 'Immunosuppressed'],
              transmission: 'Fecal-oral'
            },
            pathomechanism: {
              steps: ['Colonic mucosa invasion', 'Inflammation, ulceration', 'Microabscesses', 'Bleeding, mucus production'],
              virulence_factors: ['Invasins', 'Cytotoxins']
            },
            clinical: {
              incubation: 'Variable',
              onset: 'Acute',
              symptoms: [
                { name: 'Bloody-mucoid diarrhea', description: 'Small volume, frequent', severity: 'severe' },
                { name: 'Tenesmus', description: 'Painful urge to defecate', severity: 'severe' },
                { name: 'Fever', description: 'Common (except sometimes EHEC/Amoeba)', severity: 'moderate' },
                { name: 'Abdominal pain', description: 'Crampy, lower abdomen', severity: 'moderate' }
              ],
              physical_exam: ['Lower abdominal tenderness', 'Fever', 'Toxic state'],
              complications: ['HUS (EHEC/Shigella)', 'Toxic megacolon', 'Perforation', 'Sepsis', 'Rectal prolapse']
            },
            diagnostics: {
              laboratory: [{ test: 'CBC', finding: 'Leukocytosis', interpretation: 'Inflammation' }],
              microbiology: [
                { test: 'Stool culture', finding: 'Pathogen search', significance: 'Mandatory!' },
                { test: 'Parasite exam', finding: 'E. histolytica', significance: 'If culture is negative' },
                { test: 'Shiga toxin', finding: 'Positive', significance: 'EHEC/Shigella' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg PO', duration: '3 days', note: 'First choice' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '3-5 days', note: 'Alternative (resistance?)' }
                ]
              },
              targeted: 'Based on culture. Antibiotics contraindicated in EHEC! Amoeba: Metronidazole.',
              supportive: ['Fluid replacement', 'Antimotility agents (Loperamide) are CONTRAINDICATED!'],
              prevention: ['Hygiene', 'Isolation']
            },
            guidelines: {
              diagnosis: [
                'Suspicion: bloody-mucoid diarrhea, tenesmus; differentiation between EHEC, Shigella, Entamoeba, Campylobacter required',
                'Mandatory: stool culture, Shiga-toxin test and parasite exam depending on epidemic or clinical indication'
              ],
              treatment_indications: [
                'Antibiotics recommended in severe invasive infection, epidemic control and risk groups (infant, elderly, immunosuppressed)',
                'In EHEC or confirmed Shiga-toxin positive case AB generally contraindicated (increasing HUS risk)'
              ],
              first_line: [
                'Shigella: Azithromycin or Ceftriaxone; Campylobacter: Azithromycin; Salmonella invasive: Ceftriaxone or Ciprofloxacin (consider resistance)'
              ],
              supportive: ['ORS, continuous monitoring in severe cases; avoid antimotility agents in dysentery'],
              prevention: ['Hand hygiene, food hygiene; in outbreaks contact isolation and public health measures']
            },
            prognosis: { mortality: 'Variable, more severe in EHEC/S. dysenteriae type 1', prognostic_scores: [], factors: 'Age, pathogen type' }
          }
        ]
      },
      viral_hepatitis: {
        name: 'Viral Hepatitis',
        icon: '🧬',
        color: '#eab308',
        diseases: [
          {
            id: 'hav',
            name: 'Hepatitis A',
            pathogen: { type: 'Virus', name: 'Hepatitis A virus (HAV)', gram: 'ssRNA, Picornaviridae', shape: 'icosahedral' },
            epidemiology: {
              incidence: 'High in endemic areas, sporadic/epidemic in developed countries',
              risk_groups: ['Travelers', 'MSM', 'Intravenous drug users', 'Homeless'],
              seasonality: 'None',
              transmission: 'Fecal-oral (contaminated water, food), sexual (oral-anal)'
            },
            pathomechanism: {
              steps: [
                'Oral entry and absorption from the gut',
                'Infection of hepatocytes (HAVCR-1 receptor)',
                'Replication in the cytoplasm',
                'Virus excretion into bile and stool',
                'Immune-mediated hepatocyte damage (CD8+ T-cells and NK cells)',
                'Non-cytopathic virus'
              ],
              virulence_factors: ['Capsid stability (acid-resistant)', 'Membrane envelope in blood (eHAV) - immune evasion']
            },
            clinical: {
              incubation: '15-50 days (average 28 days)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Fever', description: 'Initial symptom', severity: 'moderate' },
                { name: 'Icterus', description: 'Jaundice (70% of adults, <10% of children)', severity: 'moderate' },
                { name: 'Dark urine', description: 'Bilirubinuria', severity: 'moderate' },
                { name: 'Nausea, vomiting', description: 'Common prodrome', severity: 'moderate' },
                { name: 'Right upper quadrant pain', description: 'Liver capsule stretching', severity: 'mild' }
              ],
              physical_exam: [
                'Icterus (sclera, skin)',
                'Hepatomegaly, tender liver',
                'Splenomegaly (rare)',
                'Exanthema (rare)'
              ],
              complications: ['Fulminant hepatitis (<1%, more common in elderly)', 'Cholestatic hepatitis (prolonged)', 'Relapse (3-20%)', 'NO chronic carriage']
            },
            diagnostics: {
              laboratory: [
                { test: 'Liver enzymes', finding: 'ALT/AST >1000 U/L', interpretation: 'Acute hepatocellular necrosis' },
                { test: 'Bilirubin', finding: 'Elevated (direct and indirect)', interpretation: 'Icterus' },
                { test: 'ALP/GGT', finding: 'Moderately elevated', interpretation: 'Higher in cholestasis' }
              ],
              imaging: [
                { modality: 'Abdominal US', finding: 'Hepatomegaly, gallbladder wall thickening', significance: 'Non-specific' }
              ],
              microbiology: [
                { test: 'Anti-HAV IgM', finding: 'Positive', significance: 'Diagnosis of acute infection (remains + for 3-6 months)' },
                { test: 'Anti-HAV IgG', finding: 'Positive', significance: 'Immunity (vaccination or recovery)' },
                { test: 'HAV RNA (PCR)', finding: 'Positive', significance: 'Viremia (rarely needed)' }
              ]
            },
            differential: [
              { disease: 'Other viral hepatitis', distinguishing: 'Serology (HBV, HCV, HEV)' },
              { disease: 'Toxic hepatitis', distinguishing: 'Drug/alcohol history' },
              { disease: 'Biliary obstruction', distinguishing: 'US (dilated bile ducts), ALP dominance' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Supportive', dose: '-', duration: '-', note: 'Rest, adequate calories, no alcohol' }
                ],
                inpatient: [
                  { drug: 'Supportive', dose: '-', duration: '-', note: 'In case of severe vomiting, dehydration, or coagulopathy' }
                ],
                icu: [
                  { drug: 'Liver transplant', dose: 'Listing', duration: '', note: 'In case of fulminant liver failure' }
                ]
              },
              targeted: 'No specific antiviral agent.',
              supportive: ['Fluid replacement', 'Antiemetics', 'Avoid alcohol and hepatotoxic drugs'],
              prevention: ['Vaccination (inactivated, 2 doses)', 'Hygiene (hand washing)', 'Post-exposure prophylaxis (vaccine or IG within 2 weeks)']
            },
            guidelines: {
              diagnosis: [
                'Suspicion of acute hepatitis: liver enzymes (ALT/AST), bilirubin, ALP/GGT, INR',
                'Anti-HAV IgM positive confirms acute HAV infection; if suspicion of early window period repetition or HAV RNA (PCR) recommended',
                'In severe liver dysfunction coagulation parameters and transplant consultation'
              ],
              treatment_indications: [
                'Basically supportive treatment. Hospitalization in severe dehydration, coagulopathy or fulminant liver damage',
                'Evaluation for liver transplantation based on King\'s College criteria in fulminant case'
              ],
              post_exposure: [
                'After exposure within 2 weeks vaccine administration (if not previously vaccinated) or immunoglobulin (IG) in certain cases (elderly, immunosuppressed, chronic liver patients)'
              ],
              prevention: [
                'Vaccination: 2 doses (0 and 6–12 months), vaccination 2 weeks before travel optimal',
                'Hygiene, drinking water and food safety'
              ],
              special_populations: [
                'Pregnancy: HAV usually not more severe in pregnant women, but vaccination and post-exposure IG to be considered',
                'Immunodeficient patients: vaccination may be less effective, close monitoring recommended'
              ]
            },
            prognosis: {
              mortality: 'Low (<0.1%), but 1.8% over 50 years',
              prognostic_scores: ["King's College criteria (fulminant)"],
              factors: 'Age, underlying liver disease'
            }
          },
          {
            id: 'hbv',
            name: 'Hepatitis B',
            pathogen: { type: 'Virus', name: 'Hepatitis B virus (HBV)', gram: 'dsDNA (RT), Hepadnaviridae', shape: 'spherical (Dane particle)' },
            epidemiology: {
              incidence: '290 million chronic carriers worldwide',
              risk_groups: ['IV drug users', 'Sexual partners', 'Healthcare workers', 'Dialysis patients', 'Perinatal (mother-to-child)'],
              seasonality: 'None',
              transmission: 'Parenteral (blood), sexual, perinatal'
            },
            pathomechanism: {
              steps: [
                'Entry into hepatocytes (NTCP receptor)',
                'cccDNA formation in the nucleus (basis of persistence)',
                'Transcription/Translation',
                'Immune-mediated cell death (virus is not cytopathic)',
                'Integration into host cell genome (HCC risk)'
              ],
              virulence_factors: ['HBsAg (decoy)', 'HBeAg (immunotolerance)', 'X protein (transactivator)']
            },
            clinical: {
              incubation: '45-160 days (average 90 days)',
              onset: 'Slow',
              symptoms: [
                { name: 'Fatigue', description: 'Common', severity: 'moderate' },
                { name: 'Joint pain', description: 'Immune complex mediated (prodrome)', severity: 'mild' },
                { name: 'Icterus', description: 'In acute phase (30-50%)', severity: 'moderate' },
                { name: 'Asymptomatic', description: 'Most chronic carriers', severity: 'mild' }
              ],
              physical_exam: [
                'Hepatomegaly',
                'Splenomegaly',
                'Spider naevi, palmar erythema (chronic/cirrhosis)',
                'Ascites, caput medusae (decompensated cirrhosis)'
              ],
              complications: ['Chronic hepatitis (90% in infants, <5% in adults)', 'Cirrhosis', 'Hepatocellular carcinoma (HCC)', 'Polyarteritis nodosa', 'Glomerulonephritis']
            },
            diagnostics: {
              laboratory: [
                { test: 'ALT/AST', finding: 'Elevated', interpretation: 'Activity of inflammation' }
              ],
              microbiology: [
                { test: 'HBsAg', finding: 'Positive', significance: 'Presence of infection (acute or chronic)' },
                { test: 'Anti-HBs', finding: 'Positive', significance: 'Immunity (vaccination or recovery)' },
                { test: 'Anti-HBc IgM', finding: 'Positive', significance: 'Acute infection (important in window period!)' },
                { test: 'Anti-HBc IgG', finding: 'Positive', significance: 'Past or chronic infection' },
                { test: 'HBeAg', finding: 'Positive', significance: 'High replication and infectivity' },
                { test: 'HBV DNA', finding: 'Positive', significance: 'Level of viral replication (therapy monitoring)' }
              ]
            },
            differential: [
              { disease: 'Hepatitis D', distinguishing: 'More severe in superinfection, Anti-HDV' },
              { disease: 'Autoimmune hepatitis', distinguishing: 'Autoantibodies (ASMA, ANA), elevated IgG' }
            ],
            therapy: {
              guidelines: ['EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection'],
              empirical: {
                outpatient: [
                  { drug: 'Entecavir', dose: '0.5 mg PO 1x/day', duration: 'Long-term', note: 'Nucleoside analogue. 1 mg in case of lamivudine resistance.' },
                  { drug: 'Tenofovir disoproxil (TDF)', dose: '300 mg PO 1x/day', duration: 'Long-term', note: 'Nucleotide analogue. Renal function and bone density monitoring required.' },
                  { drug: 'Tenofovir alafenamide (TAF)', dose: '25 mg PO 1x/day', duration: 'Long-term', note: 'Preferred if risk of bone/kidney disease.' }
                ],
                inpatient: [
                  { drug: 'Tenofovir (TDF/TAF) or Entecavir', dose: 'Standard', duration: '', note: 'Start immediately in severe acute hepatitis or acute liver failure.' }
                ]
              },
              targeted: 'Chronic HBV: Lifelong NA (Entecavir, TDF, TAF) to suppress viral replication. Finite treatment: Peg-IFN alpha (48 weeks) in selected patients.',
              supportive: ['HCC screening (US every 6 months)', 'Vaccination against HAV', 'Screening of family members'],
              prevention: ['Vaccination (recombinant HBsAg, 0-1-6 months)', 'Screening in pregnancy', 'HBIG + vaccine for newborns (≤12 hours; continue vaccination series)']
            },
            guidelines: {
              definitions: [
                'Acute HBV: HBsAg positive and Anti-HBc IgM positive, with or without symptoms',
                'Chronic HBV: HBsAg positive >6 months',
                'Treatment indication: Chronic hepatitis (ALT elevated + HBV DNA >2000 IU/ml + fibrosis) OR Cirrhosis (at any HBV DNA level)'
              ],
              diagnosis: [
                'Initial examination: HBsAg, Anti-HBs, Anti-HBc (IgM/IgG), HBeAg/Anti-HBe, HBV DNA (quantitative)',
                'Fibrosis assessment: FibroScan or serum markers (FIB-4)'
              ],
              treatment_indications: [
                'All cirrhotic patients must be treated',
                'HBeAg positive or negative chronic hepatitis (ALT > ULN, DNA > 2000 IU/ml, F2+ fibrosis)',
                'Before immunosuppression in HBsAg+ patients (prophylaxis)'
              ],
              first_line: [
                'Entecavir, TDF, TAF (high resistance barrier NAs)',
                'Peg-IFN alpha (48 weeks) - alternative in mild/moderate fibrosis'
              ],
              special_populations: [
                'Pregnancy: TDF from 24-28th week if HBV DNA >200,000 IU/ml',
                'Renal failure: TAF or Entecavir (dose adjustment)',
                'HDV coinfection: Peg-IFN or Bulevirtide'
              ],
              monitoring: [
                'Under NA therapy: ALT and HBV DNA every 3-6 months',
                'HCC screening with ultrasound ± AFP every 6 months in cirrhotic patients'
              ]
            },
            prognosis: {
              mortality: 'Acute: <1%; Chronic: significant due to cirrhosis/HCC',
              prognostic_scores: ['PAGE-B (HCC risk)'],
              factors: 'HBeAg status, viral load, genotype, coinfections'
            },
            references: [
              'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2017;67(2):370-398. doi:10.1016/j.jhep.2017.03.021',
              'WHO Guidelines for the Prevention, Care and Treatment of Persons with Chronic Hepatitis B Infection. 2015.'
            ]
          },
          {
            id: 'hcv',
            name: 'Hepatitis C',
            pathogen: { type: 'Virus', name: 'Hepatitis C virus (HCV)', gram: 'ssRNA, Flaviviridae', shape: 'spherical, enveloped' },
            epidemiology: {
              incidence: '71 million chronic patients worldwide',
              risk_groups: ['IV drug users', 'Transfusion (before 1992)', 'Tattoo/piercing', 'Healthcare workers (needlestick)'],
              seasonality: 'None',
              transmission: 'Parenteral (blood), sexual (rare, higher in MSM), perinatal'
            },
            pathomechanism: {
              steps: [
                'Entry into hepatocytes',
                'RNA replication in the cytoplasm (no nucleus phase - curable!)',
                'High mutation rate (quasispecies) - immune evasion',
                'Chronic inflammation → fibrosis → cirrhosis'
              ],
              virulence_factors: ['NS3/4A protease', 'NS5A/B polymerase', 'Lipid metabolism modulation']
            },
            clinical: {
              incubation: '14-180 days',
              onset: 'Slow/Asymptomatic',
              symptoms: [
                { name: 'Asymptomatic', description: 'Most cases (both acute and chronic)', severity: 'mild' },
                { name: 'Fatigue', description: 'Non-specific', severity: 'moderate' },
                { name: 'Icterus', description: 'Rare in acute phase (20%)', severity: 'moderate' }
              ],
              physical_exam: [
                'Often negative',
                'Signs of cirrhosis in late stage'
              ],
              complications: ['Chronic hepatitis (70-80%!)', 'Cirrhosis (20-30% in 20 years)', 'HCC', 'Extrahepatic: Cryoglobulinemia, Porphyria cutanea tarda, Lichen planus, Diabetes']
            },
            diagnostics: {
              laboratory: [
                { test: 'ALT', finding: 'Fluctuatingly elevated', interpretation: 'Chronic inflammation' }
              ],
              microbiology: [
                { test: 'Anti-HCV', finding: 'Positive', significance: 'Exposure (not necessarily active infection)' },
                { test: 'HCV RNA', finding: 'Positive', significance: 'Active infection (confirmation needed!)' },
                { test: 'Genotyping', finding: '1-6', significance: 'Choice of therapy (though pangenotypic drugs dominate)' }
              ]
            },
            differential: [
              { disease: 'Alcoholic liver disease', distinguishing: 'History, AST>ALT' },
              { disease: 'NASH/NAFLD', distinguishing: 'Metabolic syndrome, US, biopsy' }
            ],
            therapy: {
              guidelines: ['EASL Recommendations on Treatment of Hepatitis C 2020'],
              empirical: {
                outpatient: [
                  { drug: 'Glecaprevir / Pibrentasvir (Maviret)', dose: '3 tabs (300/120mg) PO 1x', duration: '8 weeks', note: 'Pangenotypic. 8 weeks in both non-cirrhotic and compensated cirrhotic patients.' },
                  { drug: 'Sofosbuvir / Velpatasvir (Epclusa)', dose: '1 tab (400/100mg) PO 1x', duration: '12 weeks', note: 'Pangenotypic. Can be given in decompensated cirrhosis (with RBV).' }
                ]
              },
              targeted: 'Pangenotypic DAA treatment for all patients (Simplified treatment). Genotyping not necessarily required to start treatment (except in cirrhosis/previous treatment failure).',
              supportive: ['Check drug interactions (www.hep-druginteractions.org)', 'No alcohol'],
              prevention: ['No vaccine', 'Screening of blood products', 'Harm reduction (needle exchange)', 'Safe sex']
            },
            guidelines: {
              diagnosis: [
                'Screening: Anti-HCV serology (ELISA) in all risk groups and blood donation',
                'HCV RNA positive = Active infection -> Treatment'
              ],
              treatment_indications: [
                'All chronic HCV infected should be treated, except patients with short life expectancy or pregnancy',
                'Special priority: cirrhosis, extrahepatic manifestations, transplant candidates'
              ],
              first_line: [
                'Glecaprevir/Pibrentasvir (8 weeks)',
                'Sofosbuvir/Velpatasvir (12 weeks)'
              ],
              monitoring: [
                'SVR12 (Sustained Virologic Response): HCV RNA negative 12 weeks after treatment = Cure',
                'In case of cirrhosis HCC screening continues even after SVR!'
              ],
              special_populations: [
                'Decompensated cirrhosis: Protease inhibitors (Glecaprevir, Grazoprevir) CONTRAINDICATED! Sof/Vel + Ribavirin can be given.'
              ]
            },
            prognosis: {
              mortality: 'Excellent with treatment (SVR = cure), worse in cirrhosis',
              factors: 'Fibrosis stage, coinfection (HIV/HBV), alcohol'
            }
          },
          {
            id: 'hdv',
            name: 'Hepatitis D',
            pathogen: { type: 'Virus', name: 'Hepatitis D virus (HDV)', gram: 'ssRNA (defective)', shape: 'enveloped in HBsAg' },
            epidemiology: {
              incidence: '5% of HBV infected (approx. 15-20 million)',
              transmission: 'Parenteral, sexual (like HBV). Only infects in the presence of HBV!'
            },
            pathomechanism: {
              steps: [
                'HBV HBsAg required for entry and packaging',
                'Coinfection: HBV+HDV at the same time (usually resolves)',
                'Superinfection: chronic HBV + new HDV (severe, becomes chronic)',
                'Direct cytopathic effect possible'
              ],
              virulence_factors: ['Delta antigen (HDAg)']
            },
            clinical: {
              symptoms: [
                { name: 'Severe hepatitis', description: 'More severe than HBV alone', severity: 'severe' }
              ],
              complications: ['Fulminant hepatitis', 'Rapid progression to cirrhosis (most aggressive viral hepatitis)']
            },
            diagnostics: {
              microbiology: [
                { test: 'Anti-HDV', finding: 'Positive', significance: 'Screening in all HBV patients' },
                { test: 'HDV RNA', finding: 'Positive', significance: 'Active replication' }
              ]
            },
            therapy: {
              guidelines: ['EASL Clinical Practice Guidelines on hepatitis delta virus 2023'],
              empirical: {
                outpatient: [
                  { drug: 'Bulevirtide', dose: '2 mg SC daily', duration: 'Long-term', note: 'Entry inhibitor. Monotherapy or in combination with Peg-IFN. (Conditional approval)' },
                  { drug: 'Peg-IFN alfa', dose: '180 mcg SC weekly', duration: '48 weeks', note: 'Alternative, but low sustained response rate.' }
                ]
              },
              targeted: 'Bulevirtide (long-term maintenance) or Peg-IFN (48 weeks). Nucleoside analogues (against HBV) should be continued but do not directly affect HDV.',
              prevention: ['HBV vaccination also protects against HDV (as it needs HBsAg)']
            },
            guidelines: {
              screening: ['All HBsAg positive patients should be screened once for anti-HDV'],
              treatment: [
                'Bulevirtide 2mg SC daily: In compensated liver disease and HDV RNA positivity. Treatment as long as clinical benefit exists (years).',
                'Peg-IFN alfa: 48-week course can be attempted (approx. 25% sustained response).'
              ],
              monitoring: ['HDV RNA, ALT, HBsAg']
            },
            prognosis: {
              mortality: 'High, rapid cirrhosis progression',
              factors: 'Superinfection has worse prognosis'
            }
          },
          {
            id: 'hev',
            name: 'Hepatitis E',
            pathogen: { type: 'Virus', name: 'Hepatitis E virus (HEV)', gram: 'ssRNA, Hepeviridae', shape: 'icosahedral' },
            epidemiology: {
              incidence: 'Developing countries (water), Developed (pork/wild boar)',
              risk_groups: ['Pregnant women (severe course)', 'Immunosuppressed (chronic)', 'Liver patients', 'Pig farmers'],
              seasonality: 'Rainy season (tropics)',
              transmission: 'Fecal-oral (water - Genotype 1,2), Zoonosis (raw pork/game meat - Genotype 3,4)'
            },
            pathomechanism: {
              steps: [
                'Oral entry',
                'Absorption from gut, entry to liver',
                'Hepatocyte replication',
                'Biliary excretion',
                'Immune-mediated cytotoxicity'
              ],
              virulence_factors: ['ORF3 protein (release)', 'Capsid protein']
            },
            clinical: {
              incubation: '15-60 days (average 40)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Acute hepatitis', description: 'Similar to HAV', severity: 'moderate' },
                { name: 'Acute hepatitis', description: 'Similar to HAV, jaundice, fever', severity: 'moderate' },
                { name: 'Abdominal pain', description: 'Right upper quadrant', severity: 'mild' }
              ],
              physical_exam: ['Icterus', 'Hepatomegaly'],
              complications: ['Fulminant hepatitis in pregnant women (20% mortality! - G1,2)', 'Chronic hepatitis in immunosuppressed (G3)', 'Neurological symptoms (Guillain-Barré, Neuralgic amyotrophy)']
            },
            diagnostics: {
              laboratory: [
                 { test: 'Liver enzymes', finding: 'ALT/AST elevated', interpretation: 'Hepatitis' }
              ],
              imaging: [
                 { modality: 'Abdominal US', finding: 'Hepatomegaly', significance: 'Non-specific' }
              ],
              microbiology: [
                { test: 'Anti-HEV IgM', finding: 'Positive', significance: 'Acute infection' },
                { test: 'HEV RNA', finding: 'Positive', significance: 'Confirmation, chronic case' }
              ]
            },
            differential: [
               { disease: 'Hepatitis A', distinguishing: 'Serology' },
               { disease: 'Drug toxicity', distinguishing: 'History' }
            ],
            therapy: {
              guidelines: ['EASL Clinical Practice Guidelines on hepatitis E virus infection'],
              empirical: {
                outpatient: [
                  { drug: 'Supportive', dose: '-', duration: '-', note: 'In immunocompetent acute infection (self-limiting).' }
                ],
                inpatient: [
                  { drug: 'Ribavirin', dose: '600-800 mg PO', duration: '12 weeks', note: 'Chronic HEV (immunosuppressed) or severe acute cases.' }
                ]
              },
              targeted: 'Chronic HEV (immunosuppressed): 1. Reduce immunosuppression (if possible). 2. Ribavirin for 12 weeks. If unsuccessful: Ribavirin for 24 weeks or Peg-IFN.',
              supportive: ['Fluid replacement', 'Close monitoring in pregnant women (risk of fulminant course!)'],
              prevention: ['Food safety (thorough cooking of pork/game meat)']
            },
            guidelines: {
              diagnosis: ['Anti-HEV IgM and IgG', 'HEV RNA (blood and stool) - mandatory in suspicion of chronic infection'],
              treatment_indications: [
                'Acute: usually does not require treatment (except liver failure)',
                'Chronic (>3 months HEV RNA+): Immunosuppressed patients (transplant, HIV). Treatment: Ribavirin.'
              ]
            },
            prognosis: {
              mortality: 'Generally low; in pregnant women (genotype 1–2) mortality up to 20%',
              prognostic_scores: ['None'],
              factors: 'Pregnancy, immunosuppression'
            }
          },
          {
            id: 'hgv',
            name: 'Hepatitis G (GBV-C)',
            pathogen: { type: 'Virus', name: 'GB virus C (HGV)', gram: 'ssRNA, Flaviviridae', shape: '-' },
            epidemiology: {
              incidence: '1-4% of blood donors',
              risk_groups: ['IV drug users', 'Hemodialysis patients', 'Multiple transfusions'],
              seasonality: 'None',
              transmission: 'Blood, sexual, vertical'
            },
            pathomechanism: {
              steps: ['Lymphotropic virus', 'Replication in lymphocytes', 'Not hepatotropic (controversial)', 'Interference with HIV replication'],
              virulence_factors: ['Unknown']
            },
            clinical: {
              incubation: 'Unknown',
              onset: 'Asymptomatic',
              symptoms: [
                { name: 'Asymptomatic', description: 'Does not cause acute or chronic hepatitis', severity: 'mild' }
              ],
              physical_exam: ['Negative'],
              complications: ['In HIV coinfection slows AIDS progression (favorable effect)']
            },
            diagnostics: {
              laboratory: [{ test: 'Liver function', finding: 'Normal', interpretation: 'Does not cause hepatitis' }],
              imaging: [{ modality: 'None', finding: '-', significance: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'RNA', significance: 'Research purpose, not used in clinical routine' }
              ]
            },
            differential: [],
            therapy: {
              empirical: {},
              targeted: 'Does not require treatment.',
              supportive: [],
              prevention: ['Screening of blood products (not routine)']
            },
            prognosis: {
              mortality: 'Not pathogenic to the liver',
              prognostic_scores: [],
              factors: '-'
            }
          },
          {
            id: 'ttv',
            name: 'Torque teno virus (TTV)',
            pathogen: { type: 'Virus', name: 'Torque teno virus', gram: 'ssDNA, Anelloviridae', shape: '-' },
            epidemiology: {
              incidence: 'Ubiquitous (>90% of population are carriers)',
              risk_groups: ['General population'],
              seasonality: 'None',
              transmission: 'Blood, saliva, stool, breast milk'
            },
            pathomechanism: {
              steps: ['Persistent viremia', 'Replication in many tissues', 'Unproven pathogenicity'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '-',
              onset: 'Asymptomatic',
              symptoms: [
                { name: 'Asymptomatic', description: 'Can be considered a commensal virus', severity: 'mild' }
              ],
              physical_exam: ['Negative'],
              complications: ['Pathogenicity not proven', 'Can be an indicator of the degree of immunosuppression']
            },
            diagnostics: {
              laboratory: [{ test: '-', finding: '-', interpretation: '-' }],
              imaging: [{ modality: '-', finding: '-', significance: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'DNA', significance: 'Research' }
              ]
            },
            differential: [],
            therapy: {
              empirical: {},
              targeted: 'None',
              supportive: [],
              prevention: ['-']
            },
            prognosis: {
              mortality: 'Good',
              prognostic_scores: [],
              factors: '-'
            }
          },
          {
            id: 'senv',
            name: 'SEN virus',
            pathogen: { type: 'Virus', name: 'SEN virus', gram: 'ssDNA, Anelloviridae', shape: '-' },
            epidemiology: {
              incidence: 'Unknown',
              risk_groups: ['Transfusion recipients'],
              seasonality: 'None',
              transmission: 'Transfusion, via blood'
            },
            pathomechanism: {
              steps: ['Spread via blood', 'Can replicate in hepatocytes', 'Can cause mild hepatitis (controversial)'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '-',
              onset: 'Slow',
              symptoms: [
                { name: 'Mild hepatitis?', description: 'Associated with post-transfusion hepatitis, but causality not proven', severity: 'mild' }
              ],
              physical_exam: ['-'],
              complications: ['No significant liver damage proven']
            },
            diagnostics: {
              laboratory: [{ test: 'ALT', finding: 'Mild elevation possible', interpretation: '?' }],
              imaging: [{ modality: '-', finding: '-', significance: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'DNA', significance: 'Research' }
              ]
            },
            differential: [],
            therapy: {
              empirical: {},
              targeted: 'None',
              supportive: [],
              prevention: ['-']
            },
            prognosis: {
              mortality: 'Good',
              prognostic_scores: [],
              factors: '-'
            }
          }
        ]
      },
      urinary_tract: {
        name: 'Urinary Tract Infections',
        icon: '🚽',
        color: '#3b82f6',
        diseases: [
          {
            id: 'cystitis',
            name: 'Uncomplicated Cystitis',
            pathogen: { type: 'Bacterium', name: 'Escherichia coli (75-95%)', gram: 'Gram-negative', shape: 'rod' },
            epidemiology: {
              incidence: '50% of women at least once in their lifetime',
              risk_groups: ['Sexually active women', 'Postmenopause', 'Pregnancy', 'Diabetes', 'Catheter use'],
              seasonality: 'None',
              transmission: 'Ascending infection (perineal flora)'
            },
            pathomechanism: {
              steps: [
                'Perineal colonization by gut bacteria',
                'Ascension through the urethra to the bladder',
                'Adherence to bladder urothelium (P-fimbriae)',
                'Bacterial multiplication and inflammation',
                'Bladder mucosal irritation (dysuria, urgency)'
              ],
              virulence_factors: ['P-fimbriae (adherence)', 'Hemolysin', 'Aerobactin (iron uptake)']
            },
            clinical: {
              incubation: 'Variable',
              onset: 'Sudden',
              symptoms: [
                { name: 'Dysuria', description: 'Burning, stinging urination (>90% present)', severity: 'moderate' },
                { name: 'Frequency', description: 'Frequent, small-volume urination (>90%)', severity: 'moderate' },
                { name: 'Urgency', description: 'Sudden, compelling urge to urinate', severity: 'moderate' },
                { name: 'Suprapubic pain', description: 'Lower abdominal discomfort or tenderness (70-80%)', severity: 'mild' },
                { name: 'Hematuria', description: 'Macroscopic bloody urine (approx. 30%), often at the end of urination', severity: 'mild' }
              ],
              physical_exam: [
                'Suprapubic tenderness',
                'Fever is usually ABSENT (if present, suspect pyelonephritis!)',
                'Flank is not tender',
                'Absence of vaginal discharge (increases probability of cystitis)'
              ],
              complications: ['Ascending pyelonephritis', 'Recurrent cystitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Urine dipstick', finding: 'Leukocyte esterase+, Nitrite+', interpretation: 'High positive predictive value' },
                { test: 'Urine sediment', finding: 'Pyuria (>10 WBC/field)', interpretation: 'Common, but not specific' }
              ],
              imaging: [
                { modality: 'None', finding: 'Not necessary', significance: 'Except for atypical symptoms or persistence' }
              ],
              microbiology: [
                { test: 'Urine culture', finding: '≥10^3 CFU/ml', significance: 'Recommended only in complicated, recurrent, or atypical cases (EAU 2025)' }
              ]
            },
            differential: [
              { disease: 'Vaginitis', distinguishing: 'Discharge, itching, external dysuria' },
              { disease: 'Urethritis (STD)', distinguishing: 'New partner, gradual onset, pyuria with sterile culture' },
              { disease: 'Interstitial cystitis', distinguishing: 'Chronic, negative culture' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Fosfomycin trometamol', dose: '3g PO', duration: 'Single dose', note: 'First choice (EAU 2025)' },
                  { drug: 'Nitrofurantoin', dose: '2x100mg PO', duration: '5 days', note: 'First choice (EAU 2025)' },
                  { drug: 'Pivmecillinam', dose: '3x400mg PO', duration: '3-5 days', note: 'First choice (EAU 2025)' }
                ],
                inpatient: [
                  { drug: 'Does not require hospital treatment', dose: '-', duration: '-', note: 'Except complications' }
                ],
                icu: [
                  { drug: '-', dose: '-', duration: '-', note: '-' }
                ]
              },
              targeted: 'Based on culture. Fluoroquinolones (Ciprofloxacin, Levofloxacin) are NOT recommended empirically for uncomplicated cystitis!',
              supportive: ['Ample fluid intake', 'Frequent urination', 'NSAID for pain relief'],
              prevention: ['Behavioral: Ample fluid intake, postcoital voiding', 'Non-antibiotic (EAU 2025): Topical estrogen (postmenopause), OM-89 immunostimulation, D-mannose, Bladder instillation', 'Antibiotic prophylaxis (last resort): Nitrofurantoin 50-100mg at night or Fosfomycin 3g every 10 days']
            },
            prognosis: {
              mortality: 'Zero',
              prognostic_scores: ['None'],
              factors: 'Tendency to recur'
            }
          },
          {
            id: 'pyelonephritis',
            name: 'Uncomplicated Pyelonephritis',
            pathogen: { type: 'Bacterium', name: 'Escherichia coli (80%)', gram: 'Gram-negative', shape: 'rod' },
            epidemiology: {
              incidence: 'Common complication of untreated cystitis',
              risk_groups: ['Women', 'Pregnancy', 'Obstruction (stone, prostate)', 'Renal developmental anomaly', 'Diabetes'],
              seasonality: 'None',
              transmission: 'Ascending infection (95%), rarely hematogenous'
            },
            pathomechanism: {
              steps: [
                'Ascension of bacteria up the ureter to the renal pelvis',
                'Invasion of renal parenchyma',
                'Inflammatory reaction, edema, microabscesses',
                'Impairment of tubular function'
              ],
              virulence_factors: ['P-fimbriae', 'Endotoxin', 'Capsule']
            },
            clinical: {
              incubation: 'Days after cystitis',
              onset: 'Sudden',
              symptoms: [
                { name: 'Fever and chills', description: 'Fever >38°C (90-95%), often with chills', severity: 'severe' },
                { name: 'Flank pain', description: 'Dull, continuous flank pain (90-95%), unilateral or bilateral', severity: 'severe' },
                { name: 'Gastrointestinal symptoms', description: 'Nausea, vomiting, loss of appetite (common)', severity: 'moderate' },
                { name: 'Lower urinary tract symptoms', description: 'Dysuria, frequency (may be absent in 30-50% of cases!)', severity: 'mild' }
              ],
              physical_exam: [
                'Costovertebral angle tenderness (Giordano\'s sign)',
                'Fever, tachycardia',
                'Abdominal tenderness (less common)'
              ],
              complications: ['Renal abscess', 'Perinephric abscess', 'Urosepsis', 'Papillary necrosis', 'Chronic renal failure (recurrent)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis, left shift', interpretation: 'Systemic inflammation' },
                { test: 'CRP/PCT', finding: 'Significantly elevated', interpretation: 'Bacterial infection' },
                { test: 'Urinalysis', finding: 'Leukocyturia, bacteriuria, white blood cell casts', interpretation: 'Upper urinary tract origin' },
                { test: 'Renal function', finding: 'Creatinine may be elevated', interpretation: 'Acute kidney injury' }
              ],
              imaging: [
                { modality: 'Abdominal/pelvic CT', finding: 'Renal enlargement, perinephric fluid, wedge-shaped hypodensity', significance: 'Gold standard to rule out complications (EAU 2025)' },
                { modality: 'Renal US', finding: 'Obstruction, abscess', significance: 'Radiation-free alternative' }
              ],
              microbiology: [
                { test: 'Urine culture', finding: '≥10^4 CFU/ml', significance: 'Always take! (EAU 2025)' },
                { test: 'Blood culture', finding: 'Positive', significance: 'Recommended on hospital admission' }
              ]
            },
            differential: [
              { disease: 'Kidney stone', distinguishing: 'Colicky pain, no fever (if no infection), hematuria dominates' },
              { disease: 'Acute abdominal conditions', distinguishing: 'Appendicitis, cholecystitis (abdominal status, US)' },
              { disease: 'Pelvic inflammatory disease (PID)', distinguishing: 'Gynecological exam, discharge' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Cefuroxime axetil', dose: '2x500mg PO', duration: '7 days', note: 'no activity against Enterococcus' },
                  { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '5 days', note: 'Only an alternative if E. coli resistance <10% (EAU 2025)' },
                  { drug: 'Ceftibuten/Cefixime', dose: 'PO', duration: '10 days', note: 'If quinolone cannot be given (less effective)' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxone', dose: '1x1-2g IV', duration: '10-14 days', note: 'First choice' },
                  { drug: 'Ciprofloxacin', dose: '2x400mg IV', duration: '10-14 days', note: 'Alternative if E. coli resistance <10% (EAU 2025)' },
                  { drug: 'Gentamicin + Ampicillin', dose: 'IV', duration: '', note: 'In severe cases' }
                ],
                icu: [
                  { drug: 'Piperacillin/tazobactam', dose: '4x4.5g IV', duration: '', note: 'Urosepsis, obstruction' },
                  { drug: 'Meropenem', dose: '3x1g IV', duration: '', note: 'Suspicion of ESBL' }
                ]
              },
              targeted: 'Based on antibiogram. ESBL is common!',
              supportive: ['Fluid replacement', 'Antipyretics', 'Resolution of obstruction (catheter, stent)'],
              prevention: ['Proper treatment of cystitis', 'Correction of anatomical abnormalities']
            },
            prognosis: {
              mortality: 'Low (<1%), but 10-20% in urosepsis',
              prognostic_scores: ['qSOFA'],
              factors: 'Old age, obstruction, resistant pathogen'
            }
          },
          {
            id: 'complicated_uti',
            name: 'Complicated Urinary Tract Infection',
            pathogen: { type: 'Bacterium', name: 'E. coli, Enterococcus, Pseudomonas, Klebsiella, Proteus', gram: 'Mixed', shape: 'Mixed' },
            epidemiology: {
              incidence: 'Common in hospital settings and urological patients',
              risk_groups: ['Catheter users', 'Men', 'Pregnant women', 'Anatomical/functional abnormality', 'Renal failure', 'Immunosuppression'],
              seasonality: 'None',
              transmission: 'Ascending, catheter-associated, hematogenous'
            },
            pathomechanism: {
              steps: [
                'Presence of a predisposing factor (e.g., obstruction, catheter)',
                'Biofilm formation (on catheter, stone)',
                'Selection of resistant pathogens',
                'Tissue invasion and persistence'
              ],
              virulence_factors: ['Biofilm', 'Multidrug resistance', 'Urease (Proteus)']
            },
            clinical: {
              incubation: 'Variable',
              onset: 'Variable (can be oligosymptomatic)',
              symptoms: [
                { name: 'Mixed symptoms', description: 'Combination of dysuria, frequency, fever, flank pain', severity: 'moderate' },
                { name: 'Systemic signs', description: 'Fever, chills, altered mental status (especially in the elderly)', severity: 'severe' },
                { name: 'Oligosymptomatic', description: 'In catheterized patients or spinal cord injury patients, symptoms may be absent or atypical', severity: 'mild' },
                { name: 'Urine changes', description: 'Cloudy, foul-smelling urine (not diagnostic on its own!)', severity: 'mild' }
              ],
              physical_exam: [
                'Can be unremarkable',
                'Suprapubic or flank tenderness',
                'Presence of a catheter',
                'Fever or hypothermia (urosepsis)',
                'Confusion (elderly)'
              ],
              complications: ['Urosepsis', 'Renal abscess', 'Renal failure', 'Recurrence', 'Catheter obstruction']
            },
            diagnostics: {
              laboratory: [
                { test: 'Urine culture', finding: 'Women: ≥10^5 CFU/ml, Men: ≥10^4 CFU/ml', interpretation: 'Diagnostic thresholds (EAU 2025)' },
                { test: 'Catheter urine', finding: '≥10^4 CFU/ml', interpretation: 'Significant bacteriuria' },
                { test: 'Renal function', finding: 'Check creatinine', interpretation: 'Obstruction/damage' }
              ],
              imaging: [
                { modality: 'CT urography', finding: 'Anatomical/functional abnormality', significance: 'MANDATORY to clarify predisposing factor' }
              ],
              microbiology: [
                { test: 'Culture + Susceptibility', finding: 'Essential', significance: 'Basis for targeted therapy' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Cefuroxime axetil', dose: '2x500mg PO', duration: '7-14 days', note: 'no activity against Enterococcus' },
                  { drug: 'Ciprofloxacin', dose: '2x500-750mg PO', duration: '7-14 days', note: 'Only if no fluoroquinolone treatment in the last 6 months and E. coli resistance >10% (EAU 2025)' },
                  { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '7-14 days', note: 'Alternative if E. coli resistance <10% (EAU 2025)' },
                  { drug: 'Ceftibuten/Cefixime', dose: 'PO', duration: '10-14 days', note: 'If quinolone cannot be given' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxone', dose: '1x1-2g IV', duration: '10-14 days', note: 'In severe cases' },
                  { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '10-14 days', note: 'Suspicion of Pseudomonas/previous AB treatment' },
                  { drug: 'Carbapenem (Meropenem)', dose: '3x1g IV', duration: '10-14 days', note: 'ESBL risk or septic shock' },
                  { drug: 'Amikacin/Gentamicin', dose: 'IV', duration: 'As an adjunct', note: 'Synergism' }
                ],
                icu: [
                  { drug: 'Broad spectrum (Carbapenem + Amikacin)', dose: 'IV', duration: '', note: 'Urosepsis' }
                ]
              },
              targeted: 'Correction based on culture. Resolution of obstruction (catheter change, stent, nephrostomy) is essential!',
              supportive: ['Fluid replacement', 'Antipyretics'],
              prevention: ['Catheter care (closed system, prompt removal)', 'Elimination of obstruction', 'Avoidance of treating asymptomatic bacteriuria']
            },
            prognosis: {
              mortality: '10-30% in urosepsis',
              prognostic_scores: ['qSOFA', 'SOFA'],
              factors: 'Underlying disease, resistance, source control'
            }
          },
          {
            id: 'prostatitis',
            name: 'Bacterial Prostatitis',
            pathogen: { type: 'Bacterium', name: 'E. coli, Klebsiella, Proteus, Enterococcus, Pseudomonas', gram: 'Mixed', shape: 'Mixed' },
            epidemiology: {
              incidence: '50% of men experience symptoms in their lifetime',
              risk_groups: ['Young/middle-aged men', 'Catheterization', 'Urological procedure (biopsy)', 'HIV', 'Diabetes'],
              seasonality: 'None',
              transmission: 'Ascending (reflux), hematogenous, lymphogenic, direct (biopsy)'
            },
            pathomechanism: {
              steps: [
                'Intraprostatic urine reflux',
                'Ascending infection from the urethra',
                'Direct inoculation (e.g., transrectal biopsy)',
                'Biofilm formation (maintaining chronic infection)'
              ],
              virulence_factors: ['Biofilm', 'Anatomical location (poor AB penetration)']
            },
            clinical: {
              incubation: 'Variable',
              onset: 'Acute (ABP) or Chronic (CBP)',
              symptoms: [
                { name: 'Acute: Systemic symptoms', description: 'Sudden fever, chills, myalgia, malaise', severity: 'severe' },
                { name: 'Pain', description: 'Perineal, rectal, prostatic, radiating to testes/penis', severity: 'moderate' },
                { name: 'LUTS (Lower Urinary Tract Symptoms)', description: 'Dysuria, frequency, urgency', severity: 'moderate' },
                { name: 'Obstruction', description: 'Urinary retention (due to swollen prostate)', severity: 'severe' },
                { name: 'Chronic symptoms', description: 'Pelvic pain for >3 months, recurrent UTI', severity: 'mild' }
              ],
              physical_exam: [
                'Digital rectal exam (DRE):',
                'Acute: Swollen, warm, EXTREMELY tender prostate (Massage FORBIDDEN - risk of bacteremia!)',
                'Chronic: May be normal or slightly tender, not swollen'
              ],
              complications: ['Prostate abscess', 'Urosepsis', 'Chronicity', 'Epididymitis', 'Urinary retention', 'Sexual dysfunction']
            },
            diagnostics: {
              laboratory: [
                { test: 'Urinalysis', finding: 'Pyuria, bacteriuria', interpretation: 'Positive' },
                { test: 'CBC/CRP', finding: 'Elevated (Acute)', interpretation: 'Systemic inflammation' },
                { test: 'PSA', finding: 'Elevated', interpretation: 'Due to inflammation (not for cancer diagnosis in acute phase!)' }
              ],
              imaging: [
                { modality: 'Transrectal US (TRUS)', finding: 'Abscess (hypoechoic area)', significance: 'Only if no improvement on treatment or suspicion of abscess' }
              ],
              microbiology: [
                { test: 'Acute: Urine culture', finding: 'Midstream urine', significance: 'Prostate massage FORBIDDEN!' },
                { test: 'Chronic: Meares-Stamey test', finding: '4-glass test or 2-glass test (pre/post massage)', significance: 'Gold standard (EAU 2025)' }
              ]
            },
            differential: [
              { disease: 'Cystitis', distinguishing: 'No fever, no prostate tenderness' },
              { disease: 'BPH', distinguishing: 'No signs of infection, slow progression' },
              { disease: 'Chronic pelvic pain syndrome (CPPS)', distinguishing: 'Negative culture, chronic pain' },
              { disease: 'Prostate cancer', distinguishing: 'PSA, DRE (nodular), biopsy' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Levofloxacin', dose: '1x500-750mg PO', duration: '2-4 weeks (Acute), 4-6 weeks (Chronic)', note: 'EAU 2025: First choice (good penetration)' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '2-4 weeks (Acute), 4-6 weeks (Chronic)', note: 'EAU 2025: First choice' },
                  { drug: 'Cotrimoxazole', dose: '2x960mg PO', duration: '4-6 weeks', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxone', dose: '1-2g IV', duration: '14 days', note: 'In severe acute cases (then switch to PO)' },
                  { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '', note: 'Urosepsis/suspicion of Pseudomonas' },
                  { drug: 'Gentamicin', dose: '5-7mg/kg IV', duration: '', note: 'As an adjunct (synergism)' }
                ],
                icu: [
                  { drug: 'Meropenem', dose: '3x1g IV', duration: '', note: 'Septic shock/ESBL' }
                ]
              },
              targeted: 'Fluoroquinolones (first choice in chronic). Macrolides (suspicion of Chlamydia). Fosfomycin (MDR - controversial penetration).',
              supportive: ['NSAID for pain relief', 'Alpha-blocker (Tamsulosin) to relieve symptoms', 'Suprapubic catheter (in retention, urethral should be avoided in acute inflammation!)'],
              prevention: ['Early treatment of UTIs', 'Prostate biopsy prophylaxis: Targeted (based on rectal swab) or Fosfomycin/Ceftriaxone (Fluoroquinolones should be avoided!)']
            },
            prognosis: {
              mortality: 'Acute: low (but risk of sepsis); Chronic: impairs quality of life, difficult to cure (recurrence common)',
              prognostic_scores: ['None'],
              factors: 'Biofilm, resistance, anatomy, transition to CPPS'
            }
          },
          {
            id: 'asymptomatic_bacteriuria',
            name: 'Asymptomatic Bacteriuria',
            pathogen: { type: 'Bacterium', name: 'E. coli, Enterococcus, GBS, etc.', gram: 'Variable', shape: 'Variable' },
            epidemiology: {
              incidence: 'Common (women 3-5%, elderly 10-50%, catheterized 100%)',
              risk_groups: ['Elderly', 'Diabetes', 'Catheter use', 'Pregnancy'],
              seasonality: 'None',
              transmission: 'Endogenous colonization'
            },
            pathomechanism: {
              steps: [
                'Urinary tract colonization without virulence factors',
                'Commensal-like relationship with the host',
                'No tissue invasion or inflammatory response'
              ],
              virulence_factors: ['Reduced virulence']
            },
            clinical: {
              incubation: '-',
              onset: 'Asymptomatic',
              symptoms: [
                { name: 'Asymptomatic', description: 'No dysuria, fever, or lower abdominal pain', severity: 'mild' }
              ],
              physical_exam: [
                'Negative',
                'Cloudy/foul-smelling urine alone is not diagnostic and does not require treatment!'
              ],
              complications: ['Unnecessary antibiotic treatment → resistance', 'Pyelonephritis (risk only in pregnancy/procedure)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Urine culture', finding: '≥10^5 CFU/ml (same strain)', interpretation: 'Women: 2 consecutive samples, Men: 1 sample (EAU 2025)' },
                { test: 'Catheterized sample', finding: '≥10^5 CFU/ml', interpretation: 'One sample is sufficient' },
                { test: 'Urine sediment', finding: 'Pyuria is often present', interpretation: 'Does NOT indicate treatment without symptoms!' }
              ],
              microbiology: [
                { test: 'Culture', finding: 'Positive', significance: 'Only if screening is indicated (e.g., pregnancy, urological procedure)' }
              ]
            },
            differential: [
              { disease: 'Cystitis', distinguishing: 'Presence of symptoms (dysuria, urgency)' },
              { disease: 'Contamination', distinguishing: 'Low colony count, mixed flora' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'NO treatment', dose: '-', duration: '-', note: 'General rule (not even in elderly, diabetics, catheterized patients!)' }
                ],
                inpatient: [
                  { drug: 'NO treatment', dose: '-', duration: '-', note: 'Except indications' }
                ]
              },
              targeted: 'Only if indicated (Pregnancy, Urological procedure with mucosal injury). In pregnancy: Fosfomycin, Nitrofurantoin, Cephalosporin.',
              supportive: ['Education (urine smell/color does not warrant AB)'],
              prevention: ['Avoid unnecessary screening and treatment', 'Catheter care']
            },
            prognosis: {
              mortality: 'Does not increase mortality even if untreated',
              prognostic_scores: ['None'],
              factors: '-'
            }
          }
        ]
      }
});
