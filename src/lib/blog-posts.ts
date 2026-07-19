export type BlogLang = "sk" | "en" | "ja";

export type BlogSection = { h: string; p: string[] };

export type BlogPost = {
  slug: string;
  lang: BlogLang;
  title: string;
  description: string;
  date: string; // ISO
  readMin: number;
  category: string;
  pillar?: boolean;
  intro: string;
  sections: BlogSection[];
  related: string[]; // slugs in same lang
};

import { SITE_URL } from "./site";

export { SITE_URL };

// Static OG image used as default share image for all blog posts.
// Built path so the share-image URL stays absolute on social networks.
export const DEFAULT_BLOG_OG_IMAGE = `${SITE_URL}/og-blog-pillar.jpg`;

// Slug groups for hreflang alternates, ordered as SK, EN, JA.
const TRANSLATION_GROUPS: Array<Record<BlogLang, string>> = [
  {
    sk: "ai-v-priemyselnej-vyrobe",
    en: "ai-in-manufacturing",
    ja: "seizogyo-ni-okeru-ai",
  },
  {
    sk: "ako-ai-znizuje-neplanovane-vypadky",
    en: "how-ai-reduces-unplanned-downtime",
    ja: "ai-de-toppatsu-teishi-wo-sakugen",
  },
  {
    sk: "zachytavanie-znalosti-technikov",
    en: "capturing-technician-knowledge",
    ja: "gijutsusha-no-chishiki-keishou",
  },
  {
    sk: "plc-kod-a-ai",
    en: "plc-code-and-ai",
    ja: "plc-code-to-ai",
  },
];

export function translatedSlugs(post: { lang: BlogLang; slug: string }) {
  const group = TRANSLATION_GROUPS.find((candidate) => candidate[post.lang] === post.slug);
  return group
    ? (Object.entries(group) as Array<[BlogLang, string]>).map(([lang, slug]) => ({ lang, slug }))
    : [];
}

