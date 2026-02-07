Object.assign(window.diseases, {
  tropical: {
    name: 'Tropenkrankheiten',
    icon: '🌴',
    color: '#f97316',
    diseases: [
      {
        id: 'dengue',
        name: 'Dengue-Fieber',
        pathogen: { type: 'Virus', name: '<i>Dengue-Virus</i> (DENV 1-4)', gram: 'RNA, Flaviviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Weltweit 390 Millionen Infektionen/Jahr',
          risk_groups: ['Tropenreisende', 'Bewohner endemischer Gebiete'],
          seasonality: 'Regenzeit',
          transmission: 'Stich durch Aedes aegypti/albopictus-Mücken'
        },
        pathomechanism: {
          steps: [
            'Nach dem Stich einer infizierten Mücke infiziert das Virus dendritische Zellen und Monozyten in der Haut und wandert dann in die Lymphknoten.',
            'Das Virus vermehrt sich und gelangt in den Blutkreislauf (Virämie), was hohes Fieber und systemische Symptome verursacht.',
            'Bei einer Sekundärinfektion, wenn der Patient bereits Kontakt mit einem anderen Serotyp hatte, tritt das Phänomen der antikörperabhängigen Verstärkung (ADE) auf: Nicht-neutralisierende Antikörper erleichtern den Eintritt des Virus in die Zellen, was zu einer verstärkten Replikation führt.',
            'Dies löst einen schweren Zytokinsturm und eine erhöhte Gefäßpermeabilität (Kapillarleck) aus, was zu Plasmaverlust, Hämokonzentration und Schock führen kann.'
          ],
          virulence_factors: ['NS1-Protein', 'ADE (Antibody-Dependent Enhancement)']
        },
        clinical: {
          incubation: '4-10 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Fieberphase', description: 'Plötzlich einsetzendes hohes Fieber (40°C), begleitet von starken Kopfschmerzen und retrobulbären Schmerzen.', severity: 'severe' },
            { name: '"Knochenbrecherfieber"', description: 'Extrem starke Muskel- und Gelenkschmerzen (Myalgie, Arthralgie), die Bewegung fast unmöglich machen.', severity: 'severe' },
            { name: 'Kritische Phase', description: 'Kann beim Abklingen des Fiebers (Tag 3-7) auftreten. Warnzeichen: starke Bauchschmerzen, anhaltendes Erbrechen, Flüssigkeitsansammlung (Aszites, Pleuraerguss), Schleimhautblutungen, Lethargie oder Unruhe.', severity: 'severe' },
            { name: 'Ausschlag', description: 'Makulopapulöser Ausschlag, der nach dem Fieber auftritt, oft mit dem Muster "weiße Inseln im roten Meer".', severity: 'moderate' }
          ],
          physical_exam: [
            'Fieber',
            'Gesichtsrötung',
            'Positiver Tourniquet-Test (Kapillarfragilität)',
            'Hepatomegalie',
            'Hämorrhagische Zeichen (Petechien, Ekchymosen)',
            'Schockzeichen (kalte Extremitäten, schwacher Puls) in der kritischen Phase'
          ],
          complications: ['Dengue-hämorrhagisches Fieber (DHF)', 'Dengue-Schock-Syndrom (DSS)', 'Schwere Organschäden (Leber, Niere, Herz)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blutbild', finding: 'Leukopenie, Thrombozytopenie', interpretation: 'Charakteristisch' },
            { test: 'Hämatokrit', finding: 'Erhöht', interpretation: 'Hämokonzentration (Leckage)' }
          ],
          microbiology: [
            { test: 'NS1-Antigen', finding: 'Positiv', significance: 'Frühphase (1-5 Tage)' },
            { test: 'PCR', finding: 'RNA', significance: 'Frühphase' },
            { test: 'IgM/IgG', finding: 'Positiv', significance: 'Spätphase (>5 Tage)' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Flüssigkeit, Fiebersenkung (Paracetamol). NSAIDs kontraindiziert (Blutungsgefahr)!' }]
          },
          targeted: 'Kein spezifisches antivirales Mittel.',
          supportive: ['Flüssigkeitssubstitution (kritisch!)', 'Blutprodukte (bei schwerer Blutung)'],
          prevention: ['Mückenschutz', 'Impfstoff (Qdenga)']
        },
        prognosis: { mortality: 'Mit adäquater Behandlung <1%, schwere Fälle 2-5%', prognostic_scores: [], factors: 'Vorherige Infektion (ADE), Alter, Komorbidität' }
      },
      {
        id: 'zika',
        name: 'Zika-Virus-Infektion',
        pathogen: { type: 'Virus', name: '<i>Zika-Virus</i> (ZIKV)', gram: 'RNA, Flaviviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Epidemisch',
          risk_groups: ['Schwangere (Risiko fötaler Schädigungen)', 'Reisende'],
          seasonality: 'Mückensaison',
          transmission: 'Aedes-Mücke, sexuell, vertikal'
        },
        pathomechanism: {
          steps: [
            'Das Virus gelangt durch Mückenstich, auf sexuellem Weg oder vertikal in den Körper. Hautzellen (Keratinozyten, dendritische Zellen) werden zuerst infiziert.',
            'Das Virus breitet sich in Lymphknoten und Blutkreislauf aus (Virämie). Es kann die Blut-Hirn-Schranke und die Plazentaschranke überwinden.',
            'Es besitzt einen starken Neurotropismus: Während der fötalen Entwicklung infiziert und zerstört es gezielt neurale Vorläuferzellen, was zu Hirnfehlbildungen (Mikrozephalie) führt.',
            'Bei Erwachsenen kann es über einen Autoimmunmechanismus das Guillain-Barré-Syndrom auslösen.'
          ],
          virulence_factors: ['Neurotropismus', 'Plazentagängigkeit']
        },
        clinical: {
          incubation: '3-14 Tage',
          onset: 'Mild',
          symptoms: [
            { name: 'Asymptomatisch', description: 'Etwa 80% der Infizierten zeigen keine Symptome.', severity: 'mild' },
            { name: 'Ausschlag und Juckreiz', description: 'Häufigstes Symptom ist ein makulopapulöser Ausschlag, oft juckend, der sich vom Gesicht auf den Rumpf ausbreitet.', severity: 'moderate' },
            { name: 'Fieber und Schmerzen', description: 'Leichtes Fieber, Gelenkschmerzen (v.a. kleine Gelenke an Händen/Füßen), Muskelschmerzen und Kopfschmerzen.', severity: 'mild' },
            { name: 'Konjunktivitis', description: 'Nicht-eitrige Bindehautentzündung (rote Augen).', severity: 'moderate' }
          ],
          physical_exam: [
            'Diffuser makulopapulöser Ausschlag',
            'Nicht-eitrige Konjunktivitis',
            'Gelenkschwellung (Hände/Füße)',
            'Leichtes Fieber'
          ],
          complications: ['Guillain-Barré-Syndrom (Erwachsene)', 'Kongenitales Zika-Syndrom (fötale Mikrozephalie, Hirnverkalkungen, Seh-/Hörverlust)']
        },
        diagnostics: {
          laboratory: [{ test: 'Blutbild', finding: 'Leichte Leukopenie/Thrombozytopenie', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'RNA (Blut, Urin)', significance: 'Diagnostisch (im Urin länger ausgeschieden)' },
            { test: 'IgM', finding: 'Positiv', significance: 'Kreuzreaktion mit Dengue möglich!' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Ruhe, Flüssigkeit' }]
          },
          targeted: 'Keine.',
          supportive: ['Symptomatische Behandlung'],
          prevention: ['Mückenschutz', 'Safer Sex (Virus kann monatelang im Sperma persistieren)', 'Schwangere sollten endemische Gebiete meiden']
        },
        prognosis: { mortality: 'Sehr niedrig, fötales Risiko signifikant', prognostic_scores: [], factors: 'Schwangerschaft, Alter' }
      },
      {
        id: 'chikungunya',
        name: 'Chikungunya-Fieber',
        pathogen: { type: 'Virus', name: '<i>Chikungunya-Virus</i> (CHIKV)', gram: 'RNA, Togaviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Epidemisch',
          risk_groups: ['Reisende'],
          seasonality: 'Mückensaison',
          transmission: 'Aedes-Mücke'
        },
        pathomechanism: {
          steps: [
            'Nach dem Mückenstich repliziert das Virus in der Haut und gelangt dann in den Blutkreislauf.',
            'Es infiziert Gewebe weitläufig, zeigt aber einen besonderen Tropismus für Gelenkkapseln, Muskeln und Hautfibroblasten.',
            'Es löst eine intensive Entzündungsreaktion in den Gelenken aus (Infiltration von Monozyten, Makrophagen), was eine akute Arthritis verursacht.',
            'Das Virus oder Antigene können monatelang im Gelenkwebe persistieren und chronische, rheumatoide Arthritis-ähnliche Beschwerden aufrechterhalten.'
          ],
          virulence_factors: ['Gelenktropismus']
        },
        clinical: {
          incubation: '3-7 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Akute Phase', description: 'Plötzlich einsetzendes hohes Fieber (>39°C) und quälende, schwere Gelenkschmerzen (Polyarthralgie), die oft zur Bewegungsunfähigkeit führen. Die Gelenkschmerzen sind meist symmetrisch und betreffen die distalen Gelenke.', severity: 'severe' },
            { name: 'Ausschlag', description: 'Makulopapulöser Ausschlag an Rumpf und Gliedmaßen (ca. 50%).', severity: 'moderate' },
            { name: 'Chronische Phase', description: 'Bei einem signifikanten Teil der Patienten (30-60%) können Gelenkschmerzen und Steifheit über Monate oder Jahre wiederkehren oder anhalten und die Lebensqualität erheblich beeinträchtigen.', severity: 'moderate' }
          ],
          physical_exam: [
            'Hohes Fieber',
            'Symmetrische Gelenkschwellung und Druckschmerz (Hände, Handgelenke, Knöchel)',
            'Tenosynovitis',
            'Makulopapulöser Ausschlag'
          ],
          complications: ['Chronische, invalidisierende Arthritis', 'Selten: Myokarditis, Enzephalitis, Hepatitis']
        },
        diagnostics: {
          laboratory: [{ test: 'Blutbild', finding: 'Lymphopenie', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'RNA', significance: 'Akute Phase (<1 Woche)' },
            { test: 'IgM/IgG', finding: 'Positiv', significance: 'Später' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'NSAIDs können verwendet werden (sobald Dengue ausgeschlossen ist)' }]
          },
          targeted: 'Keine.',
          supportive: ['Schmerzlinderung (NSAID, Steroide in chronischen Fällen)', 'Physiotherapie'],
          prevention: ['Mückenschutz', 'Impfstoff (Ixchiq - FDA zugelassen)']
        },
        prognosis: { mortality: 'Sehr niedrig, aber Morbidität (chronische Schmerzen) hoch', prognostic_scores: [], factors: 'Alter, chronische Gelenkprobleme' }
      }
    ]
  }
});