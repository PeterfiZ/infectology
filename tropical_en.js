/**
 * c:\Users\Peterfi\OneDrive - Pécsi Tudományegyetem\A folyó ügyek\a gyorsan elintézendő\a leadandó, határidős dolgok\Cikkek, előadások\programok\Infectologia\tropical_en.js
 */
Object.assign(window.diseases, {
  tropical: {
    name: 'Tropical Diseases',
    icon: '🌴',
    color: '#f97316',
    diseases: [
      {
        id: 'dengue',
        name: 'Dengue Fever',
        pathogen: { type: 'Virus', name: 'Dengue virus (DENV 1-4)', gram: 'RNA, Flaviviridae', shape: 'spherical' },
        epidemiology: {
          incidence: '390 million infections/year worldwide',
          risk_groups: ['Travelers to tropical regions', 'People living in endemic areas'],
          seasonality: 'Rainy season',
          transmission: 'Aedes aegypti/albopictus mosquito bite'
        },
        pathomechanism: {
          steps: [
            'Mosquito bite',
            'Virus replication in dendritic cells/monocytes',
            'Viremia',
            'Antibody-dependent enhancement (ADE) in secondary infection (more severe course)',
            'Cytokine storm, capillary leakage'
          ],
          virulence_factors: ['NS1 protein', 'ADE']
        },
        clinical: {
          incubation: '4-10 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Fever', description: 'High, sudden (>99% in symptomatic cases)', severity: 'severe' },
            { name: 'Severe arthralgia/myalgia', description: 'Severe muscle and joint pain ("breakbone fever") (>90%)', severity: 'severe' },
            { name: 'Headache/Retroorbital pain', description: 'Pain behind the eyes (>90%)', severity: 'moderate' },
            { name: 'Rash', description: 'Maculopapular (50-80%), appears after fever', severity: 'moderate' },
            { name: 'Nausea/Vomiting', description: 'Can be a common warning sign', severity: 'moderate' }
          ],
          physical_exam: [
            'Fever',
            'Rash ("white islands in a red sea")',
            'Positive tourniquet test (capillary fragility)',
            'Hepatomegaly',
            'Warning signs: abdominal pain, persistent vomiting, fluid accumulation'
          ],
          complications: ['Dengue hemorrhagic fever (DHF)', 'Dengue shock syndrome (DSS)', 'Severe bleeding']
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC', finding: 'Leukopenia, thrombocytopenia', interpretation: 'Characteristic' },
            { test: 'Hematocrit', finding: 'Elevated', interpretation: 'Hemoconcentration (leakage)' }
          ],
          microbiology: [
            { test: 'NS1 antigen', finding: 'Positive', significance: 'Early phase (1-5 days)' },
            { test: 'PCR', finding: 'RNA', significance: 'Early phase' },
            { test: 'IgM/IgG', finding: 'Positive', significance: 'Late phase (>5 days)' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Fluids, antipyretics (Paracetamol). NSAIDs are contraindicated (bleeding risk)!' }]
          },
          targeted: 'No specific antiviral agent.',
          supportive: ['Fluid replacement (critical!)', 'Blood products (in severe bleeding)'],
          prevention: ['Mosquito repellent', 'Vaccine (Qdenga)']
        },
        prognosis: { mortality: 'With appropriate treatment <1%, severe cases 2-5%', prognostic_scores: [], factors: 'Previous infection (ADE), age, comorbidity' }
      },
      {
        id: 'zika',
        name: 'Zika Virus Infection',
        pathogen: { type: 'Virus', name: 'Zika virus (ZIKV)', gram: 'RNA, Flaviviridae', shape: 'spherical' },
        epidemiology: {
          incidence: 'Epidemic',
          risk_groups: ['Pregnant women (risk of fetal defects)', 'Travelers'],
          seasonality: 'Mosquito season',
          transmission: 'Aedes mosquito, sexual, vertical'
        },
        pathomechanism: {
          steps: [
            'Entry via mosquito bite/sexual route',
            'Replication',
            'Viremia',
            'Neurotropism (adults: GBS, fetus: microcephaly)'
          ],
          virulence_factors: ['Neurotropism']
        },
        clinical: {
          incubation: '3-14 days',
          onset: 'Mild',
          symptoms: [
            { name: 'Asymptomatic', description: 'Approximately 80% of infections are asymptomatic', severity: 'mild' },
            { name: 'Rash', description: 'Maculopapular, itchy (>90% in symptomatic cases)', severity: 'moderate' },
            { name: 'Fever', description: 'Low (65%), often absent', severity: 'mild' },
            { name: 'Arthralgia', description: 'Small joints (65%), with edema', severity: 'mild' },
            { name: 'Conjunctivitis', description: 'Non-purulent (55%)', severity: 'moderate' }
          ],
          physical_exam: ['Rash', 'Conjunctivitis', 'Fever'],
          complications: ['Guillain-Barré syndrome', 'Congenital Zika syndrome (microcephaly)']
        },
        diagnostics: {
          laboratory: [{ test: 'CBC', finding: 'Mild leukopenia/thrombocytopenia', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'RNA (blood, urine)', significance: 'Diagnostic (excreted longer in urine)' },
            { test: 'IgM', finding: 'Positive', significance: 'Cross-reaction with Dengue possible!' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Rest, fluids' }]
          },
          targeted: 'None.',
          supportive: ['Symptomatic treatment'],
          prevention: ['Mosquito protection', 'Safe sex practices (virus can persist in semen for months)', 'Pregnant women should avoid endemic areas']
        },
        prognosis: { mortality: 'Very low, fetal risk significant', prognostic_scores: [], factors: 'Pregnancy, age' }
      },
      {
        id: 'chikungunya',
        name: 'Chikungunya',
        pathogen: { type: 'Virus', name: 'Chikungunya virus (CHIKV)', gram: 'RNA, Togaviridae', shape: 'spherical' },
        epidemiology: {
          incidence: 'Epidemic',
          risk_groups: ['Travelers'],
          seasonality: 'Mosquito season',
          transmission: 'Aedes mosquito'
        },
        pathomechanism: {
          steps: ['Mosquito bite', 'Replication in fibroblasts', 'Joint tropism', 'Chronic inflammation'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '3-7 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Fever and polyarthralgia', description: 'Sudden high fever and severe, symmetrical polyarthralgia (>95%)', severity: 'severe' },
            { name: 'Rash', description: 'Maculopapular rash (50-75%)', severity: 'moderate' },
            { name: 'Other symptoms', description: 'Headache, myalgia, nausea', severity: 'mild' }
          ],
          physical_exam: ['Symmetrical polyarthritis/tenosynovitis (hands, wrists, ankles)', 'Fever', 'Maculopapular rash'],
          complications: ['Chronic, persistent arthritis (30-60%, mainly in elderly)', 'Rarely: myocarditis, encephalitis']
        },
        diagnostics: {
          laboratory: [{ test: 'CBC', finding: 'Lymphopenia', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'RNA', significance: 'Acute phase (<1 week)' },
            { test: 'IgM/IgG', finding: 'Positive', significance: 'Later' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'NSAIDs may be used (once Dengue is excluded)' }]
          },
          targeted: 'None.',
          supportive: ['Pain relief (NSAIDs, steroids in chronic cases)', 'Physiotherapy'],
          prevention: ['Mosquito protection', 'Vaccine (Ixchiq - FDA approved)']
        },
        prognosis: { mortality: 'Very low, but morbidity (chronic pain) high', prognostic_scores: [], factors: 'Age, chronic joint problems' }
      }
    ]
  }
});
