Object.assign(window.diseases, {
  cns_infections: {
    name: 'Központi idegrendszeri fertőzések',
    icon: window.diseaseMetadata.cns_infections.icon,
    color: window.diseaseMetadata.cns_infections.color,
    diseases: [
      {
        id: 'csf_differential',
        name: 'Liquor leletek differenciáldiagnosztikája',
        table: {
          headers: ['Paraméter', 'Bakteriális', 'Vírusos', 'Normál'],
          rows: [
            ['Nyitási nyomás', 'Emelkedett (>20 vízcm)', 'Normál vagy enyhén emelkedett', '6-20 vízcm'],
            ['Megjelenés', 'Zavaros, gennyes', 'Tiszta ("víztiszta")', 'Tiszta, színtelen'],
            ['Sejtszám (fvs/µL)', '>1000 (gyakran 100-10000)', '10-500 (ritkán >1000)', '0-5'],
            ['Domináns sejt', 'Neutrophil granulocyta (>80%)', 'Lymphocyta (korai fázisban PMN lehet!)', 'Lymphocyta/Monocyta'],
            ['Fehérje (g/L)', 'Emelkedett (>1 g/L)', 'Normál vagy enyhén emelkedett (<1 g/L)', '0.15-0.45 g/L'],
            ['Glükóz (mmol/L)', 'Csökkent (<2.2 mmol/L)', 'Normál (>2.5 mmol/L)', '2.5-4.4 mmol/L'],
            ['Liquor/Vér glükóz arány', '< 0.4', '> 0.6', '≥ 0.6'],
            ['Laktát', 'Emelkedett (>3.5 mmol/L)', 'Normál (<3.5 mmol/L)', '< 2.5 mmol/L'],
            ['Mikrobiológia', 'Gram-festés (+ 60-90%), Tenyésztés (+)', 'PCR (+), Gram/Tenyésztés negatív', 'Negatív']
          ]
        }
      },
      {
        id: 'bacterial_meningitis',
        name: 'Bakteriális meningitis (Empirikus)',
        pathogen: { type: 'Baktérium', name: '<i>N. meningitidis, S. pneumoniae, L. monocytogenes</i>', gram: 'Vegyes', shape: 'Kórokozó függő' },
        epidemiology: {
          incidence: '2-5/100,000 fő/év fejlett országokban',
          risk_groups: ['Újszülöttek (<1 hó)', 'Gyermekek', '65 év felettiek', 'Splenectomizáltak', 'Komplement deficiencia', 'Cochlearis implantátum'],
          seasonality: 'Meningococcus: tél-tavasz',
          transmission: 'Cseppfertőzés (meningococcus), endogén (pneumococcus), vertikális (GBS, Listeria)'
        },
        pathomechanism: {
          steps: [
            'Kolonizáció és Invázió: A kórokozók (pl. Meningococcus, Pneumococcus) a nasopharynx nyálkahártyáján kolonizálódnak, majd a hámrétegen áthatolva a véráramba jutnak (bakterémia).',
            'Vér-Agy Gát Átlépése: A baktériumok a véráramból a choroid plexus vagy az agyi kapillárisok endotheljén keresztül bejutnak a subarachnoidealis térbe.',
            'Szaporodás és Gyulladás: A liquorban (ahol a humorális immunitás gyenge) a baktériumok gyorsan szaporodnak. A baktériumfal komponensei (LPS, teikolsav) a PRR receptorokon keresztül masszív gyulladásos választ (citokinek: TNF-α, IL-1β) indítanak el.',
            'Agyödéma és ICP Fokozódás: A gyulladás miatt nő a vér-agy gát áteresztőképessége (vazogén ödéma), a liquor felszívódása csökken (interstitialis ödéma), és a sejtek duzzadnak (citotoxikus ödéma).',
            'Következmény: A kialakuló agyödéma növeli a koponyaűri nyomást (ICP), ami csökkenti az agyi perfúziós nyomást (CPP), cerebrális ischemiát és neuronális károsodást okozva.'
          ],
          virulence_factors: ['Kapszula poliszacharid', 'IgA proteáz', 'Lipooligoszacharid (LOS)', 'Pili/fimbriae']
        },
        clinical: {
          incubation: '2-10 nap (meningococcus), rövidebb (pneumococcus)',
          onset: 'Akut, órák-napok (meningococcusnál hiperakut is lehet)',
          symptoms: [
            { name: 'Klasszikus tünetek (Triász és Tetrád)', description: 'A klasszikus triász (láz, tarkókötöttség, tudatzavar) a betegek kevesebb mint felében (44-50%) van jelen egyszerre. A klasszikus tetrád (láz, súlyos/hasogató fejfájás, tarkókötöttség, megváltozott tudatállapot) elemei közül legalább kettő viszont szinte minden betegnél (95-99%) észlelhető.', severity: 'severe' },
            { name: 'Prodromális tünetek', description: 'Gyakran előzi meg a meningitist felső légúti hurut, pharyngitis. Pneumococcus esetén anamnesztikusan otitis media, sinusitis vagy pneumonia szerepelhet.', severity: 'mild' },
            { name: 'Meningeális izgalmi jelek', description: '<b>Tarkókötöttség:</b> a fej passzív előrehajtása korlátozott és fájdalmas. <b>Kernig-jel:</b> a 90 fokban behajlított csípő és térd mellett a térdízület kinyújtása fájdalmas akadályba ütközik. <b>Brudzinski-jel:</b> a fekvő beteg fejének előrehajtásakor a térdek és csípők önkéntelenül behajlításra kerülnek.', severity: 'moderate' },
            { name: 'Fejrázási fejfájás-fokozódás (Jolt accentuation)', description: 'A beteg a fejét gyorsan, vízszintesen fordítja el másodpercenként 2-3 alkalommal. Pozitív, ha a meglévő fejfájás fokozódik. Rendkívül érzékeny klinikai teszt (szenzitivitás 97%), mely segít eldönteni a meningitis gyanúját, ha a klasszikus meningeális jelek még bizonytalanok.', severity: 'moderate' },
            { name: 'Csecsemők és újszülöttek tünetei (Atypos)', description: 'Náluk a klasszikus tarkókötöttség és egyéb jelek gyakran hiányoznak. Vezető tünet a <b>paradox irritabilitás</b> (kézbe vételre, vigasztalási kísérletre a sírás fokozódik), a táplálási nehézség (étvágytalanság, gyenge szopás), a letargia, a feszülő vagy előredomborodó kutacs, a szokatlanul magas hangú ("sikító") sírás, a hányás és az izomhipotónia.', severity: 'severe' },
            { name: 'Időskori atípusos klinikum', description: 'Időseknél a betegség gyakran tünetszegény vagy atípusos: a tarkókötöttség a kísérő nyaki arthrosis miatt nehezen megítélhető vagy hiányzik, a láz mérsékelt vagy hipotermiába torkollik. Sokszor kizárólag újonnan fellépő, megmagyarázhatatlan zavartság (delírium) és aluszékonyság hívja fel a figyelmet a bajra.', severity: 'severe' },
            { name: 'Szisztémás jelek és korai szepszis ("Red Flags")', description: 'Meningococcus esetén a szepszis korai jelei órákkal megelőzhetik a meningitis jeleit: kifejezett végtag- és izomfájdalom (myalgia), hideg kezek és lábak, márványozott bőr (cutis marmorata), sápadtság és gyorsan progrediáló elesettség.', severity: 'severe' },
            { name: 'Bőrtünetek (Petechiae/Purpura)', description: 'Meningococcaemia esetén jellemzőek a bőrön és nyálkahártyákon megjelenő petechiák (apró, pontszerű bevérzések) és purpurák (nagyobb, összefolyó véraláfutások), amelyek nyomásra (üvegpohár-teszt) nem halványulnak el. Jelenlétük szuperakut progressziót és azonnali beavatkozást jelez.', severity: 'severe' },
            { name: 'Fokozott koponyaűri nyomás (ICP) jelei', description: 'Az agyödéma miatt kialakuló ICP fokozódás tünetei: progresszív tudatzavar (szomnolenciától a kómáig), sugárhányás (hányinger nélküli hirtelen hányás), a <b>Cushing-triász</b> (bradycardia, hypertensio és szabálytalan légzés), pupilladifferencia, illetve késői jelként papillaödéma (szemfenéken).', severity: 'severe' },
            { name: 'Neurológiai kiesési tünetek és görcsök', description: 'Fokális neurológiai tünetek (hemiparesis, aphasia), agyideg-bénulások (leggyakrabban a III, IV, VI, VII és VIII agyidegek gyulladása vagy kompressziója miatt: kettőslátás, arcizomgyengeség, halláscsökkenés), valamint generalizált vagy fokális görcsrohamok (a betegek 20-30%-ában).', severity: 'severe' }
          ],
          physical_exam: [
            'Tarkókötöttség (passzív előrehajlítási gátoltság)',
            'Kernig-jel: térd nyújtása hajlított csípő mellett fájdalmas/gátolt',
            'Brudzinski-jel: fej emelésére reflexes csípő- és térdflexió',
            'Fejrázási fejfájás-fokozódás (Jolt accentuation) pozitív',
            'Láz (magas, de időseknél és újszülötteknél normál vagy alacsony testhőmérséklet is előfordulhat)',
            'Tudatzavar és csökkent éberségi szint (GCS < 15)',
            'Fokális neurológiai deficit (pl. hemiparesis, aphasia)',
            'Agyidegbénulások (különösen III, IV, VI a szemmozgászavarokért; VII, VIII)',
            'Bőr és nyálkahártya bevérzések (petechiák, purpurák - non-blanching rash)',
            'Agyödéma és fokozott ICP jelei (Cushing-reflex: hypertensio bradycardiával; pupilla-asszimetria)',
            'Szemfenéki vizsgálat: papillaödéma (általában késői vagy komplikált esetekben)',
            'Dobhártya vizsgálat: otitis media, sinusitis vagy mastoiditis fizikális jelei (pneumococcus esetén)',
            'Sárgaság (listeria vagy szövődményes DIC/sepsis esetén)'
          ],
          complications: [
            'Szeptikus shock (különösen meningococcusnál)',
            'DIC (Disszeminált Intravaszkuláris Koaguláció) bőrelhalásokkal és végtag-gangrénával',
            'ARDS (Felnőttkori Légzési Distressz Szindróma)',
            'Agyödéma és agyi herniáció (beékelődés - pl. uncalis vagy tonsillaris)',
            'Cerebrális infarktusok (vaszkulitisz miatt kialakuló artériás vagy vénás thrombosisok)',
            'Subduralis effúzió vagy subduralis empyema',
            'Hydrocephalus (likvor-felszívódási zavar vagy elfolyási akadály miatt)',
            'Agytályog (másodlagos fertőződés vagy pneumococcus szövődmény)',
            'Waterhouse-Friderichsen szindróma (kétoldali mellékvese-vérzés miatti akut elégtelenség)',
            'Maradandó hallásvesztés vagy süketség (főleg pneumococcus után, a cochlea érintettsége miatt)',
            'Kognitív deficitek, memóriazavarok és tanulási nehézségek',
            'Epilepszia (maradandó görcs fókuszok)',
            'Agyideg-bénulások maradandó tünetei (pl. strabismus, nystagmus, arcbénulás)'
          ]
        },
        clinicalIntro: 'A bakteriális meningitis akut lefolyása gyorsan progresszál, gyakori „red flag” a magas láz, a gyorsan romló tudatzavar és a petechiás bőrkiütés. A tünetek dinamikája hyperakut (órákon belül) vagy néhány nap alatt súlyosbodó, ami a korai diagnózist sürgeti.',
        diagnostics: {
          laboratory: [
            { test: 'Vérkép', finding: 'Leukocytosis (15-30 G/L), balra tolt', interpretation: 'Bakteriális fertőzés' },
            { test: 'CRP/PCT', finding: 'Jelentősen emelkedett (PCT >2)', interpretation: 'Bakteriális szepszis' },
            { test: 'Vér PCR', finding: 'Meningococcus/Pneumococcus DNS', interpretation: 'NICE ajánlás: minden gyanús esetben levenni!' },
            { test: 'Koagulogram', finding: 'DIC jelek (↓fibrinogén, ↑D-dimer)', interpretation: 'Meningococcus' }
          ],
          imaging: [
            { modality: 'Koponya CT', finding: 'Kontraindikációk kizárása', significance: 'LP előtt, ha: GCS<9, görcsök, fokális jelek, papillaödéma' },
            { modality: 'MRI', finding: 'Érzékenyebb, komplikációk', significance: 'Empyema, infarktus' }
          ],
          microbiology: [
            { test: 'Liquor analízis (NICE)', finding: 'Sejtszám >1000/µL (PMN), Fehérje >1 g/L, Glükóz < a vércukor 50%-a', significance: 'Bakteriális meningitisre jellegzetes!' },
            { test: 'Liquor Laktát', finding: 'Emelkedett', significance: 'Segít elkülöníteni a vírusostól' },
            { test: 'Liquor Gram-festés', finding: '60-90% pozitív', significance: 'Gyors orientáció' },
            { test: 'Liquor/vér tenyésztés', finding: 'Kórokozó izolálás', significance: 'Rezisztencia' },
            { test: 'Liquor PCR (multiplex)', finding: 'DNS kimutatás', significance: 'Gyors, érzékeny, előkezelt beteg' },
            { test: 'Liquor latex agglutináció', finding: 'Antigén kimutatás', significance: 'Gyors, kevésbé érzékeny' }
          ]
        },
        differential: [
          { disease: 'Vírusos meningitis', distinguishing: 'Enyhébb, liquor: lymphocyta, normál glükóz' },
          { disease: 'TBC meningitis', distinguishing: 'Szubakut, alacsony glükóz, basilaris meningitis' },
          { disease: 'Encephalitis', distinguishing: 'Tudatzavar dominál, gócjelek, liquor enyhébb eltérés' },
          { disease: 'Subarachnoidealis vérzés', distinguishing: 'Villámcsapás fejfájás, liquor véres/xantochrom' },
          { disease: 'Carcinomás meningitis', distinguishing: 'Malignus betegség, citológia' }
        ],
        therapy: {
          guidelines: ['NICE NG240 (2025/2026): Bakteriális meningitis kezelési irányelvek'],
          empirical: {
            outpatient: [
              { drug: 'Benzylpenicillin vagy Ceftriaxon', dose: 'IM/IV', duration: 'Stat', note: 'Csak ha a kórházba szállítás jelentősen késik' }
            ],
            inpatient: [
              { drug: 'Ceftriaxon', dose: '2g IV 12 óránként (vagy 4g 24 óránként)', duration: 'Kórokozó függő', note: 'Első választás (NICE). Alternatíva: Cefotaxim.' },
              { drug: '+ Ampicillin', dose: '2g IV 4 óránként', duration: 'Kórokozó függő', note: 'Ha Listeria rizikó (>60 év, immunszuppresszió, terhesség).' },
              { drug: 'Dexamethason', dose: '10mg IV 6 óránként', duration: '4 nap', note: 'Az első antibiotikum adag ELŐTT vagy azzal EGYÜTT. Ne adjuk, ha szeptikus shock van meningitis nélkül.' }
            ],
            icu: [
              { drug: 'Szupportív', dose: '-', duration: '-', note: 'Légút biztosítása, folyadékrészesítés, vazopresszorok' }
            ]
          },
          targeted: 'Meningococcus: 7 nap; Pneumococcus: 14 nap; Listeria: 21 nap; H. influenzae: 10 nap; GBS: 14-21 nap.',
          supportive: ['Folyadék/elektrolit egyensúly', 'ICP monitorozás', 'Görcsprofilaxis', 'Izolálás (meningococcus, 24h AB után megszüntethető)'],
          prevention: ['MenACWY, MenB vakcinák', 'PCV13/PPSV23', 'Hib vakcina', 'Kemoprofilaxis kontaktok: Rifampicin vagy Ciprofloxacin']
        },
        prognosis: {
          mortality: 'Összesen 15-25%, Meningococcus 10%, Pneumococcus 20-30%, Listeria 20-30%',
          prognostic_scores: ['GCS', 'APACHE II'],
          factors: 'Életkor, kórokozó, késői kezelés, tudatzavar, görcsök, szeptikus shock'
        }
      },
      {
        id: 'pneumococcus_meningitis',
        name: 'Pneumococcus meningitis',
        pathogen: { type: 'Baktérium', name: 'Streptococcus pneumoniae', gram: 'Gram-pozitív', shape: 'Diplococcus' },
        epidemiology: {
          incidence: '2-5/100,000 fő/év fejlett országokban',
          risk_groups: ['Idősek', 'Immunszuppresszió', 'Alkoholisták', 'Splenectomia', 'Otitis/Sinusitis/Pneumonia', 'Liquorcsorgás'],
          seasonality: 'Tél-tavasz',
          transmission: 'Endogén (pneumococcus)'
        },
        pathomechanism: {
          steps: [
            'A fertőzés gyakran egy szomszédos fókuszból (otitis media, sinusitis, mastoiditis) terjed át az agyhártyákra, vagy tüdőgyulladást kísérő bakterémia útján jut oda.',
            'A Pneumococcus tokja gátolja a fagocitózist, a pneumolysin toxin pedig közvetlenül károsítja a sejteket és serkenti a gyulladást.',
            'Ez a kórokozó okozza a legsúlyosabb gennyes meningitist, gyakori kómával és maradandó károsodással.'
          ],
          virulence_factors: ['Tok', 'Pneumolysin']
        },
        clinical: {
          incubation: '2-10 nap (rövidebb)',
          onset: 'Akut',
          symptoms: [
            { name: 'Súlyos purulens meningitis', description: 'Gyorsan kialakuló, rendkívül súlyos fejfájás, magas láz és korai tudatzavar. A betegeknél gyakori a mély aluszékonyság, delírium vagy kóma, valamint a korán jelentkező generalizált görcsrohamok.', severity: 'severe' },
            { name: 'Kísérő gócok tünetei', description: 'Gyakran társul pneumonia (köhögés, dyspnoe, mellkasi fájdalom), otitis media (fülfájás, halláscsökkenés, fülfolyás) vagy sinusitis (arcfájdalom, orrdugulás).', severity: 'moderate' },
            { name: 'Fokális neurológiai kiesések', description: 'Gyakoriak az agyideg-bénulások (különösen a szemmozgató és hallóidegek) és a hemiparesis a kísérő vaszkulitisz vagy thrombosis miatt.', severity: 'severe' }
          ],
          physical_exam: [
            'Kifejezett meningealis izgalmi jelek',
            'Tudatzavar (alacsony GCS), kóma',
            'Fokális neurológiai tünetek (paresis, aphasia)',
            'Agyideg bénulások (III, IV, VI, VII, VIII)',
            'Dobhártya vizsgálat: otitis media jelei (belövellt, előredomborodó dobhártya)',
            'Tüdő felett krepitáció vagy tompulat (pneumonia jele)'
          ],
          complications: [
            'Szenzorineurális hallásvesztés vagy süketség (magas arányban a cochlearis gyulladás/ossificatio miatt)',
            'Hydrocephalus (liquor elfolyási vagy felszívódási zavar)',
            'Agytályog vagy subduralis empyema',
            'Cerebrális vaszkulitisz és infarktus',
            'Kognitív deficitek és tanulási zavarok'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Liquor', finding: 'Gennyes, nagyon magas fehérje, alacsony cukor', interpretation: '-' },
            { test: 'Vér CRP', finding: 'Nagymértékben emelkedett', interpretation: 'Nagyon magas CRP (>200 mg/l) valószínűsíti a bakteriális etiológiát' },
            { test: 'Laktát', finding: 'Emelkedett', interpretation: 'A gennyes meningitisben általában magasabb, mint vírusos esetben' },
          ],
          imaging: [
            { modality: 'Koponya CT', finding: 'Kontraindikációk kizárása', significance: 'LP előtt, ha: GCS<9, görcsök, fokális jelek, papillaödéma, immunhiányos állapot, kórelőzményben koponya trauma vagy tumor.' },
            { modality: 'MRI', finding: 'Érzékenyebb, komplikációk', significance: 'Empyema, infarktus' }
          ],
          microbiology: [
            { test: 'Liquor Gram-festés', finding: '60-90% pozitív, Gram-pozitív diplococcusok', significance: 'Gyors orientáció' },
            { test: 'Liquor/vér tenyésztés', finding: 'Kórokozó izolálás', significance: 'Rezisztencia' },
            { test: 'Liquor PCR (multiplex)', finding: 'DNS kimutatás', significance: 'Gyors, érzékeny, előkezelt beteg' },
            { test: 'Latex agglutináció', finding: 'Antigén kimutatás', significance: 'Gyors, kevésbé érzékeny' }]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxon', dose: '2g IV 12 óránként', duration: '14 nap', note: 'NICE NG240 2025/2026 ajánlás.' },
              { drug: 'Dexamethason', dose: '10mg IV 6 óránként', duration: '4 nap', note: 'Pneumococcus bizonyult esetben folytatandó.' },
              { drug: '+ Vancomycin', dose: '15 mg/kg IV 12 óránként', duration: '14 nap', note: 'Penicillin-rezisztens vagy komplikált esetekben.' }
            ]
          },
          targeted: 'Ceftriaxon 14 napig. Ha rezisztencia igazolt: + Vancomycin vagy Rifampicin.',
          supportive: [
            'Hidratáció: Folyamatos IV folyadékpótlás, mérlegelni kell a volumen túlterhelést.',
            'Görcsök: Benzodiazepin (Diazepam vagy Lorazepam)',
            'ICP monitorozás és csökkentés: Mannitol vagy hipertonás NaCl oldat',
            'Májfunckió monitorozása: Empyema, pneumonia, sepsis',
            'Hallásvizsgálat: Minden pneumococcus meningitises betegnél, mielőtt hazaengedik'
          ],
          prevention: ['Pneumococcus oltás (PCV, PPSV)']
        },
        prognosis: { mortality: '20-30%, magas morbiditás', prognostic_scores: [], factors: 'Életkor, immunstátusz' }
      },
      {
        id: 'meningococcal_meningitis',
        name: 'Meningococcus Meningitis',
        pathogen: { type: 'Baktérium', name: '<i>Neisseria meningitidis</i>', gram: 'Gram-negatív', shape: 'diplococcus' },
        epidemiology: {
          incidence: 'Járványos lehet',
          risk_groups: ['Csecsemők', 'Kamaszok', 'Zárt közösségek (kollégium)', 'Asplenia'],
          seasonality: 'Tél-tavasz',
          transmission: 'Cseppfertőzés (szoros kontakt)'
        },
        pathomechanism: {
          steps: [
            'A baktérium a nasopharynxban kolonizálódik, majd a véráramba jut.',
            'A vérben gyorsan szaporodva masszív mennyiségű endotoxint (LOS) bocsát ki (meningococcaemia).',
            'Az endotoxin szisztémás gyulladást, vaszkulitiszt és disszeminált intravaszkuláris koagulációt (DIC) indít el.',
            'Ez a kiserek elzáródásához (bőrneukrózis, mellékvese vérzés - Waterhouse-Friderichsen szindróma) és szeptikus shockhoz vezet, gyakran még a meningitis kialakulása előtt.'
          ],
          virulence_factors: ['Tok (A,B,C,W,Y)', 'LOS (Lipooligoszacharid)', 'IgA proteáz']
        },
        clinical: {
          incubation: '1-10 nap',
          onset: 'Hiperakut (órák alatt progrediáló)',
          symptoms: [
            { name: 'Hiperakut kezdet', description: 'A beteg állapota órák alatt drámaian romlik. Magas láz, hidegrázás, heves fejfájás és ismétlődő hányás az első tünetek.', severity: 'severe' },
            { name: 'Hemorrhagiás kiütések (Petechiák és Purpurák)', description: 'Kezdetben apró, nyomásra elhalványuló makulák, majd gyorsan (percek-órák alatt) kialakuló petechiák (tűszúrásnyi bevérzések) és purpurák (kiterjedt, szabálytalan véraláfutások), amelyek üvegpohárral nyomva nem tűnnek el (non-blanching rash). Gyakran a törzsön és a végtagokon kezdődnek.', severity: 'severe' },
            { name: 'Szeptikus shock és DIC', description: 'Hideg és cianotikus végtagok, márványozott bőr, tachycardia, tachypnoe, hypotensio, oliguria/anuria és zavart tudat. A disszeminált intravaszkuláris koaguláció (DIC) miatt kiterjedt bőrelhalások (gangréna) és szervi elégtelenség alakul ki.', severity: 'severe' },
            { name: 'Waterhouse-Friderichsen szindróma', description: 'A mellékvesék kétoldali hemorrhagiás nekrózisa miatt fellépő akut mellékvesekéreg-elégtelenség, mely kezelhetetlen shockhoz és halálhoz vezet.', severity: 'severe' }
          ],
          physical_exam: [
            'Meningealis izgalmi jelek (tarkókötöttség, Kernig, Brudzinski)',
            'Non-blanching petechiák és purpurák a bőrön, conjunctiván',
            'Keringési elégtelenség és shock jelei (tachycardia, hypotensio, megnyúlt kapilláris újratelődési idő)',
            'Tudatállapot gyors romlása'
          ],
          complications: [
            'Szeptikus shock és multiorgán elégtelenség (MODS)',
            'Waterhouse-Friderichsen szindróma',
            'Disszeminált intravaszkuláris koaguláció (DIC)',
            'Végtagi gangréna miatti amputációk',
            'Bőrhegek, lágyrész nekrózisok',
            'Süketség / halláskárosodás',
            'Beékelődés (herniáció)'
          ]
        },
        clinicalIntro: 'Meningococcus fertőzésünk gyorsan fejlődő hiperakus, magas lázzal, gyakori petechiás kiütésekkel, melyek nem halványulnak nyomásra. A gyors fejlődés és a szisztémás tünetek (myalgia, cutis marmorata) a korai gyanút erősítik.',
        diagnostics: {
          laboratory: [{ test: 'Liquor', finding: 'Gennyes', interpretation: '-' }, { test: 'PCR', finding: 'Pozitív', interpretation: 'Gyors' }],
          microbiology: [{ test: 'Gram festés', finding: 'Gram-negatív diplococcusok', significance: 'Gyors' }],
          imaging: [
            { modality: 'Koponya CT', finding: 'Kontraindikációk kizárása', significance: 'LP előtt, ha: GCS<9, görcsök, fokális jelek, papillaödéma, immunhiányos állapot, kórelőzményben koponya trauma vagy tumor.' },
            { modality: 'MRI', finding: 'Érzékenyebb, komplikációk', significance: 'Empyema, infarktus' }
          ],
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Ceftriaxon', dose: '2g IV 12 óránként', duration: '7 nap', note: 'NICE NG240 ajánlás' }] },
          targeted: 'Ceftriaxon 7 napig. Kontaktoknak profilaxis: Ciprofloxacin (egyszeri 500mg PO) vagy Rifampicin.',
          supportive: ['folyadékpótlás, fájdalomcsillapítás, lázcsillapítás'],
          prevention: ['Vakcináció (MenACWY, MenB)']
        },
        prognosis: { mortality: '10-15% kezeléssel is', prognostic_scores: [], factors: 'Életkor, komorbiditás, kezelés ideje' }
      },
      {
        id: 'listeria_meningitis',
        name: 'Listeria Meningitis',
        pathogen: { type: 'Baktérium', name: '<i>Listeria monocytogenes</i>', gram: 'Gram-pozitív', shape: 'pálca' },
        epidemiology: {
          incidence: 'Ritka, de veszélyes',
          risk_groups: ['Újszülöttek', 'Idősek (>50 év)', 'Terhesek', 'Immunszupprimáltak (transzplantált, alkoholista)'],
          seasonality: 'Nincs',
          transmission: 'Élelmiszer (lágy sajt, felvágott)'
        },
        pathomechanism: {
          steps: [
            'A baktérium szennyezett élelmiszerrel jut be, áthatol a bélfalon, és a véráramba kerül.',
            'Különös tropizmusa van az agytörzs (rhombencephalon) és az agyhártyák iránt.',
            'Intracelluláris kórokozóként képes a sejtről sejtre terjedni, elkerülve az antitesteket. Ezért fontos a celluláris immunitás (ami csecsemőkben, idősekben, terhesekben gyengébb).',
            'Mikrotályogokat és granulómákat képez az agytörzsben.'
          ],
          virulence_factors: ['Intracelluláris túlélés', 'Listeriolysin O']
        },
        clinical: {
          incubation: '1-4 hét (hosszú és változó)',
          onset: 'Szubakut, fokozatos',
          symptoms: [
            { name: 'Szubakut lefolyás', description: 'A tünetek lassabban, napok-hetek alatt alakulhatnak ki, nem olyan viharos, mint a többi bakteriális meningitis.', severity: 'moderate' },
            { name: 'Rhombencephalitis (Agytörzsi érintettség)', description: 'A Listeria kifejezett tropizmusa miatt az agytörzs gyulladását okozza. Tünetei: agyidegbénulások (pl. arcbénulás, nyelési zavar, dysarthria), ataxia, nystagmus, tremor és centrális légzészavar.', severity: 'severe' },
            { name: 'Meningeális jelek hiánya', description: 'A tarkókötöttség és egyéb meningealis izgalmi jelek a betegek jelentős részében (akár 30-40%-ban) hiányoznak, ami nehezíti a diagnózist.', severity: 'severe' },
            { name: 'Atypos rizikócsoport-klinikum', description: 'Főleg terheseknél (influenzaszerű lázas állapot, de magzati elhalást okozhat), újszülötteknél, időseknél és celluláris immundefektusban szenvedőknél jelentkezik.', severity: 'severe' }
          ],
          physical_exam: [
            'Enyhe vagy hiányzó meningealis izgalmi jelek',
            'Agytörzsi és kisagyi jelek: ataxia, nystagmus, tremor, dysarthria',
            'Kétoldali vagy aszimmetrikus agyidegbénulások (különösen VII, IX, X)',
            'Zavartság, delírium, fluktuáló tudatállapot'
          ],
          complications: [
            'Agytörzsi mikrotályogok és agytályog',
            'Hydrocephalus',
            'Magzati elhalás vagy koraszülés terheseknél',
            'Perzisztáló agyideg-bénulások és ataxia'
          ]
        },
        diagnostics: {
          laboratory: [{ test: 'Liquor', finding: 'Lehet lymphocytás is! (nem mindig PMN)', interpretation: 'Megtévesztő' }],
          microbiology: [{ test: 'Gram festés', finding: 'Gyakran negatív vagy Gram+ pálcák (diphtheroidnak nézhető)', significance: '-' }, { test: 'Megjegyzés', finding: 'Multiplex PCR (pl. FilmArray) gyors detektálást biztosít.', significance: '-' }]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Amoxicillin / Ampicillin', dose: '2g IV 4 óránként', duration: '21 nap', note: 'NICE NG240 ajánlás. Cefalosporinok HATÁSTALANOK!' }, { drug: '+ Gentamicin', dose: '5mg/kg IV naponta 1x', duration: 'Első 7 nap', note: 'Szinergista hatás' }] },
          targeted: 'Amoxicillin/Ampicillin (21 nap) + Gentamicin (első 7 nap). Penicillin allergia esetén: Cotrimoxazol (Trimethoprim/Sulfamethoxazol).',
          supportive: ['folyadékpótlás, fájdalomcsillapítás, lázcsillapítás'],
          prevention: ['Élelmiszerhigiénia rizikócsoportban']
        },
        prognosis: { mortality: '20-30%', prognostic_scores: [], factors: 'Életkor, immunstátusz' }
      },
      {
        id: 'aseptic_meningitis',
        name: 'Aszeptikus (Vírusos) Meningitis',
        pathogen: { type: 'Vírus', name: 'Enterovírusok (<i>Coxsackie, Echo</i>), <i>HSV-2, VZV</i>', gram: 'RNS/DNS', shape: '-' },
        epidemiology: {
          incidence: 'Leggyakoribb meningitis forma',
          risk_groups: ['Gyermekek', 'Fiatal felnőttek'],
          seasonality: 'Nyár-ősz (Enterovírus)',
          transmission: 'Feko-orális (Entero), szexuális (HSV-2)'
        },
        pathomechanism: {
          steps: [
            'A vírus (pl. Enterovírus) a bélrendszerből vagy a légutakból a véráramba jut (viremia).',
            'A vér-agy gáton átjutva megfertőzi az agyhártyákat (meninges) és a choroid plexust.',
            'Gyulladásos választ vált ki (főleg limfocitás), de a bakteriális fertőzéssel ellentétben nem képződik gennyes exsudatum, és az agyállomány általában nem érintett (ezért a tudat tiszta marad).',
            'A folyamat általában önlimitáló, a szervezet immunrendszere legyőzi a fertőzést.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '3-7 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Meningealis szindróma', description: 'Frontális vagy retroorbitális fejfájás (gyakran intenzív, lüktető jellegű), láz (jellemzően 38-40°C), kifejezett fénykerülés (photophobia), hangérzékenység (phonophobia) és tarkókötöttség. A fejfájás jellemzően fejmozgásokra fokozódik, és erős fény hatására súlyosbodik.', severity: 'moderate' },
            { name: 'Tiszta tudat (Legfontosabb differenciáldiagnosztikai jel)', description: 'A legfontosabb megkülönböztető jel az encephalitistől és a bakteriális meningitistől: a beteg éber marad, teljesen orientált, megtartott kognitív funkciókkal és fokális neurológiai kiesés nélkül. Bár a beteg rosszul érezheti magát és irritábilis lehet, nincs zavartság, személyiségváltozás vagy tudatzavar.', severity: 'mild' },
            { name: 'Gastrointestinális tünetek', description: 'Hányinger, ismétlődő hányás (nem sugárhányás), étvágytalanság, és alkalmanként hasmenés. Különösen gyakori enterovírusos etiológia esetén.', severity: 'mild' },
            { name: 'Szisztémás és kórokozó-specifikus jelek', description: 'Enterovírus: makulopapuláris vagy petechiális kiütés, herpangina, kéz-láb-száj betegség, pleurodínia (Bornholm-betegség), torokfájás, hasmenés. HSV-2: egyidejű vagy közelmúltbeli genitális herpes léziók, szakrális radikulitisz (vizeletretenció). VZV: varicella vagy zoster kiütés (napokkal a meningitis előtt vagy után jelentkezhet). Mumps: parotitisz és orchitisz.', severity: 'mild' },
            { name: 'Korai neutrofil fázis (Diagnosztikus csapda)', description: 'Az enterovírusos meningitis első 24-48 órájában a liquorban neutrofil dominancia észlelhető, ami erősen utánozza a bakteriális meningitist. Ez jellemzően 12-24 órán belül limfocita dominanciára vált ismételt LP-nél, de a kezdeti kép jelentős diagnosztikus bizonytalanságot okozhat.', severity: 'moderate' }
          ],
          physical_exam: [
            'Meningealis izgalmi jelek jelen vannak, de enyhébbek mint bakteriális meningitisnél (tarkókötöttség, Kernig, Brudzinski szubtilis lehet)',
            'Fejrázási fejfájás-fokozódás (Jolt accentuation) pozitív (érzékeny még enyhe klasszikus jelek mellett is)',
            'Tudat tiszta, beteg orientált és koherens (kulcs különbség az encephalitistől!)',
            'Láz (mérsékelt, jellemzően 38-40°C)',
            'Fokális neurológiai kiesések hiánya (nincs hemiparesis, aphasia, agyidegbénulás)',
            'Kórokozó-specifikus leletek: garatpír, bőrkiütés (enterovírus), genitális vesiculák (HSV-2), dermatómszerű vesiculás exanthéma (VZV), parotis duzzanat (mumps)',
            'Enyhe conjunctivális injekció lehetséges',
            'Szemfenék: normál (nincs papillaödéma)'
          ],
          complications: [
            'Meningoencephalitis (ritka, átmenet az agyparenchyma érintettségébe tudatváltozásokkal)',
            'Átmeneti agyidegbénulás (különösen VII)',
            'Lázgörcs kisgyermekeknél',
            'Mollaret-meningitis (visszatérő benignus lymphocytás meningitis, tipikusan HSV-2)',
            'Transzverzális myelitis (ritka, elsősorban enterovírus D68/A71 esetén)',
            'Myocarditis vagy pericarditis (enterovírusos)',
            'Posztinfekciós fáradtság szindróma'
          ]
        },
        diagnostics: {
          laboratory: [{ test: 'Liquor', finding: 'Lymphocytás pleocytosis (tíz-száz), normál glükóz, enyhén emelkedett fehérje', interpretation: 'Vírusos kép' }],
          microbiology: [{ test: 'Liquor PCR', finding: 'Enterovírus/HSV/VZV', significance: 'Diagnosztikus' }, { test: 'Megjegyzés', finding: 'Multiplex PCR (FilmArray) pontos és gyors diagnózist nyújt.', significance: '-' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Fájdalomcsillapítás, pihenés' }] },
          targeted: 'HSV-2/VZV esetén Acyclovir megfontolandó (főleg immunszupprimáltaknál). Enterovírus: tüneti.',
          supportive: ['folyadékpótlás, fájdalomcsillapítás, lázcsillapítás'],
          prevention: ['Higiénia']
        },
        prognosis: { mortality: 'Kiváló, spontán gyógyul', prognostic_scores: [], factors: 'Nincs' }
      },
      {
        id: 'viral_encephalitis',
        name: 'Vírusos encephalitis',
        pathogen: { type: 'Vírus', name: '<i>HSV-1, VZV</i>, enterovírusok, arbovírusok', gram: 'DNS/RNS vírusok', shape: 'változó' },
        epidemiology: {
          incidence: '0.5-7/100,000 fő/év',
          risk_groups: ['Újszülöttek (HSV-2)', 'Immunszupprimáltak', 'Idősek (VZV reaktiváció)', 'Utazók endémiás területekre (arbovírus)'],
          seasonality: 'Enterovírus: nyár-ősz; HSV: egész évben',
          transmission: 'HSV: reaktiváció; Enterovírus: feko-orális; Arbovírus: vektor (szúnyog, kullancs)'
        },
        pathomechanism: {
          steps: [
            'Bejutás: A vírusok hematogén úton (pl. arbovírusok) vagy idegi terjedéssel (pl. HSV, veszettség) jutnak a központi idegrendszerbe.',
            'Neurotropizmus: A vírusok közvetlenül megfertőzik a neuronokat és a glia sejteket. A HSV-1 specifikusan a temporális és frontális lebenyeket érinti (olfactorius vagy trigeminalis úton).',
            'Károsodás mechanizmusa: A vírusreplikáció direkt citopatikus hatása (sejtpusztulás) és a szervezet erre adott citotoxikus T-sejtes immunválasza együttesen okozza a neuronok pusztulását.',
            'Szövettan: Perivaszkuláris limfocitás infiltráció, neuronophagia és mikrogliális csomók jellemzők. HSV esetén hemorrhagiás nekrózis alakul ki.',
            'Következmény: Agyödéma, gyulladás, vérzés és kiterjedt neuronpusztulás, ami fokális kiesési tünetekhez és tudatzavarhoz vezet.'
          ],
          virulence_factors: ['HSV: glikoprotein B, C, D (belépés)', 'VZV: latencia neuronokban', 'Enterovírus: VP1 kapszid fehérje']
        },
        clinical: {
          incubation: 'Kórokozótól függően változó (pl. HSV reaktiváció: változó, kullancs-encephalitis: 7-14 nap, arbovírusok: 4-14 nap)',
          onset: 'Akut vagy szubakut (órák-napok alatt progrediáló)',
          symptoms: [
            { name: 'Tudatzavar és Megváltozott Mentális Státusz (Hallmark)', description: 'Az encephalitis legfontosabb megkülönböztető jele a meningitistől. Megnyilvánulhat zavartságban, konfúzióban, dezorientáltságban, delíriumban, személyiség- és magatartásbeli változásokban, letargiában vagy kómában.', severity: 'severe' },
            { name: 'Láz és Fejfájás', description: 'Magas láz és diffúz, tompa fejfájás szinte minden esetben (>90%) jelen van, gyakran hányingerrel és hányással kísérve.', severity: 'moderate' },
            { name: 'Gócjelek (Fokális Neurológiai Kiesések)', description: 'Az érintett agyterületek lokalizációjának megfelelő kiesések: hemiparesis, aphasia (beszédzavar), ataxia, sensoros deficit és agyidegbénulások.', severity: 'severe' },
            { name: 'Görcsrohamok', description: 'Gyakoriak (20-30%-ban), lehetnek fokálisak vagy generalizáltak (tónusos-klónusos), gyakran nehezen kontrollálható epilepsziás rohamok formájában.', severity: 'severe' },
            { name: 'Neuropszichiátriai tünetek', description: 'Agitáció, hallucinációk, pszichózis és súlyos memóriazavarok (retrográd és anterográd amnézia – különösen a temporális lebenyt érintő vírusoknál).', severity: 'severe' }
          ],
          physical_exam: [
            'Csökkent éberség és éberségi szint (GCS < 15, somnolentia, sopor, coma)',
            'Kognitív diszfunkció, dezorientáltság, zavart beszéd',
            'Fokális motoros és szenzoros neurológiai kiesések (hemiparesis, reflex-aszimmetria, Babinski-jel)',
            'Agyidegbénulások jelei (pl. aszimmetrikus arcmozgás, szemmozgászavarok)',
            'Mérsékelt, bizonytalan meningeális izgalmi jelek (mivel a gyulladás elsősorban a parenchymában zajlik)'
          ],
          complications: [
            'Maradandó neurológiai és kognitív károsodások (pl. aphasia, paresis, szellemi leépülés)',
            'Szekunder (post-encephalitises) epilepszia',
            'Súlyos agyödéma miatti beékelődés (herniáció)',
            'Halál (kezeletlen HSV-1 esetén akár 70%, de egyéb neurotrop vírusoknál is jelentős)'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép', finding: 'Változó, lehet normál', interpretation: 'Nem specifikus' },
            { test: 'CRP', finding: 'Mérsékelt emelkedés', interpretation: 'Alacsonyabb mint bakteriálisnál' },
            { test: 'Máj/vesefunkció', finding: 'Baseline', interpretation: 'Acyclovir toxicitás' }
          ],
          imaging: [
            { modality: 'MRI agy', finding: 'HSV: temporális + frontális T2/FLAIR hiperintenzitás, aszimmetrikus', significance: 'Legérzékenyebb! Korai elvégzendő' },
            { modality: 'CT agy', finding: 'Korai stádiumban negatív lehet', significance: 'LP előtt kontraindikáció kizárása' }
          ],
          microbiology: [
            { test: 'Liquor PCR', finding: 'HSV-1/2, VZV, enterovírus DNS/RNS', significance: 'Gold standard, korai negativitás lehetséges!' },
            { test: 'Megjegyzés', finding: 'Multiplex PCR lehetővé teszi a specifikus vírus gyors azonosítását.', significance: '-' },
            { test: 'Liquor analízis', finding: 'Lymphocytás pleocytosis (10-500), normál/enyhén↑fehérje, normál glükóz', significance: 'Vírusos pattern' },
            { test: 'Liquor vvt', finding: 'Xanthochromia, emelkedett', significance: 'Hemorrhagiás nekrózis (HSV)' },
            { test: 'Szerológia', finding: 'Akut-konvaleszcens titeremelkedés', significance: 'Retrospektív' }
          ]
        },
        differential: [
          { disease: 'Bakteriális meningitis', distinguishing: 'Gyorsabb lefolyás, liquor: PMN, ↓glükóz' },
          { disease: 'Autoimmun encephalitis', distinguishing: 'Anti-NMDA-R, limbikus encephalitis, daganat keresés' },
          { disease: 'Agytályog', distinguishing: 'CT/MRI: gyűrű enhancement, szeptikus fókusz' },
          { disease: 'Toxikus-metabolikus encephalopathia', distinguishing: 'Alapbetegség, labor eltérések' },
          { disease: 'Status epilepticus', distinguishing: 'EEG, anamnézis' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'NINCS ambuláns kezelés!', dose: 'Azonnali kórházi beutalás', duration: '', note: 'HSV encephalitis halálos kezelés nélkül!' }
            ],
            inpatient: [
              { drug: 'Acyclovir', dose: '3x10mg/kg IV', duration: '14-21 nap', note: 'AZONNAL indítandó HSV gyanúnál!' }
            ],
            icu: [
              { drug: 'Acyclovir', dose: '3x10mg/kg IV', duration: '21 nap', note: 'Immunszupprimált, súlyos' },
              { drug: 'Görcsoldó', dose: 'Levetiracetam vagy más', duration: '', note: 'Profilaxis/terápia' }
            ]
          },
          targeted: 'HSV/VZV: Acyclovir; CMV: Ganciclovir+Foscarnet; Enterovírus: szupportív',
          supportive: ['ICP kontroll', 'Görcsoldás', 'Folyadékegyensúly', 'Rehabilitáció'],
          prevention: ['VZV vakcina', 'Szúnyogcsípés elleni védelem (arbovírus)', 'Neonatalis HSV: császármetszés ha aktív genitalis herpes']
        },
        prognosis: {
          mortality: 'HSV kezeletlen: 70%, kezelt: 20-30%; Enterovírus: <1%',
          prognostic_scores: ['GCS', 'Életkor'],
          factors: 'Késői kezelés, életkor, tudatzavar mértéke, HSV korai diagnózis'
        }
      },
      {
        id: 'herpes_encephalitis',
        name: 'Herpes Simplex Encephalitis',
        pathogen: { type: 'Vírus', name: '<i>Herpes Simplex Virus 1</i> (HSV-1)', gram: 'dsDNS', shape: 'gömb' },
        epidemiology: {
          incidence: 'Leggyakoribb sporadikus, fatális encephalitis',
          risk_groups: ['Bárki (nincs szezonalitás)'],
          seasonality: 'Nincs',
          transmission: 'Reaktiváció (trigeminalis ganglion) vagy primer fertőzés'
        },
        pathomechanism: {
          steps: [
            'A látens vírus a trigeminalis ganglionból reaktiválódik, és az idegrostokon keresztül retrográd módon jut vissza az agyba.',
            'Szelektíven a temporális és frontális lebenyeket, valamint a limbikus rendszert támadja meg.',
            'A vírusreplikáció és az immunválasz súlyos, aszimmetrikus, nekrotizáló, vérzéses gyulladást okoz ezeken a területeken.',
            'A kialakuló agyödéma és a temporális lebeny duzzanata uncus beékelődéshez vezethet.'
          ],
          virulence_factors: ['Neurovirulencia gének']
        },
        clinical: {
          incubation: 'Változó (primer infekciónál napok, de leggyakrabban latens vírus reaktivációja áll a háttérben)',
          onset: 'Akut, gyorsan progrediáló (órák-napok alatt kialakuló)',
          symptoms: [
            { name: 'Prodromális fázis', description: 'Láz, fejfájás, hányinger, rossz közérzet és letargia 1-5 napig.', severity: 'moderate' },
            { name: 'Személyiség- és Magatartászavarok (Karakterisztikus)', description: 'A frontotemporális lebenyek és a limbikus rendszer hemorrhagiás nekrózisa miatt korán jelentkezik furcsa viselkedés, hallucinációk (gyakran visszataszító szag- vagy íz-hallucinációk), hallucinatórikus delírium, agitáció és pszichózis.', severity: 'severe' },
            { name: 'Súlyos kognitív deficit és Amnézia', description: 'Az anterográd amnézia (új emlékek megőrzésének képtelensége) és a Wernicke-típusú szenzoros aphasia (beszédértési zavar) rendkívül jellegzetes.', severity: 'severe' },
            { name: 'Gócjelek és görcsök', description: 'Generalizált vagy fokális rohamok (gyakran temporális lebeny epilepszia szaglási aurával), hemiparesis és agyidegbénulások.', severity: 'severe' }
          ],
          physical_exam: [
            'Aluszékonyság, zavartság, hallucinációk vagy kóma',
            'Afázia (beszédértési és beszédképzési zavar)',
            'Fokális neurológiai kiesések (főként ellenoldali hemiparesis)',
            'Memóriatesztek súlyos zavara (rövid távú memória kiesése)',
            'Anisocoria vagy agyidegbénulások jelei'
          ],
          complications: [
            'Agyödéma és temporális lebeny-herniáció (uncus-beékelődés – azonnali halál)',
            'Kluver-Bucy szindróma (kétoldali temporális lebeny károsodás: hyperoralitás, hypersexualitás, félelem hiánya, vizuális agnózia)',
            'Maradandó, súlyos anterográd amnézia (Korsakoff-szerű állapot)',
            'Perzisztáló afázia és neurológiai kiesések',
            'Halál (kezelés nélkül >70%, de korai acyclovir mellett is 20-30%)'
          ]
        },
        diagnostics: {
          laboratory: [{ test: 'Liquor', finding: 'Lymphocytás, vvt emelkedett (xanthochrom), fehérje emelkedett', interpretation: 'Hemorrhagiás nekrózis' }],
          imaging: [{ modality: 'MRI', finding: 'Temporális lebeny aszimmetrikus hiperintenzitás (T2/FLAIR)', significance: 'Patognomikus' }],
          microbiology: [{ test: 'Liquor PCR', finding: 'HSV-1 DNS', significance: 'Gold standard' }]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Acyclovir', dose: '3x10 mg/kg IV', duration: '14-21 nap', note: 'Azonnal indítandó gyanú esetén is!' }] },
          targeted: 'Acyclovir IV. Recidíva esetén ismétlés.',
          supportive: ['Görcsgátlás', 'Agyödéma kezelés'],
          prevention: ['Nincs']
        },
        prognosis: { mortality: 'Kezeletlen >70%, kezelt 20-30%', prognostic_scores: [], factors: 'Életkor, immunstátusz, kezelés ideje' }
      },
      {
        id: 'tbe',
        name: 'Kullancs-encephalitis (TBE)',
        pathogen: { type: 'Vírus', name: '<i>Tick-Borne Encephalitis Virus</i>', gram: 'RNS, Flaviviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Endémiás Közép-Európában',
          risk_groups: ['Erdőjárók', 'Kullancscsípés'],
          seasonality: 'Tavasz-ősz',
          transmission: 'Kullancscsípés, pasztőrözetlen tej'
        },
        pathomechanism: {
          steps: [
            'A vírus a fertőzött kullancs nyálával jut a szervezetbe.',
            'Első fázis (Viremia): A vírus a nyirokcsomókban és a lépben szaporodik, influenzaszerű tüneteket okozva.',
            'Második fázis (Neuroinvázió): A betegek egy részénél a vírus átjut a vér-agy gáton, és megtámadja az agyhártyákat (meningitis), az agyállományt (encephalitis) vagy a gerincvelőt (myelitis).',
            'A gerincvelői érintettség jellemzően az elülső szarv motoros neuronjait pusztítja, ami petyhüdt bénuláshoz vezet.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '7-14 nap (kullancscsípés után, ritkán 4-28 nap)',
          onset: 'Karakterisztikusan bifázisos lefolyás',
          symptoms: [
            { name: '1. Fázis (Viremiás fázis)', description: 'Hirtelen kezdet, influenzaszerű tünetekkel: mérsékelt láz, fáradtság, fejfájás, myalgia, arthralgia és étvágytalanság. Ez 2-7 napig tart, majd egy 1-3 hetes teljesen tünetmentes intervallum követi.', severity: 'mild' },
            { name: '2. Fázis (Neuroinvazív fázis)', description: 'A betegek kb. 20-30%-ánál a láz visszatér (gyakran magasabb), és idegrendszeri tünetek jelentkeznek. Formái: Meningitis (enyhébb), Meningoencephalitis (zavartság, ataxia), Meningoencephalomyelitis (bénulások).', severity: 'severe' },
            { name: 'Bénulások (Petyhüdt paresis)', description: 'Jellegzetes a gerincvelői elülső szarv motoros neuronjainak károsodása miatt kialakuló, aszimmetrikus, petyhüdt bénulás, amely leggyakrabban a vállövet és a felső végtagokat érinti.', severity: 'severe' }
          ],
          physical_exam: [
            'Kifejezett finomhullámú kéz- és nyelv-tremor',
            'Ataxia, bizonytalan állás és járás (kisagyi érintettség)',
            'Aszimmetrikus petyhüdt bénulás (főleg vállöv és karok, csökkent vagy kiesett sajátreflexekkel)',
            'Meningeális izgalmi jelek a másodfázisban',
            'Tudatzavar (encephalitises formánál)'
          ],
          complications: [
            'Maradandó petyhüdt bénulások és izomatrophia (különösen a vállövben és a karokban)',
            'Post-encephalitises szindróma (krónikus fejfájás, koncentrációs zavarok, fáradékonyság, depresszió hónapokig-évekig)',
            'Légzésbénulás (ha a nyúltvelői légzőközpont vagy a rekeszizom motoros neuronjai érintettek)',
            'Halál (európai altípusnál 1-2%, távol-keleti altípusnál akár 20-30%)'
          ]
        },
        diagnostics: {
          laboratory: [{ test: 'Liquor', finding: 'Lymphocytás pleocytosis, normál glükózszint, enyhén emelkedett fehérjetartalom', interpretation: 'Meningitist jelez!' }],
          microbiology: [{ test: 'Szerológia (IgM/IgG)', finding: 'Vér és Liquor', significance: 'Diagnosztikus' }]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Nincs specifikus terápia' }] },
          targeted: 'Tüneti kezelés (ödéma csökkentés, rehabilitáció).',
          supportive: [],
          prevention: ['Védőoltás (FSME-Immun, Encepur)', 'Kullancsriasztó']
        },
        prognosis: { mortality: '1-2% (európai altípus)', prognostic_scores: [], factors: 'Altípus, kezelés ideje' }
      },
      {
        id: 'cryptococcal_meningitis',
        name: 'Cryptococcus Meningitis',
        pathogen: { type: 'Gomba', name: '<i>Cryptococcus neoformans</i>', gram: 'Sarjadzó gomba (tokos)', shape: 'kerek' },
        epidemiology: {
          incidence: 'HIV/AIDS betegekben leggyakoribb gombás meningitis',
          risk_groups: ['HIV (CD4 <100)', 'Transzplantáltak', 'Szteroid kezelés'],
          seasonality: 'Nincs',
          transmission: 'Inhaláció (galambürülék pora) -> tüdő -> hematogén szórás'
        },
        pathomechanism: {
          steps: [
            'A gomba belégzéssel jut a tüdőbe, ahol primer fertőzést okoz (gyakran tünetmentes).',
            'Immunszuppresszió (pl. AIDS) esetén a gomba a vérárammal szóródik és eljut az agyba.',
            'A vastag poliszacharid tokja megvédi a fagocitózistól.',
            'A gomba az arachnoidea bolyhokban felhalmozódva gátolja a liquor felszívódását, ami extrém magas koponyaűri nyomáshoz vezet, gyulladásos sejtek (genny) jelenléte nélkül.'
          ],
          virulence_factors: ['Poliszacharid tok', 'Melanin termelés']
        },
        clinical: {
          incubation: 'Ismeretlen (reaktiváció)',
          onset: 'Szubakut/Krónikus (hetek)',
          symptoms: [
            { name: 'Lassú progresszió', description: 'A tünetek hetek alatt alakulnak ki. Vezető tünet a fokozódó fejfájás és a láz.', severity: 'moderate' },
            { name: 'Magas ICP tünetei', description: 'A gátolt liquor felszívódás miatt: látászavar (kettőslátás, homályos látás), hányinger, tudatzavar.', severity: 'severe' },
            { name: 'Meningealis jelek hiánya', description: 'Mivel a gyulladásos válasz gyenge (kevés fvs), a tarkókötöttség gyakran hiányzik!', severity: 'severe' }
          ],
          physical_exam: ['Meningealis jelek gyakran hiányoznak!', 'Papilloedema (magas ICP)', 'Bőrtünetek (molluscum-szerű)'],
          complications: ['Magas koponyaűri nyomás (vakság, beékelődés)', 'Cryptococcoma', 'IRIS (terápia indításkor)']
        },
        diagnostics: {
          laboratory: [{ test: 'CD4', finding: '<100/µL', interpretation: 'Rizikó' }],
          imaging: [{ modality: 'CT/MRI', finding: 'Gyakran normál, vagy tágult perivascularis terek, cryptococcoma', significance: 'Kizárás' }],
          microbiology: [
            { test: 'Liquor CrAg (antigén)', finding: 'Pozitív', significance: 'Gold standard (vérből is!)' },
            { test: 'Tus (India ink) festés', finding: 'Tokos élesztőgombák', significance: 'Gyors, de kevésbé érzékeny' },
            { test: 'Megjegyzés', finding: 'Multiplex PCR (CrAg) gyors diagnózist nyújt.', significance: '-' },
            { test: 'Liquor tenyésztés', finding: 'C. neoformans', significance: 'Diagnosztikus' },
            { test: 'Liquor nyomás', finding: 'Gyakran extrém magas (>25 vízcm)', significance: 'Terápiás csapolás kell' }
          ]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Amphotericin B + Flucytosine', dose: 'IV + PO', duration: '2 hét (indukció)', note: 'Gold standard' }] },
          targeted: 'Indukció (AmB+5FC) -> Konszolidáció (Fluconazol 400mg 8 hét) -> Fenntartó (Fluconazol 200mg 1 évig/CD4>200).',
          supportive: ['Ismételt LP a nyomás csökkentésére (létfontosságú!)'],
          prevention: ['Fluconazol profilaxis', 'ART indítása'],
          guidelines: ["2025/2026 Cryptococcus meningitis kezelési protokoll"],
          prevention: ['Fluconazol profilaxis (ha CrAg pozitív vérben)', 'ART indítása (de óvatosan IRIS miatt)']
        },
        prognosis: { mortality: 'Kezeléssel 10-30%, kezeletlenül 100%', prognostic_scores: [], factors: 'Kezelés ideje, immunstátusz' }
      },
      {
        id: 'naegleria_meningitis',
        name: 'Primer Amoebás Meningoencephalitis (PAM)',
        pathogen: { type: 'Protozoon', name: '<i>Naegleria fowleri</i>', gram: '-', shape: 'amőba' },
        epidemiology: {
          incidence: 'Nagyon ritka, de fatális',
          risk_groups: ['Gyermekek/fiatalok', 'Édesvízi fürdőzők'],
          seasonality: 'Nyár (meleg víz)',
          transmission: 'Orron keresztül bejutó víz -> szaglóideg -> agy'
        },
        pathomechanism: {
          steps: [
            'Meleg édesvízben úszáskor a víz az orrba kerül.',
            'Az amőba áthatol az orrnyálkahártyán és a lamina cribrosán.',
            'A szaglóideg (n. olfactorius) mentén közvetlenül az agy homloklebenyébe vándorol.',
            'Az agyállományban szaporodva enzimatikusan feloldja és "megeszi" az agyszövetet, masszív vérzéses nekrózist és ödémát okozva.'
          ],
          virulence_factors: ['Szövetbontó enzimek', 'Amebostome (táplálkozó apparátus)']
        },
        clinical: {
          incubation: '1-9 nap (átlag 5)',
          onset: 'Fulmináns',
          symptoms: [
            { name: 'Kezdeti tünetek', description: 'Hirtelen kezdődő, elviselhetetlen homloktáji fejfájás, láz, hányinger. Gyakran szaglás- és ízlelészavar (parosmia/ageusia) előzi meg.', severity: 'severe' },
            { name: 'Progresszió', description: 'Gyorsan kialakuló tarkókötöttség, hallucinációk, görcsrohamok és kóma. A halál az agyödéma és beékelődés miatt 3-7 napon belül bekövetkezik.', severity: 'severe' }
          ],
          physical_exam: ['Meningealis izgalom', 'Kóma', 'Gyors romlás'],
          complications: ['Beékelődés', 'Halál (3-7 napon belül)']
        },
        diagnostics: {
          laboratory: [{ test: 'Liquor', finding: 'Gennyes (PMN), vvt-k, alacsony cukor', interpretation: 'Bakteriálisnak tűnik!' }],
          microbiology: [
            { test: 'Liquor mikroszkópia (natív)', finding: 'Mozgó amőbák', significance: 'Diagnosztikus (de tapasztalat kell)' },
            { test: 'PCR', finding: 'Naegleria DNS', significance: 'CDC/Referencia labor' },
            { test: 'Megjegyzés', finding: 'Multiplex PCR (célzott) alkalmas a Naegleria gyors kimutatására.', significance: '-' }
          ]
        },
        therapy: {
          empirical: { icu: [{ drug: 'Miltefosine + Amphotericin B + Rifampicin + Fluconazol + Azithromycin', dose: 'Kombináció', duration: '?', note: 'Kísérleti, kevés túlélő' }] },
          targeted: 'Miltefosine a kulcsgyógyszer. Hűtés (hipotermia) segíthet.',
          supportive: [],
          prevention: ['Orrcsipesz meleg édesvízben', 'Orrmosás csak steril vízzel']
        },
        prognosis: { mortality: '>97% (szinte mindig halálos)', prognostic_scores: [], factors: 'Kezelés elérhetősége' }
      },
      {
        id: 'brain_abscess',
        name: 'Agytályog',
        pathogen: { type: 'Baktérium', name: '<i>Streptococcus</i> spp., <i>Staphylococcus aureus</i>, Anaerobok', gram: 'Vegyes', shape: 'Vegyes' },
        epidemiology: {
          incidence: 'Ritka, de súlyos (0.4-1.3/100,000 fő/év)',
          risk_groups: ['Immunszupprimáltak', 'Krónikus otitis/sinusitis', 'Fogászati fertőzés', 'Endocarditis', 'Fejsérülés/műtét'],
          seasonality: 'Nincs',
          transmission: 'Endogén terjedés (per continuitatem vagy hematogén)'
        },
        pathomechanism: {
          steps: [
            'Direkt terjedés: A fertőzés a szomszédos struktúrákból (pl. középfül, arcüreg, fogak) terjed át az agyállományra (40-50%).',
            'Hematogén szóródás: Távoli fókuszból (pl. tüdő, szív - endocarditis) a véráram útján jutnak a baktériumok az agyba (25-35%).',
            'Trauma/Műtét: Nyílt koponyasérülés vagy idegsebészeti beavatkozás utáni közvetlen bejutás.',
            'Tályogképződés: A baktériumok szaporodása lokális gyulladást (cerebritis), majd nekrózist okoz. A szervezet tokképződéssel próbálja izolálni a folyamatot (kapszula).'
          ],
          virulence_factors: ['Vegyes flóra szinergizmusa', 'Kapszula képzés']
        },
        clinical: {
          description: "Az agytályog bakteriális vagy anaerob fertőzés, amely a közeli struktúrákból vagy hematogén úton terjed, gyorsan növekvő intracranialis nyomást és lokális neurológiai tüneteket okoz.",
          incubation: 'Változó (napok-hetek)',
          onset: 'Szubakut',
          symptoms: [
            { name: 'Fejfájás', description: 'A leggyakoribb tünet (>70%), gyakran lokalizált, tompa, állandó és progresszív.', severity: 'moderate' },
            { name: 'Fokális neurológiai tünetek', description: 'A tályog elhelyezkedésétől függően (pl. hemiparesis, aphasia, látótérkiesés).', severity: 'severe' },
            { name: 'Láz', description: 'Csak az esetek 50%-ában van jelen! Hiánya nem zárja ki.', severity: 'mild' },
            { name: 'Tudatzavar', description: 'A növekvő intracranialis nyomás miatt aluszékonyság, zavartság, majd kóma alakulhat ki.', severity: 'severe' }
          ],
          physical_exam: ['Papilloedema (magas ICP)', 'Fokális neurológiai jelek', 'Láz (esetleg hiányzik)'],
          complications: ['Beékelődés (herniáció)', 'Tályog ruptúra a kamrarendszerbe (ventriculitis - magas mortalitás)', 'Epilepszia']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép', finding: 'Leukocytosis (60%-ban)', interpretation: 'Nem megbízható' },
            { test: 'CRP', finding: 'Emelkedett', interpretation: 'Gyulladás' },
            { test: 'Hemokultúra', finding: 'Pozitív', interpretation: 'Hematogén eredetnél fontos' }
          ],
          imaging: [
            { modality: 'Koponya CT/MRI', finding: 'Gyűrűszerű halmozás (ring enhancement), perifokális ödéma', significance: 'Gold standard (MRI érzékenyebb)' }
          ],
          microbiology: [
            { test: 'Sztereotaxiás aspiráció', finding: 'Genny tenyésztés', significance: 'Etiológiai diagnózis és terápia alapja' },
            { test: 'Lumbalpunctio', finding: 'ELLENJAVALLT!', significance: 'Beékelődés veszélye miatt tilos, ha térfoglalás van!' }
          ]
        },
        differential: [
          { disease: 'Agydaganat (Glioblastoma, Metasztázis)', distinguishing: 'Képalkotó (DWI szekvencia segít), biopszia' },
          { disease: 'Stroke', distinguishing: 'Hirtelen kezdet, vaszkuláris rizikófaktorok' },
          { disease: 'Encephalitis', distinguishing: 'Diffúzabb, nincs tokosodott tályog' }
        ],
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxon', dose: '2g IV 12 óránként', duration: '4-8 hét', note: 'Alapterápia' },
              { drug: '+ Metronidazol', dose: '500mg IV 8 óránként', duration: '4-8 hét', note: 'Anaerob fedezet' },
              { drug: '+ Vancomycin', dose: '15-20mg/kg IV', duration: '', note: 'Ha S. aureus gyanú (pl. trauma, endocarditis)' }
            ]
          },
          targeted: 'Tenyésztés alapján. Hosszas (6-8 hét) IV, majd PO terápia.',
          supportive: ['Idegsebészeti aspiráció/drenázs', 'Szteroid (Dexamethason) csak jelentős ödéma esetén', 'Görcsgátlók'],
          prevention: ['Fül-orr-gégészeti fertőzések kezelése', 'Endocarditis profilaxis'],
          guidelines: ["2025/2026 Agytályog kezelési protokoll"]
        },
        prognosis: {
          mortality: '10-20% (korai diagnózissal javul)',
          prognostic_scores: [],
          factors: 'Tudatállapot a felvételkor, kamrai ruptúra'
        }
      },
      {
        id: 'tbc_meningitis',
        name: 'TBC Meningitis',
        pathogen: { type: 'Mycobacterium', name: '<i>Mycobacterium tuberculosis</i>', gram: 'Saválló', shape: 'pálca' },
        epidemiology: {
          incidence: 'Leggyakoribb extrapulmonalis TBC forma',
          risk_groups: ['Immunszupprimáltak (HIV)', 'Endémiás területről származók', 'Csecsemők', 'Alkoholisták'],
          seasonality: 'Nincs',
          transmission: 'Hematogén szórás primer tüdőfókuszból'
        },
        pathomechanism: {
          steps: [
            'Hematogén szórás: A primer tüdőfókuszból a baktériumok a vérárammal eljutnak az agyba/agyhártyákra.',
            'Rich-gócok: Kis, kazifikálódó gócok (tuberculomák) képződnek a kéreg alatt vagy a meningealis térben.',
            'Ruptúra: A gócok megrepednek, és a baktériumok a subarachnoidealis térbe jutnak.',
            'Bazális exsudátum: Sűrű, zselatinózus, gyulladásos váladék képződik az agyalapon, ami körbeveszi az agyidegeket és a cisternákat.',
            'Következmény: Kommunikáló hydrocephalus (liquor felszívódás gátlása), agyidegbénulások (III, IV, VI, VII), vasculitis és agyi infarktusok.'
          ],
          virulence_factors: ['Cord factor', 'Intracelluláris túlélés']
        },
        clinical: {
          incubation: 'Hetek-hónapok',
          onset: 'Szubakut',
          symptoms: [
            { name: 'Prodromális fázis (1-2 hét)', description: 'Lassú, alattomos kezdet: apátia, személyiségváltozás, alacsony láz, fejfájás, hányinger.', severity: 'moderate' },
            { name: 'Meningealis fázis (2-3 hét)', description: 'Tarkókötöttség, tudatzavar, letargia, agyidegbénulások (főleg VI., III., IV., VII.).', severity: 'severe' },
            { name: 'Paralitikus fázis', description: 'Gyors progresszió kómába, hemiplegia, decerebrációs rigiditás. Kezelés nélkül halálos.', severity: 'severe' }
          ],
          physical_exam: ['Tarkókötöttség', 'Tudatzavar', 'Agyidegbénulások', 'Papilloedema'],
          complications: ['Hydrocephalus', 'Agyi infarktus', 'Maradandó neurológiai károsodás', 'SIADH']
        },
        diagnostics: {
          laboratory: [
            { test: 'Liquor', finding: 'Lymphocytás pleocytosis, NAGYON magas fehérje (>1 g/L), NAGYON alacsony glükóz (<2.2 mmol/L)', interpretation: 'Jellegzetes triász!' },
            { test: 'Liquor ADA', finding: 'Emelkedett', interpretation: 'Adenozin-deamináz, segít a diagnózisban' }
          ],
          imaging: [
            { modality: 'MRI/CT kontraszttal', finding: 'Bazális meningealis kontraszthalmozás, hydrocephalus, tuberculomák', significance: 'Diagnosztikus' }
          ],
          microbiology: [
            { test: 'Liquor Ziehl-Neelsen', finding: 'Saválló pálcák', significance: 'Alacsony szenzitivitás (<20%)' },
            { test: 'Liquor tenyésztés', finding: 'M. tuberculosis', significance: 'Gold standard, de lassú (hetek)' },
            { test: 'Liquor PCR (GeneXpert)', finding: 'MTB DNS', significance: 'Gyors, érzékeny' }
          ]
        },
        differential: [
          { disease: 'Cryptococcus meningitis', distinguishing: 'CrAg teszt, alacsonyabb fehérje' },
          { disease: 'Carcinomás meningitis', distinguishing: 'Citológia, ismert daganat' },
          { disease: 'Neuroszifilisz', distinguishing: 'Szerológia, liquor VDRL' }
        ],
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'RIPE (Rifampicin, Isoniazid, Pyrazinamide, Ethambutol)', dose: 'Standard dózis', duration: '9-12 hónap', note: 'Hosszabb kezelés szükséges' },
              { drug: '+ Dexamethason', dose: 'IV/PO', duration: '6-8 hét, majd leépítés', note: 'Mortalitás csökkentése! Kötelező!' }
            ]
          },
          targeted: 'Rezisztencia vizsgálat alapján módosított terápia.',
          supportive: ['ICP menedzsment', 'VP shunt (hydrocephalus esetén)'],
          prevention: ['BCG oltás', 'LTBI kezelés'],
          guidelines: ["2025/2026 TBC meningitis kezelési irányelvek"]
        },
        prognosis: {
          mortality: 'Kezeléssel 20-30%, kezelés nélkül 100%',
          prognostic_scores: ['MRC stádiumbeosztás'],
          factors: 'Kezelés késlekedése, tudatzavar mértéke, életkor'
        }
      }
    ]
  }
});  