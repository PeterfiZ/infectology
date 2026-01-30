/**
 * c:\Users\Peterfi\OneDrive - Pécsi Tudományegyetem\A folyó ügyek\a gyorsan elintézendő\a leadandó, határidős dolgok\Cikkek, előadások\programok\Infectologia\childhood_en.js
 */
Object.assign(window.diseases, {
  childhood: {
    name: 'Childhood Infections',
    icon: '🧸',
    color: '#f472b6',
    diseases: [
      {
        id: 'measles',
        name: 'Measles (Morbilli)',
        pathogen: { type: 'Virus', name: 'Measles morbillivirus', gram: 'ssRNA, Paramyxoviridae', shape: 'pleomorphic' },
        epidemiology: {
          incidence: 'Epidemic in unvaccinated populations',
          risk_groups: ['Unvaccinated', 'Immunosuppressed'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet infection (highly contagious! R0=12-18)'
        },
        pathomechanism: {
          steps: ['Respiratory entry', 'Viremia', 'Infection of endothelial/epithelial/immune cells', 'Immunosuppression (for months)'],
          virulence_factors: ['Hemagglutinin', 'Fusion protein']
        },
        clinical: {
          incubation: '10-14 days',
          onset: 'Prodrome (fever, 3C)',
          symptoms: [
            { name: 'Prodrome (3C)', description: 'Fever (>40°C), Cough, Coryza, Conjunctivitis - almost 100%', severity: 'moderate' },
            { name: 'Koplik spots', description: 'Pathognomonic salt grain-like spots on the buccal mucosa (60-70% before rash)', severity: 'mild' },
            { name: 'Rash', description: 'Maculopapular, starts behind ears → face → trunk (3rd day) → limbs (confluent)', severity: 'moderate' }
          ],
          physical_exam: ['Koplik spots', 'Exanthema', 'Fever', 'Conjunctivitis'],
          complications: ['Otitis media', 'Pneumonia (giant cell)', 'Encephalitis', 'SSPE (years later)']
        },
        diagnostics: {
          laboratory: [{ test: 'CBC', finding: 'Leukopenia', interpretation: '-' }],
          microbiology: [
            { test: 'IgM serology', finding: 'Positive (after rash)', significance: 'Diagnostic' },
            { test: 'PCR', finding: 'RNA (throat, urine)', significance: 'Early phase' }
          ]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Antipyretics, fluids' }] },
          targeted: 'Vitamin A administration reduces morbidity/mortality (WHO recommendation).',
          prevention: ['MMR vaccine (15 months, 11 years)']
        },
        guidelines: {
          diagnosis: [
            'Clinical suspicion: Fever + 3C (cough, coryza, conjunctivitis) + Koplik spots.',
            'Confirmation: Anti-measles IgM serology.'
          ],
          treatment_indications: [
            'Supportive therapy in all cases. Vitamin A administration is recommended to reduce complications.'
          ]
        },
        prognosis: { mortality: 'Low in developed countries, high in developing countries (pneumonia)', prognostic_scores: [], factors: 'Age, vaccination status' }
      },
      {
        id: 'mumps',
        name: 'Mumps (Epidemic Parotitis)',
        pathogen: { type: 'Virus', name: 'Mumps orthorubulavirus', gram: 'ssRNA, Paramyxoviridae', shape: 'pleomorphic' },
        epidemiology: {
          incidence: 'In unvaccinated',
          risk_groups: ['Unvaccinated'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet infection, saliva'
        },
        pathomechanism: {
          steps: ['Respiratory entry', 'Viremia', 'Infection of glandular tissues (parotid, testes, pancreas) and CNS'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '16-18 days',
          onset: 'Acute',
          symptoms: [
            { name: 'Parotitis', description: 'Parotid swelling (95% of symptomatic cases), initially unilateral, then bilateral (90%)', severity: 'moderate' },
            { name: 'Fever', description: 'Moderate, prodromal', severity: 'mild' },
            { name: 'Orchitis', description: 'Testicular inflammation (20-30% of postpubertal boys), painful', severity: 'severe' }
          ],
          physical_exam: ['Parotid swelling (earlobe lifted)', 'Testicular swelling/pain'],
          complications: ['Meningitis (aseptic)', 'Orchitis (sterility rare)', 'Pancreatitis', 'Deafness']
        },
        diagnostics: {
          laboratory: [{ test: 'Amylase', finding: 'Elevated (salivary/pancreatic origin)', interpretation: '-' }],
          microbiology: [{ test: 'IgM serology', finding: 'Positive', significance: 'Diagnostic' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Pain relief, compresses' }] },
          targeted: 'None.',
          prevention: ['MMR vaccine']
        },
        guidelines: {
          diagnosis: [
            'Clinical suspicion: Acute, painful parotid swelling.',
            'Confirmation: Anti-mumps IgM serology.'
          ],
          treatment_indications: [
            'Supportive therapy. In case of orchitis: bed rest, scrotal cooling, NSAID.'
          ]
        },
        prognosis: { mortality: 'Very low', prognostic_scores: [], factors: 'Age, vaccination' }
      },
      {
        id: 'rubella',
        name: 'Rubella (German Measles)',
        pathogen: { type: 'Virus', name: 'Rubella virus', gram: 'ssRNA, Matonaviridae', shape: 'spherical' },
        epidemiology: {
          incidence: 'Rare (due to vaccination)',
          risk_groups: ['Unvaccinated', 'Pregnant women (fetus!)'],
          seasonality: 'Spring',
          transmission: 'Droplet infection'
        },
        pathomechanism: {
          steps: ['Respiratory entry', 'Viremia', 'Skin/lymph node involvement', 'Transplacental transmission (teratogenic!)'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '14-21 days',
          onset: 'Mild',
          symptoms: [
            { name: 'Rash', description: 'Fine, pale pink (50-80%), spreads from face downwards, disappears in 3 days', severity: 'mild' },
            { name: 'Lymphadenopathy', description: 'Occipital, retroauricular, posterior cervical (nearly 100%)', severity: 'moderate' },
            { name: 'Arthralgia/Arthritis', description: 'Common in adult women (up to 70%)', severity: 'mild' }
          ],
          physical_exam: ['Lymph node swelling (nape)', 'Rash'],
          complications: ['Congenital Rubella Syndrome (CRS): heart defects, cataracts, deafness', 'Arthritis', 'Encephalitis (rare)']
        },
        diagnostics: {
          microbiology: [{ test: 'IgM serology', finding: 'Positive', significance: 'Diagnostic' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: '-' }] },
          targeted: 'None.',
          prevention: ['MMR vaccine', 'Screening of pregnant women']
        },
        guidelines: {
          diagnosis: [
            'Clinical suspicion: Mild rash + characteristic retroauricular/occipital lymph node swelling.',
            'Confirmation: Anti-rubella IgM serology. Diagnosis is critical in pregnancy!'
          ],
          treatment_indications: [
            'Supportive therapy. Prevention of Congenital Rubella Syndrome is the main goal.'
          ]
        },
        prognosis: { mortality: 'Good, except CRS' }
      },
      {
        id: 'scarlatina',
        name: 'Scarlet Fever (Scarlatina)',
        pathogen: { type: 'Bacterium', name: 'Streptococcus pyogenes (GAS)', gram: 'Gram-positive', shape: 'chain' },
        epidemiology: {
          incidence: 'Common in childhood',
          risk_groups: ['5-15 years old'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet infection'
        },
        pathomechanism: {
          steps: ['Pharyngitis', 'Erythrogenic toxin production (superantigen)', 'Skin reaction'],
          virulence_factors: ['Erythrogenic toxin (SpeA, B, C)']
        },
        clinical: {
          incubation: '2-5 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Sore throat', description: 'Severe pharyngitis (>90%)', severity: 'moderate' },
            { name: 'Fever', description: 'High, sudden onset', severity: 'moderate' },
            { name: 'Rash', description: 'Diffuse red, "sandpaper" feel, blanches on pressure (Pastia lines in folds)', severity: 'moderate' },
            { name: 'Tongue', description: 'White strawberry tongue (days 1-2) → Red raspberry tongue (days 4-5)', severity: 'moderate' }
          ],
          physical_exam: ['Pharyngeal hyperemia', 'Raspberry tongue', 'Filatov\'s sign (circumoral pallor)', 'Pastia lines (in folds)', 'Desquamation (later)'],
          complications: ['Rheumatic fever', 'Glomerulonephritis', 'Peritonsillar abscess']
        },
        diagnostics: {
          microbiology: [
            { test: 'Throat swab culture', finding: 'Strep. pyogenes', significance: 'Gold standard' },
            { test: 'Rapid test (Strep A)', finding: 'Positive', significance: 'Rapid' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Penicillin V', dose: 'PO', duration: '10 days', note: 'First choice' },
              { drug: 'Amoxicillin', dose: 'PO', duration: '10 days', note: 'Alternative' },
              { drug: 'Macrolide (e.g., Azithromycin)', dose: 'PO', duration: '5 days', note: 'In case of Penicillin allergy' }
            ]
          },
          targeted: 'Penicillin.',
          prevention: ['Hygiene', 'No vaccine']
        },
        guidelines: {
          diagnosis: [
            'Clinical suspicion (Centor/FeverPAIN score) + Strep A rapid test or throat swab culture.'
          ],
          treatment_indications: [
            'All confirmed GAS pharyngitis/tonsillitis should be treated to prevent rheumatic fever.'
          ],
          first_line: ['Penicillin V for 10 days. Macrolide in case of allergy.']
        },
        prognosis: { mortality: 'Excellent with treatment' }
      },
      {
        id: 'mononucleosis',
        name: 'Infectious Mononucleosis (Kissing Disease)',
        pathogen: { type: 'Virus', name: 'Epstein-Barr virus (EBV)', gram: 'dsDNA, Herpesviridae (HHV-4)', shape: 'spherical' },
        epidemiology: {
          incidence: 'Adolescents/young adults (90% infected by adulthood)',
          risk_groups: ['Young people'],
          seasonality: 'None',
          transmission: 'Saliva (kissing), droplet infection'
        },
        pathomechanism: {
          steps: ['Infection of oropharyngeal epithelium', 'Infection of B-lymphocytes (immortalization)', 'Cytotoxic T-cell response (atypical lymphocytes)', 'Latency in B-cells'],
          virulence_factors: ['LMP, EBNA proteins']
        },
        clinical: {
          incubation: '4-6 weeks',
          onset: 'Gradual',
          symptoms: [
            { name: 'Sore throat', description: 'Severe, often pseudomembranous (>80%)', severity: 'severe' },
            { name: 'Fever', description: 'Prolonged (can last 10-14 days), >90%', severity: 'moderate' },
            { name: 'Lymphadenopathy', description: 'Generalized, symmetrical, mainly posterior cervical (>90%)', severity: 'moderate' },
            { name: 'Fatigue', description: 'Pronounced, can last for weeks to months', severity: 'moderate' }
          ],
          physical_exam: ['Generalized lymphadenopathy (cervical dominance)', 'Hepatosplenomegaly', 'Tonsillar exudate', 'Ampicillin rash (if AB was given)'],
          complications: ['Splenic rupture (rare but dangerous)', 'Airway obstruction (tonsils)', 'Hepatitis', 'Burkitt lymphoma (late, endemic)']
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC', finding: 'Lymphocytosis, atypical mononuclear cells (>10%)', interpretation: 'Characteristic' },
            { test: 'Liver enzymes', finding: 'Mild elevation', interpretation: 'Common' }
          ],
          microbiology: [
            { test: 'Monospot test', finding: 'Heterophile antibody positive', significance: 'Rapid (often negative in children!)' },
            { test: 'EBV serology', finding: 'VCA IgM+, EBNA- (acute)', significance: 'Confirmation' }
          ]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Rest, fluids' }] },
          targeted: 'None. Steroids only in case of airway obstruction.',
          supportive: ['Physical rest (no sports for 3-4 weeks due to risk of splenic rupture!)'],
          prevention: ['Hygiene']
        },
        guidelines: {
          diagnosis: [
            'Clinical triad (fever, sore throat, lymph node swelling) + CBC (atypical lymphocytes) + Serology (Monospot or EBV-specific IgM/IgG).'
          ],
          treatment_indications: [
            'Supportive. Avoid Amoxicillin/Ampicillin (rash).',
            'Physical rest to prevent splenic rupture.'
          ]
        },
        prognosis: { mortality: 'Very low' }
      },
      {
        id: 'exanthema_subitum',
        name: 'Exanthema Subitum (Roseola infantum / Sixth Disease)',
        pathogen: { type: 'Virus', name: 'Human Herpesvirus 6 (HHV-6)', gram: 'dsDNA, Herpesviridae', shape: 'spherical' },
        epidemiology: {
          incidence: 'Infants/toddlers (6 months - 2 years) almost all infected',
          risk_groups: ['Infants'],
          seasonality: 'Year-round',
          transmission: 'Saliva (from asymptomatic carrier adults)'
        },
        pathomechanism: {
          steps: ['Mucosal infection', 'Viremia', 'T-cell tropism', 'Latency'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '5-15 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'High fever', description: '39-40°C, for 3-5 days (100%), with good general condition', severity: 'moderate' },
            { name: 'Rash', description: 'Appears AFTER fever subsides (important difference!), pink maculopapular', severity: 'mild' },
            { name: 'Nagayama spots', description: 'Ulcers/papules at the base of the uvula', severity: 'mild' }
          ],
          physical_exam: ['Fever', 'Nagayama spots (at base of uvula)', 'Cervical/occipital lymphadenopathy', 'Rash (later)'],
          complications: ['Febrile seizure (common cause!)', 'Encephalitis (rare)']
        },
        diagnostics: {
          laboratory: [{ test: 'CBC', finding: 'Leukopenia', interpretation: '-' }],
          microbiology: [{ test: 'Clinical picture', finding: 'Rash after fever', significance: 'Diagnostic' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Antipyretics' }] },
          targeted: 'None.',
          prevention: ['-']
        },
        guidelines: {
          diagnosis: [
            'Characteristic clinical picture: 3-5 days of high fever, then rash appearing as fever subsides.'
          ],
          treatment_indications: [
            'Supportive. Preparation/treatment for febrile seizures is important.'
          ]
        },
        prognosis: { mortality: 'Excellent' }
      },
      {
        id: 'varicella',
        name: 'Chickenpox (Varicella)',
        pathogen: { type: 'Virus', name: 'Varicella-zoster virus (VZV)', gram: 'dsDNA, Herpesviridae (HHV-3)', shape: 'spherical' },
        epidemiology: {
          incidence: 'Very common in childhood (unvaccinated)',
          risk_groups: ['Unvaccinated children', 'Immunosuppressed', 'Pregnant women', 'Adults (more severe)'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet infection, vesicle fluid (airborne!)'
        },
        pathomechanism: {
          steps: ['Respiratory entry', 'Viremia', 'Skin and mucosal infection', 'Latency in sensory ganglia'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '10-21 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Rash', description: 'Polymorphic (macule-papule-vesicle-crust simultaneously), itchy (100%)', severity: 'moderate' },
            { name: 'Fever', description: 'Moderate (in children), higher in adults', severity: 'mild' },
            { name: 'Enanthema', description: 'Oral mucosal vesicles, painful', severity: 'moderate' }
          ],
          physical_exam: ['Polymorphic rash (also on scalp!)', 'Fever', 'Lymphadenopathy'],
          complications: ['Bacterial superinfection (impetiginization)', 'Cerebellitis (ataxia)', 'Pneumonia (adults)', 'Encephalitis', 'Reye syndrome (aspirin!)']
        },
        diagnostics: {
          microbiology: [{ test: 'Clinical picture', finding: 'Characteristic', significance: 'Diagnostic' }, { test: 'PCR', finding: 'VZV DNA', significance: 'In uncertain cases' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Cooling lotions NOT recommended (superinfection), rather powder or nothing. Itch relief.' }] },
          targeted: 'Acyclovir (for risk groups, adults, immunosuppressed).',
          prevention: ['Varicella vaccine (mandatory)']
        },
        guidelines: {
          diagnosis: [
            'Clinical picture: Polymorphic, itchy rash present in multiple stages simultaneously.'
          ],
          treatment_indications: [
            'Supportive in healthy children. Acyclovir recommended: >12 years, chronic skin/lung disease, steroid users, adults, pregnant women.'
          ],
          prevention: ['Mandatory vaccination. Post-exposure prophylaxis (vaccine or VZIG).']
        },
        prognosis: { mortality: 'Low, but complications occur' }
      },
      {
        id: 'herpes_zoster',
        name: 'Shingles (Herpes Zoster)',
        pathogen: { type: 'Virus', name: 'Varicella-zoster virus (VZV) reactivation', gram: 'dsDNA', shape: '-' },
        epidemiology: {
          incidence: 'Mainly elderly, but also in immunosuppressed children',
          risk_groups: ['Immunosuppressed', 'Previous varicella'],
          seasonality: 'None',
          transmission: 'Vesicle fluid is infectious (can cause varicella in seronegative individuals)'
        },
        pathomechanism: {
          steps: ['Reactivation of latent virus in ganglion', 'Axonal transport to skin', 'Dermatomal rash'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '-',
          onset: 'Starts with pain',
          symptoms: [
            { name: 'Pain', description: 'Prodromal (70-80%), burning, shooting in the dermatome', severity: 'severe' },
            { name: 'Rash', description: 'Grouped vesicles on red base, unilateral, dermatomal', severity: 'moderate' }
          ],
          physical_exam: ['Dermatomal distribution of vesicles (does not cross midline)'],
          complications: ['Postherpetic neuralgia (PHN)', 'Zoster ophthalmicus (eye)', 'Ramsay Hunt syndrome (ear/facial nerve)']
        },
        diagnostics: {
          microbiology: [{ test: 'Clinical picture', finding: 'Characteristic', significance: 'Diagnostic' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Acyclovir', dose: '5x800mg PO', duration: '7 days', note: 'Started within 72 hours' }, { drug: 'Valacyclovir', dose: '3x1000mg PO', duration: '7 days', note: 'Better bioavailability' }] },
          targeted: 'Antiviral agent + Pain relief.',
          prevention: ['Zoster vaccine (for elderly)']
        },
        guidelines: {
          diagnosis: [
            'Clinical picture: Unilateral vesicular rash corresponding to a dermatome, often with prodromal pain.'
          ],
          treatment_indications: [
            'Antiviral treatment (Acyclovir, Valacyclovir) started within 72 hours reduces symptom severity and risk of postherpetic neuralgia (PHN).',
            'Urgent ophthalmological consultation required for Zoster ophthalmicus.'
          ]
        },
        prognosis: { mortality: 'Low, PHN impairs quality of life' }
      },
      {
        id: 'hsv_infection',
        name: 'Herpes Simplex Infections (Gingivostomatitis)',
        pathogen: { type: 'Virus', name: 'Herpes Simplex Virus 1 (HSV-1)', gram: 'dsDNA, Herpesviridae', shape: 'spherical' },
        epidemiology: {
          incidence: 'Common in early childhood (1-3 years)',
          risk_groups: ['Toddlers'],
          seasonality: 'None',
          transmission: 'Saliva, direct contact'
        },
        pathomechanism: {
          steps: ['Mucosal infection', 'Vesicles, ulcers', 'Latency in ganglia'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '2-12 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Gingivostomatitis', description: 'Fever, painful gingivitis, ulcers (most common primary form in children)', severity: 'severe' },
            { name: 'Herpes labialis', description: 'Recurrence (cold sore), prodromal tingling', severity: 'mild' },
            { name: 'Eczema herpeticum', description: 'Superinfection of atopic dermatitis (severe!)', severity: 'severe' }
          ],
          physical_exam: ['Swollen, bleeding gums', 'Ulcers on tongue/palate', 'Cervical lymphadenopathy', 'Fever'],
          complications: ['Dehydration (refusal to drink due to pain)', 'Eczema herpeticum', 'Herpetic whitlow', 'Encephalitis']
        },
        diagnostics: {
          microbiology: [{ test: 'Clinical picture', finding: 'Characteristic', significance: 'Diagnostic' }, { test: 'PCR', finding: 'HSV DNA', significance: 'In severe/atypical cases' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Pain relief, fluids, painting' }, { drug: 'Acyclovir', dose: 'PO/IV', duration: '5-7 days', note: 'In severe cases or immunosuppression' }] },
          targeted: 'Acyclovir.',
          prevention: ['Avoid contact with active lesions']
        },
        guidelines: {
          diagnosis: [
            'Clinical picture: Painful, swollen, bleeding gums and ulcers in the mouth, accompanied by fever in early childhood.'
          ],
          treatment_indications: [
            'Primarily supportive (pain relief, fluid replacement to avoid dehydration).',
            'Acyclovir recommended in severe cases, immunocompromised patients, or eczema herpeticum.'
          ]
        },
        prognosis: { mortality: 'Low, dehydration risk' }
      },
      {
        id: 'pertussis',
        name: 'Pertussis (Whooping Cough)',
        pathogen: { type: 'Bacterium', name: 'Bordetella pertussis', gram: 'Gram-negative', shape: 'bacillus' },
        epidemiology: {
          incidence: 'Epidemic in unvaccinated children',
          risk_groups: ['Infants (<6 months)', 'Unvaccinated children', 'Adults (milder)'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet infection (highly contagious! R0=12-17)'
        },
        pathomechanism: {
          steps: [
            'Respiratory entry',
            'Adhesion to cilia (filamentous hemagglutinin)',
            'Toxin production (pertussis toxin → lymphocytosis, coughing fits)',
            'Destruction of cilia → impaired mucociliary clearance'
          ],
          virulence_factors: ['Pertussis toxin (PT)', 'Filamentous hemagglutinin (FHA)', 'Adenylate cyclase toxin (ACT)']
        },
        clinical: {
          incubation: '7-10 days',
          onset: 'Catarrhal phase (1-2 weeks)',
          symptoms: [
            { name: 'Catarrhal phase', description: 'Mild fever, coryza, cough (1-2 weeks) - most contagious phase', severity: 'mild' },
            { name: 'Paroxysmal phase', description: 'Severe coughing fits (100%), whoop (inspiratory gasp 60-70%), vomiting (50%)', severity: 'severe' },
            { name: 'Convalescent phase', description: 'Cough decreases, but can last for weeks ("100-day cough")', severity: 'moderate' }
          ],
          physical_exam: [
            'Coughing fits (whoop characteristic in children)',
            'Apnea (infants)',
            'Lymphocytosis (>20,000/µL)',
            'Petechiae (due to straining)'
          ],
          complications: ['Pneumonia (bacterial/viral)', 'Encephalopathy', 'Apnea/death (infants)', 'Atelectasis', 'Hernia (due to coughing)']
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC', finding: 'Lymphocytosis (>20,000/µL)', interpretation: 'Characteristic' },
            { test: 'CRP', finding: 'Normal or slightly elevated', interpretation: 'Non-inflammatory' }
          ],
          microbiology: [
            { test: 'Nasopharyngeal aspirate culture', finding: 'Bordetella pertussis', significance: 'Gold standard (in early phase)' },
            { test: 'PCR', finding: 'DNA detection', significance: 'Rapid, sensitive' },
            { test: 'Serology', finding: 'IgG/IgA elevation', significance: 'Late diagnosis' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Azithromycin', dose: '10mg/kg/day PO', duration: '5 days', note: 'First choice' },
              { drug: 'Clarithromycin', dose: '15mg/kg/day PO', duration: '7 days', note: 'Alternative' }
            ]
          },
          targeted: 'Macrolide antibiotic (erythromycin, azithromycin).',
          supportive: ['Supportive (oxygen, rehydration)', 'Isolation (5 days after antibiotic)', 'Cough suppressants NO (mucus retention!)'],
          prevention: ['DTP vaccine (mandatory, 3+1 doses)', 'Adult booster']
        },
        guidelines: {
          diagnosis: [
            'Clinical suspicion (prolonged, paroxysmal cough) + Lab (marked lymphocytosis).',
            'Confirmation: Nasopharyngeal PCR (gold standard).'
          ],
          treatment_indications: [
            'All suspected/confirmed cases should be treated to reduce infectivity and alleviate symptoms (if started early).',
            'Infants require hospital care (apnea risk).',
            'Prophylaxis for contacts is necessary.'
          ],
          first_line: ['Macrolides (e.g., Azithromycin for 5 days).']
        },
        prognosis: {
          mortality: 'Low in developed countries, but high in infants (1-2%)',
          factors: 'Early treatment, vaccination'
        }
      }
    ]
  }
});
