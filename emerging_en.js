/**
 * c:\Users\Peterfi\OneDrive - Pécsi Tudományegyetem\A folyó ügyek\a gyorsan elintézendő\a leadandó, határidős dolgok\Cikkek, előadások\programok\Infectologia\emerging_en.js
 */
Object.assign(window.diseases, {
  emerging: {
    name: 'Emerging Pathogens',
    icon: '🚨',
    color: '#be185d',
    diseases: [
      {
        id: 'mpox',
        name: 'Mpox (Monkeypox)',
        pathogen: { type: 'Virus', name: 'Mpox virus (MPXV)', genome: 'dsDNA, Poxviridae', shape: 'brick-shaped' },
        epidemiology: {
          incidence: 'Global outbreak (2022–), endemic in Central and West Africa',
          risk_groups: ['MSM (Men who have sex with men)', 'Healthcare workers', 'Household contacts'],
          seasonality: 'None',
          transmission: 'Close skin-to-skin contact, respiratory droplets, fomites, zoonotic (rodents)'
        },
        pathomechanism: { 
          steps: [
            'Inoculation via broken skin or mucous membranes',
            'Primary replication at entry site and regional lymph nodes',
            'Viremia (systemic dissemination)',
            'Seeding of skin and mucosal surfaces'
          ],
          virulence_factors: ['Immunomodulatory proteins (host immune evasion)']
        },
        clinical: {
          incubation: '5–21 days',
          onset: 'Acute', // MORE ACCURATE: Acute is preferred over Sudden
          symptoms: [
            { name: 'Rash', description: 'Macule → Papule → Vesicle → Pustule → Scab (often painful and umbilicated)', severity: 'moderate' },
            { name: 'Lymphadenopathy', description: 'Significant lymph node swelling (distinguishes from variola/varicella)', severity: 'moderate' },
            { name: 'Febrile prodrome', description: 'Fever, chills, and malaise', severity: 'mild' },
            { name: 'Proctitis', description: 'Severe rectal pain and tenesmus (common in sexual transmission)', severity: 'severe' }
          ],
          physical_exam: [
            'Centrifugal distribution (including palms and soles)',
            'Tender lymphadenopathy',
            'Anogenital lesions'
          ],
          complications: ['Secondary bacterial infection', 'Bronchopneumonia', 'Sepsis', 'Encephalitis', 'Keratitis (leading to corneal scarring)']
        },
        diagnostics: {
          laboratory: [{ test: 'CBC', finding: 'Non-specific (leukocytosis or leucopenia)', interpretation: '-' }],
          microbiology: [
            { test: 'NAAT (PCR)', finding: 'MPXV DNA', significance: 'Gold standard (swab from lesion base/roof)' },
            { test: 'Electron microscopy', finding: 'Poxvirus morphology', significance: 'Research/Public health labs' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportive care', dose: '-', duration: '-', note: 'Analgesia, hydration, wound care, strict isolation' }]
          },
          targeted: 'Tecovirimat (TPOXX) indicated for severe disease or immunocompromised patients.',
          supportive: ['Analgesics (NSAIDs/Opioids)', 'Fluid resuscitation'],
          prevention: ['Vaccination (JYNNEOS - modified vaccinia Ankara)', 'Infection control', 'Contact tracing']
        },
        prognosis: { mortality: 'Clade IIb (global): <0.1%; Clade I (Congo Basin): up to 10%', prognostic_scores: [], factors: 'Clade type, immune status, access to care' }
      },
      {
        id: 'nipah',
        name: 'Nipah Virus (NiV)',
        pathogen: { type: 'Virus', name: 'Nipah virus (NiV)', genome: 'ssRNA (-), Paramyxoviridae', shape: 'pleomorphic' },
        epidemiology: {
          incidence: 'Sporadic outbreaks (South and Southeast Asia)',
          risk_groups: ['Pig farmers', 'Date palm sap collectors/consumers', 'Close contacts of cases'],
          seasonality: 'December–May (Bangladesh)',
          transmission: 'Direct contact with bats (Pteropus), consumption of contaminated date palm sap, pigs (intermediate host), human-to-human'
        },
        pathomechanism: {
          steps: [
            'Oropharyngeal/respiratory entry',
            'Systemic viremia',
            'Endothelial cell infection (Ephrin-B2 receptor)',
            'Systemic vasculitis, thrombosis, and tissue ischemia',
            'Neuroinvasion and pulmonary inflammation'
          ],
          virulence_factors: ['Fusion (F) and Attachment (G) proteins', 'Interferon antagonists (P/V/W proteins)']
        },
        clinical: {
          incubation: '4–14 days (up to 45 days recorded)',
          onset: 'Acute',
          symptoms: [
            { name: 'Fever', description: 'High-grade fever', severity: 'severe' },
            { name: 'Headache', description: 'Severe headache', severity: 'severe' },
            { name: 'Respiratory distress', description: 'Cough, dyspnea, atypical pneumonia (ARDS risk)', severity: 'moderate' },
            { name: 'Encephalopathy', description: 'Dizziness, altered consciousness, rapid progression to coma (24–48h)', severity: 'severe' }
          ],
          physical_exam: ['Hyperpyrexia', 'Nuchal rigidity', 'Altered mental status (GCS)', 'Segmental myoclonus', 'Hyporeflexia'],
          complications: ['Fulminant encephalitis', 'ARDS', 'Relapsed/Late-onset encephalitis', 'Death']
        },
        diagnostics: {
          laboratory: [{ test: 'CBC', finding: 'Thrombocytopenia, leukopenia', interpretation: '-' }],
          imaging: [{ modality: 'Brain MRI', finding: 'Small, confluent T2-hyperintense lesions', significance: 'Vascular encephalitis' }],
          microbiology: [
            { test: 'RT-PCR', finding: 'NiV RNA (throat swab, blood, urine, CSF)', significance: 'Diagnostic during acute phase' },
            { test: 'Serology (ELISA)', finding: 'IgM/IgG seroconversion', significance: 'Confirmatory' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'N/A', dose: '-', duration: '-', note: 'Medical emergency; requires immediate isolation and ICU care' }]
          },
          targeted: 'No approved antiviral. Monoclonal antibody (m102.4) and Ribavirin (limited evidence).',
          supportive: ['Mechanical ventilation', 'Seizure management', 'Correction of electrolyte imbalances'],
          prevention: ['Avoid Pteropus bat habitats', 'Boil raw date palm sap', 'Culling of infected livestock', 'Standard, contact, and droplet precautions']
        },
        prognosis: { mortality: 'High (40–75%)', prognostic_scores: [], factors: 'Neurological involvement, ARDS, level of supportive care' }
      }
    ]
  }
});