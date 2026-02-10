Object.assign(window.diseases, {
         sexually_transmitted: {
        name: 'Sexually Transmitted Infections',
        icon: '🔬',
        color: '#7c3aed',
        diseases: [
          {
            id: 'syphilis',
            name: 'Syphilis',
            pathogen: { type: 'Spirochete', name: '<i>Treponema pallidum</i>', gram: 'Gram-negative (stains poorly)', shape: 'spiral' },
            epidemiology: {
              incidence: 'Increasing incidence worldwide, high in MSM population',
              risk_groups: ['MSM (men who have sex with men)', 'HIV positive individuals', 'Sex workers', 'Multiple sexual partners', 'Drug users'],
              seasonality: 'None',
              transmission: 'Direct contact with mucous membranes/skin, vertical (congenital)'
            },
            pathomechanism: {
              steps: [
                'Entry and Dissemination: T. pallidum enters through micro-abrasions in skin or mucous membranes. It disseminates via lymphatics and bloodstream within minutes/hours, becoming systemic before the primary lesion appears.',
                'Immune Evasion: The bacteria use a "stealth" strategy with low outer membrane protein density to evade antibody binding and complement activation, allowing persistence.',
                'Tissue Damage: Pathology is based on obliterative endarteritis (inflammation and occlusion of small vessels) accompanied by perivascular plasma cell infiltration.',
                'Consequence: Ischemia caused by vessel occlusion leads to ulceration of the primary chancre and formation of gummas (necrotic granulomas) in the tertiary stage.'
              ],
              virulence_factors: ['Fibronectin-binding proteins', 'Hyaluronidase', 'Antigenic variation', 'Outer membrane proteins']
            },
            clinical: {
              incubation: 'Primary: 9-90 days (average 21 days)',
              onset: 'Phase-dependent',
              symptoms: [
                { name: 'Primary: Chancre', description: 'A painless, indurated ulcer with a clean base at the site of inoculation (genitals, mouth, anus) approx. 3 weeks post-infection. Accompanied by painless regional lymphadenopathy. It heals spontaneously, but the bacteria remain.', severity: 'moderate' },
                { name: 'Secondary: Rash & Lesions', description: 'Sign of hematogenous spread (6-8 weeks later). Generalized, non-pruritic, copper-colored rash typically involving palms and soles. Infectious, weeping papules (condyloma lata) may appear in skin folds.', severity: 'moderate' },
                { name: 'Secondary: Systemic Symptoms', description: 'Fever, malaise, generalized lymphadenopathy ("micropolyadenopathy"), patchy "moth-eaten" alopecia, and mucous patches.', severity: 'mild' },
                { name: 'Tertiary: Late Complications', description: 'Develops years later. Gumma (destructive granulomas in skin/bone/liver), cardiovascular syphilis (aortitis, aneurysm), and neurosyphilis (tabes dorsalis, general paresis/dementia).', severity: 'severe' }
              ],
              physical_exam: [
                'Primary: painless genital/extragenital ulcer + inguinal lymphadenopathy',
                'Secondary: generalized non-pruritic rash (palms/soles!), mucous patches, alopecia',
                'Latent: asymptomatic',
                'Tertiary: gumma (skin, bone), cardiovascular or nervous system involvement'
              ],
              complications: ['Neurosyphilis', 'Cardiovascular syphilis (aortitis)', 'Gumma', 'Congenital syphilis', 'Increased risk of HIV coinfection']
            },
            diagnostics: {
              laboratory: [
                { test: 'Non-treponemal test (RPR/VDRL)', finding: 'Reactive (titer)', interpretation: 'Screening, monitoring activity, treatment efficacy' },
                { test: 'Treponemal-specific test (TPHA/FTA-ABS)', finding: 'Reactive', interpretation: 'Confirmation, remains positive for life' },
                { test: 'Reverse algorithm', finding: 'EIA/CIA → RPR → TPHA', interpretation: 'Automated screening' }
              ],
              imaging: [
                { modality: 'Brain MRI', finding: 'Neurosyphilis: meningeal enhancement, infarcts', significance: 'In case of neurological symptoms' },
                { modality: 'Echo/Chest CT', finding: 'Aortic dilatation', significance: 'Cardiovascular syphilis' }
              ],
              microbiology: [
                { test: 'Dark-field microscopy', finding: 'Live spirochetes from primary lesions', significance: 'Early diagnosis, but rarely available' },
                { test: 'PCR', finding: 'T. pallidum DNA', significance: 'Sensitive, but not routine' },
                { test: 'CSF analysis', finding: 'VDRL positive, pleocytosis, protein↑', significance: 'Neurosyphilis diagnosis' }
              ]
            },
            differential: [
              { disease: 'Genital herpes', distinguishing: 'Painful, grouped vesicles' },
              { disease: 'Chancroid (H. ducreyi)', distinguishing: 'Painful ulcers, suppurative lymph nodes' },
              { disease: 'Lymphogranuloma venereum', distinguishing: 'Painful bubo, Chlamydia trachomatis L1-3' },
              { disease: 'Drug rash', distinguishing: 'Drug history, palm/sole involvement is rare' },
              { disease: 'Pityriasis rosea', distinguishing: 'Herald patch, Christmas tree pattern' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Benzathine Penicillin G', dose: '2.4 million IU IM', duration: 'Single dose', note: 'Early syphilis (primary, secondary, early latent <1 year)' },
                  { drug: 'Penicillin allergy: Doxycycline', dose: '2x100mg PO', duration: '14 days', note: 'Alternative (compliance!)' }
                ],
                inpatient: [
                  { drug: 'Benzathine Penicillin G', dose: '2.4 million IU IM', duration: 'Once weekly for 3 weeks', note: 'Late latent (>1 year) or unknown duration' }
                ],
                icu: [
                  { drug: 'Aqueous Crystalline Penicillin G', dose: '3-4 million IU IV every 4 hours', duration: '10-14 days', note: 'Neurosyphilis!' }
                ]
              },
              targeted: 'Penicillin is always the first choice, no resistance',
              supportive: ['Jarisch-Herxheimer reaction warning', 'HIV testing', 'Partner notification and treatment', 'Serological follow-up (3, 6, 12, 24 months)'],
              prevention: ['Condom use', 'Partner notification', 'Regular screening in risk groups', 'Screening of pregnant women']
            },
            guidelines: {
              diagnosis: [
                'Screening: RPR/VDRL (non-treponemal) or reverse algorithm (EIA/CIA)',
                'Confirmation: TPHA/FTA-ABS (treponemal-specific) tests',
                'Neurosyphilis: CSF VDRL (specific, but not sensitive), pleocytosis, elevated protein'
              ],
              treatment_indications: [
                'All confirmed cases of syphilis must be treated according to stage',
                'Sexual partners must be notified and treated'
              ],
              first_line: [
                'Early syphilis (primary, secondary, early latent): Benzathine Penicillin G 2.4 million IU IM single dose',
                'Late latent or tertiary syphilis: Benzathine Penicillin G 2.4 million IU IM weekly for 3 weeks',
                'Neurosyphilis: Aqueous Crystalline Penicillin G 18-24 million IU/day IV (3-4 million IU every 4 hours) for 10-14 days'
              ],
              special_populations: [
                'Penicillin allergy: Doxycycline 2x100mg PO for 14 days (early) or 28 days (late). In pregnancy, desensitization and Penicillin treatment is mandatory!',
                'Pregnancy: All pregnant women should be screened. Treatment is the same as for non-pregnant adults.',
                'Jarisch-Herxheimer reaction: Febrile reaction in the first 24 hours of treatment, not an allergy. Symptomatic treatment.',
+               'Congenital syphilis: Aqueous Crystalline Penicillin G 100,000-150,000 units/kg/day IV (50,000 units/kg/dose every 12 hours for first 7 days, then every 8 hours) for 10 days. OR Procaine Penicillin G 50,000 units/kg/day IM for 10 days.'
              ],
              monitoring: [
                'Treatment success is monitored by a decrease in non-treponemal test (RPR/VDRL) titers (at least a four-fold decrease within 12 months).'
              ]
            },
            prognosis: {
              mortality: 'Treated syphilis: low; Neurosyphilis: irreversible damage possible',
              prognostic_scores: ['None'],
              factors: 'Stage, HIV coinfection, timing of treatment'
            }
          },
          {
            id: 'hiv_aids',
            name: 'HIV Infection and AIDS',
            pathogen: { type: 'Virus', name: '<i>Human Immunodeficiency Virus</i> (HIV-1, HIV-2)', gram: 'RNA retrovirus', shape: 'spherical' },
            epidemiology: {
              incidence: '~38 million people living with HIV worldwide',
              risk_groups: ['MSM', 'People who inject drugs (PWID)', 'Sex workers', 'Transfusion recipients (developing countries)', 'Partners'],
              seasonality: 'None',
              transmission: 'Sexual, parenteral (blood), vertical (mother-to-child)'
            },
            pathomechanism: {
              steps: [
                'Entry and Binding: Viral gp120 binds to CD4 receptor and CCR5/CXCR4 co-receptors on T-helper cells and macrophages.',
                'Replication and Integration: Viral RNA is reverse transcribed to DNA (prone to errors/resistance), then integrated into host DNA (provirus) by integrase, where it can remain latent.',
                'Immune Destruction: Infected CD4+ T-cells die due to viral replication (pyroptosis), cytotoxic T-cell attack, and syncytium formation. Early depletion of gut-associated lymphoid tissue (GALT) drives chronic systemic inflammation.',
                'Consequence: Critical decline in CD4+ count (<200/µL) leads to immune collapse and opportunistic infections/malignancies (AIDS).'
              ],
              virulence_factors: ['gp120/gp41 (entry)', 'Reverse transcriptase (high mutation rate)', 'Nef, Tat, Rev (regulators)']
            },
            clinical: {
              incubation: '2-4 weeks (acute retroviral syndrome)',
              onset: 'Acute (ARS) or latent',
              symptoms: [
                { name: 'Acute Retroviral Syndrome (ARS)', description: 'Mononucleosis-like illness occurring 2-4 weeks post-infection: fever, sore throat, lymphadenopathy, muscle pain, and maculopapular rash. High viral load and transient CD4 drop.', severity: 'moderate' },
                { name: 'Clinical Latency', description: 'Asymptomatic or mild period lasting 8-10 years without treatment. The virus actively replicates in lymph nodes. Persistent generalized lymphadenopathy (PGL) may occur.', severity: 'mild' },
                { name: 'AIDS Stage', description: 'When CD4 count falls below 200/µL. Appearance of opportunistic infections (e.g., Pneumocystis pneumonia, esophageal candidiasis, Toxoplasma encephalitis, CMV retinitis) and malignancies (Kaposi sarcoma, Lymphoma).', severity: 'severe' }
              ],
              physical_exam: [
                'Generalized lymphadenopathy (PGL)',
                'Oral candidiasis (thrush)',
                'Seborrhea of the scalp',
                'Kaposi\'s sarcoma (purple skin lesions)'
              ],
              complications: ['Pneumocystis jirovecii pneumonia (PCP)', 'Toxoplasma encephalitis', 'Cryptococcus meningitis', 'CMV retinitis', 'Kaposi\'s sarcoma', 'Lymphoma']
            },
            diagnostics: {
              laboratory: [
                { test: 'CD4 count', finding: 'Decreasing (<200/µL = AIDS)', interpretation: 'Immune status' },
                { test: 'CBC', finding: 'Lymphopenia, thrombocytopenia', interpretation: 'Cytopenia' }
              ],
              microbiology: [
                { test: 'Screening test (4th generation ELISA)', finding: 'Ag/Ab positive', significance: 'Short window period (2-3 weeks)' },
                { test: 'Confirmatory test (Western Blot / Immunoblot)', finding: 'Positive', significance: 'Diagnosis' },
                { test: 'HIV RNA PCR (Viral Load)', finding: 'Copies/mL', significance: 'Therapy monitoring and acute infection' }
              ]
            },
            differential: [
              { disease: 'Mononucleosis (EBV)', distinguishing: 'Heterophile antibody, atypical lymphocytes' },
              { disease: 'Influenza', distinguishing: 'Seasonality, faster course' },
              { disease: 'Secondary syphilis', distinguishing: 'Serology, palm/sole rash' }
            ],
            therapy: {
              guidelines: ['EACS Guidelines Version 12.0 (2023)'],
              empirical: {
                drug_classes: {
                  title: 'Antiretroviral Drug Classes',
                  drugs: [
                    { drug: 'NRTI (Nucleoside/Nucleotide RT Inhibitors)', dose: '-', duration: '-', note: 'e.g., Tenofovir (TDF/TAF), Emtricitabine (FTC), Lamivudine (3TC), Abacavir (ABC)' },
                    { drug: 'INSTI (Integrase Inhibitors)', dose: '-', duration: '-', note: 'e.g., Bictegravir (BIC), Dolutegravir (DTG), Raltegravir (RAL)' },
                    { drug: 'NNRTI (Non-Nucleoside RT Inhibitors)', dose: '-', duration: '-', note: 'e.g., Doravirine (DOR), Rilpivirine (RPV), Efavirenz (EFV)' },
                    { drug: 'PI (Protease Inhibitors)', dose: '-', duration: '-', note: 'e.g., Darunavir (DRV), Atazanavir (ATV) - with a booster (ritonavir/cobicistat)' }
                  ]
                },
                combinations: {
                  title: 'Recommended Combinations',
                  drugs: [
                    { drug: '2 NRTI + 1 INSTI', dose: '-', duration: '-', note: 'Standard first-line (e.g., TAF/FTC + Bictegravir)' },
                    { drug: '1 NRTI + 1 INSTI', dose: '-', duration: '-', note: 'Dual therapy (e.g., 3TC + Dolutegravir) - under certain conditions' },
                    { drug: '2 NRTI + 1 NNRTI or 1 PI', dose: '-', duration: '-', note: 'Alternatives' }
                  ]
                },
                regimens: {
                  title: 'Specific Recommended Regimens (EACS)',
                  drugs: [
                    { drug: 'Bictegravir / Tenofovir alafenamide (TAF) / Emtricitabine (FTC)', dose: '1 tab (50/25/200mg) PO 1x', duration: 'Lifelong', note: 'Preferred first-line (STR). Does not require HLA testing.' },
                    { drug: 'Dolutegravir + Tenofovir (TDF/TAF) + Emtricitabine (FTC) / Lamivudine (3TC)', dose: 'Combination', duration: 'Lifelong', note: 'Preferred first-line.' },
                    { drug: 'Dolutegravir / Lamivudine (3TC)', dose: '1 tab (50/300mg) PO 1x', duration: 'Lifelong', note: 'Dual therapy (if VL <500,000, no HBV, CD4 >200).' }
                  ]
                }
              },
              targeted: 'Immediate ART start (Rapid initiation) is recommended. Goal: undetectable viral load (<50 cp/mL).',
              supportive: ['Opportunistic prophylaxis (PCP: TMP/SMX if CD4<200; Toxoplasma: TMP/SMX if CD4<100 and IgG+)', 'Vaccinations (Pneumococcus, Influenza, HBV, HAV, HPV, Meningococcus, VZV - live vaccine contraindicated if CD4<200)'],
              prevention: ['PrEP (TDF/FTC or TAF/FTC)', 'PEP (ART for 28 days, started <48 hours)', 'U=U (Undetectable = Untransmittable)']
            },
            guidelines: {
              diagnosis: [
                'Screening: 4th generation Ag/Ab combination test',
                'Confirmation: Western Blot or Immunoblot',
                'Baseline: CD4, Viral Load, HLA-B*5701 (before giving ABC), resistance testing (if available)'
              ],
              treatment_indications: [
                'Treat All: ART is recommended for all people with HIV, regardless of CD4 count.',
                'Urgent ART: Pregnancy, acute opportunistic infection (except TB meningitis/Cryptococcus meningitis - deferral), acute HIV syndrome.'
              ],
              first_line: [
                '1. Bictegravir/TAF/FTC (STR)',
                '2. Dolutegravir + TAF/FTC or TDF/FTC or ABC/3TC (HLA-B*5701 neg)',
                '3. Dolutegravir/3TC (2-drug regimen) - with conditions'
              ],
              monitoring: [
                'Viral Load: at 1, 3, 6 months, then every 6 months (if stable)',
                'CD4: Initially every 3-6 months, less frequently in stable cases'
              ],
              special_populations: [
                'Pregnancy: DTG-based regimens are preferred',
                'TB coinfection: Start ART within 2-8 weeks (CD4 dependent), Rifampicin interactions (DTG dose increase!)'
              ]
            },
            prognosis: {
              mortality: 'With treatment, near-normal life expectancy; Untreated AIDS: fatal',
              prognostic_scores: ['CD4 count', 'Viral load'],
              factors: 'Adherence, early diagnosis'
            }
          },
          {
            id: 'gonorrhea',
            name: 'Gonorrhea',
            pathogen: { type: 'Bacterium', name: '<i>Neisseria gonorrhoeae</i>', gram: 'Gram-negative', shape: 'diplococcus (intracellular)' },
            epidemiology: {
              incidence: 'Common, increasing resistance',
              risk_groups: ['Young adults', 'MSM', 'New sexual partner'],
              seasonality: 'None',
              transmission: 'Sexual, perinatal'
            },
            pathomechanism: {
              steps: [
                'Adhesion: Bacteria attach to mucosal epithelial cells (urethra, cervix, rectum, pharynx) using pili.',
                'Invasion: Penetrate cells and subepithelial space.',
                'Inflammation: LOS (lipooligosaccharide) and other virulence factors trigger a strong neutrophil response (purulent discharge).'
              ],
              virulence_factors: ['Pili', 'Opa proteins', 'IgA protease', 'LOS']
            },
            clinical: {
              incubation: '2-7 days',
              onset: 'Acute',
              symptoms: [
                { name: 'Men', description: 'Urethritis: profuse, yellow-green purulent discharge, dysuria. (90% symptomatic)', severity: 'moderate' },
                { name: 'Women', description: 'Cervicitis: often asymptomatic or mild (50%). Vaginal discharge, dysuria, lower abdominal pain.', severity: 'mild' },
                { name: 'Extragenital', description: 'Pharyngitis (often asymptomatic), Proctitis (pain, discharge), Conjunctivitis (neonates).', severity: 'moderate' }
              ],
              physical_exam: ['Purulent urethral/cervical discharge', 'Bartholin gland abscess', 'Fever (in DGI)'],
              complications: ['Pelvic Inflammatory Disease (PID)', 'Infertility', 'Epididymitis', 'Disseminated Gonococcal Infection (DGI): arthritis, dermatitis']
            },
            diagnostics: {
              laboratory: [{ test: 'CBC', finding: 'Normal', interpretation: 'In local infection' }],
              microbiology: [
                { test: 'NAAT (PCR)', finding: 'Positive', significance: 'Gold standard (urine, swab)' },
                { test: 'Culture', finding: 'N. gonorrhoeae', significance: 'MANDATORY for resistance testing in treatment failure!' },
                { test: 'Microscopy', finding: 'Intracellular Gram-negative diplococci', significance: 'Diagnostic in men, less sensitive in women' }
              ]
            },
            therapy: {
              guidelines: ['IUSTI 2020 / CDC 2021'],
              empirical: {
                outpatient: [
                  { drug: 'Ceftriaxone', dose: '1g IM single dose', duration: 'Stat', note: 'First choice. Dose increased due to resistance (previously 250-500mg).' },
                  { drug: 'Alternative (Resistance/Allergy)', dose: '-', duration: '-', note: 'Gentamicin 240mg IM + Azithromycin 2g PO. Cefixime 800mg PO (only if no other option, resistance risk!).' }
                ]
              },
              targeted: 'Based on culture. Increasing Ceftriaxone resistance (esp. Asia) is a concern. Dual therapy (e.g., +Azithromycin) is not always routinely recommended anymore, only in specific cases.',
              supportive: ['Partner treatment', 'Sexual abstinence for 7 days'],
              prevention: ['Condoms', 'Screening']
            },
            prognosis: { mortality: 'Very low', prognostic_scores: [], factors: 'Complications (PID, DGI)' }
          },
          {
            id: 'chlamydia',
            name: 'Chlamydia Infection',
            pathogen: { type: 'Bacterium', name: '<i>Chlamydia trachomatis</i> (serovars D-K)', gram: 'Gram-negative (intracellular)', shape: 'coccoid' },
            epidemiology: {
              incidence: 'Most common bacterial STI worldwide',
              risk_groups: ['Young sexually active adults (<25 years)', 'New/multiple partners'],
              seasonality: 'None',
              transmission: 'Sexual, perinatal'
            },
            pathomechanism: {
              steps: [
                'Infectious elementary bodies (EB) enter columnar epithelial cells (cervix, urethra, rectum).',
                'Inside the cell, they transform into reticulate bodies (RB) and replicate.',
                'After cell lysis, new EBs are released to infect more cells.',
                'Chronic inflammation leads to scarring, which is the basis for complications (e.g., infertility).'
              ],
              virulence_factors: ['Intracellular survival', 'Heat shock proteins (HSP)']
            },
            clinical: {
              incubation: '1-3 weeks',
              onset: 'Slow/Asymptomatic',
              symptoms: [
                { name: 'Asymptomatic ("Silent")', description: '70-80% of women and 50% of men are asymptomatic, facilitating spread and late complications.', severity: 'mild' },
                { name: 'Women', description: 'Cervicitis: mucopurulent discharge, contact bleeding, dysuria. Lower abdominal pain (may indicate PID).', severity: 'moderate' },
                { name: 'Men', description: 'Urethritis: dysuria, watery/glassy discharge (less purulent than gonorrhea).', severity: 'moderate' }
              ],
              physical_exam: ['Mucopurulent cervicitis', 'Adnexal tenderness (PID)', 'Urethral discharge'],
              complications: ['Pelvic Inflammatory Disease (PID)', 'Infertility (tubal factor)', 'Ectopic pregnancy', 'Fitz-Hugh-Curtis syndrome (perihepatitis)', 'Reactive arthritis (Reiter\'s syndrome)', 'Neonatal conjunctivitis/pneumonia']
            },
            diagnostics: {
              laboratory: [{ test: 'CBC', finding: 'Normal', interpretation: 'Local infection' }],
              microbiology: [
                { test: 'NAAT (PCR)', finding: 'Positive', significance: 'Gold standard (urine, vaginal/cervical/urethral swab)' },
                { test: 'Culture', finding: 'Difficult', significance: 'Only in special labs (cell culture)' }
              ]
            },
            therapy: {
              guidelines: ['CDC 2021 / IUSTI'],
              empirical: {
                outpatient: [
                  { drug: 'Doxycycline', dose: '100mg BID PO', duration: '7 days', note: 'First choice (better for rectal infection too).' },
                  { drug: 'Azithromycin', dose: '1g PO', duration: 'Single dose', note: 'Alternative (e.g., in pregnancy or if compliance is an issue).' }
                ]
              },
              targeted: 'Doxycycline preferred. Azithromycin in pregnancy. Partner treatment is mandatory!',
              supportive: ['Sexual abstinence for 7 days', 'Partner notification'],
              prevention: ['Condoms', 'Annual screening for women <25 years']
            },
            prognosis: { mortality: 'Very low', prognostic_scores: [], factors: 'Infertility risk increases with recurrent infections' }
          },
          {
            id: 'genital_herpes',
            name: 'Genital Herpes',
            pathogen: { type: 'Virus', name: '<i>Herpes Simplex Virus</i> (mainly HSV-2, less commonly HSV-1)', gram: 'dsDNA', shape: 'spherical' },
            epidemiology: {
              incidence: 'Common, lifelong infection',
              risk_groups: ['Sexually active adults', 'Multiple partners'],
              seasonality: 'None',
              transmission: 'Sexual contact (including asymptomatic shedding)'
            },
            pathomechanism: {
              steps: [
                'Virus enters through micro-abrasions in mucosa or skin.',
                'Replicates in epithelial cells (lytic infection), then travels along sensory nerves to sacral ganglia.',
                'Establishes latent infection. Upon reactivation (stress, immunosuppression), virus travels back to skin causing symptoms.'
              ],
              virulence_factors: ['Latency', 'Immune evasion']
            },
            clinical: {
              incubation: '2-12 days',
              onset: 'Sudden (primary) or prodrome (recurrent)',
              symptoms: [
                { name: 'Primary Infection', description: 'Severe symptoms: extensive, painful vesicles and ulcers on genitals. Often accompanied by fever, malaise, painful inguinal lymphadenopathy, and dysuria. Healing: 2-4 weeks.', severity: 'severe' },
                { name: 'Recurrent Infection', description: 'Milder course. Often preceded by prodromal symptoms (burning, tingling). Fewer lesions, no systemic symptoms. Healing: 5-10 days.', severity: 'mild' }
              ],
              physical_exam: ['Grouped vesicles/ulcers', 'Inguinal lymphadenopathy (primary)', 'Cervicitis/Proctitis'],
              complications: ['Aseptic meningitis', 'Urinary retention (autonomic dysfunction)', 'Neonatal herpes (in pregnancy!)', 'Increased risk of HIV transmission']
            },
            diagnostics: {
              laboratory: [{ test: '-', finding: '-', interpretation: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'HSV DNA', significance: 'Gold standard (most sensitive)' },
                { test: 'Culture', finding: 'HSV', significance: 'Only from fresh vesicles' },
                { test: 'Type-specific serology', finding: 'IgG', significance: 'Differentiation HSV-1 vs HSV-2 (not for acute diagnosis)' }
              ]
            },
            therapy: {
              guidelines: ['IUSTI / CDC'],
              empirical: {
                outpatient: [
                  { drug: 'Acyclovir', dose: '400mg TID PO', duration: '7-10 days (primary), 5 days (recurrent)', note: 'Or 200mg 5x/day.' },
                  { drug: 'Valacyclovir', dose: '500-1000mg BID PO', duration: '7-10 days (primary), 3 days (recurrent)', note: 'Better bioavailability.' }
                ]
              },
              targeted: 'Suppressive therapy (daily Acyclovir/Valacyclovir) recommended for frequent recurrences (>6/year).',
              supportive: ['Analgesics', 'Saline sitz baths'],
              prevention: ['Condoms (do not provide full protection)', 'Abstinence during prodrome/symptoms', 'Suppressive therapy (reduces transmission)']
            },
            prognosis: { mortality: 'Very low', prognostic_scores: [], factors: 'Psychological burden of recurrences' }
          },
          {
            id: 'trichomoniasis',
            name: 'Trichomoniasis',
            pathogen: { type: 'Protozoan', name: '<i>Trichomonas vaginalis</i>', gram: '-', shape: 'pear-shaped, flagellated' },
            epidemiology: {
              incidence: 'Most common non-viral STI',
              risk_groups: ['Sexually active women', 'Multiple partners'],
              seasonality: 'None',
              transmission: 'Sexual contact'
            },
            pathomechanism: {
              steps: [
                'The protozoan adheres to squamous epithelial cells of the vagina and urethra.',
                'Damages epithelium via direct cytotoxicity and inflammatory response.',
                'Alters vaginal flora (pH elevation).'
              ],
              virulence_factors: ['Adhesins', 'Cysteine proteases']
            },
            clinical: {
              incubation: '4-28 days',
              onset: 'Gradual',
              symptoms: [
                { name: 'Women', description: 'Profuse, frothy, yellow-green, foul-smelling discharge. Vulvovaginal itching, dysuria, dyspareunia. "Strawberry cervix" (colpitis macularis) on examination.', severity: 'moderate' },
                { name: 'Men', description: 'Often asymptomatic. Can cause urethritis (discharge, dysuria), prostatitis.', severity: 'mild' }
              ],
              physical_exam: ['Frothy discharge', 'Strawberry cervix (punctate hemorrhages)', 'pH > 4.5'],
              complications: ['Preterm delivery', 'Low birth weight', 'Increased risk of HIV transmission', 'PID']
            },
            diagnostics: {
              laboratory: [{ test: 'Vaginal pH', finding: '> 4.5', interpretation: 'Bacterial vaginosis or Trichomonas' }],
              microbiology: [
                { test: 'Wet mount', finding: 'Motile flagellated protozoa', significance: 'Rapid, but low sensitivity (60-70%)' },
                { test: 'NAAT (PCR)', finding: 'Positive', significance: 'Gold standard (most sensitive)' },
                { test: 'Culture', finding: 'Positive', significance: 'If NAAT not available' }
              ]
            },
            therapy: {
              guidelines: ['CDC 2021 / IUSTI'],
              empirical: {
                outpatient: [
                  { drug: 'Metronidazole', dose: '2g PO single dose', duration: 'Single dose', note: 'First choice. Treat partner too!' },
                  { drug: 'Tinidazole', dose: '2g PO single dose', duration: 'Single dose', note: 'Alternative' },
                  { drug: 'Metronidazole', dose: '500mg BID PO', duration: '7 days', note: 'Alternative (e.g. in HIV positive)' }
                ]
              },
              targeted: 'Metronidazole or Tinidazole. Alcohol consumption is forbidden during treatment (disulfiram-like effect)!',
              supportive: ['Sexual abstinence until symptoms resolve and partner is treated'],
              prevention: ['Condoms', 'Partner treatment']
            },
            prognosis: { mortality: 'Zero', prognostic_scores: [], factors: 'Reinfection common if partner untreated' }
          }
        ],
    } // End of sexually_transmitted
});