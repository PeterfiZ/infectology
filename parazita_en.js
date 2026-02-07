Object.assign(window.diseases, {
      parasitic: {
        name: 'Parasitic Infections',
        icon: '🦟',
        color: '#854d0e',
        diseases: [
           {
            id: 'malaria',
            name: 'Malaria',
             pathogen: { type: 'Protozoan', name: '<i>Plasmodium falciparum, vivax, ovale, malariae, knowlesi</i>', gram: '-', shape: 'ring/gametocyte' },
            epidemiology: {
              incidence: '>200 million cases/year worldwide, >400,000 deaths',
              risk_groups: ['Travelers to endemic areas', 'Children (<5 years)', 'Pregnant women', 'Immunocompromised'],
              seasonality: 'Rainy season (mosquitoes)',
              transmission: 'Anopheles mosquito bite'
            },
            pathomechanism: {
              steps: [
                'During the bite of an infected Anopheles mosquito, sporozoites enter the bloodstream and migrate to liver cells within minutes.',
                'Liver phase (exoerythrocytic): Inside hepatocytes, the parasites multiply asexually, forming schizonts. This phase is asymptomatic. P. vivax and P. ovale can form hypnozoites (dormant forms), which can lead to relapses.',
                'Blood phase (erythrocytic): Merozoites released from the liver infect red blood cells (RBCs). Inside the RBCs, they develop into ring-stage trophozoites and then into schizonts, which release new merozoites upon RBC rupture.',
                'The cyclical rupture of RBCs (every 48-72 hours) causes the characteristic, periodic fever paroxysms due to the release of inflammatory cytokines (TNF-alpha, IL-1).',
                'RBCs infected with P. falciparum adhere to the walls of small blood vessels via the PfEMP1 protein (cytoadherence), obstructing microcirculation and leading to severe organ damage (brain, kidneys, lungs).'
              ],
              virulence_factors: ['PfEMP1 (adhesion)', 'Antigenic variation', 'Hemozoin pigment']
            },
            clinical: {
              incubation: '7-30 days (species-dependent)',
              onset: 'Sudden',
              symptoms: [
                { name: 'Uncomplicated Malaria', description: 'Characterized by febrile paroxysms: chills, high fever (40-41°C), followed by sweating and defervescence. The cycle repeats every 48 (P. falciparum, vivax, ovale) or 72 hours (P. malariae). Accompanying symptoms include headache, myalgia, nausea, and splenomegaly.', severity: 'moderate' },
                { name: 'Severe Malaria (P. falciparum)', description: 'A life-threatening condition. Manifestations include cerebral malaria (impaired consciousness, coma, seizures), severe anemia, ARDS (pulmonary edema), renal failure (blackwater fever), metabolic acidosis, hypoglycemia, and shock.', severity: 'severe' }
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
            pathogen: { type: 'Protozoan', name: '<i>Toxoplasma gondii</i>', gram: '-', shape: 'intracellular' },
            epidemiology: {
              incidence: '30-50% of the world\'s population is seropositive (latent)',
              risk_groups: ['Immunocompromised (HIV/AIDS, transplant)', 'Pregnant women (fetus!)', 'Cat owners'],
              seasonality: 'None',
              transmission: 'Fecal-oral (cat feces), raw meat (cyst), vertical'
            },
            pathomechanism: {
              steps: [
                'Infection can occur via three routes: 1. Ingestion of oocysts from soil/food contaminated with cat feces. 2. Consumption of tissue cysts in raw or undercooked meat. 3. Vertical transmission (from mother to fetus).',
                'In the intestine, parasites released from cysts transform into tachyzoites (rapidly dividing form), which penetrate the intestinal wall and can spread to any part of the body via the bloodstream.',
                'In response to an intact immune system, tachyzoites convert into bradyzoites (slowly dividing form) and form tissue cysts, primarily in the brain, muscles, and eyes. This establishes a latent, lifelong infection.',
                'In cases of immunosuppression (e.g., AIDS, transplantation), these latent cysts can reactivate. Bradyzoites convert back to tachyzoites, leading to severe, often fatal disease (e.g., encephalitis).'
              ],
              virulence_factors: ['Intracellular survival', 'Cyst formation', 'Immunomodulation']
            },
            clinical: {
              incubation: '5-23 days',
              onset: 'Slow/asymptomatic',
              symptoms: [
                { name: 'Immunocompetent Infection', description: '80-90% of cases are asymptomatic. When symptoms occur, they are mild and mononucleosis-like: painless cervical lymphadenopathy, fever, and fatigue.', severity: 'mild' },
                { name: 'Ocular Toxoplasmosis', description: 'The most common cause of chorioretinitis. It causes blurred vision, eye pain, and floaters. It can be a result of primary infection or reactivation.', severity: 'moderate' },
                { name: 'Cerebral Toxoplasmosis (AIDS)', description: 'The most common CNS opportunistic infection in AIDS (CD4<100). Characterized by headache, confusion, fever, and focal neurological signs (seizures, hemiparesis). MRI typically shows multiple ring-enhancing lesions.', severity: 'severe' },
                { name: 'Congenital Toxoplasmosis', description: 'A consequence of primary maternal infection during pregnancy. The classic Sabin\'s tetrad includes hydrocephalus, intracranial calcifications, chorioretinitis, and seizures. It can cause severe and permanent damage.', severity: 'severe' }
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
            pathogen: { type: 'Helminth', name: '<i>Ascaris lumbricoides</i>', gram: '-', shape: 'nematode (roundworm)' },
            epidemiology: {
              incidence: 'Most common helminth infection worldwide (>800 million)',
              risk_groups: ['Children', 'People in poor hygienic conditions'],
              seasonality: 'None',
              transmission: 'Fecal-oral (soil/vegetables contaminated with eggs)'
            },
            pathomechanism: {
              steps: [
                'Infection occurs via the fecal-oral route from soil, vegetables, or water contaminated with eggs.',
                'Ingested eggs hatch in the small intestine, and the larvae penetrate the intestinal wall, migrating through the portal circulation to the liver and then the lungs.',
                'In the lungs, the larvae cause inflammation (Löffler\'s syndrome), are coughed up, and then swallowed, returning to the small intestine.',
                'In the small intestine, they mature into adult worms (15-35 cm), where they absorb nutrients. In heavy infections, a bolus of worms can cause intestinal or biliary obstruction.'
              ],
              virulence_factors: ['Protease inhibitors', 'Migration ability']
            },
            clinical: {
              incubation: '4-8 weeks',
              onset: 'Slow',
              symptoms: [
                { name: 'Pulmonary Phase (Löffler\'s Syndrome)', description: 'A transient syndrome during larval migration: dry cough, shortness of breath, low-grade fever, and marked eosinophilia in the blood count.', severity: 'moderate' },
                { name: 'Intestinal Phase', description: 'Mild infections can be asymptomatic. In more severe cases, abdominal pain, bloating, nausea, and in children, malnutrition and growth retardation may occur.', severity: 'mild' },
                { name: 'Obstructive Complications', description: 'In massive infections, a worm bolus can cause mechanical intestinal obstruction (ileus). Worms migrating into the bile ducts or pancreatic duct can cause jaundice, cholangitis, or pancreatitis.', severity: 'severe' }
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
            pathogen: { type: 'Helminth', name: '<i>Taenia saginata</i> (beef), <i>Taenia solium</i> (pork)', gram: '-', shape: 'cestode (tapeworm)' },
            epidemiology: {
              incidence: 'Widespread worldwide',
              risk_groups: ['People who consume raw meat'],
              transmission: 'Raw/undercooked meat (larva/cysticercus). T. solium eggs person-to-person -> Cysticercosis!'
            },
            pathomechanism: {
              steps: [
                'Taeniasis (Intestinal Tapeworm): Occurs by consuming raw or undercooked beef (T. saginata) or pork (T. solium) containing larvae (cysticerci). In the intestine, the larva develops into an adult tapeworm, several meters long.',
                'Cysticercosis (Tissue Form): Caused EXCLUSIVELY by T. solium! The worm eggs are ingested via the fecal-oral route (e.g., contaminated food, autoinfection). Larvae hatch from the eggs in the intestine, enter the bloodstream, and travel to tissues (brain, muscle, eye), where they encyst (cysticercus).'
              ],
              virulence_factors: ['Scolex (hooks/suckers)']
            },
            clinical: {
              incubation: '8-14 weeks',
              onset: 'Asymptomatic/Mild',
              symptoms: [
                { name: 'Taeniasis (Intestinal Infection)', description: 'Often asymptomatic. Mild abdominal discomfort, bloating, or changes in appetite may occur. The diagnosis is often made by observing motile tapeworm segments (proglottids) passed in the stool.', severity: 'mild' },
                { name: 'Neurocysticercosis (NCC)', description: 'The most severe form, occurring after ingestion of T. solium eggs. Cysts in the central nervous system cause seizures (most common), headaches, increased intracranial pressure, hydrocephalus, or focal neurological symptoms, depending on their location.', severity: 'severe' }
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
            pathogen: { type: 'Helminth', name: '<i>Echinococcus granulosus</i> (cystic), <i>E. multilocularis</i> (alveolar)', gram: '-', shape: 'cestode (tapeworm)' },
            epidemiology: {
              incidence: 'Endemic (Mediterranean, E-Europe, Asia)',
              risk_groups: ['Dog owners, shepherds', 'People who consume wild berries (fox - E. multilocularis)'],
              transmission: 'Fecal-oral: ingestion of eggs from dog/fox feces'
            },
            pathomechanism: {
              steps: [
                'Infection occurs by ingesting eggs from soil or vegetables contaminated with the feces of dogs (E. granulosus) or foxes (E. multilocularis). Humans are an intermediate host for the parasite.',
                'In the intestine, oncospheres (larvae) hatch from the eggs, penetrate the intestinal wall, enter the portal circulation, and most commonly settle in the liver (70%), or less frequently in the lungs (20%) or other organs.',
                'E. granulosus: The larva slowly grows (over years) into a fluid-filled, thick-walled hydatid cyst, which can contain thousands of new larvae (protoscolices). The mass effect of the cyst causes symptoms.',
                'E. multilocularis: The larva grows in a tumor-like, infiltrative manner, destroying liver tissue. It has no clear border, making it difficult to remove surgically.',
                'Cyst rupture can cause severe anaphylactic shock due to the release of its antigenic contents, and dissemination of the infection.'
              ],
              virulence_factors: ['Laminated layer (immune protection)', 'Protoscolices']
            },
            clinical: {
              incubation: 'Years (slow growth)',
              onset: 'Slow',
              symptoms: [
                { name: 'Symptoms', description: 'The disease is asymptomatic for years. Symptoms depend on the cyst\'s size and location. Liver cyst: right upper quadrant pain, feeling of fullness, hepatomegaly, jaundice (biliary compression). Lung cyst: chest pain, cough, hemoptysis.', severity: 'moderate' },
                { name: 'Cyst Rupture', description: 'Sudden abdominal or chest pain, fever, urticaria, eosinophilia, and in severe cases, anaphylactic shock. The cyst contents can spread within the body, leading to the formation of new cysts.', severity: 'severe' },
                { name: 'Alveolar Echinococcosis (E. multilocularis)', description: 'Behaves like liver cancer: jaundice, abdominal pain, weight loss, hepatomegaly. Poor prognosis.', severity: 'severe' }
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
            pathogen: { type: 'Helminth', name: '<i>Enterobius vermicularis</i>', gram: '-', shape: 'nematode (pinworm)' },
            epidemiology: {
              incidence: 'Most common helminth infection in temperate zones (also in developed countries)',
              risk_groups: ['Small children', 'Institutionalized settings (daycare, school)', 'Family members'],
              transmission: 'Fecal-oral, autoinfection (scratching → mouth), inhalation (dust)'
            },
            pathomechanism: {
              steps: [
                'Infection occurs by ingesting the sticky eggs, which can be found under fingernails, on bedding, and in dust. Autoinfection (hand-to-mouth after scratching) is common.',
                'Larvae hatch from the eggs in the small intestine, migrate to the cecal area, and mature into adult worms.',
                'The fertilized female worm (approx. 1 cm) migrates to the perianal folds at night, lays her eggs, and then dies. The egg-laying and movement of the worm cause the characteristic, intense itching.'
              ],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '2-6 weeks',
              onset: 'Gradual',
              symptoms: [
                { name: 'Perianal Pruritus (Itching)', description: 'The leading symptom, typically most intense at night, causing sleep disturbance and restlessness. Scratching can lead to secondary bacterial skin infections.', severity: 'moderate' },
                { name: 'Other Symptoms', description: 'Rarely, mild abdominal pain. In young girls, the worm can migrate into the vagina, causing vulvovaginitis. Most infections are mild or asymptomatic.', severity: 'mild' }
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
            pathogen: { type: 'Helminth', name: '<i>Trichinella spiralis</i>', gram: '-', shape: 'nematode (roundworm)' },
            epidemiology: {
              incidence: 'Sporadic outbreaks (pig slaughter)',
              risk_groups: ['People who consume raw/smoked pork, wild boar'],
              transmission: 'Consumption of meat containing larvae (improper cooking)'
            },
            pathomechanism: {
              steps: [
                'Infection occurs by consuming raw or undercooked meat (especially pork, wild boar) containing larvae.',
                'Enteral phase: In the intestine, larvae mature into adult worms, which burrow into the intestinal wall and produce new larvae. This causes diarrhea and nausea.',
                'Parenteral phase: The newborn larvae enter the blood and lymphatic circulation, disseminate throughout the body, and specifically migrate to highly oxygenated, active striated muscles (masticatory muscles, diaphragm, tongue, eye muscles).',
                'In the muscle cells, the larvae encyst, creating a "nurse cell" complex, which causes chronic inflammation and the characteristic muscle pain.'
              ],
              virulence_factors: ['Nurse cell formation in muscle']
            },
            clinical: {
              incubation: 'Enteral: 1-2 days; Parenteral: 1-4 weeks',
              onset: 'Sudden',
              symptoms: [
                { name: 'Enteral Phase (1st week)', description: 'Diarrhea, nausea, vomiting, and abdominal pain occurring a few days after infection.', severity: 'moderate' },
                { name: 'Parenteral Phase (from 2nd week)', description: 'Larval migration causes the classic triad of symptoms: 1. High fever. 2. Severe muscle pain (myalgia), especially in the chewing and eye muscles. 3. Characteristic bilateral periorbital edema (swelling around the eyes). Extreme eosinophilia is seen in the blood count.', severity: 'severe' },
                { name: 'Complications', description: 'Larvae can also affect the heart muscle (myocarditis) or the central nervous system (encephalitis), which can be life-threatening.', severity: 'severe' }
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
            pathogen: { type: 'Helminth', name: '<i>Toxocara canis</i> (dog), <i>Toxocara cati</i> (cat)', gram: '-', shape: 'nematode (roundworm) larvae' },
            epidemiology: {
              incidence: 'Widespread zoonosis worldwide',
              risk_groups: ['Small children (sandbox, geophagia)', 'Dog owners'],
              seasonality: 'None',
              transmission: 'Fecal-oral: ingestion of soil contaminated with eggs (not direct animal contact!)'
            },
            pathomechanism: {
              steps: [
                'Infection occurs by accidental ingestion of eggs from soil contaminated with dog (T. canis) or cat (T. cati) feces (e.g., sandboxes). Humans are accidental, or paratenic, hosts for the parasite.',
                'In the intestine, larvae hatch from the eggs, penetrate the intestinal wall, and migrate via the bloodstream to various organs (liver, lungs, brain, eyes).',
                'Because humans are not the natural host, the larvae cannot mature into adult worms. Instead, they wander through the tissues (larva migrans), and the body forms granulomatous inflammation around them, which causes tissue damage.'
              ],
              virulence_factors: ['Tissue migration', 'Excretory-secretory antigens (TES)']
            },
            clinical: {
              incubation: 'Weeks-months',
              onset: 'Slow',
              symptoms: [
                { name: 'Visceral Larva Migrans (VLM)', description: 'Typically occurs in young children (1-5 years). Symptoms include prolonged fever, hepatomegaly, cough, and wheezing. Lab tests show extremely high eosinophilia and leukocytosis.', severity: 'moderate' },
                { name: 'Ocular Larva Migrans (OLM)', description: 'More common in older children and adults. A larva migrating to the eye can cause unilateral vision loss, strabismus, and leukocoria (white pupil), which can be mistaken for retinoblastoma. Systemic symptoms and eosinophilia are usually absent.', severity: 'severe' },
                { name: 'Covert Toxocariasis', description: 'A form with mild, non-specific symptoms such as abdominal pain, headache, and cough, with moderate eosinophilia.', severity: 'mild' }
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