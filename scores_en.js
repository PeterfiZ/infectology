window.scoreCalculators = {
    'CURB-65': {
      title: 'CURB-65 Score (Pneumonia)',
      description: 'To assess the severity of community-acquired pneumonia and the need for hospitalization.',
      items: [
        { id: 'c', label: 'Confusion', points: 1 },
        { id: 'u', label: 'Urea > 7 mmol/L', points: 1 },
        { id: 'r', label: 'Respiratory rate ≥ 30/min', points: 1 },
        { id: 'b', label: 'Blood pressure (Systolic < 90 or Diastolic ≤ 60 mmHg)', points: 1 },
        { id: '65', label: 'Age ≥ 65 years', points: 1 }
      ],
      interpret: (score) => {
        if (score <= 1) return { risk: 'Low Risk (0-1)', action: 'Consider home treatment', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score === 2) return { risk: 'Moderate Risk (2)', action: 'Hospital admission recommended', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'High Risk (3-5)', action: 'Urgent hospital/ICU admission', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'qSOFA': {
      title: 'qSOFA Score (Sepsis)',
      description: 'Quick bedside tool to identify patients with suspected sepsis (quick SOFA).',
      items: [
        { id: 'rr', label: 'Respiratory rate ≥ 22/min', points: 1 },
        { id: 'ams', label: 'Altered mental status (GCS < 15)', points: 1 },
        { id: 'sbp', label: 'Systolic blood pressure ≤ 100 mmHg', points: 1 }
      ],
      interpret: (score) => {
        if (score < 2) return { risk: 'Low likelihood (<2)', action: 'Monitoring, clinical judgment', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        return { risk: 'High risk (≥2)', action: 'Suspected sepsis, further investigation (SOFA)', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'ATLAS': {
      title: 'ATLAS Score (C. difficile)',
      description: 'To estimate the severity and mortality risk of Clostridioides difficile infection.',
      items: [
        { type: 'header', label: 'Age' },
        { type: 'radio', name: 'atlas_age', label: '< 60 years', points: 0, checked: true },
        { type: 'radio', name: 'atlas_age', label: '60 - 79 years', points: 1 },
        { type: 'radio', name: 'atlas_age', label: '≥ 80 years', points: 2 },
        { type: 'header', label: 'Clinical and Lab' },
        { type: 'checkbox', label: 'Systemic antibiotic treatment during CDI therapy', points: 1 },
        { type: 'header', label: 'Leukocyte count (G/L)' },
        { type: 'radio', name: 'atlas_wbc', label: '< 16', points: 0, checked: true },
        { type: 'radio', name: 'atlas_wbc', label: '16 - 25', points: 1 },
        { type: 'radio', name: 'atlas_wbc', label: '> 25', points: 2 },
        { type: 'header', label: 'Albumin (g/L)' },
        { type: 'radio', name: 'atlas_alb', label: '> 35', points: 0, checked: true },
        { type: 'radio', name: 'atlas_alb', label: '26 - 35', points: 1 },
        { type: 'radio', name: 'atlas_alb', label: '≤ 25', points: 2 },
        { type: 'header', label: 'Creatinine (µmol/L)' },
        { type: 'radio', name: 'atlas_crea', label: '≤ 120', points: 0, checked: true },
        { type: 'radio', name: 'atlas_crea', label: '121 - 179', points: 1 },
        { type: 'radio', name: 'atlas_crea', label: '≥ 180', points: 2 }
      ],
      interpret: (score) => {
        if (score <= 2) return { risk: 'Mild (0-2 points)', action: '0% mortality, >95% cure', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 5) return { risk: 'Moderate (3-5 points)', action: 'Mortality increases', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'Severe (6-7 points)', action: 'High mortality, consider intensive care', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'SOFA': {
      title: 'SOFA Score (Sepsis)',
      description: 'To assess the degree of organ failure (Sequential Organ Failure Assessment).',
      items: [
        { type: 'header', label: 'Respiration (PaO2/FiO2 mmHg)' },
        { type: 'radio', name: 'sofa_resp', label: '≥ 400', points: 0, checked: true },
        { type: 'radio', name: 'sofa_resp', label: '< 400', points: 1 },
        { type: 'radio', name: 'sofa_resp', label: '< 300', points: 2 },
        { type: 'radio', name: 'sofa_resp', label: '< 200 (ventilated)', points: 3 },
        { type: 'radio', name: 'sofa_resp', label: '< 100 (ventilated)', points: 4 },
        { type: 'header', label: 'Coagulation (Platelets G/L)' },
        { type: 'radio', name: 'sofa_plt', label: '≥ 150', points: 0, checked: true },
        { type: 'radio', name: 'sofa_plt', label: '< 150', points: 1 },
        { type: 'radio', name: 'sofa_plt', label: '< 100', points: 2 },
        { type: 'radio', name: 'sofa_plt', label: '< 50', points: 3 },
        { type: 'radio', name: 'sofa_plt', label: '< 20', points: 4 },
        { type: 'header', label: 'Liver (Bilirubin µmol/L)' },
        { type: 'radio', name: 'sofa_bili', label: '< 20', points: 0, checked: true },
        { type: 'radio', name: 'sofa_bili', label: '20 - 32', points: 1 },
        { type: 'radio', name: 'sofa_bili', label: '33 - 101', points: 2 },
        { type: 'radio', name: 'sofa_bili', label: '102 - 204', points: 3 },
        { type: 'radio', name: 'sofa_bili', label: '> 204', points: 4 },
        { type: 'header', label: 'Cardiovascular (MAP / Vasopressors)' },
        { type: 'radio', name: 'sofa_cv', label: 'MAP ≥ 70 mmHg', points: 0, checked: true },
        { type: 'radio', name: 'sofa_cv', label: 'MAP < 70 mmHg', points: 1 },
        { type: 'radio', name: 'sofa_cv', label: 'Dopamine ≤ 5 or Dobutamine', points: 2 },
        { type: 'radio', name: 'sofa_cv', label: 'Dopamine > 5 or Norepinephrine ≤ 0.1', points: 3 },
        { type: 'radio', name: 'sofa_cv', label: 'Dopamine > 15 or Norepinephrine > 0.1', points: 4 },
        { type: 'header', label: 'Central Nervous System (GCS)' },
        { type: 'radio', name: 'sofa_gcs', label: '15', points: 0, checked: true },
        { type: 'radio', name: 'sofa_gcs', label: '13 - 14', points: 1 },
        { type: 'radio', name: 'sofa_gcs', label: '10 - 12', points: 2 },
        { type: 'radio', name: 'sofa_gcs', label: '6 - 9', points: 3 },
        { type: 'radio', name: 'sofa_gcs', label: '< 6', points: 4 },
        { type: 'header', label: 'Renal (Creatinine µmol/L)' },
        { type: 'radio', name: 'sofa_ren', label: '< 110', points: 0, checked: true },
        { type: 'radio', name: 'sofa_ren', label: '110 - 170', points: 1 },
        { type: 'radio', name: 'sofa_ren', label: '171 - 299', points: 2 },
        { type: 'radio', name: 'sofa_ren', label: '300 - 440 (or <500ml urine)', points: 3 },
        { type: 'radio', name: 'sofa_ren', label: '> 440 (or <200ml urine)', points: 4 }
      ],
      interpret: (score) => {
        return { risk: `Total Score: ${score}`, action: 'An increase in score indicates a worsening prognosis. Sepsis definition: infection + SOFA change ≥2.', color: 'text-slate-800', bg: 'bg-slate-50', border: 'border-slate-200' };
      }
    },
    'PORT': {
      title: 'Pneumonia Severity Index (PSI/PORT)',
      description: 'Risk assessment for Community-Acquired Pneumonia (CAP).',
      items: [
        { type: 'header', label: 'Demographics' },
        { type: 'number', label: 'Age (years)', points: 1, min: 0, max: 120 },
        { type: 'checkbox', label: 'Female', points: -10 },
        { type: 'checkbox', label: 'Nursing home resident', points: 10 },
        { type: 'header', label: 'Comorbidities' },
        { type: 'checkbox', label: 'Neoplastic disease', points: 30 },
        { type: 'checkbox', label: 'Liver disease', points: 20 },
        { type: 'checkbox', label: 'Congestive heart failure (CHF)', points: 10 },
        { type: 'checkbox', label: 'Cerebrovascular disease', points: 10 },
        { type: 'checkbox', label: 'Renal disease', points: 10 },
        { type: 'header', label: 'Physical Examination' },
        { type: 'checkbox', label: 'Altered mental status', points: 20 },
        { type: 'checkbox', label: 'Respiratory rate ≥ 30/min', points: 20 },
        { type: 'checkbox', label: 'Systolic BP < 90 mmHg', points: 20 },
        { type: 'checkbox', label: 'Temperature < 35°C or > 40°C', points: 15 },
        { type: 'checkbox', label: 'Pulse ≥ 125/min', points: 10 },
        { type: 'header', label: 'Laboratory and Radiographic Findings' },
        { type: 'checkbox', label: 'Arterial pH < 7.35', points: 30 },
        { type: 'checkbox', label: 'BUN > 10.7 mmol/L (Urea > 30 mg/dL)', points: 20 },
        { type: 'checkbox', label: 'Sodium < 130 mmol/L', points: 20 },
        { type: 'checkbox', label: 'Glucose > 13.9 mmol/L', points: 10 },
        { type: 'checkbox', label: 'Hematocrit < 30%', points: 10 },
        { type: 'checkbox', label: 'PaO2 < 60 mmHg (or SpO2 < 90%)', points: 10 },
        { type: 'checkbox', label: 'Pleural effusion', points: 10 }
      ],
      interpret: (score) => {
        if (score <= 50) return { risk: 'Class I (≤50)', action: 'Low risk (0.1% mortality). Outpatient care.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 70) return { risk: 'Class II (51-70)', action: 'Low risk (0.6% mortality). Outpatient care.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 90) return { risk: 'Class III (71-90)', action: 'Moderate risk (0.9-2.8%). Short hospital observation or outpatient.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        if (score <= 130) return { risk: 'Class IV (91-130)', action: 'High risk (8-9%). Inpatient admission.', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
        return { risk: 'Class V (>130)', action: 'Very high risk (27-30%). ICU admission.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'APACHE II': {
      title: 'APACHE II Score',
      description: 'Severity scoring system for ICU patients (Acute Physiology and Chronic Health Evaluation II).',
      items: [
        { type: 'header', label: 'Age' },
        { type: 'radio', name: 'ap_age', label: '≤ 44', points: 0, checked: true },
        { type: 'radio', name: 'ap_age', label: '45 - 54', points: 2 },
        { type: 'radio', name: 'ap_age', label: '55 - 64', points: 3 },
        { type: 'radio', name: 'ap_age', label: '65 - 74', points: 5 },
        { type: 'radio', name: 'ap_age', label: '≥ 75', points: 6 },
        { type: 'header', label: 'Chronic Health Status' },
        { type: 'checkbox', label: 'Severe organ insufficiency (liver, heart, respiratory, kidney) or immunosuppression', points: 5 },
        { type: 'checkbox', label: 'Post-emergency surgery or non-operative patient', points: 0 }, 
        { type: 'header', label: 'Acute Physiological Parameters (Worst value in the first 24 hours)' },
        { type: 'header', label: 'Temperature (°C)' },
        { type: 'radio', name: 'ap_temp', label: '36 - 38.4', points: 0, checked: true },
        { type: 'radio', name: 'ap_temp', label: '34 - 35.9 or 38.5 - 38.9', points: 1 },
        { type: 'radio', name: 'ap_temp', label: '32 - 33.9', points: 2 },
        { type: 'radio', name: 'ap_temp', label: '30 - 31.9 or 39 - 40.9', points: 3 },
        { type: 'radio', name: 'ap_temp', label: '≤ 29.9 or ≥ 41', points: 4 },
        { type: 'header', label: 'MAP (Mean Arterial Pressure mmHg)' },
        { type: 'radio', name: 'ap_map', label: '70 - 109', points: 0, checked: true },
        { type: 'radio', name: 'ap_map', label: '110 - 129 or 50 - 69', points: 2 },
        { type: 'radio', name: 'ap_map', label: '130 - 159', points: 3 },
        { type: 'radio', name: 'ap_map', label: '≥ 160 or ≤ 49', points: 4 },
        { type: 'header', label: 'Heart Rate (/min)' },
        { type: 'radio', name: 'ap_hr', label: '70 - 109', points: 0, checked: true },
        { type: 'radio', name: 'ap_hr', label: '55 - 69 or 110 - 139', points: 2 },
        { type: 'radio', name: 'ap_hr', label: '40 - 54 or 140 - 179', points: 3 },
        { type: 'radio', name: 'ap_hr', label: '≤ 39 or ≥ 180', points: 4 },
        { type: 'header', label: 'Respiratory Rate (/min)' },
        { type: 'radio', name: 'ap_rr', label: '12 - 24', points: 0, checked: true },
        { type: 'radio', name: 'ap_rr', label: '10 - 11 or 25 - 34', points: 1 },
        { type: 'radio', name: 'ap_rr', label: '6 - 9', points: 2 },
        { type: 'radio', name: 'ap_rr', label: '35 - 49', points: 3 },
        { type: 'radio', name: 'ap_rr', label: '≤ 5 or ≥ 50', points: 4 },
        { type: 'header', label: 'Oxygenation (AaDO2 or PaO2)' },
        { type: 'radio', name: 'ap_ox', label: 'Normal', points: 0, checked: true },
        { type: 'radio', name: 'ap_ox', label: 'Mild impairment', points: 1 },
        { type: 'radio', name: 'ap_ox', label: 'Moderate impairment', points: 3 },
        { type: 'radio', name: 'ap_ox', label: 'Severe impairment', points: 4 },
        { type: 'header', label: 'Arterial pH' },
        { type: 'radio', name: 'ap_ph', label: '7.33 - 7.49', points: 0, checked: true },
        { type: 'radio', name: 'ap_ph', label: 'Deviation', points: 2 },
        { type: 'radio', name: 'ap_ph', label: 'Significant deviation (<7.15 or >7.7)', points: 4 },
        { type: 'header', label: 'Serum Sodium (mmol/L)' },
        { type: 'radio', name: 'ap_na', label: '130 - 149', points: 0, checked: true },
        { type: 'radio', name: 'ap_na', label: 'Deviation', points: 1 },
        { type: 'radio', name: 'ap_na', label: 'Significant deviation', points: 4 },
        { type: 'header', label: 'Serum Potassium (mmol/L)' },
        { type: 'radio', name: 'ap_k', label: '3.5 - 5.4', points: 0, checked: true },
        { type: 'radio', name: 'ap_k', label: 'Deviation', points: 1 },
        { type: 'radio', name: 'ap_k', label: 'Significant deviation', points: 4 },
        { type: 'header', label: 'Serum Creatinine (mg/dL)' },
        { type: 'radio', name: 'ap_cr', label: '0.6 - 1.4', points: 0, checked: true },
        { type: 'radio', name: 'ap_cr', label: '< 0.6 or 1.5 - 1.9', points: 2 },
        { type: 'radio', name: 'ap_cr', label: '2.0 - 3.4', points: 3 },
        { type: 'radio', name: 'ap_cr', label: '≥ 3.5', points: 4 },
        { type: 'checkbox', label: 'Acute renal failure (Creatinine score is doubled)', points: 0 }, 
        { type: 'header', label: 'Hematocrit (%)' },
        { type: 'radio', name: 'ap_hct', label: '30 - 45.9', points: 0, checked: true },
        { type: 'radio', name: 'ap_hct', label: 'Deviation', points: 2 },
        { type: 'radio', name: 'ap_hct', label: 'Significant deviation', points: 4 },
        { type: 'header', label: 'White Blood Cell Count (G/L)' },
        { type: 'radio', name: 'ap_wbc', label: '3 - 14.9', points: 0, checked: true },
        { type: 'radio', name: 'ap_wbc', label: 'Deviation', points: 2 },
        { type: 'radio', name: 'ap_wbc', label: 'Significant deviation', points: 4 },
        { type: 'header', label: 'Glasgow Coma Scale (GCS)' },
        { type: 'number', label: 'GCS score (15 - GCS = points)', points: -1, min: 3, max: 15, value: 15 } 
      ],
      interpret: (score) => {
        return { risk: `APACHE II Score: ${score + 15}`, action: 'Mortality correlates with the score (e.g., 25 points ~50% mortality).', color: 'text-slate-800', bg: 'bg-slate-50', border: 'border-slate-200' };
      }
    },
    'NEWS2': {
      title: 'NEWS2 (National Early Warning Score)',
      description: 'To assess the severity of a patient\'s condition and risk of clinical deterioration.',
      items: [
        { type: 'header', label: 'Respiratory Rate (/min)' },
        { type: 'radio', name: 'news_rr', label: '12-20', points: 0, checked: true },
        { type: 'radio', name: 'news_rr', label: '9-11', points: 1 },
        { type: 'radio', name: 'news_rr', label: '21-24', points: 2 },
        { type: 'radio', name: 'news_rr', label: '≤8 or ≥25', points: 3 },
        { type: 'header', label: 'Oxygen Saturation (%)' },
        { type: 'radio', name: 'news_spo2', label: '≥96', points: 0, checked: true },
        { type: 'radio', name: 'news_spo2', label: '94-95', points: 1 },
        { type: 'radio', name: 'news_spo2', label: '92-93', points: 2 },
        { type: 'radio', name: 'news_spo2', label: '≤91', points: 3 },
        { type: 'header', label: 'Air or Oxygen' },
        { type: 'radio', name: 'news_o2', label: 'Air', points: 0, checked: true },
        { type: 'radio', name: 'news_o2', label: 'Oxygen', points: 2 },
        { type: 'header', label: 'Systolic Blood Pressure (mmHg)' },
        { type: 'radio', name: 'news_sbp', label: '111-219', points: 0, checked: true },
        { type: 'radio', name: 'news_sbp', label: '101-110', points: 1 },
        { type: 'radio', name: 'news_sbp', label: '91-100', points: 2 },
        { type: 'radio', name: 'news_sbp', label: '≤90 or ≥220', points: 3 },
        { type: 'header', label: 'Heart Rate (/min)' },
        { type: 'radio', name: 'news_hr', label: '51-90', points: 0, checked: true },
        { type: 'radio', name: 'news_hr', label: '41-50 or 91-110', points: 1 },
        { type: 'radio', name: 'news_hr', label: '111-130', points: 2 },
        { type: 'radio', name: 'news_hr', label: '≤40 or ≥131', points: 3 },
        { type: 'header', label: 'Level of Consciousness' },
        { type: 'radio', name: 'news_loc', label: 'Alert', points: 0, checked: true },
        { type: 'radio', name: 'news_loc', label: 'Confused (CVPU)', points: 3 },
        { type: 'header', label: 'Temperature (°C)' },
        { type: 'radio', name: 'news_temp', label: '36.1-38.0', points: 0, checked: true },
        { type: 'radio', name: 'news_temp', label: '35.1-36.0 or 38.1-39.0', points: 1 },
        { type: 'radio', name: 'news_temp', label: '≥39.1', points: 2 },
        { type: 'radio', name: 'news_temp', label: '≤35.0', points: 3 }
      ],
      interpret: (score) => {
        if (score === 0) return { risk: 'Low (0)', action: 'Monitor every 12 hours', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 4) return { risk: 'Low-Medium (1-4)', action: 'Monitor every 4-6 hours', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
        if (score <= 6) return { risk: 'Medium (5-6)', action: 'Urgent medical review, hourly monitoring', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
        return { risk: 'High (≥7)', action: 'Emergency/ICU assessment, continuous monitoring', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    '4C Mortality Score': {
      title: '4C Mortality Score (COVID-19)',
      description: 'Risk of in-hospital mortality in COVID-19 patients.',
      items: [
        { type: 'header', label: 'Age' },
        { type: 'radio', name: '4c_age', label: '<50', points: 0, checked: true },
        { type: 'radio', name: '4c_age', label: '50-59', points: 2 },
        { type: 'radio', name: '4c_age', label: '60-69', points: 4 },
        { type: 'radio', name: '4c_age', label: '70-79', points: 6 },
        { type: 'radio', name: '4c_age', label: '≥80', points: 7 },
        { type: 'header', label: 'Sex' },
        { type: 'radio', name: '4c_sex', label: 'Female', points: 0, checked: true },
        { type: 'radio', name: '4c_sex', label: 'Male', points: 1 },
        { type: 'header', label: 'Number of Comorbidities' },
        { type: 'radio', name: '4c_comorb', label: '0', points: 0, checked: true },
        { type: 'radio', name: '4c_comorb', label: '1', points: 1 },
        { type: 'radio', name: '4c_comorb', label: '≥2', points: 2 },
        { type: 'header', label: 'Respiratory Rate (/min)' },
        { type: 'radio', name: '4c_rr', label: '<20', points: 0, checked: true },
        { type: 'radio', name: '4c_rr', label: '20-29', points: 1 },
        { type: 'radio', name: '4c_rr', label: '≥30', points: 2 },
        { type: 'header', label: 'SpO2 (on air)' },
        { type: 'radio', name: '4c_spo2', label: '≥92%', points: 0, checked: true },
        { type: 'radio', name: '4c_spo2', label: '<92%', points: 2 },
        { type: 'header', label: 'GCS' },
        { type: 'radio', name: '4c_gcs', label: '15', points: 0, checked: true },
        { type: 'radio', name: '4c_gcs', label: '<15', points: 2 },
        { type: 'header', label: 'Urea (mmol/L)' },
        { type: 'radio', name: '4c_urea', label: '≤7', points: 0, checked: true },
        { type: 'radio', name: '4c_urea', label: '7-14', points: 1 },
        { type: 'radio', name: '4c_urea', label: '>14', points: 3 },
        { type: 'header', label: 'CRP (mg/L)' },
        { type: 'radio', name: '4c_crp', label: '<50', points: 0, checked: true },
        { type: 'radio', name: '4c_crp', label: '50-99', points: 1 },
        { type: 'radio', name: '4c_crp', label: '≥100', points: 2 }
      ],
      interpret: (score) => {
        if (score <= 3) return { risk: 'Low (0-3)', action: 'Mortality: 1%', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 8) return { risk: 'Intermediate (4-8)', action: 'Mortality: 8%', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
        if (score <= 14) return { risk: 'High (9-14)', action: 'Mortality: 31%', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
        return { risk: 'Very High (≥15)', action: 'Mortality: 62%', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'PAGE-B': {
      title: 'PAGE-B Score (HBV)',
      description: 'Risk of hepatocellular carcinoma (HCC) in chronic Hepatitis B patients (on NA therapy).',
      items: [
        { type: 'header', label: 'Age' },
        { type: 'radio', name: 'pageb_age', label: '16-29', points: 0, checked: true },
        { type: 'radio', name: 'pageb_age', label: '30-39', points: 2 },
        { type: 'radio', name: 'pageb_age', label: '40-49', points: 4 },
        { type: 'radio', name: 'pageb_age', label: '50-59', points: 6 },
        { type: 'radio', name: 'pageb_age', label: '60-69', points: 8 },
        { type: 'radio', name: 'pageb_age', label: '≥70', points: 10 },
        { type: 'header', label: 'Sex' },
        { type: 'radio', name: 'pageb_sex', label: 'Female', points: 0, checked: true },
        { type: 'radio', name: 'pageb_sex', label: 'Male', points: 6 },
        { type: 'header', label: 'Platelet count (G/L)' },
        { type: 'radio', name: 'pageb_plt', label: '≥200', points: 0, checked: true },
        { type: 'radio', name: 'pageb_plt', label: '100-199', points: 1 },
        { type: 'radio', name: 'pageb_plt', label: '<100', points: 2 }
      ],
      interpret: (score) => {
        if (score <= 9) return { risk: 'Low risk (0-9)', action: '5-year HCC risk ~0%', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 17) return { risk: 'Intermediate risk (10-17)', action: '5-year HCC risk ~3%', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
        return { risk: 'High risk (≥18)', action: '5-year HCC risk ~17%', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    "King's College": {
      title: "King's College Criteria (Non-Acetaminophen)",
      description: 'Indication for emergency liver transplantation in acute liver failure (non-acetaminophen-induced).',
      items: [
        { type: 'checkbox', label: 'INR > 6.5 (PT > 100s)', points: 3 },
        { type: 'header', label: 'OR 3 of the following 5 (if INR ≤ 6.5):' },
        { type: 'checkbox', label: 'Age < 10 or > 40 years', points: 1 },
        { type: 'checkbox', label: 'Etiology: Non-A/Non-B hepatitis, drug, halothane', points: 1 },
        { type: 'checkbox', label: 'Jaundice to encephalopathy time > 7 days', points: 1 },
        { type: 'checkbox', label: 'Serum Bilirubin > 300 µmol/L', points: 1 },
        { type: 'checkbox', label: 'INR > 3.5 (PT > 50s)', points: 1 }
      ],
      interpret: (score) => {
        if (score >= 3) return { risk: 'Criteria met', action: 'Urgent liver transplant listing indicated! (Mortality >80% without transplant)', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        return { risk: 'Criteria not met', action: 'Close monitoring in ICU.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
      }
    },
    'LRINEC': {
      title: 'LRINEC Score (Necrotizing Fasciitis)',
      description: 'Laboratory Risk Indicator for Necrotizing Fasciitis.',
      items: [
        { type: 'header', label: 'CRP (mg/L)' },
        { type: 'radio', name: 'lrinec_crp', label: '< 150', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_crp', label: '≥ 150', points: 4 },
        { type: 'header', label: 'White Blood Cell Count (G/L)' },
        { type: 'radio', name: 'lrinec_wbc', label: '< 15', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_wbc', label: '15 - 25', points: 1 },
        { type: 'radio', name: 'lrinec_wbc', label: '> 25', points: 2 },
        { type: 'header', label: 'Hemoglobin (g/dL)' },
        { type: 'radio', name: 'lrinec_hb', label: '> 13.5', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_hb', label: '11 - 13.5', points: 1 },
        { type: 'radio', name: 'lrinec_hb', label: '< 11', points: 2 },
        { type: 'header', label: 'Sodium (mmol/L)' },
        { type: 'radio', name: 'lrinec_na', label: '≥ 135', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_na', label: '< 135', points: 2 },
        { type: 'header', label: 'Creatinine (µmol/L)' },
        { type: 'radio', name: 'lrinec_cre', label: '≤ 141', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_cre', label: '> 141', points: 2 },
        { type: 'header', label: 'Glucose (mmol/L)' },
        { type: 'radio', name: 'lrinec_glu', label: '≤ 10', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_glu', label: '> 10', points: 1 }
      ],
      interpret: (score) => {
        if (score <= 5) return { risk: 'Low risk (<50%)', action: 'Monitoring.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 7) return { risk: 'Intermediate risk (50-75%)', action: 'Close observation, surgical consult.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'High risk (>75%)', action: 'Immediate surgical exploration!', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'Centor': {
      title: 'Centor Score (McIsaac) - Strep A',
      description: 'Probability of Streptococcus pyogenes pharyngitis.',
      items: [
        { type: 'checkbox', label: 'Fever > 38°C', points: 1 },
        { type: 'checkbox', label: 'Absence of cough', points: 1 },
        { type: 'checkbox', label: 'Tender anterior cervical adenopathy', points: 1 },
        { type: 'checkbox', label: 'Tonsillar swelling or exudate', points: 1 },
        { type: 'header', label: 'Age' },
        { type: 'radio', name: 'centor_age', label: '3 - 14 years', points: 1, checked: true },
        { type: 'radio', name: 'centor_age', label: '15 - 44 years', points: 0 },
        { type: 'radio', name: 'centor_age', label: '≥ 45 years', points: -1 }
      ],
      interpret: (score) => {
        if (score <= 1) return { risk: 'Low risk (<10%)', action: 'Antibiotic not recommended.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 3) return { risk: 'Intermediate risk (15-30%)', action: 'Culture or rapid test recommended. Treat if positive.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'High risk (>50%)', action: 'Empiric antibiotics or testing.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'FGSI': {
        title: 'FGSI (Fournier\'s Gangrene Severity Index)',
        description: 'To estimate the severity and mortality of Fournier\'s gangrene.',
        items: [
            { type: 'header', label: 'Temperature (°C)' },
            { type: 'radio', name: 'fgsi_temp', label: '36 - 38.4', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_temp', label: '38.5 - 38.9 or 34 - 35.9', points: 1 },
            { type: 'radio', name: 'fgsi_temp', label: '32 - 33.9', points: 2 },
            { type: 'radio', name: 'fgsi_temp', label: '30 - 31.9 or 39 - 40.9', points: 3 },
            { type: 'radio', name: 'fgsi_temp', label: '< 30 or > 41', points: 4 },
            { type: 'header', label: 'Heart Rate (/min)' },
            { type: 'radio', name: 'fgsi_hr', label: '70 - 109', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_hr', label: '110 - 139 or 55 - 69', points: 2 },
            { type: 'radio', name: 'fgsi_hr', label: '140 - 179 or 40 - 54', points: 3 },
            { type: 'radio', name: 'fgsi_hr', label: '> 180 or < 40', points: 4 },
            { type: 'header', label: 'Respiratory Rate (/min)' },
            { type: 'radio', name: 'fgsi_rr', label: '12 - 24', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_rr', label: '25 - 34 or 10 - 11', points: 1 },
            { type: 'radio', name: 'fgsi_rr', label: '35 - 49 or 6 - 9', points: 2 },
            { type: 'radio', name: 'fgsi_rr', label: '> 50 or < 6', points: 4 },
            { type: 'header', label: 'Serum Sodium (mmol/L)' },
            { type: 'radio', name: 'fgsi_na', label: '130 - 149', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_na', label: '150 - 154 or 120 - 129', points: 2 },
            { type: 'radio', name: 'fgsi_na', label: '155 - 179 or 111 - 119', points: 3 },
            { type: 'radio', name: 'fgsi_na', label: '> 180 or < 110', points: 4 },
            { type: 'header', label: 'Serum Potassium (mmol/L)' },
            { type: 'radio', name: 'fgsi_k', label: '3.5 - 5.4', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_k', label: '5.5 - 5.9 or 3.0 - 3.4', points: 1 },
            { type: 'radio', name: 'fgsi_k', label: '6.0 - 6.9 or 2.5 - 2.9', points: 2 },
            { type: 'radio', name: 'fgsi_k', label: '> 7.0 or < 2.5', points: 4 },
            { type: 'header', label: 'Serum Creatinine (µmol/L)' },
            { type: 'radio', name: 'fgsi_cr', label: '53 - 124', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_cr', label: '125 - 167 or < 53', points: 2 },
            { type: 'radio', name: 'fgsi_cr', label: '168 - 309', points: 3 },
            { type: 'radio', name: 'fgsi_cr', label: '> 310', points: 4 },
            { type: 'header', label: 'Hematocrit (%)' },
            { type: 'radio', name: 'fgsi_hct', label: '30 - 45.9', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_hct', label: '46 - 49.9 or 20 - 29.9', points: 2 },
            { type: 'radio', name: 'fgsi_hct', label: '> 50 or < 20', points: 4 },
            { type: 'header', label: 'White Blood Cell Count (x10^9/L)' },
            { type: 'radio', name: 'fgsi_wbc', label: '3 - 14.9', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_wbc', label: '15 - 19.9 or 1 - 2.9', points: 2 },
            { type: 'radio', name: 'fgsi_wbc', label: '20 - 39.9 or < 1', points: 4 },
            { type: 'header', label: 'Serum Bicarbonate (mmol/L)' },
            { type: 'radio', name: 'fgsi_hco3', label: '22 - 31.9', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_hco3', label: '32 - 40.9 or 18 - 21.9', points: 1 },
            { type: 'radio', name: 'fgsi_hco3', label: '41 - 51.9 or 15 - 17.9', points: 2 },
            { type: 'radio', name: 'fgsi_hco3', label: '> 52 or < 15', points: 4 }
        ],
        interpret: (score) => {
            if (score <= 9) return { risk: 'Probability of mortality < 4%', action: 'Good prognosis.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
            return { risk: 'Probability of mortality > 75%', action: 'Poor prognosis, aggressive treatment required.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        }
    },
    'GCS': {
        title: 'Glasgow Coma Scale (GCS)',
        description: 'To assess level of consciousness.',
        items: [
            { type: 'header', label: 'Eye Opening (E)' },
            { type: 'radio', name: 'gcs_e', label: 'Spontaneous (4)', points: 4, checked: true },
            { type: 'radio', name: 'gcs_e', label: 'To speech (3)', points: 3 },
            { type: 'radio', name: 'gcs_e', label: 'To pain (2)', points: 2 },
            { type: 'radio', name: 'gcs_e', label: 'None (1)', points: 1 },
            { type: 'header', label: 'Verbal Response (V)' },
            { type: 'radio', name: 'gcs_v', label: 'Oriented (5)', points: 5, checked: true },
            { type: 'radio', name: 'gcs_v', label: 'Confused (4)', points: 4 },
            { type: 'radio', name: 'gcs_v', label: 'Inappropriate words (3)', points: 3 },
            { type: 'radio', name: 'gcs_v', label: 'Incomprehensible sounds (2)', points: 2 },
            { type: 'radio', name: 'gcs_v', label: 'None (1)', points: 1 },
            { type: 'header', label: 'Motor Response (M)' },
            { type: 'radio', name: 'gcs_m', label: 'Obeys commands (6)', points: 6, checked: true },
            { type: 'radio', name: 'gcs_m', label: 'Localizes pain (5)', points: 5 },
            { type: 'radio', name: 'gcs_m', label: 'Withdraws from pain (4)', points: 4 },
            { type: 'radio', name: 'gcs_m', label: 'Flexion to pain (3)', points: 3 },
            { type: 'radio', name: 'gcs_m', label: 'Extension to pain (2)', points: 2 },
            { type: 'radio', name: 'gcs_m', label: 'None (1)', points: 1 }
        ],
        interpret: (score) => {
            if (score >= 13) return { risk: 'Mild brain injury (13-15)', action: 'Observation.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
            if (score >= 9) return { risk: 'Moderate brain injury (9-12)', action: 'Close monitoring, CT.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
            return { risk: 'Severe brain injury (≤8)', action: 'Airway protection (intubation), ICU.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        }
    },
    'Candida': {
        title: 'Candida Score',
        description: 'To estimate the risk of invasive candidiasis in critically ill patients.',
        items: [
            { type: 'checkbox', label: 'Parenteral nutrition', points: 1 },
            { type: 'checkbox', label: 'Surgery', points: 1 },
            { type: 'checkbox', label: 'Multifocal Candida colonization', points: 1 },
            { type: 'checkbox', label: 'Severe sepsis', points: 2 }
        ],
        interpret: (score) => {
            if (score < 3) return { risk: 'Low risk (<5%)', action: 'Prophylaxis not necessarily required.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
            return { risk: 'High risk (>20%)', action: 'Consider empiric antifungal therapy.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        }
    }
};