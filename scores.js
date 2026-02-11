window.scoreCalculators = {
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
    'NEWS2': {
      title: 'NEWS2 (National Early Warning Score)',
      description: 'A beteg állapotának súlyosságának és a klinikai romlás kockázatának felmérése.',
      items: [
        { type: 'header', label: 'Légzésszám (/perc)' },
        { type: 'radio', name: 'news_rr', label: '12-20', points: 0, checked: true },
        { type: 'radio', name: 'news_rr', label: '9-11', points: 1 },
        { type: 'radio', name: 'news_rr', label: '21-24', points: 2 },
        { type: 'radio', name: 'news_rr', label: '≤8 vagy ≥25', points: 3 },
        { type: 'header', label: 'Oxigén szaturáció (%)' },
        { type: 'radio', name: 'news_spo2', label: '≥96', points: 0, checked: true },
        { type: 'radio', name: 'news_spo2', label: '94-95', points: 1 },
        { type: 'radio', name: 'news_spo2', label: '92-93', points: 2 },
        { type: 'radio', name: 'news_spo2', label: '≤91', points: 3 },
        { type: 'header', label: 'Levegő vagy Oxigén' },
        { type: 'radio', name: 'news_o2', label: 'Levegő', points: 0, checked: true },
        { type: 'radio', name: 'news_o2', label: 'Oxigén', points: 2 },
        { type: 'header', label: 'Szisztolés vérnyomás (Hgmm)' },
        { type: 'radio', name: 'news_sbp', label: '111-219', points: 0, checked: true },
        { type: 'radio', name: 'news_sbp', label: '101-110', points: 1 },
        { type: 'radio', name: 'news_sbp', label: '91-100', points: 2 },
        { type: 'radio', name: 'news_sbp', label: '≤90 vagy ≥220', points: 3 },
        { type: 'header', label: 'Pulzus (/perc)' },
        { type: 'radio', name: 'news_hr', label: '51-90', points: 0, checked: true },
        { type: 'radio', name: 'news_hr', label: '41-50 vagy 91-110', points: 1 },
        { type: 'radio', name: 'news_hr', label: '111-130', points: 2 },
        { type: 'radio', name: 'news_hr', label: '≤40 vagy ≥131', points: 3 },
        { type: 'header', label: 'Tudatállapot' },
        { type: 'radio', name: 'news_loc', label: 'Éber (Alert)', points: 0, checked: true },
        { type: 'radio', name: 'news_loc', label: 'Zavart (CVPU)', points: 3 },
        { type: 'header', label: 'Hőmérséklet (°C)' },
        { type: 'radio', name: 'news_temp', label: '36.1-38.0', points: 0, checked: true },
        { type: 'radio', name: 'news_temp', label: '35.1-36.0 vagy 38.1-39.0', points: 1 },
        { type: 'radio', name: 'news_temp', label: '≥39.1', points: 2 },
        { type: 'radio', name: 'news_temp', label: '≤35.0', points: 3 }
      ],
      interpret: (score) => {
        if (score === 0) return { risk: 'Alacsony (0)', action: 'Monitorozás 12 óránként', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 4) return { risk: 'Alacsony-Közepes (1-4)', action: 'Monitorozás 4-6 óránként', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
        if (score <= 6) return { risk: 'Közepes (5-6)', action: 'Sürgős orvosi vizsgálat, óránkénti monitorozás', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
        return { risk: 'Magas (≥7)', action: 'Sürgősségi/ITO ellátás, folyamatos monitorozás', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    '4C Mortality Score': {
      title: '4C Mortality Score (COVID-19)',
      description: 'Kórházi halálozás kockázata COVID-19 betegeknél.',
      items: [
        { type: 'header', label: 'Életkor' },
        { type: 'radio', name: '4c_age', label: '<50', points: 0, checked: true },
        { type: 'radio', name: '4c_age', label: '50-59', points: 2 },
        { type: 'radio', name: '4c_age', label: '60-69', points: 4 },
        { type: 'radio', name: '4c_age', label: '70-79', points: 6 },
        { type: 'radio', name: '4c_age', label: '≥80', points: 7 },
        { type: 'header', label: 'Nem' },
        { type: 'radio', name: '4c_sex', label: 'Nő', points: 0, checked: true },
        { type: 'radio', name: '4c_sex', label: 'Férfi', points: 1 },
        { type: 'header', label: 'Komorbiditások száma' },
        { type: 'radio', name: '4c_comorb', label: '0', points: 0, checked: true },
        { type: 'radio', name: '4c_comorb', label: '1', points: 1 },
        { type: 'radio', name: '4c_comorb', label: '≥2', points: 2 },
        { type: 'header', label: 'Légzésszám (/perc)' },
        { type: 'radio', name: '4c_rr', label: '<20', points: 0, checked: true },
        { type: 'radio', name: '4c_rr', label: '20-29', points: 1 },
        { type: 'radio', name: '4c_rr', label: '≥30', points: 2 },
        { type: 'header', label: 'SpO2 (levegőn)' },
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
        if (score <= 3) return { risk: 'Alacsony (0-3)', action: 'Mortalitás: 1%', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 8) return { risk: 'Közepes (4-8)', action: 'Mortalitás: 8%', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
        if (score <= 14) return { risk: 'Magas (9-14)', action: 'Mortalitás: 31%', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
        return { risk: 'Nagyon magas (≥15)', action: 'Mortalitás: 62%', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    'PAGE-B': {
      title: 'PAGE-B Score (HBV)',
      description: 'Hepatocellularis carcinoma (HCC) kockázata krónikus Hepatitis B betegeknél (NA kezelés alatt).',
      items: [
        { type: 'header', label: 'Életkor' },
        { type: 'radio', name: 'pageb_age', label: '16-29', points: 0, checked: true },
        { type: 'radio', name: 'pageb_age', label: '30-39', points: 2 },
        { type: 'radio', name: 'pageb_age', label: '40-49', points: 4 },
        { type: 'radio', name: 'pageb_age', label: '50-59', points: 6 },
        { type: 'radio', name: 'pageb_age', label: '60-69', points: 8 },
        { type: 'radio', name: 'pageb_age', label: '≥70', points: 10 },
        { type: 'header', label: 'Nem' },
        { type: 'radio', name: 'pageb_sex', label: 'Nő', points: 0, checked: true },
        { type: 'radio', name: 'pageb_sex', label: 'Férfi', points: 6 },
        { type: 'header', label: 'Thrombocyta szám (G/L)' },
        { type: 'radio', name: 'pageb_plt', label: '≥200', points: 0, checked: true },
        { type: 'radio', name: 'pageb_plt', label: '100-199', points: 1 },
        { type: 'radio', name: 'pageb_plt', label: '<100', points: 2 }
      ],
      interpret: (score) => {
        if (score <= 9) return { risk: 'Alacsony kockázat (0-9)', action: '5 éves HCC rizikó ~0%', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
        if (score <= 17) return { risk: 'Közepes kockázat (10-17)', action: '5 éves HCC rizikó ~3%', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
        return { risk: 'Magas kockázat (≥18)', action: '5 éves HCC rizikó ~17%', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      }
    },
    "King's College": {
      title: "King's College Kritériumok (Nem-Paracetamol)",
      description: 'Sürgősségi májtranszplantáció indikációja akut májelégtelenségben (nem paracetamol eredetű).',
      items: [
        { type: 'checkbox', label: 'INR > 6.5 (PT > 100s)', points: 3 },
        { type: 'header', label: 'VAGY 3 az alábbi 5-ből (ha INR ≤ 6.5):' },
        { type: 'checkbox', label: 'Életkor < 10 vagy > 40 év', points: 1 },
        { type: 'checkbox', label: 'Etiológia: Non-A/Non-B hepatitis, gyógyszer, halothan', points: 1 },
        { type: 'checkbox', label: 'Icterus és Encephalopathia között > 7 nap telt el', points: 1 },
        { type: 'checkbox', label: 'Szérum Bilirubin > 300 µmol/L', points: 1 },
        { type: 'checkbox', label: 'INR > 3.5 (PT > 50s)', points: 1 }
      ],
      interpret: (score) => {
        if (score >= 3) return { risk: 'Kritériumok teljesültek', action: 'Sürgős májtranszplantáció listázás indokolt! (Mortalitás >80% transzplantáció nélkül)', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
        return { risk: 'Kritériumok nem teljesültek', action: 'Szoros monitorozás intenzív osztályon.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
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