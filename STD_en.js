Object.assign(window.diseases, {
         sexually_transmitted: {
        name: 'Sexually Transmitted Infections',
        icon: '🔬',
        color: '#7c3aed',
        diseases: [
          {
            id: 'syphilis',
            name: 'Syphilis',
            pathogen: { type: 'Spirochete', name: 'Treponema pallidum', gram: 'Gram-negative (stains poorly)', shape: 'spiral' },
            epidemiology: {
              incidence: 'Increasing incidence worldwide, high in MSM population',
              risk_groups: ['MSM (men who have sex with men)', 'HIV positive individuals', 'Sex workers', 'Multiple sexual partners', 'Drug users'],
              seasonality: 'None',
              transmission: 'Direct contact with mucous membranes/skin, vertical (congenital)'
            },
            pathomechanism: {
              steps: [
                'T. pallidum enters through mucous membranes/skin',
                'Local multiplication → primary lesion (chancre)',
                'Hematogenous spread (primary viremia)',
                'Secondary syphilis: disseminated disease',
                'Latent phase: immune response keeps it under control',
                'Tertiary: chronic granulomatous inflammation (gumma) or vascular/neurological involvement'
              ],
              virulence_factors: ['Fibronectin-binding proteins', 'Hyaluronidase', 'Antigenic variation', 'Outer membrane proteins']
            },
            clinical: {
              incubation: 'Primary: 9-90 days (average 21 days)',
              onset: 'Phase-dependent',
              symptoms: [
                { name: 'Primary: Chancre', description: 'Painless, hard-edged ulcer (single in 60-80%)', severity: 'moderate' },
                { name: 'Secondary: Rash', description: 'Generalized, non-pruritic (75-100%), involvement of palms/soles (60-80%)', severity: 'moderate' },
                { name: 'Secondary: Lymphadenopathy', description: 'Generalized, painless (50-85%)', severity: 'mild' },
                { name: 'Secondary: Condyloma lata', description: 'Flat, weeping papules (10-20%)', severity: 'moderate' },
                { name: 'Tertiary: Gumma', description: 'Granulomatous lesions (15% in untreated cases)', severity: 'severe' },
                { name: 'Neurosyphilis', description: 'In any stage! (Symptomatic: 5-10%)', severity: 'severe' }
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
                  { drug: 'Benzylpenicillin G (Bicillin LA)', dose: '2.4 million IU IM', duration: 'Single dose', note: 'Early syphilis (primary, secondary, early latent <1 year)' },
                  { drug: 'Penicillin allergy: Doxycycline', dose: '2x100mg PO', duration: '14 days', note: 'Alternative (compliance!)' }
                ],
                inpatient: [
                  { drug: 'Benzylpenicillin G', dose: '2.4 million IU IM', duration: 'Once weekly for 3 weeks', note: 'Late latent (>1 year) or unknown duration' }
                ],
                icu: [
                  { drug: 'Aqueous Penicillin G', dose: '3-4 million IU IV every 4 hours', duration: '10-14 days', note: 'Neurosyphilis!' }
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
                'Jarisch-Herxheimer reaction: Febrile reaction in the first 24 hours of treatment, not an allergy. Symptomatic treatment.'
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
            pathogen: { type: 'Virus', name: 'Human Immunodeficiency Virus (HIV-1, HIV-2)', gram: 'RNA retrovirus', shape: 'spherical' },
            epidemiology: {
              incidence: '~38 million people living with HIV worldwide',
              risk_groups: ['MSM', 'IV drug users', 'Sex workers', 'Transfusion recipients (developing countries)', 'Partners'],
              seasonality: 'None',
              transmission: 'Sexual, parenteral (blood), vertical (mother-to-child)'
            },
            pathomechanism: {
              steps: [
                'Virus binding to CD4 receptor and co-receptors (CCR5/CXCR4)',
                'Reverse transcription (RNA -> DNA)',
                'Integration into the host cell genome (provirus)',
                'Progressive destruction of CD4+ T-cells',
                'Immune system depletion -> Opportunistic infections (AIDS)'
              ],
              virulence_factors: ['gp120/gp41 (entry)', 'Reverse transcriptase (high mutation rate)', 'Nef, Tat, Rev (regulators)']
            },
            clinical: {
              incubation: '2-4 weeks (acute retroviral syndrome)',
              onset: 'Acute (ARS) or latent',
              symptoms: [
                { name: 'Acute (ARS): Fever', description: 'Most common symptom (>80-90%)', severity: 'moderate' },
                { name: 'Acute (ARS): Fatigue', description: 'Pronounced (>70-90%)', severity: 'mild' },
                { name: 'Acute (ARS): Rash', description: 'Maculopapular (40-80%)', severity: 'moderate' },
                { name: 'Acute (ARS): Pharyngitis', description: 'Sore throat (50-70%)', severity: 'mild' },
                { name: 'Latent phase', description: 'Asymptomatic or PGL (for years)', severity: 'mild' },
                { name: 'AIDS', description: 'Opportunistic infections (CD4 <200)', severity: 'severe' }
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
                outpatient: [
                  { drug: 'Bictegravir / TAF / Emtricitabine', dose: '1 tab (50/25/200mg) PO 1x', duration: 'Lifelong', note: 'Preferred first-line (STR). Does not require HLA testing.' },
                  { drug: 'Dolutegravir + TDF/TAF + FTC/3TC', dose: 'Combination', duration: 'Lifelong', note: 'Preferred first-line.' },
                  { drug: 'Dolutegravir / Lamivudine', dose: '1 tab (50/300mg) PO 1x', duration: 'Lifelong', note: 'Dual therapy (if VL <500,000, no HBV, CD4 >200).' }
                ]
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
          }
        ]
}, // End of sexually_transmitted
});