export const POSTS: BlogPost[] = [
  // ============== SK ==============
  {
    slug: "ai-v-priemyselnej-vyrobe",
    lang: "sk",
    title: "AI v priemyselnej výrobe: praktický sprievodca implementáciou v údržbe",
    description:
      "Krok za krokom — ako nasadiť AI v priemyselnom závode, znížiť neplánované výpadky a zachytiť znalosti technikov. Pilot za 2 týždne, on-prem alebo cloud.",
    date: "2026-06-30",
    readMin: 12,
    category: "Sprievodca",
    pillar: true,
    intro:
      "Umelá inteligencia v priemyselnej výrobe nie je o nahrádzaní ľudí. Je o tom, aby každý technik mal v okamihu prístup k najlepším znalostiam, ktoré váš závod kedy získal. Tento sprievodca ukazuje, ako AI prakticky nasadiť v údržbe — od pilotu po celopodnikové nasadenie.",
    sections: [
      {
        h: "Prečo práve teraz",
        p: [
          'Priemerne 50 % skúsených technikov odíde do dôchodku v horizonte 5–10 rokov. Spolu s nimi odchádzajú znalosti, ktoré nikdy neboli zapísané — "prečo tento ventil treba dotiahnuť práve 2/3 otočky", "ktorá poistka pravidelne padá v zime", "v ktorom šuplíku je náhradný snímač".',
          "Súčasne rastie zložitosť strojov. Jeden montážny riadok dnes generuje viac dát za hodinu ako celá továreň pred 15 rokmi. Klasické MES a CMMS systémy ukladajú dáta, ale nepomáhajú technikovi rýchlo nájsť odpoveď v 3 ráno pri stojacej linke.",
        ],
      },
      {
        h: "Čo presne AI v údržbe rieši",
        p: [
          "Okamžité odpovede z dokumentácie. Manuály, schémy, I/O listy, PLC programy a servisné záznamy sú indexované tak, že technik dostane konkrétnu odpoveď so zdrojom, nie 200 strán PDF.",
          "Zachytávanie skúseností. Po každej oprave technik nadiktuje, čo urobil. AI z toho vytvorí štruktúrovaný záznam, ktorý je okamžite vyhľadateľný pre celý tím.",
          "Predikcia a kontext. AI prepojí dáta zo strojov (MES, SQL, SCADA) so záznamami o opravách a upozorní, keď sa opakuje vzor, ktorý v minulosti viedol k poruche.",
        ],
      },
      {
        h: "Ako vyzerá realistický pilot (2 týždne)",
        p: [
          "Týždeň 1 — dáta a rozsah. Vyberiete jeden výrobný úsek (typicky 3–10 strojov). Pripojíme dokumentáciu (PDF, schémy), exporty z MES/SQL a — ak chcete — PLC kód. Nič sa nepresúva mimo vašu sieť, ak nasadenie beží on-prem.",
          "Týždeň 2 — testovanie s technikmi. Asistent ide do rúk reálnych ľudí na zmene. Meriame, koľko otázok dostal, koľko z nich vyriešil bez eskalácie a kde sa pomýlil. Tento feedback systém zlepšuje denne.",
          "Po pilote viete povedať tvrdé čísla: priemerný čas na zistenie príčiny, počet eskalácií na seniora, koľko hodín týždenne tím ušetril.",
        ],
      },
      {
        h: "Tri modely nasadenia",
        p: [
          "Plný cloud — najrýchlejší štart, dáta v EÚ. Vhodné pre menšie závody alebo pilotné fázy.",
          "On-prem + AI cloud (najpopulárnejšie) — vaše dokumenty a procesné dáta ostávajú vo vašej sieti, len anonymizované otázky idú do AI v cloude.",
          "Plný on-prem — celý model beží vo vašej infraštruktúre. Žiadne dáta neopustia závod. Pre regulované prevádzky (farmácia, obrana, kritická infraštruktúra).",
        ],
      },
      {
        h: "Časté chyby pri zavádzaní",
        p: [
          "Začať veľkým „digitálnym transformačným projektom“. Funguje opačný prístup: jeden úsek, dvaja až traja technici, dva týždne. Až keď to reálne pomáha, rozširovať.",
          "Snažiť sa najprv „upratovať dáta“. Moderné AI si poradí aj s nedokonalou dokumentáciou. Lepšie je spustiť a postupne čistiť to, čo sa naozaj používa.",
          "Vynechať technikov z rozhodovania. Nástroj, ktorý nevyužívajú ľudia v teréne, nemá hodnotu. Ich feedback z prvého týždňa je dôležitejší než ktorýkoľvek dashboard.",
        ],
      },
      {
        h: "Ako merať návratnosť",
        p: [
          "MTTR (mean time to repair). Typicky klesá o 20–40 % v prvých troch mesiacoch — najmä na poruchách, ktoré sa už v minulosti riešili a teraz ich technik nájde za sekundy.",
          "Eskalácie na seniora. Junior technik vyrieši viac sám, čo uvoľní seniora pre komplexnejšie problémy a školenie.",
          "Onboarding nového technika. Z mesiacov na týždne — má pri sebe asistenta, ktorý pozná každý stroj v hale.",
        ],
      },
    ],
    related: [
      "ako-ai-znizuje-neplanovane-vypadky",
      "zachytavanie-znalosti-technikov",
      "plc-kod-a-ai",
    ],
  },
  {
    slug: "ako-ai-znizuje-neplanovane-vypadky",
    lang: "sk",
    title: "Ako AI znižuje neplánované výpadky vo výrobe",
    description:
      "Neplánovaný výpadok vo výrobe stojí tisíce eur za minútu. Pozrite, ako AI pomáha skrátiť čas opravy a predchádzať opakujúcim sa poruchám.",
    date: "2026-06-28",
    readMin: 6,
    category: "Downtime",
    intro:
      "V automotive sa cena neplánovaného výpadku počíta v tisíckach eur za minútu. Väčšina týchto výpadkov sa pritom v minulosti už riešila — len o tom nikto na nočnej zmene nevie.",
    sections: [
      {
        h: "Kde sa stráca najviac času",
        p: [
          "Štúdie ARC a Plant Engineering opakovane ukazujú, že 30–50 % času pri neplánovanom výpadku zaberie hľadanie informácie — manuál, schéma, kontaktná osoba, predošlý záznam o oprave.",
          "AI asistent tento čas neskracuje o pár minút. Skracuje ho rádovo — z desiatok minút na sekundy, pretože odpoveď s odkazom na zdroj dostane technik priamo k stroju.",
        ],
      },
      {
        h: "Opakované poruchy: najväčší skrytý náklad",
        p: [
          "Až 70 % porúch má pôvod v ľudskej chybe pri predošlej oprave alebo v chýbajúcej informácii o kontexte. AI prepojí dáta zo strojov so záznamami a upozorní, keď sa scenár opakuje.",
          "Príklad: ak konkrétny snímač zlyhal v poslednom polroku trikrát po sebe a vždy mu predchádzal pokles tlaku v okruhu, ďalšie zlyhanie systém predpovie skôr, než sa stane.",
        ],
      },
      {
        h: "Čo merať počas pilotu",
        p: [
          "MTTR pre top 10 najčastejších porúch. Sledujte trend prvé 3 mesiace.",
          "Počet opakovaných porúch na rovnakom stroji — mal by klesnúť, lebo technici majú prístup k predošlým riešeniam.",
          "Eskalácie mimo pracovný čas. Ak sa znížia, znamená to, že nočná zmena má v ruke skutočného „seniora 24/7“.",
        ],
      },
    ],
    related: ["ai-v-priemyselnej-vyrobe", "zachytavanie-znalosti-technikov"],
  },
  {
    slug: "zachytavanie-znalosti-technikov",
    lang: "sk",
    title: "Zachytávanie znalostí skúsených technikov pred odchodom do dôchodku",
    description:
      "Ako previesť tiché znalosti seniorov do systému, ktorý je dostupný celému tímu — bez papierovania a bez „prosím napíš to do Wordu“.",
    date: "2026-06-25",
    readMin: 5,
    category: "Knowledge",
    intro:
      "Najcennejšie znalosti vo výrobe nikdy neboli zapísané. Sú v hlavách piatich-šiestich ľudí, ktorí v závode pracujú 20+ rokov. AI dnes vie tieto znalosti zachytiť tak, aby to seniorov nestálo extra čas.",
    sections: [
      {
        h: "Prečo klasické riešenia zlyhávajú",
        p: [
          "Wiki, SharePoint, Confluence — všetko sa skúšalo. Realita: senior technik nemá 2 hodiny denne na písanie. A keď napíše, junior to nenájde, lebo nevie, ako sa to volá.",
          "Riešenie nie je v lepšom editore. Je v zmene formátu — z písania na rozprávanie.",
        ],
      },
      {
        h: "Hlasový logbook v praxi",
        p: [
          "Technik po oprave nadiktuje 30–60 sekúnd: čo sa stalo, čo urobil, na čo si dať pozor. AI z toho vyrobí štruktúrovaný záznam s tagmi (stroj, súčiastka, symptóm) a okamžite ho sprístupní vyhľadávaniu pre celý tím.",
          "Pre seniora to znamená nulový extra čas. Pre juniora znamená, že nabudúce nájde rovnaký prípad za 3 sekundy.",
        ],
      },
      {
        h: "Čo s tým po roku",
        p: [
          "Vznikne živá báza riešení, ktorá rastie sama. Po roku máte typicky 1 500–3 000 záznamov, ktoré pokrývajú väčšinu opakovaných situácií.",
          "Aj keď senior odíde, jeho prístup k problémom ostane v systéme — vrátane jeho slovných obratov, ktoré junior pochopí lepšie než suchý manuál.",
        ],
      },
    ],
    related: ["ai-v-priemyselnej-vyrobe", "ako-ai-znizuje-neplanovane-vypadky"],
  },
  {
    slug: "plc-kod-a-ai",
    lang: "sk",
    title: "PLC kód a AI: ako sprístupniť dáta zo strojov technikom",
    description:
      "PLC programy obsahujú odpovede na väčšinu otázok, ale technik k nim nemá prístup. Pozrite, ako AI vie čítať PLC kód a vysvetliť ho v ľudskej reči.",
    date: "2026-06-22",
    readMin: 5,
    category: "Integrácie",
    intro:
      "Väčšina otázok pri poruche sa dá zodpovedať z PLC programu — ktorý vstup vypína ktorý výstup, ktorá podmienka spúšťa alarm, prečo sa cyklus zastavil. Problém je, že PLC kód číta 5 % ľudí v závode.",
    sections: [
      {
        h: "Čo dnes AI zvládne čítať",
        p: [
          "Siemens S7 (SCL, LAD, FBD), Rockwell Studio 5000, Beckhoff TwinCAT, Mitsubishi GX Works. Importujú sa exportované programy, AI ich prepojí s I/O zoznamom a štruktúrami HMI.",
          "Technik sa potom môže opýtať: „Prečo sa zastavil cyklus na stanici 4?“ a dostane odpoveď s konkrétnym vstupom, aktuálnym stavom a posledným záznamom, kedy sa to stalo.",
        ],
      },
      {
        h: "Bezpečnosť a IT",
        p: [
          "PLC kód nikam neodchádza. V on-prem nasadení sa indexuje lokálne a AI naň pristupuje cez vnútornú sieť. Pre IT/OT oddelenia to znamená, že integrácia neporušuje segmentáciu sietí.",
          "Read-only prístup je štandard. AI nikdy nezapisuje do PLC. Pre prípadné zmeny ostáva v hre vždy človek so zodpovednosťou.",
        ],
      },
      {
        h: "Reálny prínos",
        p: [
          "Junior technik vyrieši poruchu na stanici, ktorú videl prvýkrát, lebo PLC mu vysvetlilo, čo sa deje. Bez toho, aby musel volať PLC programátora.",
          "PLC programátor sa konečne venuje vývoju, nie odpovedaniu na rovnakú otázku po desiaty raz.",
        ],
      },
    ],
    related: ["ai-v-priemyselnej-vyrobe", "zachytavanie-znalosti-technikov"],
  },

  // ============== EN ==============
  {
    slug: "ai-in-manufacturing",
    lang: "en",
    title: "AI in Manufacturing: A Practical Implementation Guide for Maintenance",
    description:
      "A step-by-step guide to deploying AI in an industrial plant — reduce unplanned downtime, capture technician knowledge, and pilot in 2 weeks. On-prem or cloud.",
    date: "2026-06-30",
    readMin: 12,
    category: "Guide",
    pillar: true,
    intro:
      "AI in manufacturing isn't about replacing people. It's about giving every technician instant access to the best knowledge your plant has ever produced. This guide walks through the practical path: from a two-week pilot to a company-wide rollout.",
    sections: [
      {
        h: "Why now",
        p: [
          'On average, 50% of experienced technicians will retire within 5–10 years. With them goes knowledge that was never written down — "why this valve needs exactly two-thirds of a turn", "which fuse drops out every winter", "which drawer holds the spare sensor".',
          "Machine complexity is growing at the same time. One assembly line today generates more data per hour than an entire plant did fifteen years ago. Classic MES and CMMS systems store the data — they don't help a technician find an answer at 3 a.m. with the line down.",
        ],
      },
      {
        h: "What AI in maintenance actually solves",
        p: [
          "Instant answers from documentation. Manuals, schematics, I/O lists, PLC programs and service records are indexed so the technician gets a concrete answer with a source — not 200 PDF pages.",
          "Knowledge capture. After every repair, the technician dictates what they did. AI turns it into a structured, searchable record available to the whole team within seconds.",
          "Context and prediction. AI links machine data (MES, SQL, SCADA) to repair history and flags repeating patterns before they become failures.",
        ],
      },
      {
        h: "What a realistic two-week pilot looks like",
        p: [
          "Week 1 — data and scope. You pick one production area (typically 3–10 machines). We connect the documentation (PDFs, schematics), MES/SQL exports and — if you want — the PLC code. Nothing leaves your network when the deployment runs on-prem.",
          "Week 2 — testing with technicians. The assistant goes into the hands of real people on shift. We measure how many questions it received, how many were resolved without escalation, and where it got things wrong. That feedback improves the system daily.",
          "After the pilot you have hard numbers: average time to diagnose, escalations to senior staff, hours saved per week.",
        ],
      },
      {
        h: "Three deployment models",
        p: [
          "Full cloud — fastest start, data in the EU. Best for smaller plants or pilot phases.",
          "On-prem + AI cloud (most popular) — your documents and process data stay in your network; only anonymized questions go to the AI in the cloud.",
          "Full on-prem — the entire model runs in your infrastructure. No data ever leaves the plant. For regulated environments (pharma, defense, critical infrastructure).",
        ],
      },
      {
        h: "Common mistakes",
        p: [
          'Starting with a big "digital transformation project". The opposite approach wins: one area, two or three technicians, two weeks. Expand only after it actually helps.',
          'Trying to "clean up the data" first. Modern AI handles imperfect documentation. Better to launch and clean only what is actually used.',
          "Leaving technicians out of decisions. A tool the field doesn't use has no value. Their feedback from week one matters more than any dashboard.",
        ],
      },
      {
        h: "How to measure ROI",
        p: [
          "MTTR (mean time to repair). Typically drops by 20–40% in the first three months — especially on failures that were already solved in the past and a technician can now find in seconds.",
          "Escalations to senior staff. Juniors resolve more on their own, freeing seniors for harder problems and training.",
          "New technician onboarding. From months to weeks — they carry an assistant that knows every machine in the plant.",
        ],
      },
    ],
    related: [
      "how-ai-reduces-unplanned-downtime",
      "capturing-technician-knowledge",
      "plc-code-and-ai",
    ],
  },
  {
    slug: "how-ai-reduces-unplanned-downtime",
    lang: "en",
    title: "How AI reduces unplanned downtime in manufacturing",
    description:
      "Unplanned downtime costs thousands of euros per minute. See how AI shortens repair time and prevents recurring failures.",
    date: "2026-06-28",
    readMin: 6,
    category: "Downtime",
    intro:
      "In automotive, the cost of an unplanned outage is measured in thousands of euros per minute. Most of those outages were solved before — nobody on the night shift just knows about it.",
    sections: [
      {
        h: "Where most time is lost",
        p: [
          "ARC and Plant Engineering studies repeatedly show that 30–50% of unplanned-outage time is spent searching — for a manual, a schematic, a contact person, a previous repair record.",
          "An AI assistant doesn't cut that time by a few minutes. It cuts it by orders of magnitude — from tens of minutes to seconds — because the answer comes to the technician right at the machine, with the source attached.",
        ],
      },
      {
        h: "Recurring failures: the biggest hidden cost",
        p: [
          "Up to 70% of failures stem from human error during a previous repair or from missing context. AI links machine data with repair records and flags when a scenario is about to repeat.",
          "Example: if a specific sensor failed three times in the past six months, always preceded by a pressure drop in the loop, the system predicts the next failure before it happens.",
        ],
      },
      {
        h: "What to measure during the pilot",
        p: [
          "MTTR for the top 10 most common failures. Track the trend for the first three months.",
          "Number of recurring failures on the same machine — it should drop because technicians have access to previous solutions.",
          'After-hours escalations. If they fall, your night shift effectively has a "24/7 senior" in hand.',
        ],
      },
    ],
    related: ["ai-in-manufacturing", "capturing-technician-knowledge"],
  },
  {
    slug: "capturing-technician-knowledge",
    lang: "en",
    title: "Capturing senior technician knowledge before they retire",
    description:
      'How to move tacit senior knowledge into a system the whole team can use — without paperwork and without "please write this in Word".',
    date: "2026-06-25",
    readMin: 5,
    category: "Knowledge",
    intro:
      "The most valuable knowledge in a factory was never written down. It lives in the heads of five or six people who have been there 20+ years. AI can now capture it without costing the seniors extra time.",
    sections: [
      {
        h: "Why classic solutions fail",
        p: [
          "Wikis, SharePoint, Confluence — all tried. The reality: a senior technician doesn't have two hours a day to write. And when they do, juniors can't find it because they don't know what to search for.",
          "The fix isn't a better editor. It's a change of format — from writing to speaking.",
        ],
      },
      {
        h: "Voice logbook in practice",
        p: [
          "After each repair, the technician dictates 30–60 seconds: what happened, what they did, what to watch out for. AI turns it into a structured record with tags (machine, part, symptom) and makes it instantly searchable for the whole team.",
          "For the senior it's zero extra time. For the junior it means the next time the same case appears, they find it in 3 seconds.",
        ],
      },
      {
        h: "What it looks like after a year",
        p: [
          "A living knowledge base that grows on its own. Typically 1,500–3,000 records after a year, covering most recurring situations.",
          "When a senior leaves, their way of approaching problems stays in the system — including the phrasing juniors actually understand better than a dry manual.",
        ],
      },
    ],
    related: ["ai-in-manufacturing", "how-ai-reduces-unplanned-downtime"],
  },
  {
    slug: "plc-code-and-ai",
    lang: "en",
    title: "PLC code and AI: making machine data accessible to technicians",
    description:
      "PLC programs hold the answers to most questions, but technicians can't read them. See how AI reads PLC code and explains it in plain language.",
    date: "2026-06-22",
    readMin: 5,
    category: "Integrations",
    intro:
      "Most failure questions can be answered from the PLC program — which input turns off which output, which condition raises which alarm, why a cycle stopped. The problem: PLC code is read by 5% of people in the plant.",
    sections: [
      {
        h: "What AI can read today",
        p: [
          "Siemens S7 (SCL, LAD, FBD), Rockwell Studio 5000, Beckhoff TwinCAT, Mitsubishi GX Works. Exported programs are imported and linked to the I/O list and HMI structures.",
          'Technicians can then ask: "Why did the cycle stop at station 4?" and get an answer with the specific input, current state, and the last record of when this happened.',
        ],
      },
      {
        h: "Security and IT",
        p: [
          "PLC code never leaves the plant. In an on-prem deployment it is indexed locally and the AI accesses it over the internal network. For IT/OT teams that means the integration doesn't violate network segmentation.",
          "Read-only access is the default. AI never writes to a PLC. A human stays in the loop for every change.",
        ],
      },
      {
        h: "Real-world impact",
        p: [
          "A junior technician resolves a failure on a station they've never seen, because the PLC told them what's happening — without calling the PLC programmer.",
          "The PLC programmer finally gets to focus on development, not answering the same question for the tenth time.",
        ],
      },
    ],
    related: ["ai-in-manufacturing", "capturing-technician-knowledge"],
  },

  // ============== JA ==============
  {
    slug: "seizogyo-ni-okeru-ai",
    lang: "ja",
    title: "製造業におけるAI：保全業務への実践的な導入ガイド",
    description:
      "製造現場にAIを導入し、突発停止を減らし、技術者の知識を蓄積するための実践ガイド。2週間のパイロットから始め、オンプレミスにもクラウドにも対応できます。",
    date: "2026-06-30",
    readMin: 12,
    category: "導入ガイド",
    pillar: true,
    intro:
      "製造業におけるAIの目的は、人を置き換えることではありません。工場が長年培ってきた最良の知識に、すべての技術者が必要な瞬間にアクセスできるようにすることです。本記事では、2週間のパイロットから全社展開まで、保全業務にAIを導入する現実的な手順を解説します。",
    sections: [
      {
        h: "なぜ今なのか",
        p: [
          "今後5〜10年で、経験豊富な技術者の約半数が退職すると見込まれています。それと同時に、『このバルブは3分の2回転だけ締める』『冬になると決まって落ちるヒューズがある』『予備センサーはどの引き出しにある』といった、文書化されていない知識も失われます。",
          "一方で、設備はますます複雑になっています。現在の組立ライン1本が1時間に生み出すデータ量は、15年前の工場全体を上回ります。従来のMESやCMMSはデータを保存できますが、午前3時にラインが停止した際、技術者が答えをすぐに見つける手助けまではしてくれません。",
        ],
      },
      {
        h: "保全AIが実際に解決すること",
        p: [
          "文書から即座に回答を取得できます。マニュアル、図面、I/Oリスト、PLCプログラム、保全履歴を索引化し、200ページのPDFではなく、根拠となる出典付きの具体的な回答を技術者に提示します。",
          "現場のノウハウを蓄積できます。修理後に技術者が作業内容を音声で残すと、AIが構造化された検索可能な記録に変換し、数秒でチーム全体が利用できるようにします。",
          "状況把握と予測ができます。AIが設備データ（MES、SQL、SCADA）と修理履歴を結び付け、故障に至る前に繰り返しパターンを検知します。",
        ],
      },
      {
        h: "現実的な2週間のパイロット",
        p: [
          "第1週 — データと対象範囲。1つの生産エリア（通常3〜10台の設備）を選び、文書（PDF、図面）、MES／SQLのエクスポートデータ、必要に応じてPLCコードを接続します。オンプレミス構成なら、データが社内ネットワークの外へ出ることはありません。",
          "第2週 — 技術者による検証。実際のシフト担当者にアシスタントを使ってもらいます。質問数、上位者へのエスカレーションなしで解決できた件数、誤った回答を測定し、そのフィードバックをもとに毎日改善します。",
          "パイロット終了時には、原因特定までの平均時間、熟練者へのエスカレーション件数、チームが週に削減できた時間を数値で確認できます。",
        ],
      },
      {
        h: "3つの導入モデル",
        p: [
          "フルクラウド — 最短で開始でき、データはEU域内に保管されます。小規模工場やパイロット段階に適しています。",
          "オンプレミス＋AIクラウド（最も一般的）— 文書やプロセスデータは社内ネットワークに保持し、匿名化された質問だけをクラウドAIへ送信します。",
          "フルオンプレミス — モデル全体を自社インフラで稼働させます。データは一切工場外へ出ません。製薬、防衛、重要インフラなど、規制の厳しい環境に適しています。",
        ],
      },
      {
        h: "導入時によくある失敗",
        p: [
          "大規模な『デジタルトランスフォーメーション計画』から始めることです。成果が出やすいのは逆の進め方で、1つのエリア、2〜3人の技術者、2週間から始めます。実際に効果を確認してから展開範囲を広げます。",
          "最初にすべてのデータを整理しようとすることです。現在のAIは不完全な文書にも対応できます。まず始めて、実際に使われる情報から段階的に整備する方が効果的です。",
          "意思決定から技術者を外すことです。現場で使われないツールに価値はありません。最初の1週間に得られる技術者のフィードバックは、どのダッシュボードよりも重要です。",
        ],
      },
      {
        h: "投資対効果の測り方",
        p: [
          "MTTR（平均修復時間）。導入後3か月で通常20〜40％短縮します。特に、過去に解決済みの故障を技術者が数秒で見つけられるケースで効果が大きくなります。",
          "熟練者へのエスカレーション。若手が自力で解決できる範囲が広がり、熟練者はより複雑な問題や教育に集中できます。",
          "新人技術者の立ち上がり。工場内の各設備を理解したアシスタントを携行できるため、習熟期間を数か月から数週間へ短縮できます。",
        ],
      },
    ],
    related: [
      "ai-de-toppatsu-teishi-wo-sakugen",
      "gijutsusha-no-chishiki-keishou",
      "plc-code-to-ai",
    ],
  },
  {
    slug: "ai-de-toppatsu-teishi-wo-sakugen",
    lang: "ja",
    title: "AIで製造現場の突発停止を減らす方法",
    description:
      "製造現場の突発停止は、1分あたり数千ユーロ規模の損失につながります。AIで修復時間を短縮し、故障の再発を防ぐ方法を解説します。",
    date: "2026-06-28",
    readMin: 6,
    category: "ダウンタイム",
    intro:
      "自動車業界では、突発停止による損失は1分あたり数千ユーロ規模に達します。しかし、その多くは過去にも解決された故障です。ただし、夜勤の担当者がその事実を知らないことがあります。",
    sections: [
      {
        h: "最も時間を失う場面",
        p: [
          "ARCやPlant Engineeringの調査では、突発停止時の30〜50％が、マニュアル、図面、連絡先、過去の修理記録などの情報検索に費やされると繰り返し報告されています。",
          "AIアシスタントは、この時間を数分短くするだけではありません。技術者が設備の前で出典付きの回答を受け取れるため、数十分かかっていた検索を数秒にまで短縮します。",
        ],
      },
      {
        h: "再発故障という最大の隠れコスト",
        p: [
          "故障の最大70％は、前回の修理時の人的ミスや、状況情報の不足に起因します。AIは設備データと修理記録を結び付け、同じ状況が繰り返されそうなときに知らせます。",
          "例えば、あるセンサーが過去半年に3回故障し、その直前に毎回回路内の圧力が低下していた場合、システムは次の故障を発生前に予測できます。",
        ],
      },
      {
        h: "パイロットで測定すべき指標",
        p: [
          "発生頻度の高い上位10件の故障に対するMTTR。最初の3か月間、その推移を追います。",
          "同一設備で再発した故障の件数。技術者が過去の解決策を利用できるため、減少するはずです。",
          "勤務時間外のエスカレーション件数。これが減れば、夜勤チームが実質的に『24時間対応の熟練者』を得たことを意味します。",
        ],
      },
    ],
    related: ["seizogyo-ni-okeru-ai", "gijutsusha-no-chishiki-keishou"],
  },
  {
    slug: "gijutsusha-no-chishiki-keishou",
    lang: "ja",
    title: "熟練技術者の退職前にノウハウを継承する方法",
    description:
      "熟練者の暗黙知を、チーム全体が使える仕組みに移す方法。書類作業や『Wordに書いてください』という依頼は不要です。",
    date: "2026-06-25",
    readMin: 5,
    category: "知識継承",
    intro:
      "工場で最も価値のある知識の多くは、文書化されていません。20年以上働いてきた数人の熟練者の頭の中にあります。現在のAIなら、熟練者に余分な負担をかけずに、その知識を蓄積できます。",
    sections: [
      {
        h: "従来の方法が定着しない理由",
        p: [
          "Wiki、SharePoint、Confluenceなど、さまざまな方法が試されてきました。しかし現実には、熟練技術者に毎日2時間も文書を書く余裕はありません。たとえ記録しても、若手は適切な検索語を知らないため、その情報を見つけられません。",
          "必要なのは、より優れたエディターではなく、書くことから話すことへの形式転換です。",
        ],
      },
      {
        h: "音声ログブックの実際",
        p: [
          "修理後、技術者が30〜60秒で、何が起きたか、何をしたか、何に注意すべきかを音声で残します。AIは内容を設備、部品、症状などのタグ付き記録に構造化し、チーム全体がすぐに検索できるようにします。",
          "熟練者にとって追加の作業時間はほぼゼロです。若手は同じ事例が起きたとき、3秒で過去の対応を見つけられます。",
        ],
      },
      {
        h: "1年後に得られるもの",
        p: [
          "自然に成長し続ける知識ベースができます。通常、1年後には1,500〜3,000件の記録が蓄積され、繰り返し発生する状況の大部分をカバーします。",
          "熟練者が退職しても、問題への向き合い方はシステムに残ります。若手にとって、無味乾燥なマニュアルより理解しやすい本人の言い回しも含まれます。",
        ],
      },
    ],
    related: ["seizogyo-ni-okeru-ai", "ai-de-toppatsu-teishi-wo-sakugen"],
  },
  {
    slug: "plc-code-to-ai",
    lang: "ja",
    title: "PLCコードとAI：設備データを技術者が活用できる形に",
    description:
      "PLCプログラムには多くの答えがありますが、読める技術者は限られています。AIがPLCコードを読み、分かりやすい言葉で説明する仕組みを紹介します。",
    date: "2026-06-22",
    readMin: 5,
    category: "システム連携",
    intro:
      "故障時の疑問の多くは、PLCプログラムから答えを得られます。どの入力がどの出力を停止させるのか、どの条件でアラームが発生するのか、なぜサイクルが停止したのか。しかし、工場内でPLCコードを読める人は全体の約5％にすぎません。",
    sections: [
      {
        h: "現在AIが読み取れるもの",
        p: [
          "Siemens S7（SCL、LAD、FBD）、Rockwell Studio 5000、Beckhoff TwinCAT、Mitsubishi GX Worksに対応します。エクスポートしたプログラムを取り込み、I/OリストやHMI構成と関連付けます。",
          "技術者は『ステーション4でサイクルが停止したのはなぜですか？』と質問し、該当する入力、現在の状態、前回同じ事象が起きたときの記録を含む回答を得られます。",
        ],
      },
      {
        h: "セキュリティとIT",
        p: [
          "PLCコードが工場外へ出ることはありません。オンプレミス構成ではローカル環境で索引化し、AIは社内ネットワーク経由でアクセスします。IT／OT部門にとって、ネットワーク分離を損なわない連携方式です。",
          "標準は読み取り専用です。AIがPLCへ書き込むことはありません。変更時には必ず、責任を持つ担当者が判断に関与します。",
        ],
      },
      {
        h: "現場で得られる効果",
        p: [
          "若手技術者でも、初めて見るステーションの故障を解決できます。PLCの動作をAIが説明するため、PLCプログラマーへ電話する必要がありません。",
          "PLCプログラマーは、同じ質問に何度も答えるのではなく、本来の開発業務に集中できます。",
        ],
      },
    ],
    related: ["seizogyo-ni-okeru-ai", "gijutsusha-no-chishiki-keishou"],
  },
];

export function postsByLang(lang: BlogLang): BlogPost[] {
  return POSTS.filter((p) => p.lang === lang).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function findPost(lang: BlogLang, slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.lang === lang && p.slug === slug);
}

export function postUrl(post: BlogPost): string {
  return post.lang === "sk" ? `/blog/${post.slug}` : `/blog/${post.lang}/${post.slug}`;
}
