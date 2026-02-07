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
        pathogen: { type: 'Virus', name: '<i>Mpox virus</i> (MPXV)', genome: 'dsDNA, Poxviridae', shape: 'brick-shaped' },
        epidemiology: {
          incidence: 'Global outbreak (2022–), endemic in Central and West Africa',
          risk_groups: ['MSM (Men who have sex with men)', 'Healthcare workers', 'Household contacts'],
          seasonality: 'None',
          transmission: 'Close skin-to-skin contact, respiratory droplets, fomites, zoonotic (rodents)'
        },
        pathomechanism: { 
          steps: [
            'Entry: Virus enters through broken skin, mucous membranes, or respiratory tract.',
            'Replication: Initial replication occurs at the inoculation site and in regional lymph nodes.',
            'Viremia: The virus spreads via the bloodstream to the skin and internal organs.',
            'Lesion formation: Viral replication in the skin causes inflammation, necrosis, and characteristic pox-like lesions (macule-papule-vesicle-pustule-scab).'
          ],
          virulence_factors: ['Immunomodulatory proteins (host immune evasion)']
        },
        clinical: {
          incubation: '5–21 days',
          onset: 'Acute', // MORE ACCURATE: Acute is preferred over Sudden
          symptoms: [
            { name: 'Prodrome', description: 'Fever, intense headache, lymphadenopathy, back pain, myalgia, and intense asthenia.', severity: 'mild' },
            { name: 'Lymphadenopathy', description: 'Distinctive feature (cervical, inguinal), distinguishing it from smallpox and chickenpox.', severity: 'moderate' },
            { name: 'Rash', description: 'Appears 1-3 days after fever. Starts on face, spreads centrifugally (palms/soles involved). Stages: Macule → Papule → Vesicle → Pustule (umbilicated) → Scab. Lesions are often painful, then itchy.', severity: 'moderate' },
            { name: 'Mucosal symptoms', description: 'Oral, genital, and perianal lesions. Proctitis (rectal pain) is common in sexual transmission.', severity: 'severe' }
          ],
          physical_exam: [
            'Centrifugal distribution of rash (including palms and soles)',
            'Tender lymphadenopathy',
            'Anogenital lesions',
            'Fever'
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
        pathogen: { type: 'Virus', name: '<i>Nipah virus</i> (NiV)', genome: 'ssRNA (-), Paramyxoviridae', shape: 'pleomorphic' },
        epidemiology: {
          incidence: 'Sporadic outbreaks (South and Southeast Asia)',
          risk_groups: ['Pig farmers', 'Date palm sap collectors/consumers', 'Close contacts of cases'],
          seasonality: 'December–May (Bangladesh)',
          transmission: 'Direct contact with bats (Pteropus), consumption of contaminated date palm sap, pigs (intermediate host), human-to-human'
        },
        pathomechanism: {
          steps: [
            'Entry: Ingestion of contaminated food (e.g., date palm sap) or direct contact with infected animals (pigs, bats).',
            'Dissemination: The virus enters the bloodstream (viremia), either free or bound to leukocytes.',
            'Vasculitis: It infects endothelial cells (via Ephrin-B2 receptor), causing systemic vasculitis, thrombosis, and tissue ischemia.',
            'Tropism: High affinity for the CNS (crossing the blood-brain barrier) and lungs, causing severe inflammation and necrosis.'
          ],
          virulence_factors: ['Fusion (F) and Attachment (G) proteins', 'Interferon antagonists (P/V/W proteins)']
        },
        clinical: {
          incubation: '4–14 days (up to 45 days recorded)',
          onset: 'Acute',
          symptoms: [
            { name: 'Prodrome', description: 'Fever, headache, myalgia, sore throat, and vomiting.', severity: 'moderate' },
            { name: 'Respiratory symptoms', description: 'Cough, dyspnea, progressing to atypical pneumonia and acute respiratory distress syndrome (ARDS).', severity: 'severe' },
            { name: 'Encephalitis', description: 'Dizziness, altered consciousness, rapidly progressing to coma (within 24–48h). Brainstem signs (areflexia, hypotonia) are common.', severity: 'severe' }
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
