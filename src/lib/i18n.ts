export type Lang = "sk" | "en" | "ja" | "de" | "cs";

export type Dict = {
  meta: { title: string; description: string; orgDescription: string };
  nav: {
    features: string;
    how: string;
    why: string;
    deployment: string;
    contact: string;
    about: string;
    faq: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    sub: string;
    cta: string;
    secondary: string;
    stat1: string;
    stat2: string;
    stat3: string;
  };
  problem: {
    label: string;
    headline: string;
    items: { title: string; body: string }[];
    closing: string;
  };
  intro: { label: string; headline: string; items: { title: string; body: string }[] };
  features: {
    eyebrow: string;
    headline: string;
    list: { tag: string; title: string; body: string }[];
  };
  who: { headline: string; items: string[]; closing: string };
  how: {
    label: string;
    headline: string;
    steps: { n: string; title: string; body: string }[];
    cta: string;
  };
  diff: {
    headline: string;
    cols: { kobikan: string; others: string };
    rows: { label: string; k: string; o: string }[];
  };
  deploy: {
    headline: string;
    cards: { title: string; body: string; tag?: string }[];
    note: string;
  };
  trust: { headline: string; badges: string[] };
  about: {
    label: string;
    headline: string;
    lead: string;
    bullets: string[];
    clientsLabel: string;
    clients: string[];
    cta: string;
  };
  faq: { label: string; headline: string; items: { q: string; a: string }[] };
  finalCta: {
    headline: string;
    sub: string;
    stats: { v: string; l: string }[];
    cta: string;
    secondary: string;
  };
  form: {
    title: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  footer: { rights: string; powered: string };
  cookie: { msg: string; accept: string; reject: string };
  mockups: {
    heroChat: {
      header: string;
      q1: string;
      a1: string;
      source: string;
      q2: string;
      a2: string;
    };
    features: {
      chatHeader: string;
      chatQ: string;
      chatA: string;
      chatSource: string;
      voiceTranscript: string;
      voiceSuccess: string;
      logbookHeader: string;
      logbookRows: { id: string; title: string; who: string }[];
      integrations: string[];
      alerts: { text: string; priority: string }[];
    };
  };
};

export const T: Record<Lang, Dict> = {
  sk: {
    meta: {
      title: "KobiKan — AI asistent údržby pre priemyselné prevádzky",
      description:
        "KobiKan zachytí znalosti vašej prevádzky a mení ich na okamžité odpovede pre každého technika. Pilot za 14 dní. On-prem alebo cloud. Projekt firmy Touch4IT.",
      orgDescription: "AI asistent údržby pre priemyselné prevádzky.",
    },
    nav: {
      features: "Funkcie",
      how: "Ako to funguje",
      why: "Prečo KobiKan",
      deployment: "Nasadenie",
      contact: "Kontakt",
      about: "O nás",
      faq: "FAQ",
      cta: "Naplánovať demo",
    },
    hero: {
      eyebrow: "AI asistent pre údržbu",
      h1a: "Váš najlepší technik práve odišiel do dôchodku.",
      h1b: "KobiKan nie.",
      sub: "KobiKan zachytáva znalosti vašej prevádzky a mení ich na okamžité odpovede — pre každého technika, na každej zmene, pri každom stroji.",
      cta: "Naplánovať demo",
      secondary: "Pozrite, ako to funguje",
      stat1: "skúsených technikov odíde do dôchodku v horizonte 5–10 rokov",
      stat2: "hodín týždenne stratených hľadaním správnej informácie",
      stat3: "porúch vzniká kvôli chýbajúcim informáciám",
    },
    problem: {
      label: "Riešenie",
      headline: "Jedna platforma pre znalosti, dáta a údržbu.",
      items: [
        {
          title: "Jednotný prístup k dátam a komunikácii",
          body: "Prepojíme SAP, MES, CMMS, technické manuály, schémy, I/O zoznamy a PLC programy do jedného miesta. Technik sa pýta v prirodzenom jazyku cez známe chatové rozhranie — KobiKan nájde odpoveď naprieč systémami a vždy ukáže zdroj. V tom istom rozhraní si technici aj píšu medzi sebou, odovzdávajú zmeny a zdieľajú postupy — celá komunikácia tímu ostáva na jednom mieste a stáva sa súčasťou znalostnej bázy.",
        },
        {
          title: "Digitalizácia záznamov údržby",
          body: "Koniec papierových denníkov a roztrúsených Excelov. Záznamy o opravách, kontrolách a incidentoch sa diktujú hlasom alebo zapisujú v štruktúrovanej forme — jednotný formát naprieč zmenami, strojmi a závodmi. Dáta sú okamžite použiteľné pre analýzy, MTTR/MTBF a prediktívnu údržbu.",
        },
        {
          title: "AI asistent pre každého technika",
          body: "Inteligentný kolega, ktorý pozná vašu prevádzku — manuály, históriu porúch aj postupy seniorov. Navádza krok po kroku pri diagnostike, navrhuje riešenia overené na vašich vlastných dátach a učí sa z každého vyriešeného prípadu. Dostupný 24/7 v slovenčine, češtine, nemčine, angličtine a japončine.",
        },
      ],
      closing: "Tri piliere. Jedna platforma. Okamžitý dopad.",
    },
    intro: {
      label: "Predstavujeme KobiKan",
      headline: "Váš digitálny kolega. Dostupný 24/7.",
      items: [
        { title: "Rozumie", body: "Manuálom, PLC kódu, servisným záznamom a skúsenostiam tímu." },
        { title: "Odpovedá", body: "Okamžite — presne, v jazyku technika, s odkazom na zdroj." },
        { title: "Integruje", body: "Funguje s vašimi existujúcimi systémami. Žiadna náhrada." },
        { title: "Učí sa", body: "Každý vyriešený prípad robí systém múdrejším." },
      ],
    },
    features: {
      eyebrow: "Kľúčové funkcie",
      headline: "Postavené pre každodennú prevádzku.",
      list: [
        {
          tag: "Konverzačné AI rozhranie",
          title: "Opýtajte sa čokoľvek. Odpoveď máte za sekundy.",
          body: "Intuitívne rozhranie bez potreby školenia. Operátori, technici aj inžinieri dostanú overenú odpoveď v zrozumiteľnom jazyku, vždy s odkazom na zdroj.",
        },
        {
          tag: "Hlasové ovládanie",
          title: "Bez rúk. Bez písania.",
          body: "Technik nahráva opravu hlasom. KobiKan automaticky vytvorí štruktúrovaný záznam do denníka — bez dotyku klávesnice.",
        },
        {
          tag: "Logbook znalostí",
          title: "Inštitucionálna pamäť, ktorá nikdy neodíde.",
          body: "Zachytávame najlepšie postupy vášho tímu a meníme ich na zdieľané znalosti. Noví technici sa zorientujú rýchlejšie, skúsenosti seniorov ostanú dostupné.",
        },
        {
          tag: "Integrácie",
          title: "Prepojí sa so systémami, ktoré už používate.",
          body: "Dokumenty, schémy, I/O listy, PLC programy, MES, SQL, ERP, znalosti tímu. Žiadny nový hardvér, žiadna náhrada nástrojov.",
        },
        {
          tag: "Real-time dashboard",
          title: "Úplný prehľad. Jedna obrazovka.",
          body: "Stav strojov, história incidentov, MTTR, MTTB, prioritné úlohy pre zmeny a tímy. Pre manažérov údržby, ktorí potrebujú skutočné dáta rýchlo.",
        },
      ],
    },
    who: {
      headline: "Stvorené pre závody, kde znalosti sú úzkym hrdlom.",
      items: [
        "Výrobné závody s neštandardizovanými procesmi",
        "Tímy s vysokou fluktuáciou alebo odchodom skúsených pracovníkov",
        "Firmy, ktoré chcú prepojiť výrobu a údržbu do jedného systému",
      ],
      closing:
        "Ak váš tím stále pracuje s roztrúsenými správami v Teams, Excel tabuľkami a nepísanými pravidlami — KobiKan je stvorený pre vás.",
    },
    how: {
      label: "Od prvého stretnutia po živý systém",
      headline: "Pilotná prevádzka za 2 týždne. Bez rizika.",
      steps: [
        {
          n: "01",
          title: "Úvodné demo",
          body: "Ukážeme KobiKan na vašich vlastných dátach a prediskutujeme rozsah pilotu.",
        },
        {
          n: "02",
          title: "Pilot (< 14 dní)",
          body: "Prvá verzia asistenta naživo na vašich reálnych strojoch a dokumentácii.",
        },
        {
          n: "03",
          title: "Nasadenie do celej firmy",
          body: "Rozšírime na celú spoločnosť s našou podporou — jedna platforma, všetky prevádzky.",
        },
        {
          n: "04",
          title: "Plný súlad",
          body: "V súlade s vašimi bezpečnostnými, IT a regulačnými štandardmi.",
        },
      ],
      cta: "Naplánovať demo",
    },
    diff: {
      headline: "Nie len ďalší chatbot. Stvorený pre priemyselnú realitu.",
      cols: { kobikan: "KobiKan", others: "Iní dodávatelia" },
      rows: [
        { label: "Číta dokumenty + PLC kód + procesné dáta", k: "✓", o: "✓" },
        { label: "Nasadenie na vlastnej infraštruktúre (on-prem)", k: "✓", o: "—" },
        { label: "Pilot za 2 týždne", k: "✓", o: "✓" },
        { label: "Zachytávanie znalostí tímu (logbook)", k: "✓", o: "—" },
        { label: "Hlasové ovládanie v teréne", k: "✓", o: "—" },
        { label: "Webová aplikácia + hardvér v cene", k: "✓", o: "—" },
      ],
    },
    deploy: {
      headline: "Nasadenie, ktoré rastie s vami.",
      cards: [
        {
          title: "Plný cloud",
          body: "Najrýchlejší štart, najnižšie náklady. Dáta uložené na Slovensku/v EÚ.",
        },
        {
          title: "On-Prem + AI cloud",
          body: "Jadro a dáta vo vašej továrni. AI v cloude. Najlepšie pre väčšinu podnikov.",
          tag: "Najobľúbenejšie",
        },
        {
          title: "Plný On-Prem",
          body: "Maximálna kontrola nad dátami. Pre výnimočné požiadavky na podnikovú bezpečnosť.",
        },
      ],
      note: "V súlade s GDPR. Dáta neopustia vašu infraštruktúru pri výbere On-Prem.",
    },
    trust: {
      headline: "Bezpečnosť, ktorej môžete dôverovať",
      badges: [
        "GDPR v súlade",
        "On-Premise nasadenie",
        "Privátny cloud",
        "SAP / MES / SQL integrácia",
      ],
    },
    about: {
      label: "O nás",
      headline: "Projekt firmy Touch4IT so zameraním na priemysel.",
      lead: "KobiKan vyvíja Touch4IT — slovenská technologická spoločnosť, ktorá viac ako 10 rokov stavia softvér pre náročné prostredia v zdravotníctve, vesmírnom priemysle, obrane a financiách. KobiKan vznikol ako špecializovaný produkt pre výrobné závody a údržbu, kde sa stretáva inžinierska skúsenosť Touch4IT s realitou priemyselnej výroby.",
      bullets: [
        "10+ rokov skúseností s enterprise softvérom v regulovaných odvetviach.",
        "Inžinierske tímy v Bratislave, projekty po celej EÚ.",
        "On-prem aj cloud nasadenia v súlade s GDPR a podnikovými IT štandardmi.",
      ],
      clientsLabel: "Touch4IT spolupracuje s",
      clients: [
        "AbbVie",
        "Coca-Cola",
        "ESA",
        "Eumetsat",
        "Ferrero",
        "Raiffeisen",
        "Saint-Gobain",
        "Stada",
      ],
      cta: "Viac o Touch4IT",
    },
    faq: {
      label: "FAQ",
      headline: "Časté otázky.",
      items: [
        {
          q: "Kde sú uložené naše dáta?",
          a: "V plnom on-prem nasadení neopustia dáta vašu sieť — model beží na vašom serveri. V hybridnom režime sú dokumenty a procesné dáta vo vašej infraštruktúre, do AI v cloude (EÚ regióny) idú len anonymizované otázky.",
        },
        {
          q: "Ako dlho trvá pilot?",
          a: "Štandardne 14 dní od podpisu NDA. Týždeň 1 — pripojenie dokumentácie a dát z 3–10 strojov. Týždeň 2 — testovanie s technikmi a meranie reálnych benefitov.",
        },
        {
          q: "S akými systémami sa KobiKan integruje?",
          a: "PDF manuály, schémy, I/O zoznamy, PLC programy (Siemens S7, Rockwell, Beckhoff, Mitsubishi), MES, SCADA, SQL, SAP, ERP a CMMS. Read-only ako štandard.",
        },
        {
          q: "Potrebujeme upraviť dokumentáciu pred nasadením?",
          a: "Nie. KobiKan si poradí aj s nedokonalou dokumentáciou. Doporučujeme spustiť pilot s existujúcimi materiálmi a čistiť iba to, čo sa reálne používa.",
        },
        {
          q: "Kto je za KobiKan?",
          a: "KobiKan je produkt firmy Touch4IT — slovenskej technologickej spoločnosti s viac než 10-ročnou skúsenosťou s enterprise softvérom v zdravotníctve, vesmíre, obrane a financiách.",
        },
        {
          q: "Aké sú náklady?",
          a: "Pilot má fixnú cenu odsúhlasenú vopred. Po pilote pokračujete na ročnej licencii podľa počtu strojov / používateľov. Konkrétnu cenovú ponuku pripravíme po prvej konzultácii.",
        },
      ],
    },
    finalCta: {
      headline: "Ukážeme vám to na vašich vlastných strojoch.",
      sub: "Nezáväzná konzultácia. Výsledky viditeľné už počas pilotu.",
      stats: [
        { v: "< 14 dní", l: "Od dokumentácie po funkčný pilot" },
        { v: "100 %", l: "Vaše dáta ostávajú vo vašej sieti" },
        { v: "1:1", l: "Konzultácia s naším tímom" },
      ],
      cta: "Naplánovať demo",
      secondary: "Alebo nás kontaktujte priamo",
    },
    form: {
      title: "Naplánovať demo",
      name: "Meno",
      company: "Spoločnosť",
      email: "Email",
      phone: "Telefón",
      message: "Správa",
      submit: "Odoslať",
      submitting: "Odosielam…",
      success: "Ďakujeme, ozveme sa do 24 hodín.",
      error: "Niečo sa pokazilo. Skúste to znova alebo nás kontaktujte priamo.",
    },
    footer: { rights: "Všetky práva vyhradené.", powered: "Powered by Touch4IT" },
    cookie: {
      msg: "Používame iba nevyhnutné cookies a anonymné meranie návštevnosti. Bez nich web nefunguje korektne.",
      accept: "Súhlasím",
      reject: "Len nevyhnutné",
    },
    mockups: {
      heroChat: {
        header: "kobikan.app / line-7",
        q1: "Error E-417 na CNC linke 7. Čo robím?",
        a1: "E-417 = spindle overload. Skontrolujte chladenie a tlak (≥ 4,2 bar). V 73 % prípadov stačí výmena filtra F-22.",
        source: "Zdroj: manual_cnc_v3.pdf · str. 142 · logbook #1847",
        q2: "Aký je SKU filtra?",
        a2: "F-22-A · 4 ks na sklade · regál B3-04",
      },
      features: {
        chatHeader: "chat · línia 7",
        chatQ: "Aké je nastavenie tlaku pre F-22?",
        chatA: "4,2–4,8 bar. Pri poklese pod 4,0 bar zastaviť linku.",
        chatSource: "→ manual_cnc_v3.pdf p.142",
        voiceTranscript: '"Vymenil som filter F-22, tlak je späť na 4,5 bar."',
        voiceSuccess: "✓ Záznam #1848 vytvorený",
        logbookHeader: "logbook · CNC-07",
        logbookRows: [
          { id: "#1847", title: "Spindle overload", who: "J. Mráz" },
          { id: "#1812", title: "Coolant leak", who: "P. Novák" },
          { id: "#1798", title: "Sensor calibrate", who: "T. Kováč" },
        ],
        integrations: ["Dokumenty", "PLC programy", "MES / SQL", "ERP / SAP", "Schémy", "Logbook"],
        alerts: [
          { text: "CNC-07 alarm E-417", priority: "P1" },
          { text: "Press-02 service due", priority: "P2" },
        ],
      },
    },
  },
  en: {
    meta: {
      title: "KobiKan — AI maintenance assistant for industrial operations",
      description:
        "KobiKan captures your plant knowledge and turns it into instant answers for every technician. Pilot in 14 days. On-prem or cloud. A Touch4IT project.",
      orgDescription: "AI maintenance assistant for industrial operations.",
    },
    nav: {
      features: "Features",
      how: "How It Works",
      why: "Why KobiKan",
      deployment: "Deployment",
      contact: "Contact",
      about: "About",
      faq: "FAQ",
      cta: "Book a Demo",
    },
    hero: {
      eyebrow: "AI Maintenance Assistant",
      h1a: "Your best technician just retired.",
      h1b: "KobiKan didn't.",
      sub: "KobiKan captures the knowledge of your operations and turns it into instant answers — for every technician, on every shift, on every machine.",
      cta: "Book a Demo",
      secondary: "See how it works",
      stat1: "of experienced technicians will retire within 5–10 years",
      stat2: "hours lost weekly searching for the right information",
      stat3: "of failures originate from missing information",
    },
    problem: {
      label: "Solution",
      headline: "One platform for knowledge, data and maintenance.",
      items: [
        {
          title: "Unified access to data and communication",
          body: "We connect SAP, MES, CMMS, technical manuals, schematics, I/O lists and PLC programs into one place. Technicians ask in natural language through the familiar chat interface — KobiKan finds the answer across systems and always shows the source. The same interface also lets technicians message each other, hand over shifts and share procedures — all team communication stays in one place and becomes part of the knowledge base.",
        },
        {
          title: "Digitized maintenance records",
          body: "End of paper logbooks and scattered spreadsheets. Repair, inspection and incident reports are dictated by voice or captured in structured form — one consistent format across shifts, machines and plants. Data is immediately usable for analytics, MTTR/MTBF and predictive maintenance.",
        },
        {
          title: "AI assistant for every technician",
          body: "A smart colleague that knows your operation — manuals, failure history and the know-how of senior staff. Walks the team through diagnostics step by step, proposes solutions validated on your own data, and learns from every resolved case. Available 24/7 in English, German, Czech, Japanese, and Slovak.",
        },
      ],
      closing: "Three pillars. One platform. Immediate impact.",
    },
    intro: {
      label: "Introducing KobiKan",
      headline: "Your digital colleague. Available 24/7.",
      items: [
        { title: "Understands", body: "Manuals, PLC code, service records and team expertise." },
        {
          title: "Answers",
          body: "Immediately, precisely, in the technician's language, with source references.",
        },
        { title: "Integrates", body: "Works with your existing systems. No replacement needed." },
        { title: "Learns", body: "Every resolved case makes the system smarter." },
      ],
    },
    features: {
      eyebrow: "Key features",
      headline: "Built for everyday operations.",
      list: [
        {
          tag: "AI Conversational Interface",
          title: "Ask anything. Get the answer in seconds.",
          body: "Intuitive interface — no training required. Operators, technicians and engineers get trusted answers in plain language, with source references.",
        },
        {
          tag: "Voice Control",
          title: "Hands free. No typing required.",
          body: "Technicians report repairs by voice. KobiKan automatically creates a structured logbook entry — without touching a keyboard.",
        },
        {
          tag: "Knowledge Logbook",
          title: "Institutional memory that never retires.",
          body: "We capture your team's best practices and turn them into shared knowledge. New technicians onboard faster, senior expertise stays accessible.",
        },
        {
          tag: "Integrations",
          title: "Connects to the systems you already use.",
          body: "Documents, schematics, I/O lists, PLC programs, MES, SQL, ERP, team knowledge. No new hardware. No tool replacement.",
        },
        {
          tag: "Real-time Dashboard",
          title: "Full visibility. One screen.",
          body: "Machine status, incident history, MTTR, MTTB, priority task lists for shifts and teams. Built for maintenance managers who need real data, fast.",
        },
      ],
    },
    who: {
      headline: "Built for plants where knowledge is the bottleneck.",
      items: [
        "Manufacturing plants with non-standardized processes",
        "Teams facing high turnover or retirement of senior workers",
        "Companies wanting to bridge production and maintenance",
      ],
      closing:
        "If your team still relies on scattered Teams messages, Excel sheets, and tribal knowledge — KobiKan is built for you.",
    },
    how: {
      label: "From first meeting to live system",
      headline: "Pilot in 2 weeks. No risk.",
      steps: [
        {
          n: "01",
          title: "Intro Demo",
          body: "We walk through KobiKan on your own data and scope the pilot together.",
        },
        {
          n: "02",
          title: "Pilot (< 14 days)",
          body: "First version of the assistant live on your real machines and documentation.",
        },
        {
          n: "03",
          title: "Full Deployment",
          body: "Scale to the entire company — one platform, all operations.",
        },
        {
          n: "04",
          title: "Full Compliance",
          body: "Compliant with your security, IT and regulatory standards.",
        },
      ],
      cta: "Book a demo",
    },
    diff: {
      headline: "Not just another chatbot. Built for industrial reality.",
      cols: { kobikan: "KobiKan", others: "Other Vendors" },
      rows: [
        { label: "Reads documents + PLC code + process data", k: "✓", o: "✓" },
        { label: "On-premise deployment option", k: "✓", o: "—" },
        { label: "Pilot within 2 weeks", k: "✓", o: "✓" },
        { label: "Team knowledge capture (logbook)", k: "✓", o: "—" },
        { label: "Voice control for field work", k: "✓", o: "—" },
        { label: "Web app + hardware included", k: "✓", o: "—" },
      ],
    },
    deploy: {
      headline: "Deployment that grows with you.",
      cards: [
        { title: "Full Cloud", body: "Fastest launch, lowest cost. Data stored in Slovakia/EU." },
        {
          title: "On-Prem + AI Cloud",
          body: "Core and data in your factory. AI in the cloud. Best for most enterprise clients.",
          tag: "Most popular",
        },
        {
          title: "Full On-Prem",
          body: "Maximum data control. For exceptional enterprise security requirements.",
        },
      ],
      note: "GDPR compliant. Data never leaves your infrastructure if you choose On-Prem.",
    },
    trust: {
      headline: "Security you can trust",
      badges: [
        "GDPR Compliant",
        "On-Premise Deployment",
        "Private Cloud Option",
        "SAP / MES / SQL Integration",
      ],
    },
    finalCta: {
      headline: "We'll show you on your own machines.",
      sub: "No-obligation consultation. Results visible during the pilot.",
      stats: [
        { v: "< 14 days", l: "From documentation to working pilot" },
        { v: "100%", l: "Your data stays in your network" },
        { v: "1:1", l: "Consultation with our team" },
      ],
      cta: "Book a Demo",
      secondary: "Or contact us directly",
    },
    form: {
      title: "Book a Demo",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send",
      submitting: "Sending…",
      success: "Thanks — we'll be in touch within 24 hours.",
      error: "Something went wrong. Please try again or contact us directly.",
    },
    about: {
      label: "About",
      headline: "A Touch4IT project focused on industrial manufacturing.",
      lead: "KobiKan is built by Touch4IT — a Slovak software company with 10+ years of building enterprise platforms for demanding environments in healthcare, space, defense and finance. KobiKan was created as a focused product for plants and maintenance teams, combining Touch4IT's engineering experience with the reality of industrial production.",
      bullets: [
        "10+ years building enterprise software in regulated industries.",
        "Engineering teams in Bratislava, projects across the EU.",
        "On-prem and cloud deployments aligned with GDPR and enterprise IT standards.",
      ],
      clientsLabel: "Touch4IT works with",
      clients: [
        "AbbVie",
        "Coca-Cola",
        "ESA",
        "Eumetsat",
        "Ferrero",
        "Raiffeisen",
        "Saint-Gobain",
        "Stada",
      ],
      cta: "More about Touch4IT",
    },
    faq: {
      label: "FAQ",
      headline: "Frequently asked questions.",
      items: [
        {
          q: "Where is our data stored?",
          a: "In a full on-prem deployment your data never leaves the network — the model runs on your own servers. In a hybrid setup, documents and process data stay in your infrastructure; only anonymized questions go to the AI in the cloud (EU regions).",
        },
        {
          q: "How long does the pilot take?",
          a: "Typically 14 days from NDA. Week 1 — connect documentation and data from 3–10 machines. Week 2 — testing with technicians on shift and measuring real impact.",
        },
        {
          q: "What systems does KobiKan integrate with?",
          a: "PDF manuals, schematics, I/O lists, PLC programs (Siemens S7, Rockwell, Beckhoff, Mitsubishi), MES, SCADA, SQL, SAP, ERP and CMMS. Read-only by default.",
        },
        {
          q: "Do we need to clean up the documentation first?",
          a: "No. KobiKan handles imperfect documentation. We recommend running the pilot with what you already have and cleaning only what is actually used.",
        },
        {
          q: "Who builds KobiKan?",
          a: "KobiKan is a product by Touch4IT — a Slovak software company with 10+ years of experience in enterprise platforms for healthcare, space, defense and finance.",
        },
        {
          q: "What does it cost?",
          a: "The pilot has a fixed, agreed-upon price. After the pilot you continue on an annual license based on the number of machines / users. A concrete quote follows the first consultation.",
        },
      ],
    },
    footer: { rights: "All rights reserved.", powered: "Powered by Touch4IT" },
    cookie: {
      msg: "We only use essential cookies and anonymous analytics. They are required for the site to work properly.",
      accept: "Accept",
      reject: "Essential only",
    },
    mockups: {
      heroChat: {
        header: "kobikan.app / line-7",
        q1: "Error E-417 on CNC line 7. What do I do?",
        a1: "E-417 = spindle overload. Check cooling and pressure (≥ 4.2 bar). In 73% of cases replacing filter F-22 is enough.",
        source: "Source: manual_cnc_v3.pdf · p. 142 · logbook #1847",
        q2: "What is the filter SKU?",
        a2: "F-22-A · 4 in stock · aisle B3-04",
      },
      features: {
        chatHeader: "chat · line 7",
        chatQ: "What is the pressure setting for F-22?",
        chatA: "4.2–4.8 bar. Stop the line if pressure drops below 4.0 bar.",
        chatSource: "→ manual_cnc_v3.pdf p.142",
        voiceTranscript: '"Replaced filter F-22, pressure is back at 4.5 bar."',
        voiceSuccess: "✓ Entry #1848 created",
        logbookHeader: "logbook · CNC-07",
        logbookRows: [
          { id: "#1847", title: "Spindle overload", who: "J. Mráz" },
          { id: "#1812", title: "Coolant leak", who: "P. Novák" },
          { id: "#1798", title: "Sensor calibrate", who: "T. Kováč" },
        ],
        integrations: [
          "Documents",
          "PLC programs",
          "MES / SQL",
          "ERP / SAP",
          "Schematics",
          "Logbook",
        ],
        alerts: [
          { text: "CNC-07 alarm E-417", priority: "P1" },
          { text: "Press-02 service due", priority: "P2" },
        ],
      },
    },
  },
  ja: {
    meta: {
      title: "KobiKan — 産業現場向けAIメンテナンスアシスタント",
      description:
        "KobiKanは現場の知識を捉え、すべての技術者に即座の回答を提供します。14日間のパイロット。オンプレまたはクラウド。Touch4ITのプロジェクト。",
      orgDescription: "産業現場向けAIメンテナンスアシスタント。",
    },
    nav: {
      features: "機能",
      how: "仕組み",
      why: "選ばれる理由",
      deployment: "導入",
      contact: "お問い合わせ",
      about: "会社概要",
      faq: "FAQ",
      cta: "デモを予約",
    },
    hero: {
      eyebrow: "メンテナンス向けAIアシスタント",
      h1a: "最高の技術者が定年を迎えました。",
      h1b: "KobiKanは残ります。",
      sub: "KobiKanは現場の知識を捉え、すべての技術者、すべてのシフト、すべての機械に即座の回答を届けます。",
      cta: "デモを予約",
      secondary: "仕組みを見る",
      stat1: "の経験豊富な技術者が5〜10年以内に定年を迎える",
      stat2: "時間/週 — 正しい情報を探すために失われる",
      stat3: "の故障は情報不足が原因",
    },
    problem: {
      label: "ソリューション",
      headline: "知識・データ・メンテナンスを統合する1つのプラットフォーム。",
      items: [
        {
          title: "データとコミュニケーションへの統合アクセス",
          body: "SAP、MES、CMMS、技術マニュアル、回路図、I/Oリスト、PLCプログラムを1か所に接続。技術者は馴染みのあるチャットUIで自然言語で質問 — KobiKanがシステム横断で回答を見つけ、常に出典を表示。同じUIで技術者同士の連絡、引き継ぎ、手順の共有も可能 — チームのコミュニケーションがすべて1か所に集約され、ナレッジベースの一部になります。",
        },
        {
          title: "メンテナンス記録のデジタル化",
          body: "紙の日誌や散在するExcelは終わり。修理・点検・インシデント記録を音声入力または構造化フォームで記録 — シフト・機械・工場をまたいで統一フォーマット。MTTR/MTBF分析や予知保全に即座に活用可能。",
        },
        {
          title: "すべての技術者向けAIアシスタント",
          body: "現場を知るスマートな同僚 — マニュアル、故障履歴、ベテランのノウハウ。診断をステップごとに案内し、自社データで検証された解決策を提案。解決するたびに学習。24時間365日、日本語・英語・ドイツ語・チェコ語・スロバキア語対応。",
        },
      ],
      closing: "3つの柱。1つのプラットフォーム。即座の効果。",
    },
    intro: {
      label: "KobiKanのご紹介",
      headline: "24時間365日利用できるデジタル同僚。",
      items: [
        { title: "理解する", body: "マニュアル、PLCコード、サービス記録、チームの専門知識。" },
        { title: "回答する", body: "即座に、正確に、技術者の言葉で、出典付き。" },
        { title: "統合する", body: "既存システムと連携。置き換え不要。" },
        { title: "学習する", body: "解決するたびにシステムが賢くなる。" },
      ],
    },
    features: {
      eyebrow: "主要機能",
      headline: "日常の現場運用のために構築。",
      list: [
        {
          tag: "会話型AIインターフェース",
          title: "何でも聞いてください。数秒で回答。",
          body: "直感的なUI — トレーニング不要。オペレーター、技術者、エンジニアが平易な言葉で信頼できる回答を、出典付きで取得。",
        },
        {
          tag: "音声操作",
          title: "ハンズフリー。入力不要。",
          body: "技術者が音声で修理を報告。KobiKanが構造化されたログブックエントリを自動作成 — キーボードに触れずに。",
        },
        {
          tag: "ナレッジログブック",
          title: "定年を迎えない組織の記憶。",
          body: "チームのベストプラクティスを捉え、共有知識に変換。新入り技術者の立ち上がりを加速、ベテランの知見を残す。",
        },
        {
          tag: "統合",
          title: "既存システムと接続。",
          body: "ドキュメント、回路図、I/Oリスト、PLCプログラム、MES、SQL、ERP、チーム知識。新しいハードウェア不要。ツールの置き換え不要。",
        },
        {
          tag: "リアルタイムダッシュボード",
          title: "完全な可視性。1つの画面。",
          body: "機械状態、インシデント履歴、MTTR、MTTB、シフトとチームの優先タスク。迅速なデータが必要なメンテナンスマネージャー向け。",
        },
      ],
    },
    who: {
      headline: "知識がボトルネックになる工場のために。",
      items: [
        "非標準化プロセスを持つ製造工場",
        "高い離職率やベテラン技術者の定年に直面するチーム",
        "生産とメンテナンスを1つのシステムに統合したい企業",
      ],
      closing:
        "Teamsの散在メッセージ、Excel、暗黙知に頼っているチーム — KobiKanはあなたのために作られました。",
    },
    how: {
      label: "初回ミーティングから稼働システムまで",
      headline: "2週間でパイロット。リスクなし。",
      steps: [
        {
          n: "01",
          title: "紹介デモ",
          body: "自社データでKobiKanを実演し、パイロット範囲を一緒に決定。",
        },
        {
          n: "02",
          title: "パイロット（14日未満）",
          body: "実機とドキュメント上でアシスタントの初版を稼働。",
        },
        { n: "03", title: "全社展開", body: "全拠点へ拡大 — 1プラットフォーム、すべての現場。" },
        { n: "04", title: "完全コンプライアンス", body: "セキュリティ、IT、規制基準に準拠。" },
      ],
      cta: "デモを予約",
    },
    diff: {
      headline: "単なるチャットボットではない。産業現場のために構築。",
      cols: { kobikan: "KobiKan", others: "他社" },
      rows: [
        { label: "ドキュメント + PLCコード + プロセスデータを読み取り", k: "✓", o: "✓" },
        { label: "オンプレミス導入オプション", k: "✓", o: "—" },
        { label: "2週間以内のパイロット", k: "✓", o: "✓" },
        { label: "チーム知識の捕捉（ログブック）", k: "✓", o: "—" },
        { label: "現場向け音声操作", k: "✓", o: "—" },
        { label: "Webアプリ + ハードウェア込み", k: "✓", o: "—" },
      ],
    },
    deploy: {
      headline: "成長に合わせて拡張する導入。",
      cards: [
        {
          title: "フルクラウド",
          body: "最速の立ち上げ、最低コスト。データはスロバキア/EUに保存。",
        },
        {
          title: "オンプレ + AIクラウド",
          body: "コアとデータは工場内。AIはクラウド。大多数のエンタープライズ向け。",
          tag: "最も人気",
        },
        { title: "フルオンプレ", body: "最大のデータ管理。特別なセキュリティ要件向け。" },
      ],
      note: "GDPR準拠。オンプレ選択時、データはインフラから出ません。",
    },
    trust: {
      headline: "信頼できるセキュリティ",
      badges: ["GDPR準拠", "オンプレミス導入", "プライベートクラウド", "SAP / MES / SQL統合"],
    },
    about: {
      label: "会社概要",
      headline: "産業向けに特化したTouch4ITのプロジェクト。",
      lead: "KobiKanはTouch4ITが開発 — ヘルスケア、宇宙、防衛、金融の厳しい環境向けエンタープライズプラットフォームを10年以上構築してきたスロバキアのソフトウェア企業。KobiKanは工場とメンテナンスチーム向けの特化製品として、Touch4ITのエンジニアリング経験と産業生産の現実を融合。",
      bullets: [
        "規制産業向けエンタープライズソフトウェア10年以上の実績。",
        "ブラチスラバのエンジニアリングチーム、EU全体のプロジェクト。",
        "GDPRとエンタープライズIT基準に沿ったオンプレ・クラウド導入。",
      ],
      clientsLabel: "Touch4ITの主要クライアント",
      clients: [
        "AbbVie",
        "Coca-Cola",
        "ESA",
        "Eumetsat",
        "Ferrero",
        "Raiffeisen",
        "Saint-Gobain",
        "Stada",
      ],
      cta: "Touch4ITについて",
    },
    faq: {
      label: "FAQ",
      headline: "よくある質問。",
      items: [
        {
          q: "データはどこに保存されますか？",
          a: "フルオンプレ導入ではデータはネットワークから出ません — モデルは自社サーバーで稼働。ハイブリッドではドキュメントとプロセスデータは自社インフラに留まり、クラウドAI（EUリージョン）には匿名化された質問のみ送信。",
        },
        {
          q: "パイロット期間は？",
          a: "通常NDA署名から14日。1週目 — 3〜10台の機械のドキュメントとデータを接続。2週目 — シフト中の技術者とテストし、実効果を測定。",
        },
        {
          q: "KobiKanはどのシステムと統合できますか？",
          a: "PDFマニュアル、回路図、I/Oリスト、PLCプログラム（Siemens S7、Rockwell、Beckhoff、Mitsubishi）、MES、SCADA、SQL、SAP、ERP、CMMS。デフォルトは読み取り専用。",
        },
        {
          q: "導入前にドキュメントを整理する必要がありますか？",
          a: "いいえ。KobiKanは不完全なドキュメントにも対応。既存資料でパイロットを開始し、実際に使われる部分のみ整理することを推奨。",
        },
        {
          q: "KobiKanの開発元は？",
          a: "KobiKanはTouch4ITの製品 — ヘルスケア、宇宙、防衛、金融向けエンタープライズプラットフォームを10年以上構築してきたスロバキアのテクノロジー企業。",
        },
        {
          q: "費用は？",
          a: "パイロットは事前合意の固定価格。パイロット後は機械数/ユーザー数に基づく年間ライセンス。初回コンサルテーション後に具体的な見積もり。",
        },
      ],
    },
    finalCta: {
      headline: "自社の機械で実演します。",
      sub: "無料相談。パイロット中に結果を確認。",
      stats: [
        { v: "14日未満", l: "ドキュメントから稼働パイロットまで" },
        { v: "100%", l: "データは自社ネットワーク内に留まる" },
        { v: "1:1", l: "チームとの個別相談" },
      ],
      cta: "デモを予約",
      secondary: "または直接お問い合わせ",
    },
    form: {
      title: "デモを予約",
      name: "お名前",
      company: "会社名",
      email: "メール",
      phone: "電話",
      message: "メッセージ",
      submit: "送信",
      submitting: "送信中…",
      success: "ありがとうございます。24時間以内にご連絡します。",
      error: "送信に失敗しました。再度お試しいただくか、直接お問い合わせください。",
    },
    footer: { rights: "All rights reserved.", powered: "Powered by Touch4IT" },
    cookie: {
      msg: "必須Cookieと匿名のアクセス解析のみを使用します。これらがないとサイトが正しく動作しません。",
      accept: "同意する",
      reject: "必須のみ",
    },
    mockups: {
      heroChat: {
        header: "kobikan.app / line-7",
        q1: "CNCライン7でエラーE-417。どうすれば？",
        a1: "E-417 = スピンドル過負荷。冷却と圧力（≥ 4.2 bar）を確認。73%のケースでフィルターF-22の交換で解決。",
        source: "出典: manual_cnc_v3.pdf · p. 142 · logbook #1847",
        q2: "フィルターのSKUは？",
        a2: "F-22-A · 在庫4個 · 棚 B3-04",
      },
      features: {
        chatHeader: "chat · ライン7",
        chatQ: "F-22の圧力設定は？",
        chatA: "4.2〜4.8 bar。4.0 bar未満でライン停止。",
        chatSource: "→ manual_cnc_v3.pdf p.142",
        voiceTranscript: "「F-22フィルターを交換、圧力4.5 barに復旧。」",
        voiceSuccess: "✓ 記録 #1848 作成",
        logbookHeader: "logbook · CNC-07",
        logbookRows: [
          { id: "#1847", title: "Spindle overload", who: "J. Mráz" },
          { id: "#1812", title: "Coolant leak", who: "P. Novák" },
          { id: "#1798", title: "Sensor calibrate", who: "T. Kováč" },
        ],
        integrations: [
          "ドキュメント",
          "PLCプログラム",
          "MES / SQL",
          "ERP / SAP",
          "回路図",
          "Logbook",
        ],
        alerts: [
          { text: "CNC-07 alarm E-417", priority: "P1" },
          { text: "Press-02 service due", priority: "P2" },
        ],
      },
    },
  },
  de: {
    meta: {
      title: "KobiKan — KI-Wartungsassistent für industrielle Betriebe",
      description:
        "KobiKan erfasst das Wissen Ihres Betriebs und liefert sofortige Antworten für jeden Techniker. Pilot in 14 Tagen. On-Prem oder Cloud. Ein Touch4IT-Projekt.",
      orgDescription: "KI-Wartungsassistent für industrielle Betriebe.",
    },
    nav: {
      features: "Funktionen",
      how: "So funktioniert's",
      why: "Warum KobiKan",
      deployment: "Bereitstellung",
      contact: "Kontakt",
      about: "Über uns",
      faq: "FAQ",
      cta: "Demo buchen",
    },
    hero: {
      eyebrow: "KI-Wartungsassistent",
      h1a: "Ihr bester Techniker ist in Rente gegangen.",
      h1b: "KobiKan nicht.",
      sub: "KobiKan erfasst das Wissen Ihres Betriebs und liefert sofortige Antworten — für jeden Techniker, jede Schicht, jede Maschine.",
      cta: "Demo buchen",
      secondary: "So funktioniert's",
      stat1: "erfahrene Techniker gehen in 5–10 Jahren in Rente",
      stat2: "Stunden pro Woche gehen für die Suche nach Informationen verloren",
      stat3: "der Ausfälle entstehen durch fehlende Informationen",
    },
    problem: {
      label: "Lösung",
      headline: "Eine Plattform für Wissen, Daten und Wartung.",
      items: [
        {
          title: "Einheitlicher Zugang zu Daten und Kommunikation",
          body: "Wir verbinden SAP, MES, CMMS, technische Handbücher, Schaltpläne, I/O-Listen und SPS-Programme an einem Ort. Techniker fragen in natürlicher Sprache über die vertraute Chat-Oberfläche — KobiKan findet die Antwort systemübergreifend und zeigt stets die Quelle. Im selben Interface tauschen sich Techniker aus, übergeben Schichten und teilen Verfahren — die gesamte Teamkommunikation bleibt an einem Ort und wird Teil der Wissensbasis.",
        },
        {
          title: "Digitalisierte Wartungsprotokolle",
          body: "Schluss mit Papierlogbüchern und verstreuten Tabellen. Reparatur-, Inspektions- und Störungsberichte werden per Sprache erfasst oder strukturiert dokumentiert — ein einheitliches Format über Schichten, Maschinen und Standorte hinweg. Daten sind sofort nutzbar für Analysen, MTTR/MTBF und vorausschauende Wartung.",
        },
        {
          title: "KI-Assistent für jeden Techniker",
          body: "Ein intelligenter Kollege, der Ihren Betrieb kennt — Handbücher, Störungshistorie und das Know-how erfahrener Mitarbeiter. Führt Schritt für Schritt durch die Diagnose, schlägt Lösungen vor, die an Ihren eigenen Daten validiert sind, und lernt aus jedem gelösten Fall. Verfügbar 24/7 auf Deutsch, Englisch, Tschechisch, Japanisch und Slowakisch.",
        },
      ],
      closing: "Drei Säulen. Eine Plattform. Sofortige Wirkung.",
    },
    intro: {
      label: "KobiKan im Überblick",
      headline: "Ihr digitaler Kollege. Rund um die Uhr verfügbar.",
      items: [
        { title: "Versteht", body: "Handbücher, SPS-Code, Serviceprotokolle und Teamexpertise." },
        {
          title: "Antwortet",
          body: "Sofort, präzise, in der Sprache des Technikers, mit Quellenangaben.",
        },
        {
          title: "Integriert",
          body: "Funktioniert mit Ihren bestehenden Systemen. Kein Ersatz nötig.",
        },
        { title: "Lernt", body: "Jeder gelöste Fall macht das System schlauer." },
      ],
    },
    features: {
      eyebrow: "Kernfunktionen",
      headline: "Für den täglichen Betrieb gebaut.",
      list: [
        {
          tag: "Konversationelle KI",
          title: "Fragen Sie alles. Antwort in Sekunden.",
          body: "Intuitive Oberfläche — keine Schulung nötig. Bediener, Techniker und Ingenieure erhalten verlässliche Antworten in verständlicher Sprache, mit Quellenangaben.",
        },
        {
          tag: "Sprachsteuerung",
          title: "Freihändig. Ohne Tippen.",
          body: "Techniker melden Reparaturen per Sprache. KobiKan erstellt automatisch einen strukturierten Logbucheintrag — ohne Tastatur.",
        },
        {
          tag: "Wissens-Logbuch",
          title: "Institutionelles Gedächtnis, das nicht in Rente geht.",
          body: "Wir erfassen die Best Practices Ihres Teams und machen sie zu geteiltem Wissen. Neue Techniker starten schneller, das Know-how erfahrener Kollegen bleibt verfügbar.",
        },
        {
          tag: "Integrationen",
          title: "Anbindung an Ihre bestehenden Systeme.",
          body: "Dokumente, Schaltpläne, I/O-Listen, SPS-Programme, MES, SQL, ERP, Teamwissen. Keine neue Hardware. Kein Toolwechsel.",
        },
        {
          tag: "Echtzeit-Dashboard",
          title: "Voller Überblick. Ein Bildschirm.",
          body: "Maschinenstatus, Störungshistorie, MTTR, MTTB, Prioritätsaufgaben für Schichten und Teams. Für Wartungsleiter, die schnell echte Daten brauchen.",
        },
      ],
    },
    who: {
      headline: "Für Betriebe, in denen Wissen der Engpass ist.",
      items: [
        "Fertigungsbetriebe mit nicht standardisierten Prozessen",
        "Teams mit hoher Fluktuation oder dem Ausscheiden erfahrener Mitarbeiter",
        "Unternehmen, die Produktion und Wartung verbinden wollen",
      ],
      closing:
        "Wenn Ihr Team noch auf verstreute Teams-Nachrichten, Excel-Tabellen und implizites Wissen angewiesen ist — KobiKan ist für Sie gemacht.",
    },
    how: {
      label: "Vom ersten Gespräch bis zum Live-System",
      headline: "Pilot in 2 Wochen. Ohne Risiko.",
      steps: [
        {
          n: "01",
          title: "Einführungsdemo",
          body: "Wir zeigen KobiKan an Ihren eigenen Daten und definieren gemeinsam den Pilotumfang.",
        },
        {
          n: "02",
          title: "Pilot (< 14 Tage)",
          body: "Erste Version des Assistenten live an Ihren echten Maschinen und Dokumentation.",
        },
        {
          n: "03",
          title: "Unternehmensweite Einführung",
          body: "Ausweitung auf das gesamte Unternehmen — eine Plattform, alle Standorte.",
        },
        {
          n: "04",
          title: "Volle Compliance",
          body: "Konform mit Ihren Sicherheits-, IT- und Regulierungsanforderungen.",
        },
      ],
      cta: "Demo buchen",
    },
    diff: {
      headline: "Nicht nur ein weiterer Chatbot. Für die Industrie gebaut.",
      cols: { kobikan: "KobiKan", others: "Andere Anbieter" },
      rows: [
        { label: "Liest Dokumente + SPS-Code + Prozessdaten", k: "✓", o: "✓" },
        { label: "On-Premise-Bereitstellung", k: "✓", o: "—" },
        { label: "Pilot innerhalb von 2 Wochen", k: "✓", o: "✓" },
        { label: "Erfassung von Teamwissen (Logbuch)", k: "✓", o: "—" },
        { label: "Sprachsteuerung im Feld", k: "✓", o: "—" },
        { label: "Web-App + Hardware inklusive", k: "✓", o: "—" },
      ],
    },
    deploy: {
      headline: "Bereitstellung, die mit Ihnen wächst.",
      cards: [
        {
          title: "Full Cloud",
          body: "Schnellster Start, niedrigste Kosten. Daten in der Slowakei/EU gespeichert.",
        },
        {
          title: "On-Prem + KI-Cloud",
          body: "Kern und Daten in Ihrer Fabrik. KI in der Cloud. Ideal für die meisten Unternehmen.",
          tag: "Am beliebtesten",
        },
        {
          title: "Full On-Prem",
          body: "Maximale Datenkontrolle. Für besondere Anforderungen an Unternehmenssicherheit.",
        },
      ],
      note: "DSGVO-konform. Bei On-Prem verlassen Ihre Daten nie Ihre Infrastruktur.",
    },
    trust: {
      headline: "Sicherheit, der Sie vertrauen können",
      badges: [
        "DSGVO-konform",
        "On-Premise-Bereitstellung",
        "Private Cloud",
        "SAP / MES / SQL-Integration",
      ],
    },
    about: {
      label: "Über uns",
      headline: "Ein Touch4IT-Projekt mit Fokus auf Industrie.",
      lead: "KobiKan wird von Touch4IT entwickelt — einem slowakischen Softwareunternehmen mit über 10 Jahren Erfahrung in Enterprise-Plattformen für anspruchsvolle Umgebungen in Gesundheitswesen, Raumfahrt, Verteidigung und Finanzen. KobiKan ist ein spezialisiertes Produkt für Werke und Wartungsteams und verbindet Touch4ITs Engineering-Know-how mit der Realität industrieller Produktion.",
      bullets: [
        "10+ Jahre Enterprise-Software in regulierten Branchen.",
        "Engineering-Teams in Bratislava, Projekte in der gesamten EU.",
        "On-Prem- und Cloud-Bereitstellungen gemäß DSGVO und IT-Standards.",
      ],
      clientsLabel: "Touch4IT arbeitet mit",
      clients: [
        "AbbVie",
        "Coca-Cola",
        "ESA",
        "Eumetsat",
        "Ferrero",
        "Raiffeisen",
        "Saint-Gobain",
        "Stada",
      ],
      cta: "Mehr über Touch4IT",
    },
    faq: {
      label: "FAQ",
      headline: "Häufig gestellte Fragen.",
      items: [
        {
          q: "Wo werden unsere Daten gespeichert?",
          a: "Bei vollständiger On-Prem-Bereitstellung verlassen Ihre Daten nie Ihr Netzwerk — das Modell läuft auf Ihren Servern. Im Hybridmodus bleiben Dokumente und Prozessdaten in Ihrer Infrastruktur; nur anonymisierte Fragen gehen an die KI in der Cloud (EU-Regionen).",
        },
        {
          q: "Wie lange dauert der Pilot?",
          a: "In der Regel 14 Tage ab NDA. Woche 1 — Anbindung von Dokumentation und Daten von 3–10 Maschinen. Woche 2 — Tests mit Technikern im Schichtbetrieb und Messung des realen Nutzens.",
        },
        {
          q: "Mit welchen Systemen integriert sich KobiKan?",
          a: "PDF-Handbücher, Schaltpläne, I/O-Listen, SPS-Programme (Siemens S7, Rockwell, Beckhoff, Mitsubishi), MES, SCADA, SQL, SAP, ERP und CMMS. Standardmäßig nur Lesezugriff.",
        },
        {
          q: "Müssen wir die Dokumentation vorher bereinigen?",
          a: "Nein. KobiKan kommt auch mit unvollständiger Dokumentation zurecht. Wir empfehlen, den Pilot mit vorhandenen Materialien zu starten und nur das zu bereinigen, was tatsächlich genutzt wird.",
        },
        {
          q: "Wer entwickelt KobiKan?",
          a: "KobiKan ist ein Produkt von Touch4IT — einem slowakischen Softwareunternehmen mit über 10 Jahren Erfahrung in Enterprise-Plattformen für Gesundheitswesen, Raumfahrt, Verteidigung und Finanzen.",
        },
        {
          q: "Was kostet es?",
          a: "Der Pilot hat einen fest vereinbarten Preis. Danach folgt eine Jahreslizenz nach Anzahl der Maschinen / Nutzer. Ein konkretes Angebot erhalten Sie nach dem Erstgespräch.",
        },
      ],
    },
    finalCta: {
      headline: "Wir zeigen es an Ihren eigenen Maschinen.",
      sub: "Unverbindliche Beratung. Ergebnisse bereits im Pilot sichtbar.",
      stats: [
        { v: "< 14 Tage", l: "Von der Dokumentation zum funktionierenden Pilot" },
        { v: "100 %", l: "Ihre Daten bleiben in Ihrem Netzwerk" },
        { v: "1:1", l: "Beratung mit unserem Team" },
      ],
      cta: "Demo buchen",
      secondary: "Oder kontaktieren Sie uns direkt",
    },
    form: {
      title: "Demo buchen",
      name: "Name",
      company: "Unternehmen",
      email: "E-Mail",
      phone: "Telefon",
      message: "Nachricht",
      submit: "Senden",
      submitting: "Wird gesendet…",
      success: "Vielen Dank — wir melden uns innerhalb von 24 Stunden.",
      error:
        "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
    },
    footer: { rights: "Alle Rechte vorbehalten.", powered: "Powered by Touch4IT" },
    cookie: {
      msg: "Wir verwenden nur notwendige Cookies und anonyme Nutzungsstatistiken. Ohne sie funktioniert die Website nicht ordnungsgemäß.",
      accept: "Akzeptieren",
      reject: "Nur notwendige",
    },
    mockups: {
      heroChat: {
        header: "kobikan.app / line-7",
        q1: "Fehler E-417 an CNC-Linie 7. Was tun?",
        a1: "E-417 = Spindelüberlast. Kühlung und Druck prüfen (≥ 4,2 bar). In 73 % der Fälle reicht der Filterwechsel F-22.",
        source: "Quelle: manual_cnc_v3.pdf · S. 142 · Logbuch #1847",
        q2: "Welche SKU hat der Filter?",
        a2: "F-22-A · 4 auf Lager · Regal B3-04",
      },
      features: {
        chatHeader: "Chat · Linie 7",
        chatQ: "Welche Druckeinstellung für F-22?",
        chatA: "4,2–4,8 bar. Linie stoppen, wenn der Druck unter 4,0 bar fällt.",
        chatSource: "→ manual_cnc_v3.pdf S.142",
        voiceTranscript: '"Filter F-22 gewechselt, Druck wieder bei 4,5 bar."',
        voiceSuccess: "✓ Eintrag #1848 erstellt",
        logbookHeader: "Logbuch · CNC-07",
        logbookRows: [
          { id: "#1847", title: "Spindelüberlast", who: "J. Mráz" },
          { id: "#1812", title: "Kühlmittelleck", who: "P. Novák" },
          { id: "#1798", title: "Sensor kalibrieren", who: "T. Kováč" },
        ],
        integrations: [
          "Dokumente",
          "SPS-Programme",
          "MES / SQL",
          "ERP / SAP",
          "Schaltpläne",
          "Logbuch",
        ],
        alerts: [
          { text: "CNC-07 Alarm E-417", priority: "P1" },
          { text: "Press-02 Wartung fällig", priority: "P2" },
        ],
      },
    },
  },
  cs: {
    meta: {
      title: "KobiKan — AI asistent údržby pro průmyslové provozy",
      description:
        "KobiKan zachytí znalosti vašeho provozu a promění je v okamžité odpovědi pro každého technika. Pilot za 14 dní. On-prem nebo cloud. Projekt společnosti Touch4IT.",
      orgDescription: "AI asistent údržby pro průmyslové provozy.",
    },
    nav: {
      features: "Funkce",
      how: "Jak to funguje",
      why: "Proč KobiKan",
      deployment: "Nasazení",
      contact: "Kontakt",
      about: "O nás",
      faq: "FAQ",
      cta: "Naplánovat demo",
    },
    hero: {
      eyebrow: "AI asistent pro údržbu",
      h1a: "Váš nejlepší technik právě odešel do důchodu.",
      h1b: "KobiKan ne.",
      sub: "KobiKan zachycuje znalosti vašeho provozu a mění je v okamžité odpovědi — pro každého technika, na každé směně, u každého stroje.",
      cta: "Naplánovat demo",
      secondary: "Podívejte se, jak to funguje",
      stat1: "zkušených techniků odejde do důchodu v horizontu 5–10 let",
      stat2: "hodin týdně ztracených hledáním správné informace",
      stat3: "poruch vzniká kvůli chybějícím informacím",
    },
    problem: {
      label: "Řešení",
      headline: "Jedna platforma pro znalosti, data a údržbu.",
      items: [
        {
          title: "Jednotný přístup k datům a komunikaci",
          body: "Propojíme SAP, MES, CMMS, technické manuály, schémata, I/O seznamy a PLC programy na jednom místě. Technik se ptá v přirozeném jazyce přes známé chatové rozhraní — KobiKan najde odpověď napříč systémy a vždy ukáže zdroj. Ve stejném rozhraní si technici píší mezi sebou, předávají směny a sdílejí postupy — celá týmová komunikace zůstává na jednom místě a stává se součástí znalostní báze.",
        },
        {
          title: "Digitalizace záznamů údržby",
          body: "Konec papírových deníků a roztroušených Excelů. Záznamy o opravách, kontrolách a incidentech se diktují hlasem nebo zapisují ve strukturované formě — jednotný formát napříč směnami, stroji a závody. Data jsou okamžitě použitelná pro analýzy, MTTR/MTBF a prediktivní údržbu.",
        },
        {
          title: "AI asistent pro každého technika",
          body: "Inteligentní kolega, který zná váš provoz — manuály, historii poruch i postupy seniorů. Navádí krok po kroku při diagnostice, navrhuje řešení ověřená na vašich vlastních datech a učí se z každého vyřešeného případu. Dostupný 24/7 v češtině, slovenštině, němčině, angličtině a japonštině.",
        },
      ],
      closing: "Tři pilíře. Jedna platforma. Okamžitý dopad.",
    },
    intro: {
      label: "Představujeme KobiKan",
      headline: "Váš digitální kolega. Dostupný 24/7.",
      items: [
        { title: "Rozumí", body: "Manuálům, PLC kódu, servisním záznamům a zkušenostem týmu." },
        { title: "Odpovídá", body: "Okamžitě — přesně, jazykem technika, s odkazem na zdroj." },
        { title: "Integruje", body: "Funguje s vašimi stávajícími systémy. Bez náhrady." },
        { title: "Učí se", body: "Každý vyřešený případ dělá systém chytřejším." },
      ],
    },
    features: {
      eyebrow: "Klíčové funkce",
      headline: "Postaveno pro každodenní provoz.",
      list: [
        {
          tag: "Konverzační AI rozhraní",
          title: "Zeptejte se na cokoli. Odpověď za sekundy.",
          body: "Intuitivní rozhraní bez nutnosti školení. Operátoři, technici i inženýři dostanou ověřenou odpověď srozumitelným jazykem, vždy s odkazem na zdroj.",
        },
        {
          tag: "Hlasové ovládání",
          title: "Bez rukou. Bez psaní.",
          body: "Technik nahrává opravu hlasem. KobiKan automaticky vytvoří strukturovaný záznam do deníku — bez dotyku klávesnice.",
        },
        {
          tag: "Logbook znalostí",
          title: "Institucionální paměť, která nikdy neodejde.",
          body: "Zachycujeme nejlepší postupy vašeho týmu a měníme je ve sdílené znalosti. Noví technici se zorientují rychleji, zkušenosti seniorů zůstanou dostupné.",
        },
        {
          tag: "Integrace",
          title: "Propojí se se systémy, které už používáte.",
          body: "Dokumenty, schémata, I/O listy, PLC programy, MES, SQL, ERP, znalosti týmu. Žádný nový hardware, žádná náhrada nástrojů.",
        },
        {
          tag: "Real-time dashboard",
          title: "Úplný přehled. Jedna obrazovka.",
          body: "Stav strojů, historie incidentů, MTTR, MTTB, prioritní úkoly pro směny a týmy. Pro manažery údržby, kteří potřebují skutečná data rychle.",
        },
      ],
    },
    who: {
      headline: "Stvořeno pro závody, kde jsou znalosti úzkým hrdlem.",
      items: [
        "Výrobní závody s nestandardizovanými procesy",
        "Týmy s vysokou fluktuací nebo odchodem zkušených pracovníků",
        "Firmy, které chtějí propojit výrobu a údržbu do jednoho systému",
      ],
      closing:
        "Pokud váš tým stále pracuje s roztroušenými zprávami v Teams, Excel tabulkami a nepopsanými pravidly — KobiKan je stvořen pro vás.",
    },
    how: {
      label: "Od prvního setkání po živý systém",
      headline: "Pilotní provoz za 2 týdny. Bez rizika.",
      steps: [
        {
          n: "01",
          title: "Úvodní demo",
          body: "Ukážeme KobiKan na vašich vlastních datech a prodiskutujeme rozsah pilotu.",
        },
        {
          n: "02",
          title: "Pilot (< 14 dní)",
          body: "První verze asistenta v provozu na vašich reálných strojích a dokumentaci.",
        },
        {
          n: "03",
          title: "Nasazení do celé firmy",
          body: "Rozšíříme na celou společnost — jedna platforma, všechny provozy.",
        },
        {
          n: "04",
          title: "Plná shoda",
          body: "V souladu s vašimi bezpečnostními, IT a regulačními standardy.",
        },
      ],
      cta: "Naplánovat demo",
    },
    diff: {
      headline: "Ne jen další chatbot. Stvořen pro průmyslovou realitu.",
      cols: { kobikan: "KobiKan", others: "Jiní dodavatelé" },
      rows: [
        { label: "Čte dokumenty + PLC kód + procesní data", k: "✓", o: "✓" },
        { label: "Nasazení na vlastní infrastruktuře (on-prem)", k: "✓", o: "—" },
        { label: "Pilot za 2 týdny", k: "✓", o: "✓" },
        { label: "Zachycování znalostí týmu (logbook)", k: "✓", o: "—" },
        { label: "Hlasové ovládání v terénu", k: "✓", o: "—" },
        { label: "Webová aplikace + hardware v ceně", k: "✓", o: "—" },
      ],
    },
    deploy: {
      headline: "Nasazení, které roste s vámi.",
      cards: [
        {
          title: "Plný cloud",
          body: "Nejrychlejší start, nejnižší náklady. Data uložená na Slovensku/v EU.",
        },
        {
          title: "On-Prem + AI cloud",
          body: "Jádro a data ve vaší továrně. AI v cloudu. Nejlepší pro většinu podniků.",
          tag: "Nejoblíbenější",
        },
        {
          title: "Plný On-Prem",
          body: "Maximální kontrola nad daty. Pro výjimečné požadavky na podnikovou bezpečnost.",
        },
      ],
      note: "V souladu s GDPR. Data neopustí vaši infrastrukturu při volbě On-Prem.",
    },
    trust: {
      headline: "Bezpečnost, které můžete důvěřovat",
      badges: [
        "GDPR v souladu",
        "On-Premise nasazení",
        "Privátní cloud",
        "SAP / MES / SQL integrace",
      ],
    },
    about: {
      label: "O nás",
      headline: "Projekt společnosti Touch4IT se zaměřením na průmysl.",
      lead: "KobiKan vyvíjí Touch4IT — slovenská technologická společnost, která více než 10 let staví software pro náročná prostředí ve zdravotnictví, vesmírném průmyslu, obraně a financích. KobiKan vznikl jako specializovaný produkt pro výrobní závody a údržbu, kde se setkává inženýrská zkušenost Touch4IT s realitou průmyslové výroby.",
      bullets: [
        "10+ let zkušeností s enterprise softwarem v regulovaných odvětvích.",
        "Inženýrské týmy v Bratislavě, projekty po celé EU.",
        "On-prem i cloud nasazení v souladu s GDPR a podnikovými IT standardy.",
      ],
      clientsLabel: "Touch4IT spolupracuje s",
      clients: [
        "AbbVie",
        "Coca-Cola",
        "ESA",
        "Eumetsat",
        "Ferrero",
        "Raiffeisen",
        "Saint-Gobain",
        "Stada",
      ],
      cta: "Více o Touch4IT",
    },
    faq: {
      label: "FAQ",
      headline: "Časté otázky.",
      items: [
        {
          q: "Kde jsou uložena naše data?",
          a: "V plném on-prem nasazení neopustí data vaši síť — model běží na vašem serveru. V hybridním režimu jsou dokumenty a procesní data ve vaší infrastruktuře, do AI v cloudu (EU regiony) jdou pouze anonymizované otázky.",
        },
        {
          q: "Jak dlouho trvá pilot?",
          a: "Standardně 14 dní od podpisu NDA. Týden 1 — připojení dokumentace a dat z 3–10 strojů. Týden 2 — testování s techniky a měření reálných benefitů.",
        },
        {
          q: "S jakými systémy se KobiKan integruje?",
          a: "PDF manuály, schémata, I/O seznamy, PLC programy (Siemens S7, Rockwell, Beckhoff, Mitsubishi), MES, SCADA, SQL, SAP, ERP a CMMS. Read-only jako standard.",
        },
        {
          q: "Potřebujeme upravit dokumentaci před nasazením?",
          a: "Ne. KobiKan si poradí i s nedokonalou dokumentací. Doporučujeme spustit pilot se stávajícími materiály a čistit pouze to, co se reálně používá.",
        },
        {
          q: "Kdo stojí za KobiKan?",
          a: "KobiKan je produkt společnosti Touch4IT — slovenské technologické firmy s více než 10letou zkušeností s enterprise softwarem ve zdravotnictví, vesmíru, obraně a financích.",
        },
        {
          q: "Jaké jsou náklady?",
          a: "Pilot má fixní cenu odsouhlasenou předem. Po pilotu pokračujete na roční licenci podle počtu strojů / uživatelů. Konkrétní cenovou nabídku připravíme po první konzultaci.",
        },
      ],
    },
    finalCta: {
      headline: "Ukážeme vám to na vašich vlastních strojích.",
      sub: "Nezávazná konzultace. Výsledky viditelné už během pilotu.",
      stats: [
        { v: "< 14 dní", l: "Od dokumentace po funkční pilot" },
        { v: "100 %", l: "Vaše data zůstávají ve vaší síti" },
        { v: "1:1", l: "Konzultace s naším týmem" },
      ],
      cta: "Naplánovat demo",
      secondary: "Nebo nás kontaktujte přímo",
    },
    form: {
      title: "Naplánovat demo",
      name: "Jméno",
      company: "Společnost",
      email: "E-mail",
      phone: "Telefon",
      message: "Zpráva",
      submit: "Odeslat",
      submitting: "Odesílám…",
      success: "Děkujeme, ozveme se do 24 hodin.",
      error: "Něco se pokazilo. Zkuste to znovu nebo nás kontaktujte přímo.",
    },
    footer: { rights: "Všechna práva vyhrazena.", powered: "Powered by Touch4IT" },
    cookie: {
      msg: "Používáme pouze nezbytné cookies a anonymní měření návštěvnosti. Bez nich web nefunguje správně.",
      accept: "Souhlasím",
      reject: "Pouze nezbytné",
    },
    mockups: {
      heroChat: {
        header: "kobikan.app / line-7",
        q1: "Chyba E-417 na CNC lince 7. Co dělám?",
        a1: "E-417 = přetížení vřetena. Zkontrolujte chlazení a tlak (≥ 4,2 bar). V 73 % případů stačí výměna filtru F-22.",
        source: "Zdroj: manual_cnc_v3.pdf · str. 142 · logbook #1847",
        q2: "Jaké je SKU filtru?",
        a2: "F-22-A · 4 ks na skladě · regál B3-04",
      },
      features: {
        chatHeader: "chat · linka 7",
        chatQ: "Jaké je nastavení tlaku pro F-22?",
        chatA: "4,2–4,8 bar. Při poklesu pod 4,0 bar zastavit linku.",
        chatSource: "→ manual_cnc_v3.pdf str.142",
        voiceTranscript: '"Vyměnil jsem filtr F-22, tlak je zpět na 4,5 bar."',
        voiceSuccess: "✓ Záznam #1848 vytvořen",
        logbookHeader: "logbook · CNC-07",
        logbookRows: [
          { id: "#1847", title: "Přetížení vřetena", who: "J. Mráz" },
          { id: "#1812", title: "Únik chladiva", who: "P. Novák" },
          { id: "#1798", title: "Kalibrace senzoru", who: "T. Kováč" },
        ],
        integrations: [
          "Dokumenty",
          "PLC programy",
          "MES / SQL",
          "ERP / SAP",
          "Schémata",
          "Logbook",
        ],
        alerts: [
          { text: "CNC-07 alarm E-417", priority: "P1" },
          { text: "Press-02 servis due", priority: "P2" },
        ],
      },
    },
  },
};
