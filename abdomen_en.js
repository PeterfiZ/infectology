window._abdomen_en = window._abdomen_en || {
  gastrointestinal: {
    name: 'Gastrointestinal Infections',
    icon: window.diseaseMetadata.gastrointestinal.icon,
    color: window.diseaseMetadata.gastrointestinal.color,
    tables: [
      {
        title: 'Differential Diagnosis of Gastrointestinal Infections',
        headers: ['Disease', 'Pathogen', 'Affected segment', 'Mechanism', 'Stool volume', 'Stool character', 'Fever', 'Key features / Complications'],
        rows: [
          ['C. difficile', 'C. difficile', 'Colon', 'Toxin A/B (inflammation)', 'Moderate/Large', 'Watery, greenish, foul-smelling', '+', 'AB-associated, pseudomembranes, toxic megacolon'],
          ['Salmonella', 'Salmonella', 'Small and large intestine', 'Invasion + Enterotoxin', 'Moderate', 'Watery (rarely bloody)', '++', 'Food poisoning, reptile contact, extraintestinal complications'],
          ['Shigella', 'Shigella', 'Colon', 'Invasion + Shiga toxin', 'Small', 'Bloody-mucoid (dysentery)', '++', 'Tenesmus, low infectious dose, HUS'],
          ['Campylobacter', 'Campylobacter', 'Small and large intestine', 'Invasion + Toxin', 'Moderate', 'Watery/Bloody', '+', 'Pseudoappendicitis, GBS, poultry'],
          ['E. coli (EHEC)', 'E. coli (STEC)', 'Colon', 'Shiga toxin', 'Moderate', 'Bloody', '-', 'Absence of fever, HUS, beef'],
          ['E. coli (ETEC)', 'E. coli (ETEC)', 'Small intestine', 'Enterotoxin (secretory)', 'Large', 'Watery', '-', "Traveler's diarrhea"],
          ['E. coli (EPEC)', 'E. coli (EPEC)', 'Small intestine', 'Malabsorption', 'Large', 'Watery/Mucoid', '+/-', 'Infantile diarrhea'],
          ['E. coli (EIEC)', 'E. coli (EIEC)', 'Colon', 'Invasion', 'Small', 'Bloody-mucoid', '++', 'Dysentery-like, fever'],
          ['Yersinia', 'Yersinia', 'Small and large intestine', 'Invasion', 'Moderate', 'Watery/Bloody', '+', 'Pseudoappendicitis, reactive arthritis, pork'],
          ['Giardia', 'Giardia', 'Small intestine', 'Malabsorption', 'Large/Moderate', 'Greasy, foul-smelling', '-', 'Bloating, malabsorption, chronic'],
          ['Amoeba', 'E. histolytica', 'Colon', 'Invasion/Cytotoxin', 'Small', 'Bloody-mucoid', '+/-', 'Liver abscess, travel'],
          ['Cryptosporidium', 'Cryptosporidium', 'Small intestine', 'Secretory/Malabsorption', 'Large', 'Watery', '-', 'Persists in immunosuppressed, swimming pools'],
          ['Viral GE', 'Rota/Noro', 'Small intestine', 'Malabsorption/Osmotic', 'Large', 'Watery', '-/+', 'Vomiting dominates (Noro), winter season'],
          ['Cholera', 'Vibrio cholerae', 'Small intestine', 'Enterotoxin (secretory)', 'Very large', 'Rice-water-like', '-', 'Massive fluid loss, dehydration']
        ]
      }
    ],
    diseases: [
      {
        id: 'cdiff',
        name: 'Clostridioides difficile Infection',
        pathogen: { type: 'Bacterium', name: '<i>Clostridioides difficile</i>', gram: 'Gram-positive', shape: 'spore-forming anaerobic rod' },
        epidemiology: {
          incidence: 'Most common cause of nosocomial diarrhea, 500,000 cases/year in the USA',
          risk_groups: ['Over 65 years old', 'Hospitalized patients', 'Antibiotic exposure', 'PPI use', 'Inflammatory bowel disease', 'Immunosuppressed patients'],
          seasonality: 'None',
          transmission: 'Fecal-oral (spores), nosocomial spread, hand hygiene!'
        },
        pathomechanism: {
          steps: [
            'Antibiotic treatment disrupts the balance of the normal gut flora, allowing C. difficile spores to germinate and proliferate.',
            'The bacterium produces toxins: Toxin A (enterotoxin) causes fluid secretion and inflammation, while Toxin B (cytotoxin) directly damages intestinal epithelial cells.',
            'As a result of severe inflammation and cell death, characteristic pseudomembranes form on the colonic mucosa.'
          ],
          virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB)', 'Binary toxin (CDT)', 'Spore formation', 'Adherence factors']
        },
        clinical: {
          incubation: '2-10 days after antibiotic use, up to 8 weeks later',
          onset: 'Acute',
          symptoms: [
            { name: 'Watery diarrhea', description: 'Initially watery, then characteristically greenish, foul-smelling ("horse-smelling") diarrhea (3-15x/day). In pseudomembranous colitis, severe lower abdominal cramps and leukocytosis. Complication: toxic megacolon (distended abdomen, absent bowel sounds).', severity: 'severe' },
            { name: 'Abdominal pain', description: 'Diffuse, crampy abdominal pain and tenderness.', severity: 'moderate' },
            { name: 'Fever', description: 'Often accompanied by fever and leukocytosis.', severity: 'moderate' }
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
            { test: 'Blood count', finding: 'Leukocytosis (up to >30 G/L)', interpretation: 'Marker of severity' },
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
        calculators: [
          {
            name: 'ATLAS Score - C. difficile Outcome',
            items: [
              { label: 'Age 60-79 years', points: 1 },
              { label: 'Age ≥ 80 years', points: 2 },
              { label: 'Systemic antibiotic therapy during CDI treatment', points: 2 },
              { label: 'White blood cell count 16-25 G/L', points: 1 },
              { label: 'White blood cell count > 25 G/L', points: 2 },
              { label: 'Albumin 26-35 g/L', points: 1 },
              { label: 'Albumin ≤ 25 g/L', points: 2 },
              { label: 'Creatinine 121-179 µmol/L', points: 1 },
              { label: 'Creatinine ≥ 180 µmol/L', points: 2 }
            ],
            interpretation: [
              { min: 0, max: 2, text: '0-2 points: Low risk. 30-day mortality 0-5%.' },
              { min: 3, max: 5, text: '3-5 points: Moderate risk. 30-day mortality 10-20%.' },
              { min: 6, max: 10, text: '6-10 points: High risk. 30-day mortality >30%.' }
            ]
          }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Fidaxomicin', dose: '200mg PO BID', duration: '10 days', note: 'First choice (less recurrence)' },
              { drug: 'Vancomycin', dose: '125mg PO QID', duration: '10 days', note: 'Alternative' }
            ],
            inpatient: [
              { drug: 'Vancomycin', dose: '125mg PO QID', duration: '10-14 days', note: 'If fidaxomicin not available' },
              { drug: 'Fidaxomicin', dose: '200mg PO BID', duration: '10 days', note: 'Preferred' }
            ],
            icu: [
              { drug: 'Vancomycin', dose: '500mg PO QID + rectal', duration: '10-14 days', note: 'Fulminant: higher dose' },
              { drug: '+ Metronidazole', dose: '500mg IV TID', duration: '10-14 days', note: 'In case of ileus (IV penetration)' },
              { drug: 'Surgery', dose: 'Colectomy', duration: '', note: 'Toxic megacolon, perforation' }
            ]
          },
          targeted: 'Non-severe: Vancomycin or Fidaxomicin; Severe: Vancomycin; Fulminant: Vancomycin+Metronidazole±surgery',
          supportive: ['Discontinue antibiotic (if possible)', 'Fluid replacement', 'Electrolyte correction', 'NO antimotility agents!', 'Contact isolation'],
          prevention: ['Antibiotic stewardship', 'Hand washing (alcohol does not kill spores!)', 'Contact isolation', 'Bezlotoxumab (recurrence prevention)', 'FMT in recurrent cases']
        },
        guidelines: {
          diagnosis: [
            'Suspicion: new-onset diarrhea after antibiotic exposure or in a nosocomial setting',
            'Lab: leukocytosis, elevated creatinine/ALP, decreased albumin are signs of severity',
            'Micro: two-step algorithm (GDH + toxin EIA) and/or NAAT; a positive PCR alone may also indicate colonization',
            'Endoscopy only in exceptional cases (pseudomembranes)'
          ],
          treatment_indications: [
            'Acute symptoms, especially severe presentation (leukocytosis >15 G/L, fever, creatinine rise, jaundice, ileus or toxic megacolon)',
            'In recurrent patients, early intervention (consider bezlotoxumab, FMT)'
          ],
          first_line: [
            'Non-severe/severe: Fidaxomicin 200 mg twice daily for 10 days or Vancomycin 125 mg 4x daily for 10 days',
            'Fulminant case: Oral/rectal Vancomycin at higher dose + IV Metronidazole (in case of ileus)',
          ],
          supportive: [
            'Discontinue the antibacterial agent if possible, fluid and electrolyte replacement, nutrition',
            'To be avoided: antimotility agents in severe patients'
          ],
          monitoring: [
            'Monitor clinical status, leukocytosis and renal function daily in severe cases',
            'In case of recurrence, consider another course of medication (e.g., fidaxomicin) or FMT'
          ],
          prevention: [
            'Antibiotic stewardship, hand hygiene, contact isolation, environmental disinfection (sporicidal agents)'
          ],
          special_populations: [
            'Elderly, immunosuppressed and hospitalized patients are at higher risk; lower threshold for early treatment in these groups'
          ]
          ,
          dosing: {
            adult: {
              fidaxomicin: '200 mg PO twice daily (BID) for 10 days',
              vancomycin: '125 mg PO 4x/day for 10 days (non-severe); in fulminant cases consider 500 mg PO 4x/day + rectal administration',
              metronidazol_iv: '500 mg IV 3x/day (adjunct in fulminant/ileus cases)'
            },
            pediatric: 'Pediatric doses according to local protocol; weight-based dosing of vancomycin is required',
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
        },
        differential: [
          { disease: 'Other AB-associated diarrhea', distinguishing: 'Toxin negative, milder' },
          { disease: 'Flare of inflammatory bowel disease', distinguishing: 'History, endoscopy' },
          { disease: 'Ischemic colitis', distinguishing: 'Risk factors, CT angiography' },
          { disease: 'Other infective enterocolitis', distinguishing: 'Stool culture, epidemiology' }
        ]
      },
      {
        id: 'salmonellosis',
        name: 'Salmonellosis (Non-typhoidal)',
        pathogen: { type: 'Bacterium', name: '<i>Salmonella enterica</i> (e.g., <i>Enteritidis, Typhimurium</i>)', gram: 'Gram-negative', shape: 'rod' },
        epidemiology: {
          incidence: 'Common food poisoning (more frequent in summer)',
          risk_groups: ['Infants', 'Elderly', 'Hypochlorhydric patients (PPI)', 'Immunosuppressed patients'],
          seasonality: 'Summer-autumn',
          transmission: 'Fecal-oral: contaminated food (eggs, poultry, meat), contact with reptiles'
        },
        pathomechanism: {
          steps: [
            'After ingestion of the bacteria (a high inoculum is required), the pathogens survive gastric acid and reach the small intestine.',
            'In the small intestine, they enter the Peyer\'s patches and deeper layers of the intestinal wall via M cells.',
            'Proliferation of the bacteria triggers an intense inflammatory response, leading to neutrophil infiltration and fluid secretion.'
          ],
          virulence_factors: ['Type III secretion system (T3SS)', 'Enterotoxin']
        },
        clinical: {
          incubation: '6-72 hours (average 12-36 hours)',
          onset: 'Sudden',
          symptoms: [
            { name: 'Diarrhea', description: 'Sudden-onset, copious, watery diarrhea, sometimes mucoid or bloody. Accompanying nausea, vomiting and diffuse abdominal pain are characteristic.', severity: 'moderate' },
            { name: 'Fever', description: 'High fever, chills, headache and myalgia may accompany.', severity: 'moderate' },
            { name: 'Abdominal cramps', description: 'Periumbilical or diffuse abdominal cramps.', severity: 'moderate' }
          ],
          physical_exam: ['Fever', 'Abdominal tenderness', 'Signs of dehydration'],
          complications: ['Bacteremia (5%, mainly elderly/immunosuppressed)', 'Septic arthritis', 'Osteomyelitis (sickle cell anemia)', 'Endovascular infection (aneurysm)']
        },
        diagnostics: {
          laboratory: [{ test: 'Inflammatory markers', finding: 'Elevated CRP', interpretation: 'Bacterial origin' }],
          microbiology: [{ test: 'Stool culture', finding: 'Salmonella sp.', significance: 'Diagnostic' }]
        },
        differential: [
          { disease: 'Campylobacteriosis', distinguishing: 'Culture, similar clinical picture' },
          { disease: 'Shigellosis', distinguishing: 'Bloody-mucoid stool more common' },
          { disease: 'Viral gastroenteritis', distinguishing: 'Vomiting dominates, watery diarrhea' },
          { disease: 'IBD (Crohn/Colitis)', distinguishing: 'Chronic, non-infectious, endoscopy' }
        ],
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Healthy adults do NOT need antibiotics (causes prolonged carriage!)' }],
            inpatient: [{ drug: 'Ceftriaxone', dose: '1-2g IV', duration: '7-14 days', note: 'In severe/invasive cases' }, { drug: 'Ciprofloxacin', dose: '500mg PO BID', duration: '7-10 days', note: 'Alternative (if susceptible)' }]
          },
          targeted: 'Only in risk groups (infants, elderly, immunosuppressed) or severe cases: Fluoroquinolone or Ceftriaxone.',
          supportive: ['Fluid replacement (ORS)', 'Probiotic'],
          prevention: ['Food hygiene', 'Thorough cooking of eggs/meat']
        },
        guidelines: {
          diagnosis: [
            'Suspicion: acute diarrhea with fever; infants/elderly/immunosuppressed patients are at higher risk for severe complications',
            'Microbiology: stool culture to identify Salmonella; blood culture if severe or sepsis is suspected'
          ],
          treatment_indications: [
            'In healthy adults with non-invasive infection: generally no antibiotics',
            'Antibiotics recommended: infants, elderly, immunosuppressed, sepsis, extraintestinal infection, in certain situations during pregnancy'
          ],
          first_line: [
            'Severe/invasive case: Ceftriaxone IV or Fluoroquinolone (depending on susceptibility)'
          ],
          supportive: ['Fluid replacement, electrolyte replacement, nutrition'],
          prevention: ['Food safety, thorough cooking of eggs and poultry']
          ,
          dosing: {
            adult: {
              ceftriaxone: '1-2 g IV once daily (usual course 5-14 days, depending on clinical status)',
              ciprofloxacin: '500 mg PO 2x/day (7-10 days) - only for susceptible strains; local resistance must be taken into account'
            },
            pediatric: 'Pediatric doses of ceftriaxone and fluoroquinolones depend on age and weight; consult local pediatric protocol'
          },
          references: [
            'CDC – Salmonella: https://www.cdc.gov/salmonella/index.html',
            'WHO – Non-typhoidal Salmonella overview: https://www.who.int/news-room/fact-sheets/detail/salmonella-(non-typhoidal)'
          ]
        },
        prognosis: { mortality: 'Low (<1%), higher in case of sepsis', prognostic_scores: [], factors: 'Age, comorbidity' }
      },
      {
        id: 'shigellosis',
        name: 'Shigellosis (Bacillary Dysentery)',
        pathogen: { type: 'Bacterium', name: '<i>Shigella (dysenteriae, flexneri, sonnei)</i>', gram: 'Gram-negative', shape: 'rod' },
        epidemiology: {
          incidence: 'Common worldwide, endemic in developing countries',
          seasonality: 'Summer',
          risk_groups: ['Children (daycare, kindergarten)', 'Travelers', 'MSM'],
          transmission: 'Fecal-oral (person-to-person), very low infectious dose (10-100 bacteria)!'
        },
        pathomechanism: {
          steps: [
            'The bacteria invade the epithelial cells of the colon and spread from cell to cell, evading the immune system.',
            'Proliferation of the bacteria and the toxins produced (e.g., Shiga toxin) cause mucosal necrosis, ulceration and bleeding.',
            'Shiga toxin entering the bloodstream can damage renal endothelial cells, causing hemolytic uremic syndrome (HUS).'
          ],
          virulence_factors: ['Shiga toxin (Stx)', 'Invasion plasmid antigens']
        },
        clinical: {
          incubation: '1-3 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Dysentery', description: 'Initially watery diarrhea, then classic dysentery: frequent, small-volume, bloody-mucoid ("sputum-like") stools.', severity: 'severe' },
            { name: 'Tenesmus', description: 'Agonizing, painful, ineffective urge to defecate (straining). Marked toxic state.', severity: 'severe' },
            { name: 'Fever', description: 'Characterized by high fever and toxic state.', severity: 'moderate' }
          ],
          complications: ['Hemolytic uremic syndrome (HUS - S. dysenteriae)', 'Toxic megacolon', 'Rectal prolapse', 'Reactive arthritis']
        },
        diagnostics: {
          laboratory: [{ test: 'Blood count', finding: 'Leukocytosis, left shift', interpretation: 'Invasive infection' }],
          microbiology: [{ test: 'Stool culture', finding: 'Shigella sp.', significance: 'Diagnostic' }]
        },
        differential: [
          { disease: 'EIEC (E. coli)', distinguishing: 'Clinically identical, microbiology decides' },
          { disease: 'Amoebiasis', distinguishing: 'E. histolytica detection, less febrile' },
          { disease: 'Campylobacteriosis', distinguishing: 'Culture' },
          { disease: 'C. difficile', distinguishing: 'Antibiotic history, toxin test' }
        ],
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Azithromycin', dose: '500mg PO once daily', duration: '3 days', note: 'First choice' }, { drug: 'Ciprofloxacin', dose: '500mg PO BID', duration: '3 days', note: 'Alternative (resistance increasing)' }]
          },
          targeted: 'Antibiotics are recommended to shorten the disease and reduce infectivity. Azithromycin, Ceftriaxone, Ciprofloxacin.',
          supportive: ['Fluid replacement', 'Antimotility agents (Loperamide) are FORBIDDEN!'],
          prevention: ['Strict hand hygiene', 'Patient isolation']
        },
        guidelines: {
          diagnosis: [
            'Suspicion: bloody, mucoid stool and tenesmus; may indicate an outbreak due to the low infectious dose',
            'Microbiology: stool culture; Shiga toxin testing for S. dysenteriae'
          ],
          treatment_indications: [
            'Antibiotics are recommended to shorten the disease and reduce spread (especially during outbreaks, in severe symptoms, or in risk groups)'
          ],
          first_line: [
            'Azithromycin (1 g single dose or 500 mg for 3 days), alternative: Ceftriaxone IV in severe cases'
          ],
          supportive: ['Fluid replacement, symptomatic treatment'],
          prevention: ['Regular hand hygiene, contact isolation, outbreak control measures']
          ,
          dosing: {
            adult: {
              azithromycin: "1 g PO single dose or 500 mg PO once daily for 3 days (per local protocol)",
              ciprofloxacin: '500 mg PO 2x/day for 3 days (alternative; resistance increasing)',
              ceftriaxone: '1 g IV once daily in severe cases'
            },
            pediatric: 'Pediatric doses of azithromycin and ceftriaxone depend on age and body weight; consult pediatric protocol'
          },
          references: [
            'CDC – Shigella: https://www.cdc.gov/shigella/index.html',
            'WHO – Shigellosis factsheet: https://www.who.int/news-room/fact-sheets/detail/shigellosis'
          ]
        },
        prognosis: { mortality: 'Low with treatment, can be 20% in S. dysenteriae 1 outbreaks', prognostic_scores: [], factors: 'Age, comorbidity, malnutrition' }
      },
      {
        id: 'campylobacter',
        name: 'Campylobacteriosis',
        pathogen: { type: 'Bacterium', name: '<i>Campylobacter jejuni</i>', gram: 'Gram-negative', shape: 'spiral/seagull wing-shaped' },
        epidemiology: {
          incidence: 'Most common bacterial gastroenteritis in the developed world',
          risk_groups: ['Infants', 'Young adults', 'Elderly'],
          seasonality: 'Summer',
          transmission: 'Contaminated poultry (undercooked), raw milk, water'
        },
        pathomechanism: {
          steps: [
            'The bacteria colonize and invade the mucosa of the small and large intestine.',
            'They produce toxins (e.g., CDT) that inhibit cell division and trigger inflammation.',
            'Through an autoimmune mechanism, the infection can trigger Guillain-Barré syndrome.'
          ],
          virulence_factors: ['Flagellum (motility)', 'Adhesins', 'Cytolethal distending toxin (CDT)']
        },
        clinical: {
          incubation: '2-5 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Diarrhea', description: 'Watery, often foul-smelling and bloody diarrhea.', severity: 'moderate' },
            { name: 'Abdominal pain', description: 'Intense, crampy abdominal pain that can mimic appendicitis (pseudoappendicitis - right lower quadrant pain). Complication: Guillain-Barré syndrome (flaccid paralysis).', severity: 'severe' },
            { name: 'Fever', description: 'The diarrhea is often preceded by fever, headache and myalgia.', severity: 'moderate' }
          ],
          physical_exam: ['Diffuse abdominal tenderness', 'Fever', 'Signs of dehydration'],
          complications: ['Guillain-Barré syndrome (GBS) - 1/1000 cases', 'Reactive arthritis', 'Erythema nodosum']
        },
        diagnostics: {
          laboratory: [{ test: 'Blood count', finding: 'Leukocytosis', interpretation: 'Inflammation' }, { test: 'Stool', finding: 'Leukocytes, RBCs', interpretation: 'Invasive' }, { test: 'CRP', finding: 'Elevated', interpretation: 'Bacterial origin' }],
          microbiology: [{ test: 'Stool culture', finding: 'Campylobacter (special medium, 42°C)', significance: 'Diagnostic' }]
        },
        differential: [
          { disease: 'Salmonellosis', distinguishing: 'Culture, epidemiology' },
          { disease: 'Shigellosis', distinguishing: 'More severe dysentery, culture' },
          { disease: 'Appendicitis', distinguishing: 'Ultrasound/CT, surgical consultation' }
        ],
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Azithromycin', dose: '500mg PO once daily', duration: '3 days', note: 'First choice in severe cases' }]
          },
          targeted: 'In mild cases, only fluid replacement. In severe cases, macrolides (Azithromycin). Fluoroquinolone resistance is high!',
          supportive: ['Fluid replacement'],
          prevention: ['Adequate cooking of poultry', 'Avoiding cross-contamination in the kitchen']
        },
        guidelines: {
          diagnosis: [
            'Suspicion: acute abdominal pain, bloody diarrhea; may present with pseudoappendicitis symptoms',
            'Microbiology: stool culture under special conditions (42°C); antigen/PCR where available'
          ],
          treatment_indications: [
            'Mild, non-systemic case: supportive treatment only',
            'Severe or persistent symptoms, immunosuppressed patients: macrolide therapy recommended'
          ],
          first_line: ['Azithromycin 500 mg single dose or 500 mg daily for 3 days (in more severe cases)'],
          supportive: ['Fluid replacement, electrolyte replacement'],
          prevention: ['Thorough cooking of poultry, kitchen hygiene']
          ,
          dosing: {
            adult: {
              azithromycin: '500 mg PO single dose or 500 mg PO once daily for 3 days (alternative regimen: 500 mg day 1, then 250 mg daily for days 2-3) ',
              ciprofloxacin: '500 mg PO 2x/day for 3 days (if susceptible and severe case)'
            },
            pediatric: 'Pediatric doses of macrolides depend on age and weight; consult local protocol'
          },
          references: [
            'CDC – Campylobacter: https://www.cdc.gov/campylobacter/index.html',
            'ESCMID guidance on Campylobacter: https://www.escmid.org/'
          ]
        },
        prognosis: { mortality: 'Very low (<0.1%)', prognostic_scores: [], factors: 'GBS complication can be severe, reactive arthritis can be prolonged' }
      },
      {
        id: 'ecoli_enteritis',
        name: 'E. coli Enteritides (ETEC, EHEC, EPEC, EIEC)',
        pathogen: { type: 'Bacterium', name: '<i>Escherichia coli</i> (pathogenic strains)', gram: 'Gram-negative', shape: 'rod' },
        epidemiology: {
          incidence: "ETEC: traveler's diarrhea; EHEC: foodborne outbreaks; EPEC: infantile diarrhea; EIEC: dysentery-like",
          risk_groups: ['Travelers (ETEC)', 'Children, elderly (EHEC)', 'Infants (EPEC)'],
          seasonality: 'Summer',
          transmission: 'Fecal-oral, contaminated water/food (beef, vegetables)'
        },
        pathomechanism: {
          steps: [
            'ETEC: The bacteria adhere in the small intestine and produce enterotoxins, causing massive fluid secretion.',
            'EHEC: They produce Shiga toxin in the colon, which causes bloody diarrhea and, if absorbed systemically, can cause renal failure (HUS).',
            'EPEC/EIEC: By adhering to or invading intestinal epithelial cells, they damage the mucosa and cause inflammation.'
          ],
          virulence_factors: ['Enterotoxins', 'Shiga toxin (Stx1, Stx2)', 'Adhesins (EPEC)', 'Invasins (EIEC)']
        },
        clinical: {
          incubation: 'ETEC/EPEC: 1-3 days; EHEC/EIEC: 3-4 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Watery diarrhea (ETEC/EPEC)', description: "Sudden-onset, copious watery diarrhea without fever (traveler's diarrhea).", severity: 'moderate' },
            { name: 'Bloody diarrhea (EHEC/EIEC)', description: 'In EHEC, sudden-onset watery diarrhea followed by massively bloody diarrhea (hemorrhagic colitis) WITHOUT fever. Marked abdominal cramps. Complication: HUS.', severity: 'severe' }
          ],
          physical_exam: ['Dehydration', 'Abdominal tenderness (EHEC/EIEC: marked)', 'Fever (common in EIEC, rare in EHEC)'],
          complications: ['Hemolytic uremic syndrome (HUS) - 5-10% after EHEC infection (mainly children)', 'TTP (adults)', 'Malnutrition (EPEC)']
        },
        diagnostics: {
          laboratory: [{ test: 'Blood count', finding: 'Thrombocytopenia, anemia', interpretation: 'Suspect HUS (EHEC)!' }, { test: 'Renal', finding: 'Elevated creatinine', interpretation: 'HUS' }],
          microbiology: [
            { test: 'Stool culture', finding: 'Sorbitol-MacConkey (EHEC)', significance: 'EHEC screening' },
            { test: 'Shiga toxin detection', finding: 'PCR or EIA', significance: 'EHEC diagnosis' },
            { test: 'PCR panel', finding: 'Virulence genes', significance: 'Differentiation of EPEC/EIEC/ETEC' }
          ]
        },
        differential: [
          { disease: 'Shigellosis', distinguishing: 'Similar in EIEC/EHEC, culture' },
          { disease: 'Cholera', distinguishing: 'In ETEC (rice-water stool), travel' },
          { disease: 'Viral gastroenteritis', distinguishing: 'No blood, vomiting may dominate' },
          { disease: 'Campylobacteriosis', distinguishing: 'Culture' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'ETEC: Rifaximin', dose: '200mg PO BID', duration: '3 days', note: "Traveler's diarrhea" },
              { drug: 'EHEC: ANTIBIOTICS CONTRAINDICATED!', dose: '-', duration: '-', note: 'Increases the risk of HUS!' },
              { drug: 'EIEC: Ciprofloxacin/Azithromycin', dose: 'Usual dose', duration: '3 days', note: 'In severe cases (like Shigella)' }
            ]
          },
          targeted: 'ETEC/EIEC: Ciprofloxacin or Azithromycin (in severe cases). EHEC: Supportive ONLY! EPEC: Supportive.',
          supportive: ['Fluid replacement', 'Dialysis, transfusion in case of HUS'],
          prevention: ['Food hygiene', 'Thoroughly cooking beef', 'For travelers: bottled water']
        },
        guidelines: {
          diagnosis: [
            'Suspicion: bloody diarrhea (EHEC/EIEC) or watery diarrhea (ETEC/EPEC); ruling out HUS is important',
            'Microbiology: EHEC screening, PCR panel to differentiate pathotypes'
          ],
          treatment_indications: [
            'Antibiotics are generally contraindicated in EHEC infection (increases the risk of HUS)',
            'Antibiotics may be given for severe symptoms in ETEC/EIEC'
          ],
          supportive: ['Fluid replacement, close monitoring; nephrology care in case of HUS'],
          prevention: ['Food hygiene, thoroughly cooked beef, precautions for travelers'],
          dosing: {
            adult: {
              rifaximin: "200 mg PO 3x/day for 3 days (ETEC, non-invasive traveler's diarrhea)",
              azithromycin: '1 g PO single dose or 500 mg PO once daily for 1-3 days (severe ETEC/EIEC)'
            },
            pediatric: 'Pediatric dosing of rifaximin is limited; antibiotics should be avoided in children with EHEC'
          },
          references: [
            'CDC – E. coli (STEC): https://www.cdc.gov/ecoli/index.html',
            "CDC – Traveler's Diarrhea & Rifaximin: https://www.cdc.gov/antibiotic-use/community/for-hcp/common-conditions/travelers-diarrhea.html"
          ]
        },
        prognosis: { mortality: 'ETEC/EPEC: low; EHEC: 3-5% mortality in case of HUS', prognostic_scores: [], factors: 'Age (child/elderly), development of HUS, antibiotic use (worsens outcome in EHEC!)' }
      },
      {
        id: 'yersiniosis',
        name: 'Yersiniosis',
        pathogen: { type: 'Bacterium', name: '<i>Yersinia enterocolitica</i>', gram: 'Gram-negative', shape: 'coccobacillus' },
        epidemiology: {
          incidence: 'More common in temperate regions, in winter',
          risk_groups: ['Children', 'Patients with iron overload (hemochromatosis)'],
          seasonality: 'Winter',
          transmission: 'Raw pork, milk, contaminated water. Psychrophilic (multiplies in the refrigerator!)'
        },
        pathomechanism: {
          steps: [
            'The bacteria enter the Peyer\'s patches and mesenteric lymph nodes via M cells of the ileum.',
            'They cause inflammation and microabscesses in the lymph nodes (mesenteric lymphadenitis).',
            'The infection can trigger reactive arthritis through an immunological mechanism.'
          ],
          virulence_factors: ['Yersinia outer proteins (Yops)', 'T3SS', 'Invasin']
        },
        clinical: {
          incubation: '4-7 days',
          onset: 'Gradual',
          symptoms: [
            { name: 'Enterocolitis', description: 'Fever, diarrhea (possibly bloody), vomiting.', severity: 'moderate' },
            { name: 'Pseudoappendicitis', description: 'Right lower quadrant pain and tenderness mimicking appendicitis.', severity: 'moderate' }
          ],
          physical_exam: ['Right lower quadrant tenderness', 'Fever', 'Erythema nodosum (late)'],
          complications: ['Reactive arthritis (HLA-B27)', 'Erythema nodosum', 'Sepsis (in patients with iron overload)']
        },
        diagnostics: {
          laboratory: [{ test: 'Inflammatory markers', finding: 'Elevated', interpretation: 'Bacterial' }],
          imaging: [{ modality: 'Abdominal ultrasound', finding: 'Mesenteric lymphadenopathy, terminal ileitis', significance: 'Ruling out appendicitis' }],
          microbiology: [{ test: 'Stool culture', finding: 'CIN agar (cold enrichment)', significance: 'Must notify the laboratory' }]
        },
        differential: [
          { disease: 'Appendicitis', distinguishing: 'Ultrasound/CT, surgical consultation' },
          { disease: "Crohn's disease", distinguishing: 'Chronic, endoscopy, biopsy' },
          { disease: 'Other bacterial enteritis', distinguishing: 'Culture' }
        ],
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Usually self-limiting' }],
            inpatient: [{ drug: 'Ciprofloxacin', dose: '500mg PO BID', duration: '7-10 days', note: 'In severe cases' }, { drug: 'Doxycycline', dose: '100mg PO BID', duration: '7-10 days', note: 'Alternative' }]
          },
          targeted: 'Fluoroquinolones, Doxycycline, TMP-SMX. Sepsis: Ceftriaxone.',
          prevention: ['Avoiding raw pork', 'Pasteurization of milk']
        },
        guidelines: {
          diagnosis: [
            'Suspicion: right lower quadrant pain, fever, occasionally bloody diarrhea; may present as pseudoappendicitis',
            'Microbiology: stool culture with CIN agar, the laboratory must be notified of the need for cold enrichment'
          ],
          treatment_indications: [
            'Usually self-limiting; antibiotics only for severe, persistent symptoms, systemic spread, or in patients with iron overload'
          ],
          first_line: ['Severe case: Ciprofloxacin or Doxycycline (taking local resistance into account)'],
          supportive: ['Fluid replacement, antipyretics'],
          prevention: ['Education: avoiding raw pork, consuming pasteurized milk'],
          dosing: {
            adult: {
              ciprofloxacin: '500 mg PO 2x/day for 7-10 days',
              doxycycline: '100 mg PO 2x/day for 7-10 days'
            },
            pediatric: 'In children, generally symptomatic treatment; antibiotics given only for severe, systemic infection (pediatric consultation)'
          },
          references: [
            'CDC – Yersinia enterocolitica: https://www.cdc.gov/yersinia/index.html'
          ]
        },
        prognosis: { mortality: 'Low, high in sepsis (50%)', prognostic_scores: [], factors: 'Iron overload, immunosuppression, delayed diagnosis' }
      },
      {
        id: 'giardiasis',
        name: 'Giardiasis',
        pathogen: { type: 'Protozoan', name: '<i>Giardia duodenalis (lamblia)</i>', gram: '-', shape: 'pear-shaped (trophozoite)' },
        epidemiology: {
          incidence: 'Worldwide distribution, most common parasitic intestinal infection',
          risk_groups: ['Children', 'Campers (stream water)', 'IgA-deficient patients'],
          seasonality: 'Summer-autumn',
          transmission: 'Fecal-oral (cysts), water (chlorine-resistant!), food'
        },
        pathomechanism: {
          steps: [
            'Trophozoites are released from the ingested cysts in the duodenum.',
            'The parasites attach to the villi of the small intestine via their adhesive disc, but do not invade the tissues.',
            'Damage to the intestinal villi and deficiency of disaccharidase enzymes cause malabsorption and osmotic diarrhea.'
          ]
        },
        clinical: {
          incubation: '1-3 weeks',
          onset: 'Gradual',
          symptoms: [
            { name: 'Diarrhea', description: 'Prolonged, foul-smelling, greasy, non-bloody diarrhea.', severity: 'moderate' },
            { name: 'Bloating', description: 'Marked gas formation, abdominal bloating, sulfurous belching.', severity: 'moderate' },
            { name: 'Weight loss', description: 'Significant weight loss may develop due to malabsorption.', severity: 'moderate' }
          ],
          physical_exam: ['Meteorism', 'Diffuse abdominal tenderness', 'No fever'],
          complications: ['Chronic diarrhea', 'Malabsorption (vitamin deficiency)', 'Developmental delay (children)']
        },
        diagnostics: {
          laboratory: [{ test: 'Blood count', finding: 'Normal, NO eosinophilia', interpretation: 'Non-invasive parasite' }],
          differential: [
            { disease: 'Lactose intolerance', distinguishing: 'Breath test, effect of diet' },
            { disease: 'IBS', distinguishing: 'Chronic, negative parasite testing' },
            { disease: 'Cryptosporidiosis', distinguishing: 'Acid-fast staining, immunosuppression' }
          ],
          microbiology: [
            { test: 'Stool parasite exam', finding: 'Cysts or trophozoites', significance: '3 samples required (intermittent shedding)' },
            { test: 'Stool antigen (EIA)', finding: 'Positive', significance: 'More sensitive than microscopy' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Metronidazole', dose: '250mg PO TID', duration: '5-7 days', note: 'First choice' },
              { drug: 'Tinidazole', dose: '2g PO', duration: 'Single dose', note: 'More convenient' }
            ]
          },
          targeted: 'Nitroimidazoles (Metronidazole, Tinidazole). In pregnancy: Paromomycin.',
          prevention: ['Boiling/filtering water (chlorine is not enough!)', 'Hand washing']
        },
        guidelines: {
          diagnosis: [
            'Investigation of chronic/acute loose stools: 3 stool samples for parasite examination or antigen test (EIA) for faster results',
            'Eosinophilia is generally absent; breath tests for differential diagnosis'
          ],
          treatment_indications: [
            'Every symptomatic case should be treated; asymptomatic carriage should only be treated in special epidemiological circumstances'
          ],
          first_line: ['Metronidazole 250-750 mg 3x daily for 5-7 days or Tinidazole 2 g single dose (per local protocol)'],
          supportive: ['Fluid replacement, diet (avoiding fatty foods)'],
          prevention: ['Boiling/filtering drinking water, hand hygiene; hygiene measures in childcare settings']
          ,
          dosing: {
            adult: {
              metronidazole: '250-500 mg PO 3x/day for 5-7 days (many protocols use 500 mg 2-3x/day)',
              tinidazole: '2 g PO single dose (a single dose is an effective alternative)'
            },
            pregnancy: 'In pregnancy: Paromomycin 500 mg PO 3x/day for 7 days preferred (avoid metronidazole/tinidazole in the first trimester)',
            pediatric: 'Pediatric doses depend on age and body weight; pediatric dosing of tinidazole/metronidazole per local protocol'
          },
          references: [
            'CDC – Giardiasis: https://www.cdc.gov/parasites/giardia/index.html'
          ]
        },
        prognosis: { mortality: 'Good prognosis: low mortality, but can become chronic without treatment', prognostic_scores: [], factors: 'IgA deficiency, reinfection' }
      },
      {
        id: 'amoebiasis',
        name: 'Amoebiasis',
        pathogen: { type: 'Protozoan', name: '<i>Entamoeba histolytica</i>', gram: '-', shape: 'amoeboid' },
        epidemiology: {
          incidence: 'Endemic in tropical/subtropical regions',
          risk_groups: ['Travelers', 'Immigrants', 'Institutionalized patients', 'MSM'],
          seasonality: 'None',
          transmission: 'Fecal-oral (cysts)'
        },
        pathomechanism: {
          steps: [
            'From the ingested cysts, trophozoites develop in the colon, which invade the mucosa.',
            'The parasites produce tissue-lytic enzymes, creating characteristic flask-shaped ulcers.',
            'Entering the bloodstream, the parasites can reach the liver, where they can form an abscess.'
          ]
        },
        clinical: {
          incubation: '2-4 weeks',
          onset: 'Gradual',
          symptoms: [
            { name: 'Amoebic dysentery', description: 'Bloody, mucoid diarrhea with abdominal pain.', severity: 'severe' },
            { name: 'Amoebic liver abscess', description: 'Right upper quadrant pain, fever, weight loss, even without diarrhea.', severity: 'severe' }
          ],
          physical_exam: ['Abdominal tenderness (cecum/colon)', 'Hepatomegaly, liver percussion tenderness (abscess)'],
          complications: ['Bowel perforation', 'Toxic megacolon', 'Abscess rupture (pleura, peritoneum, pericardium)', 'Brain abscess']
        },
        diagnostics: {
          laboratory: [{ test: 'Blood count', finding: 'Leukocytosis (in abscess)', interpretation: 'Inflammation' }, { test: 'Liver enzymes', finding: 'Elevated ALP', interpretation: 'Abscess' }],
          microbiology: [
            { test: 'Stool parasite exam', finding: 'Trophozoites (with red blood cells in the cytoplasm!)', significance: 'Must be differentiated from E. dispar' },
            { test: 'Stool antigen/PCR', finding: 'E. histolytica specific', significance: 'Gold standard' },
            { test: 'Serology', finding: 'Positive', significance: 'Useful in invasive disease (liver abscess)' }
          ],
          imaging: [{ modality: 'Abdominal ultrasound/CT', finding: 'Solitary liver abscess (right lobe)', significance: 'Liver abscess diagnosis' }]
        },
        differential: [
          { disease: 'Bacterial dysentery', distinguishing: 'Culture, fever more common' },
          { disease: 'Pyogenic liver abscess', distinguishing: 'Bacterial culture, more septic presentation' },
          { disease: 'Echinococcal cyst', distinguishing: 'Serology, imaging (daughter cysts)' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Metronidazole', dose: '750mg PO TID', duration: '7-10 days', note: 'Tissue agent (invasive)' },
              { drug: '+ Paromomycin', dose: '500mg PO TID', duration: '7 days', note: 'Luminal agent (against cyst shedding) - MANDATORY addition!' }
            ]
          },
          targeted: 'Metronidazole (tissue) + Paromomycin/Diloxanide (luminal). Liver abscess: Metronidazole + drainage if needed.',
          prevention: ['Water and food hygiene']
        },
        guidelines: {
          diagnosis: [
            'In suspected dysentery, stool parasite exam, antigen/PCR for rapid and specific diagnosis',
            'In liver abscess, imaging (ultrasound/CT) and serology aid diagnosis'
          ],
          treatment_indications: [
            'Invasive amoebic dysentery or liver abscess: Metronidazole or Tinidazole (tissue treatment) is mandatory, followed by a luminal agent (Paromomycin/Diloxanide) to eradicate the cysts',
            'Mild luminal infection: Paromomycin/diloxanide alone'
          ],
          first_line: ['Metronidazole 750 mg 3x daily for 7-10 days + Paromomycin 500 mg 3x daily for 7 days (luminal addition)'],
          supportive: ['Fluid replacement, pain management, nutrition; consider indication for drainage in liver abscess'],
          prevention: ['Water and food hygiene, hand washing, precautions for travelers']
          ,
          dosing: {
            adult: {
              metronidazole: '750 mg PO 3x/day for 7-10 days (invasive/abscess)',
              tinidazole: '2 g PO once daily for 3 days (alternative tissue treatment per local protocol)',
              paromomycin: '500 mg PO 3x/day for 7 days (luminal addition)'
            },
            pregnancy: 'Avoid tinidazole/metronidazole in the first trimester of pregnancy; paromomycin preferred for luminal treatment',
            pediatric: 'Pediatric dosing per local protocol; pediatric consultation recommended'
          },
          references: [
            'CDC – Amebiasis: https://www.cdc.gov/parasites/amebiasis/index.html',
            'WHO – Amebiasis: https://www.who.int/health-topics/amebiasis'
          ]
        },
        prognosis: { mortality: 'Good with treatment (<1%), higher with complicated abscess/perforation', prognostic_scores: [], factors: 'Delayed diagnosis, abscess rupture' }
      },
      {
        id: 'cryptosporidiosis',
        name: 'Cryptosporidiosis',
        pathogen: { type: 'Protozoan', name: '<i>Cryptosporidium hominis/parvum</i>', gram: 'Acid-fast staining', shape: 'oocyst' },
        epidemiology: {
          incidence: 'Common waterborne outbreaks (swimming pools)',
          risk_groups: ['AIDS patients (defining opportunistic infection)', 'Children', 'Veterinarians'],
          seasonality: 'Summer-autumn',
          transmission: 'Fecal-oral, water (chlorine-resistant oocysts!)'
        },
        pathomechanism: {
          steps: [
            'After ingestion of oocysts, sporozoites attach to the surface of small intestinal epithelial cells (intracellular but extracytoplasmic).',
            'The infection causes atrophy of the intestinal villi and hyperplasia of the crypts.',
            'This leads to severe malabsorption and secretory diarrhea.'
          ],
          virulence_factors: ['Adhesins', 'Proteases']
        },
        clinical: {
          incubation: '7-10 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Watery diarrhea', description: 'Copious, watery diarrhea with abdominal cramps.', severity: 'moderate' },
            { name: 'Persistent diarrhea', description: 'In immunosuppressed patients (e.g., AIDS) the diarrhea can become chronic and cause severe fluid loss.', severity: 'severe' }
          ],
          physical_exam: ['Signs of dehydration', 'Cachexia (in chronic cases)'],
          complications: ['Severe dehydration', 'Malnutrition', 'Biliary tract involvement (AIDS)']
        },
        diagnostics: {
          laboratory: [{ test: 'CD4 count', finding: '<100/µL', interpretation: 'Risk of severe course (HIV)' }],
          microbiology: [
            { test: 'Stool stain', finding: 'Acid-fast oocysts (modified Z-N)', significance: 'Must be specifically requested' },
            { test: 'Stool antigen/PCR', finding: 'Positive', significance: 'More sensitive' }
          ]
        },
        differential: [
          { disease: 'Giardiasis', distinguishing: 'Stool exam, bloating dominates' },
          { disease: 'Isosporiasis', distinguishing: 'Larger oocysts, responds to TMP-SMX' },
          { disease: 'Microsporidiosis', distinguishing: 'Smaller spores, special staining' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Nitazoxanide', dose: '500mg PO BID', duration: '3 days', note: 'For immunocompetent patients' },
              { drug: 'ART (Antiretroviral therapy)', dose: '-', duration: '-', note: 'In HIV patients, restoring the immune system is key!' }
            ]
          },
          targeted: 'Immunocompetent: Nitazoxanide. Immunosuppressed: ART optimization, supportive, Nitazoxanide (less effective).',
          supportive: ['Fluid replacement', 'Antimotility agents (with caution)'],
          prevention: ['Water filtration (<1 micron), avoiding swimming pools during diarrhea']
        },
        guidelines: {
          diagnosis: [
            'Suspicion: persistent watery diarrhea in immunosuppressed patient (CD4<100), in waterborne outbreaks',
            'Diagnosis: stool antigen or PCR; acid-fast staining upon specific request'
          ],
          treatment_indications: [
            'Immunocompetent: often resolves spontaneously',
            'Immunodeficient: antiviral/therapeutic intervention required; ART optimization is the priority'
          ],
          first_line: ['Nitazoxanide for immunocompetent patients; for immunosuppressed patients, restoring immune competence (ART) is primary'],
          supportive: ['Fluid and nutritional replacement, electrolyte monitoring'],
          prevention: ['Filtering/boiling drinking water, personal hygiene, avoiding swimming pools during diarrhea']
          ,
          dosing: {
            adult: {
              nitazoxanide_immunocompetent: '500 mg PO 2x/day for 3 days',
              nitazoxanide_immunocompromised: 'Consider longer course (per local protocol); ART optimization is primary'
            },
            pediatric: 'Pediatric dosing of nitazoxanide by age and weight; consult local protocol'
          },
          references: [
            'CDC – Cryptosporidium: https://www.cdc.gov/parasites/crypto/index.html',
            'WHO – Cryptosporidiosis: https://www.who.int/news-room/fact-sheets/detail/cryptosporidiosis'
          ]
        },
        prognosis: { mortality: 'Immunocompetent: good; AIDS: high mortality when CD4<100', prognostic_scores: [], factors: 'Resolution of immune status (ART)' }
      },
      {
        id: 'viral_gastroenteritis',
        name: 'Viral Gastroenteritis',
        pathogen: { type: 'Virus', name: '<i>Rotavirus, Norovirus, Adenovirus, Astrovirus</i>', gram: 'RNA/DNA', shape: 'variable' },
        epidemiology: {
          incidence: 'Norovirus: most common epidemic GE (all age groups); Rotavirus: infants (pre-vaccination)',
          risk_groups: ['Infants (Rota)', 'Elderly (Noro)', 'Closed communities (cruise ships, barracks)'],
          seasonality: 'Winter (Rota, Noro)',
          transmission: 'Fecal-oral, aerosol (vomiting - Noro), fomites'
        },
        pathomechanism: {
          steps: [
            'The viruses replicate in the epithelial cells of the small intestinal villi and destroy them.',
            'Shortening of the intestinal villi reduces the absorptive surface and the amount of digestive enzymes.',
            'Unabsorbed nutrients draw water into the intestinal lumen (osmotic diarrhea).'
          ],
          virulence_factors: ['Capsid stability', 'NSP4 (Rota)']
        },
        clinical: {
          incubation: '12-48 hours (Noro), 1-3 days (Rota)',
          onset: 'Sudden',
          symptoms: [
            { name: 'Vomiting', description: 'Sudden-onset, repeated vomiting (especially with Norovirus).', severity: 'severe' },
            { name: 'Watery diarrhea', description: 'Large-volume, watery stools, accompanied by fever and myalgia.', severity: 'moderate' }
          ],
          physical_exam: ['Signs of dehydration (dry tongue, decreased turgor)', 'Diffuse abdominal tenderness'],
          complications: ['Severe dehydration (infants, elderly)', 'Electrolyte disturbances']
        },
        diagnostics: {
          laboratory: [{ test: 'Electrolytes', finding: 'Disturbances', interpretation: 'Dehydration' }, { test: 'Blood count', finding: 'Normal', interpretation: 'Non-bacterial' }],
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
          supportive: ['Oral rehydration (ORS) - essential!', 'Antiemetics (Ondansetron)', 'Probiotics (Lactobacillus GG, S. boulardii)'],
          prevention: ['Rotavirus vaccine (infants)', 'Hand washing (alcohol gel is less effective against Norovirus!)', 'Isolation']
        },
        differential: [
          { disease: 'Bacterial gastroenteritis', distinguishing: 'Fever, bloody stool, culture' },
          { disease: 'Food poisoning (toxin)', distinguishing: 'Shared meal, shorter incubation' },
          { disease: 'Drug side effect', distinguishing: 'History' }
        ],
        guidelines: {
          diagnosis: [
            'Suspicion: symptom complex with vomiting and/or watery diarrhea, frequent outbreaks in closed communities',
            'Lab: primarily assessment of fluid and electrolyte status; viral confirmation by PCR/antigen test for epidemiological purposes'
          ],
          treatment_indications: [
            'Usually only supportive treatment is needed; hospitalization for dehydration, severe vomiting, or in infants/elderly'
          ],
          first_line: ['Oral rehydration with ORS, antiemetic for severe vomiting (ondansetron can also be used in children per local protocol)'],
          supportive: ['Fluid replacement, electrolyte correction, nutrition'],
          prevention: ['Rotavirus vaccination for infants, hand hygiene, isolation during outbreaks; disinfection of fomites for Norovirus']
          ,
          dosing: {
            vaccination: {
              rotavirus: 'Rotavirus vaccine: per local immunization schedule (e.g., Rotarix 2 doses, RotaTeq 3 doses - see vaccination protocol)'
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
        pathogen: { type: 'Bacterium', name: '<i>Vibrio cholerae</i> (O1, O139)', gram: 'Gram-negative', shape: 'curved rod (vibrio)' },
        epidemiology: {
          incidence: 'Endemic (Asia, Africa, Haiti), epidemic',
          risk_groups: ['People living in extreme poverty', 'Victims of natural disasters', 'Travelers (rare)'],
          seasonality: 'Rainy season',
          transmission: 'Fecal-oral (contaminated water/food)'
        },
        pathomechanism: {
          steps: [
            'The bacteria adhere in the small intestine and produce cholera toxin.',
            'The toxin activates the adenylate cyclase enzyme, leading to an increase in cAMP levels.',
            'This causes a massive efflux of chloride ions and water into the intestinal lumen, leading to severe, life-threatening diarrhea.'
          ],
          virulence_factors: ['Cholera toxin (AB5 toxin)', 'Toxin-coregulated pilus (TCP)']
        },
        clinical: {
          incubation: 'A few hours - 5 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Rice-water diarrhea', description: 'Painless, large-volume diarrhea resembling rice water.', severity: 'severe' },
            { name: 'Dehydration', description: 'Rapidly developing severe dehydration, muscle cramps, shock.', severity: 'severe' }
          ],
          physical_exam: [
            'Severe dehydration (hypovolemic shock)',
            'Dry mucous membranes, decreased turgor',
            "Washerwoman's hands (wrinkled skin)",
            'Hypotension, tachycardia',
            'Fever is generally ABSENT'
          ],
          complications: ['Hypovolemic shock', 'Acute kidney injury (ATN)', 'Severe hypokalemia', 'Metabolic acidosis', 'Death (50% if untreated!)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blood count', finding: 'Hemoconcentration', interpretation: 'Dehydration' },
            { test: 'Electrolytes', finding: 'Hypokalemia, acidosis', interpretation: 'Loss' },
            { test: 'Renal function', finding: 'Prerenal failure', interpretation: 'Volume depletion' }
          ],
          microbiology: [
            { test: 'Stool culture', finding: 'TCBS agar (yellow colonies)', significance: 'Gold standard' },
            { test: 'Rapid test (RDT)', finding: 'Crystal VC', significance: 'In outbreaks' },
            { test: 'Dark-field microscopy', finding: 'Shooting-star motility', significance: 'Rapid' }
          ]
        },
        differential: [
          { disease: 'ETEC', distinguishing: 'Travel, less severe' },
          { disease: 'Viral gastroenteritis', distinguishing: 'Vomiting may dominate, less severe dehydration' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycycline', dose: '300mg PO', duration: 'Single dose', note: 'For adults' },
              { drug: 'Azithromycin', dose: '1g PO', duration: 'Single dose', note: 'Pregnant women, children' }
            ]
          },
          targeted: 'Fluid replacement is the most important! Antibiotics are only adjunctive (shorten the illness).',
          supportive: ['ORS (Oral Rehydration Solution) - WHO formula', 'IV Ringer\'s lactate (severe dehydration)'],
          prevention: ['Clean water, hygiene', 'Oral cholera vaccine (Dukoral, Shanchol)']
        },
        guidelines: {
          diagnosis: [
            'Suspicion: large-volume, painless "rice-water" diarrhea; high probability in an epidemic context',
            'Lab: fluid and electrolyte status is critically important; culture on TCBS agar for epidemiological identification'
          ],
          treatment_indications: [
            'Immediate rehydration in every case of severe or large-volume dystrophic diarrhea; antibiotics to shorten the illness in severe cases'
          ],
          first_line: [
            'General: ORS and intravenous volume replacement in severe dehydration',
            'Antibiotics: Doxycycline single 300 mg for adults, or Azithromycin 1 g for pregnant women/children (per local guidelines)'
          ],
          supportive: ['Electrolyte replacement, monitoring (renal, potassium), oxygen and circulatory support as needed'],
          prevention: ['Drinking water and food hygiene, mass vaccination prevention in outbreaks']
          ,
          dosing: {
            adult: {
              doxycycline: '300 mg PO single dose (adults) per most protocols',
              azithromycin: '1 g PO single dose (alternative for pregnant women/children per local protocol)'
            },
            pediatric: 'Pediatric doses are weight-based; pediatric dosing of azithromycin per local guidance'
          },
          references: [
            'WHO – Cholera and acute diarrhoeal disease guidance: https://www.who.int/health-topics/diarrhoeal-diseases',
            'CDC – Cholera: https://www.cdc.gov/cholera/index.html'
          ]
        },
        prognosis: { mortality: '<1% with treatment, 50% untreated', prognostic_scores: [], factors: 'Age, comorbidity' }
      },
      {
        id: 'travelers_diarrhea',
        name: "Traveler's Diarrhea",
        pathogen: { type: 'Syndrome', name: '<i>ETEC</i> (most common), <i>Campylobacter, Salmonella, Shigella</i>, Viruses', gram: 'Variable', shape: '-' },
        epidemiology: {
          incidence: '20-60% of travelers (to developing countries)',
          risk_groups: ['Young adults', 'Immunosuppressed patients', 'PPI users'],
          seasonality: 'None',
          transmission: 'Fecal-oral (food, water)'
        },
        pathomechanism: {
          steps: [
            'The infection is most commonly caused by enterotoxin-producing E. coli (ETEC) or invasive bacteria (Campylobacter, Shigella).',
            'The pathogens trigger inflammation or fluid secretion in travelers who encounter a microbiome different from local hygienic conditions.'
          ],
          virulence_factors: ['Variable']
        },
        clinical: {
          incubation: 'During travel or after returning home',
          onset: 'Acute',
          symptoms: [
            { name: 'Diarrhea', description: 'Watery diarrhea with abdominal cramps occurring during or after travel.', severity: 'moderate' },
            { name: 'Fever', description: 'Fever and bloody stool suggest an invasive pathogen.', severity: 'moderate' }
          ],
          physical_exam: ['Mild abdominal tenderness', 'Signs of dehydration'],
          complications: ['Dehydration', 'Post-infectious IBS', 'Reactive arthritis']
        },
        diagnostics: {
          laboratory: [{ test: '-', finding: '-', interpretation: 'Generally not necessary' }],
          microbiology: [{ test: 'Stool culture/PCR', finding: 'Multiplex panel', significance: 'Only in persistent/severe cases or in immunosuppressed patients' }]
        },
        differential: [
          { disease: 'IBD flare', distinguishing: 'History, endoscopy' },
          { disease: 'Giardiasis', distinguishing: 'Prolonged, greasy stool' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Azithromycin', dose: '1000mg PO once or 500mg for 3 days', duration: '', note: 'Southeast Asia (Campylobacter resistance) or in dysentery' },
              { drug: 'Rifaximin', dose: '200mg PO BID', duration: '3 days', note: 'In non-invasive (afebrile) cases' },
              { drug: 'Ciprofloxacin', dose: '500mg PO BID', duration: '1-3 days', note: 'Other regions (but resistance is rising)' }
            ]
          },
          targeted: '-',
          supportive: ['Fluid replacement', 'Loperamide (only if no fever/bloody stool!)'],
          prevention: ['"Boil it, cook it, peel it or forget it"', 'Hand washing', 'Rifaximin prophylaxis (only in high-risk cases)']
        },
        guidelines: {
          diagnosis: [
            'Suspicion: acute diarrhea after or during travel; microbiological testing is usually unnecessary in mild cases',
            'In severe, persistent, or febrile cases, stool culture/PCR multiplex panel is recommended'
          ],
          treatment_indications: [
            'Mild case: rehydration and symptomatic treatment only',
            'Severe, febrile case with dysentery, or immunosuppressed patient: antibiotic treatment recommended'
          ],
          first_line: [
            'In non-invasive (afebrile) cases: Rifaximin 200 mg 2x/day for 3 days',
            'With dysentery or in Southeast Asia: Azithromycin 1 g single dose or 500 mg for 3 days'
          ],
          supportive: ['ORS, loperamide only if no fever/bloody stool, electrolyte replacement'],
          prevention: ['Food and water safety during travel; prophylaxis only in exceptional cases']
          ,
          dosing: {
            adult: {
              rifaximin: "200 mg PO 3x/day for 3 days (non-invasive traveler's diarrhea)",
              azithromycin: '1 g PO single dose (alternative) or 500 mg PO daily for 3 days'
            },
            pediatric: 'Pediatric doses depend on weight and age; consult local pediatric protocol'
          },
          references: [
            "CDC – Traveler's Health: Traveler's Diarrhea: https://wwwnc.cdc.gov/travel/yellowbook/2024/infectious-diseases-related-to-travel/traveler-s-diarrhea",
            'WHO – Management of diarrhoea: https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease'
          ]
        },
        prognosis: { mortality: 'Very low', prognostic_scores: [], factors: 'Age, immune status' }
      },
      {
        id: 'dysentery_syndrome',
        name: 'Dysentery Syndrome',
        pathogen: { type: 'Syndrome', name: '<i>Shigella, EIEC, EHEC, Campylobacter, Entamoeba, Salmonella</i>', gram: 'Variable', shape: '-' },
        epidemiology: {
          incidence: 'Variable',
          risk_groups: ['Children', 'Elderly', 'Immunosuppressed patients'],
          transmission: 'Fecal-oral'
        },
        pathomechanism: {
          steps: [
            'The pathogens (Shigella, EIEC, EHEC, Campylobacter, Entamoeba) invade the colonic mucosa.',
            'Tissue invasion causes severe inflammation, ulceration, bleeding and mucus production.'
          ],
          virulence_factors: ['Invasins', 'Cytotoxins']
        },
        clinical: {
          incubation: 'Variable',
          onset: 'Acute',
          symptoms: [
            { name: 'Bloody-mucoid diarrhea', description: 'Frequent, small-volume, bloody-mucoid stools.', severity: 'severe' },
            { name: 'Tenesmus', description: 'Painful, ineffective urge to defecate.', severity: 'severe' }
          ],
          physical_exam: ['Lower abdominal tenderness', 'Fever', 'Toxic state'],
          complications: ['HUS (EHEC/Shigella)', 'Toxic megacolon', 'Perforation', 'Sepsis', 'Rectal prolapse']
        },
        diagnostics: {
          laboratory: [{ test: 'Blood count', finding: 'Leukocytosis', interpretation: 'Inflammation' }],
          microbiology: [
            { test: 'Stool culture', finding: 'Pathogen identification', significance: 'Mandatory!' },
            { test: 'Parasite exam', finding: 'E. histolytica', significance: 'If culture is negative' },
            { test: 'Shiga toxin', finding: 'Positive', significance: 'EHEC/Shigella' }
          ]
        },
        differential: [
          { disease: 'Shigellosis', distinguishing: 'EIEC clinically identical, culture decides' },
          { disease: 'Campylobacteriosis', distinguishing: 'Culture, GBS risk' },
          { disease: 'TTP', distinguishing: 'Adults, neurological symptoms, ADAMTS13' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Azithromycin', dose: '500mg PO once daily', duration: '3 days', note: 'First choice' },
              { drug: 'Ciprofloxacin', dose: '500mg PO BID', duration: '3-5 days', note: 'Alternative (resistance?)' }
            ]
          },
          targeted: 'Based on culture. AB contraindicated in EHEC! Amoeba: Metronidazole.',
          supportive: ['Fluid replacement', 'Antimotility agents (Loperamide) ARE CONTRAINDICATED!'],
          prevention: ['Hygiene', 'Isolation']
        },
        guidelines: {
          diagnosis: [
            'Suspicion: bloody-mucoid diarrhea, tenesmus; must differentiate between EHEC, Shigella, Entamoeba, Campylobacter',
            'Mandatory: stool culture, Shiga toxin test and parasite exam based on epidemiological/clinical indication'
          ],
          treatment_indications: [
            'Antibiotics recommended for severe invasive infection, epidemiological control and risk groups (infants, elderly, immunosuppressed)',
            'AB generally contraindicated in EHEC or confirmed Shiga toxin-positive cases (increases HUS risk)'
          ],
          first_line: [
            'Shigella: Azithromycin or Ceftriaxone; Campylobacter: Azithromycin; invasive Salmonella: Ceftriaxone or ciprofloxacin (taking resistance into account)'
          ],
          supportive: ['ORS, continuous monitoring in severe cases; avoid antimotility agents in dysentery'],
          prevention: ['Hand hygiene, food hygiene; contact isolation and public health measures during outbreaks']
        },
        prognosis: { mortality: 'Variable, more severe with EHEC/S. dysenteriae 1', prognostic_scores: [], factors: 'Age, pathogen type' }
      }
    ]
  },
  viral_hepatitis: {
    name: 'Viral Hepatitis',
    icon: window.diseaseMetadata.viral_hepatitis.icon,
    color: window.diseaseMetadata.viral_hepatitis.color,
    tables: [
      {
        title: 'Differential Diagnosis of Viral Hepatitis',
        headers: ['Virus', 'Transmission', 'Incubation', 'Chronicity', 'Key serology', 'Key features'],
        rows: [
          ['HAV', 'Fecal-oral', '2-6 weeks', 'No', 'Anti-HAV IgM', 'Acute, epidemic, travel-related'],
          ['HBV', 'Parenteral, sexual', '2-6 months', 'Yes (mainly perinatal)', 'HBsAg, Anti-HBc IgM', 'Chronic liver disease, HCC risk'],
          ['HCV', 'Parenteral', '2-26 weeks', 'Yes (>70%)', 'Anti-HCV, HCV RNA', 'Chronic, curable (DAA), extrahepatic manifestations'],
          ['HDV', 'Parenteral (with HBV)', 'Variable', 'Yes (superinfection)', 'Anti-HDV (in HBsAg+ patient)', 'Worsens HBV, rapid progression to cirrhosis'],
          ['HEV', 'Fecal-oral (G1,2), Zoonotic (G3,4)', '2-10 weeks', 'Yes (immunosuppressed)', 'Anti-HEV IgM, HEV RNA', 'Fulminant in pregnant women, pork-related']
        ]
      },
      {
        title: 'Interpretation of Hepatitis B Serological Patterns',
        headers: ['HBsAg', 'Anti-HBs', 'Anti-HBc (Total)', 'Anti-HBc IgM', 'Interpretation'],
        rows: [
          ['-', '-', '-', '-', 'Susceptible (not infected, not protected)'],
          ['-', '+', '-', '-', 'Protected (due to vaccination)'],
          ['-', '+', '+', '-', 'Resolved infection (natural immunity)'],
          ['+', '-', '+', '+', 'Acute infection'],
          ['+', '-', '+', '-', 'Chronic infection'],
          ['-', '-', '+', '-', 'Possible: 1. Resolved infection (low Anti-HBs); 2. False positive; 3. Occult HBV; 4. Window period']
        ]
      },
      {
        title: 'Meaning of Hepatitis Serological Markers',
        headers: ['Marker', 'Virus', 'Meaning'],
        rows: [
          ['Anti-HAV IgM', 'HAV', 'Acute infection'],
          ['Anti-HAV IgG', 'HAV', 'Protection (vaccination or past infection)'],
          ['HBsAg', 'HBV', 'Presence of infection (acute or chronic)'],
          ['Anti-HBs', 'HBV', 'Immunity (vaccination or recovery)'],
          ['Anti-HBc IgM', 'HBV', 'Acute infection (also during window period)'],
          ['Anti-HBc (Total)', 'HBV', 'Past or current infection'],
          ['HBeAg', 'HBV', 'High replication, infectivity'],
          ['Anti-HBe', 'HBV', 'Lower replication (seroconversion)'],
          ['HBV DNA', 'HBV', 'Degree of viral replication'],
          ['Anti-HCV', 'HCV', 'Exposure (not necessarily active)'],
          ['HCV RNA', 'HCV', 'Active infection'],
          ['Anti-HDV', 'HDV', 'HDV infection (only with HBV)'],
          ['Anti-HEV IgM', 'HEV', 'Acute infection']
        ]
      }
    ],
    diseases: [
      {
        id: 'hav',
        name: 'Hepatitis A',
        pathogen: { type: 'Virus', name: '<i>Hepatitis A virus</i> (HAV)', gram: 'ssRNA, Picornaviridae', shape: 'icosahedral' },
        epidemiology: {
          incidence: 'High in endemic areas, sporadic/epidemic in developed countries',
          risk_groups: ['Travelers', 'MSM', 'Intravenous drug users', 'Homeless individuals'],
          seasonality: 'None',
          transmission: 'Fecal-oral (contaminated water, food), sexual (oral-anal)'
        },
        pathomechanism: {
          steps: [
            'Oral entry: After absorption from the intestinal tract, the virus reaches the liver via the portal circulation.',
            'Hepatocyte infection: The virus enters liver cells via the HAVCR-1 receptor, where it replicates in the cytoplasm, but does not cause direct cell death (non-cytopathic).',
            'Immune response: Liver cell damage is caused by the body\'s own cellular immune response (CD8+ cytotoxic T cells and NK cells), which destroy the infected hepatocytes.',
            'Shedding: The virus is shed into the stool via bile, already before the onset of symptoms.'
          ],
          virulence_factors: ['Capsid stability (acid-resistant)', 'Membrane envelope in blood (eHAV) - immune evasion']
        },
        clinical: {
          incubation: '15-50 days (average 28 days)',
          onset: 'Sudden',
          symptoms: [
            { name: 'Prodrome', description: 'Flu-like symptoms (fever, headache, myalgia), loss of appetite, aversion to tobacco smoke/fatty foods.', severity: 'moderate' },
            { name: 'Icteric phase', description: 'Dark urine (bilirubinuria), light-colored stool, then jaundice (skin, sclera). The fever often resolves by this point.', severity: 'moderate' },
            { name: 'Abdominal complaints', description: 'Dull pain in the right upper quadrant, hepatomegaly, nausea.', severity: 'mild' }
          ],
          physical_exam: [
            'Icterus (sclera, skin)',
            'Hepatomegaly, tender liver',
            'Splenomegaly (rare)',
            'Exanthema (rare)'
          ],
          complications: ['Fulminant hepatitis (<1%, more common in the elderly)', 'Cholestatic hepatitis (prolonged)', 'Relapse (3-20%)', 'NO chronic carriage']
        },
        diagnostics: {
          laboratory: [
            { test: 'Liver enzymes', finding: 'ALT/AST >1000 U/L', interpretation: 'Acute hepatocellular necrosis' },
            { test: 'Bilirubin', finding: 'Elevated (direct and indirect)', interpretation: 'Icterus' },
            { test: 'ALP/GGT', finding: 'Moderately elevated', interpretation: 'Higher in case of cholestasis' }
          ],
          imaging: [
            { modality: 'Abdominal ultrasound', finding: 'Hepatomegaly, gallbladder wall thickening', significance: 'Non-specific' }
          ],
          microbiology: [
            { test: 'Anti-HAV IgM', finding: 'Positive', significance: 'Diagnosis of acute infection (remains + for 3-6 months)' },
            { test: 'Anti-HAV IgG', finding: 'Positive', significance: 'Protection (vaccination or past infection)' },
            { test: 'HAV RNA (PCR)', finding: 'Positive', significance: 'Viremia (rarely needed)' }
          ]
        },
        differential: [
          { disease: 'Other viral hepatitides (HBV, HCV, HEV)', distinguishing: 'Serology (HBsAg, Anti-HCV, Anti-HEV)' },
          { disease: 'Toxic/Drug-induced hepatitis', distinguishing: 'History (acetaminophen, mushrooms), toxicology' },
          { disease: 'Biliary obstruction (Choledocholithiasis)', distinguishing: 'Abdominal ultrasound (dilated bile ducts), ALP/GGT dominance, colic' },
          { disease: 'EBV/CMV mononucleosis', distinguishing: 'Sore throat, lymphadenopathy, monospot/serology' },
          { disease: 'Autoimmune hepatitis', distinguishing: 'Autoantibodies (ANA, ASMA), elevated IgG' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Supportive', dose: '-', duration: '-', note: 'Rest, adequate calories, alcohol prohibition' }
            ],
            inpatient: [
              { drug: 'Supportive', dose: '-', duration: '-', note: 'In case of severe vomiting, dehydration or coagulopathy' }
            ],
            icu: [
              { drug: 'Liver transplantation', dose: 'Listing', duration: '', note: 'In case of fulminant liver failure' }
            ]
          },
          targeted: 'No specific antiviral agent.',
          supportive: ['Fluid replacement', 'Antiemetics', 'Avoidance of alcohol and hepatotoxic agents'],
          prevention: ['Vaccination (inactivated, 2 doses)', 'Hygiene (hand washing)', 'Post-exposure prophylaxis (vaccine or IG within 2 weeks)']
        },
        guidelines: {
          diagnosis: [
            'Suspicion of acute hepatitis: liver enzymes (ALT/AST), bilirubin, ALP/GGT, INR',
            'Positive Anti-HAV IgM confirms acute HAV infection; if early window period is suspected, repeat testing or HAV RNA (PCR) is recommended',
            'In case of severe liver dysfunction, coagulation parameters and transplant consultation'
          ],
          treatment_indications: [
            'Essentially supportive treatment. Hospitalization for severe dehydration, coagulopathy or fulminant liver damage',
            'Evaluation for liver transplantation based on King\'s College criteria in fulminant cases'
          ],
          post_exposure: [
            'Administer vaccine within 2 weeks of exposure (if not previously vaccinated) or immunoglobulin (IG) in certain cases (elderly, immunosuppressed, chronic liver disease patients)'
          ],
          prevention: [
            'Vaccination: 2 doses (0 and 6-12 months), prior vaccination 2 weeks before travel is optimal',
            'Hygiene, drinking water and food safety'
          ],
          special_populations: [
            'Pregnancy: HAV is generally not more severe in pregnant women, but vaccination and post-exposure IG should be considered',
            'Immunodeficient patients: vaccination may be less effective, close follow-up recommended'
          ]
        },
        prognosis: {
          mortality: 'Low (<0.1%), but 1.8% over age 50',
          prognostic_scores: ["King's College criteria (fulminant)"],
          factors: 'Age, underlying liver disease'
        },
        references: [
          'WHO. Hepatitis A fact sheet.',
          'CDC Yellow Book: Hepatitis A.'
        ],
        gallery: [
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>1 mo</text><text x='350' y='370' class='txt'>3 mo</text><text x='500' y='370' class='txt'>6 mo</text><text x='650' y='370' class='txt'>1 yr</text><text x='350' y='390' class='txt' text-anchor='middle'>Time since infection</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q150,50 250,50 Q350,50 450,350' fill='none' stroke='purple' stroke-width='3' /><text x='200' y='40' class='txt' fill='purple'>Anti-HAV IgM</text><path d='M150,350 Q250,100 350,100 L750,100' fill='none' stroke='green' stroke-width='3' /><text x='600' y='90' class='txt' fill='green'>Anti-HAV IgG</text><path d='M50,350 Q100,200 150,200 Q200,200 220,350' fill='none' stroke='red' stroke-width='3' stroke-dasharray='5,5' /><text x='80' y='190' class='txt' fill='red'>Virus (stool)</text><path d='M100,350 Q180,150 220,150 Q260,150 300,350' fill='none' stroke='orange' stroke-width='2' /><text x='180' y='140' class='txt' fill='orange'>ALT (Symptoms)</text></svg>",
            caption: 'Serological course of Hepatitis A',
            type: 'Diagram'
          }
        ]
      },
      {
        id: 'hbv',
        name: 'Hepatitis B',
        pathogen: { type: 'Virus', name: '<i>Hepatitis B virus</i> (HBV)', gram: 'dsDNA (RT), Hepadnaviridae', shape: 'spherical (Dane particle)' },
        epidemiology: {
          incidence: '290 million chronic carriers worldwide',
          risk_groups: ['IV drug users', 'Sexual partners', 'Healthcare workers', 'Dialysis patients', 'Perinatal (mother-to-child)'],
          seasonality: 'None',
          transmission: 'Parenteral (blood), sexual, perinatal'
        },
        pathomechanism: {
          steps: [
            'Entry and Replication: The virus enters liver cells from the bloodstream via the NTCP receptor. In the nucleus, it forms cccDNA (covalently closed circular DNA), which is the basis of persistence.',
            'Immunopathogenesis: The virus itself is not cytopathic. Liver damage is caused by the cytotoxic T-cell immune response directed against the infected cells.',
            'Chronicity: If the immune response is not strong enough (e.g., in newborns), the virus persists. The viral DNA can integrate into the host cell genome, increasing the risk of hepatocellular carcinoma (HCC).'
          ],
          virulence_factors: ['HBsAg (decoy)', 'HBeAg (immune tolerance)', 'X protein (transactivator)']
        },
        clinical: {
          incubation: '45-160 days (average 90 days)',
          onset: 'Slow',
          symptoms: [
            { name: 'Acute phase', description: 'Often asymptomatic. If symptomatic: serum sickness-like prodrome (rash, joint pain), then jaundice, fatigue, right upper quadrant pain.', severity: 'moderate' },
            { name: 'Chronic phase', description: 'Mostly asymptomatic ("silent killer"). In late stages, signs of liver cirrhosis dominate (ascites, variceal bleeding, encephalopathy).', severity: 'mild' },
            { name: 'Extrahepatic symptoms', description: 'Polyarteritis nodosa, glomerulonephritis.', severity: 'moderate' }
          ],
          physical_exam: [
            'Hepatomegaly',
            'Splenomegaly',
            'Spider angiomas, palmar erythema (chronic/cirrhosis)',
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
            { test: 'Anti-HBs', finding: 'Positive', significance: 'Protection (vaccination or recovery)' },
            { test: 'Anti-HBc IgM', finding: 'Positive', significance: 'Acute infection (important in the window period!)' },
            { test: 'Anti-HBc IgG', finding: 'Positive', significance: 'Past or chronic infection' },
            { test: 'HBeAg', finding: 'Positive', significance: 'High replication and infectivity' },
            { test: 'HBV DNA', finding: 'Positive', significance: 'Degree of viral replication (therapy monitoring)' }
          ],
        differential: [
          { disease: 'Other viral hepatitides (HAV, HCV, HDV)', distinguishing: 'Serology (Anti-HAV IgM, Anti-HCV, Anti-HDV)' },
          { disease: 'Autoimmune hepatitis', distinguishing: 'Autoantibodies (ANA, ASMA, LKM-1), hypergammaglobulinemia' },
          { disease: 'Alcoholic liver disease', distinguishing: 'History, AST > ALT (2:1 ratio), elevated GGT' },
          { disease: 'Drug-induced liver injury (DILI)', distinguishing: 'Medication history, improvement after discontinuation' },
          { disease: "Wilson's disease", distinguishing: 'Young age, low ceruloplasmin, Kayser-Fleischer ring' }
        ],
        therapy: {
          guidelines: ['EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection'],
          empirical: {
            outpatient: [
              { drug: 'Entecavir', dose: '0.5 mg PO once daily', duration: 'Long-term', note: 'Nucleoside analog. 1 mg in case of lamivudine resistance.' },
              { drug: 'Tenofovir disoproxil (TDF)', dose: '300 mg PO once daily', duration: 'Long-term', note: 'Nucleotide analog. Renal function and bone density monitoring required.' },
              { drug: 'Tenofovir alafenamide (TAF)', dose: '25 mg PO once daily', duration: 'Long-term', note: 'Preferred if there is a risk of bone/kidney disease.' }
            ],
            inpatient: [
              { drug: 'Tenofovir (TDF/TAF) or Entecavir', dose: 'Standard', duration: '', note: 'Should be started immediately in severe acute hepatitis or acute liver failure.' }
            ]
          },
          targeted: 'Chronic HBV: Lifelong NA (Entecavir, TDF, TAF) to suppress viral replication. Finite-duration treatment: Peg-IFN alfa (48 weeks) in selected patients.',
          supportive: ['HCC screening (ultrasound every 6 months)', 'Vaccination against HAV', 'Screening of family members'],
          prevention: ['Vaccination (recombinant HBsAg, 0-1-6 months)', 'Screening in pregnancy', 'HBIG + vaccine for newborns (≤12 hours; continue vaccination series)']
        },
        guidelines: {
          definitions: [
            'Acute HBV: HBsAg positive and Anti-HBc IgM positive.',
            'Chronic HBV: HBsAg positive >6 months.',
            'Resolved (Past infection): HBsAg negative, Anti-HBc (Total) positive, Anti-HBs positive.',
            'Vaccinated: Only Anti-HBs positive (everything else negative).',
            'Inactive carrier: HBsAg+, HBeAg-, Anti-HBe+, normal ALT, low HBV DNA.',
            'Seroconversion: Disappearance of antigen and appearance of antibody (e.g., HBeAg → Anti-HBe).',
            'Treatment indication: Chronic hepatitis (elevated ALT + HBV DNA >2000 IU/ml + fibrosis) OR Cirrhosis.'
          ],
          diagnosis: [
            'Initial testing: HBsAg, Anti-HBs, Anti-HBc (IgM/IgG), HBeAg/Anti-HBe, HBV DNA (quantitative)',
            'Fibrosis assessment: FibroScan or serum markers (FIB-4)'
          ],
          treatment_indications: [
            'Every cirrhotic patient should be treated',
            'HBeAg-positive or -negative chronic hepatitis (ALT > ULN, DNA > 2000 IU/ml, F2+ fibrosis)',
            'HBsAg+ patients before immunosuppression (prophylaxis)'
          ],
          first_line: [
            'Entecavir, TDF, TAF (high resistance-barrier NAs)',
            'Peg-IFN alfa (48 weeks) - alternative for mild/moderate fibrosis'
          ],
          special_populations: [
            'Pregnancy: Give TDF from week 24-28 if HBV DNA >200,000 IU/ml',
            'Renal failure: TAF or Entecavir (dose reduction)',
            'HDV coinfection: Peg-IFN or Bulevirtide'
          ],
          monitoring: [
            'During NA treatment: ALT and HBV DNA every 3-6 months',
            'HCC screening with ultrasound ± AFP every 6 months in cirrhotic patients'
          ]
        },
        prognosis: {
          mortality: 'Acute: <1%; Chronic: significant due to cirrhosis/HCC',
          prognostic_scores: ['PAGE-B (HCC risk)'],
          factors: 'HBeAg status, viral load, genotype, coinfections'
        },
        gallery: [
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>4 wk</text><text x='350' y='370' class='txt'>8 wk</text><text x='500' y='370' class='txt'>6 mo</text><text x='650' y='370' class='txt'>12 mo</text><text x='350' y='390' class='txt' text-anchor='middle'>Time since infection</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q100,50 150,50 Q200,50 250,350' fill='none' stroke='red' stroke-width='3' /><text x='120' y='40' class='txt' fill='red'>HBsAg</text><path d='M60,350 Q100,100 140,100 Q180,100 220,350' fill='none' stroke='orange' stroke-width='3' stroke-dasharray='5,5' /><text x='140' y='90' class='txt' fill='orange'>HBeAg</text><path d='M80,350 Q150,80 200,80 Q300,80 350,350' fill='none' stroke='purple' stroke-width='3' /><text x='200' y='70' class='txt' fill='purple'>Anti-HBc IgM</text><path d='M80,350 Q150,120 200,120 L750,120' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='110' class='txt' fill='blue'>Anti-HBc Total</text><path d='M280,350 Q350,150 400,150 L750,150' fill='none' stroke='green' stroke-width='3' /><text x='600' y='140' class='txt' fill='green'>Anti-HBs</text><path d='M240,350 Q300,200 350,200 L750,200' fill='none' stroke='%23b45309' stroke-width='3' stroke-dasharray='5,5' /><text x='600' y='190' class='txt' fill='%23b45309'>Anti-HBe</text><text x='265' y='300' class='txt' font-size='12' fill='gray'>Window period</text></svg>",
            caption: 'Serological course of acute HBV infection (Recovery)',
            type: 'Diagram'
          },
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>6 mo</text><text x='350' y='370' class='txt'>1 yr</text><text x='500' y='370' class='txt'>Years...</text><text x='350' y='390' class='txt' text-anchor='middle'>Time since infection</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q80,50 150,50 L750,50' fill='none' stroke='red' stroke-width='3' /><text x='600' y='40' class='txt' fill='red'>HBsAg (Persists)</text><path d='M60,350 Q90,100 150,100 L400,100 Q450,100 500,350' fill='none' stroke='orange' stroke-width='3' stroke-dasharray='5,5' /><text x='200' y='90' class='txt' fill='orange'>HBeAg</text><path d='M80,350 Q120,80 180,80 Q250,80 300,350' fill='none' stroke='purple' stroke-width='3' /><text x='150' y='70' class='txt' fill='purple'>Anti-HBc IgM</text><path d='M80,350 Q120,120 180,120 L750,120' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='110' class='txt' fill='blue'>Anti-HBc Total</text><path d='M450,350 Q500,200 550,200 L750,200' fill='none' stroke='%23b45309' stroke-width='3' stroke-dasharray='5,5' /><text x='600' y='190' class='txt' fill='%23b45309'>Anti-HBe (Late)</text><text x='400' y='300' class='txt' font-size='12' fill='gray'>No Anti-HBs!</text></svg>",
            caption: 'Serological course of chronic HBV infection',
            type: 'Diagram'
          }
        ],
        references: [
          'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2017;67(2):370-398. doi:10.1016/j.jhep.2017.03.021',
          'WHO Guidelines for the Prevention, Care and Treatment of Persons with Chronic Hepatitis B Infection. 2015.'
        ]
        }
      },
      {
        id: 'hcv',
        name: 'Hepatitis C',
        pathogen: { type: 'Virus', name: '<i>Hepatitis C virus</i> (HCV)', gram: 'ssRNA, Flaviviridae', shape: 'spherical, enveloped' },
        epidemiology: {
          incidence: '71 million chronic patients worldwide',
          risk_groups: ['IV drug users', 'Transfusion (before 1992)', 'Tattoos/piercings', 'Healthcare workers (needlestick)'],
          seasonality: 'None',
          transmission: 'Parenteral (blood), sexual (rare, higher in MSM), perinatal'
        },
        pathomechanism: {
          steps: [
            'Replication: The virus replicates in the cytoplasm of hepatocytes (no nuclear phase, which is why it is curable).',
            'Immune evasion: The viral RNA polymerase is error-prone, so the virus continuously mutates (quasispecies), evading recognition by the immune system.',
            'Fibrosis: Chronic inflammation activates stellate cells, which produce collagen, leading to liver fibrosis and then cirrhosis.'
          ],
          virulence_factors: ['NS3/4A protease', 'NS5A/B polymerase', 'Modulation of lipid metabolism']
        },
        clinical: {
          incubation: '14-180 days',
          onset: 'Slow/Asymptomatic',
          symptoms: [
            { name: 'Acute phase', description: 'Rarely diagnosed (80% asymptomatic). Mild fatigue, loss of appetite may occur.', severity: 'mild' },
            { name: 'Chronic phase', description: 'Can be asymptomatic for decades. The leading symptom is chronic fatigue. Often only the complications of cirrhosis or abnormal lab results draw attention to it.', severity: 'moderate' },
            { name: 'Extrahepatic symptoms', description: 'Cryoglobulinemia (vasculitis), porphyria cutanea tarda, lichen planus, diabetes.', severity: 'moderate' }
          ],
          physical_exam: [
            'Often negative',
            'Signs of cirrhosis in late stage'
          ],
          complications: ['Chronic hepatitis (70-80%!)', 'Cirrhosis (20-30% within 20 years)', 'HCC', 'Extrahepatic: Cryoglobulinemia, Porphyria cutanea tarda, Lichen planus, Diabetes']
        },
        diagnostics: {
          laboratory: [
            { test: 'ALT', finding: 'Fluctuating elevation', interpretation: 'Chronic inflammation' }
          ],
          microbiology: [
            { test: 'Anti-HCV', finding: 'Positive', significance: 'Exposure (not necessarily active infection)' },
            { test: 'HCV RNA', finding: 'Positive', significance: 'Active infection (confirmation required!)' },
            { test: 'Genotyping', finding: '1-6', significance: 'Therapy selection (although pangenotypic agents now dominate)' }
          ]
        },
        differential: [
          { disease: 'Hepatitis B', distinguishing: 'HBsAg positive' },
          { disease: 'Alcoholic liver disease', distinguishing: 'History, AST > ALT, macrocytosis' },
          { disease: 'Non-alcoholic fatty liver disease (NAFLD/NASH)', distinguishing: 'Metabolic syndrome, ultrasound (steatosis), biopsy' },
          { disease: 'Autoimmune hepatitis', distinguishing: 'Autoantibodies, histology (plasma cell infiltration)' },
          { disease: 'Hemochromatosis', distinguishing: 'High ferritin, transferrin saturation, HFE gene mutation' }
        ],
        therapy: {
          guidelines: ['EASL Recommendations on Treatment of Hepatitis C 2020'],
          empirical: {
            outpatient: [
              { drug: 'Glecaprevir / Pibrentasvir (Maviret)', dose: '3 tabs (300/120mg) PO once daily', duration: '8 weeks', note: 'Pangenotypic. 8 weeks both without cirrhosis and in compensated cirrhosis.' },
              { drug: 'Sofosbuvir / Velpatasvir (Epclusa)', dose: '1 tab (400/100mg) PO once daily', duration: '12 weeks', note: 'Pangenotypic. Can also be given in decompensated cirrhosis (with RBV).' }
            ]
          },
          targeted: 'Pangenotypic DAA treatment for every patient (Simplified treatment). Genotyping is not necessarily required to start treatment (except in cirrhosis/previous treatment failure).',
          supportive: ['Checking drug interactions (www.hep-druginteractions.org)', 'Alcohol prohibition'],
          prevention: ['No vaccine', 'Screening of blood products', 'Harm reduction (needle exchange)', 'Safe sex']
        },
        guidelines: {
          diagnosis: [
            'Screening: Anti-HCV serology (ELISA) in every risk group and at blood donation',
            'HCV RNA positive = Active infection -> Treatment'
          ],
          treatment_indications: [
            'Every chronic HCV-infected patient should be treated, except patients with short life expectancy or pregnancy',
            'Special priority: cirrhosis, extrahepatic manifestations, transplant candidates'
          ],
          first_line: [
            'Glecaprevir/Pibrentasvir (8 weeks)',
            'Sofosbuvir/Velpatasvir (12 weeks)'
          ],
          monitoring: [
            'SVR12 (Sustained Virologic Response): HCV RNA negative 12 weeks after treatment = Cure',
            'Continue HCC screening even after SVR in case of cirrhosis!'
          ],
          special_populations: [
            'Decompensated cirrhosis: Protease inhibitors (Glecaprevir, Grazoprevir) ARE CONTRAINDICATED! Sof/Vel + Ribavirin can be given.'
          ]
        },
        prognosis: {
          mortality: 'Excellent with treatment (SVR = cure), worse in cirrhosis',
          factors: 'Stage of fibrosis, coinfection (HIV/HBV), alcohol'
        },
        references: [
          'EASL Recommendations on Treatment of Hepatitis C (2020 update).',
          'WHO. Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C virus infection.'
        ],
        gallery: [
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='150' y='370' class='txt'>2 mo</text><text x='250' y='370' class='txt'>6 mo</text><text x='450' y='370' class='txt'>1 yr</text><text x='650' y='370' class='txt'>Years...</text><text x='350' y='390' class='txt' text-anchor='middle'>Time since infection</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q80,50 150,50 L750,50' fill='none' stroke='red' stroke-width='3' /><text x='600' y='40' class='txt' fill='red'>HCV RNA</text><path d='M100,350 Q200,100 300,100 L750,100' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='90' class='txt' fill='blue'>Anti-HCV</text><path d='M100,350 Q150,150 200,250 T300,200 T400,250 T500,200 T600,250 T700,200' fill='none' stroke='orange' stroke-width='2' /><text x='600' y='190' class='txt' fill='orange'>ALT (Fluctuating)</text></svg>",
            caption: 'Serological course of chronic Hepatitis C',
            type: 'Diagram'
          }
        ]
      },
      {
        id: 'hdv',
        name: 'Hepatitis D',
        pathogen: { type: 'Virus', name: '<i>Hepatitis D virus</i> (HDV)', gram: 'ssRNA (defective)', shape: 'enveloped in HBsAg' },
        epidemiology: {
          incidence: '5% of HBV-infected individuals (approx. 15-20 million)',
          seasonality: 'None',
          risk_groups: ['HBV-infected individuals', 'IV drug users', 'Sexual partners', 'Healthcare workers'],
          transmission: 'Parenteral, sexual (like HBV). Only infects in the presence of HBV!'
        },
        pathomechanism: {
          steps: [
            'Defective virus: It requires the surface antigen of the Hepatitis B virus (HBsAg) for replication and the formation of infectious particles.',
            'Coinfection: HBV and HDV infect simultaneously. Generally causes severe acute hepatitis, but progression to chronicity is rare (<5%).',
            'Superinfection: A chronic HBV carrier becomes infected with HDV. This is the most severe form, often resulting in a fulminant course or rapidly progressing to cirrhosis.'
          ],
          virulence_factors: ['Delta antigen (HDAg)']
        },
        clinical: {
          incubation: '30-60 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Worsening', description: 'Sudden deterioration in the condition of a known HBV patient (acute flare).', severity: 'severe' },
            { name: 'Decompensation', description: 'Rapidly developing liver failure, jaundice, coagulopathy.', severity: 'severe' }
          ],
          complications: ['Fulminant hepatitis', 'Rapid progression to cirrhosis (most aggressive viral hepatitis)']
        },
        diagnostics: {
          laboratory: [
            { test: 'ALT/AST', finding: 'Elevated', interpretation: 'Acute flare' }
          ],
          microbiology: [
            { test: 'Anti-HDV', finding: 'Positive', significance: 'Screening in every HBV patient' },
            { test: 'HDV RNA', finding: 'Positive', significance: 'Active replication' }
          ]
        },
        differential: [
          { disease: 'HBV coinfection', distinguishing: 'HDV RNA positive, Anti-HDV positive' },
          { disease: 'Acute HBV flare', distinguishing: 'HDV RNA negative, Anti-HDV negative' }
        ],
        therapy: {
          guidelines: ['EASL Clinical Practice Guidelines on hepatitis delta virus 2023'],
          empirical: {
            outpatient: [
              { drug: 'Bulevirtide', dose: '2 mg SC daily', duration: 'Long-term', note: 'Entry inhibitor. Monotherapy or combination with Peg-IFN. (Conditional approval)' },
              { drug: 'Peg-IFN alfa', dose: '180 mcg SC weekly', duration: '48 weeks', note: 'Alternative, but low sustained response rate.' }
            ]
          },
          targeted: 'Bulevirtide (long-term maintenance therapy) or Peg-IFN (48 weeks). Nucleoside analogs (against HBV) should be continued, but do not act directly against HDV.',
          prevention: ['HBV vaccination also protects against HDV (since it requires HBsAg)']
        },
        guidelines: {
          screening: ['Every HBsAg-positive patient should be screened once for anti-HDV'],
          treatment: [
            'Bulevirtide 2mg SC daily: For compensated liver disease and HDV RNA positivity. Treatment continues as long as there is clinical benefit (for years).',
            'Peg-IFN alfa: A 48-week course can be attempted (approx. 25% sustained response).'
          ],
          monitoring: ['HDV RNA, ALT, HBsAg']
        },
        prognosis: {
          mortality: 'High, rapid progression to cirrhosis',
          factors: 'Superinfection has a worse prognosis'
        },
        references: [
          'EASL Clinical Practice Guidelines on hepatitis delta virus (2023).',
          'WHO. Hepatitis D resources and technical brief.'
        ],
        gallery: [
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>Chronic HBV</text><text x='300' y='370' class='txt'>HDV Infection</text><text x='600' y='370' class='txt'>Time</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,100 L750,100' fill='none' stroke='red' stroke-width='3' /><text x='100' y='90' class='txt' fill='red'>HBsAg (Present)</text><path d='M250,350 Q300,50 400,50 L750,50' fill='none' stroke='purple' stroke-width='3' /><text x='450' y='40' class='txt' fill='purple'>HDV RNA / Anti-HDV IgM</text><path d='M300,350 Q400,120 500,120 L750,120' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='110' class='txt' fill='blue'>Anti-HDV Total</text><path d='M50,300 L250,300 Q300,150 350,250 T450,200 T550,250 T650,200' fill='none' stroke='orange' stroke-width='2' /><text x='500' y='190' class='txt' fill='orange'>ALT (Flare)</text></svg>",
            caption: 'Serology of Hepatitis D superinfection',
            type: 'Diagram'
          }
        ]
      },
      {
        id: 'hev',
        name: 'Hepatitis E',
        pathogen: { type: 'Virus', name: '<i>Hepatitis E virus</i> (HEV)', gram: 'ssRNA, Hepeviridae', shape: 'icosahedral' },
        epidemiology: {
          incidence: 'Developing countries (water), Developed countries (pork/game)',
          risk_groups: ['Pregnant women (severe course)', 'Immunosuppressed patients (chronic)', 'Patients with liver disease', 'Pig farmers'],
          seasonality: 'Rainy season (in the tropics)',
          transmission: 'Fecal-oral (water - Genotype 1,2), Zoonotic (raw pork/game meat - Genotype 3,4)'
        },
        pathomechanism: {
          steps: [
            'Entry: Via the fecal-oral route (contaminated water - genotypes 1, 2) or zoonotically (raw meat - genotypes 3, 4).',
            'Pregnancy: In pregnant women (mainly 3rd trimester) the virus can cause fulminant liver failure, likely due to hormonal and immunological changes (20% mortality).',
            'Chronicity: In immunosuppressed patients (e.g., transplant recipients) the virus is not eliminated, causing chronic hepatitis and fibrosis.'
          ],
          virulence_factors: ['ORF3 protein (release)', 'Capsid protein']
        },
        clinical: {
          incubation: '15-60 days (average 40)',
          onset: 'Sudden',
          symptoms: [
            { name: 'Acute hepatitis', description: 'Similar to HAV (fever, jaundice, vomiting).', severity: 'moderate' },
            { name: 'Neurological symptoms', description: 'More frequently associated with neurological complications (Guillain-Barré syndrome, neuralgic amyotrophy).', severity: 'severe' },
            { name: 'In pregnancy', description: 'Signs of severe, life-threatening liver failure.', severity: 'severe' }
          ],
          physical_exam: ['Icterus', 'Hepatomegaly'],
          complications: ['Fulminant hepatitis in pregnant women (20% mortality! - G1,2)', 'Chronic hepatitis in immunosuppressed patients (G3)', 'Neurological symptoms (Guillain-Barré, neuralgic amyotrophy)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Liver enzymes', finding: 'Elevated ALT/AST', interpretation: 'Hepatitis' }
          ],
          imaging: [
            { modality: 'Abdominal ultrasound', finding: 'Hepatomegaly', significance: 'Non-specific' }
          ],
          microbiology: [
            { test: 'Anti-HEV IgM', finding: 'Positive', significance: 'Acute infection' },
            { test: 'HEV RNA', finding: 'Positive', significance: 'Confirmation, chronic case' }
          ]
        },
        differential: [
          { disease: 'Hepatitis A', distinguishing: 'Serology (Anti-HAV IgM)' },
          { disease: 'Drug-induced liver injury (DILI)', distinguishing: 'History (e.g., antibiotics, NSAIDs)' },
          { disease: 'Ischemic hepatitis', distinguishing: 'History of shock, hypotension, extreme LDH elevation' },
          { disease: "Wilson's disease (in fulminant cases)", distinguishing: 'Hemolysis, low ALP, high urinary copper' }
        ],
        therapy: {
          guidelines: ['EASL Clinical Practice Guidelines on hepatitis E virus infection'],
          empirical: {
            outpatient: [
              { drug: 'Supportive', dose: '-', duration: '-', note: 'For acute infection in immunocompetent patients (self-limiting).' }
            ],
            inpatient: [
              { drug: 'Ribavirin', dose: '600-800 mg PO', duration: '12 weeks', note: 'Chronic HEV (immunosuppressed patients) or severe acute cases.' }
            ]
          },
          targeted: 'Chronic HEV (immunosuppressed patients): 1. Reduce immunosuppression (if possible). 2. Ribavirin for 12 weeks. If unsuccessful: Ribavirin for 24 weeks or Peg-IFN.',
          supportive: ['Fluid replacement', 'Close monitoring in pregnant women (risk of fulminant course!)'],
          prevention: ['Food safety (thoroughly cooking pork, game meat)']
        },
        guidelines: {
          diagnosis: ['Anti-HEV IgM and IgG', 'HEV RNA (blood and stool) - mandatory when chronic infection is suspected'],
          treatment_indications: [
            'Acute: generally does not require treatment (except liver failure)',
            'Chronic (>3 months HEV RNA+): Immunosuppressed patients (transplant recipients, HIV). Treatment: Ribavirin.'
          ]
        },
        prognosis: {
          mortality: 'Generally low; in pregnant women (genotype 1-2) mortality can be up to 20%',
          prognostic_scores: ['None'],
          factors: 'Pregnancy, immunosuppression'
        },
        references: [
          'EASL Clinical Practice Guidelines on hepatitis E virus infection.',
          'WHO. Hepatitis E fact sheet.'
        ],
        gallery: [
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>1 mo</text><text x='350' y='370' class='txt'>3 mo</text><text x='500' y='370' class='txt'>6 mo</text><text x='650' y='370' class='txt'>1 yr</text><text x='350' y='390' class='txt' text-anchor='middle'>Time since infection</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q150,50 250,50 Q350,50 450,350' fill='none' stroke='purple' stroke-width='3' /><text x='200' y='40' class='txt' fill='purple'>Anti-HEV IgM</text><path d='M150,350 Q250,100 350,100 L750,100' fill='none' stroke='green' stroke-width='3' /><text x='600' y='90' class='txt' fill='green'>Anti-HEV IgG</text><path d='M50,350 Q100,200 150,200 Q200,200 220,350' fill='none' stroke='red' stroke-width='3' stroke-dasharray='5,5' /><text x='80' y='190' class='txt' fill='red'>HEV RNA (stool)</text><path d='M100,350 Q180,150 220,150 Q260,150 300,350' fill='none' stroke='orange' stroke-width='2' /><text x='180' y='140' class='txt' fill='orange'>ALT</text></svg>",
            caption: 'Serological course of Hepatitis E',
            type: 'Diagram'
          }
        ]
      },
      {
        id: 'hgv',
        name: 'Hepatitis G (GBV-C)',
        pathogen: { type: 'Virus', name: '<i>GB virus C</i> (HGV)', gram: 'ssRNA, Flaviviridae', shape: '-' },
        epidemiology: {
          incidence: '1-4% of blood donors',
          risk_groups: ['IV drug users', 'Hemodialysis patients', 'Multiple transfusion recipients'],
          seasonality: 'None',
          transmission: 'Blood, sexual, vertical'
        },
        pathomechanism: {
          steps: ['Lymphotropic virus', 'Replication in lymphocytes', 'Not hepatotropic (disputed)', 'Interference with HIV replication'],
          virulence_factors: ['Unknown']
        },
        clinical: {
          incubation: 'Unknown',
          onset: 'Asymptomatic',
          symptoms: [
            { name: 'Asymptomatic', description: 'Does not cause acute or chronic hepatitis', severity: 'mild' }
          ],
          physical_exam: ['Negative'],
          complications: ['In HIV coinfection, slows AIDS progression (favorable effect)']
        },
        diagnostics: {
          laboratory: [{ test: 'Liver function', finding: 'Normal', interpretation: 'Does not cause hepatitis' }],
          imaging: [{ modality: 'None', finding: '-', significance: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'RNA', significance: 'Research purposes, not used in clinical routine' }
          ]
        },
        differential: [
          { disease: 'Other viral hepatitides', distinguishing: 'Serology (HBV, HCV)' },
          { disease: 'Non-infectious liver diseases', distinguishing: 'Diagnosis of exclusion' }
        ],
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
        },
        references: [
          'Stapleton JT. GB Virus Type C/Hepatitis G Virus. Semin Liver Dis.',
          'Viral hepatitis reviews discussing human pegivirus (HPgV/GBV-C).'
        ]
      },
      {
        id: 'ttv',
        name: 'Torque Teno Virus (TTV)',
        pathogen: { type: 'Virus', name: '<i>Torque teno virus</i>', gram: 'ssDNA, Anelloviridae', shape: '-' },
        epidemiology: {
          incidence: 'Ubiquitous (>90% of the population are carriers)',
          risk_groups: ['General population'],
          seasonality: 'None',
          transmission: 'Blood, saliva, stool, breast milk'
        },
        pathomechanism: {
          steps: ['Persistent viremia', 'Replication in numerous tissues', 'Pathogenicity not proven'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '-',
          onset: 'Asymptomatic',
          symptoms: [
            { name: 'Asymptomatic', description: 'Considered a commensal virus', severity: 'mild' }
          ],
          physical_exam: ['Negative'],
          complications: ['Pathogenicity not proven', 'May serve as a marker of the degree of immunosuppression']
        },
        diagnostics: {
          laboratory: [{ test: '-', finding: '-', interpretation: '-' }],
          imaging: [{ modality: '-', finding: '-', significance: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'DNA', significance: 'Research' }
          ]
        },
        differential: [
          { disease: 'Other viral hepatitides', distinguishing: 'Serology (HBV, HCV)' },
          { disease: 'Non-infectious liver diseases', distinguishing: 'Diagnosis of exclusion' }
        ],
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
        name: 'SEN Virus',
        pathogen: { type: 'Virus', name: '<i>SEN virus</i>', gram: 'ssDNA, Anelloviridae', shape: '-' },
        epidemiology: {
          incidence: 'Unknown',
          risk_groups: ['Transfusion recipients'],
          seasonality: 'None',
          transmission: 'Transfusion, via blood'
        },
        pathomechanism: {
          steps: ['Spreads via blood', 'May replicate in liver cells', 'May cause mild hepatitis (disputed)'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '-',
          onset: 'Slow',
          symptoms: [
            { name: 'Mild hepatitis?', description: 'Associated with post-transfusion hepatitis, but causality not proven', severity: 'mild' }
          ],
          physical_exam: ['-'],
          complications: ['No proven significant liver damage']
        },
        diagnostics: {
          laboratory: [{ test: 'ALT', finding: 'Mild elevation possible', interpretation: '?' }],
          imaging: [{ modality: '-', finding: '-', significance: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'DNA', significance: 'Research' }
          ]
        },
        differential: [
          { disease: 'Other viral hepatitides', distinguishing: 'Serology (HBV, HCV)' },
          { disease: 'Non-infectious liver diseases', distinguishing: 'Diagnosis of exclusion' }
        ],
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
    icon: window.diseaseMetadata.urinary_tract.icon,
    color: window.diseaseMetadata.urinary_tract.color,
    diseases: [
      {
        id: 'cystitis',
        name: 'Cystitis without Systemic Symptoms, formerly known as uncomplicated cystitis (Bladder infection)',
        pathogen: { type: 'Bacterium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negative', shape: 'rod' },
        epidemiology: {
          incidence: '50% of women at least once during their lifetime',
          risk_groups: ['Sexually active women', 'Postmenopausal women', 'Pregnancy', 'Diabetes', 'Catheter use'],
          seasonality: 'None',
          transmission: 'Ascending infection (perineal flora)'
        },
        pathomechanism: {
          steps: [
            'Colonization: Intestinal bacteria (mainly E. coli) colonize the periurethral area and the vaginal introitus.',
            'Ascent: The bacteria ascend through the urethra into the bladder (a shorter urethra in women predisposes to this).',
            'Adhesion and Invasion: The bacteria attach to the bladder urothelium via P-fimbriae, avoiding being washed out with urine, and then invade the cells.',
            'Inflammation: Proliferation of the bacteria and their toxins (e.g., hemolysin) trigger an inflammatory response, causing mucosal hyperemia, edema and the symptoms.'
          ],
          virulence_factors: ['P-fimbriae (adherence)', 'Hemolysin', 'Aerobactin (iron uptake)']
        },
        clinical: {
          incubation: 'Variable',
          onset: 'Sudden',
          symptoms: [
            { name: 'Dysuria', description: 'Burning, stinging sensation during urination, caused by irritation of the inflamed urethra and bladder neck.', severity: 'moderate' },
            { name: 'Pollakisuria', description: 'Frequent, small-volume urination due to irritation and reduced capacity of the bladder wall.', severity: 'moderate' },
            { name: 'Urgency', description: 'Sudden, compelling urge to urinate that is difficult to suppress (risk of urge incontinence).', severity: 'moderate' },
            { name: 'Suprapubic pain', description: 'Pressure or pain felt in the lower abdomen, above the pubic bone.', severity: 'mild' },
            { name: 'Hematuria', description: 'Macroscopically bloody urine (in about 30% of cases), often at the end of urination (terminal hematuria), due to bleeding from the hyperemic mucosa.', severity: 'mild' }
          ],
          physical_exam: [
            'Suprapubic tenderness',
            'Fever is generally ABSENT (if present, suspect pyelonephritis!)',
            'Renal area not tender',
            'Absence of vaginal discharge increases the likelihood of cystitis',
            'Symptoms are typically confined to the lower urinary tract, no general malaise'
          ],
          complications: ['Ascending pyelonephritis', 'Recurrent cystitis']
        },
        diagnostics: {
          laboratory: [
            { test: 'Urine dipstick', finding: 'Leukocyte esterase+, Nitrite+', interpretation: 'High positive predictive value' },
            { test: 'Urine sediment', finding: 'Pyuria (>10 WBC/HPF)', interpretation: 'Common, but non-specific' }
          ],
          imaging: [
            { modality: 'None', finding: 'Not necessary', significance: 'Except for atypical symptoms or persistence' }
          ],
          microbiology: [
            { test: 'Urine culture', finding: '≥10^3 CFU/ml', significance: 'Recommended only in complicated, recurrent or atypical cases (EAU 2025)' }
          ]
        },
        differential: [
          { disease: 'Vaginitis', distinguishing: 'Discharge, itching, externally-located dysuria' },
          { disease: 'Urethritis (STD)', distinguishing: 'New partner, gradual onset, pyuria with sterile culture' },
          { disease: 'Interstitial cystitis', distinguishing: 'Chronic, culture negative' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Fosfomycin trometamol', dose: '3g PO', duration: 'Single dose', note: 'First choice (EAU 2025)' },
              { drug: 'Nitrofurantoin', dose: '100mg PO BID', duration: '5 days', note: 'First choice (EAU 2025)' },
              { drug: 'Pivmecillinam', dose: '400mg PO TID', duration: '3-5 days', note: 'First choice (EAU 2025)' }
            ],
            inpatient: [
              { drug: 'Does not require hospitalization', dose: '-', duration: '-', note: 'Except for complications' }
            ],
            icu: [
              { drug: '-', dose: '-', duration: '-', note: '-' }
            ]
          },
          targeted: 'Based on culture. Fluoroquinolones (Ciprofloxacin, Levofloxacin) are NOT recommended empirically in uncomplicated cystitis!',
          supportive: ['Plenty of fluid intake', 'Frequent urination', 'NSAID pain relief'],
          prevention: ['Behavioral: Adequate fluid intake, post-coital urination', 'Non-antibiotic (EAU 2025): Local estrogen (postmenopausal), OM-89 immunostimulation, D-mannose, bladder instillation', 'Antibiotic prophylaxis (last resort): Nitrofurantoin 50-100mg at night or Fosfomycin 3g every 10 days']
        },
        prognosis: {
          mortality: 'Zero',
          prognostic_scores: ['None'],
          factors: 'Tendency to recur'
        }
      },
      {
        id: 'pyelonephritis',
        name: 'Pyelonephritis without Systemic Symptoms (Uncomplicated Pyelonephritis)',
        pathogen: { type: 'Bacterium', name: '<i>Escherichia coli</i> (80%)', gram: 'Gram-negative', shape: 'rod' },
        epidemiology: {
          incidence: 'Common complication of untreated cystitis',
          risk_groups: ['Women', 'Pregnancy', 'Obstruction (stone, prostate)', 'Renal developmental anomaly', 'Diabetes'],
          seasonality: 'None',
          transmission: 'Ascending infection (95%), rarely hematogenous'
        },
        pathomechanism: {
          steps: [
            'Ascending infection: The bacteria ascend from the bladder through the ureter (often facilitated by vesicoureteral reflux) into the renal pelvis.',
            'Parenchymal invasion: The pathogens invade the renal parenchyma, primarily the medulla.',
            'Inflammatory response: An intense acute inflammatory reaction (neutrophil infiltration) is initiated against the bacteria, causing tissue edema, microabscesses, and tubular damage.',
            'Systemic effect: Inflammatory mediators entering the circulation trigger fever and systemic symptoms.'
          ],
          virulence_factors: ['P-fimbriae', 'Endotoxin', 'Capsule']
        },
        clinical: {
          incubation: 'Days after cystitis',
          onset: 'Sudden',
          symptoms: [
            { name: 'Fever and chills', description: 'High fever (>38°C) and chills are characteristic signs of upper urinary tract inflammation; they indicate renal parenchymal involvement and systemic inflammation.', severity: 'severe' },
            { name: 'Flank pain', description: 'Dull, constant, unilateral or bilateral pain in the renal area, due to tension of the renal capsule; point tenderness in the costovertebral angle.', severity: 'severe' },
            { name: 'Gastrointestinal symptoms', description: 'Nausea, vomiting, loss of appetite are common accompaniments, as kidney inflammation can also cause reflexive abdominal complaints.', severity: 'moderate' },
            { name: 'Lower urinary tract symptoms', description: 'Dysuria and pollakisuria are often present, but upper urinary tract infection cannot be ruled out even in the absence of urinary symptoms.', severity: 'moderate' },
            { name: 'Atypical presentation', description: 'In the elderly, immunosuppressed, or diabetic patients, the classic symptoms may be milder; confusion, weakness, or general malaise may dominate instead.', severity: 'moderate' }
          ],
          physical_exam: [
            'Costovertebral angle tenderness (Giordano sign)',
            'Fever and tachycardia',
            'Suprapubic tenderness only occasionally',
            'Abdominal tenderness may be present, but the exam is often mild',
            'In frail, elderly patients, systemic symptoms may be the primary signs',
            'Systemic symptoms may be the primary signs in frail, elderly patients',
          ],
          complications: ['Renal abscess', 'Perinephric abscess', 'Urosepsis', 'Papillary necrosis', 'Chronic kidney disease (recurrent)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blood count', finding: 'Leukocytosis, left shift', interpretation: 'Systemic inflammation' },
            { test: 'CRP/PCT', finding: 'Significantly elevated', interpretation: 'Bacterial infection' },
            { test: 'Urine', finding: 'Leukocyturia, bacteriuria, white blood cell casts', interpretation: 'Upper urinary tract origin' },
            { test: 'Renal function', finding: 'Creatinine may be elevated', interpretation: 'Acute kidney injury' }
          ],
          imaging: [
            { modality: 'Abdominal/pelvic CT', finding: 'Renal enlargement, perinephric fluid, wedge-shaped hypodensity', significance: 'Gold standard for ruling out complications (EAU 2025)' },
            { modality: 'Renal ultrasound', finding: 'Obstruction, abscess', significance: 'Radiation-free alternative' }
          ],
          microbiology: [
            { test: 'Urine culture', finding: '≥10^4 CFU/ml', significance: 'Always obtain! (EAU 2025)' },
            { test: 'Blood culture', finding: 'Positive', significance: 'Recommended on hospital admission' }
          ]
        },
        differential: [
          { disease: 'Kidney stone', distinguishing: 'Colicky pain, no fever (if no infection), hematuria dominates' },
          { disease: 'Acute abdominal conditions', distinguishing: 'Appendicitis, cholecystitis (abdominal status, ultrasound)' },
          { disease: 'Pelvic inflammatory disease (PID)', distinguishing: 'Gynecological exam, discharge' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Cefuroxime axetil', dose: '500mg PO BID', duration: '7 days', note: 'no activity against Enterococcus' },
              { drug: 'Levofloxacin', dose: '750mg PO once daily', duration: '5 days', note: 'Only an alternative if E. coli resistance <10% (EAU 2025)' },
              { drug: 'Ceftibuten/Cefixime', dose: 'PO', duration: '10 days', note: 'If quinolone cannot be given (less effective)' }
            ],
            inpatient: [
              { drug: 'Ceftriaxone', dose: '1-2g IV once daily', duration: '10-14 days', note: 'First choice' },
              { drug: 'Ciprofloxacin', dose: '400mg IV BID', duration: '10-14 days', note: 'Alternative, if E. coli resistance <10% (EAU 2025)' },
              { drug: 'Gentamicin + Ampicillin', dose: 'IV', duration: '', note: 'In severe cases' }
            ],
            icu: [
              { drug: 'Piperacillin/tazobactam', dose: '4.5g IV QID', duration: '', note: 'Urosepsis, obstruction' },
              { drug: 'Meropenem', dose: '1g IV TID', duration: '', note: 'Suspected ESBL' }
            ]
          },
          targeted: 'Based on antibiogram. ESBL is common!',
          supportive: ['Fluid replacement', 'Antipyretics', 'Resolving obstruction (catheter, stent)'],
          prevention: ['Adequate treatment of cystitis', 'Correction of anatomical abnormalities']
        },
        prognosis: {
          mortality: 'Low (<1%), but 10-20% in case of urosepsis',
          prognostic_scores: ['qSOFA'],
          factors: 'Advanced age, obstruction, resistant pathogen'
        }
      },
      {
        id: 'complicated_uti',
        name: 'Urinary Tract Infection with Systemic Symptoms',
        pathogen: { type: 'Bacterium', name: '<i>E. coli, Enterococcus, Pseudomonas, Klebsiella, Proteus</i>', gram: 'Mixed', shape: 'Mixed' },
        epidemiology: {
          incidence: 'Common in hospital settings and in urological patients',
          risk_groups: ['Catheter wearers', 'Men', 'Pregnant women', 'Anatomical/functional abnormality', 'Renal failure', 'Immunosuppression'],
          seasonality: 'None',
          transmission: 'Ascending, catheter-associated, hematogenous'
        },
        pathomechanism: {
          steps: [
            'Predisposing factor: An anatomical (e.g., stricture, stone) or functional (e.g., neurogenic bladder) abnormality, or the presence of a foreign body (catheter) impairs urine flow and the washing-out of bacteria.',
            'Biofilm formation: The bacteria (e.g., Proteus, Pseudomonas) form a biofilm layer on the catheter or stone, which protects them from antibiotics and the immune system.',
            'Persistence: The infection is difficult to eradicate, and selection of resistant strains and recurrent infection are common.'
          ],
          virulence_factors: ['Biofilm', 'Multidrug resistance', 'Urease (Proteus)']
        },
        clinical: {
          incubation: 'Variable',
          onset: 'Variable (can be paucisymptomatic)',
          symptoms: [
            { name: 'Lower urinary tract symptoms', description: 'Dysuria, frequent urination and urgency may occur, but may also be absent; the localization of the infection is variable.', severity: 'moderate' },
            { name: 'Upper urinary tract/significant local pain', description: 'Suprapubic or flank pain may occur, especially in obstruction or kidney involvement.', severity: 'moderate' },
            { name: 'Systemic inflammation', description: 'Fever, chills and tachycardia indicate a higher pathogen burden and the body\'s general response.', severity: 'severe' },
            { name: 'Signs of sepsis', description: 'Hypotension, tachypnea, confusion or oliguria may occur in severe urosepsis, requiring immediate source control.', severity: 'severe' },
            { name: 'Oligosymptomatic', description: 'In catheterized, neurogenic bladder, or immunosuppressed patients, the classic symptoms are often absent, but lab and vital signs must be monitored.', severity: 'mild' }
          ],
          physical_exam: [
            'Often sparse findings, especially in catheterized patients',
            'Suprapubic or renal area tenderness',
            'Presence of catheter or other urinary device',
            'Fever or hypothermia',
            'Hypotension, tachypnea or confusion in severe cases'
          ],
          complications: ['Urosepsis', 'Renal abscess', 'Renal failure', 'Recurrence', 'Catheter obstruction']
        },
        diagnostics: {
          laboratory: [
            { test: 'Urine culture', finding: 'Women: ≥10^5 CFU/ml, Men: ≥10^4 CFU/ml', interpretation: 'Diagnostic thresholds (EAU 2025)' },
            { test: 'Catheter urine', finding: '≥10^4 CFU/ml', interpretation: 'Significant bacteriuria' },
            { test: 'Renal function', finding: 'Creatinine check', interpretation: 'Obstruction/damage' }
          ],
          imaging: [
            { modality: 'CT urography', finding: 'Anatomical/functional abnormality', significance: 'MANDATORY to clarify the predisposing factor' }
          ],
          microbiology: [
            { test: 'Culture + Resistance testing', finding: 'Essential', significance: 'Basis for targeted treatment' }
          ]
        },
        differential: [
          { disease: 'Uncomplicated UTI', distinguishing: 'No risk factor/anatomical defect' },
          { disease: 'Prostatitis', distinguishing: 'Rectal examination' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Cefuroxime axetil', dose: '500mg PO BID', duration: '7-14 days', note: 'no activity against Enterococcus' },
              { drug: 'Ciprofloxacin', dose: '500-750mg PO BID', duration: '7-14 days', note: 'Only if there has been no fluoroquinolone therapy in the last 6 months and E. coli resistance is <10% (EAU 2025)' },
              { drug: 'Levofloxacin', dose: '750mg PO once daily', duration: '7-14 days', note: 'Alternative, if E. coli resistance <10% (EAU 2025)' },
              { drug: 'Ceftibuten/Cefixime', dose: 'PO', duration: '10-14 days', note: 'If quinolone cannot be given' }
            ],
            inpatient: [
              { drug: 'Ceftriaxone', dose: '1-2g IV once daily', duration: '10-14 days', note: 'In severe cases' },
              { drug: 'Piperacillin/tazobactam', dose: '4.5g IV TID', duration: '10-14 days', note: 'Suspected Pseudomonas/previous AB treatment' },
              { drug: 'Carbapenem (Meropenem)', dose: '1g IV TID', duration: '10-14 days', note: 'ESBL risk or septic shock' },
              { drug: 'Amikacin/Gentamicin', dose: 'IV', duration: 'As an adjunct', note: 'Synergism' }
            ],
            icu: [
              { drug: 'Broad spectrum (Carbapenem + Amikacin)', dose: 'IV', duration: '', note: 'Urosepsis' }
            ]
          },
          targeted: 'Correction based on culture. Resolving obstruction (catheter change, stent, nephrostomy) is essential!',
          supportive: ['Fluid replacement', 'Antipyretics'],
          prevention: ['Catheter care (closed system, prompt removal)', 'Removal of obstruction', 'Avoiding treatment of asymptomatic bacteriuria']
        },
        prognosis: {
          mortality: '10-30% in case of urosepsis',
          prognostic_scores: ['qSOFA', 'SOFA'],
          factors: 'Underlying disease, resistance, source control'
        }
      },
      {
        id: 'prostatitis',
        name: 'Bacterial Prostatitis',
        pathogen: { type: 'Bacterium', name: '<i>E. coli, Klebsiella, Proteus, Enterococcus, Pseudomonas</i>', gram: 'Mixed', shape: 'Mixed' },
        epidemiology: {
          incidence: '50% of men experience symptoms during their lifetime',
          risk_groups: ['Young/middle-aged men', 'Catheterization', 'Urinary tract intervention (biopsy)', 'HIV', 'Diabetes'],
          seasonality: 'None',
          transmission: 'Ascending (reflux), hematogenous, lymphogenous, direct (biopsy)'
        },
        pathomechanism: {
          steps: [
            'Route of infection: Bacteria most commonly enter the prostate glands via intraprostatic reflux of infected urine.',
            'Inflammation: In acute cases, edema and microabscesses develop in the glands, causing swelling and tension of the prostate.',
            'Chronicity: The bacteria can form a biofilm on prostatic stones or in the glandular ducts, which sustains recurrent infections.'
          ],
          virulence_factors: ['Biofilm', 'Anatomical location (poor AB penetration)']
        },
        clinical: {
          incubation: 'Variable',
          onset: 'Acute (ABP) or Chronic (CBP)',
          symptoms: [
            { name: 'Acute: Systemic symptoms', description: 'Sudden-onset high fever, chills, myalgia, malaise (flu-like onset).', severity: 'severe' },
            { name: 'Pain', description: 'Characteristic perineal, perirectal, lower abdominal pain that may radiate to the testicles and penis.', severity: 'moderate' },
            { name: 'LUTS (Lower urinary tract symptoms)', description: 'Marked dysuria, pollakisuria, urgency.', severity: 'moderate' },
            { name: 'Obstruction', description: 'The swollen prostate compresses the urethra, which can cause difficult urination, a thin stream, or complete urinary retention.', severity: 'severe' },
            { name: 'Urinary retention', description: 'In the severe stage of obstruction, the bladder can fill up, leading to acute urinary retention and suprapubic discomfort.', severity: 'severe' },
            { name: 'Chronic symptoms', description: 'Milder, recurrent complaints: pelvic discomfort, recurrent urinary tract infections, painful ejaculation.', severity: 'mild' }
          ],
          physical_exam: [
            'Digital rectal examination (DRE):',
            'Acute: Swollen, warm, EXTREMELY tender prostate (Massage is FORBIDDEN - risk of bacteremia!)',
            'Chronic: May be normal or mildly tender, not swollen',
            'Bladder fullness in case of retention'
          ],
          complications: ['Prostatic abscess', 'Urosepsis', 'Chronicity', 'Epididymitis', 'Urinary retention', 'Sexual dysfunction']
        },
        diagnostics: {
          laboratory: [
            { test: 'Urine', finding: 'Pyuria, bacteriuria', interpretation: 'Positive' },
            { test: 'Blood count/CRP', finding: 'Elevated (Acute)', interpretation: 'Systemic inflammation' },
            { test: 'PSA', finding: 'Elevated', interpretation: 'Due to inflammation (not for cancer diagnosis in acute phase!)' }
          ],
          imaging: [
            { modality: 'Transrectal ultrasound (TRUS)', finding: 'Abscess (hypoechoic area)', significance: 'Only if not improving with treatment or abscess is suspected' }
          ],
          microbiology: [
            { test: 'Acute: Urine culture', finding: 'Midstream urine', significance: 'Prostate massage is FORBIDDEN!' },
            { test: 'Chronic: Meares-Stamey test', finding: '4-glass test or 2-glass test (pre/post-massage)', significance: 'Gold standard (EAU 2025)' }
          ]
        },
        differential: [
          { disease: 'Cystitis', distinguishing: 'No fever, no prostate tenderness' },
          { disease: 'BPH', distinguishing: 'No sign of infection, slow progression' },
          { disease: 'Chronic pelvic pain syndrome (CPPS)', distinguishing: 'Negative culture, chronic pain' },
          { disease: 'Prostate cancer', distinguishing: 'PSA, DRE (nodular), biopsy' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Levofloxacin', dose: '500-750mg PO once daily', duration: '2-4 weeks (Acute), 4-6 weeks (Chronic)', note: 'EAU 2025: First choice (good penetration)' },
              { drug: 'Ciprofloxacin', dose: '500mg PO BID', duration: '2-4 weeks (Acute), 4-6 weeks (Chronic)', note: 'EAU 2025: First choice' },
              { drug: 'Cotrimoxazole', dose: '960mg PO BID', duration: '4-6 weeks', note: 'Alternative' }
            ],
            inpatient: [
              { drug: 'Ceftriaxone', dose: '1-2g IV', duration: '14 days', note: 'In severe acute cases (then switch to PO)' },
              { drug: 'Piperacillin/tazobactam', dose: '4.5g IV TID', duration: '', note: 'Suspected urosepsis/Pseudomonas' },
              { drug: 'Gentamicin', dose: '5-7mg/kg IV', duration: '', note: 'As an adjunct (synergism)' }
            ],
            icu: [
              { drug: 'Meropenem', dose: '1g IV TID', duration: '', note: 'Septic shock/ESBL' }
            ]
          },
          targeted: 'Fluoroquinolones (first choice in chronic cases). Macrolides (suspected Chlamydia). Fosfomycin (MDR - disputed penetration).',
          supportive: ['NSAID pain relief', 'Alpha-blocker (Tamsulosin) to relieve symptoms', 'Suprapubic catheter (in case of retention, avoid urethral catheter in acute inflammation!)'],
          prevention: ['Early treatment of urinary tract infections', 'Prostate biopsy prophylaxis: Targeted (based on rectal swab) or Fosfomycin/Ceftriaxone (avoid fluoroquinolone!)']
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
        pathogen: { type: 'Bacterium', name: '<i>E. coli, Enterococcus, GBS</i>, etc.', gram: 'Variable', shape: 'Variable' },
        epidemiology: {
          incidence: 'Common (women 3-5%, elderly 10-50%, catheterized patients 100%)',
          risk_groups: ['Elderly', 'Diabetes', 'Catheter use', 'Pregnancy'],
          seasonality: 'None',
          transmission: 'Endogenous colonization'
        },
        pathomechanism: {
          steps: [
            'Colonization: Bacteria settle in the urinary tract, but lack the virulence factors (e.g., specific fimbriae) that would trigger tissue invasion or inflammation.',
            'Commensalism: A kind of equilibrium develops between the bacteria and the host, without symptoms.',
            'Protective effect: The colonizing strains may compete with more virulent pathogens, so they can even have a protective effect.'
          ],
          virulence_factors: ['Reduced virulence']
        },
        clinical: {
          incubation: '-',
          onset: 'Asymptomatic',
          symptoms: [
            { name: 'Asymptomatic', description: 'The patient has no urinary complaints (no dysuria, no fever, no pain). The bacteriuria is an incidental finding.', severity: 'mild' }
          ],
          physical_exam: [
            'Negative',
            'Cloudy/foul-smelling urine alone is not diagnostic and does not require treatment!',
            'No suprapubic or renal area tenderness'
          ],
          complications: ['Unnecessary antibiotic treatment -> resistance', 'Pyelonephritis (risk only in pregnancy/intervention)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Urine culture', finding: '≥10^5 CFU/ml (same strain)', interpretation: 'Women: 2 consecutive samples, Men: 1 sample (EAU 2025)' },
            { test: 'Catheter sample', finding: '≥10^5 CFU/ml', interpretation: 'One sample is sufficient' },
            { test: 'Urine sediment', finding: 'Pyuria often present', interpretation: 'Does NOT indicate treatment without symptoms!' }
          ],
          imaging: [
            { modality: 'None', finding: '-', significance: '-' }
          ],
          microbiology: [
            { test: 'Culture', finding: 'Positive', significance: 'Only in case of a screening indication (e.g., pregnancy, urological intervention)' }
          ]
        },
        differential: [
          { disease: 'Cystitis', distinguishing: 'Presence of symptoms (dysuria, urgency)' },
          { disease: 'Contamination', distinguishing: 'Low colony count, mixed flora' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'NO treatment', dose: '-', duration: '-', note: 'General rule (even in the elderly, diabetics, catheterized patients!)' }
            ],
            inpatient: [
              { drug: 'NO treatment', dose: '-', duration: '-', note: 'Except for indications' }
            ]
          },
          targeted: 'Only in case of indication (Pregnancy, Urological intervention with mucosal injury). In pregnancy: Fosfomycin, Nitrofurantoin, Cephalosporin.',
          supportive: ['Patient education (urine odor/color does not warrant AB)'],
          prevention: ['Avoiding unnecessary screening and treatment', 'Catheter care']
        },
        prognosis: {
          mortality: 'Does not increase mortality even if untreated',
          prognostic_scores: ['None'],
          factors: '-'
        }
      }
    ]
  },
  intraabdominal: {
    name: 'Intra-abdominal Infections',
    icon: window.diseaseMetadata?.intraabdominal?.icon || '🩺',
    color: window.diseaseMetadata?.intraabdominal?.color || '#16a34a',
    tables: [],
    diseases: [
      {
        id: 'primary_bacterial_peritonitis',
        name: 'Primary Bacterial Peritonitis (SBP)',
        pathogen: { type: 'Bacterium', name: '<i>E. coli, Klebsiella, S. pneumoniae</i>', gram: 'Variable', shape: 'Variable' },
        epidemiology: {
          incidence: 'Common in cirrhotic patients with ascites',
          risk_groups: ['Liver cirrhosis with ascites', 'Nephrotic syndrome'],
          seasonality: 'None',
          transmission: 'Translocation of endogenous flora'
        },
        pathomechanism: {
          steps: [
            'Bacteria of the intestinal flora translocate through the intestinal wall into the lymph nodes and bloodstream.',
            'Due to portal hypertension and reduced immune response, the bacteria settle in the ascitic fluid.',
            'An inflammatory response develops in the peritoneum.'
          ]
        },
        clinical: {
          incubation: 'Acute',
          onset: 'Sudden, intense',
          symptoms: [
            { name: 'Abdominal pain', description: 'Sharp, knife-like pain that worsens with movement (guarding).', severity: 'severe' },
            { name: 'Fever', description: 'High fever, chills.', severity: 'moderate' },
            { name: 'Ileus symptoms', description: 'Vomiting, obstipation and inability to pass gas.', severity: 'severe' }
          ],
          physical_exam: ['Board-like rigid abdomen (guarding)', 'Blumberg sign (rebound tenderness)', 'Absence of bowel sounds', 'Tachycardia, hypotension'],
          complications: ['Septic shock', 'Multi-organ dysfunction (MODS)', 'Intra-abdominal abscesses']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blood count', finding: 'Marked leukocytosis with left shift', interpretation: 'Acute inflammation' },
            { test: 'Lactate', finding: 'Elevated', interpretation: 'Tissue hypoperfusion, sepsis' }
          ],
          imaging: [
            { modality: 'Abdominal CT', finding: 'Free air in the abdominal cavity, fluid collection, abscess', significance: 'Gold standard for locating the perforation' },
            { modality: 'Chest X-ray', finding: 'Free air under the diaphragm', significance: 'Quick orientation exam' }
          ],
          microbiology: [
            { test: 'Intraoperative sample', finding: 'Polymicrobial culture (aerobic + anaerobic)', significance: 'Targeted therapy' },
            { test: 'Blood culture', finding: 'Often positive', significance: 'Confirmation of sepsis' }
          ],
          differential: [
            { disease: 'Primary peritonitis', distinguishing: 'Ascites, monomicrobial, no free air' },
            { disease: 'Acute pancreatitis', distinguishing: 'Elevated lipase, CT findings' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxone + Metronidazole', dose: '2g IV once daily + 500mg IV TID', duration: 'Depends on source control', note: 'Mild/Moderate' },
              { drug: 'Piperacillin-Tazobactam', dose: '4.5g IV 3-4x/day', duration: 'Depends on source control', note: 'Severe / Nosocomial' },
              { drug: 'Meropenem', dose: '1g IV TID', duration: '-', note: 'Severe sepsis, suspected ESBL' }
            ]
          },
          targeted: 'Based on culture, but anaerobic coverage is often continued even without culture.',
          supportive: ['Sepsis protocol (fluids, vasopressors)'],
          prevention: ['Surgical prophylaxis, early diagnosis and surgical intervention']
        },
        guidelines: {
          diagnosis: [
            'Urgent imaging (CT) to identify free air, fluid, or abscess.',
            'Preoperative labs (lactate) for assessing sepsis risk.'
          ],
          treatment_indications: [
            'Surgical source control is the basis of care. Antibiotics alone are not enough!'
          ],
          first_line: ['Source control (surgery) + Broad-spectrum antibiotic (Ceftriaxone/Metronidazole or Pip/Tazo).'],
          supportive: ['Intensive care in case of septic shock.'],
          prevention: ['Adequate perioperative antibiotic prophylaxis.']
        },
        prognosis: {
          mortality: '10-50% (higher in case of delayed diagnosis, advanced age, comorbidities)',
          factors: 'Success of source control, severity of sepsis'
        }
      },
      {
        id: 'pyogenic_liver_abscess',
        name: 'Pyogenic Liver Abscess',
        pathogen: { type: 'Mixed (Bacterial)', name: '<i>E. coli, Klebsiella, Streptococcus spp., Anaerobes</i>', gram: 'Mixed', shape: 'Mixed' },
        epidemiology: {
          incidence: 'Most common visceral abscess',
          risk_groups: ['Biliary tract disease', 'Malignancy', 'Diabetes', 'Intra-abdominal inflammation (appendicitis, diverticulitis)'],
          seasonality: 'None',
          transmission: 'Biliary ascent, portal vein, or hematogenous spread'
        },
        pathomechanism: {
          steps: [
            'Bacteria most commonly reach the liver via the bile ducts (cholangitis), or via the portal vein (pylephlebitis) from intra-abdominal inflammation.',
            'The pathogens settle in the liver parenchyma, causing inflammation, then local necrosis and pus collection.',
            'K. pneumoniae (K1/K2 hypermucoviscous) syndrome can cause cryptogenic abscess and metastatic infections (endophthalmitis) in Asian patients.'
          ]
        },
        clinical: {
          incubation: 'Variable',
          onset: 'Often insidious, subacute',
          symptoms: [
            { name: 'Fever', description: 'Fever, chills are often the leading symptom.', severity: 'moderate' },
            { name: 'Right upper quadrant pain', description: 'Dull pain, possibly with symptoms of pleurisy (worsened by breathing).', severity: 'moderate' },
            { name: 'Weight loss, malaise', description: 'In subacute cases.', severity: 'mild' }
          ],
          physical_exam: ['Right upper quadrant tenderness', 'Hepatomegaly', 'Icterus (rare, more typical of biliary obstruction)'],
          complications: ['Rupture (peritonitis, pleural empyema)', 'Sepsis', 'Metastatic infection (K. pneumoniae)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blood count', finding: 'Leukocytosis, anemia (in chronic cases)', interpretation: 'Inflammation' },
            { test: 'Liver enzymes', finding: 'Elevated ALP, GGT', interpretation: 'Space-occupying process in the liver' }
          ],
          imaging: [
            { modality: 'Abdominal ultrasound', finding: 'Hypoechoic structure showing a fluid level', significance: 'First exam' },
            { modality: 'Abdominal CT', finding: 'Hypodense lesion with contrast-enhancing wall', significance: 'Precise localization, multiple abscesses' }
          ],
          microbiology: [
            { test: 'Abscess aspiration/drainage', finding: 'Positive culture', significance: 'Diagnostic and therapeutic' },
            { test: 'Blood culture', finding: 'Positive in 50%', significance: 'Should always be obtained' }
          ],
          differential: [
            { disease: 'Amoebic liver abscess', distinguishing: 'E. histolytica serology, travel history' },
            { disease: 'Echinococcal cyst', distinguishing: 'Serology, ultrasound findings (daughter cysts), PUNCTURE IS DANGEROUS' },
            { disease: 'Hepatocellular carcinoma', distinguishing: 'Tumor markers, CT findings' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxone + Metronidazole', dose: '2g IV once daily + 500mg IV TID', duration: '2-4 weeks', note: 'Standard' },
              { drug: 'Piperacillin-Tazobactam', dose: '4.5g IV 3-4x/day', duration: '2-4 weeks', note: 'Severe / biliary origin' }
            ]
          },
          targeted: 'Based on culture, followed by oral step-down (Ciprofloxacin/Amoxicillin-Clavulanate + Metronidazole) for 4-6 weeks.',
          supportive: ['Percutaneous drainage (first-choice source control!)'],
          prevention: ['Early treatment of biliary and intra-abdominal infections']
        },
        guidelines: {
          diagnosis: [
            'Ultrasound/CT-guided diagnostic and therapeutic aspiration/drainage is essential for microbiological sampling.',
            'Ruling out amoebic and echinococcal origin with serology.'
          ],
          treatment_indications: [
            'Smaller (<3-5 cm) abscesses can be treated with antibiotics alone, larger ones (especially >5 cm) require drainage.'
          ],
          first_line: ['Combination antibiotic (Ceftriaxone+Metronidazole) + Percutaneous drainage.'],
          supportive: ['Fluid replacement, pain management.'],
          prevention: ['No specific prophylaxis, except for treatment of underlying conditions.']
        },
        prognosis: {
          mortality: '5-15% (with adequate drainage)',
          factors: 'Multiple abscesses, biliary origin (malignancy), delayed diagnosis worsen prognosis.'
        }
      },
      {
        id: 'cholangitis',
        name: 'Ascending Cholangitis',
        pathogen: { type: 'Mixed (Bacterial)', name: '<i>E. coli, Klebsiella, Enterococcus spp., Anaerobes (less commonly)</i>', gram: 'Mixed', shape: 'Mixed' },
        epidemiology: {
          incidence: 'On the basis of biliary obstruction (stone, tumor, stent)',
          risk_groups: ['Cholelithiasis (Choledocholithiasis)', 'Malignant biliary stricture', 'Post-ERCP status'],
          seasonality: 'None',
          transmission: 'Bacteria ascending from the duodenum in the presence of obstruction'
        },
        pathomechanism: {
          steps: [
            'Due to biliary obstruction (stone, tumor), bile flow stops, and pressure increases in the bile ducts.',
            'In the stagnant bile, bacteria ascending from the intestine proliferate.',
            'Due to the elevated intraductal pressure, the bacteria and toxins enter the bloodstream (severe sepsis).'
          ]
        },
        clinical: {
          incubation: 'Acute',
          onset: 'Sudden, intense',
          symptoms: [
            { name: "Charcot's triad", description: 'Fever/chills, right upper quadrant pain, Jaundice.', severity: 'severe' },
            { name: "Reynolds' pentad", description: "Charcot's triad + Hypotension (shock) + Altered mental status.", severity: 'severe' }
          ],
          physical_exam: ['Icterus (jaundice)', 'Right upper quadrant tenderness', 'Fever', 'Hypotension'],
          complications: ['Septic shock', 'Liver abscess', 'Acute kidney injury']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blood count', finding: 'Leukocytosis with left shift', interpretation: 'Inflammation' },
            { test: 'Liver enzymes', finding: 'Markedly elevated ALP, GGT, bilirubin', interpretation: 'Biliary obstruction' }
          ],
          imaging: [
            { modality: 'Abdominal ultrasound', finding: 'Dilated bile ducts, possibly a stone', significance: 'First exam (the stone is often not visible)' },
            { modality: 'MRCP', finding: 'Precise visualization of bile duct stones', significance: 'If ultrasound is not diagnostic but suspicion is strong' }
          ],
          microbiology: [
            { test: 'Blood culture', finding: 'Often positive', significance: 'Should always be obtained before AB' },
            { test: 'Bile culture', finding: 'Polymicrobial', significance: 'Sample obtained during drainage (ERCP)' }
          ],
          differential: [
            { disease: 'Acute cholecystitis', distinguishing: 'Jaundice rare, bile ducts not dilated (only the gallbladder)' },
            { disease: 'Pyogenic liver abscess', distinguishing: 'Jaundice less dominant, CT findings' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxone + Metronidazole', dose: '2g IV once daily + 500mg IV TID', duration: '4-7 days after resolution of obstruction', note: 'Community-acquired, mild/moderate' },
              { drug: 'Piperacillin-Tazobactam', dose: '4.5g IV 3-4x/day', duration: '4-7 days after resolution of obstruction', note: 'Severe / stent-related' }
            ]
          },
          targeted: 'Based on culture, but successful decompression is the most important factor!',
          supportive: ['Sepsis treatment, fluid resuscitation'],
          prevention: ['Removal of gallstones, replacement of stents']
        },
        guidelines: {
          diagnosis: [
            'Tokyo Guidelines: systemic inflammation (fever, labs), cholestasis (bilirubin, ALP), and imaging-confirmed biliary disease/dilatation.',
            "Presence of Reynolds' pentad requires immediate emergency intervention."
          ],
          treatment_indications: [
            'Immediate broad-spectrum antibiotics AND urgent (within 24 hours) biliary decompression (ERCP or PTC).'
          ],
          first_line: ['Antibiotic (e.g., Pip/Tazo) AND ERCP with stone extraction/stenting.'],
          supportive: ['ICU admission, vasopressors in case of shock.'],
          prevention: ['Cholecystectomy after the acute episode, ERCP prophylaxis.']
        },
        prognosis: {
          mortality: '5-10% (nearly 100% without decompression)',
          factors: 'Early recognition and successful decompression are life-saving.'
        }
      },
      {
        id: 'secondary_peritonitis',
        name: 'Spontaneous Bacterial Peritonitis (SBP)',
        pathogen: { type: 'Mixed (Bacterial)', name: '<i>E. coli, Klebsiella, Enterococcus, B. fragilis, anaerobes</i>', gram: 'Mixed', shape: 'Mixed' },
        epidemiology: {
          incidence: 'Common surgical emergency condition',
          risk_groups: ['Ulcer perforation', 'Appendicitis', 'Diverticulitis', 'After iatrogenic bowel surgery'],
          seasonality: 'None',
          transmission: 'Perforation of the gastrointestinal tract'
        },
        pathomechanism: {
          steps: [
            'The continuity of the gastrointestinal tract wall is interrupted (perforation, necrosis).',
            'The physiological, mixed flora of the bowel enters the sterile abdominal cavity.',
            'Intense inflammation (fibrin deposition), encapsulation (abscess formation), and/or generalized systemic toxicity develop.',
          ]
        },
        clinical: {
          incubation: 'Variable',
          onset: 'Acute or subacute',
          symptoms: [
            { name: 'Abdominal pain', description: 'Diffuse, mild to moderate abdominal pain, tenderness.', severity: 'moderate' },
            { name: 'Fever', description: 'Elevated temperature or fever.', severity: 'moderate' },
            { name: 'Hepatic encephalopathy', description: 'Deterioration of mental status is often the first sign in cirrhotic patients.', severity: 'severe' }
          ],
          physical_exam: ['Fever', 'Abdominal tenderness (rarely guarding)', 'Signs of ascites', 'Encephalopathy'],
          complications: ['Sepsis', 'Hepatorenal syndrome', 'Progression of liver disease']
        },
        diagnostics: {
          laboratory: [
            { test: 'Ascitic fluid analysis', finding: 'PMN count > 250/mm3', interpretation: 'Diagnostic for SBP' },
            { test: 'Blood count', finding: 'Leukocytosis, elevated CRP', interpretation: 'Inflammation' }
          ],
          microbiology: [
            { test: 'Ascites culture', finding: 'Monomicrobial (most commonly E. coli)', significance: 'Pathogen identification' },
            { test: 'Blood culture', finding: 'May be positive', significance: 'Systemic infection' }
          ],
          differential: [
            { disease: 'Secondary peritonitis', distinguishing: 'Polymicrobial culture, very high ascitic protein' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxone', dose: '2g IV once daily', duration: '5-7 days', note: 'First line' }
            ]
          },
          targeted: 'Based on culture and antibiogram',
          supportive: ['Albumin replacement (to prevent renal failure)', 'Discontinuation of diuretics'],
          prevention: ['Antibiotic prophylaxis (Norfloxacin or TMP-SMX)']
        },
        guidelines: {
          diagnosis: [
            'Ascitic tap in every hospitalized cirrhotic patient with ascites.',
            'Diagnosis: ascitic PMN > 250/mm3.'
          ],
          treatment_indications: [
            'Empirical antibiotics should be started immediately if PMN > 250/mm3.'
          ],
          first_line: ['Ceftriaxone or Cefotaxime IV.'],
          supportive: ['IV Albumin administration reduces the risk of hepatorenal syndrome.'],
          prevention: ['Prophylaxis recommended in case of prior SBP or GI bleeding.']
        },
        prognosis: {
          mortality: '10-30% during the hospital episode',
          factors: 'Hepatorenal syndrome worsens the prognosis.'
        }
      },
      {
        id: 'acute_cholecystitis',
        name: 'Acute Cholecystitis',
        pathogen: { type: 'Mixed (Bacterial)', name: '<i>E. coli, Klebsiella, Enterococcus spp., less commonly anaerobes</i>', gram: 'Mixed', shape: 'Mixed' },
        epidemiology: {
          incidence: 'Common surgical condition',
          risk_groups: ['Cholelithiasis (Female, >40 years, Obesity, Multiparity)', 'Critically ill patients (Acalculous cholecystitis)'],
          seasonality: 'None',
          transmission: 'Obstruction of the gallbladder neck or cystic duct, followed by secondary bacterial infection'
        },
        pathomechanism: {
          steps: [
            'A gallstone becomes lodged in the cystic duct, preventing the outflow of bile.',
            'The gallbladder wall becomes distended and ischemic (chemical inflammation).',
            'Secondarily, intestinal bacteria colonize the stagnant bile, causing bacterial inflammation.',
            'In the acalculous (stone-free) form, biliary stasis and ischemia cause necrosis (in critically ill patients).'
          ]
        },
        clinical: {
  incubation: 'Acute',
  onset: 'Gradually worsening, then continuous',
  symptoms: [
    { name: 'Abdominal pain', description: 'Right upper quadrant or epigastric colicky pain radiating to the back (right scapula), later becoming constant.', severity: 'severe' },
    { name: 'Nausea, vomiting', description: 'Frequent accompanying symptom.', severity: 'moderate' },
    { name: 'Fever', description: 'Low-grade fever or fever.', severity: 'moderate' }
  ],
  physical_exam: [
    'Murphy sign (positive: deep inspiration is interrupted due to pain on palpation of the right upper quadrant)',
    'Right upper quadrant tenderness',
    'Jaundice is usually ABSENT (if present, suspect choledocholithiasis)'
  ],
  complications: [
    'Gallbladder perforation',
    'Biliary peritonitis',
    'Empyema of the gallbladder',
    'Gangrenous cholecystitis'
  ]
},

diagnostics: {
  laboratory: [
    { test: 'Blood count', finding: 'Leukocytosis with left shift, elevated CRP', interpretation: 'Inflammation' },
    { test: 'Liver enzymes', finding: 'Usually normal or mildly elevated', interpretation: 'If ALP/bilirubin is elevated, biliary obstruction (Mirizzi syndrome or choledocholithiasis) may be present' }
  ],
  imaging: [
    { modality: 'Abdominal ultrasound', finding: 'Thickened gallbladder wall (>3 mm), pericholecystic fluid, gallstones, positive sonographic Murphy sign', significance: 'Gold standard, most sensitive and specific' },
    { modality: 'CT abdomen', finding: 'Signs of inflammation', significance: 'If complications are suspected (perforation, abscess)' }
  ],
  microbiology: [
    { test: 'Blood culture', finding: 'May be positive in severe cases', significance: 'In sepsis' },
    { test: 'Bile culture', finding: 'Positive (during surgery)', significance: 'Complicated cases' }
  ],
  differential: [
    { disease: 'Acute cholangitis', distinguishing: 'Jaundice, dilated bile ducts, Reynolds pentad' },
    { disease: 'Acute pancreatitis', distinguishing: 'Markedly elevated lipase' },
    { disease: 'Peptic ulcer disease', distinguishing: 'History, gastroscopy' }
  ]
},

therapy: {
  empirical: {
    inpatient: [
      { drug: 'Ceftriaxone + Metronidazole', dose: '1x2 g IV + 3x500 mg IV', duration: 'Until afebrile / surgery', note: 'Mild/Moderate' },
      { drug: 'Piperacillin-Tazobactam', dose: '3–4x4.5 g IV', duration: 'Until afebrile / surgery', note: 'Severe / nosocomial (acalculous)' }
    ]
  },
  targeted: 'Based on culture (rarely required; surgery is definitive treatment).',
  supportive: ['Fluid replacement, pain management (spasmolytics)'],
  prevention: ['Elective surgery for symptomatic gallstones']
},

guidelines: {
  diagnosis: [
    'Tokyo Guidelines: local inflammation (Murphy sign, pain), systemic inflammation (fever, CRP, WBC), and characteristic imaging (US) findings.'
  ],
  treatment_indications: [
    'All acute cholecystitis cases require hospital admission and surgical consultation.'
  ],
  first_line: ['Early (ideally within 72 hours) laparoscopic cholecystectomy.'],
  supportive: [
    'If not a surgical candidate (high risk), percutaneous cholecystostomy (drainage) is recommended under antibiotic coverage.'
  ],
  prevention: ['Elective cholecystectomy for symptomatic gallstone disease.']
},

prognosis: {
  mortality: 'Low (1–3%), but higher in elderly patients and in perforation',
  factors: 'Early surgery improves prognosis; acalculous form has higher mortality (critically ill patients).'
}
},
{
id: 'acute_diverticulitis',
name: 'Acute diverticulitis',
pathogen: { type: 'Mixed (Bacteria)', name: '<i>E. coli, B. fragilis, other intestinal bacteria</i>', gram: 'Mixed', shape: 'Mixed' },
epidemiology: {
  incidence: 'Very common in older age (in Western societies)',
  risk_groups: ['>50 years', 'Low-fiber diet', 'Obesity', 'NSAID use'],
  seasonality: 'None',
  transmission: 'Inflammation due to obstruction of colonic diverticula (most commonly sigmoid) and microperforation'
},
pathomechanism: {
  steps: [
    'Diverticula form at weak points in the colonic wall (diverticulosis).',
    'Fecalith obstructs the diverticular neck, leading to stasis and bacterial overgrowth.',
    'Mucosal ischemia develops, causing microperforation and peridiverticular inflammation or abscess formation.'
  ]
},
clinical: {
  incubation: 'Acute',
  onset: 'Gradually worsening',
  symptoms: [
    { name: 'Left lower quadrant pain', description: 'Often continuous, dull or cramp-like (left-sided appendicitis-like pain).', severity: 'moderate' },
    { name: 'Fever', description: 'Low-grade fever, severe cases may have high fever with chills.', severity: 'moderate' },
    { name: 'Change in bowel habits', description: 'Constipation (more common) or diarrhea, bloating.', severity: 'mild' }
  ],
  physical_exam: [
    'Left lower quadrant tenderness',
    'Possible palpable mass (abscess, phlegmon)',
    'Increased bowel sounds or absent bowel sounds in peritonitis'
  ],
  complications: [
    'Abscess formation (Hinchey II)',
    'Perforation, generalized peritonitis (Hinchey III–IV)',
    'Fistula (e.g., colovesical: pneumaturia)',
    'Bowel obstruction'
  ]
},

diagnostics: {
  laboratory: [
    { test: 'Blood count', finding: 'Leukocytosis, elevated CRP', interpretation: 'Marker of inflammation' },
    { test: 'Urinalysis', finding: 'May show sterile pyuria', interpretation: 'Inflamed bowel may irritate the bladder' }
  ],
  imaging: [
    { modality: 'Contrast-enhanced CT abdomen', finding: 'Colonic wall thickening (>4 mm), pericolic fat stranding, possible abscess or free air', significance: 'Gold standard, Hinchey classification' },
    { modality: 'Colonoscopy', finding: 'CONTRAINDICATED in acute phase', significance: 'Risk of perforation! Recommended after 6 weeks to exclude malignancy.' }
  ],
  microbiology: [
    { test: 'Culture', finding: 'Only in abscess drainage or surgery', significance: 'Mixed flora' }
  ],
  differential: [
    { disease: 'Colorectal carcinoma', distinguishing: 'CT, then delayed colonoscopy' },
    { disease: 'IBD (Crohn’s disease)', distinguishing: 'History, endoscopy' },
    { disease: 'Gynecological conditions', distinguishing: 'Ovarian cyst rupture, adnexitis (US)' }
  ]
},

therapy: {
  empirical: {
    outpatient: [
      { drug: 'Amoxicillin-Clavulanate', dose: '2x1 g PO', duration: '5–7 days', note: 'Mild, uncomplicated cases' },
      { drug: 'Ciprofloxacin + Metronidazole', dose: '2x500 mg PO + 3x500 mg PO', duration: '5–7 days', note: 'Penicillin allergy' }
    ],
    inpatient: [
      { drug: 'Ceftriaxone + Metronidazole', dose: '1x2 g IV + 3x500 mg IV', duration: 'Until improvement, then PO', note: 'Moderate/Severe (Hinchey I–II)' },
      { drug: 'Piperacillin-Tazobactam', dose: '3–4x4.5 g IV', duration: 'Perioperative', note: 'Perforation, peritonitis (Hinchey III–IV)' }
    ]
  },
  targeted: 'Rarely required, except in drainage cases.',
  supportive: [
    'Liquid diet or fasting (severe cases)',
    'Pain management',
    'Percutaneous drainage (>3–4 cm abscess)'
  ],
  prevention: ['High-fiber diet, adequate hydration, weight reduction']
},

guidelines: {
  diagnosis: [
    'CT is recommended to confirm diagnosis and exclude complications (abscess, perforation).',
    'Endoscopy is contraindicated in the acute phase.'
  ],
  treatment_indications: [
    'In mild uncomplicated cases, antibiotics are increasingly omitted (supportive care only) under close monitoring.',
    'Antibiotics are indicated for immunosuppressed patients, systemic inflammation, or complications.'
  ],
  first_line: ['Complicated or high-risk patients: Amoxicillin-Clavulanate or Ceftriaxone + Metronidazole.'],
  supportive: [
    'Percutaneous drainage for large abscesses. Emergency surgery (Hartmann procedure or resection) for purulent or feculent peritonitis (Hinchey III–IV).'
  ],
  prevention: ['Colonoscopy 6 weeks after recovery to exclude malignancy.']
},

prognosis: {
  mortality: ' <1% in uncomplicated cases, up to 20% in perforation',
  factors: 'Hinchey stage determines prognosis and treatment strategy.'
}
}]
}
};
/* removed const */

