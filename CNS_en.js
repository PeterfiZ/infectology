Object.assign(window.diseases, {
     cns_infections: {
        name: 'Central Nervous System Infections',
        icon: '🧠',
        color: '#0891b2',
        tables: [
          {
            title: 'Differential Diagnosis of CSF Findings',
            headers: ['Parameter', 'Bacterial', 'Viral', 'Normal'],
            rows: [
              ['Opening Pressure', 'Elevated (>20 cmH2O)', 'Normal or slightly elevated', '6-20 cmH2O'],
              ['Appearance', 'Cloudy, purulent', 'Clear ("water-clear")', 'Clear, colorless'],
              ['Cell Count (WBC/µL)', '>1000 (often 100-10000)', '10-500 (rarely >1000)', '0-5'],
              ['Dominant Cell', 'Neutrophil granulocyte (>80%)', 'Lymphocyte (PMN may be early!)', 'Lymphocyte/Monocyte'],
              ['Protein (g/L)', 'Elevated (>1 g/L)', 'Normal or slightly elevated (<1 g/L)', '0.15-0.45 g/L'],
              ['Glucose (mmol/L)', 'Decreased (<2.2 mmol/L)', 'Normal (>2.5 mmol/L)', '2.5-4.4 mmol/L'],
              ['CSF/Blood Glucose Ratio', '< 0.4', '> 0.6', '≥ 0.6'],
              ['Lactate', 'Elevated (>3.5 mmol/L)', 'Normal (<3.5 mmol/L)', '< 2.5 mmol/L'],
              ['Microbiology', 'Gram stain (+ 60-90%), Culture (+)', 'PCR (+), Gram/Culture negative', 'Negative']
            ]
          }
        ],
        diseases: [
          {
            id: 'bacterial_meningitis',
            name: 'Bacterial Meningitis (Empiric)',
            pathogen: { type: 'Bacterium', name: 'N. meningitidis, S. pneumoniae, L. monocytogenes', gram: 'Mixed', shape: 'Pathogen dependent' },
            epidemiology: {
              incidence: '2-5/100,000 per year in developed countries',
              risk_groups: ['Newborns (<1 month)', 'Children', 'Adults >65 years', 'Splenectomized', 'Complement deficiency', 'Cochlear implant'],
              seasonality: 'Meningococcus: winter-spring',
              transmission: 'Droplet (meningococcus), endogenous (pneumococcus), vertical (GBS, Listeria)'
            },
            pathomechanism: {
              steps: [
                'Nasopharyngeal colonization',
                'Bacteremia (crossing the blood-brain barrier)',
                'Invasion of the subarachnoid space',
                'Inflammatory response (TNF-α, IL-1β)',
                'Increased blood-brain barrier permeability → cerebral edema',
                'Increased intracranial pressure, cerebral ischemia'
              ],
              virulence_factors: ['Polysaccharide capsule', 'IgA protease', 'Lipooligosaccharide (LOS)', 'Pili/fimbriae']
            },
            clinical: {
              incubation: '2-10 days (meningococcus), shorter (pneumococcus)',
              onset: 'Acute, hours-days',
              symptoms: [
                { name: 'Classic triad', description: 'Fever, headache, nuchal rigidity, altered mental status (triad not always present!)', severity: 'severe' },
                { name: 'Early "Red Flag" signs (NICE)', description: 'Leg/muscle pain, cold extremities, mottled skin (early signs of sepsis!)', severity: 'severe' },
                { name: 'Rash', description: 'Non-blanching petechiae/purpura (suspect Meningococcus)', severity: 'severe' },
                { name: 'Headache', description: 'Severe, generalized (>85%)', severity: 'severe' },
                { name: 'Fever', description: '>38°C (95%)', severity: 'severe' },
                { name: 'Nuchal rigidity', description: 'Stiff neck (>80%)', severity: 'severe' },
                { name: 'Altered mental status', description: 'GCS <14 (>80%)', severity: 'severe' },
              ],
              physical_exam: [
                'Meningeal signs: Kernig (+), Brudzinski (+), nuchal rigidity',
                'Fever (often >39°C)',
                'Altered mental status (decreased GCS)',
                'Focal neurological signs (cranial nerve palsy, paresis)',
                'Petechiae/purpura (meningococcemia)',
                'Papilledema (late sign)'
              ],
              complications: ['Septic shock', 'DIC', 'ARDS', 'Cerebral edema/herniation', 'Subdural empyema', 'Hearing loss', 'Cognitive deficit']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Leukocytosis (15-30 G/L), left shift', interpretation: 'Bacterial infection' },
                { test: 'CRP/PCT', finding: 'Significantly elevated (PCT >2)', interpretation: 'Bacterial sepsis' },
                { test: 'Blood PCR', finding: 'Meningococcus/Pneumococcus DNA', interpretation: 'NICE recommendation: take in all suspected cases!' },
                { test: 'Coagulation panel', finding: 'Signs of DIC (↓fibrinogen, ↑D-dimer)', interpretation: 'Meningococcus' }
              ],
              imaging: [
                { modality: 'Head CT', finding: 'Exclude contraindications', significance: 'Before LP if: GCS<9, seizures, focal signs, papilledema' },
                { modality: 'MRI', finding: 'More sensitive, complications', significance: 'Empyema, infarction' }
              ],
              microbiology: [
                { test: 'CSF analysis (NICE)', finding: 'Cell count >1000/µL (PMN), Protein >1 g/L, Glucose < 50% of blood glucose', significance: 'Typical for bacterial meningitis!' },
                { test: 'CSF Lactate', finding: 'Elevated', significance: 'Helps differentiate from viral' },
                { test: 'CSF Gram stain', finding: '60-90% positive', significance: 'Quick orientation' },
                { test: 'CSF/blood culture', finding: 'Pathogen isolation', significance: 'Resistance testing' },
                { test: 'CSF PCR (multiplex)', finding: 'DNA detection', significance: 'Fast, sensitive, pre-treated patient' },
                { test: 'CSF latex agglutination', finding: 'Antigen detection', significance: 'Fast, less sensitive' }
              ]
            },
            differential: [
              { disease: 'Viral meningitis', distinguishing: 'Milder, CSF: lymphocytes, normal glucose' },
              { disease: 'Tuberculous meningitis', distinguishing: 'Subacute, low glucose, basilar meningitis' },
              { disease: 'Encephalitis', distinguishing: 'Altered mental status dominates, focal signs, milder CSF changes' },
              { disease: 'Subarachnoid hemorrhage', distinguishing: 'Thunderclap headache, bloody/xanthochromic CSF' },
              { disease: 'Carcinomatous meningitis', distinguishing: 'Malignancy, cytology' }
            ],
            therapy: {
              guidelines: ['NICE NG240 (2024): Meningitis (bacterial) and meningococcal disease'],
              empirical: {
                outpatient: [
                  { drug: 'Benzylpenicillin or Ceftriaxone', dose: 'IM/IV', duration: 'Stat', note: 'Only if transport to hospital is significantly delayed (NICE)' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxone', dose: '2g IV every 12 hours (or 4g every 24 hours)', duration: 'Pathogen dependent', note: 'First choice (NICE). Alternative: Cefotaxime.' },
                  { drug: '+ Amoxicillin', dose: '2g IV every 4 hours', duration: 'Pathogen dependent', note: 'If Listeria risk (>60 years, immunosuppression, pregnancy).' },
                  { drug: 'Dexamethasone', dose: '10mg IV every 6 hours', duration: '4 days', note: 'BEFORE or WITH the first antibiotic dose. Do not give if septic shock without meningitis.' }
                ],
                icu: [
                  { drug: 'Supportive', dose: '-', duration: '-', note: 'Airway management, fluid resuscitation, vasopressors' }
                ]
              },
              targeted: 'Meningococcus: 7 days; Pneumococcus: 14 days; Listeria: 21 days; H. influenzae: 10 days; GBS: 14-21 days.',
              supportive: ['Fluid/electrolyte balance', 'ICP monitoring', 'Seizure prophylaxis', 'Isolation (meningococcus, can be discontinued after 24h of AB)'],
              prevention: ['MenACWY, MenB vaccines', 'PCV13/PPSV23', 'Hib vaccine', 'Chemoprophylaxis for contacts: Rifampicin or Ciprofloxacin']
            },
            prognosis: {
              mortality: 'Overall 15-25%, Meningococcus 10%, Pneumococcus 20-30%, Listeria 20-30%',
              prognostic_scores: ['GCS', 'APACHE II'],
              factors: 'Age, pathogen, delayed treatment, altered mental status, seizures, septic shock'
            }
          },
          {
            id: 'viral_encephalitis',
            name: 'Viral Encephalitis',
            pathogen: { type: 'Virus', name: 'HSV-1, VZV, enteroviruses, arboviruses', gram: 'DNA/RNA viruses', shape: 'variable' },
            epidemiology: {
              incidence: '0.5-7/100,000 per year',
              risk_groups: ['Newborns (HSV-2)', 'Immunosuppressed', 'Elderly (VZV reactivation)', 'Travelers to endemic areas (arbovirus)'],
              seasonality: 'Enterovirus: summer-autumn; HSV: all year',
              transmission: 'HSV: reactivation; Enterovirus: fecal-oral; Arbovirus: vector (mosquito, tick)'
            },
            pathomechanism: {
              steps: [
                'Primary infection or reactivation (HSV)',
                'Neurotropism: virus enters nervous tissue',
                'HSV: temporal lobe predilection (olfactory or trigeminal route)',
                'Direct neuronal damage + immune response',
                'Necrotizing encephalitis (HSV) vs. perivascular inflammation',
                'Cerebral edema, hemorrhage, necrosis'
              ],
              virulence_factors: ['HSV: glycoprotein B, C, D (entry)', 'VZV: latency in neurons', 'Enterovirus: VP1 capsid protein']
            },
            clinical: {
              incubation: 'HSV reactivation: variable; Enterovirus: 3-7 days; Arbovirus: 4-14 days',
              onset: 'Acute-subacute',
              symptoms: [
                { name: 'Altered mental status', description: 'Hallmark of encephalitis (100%): confusion, lethargy, coma', severity: 'severe' },
                { name: 'Fever', description: 'Present in >90%', severity: 'moderate' },
                { name: 'Headache', description: 'Common accompanying symptom', severity: 'moderate' },
                { name: 'Seizures', description: 'Common (especially HSV, autoimmune)', severity: 'severe' },
                { name: 'Focal neurological signs', description: 'Hemiparesis, cranial nerve palsy, ataxia', severity: 'severe' },
                { name: 'Behavioral changes', description: 'Psychosis, hallucinations (HSV, limbic)', severity: 'severe' }
              ],
              physical_exam: [
                'Altered mental status (decreased GCS)',
                'Focal neurological signs (hemiparesis, cranial nerve palsy)',
                'Seizures',
                'Meningeal signs (moderate)',
                'Papilledema (late)'
              ],
              complications: ['Permanent neurological damage', 'Epilepsy', 'Motor/cognitive deficit', 'Death (untreated HSV 70%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Variable, can be normal', interpretation: 'Non-specific' },
                { test: 'CRP', finding: 'Moderately elevated', interpretation: 'Lower than in bacterial' },
                { test: 'Liver/kidney function', finding: 'Baseline', interpretation: 'Acyclovir toxicity' }
              ],
              imaging: [
                { modality: 'Brain MRI', finding: 'HSV: temporal + frontal T2/FLAIR hyperintensity, asymmetric', significance: 'Most sensitive! Perform early' },
                { modality: 'Brain CT', finding: 'May be negative in early stages', significance: 'Exclude contraindications before LP' }
              ],
              microbiology: [
                { test: 'CSF PCR', finding: 'HSV-1/2, VZV, enterovirus DNA/RNA', significance: 'Gold standard, early negativity possible!' },
                { test: 'CSF analysis', finding: 'Lymphocytic pleocytosis (10-500), normal/slightly↑ protein, normal glucose', significance: 'Viral pattern' },
                { test: 'CSF RBC', finding: 'Xanthochromia, elevated', significance: 'Hemorrhagic necrosis (HSV)' },
                { test: 'Serology', finding: 'Acute-convalescent titer rise', significance: 'Retrospective' }
              ]
            },
            differential: [
              { disease: 'Bacterial meningitis', distinguishing: 'Faster course, CSF: PMN, ↓glucose' },
              { disease: 'Autoimmune encephalitis', distinguishing: 'Anti-NMDA-R, limbic encephalitis, tumor search' },
              { disease: 'Brain abscess', distinguishing: 'CT/MRI: ring enhancement, septic focus' },
              { disease: 'Toxic-metabolic encephalopathy', distinguishing: 'Underlying disease, lab abnormalities' },
              { disease: 'Status epilepticus', distinguishing: 'EEG, history' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'NO outpatient treatment!', dose: 'Immediate hospital admission', duration: '', note: 'HSV encephalitis is fatal without treatment!' }
                ],
                inpatient: [
                  { drug: 'Acyclovir', dose: '3x10mg/kg IV', duration: '14-21 days', note: 'Start IMMEDIATELY on suspicion of HSV!' }
                ],
                icu: [
                  { drug: 'Acyclovir', dose: '3x10mg/kg IV', duration: '21 days', note: 'Immunosuppressed, severe' },
                  { drug: 'Anticonvulsant', dose: 'Levetiracetam or other', duration: '', note: 'Prophylaxis/therapy' }
                ]
              },
              targeted: 'HSV/VZV: Acyclovir; CMV: Ganciclovir+Foscarnet; Enterovirus: supportive',
              supportive: ['ICP control', 'Seizure control', 'Fluid balance', 'Rehabilitation'],
              prevention: ['VZV vaccine', 'Mosquito bite protection (arbovirus)', 'Neonatal HSV: C-section if active genital herpes']
            },
            prognosis: {
              mortality: 'HSV untreated: 70%, treated: 20-30%; Enterovirus: <1%',
              prognostic_scores: ['GCS', 'Age'],
              factors: 'Delayed treatment, age, degree of consciousness impairment, early diagnosis of HSV'
            }
          },
          // ... other diseases translated similarly
        ]
      },
});
