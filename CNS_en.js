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
              ['Dominant Cell', 'Neutrophils (>80%)', 'Lymphocytes (PMN may be early!)', 'Lymphocytes/Monocytes'],
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
              risk_groups: ['Neonates (<1 month)', 'Children', 'Adults >65 years', 'Asplenic patients', 'Complement deficiency', 'Cochlear implant recipients'],
              seasonality: 'Meningococcus: Winter-Spring',
              transmission: 'Droplet (Meningococcus), Endogenous (Pneumococcus), Vertical (GBS, Listeria)'
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
              incubation: '2-10 days (Meningococcus), shorter (Pneumococcus)',
              onset: 'Acute (hours-days)',
              symptoms: [
                { name: 'Classic triad', description: 'Fever, headache, nuchal rigidity (triad not always present!)', severity: 'severe' },
                { name: 'Altered mental status', description: 'Confusion, lethargy, coma (GCS <14)', severity: 'severe' },
                { name: 'Early "Red Flag" signs (NICE)', description: 'Leg/muscle pain, cold extremities, mottled skin (early signs of sepsis!)', severity: 'severe' },
                { name: 'Rash', description: 'Non-blanching petechiae/purpura (suspect Meningococcemia)', severity: 'severe' },
                { name: 'Headache', description: 'Severe, generalized (>85%)', severity: 'severe' },
                { name: 'Fever', description: '>38°C (95%)', severity: 'severe' }
              ],
              physical_exam: [
                'Meningeal signs: Kernig (+), Brudzinski (+), nuchal rigidity',
                'Fever (often >39°C)',
                'Altered mental status (decreased GCS)',
                'Focal neurological deficits (cranial nerve palsy, paresis)',
                'Petechiae/purpura (Meningococcemia)',
                'Papilledema (late sign)'
              ],
              complications: ['Septic shock', 'DIC', 'ARDS', 'Cerebral edema/herniation', 'Subdural empyema', 'Hearing loss', 'Cognitive impairment']
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
                  { drug: '+ Amoxicillin', dose: '2 g IV every 4 hours', duration: 'Pathogen dependent', note: 'If Listeria risk (>60 years, immunocompromised, pregnancy).' },
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
            id: 'viral_encephalitis',
            name: 'Viral Encephalitis',
            pathogen: { type: 'Virus', name: 'HSV-1, VZV, Enteroviruses, Arboviruses', gram: 'DNA/RNA viruses', shape: 'variable' },
            epidemiology: {
              incidence: '0.5-7/100,000 per year',
              risk_groups: ['Neonates (HSV-2)', 'Immunocompromised patients', 'Elderly (VZV reactivation)', 'Travelers to endemic areas (Arboviruses)'],
              seasonality: 'Enterovirus: Summer-Autumn; HSV: Year-round',
              transmission: 'HSV: Reactivation/Primary; Enterovirus: Fecal-oral; Arbovirus: Vector-borne (Mosquito/Tick)'
            },
            pathomechanism: {
              steps: [
                'Primary infection or Reactivation (HSV)',
                'Neuroinvasion: Virus enters CNS',
                'HSV: Predilection for temporal/frontal lobes (via olfactory or trigeminal nerves)',
                'Direct neuronal injury and immune-mediated damage',
                'Hemorrhagic necrosis (HSV) vs. Perivascular cuffing',
                'Cerebral edema, Hemorrhage, Neuronal necrosis'
              ],
              virulence_factors: ['HSV: Glycoproteins (gB, gC, gD) for cell entry', 'VZV: Latency in sensory ganglia', 'Enterovirus: Capsid proteins']
            },
            clinical: {
              incubation: 'HSV variable; Enterovirus 3-7 days; Arbovirus 4-14 days',
              onset: 'Acute to Subacute',
              symptoms: [
                { name: 'Altered Mental Status', description: 'Hallmark (nearly 100%): Confusion, Lethargy, Coma', severity: 'severe' },
                { name: 'Fever', description: 'Present in >90% of cases', severity: 'moderate' },
                { name: 'Headache', description: 'Common early symptom', severity: 'moderate' },
                { name: 'Seizures', description: 'Common (especially in HSV and Autoimmune Encephalitis)', severity: 'severe' },
                { name: 'Focal Neurological Deficits', description: 'Hemiparesis, Cranial nerve palsies, Ataxia, Dysphasia', severity: 'severe' },
                { name: 'Behavioral/Psychiatric Changes', description: 'Psychosis, Hallucinations, Agitation (HSV, Limbic encephalitis)', severity: 'severe' }
              ],
              physical_exam: [
                'Decreased level of consciousness (GCS)',
                'Focal signs (Hemiparesis, CN palsies)',
                'Seizures (Focal or Generalized)',
                'Meningeal signs (often mild/moderate)',
                'Papilledema (signs of raised ICP)'
              ],
              complications: ['Permanent neurological sequelae', 'Post-encephalitic epilepsy', 'Motor/Cognitive deficits', 'Death (Untreated HSV mortality ~70%)']
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
            pathogen: { type: 'Virus', name: 'Herpes Simplex Virus 1 (HSV-1)', gram: 'dsDNA', shape: 'spherical' },
            epidemiology: {
              incidence: 'Most common sporadic fatal encephalitis',
              risk_groups: ['Anyone (no seasonality)'],
              seasonality: 'None',
              transmission: 'Reactivation (trigeminal ganglion) or Primary infection'
            },
            pathomechanism: {
              steps: ['Neurotropic spread', 'Necrosis of temporal and frontal lobes', 'Hemorrhagic inflammation', 'Cerebral edema'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: 'Variable',
              onset: 'Acute (days)',
              symptoms: [
                { name: 'Fever', description: 'Present in 90%', severity: 'moderate' },
                { name: 'Headache', description: 'In 81%', severity: 'moderate' },
                { name: 'Psychiatric symptoms', description: 'Personality changes, Disorientation (71%)', severity: 'severe' },
                { name: 'Seizures', description: 'In 67% (focal or generalized)', severity: 'severe' },
                { name: 'Vomiting', description: 'In 46%', severity: 'mild' },
                { name: 'Focal weakness', description: 'In 33%', severity: 'severe' },
                { name: 'Memory loss', description: 'In 24% (short-term)', severity: 'moderate' }
              ],
              physical_exam: ['Altered mental status', 'Focal neurological signs', 'Memory impairment'],
              complications: ['Uncal herniation', 'Permanent cognitive impairment', 'Death']
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
            id: 'aseptic_meningitis',
            name: 'Aseptic (Viral) Meningitis',
            pathogen: { type: 'Virus', name: 'Enteroviruses (Coxsackie, Echo), HSV-2, VZV', gram: 'RNA/DNA', shape: '-' },
            epidemiology: {
              incidence: 'Most common form of meningitis',
              risk_groups: ['Children', 'Young adults'],
              seasonality: 'Summer-Autumn (Enterovirus)',
              transmission: 'Fecal-oral (Entero), Sexual (HSV-2)'
            },
            pathomechanism: {
              steps: ['Viremia', 'Meningeal inflammation', 'No purulent exudate'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '3-7 days',
              onset: 'Sudden',
              symptoms: [
                { name: 'Headache', description: 'Almost always present, frontal/retro-orbital', severity: 'moderate' },
                { name: 'Fever', description: '38-40°C', severity: 'mild' },
                { name: 'Meningeal signs', description: 'Nuchal rigidity present, but may be milder', severity: 'moderate' },
                { name: 'Photophobia', description: 'Sensitivity to light', severity: 'mild' },
                { name: 'Consciousness', description: 'CLEAR (distinguishes from encephalitis!)', severity: 'mild' }
              ],
              physical_exam: ['Meningeal signs (milder)', 'Consciousness clear (difference from encephalitis!)'],
              complications: ['Rare (Meningoencephalitis)']
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
            id: 'tbe',
            name: 'Tick-Borne Encephalitis (TBE)',
            pathogen: { type: 'Virus', name: 'Tick-Borne Encephalitis Virus', gram: 'RNA, Flaviviridae', shape: 'spherical' },
            epidemiology: {
              incidence: 'Endemic in Central Europe',
              risk_groups: ['Forest goers', 'Tick bite'],
              seasonality: 'Spring-Autumn',
              transmission: 'Tick bite, unpasteurized milk'
            },
            pathomechanism: {
              steps: ['Tick bite', 'Viremia (febrile phase)', 'CNS invasion (meningoencephalitis)'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '7-14 days',
              onset: 'Biphasic',
              symptoms: [
                { name: 'Biphasic course', description: 'In 70-90% of cases', severity: 'mild' },
                { name: 'Phase 1 (Viremia)', description: 'Fever, headache, myalgia, fatigue (2-7 days)', severity: 'mild' },
                { name: 'Asymptomatic interval', description: 'Average 8 days (1-33 days)', severity: 'mild' },
                { name: 'Phase 2 (Neurologic)', description: 'Meningitis (50%), Meningoencephalitis (40%), Myelitis (10%)', severity: 'severe' },
                { name: 'Myelitis symptoms', description: 'Flaccid paralysis (often upper extremity/shoulder girdle)', severity: 'severe' }
              ],
              physical_exam: ['Ataxia', 'Tremor', 'Flaccid paralysis of shoulder girdle (myelitis)', 'Altered mental status'],
              complications: ['Permanent paralysis', 'Post-encephalitic syndrome']
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
            id: 'meningococcal_meningitis',
            name: 'Meningococcal Meningitis',
            pathogen: { type: 'Bacterium', name: 'Neisseria meningitidis', gram: 'Gram-negative', shape: 'diplococcus' },
            epidemiology: {
              incidence: 'Can be epidemic',
              risk_groups: ['Infants', 'Adolescents', 'Closed communities (dorms)', 'Asplenia'],
              seasonality: 'Winter-Spring',
              transmission: 'Droplet (close contact)'
            },
            pathomechanism: {
              steps: ['Nasopharyngeal colonization', 'Invasion', 'Sepsis/Meningitis', 'LOS endotoxin -> DIC'],
              virulence_factors: ['Capsule (A,B,C,W,Y)', 'LOS', 'IgA protease']
            },
            clinical: {
              incubation: '1-10 days',
              onset: 'Hyperacute',
              symptoms: [
                { name: 'Classic symptoms', description: 'Fever, headache, nuchal rigidity', severity: 'severe' },
                { name: 'Rash', description: 'Petechiae/Purpura (50-80%!) - non-blanching', severity: 'severe' },
                { name: 'Septic state', description: 'Hypotension, tachycardia, cold extremities', severity: 'severe' },
                { name: 'Rapid progression', description: 'Deterioration within hours', severity: 'severe' }
              ],
              physical_exam: ['Meningeal signs', 'Purpura', 'Signs of shock'],
              complications: ['Limb necrosis/amputation', 'Deafness', 'Death (within hours)']
            },
            diagnostics: {
              laboratory: [{ test: 'CSF', finding: 'Purulent', interpretation: '-' }, { test: 'PCR', finding: 'Positive', significance: 'Rapid' }],
              microbiology: [{ test: 'Gram stain', finding: 'Gram-negative diplococci', significance: 'Rapid' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Ceftriaxone', dose: '2g IV every 12 hours', duration: '7 days', note: 'NICE NG240 recommendation' }] },
              targeted: 'Ceftriaxone for 7 days. Prophylaxis for contacts: Ciprofloxacin (single 500mg PO) or Rifampicin.',
              supportive: [],
              prevention: ['Vaccination (MenACWY, MenB)']
            },
            prognosis: { mortality: '10-15% even with treatment', prognostic_scores: [], factors: 'Age, comorbidity, time to treatment' }
          },
          {
            id: 'pneumococcal_meningitis',
            name: 'Pneumococcal Meningitis',
            pathogen: { type: 'Bacterium', name: 'Streptococcus pneumoniae', gram: 'Gram-positive', shape: 'diplococcus' },
            epidemiology: {
              incidence: 'Most common adult meningitis',
              risk_groups: ['Elderly', 'Alcoholics', 'Splenectomy', 'Otitis/Sinusitis/Pneumonia', 'CSF leak'],
              seasonality: 'Winter',
              transmission: 'Endogenous spread or droplet'
            },
            pathomechanism: {
              steps: ['Bacteremia or spread per continuitatem (ear/sinus)', 'Strong inflammatory response'],
              virulence_factors: ['Capsule', 'Pneumolysin']
            },
            clinical: {
              incubation: 'Short',
              onset: 'Acute',
              symptoms: [
                { name: 'Severe meningitis', description: 'Coma/seizures more common than in meningococcus', severity: 'severe' },
                { name: 'Focal symptoms', description: 'Signs of Pneumonia (25%), Otitis (30%), Sinusitis (15%)', severity: 'moderate' },
                { name: 'Neurological deficit', description: 'Common sequelae', severity: 'severe' }
              ],
              physical_exam: ['Meningeal signs', 'Signs of otitis media', 'Altered mental status'],
              complications: ['Deafness', 'Hydrocephalus', 'Brain abscess']
            },
            diagnostics: {
              laboratory: [{ test: 'CSF', finding: 'Purulent, very high protein, low sugar', interpretation: '-' }],
              microbiology: [{ test: 'Gram stain', finding: 'Gram-positive diplococci', significance: '-' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Ceftriaxone', dose: '2g IV every 12 hours', duration: '14 days', note: 'NICE NG240 recommendation' }, { drug: 'Dexamethasone', dose: '10mg IV every 6 hours', duration: '4 days', note: 'Continue if Pneumococcus is confirmed!' }] },
              targeted: 'Ceftriaxone for 14 days. If resistance confirmed: + Vancomycin/Rifampicin.',
              supportive: [],
              prevention: ['Pneumococcal vaccine (PCV, PPSV)']
            },
            prognosis: { mortality: '20-30%, high morbidity', prognostic_scores: [], factors: 'Age, immune status' }
          },
          {
            id: 'listeria_meningitis',
            name: 'Listeria Meningitis',
            pathogen: { type: 'Bacterium', name: 'Listeria monocytogenes', gram: 'Gram-positive', shape: 'rod' },
            epidemiology: {
              incidence: 'Rare but dangerous',
              risk_groups: ['Neonates', 'Elderly (>50 years)', 'Pregnant women', 'Immunocompromised (transplant, alcoholic)'],
              seasonality: 'None',
              transmission: 'Food (soft cheese, cold cuts)'
            },
            pathomechanism: {
              steps: ['GI tract invasion', 'Bacteremia', 'CNS invasion (rhombencephalitis tropism)'],
              virulence_factors: ['Intracellular survival', 'Listeriolysin O']
            },
            clinical: {
              incubation: '1-4 weeks',
              onset: 'Subacute',
              symptoms: [
                { name: 'Subacute onset', description: 'Slower progression', severity: 'moderate' },
                { name: 'Fever', description: 'In 90%', severity: 'moderate' },
                { name: 'Altered mental status', description: 'Common', severity: 'severe' },
                { name: 'Rhombencephalitis', description: 'Brainstem symptoms: ataxia, cranial nerve palsy, nystagmus', severity: 'severe' },
                { name: 'Meningeal signs', description: 'Less pronounced or absent', severity: 'mild' }
              ],
              physical_exam: ['Meningeal signs (may be absent)', 'Focal signs'],
              complications: ['Brain abscess', 'Hydrocephalus']
            },
            diagnostics: {
              laboratory: [{ test: 'CSF', finding: 'Can be lymphocytic! (not always PMN)', interpretation: 'Misleading' }],
              microbiology: [{ test: 'Gram stain', finding: 'Often negative or Gram+ rods (can be mistaken for diphtheroids)', significance: '-' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Amoxicillin / Ampicillin', dose: '2g IV every 4 hours', duration: '21 days', note: 'NICE NG240 recommendation. Cephalosporins are INEFFECTIVE!' }, { drug: '+ Gentamicin', dose: '5mg/kg IV once daily', duration: 'First 7 days', note: 'Synergistic effect' }] },
              targeted: 'Amoxicillin/Ampicillin (21 days) + Gentamicin (first 7 days). In penicillin allergy: Cotrimoxazole (Trimethoprim/Sulfamethoxazole).',
              supportive: [],
              prevention: ['Food hygiene in risk groups']
            },
            prognosis: { mortality: '20-30%', prognostic_scores: [], factors: 'Age, immune status' }
          },
          {
            id: 'cryptococcal_meningitis',
            name: 'Cryptococcal Meningitis',
            pathogen: { type: 'Fungus', name: 'Cryptococcus neoformans', gram: 'Yeast (encapsulated)', shape: 'round' },
            epidemiology: {
              incidence: 'Most common fungal meningitis in HIV/AIDS patients',
              risk_groups: ['HIV (CD4 <100)', 'Transplant recipients', 'Steroid treatment'],
              seasonality: 'None',
              transmission: 'Inhalation (pigeon dropping dust) -> lung -> hematogenous spread'
            },
            pathomechanism: {
              steps: ['Inhalation', 'Lung infection (often asymptomatic)', 'Reactivation/dissemination in immunosuppression', 'Crossing blood-brain barrier', 'Polysaccharide capsule inhibits phagocytosis'],
              virulence_factors: ['Polysaccharide capsule', 'Melanin production']
            },
            clinical: {
              incubation: 'Unknown (reactivation)',
              onset: 'Subacute/Chronic (weeks)',
              symptoms: [
                { name: 'Headache', description: 'Leading symptom (70-90%)', severity: 'severe' },
                { name: 'Fever', description: 'In 60-80%', severity: 'moderate' },
                { name: 'Meningeal signs', description: 'ONLY in 20-30%! (misleading)', severity: 'mild' },
                { name: 'Visual disturbance', description: 'Diplopia, photophobia (due to high ICP)', severity: 'severe' },
                { name: 'Altered mental status', description: 'Lethargy, confusion', severity: 'severe' }
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
            pathogen: { type: 'Protozoan', name: 'Naegleria fowleri', gram: '-', shape: 'amoeba' },
            epidemiology: {
              incidence: 'Very rare, but fatal',
              risk_groups: ['Children/young adults', 'Freshwater swimmers'],
              seasonality: 'Summer (warm water)',
              transmission: 'Water entering nose -> olfactory nerve -> brain'
            },
            pathomechanism: {
              steps: ['Water entry into nose', 'Penetration of cribriform plate', 'Migration along olfactory nerve', 'Lysis of brain tissue (trophozoites)'],
              virulence_factors: ['Tissue-degrading enzymes', 'Amebostome (feeding apparatus)']
            },
            clinical: {
              incubation: '1-9 days (average 5)',
              onset: 'Fulminant',
              symptoms: [
                { name: 'Initial symptoms', description: 'Severe frontal headache, fever, nausea, vomiting', severity: 'severe' },
                { name: 'Late symptoms', description: 'Stiff neck, seizures, altered mental status, hallucinations, coma', severity: 'severe' },
                { name: 'Smell/taste', description: 'Parosmia/Ageusia (can be early sign)', severity: 'moderate' }
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
          }
        ]
      },
});
