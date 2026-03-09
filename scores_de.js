window.scoreCalculators = {
    'CURB-65': {
      title: 'CURB-65 Score (Pneumonie)',
      description: 'Zur Beurteilung des Schweregrads einer ambulant erworbenen Pneumonie und der Notwendigkeit einer Krankenhausaufnahme.',
      items: [
        { id: 'c', label: 'Confusion (Verwirrtheit)', points: 1 },
        { id: 'u', label: 'Urea > 7 mmol/l (Harnstoff)', points: 1 },
        { id: 'r', label: 'Respiratory rate ≥ 30/min (Atemfrequenz)', points: 1 },
        { id: 'b', label: 'Blood pressure (Systolisch < 90 oder Diastolisch ≤ 60 mmHg)', points: 1 },
        { id: '65', label: 'Alter ≥ 65 Jahre', points: 1 }
      ],
      interpret: (score) => {
        if (score <= 1) return { risk: 'Niedriges Risiko (0-1)', action: 'Ambulante Behandlung erwägen', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score === 2) return { risk: 'Mittleres Risiko (2)', action: 'Krankenhausaufnahme empfohlen', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'Hohes Risiko (3-5)', action: 'Dringende Krankenhaus-/Intensivaufnahme', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'qSOFA': {
      title: 'qSOFA Score (Sepsis)',
      description: 'Schnelles Bedside-Tool zur Identifizierung von Patienten mit Sepsis-Verdacht (quick SOFA).',
      items: [
        { id: 'rr', label: 'Atemfrequenz ≥ 22/min', points: 1 },
        { id: 'ams', label: 'Veränderter Mentalstatus (GCS < 15)', points: 1 },
        { id: 'sbp', label: 'Systolischer Blutdruck ≤ 100 mmHg', points: 1 }
      ],
      interpret: (score) => {
        if (score < 2) return { risk: 'Niedrige Wahrscheinlichkeit (<2)', action: 'Überwachung, klinische Beurteilung', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        return { risk: 'Hohes Risiko (≥2)', action: 'Verdacht auf Sepsis, weitere Untersuchung (SOFA)', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'ATLAS': {
      title: 'ATLAS Score (C. difficile)',
      description: 'Abschätzung des Schweregrads und des Mortalitätsrisikos bei Clostridioides-difficile-Infektion.',
      items: [
        { type: 'header', label: 'Alter' },
        { type: 'radio', name: 'atlas_age', label: '< 60 Jahre', points: 0, checked: true },
        { type: 'radio', name: 'atlas_age', label: '60 - 79 Jahre', points: 1 },
        { type: 'radio', name: 'atlas_age', label: '≥ 80 Jahre', points: 2 },
        { type: 'header', label: 'Klinik und Labor' },
        { type: 'checkbox', label: 'Systemische Antibiotikatherapie während der CDI-Therapie', points: 1 },
        { type: 'header', label: 'Leukozytenzahl (G/L)' },
        { type: 'radio', name: 'atlas_wbc', label: '< 16', points: 0, checked: true },
        { type: 'radio', name: 'atlas_wbc', label: '16 - 25', points: 1 },
        { type: 'radio', name: 'atlas_wbc', label: '> 25', points: 2 },
        { type: 'header', label: 'Albumin (g/L)' },
        { type: 'radio', name: 'atlas_alb', label: '> 35', points: 0, checked: true },
        { type: 'radio', name: 'atlas_alb', label: '26 - 35', points: 1 },
        { type: 'radio', name: 'atlas_alb', label: '≤ 25', points: 2 },
        { type: 'header', label: 'Kreatinin (µmol/L)' },
        { type: 'radio', name: 'atlas_crea', label: '≤ 120', points: 0, checked: true },
        { type: 'radio', name: 'atlas_crea', label: '121 - 179', points: 1 },
        { type: 'radio', name: 'atlas_crea', label: '≥ 180', points: 2 }
      ],
      interpret: (score) => {
        if (score <= 2) return { risk: 'Mild (0-2 Punkte)', action: '0% Mortalität, >95% Heilung', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 5) return { risk: 'Mittelschwer (3-5 Punkte)', action: 'Mortalität steigt', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'Schwer (6-7 Punkte)', action: 'Hohe Mortalität, Intensivtherapie erwägen', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'SOFA': {
      title: 'SOFA Score (Sepsis)',
      description: 'Beurteilung des Ausmaßes des Organversagens (Sequential Organ Failure Assessment).',
      items: [
        { type: 'header', label: 'Atmung (PaO2/FiO2 mmHg)' },
        { type: 'radio', name: 'sofa_resp', label: '≥ 400', points: 0, checked: true },
        { type: 'radio', name: 'sofa_resp', label: '< 400', points: 1 },
        { type: 'radio', name: 'sofa_resp', label: '< 300', points: 2 },
        { type: 'radio', name: 'sofa_resp', label: '< 200 (beatmet)', points: 3 },
        { type: 'radio', name: 'sofa_resp', label: '< 100 (beatmet)', points: 4 },
        { type: 'header', label: 'Gerinnung (Thrombozyten G/L)' },
        { type: 'radio', name: 'sofa_plt', label: '≥ 150', points: 0, checked: true },
        { type: 'radio', name: 'sofa_plt', label: '< 150', points: 1 },
        { type: 'radio', name: 'sofa_plt', label: '< 100', points: 2 },
        { type: 'radio', name: 'sofa_plt', label: '< 50', points: 3 },
        { type: 'radio', name: 'sofa_plt', label: '< 20', points: 4 },
        { type: 'header', label: 'Leber (Bilirubin µmol/L)' },
        { type: 'radio', name: 'sofa_bili', label: '< 20', points: 0, checked: true },
        { type: 'radio', name: 'sofa_bili', label: '20 - 32', points: 1 },
        { type: 'radio', name: 'sofa_bili', label: '33 - 101', points: 2 },
        { type: 'radio', name: 'sofa_bili', label: '102 - 204', points: 3 },
        { type: 'radio', name: 'sofa_bili', label: '> 204', points: 4 },
        { type: 'header', label: 'Kreislauf (MAP / Vasopressoren)' },
        { type: 'radio', name: 'sofa_cv', label: 'MAP ≥ 70 mmHg', points: 0, checked: true },
        { type: 'radio', name: 'sofa_cv', label: 'MAP < 70 mmHg', points: 1 },
        { type: 'radio', name: 'sofa_cv', label: 'Dopamin ≤ 5 oder Dobutamin', points: 2 },
        { type: 'radio', name: 'sofa_cv', label: 'Dopamin > 5 oder Noradrenalin ≤ 0.1', points: 3 },
        { type: 'radio', name: 'sofa_cv', label: 'Dopamin > 15 oder Noradrenalin > 0.1', points: 4 },
        { type: 'header', label: 'Zentralnervensystem (GCS)' },
        { type: 'radio', name: 'sofa_gcs', label: '15', points: 0, checked: true },
        { type: 'radio', name: 'sofa_gcs', label: '13 - 14', points: 1 },
        { type: 'radio', name: 'sofa_gcs', label: '10 - 12', points: 2 },
        { type: 'radio', name: 'sofa_gcs', label: '6 - 9', points: 3 },
        { type: 'radio', name: 'sofa_gcs', label: '< 6', points: 4 },
        { type: 'header', label: 'Niere (Kreatinin µmol/L)' },
        { type: 'radio', name: 'sofa_ren', label: '< 110', points: 0, checked: true },
        { type: 'radio', name: 'sofa_ren', label: '110 - 170', points: 1 },
        { type: 'radio', name: 'sofa_ren', label: '171 - 299', points: 2 },
        { type: 'radio', name: 'sofa_ren', label: '300 - 440 (oder <500ml Urin)', points: 3 },
        { type: 'radio', name: 'sofa_ren', label: '> 440 (oder <200ml Urin)', points: 4 }
      ],
      interpret: (score) => {
        return { risk: `Gesamtpunktzahl: ${score}`, action: 'Zunahme der Punktzahl zeigt schlechtere Prognose an. Sepsis-Definition: Infektion + SOFA-Änderung ≥2.', color: 'text-slate-800', bg: 'bg-slate-50', border: 'border-slate-200' };
      }
    },
    'PORT': {
      title: 'Pneumonia Severity Index (PSI/PORT)',
      description: 'Risikostratifizierung bei ambulant erworbener Pneumonie (CAP).',
      items: [
        { type: 'header', label: 'Demografie' },
        { type: 'number', label: 'Alter (Jahre)', points: 1, min: 0, max: 120 },
        { type: 'checkbox', label: 'Weiblich', points: -10 },
        { type: 'checkbox', label: 'Pflegeheimbewohner', points: 10 },
        { type: 'header', label: 'Komorbiditäten' },
        { type: 'checkbox', label: 'Tumorerkrankung', points: 30 },
        { type: 'checkbox', label: 'Lebererkrankung', points: 20 },
        { type: 'checkbox', label: 'Herzinsuffizienz (CHF)', points: 10 },
        { type: 'checkbox', label: 'Zerebrovaskuläre Erkrankung', points: 10 },
        { type: 'checkbox', label: 'Nierenerkrankung', points: 10 },
        { type: 'header', label: 'Körperliche Untersuchung' },
        { type: 'checkbox', label: 'Veränderter Mentalstatus', points: 20 },
        { type: 'checkbox', label: 'Atemfrequenz ≥ 30/min', points: 20 },
        { type: 'checkbox', label: 'Systolischer RR < 90 mmHg', points: 20 },
        { type: 'checkbox', label: 'Temperatur < 35°C oder > 40°C', points: 15 },
        { type: 'checkbox', label: 'Puls ≥ 125/min', points: 10 },
        { type: 'header', label: 'Labor und Bildgebung' },
        { type: 'checkbox', label: 'Arterieller pH < 7.35', points: 30 },
        { type: 'checkbox', label: 'BUN > 10.7 mmol/L (Harnstoff > 30 mg/dL)', points: 20 },
        { type: 'checkbox', label: 'Natrium < 130 mmol/L', points: 20 },
        { type: 'checkbox', label: 'Glukose > 13.9 mmol/L', points: 10 },
        { type: 'checkbox', label: 'Hämatokrit < 30%', points: 10 },
        { type: 'checkbox', label: 'PaO2 < 60 mmHg (oder SpO2 < 90%)', points: 10 },
        { type: 'checkbox', label: 'Pleuraerguss', points: 10 }
      ],
      interpret: (score) => {
        if (score <= 50) return { risk: 'Klasse I (≤50)', action: 'Niedriges Risiko (0.1% Mortalität). Ambulante Behandlung.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 70) return { risk: 'Klasse II (51-70)', action: 'Niedriges Risiko (0.6% Mortalität). Ambulante Behandlung.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 90) return { risk: 'Klasse III (71-90)', action: 'Mittleres Risiko (0.9-2.8%). Kurze stationäre Beobachtung oder ambulant.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        if (score <= 130) return { risk: 'Klasse IV (91-130)', action: 'Hohes Risiko (8-9%). Stationäre Aufnahme.', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
        return { risk: 'Klasse V (>130)', action: 'Sehr hohes Risiko (27-30%). Intensivstation.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'APACHE II': {
      title: 'APACHE II Score',
      description: 'Schweregrad-Klassifikationssystem für Intensivpatienten (Acute Physiology and Chronic Health Evaluation II).',
      items: [
        { type: 'header', label: 'Alter' },
        { type: 'radio', name: 'ap_age', label: '≤ 44', points: 0, checked: true },
        { type: 'radio', name: 'ap_age', label: '45 - 54', points: 2 },
        { type: 'radio', name: 'ap_age', label: '55 - 64', points: 3 },
        { type: 'radio', name: 'ap_age', label: '65 - 74', points: 5 },
        { type: 'radio', name: 'ap_age', label: '≥ 75', points: 6 },
        { type: 'header', label: 'Chronischer Gesundheitszustand' },
        { type: 'checkbox', label: 'Schwere Organinsuffizienz (Leber, Herz, Lunge, Niere) oder Immunsuppression', points: 5 },
        { type: 'checkbox', label: 'Nach Notfall-OP oder nicht-operativer Patient', points: 0 }, 
        { type: 'header', label: 'Akute physiologische Parameter (Schlechtester Wert in den ersten 24h)' },
        { type: 'header', label: 'Temperatur (°C)' },
        { type: 'radio', name: 'ap_temp', label: '36 - 38.4', points: 0, checked: true },
        { type: 'radio', name: 'ap_temp', label: '34 - 35.9 oder 38.5 - 38.9', points: 1 },
        { type: 'radio', name: 'ap_temp', label: '32 - 33.9', points: 2 },
        { type: 'radio', name: 'ap_temp', label: '30 - 31.9 oder 39 - 40.9', points: 3 },
        { type: 'radio', name: 'ap_temp', label: '≤ 29.9 oder ≥ 41', points: 4 },
        { type: 'header', label: 'MAP (Mittlerer arterieller Druck mmHg)' },
        { type: 'radio', name: 'ap_map', label: '70 - 109', points: 0, checked: true },
        { type: 'radio', name: 'ap_map', label: '110 - 129 oder 50 - 69', points: 2 },
        { type: 'radio', name: 'ap_map', label: '130 - 159', points: 3 },
        { type: 'radio', name: 'ap_map', label: '≥ 160 oder ≤ 49', points: 4 },
        { type: 'header', label: 'Herzfrequenz (/min)' },
        { type: 'radio', name: 'ap_hr', label: '70 - 109', points: 0, checked: true },
        { type: 'radio', name: 'ap_hr', label: '55 - 69 oder 110 - 139', points: 2 },
        { type: 'radio', name: 'ap_hr', label: '40 - 54 oder 140 - 179', points: 3 },
        { type: 'radio', name: 'ap_hr', label: '≤ 39 oder ≥ 180', points: 4 },
        { type: 'header', label: 'Atemfrequenz (/min)' },
        { type: 'radio', name: 'ap_rr', label: '12 - 24', points: 0, checked: true },
        { type: 'radio', name: 'ap_rr', label: '10 - 11 oder 25 - 34', points: 1 },
        { type: 'radio', name: 'ap_rr', label: '6 - 9', points: 2 },
        { type: 'radio', name: 'ap_rr', label: '35 - 49', points: 3 },
        { type: 'radio', name: 'ap_rr', label: '≤ 5 oder ≥ 50', points: 4 },
        { type: 'header', label: 'Oxygenierung (AaDO2 oder PaO2)' },
        { type: 'radio', name: 'ap_ox', label: 'Normal', points: 0, checked: true },
        { type: 'radio', name: 'ap_ox', label: 'Leichte Beeinträchtigung', points: 1 },
        { type: 'radio', name: 'ap_ox', label: 'Mäßige Beeinträchtigung', points: 3 },
        { type: 'radio', name: 'ap_ox', label: 'Schwere Beeinträchtigung', points: 4 },
        { type: 'header', label: 'Arterieller pH' },
        { type: 'radio', name: 'ap_ph', label: '7.33 - 7.49', points: 0, checked: true },
        { type: 'radio', name: 'ap_ph', label: 'Abweichend', points: 2 },
        { type: 'radio', name: 'ap_ph', label: 'Signifikant abweichend (<7.15 oder >7.7)', points: 4 },
        { type: 'header', label: 'Serum-Natrium (mmol/L)' },
        { type: 'radio', name: 'ap_na', label: '130 - 149', points: 0, checked: true },
        { type: 'radio', name: 'ap_na', label: 'Abweichend', points: 1 },
        { type: 'radio', name: 'ap_na', label: 'Signifikant abweichend', points: 4 },
        { type: 'header', label: 'Serum-Kalium (mmol/L)' },
        { type: 'radio', name: 'ap_k', label: '3.5 - 5.4', points: 0, checked: true },
        { type: 'radio', name: 'ap_k', label: 'Abweichend', points: 1 },
        { type: 'radio', name: 'ap_k', label: 'Signifikant abweichend', points: 4 },
        { type: 'header', label: 'Serum-Kreatinin (mg/dL)' },
        { type: 'radio', name: 'ap_cr', label: '0.6 - 1.4', points: 0, checked: true },
        { type: 'radio', name: 'ap_cr', label: '< 0.6 oder 1.5 - 1.9', points: 2 },
        { type: 'radio', name: 'ap_cr', label: '2.0 - 3.4', points: 3 },
        { type: 'radio', name: 'ap_cr', label: '≥ 3.5', points: 4 },
        { type: 'checkbox', label: 'Akutes Nierenversagen (Kreatinin-Punkte verdoppeln)', points: 0 }, 
        { type: 'header', label: 'Hämatokrit (%)' },
        { type: 'radio', name: 'ap_hct', label: '30 - 45.9', points: 0, checked: true },
        { type: 'radio', name: 'ap_hct', label: 'Abweichend', points: 2 },
        { type: 'radio', name: 'ap_hct', label: 'Signifikant abweichend', points: 4 },
        { type: 'header', label: 'Leukozyten (G/L)' },
        { type: 'radio', name: 'ap_wbc', label: '3 - 14.9', points: 0, checked: true },
        { type: 'radio', name: 'ap_wbc', label: 'Abweichend', points: 2 },
        { type: 'radio', name: 'ap_wbc', label: 'Signifikant abweichend', points: 4 },
        { type: 'header', label: 'Glasgow Coma Scale (GCS)' },
        { type: 'number', label: 'GCS-Punkte (15 - GCS = Punkte)', points: -1, min: 3, max: 15, value: 15 } 
      ],
      interpret: (score) => {
        return { risk: `APACHE II Score: ${score + 15}`, action: 'Mortalität korreliert mit Punktzahl (z.B. 25 Punkte ~50% Sterblichkeit).', color: 'text-slate-800', bg: 'bg-slate-50', border: 'border-slate-200' };
      }
    },
    'NEWS2': {
      title: 'NEWS2 (National Early Warning Score)',
      description: 'Beurteilung des Schweregrads der Erkrankung und des Risikos einer klinischen Verschlechterung.',
      items: [
        { type: 'header', label: 'Atemfrequenz (/min)' },
        { type: 'radio', name: 'news_rr', label: '12-20', points: 0, checked: true },
        { type: 'radio', name: 'news_rr', label: '9-11', points: 1 },
        { type: 'radio', name: 'news_rr', label: '21-24', points: 2 },
        { type: 'radio', name: 'news_rr', label: '≤8 oder ≥25', points: 3 },
        { type: 'header', label: 'Sauerstoffsättigung (%)' },
        { type: 'radio', name: 'news_spo2', label: '≥96', points: 0, checked: true },
        { type: 'radio', name: 'news_spo2', label: '94-95', points: 1 },
        { type: 'radio', name: 'news_spo2', label: '92-93', points: 2 },
        { type: 'radio', name: 'news_spo2', label: '≤91', points: 3 },
        { type: 'header', label: 'Luft oder Sauerstoff' },
        { type: 'radio', name: 'news_o2', label: 'Luft', points: 0, checked: true },
        { type: 'radio', name: 'news_o2', label: 'Sauerstoff', points: 2 },
        { type: 'header', label: 'Systolischer Blutdruck (mmHg)' },
        { type: 'radio', name: 'news_sbp', label: '111-219', points: 0, checked: true },
        { type: 'radio', name: 'news_sbp', label: '101-110', points: 1 },
        { type: 'radio', name: 'news_sbp', label: '91-100', points: 2 },
        { type: 'radio', name: 'news_sbp', label: '≤90 oder ≥220', points: 3 },
        { type: 'header', label: 'Puls (/min)' },
        { type: 'radio', name: 'news_hr', label: '51-90', points: 0, checked: true },
        { type: 'radio', name: 'news_hr', label: '41-50 oder 91-110', points: 1 },
        { type: 'radio', name: 'news_hr', label: '111-130', points: 2 },
        { type: 'radio', name: 'news_hr', label: '≤40 oder ≥131', points: 3 },
        { type: 'header', label: 'Bewusstsein' },
        { type: 'radio', name: 'news_loc', label: 'Wach (Alert)', points: 0, checked: true },
        { type: 'radio', name: 'news_loc', label: 'Verwirrt (CVPU)', points: 3 },
        { type: 'header', label: 'Temperatur (°C)' },
        { type: 'radio', name: 'news_temp', label: '36.1-38.0', points: 0, checked: true },
        { type: 'radio', name: 'news_temp', label: '35.1-36.0 oder 38.1-39.0', points: 1 },
        { type: 'radio', name: 'news_temp', label: '≥39.1', points: 2 },
        { type: 'radio', name: 'news_temp', label: '≤35.0', points: 3 }
      ],
      interpret: (score) => {
        if (score === 0) return { risk: 'Niedrig (0)', action: 'Überwachung alle 12h', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 4) return { risk: 'Niedrig-Mittel (1-4)', action: 'Überwachung alle 4-6h', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
        if (score <= 6) return { risk: 'Mittel (5-6)', action: 'Dringende ärztliche Untersuchung, stündliche Überwachung', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
        return { risk: 'Hoch (≥7)', action: 'Notfall/ITS-Beurteilung, kontinuierliche Überwachung', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    '4C Mortality Score': {
      title: '4C Mortality Score (COVID-19)',
      description: 'Risiko der Krankenhaussterblichkeit bei COVID-19-Patienten.',
      items: [
        { type: 'header', label: 'Alter' },
        { type: 'radio', name: '4c_age', label: '<50', points: 0, checked: true },
        { type: 'radio', name: '4c_age', label: '50-59', points: 2 },
        { type: 'radio', name: '4c_age', label: '60-69', points: 4 },
        { type: 'radio', name: '4c_age', label: '70-79', points: 6 },
        { type: 'radio', name: '4c_age', label: '≥80', points: 7 },
        { type: 'header', label: 'Geschlecht' },
        { type: 'radio', name: '4c_sex', label: 'Weiblich', points: 0, checked: true },
        { type: 'radio', name: '4c_sex', label: 'Männlich', points: 1 },
        { type: 'header', label: 'Anzahl der Komorbiditäten' },
        { type: 'radio', name: '4c_comorb', label: '0', points: 0, checked: true },
        { type: 'radio', name: '4c_comorb', label: '1', points: 1 },
        { type: 'radio', name: '4c_comorb', label: '≥2', points: 2 },
        { type: 'header', label: 'Atemfrequenz (/min)' },
        { type: 'radio', name: '4c_rr', label: '<20', points: 0, checked: true },
        { type: 'radio', name: '4c_rr', label: '20-29', points: 1 },
        { type: 'radio', name: '4c_rr', label: '≥30', points: 2 },
        { type: 'header', label: 'SpO2 (Raumluft)' },
        { type: 'radio', name: '4c_spo2', label: '≥92%', points: 0, checked: true },
        { type: 'radio', name: '4c_spo2', label: '<92%', points: 2 },
        { type: 'header', label: 'GCS' },
        { type: 'radio', name: '4c_gcs', label: '15', points: 0, checked: true },
        { type: 'radio', name: '4c_gcs', label: '<15', points: 2 },
        { type: 'header', label: 'Harnstoff (mmol/L)' },
        { type: 'radio', name: '4c_urea', label: '≤7', points: 0, checked: true },
        { type: 'radio', name: '4c_urea', label: '7-14', points: 1 },
        { type: 'radio', name: '4c_urea', label: '>14', points: 3 },
        { type: 'header', label: 'CRP (mg/L)' },
        { type: 'radio', name: '4c_crp', label: '<50', points: 0, checked: true },
        { type: 'radio', name: '4c_crp', label: '50-99', points: 1 },
        { type: 'radio', name: '4c_crp', label: '≥100', points: 2 }
      ],
      interpret: (score) => {
        if (score <= 3) return { risk: 'Niedrig (0-3)', action: 'Mortalität: 1%', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 8) return { risk: 'Mittel (4-8)', action: 'Mortalität: 8%', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
        if (score <= 14) return { risk: 'Hoch (9-14)', action: 'Mortalität: 31%', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
        return { risk: 'Sehr hoch (≥15)', action: 'Mortalität: 62%', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'PAGE-B': {
      title: 'PAGE-B Score (HBV)',
      description: 'Risiko für hepatozelluläres Karzinom (HCC) bei chronischen Hepatitis-B-Patienten (unter NA-Therapie).',
      items: [
        { type: 'header', label: 'Alter' },
        { type: 'radio', name: 'pageb_age', label: '16-29', points: 0, checked: true },
        { type: 'radio', name: 'pageb_age', label: '30-39', points: 2 },
        { type: 'radio', name: 'pageb_age', label: '40-49', points: 4 },
        { type: 'radio', name: 'pageb_age', label: '50-59', points: 6 },
        { type: 'radio', name: 'pageb_age', label: '60-69', points: 8 },
        { type: 'radio', name: 'pageb_age', label: '≥70', points: 10 },
        { type: 'header', label: 'Geschlecht' },
        { type: 'radio', name: 'pageb_sex', label: 'Weiblich', points: 0, checked: true },
        { type: 'radio', name: 'pageb_sex', label: 'Männlich', points: 6 },
        { type: 'header', label: 'Thrombozytenzahl (G/L)' },
        { type: 'radio', name: 'pageb_plt', label: '≥200', points: 0, checked: true },
        { type: 'radio', name: 'pageb_plt', label: '100-199', points: 1 },
        { type: 'radio', name: 'pageb_plt', label: '<100', points: 2 }
      ],
      interpret: (score) => {
        if (score <= 9) return { risk: 'Niedriges Risiko (0-9)', action: '5-Jahres-HCC-Risiko ~0%', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 17) return { risk: 'Mittleres Risiko (10-17)', action: '5-Jahres-HCC-Risiko ~3%', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
        return { risk: 'Hohes Risiko (≥18)', action: '5-Jahres-HCC-Risiko ~17%', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    "King's College": {
      title: "King's College Kriterien (Nicht-Paracetamol)",
      description: 'Indikation zur dringenden Lebertransplantation bei akutem Leberversagen (nicht durch Paracetamol).',
      items: [
        { type: 'checkbox', label: 'INR > 6.5 (PT > 100s)', points: 3 },
        { type: 'header', label: 'ODER 3 von 5 (wenn INR ≤ 6.5):' },
        { type: 'checkbox', label: 'Alter < 10 oder > 40 Jahre', points: 1 },
        { type: 'checkbox', label: 'Ätiologie: Non-A/Non-B-Hepatitis, Medikament, Halothan', points: 1 },
        { type: 'checkbox', label: 'Intervall zwischen Ikterus und Enzephalopathie > 7 Tage', points: 1 },
        { type: 'checkbox', label: 'Serum-Bilirubin > 300 µmol/L', points: 1 },
        { type: 'checkbox', label: 'INR > 3.5 (PT > 50s)', points: 1 }
      ],
      interpret: (score) => {
        if (score >= 3) return { risk: 'Kriterien erfüllt', action: 'Dringende Listung zur Lebertransplantation indiziert! (Mortalität >80% ohne Transplantation)', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        return { risk: 'Kriterien nicht erfüllt', action: 'Enge Überwachung auf Intensivstation.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
      }
    },
    'LRINEC': {
      title: 'LRINEC Score (Nekrotisierende Fasziitis)',
      description: 'Laborindikator für das Risiko einer nekrotisierenden Fasziitis.',
      items: [
        { type: 'header', label: 'CRP (mg/L)' },
        { type: 'radio', name: 'lrinec_crp', label: '< 150', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_crp', label: '≥ 150', points: 4 },
        { type: 'header', label: 'Leukozytenzahl (G/L)' },
        { type: 'radio', name: 'lrinec_wbc', label: '< 15', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_wbc', label: '15 - 25', points: 1 },
        { type: 'radio', name: 'lrinec_wbc', label: '> 25', points: 2 },
        { type: 'header', label: 'Hämoglobin (g/dL)' },
        { type: 'radio', name: 'lrinec_hb', label: '> 13.5', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_hb', label: '11 - 13.5', points: 1 },
        { type: 'radio', name: 'lrinec_hb', label: '< 11', points: 2 },
        { type: 'header', label: 'Natrium (mmol/L)' },
        { type: 'radio', name: 'lrinec_na', label: '≥ 135', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_na', label: '< 135', points: 2 },
        { type: 'header', label: 'Kreatinin (µmol/L)' },
        { type: 'radio', name: 'lrinec_cre', label: '≤ 141', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_cre', label: '> 141', points: 2 },
        { type: 'header', label: 'Glukose (mmol/L)' },
        { type: 'radio', name: 'lrinec_glu', label: '≤ 10', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_glu', label: '> 10', points: 1 }
      ],
      interpret: (score) => {
        if (score <= 5) return { risk: 'Niedriges Risiko (<50%)', action: 'Überwachung.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 7) return { risk: 'Mittleres Risiko (50-75%)', action: 'Enge Beobachtung, chirurgisches Konsil.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'Hohes Risiko (>75%)', action: 'Sofortige chirurgische Exploration!', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'Centor': {
      title: 'Centor Score (McIsaac) - Strep A',
      description: 'Wahrscheinlichkeit einer Pharyngitis durch Streptococcus pyogenes.',
      items: [
        { type: 'checkbox', label: 'Fieber > 38°C', points: 1 },
        { type: 'checkbox', label: 'Kein Husten', points: 1 },
        { type: 'checkbox', label: 'Druckschmerzhafte vordere Halslymphknoten', points: 1 },
        { type: 'checkbox', label: 'Tonsillenschwellung oder Exsudat', points: 1 },
        { type: 'header', label: 'Alter' },
        { type: 'radio', name: 'centor_age', label: '3 - 14 Jahre', points: 1, checked: true },
        { type: 'radio', name: 'centor_age', label: '15 - 44 Jahre', points: 0 },
        { type: 'radio', name: 'centor_age', label: '≥ 45 Jahre', points: -1 }
      ],
      interpret: (score) => {
        if (score <= 1) return { risk: 'Niedriges Risiko (<10%)', action: 'Keine Antibiotika empfohlen.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 3) return { risk: 'Mittleres Risiko (15-30%)', action: 'Kultur oder Schnelltest empfohlen. Antibiotika bei positivem Befund.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'Hohes Risiko (>50%)', action: 'Empirische Antibiotika oder Testung.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'FGSI': {
        title: 'FGSI (Fournier\'s Gangrene Severity Index)',
        description: 'Abschätzung des Schweregrads und der Mortalität bei Fournier-Gangrän.',
        items: [
            { type: 'header', label: 'Temperatur (°C)' },
            { type: 'radio', name: 'fgsi_temp', label: '36 - 38.4', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_temp', label: '38.5 - 38.9 oder 34 - 35.9', points: 1 },
            { type: 'radio', name: 'fgsi_temp', label: '32 - 33.9', points: 2 },
            { type: 'radio', name: 'fgsi_temp', label: '30 - 31.9 oder 39 - 40.9', points: 3 },
            { type: 'radio', name: 'fgsi_temp', label: '< 30 oder > 41', points: 4 },
            { type: 'header', label: 'Puls (/min)' },
            { type: 'radio', name: 'fgsi_hr', label: '70 - 109', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_hr', label: '110 - 139 oder 55 - 69', points: 2 },
            { type: 'radio', name: 'fgsi_hr', label: '140 - 179 oder 40 - 54', points: 3 },
            { type: 'radio', name: 'fgsi_hr', label: '> 180 oder < 40', points: 4 },
            { type: 'header', label: 'Atemfrequenz (/min)' },
            { type: 'radio', name: 'fgsi_rr', label: '12 - 24', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_rr', label: '25 - 34 oder 10 - 11', points: 1 },
            { type: 'radio', name: 'fgsi_rr', label: '35 - 49 oder 6 - 9', points: 2 },
            { type: 'radio', name: 'fgsi_rr', label: '> 50 oder < 6', points: 4 },
            { type: 'header', label: 'Serum-Natrium (mmol/L)' },
            { type: 'radio', name: 'fgsi_na', label: '130 - 149', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_na', label: '150 - 154 oder 120 - 129', points: 2 },
            { type: 'radio', name: 'fgsi_na', label: '155 - 179 oder 111 - 119', points: 3 },
            { type: 'radio', name: 'fgsi_na', label: '> 180 oder < 110', points: 4 },
            { type: 'header', label: 'Serum-Kalium (mmol/L)' },
            { type: 'radio', name: 'fgsi_k', label: '3.5 - 5.4', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_k', label: '5.5 - 5.9 oder 3.0 - 3.4', points: 1 },
            { type: 'radio', name: 'fgsi_k', label: '6.0 - 6.9 oder 2.5 - 2.9', points: 2 },
            { type: 'radio', name: 'fgsi_k', label: '> 7.0 oder < 2.5', points: 4 },
            { type: 'header', label: 'Serum-Kreatinin (µmol/L)' },
            { type: 'radio', name: 'fgsi_cr', label: '53 - 124', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_cr', label: '125 - 167 oder < 53', points: 2 },
            { type: 'radio', name: 'fgsi_cr', label: '168 - 309', points: 3 },
            { type: 'radio', name: 'fgsi_cr', label: '> 310', points: 4 },
            { type: 'header', label: 'Hämatokrit (%)' },
            { type: 'radio', name: 'fgsi_hct', label: '30 - 45.9', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_hct', label: '46 - 49.9 oder 20 - 29.9', points: 2 },
            { type: 'radio', name: 'fgsi_hct', label: '> 50 oder < 20', points: 4 },
            { type: 'header', label: 'Leukozyten (x10^9/L)' },
            { type: 'radio', name: 'fgsi_wbc', label: '3 - 14.9', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_wbc', label: '15 - 19.9 oder 1 - 2.9', points: 2 },
            { type: 'radio', name: 'fgsi_wbc', label: '20 - 39.9 oder < 1', points: 4 },
            { type: 'header', label: 'Serum-Bikarbonat (mmol/L)' },
            { type: 'radio', name: 'fgsi_hco3', label: '22 - 31.9', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_hco3', label: '32 - 40.9 oder 18 - 21.9', points: 1 },
            { type: 'radio', name: 'fgsi_hco3', label: '41 - 51.9 oder 15 - 17.9', points: 2 },
            { type: 'radio', name: 'fgsi_hco3', label: '> 52 oder < 15', points: 4 }
        ],
        interpret: (score) => {
            if (score <= 9) return { risk: 'Mortalitätswahrscheinlichkeit < 4%', action: 'Gute Prognose.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
            return { risk: 'Mortalitätswahrscheinlichkeit > 75%', action: 'Schlechte Prognose, aggressive Behandlung erforderlich.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        }
    },
    'GCS': {
        title: 'Glasgow Coma Scale (GCS)',
        description: 'Beurteilung des Bewusstseinszustands.',
        items: [
            { type: 'header', label: 'Augenöffnen (E)' },
            { type: 'radio', name: 'gcs_e', label: 'Spontan (4)', points: 4, checked: true },
            { type: 'radio', name: 'gcs_e', label: 'Auf Ansprache (3)', points: 3 },
            { type: 'radio', name: 'gcs_e', label: 'Auf Schmerzreiz (2)', points: 2 },
            { type: 'radio', name: 'gcs_e', label: 'Keine (1)', points: 1 },
            { type: 'header', label: 'Verbale Antwort (V)' },
            { type: 'radio', name: 'gcs_v', label: 'Orientiert (5)', points: 5, checked: true },
            { type: 'radio', name: 'gcs_v', label: 'Verwirrt (4)', points: 4 },
            { type: 'radio', name: 'gcs_v', label: 'Inadäquate Wörter (3)', points: 3 },
            { type: 'radio', name: 'gcs_v', label: 'Unverständliche Laute (2)', points: 2 },
            { type: 'radio', name: 'gcs_v', label: 'Keine (1)', points: 1 },
            { type: 'header', label: 'Motorische Antwort (M)' },
            { type: 'radio', name: 'gcs_m', label: 'Befolgt Aufforderungen (6)', points: 6, checked: true },
            { type: 'radio', name: 'gcs_m', label: 'Lokalisiert Schmerz (5)', points: 5 },
            { type: 'radio', name: 'gcs_m', label: 'Zieht auf Schmerz zurück (4)', points: 4 },
            { type: 'radio', name: 'gcs_m', label: 'Beugesynergismen (3)', points: 3 },
            { type: 'radio', name: 'gcs_m', label: 'Strecksynergismen (2)', points: 2 },
            { type: 'radio', name: 'gcs_m', label: 'Keine (1)', points: 1 }
        ],
        interpret: (score) => {
            if (score >= 13) return { risk: 'Leichtes Schädel-Hirn-Trauma (13-15)', action: 'Überwachung.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
            if (score >= 9) return { risk: 'Mittelschweres Schädel-Hirn-Trauma (9-12)', action: 'Enge Überwachung, CT.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
            return { risk: 'Schweres Schädel-Hirn-Trauma (≤8)', action: 'Atemwegssicherung (Intubation), Intensivstation.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        }
    },
    'Candida': {
        title: 'Candida Score',
        description: 'Abschätzung des Risikos einer invasiven Candidose bei kritisch kranken Patienten.',
        items: [
            { type: 'checkbox', label: 'Parenterale Ernährung', points: 1 },
            { type: 'checkbox', label: 'Operation', points: 1 },
            { type: 'checkbox', label: 'Multifokale Candida-Kolonisation', points: 1 },
            { type: 'checkbox', label: 'Schwere Sepsis', points: 2 }
        ],
        interpret: (score) => {
            if (score < 3) return { risk: 'Niedriges Risiko (<5%)', action: 'Prophylaxe nicht unbedingt erforderlich.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
            return { risk: 'Hohes Risiko (>20%)', action: 'Empirische antimykotische Therapie erwägen.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        }
    }
};