Object.entries(window._abdomen_en).forEach(([k, v]) => {
  window.diseases[k] = Object.assign(window.diseases[k] || {}, v);
});

(function ensureAbdomenDiseaseGalleries() {
  const categoryIds = ['gastrointestinal', 'viral_hepatitis', 'urinary_tract', 'intraabdominal'];

  function createInlineGalleryImage(diseaseName, categoryName) {
    const safeDiseaseName = String(diseaseName || 'Disease');
    const safeCategoryName = String(categoryName || 'Abdomen');

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#fef3c7"/>
          <stop offset="100%" stop-color="#fde68a"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <circle cx="1030" cy="140" r="140" fill="#f59e0b" opacity="0.12"/>
      <circle cx="180" cy="520" r="180" fill="#f97316" opacity="0.1"/>

      <text x="80" y="150" font-size="62" font-family="Arial, sans-serif" font-weight="700" fill="#7c2d12">
        ${safeDiseaseName}
      </text>

      <text x="80" y="230" font-size="36" font-family="Arial, sans-serif" fill="#9a3412">
        Category: ${safeCategoryName}
      </text>

      <text x="80" y="340" font-size="30" font-family="Arial, sans-serif" fill="#431407">
        Abdominal infection – educational illustration
      </text>

      <rect x="80" y="390" width="1040" height="8" fill="#ea580c" opacity="0.4"/>

      <text x="80" y="470" font-size="28" font-family="Arial, sans-serif" fill="#7c2d12">
        Infectology
      </text>
    </svg>`;

    return {
      url: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
      caption: `${safeDiseaseName} – illustrative diagram`,
      type: 'Illustration'
    };
  }

  const gastrointestinalDefaultMaps = [
    {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diarrheal_disease_death_rates,_World,_2020.svg',
      caption: 'World map: diarrheal disease mortality rates (2020)',
      type: 'Epidemiological map'
    },
    {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diarrheal_disease_prevalence_rates,_World,_2020.svg',
      caption: 'World map: diarrheal disease prevalence (2020)',
      type: 'Epidemiological map'
    }
  ];

  const epidemiologyMapGalleryByDiseaseId = {
    cholera: [
      {
        url: 'https://cdn.who.int/media/images/default-source/cover-images/who-documents/thumbnail_cholera_34.tmb-479v.png?sfvrsn=fae3cc58_2',
        caption: 'WHO cholera situation overview (2026-02-21) – affected countries',
        type: 'WHO epidemiological map'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Distribution_of_the_cholera.PNG',
        caption: 'Global distribution of cholera (endemic/epidemic areas)',
        type: 'Epidemiological map'
      }
    ],
    salmonellosis: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/CDC_salmonellosis_map.png',
        caption: 'Salmonellosis epidemiological map (CDC)',
        type: 'Epidemiological map'
      },
      ...gastrointestinalDefaultMaps
    ]
  };

  categoryIds.forEach((categoryId) => {
    const category = window.diseases[categoryId];
    if (!category || !Array.isArray(category.diseases)) return;

    category.diseases.forEach((disease) => {
      if (!disease || (Array.isArray(disease.gallery) && disease.gallery.length > 0)) return;

      if (epidemiologyMapGalleryByDiseaseId[disease.id]) {
        disease.gallery = epidemiologyMapGalleryByDiseaseId[disease.id].map((image) => ({ ...image }));
        return;
      }

      if (categoryId === 'gastrointestinal') {
        disease.gallery = gastrointestinalDefaultMaps.map((image) => ({ ...image }));
        return;
      }

      disease.gallery = [createInlineGalleryImage(disease.name, category.name)];
    });
  });
})();

// Ensure urinary_tract didactics are present (EN)
window.diseases['urinary_tract'] = window.diseases['urinary_tract'] || {};

Object.assign(window.diseases['urinary_tract'], {
  didactics: {
    overview:
      'Simple classification: lower urinary tract infections (cystitis) typically present without systemic symptoms; upper urinary tract infections (pyelonephritis) are associated with fever, chills, and flank pain. Lower UTI is usually managed outpatient, while upper UTI may require broader diagnostics and sometimes hospital care.',

    lower:
      'Symptoms: dysuria (burning urination), frequency (pollakiuria), urgency, suprapubic pain, occasional hematuria. Usually no fever or systemic illness.',

    upper:
      'Systemic signs: high fever (>38°C), chills, malaise; local signs: flank/CVA tenderness, nausea/vomiting. Labs: leukocytosis, elevated CRP; urine culture and blood cultures if indicated should always be considered in febrile cases.',

    diagnostics: [
      '1) Targeted history and vital signs',
      '2) Urine dipstick and microscopy (pyuria, nitrites)',
      '3) Urine culture in complicated, recurrent, or systemic cases',
      '4) Blood tests: CBC, CRP, creatinine; blood cultures in febrile patients',
      '5) Imaging (US/CT) if obstruction, abscess, or persistent infection is suspected'
    ],

    red_flags: [
      'Signs of sepsis (hypotension, confusion)',
      'Rapidly rising creatinine or signs of obstruction',
      'Fever during pregnancy',
      'Inability to tolerate oral therapy (severe vomiting)',
      'Immunosuppression'
    ],

    special_populations:
      'Elderly: often atypical presentation (confusion, weakness) — low threshold for evaluation. Children: fever may be the only sign. Pregnancy: low threshold for treatment and follow-up.',

    teaching_tip:
      'Urinary symptoms without fever → likely cystitis. Fever with flank pain → pyelonephritis requiring higher-level evaluation and treatment.'
  }
});