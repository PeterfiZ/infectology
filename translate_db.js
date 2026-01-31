/**
 * translate_db.js
 * Automatizált fordító szkript az Infectologia adatbázishoz.
 * Használat: node translate_db.js
 */

const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

// --- KONFIGURÁCIÓ ---
// Ide írd be az OpenAI API kulcsodat (vagy állítsd be környezeti változóként)
const API_KEY = process.env.OPENAI_API_KEY || 'IDE_MASOLD_AZ_API_KULCSOT';

const SOURCE_DIR = './'; // A mappa, ahol a fájlok vannak (jelenlegi mappa)
const TARGET_LANGS = {
    'en': 'English',
    'de': 'German'
};

// Ezeket a fájlokat kihagyjuk a fordításból
const IGNORE_FILES = [
    'metadata.js', 
    'sw.js', 
    'translate_db.js', 
    'app.js',
    'main.js'
];
// ---------------------

const openai = new OpenAI({ apiKey: API_KEY });

async function translateContent(codeContent, targetLanguage) {
    const prompt = `
    You are a professional medical translator and software engineer.
    Your task is to translate the content of a JavaScript data file from Hungarian to ${targetLanguage}.

    Rules:
    1. The input is a JavaScript file containing 'Object.assign(window.diseases, ...)' or similar structure.
    2. Translate ALL user-facing string values (names, descriptions, findings, notes, symptoms, epidemiology, etc.) into ${targetLanguage}.
    3. Do NOT translate object keys (e.g., 'id', 'name', 'symptoms', 'severity', 'risk_groups').
    4. Do NOT translate variable references (e.g., 'window.diseaseMetadata.bacterial_respiratory.icon').
    5. Do NOT translate internal IDs (e.g., 'bacterial_pneumonia').
    6. Keep the code structure, indentation, and syntax EXACTLY as it is.
    7. Return ONLY the valid JavaScript code, no markdown formatting or explanations.

    Input Code:
    ${codeContent}
    `;

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-4o", // A GPT-4o a legjobb erre, de a gpt-3.5-turbo olcsóbb
            temperature: 0.1, // Alacsony hőmérséklet a precizitásért
        });

        let result = completion.choices[0].message.content;
        
        // Markdown formázás eltávolítása, ha a modell mégis beletenné
        result = result.replace(/^```javascript\n/, '').replace(/^```\n/, '').replace(/\n```$/, '');
        return result;
    } catch (error) {
        console.error(`API Hiba (${targetLanguage}):`, error.message);
        return null;
    }
}

async function processFile(filename) {
    const sourcePath = path.join(SOURCE_DIR, filename);
    const content = fs.readFileSync(sourcePath, 'utf8');

    console.log(`\nFeldolgozás: ${filename}...`);

    for (const [langCode, langName] of Object.entries(TARGET_LANGS)) {
        // Célfájl nevének generálása (pl. Thorax.js -> Thorax_en.js)
        const namePart = path.parse(filename).name;
        const extPart = path.parse(filename).ext;
        const targetFilename = `${namePart}_${langCode}${extPart}`;
        const targetPath = path.join(SOURCE_DIR, targetFilename);

        // Opcionális: Csak akkor fordítson, ha a forrásfájl újabb, mint a célfájl?
        // Jelenleg felülír mindent, ami biztosítja a szinkronizációt.
        
        console.log(`  -> Fordítás erre: ${langName} (${targetFilename})...`);
        
        const translatedCode = await translateContent(content, langName);

        if (translatedCode) {
            fs.writeFileSync(targetPath, translatedCode, 'utf8');
            console.log(`  -> Siker: ${targetFilename} mentve.`);
        } else {
            console.log(`  -> Kihagyva (hiba történt).`);
        }
    }
}

async function main() {
    if (API_KEY === 'IDE_MASOLD_AZ_API_KULCSOT') {
        console.error('HIBA: Kérlek állítsd be az OpenAI API kulcsot a szkriptben!');
        return;
    }

    try {
        const files = fs.readdirSync(SOURCE_DIR);

        // Magyar forrásfájlok keresése (amik nem _en.js vagy _de.js végűek)
        const sourceFiles = files.filter(file => {
            return file.endsWith('.js') &&
                   !file.includes('_en.js') &&
                   !file.includes('_de.js') &&
                   !IGNORE_FILES.includes(file);
        });

        console.log(`Talált forrásfájlok: ${sourceFiles.join(', ')}`);

        for (const file of sourceFiles) {
            await processFile(file);
        }
        
        console.log('\nKész! Minden fájl frissítve.');

    } catch (err) {
        console.error('Hiba a fájlrendszer olvasásakor:', err);
    }
}

main();
