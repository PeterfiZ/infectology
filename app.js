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

    // Helper to render sections if they exist
    const section = (title, content, icon = '') => content ? `
        <div class="mb-5">
            <h4 class="font-bold text-gray-700 mb-2 uppercase text-xs tracking-wider flex items-center gap-1">
                ${icon} ${title}
            </h4>
            <div class="text-gray-600 leading-relaxed bg-white p-3 rounded border border-gray-100 shadow-sm">${content}</div>
        </div>` : '';

    const listSection = (title, items, icon = '') => (items && items.length) ? `
        <div class="mb-5">
            <h4 class="font-bold text-gray-700 mb-2 uppercase text-xs tracking-wider flex items-center gap-1">
                ${icon} ${title}
            </h4>
            <ul class="list-disc list-inside text-gray-600 ml-1 space-y-1 bg-white p-3 rounded border border-gray-100 shadow-sm">
                ${items.map(i => `<li class="pl-1"><span class="-ml-1">${i}</span></li>`).join('')}
            </ul>
        </div>` : '';

    // Pathogen
    let pathogenHtml = '';
    if (d.pathogen) {
        pathogenHtml = `
            <div class="flex flex-wrap items-center gap-2 mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <span class="text-blue-700 font-bold flex items-center gap-1">🦠 ${d.pathogen.type}:</span>
                <span class="text-gray-900 font-medium text-lg">${d.pathogen.name}</span>
                ${d.pathogen.gram ? `<span class="text-xs bg-white text-blue-600 px-2 py-1 rounded border border-blue-200 font-mono">${d.pathogen.gram}</span>` : ''}
                ${d.pathogen.shape ? `<span class="text-xs bg-white text-gray-500 px-2 py-1 rounded border border-gray-200">${d.pathogen.shape}</span>` : ''}
            </div>
        `;
    }

    // Symptoms
    let symptomsHtml = '';
    if (d.clinical && d.clinical.symptoms) {
        symptomsHtml = `
            <div class="mb-5">
                <h4 class="font-bold text-gray-700 mb-2 uppercase text-xs tracking-wider flex items-center gap-1">
                    🤒 ${getLabel('symptoms')}
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${d.clinical.symptoms.map(s => `
                        <div class="bg-white p-3 rounded-lg border-l-4 shadow-sm ${s.severity === 'severe' ? 'border-red-500' : (s.severity === 'moderate' ? 'border-yellow-500' : 'border-green-500')}">
                            <div class="font-bold text-gray-800">${s.name}</div>
                            <div class="text-sm text-gray-600 mt-1">${s.description}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Calculators
    let calculatorsHtml = '';
    if (d.calculators) {
        calculatorsHtml = renderCalculators(d.calculators);
    }

    // Therapy
    let therapyHtml = '';
    if (d.therapy) {
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

            if (d.therapy.empirical.outpatient) {
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

        therapyHtml = `
            <div class="mt-6 p-5 bg-green-50 rounded-xl border border-green-100 shadow-sm">
                <h4 class="font-bold text-green-800 mb-4 flex items-center gap-2 text-lg border-b border-green-200 pb-2">
                    💊 ${getLabel('therapy')}
                </h4>
                ${empiricalHtml}
                ${section(getLabel('targeted'), d.therapy.targeted, '🎯')}
                ${listSection(getLabel('supportive'), d.therapy.supportive, '❤️')}
                ${listSection(getLabel('prevention'), d.therapy.prevention, '🛡️')}
            </div>
        `;
    }

    return `
        ${pathogenHtml}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="space-y-2">
                ${d.epidemiology ? section(getLabel('epidemiology'), d.epidemiology.incidence + '<br>' + d.epidemiology.transmission, '🌍') : ''}
                ${d.clinical ? section(getLabel('incubation'), d.clinical.incubation, '⏳') : ''}
                ${symptomsHtml}
                ${d.clinical ? listSection(getLabel('complications'), d.clinical.complications, '⚠️') : ''}
            </div>
            <div class="space-y-2">
                ${d.diagnostics ? listSection(getLabel('diagnostics'), 
                    d.diagnostics.laboratory ? d.diagnostics.laboratory.map(l => `<span class="font-semibold">${l.test}:</span> ${l.finding} <span class="text-gray-400 text-xs">(${l.interpretation})</span>`) : [], '🧪'
                ) : ''}
                ${d.diagnostics && d.diagnostics.microbiology ? listSection(getLabel('microbiology'), 
                    d.diagnostics.microbiology.map(m => `<span class="font-semibold">${m.test}:</span> ${m.finding} <span class="text-blue-600 text-xs">→ ${m.significance}</span>`), '🔬'
                ) : ''}
                ${calculatorsHtml}
                ${therapyHtml}
            </div>
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
            epidemiology: 'Epidemiológia', incubation: 'Inkubáció', complications: 'Szövődmények',
            diagnostics: 'Diagnosztika', microbiology: 'Mikrobiológia', targeted: 'Célzott', 
            supportive: 'Szupportív', prevention: 'Megelőzés', search_results: 'Keresési találatok', no_results: 'Nincs találat',
            score: 'Pontszám', select_symptoms: 'Jelölje be a tüneteket...'
        },
        en: {
            entries: 'entries', back: 'Back', symptoms: 'Symptoms', therapy: 'Therapy',
            epidemiology: 'Epidemiology', incubation: 'Incubation', complications: 'Complications',
            diagnostics: 'Diagnostics', microbiology: 'Microbiology', targeted: 'Targeted',
            supportive: 'Supportive', prevention: 'Prevention', search_results: 'Search Results', no_results: 'No results found',
            score: 'Score', select_symptoms: 'Select symptoms...'
        },
        de: {
            entries: 'Einträge', back: 'Zurück', symptoms: 'Symptome', therapy: 'Therapie',
            epidemiology: 'Epidemiologie', incubation: 'Inkubation', complications: 'Komplikationen',
            diagnostics: 'Diagnostik', microbiology: 'Mikrobiologie', targeted: 'Gezielt',
            supportive: 'Supportiv', prevention: 'Prävention', search_results: 'Suchergebnisse', no_results: 'Keine Ergebnisse',
            score: 'Punktzahl', select_symptoms: 'Symptome auswählen...'
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
