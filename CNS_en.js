Object.assign(window.diseases, {
  cns_infections: {
    name: 'Central Nervous System Infections',
    icon: '🧠',
    color: '#0891b2',
    diseases: [
      {
        id: 'csf_differential',
        name: 'Differential Diagnosis of CSF Findings',
        table: {
          headers: ['Parameter', 'Bacterial', 'Viral', 'Normal'],
          rows: [
            ['Opening Pressure', 'Elevated (>20 cmH2O)', 'Normal or slightly elevated', '6-20 cmH2O'],
            ['Appearance', 'Cloudy, purulent', 'Clear ("water-clear")', 'Clear, colorless'],
            ['Cell Count (WBC/µL)', '>1000 (often 100-10000)', '10-500 (rarely >1000)', '0-5'],
            ['Dominant Cell', 'Neutrophils (>80%)', 'Lymphocytes (PMN may be early!)', 'Lymphocytes/Monocytes'],
            ['Protein (g/L)', 'Elevated (>1 g/L)', 'Normal or slightly elevated (<1 g/L)', '0.15-0.45 g/L'],
            ['Glucose (mmol/L)', 'Decreased (<2.2 mmol/L)', 'Normal (>2.5 mmol/L)', '2.5-4.4 mmol/L'],
            ['CSF/Blood Glucose Ratio', '< 0.4', '> 0.6', '≥ 0.6'],
            ['Lactate', 'Elevated (>3.5 mmol/L)', 'Normal (<3.5 mmol/L)', '< 2.5 mmol/L'],
            ['Microbiology', 'Gram stain (+ 60-90%), Culture (+)', 'PCR (+), Gram/Culture negative', 'Negative']
          ]
        }
      },
      {
        id: 'bacterial_meningitis',
        name: 'Bacterial Meningitis (Empiric)',
        pathogen: { type: 'Bacterium', name: '<i>N. meningitidis, S. pneumoniae, L. monocytogenes</i>', gram: 'Mixed', shape: 'Pathogen dependent' },
        epidemiology: {
          incidence: '2-5/100,000 per year in developed countries',
          risk_groups: ['Neonates (<1 month)', 'Children', 'Adults >65 years', 'Asplenic patients', 'Complement deficiency', 'Cochlear implant recipients'],
          seasonality: 'Meningococcus: Winter-Spring',
          transmission: 'Droplet (Meningococcus), Endogenous (Pneumococcus), Vertical (GBS, Listeria)'
        },
        pathomechanism: {
          steps: [
            'Colonization and Invasion: Pathogens (e.g., Meningococcus, Pneumococcus) colonize the nasopharyngeal mucosa and invade the bloodstream (bacteremia).',
            'Crossing the Blood-Brain Barrier: Bacteria cross the endothelium of the choroid plexus or cerebral capillaries to enter the subarachnoid space.',
            'Replication and Inflammation: Bacteria multiply rapidly in the CSF (which lacks humoral immunity). Bacterial cell wall components (LPS, teichoic acid) trigger a massive inflammatory response via PRRs (cytokines: TNF-α, IL-1β).',
            'Cerebral Edema and ICP: Inflammation increases BBB permeability (vasogenic edema), reduces CSF absorption (interstitial edema), and causes cell swelling (cytotoxic edema).',
            'Consequence: The resulting cerebral edema raises intracranial pressure (ICP), reducing cerebral perfusion pressure (CPP), leading to ischemia and neuronal damage.'
          ],
          virulence_factors: ['Polysaccharide capsule', 'IgA protease', 'Lipooligosaccharide (LOS)', 'Pili/fimbriae']
        },
        clinical: {
          incubation: '2-10 days (Meningococcus), shorter (Pneumococcus)',
          onset: 'Acute, hours-days (can be hyperacute in Meningococcal disease)',
          symptoms: [
            { name: 'Classic Symptoms (Triad & Tetrad)', description: 'The classic triad (fever, nuchal rigidity, altered mental status) is present simultaneously in less than half of patients (44-50%). However, at least two of the four components of the classic tetrad (fever, severe/bursting headache, nuchal rigidity, altered mental status) are detectable in almost all patients (95-99%).', severity: 'severe' },
            { name: 'Prodromal Symptoms', description: 'Meningitis is often preceded by upper respiratory tract symptoms or pharyngitis. In pneumococcal cases, a history of otitis media, sinusitis, or pneumonia is common.', severity: 'mild' },
            { name: 'Meningeal Irritation Signs', description: '<b>Nuchal rigidity:</b> passive flexion of the neck towards the chest is restricted and painful. <b>Kernig\'s sign:</b> with the hip and knee flexed at 90 degrees, extension of the knee is painful and restricted. <b>Brudzinski\'s sign:</b> passive flexion of the neck causes involuntary flexion of the knees and hips.', severity: 'moderate' },
            { name: 'Jolt Accentuation of Headache', description: 'The patient is asked to turn their head horizontally back and forth rapidly 2-3 times per second. Positive if it worsens the headache. A highly sensitive clinical test (97% sensitivity) that helps detect meningeal irritation when classic signs are equivocal.', severity: 'moderate' },
            { name: 'Atypical Presentation in Infants & Neonates', description: 'Classic meningeal signs are frequently absent in this age group. Key symptoms include <b>paradoxical irritability</b> (crying worsens when held or comforted), poor feeding (anorexia, weak sucking), lethargy, a bulging or tense fontanelle, a high-pitched ("screaming") cry, vomiting, and hypotonia.', severity: 'severe' },
            { name: 'Atypical Presentation in the Elderly', description: 'Elderly patients often present with atypical or subtle features: nuchal rigidity may be absent or difficult to assess due to cervical osteoarthritis, and fever may be mild or replaced by hypothermia. Newly onset, unexplained confusion (delirium) and somnolence are often the sole presenting signs.', severity: 'severe' },
            { name: 'Systemic Signs & Early Sepsis ("Red Flags")', description: 'Especially in Meningococcal disease, early signs of sepsis can precede meningitis symptoms by hours: severe limb and muscle pain (myalgia), cold hands and feet, mottled skin (cutis marmorata), pallor, and rapidly progressive lethargy.', severity: 'severe' },
            { name: 'Skin Manifestations (Petechiae/Purpura)', description: 'Meningococcemia is characterized by petechiae (tiny, pinpoint hemorrhages) and purpuras (larger, coalescent ecchymoses) on the skin and mucous membranes, which do not fade under pressure (non-blanching rash / glass test). Their presence indicates hyperacute progression and requires emergency intervention.', severity: 'severe' },
            { name: 'Signs of Elevated Intracranial Pressure (ICP)', description: 'Cerebral edema causes elevated ICP presenting as: progressive alteration of consciousness (somnolence to coma), projectile vomiting (vomiting without preceding nausea), the <b>Cushing triad</b> (bradycardia, hypertension, and irregular respiration), pupillary inequality (anisocoria), and late-stage papilledema on fundoscopy.', severity: 'severe' },
            { name: 'Neurological Deficits & Seizures', description: 'Focal neurological deficits (hemiparesis, aphasia), cranial nerve palsies (most commonly cranial nerves III, IV, VI, VII, and VIII due to inflammation or compression at the skull base: diplopia, facial weakness, hearing loss), and generalized or focal seizures (occurring in 20-30% of patients).', severity: 'severe' }
          ],
          physical_exam: [
            'Nuchal rigidity (restricted passive neck flexion)',
            'Kernig\'s sign: restricted knee extension with flexed hip due to pain',
            'Brudzinski\'s sign: involuntary hip/knee flexion upon passive neck flexion',
            'Positive Jolt accentuation of headache',
            'Fever (high, but hypothermia or normal temperature can occur in neonates and the elderly)',
            'Altered mental status and decreased level of consciousness (GCS < 15)',
            'Focal neurological deficits (e.g., hemiparesis, aphasia)',
            'Cranial nerve palsies (especially III, IV, VI causing oculomotor disturbances; VII, VIII)',
            'Petechiae and purpura (non-blanching hemorrhagic rash)',
            'Signs of cerebral edema and elevated ICP (Cushing reflex: hypertension with bradycardia; anisocoria)',
            'Papilledema on fundoscopy (usually a late sign or in complicated cases)',
            'Physical signs of otitis media, sinusitis, or mastoiditis (suggestive of pneumococcus)',
            'Jaundice (seen in Listeria or complicated sepsis/DIC)'
          ],
          complications: [
            'Septic shock (particularly in Meningococcal meningitis)',
            'DIC (Disseminated Intravascular Coagulation) with skin necrosis and limb gangrene',
            'ARDS (Acute Respiratory Distress Syndrome)',
            'Cerebral edema and brain herniation (e.g., uncal or tonsillar)',
            'Cerebral infarctions (arterial or venous thrombosis due to vasculitis)',
            'Subdural effusion or subdural empyema',
            'Hydrocephalus (due to impaired CSF absorption or ventricular obstruction)',
            'Brain abscess (secondary infection or pneumococcal complication)',
            'Waterhouse-Friderichsen syndrome (acute adrenal insufficiency due to bilateral adrenal hemorrhage)',
            'Permanent hearing loss or deafness (especially after pneumococcal infection due to cochlear involvement)',
            'Cognitive deficits, memory impairment, and learning difficulties',
            'Epilepsy (due to residual epileptogenic foci)',
            'Persistent cranial nerve deficits (e.g., strabismus, nystagmus, facial paralysis)'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC', finding: 'Leukocytosis (15-30 G/L) with left shift', interpretation: 'Bacterial infection' },
            { test: 'CRP/PCT', finding: 'Significantly elevated (PCT >2)', interpretation: 'Bacterial sepsis' },
            { test: 'Blood PCR', finding: 'Meningococcus/Pneumococcus DNA', interpretation: 'NICE recommendation: take in all suspected cases!' },
            { test: 'Coagulation profile', finding: 'Signs of DIC (↓fibrinogen, ↑D-dimer)', interpretation: 'Meningococcus' }
          ],
          imaging: [
            { modality: 'CT Head', finding: 'Exclude contraindications', significance: 'Indicated before LP if: GCS <9, seizures, focal signs, papilledema' },
            { modality: 'MRI', finding: 'More sensitive for complications', significance: 'Empyema, infarction' }
          ],
          microbiology: [
            { test: 'CSF Analysis', finding: 'WBC >1000/µL (PMN), Protein >1 g/L, Glucose <40% of serum', significance: 'Typical for bacterial meningitis' },
            { test: 'CSF Lactate', finding: 'Elevated', significance: 'Helps differentiate from viral' },
            { test: 'CSF Gram Stain', finding: '60-90% positive', significance: 'Quick orientation' },
            { test: 'CSF/Blood Culture', finding: 'Pathogen isolation', significance: 'Antimicrobial susceptibility testing' },
            { test: 'CSF PCR (Multiplex)', finding: 'DNA detection', significance: 'Fast, sensitive, useful in pre-treated patients' },
            { test: 'CSF Latex Agglutination', finding: 'Antigen detection', significance: 'Fast, less sensitive' }
          ]
        },
        differential: [
          { disease: 'Viral Meningitis', distinguishing: 'Milder course, CSF: lymphocytes, normal glucose' },
          { disease: 'Tuberculous Meningitis', distinguishing: 'Subacute, low glucose, basilar meningitis' },
          { disease: 'Encephalitis', distinguishing: 'Altered mental status dominates, focal signs, milder CSF changes' },
          { disease: 'Subarachnoid Hemorrhage', distinguishing: 'Thunderclap headache, bloody/xanthochromic CSF' },
          { disease: 'Meningeal Carcinomatosis', distinguishing: 'Malignancy history, cytology' }
        ],
        therapy: {
          guidelines: ['NICE NG240 (2024): Meningitis (bacterial) and meningococcal disease'],
          empirical: {
            outpatient: [
              { drug: 'Benzylpenicillin or Ceftriaxone', dose: 'IM/IV stat', duration: 'Single dose', note: 'Only if hospital transfer is significantly delayed (NICE)' }
            ],
            inpatient: [
              { drug: 'Ceftriaxone', dose: '2 g IV every 12 hours (or 4 g once daily)', duration: 'Pathogen dependent', note: 'First choice (NICE). Alternative: Cefotaxime.' },
              { drug: '+ Ampicillin', dose: '2 g IV every 4 hours', duration: 'Pathogen dependent', note: 'If Listeria risk (>60 years, immunocompromised, pregnancy).' },
              { drug: 'Dexamethasone', dose: '10 mg IV every 6 hours', duration: '4 days', note: 'Administer BEFORE or WITH the first antibiotic dose. Avoid in septic shock without meningitis.' }
            ],
            icu: [
              { drug: 'Supportive Care', dose: '-', duration: '-', note: 'Airway protection, fluid resuscitation, vasopressors' }
            ]
          },
          targeted: 'N. meningitidis: 7 days; S. pneumoniae: 14 days; L. monocytogenes: 21 days; H. influenzae: 10 days; S. agalactiae (GBS): 14-21 days.',
          supportive: ['Fluid and electrolyte management', 'Intracranial pressure (ICP) monitoring', 'Seizure management', 'Droplet isolation (for Meningococcus, until 24h of effective antibiotics)'],
          prevention: ['Meningococcal vaccines (MenACWY, MenB)', 'Pneumococcal vaccines (PCV, PPSV)', 'Hib vaccine', 'Chemoprophylaxis for close contacts (Rifampicin, Ciprofloxacin, or Ceftriaxone)']
        },
        prognosis: {
          mortality: 'Overall 15-25% (Meningococcus ~10%, Pneumococcus 20-30%, Listeria 20-30%)',
          prognostic_scores: ['Glasgow Coma Scale', 'APACHE II Score'],
          factors: 'Age, pathogen virulence, time to treatment, level of consciousness, seizures, presence of shock'
        }
      },
      {
        id: 'meningococcal_meningitis',
        name: 'Meningococcal Meningitis',
        pathogen: { type: 'Bacterium', name: '<i>Neisseria meningitidis</i>', gram: 'Gram-negative', shape: 'diplococcus' },
        epidemiology: {
          incidence: 'Can be epidemic',
          risk_groups: ['Infants', 'Adolescents', 'Closed communities (dorms)', 'Asplenia'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet (close contact)'
        },
        pathomechanism: {
          steps: [
            'The bacterium colonizes the nasopharynx and enters the bloodstream.',
            'Rapid replication in blood releases massive amounts of endotoxin (LOS) (meningococcemia).',
            'Endotoxin triggers systemic inflammation, vasculitis, and disseminated intravascular coagulation (DIC).',
            'This leads to small vessel occlusion (skin necrosis, adrenal hemorrhage - Waterhouse-Friderichsen syndrome) and septic shock, often before meningitis develops.'
          ],
          virulence_factors: ['Capsule (A,B,C,W,Y)', 'LOS (Lipooligosaccharide)', 'IgA protease']
        },
        clinical: {
          incubation: '1-10 days',
          onset: 'Hyperacute (progressing within hours)',
          symptoms: [
            { name: 'Hyperacute Onset', description: 'Patient condition deteriorates dramatically within hours. High fever, chills, severe headache, and repeated vomiting are the first signs.', severity: 'severe' },
            { name: 'Hemorrhagic Rash (Petechiae & Purpura)', description: 'Initially tiny, blanching macules, rapidly (minutes to hours) evolving into petechiae (pinpoint bleeds) and purpura (large, irregular ecchymoses) that DO NOT fade under pressure (non-blanching rash). Commonly starts on the trunk and lower extremities.', severity: 'severe' },
            { name: 'Septic Shock & DIC', description: 'Cold, cyanotic extremities, mottled skin, tachycardia, tachypnea, hypotension, oliguria/anuria, and altered mental status. Disseminated intravascular coagulation (DIC) leads to extensive skin necrosis (gangrene) and multi-organ failure.', severity: 'severe' },
            { name: 'Waterhouse-Friderichsen Syndrome', description: 'Acute adrenal insufficiency caused by bilateral hemorrhagic necrosis of the adrenal glands, leading to refractory shock and death.', severity: 'severe' }
          ],
          physical_exam: [
            'Meningeal signs (nuchal rigidity, Kernig, Brudzinski)',
            'Non-blanching petechiae and purpura on skin and conjunctiva',
            'Signs of circulatory collapse and shock (tachycardia, hypotension, prolonged capillary refill time)',
            'Rapid deterioration of level of consciousness'
          ],
          complications: [
            'Septic shock and multi-organ dysfunction syndrome (MODS)',
            'Waterhouse-Friderichsen syndrome',
            'Disseminated intravascular coagulation (DIC)',
            'Amputations due to limb gangrene',
            'Skin scarring and soft tissue necrosis',
            'Deafness / hearing loss',
            'Brain herniation'
          ]
        },
        diagnostics: {
          laboratory: [{ test: 'CSF', finding: 'Purulent', interpretation: '-' }, { test: 'PCR', finding: 'Positive', interpretation: 'Rapid' }],
          microbiology: [{ test: 'Gram stain', finding: 'Gram-negative diplococci', significance: 'Rapid' }]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Ceftriaxone', dose: '2g IV every 12 hours', duration: '7 days', note: 'NICE NG240 recommendation' }] },
          targeted: 'Ceftriaxone for 7 days. Prophylaxis for contacts: Ciprofloxacin (single 500mg PO) or Rifampicin.',
          supportive: ['fluid-resuscitation', 'monitoring of ICP, cerebral perfusion pressure, and cerebral edema, pain management', 'antipyretics', 'seizure management'],
          prevention: ['Vaccination (MenACWY, MenB)']
        },
        prognosis: { mortality: '10-15% even with treatment', prognostic_scores: [], factors: 'Age, comorbidity, time to treatment' }
      },
      {
        id: 'pneumococcal_meningitis',
        name: 'Pneumococcal Meningitis',
        pathogen: { type: 'Bacterium', name: '<i>Streptococcus pneumoniae</i>', gram: 'Gram-positive', shape: 'diplococcus' },
        epidemiology: {
          incidence: 'Most common adult meningitis',
          risk_groups: ['Elderly', 'Alcoholics', 'Splenectomy', 'Otitis/Sinusitis/Pneumonia', 'CSF leak'],
          seasonality: 'Winter',
          transmission: 'Endogenous spread or droplet'
        },
        pathomechanism: {
          steps: [
            'Infection often spreads to meninges from an adjacent focus (otitis media, sinusitis, mastoiditis) or via bacteremia accompanying pneumonia.',
            'The pneumococcal capsule inhibits phagocytosis, and pneumolysin toxin directly damages cells and stimulates inflammation.',
            'This pathogen causes the most severe purulent meningitis, with frequent coma and permanent sequelae.'
          ],
          virulence_factors: ['Capsule', 'Pneumolysin']
        },
        clinical: {
          incubation: 'Short (1-3 days)',
          onset: 'Acute (stormy course)',
          symptoms: [
            { name: 'Severe Purulent Meningitis', description: 'Rapidly developing, excruciating headache, high fever, and early consciousness impairment. Deep somnolence, delirium, or coma are common, as well as early onset of generalized seizures.', severity: 'severe' },
            { name: 'Signs of Predisposing Focus', description: 'Frequently associated with concurrent pneumonia (cough, dyspnea, chest pain), otitis media (earache, hearing loss, otorrhea), or sinusitis (facial pain, nasal congestion).', severity: 'moderate' },
            { name: 'Focal Neurological Deficits', description: 'Cranial nerve palsies (especially oculomotor and auditory nerves) and hemiparesis are common due to accompanying vasculitis or cortical venous thrombosis.', severity: 'severe' }
          ],
          physical_exam: [
            'Prominent meningeal irritation signs',
            'Altered mental status (low GCS), coma',
            'Focal neurological deficits (paresis, aphasia)',
            'Cranial nerve palsies (III, IV, VI, VII, VIII)',
            'Otoscopic exam: signs of otitis media (congested, bulging tympanic membrane)',
            'Pulmonary crackles or dullness (signs of pneumonia)'
          ],
          complications: [
            'Sensorineural hearing loss or deafness (high rate due to cochlear inflammation/ossification)',
            'Hydrocephalus (due to impaired CSF absorption or obstruction)',
            'Brain abscess or subdural empyema',
            'Cerebral vasculitis and infarction',
            'Cognitive deficits and learning difficulties'
          ]
        },
        diagnostics: {
          laboratory: [{ test: 'CSF', finding: 'Purulent, very high protein, low sugar', interpretation: '-' },
          { test: 'Blood culture', finding: 'Positive in 20-40% of cases', interpretation: 'Important for antibiotic resistance testing' },
          { test: 'C-reactive protein (CRP)', finding: 'Elevated', interpretation: 'Marker of inflammation, not specific for etiology' },
          { test: 'Procalcitonin', finding: 'Elevated', interpretation: 'Marker of bacterial infection, can help differentiate from viral meningitis' }],

          imaging: [{ test: 'CT/MRI', finding: 'May show cerebral edema, hydrocephalus, or focal inflammation.', interpretation: 'Inconclusive for etiology but essential for complications' }],
          microbiology: [
            { test: 'Gram stain', finding: 'Gram-positive diplococci', significance: '-' },
            { test: 'Culture', finding: 'Positive for <i>S. pneumoniae</i>', significance: 'Definitive diagnosis' },
            { test: 'PCR', finding: 'Positive for <i>S. pneumoniae</i>', significance: 'Rapid diagnosis' },
            { test: 'Quellung reaction', finding: 'Positive for <i>S. pneumoniae</i>', significance: 'Rapid diagnosis' },
            { test: 'Optochin sensitivity', finding: 'Sensitive', significance: 'Rapid diagnosis' },
            { test: 'Bile solubility', finding: 'Soluble', significance: 'Rapid diagnosis' },
            { test: 'Catalase test', finding: 'Negative', significance: 'Rapid diagnosis' },
            { test: 'latex agglutination test', finding: 'Positive for <i>S. pneumoniae</i>', significance: 'Rapid diagnosis' },
            { test: 'pneumococcal capsular antigen test', finding: 'Positive for <i>S. pneumoniae</i>', significance: 'Rapid diagnosis' },
            { test: 'pneumococcal polysaccharide vaccine', finding: 'Positive for <i>S. pneumoniae</i>', significance: 'Rapid diagnosis' }]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Ceftriaxone', dose: '2g IV every 12 hours', duration: '14 days', note: 'NICE NG240 recommendation' }, { drug: 'Dexamethasone', dose: '10mg IV every 6 hours', duration: '4 days', note: 'Continue if Pneumococcus is confirmed!' }] },
          targeted: 'Ceftriaxone for 14 days. If resistance confirmed: + Vancomycin/Rifampicin.',
          supportive: ['fluid-resuscitation', 'adequate pain management', 'antipyretics', 'seizure management', 'Hydration', 'Monitoring for ICP, edema, and complications', 'hearing evaluation'],
          prevention: ['Pneumococcal vaccine (PCV, PPSV)']
        },
        prognosis: { mortality: '20-30%, high morbidity', prognostic_scores: [], factors: 'Age, immune status' }
      },
      {
        id: 'listeria_meningitis',
        name: 'Listeria Meningitis',
        pathogen: { type: 'Bacterium', name: '<i>Listeria monocytogenes</i>', gram: 'Gram-positive', shape: 'rod' },
        epidemiology: {
          incidence: 'Rare but dangerous',
          risk_groups: ['Neonates', 'Elderly (>50 years)', 'Pregnant women', 'Immunocompromised (transplant, alcoholic)'],
          seasonality: 'None',
          transmission: 'Food (soft cheese, cold cuts)'
        },
        pathomechanism: {
          steps: [
            'Bacteria enter via contaminated food, penetrate the gut wall, and enter the bloodstream.',
            'It has a specific tropism for the brainstem (rhombencephalon) and meninges.',
            'As an intracellular pathogen, it spreads cell-to-cell, evading antibodies. Cellular immunity is crucial (which is weaker in infants, elderly, pregnant).',
            'Forms microabscesses and granulomas in the brainstem.'
          ],
          virulence_factors: ['Intracellular survival', 'Listeriolysin O']
        },
        clinical: {
          incubation: '1-4 weeks (long and variable)',
          onset: 'Subacute, gradual',
          symptoms: [
            { name: 'Subacute Course', description: 'Symptoms may develop more slowly over days to weeks, not as stormy as other bacterial meningitides. Mild fever, malaise, and headache are typical initially, mimicking viral infections.', severity: 'moderate' },
            { name: 'Rhombencephalitis (Brainstem Involvement)', description: 'Listeria has a specific tropism for the brainstem, causing brainstem encephalitis. Symptoms include cranial nerve palsies (e.g., facial palsy, dysphagia, dysarthria), ataxia, nystagmus, tremor, and central respiratory distress.', severity: 'severe' },
            { name: 'Absence of Meningeal Signs', description: 'Nuchal rigidity and other classic meningeal signs are absent in a significant proportion of patients (up to 30-40%), making early diagnosis difficult.', severity: 'severe' },
            { name: 'Atypical Presentation in Risk Groups', description: 'Primarily occurs in pregnant women (flu-like febrile illness, but causes fetal loss or stillbirth), neonates, the elderly, and patients with impaired cellular immunity.', severity: 'severe' }
          ],
          physical_exam: [
            'Mild or absent meningeal irritation signs',
            'Brainstem and cerebellar signs: ataxia, nystagmus, tremor, dysarthria',
            'Bilateral or asymmetric cranial nerve palsies (especially VII, IX, X)',
            'Confusion, delirium, fluctuating level of consciousness'
          ],
          complications: [
            'Brainstem microabscesses and brain abscess',
            'Hydrocephalus',
            'Fetal loss, abortion, or premature birth in pregnant women',
            'Persistent cranial nerve palsies and ataxia'
          ]
        },
        diagnostics: {
          laboratory: [{ test: 'CSF', finding: 'Can be lymphocytic! (not always PMN)', interpretation: 'Misleading' }],
          microbiology: [{ test: 'Gram stain', finding: 'Often negative or Gram+ rods (can be mistaken for diphtheroids)', significance: '-' }]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Amoxicillin / Ampicillin', dose: '2g IV every 4 hours', duration: '21 days', note: 'NICE NG240 recommendation. Cephalosporins are INEFFECTIVE!' }, { drug: '+ Gentamicin', dose: '5mg/kg IV once daily', duration: 'First 7 days', note: 'Synergistic effect' }] },
          targeted: 'Amoxicillin/Ampicillin (21 days) + Gentamicin (first 7 days). In penicillin allergy: Cotrimoxazole (Trimethoprim/Sulfamethoxazole).',
          supportive: ['fluid-resuscitation', 'adequate pain management', 'antipyretics', 'seizure management'],
          prevention: ['Food hygiene in risk groups']
        },
        prognosis: { mortality: '20-30%', prognostic_scores: [], factors: 'Age, immune status' }
      },
      {
        id: 'aseptic_meningitis',
        name: 'Aseptic (Viral) Meningitis',
        pathogen: { type: 'Virus', name: 'Enteroviruses (<i>Coxsackie, Echo</i>), <i>HSV-2, VZV</i>', gram: 'RNA/DNA', shape: '-' },
        epidemiology: {
          incidence: 'Most common form of meningitis',
          risk_groups: ['Children', 'Young adults'],
          seasonality: 'Summer-Autumn (Enterovirus)',
          transmission: 'Fecal-oral (Entero), Sexual (HSV-2)'
        },
        pathomechanism: {
          steps: [
            'The virus (e.g., Enterovirus) enters the bloodstream from the gut or respiratory tract (viremia).',
            'It crosses the blood-brain barrier to infect the meninges and choroid plexus.',
            'It triggers an inflammatory response (mainly lymphocytic), but unlike bacterial infection, no purulent exudate forms, and the brain parenchyma is usually spared (hence clear consciousness).',
            'The process is usually self-limiting; the immune system clears the infection.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '3-7 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Meningeal Syndrome', description: 'Frontal or retro-orbital headache (often described as intense and throbbing), fever (typically 38-40°C), marked photophobia (light aversion), phonophobia (sound intolerance), and nuchal rigidity. The headache typically worsens with head movements and is aggravated by bright light.', severity: 'moderate' },
            { name: 'Clear Consciousness (Key Differential Feature)', description: 'The most important distinguishing feature from encephalitis and bacterial meningitis: the patient remains alert, fully oriented, with preserved cognitive functions and no focal neurological deficits. Although patients may appear unwell and irritable, there is no confusion, personality change, or altered consciousness.', severity: 'mild' },
            { name: 'Gastrointestinal Symptoms', description: 'Nausea, repeated vomiting (not projectile), anorexia, and occasionally diarrhea. Especially common with enteroviral etiology.', severity: 'mild' },
            { name: 'Systemic and Pathogen-Specific Signs', description: 'Enterovirus: maculopapular or petechial rash, herpangina, hand-foot-and-mouth disease, pleurodynia (Bornholm disease), sore throat, diarrhea. HSV-2: concurrent or recent genital herpes lesions, sacral radiculitis (urinary retention). VZV: varicella or zoster rash (can appear days before or after meningitis). Mumps: parotitis and orchitis.', severity: 'mild' },
            { name: 'Early Neutrophilic Phase (Diagnostic Pitfall)', description: 'In the first 24-48 hours of enteroviral meningitis, the CSF may show a neutrophil predominance, closely mimicking bacterial meningitis. This typically shifts to lymphocytic predominance within 12-24 hours upon repeat LP, but the initial picture can cause significant diagnostic uncertainty.', severity: 'moderate' }
          ],
          physical_exam: [
            'Meningeal irritation signs present but milder than in bacterial meningitis (nuchal rigidity, Kernig, Brudzinski may be subtle)',
            'Positive Jolt accentuation of headache (sensitive even when classic signs are mild)',
            'Consciousness clear, patient oriented and coherent (key difference from encephalitis!)',
            'Fever (moderate, typically 38-40°C)',
            'No focal neurological deficits (absence of hemiparesis, aphasia, cranial nerve palsies)',
            'Pathogen-specific findings: pharyngeal erythema, skin rash (enterovirus), genital vesicles (HSV-2), vesicular rash in dermatomal distribution (VZV), parotid swelling (mumps)',
            'Mild conjunctival injection possible',
            'Fundoscopy: normal (no papilledema)'
          ],
          complications: [
            'Meningoencephalitis (rare, transition to brain parenchymal involvement with consciousness changes)',
            'Transient cranial nerve palsies (especially VII)',
            'Febrile seizures in young children',
            'Mollaret meningitis (recurrent benign lymphocytic meningitis, typically HSV-2)',
            'Transverse myelitis (rare, primarily with enterovirus D68/A71)',
            'Myocarditis or pericarditis (enteroviral)',
            'Post-infectious fatigue syndrome'
          ]
        },
        diagnostics: {
          laboratory: [{ test: 'CSF', finding: 'Lymphocytic pleocytosis (tens-hundreds), normal glucose, slightly elevated protein', interpretation: 'Viral profile' }],
          microbiology: [{ test: 'CSF PCR', finding: 'Enterovirus/HSV/VZV', significance: 'Diagnostic' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Pain relief, Rest' }] },
          targeted: 'Consider Acyclovir for HSV-2/VZV (especially in immunocompromised). Enterovirus: symptomatic.',
          supportive: [],
          prevention: ['Hygiene']
        },
        prognosis: { mortality: 'Excellent, spontaneous recovery', prognostic_scores: [], factors: 'None' }
      },
      {
        id: 'viral_encephalitis',
        name: 'Viral Encephalitis',
        pathogen: { type: 'Virus', name: '<i>HSV-1, VZV</i>, Enteroviruses, Arboviruses', gram: 'DNA/RNA viruses', shape: 'variable' },
        epidemiology: {
          incidence: '0.5-7/100,000 per year',
          risk_groups: ['Neonates (HSV-2)', 'Immunocompromised patients', 'Elderly (VZV reactivation)', 'Travelers to endemic areas (Arboviruses)'],
          seasonality: 'Enterovirus: Summer-Autumn; HSV: Year-round',
          transmission: 'HSV: Reactivation/Primary; Enterovirus: Fecal-oral; Arbovirus: Vector-borne (Mosquito/Tick)'
        },
        pathomechanism: {
          steps: [
            'Entry: Viruses reach the CNS via hematogenous spread (e.g., Arboviruses) or neural pathways (e.g., HSV, Rabies).',
            'Neurotropism: Viruses directly infect neurons and glial cells. HSV-1 specifically targets the temporal and frontal lobes (via olfactory or trigeminal routes).',
            'Mechanism of Injury: Neuronal death is caused by direct viral cytopathic effects and the host\'s cytotoxic T-cell immune response.',
            'Histology: Perivascular lymphocytic infiltration, neuronophagia, and microglial nodules. HSV causes hemorrhagic necrosis.',
            'Consequence: Cerebral edema, inflammation, hemorrhage, and extensive neuronal death leading to focal deficits and altered consciousness.'
          ],
          virulence_factors: ['HSV: Glycoproteins (gB, gC, gD) for cell entry', 'VZV: Latency in sensory ganglia', 'Enterovirus: Capsid proteins']
        },
        clinical: {
          incubation: 'Variable depending on pathogen (HSV reactivation: variable, TBE: 7-14 days, arboviruses: 4-14 days)',
          onset: 'Acute or subacute (progressing over hours to days)',
          symptoms: [
            { name: 'Altered Mental Status (Hallmark Feature)', description: 'The key distinguishing feature from meningitis. Manifests as confusion, disorientation, delirium, personality and behavioral changes, lethargy, or coma. The patient is NOT alert and oriented, unlike in meningitis.', severity: 'severe' },
            { name: 'Fever and Headache', description: 'High fever and diffuse, dull headache are present in almost all cases (>90%), frequently accompanied by nausea and vomiting.', severity: 'moderate' },
            { name: 'Focal Neurological Deficits', description: 'Deficits corresponding to the location of the affected brain regions: hemiparesis, aphasia (speech disturbance), ataxia, sensory deficits, and cranial nerve palsies.', severity: 'severe' },
            { name: 'Seizures', description: 'Common (20-30%), may be focal or generalized (tonic-clonic), often presenting as difficult-to-control epileptic episodes.', severity: 'severe' },
            { name: 'Neuropsychiatric Symptoms', description: 'Agitation, hallucinations, psychosis, and severe memory disturbances (retrograde and anterograde amnesia – particularly in viruses affecting the temporal lobe).', severity: 'severe' }
          ],
          physical_exam: [
            'Decreased level of consciousness (GCS < 15, somnolence, sopor, coma)',
            'Cognitive dysfunction, disorientation, confused speech',
            'Focal motor and sensory neurological deficits (hemiparesis, reflex asymmetry, Babinski sign)',
            'Signs of cranial nerve palsies (e.g., asymmetric facial movement, oculomotor disturbances)',
            'Mild, equivocal meningeal irritation signs (as inflammation primarily involves the parenchyma)'
          ],
          complications: [
            'Permanent neurological and cognitive sequelae (e.g., aphasia, paresis, intellectual deterioration)',
            'Secondary (post-encephalitic) epilepsy',
            'Severe cerebral edema with herniation',
            'Death (untreated HSV-1 up to 70%, but significant mortality with other neurotropic viruses as well)'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC', finding: 'Variable (Leukocytosis or Normal)', interpretation: 'Non-specific' },
            { test: 'CRP', finding: 'Normal or Moderately elevated', interpretation: 'Usually lower than in bacterial meningitis' },
            { test: 'Renal/Liver function', finding: 'Baseline assessment', interpretation: 'Monitor for Acyclovir nephrotoxicity' }
          ],
          imaging: [
            { modality: 'MRI Brain', finding: 'HSV: Asymmetric hyperintensity in temporal/frontal lobes (T2/FLAIR)', significance: 'Gold standard imaging. Perform early.' },
            { modality: 'CT Head', finding: 'Often normal in early stages', significance: 'To exclude mass effect before LP' }
          ],
          microbiology: [
            { test: 'CSF PCR', finding: 'HSV-1/2, VZV, Enterovirus, Arbovirus', significance: 'Gold standard. False negative possible in first 24-48h.' },
            { test: 'CSF Analysis', finding: 'Lymphocytic pleocytosis (10-500 cells/µL), Protein normal/mildly elevated, Glucose normal', significance: 'Viral profile' },
            { test: 'CSF Erythrocytes', finding: 'Elevated RBCs, Xanthochromia', significance: 'Suggests hemorrhagic necrosis (HSV)' },
            { test: 'Serology (Serum/CSF)', finding: 'IgM or 4-fold IgG rise (Arboviruses)', significance: 'Often retrospective' }
          ]
        },
        differential: [
          { disease: 'Bacterial Meningitis', distinguishing: 'More acute, CSF: PMN predominance, Hypoglycorrhachia' },
          { disease: 'Autoimmune Encephalitis', distinguishing: 'Subacute, psychiatric features, Anti-NMDA-R antibodies' },
          { disease: 'Brain Abscess', distinguishing: 'Imaging: Ring-enhancing lesion' },
          { disease: 'Toxic-Metabolic Encephalopathy', distinguishing: 'Metabolic derangements, Toxins, No fever/pleocytosis' },
          { disease: 'Non-convulsive Status Epilepticus', distinguishing: 'EEG diagnostic' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'No outpatient treatment', dose: 'Immediate hospitalization', duration: '', note: 'High mortality without treatment' }
            ],
            inpatient: [
              { drug: 'Acyclovir', dose: '10 mg/kg IV every 8 hours', duration: '14-21 days', note: 'Start empirically if HSV suspected' }
            ],
            icu: [
              { drug: 'Acyclovir', dose: '10 mg/kg IV every 8 hours', duration: '21 days', note: 'For immunocompromised or severe cases' },
              { drug: 'Anticonvulsants', dose: 'e.g., Levetiracetam', duration: '', note: 'For seizure control' }
            ]
          },
          targeted: 'HSV/VZV: Acyclovir; CMV: Ganciclovir/Foscarnet; Enterovirus: Supportive',
          supportive: ['ICP Management', 'Seizure Control', 'Fluid/Electrolyte Balance', 'Rehabilitation'],
          prevention: ['VZV Vaccination', 'Vector control (Arboviruses)', 'C-section for active genital herpes to prevent Neonatal HSV']
        },
        prognosis: {
          mortality: 'HSV untreated >70%, treated ~20-30%; Enterovirus <1%',
          prognostic_scores: ['GCS at presentation', 'Age'],
          factors: 'Time to Acyclovir, Age, GCS, Viral load'
        }
      },
      {
        id: 'herpes_encephalitis',
        name: 'Herpes Simplex Encephalitis',
        pathogen: { type: 'Virus', name: '<i>Herpes Simplex Virus 1</i> (HSV-1)', gram: 'dsDNA', shape: 'spherical' },
        epidemiology: {
          incidence: 'Most common sporadic fatal encephalitis',
          risk_groups: ['Anyone (no seasonality)'],
          seasonality: 'None',
          transmission: 'Reactivation (trigeminal ganglion) or Primary infection'
        },
        pathomechanism: {
          steps: [
            'Latent virus reactivates in the trigeminal ganglion and travels retrogradely via nerve fibers back to the brain.',
            'It selectively attacks the temporal and frontal lobes and the limbic system.',
            'Viral replication and immune response cause severe, asymmetric, necrotizing, hemorrhagic inflammation in these areas.',
            'Resulting cerebral edema and temporal lobe swelling can lead to uncal herniation.'
          ],
          virulence_factors: ['Neurovirulence genes']
        },
        clinical: {
          incubation: 'Variable (days in primary infection, but most commonly due to reactivation of latent virus)',
          onset: 'Acute, rapidly progressive (developing over hours to days)',
          symptoms: [
            { name: 'Prodromal Phase', description: 'Fever, headache, nausea, malaise, and lethargy lasting 1-5 days before the onset of neurological symptoms.', severity: 'moderate' },
            { name: 'Personality and Behavioral Changes (Characteristic)', description: 'Due to hemorrhagic necrosis of the frontotemporal lobes and limbic system, early features include bizarre behavior, hallucinations (frequently repulsive olfactory or gustatory hallucinations), hallucinatory delirium, agitation, and psychosis. Often initially misdiagnosed as a psychiatric condition.', severity: 'severe' },
            { name: 'Severe Cognitive Deficit and Amnesia', description: 'Anterograde amnesia (inability to retain new memories) and Wernicke-type sensory aphasia (impaired speech comprehension) are highly characteristic features.', severity: 'severe' },
            { name: 'Focal Signs and Seizures', description: 'Generalized or focal seizures (frequently presenting as temporal lobe epilepsy with olfactory aura), hemiparesis, and cranial nerve palsies.', severity: 'severe' }
          ],
          physical_exam: [
            'Somnolence, confusion, hallucinations, or coma',
            'Aphasia (impaired speech comprehension and production)',
            'Focal neurological deficits (predominantly contralateral hemiparesis)',
            'Severe short-term memory impairment on bedside testing',
            'Anisocoria or signs of cranial nerve palsies'
          ],
          complications: [
            'Cerebral edema and temporal lobe herniation (uncal herniation – sudden death)',
            'Klüver-Bucy syndrome (bilateral temporal lobe damage: hyperorality, hypersexuality, absence of fear, visual agnosia)',
            'Permanent, severe anterograde amnesia (Korsakoff-like state)',
            'Persistent aphasia and neurological deficits',
            'Death (>70% without treatment, 20-30% even with early acyclovir)'
          ]
        },
        diagnostics: {
          laboratory: [{ test: 'CSF', finding: 'Lymphocytic, elevated RBCs (xanthochromia), elevated protein', interpretation: 'Hemorrhagic necrosis' }],
          imaging: [{ modality: 'MRI', finding: 'Asymmetric hyperintensity in temporal lobe (T2/FLAIR)', significance: 'Pathognomonic' }],
          microbiology: [{ test: 'CSF PCR', finding: 'HSV-1 DNA', significance: 'Gold standard' }]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Acyclovir', dose: '10 mg/kg IV every 8 hours', duration: '14-21 days', note: 'Start immediately upon suspicion!' }] },
          targeted: 'Acyclovir IV. Repeat if relapse occurs.',
          supportive: ['Seizure control', 'Cerebral edema management'],
          prevention: ['None']
        },
        prognosis: { mortality: 'Untreated >70%, treated 20-30%', prognostic_scores: [], factors: 'Age, Immune status, Time to treatment' }
      },
      {
        id: 'tbe',
        name: 'Tick-Borne Encephalitis (TBE)',
        pathogen: { type: 'Virus', name: '<i>Tick-Borne Encephalitis Virus</i>', gram: 'RNA, Flaviviridae', shape: 'spherical' },
        epidemiology: {
          incidence: 'Endemic in Central Europe',
          risk_groups: ['Forest goers', 'Tick bite'],
          seasonality: 'Spring-Autumn',
          transmission: 'Tick bite, unpasteurized milk'
        },
        pathomechanism: {
          steps: [
            'The virus enters via the saliva of an infected tick.',
            'Phase 1 (Viremia): The virus replicates in lymph nodes and spleen, causing flu-like symptoms.',
            'Phase 2 (Neuroinvasion): In some patients, the virus crosses the blood-brain barrier and attacks the meninges (meningitis), brain parenchyma (encephalitis), or spinal cord (myelitis).',
            'Spinal cord involvement typically destroys anterior horn motor neurons, leading to flaccid paralysis.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '7-14 days (after tick bite, rarely 4-28 days)',
          onset: 'Characteristically biphasic course',
          symptoms: [
            { name: 'Phase 1 (Viremic Phase)', description: 'Sudden onset of influenza-like symptoms: moderate fever, fatigue, headache, myalgia, arthralgia, and anorexia. This lasts 2-7 days, followed by a completely symptom-free interval of 1-3 weeks.', severity: 'mild' },
            { name: 'Phase 2 (Neuroinvasive Phase)', description: 'In approximately 20-30% of patients, fever returns (often higher than in Phase 1), and neurological symptoms develop. Three clinical forms: Meningitis (milder, headache and meningeal signs), Meningoencephalitis (confusion, ataxia, cognitive disturbances), Meningoencephalomyelitis (paralysis – most severe form).', severity: 'severe' },
            { name: 'Flaccid Paralysis', description: 'Characteristic damage to the anterior horn motor neurons of the spinal cord results in asymmetric, flaccid paralysis, most commonly affecting the shoulder girdle and upper limbs (similar to poliomyelitis). Proximal muscles are affected more than distal.', severity: 'severe' }
          ],
          physical_exam: [
            'Prominent fine-wave hand and tongue tremor',
            'Ataxia, unsteady stance and gait (cerebellar involvement)',
            'Asymmetric flaccid paralysis (predominantly shoulder girdle and arms, with diminished or absent deep tendon reflexes)',
            'Meningeal irritation signs in the second phase',
            'Altered mental status (in the encephalitic form)'
          ],
          complications: [
            'Permanent flaccid paralysis (especially of the upper limbs and shoulder girdle)',
            'Post-encephalitic syndrome (chronic fatigue, headache, concentration and memory difficulties lasting months to years)',
            'Permanent cognitive deficits and personality changes',
            'Cranial nerve palsies (especially VII, IX, X – facial paralysis, dysphagia)',
            'Central respiratory failure (in severe myelitis – requiring mechanical ventilation)',
            'Secondary epilepsy'
          ]
        },
        diagnostics: {
          laboratory: [{ test: 'CSF', finding: 'Lymphocytic pleocytosis', interpretation: '-' }],
          microbiology: [{ test: 'Serology (IgM/IgG)', finding: 'Blood and CSF', significance: 'Diagnostic (PCR often negative in phase 2!)' }]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'No specific therapy' }] },
          targeted: 'Symptomatic treatment (edema reduction, rehabilitation).',
          supportive: [],
          prevention: ['Vaccination (FSME-Immun, Encepur)', 'Tick protection']
        },
        prognosis: { mortality: '1-2% (European subtype)', prognostic_scores: [], factors: 'Subtype, time of treatment' }
      },
      {
        id: 'cryptococcal_meningitis',
        name: 'Cryptococcal Meningitis',
        pathogen: { type: 'Fungus', name: '<i>Cryptococcus neoformans</i>', gram: 'Yeast (encapsulated)', shape: 'round' },
        epidemiology: {
          incidence: 'Most common fungal meningitis in HIV/AIDS patients',
          risk_groups: ['HIV (CD4 <100)', 'Transplant recipients', 'Steroid treatment'],
          seasonality: 'None',
          transmission: 'Inhalation (pigeon dropping dust) -> lung -> hematogenous spread'
        },
        pathomechanism: {
          steps: [
            'Fungus enters lungs via inhalation, causing primary infection (often asymptomatic).',
            'In immunosuppression (e.g., AIDS), it disseminates via blood to the brain.',
            'Its thick polysaccharide capsule protects it from phagocytosis.',
            'Accumulation in arachnoid villi blocks CSF absorption, leading to extremely high intracranial pressure without purulent inflammation.'
          ],
          virulence_factors: ['Polysaccharide capsule', 'Melanin production']
        },
        clinical: {
          incubation: 'Unknown (reactivation)',
          onset: 'Subacute/Chronic (weeks)',
          symptoms: [
            { name: 'Slow Progression', description: 'Symptoms develop over weeks. Leading symptoms are worsening headache and fever.', severity: 'moderate' },
            { name: 'High ICP Symptoms', description: 'Due to blocked CSF absorption: visual disturbances (diplopia, blurriness), nausea, altered mental status.', severity: 'severe' },
            { name: 'Absence of Meningeal Signs', description: 'Since inflammatory response is weak (few WBCs), nuchal rigidity is often absent!', severity: 'severe' }
          ],
          physical_exam: ['Meningeal signs often absent!', 'Papilledema (high ICP)', 'Skin symptoms (molluscum-like)'],
          complications: ['High intracranial pressure (blindness, herniation)', 'Cryptococcoma', 'IRIS (at therapy start)']
        },
        diagnostics: {
          laboratory: [{ test: 'CD4', finding: '<100/µL', interpretation: 'Risk' }],
          imaging: [{ modality: 'CT/MRI', finding: 'Often normal, or dilated perivascular spaces, cryptococcoma', significance: 'Exclusion' }],
          microbiology: [
            { test: 'CSF CrAg (antigen)', finding: 'Positive', significance: 'Gold standard (also from blood!)' },
            { test: 'India ink stain', finding: 'Encapsulated yeasts', significance: 'Rapid, but less sensitive' },
            { test: 'CSF culture', finding: 'C. neoformans', significance: 'Diagnostic' },
            { test: 'CSF pressure', finding: 'Often extremely high (>25 cmH2O)', significance: 'Therapeutic tap required' }
          ]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Amphotericin B + Flucytosine', dose: 'IV + PO', duration: '2 weeks (induction)', note: 'Gold standard' }] },
          targeted: 'Induction (AmB+5FC) -> Consolidation (Fluconazole 400mg 8 weeks) -> Maintenance (Fluconazole 200mg 1 year/CD4>200).',
          supportive: ['Repeated LP to lower pressure (vital!)'],
          prevention: ['Fluconazole prophylaxis (if blood CrAg positive)', 'Start ART (but carefully due to IRIS)']
        },
        prognosis: { mortality: 'With treatment 10-30%, untreated 100%', prognostic_scores: [], factors: 'Time of treatment, immune status' }
      },
      {
        id: 'naegleria_meningitis',
        name: 'Primary Amoebic Meningoencephalitis (PAM)',
        pathogen: { type: 'Protozoan', name: '<i>Naegleria fowleri</i>', gram: '-', shape: 'amoeba' },
        epidemiology: {
          incidence: 'Very rare, but fatal',
          risk_groups: ['Children/young adults', 'Freshwater swimmers'],
          seasonality: 'Summer (warm water)',
          transmission: 'Water entering nose -> olfactory nerve -> brain'
        },
        pathomechanism: {
          steps: [
            'Water enters the nose during swimming in warm fresh water.',
            'The amoeba penetrates the nasal mucosa and cribriform plate.',
            'It migrates along the olfactory nerve directly to the frontal lobes of the brain.',
            'Multiplying in brain tissue, it enzymatically dissolves and "eats" brain tissue, causing massive hemorrhagic necrosis and edema.'
          ],
          virulence_factors: ['Tissue-degrading enzymes', 'Amebostome (feeding apparatus)']
        },
        clinical: {
          incubation: '1-9 days (average 5)',
          onset: 'Fulminant',
          symptoms: [
            { name: 'Initial Symptoms', description: 'Sudden onset of excruciating frontal headache, fever, nausea. Often preceded by smell/taste disturbances (parosmia/ageusia).', severity: 'severe' },
            { name: 'Progression', description: 'Rapid development of stiff neck, hallucinations, seizures, and coma. Death occurs within 3-7 days due to cerebral edema and herniation.', severity: 'severe' }
          ],
          physical_exam: ['Meningeal irritation', 'Coma', 'Rapid deterioration'],
          complications: ['Herniation', 'Death (within 3-7 days)']
        },
        diagnostics: {
          laboratory: [{ test: 'CSF', finding: 'Purulent (PMN), RBCs, low sugar', interpretation: 'Looks bacterial!' }],
          microbiology: [
            { test: 'CSF microscopy (wet mount)', finding: 'Motile amoebas', significance: 'Diagnostic (but experience needed)' },
            { test: 'PCR', finding: 'Naegleria DNA', significance: 'CDC/Reference lab' }
          ]
        },
        therapy: {
          empirical: { icu: [{ drug: 'Miltefosine + Amphotericin B + Rifampicin + Fluconazole + Azithromycin', dose: 'Combination', duration: '?', note: 'Experimental, few survivors' }] },
          targeted: 'Miltefosine is the key drug. Cooling (hypothermia) may help.',
          supportive: [],
          prevention: ['Nose clip in warm fresh water', 'Nasal irrigation only with sterile water']
        },
        prognosis: { mortality: '>97% (almost always fatal)', prognostic_scores: [], factors: 'Availability of treatment' }
      },
      {
        id: 'brain_abscess',
        name: 'Brain Abscess',
        pathogen: { type: 'Bacterium', name: '<i>Streptococcus</i> spp., <i>Staphylococcus aureus</i>, Anaerobes', gram: 'Mixed', shape: 'Mixed' },
        epidemiology: {
          incidence: 'Rare but serious (0.4-1.3/100,000/year)',
          risk_groups: ['Immunocompromised', 'Chronic otitis/sinusitis', 'Dental infection', 'Endocarditis', 'Head trauma/surgery'],
          seasonality: 'None',
          transmission: 'Endogenous spread (contiguous or hematogenous)'
        },
        pathomechanism: {
          steps: [
            'Direct spread: Infection spreads from adjacent structures (e.g., middle ear, sinus, teeth) to the brain parenchyma (40-50%).',
            'Hematogenous spread: Bacteria reach the brain via the bloodstream from a distant focus (e.g., lung, heart - endocarditis) (25-35%).',
            'Trauma/Surgery: Direct entry following open skull fracture or neurosurgical procedure.',
            'Abscess formation: Bacterial multiplication causes local inflammation (cerebritis), then necrosis. The body attempts to isolate the process with capsule formation.'
          ],
          virulence_factors: ['Synergism of mixed flora', 'Capsule formation']
        },
        clinical: {
          description: "Brain abscess is a bacterial or anaerobic infection that spreads from adjacent structures or hematogenously, causing rapidly increasing intracranial pressure and focal neurological symptoms.",
          incubation: 'Variable (days-weeks)',
          onset: 'Subacute',
          symptoms: [
            { name: 'Headache', description: 'Most common symptom (>70%), often localized, dull, constant, and progressive.', severity: 'moderate' },
            { name: 'Focal neurological deficits', description: 'Depending on abscess location (e.g., hemiparesis, aphasia, visual field defect).', severity: 'severe' },
            { name: 'Fever', description: 'Present in only 50% of cases! Absence does not rule it out.', severity: 'mild' },
            { name: 'Altered mental status', description: 'Drowsiness, confusion, then coma may develop due to increased intracranial pressure.', severity: 'severe' }
          ],
          physical_exam: ['Papilledema (high ICP)', 'Focal neurological signs', 'Fever (may be absent)'],
          complications: ['Herniation', 'Abscess rupture into the ventricular system (ventriculitis - high mortality)', 'Epilepsy']
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC', finding: 'Leukocytosis (in 60%)', interpretation: 'Unreliable' },
            { test: 'CRP', finding: 'Elevated', interpretation: 'Inflammation' },
            { test: 'Blood culture', finding: 'Positive', interpretation: 'Important in hematogenous origin' }
          ],
          imaging: [
            { modality: 'Head CT/MRI', finding: 'Ring enhancement, perifocal edema', significance: 'Gold standard (MRI is more sensitive)' }
          ],
          microbiology: [
            { test: 'Stereotactic aspiration', finding: 'Pus culture', significance: 'Basis for etiological diagnosis and therapy' },
            { test: 'Lumbar puncture', finding: 'CONTRAINDICATED!', significance: 'Forbidden due to risk of herniation if mass effect exists!' }
          ]
        },
        differential: [
          { disease: 'Brain tumor (Glioblastoma, Metastasis)', distinguishing: 'Imaging (DWI sequence helps), biopsy' },
          { disease: 'Stroke', distinguishing: 'Sudden onset, vascular risk factors' },
          { disease: 'Encephalitis', distinguishing: 'More diffuse, no encapsulated abscess' }
        ],
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxone', dose: '2g IV every 12 hours', duration: '4-8 weeks', note: 'Base therapy' },
              { drug: '+ Metronidazole', dose: '500mg IV every 8 hours', duration: '4-8 weeks', note: 'Anaerobic coverage' },
              { drug: '+ Vancomycin', dose: '15-20mg/kg IV', duration: '', note: 'If S. aureus suspected (e.g., trauma, endocarditis)' }
            ]
          },
          targeted: 'Based on culture. Prolonged (6-8 weeks) IV, then PO therapy.',
          supportive: ['Neurosurgical aspiration/drainage (if >2.5 cm)', 'Steroids (Dexamethasone) only if significant edema/risk of herniation', 'Anticonvulsants'],
          prevention: ['Treatment of ENT infections', 'Endocarditis prophylaxis']
        },
        prognosis: {
          mortality: '10-20% (improves with early diagnosis)',
          prognostic_scores: [],
          factors: 'Mental status at admission, ventricular rupture'
        }
      },
      {
        id: 'tbc_meningitis',
        name: 'Tuberculous Meningitis',
        pathogen: { type: 'Mycobacterium', name: '<i>Mycobacterium tuberculosis</i>', gram: 'Acid-fast', shape: 'rod' },
        epidemiology: {
          incidence: 'Most common form of extrapulmonary TB',
          risk_groups: ['Immunocompromised (HIV)', 'Individuals from endemic areas', 'Infants', 'Alcoholics'],
          seasonality: 'None',
          transmission: 'Hematogenous spread from a primary lung focus'
        },
        pathomechanism: {
          steps: [
            'Hematogenous Spread: Bacteria spread from a primary lung focus via the bloodstream to the brain/meninges.',
            'Rich Foci: Small, caseating foci (tuberculomas) form in the subcortical or meningeal space.',
            'Rupture: The foci rupture, releasing bacteria and antigens into the subarachnoid space.',
            'Basal Exudate: A thick, gelatinous, inflammatory exudate forms at the base of the brain, encasing cranial nerves and cisterns.',
            'Consequence: Communicating hydrocephalus (impaired CSF absorption), cranial nerve palsies (III, IV, VI, VII), vasculitis, and cerebral infarcts.'
          ],
          virulence_factors: ['Cord factor', 'Intracellular survival']
        },
        clinical: {
          description: "Tuberculous meningitis is a severe CNS infection caused by Mycobacterium tuberculosis, characterized by a progressive inflammatory meningitis with high morbidity and mortality.",
          incubation: 'Weeks-months',
          onset: 'Subacute',
          symptoms: [
            { name: 'Prodromal Phase (1-2 weeks)', description: 'Slow, insidious onset: apathy, personality changes, low-grade fever, headache, nausea.', severity: 'moderate' },
            { name: 'Meningeal Phase (2-3 weeks)', description: 'Nuchal rigidity, altered mental status, lethargy, cranial nerve palsies (especially VI, III, IV, VII).', severity: 'severe' },
            { name: 'Paralytic Phase', description: 'Rapid progression to coma, hemiplegia, decerebrate rigidity. Fatal without treatment.', severity: 'severe' }
          ],
          physical_exam: ['Nuchal rigidity', 'Altered mental status', 'Cranial nerve palsies', 'Papilledema'],
          complications: ['Hydrocephalus', 'Cerebral infarction', 'Permanent neurological damage', 'SIADH']
        },
        diagnostics: {
          laboratory: [
            { test: 'CSF', finding: 'Lymphocytic pleocytosis, VERY high protein (>1 g/L), VERY low glucose (<2.2 mmol/L)', interpretation: 'Characteristic triad!' },
            { test: 'CSF ADA', finding: 'Elevated', interpretation: 'Adenosine deaminase, aids in diagnosis' }
          ],
          imaging: [
            { modality: 'MRI/CT with contrast', finding: 'Basal meningeal enhancement, hydrocephalus, tuberculomas', significance: 'Diagnostic' }
          ],
          microbiology: [
            { test: 'CSF Ziehl-Neelsen', finding: 'Acid-fast bacilli', significance: 'Low sensitivity (<20%)' },
            { test: 'CSF Culture', finding: 'M. tuberculosis', significance: 'Gold standard, but slow (weeks)' },
            { test: 'CSF PCR (GeneXpert)', finding: 'MTB DNA', significance: 'Rapid, sensitive' }
          ]
        },
        differential: [
          { disease: 'Cryptococcal meningitis', distinguishing: 'CrAg test, lower protein' },
          { disease: 'Meningeal carcinomatosis', distinguishing: 'Cytology, known tumor' },
          { disease: 'Neurosyphilis', distinguishing: 'Serology, CSF VDRL' }
        ],
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'RIPE (Rifampicin, Isoniazid, Pyrazinamide, Ethambutol)', dose: 'Standard dose', duration: '9-12 months', note: 'Longer treatment required' },
              { drug: '+ Dexamethasone', dose: 'IV/PO', duration: '6-8 weeks, then taper', note: 'Reduces mortality! Mandatory!' }
            ]
          },
          targeted: 'Therapy modified based on susceptibility testing.',
          supportive: ['ICP management', 'VP shunt (for hydrocephalus)'],
          prevention: ['BCG vaccine', 'LTBI treatment']
        },
        prognosis: {
          mortality: '20-30% with treatment, 100% without',
          prognostic_scores: ['MRC staging'],
          factors: 'Delay in treatment, level of consciousness, age'
        }
      }
    ]
  }
});
