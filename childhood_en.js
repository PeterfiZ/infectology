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
        pathogen: { type: 'Virus', name: '<i>Measles morbillivirus</i>', gram: 'ssRNA, Paramyxoviridae', shape: 'pleomorphic' },
        epidemiology: {
          incidence: 'Epidemic in unvaccinated populations',
          risk_groups: ['Unvaccinated', 'Immunocompromised'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet infection (highly contagious! R0=12-18)'
        },
        pathomechanism: {
          steps: [
            'Entry and Replication: The virus enters via respiratory epithelium and immune cells (CD150 receptor), replicating in regional lymph nodes.',
            'Viremia: Following primary viremia, the virus multiplies in the reticuloendothelial system (liver, spleen, bone marrow), leading to a massive secondary viremia that spreads to skin, conjunctiva, and respiratory tract.',
            'Tissue Damage: Fusion of infected cells creates Warthin-Finkeldey giant cells. The rash is a result of the T-cell immune response against virus-infected endothelial cells.',
            'Immunosuppression: The virus causes transient but severe immunosuppression (anergy) lasting weeks to months, predisposing to secondary bacterial infections (e.g., pneumonia, otitis).'
          ],
          virulence_factors: ['Hemagglutinin', 'Fusion protein']
        },
        clinical: {
          incubation: '10-14 days',
          onset: 'Prodrome (fever, 3C)',
          symptoms: [
            { name: 'Prodrome (3C)', description: 'High fever (>40°C), Cough, Coryza, and Conjunctivitis are present in almost 100% of cases before the rash appears.', severity: 'moderate' },
            { name: 'Koplik spots', description: 'Pathognomonic salt-grain-like white spots on the buccal mucosa (60-70%), appearing before the rash and fading within 1-2 days.', severity: 'mild' },
            { name: 'Rash', description: 'Maculopapular rash starting behind the ears, spreading to the face, trunk, and limbs (cranio-caudal). Lesions often become confluent and fade in the order of appearance, leaving brownish pigmentation and fine desquamation.', severity: 'moderate' }
          ],
          physical_exam: ['Koplik spots', 'Exanthema', 'Fever', 'Conjunctivitis'],
          complications: ['Otitis media', 'Giant cell pneumonia', 'Encephalitis', 'SSPE (years later)']
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
        pathogen: { type: 'Virus', name: '<i>Mumps orthorubulavirus</i>', gram: 'ssRNA, Paramyxoviridae', shape: 'pleomorphic' },
        epidemiology: {
          incidence: 'In unvaccinated',
          risk_groups: ['Unvaccinated'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet infection, saliva'
        },
        pathomechanism: {
          steps: [
            'The virus enters the upper respiratory tract via droplet transmission and replicates in epithelial cells.',
            'Viremia spreads the virus to target organs: salivary glands (mainly parotid), CNS, testes, pancreas, and ovaries.',
            'It causes swelling, interstitial edema, and lymphocytic infiltration in the affected glands.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '16-18 days',
          onset: 'Acute',
          symptoms: [
            { name: 'Parotitis', description: 'Painful swelling of the parotid gland (95% of symptomatic cases), initially unilateral, often becoming bilateral. The earlobe is lifted, and chewing is painful.', severity: 'moderate' },
            { name: 'Fever', description: 'Moderate fever, headache, and myalgia during the prodromal phase.', severity: 'mild' },
            { name: 'Orchitis', description: 'Testicular inflammation (20-30% of postpubertal males), characterized by painful swelling, rarely leading to sterility.', severity: 'severe' }
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
        pathogen: { type: 'Virus', name: '<i>Rubella virus</i>', gram: 'ssRNA, Matonaviridae', shape: 'spherical' },
        epidemiology: {
          incidence: 'Rare (due to vaccination)',
          risk_groups: ['Unvaccinated', 'Pregnant women (fetus!)'],
          seasonality: 'Spring',
          transmission: 'Droplet infection'
        },
        pathomechanism: {
          steps: [
            'Entry: The virus enters through the nasopharyngeal mucosa, migrates to regional lymph nodes, and replicates.',
            'Viremia: The virus spreads via the bloodstream to the skin and joints. The rash and joint symptoms are immune complex-mediated.',
            'Teratogenicity: During pregnancy, the virus crosses the placenta, inhibits mitosis in fetal cells, and induces apoptosis, leading to severe congenital defects (Congenital Rubella Syndrome).'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '14-21 days',
          onset: 'Mild',
          symptoms: [
            { name: 'Rash', description: 'Fine, pink maculopapular rash starting on the face and spreading rapidly downwards, disappearing without a trace within 3 days.', severity: 'mild' },
            { name: 'Lymphadenopathy', description: 'Characteristic painful swelling of occipital and retroauricular lymph nodes.', severity: 'moderate' },
            { name: 'Arthralgia/Arthritis', description: 'Joint pain or inflammation, common in adult women (up to 70%).', severity: 'mild' },
            { name: 'Forchheimer spots', description: 'Petechiae on the soft palate (non-specific but can occur).', severity: 'mild' }
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
        pathogen: { type: 'Bacterium', name: '<i>Streptococcus pyogenes</i> (GAS)', gram: 'Gram-positive', shape: 'chain' },
        epidemiology: {
          incidence: 'Common in childhood',
          risk_groups: ['5-15 years old'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet infection'
        },
        pathomechanism: {
          steps: [
            'Colonization: Streptococcus pyogenes (GAS) colonizes the pharynx via droplet transmission, causing pharyngitis.',
            'Toxin Production: The bacterium produces erythrogenic toxin (superantigen) if infected by a bacteriophage.',
            'Systemic Effect: The toxin enters the bloodstream, causing generalized capillary dilation and an inflammatory skin reaction in individuals lacking antitoxin immunity.'
          ],
          virulence_factors: ['Erythrogenic toxin (SpeA, B, C)']
        },
        clinical: {
          incubation: '2-5 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Sore throat', description: 'Sudden onset of severe sore throat, difficulty swallowing, often accompanied by vomiting.', severity: 'moderate' },
            { name: 'Fever', description: 'High fever and chills.', severity: 'moderate' },
            { name: 'Rash', description: 'Diffuse red rash with a "sandpaper" texture that blanches on pressure. Darker lines appear in skin folds (Pastia lines). Desquamation (peeling) of palms and soles is characteristic during recovery.', severity: 'moderate' },
            { name: 'Tongue', description: 'Initially white coated ("white strawberry tongue"), becoming red and papillated ("red strawberry tongue") after the coating peels off.', severity: 'moderate' }
          ],
          physical_exam: ['Pharyngeal hyperemia', 'Strawberry tongue', 'Filatov\'s sign (circumoral pallor)', 'Pastia lines (in folds)', 'Desquamation (later)'],
          complications: ['Rheumatic fever', 'Glomerulonephritis', 'Peritonsillar abscess']
        },
        diagnostics: {
          microbiology: [
            { test: 'Throat swab culture', finding: 'Strep. pyogenes', significance: 'Gold standard' },
            { test: 'Rapid test (Strep A)', finding: 'Positive', significance: 'Rapid' }
          ]
        },
        calculators: [
          {
            name: 'Centor Score (McIsaac) - Strep A Probability',
            items: [
              { label: 'Fever > 38°C', points: 1 },
              { label: 'Absence of cough', points: 1 },
              { label: 'Tender anterior cervical adenopathy', points: 1 },
              { label: 'Tonsillar swelling or exudate', points: 1 },
              { label: 'Age 3-14 years', points: 1 },
              { label: 'Age ≥ 45 years', points: -1 }
            ],
            interpretation: [
              { min: -1, max: 1, text: 'Low risk (<10%). No antibiotic needed.' },
              { min: 2, max: 3, text: 'Intermediate risk (15-30%). Culture or rapid test recommended.' },
              { min: 4, max: 5, text: 'High risk (>50%). Empiric antibiotics or testing.' }
            ]
          }
        ],
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
        prognosis: { mortality: 'Excellent with treatment', prognostic_scores: ['Centor Score (McIsaac)'] }
      },
      {
        id: 'mononucleosis',
        name: 'Infectious Mononucleosis (Kissing Disease)',
        pathogen: { type: 'Virus', name: '<i>Epstein-Barr virus</i> (EBV)', gram: 'dsDNA, Herpesviridae (HHV-4)', shape: 'spherical' },
        epidemiology: {
          incidence: 'Adolescents/young adults (90% infected by adulthood)',
          risk_groups: ['Young people'],
          seasonality: 'None',
          transmission: 'Saliva (kissing), droplet infection'
        },
        pathomechanism: {
          steps: [
            'EBV spreads via saliva and infects the epithelial cells of the oropharynx.',
            'It subsequently infects B-lymphocytes, establishing latent infection and immortalizing them.',
            'The body mounts a strong cellular immune response (CD8+ T-cells), leading to atypical lymphocytes ("virocytes") in the blood and enlargement of lymphoid organs.'
          ],
          virulence_factors: ['LMP, EBNA proteins']
        },
        clinical: {
          incubation: '4-6 weeks',
          onset: 'Gradual',
          symptoms: [
            { name: 'Sore throat', description: 'Severe pharyngitis, often with pseudomembranous exudate on the tonsils.', severity: 'severe' },
            { name: 'Fever', description: 'Prolonged fever, lasting up to 10-14 days.', severity: 'moderate' },
            { name: 'Lymphadenopathy', description: 'Generalized, symmetrical lymph node swelling, particularly affecting the posterior cervical chain.', severity: 'moderate' },
            { name: 'Fatigue', description: 'Pronounced weakness and fatigue that can persist for weeks to months.', severity: 'moderate' }
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
        id: 'mononucleosis_syndrome',
        name: 'Mononucleosis Syndrome (CMV, Toxoplasma, HIV)',
        pathogen: { type: 'Mixed', name: '<i>Cytomegalovirus (CMV), Toxoplasma gondii, HIV</i>', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Common, heterophile-negative mononucleosis cases',
          risk_groups: ['Sexually active young adults (CMV, HIV)', 'Cat owners/raw meat consumers (Toxo)'],
          seasonality: 'None',
          transmission: 'Body fluids (CMV, HIV), fecal-oral/meat (Toxo)'
        },
        pathomechanism: {
          steps: [
            'Pathogens (CMV, Toxoplasma, HIV) cause systemic infection triggering an immune response.',
            'Similar to EBV, they activate T-lymphocytes (atypical lymphocytes), but do not immortalize B-cells (unlike EBV).',
            'Symptoms result from the host immune response.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: 'Variable (CMV 20-60 days, HIV 2-4 weeks, Toxo 5-23 days)',
          onset: 'Gradual',
          symptoms: [
            { name: 'Fever', description: 'Prolonged fever (can last weeks), often the leading symptom.', severity: 'moderate' },
            { name: 'Lymphadenopathy', description: 'Generalized lymph node swelling, but less pronounced than in EBV.', severity: 'mild' },
            { name: 'Absence/Mild Pharyngitis', description: 'Unlike EBV, sore throat and tonsillitis are often absent or very mild (except acute HIV, where ulcers may occur).', severity: 'moderate' },
            { name: 'Hepatomegaly/Splenomegaly', description: 'Can occur, but rarer and milder than in EBV.', severity: 'mild' }
          ],
          physical_exam: ['Fever', 'Mild lymphadenopathy', 'Exanthema (common in HIV)', 'Absence of pharyngitis (CMV/Toxo)'],
          complications: ['Hepatitis', 'Pneumonia', 'Guillain-Barré syndrome', 'Congenital infection (in pregnancy!)']
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC', finding: 'Lymphocytosis, atypical mononuclear cells', interpretation: 'Similar to EBV' },
            { test: 'Liver enzymes', finding: 'Mild elevation', interpretation: 'Common' }
          ],
          microbiology: [
            { test: 'Monospot test', finding: 'NEGATIVE', significance: 'Key difference from EBV!' },
            { test: 'CMV serology', finding: 'IgM positive', significance: 'CMV confirmation' },
            { test: 'Toxoplasma serology', finding: 'IgM positive', significance: 'Toxoplasma confirmation' },
            { test: 'HIV test', finding: 'Ag/Ab positive / PCR', significance: 'Acute HIV exclusion mandatory!' }
          ]
        },
        differential: [
          { disease: 'EBV Mononucleosis', distinguishing: 'Severe pharyngitis, Monospot positive' },
          { disease: 'Streptococcal pharyngitis', distinguishing: 'Purulent tonsils, leukocytosis (not lymphocytosis)' },
          { disease: 'Lymphoma', distinguishing: 'Fever, weight loss, night sweats, fixed lymph nodes' }
        ],
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Symptomatic treatment' }] },
          targeted: 'CMV/Toxo: usually no treatment in immunocompetent. HIV: Start ART. Special treatment in pregnancy!',
          prevention: ['Hygiene', 'Safe sex', 'Cooking meat thoroughly']
        },
        guidelines: {
          diagnosis: [
            'Mononucleosis syndrome (fever, lymphocytosis) with negative Monospot test ("Heterophile-negative mononucleosis").',
            'Differentiation: CMV (older, fever dominates), Toxoplasma (cervical LN), Acute HIV (rash, risk behavior).'
          ],
          treatment_indications: [
            'Supportive. Specific therapy (Ganciclovir, Pyrimethamine/Sulfadiazine) in immunosuppressed or severe organ involvement.'
          ]
        },
        prognosis: { mortality: 'Excellent in immunocompetent' }
      },
      {
        id: 'exanthema_subitum',
        name: 'Exanthema Subitum (Roseola infantum / Sixth Disease)',
        pathogen: { type: 'Virus', name: '<i>Human Herpesvirus 6</i> (HHV-6)', gram: 'dsDNA, Herpesviridae', shape: 'spherical' },
        epidemiology: {
          incidence: 'Infants/toddlers (6 months - 2 years) almost all infected',
          risk_groups: ['Infants'],
          seasonality: 'Year-round',
          transmission: 'Saliva (from asymptomatic carrier adults)'
        },
        pathomechanism: {
          steps: [
            'HHV-6 spreads via droplets and establishes lifelong latent infection.',
            'During primary infection, the virus replicates in salivary glands and lymphocytes.',
            'Viremia causes high fever, and the rash appears via an immune-mediated mechanism when the fever abruptly subsides.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '5-15 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'High fever', description: 'Sudden onset of high fever (39-40°C) lasting 3-5 days, while the child\'s general condition remains surprisingly good.', severity: 'moderate' },
            { name: 'Rash', description: 'Pink, maculopapular rash appears on the trunk and then the neck simultaneously with or immediately after the fever drops.', severity: 'mild' },
            { name: 'Nagayama spots', description: 'Ulcers or papules on the soft palate and at the base of the uvula.', severity: 'mild' }
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
        pathogen: { type: 'Virus', name: '<i>Varicella-zoster virus</i> (VZV)', gram: 'dsDNA, Herpesviridae (HHV-3)', shape: 'spherical' },
        epidemiology: {
          incidence: 'Very common in childhood (unvaccinated)',
          risk_groups: ['Unvaccinated children', 'Immunocompromised', 'Pregnant women', 'Adults (more severe)'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet infection, vesicle fluid (airborne!)'
        },
        pathomechanism: {
          steps: [
            'Entry: VZV enters through the respiratory tract and replicates in regional lymph nodes.',
            'Viremia: Following primary viremia, the virus replicates in the liver and spleen, then a secondary T-cell associated viremia spreads it to the skin and mucous membranes.',
            'Skin Lesions: The virus infects epithelial cells in the skin, causing intraepidermal vesicles and necrosis.',
            'Latency: After infection, the virus retreats along sensory nerves to the dorsal root ganglia, where it remains latent.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '10-21 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Rash', description: 'Itchy, polymorphic rash (macules, papules, vesicles, crusts) appearing in waves, so all stages are visible simultaneously ("starry sky"). Fresh vesicles resemble "a dewdrop on a rose petal".', severity: 'moderate' },
            { name: 'Fever', description: 'Moderate fever accompanying the appearance of the rash.', severity: 'mild' },
            { name: 'Enanthema', description: 'Painful vesicles on the oral mucosa.', severity: 'moderate' }
          ],
          physical_exam: ['Polymorphic rash (also on scalp!)', 'Fever', 'Lymphadenopathy'],
          complications: ['Bacterial superinfection (impetiginization)', 'Cerebellitis (ataxia)', 'Pneumonia (adults)', 'Encephalitis', 'Reye syndrome (aspirin!)']
        },
        diagnostics: {
          microbiology: [{ test: 'Clinical picture', finding: 'Characteristic', significance: 'Diagnostic' }, { test: 'PCR', finding: 'VZV DNA', significance: 'In uncertain cases' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Cooling lotions NOT recommended (superinfection), rather powder or nothing. Itch relief.' }] },
          targeted: 'Acyclovir (for risk groups, adults, immunocompromised).',
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
        pathogen: { type: 'Virus', name: '<i>Varicella-zoster virus</i> (VZV) reactivation', gram: 'dsDNA', shape: '-' },
        epidemiology: {
          incidence: 'Mainly elderly, but also in immunocompromised children',
          risk_groups: ['Immunocompromised', 'Previous varicella'],
          seasonality: 'None',
          transmission: 'Vesicle fluid is infectious (can cause varicella in seronegative individuals)'
        },
        pathomechanism: {
          steps: [
            'Latent VZV reactivates in sensory ganglia (e.g., due to immunosuppression or aging).',
            'The virus travels along sensory nerve axons to the skin.',
            'It causes inflammation, pain, and a vesicular rash in the corresponding dermatome.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '-',
          onset: 'Starts with pain',
          symptoms: [
            { name: 'Pain', description: 'Prodromal burning, shooting pain in the affected dermatome, which may precede the rash by days.', severity: 'severe' },
            { name: 'Rash', description: 'Grouped, painful vesicles on an erythematous base, strictly unilateral and not crossing the midline.', severity: 'moderate' }
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
        pathogen: { type: 'Virus', name: '<i>Herpes Simplex Virus 1</i> (HSV-1)', gram: 'dsDNA, Herpesviridae', shape: 'spherical' },
        epidemiology: {
          incidence: 'Common in early childhood (1-3 years)',
          risk_groups: ['Toddlers'],
          seasonality: 'None',
          transmission: 'Saliva, direct contact'
        },
        pathomechanism: {
          steps: [
            'HSV-1 infects mucous membranes or broken skin via direct contact.',
            'Replication in epithelial cells causes cell death, vesicle formation, and ulcers.',
            'The virus enters sensory nerve endings and travels retrogradely to ganglia, where it becomes latent.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '2-12 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Gingivostomatitis', description: 'Primary infection in young children. High fever, painful, swollen, bleeding gums, and numerous ulcers in the mouth. Eating/drinking is painful.', severity: 'severe' },
            { name: 'Herpes labialis', description: 'Recurrent infection (cold sore), preceded by prodromal tingling.', severity: 'mild' },
            { name: 'Eczema herpeticum', description: 'Superinfection of atopic dermatitis, a severe condition with extensive vesicular rash and fever.', severity: 'severe' }
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
        pathogen: { type: 'Bacterium', name: '<i>Bordetella pertussis</i>', gram: 'Gram-negative', shape: 'bacillus' },
        epidemiology: {
          incidence: 'Epidemic in unvaccinated children',
          risk_groups: ['Infants (<6 months)', 'Unvaccinated children', 'Adults (milder)'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet infection (highly contagious! R0=12-17)'
        },
        pathomechanism: {
          steps: [
            'Adhesion: Bordetella pertussis adheres to ciliated respiratory epithelial cells (filamentous hemagglutinin).',
            'Toxin Effect: It produces toxins (pertussis toxin, tracheal cytotoxin) that paralyze cilia, inhibit mucociliary clearance, and cause local inflammation and necrosis.',
            'Systemic Effect: Pertussis toxin inhibits lymphocyte extravasation into lymph nodes, leading to extreme lymphocytosis in the blood.'
          ],
          virulence_factors: ['Pertussis toxin (PT)', 'Filamentous hemagglutinin (FHA)', 'Adenylate cyclase toxin (ACT)']
        },
        clinical: {
          incubation: '7-10 days',
          onset: 'Catarrhal phase (1-2 weeks)',
          symptoms: [
            { name: 'Catarrhal phase', description: 'Mild fever, coryza, cough (1-2 weeks). This is the most contagious phase but difficult to distinguish from a common cold.', severity: 'mild' },
            { name: 'Paroxysmal phase', description: 'Paroxysmal, spasmodic coughing fits followed by a deep, inspiratory "whoop". Vomiting often occurs after the fit. Apnea may be the leading symptom in infants.', severity: 'severe' },
            { name: 'Convalescent phase', description: 'Cough slowly subsides but may recur for months ("100-day cough").', severity: 'moderate' }
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
          supportive: ['Supportive (oxygen, rehydration)', 'Isolation (5 days after antibiotic)', 'Cough suppressants contraindicated (mucus retention!)'],
          prevention: ['DTP vaccine (mandatory, 3+1 doses)', 'Adult booster', 'Vaccination of pregnant women in 3rd trimester']
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
      },
      {
        id: 'hand_foot_mouth',
        name: 'Hand, Foot, and Mouth Disease (HFMD)',
        pathogen: { type: 'Virus', name: '<i>Coxsackie A16, Enterovirus 71</i>', gram: 'ssRNA, Picornaviridae', shape: 'icosahedral' },
        epidemiology: {
          incidence: 'Common in childhood (<5-10 years)',
          risk_groups: ['Young children', 'Communities'],
          seasonality: 'Summer-Autumn',
          transmission: 'Fecal-oral, droplet infection, vesicle fluid'
        },
        pathomechanism: {
          steps: [
            'The virus enters the oral cavity and replicates in the lymphoid tissues of the pharynx and intestine.',
            'Viremia spreads the virus to the skin and mucous membranes.',
            'It causes inflammation and vesicle formation on the skin and oral mucosa.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '3-7 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Prodrome', description: 'Fever, sore throat, anorexia, malaise.', severity: 'mild' },
            { name: 'Enanthema', description: 'Painful vesicles and ulcers on the tongue, buccal mucosa (herpangina-like).', severity: 'moderate' },
            { name: 'Exanthema', description: 'Non-itchy vesicles or papules with a red halo on palms, soles, and possibly the diaper area.', severity: 'moderate' }
          ],
          physical_exam: ['Vesicles on palms/soles', 'Ulcers in mouth', 'Fever'],
          complications: ['Dehydration (painful swallowing)', 'Nail shedding (onychomadesis - weeks later)', 'Aseptic meningitis (rare, EV71)', 'Encephalitis (EV71)']
        },
        diagnostics: {
          laboratory: [{ test: 'CBC', finding: 'Normal', interpretation: '-' }],
          microbiology: [
            { test: 'Clinical picture', finding: 'Characteristic', significance: 'Diagnostic' },
            { test: 'PCR', finding: 'Enterovirus RNA (throat, stool)', significance: 'In severe cases' }
          ]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Pain relief, fluids' }] },
          targeted: 'None.',
          prevention: ['Hygiene', 'Hand washing']
        },
        guidelines: {
          diagnosis: [
            'Clinical picture: Fever, oral ulcers, and rash on palms/soles.'
          ],
          treatment_indications: [
            'Supportive. Prevention of dehydration.'
          ]
        },
        prognosis: { mortality: 'Excellent, except EV71 encephalitis', prognostic_scores: [], factors: 'Pathogen type' }
      }
    ]
  }
});
