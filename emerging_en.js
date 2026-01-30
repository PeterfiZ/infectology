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
        pathogen: { type: 'Virus', name: 'Mpox virus (MPXV)', gram: 'dsDNA, Poxviridae', shape: 'brick-shaped' },
        epidemiology: {
          incidence: 'Global outbreak (2022-), endemic in Africa',
          risk_groups: ['MSM population', 'Healthcare workers', 'Household contacts'],
          seasonality: 'None',
          transmission: 'Close skin-to-skin contact, respiratory droplets, fomites, zoonosis (rodents)'
        },
        pathomechanism: {
          steps: [
            'Entry through broken skin/mucosa',
            'Replication at entry site and regional lymph nodes',
            'Viremia',
            'Development of skin and mucosal lesions'
          ],
          virulence_factors: ['Immunomodulatory proteins']
        },
        clinical: {
          incubation: '5-21 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Rash', description: 'Macule → Papule → Vesicle → Pustule → Scab (painful!)', severity: 'moderate' },
            { name: 'Lymphadenopathy', description: 'Characteristic (distinguishes from smallpox/chickenpox)', severity: 'moderate' },
            { name: 'Fever', description: 'Prodromal symptom', severity: 'mild' },
            { name: 'Proctitis', description: 'Rectal pain (in sexual transmission)', severity: 'severe' }
          ],
          physical_exam: [
            'Centrifugal distribution of rash (palms/soles too)',
            'Swollen, painful lymph nodes',
            'Genital/perianal lesions'
          ],
          complications: ['Bacterial superinfection', 'Pneumonia', 'Sepsis', 'Encephalitis', 'Corneal scarring (blindness)']
        },
        diagnostics: {
          laboratory: [{ test: 'CBC', finding: 'Non-specific', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'MPXV DNA', significance: 'Gold standard (sample from base/roof of lesion)' },
            { test: 'Electron microscopy', finding: 'Poxvirus morphology', significance: 'Rarely available' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportive', dose: '-', duration: '-', note: 'Pain relief, wound care, isolation' }]
          },
          targeted: 'In severe cases: Tecovirimat (antiviral).',
          supportive: ['Pain relief', 'Fluid replacement'],
          prevention: ['Vaccination (JYNNEOS - 3rd generation smallpox vaccine)', 'Isolation', 'Contact tracing']
        },
        prognosis: { mortality: 'Clade II (global): <0.1%; Clade I (Africa): up to 10%', prognostic_scores: [], factors: 'Clade type, timing of treatment' }
      },
      {
        id: 'nipah',
        name: 'Nipah Virus',
        pathogen: { type: 'Virus', name: 'Nipah virus (NiV)', gram: 'RNA, Paramyxoviridae (Henipavirus)', shape: 'pleomorphic' },
        epidemiology: {
          incidence: 'Sporadic outbreaks (South Asia, Southeast Asia)',
          risk_groups: ['Pig farmers', 'Date palm sap collectors/consumers'],
          seasonality: 'Winter-spring (Bangladesh)',
          transmission: 'Bat (flying fox) urine/saliva (date palm sap), pigs, person-to-person'
        },
        pathomechanism: {
          steps: [
            'Entry (oral/respiratory)',
            'Viremia',
            'Infection of endothelial cells (Ephrin-B2 receptor)',
            'Vasculitis, thrombosis, ischemia',
            'CNS and lung involvement'
          ],
          virulence_factors: ['Fusion proteins', 'Immune antagonists']
        },
        clinical: {
          incubation: '4-14 days',
          onset: 'Sudden',
          symptoms: [
            { name: 'Fever', description: 'High', severity: 'severe' },
            { name: 'Headache', description: 'Severe', severity: 'severe' },
            { name: 'Respiratory symptoms', description: 'Cough, atypical pneumonia', severity: 'moderate' },
            { name: 'Encephalitis', description: 'Dizziness, altered mental status, coma (within 24-48 hours)', severity: 'severe' }
          ],
          physical_exam: ['Fever', 'Nuchal rigidity', 'Altered mental status', 'Myoclonus', 'Areflexia/Hyporeflexia'],
          complications: ['Severe encephalitis', 'ARDS', 'Relapse (months/years later)', 'Death']
        },
        diagnostics: {
          laboratory: [{ test: 'CBC', finding: 'Thrombocytopenia, leukopenia', interpretation: '-' }],
          imaging: [{ modality: 'Brain MRI', finding: 'Multiple small infarcts, hyperintensity', significance: 'Encephalitis' }],
          microbiology: [
            { test: 'RT-PCR', finding: 'RNA (throat, urine, CSF)', significance: 'Acute phase' },
            { test: 'ELISA (IgM/IgG)', finding: 'Positive', significance: 'Later' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'None', dose: '-', duration: '-', note: 'Immediate hospital/ICU admission' }]
          },
          targeted: 'No proven antiviral. Monoclonal antibody (m102.4) in experimental phase.',
          supportive: ['Intensive care', 'Ventilation', 'Seizure control'],
          prevention: ['Avoid contact with bats', 'Avoid raw date palm sap', 'Isolation/culling of sick pigs', 'Hospital infection control']
        },
        prognosis: { mortality: 'High (40-75%)', prognostic_scores: [], factors: 'Development of encephalitis, availability of treatment' }
      }
    ]
  }
});
