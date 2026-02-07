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
        pathogen: { type: 'Virus', name: '<i>Dengue virus</i> (DENV 1-4)', gram: 'RNA, Flaviviridae', shape: 'spherical' },
        epidemiology: {
          incidence: '390 million infections/year worldwide',
          risk_groups: ['Travelers to tropical regions', 'People living in endemic areas'],
          seasonality: 'Rainy season',
          transmission: 'Aedes aegypti/albopictus mosquito bite'
        },
        pathomechanism: {
          steps: [
            'After the bite of an infected mosquito, the virus infects dendritic cells and monocytes in the skin, then migrates to lymph nodes.',
            'Entry: After the bite of an infected mosquito, the virus infects dendritic cells and monocytes in the skin, then migrates to lymph nodes.',
            'Viremia: The virus multiplies and enters the bloodstream (viremia), causing high fever and systemic symptoms.',
            'ADE Phenomenon: In secondary infection, if the patient has previously encountered another serotype, Antibody-Dependent Enhancement (ADE) occurs: non-neutralizing antibodies facilitate virus entry into cells, leading to increased replication.',
            'Consequence: This triggers a severe cytokine storm and increased vascular permeability (capillary leakage), leading to plasma loss, hemoconcentration, and shock.'
          ],
          virulence_factors: ['NS1 protein', 'ADE (Antibody-Dependent Enhancement)']
        },
        clinical: {
          incubation: '4-10 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Febrile Phase', description: 'Sudden onset of high fever (40°C), accompanied by severe headache and retroorbital pain.', severity: 'severe' },
            { name: '"Breakbone Fever"', description: 'Extremely severe muscle and joint pain (myalgia, arthralgia) making movement difficult.', severity: 'severe' },
            { name: 'Critical Phase', description: 'May occur when fever subsides (days 3-7). Warning signs: intense abdominal pain, persistent vomiting, fluid accumulation (ascites, pleural effusion), mucosal bleeding, lethargy or restlessness.', severity: 'severe' },
            { name: 'Rash', description: 'Maculopapular rash appearing after fever, often with "white islands in a red sea" pattern.', severity: 'moderate' }
          ],
          physical_exam: [
            'Fever',
            'Facial flushing',
            'Positive tourniquet test (capillary fragility)',
            'Hepatomegaly',
            'Hemorrhagic signs (petechiae, ecchymosis)',
            'Signs of shock (cold extremities, weak pulse) in critical phase'
          ],
          complications: ['Dengue hemorrhagic fever (DHF)', 'Dengue shock syndrome (DSS)', 'Severe organ impairment (liver, kidney, heart)']
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
        pathogen: { type: 'Virus', name: '<i>Zika virus</i> (ZIKV)', gram: 'RNA, Flaviviridae', shape: 'spherical' },
        epidemiology: {
          incidence: 'Epidemic',
          risk_groups: ['Pregnant women (risk of fetal defects)', 'Travelers'],
          seasonality: 'Mosquito season',
          transmission: 'Aedes mosquito, sexual, vertical'
        },
        pathomechanism: {
          steps: [
            'Entry: The virus enters via mosquito bite, sexual route, or vertically. Skin cells (keratinocytes, dendritic cells) are infected first.',
            'Spread: The virus spreads to lymph nodes and bloodstream (viremia). It can cross the blood-brain barrier and the placental barrier.',
            'Neurotropism: It has strong neurotropism: during fetal development, it specifically infects and destroys neural progenitor cells, leading to brain developmental defects (microcephaly).',
            'Complication: In adults, it can trigger Guillain-Barré syndrome through an autoimmune mechanism.'
          ],
          virulence_factors: ['Neurotropism', 'Placental permeability']
        },
        clinical: {
          incubation: '3-14 days',
          onset: 'Mild',
          symptoms: [
            { name: 'Asymptomatic', description: 'About 80% of infected individuals show no symptoms.', severity: 'mild' },
            { name: 'Rash and Itching', description: 'The most common symptom is a maculopapular rash, often itchy, spreading from face to trunk.', severity: 'moderate' },
            { name: 'Fever and Pain', description: 'Low-grade fever, joint pain (especially small joints of hands/feet), muscle pain, and headache.', severity: 'mild' },
            { name: 'Conjunctivitis', description: 'Non-purulent conjunctivitis (red eyes).', severity: 'moderate' }
          ],
          physical_exam: [
            'Diffuse maculopapular rash',
            'Non-purulent conjunctivitis',
            'Joint swelling (hands/feet)',
            'Low-grade fever'
          ],
          complications: ['Guillain-Barré syndrome (adults)', 'Congenital Zika syndrome (fetal microcephaly, brain calcifications, vision/hearing loss)']
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
        pathogen: { type: 'Virus', name: '<i>Chikungunya virus</i> (CHIKV)', gram: 'RNA, Togaviridae', shape: 'spherical' },
        epidemiology: {
          incidence: 'Epidemic',
          risk_groups: ['Travelers'],
          seasonality: 'Mosquito season',
          transmission: 'Aedes mosquito'
        },
        pathomechanism: {
          steps: [
            'Entry: After mosquito bite, the virus replicates in the skin, then enters the bloodstream.',
            'Tropism: It infects tissues widely but shows specific tropism for joint capsules, muscles, and skin fibroblasts.',
            'Inflammation: It triggers an intense inflammatory response in joints (infiltration of monocytes, macrophages), causing acute arthritis.',
            'Chronicity: The virus or antigens can persist in joint tissues for months, maintaining chronic, rheumatoid arthritis-like complaints.'
          ],
          virulence_factors: ['Joint tropism']
        },
        clinical: {
           incubation: '3-7 days',
           onset: 'Sudden',
          symptoms: [
            { name: 'Acute Phase', description: 'Sudden onset of high fever (>39°C) and excruciating, severe joint pain (polyarthralgia), often causing incapacitation. The joint pain is usually symmetrical and affects distal joints.', severity: 'severe' },
            { name: 'Rash', description: 'Maculopapular rash on trunk and limbs (approx. 50%).', severity: 'moderate' },
            { name: 'Chronic Phase', description: 'In a significant proportion of patients (30-60%), joint pain and stiffness may recur or persist for months or years, significantly impairing quality of life.', severity: 'moderate' }
          ],
          physical_exam: [
            'High fever',
            'Symmetrical joint swelling and tenderness (hands, wrists, ankles)',
            'Tenosynovitis',
            'Maculopapular rash'
          ],
          complications: ['Chronic, disabling arthritis', 'Rarely: myocarditis, encephalitis, hepatitis']
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
