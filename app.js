/**
 * app.js
 * Main application logic for Infectologia
 */

// Configuration
const DATA_MODULES = [
    'Thorax',
    'abdomen',
    'BoneandSST',
    'CNS',
    'STD',
    'parazita',
    'zoonozis',
    'systemic',
    'tropical',
    'emerging',
    'childhood'
];

const AVAILABLE_LANGUAGES = {
    'hu': 'Magyar',
    'en': 'English',
    'de': 'Deutsch'
};

const CATEGORY_ORDER = [
    'cns_infections',
    'upper_respiratory',
    'viral_respiratory',
    'bacterial_respiratory',
    'cardiovascular',
    'gastrointestinal',
    'viral_hepatitis',
    'urinary_tract',
    'sexually_transmitted',
    'zoonotic',
    'parasitic',
    'skin_soft_tissue',
    'bone_joint',
    'childhood',
    'sepsis_systemic',
    'fungal',
    'tropical',
    'emerging'
];

// Score Calculators Data
const scoreCalculators = {
    'CURB-65': {
      title: 'CURB-65 Score (Pneumonia)',
      description: 'Közösségben szerzett tüdőgyulladás súlyosságának és a betegfelvétel szükségességének megítélésére.',
      items: [
        { id: 'c', label: 'Confusion (Zavartság)', points: 1 },
        { id: 'u', label: 'Urea > 7 mmol/L (Se. karbamid)', points: 1 },
        { id: 'r', label: 'Respiratory rate ≥ 30/perc (Légzésszám)', points: 1 },
        { id: 'b', label: 'Blood pressure (Szisztolés < 90 vagy Diasztolés ≤ 60 Hgmm)', points: 1 },
        { id: '65', label: 'Életkor ≥ 65 év', points: 1 }
      ],
      interpret: (score) => {
        if (score <= 1) return { risk: 'Alacsony rizikó (0-1)', action: 'Otthoni kezelés megfontolható', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score === 2) return { risk: 'Közepes rizikó (2)', action: 'Kórházi felvétel javasolt', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'Magas rizikó (3-5)', action: 'Sürgős kórházi/ITO felvétel', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'qSOFA': {
      title: 'qSOFA Score (Sepsis)',
      description: 'Gyors ágy melletti eszköz a szepszis gyanújának felvetésére (quick SOFA).',
      items: [
        { id: 'rr', label: 'Légzésszám ≥ 22/perc', points: 1 },
        { id: 'ams', label: 'Megváltozott mentális státusz (GCS < 15)', points: 1 },
        { id: 'sbp', label: 'Szisztolés vérnyomás ≤ 100 Hgmm', points: 1 }
      ],
      interpret: (score) => {
        if (score < 2) return { risk: 'Alacsony valószínűség (<2)', action: 'Monitorozás, klinikai megítélés', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        return { risk: 'Magas rizikó (≥2)', action: 'Szepszis gyanúja, további kivizsgálás (SOFA)', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'ATLAS': {
      title: 'ATLAS Score (C. difficile)',
      description: 'Clostridioides difficile fertőzés súlyosságának és a mortalitás kockázatának becslése.',
      items: [
        { type: 'header', label: 'Életkor' },
        { type: 'radio', name: 'atlas_age', label: '< 60 év', points: 0, checked: true },
        { type: 'radio', name: 'atlas_age', label: '60 - 79 év', points: 1 },
        { type: 'radio', name: 'atlas_age', label: '≥ 80 év', points: 2 },
        { type: 'header', label: 'Klinikum és Labor' },
        { type: 'checkbox', label: 'Szisztémás antibiotikum kezelés a CDI terápia alatt', points: 1 },
        { type: 'header', label: 'Leukocyta szám (G/L)' },
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
        if (score <= 2) return { risk: 'Enyhe (0-2 pont)', action: '0% mortalitás, >95% gyógyulás', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 5) return { risk: 'Közepes (3-5 pont)', action: 'Mortalitás növekszik', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'Súlyos (6-7 pont)', action: 'Magas mortalitás, intenzív terápia mérlegelendő', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'SOFA': {
      title: 'SOFA Score (Sepsis)',
      description: 'Szervelégtelenség mértékének megítélése (Sequential Organ Failure Assessment).',
      items: [
        { type: 'header', label: 'Légzés (PaO2/FiO2 Hgmm)' },
        { type: 'radio', name: 'sofa_resp', label: '≥ 400', points: 0, checked: true },
        { type: 'radio', name: 'sofa_resp', label: '< 400', points: 1 },
        { type: 'radio', name: 'sofa_resp', label: '< 300', points: 2 },
        { type: 'radio', name: 'sofa_resp', label: '< 200 (lélegeztetve)', points: 3 },
        { type: 'radio', name: 'sofa_resp', label: '< 100 (lélegeztetve)', points: 4 },
        { type: 'header', label: 'Véralvadás (Thrombocyta G/L)' },
        { type: 'radio', name: 'sofa_plt', label: '≥ 150', points: 0, checked: true },
        { type: 'radio', name: 'sofa_plt', label: '< 150', points: 1 },
        { type: 'radio', name: 'sofa_plt', label: '< 100', points: 2 },
        { type: 'radio', name: 'sofa_plt', label: '< 50', points: 3 },
        { type: 'radio', name: 'sofa_plt', label: '< 20', points: 4 },
        { type: 'header', label: 'Máj (Bilirubin µmol/L)' },
        { type: 'radio', name: 'sofa_bili', label: '< 20', points: 0, checked: true },
        { type: 'radio', name: 'sofa_bili', label: '20 - 32', points: 1 },
        { type: 'radio', name: 'sofa_bili', label: '33 - 101', points: 2 },
        { type: 'radio', name: 'sofa_bili', label: '102 - 204', points: 3 },
        { type: 'radio', name: 'sofa_bili', label: '> 204', points: 4 },
        { type: 'header', label: 'Keringés (MAP / Vazopresszorok)' },
        { type: 'radio', name: 'sofa_cv', label: 'MAP ≥ 70 Hgmm', points: 0, checked: true },
        { type: 'radio', name: 'sofa_cv', label: 'MAP < 70 Hgmm', points: 1 },
        { type: 'radio', name: 'sofa_cv', label: 'Dopamin ≤ 5 vagy Dobutamin', points: 2 },
        { type: 'radio', name: 'sofa_cv', label: 'Dopamin > 5 vagy Noradrenalin ≤ 0.1', points: 3 },
        { type: 'radio', name: 'sofa_cv', label: 'Dopamin > 15 vagy Noradrenalin > 0.1', points: 4 },
        { type: 'header', label: 'Központi idegrendszer (GCS)' },
        { type: 'radio', name: 'sofa_gcs', label: '15', points: 0, checked: true },
        { type: 'radio', name: 'sofa_gcs', label: '13 - 14', points: 1 },
        { type: 'radio', name: 'sofa_gcs', label: '10 - 12', points: 2 },
        { type: 'radio', name: 'sofa_gcs', label: '6 - 9', points: 3 },
        { type: 'radio', name: 'sofa_gcs', label: '< 6', points: 4 },
        { type: 'header', label: 'Vese (Kreatinin µmol/L)' },
        { type: 'radio', name: 'sofa_ren', label: '< 110', points: 0, checked: true },
        { type: 'radio', name: 'sofa_ren', label: '110 - 170', points: 1 },
        { type: 'radio', name: 'sofa_ren', label: '171 - 299', points: 2 },
        { type: 'radio', name: 'sofa_ren', label: '300 - 440 (vagy <500ml vizelet)', points: 3 },
        { type: 'radio', name: 'sofa_ren', label: '> 440 (vagy <200ml vizelet)', points: 4 }
      ],
      interpret: (score) => {
        return { risk: `Összpontszám: ${score}`, action: 'A pontszám növekedése romló prognózist jelez. Sepszis definíció: fertőzés + SOFA változás ≥2.', color: 'text-slate-800', bg: 'bg-slate-50', border: 'border-slate-200' };
      }
    },
    'PORT': {
      title: 'Pneumonia Severity Index (PSI/PORT)',
      description: 'Közösségben szerzett tüdőgyulladás (CAP) rizikóbecslése.',
      items: [
        { type: 'header', label: 'Demográfia' },
        { type: 'number', label: 'Életkor (év)', points: 1, min: 0, max: 120 },
        { type: 'checkbox', label: 'Nőnemű beteg', points: -10 },
        { type: 'checkbox', label: 'Otthonlakó / Intézeti gondozott', points: 10 },
        { type: 'header', label: 'Társbetegségek' },
        { type: 'checkbox', label: 'Daganatos betegség', points: 30 },
        { type: 'checkbox', label: 'Májbetegség', points: 20 },
        { type: 'checkbox', label: 'Szívelégtelenség (CHF)', points: 10 },
        { type: 'checkbox', label: 'Cerebrovascularis betegség', points: 10 },
        { type: 'checkbox', label: 'Vesebetegség', points: 10 },
        { type: 'header', label: 'Fizikális vizsgálat' },
        { type: 'checkbox', label: 'Megváltozott mentális státusz', points: 20 },
        { type: 'checkbox', label: 'Légzésszám ≥ 30/perc', points: 20 },
        { type: 'checkbox', label: 'Szisztolés RR < 90 Hgmm', points: 20 },
        { type: 'checkbox', label: 'Testhőmérséklet < 35°C vagy > 40°C', points: 15 },
        { type: 'checkbox', label: 'Pulzus ≥ 125/perc', points: 10 },
        { type: 'header', label: 'Laboratóriumi és Képalkotó leletek' },
        { type: 'checkbox', label: 'Artériás pH < 7.35', points: 30 },
        { type: 'checkbox', label: 'BUN > 10.7 mmol/L (Urea > 30 mg/dL)', points: 20 },
        { type: 'checkbox', label: 'Nátrium < 130 mmol/L', points: 20 },
        { type: 'checkbox', label: 'Glükóz > 13.9 mmol/L', points: 10 },
        { type: 'checkbox', label: 'Hematokrit < 30%', points: 10 },
        { type: 'checkbox', label: 'PaO2 < 60 Hgmm (vagy SpO2 < 90%)', points: 10 },
        { type: 'checkbox', label: 'Pleuralis folyadék', points: 10 }
      ],
      interpret: (score) => {
        if (score <= 50) return { risk: 'I. Osztály (≤50)', action: 'Alacsony rizikó (0.1% mortalitás). Otthoni kezelés.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 70) return { risk: 'II. Osztály (51-70)', action: 'Alacsony rizikó (0.6% mortalitás). Otthoni kezelés.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 90) return { risk: 'III. Osztály (71-90)', action: 'Közepes rizikó (0.9-2.8%). Rövid kórházi megfigyelés vagy otthoni.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        if (score <= 130) return { risk: 'IV. Osztály (91-130)', action: 'Magas rizikó (8-9%). Kórházi felvétel.', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
        return { risk: 'V. Osztály (>130)', action: 'Nagyon magas rizikó (27-30%). Kórházi/ITO felvétel.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'APACHE II': {
      title: 'APACHE II Score',
      description: 'Súlyossági pontrendszer intenzív osztályos betegeknél (Acute Physiology and Chronic Health Evaluation II).',
      items: [
        { type: 'header', label: 'Életkor' },
        { type: 'radio', name: 'ap_age', label: '≤ 44', points: 0, checked: true },
        { type: 'radio', name: 'ap_age', label: '45 - 54', points: 2 },
        { type: 'radio', name: 'ap_age', label: '55 - 64', points: 3 },
        { type: 'radio', name: 'ap_age', label: '65 - 74', points: 5 },
        { type: 'radio', name: 'ap_age', label: '≥ 75', points: 6 },
        { type: 'header', label: 'Krónikus Egészségi Állapot' },
        { type: 'checkbox', label: 'Súlyos szervelégtelenség (máj, szív, légző, vese) vagy immunszuppresszió', points: 5 },
        { type: 'checkbox', label: 'Sürgősségi műtét után vagy nem műtéti beteg', points: 0 }, 
        { type: 'header', label: 'Akut Fiziológiai Paraméterek (Legrosszabb érték az első 24 órában)' },
        { type: 'header', label: 'Hőmérséklet (°C)' },
        { type: 'radio', name: 'ap_temp', label: '36 - 38.4', points: 0, checked: true },
        { type: 'radio', name: 'ap_temp', label: '34 - 35.9 vagy 38.5 - 38.9', points: 1 },
        { type: 'radio', name: 'ap_temp', label: '32 - 33.9', points: 2 },
        { type: 'radio', name: 'ap_temp', label: '30 - 31.9 vagy 39 - 40.9', points: 3 },
        { type: 'radio', name: 'ap_temp', label: '≤ 29.9 vagy ≥ 41', points: 4 },
        { type: 'header', label: 'MAP (Középnyomás Hgmm)' },
        { type: 'radio', name: 'ap_map', label: '70 - 109', points: 0, checked: true },
        { type: 'radio', name: 'ap_map', label: '110 - 129 vagy 50 - 69', points: 2 },
        { type: 'radio', name: 'ap_map', label: '130 - 159', points: 3 },
        { type: 'radio', name: 'ap_map', label: '≥ 160 vagy ≤ 49', points: 4 },
        { type: 'header', label: 'Pulzus (/perc)' },
        { type: 'radio', name: 'ap_hr', label: '70 - 109', points: 0, checked: true },
        { type: 'radio', name: 'ap_hr', label: '55 - 69 vagy 110 - 139', points: 2 },
        { type: 'radio', name: 'ap_hr', label: '40 - 54 vagy 140 - 179', points: 3 },
        { type: 'radio', name: 'ap_hr', label: '≤ 39 vagy ≥ 180', points: 4 },
        { type: 'header', label: 'Légzésszám (/perc)' },
        { type: 'radio', name: 'ap_rr', label: '12 - 24', points: 0, checked: true },
        { type: 'radio', name: 'ap_rr', label: '10 - 11 vagy 25 - 34', points: 1 },
        { type: 'radio', name: 'ap_rr', label: '6 - 9', points: 2 },
        { type: 'radio', name: 'ap_rr', label: '35 - 49', points: 3 },
        { type: 'radio', name: 'ap_rr', label: '≤ 5 vagy ≥ 50', points: 4 },
        { type: 'header', label: 'Oxigenizáció (AaDO2 vagy PaO2)' },
        { type: 'radio', name: 'ap_ox', label: 'Normál', points: 0, checked: true },
        { type: 'radio', name: 'ap_ox', label: 'Enyhe romlás', points: 1 },
        { type: 'radio', name: 'ap_ox', label: 'Közepes romlás', points: 3 },
        { type: 'radio', name: 'ap_ox', label: 'Súlyos romlás', points: 4 },
        { type: 'header', label: 'Artériás pH' },
        { type: 'radio', name: 'ap_ph', label: '7.33 - 7.49', points: 0, checked: true },
        { type: 'radio', name: 'ap_ph', label: 'Eltérés', points: 2 },
        { type: 'radio', name: 'ap_ph', label: 'Jelentős eltérés (<7.15 vagy >7.7)', points: 4 },
        { type: 'header', label: 'Szérum Nátrium (mmol/L)' },
        { type: 'radio', name: 'ap_na', label: '130 - 149', points: 0, checked: true },
        { type: 'radio', name: 'ap_na', label: 'Eltérés', points: 1 },
        { type: 'radio', name: 'ap_na', label: 'Jelentős eltérés', points: 4 },
        { type: 'header', label: 'Szérum Kálium (mmol/L)' },
        { type: 'radio', name: 'ap_k', label: '3.5 - 5.4', points: 0, checked: true },
        { type: 'radio', name: 'ap_k', label: 'Eltérés', points: 1 },
        { type: 'radio', name: 'ap_k', label: 'Jelentős eltérés', points: 4 },
        { type: 'header', label: 'Szérum Kreatinin (mg/dL)' },
        { type: 'radio', name: 'ap_cr', label: '0.6 - 1.4', points: 0, checked: true },
        { type: 'radio', name: 'ap_cr', label: '< 0.6 vagy 1.5 - 1.9', points: 2 },
        { type: 'radio', name: 'ap_cr', label: '2.0 - 3.4', points: 3 },
        { type: 'radio', name: 'ap_cr', label: '≥ 3.5', points: 4 },
        { type: 'checkbox', label: 'Akut veseelégtelenség (Kreatinin pontszám duplázódik)', points: 0 }, 
        { type: 'header', label: 'Hematokrit (%)' },
        { type: 'radio', name: 'ap_hct', label: '30 - 45.9', points: 0, checked: true },
        { type: 'radio', name: 'ap_hct', label: 'Eltérés', points: 2 },
        { type: 'radio', name: 'ap_hct', label: 'Jelentős eltérés', points: 4 },
        { type: 'header', label: 'Fehérvérsejt (G/L)' },
        { type: 'radio', name: 'ap_wbc', label: '3 - 14.9', points: 0, checked: true },
        { type: 'radio', name: 'ap_wbc', label: 'Eltérés', points: 2 },
        { type: 'radio', name: 'ap_wbc', label: 'Jelentős eltérés', points: 4 },
        { type: 'header', label: 'Glasgow Coma Scale (GCS)' },
        { type: 'number', label: 'GCS pontszám (15 - GCS = pont)', points: -1, min: 3, max: 15, value: 15 } 
      ],
      interpret: (score) => {
        return { risk: `APACHE II Score: ${score + 15}`, action: 'A mortalitás a pontszámmal korrelál (pl. 25 pont ~50% halálozás).', color: 'text-slate-800', bg: 'bg-slate-50', border: 'border-slate-200' };
      }
    },
    'LRINEC': {
      title: 'LRINEC Score (Necrotizing Fasciitis)',
      description: 'Laboratóriumi kockázati indikátor nekrotizáló fasciitisre.',
      items: [
        { type: 'header', label: 'CRP (mg/L)' },
        { type: 'radio', name: 'lrinec_crp', label: '< 150', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_crp', label: '≥ 150', points: 4 },
        { type: 'header', label: 'Fehérvérsejt szám (G/L)' },
        { type: 'radio', name: 'lrinec_wbc', label: '< 15', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_wbc', label: '15 - 25', points: 1 },
        { type: 'radio', name: 'lrinec_wbc', label: '> 25', points: 2 },
        { type: 'header', label: 'Hemoglobin (g/dL)' },
        { type: 'radio', name: 'lrinec_hb', label: '> 13.5', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_hb', label: '11 - 13.5', points: 1 },
        { type: 'radio', name: 'lrinec_hb', label: '< 11', points: 2 },
        { type: 'header', label: 'Nátrium (mmol/L)' },
        { type: 'radio', name: 'lrinec_na', label: '≥ 135', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_na', label: '< 135', points: 2 },
        { type: 'header', label: 'Kreatinin (µmol/L)' },
        { type: 'radio', name: 'lrinec_cre', label: '≤ 141', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_cre', label: '> 141', points: 2 },
        { type: 'header', label: 'Glükóz (mmol/L)' },
        { type: 'radio', name: 'lrinec_glu', label: '≤ 10', points: 0, checked: true },
        { type: 'radio', name: 'lrinec_glu', label: '> 10', points: 1 }
      ],
      interpret: (score) => {
        if (score <= 5) return { risk: 'Alacsony kockázat (<50%)', action: 'Monitorozás.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 7) return { risk: 'Közepes kockázat (50-75%)', action: 'Szoros megfigyelés, sebészi konzílium.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'Magas kockázat (>75%)', action: 'Azonnali sebészi exploráció!', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'Centor': {
      title: 'Centor Score (McIsaac) - Strep A',
      description: 'Streptococcus pyogenes pharyngitis valószínűsége.',
      items: [
        { type: 'checkbox', label: 'Láz > 38°C', points: 1 },
        { type: 'checkbox', label: 'Köhögés hiánya', points: 1 },
        { type: 'checkbox', label: 'Érzékeny elülső nyaki nyirokcsomók', points: 1 },
        { type: 'checkbox', label: 'Tonsilla duzzanat vagy exsudatum', points: 1 },
        { type: 'header', label: 'Életkor' },
        { type: 'radio', name: 'centor_age', label: '3 - 14 év', points: 1, checked: true },
        { type: 'radio', name: 'centor_age', label: '15 - 44 év', points: 0 },
        { type: 'radio', name: 'centor_age', label: '≥ 45 év', points: -1 }
      ],
      interpret: (score) => {
        if (score <= 1) return { risk: 'Alacsony kockázat (<10%)', action: 'Antibiotikum nem javasolt.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 3) return { risk: 'Közepes kockázat (15-30%)', action: 'Tenyésztés vagy gyorsteszt javasolt. Pozitív esetben AB.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
        return { risk: 'Magas kockázat (>50%)', action: 'Empirikus antibiotikum adható vagy tesztelés.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'FGSI': {
        title: 'FGSI (Fournier\'s Gangrene Severity Index)',
        description: 'Fournier gangréna súlyosságának és mortalitásának becslése.',
        items: [
            { type: 'header', label: 'Hőmérséklet (°C)' },
            { type: 'radio', name: 'fgsi_temp', label: '36 - 38.4', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_temp', label: '38.5 - 38.9 vagy 34 - 35.9', points: 1 },
            { type: 'radio', name: 'fgsi_temp', label: '32 - 33.9', points: 2 },
            { type: 'radio', name: 'fgsi_temp', label: '30 - 31.9 vagy 39 - 40.9', points: 3 },
            { type: 'radio', name: 'fgsi_temp', label: '< 30 vagy > 41', points: 4 },
            { type: 'header', label: 'Pulzus (/perc)' },
            { type: 'radio', name: 'fgsi_hr', label: '70 - 109', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_hr', label: '110 - 139 vagy 55 - 69', points: 2 },
            { type: 'radio', name: 'fgsi_hr', label: '140 - 179 vagy 40 - 54', points: 3 },
            { type: 'radio', name: 'fgsi_hr', label: '> 180 vagy < 40', points: 4 },
            { type: 'header', label: 'Légzésszám (/perc)' },
            { type: 'radio', name: 'fgsi_rr', label: '12 - 24', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_rr', label: '25 - 34 vagy 10 - 11', points: 1 },
            { type: 'radio', name: 'fgsi_rr', label: '35 - 49 vagy 6 - 9', points: 2 },
            { type: 'radio', name: 'fgsi_rr', label: '> 50 vagy < 6', points: 4 },
            { type: 'header', label: 'Szérum Nátrium (mmol/L)' },
            { type: 'radio', name: 'fgsi_na', label: '130 - 149', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_na', label: '150 - 154 vagy 120 - 129', points: 2 },
            { type: 'radio', name: 'fgsi_na', label: '155 - 179 vagy 111 - 119', points: 3 },
            { type: 'radio', name: 'fgsi_na', label: '> 180 vagy < 110', points: 4 },
            { type: 'header', label: 'Szérum Kálium (mmol/L)' },
            { type: 'radio', name: 'fgsi_k', label: '3.5 - 5.4', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_k', label: '5.5 - 5.9 vagy 3.0 - 3.4', points: 1 },
            { type: 'radio', name: 'fgsi_k', label: '6.0 - 6.9 vagy 2.5 - 2.9', points: 2 },
            { type: 'radio', name: 'fgsi_k', label: '> 7.0 vagy < 2.5', points: 4 },
            { type: 'header', label: 'Szérum Kreatinin (µmol/L)' },
            { type: 'radio', name: 'fgsi_cr', label: '53 - 124', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_cr', label: '125 - 167 vagy < 53', points: 2 },
            { type: 'radio', name: 'fgsi_cr', label: '168 - 309', points: 3 },
            { type: 'radio', name: 'fgsi_cr', label: '> 310', points: 4 },
            { type: 'header', label: 'Hematokrit (%)' },
            { type: 'radio', name: 'fgsi_hct', label: '30 - 45.9', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_hct', label: '46 - 49.9 vagy 20 - 29.9', points: 2 },
            { type: 'radio', name: 'fgsi_hct', label: '> 50 vagy < 20', points: 4 },
            { type: 'header', label: 'Fehérvérsejt (x10^9/L)' },
            { type: 'radio', name: 'fgsi_wbc', label: '3 - 14.9', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_wbc', label: '15 - 19.9 vagy 1 - 2.9', points: 2 },
            { type: 'radio', name: 'fgsi_wbc', label: '20 - 39.9 vagy < 1', points: 4 },
            { type: 'header', label: 'Szérum Bikarbonát (mmol/L)' },
            { type: 'radio', name: 'fgsi_hco3', label: '22 - 31.9', points: 0, checked: true },
            { type: 'radio', name: 'fgsi_hco3', label: '32 - 40.9 vagy 18 - 21.9', points: 1 },
            { type: 'radio', name: 'fgsi_hco3', label: '41 - 51.9 vagy 15 - 17.9', points: 2 },
            { type: 'radio', name: 'fgsi_hco3', label: '> 52 vagy < 15', points: 4 }
        ],
        interpret: (score) => {
            if (score <= 9) return { risk: 'Mortalitás valószínűsége < 4%', action: 'Jó prognózis.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
            return { risk: 'Mortalitás valószínűsége > 75%', action: 'Rossz prognózis, agresszív kezelés szükséges.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        }
    },
    'GCS': {
        title: 'Glasgow Coma Scale (GCS)',
        description: 'Tudatállapot megítélése.',
        items: [
            { type: 'header', label: 'Szemnyitás (E)' },
            { type: 'radio', name: 'gcs_e', label: 'Spontán (4)', points: 4, checked: true },
            { type: 'radio', name: 'gcs_e', label: 'Felszólításra (3)', points: 3 },
            { type: 'radio', name: 'gcs_e', label: 'Fájdalomra (2)', points: 2 },
            { type: 'radio', name: 'gcs_e', label: 'Nincs (1)', points: 1 },
            { type: 'header', label: 'Verbális válasz (V)' },
            { type: 'radio', name: 'gcs_v', label: 'Orientált (5)', points: 5, checked: true },
            { type: 'radio', name: 'gcs_v', label: 'Zavart (4)', points: 4 },
            { type: 'radio', name: 'gcs_v', label: 'Inadekvát szavak (3)', points: 3 },
            { type: 'radio', name: 'gcs_v', label: 'Érthetetlen hangok (2)', points: 2 },
            { type: 'radio', name: 'gcs_v', label: 'Nincs (1)', points: 1 },
            { type: 'header', label: 'Motoros válasz (M)' },
            { type: 'radio', name: 'gcs_m', label: 'Utasítást követ (6)', points: 6, checked: true },
            { type: 'radio', name: 'gcs_m', label: 'Fájdalmat lokalizál (5)', points: 5 },
            { type: 'radio', name: 'gcs_m', label: 'Fájdalomra elhúz (4)', points: 4 },
            { type: 'radio', name: 'gcs_m', label: 'Flexiós tónusfokozódás (3)', points: 3 },
            { type: 'radio', name: 'gcs_m', label: 'Extenziós tónusfokozódás (2)', points: 2 },
            { type: 'radio', name: 'gcs_m', label: 'Nincs (1)', points: 1 }
        ],
        interpret: (score) => {
            if (score >= 13) return { risk: 'Enyhe agysérülés (13-15)', action: 'Megfigyelés.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
            if (score >= 9) return { risk: 'Középsúlyos agysérülés (9-12)', action: 'Szoros megfigyelés, CT.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
            return { risk: 'Súlyos agysérülés (≤8)', action: 'Légútbiztosítás (intubáció), intenzív osztály.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        }
    },
    'Candida': {
        title: 'Candida Score',
        description: 'Invazív candidiasis kockázatának becslése kritikus állapotú betegeknél.',
        items: [
            { type: 'checkbox', label: 'Parenterális táplálás', points: 1 },
            { type: 'checkbox', label: 'Műtét', points: 1 },
            { type: 'checkbox', label: 'Multifokális Candida kolonizáció', points: 1 },
            { type: 'checkbox', label: 'Súlyos szepszis', points: 2 }
        ],
        interpret: (score) => {
            if (score < 3) return { risk: 'Alacsony kockázat (<5%)', action: 'Profilaxis nem feltétlenül szükséges.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
            return { risk: 'Magas kockázat (>20%)', action: 'Empirikus antifungális terápia megfontolandó.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        }
    }
  };

// State
let currentLang = localStorage.getItem('infectologia_lang') || 'hu';
let currentCategory = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    registerServiceWorker();
});

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('Service Worker Registered'))
            .catch(err => console.error('SW Registration failed', err));
    }
}

async function initApp() {
    // 1. Setup basic UI structure
    const app = document.getElementById('app') || document.body;
    
    // Csak akkor hozzuk létre a keretet, ha még nincs (pl. statikus HTML esetén)
    if (!document.getElementById('app-container')) {
        app.innerHTML = `
            <div id="app-container" class="bg-gray-50 min-h-screen font-sans">
                <header class="sticky top-0 z-50 bg-white shadow-md p-4">
                    <div class="max-w-4xl mx-auto">
                        <div class="flex justify-between items-center mb-4">
                            <h1 class="text-2xl font-bold text-blue-800 cursor-pointer flex items-center gap-2" onclick="renderHome()">
                                <span>🦠</span> Infectologia
                            </h1>
                            <select id="lang-selector" class="p-2 border rounded bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none">
                                ${Object.entries(AVAILABLE_LANGUAGES).map(([code, name]) => 
                                    `<option value="${code}" ${code === currentLang ? 'selected' : ''}>${name}</option>`
                                ).join('')}
                            </select>
                        </div>
                        <div class="relative">
                            <input type="text" id="search-input" placeholder="${getSearchPlaceholder()}" 
                                   class="w-full p-3 pl-10 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                            <span class="absolute left-3 top-3 text-gray-400">🔍</span>
                        </div>
                    </div>
                </header>
                <main id="main-content" class="p-4 max-w-4xl mx-auto pb-20"></main>
                <div id="loading" class="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-50 transition-opacity duration-300">
                    <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
                    <div class="text-gray-600 font-medium">Adatok betöltése...</div>
                </div>
                <!-- Score Modal -->
                <div id="score-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 opacity-0 transition-opacity duration-300" aria-labelledby="modal-title" role="dialog" aria-modal="true" onclick="if(event.target === this) closeScoreModal()">
                    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh] transform scale-95 transition-transform duration-300" id="score-modal-panel">
                        <div class="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <h3 id="score-modal-title" class="font-semibold text-slate-800">Score Kalkulátor</h3>
                            <button onclick="closeScoreModal()" class="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-200">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            </button>
                        </div>
                        <div id="score-modal-content" class="p-6 overflow-y-auto"></div>
                        <div class="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
                            <button onclick="closeScoreModal()" class="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium">Bezárás</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // 2. Event Listeners
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            handleSearch(e.target.value);
        });
    }

    // 3. Load Data
    await loadData();
}

async function loadData() {
    showLoading(true);
    
    // Reset diseases object to avoid mixing languages
    window.diseases = {};
    
    // Load metadata first if needed (assuming it's loaded via script tag or we could load it here)
    // We assume metadata.js is loaded in index.html or we can load it:
    // await loadScript('metadata.js'); 

    // Load data scripts based on language
    const scriptPromises = DATA_MODULES.map(module => {
        const suffix = currentLang === 'hu' ? '' : `_${currentLang}`;
        const src = `${module}${suffix}.js`;
        return loadScript(src);
    });

    try {
        await Promise.all(scriptPromises);
        renderHome();
    } catch (error) {
        console.error("Error loading data:", error);
        const container = document.getElementById('main-content');
        if (container) {
            container.innerHTML = `
                <div class="text-center p-10">
                    <div class="text-red-500 text-xl mb-2">⚠️ Hiba az adatok betöltésekor</div>
                    <button onclick="location.reload()" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Újratöltés</button>
                </div>`;
        }
    } finally {
        showLoading(false);
    }
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        // Check if script is already loaded to avoid duplicates? 
        // No, we want to re-execute to populate window.diseases with the correct language
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = () => {
            console.warn(`Failed to load ${src}, trying fallback to HU if not HU`);
            if (src.includes('_') && currentLang !== 'hu') {
                // Fallback to HU if translation missing
                const fallbackSrc = src.split('_')[0] + '.js';
                loadScript(fallbackSrc).then(resolve).catch(reject);
            } else {
                reject(new Error(`Failed to load ${src}`));
            }
        };
        document.body.appendChild(script);
    });
}

function setLanguage(lang) {
    localStorage.setItem('infectologia_lang', lang);
    location.reload(); // Reload is the cleanest way to reset all scripts and global state
}

function renderHome() {
    currentCategory = null;
    const container = document.getElementById('main-content');
    if (!container) return;
    
    container.innerHTML = '';
    
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in';

    const sortedEntries = Object.entries(window.diseases).sort((a, b) => {
        const indexA = CATEGORY_ORDER.indexOf(a[0]);
        const indexB = CATEGORY_ORDER.indexOf(b[0]);
        
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return 0;
    });

    sortedEntries.forEach(([key, category]) => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border-l-4 transform hover:-translate-y-1';
        card.style.borderLeftColor = category.color || '#3b82f6';
        card.onclick = () => renderCategory(key);
        
        const diseaseCount = category.diseases ? category.diseases.length : 0;
        
        card.innerHTML = `
            <div class="flex items-center space-x-4">
                <div class="text-4xl bg-gray-50 p-3 rounded-full">${category.icon || '📁'}</div>
                <div>
                    <h2 class="text-xl font-bold text-gray-800">${category.name}</h2>
                    <p class="text-gray-500 text-sm flex items-center gap-1">
                        <span>📄</span> ${diseaseCount} ${getLabel('entries')}
                    </p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    container.appendChild(grid);
}

function renderCategory(key) {
    currentCategory = key;
    const category = window.diseases[key];
    const container = document.getElementById('main-content');
    
    let html = `
        <button onclick="renderHome()" class="mb-6 flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
            <span class="mr-1">←</span> ${getLabel('back')}
        </button>
        
        <div class="bg-white rounded-xl shadow-sm p-6 mb-6 border-t-4 flex items-center gap-4" style="border-top-color: ${category.color}">
            <span class="text-4xl">${category.icon}</span>
            <h1 class="text-3xl font-bold text-gray-900">${category.name}</h1>
        </div>
    `;

    // ** RENDER TABLES (Differential Diagnosis) **
    // Ez a rész kezeli a kért táblázatokat
    if (category.tables && category.tables.length > 0) {
        category.tables.forEach((table, index) => {
            const tableId = `table-${index}`;
            html += `
                <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-6 border border-gray-100 transition-all hover:shadow-md">
                    <div class="p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center group" 
                         onclick="toggleTable('${tableId}')">
                        <h3 class="text-xl font-bold text-gray-800 flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                            <span>📊</span> ${table.title}
                        </h3>
                        <span class="text-gray-400 transform transition-transform duration-200 bg-gray-100 rounded-full p-1" id="icon-${tableId}">▼</span>
                    </div>
                    <div id="content-${tableId}" class="hidden border-t border-gray-100 bg-gray-50 p-0 animate-slide-down">
                        <div class="overflow-x-auto">
                            <table class="min-w-full text-left text-sm border-collapse">
                                <thead class="bg-gray-100">
                                    <tr>
                                        ${table.headers.map(h => `<th class="px-4 py-3 font-semibold text-gray-700 border-b whitespace-nowrap">${h}</th>`).join('')}
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    ${table.rows.map(row => `
                                        <tr class="hover:bg-blue-50 transition-colors">
                                            ${row.map(cell => `<td class="px-4 py-3 text-gray-600">${cell}</td>`).join('')}
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Render Diseases List
    html += `<div class="space-y-4">`;
    if (category.diseases) {
        category.diseases.forEach((disease, index) => {
            if (disease.isHeader) {
                html += `<h2 class="text-xl font-bold text-gray-800 mt-8 mb-3 pt-2 border-t-2" style="border-color: ${disease.color || category.color}">${disease.title}</h2>`;
            } else if (disease.table) {
                const tableId = `table-${disease.id || index}`;
                html += `
                <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-6 border border-gray-100 transition-all hover:shadow-md">
                    <div class="p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center group" 
                         onclick="toggleTable('${tableId}')">
                        <h3 class="text-xl font-bold text-gray-800 flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                            <span>📊</span> ${disease.name}
                        </h3>
                        <span class="text-gray-400 transform transition-transform duration-200 bg-gray-100 rounded-full p-1" id="icon-${tableId}">▼</span>
                    </div>
                    <div id="content-${tableId}" class="hidden border-t border-gray-100 bg-gray-50 p-0 animate-slide-down">
                        ${renderDiseaseDetails(disease)}
                    </div>
                </div>
            `;
            } else {
                html += `
                    <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md">
                        <div class="p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center group" 
                             onclick="toggleDisease('${disease.id}')">
                            <h3 class="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors">${disease.name}</h3>
                            <span class="text-gray-400 transform transition-transform duration-200 bg-gray-100 rounded-full p-1" id="icon-${disease.id}">▼</span>
                        </div>
                        <div id="content-${disease.id}" class="hidden border-t border-gray-100 bg-gray-50 p-5 animate-slide-down">
                            ${renderDiseaseDetails(disease)}
                        </div>
                    </div>
                `;
            }
        });
    }
    html += `</div>`;

    container.innerHTML = html;
    window.scrollTo(0, 0);
}

function renderDiseaseDetails(d) {
    // Ha az elem egy táblázat (pl. differenciáldiagnosztika)
    if (d.table) {
        return `
            <div class="overflow-x-auto">
                <table class="min-w-full text-left text-sm border-collapse">
                    <thead class="bg-gray-100">
                        <tr>
                            ${d.table.headers.map(h => `<th class="px-4 py-3 font-semibold text-gray-700 border-b whitespace-nowrap">${h}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        ${d.table.rows.map(row => `
                            <tr class="hover:bg-blue-50 transition-colors">
                                ${row.map(cell => `<td class="px-4 py-3 text-gray-600">${cell}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    // Helper to render a section card
    const renderSection = (title, content, icon = '') => {
        if (!content || content.trim() === '') return '';
        return `
        <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 class="font-bold text-gray-800 mb-3 text-lg border-b border-gray-200 pb-2 flex items-center gap-2">
                ${icon} ${title}
            </h3>
            <div class="text-gray-700 leading-relaxed space-y-3 text-sm">
                ${content}
            </div>
        </div>`;
    };

    // Pathogen
    const pathogenHtml = d.pathogen ? `
        <div class="flex flex-wrap items-center gap-2 mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <span class="text-blue-700 font-bold flex items-center gap-1">🦠 ${d.pathogen.type}:</span>
            <span class="text-gray-900 font-medium text-lg">${d.pathogen.name}</span>
            ${d.pathogen.gram ? `<span class="text-xs bg-white text-blue-600 px-2 py-1 rounded border border-blue-200 font-mono">${d.pathogen.gram}</span>` : ''}
            ${d.pathogen.shape ? `<span class="text-xs bg-white text-gray-500 px-2 py-1 rounded border border-gray-200">${d.pathogen.shape}</span>` : ''}
        </div>
    ` : '';

    // All sections combined
    let allContent = '';

    // Epidemiology
    const epi = d.epidemiology;
    if (epi) {
        const epiContent = [
            epi.incidence && `<div><strong>${getLabel('incidence')}:</strong> ${epi.incidence}</div>`,
            epi.risk_groups && `<div><strong>${getLabel('risk_groups')}:</strong> ${epi.risk_groups.join(', ')}</div>`,
            epi.seasonality && `<div><strong>${getLabel('seasonality')}:</strong> ${epi.seasonality}</div>`,
            epi.transmission && `<div><strong>${getLabel('transmission')}:</strong> ${epi.transmission}</div>`
        ].filter(Boolean).join('');
        allContent += renderSection(getLabel('epidemiology'), epiContent, '🌍');
    }

    // Pathomechanism
    const patho = d.pathomechanism;
    if (patho) {
        const pathoContent = [
            patho.steps && `<div class="space-y-2">${patho.steps.map(s => `<p>${s}</p>`).join('')}</div>`,
            patho.virulence_factors && `<div class="mt-3 pt-3 border-t border-gray-100"><strong>${getLabel('virulence_factors')}:</strong> ${patho.virulence_factors.join(', ')}</div>`
        ].filter(Boolean).join('');
        allContent += renderSection(getLabel('pathomechanism'), pathoContent, '⚙️');
    }

    // Clinical
    const clin = d.clinical;
    if (clin) {
        const symptomsContent = clin.symptoms ? `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${clin.symptoms.map(s => `
                    <div class="bg-gray-50 p-3 rounded-lg border-l-4 shadow-sm ${s.severity === 'severe' ? 'border-red-500' : (s.severity === 'moderate' ? 'border-yellow-500' : 'border-green-500')}">
                        <div class="font-bold text-gray-800">${s.name}</div>
                        <div class="text-sm text-gray-600 mt-1">${s.description}</div>
                    </div>
                `).join('')}
            </div>` : '';
        const clinContent = [
            clin.incubation && `<div><strong>${getLabel('incubation')}:</strong> ${clin.incubation}</div>`,
            clin.onset && `<div><strong>${getLabel('onset')}:</strong> ${clin.onset}</div>`,
            symptomsContent,
            clin.physical_exam && `<div class="mt-3 pt-3 border-t border-gray-100"><strong>${getLabel('physical_exam')}:</strong><ul class="list-disc list-inside mt-1">${clin.physical_exam.map(i => `<li>${i}</li>`).join('')}</ul></div>`,
            clin.complications && `<div class="mt-3 pt-3 border-t border-gray-100"><strong>${getLabel('complications')}:</strong><ul class="list-disc list-inside mt-1">${clin.complications.map(i => `<li>${i}</li>`).join('')}</ul></div>`
        ].filter(Boolean).join('<div class="my-2"></div>');
        allContent += renderSection(getLabel('clinical'), clinContent, '🤒');
    }

    // Diagnostics
    const diag = d.diagnostics;
    if (diag) {
        const diagContent = [
            diag.laboratory && `<div><strong>${getLabel('laboratory')}:</strong><ul class="list-disc list-inside mt-1">${diag.laboratory.map(l => `<li><span class="font-semibold">${l.test}:</span> ${l.finding} <span class="text-gray-500 text-xs">(${l.interpretation})</span></li>`).join('')}</ul></div>`,
            diag.imaging && `<div><strong>${getLabel('imaging')}:</strong><ul class="list-disc list-inside mt-1">${diag.imaging.map(i => `<li><span class="font-semibold">${i.modality}:</span> ${i.finding} <span class="text-purple-600 text-xs">→ ${i.significance}</span></li>`).join('')}</ul></div>`,
            diag.microbiology && `<div><strong>${getLabel('microbiology')}:</strong><ul class="list-disc list-inside mt-1">${diag.microbiology.map(m => `<li><span class="font-semibold">${m.test}:</span> ${m.finding} <span class="text-blue-600 text-xs">→ ${m.significance}</span></li>`).join('')}</ul></div>`,
            diag.criteria && `<div><strong>${getLabel('criteria')}:</strong>${diag.criteria.map(c => `<div class="mt-2"><p class="font-semibold">${c.name}</p><ul class="list-disc list-inside ml-4">${c.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('')}</div>`,
            diag.scores && `<div><strong>${getLabel('scores')}:</strong> ${diag.scores.join(', ')}</div>`,
            (d.calculators || (diag && diag.calculators)) ? renderCalculators(d.calculators || diag.calculators) : ''
        ].filter(Boolean).join('<div class="my-4 border-t border-dashed"></div>');
        allContent += renderSection(getLabel('diagnostics'), diagContent, '🔬');
    }

    // Differential Diagnosis
    const diff = d.differential;
    if (diff) {
        const diffContent = `<ul class="list-disc list-inside space-y-2">${diff.map(item => `<li><strong>${item.disease}:</strong> ${item.distinguishing}</li>`).join('')}</ul>`;
        allContent += renderSection(getLabel('differential_diagnosis'), diffContent, '🤔');
    }

    // Symptoms
    // Therapy
    const therapy = d.therapy;
    if (therapy) {
        let empiricalHtml = '';
        if (d.therapy.empirical) {
            const renderDrugList = (list) => list.map(drug => `
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 last:border-0 py-3 gap-2">
                    <div class="flex-1">
                        <div class="font-bold text-gray-800 flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                            ${drug.drug}
                        </div>
                        <div class="text-xs text-gray-500 ml-4">${drug.note || ''}</div>
                    </div>
                    <div class="text-left sm:text-right text-sm bg-gray-50 px-3 py-1 rounded">
                        <div class="font-mono text-blue-700 font-bold">${drug.dose}</div>
                        <div class="text-gray-500 text-xs">${drug.duration}</div>
                    </div>
                </div>
            `).join('');

            if (d.therapy.empirical.outpatient && Array.isArray(d.therapy.empirical.outpatient)) {
                empiricalHtml += `<div class="mb-4">
                    <div class="text-sm font-bold text-green-700 mb-2 flex items-center gap-1">🏠 Ambulant / Outpatient</div>
                    <div class="bg-white rounded-lg border border-gray-200 p-1">${renderDrugList(d.therapy.empirical.outpatient)}</div>
                </div>`;
            }
            if (d.therapy.empirical.inpatient) {
                empiricalHtml += `<div class="mb-4">
                    <div class="text-sm font-bold text-blue-700 mb-2 flex items-center gap-1">🏥 Inpatient</div>
                    <div class="bg-white rounded-lg border border-gray-200 p-1">${renderDrugList(d.therapy.empirical.inpatient)}</div>
                </div>`;
            }
            // Handle object structure (e.g. Thorax.js)
            if (!d.therapy.empirical.outpatient && !Array.isArray(d.therapy.empirical)) {
                 Object.values(d.therapy.empirical).forEach(group => {
                     if(group.drugs) {
                        empiricalHtml += `<div class="mb-4">
                            <div class="text-sm font-bold text-gray-700 mb-2">${group.title || 'Therapy'}</div>
                            <div class="bg-white rounded-lg border border-gray-200 p-1">${renderDrugList(group.drugs)}</div>
                        </div>`;
                     }
                 });
            }
        }

        const therapyContent = [
            empiricalHtml,
            therapy.targeted && `<div><strong>${getLabel('targeted')}:</strong> ${therapy.targeted}</div>`,
            therapy.supportive && `<div><strong>${getLabel('supportive')}:</strong><ul class="list-disc list-inside mt-1">${therapy.supportive.map(i => `<li>${i}</li>`).join('')}</ul></div>`,
            therapy.prevention && `<div><strong>${getLabel('prevention')}:</strong><ul class="list-disc list-inside mt-1">${therapy.prevention.map(i => `<li>${i}</li>`).join('')}</ul></div>`
        ].filter(Boolean).join('<div class="my-4 border-t border-dashed"></div>');
        allContent += renderSection(getLabel('therapy'), therapyContent, '💊');
    }

    // Prognosis
    const prog = d.prognosis;
    if (prog) {
        let scoresHtml = '';
        if (d.prognosis.prognostic_scores && d.prognosis.prognostic_scores.length && d.prognosis.prognostic_scores[0] !== 'Nincs' && d.prognosis.prognostic_scores[0] !== 'None' && d.prognosis.prognostic_scores[0] !== 'Keine') {
             scoresHtml = d.prognosis.prognostic_scores.map(score => {
                const key = Object.keys(scoreCalculators).find(k => score.includes(k));
                if (key) {
                    return `<button onclick="openScoreCalculator('${key}')" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors border border-blue-200 cursor-pointer">${score}</button>`;
                }
                return `<span>${score}</span>`;
             }).join(', ');
             scoresHtml = `<div class="flex gap-2 flex-wrap items-center"><strong>${getLabel('prog_scores')}:</strong> <div class="flex flex-wrap gap-2">${scoresHtml}</div></div>`;
        }

        const progContent = [
            prog.mortality && `<div><strong>${getLabel('mortality')}:</strong> ${prog.mortality}</div>`,
            scoresHtml,
            prog.factors && `<div><strong>${getLabel('factors')}:</strong> ${prog.factors}</div>`
        ].filter(Boolean).join('');
        allContent += renderSection(getLabel('prognosis'), progContent, '🔮');
    }

    return `
        ${pathogenHtml}
        <div class="space-y-4">
            ${allContent}
        </div>
    `;
}

function renderCalculators(calculators) {
    return calculators.map((calc, index) => {
        const calcId = `calc-${index}-${Date.now()}`;
        const itemsHtml = calc.items.map((item, i) => `
            <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <label for="${calcId}-item-${i}" class="text-gray-700 flex-1 cursor-pointer select-none">${item.label}</label>
                <input type="checkbox" id="${calcId}-item-${i}" value="${item.points}" class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" onchange="updateCalculator('${calcId}')">
            </div>
        `).join('');

        const rangesJson = JSON.stringify(calc.interpretation).replace(/"/g, '&quot;');

        return `
            <div class="mb-5 bg-white p-4 rounded-xl border border-gray-200 shadow-sm calculator-container" id="${calcId}" data-ranges="${rangesJson}">
                <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    🧮 ${calc.name}
                </h4>
                <div class="space-y-1 mb-4">
                    ${itemsHtml}
                </div>
                <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div class="flex justify-between items-center mb-1">
                        <span class="font-semibold text-gray-700">${getLabel('score')}:</span>
                        <span class="font-bold text-xl text-blue-600 calc-score">0</span>
                    </div>
                    <div class="text-sm text-gray-600 calc-result">${getLabel('select_symptoms')}</div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleDisease(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

function toggleTable(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

function handleSearch(query) {
    if (!query) {
        if (currentCategory) renderCategory(currentCategory);
        else renderHome();
        return;
    }
    
    query = query.toLowerCase();
    const results = [];
    
    Object.values(window.diseases).forEach(cat => {
        if (cat.diseases) {
            cat.diseases.forEach(d => {
                if (d.name.toLowerCase().includes(query) || 
                    (d.pathogen && d.pathogen.name.toLowerCase().includes(query))) {
                    results.push({ ...d, categoryColor: cat.color, categoryName: cat.name, type: 'disease' });
                }
            });
        }
        // Táblázatok keresése
        if (cat.tables) {
            cat.tables.forEach((t, index) => {
                const rowMatch = t.rows.some(row => row.some(cell => String(cell).toLowerCase().includes(query)));
                if (t.title.toLowerCase().includes(query) || rowMatch) {
                    results.push({ 
                        ...t, 
                        id: `search-table-${index}-${Date.now()}`, // Egyedi ID a lenyitáshoz
                        categoryColor: cat.color, 
                        categoryName: cat.name, 
                        type: 'table' 
                    });
                }
            });
        }
    });

    const container = document.getElementById('main-content');
    if (results.length === 0) {
        container.innerHTML = `
            <div class="text-center text-gray-500 mt-20">
                <div class="text-4xl mb-2">🔍</div>
                <div>${getLabel('no_results')}</div>
            </div>`;
        return;
    }

    let html = `
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-gray-800">${getLabel('search_results')} <span class="text-blue-600">(${results.length})</span></h2>
            <button onclick="renderHome()" class="text-sm text-blue-600 hover:underline">${getLabel('back')}</button>
        </div>
        <div class="space-y-4">
    `;
    
    results.forEach(item => {
        if (item.type === 'table') {
            html += `
            <div class="bg-white rounded-xl shadow-sm overflow-hidden border-l-4" style="border-left-color: ${item.categoryColor}">
                <div class="p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center group" 
                     onclick="toggleTable('${item.id}')">
                    <div>
                        <div class="text-xs text-gray-500 uppercase tracking-wider mb-1">${item.categoryName}</div>
                        <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                            <span>📊</span> ${item.title}
                        </h3>
                    </div>
                    <span class="text-gray-400 transform transition-transform duration-200 bg-gray-100 rounded-full p-1" id="icon-${item.id}">▼</span>
                </div>
                <div id="content-${item.id}" class="hidden border-t border-gray-100 bg-gray-50 p-0 animate-slide-down">
                    <div class="overflow-x-auto">
                        <table class="min-w-full text-left text-sm border-collapse">
                            <thead class="bg-gray-100">
                                <tr>
                                    ${item.headers.map(h => `<th class="px-4 py-3 font-semibold text-gray-700 border-b whitespace-nowrap">${h}</th>`).join('')}
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                ${item.rows.map(row => `
                                    <tr class="hover:bg-blue-50 transition-colors">
                                        ${row.map(cell => `<td class="px-4 py-3 text-gray-600">${cell}</td>`).join('')}
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            `;
        } else {
            html += `
            <div class="bg-white rounded-xl shadow-sm overflow-hidden border-l-4" style="border-left-color: ${item.categoryColor}">
                <div class="p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center group" 
                     onclick="toggleDisease('${item.id}')">
                    <div>
                        <div class="text-xs text-gray-500 uppercase tracking-wider mb-1">${item.categoryName}</div>
                        <h3 class="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors">${item.name}</h3>
                    </div>
                    <span class="text-gray-400 transform transition-transform duration-200 bg-gray-100 rounded-full p-1" id="icon-${item.id}">▼</span>
                </div>
                <div id="content-${item.id}" class="hidden border-t border-gray-100 bg-gray-50 p-5 animate-slide-down">
                    ${renderDiseaseDetails(item)}
                </div>
            </div>
            `;
        }
    });
    html += `</div>`;
    container.innerHTML = html;
}

function showLoading(show) {
    const el = document.getElementById('loading');
    if (el) {
        el.style.opacity = show ? '1' : '0';
        el.style.pointerEvents = show ? 'all' : 'none';
        setTimeout(() => {
            if(!show) el.style.display = 'none';
            else el.style.display = 'flex';
        }, 300);
    }
}

// Labels for UI
function getLabel(key) {
    const labels = {
        hu: {
            entries: 'bejegyzés', back: 'Vissza', symptoms: 'Tünetek', therapy: 'Terápia', 
            epidemiology: 'Epidemiológia', incubation: 'Inkubáció', complications: 'Szövődmények', scores: 'Pontrendszerek', laboratory: 'Labor',
            diagnostics: 'Diagnosztika', microbiology: 'Mikrobiológia', imaging: 'Képalkotó', targeted: 'Célzott', 
            supportive: 'Szupportív', prevention: 'Megelőzés', search_results: 'Keresési találatok', no_results: 'Nincs találat',
            score: 'Pontszám', select_symptoms: 'Jelölje be a tüneteket...', prognosis: 'Prognózis', mortality: 'Halálozás', prog_scores: 'Prognosztikai score-ok', factors: 'Faktorok',
            pathomechanism: 'Patomechanizmus', virulence_factors: 'Virulencia faktorok', physical_exam: 'Fizikális vizsgálat',
            incidence: 'Incidencia', risk_groups: 'Rizikócsoportok', seasonality: 'Szezonalitás', transmission: 'Terjedés',
            differential_diagnosis: 'Differenciáldiagnózis', gallery: 'Galéria', guidelines: 'Irányelvek', references: 'Források',
            criteria: 'Kritériumok', onset: 'Kezdet', clinical: 'Klinikum'
        },
        en: {
            entries: 'entries', back: 'Back', symptoms: 'Symptoms', therapy: 'Therapy',
            epidemiology: 'Epidemiology', incubation: 'Incubation', complications: 'Complications', scores: 'Scoring Systems', laboratory: 'Laboratory',
            diagnostics: 'Diagnostics', microbiology: 'Microbiology', imaging: 'Imaging', targeted: 'Targeted',
            supportive: 'Supportive', prevention: 'Prevention', search_results: 'Search Results', no_results: 'No results found',
            score: 'Score', select_symptoms: 'Select symptoms...', prognosis: 'Prognosis', mortality: 'Mortality', prog_scores: 'Prognostic Scores', factors: 'Factors',
            pathomechanism: 'Pathomechanism', virulence_factors: 'Virulence Factors', physical_exam: 'Physical Exam',
            incidence: 'Incidence', risk_groups: 'Risk Groups', seasonality: 'Seasonality', transmission: 'Transmission',
            differential_diagnosis: 'Differential Diagnosis', gallery: 'Gallery', guidelines: 'Guidelines', references: 'References',
            criteria: 'Criteria', onset: 'Onset', clinical: 'Clinical'
        },
        de: {
            entries: 'Einträge', back: 'Zurück', symptoms: 'Symptome', therapy: 'Therapie',
            epidemiology: 'Epidemiologie', incubation: 'Inkubation', complications: 'Komplikationen', scores: 'Punktesysteme', laboratory: 'Labor',
            diagnostics: 'Diagnostik', microbiology: 'Mikrobiologie', imaging: 'Bildgebung', targeted: 'Gezielt',
            supportive: 'Supportiv', prevention: 'Prävention', search_results: 'Suchergebnisse', no_results: 'Keine Ergebnisse',
            score: 'Punktzahl', select_symptoms: 'Symptome auswählen...', prognosis: 'Prognose', mortality: 'Mortalität', prog_scores: 'Prognostische Scores', factors: 'Faktoren',
            pathomechanism: 'Pathomechanismus', virulence_factors: 'Virulenzfaktoren', physical_exam: 'Körperliche Untersuchung',
            incidence: 'Inzidenz', risk_groups: 'Risikogruppen', seasonality: 'Saisonalität', transmission: 'Übertragung',
            differential_diagnosis: 'Differentialdiagnose', gallery: 'Galerie', guidelines: 'Leitlinien', references: 'Quellen',
            criteria: 'Kriterien', onset: 'Beginn', clinical: 'Klinik'
        }
    };
    return labels[currentLang][key] || key;
}

function getSearchPlaceholder() {
    const p = { hu: 'Keresés betegség vagy kórokozó szerint...', en: 'Search disease or pathogen...', de: 'Suche nach Krankheit oder Erreger...' };
    return p[currentLang];
}
window.updateCalculator = function(id) {
    const container = document.getElementById(id);
    if (!container) return;

    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    let score = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) score += parseInt(cb.value);
    });

    const ranges = JSON.parse(container.dataset.ranges);
    let resultText = '';

    for (const range of ranges) {
        if (score >= range.min && score <= range.max) {
            resultText = range.text;
            break;
        }
    }

    container.querySelector('.calc-score').textContent = score;
    container.querySelector('.calc-result').innerHTML = resultText;
}

function toggleDisease(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    if (!content || !icon) return;

    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

window.openScoreCalculator = function(scoreName) {
    const modal = document.getElementById('score-modal');
    const panel = document.getElementById('score-modal-panel');
    const title = document.getElementById('score-modal-title');
    const content = document.getElementById('score-modal-content');
    
    const key = Object.keys(scoreCalculators).find(k => scoreName.includes(k)) || scoreName;
    const calc = scoreCalculators[key];
    
    if (!calc) {
      alert(`A(z) ${scoreName} kalkulátor jelenleg nem elérhető ebben az alkalmazásban.`);
      return;
    }
    
    title.textContent = calc.title;
    
    let html = `<p class="text-sm text-slate-500 mb-4 italic">${calc.description}</p>`;
    html += `<div class="space-y-2 mb-6">`;
    
    calc.items.forEach(item => {
      if (item.type === 'header') {
          html += `<h4 class="font-semibold text-slate-700 mt-4 mb-2 text-sm uppercase tracking-wide border-b border-slate-100 pb-1">${item.label}</h4>`;
      } else if (item.type === 'number') {
          html += `
            <div class="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <span class="text-slate-700 font-medium text-sm">${item.label}</span>
              <input type="number" class="w-20 px-2 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:border-emerald-500 score-input" 
                data-points="${item.points}" min="${item.min || 0}" max="${item.max || 999}" value="${item.value || ''}" placeholder="0">
            </div>
          `;
      } else if (item.type === 'radio') {
          html += `
            <label class="flex items-start gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors select-none mb-1">
              <div class="flex items-center h-5">
                <input type="radio" name="${item.name}" class="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 score-input" data-points="${item.points}" ${item.checked ? 'checked' : ''}>
              </div>
              <span class="text-slate-700 font-medium text-sm">${item.label}</span>
            </label>
          `;
      } else {
          html += `
            <label class="flex items-start gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors select-none">
              <div class="flex items-center h-5">
                <input type="checkbox" class="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500 border-gray-300 score-input" data-points="${item.points}">
              </div>
              <span class="text-slate-700 font-medium text-sm">${item.label}</span>
            </label>
          `;
      }
    });
    
    html += `</div>`;
    html += `
      <div id="score-result-container" class="bg-slate-100 rounded-xl p-4 text-center border border-slate-200 transition-colors duration-300">
        <div class="text-xs text-slate-500 uppercase tracking-wider mb-1">Eredmény</div>
        <div class="text-3xl font-bold text-slate-800 mb-1" id="score-result">0</div>
        <div class="font-bold text-lg" id="score-interpretation">-</div>
        <div class="text-sm text-slate-600 mt-1" id="score-action">-</div>
      </div>
    `;
    
    content.innerHTML = html;
    
    const inputs = content.querySelectorAll('.score-input');
    inputs.forEach(input => {
      input.addEventListener('input', () => calculateScore(calc));
    });
    
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      panel.classList.remove('scale-95');
      panel.classList.add('scale-100');
    }, 10);
    
    calculateScore(calc);
};

window.closeScoreModal = function() {
    const modal = document.getElementById('score-modal');
    const panel = document.getElementById('score-modal-panel');
    
    modal.classList.add('opacity-0');
    panel.classList.remove('scale-100');
    panel.classList.add('scale-95');
    
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
};

function calculateScore(calc) {
    const container = document.getElementById('score-modal-content');
    let total = 0;
    
    container.querySelectorAll('input[type="checkbox"]').forEach(input => {
      if (input.checked) total += parseFloat(input.dataset.points || 0);
    });

    container.querySelectorAll('input[type="radio"]:checked').forEach(input => {
      total += parseFloat(input.dataset.points || 0);
    });

    container.querySelectorAll('input[type="number"]').forEach(input => {
      const val = parseFloat(input.value) || 0;
      const multiplier = parseFloat(input.dataset.points || 1);
      total += val * multiplier;
    });
    
    const resultContainer = document.getElementById('score-result-container');
    const resultEl = document.getElementById('score-result');
    const interpEl = document.getElementById('score-interpretation');
    const actionEl = document.getElementById('score-action');
    
    let displayScore = total;
    if (calc.title.includes('APACHE II')) {
        displayScore = total + 15;
    }
    
    resultEl.textContent = displayScore;
    
    if (calc.interpret) {
      const interpretation = calc.interpret(total);
      interpEl.textContent = interpretation.risk;
      interpEl.className = `font-bold text-lg ${interpretation.color}`;
      actionEl.textContent = interpretation.action;
      
      resultContainer.className = `rounded-xl p-4 text-center border transition-colors duration-300 ${interpretation.bg} ${interpretation.border}`;
    }
};
