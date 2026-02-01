Object.assign(window.diseases, {
      parasitic: {
        name: 'Parasitic Infections',
        icon: '🦟',
        color: '#854d0e',
        diseases: [
           {
            id: 'malaria',
            name: 'Malaria',
            pathogen: { type: 'Protozoan', name: 'Plasmodium falciparum, vivax, ovale, malariae', gram: '-', shape: 'ring/gametocyte' },
            epidemiology: {
              incidence: '>200 million cases/year worldwide, >400,000 deaths',
              risk_groups: ['Travelers to endemic areas', 'Children (<5 years)', 'Pregnant women', 'Immunocompromised'],
              seasonality: 'Rainy season (mosquitoes)',
              transmission: 'Anopheles mosquito bite'
            },
            pathomechanism: {
              steps: [
                'Mosquito bite → sporozoites into blood',
                'Liver phase (exoerythrocytic): schizont formation',
                'Blood phase (erythrocytic): RBC invasion, multiplication, rupture',
                'Cyclic fever attacks (RBC rupture)',
                'Cytoadherence (P. falciparum): microcirculation blockage (brain, kidney)'
              ],
              virulence_factors: ['PfEMP1 (adhesion)', 'Antigenic variation', 'Hemozoin pigment']
            },
            clinical: {
              incubation: '7-30 days (species-dependent)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Febrile paroxysm', description: 'Chills → Fever → Diaphoresis (cyclic)', severity: 'severe' },
                { name: 'Headache', description: 'Intense', severity: 'moderate' },
                { name: 'Nausea, vomiting', description: 'Common', severity: 'moderate' },
                { name: 'Severe anemia', description: 'RBC destruction', severity: 'severe' },
                { name: 'Cerebral malaria', description: 'Coma, seizures (P. falciparum)', severity: 'severe' }
              ],
              physical_exam: [
                'Fever, tachycardia',
                'Splenomegaly (common)',
                'Hepatomegaly',
                'Pallor (anemia)',
                'Jaundice (hemolysis)'
              ],
              complications: ['Cerebral malaria', 'Severe anemia', 'ARDS', 'Renal failure (blackwater fever)', 'Hypoglycemia', 'Shock']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Anemia, thrombocytopenia', interpretation: 'Hemolysis/sequestration' },
                { test: 'LDH, Bilirubin', finding: 'Elevated', interpretation: 'Hemolysis' },
                { test: 'Blood glucose', finding: 'May be low', interpretation: 'Severe malaria' }
              ],
              imaging: [
                { modality: 'Head CT', finding: 'Cerebral edema', significance: 'Exclusion of cerebral malaria' }
              ],
              microbiology: [
                { test: 'Thick and thin blood smears', finding: 'Plasmodium forms', significance: 'GOLD STANDARD (Giemsa)' },
                { test: 'Rapid Diagnostic Test (RDT)', finding: 'HRP-2 or pLDH antigen', significance: 'Fast, but less sensitive at low parasitemia' },
                { test: 'PCR', finding: 'DNA', significance: 'At low parasitemia' }
              ]
            },
            differential: [
              { disease: 'Influenza', distinguishing: 'No travel history, lack of periodicity' },
              { disease: 'Dengue fever', distinguishing: 'Retro-orbital pain, rash, bone-breaking pain' },
              { disease: 'Typhoid fever', distinguishing: 'Bradycardia, rose spots, GI symptoms dominate' },
              { disease: 'Meningitis', distinguishing: 'Nuchal rigidity, CSF findings' }
            ],
            therapy: {
              guidelines: ['WHO Guidelines for malaria (2023)'],
              empirical: {
                outpatient: [
                  { drug: 'Artemether-Lumefantrine', dose: 'PO (weight-based)', duration: '3 days', note: 'First-line ACT for uncomplicated P. falciparum.' },
                  { drug: 'Dihydroartemisinin-Piperaquine', dose: 'PO', duration: '3 days', note: 'Alternative ACT.' },
                  { drug: 'Artesunate-Pyronaridine', dose: 'PO', duration: '3 days', note: 'Alternative ACT.' },
                  { drug: 'Chloroquine', dose: 'PO', duration: '3 days', note: 'Only for P. vivax/ovale/malariae if from a chloroquine-sensitive area.' }
                ],
                inpatient: [
                  { drug: 'Artesunate', dose: '2.4 mg/kg IV/IM', duration: 'At least 24 hours (0, 12, 24 hours)', note: 'First choice for severe malaria (adult/child/pregnant). Follow with a full course of ACT!' },
                  { drug: 'Artemether', dose: '3.2 mg/kg IM', duration: '', note: 'Alternative if artesunate is not available.' },
                  { drug: 'Quinine', dose: '20 mg/kg loading, then 10 mg/kg q8h', duration: '', note: 'Third-line, ECG monitoring required!' }
                ]
              },
              targeted: 'P. vivax/ovale radical cure: Primaquine (0.25-0.5 mg/kg for 14 days) or Tafenoquine (single dose) against hypnozoites (hypnozoiticide). G6PD deficiency screening is mandatory!',
              supportive: ['Fluid resuscitation (cautiously, risk of pulmonary edema!)', 'Blood glucose monitoring (hypoglycemia is common)', 'Antipyretics (paracetamol)', 'Transfusion (severe anemia)', 'Dialysis (renal failure)'],
              prevention: ['Chemoprophylaxis (Atovaquone-Proguanil, Doxycycline, Mefloquine)', 'Mosquito net (LLIN)', 'Vaccine (RTS,S/AS01 and R21/Matrix-M for children in endemic areas)']
            },
            guidelines: {
              diagnosis: [
                'Suspicion: fever in travelers from endemic areas',
                'Gold standard: microscopy (thick/thin blood smear); RDT (rapid diagnostic test) is useful, but P. falciparum HRP2 deletions can occur'
              ],
              treatment_indications: [
                'Uncomplicated malaria: ACT (Artemisinin-based Combination Therapy)',
                'Severe malaria: IV Artesunate (any species, any trimester)',
                'P. vivax/ovale: Schizonticide (Chloroquine/ACT) + Hypnozoiticide (Primaquine/Tafenoquine)'
              ],
              first_line: [
                'Uncomplicated P. falciparum: Artemether-Lumefantrine or Artesunate-Amodiaquine or Dihydroartemisinin-Piperaquine',
                'Severe malaria: IV Artesunate for at least 24 hours until the patient can swallow, then a full 3-day ACT course'
              ],
              special_populations: [
                'Pregnancy 1st trimester: Artemether-Lumefantrine (WHO 2023 recommendation) or Quinine+Clindamycin',
                'Pregnancy 2nd-3rd trimester: ACT',
                'Severe malaria in pregnancy: IV Artesunate (preferred over Quinine)'
              ]
            },
            prognosis: {
              mortality: 'Uncomplicated: <0.1%; Severe: 10-20% (treated)',
              prognostic_scores: ['Parasitemia level (>5-10%)'],
              factors: 'Delayed diagnosis, P. falciparum, age, pregnancy'
            }
          },
          {
            id: 'toxoplasmosis',
            name: 'Toxoplasmosis',
            pathogen: { type: 'Protozoan', name: 'Toxoplasma gondii', gram: '-', shape: 'intracellular' },
            epidemiology: {
              incidence: '30-50% of the world\'s population is seropositive (latent)',
              risk_groups: ['Immunocompromised (HIV/AIDS, transplant)', 'Pregnant women (fetus!)', 'Cat owners'],
              seasonality: 'None',
              transmission: 'Fecal-oral (cat feces), raw meat (cyst), vertical'
            },
            pathomechanism: {
              steps: [
                'Ingestion of oocyst/tissue cyst',
                'Intestinal wall penetration → tachyzoites (rapid multiplication)',
                'Hematogenous spread (acute phase)',
                'Immune response → bradyzoites (slow) → tissue cyst formation (muscle, brain, eye)',
                'Latency (lifelong)',
                'Reactivation (in immunocompromised state): cyst rupture → encephalitis'
              ],
              virulence_factors: ['Intracellular survival', 'Cyst formation', 'Immunomodulation']
            },
            clinical: {
              incubation: '5-23 days',
              onset: 'Slow/asymptomatic',
              symptoms: [
                { name: 'Asymptomatic', description: '80-90% of immunocompetent individuals', severity: 'mild' },
                { name: 'Mononucleosis-like syndrome', description: 'Fever, lymphadenopathy, fatigue', severity: 'mild' },
                { name: 'Cerebral (AIDS)', description: 'Headache, confusion, seizures, hemiparesis', severity: 'severe' },
                { name: 'Chorioretinitis', description: 'Blurred vision, eye pain', severity: 'moderate' },
                { name: 'Congenital', description: 'Hydrocephalus, calcification, chorioretinitis (Sabin\'s tetrad)', severity: 'severe' }
              ],
              physical_exam: [
                'Cervical lymphadenopathy (painless)',
                'Fever (rare)',
                'Focal neurological signs (cerebral toxo)',
                'Fundoscopy: yellowish-white lesions'
              ],
              complications: ['Toxoplasma encephalitis (TE)', 'Blindness', 'Pneumonitis', 'Myocarditis', 'Fetal death/damage']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Lymphocytosis', interpretation: 'Non-specific' },
                { test: 'CD4 count', finding: '<100/µL', interpretation: 'Risk of reactivation (HIV)' }
              ],
              imaging: [
                { modality: 'Brain MRI', finding: 'Multiple ring-enhancing lesions (basal ganglia)', significance: 'Cerebral toxo (AIDS)' },
                { modality: 'Head CT', finding: 'Calcification (congenital)', significance: 'Newborn' }
              ],
              microbiology: [
                { test: 'Serology (IgM/IgG)', finding: 'IgM (acute), IgG (past/latent)', significance: 'Avidity test (pregnancy)' },
                { test: 'PCR', finding: 'DNA (CSF, amniotic fluid, blood)', significance: 'Proof of active infection' },
                { test: 'Histology', finding: 'Tachyzoites', significance: 'Biopsy (rare)' }
              ]
            },
            differential: [
              { disease: 'Mononucleosis (EBV/CMV)', distinguishing: 'Serology, sore throat dominates' },
              { disease: 'CNS Lymphoma', distinguishing: 'MRI (solitary, periventricular), EBV PCR, Thallium SPECT' },
              { disease: 'Cat-scratch disease', distinguishing: 'Unilateral lymph node, inoculation site' },
              { disease: 'Other encephalitis', distinguishing: 'CSF findings, imaging' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'None', dose: '-', duration: '-', note: 'Asymptomatic immunocompetent individuals do not require treatment' }
                ],
                inpatient: [
                  { drug: 'Pyrimethamine + Sulfadiazine', dose: 'PO', duration: '6 weeks', note: 'Standard treatment (+Folinic acid!)' },
                  { drug: 'Trimethoprim/Sulfamethoxazole', dose: 'PO/IV', duration: '6 weeks', note: 'Alternative' }
                ],
                icu: [
                  { drug: 'Steroid', dose: 'Dexamethasone', duration: '', note: 'In case of mass effect (cerebral edema)' }
                ]
              },
              targeted: 'Pregnancy: Spiramycin (1st trimester) or Pyrimethamine/Sulfadiazine (later). HIV prophylaxis: TMP-SMX.',
              supportive: ['Leucovorin (Folinic acid) supplementation for bone marrow protection', 'Anticonvulsants'],
              prevention: ['Thorough cooking of meat', 'Avoid cat litter (pregnant women)', 'Hand washing', 'Prophylaxis if CD4<100 (TMP/SMX)']
            },
            guidelines: {
              diagnosis: [
                'Serology (IgM/IgG) is fundamental; avidity testing in pregnancy to determine the timing of infection',
                'PCR (CSF, amniotic fluid, blood) to confirm active infection in immunosuppressed individuals or the fetus',
                'Imaging (MRI) in suspected cerebral toxoplasmosis (ring enhancement)'
              ],
              treatment_indications: [
                'Immunocompetent: generally does not require treatment, except for severe symptoms or chorioretinitis',
                'Immunocompromised (AIDS, CD4<100): always requires treatment (acute + maintenance)',
                'Pregnancy: treatment is necessary in case of acute infection to reduce transmission/fetal damage'
              ]
            },
            prognosis: {
              mortality: 'Immunocompetent: excellent; AIDS/TE: fatal without treatment, recurrence is common',
              prognostic_scores: ['None'],
              factors: 'Immune status, early start of treatment'
            }
          },
          {
            id: 'ascariasis',
            name: 'Ascariasis (Roundworm)',
            pathogen: { type: 'Helminth', name: 'Ascaris lumbricoides', gram: '-', shape: 'nematode (roundworm)' },
            epidemiology: {
              incidence: 'Most common helminth infection worldwide (>800 million)',
              risk_groups: ['Children', 'People in poor hygienic conditions'],
              seasonality: 'None',
              transmission: 'Fecal-oral (soil/vegetables contaminated with eggs)'
            },
            pathomechanism: {
              steps: [
                'Egg ingestion',
                'Larva hatches in the small intestine',
                'Migrates to the lungs via the venous system (Löffler\'s syndrome)',
                'Swallowed after being coughed up',
                'Adult worm in the small intestine (nutrient deprivation, obstruction)'
              ],
              virulence_factors: ['Protease inhibitors', 'Migration ability']
            },
            clinical: {
              incubation: '4-8 weeks',
              onset: 'Slow',
              symptoms: [
                { name: 'Pulmonary phase', description: 'Cough, dyspnea, Löffler\'s syndrome', severity: 'moderate' },
                { name: 'Intestinal phase', description: 'Abdominal pain, bloating, nausea', severity: 'mild' },
                { name: 'Obstruction', description: 'Ileus (worm bolus), biliary obstruction', severity: 'severe' }
              ],
              physical_exam: [
                'Often negative',
                'Abdominal tenderness',
                'Worm passage in stool/vomitus'
              ],
              complications: ['Mechanical ileus', 'Biliary ascariasis', 'Pancreatitis', 'Malnutrition (children)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Eosinophilia (during lung phase)', interpretation: 'Parasitic infection' }
              ],
              imaging: [
                { modality: 'Chest X-ray', finding: 'Migratory infiltrates (Löffler)', significance: 'Lung phase' },
                { modality: 'Abdominal US', finding: 'Worms in biliary tract/intestine ("railway track" sign)', significance: 'Complication' }
              ],
              microbiology: [
                { test: 'Stool examination for ova and parasites', finding: 'Characteristic mammillated eggs', significance: 'Diagnostic' }
              ]
            },
            differential: [
              { disease: 'Other helminth infections', distinguishing: 'Stool examination' },
              { disease: 'Asthma/Pneumonia', distinguishing: 'Eosinophilia, migratory infiltrates' },
              { disease: 'Gallstones', distinguishing: 'US image' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Mebendazole', dose: '2x100mg PO', duration: '3 days', note: 'First choice' },
                  { drug: 'Albendazole', dose: '400mg PO', duration: 'Single dose', note: 'Alternative' }
                ]
              },
              targeted: 'Benzimidazoles (Mebendazole, Albendazole). In pregnancy: Pyrantel pamoate.',
              supportive: ['Surgical/endoscopic removal in case of obstruction'],
              prevention: ['Washing vegetables', 'Hand washing', 'Sewage treatment']
            },
            prognosis: { mortality: 'Low, higher in complicated ileus', prognostic_scores: [], factors: 'Age, obstruction' }
          },
          {
            id: 'taeniasis',
            name: 'Taeniasis (Tapeworm)',
            pathogen: { type: 'Helminth', name: 'Taenia saginata (beef), Taenia solium (pork)', gram: '-', shape: 'cestode (tapeworm)' },
            epidemiology: {
              incidence: 'Widespread worldwide',
              risk_groups: ['People who consume raw meat'],
              transmission: 'Raw/undercooked meat (larva/cysticercus). T. solium eggs person-to-person -> Cysticercosis!'
            },
            pathomechanism: {
              steps: [
                'Ingestion of cysticerci in meat → adult worm in intestine (Taeniasis)',
                'Ingestion of T. solium eggs (fecal-oral) → larva hatches → tissue migration → Cysticercosis (brain, muscle, eye)'
              ],
              virulence_factors: ['Scolex (hooks/suckers)']
            },
            clinical: {
              incubation: '8-14 weeks',
              onset: 'Asymptomatic/Mild',
              symptoms: [
                { name: 'Intestinal infection', description: 'Mild abdominal discomfort, passage of proglottids (segments)', severity: 'mild' },
                { name: 'Neurocysticercosis (T. solium)', description: 'Epilepsy, headache, increased ICP', severity: 'severe' }
              ],
              physical_exam: ['Unremarkable (intestinal infection)', 'Neurological symptoms (cysticercosis)'],
              complications: ['Neurocysticercosis (leading cause of epilepsy in developing countries)', 'Ocular cysticercosis']
            },
            diagnostics: {
              laboratory: [{ test: 'CBC', finding: 'Eosinophilia (rare in intestinal form)', interpretation: '-' }],
              imaging: [{ modality: 'Brain CT/MRI', finding: 'Cysts, calcifications', significance: 'Neurocysticercosis' }],
              microbiology: [
                { test: 'Stool', finding: 'Proglottids or eggs', significance: 'Diagnostic (species identification by proglottid)' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Praziquantel', dose: '5-10 mg/kg PO', duration: 'Single dose', note: 'For intestinal worm' },
                  { drug: 'Niclosamide', dose: '2g PO', duration: 'Single dose', note: 'Alternative' }
                ]
              },
              targeted: 'Neurocysticercosis: Albendazole + Praziquantel + Steroids (to reduce inflammation).',
              prevention: ['Thorough cooking of meat', 'Meat inspection', 'Hand washing (against T. solium autoinfection)']
            },
            prognosis: { mortality: 'Intestinal: 0%; Neurocysticercosis: variable, epilepsy may remain', prognostic_scores: [], factors: 'Pathogen type, localization' }
          },
          {
            id: 'echinococcosis',
            name: 'Echinococcosis (Hydatid Disease)',
            pathogen: { type: 'Helminth', name: 'Echinococcus granulosus (cystic), E. multilocularis (alveolar)', gram: '-', shape: 'cestode (tapeworm)' },
            epidemiology: {
              incidence: 'Endemic (Mediterranean, E-Europe, Asia)',
              risk_groups: ['Dog owners, shepherds', 'People who consume wild berries (fox - E. multilocularis)'],
              transmission: 'Fecal-oral: ingestion of eggs from dog/fox feces'
            },
            pathomechanism: {
              steps: [
                'Egg ingestion → oncosphere in the intestine',
                'Portal circulation → Liver (most common) → Lungs → Other',
                'Hydatid cyst formation (slow growth)',
                'Cyst rupture → anaphylaxis and dissemination'
              ],
              virulence_factors: ['Laminated layer (immune protection)', 'Protoscolices']
            },
            clinical: {
              incubation: 'Years (slow growth)',
              onset: 'Slow',
              symptoms: [
                { name: 'Hepatic cyst', description: 'Right upper quadrant pain, hepatomegaly', severity: 'moderate' },
                { name: 'Pulmonary cyst', description: 'Cough, chest pain, hemoptysis', severity: 'moderate' },
                { name: 'Rupture', description: 'Anaphylactic shock, fever, urticaria', severity: 'severe' }
              ],
              physical_exam: ['Hepatomegaly', 'Palpable mass'],
              complications: ['Cyst rupture (anaphylaxis)', 'Biliary obstruction', 'Bacterial superinfection']
            },
            diagnostics: {
              laboratory: [{ test: 'CBC', finding: 'Eosinophilia (25%)', interpretation: 'Not always present' }],
              imaging: [
                { modality: 'Ultrasound/CT', finding: 'Cyst, daughter cysts ("rosette"), calcification', significance: 'Diagnostic (WHO classification)' }
              ],
              microbiology: [
                { test: 'Serology (ELISA, IHA)', finding: 'Positive', significance: 'Confirmation (not always positive)' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Albendazole', dose: '2x400mg PO', duration: 'For months', note: 'Before/after surgery or in inoperable cases' }
                ]
              },
              targeted: 'PAIR technique (Puncture, Aspiration, Injection, Re-aspiration) or Surgical removal (careful of rupture!). E. multilocularis: radical surgery + lifelong Albendazole.',
              prevention: ['Deworming of dogs', 'Hand washing', 'Washing of wild fruits']
            },
            prognosis: { mortality: 'E. granulosus: good; E. multilocularis: poor (resembles liver cancer)', prognostic_scores: [], factors: 'Pathogen type, surgical possibility' }
          },
          {
            id: 'enterobiasis',
            name: 'Enterobiasis (Pinworm)',
            pathogen: { type: 'Helminth', name: 'Enterobius vermicularis', gram: '-', shape: 'nematode (pinworm)' },
            epidemiology: {
              incidence: 'Most common helminth infection in temperate zones (also in developed countries)',
              risk_groups: ['Small children', 'Institutionalized settings (daycare, school)', 'Family members'],
              transmission: 'Fecal-oral, autoinfection (scratching → mouth), inhalation (dust)'
            },
            pathomechanism: {
              steps: [
                'Egg ingestion',
                'Larva in the small intestine',
                'Adult worm in the cecum',
                'Female migrates to the perianal region at night to lay eggs → pruritus'
              ],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '2-6 weeks',
              onset: 'Gradual',
              symptoms: [
                { name: 'Perianal pruritus', description: 'Mainly at night (pruritus ani)', severity: 'moderate' },
                { name: 'Insomnia', description: 'Due to pruritus', severity: 'mild' },
                { name: 'Vulvovaginitis', description: 'In young girls (aberrant migration)', severity: 'moderate' }
              ],
              physical_exam: ['Perianal excoriation (scratch marks)', 'Worms may be visible (rare)'],
              complications: ['Bacterial superinfection (scratching)', 'Salpingitis (rare)']
            },
            diagnostics: {
              microbiology: [
                { test: 'Cellophane tape test', finding: 'Eggs in the morning sample', significance: 'Gold standard (stool exam often negative!)' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Mebendazole', dose: '100mg PO', duration: 'Single dose, repeat after 2 weeks', note: 'Treat the whole family!' },
                  { drug: 'Albendazole', dose: '400mg PO', duration: 'Single dose, repeat after 2 weeks', note: '' }
                ]
              },
              targeted: 'Repeat dose needed after 2 weeks (to prevent autoinfection).',
              prevention: ['Nail trimming', 'Washing pajamas/bedding in hot water', 'Hand washing']
            },
            prognosis: { mortality: 'Zero', prognostic_scores: [], factors: 'None' }
          },
          {
            id: 'trichinellosis',
            name: 'Trichinellosis',
            pathogen: { type: 'Helminth', name: 'Trichinella spiralis', gram: '-', shape: 'nematode (roundworm)' },
            epidemiology: {
              incidence: 'Sporadic outbreaks (pig slaughter)',
              risk_groups: ['People who consume raw/smoked pork, wild boar'],
              transmission: 'Consumption of meat containing larvae (improper cooking)'
            },
            pathomechanism: {
              steps: [
                'Ingestion of encysted larva',
                'Adult worm in intestine → new larvae (Enteral phase)',
                'Larvae into bloodstream → migration to striated muscles',
                'Encystment in muscle (Parenteral phase)'
              ],
              virulence_factors: ['Nurse cell formation in muscle']
            },
            clinical: {
              incubation: 'Enteral: 1-2 days; Parenteral: 1-4 weeks',
              onset: 'Sudden',
              symptoms: [
                { name: 'Enteral (intestinal) phase', description: 'Diarrhea, nausea, abdominal pain', severity: 'moderate' },
                { name: 'Fever', description: 'High, prolonged', severity: 'moderate' },
                { name: 'Myalgia', description: 'Severe muscle pain, weakness', severity: 'severe' },
                { name: 'Periorbital edema', description: 'Characteristic facial swelling', severity: 'moderate' },
                { name: 'Splinter hemorrhages', description: 'Under the nails', severity: 'mild' }
              ],
              physical_exam: ['Periorbital edema', 'Muscle tenderness', 'Fever', 'Conjunctivitis'],
              complications: ['Myocarditis (cause of death!)', 'Encephalitis', 'Pneumonia']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Eosinophilia (up to 50%!)', interpretation: 'Very characteristic' },
                { test: 'CK, LDH', finding: 'Elevated', interpretation: 'Muscle damage' }
              ],
              microbiology: [
                { test: 'Serology (ELISA)', finding: 'Positive (from week 3)', significance: 'Diagnostic' },
                { test: 'Muscle biopsy', finding: 'Larvae', significance: 'Rarely needed' }
              ]
            },
            differential: [
              { disease: 'Influenza', distinguishing: 'Lack of eosinophilia' },
              { disease: 'Leptospirosis', distinguishing: 'Kidney/liver involvement, no eosinophilia' },
              { disease: 'Myositis', distinguishing: 'Autoantibodies' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Mebendazole', dose: '3x200-400mg PO', duration: '3 days, then tapered for 10 days', note: 'More effective in early phase' },
                  { drug: 'Albendazole', dose: '2x400mg PO', duration: '10-14 days', note: '' }
                ],
                inpatient: [
                  { drug: 'Steroid (Prednisolone)', dose: '40-60mg PO', duration: 'Symptomatic', note: 'In case of severe inflammation/allergic reaction (Herxheimer-like)' }
                ]
              },
              targeted: 'Antihelminthic + Steroid.',
              prevention: ['Meat inspection (trichinelloscopy)', 'Thorough cooking of meat (>71°C)', 'Freezing (-15°C for 3 weeks - not always sufficient for wild boar!)']
            },
            prognosis: { mortality: 'Low, but can be fatal in myocarditis/encephalitis', prognostic_scores: [], factors: 'Organ involvement, timing of treatment' }
          },
          {
            id: 'toxocariasis',
            name: 'Toxocariasis (Visceral/Ocular Larva Migrans)',
            pathogen: { type: 'Helminth', name: 'Toxocara canis (dog), Toxocara cati (cat)', gram: '-', shape: 'nematode (roundworm) larvae' },
            epidemiology: {
              incidence: 'Widespread zoonosis worldwide',
              risk_groups: ['Small children (sandbox, geophagia)', 'Dog owners'],
              seasonality: 'None',
              transmission: 'Fecal-oral: ingestion of soil contaminated with eggs (not direct animal contact!)'
            },
            pathomechanism: {
              steps: [
                'Egg ingestion',
                'Larva hatches in the small intestine',
                'Penetrates intestinal wall and enters circulation',
                'Tissue migration (liver, lung, brain, eye)',
                'Humans are accidental hosts; larvae do not mature into adults',
                'Granulomatous inflammation around the larva'
              ],
              virulence_factors: ['Tissue migration', 'Excretory-secretory antigens (TES)']
            },
            clinical: {
              incubation: 'Weeks-months',
              onset: 'Slow',
              symptoms: [
                { name: 'Visceral Larva Migrans (VLM)', description: 'Fever, cough, abdominal pain, hepatomegaly', severity: 'moderate' },
                { name: 'Ocular Larva Migrans (OLM)', description: 'Unilateral vision loss, strabismus, leukocoria', severity: 'severe' },
                { name: 'Covert toxocariasis', description: 'Abdominal pain, headache, cough', severity: 'mild' }
              ],
              physical_exam: [
                'Hepatomegaly',
                'Fever',
                'Pulmonary rales (wheezing)',
                'Fundoscopy: retinal granuloma, chorioretinitis'
              ],
              complications: ['Blindness (OLM)', 'Myocarditis', 'Epilepsy (cerebral granuloma)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC', finding: 'Extreme eosinophilia (in VLM, may be absent in OLM!)', interpretation: 'Parasitic infection' },
                { test: 'IgE', finding: 'Elevated', interpretation: 'Allergic/parasitic response' }
              ],
              imaging: [
                { modality: 'Abdominal Ultrasound', finding: 'Hepatomegaly, hypoechoic lesions', significance: 'VLM' },
                { modality: 'Ophthalmology', finding: 'Retinal granuloma', significance: 'OLM' }
              ],
              microbiology: [
                { test: 'Serology (ELISA)', finding: 'Positive (TES antigen)', significance: 'Diagnostic (Western blot for confirmation)' },
                { test: 'Stool examination', finding: 'NEGATIVE', significance: 'No adult worms in humans, no egg shedding!' }
              ]
            },
            differential: [
              { disease: 'Retinoblastoma', distinguishing: 'Distinction from OLM is critical (leukocoria)!' },
              { disease: 'Ascariasis', distinguishing: 'Eggs in stool, lung phase is shorter' },
              { disease: 'Allergic asthma', distinguishing: 'Serology, hepatomegaly' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Albendazole', dose: '2x400mg PO', duration: '5 days (VLM), 2-4 weeks (OLM)', note: 'Take with fatty food' },
                  { drug: 'Mebendazole', dose: '2x100-200mg PO', duration: '5 days', note: 'Less absorbed' }
                ]
              },
              targeted: 'Albendazole + Steroids (to reduce inflammation, especially in OLM and severe VLM).',
              supportive: ['Ophthalmic surgery (vitrectomy) if needed'],
              prevention: ['Deworming of dogs/cats', 'Hand washing', 'Covering sandboxes']
            },
            prognosis: { mortality: 'Very low, but OLM can cause vision loss', prognostic_scores: [], factors: 'Localization (ocular is worse)' }
      }
    ]
  }
});