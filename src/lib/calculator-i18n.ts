import type { Lang } from "@/lib/i18n";

export type CalculatorCopy = {
  metaTitle: string;
  metaDescription: string;

  back: string;
  eyebrow: string;
  h1a: string;
  h1b: string;
  sub: string;

  resultLabel: string;
  perYear: string;
  savedLabel: string;
  payback: string;
  paybackUnit: string;

  q1: string;
  q1hint: string;

  q2: string;
  q2hint: string;
  q2unit: string;

  q3: string;
  q3hint: string;
  q3unit: string;

  q4: string;
  q4hint: string;
  q4unit: string;

  q5: string;
  q5hint: string;
  q5unit: string;

  q6: string;
  q6hint: string;
  q6unit: string;

  decrease: string;
  increase: string;

  breakdownTitle: string;
  b1: string;
  b1sub: string;
  b2: string;
  b2sub: string;
  b3: string;
  b3sub: string;

  savedFast: string;
  savedMttr: string;
  savedKnow: string;

  ctaTitle: string;
  ctaSub: string;
  ctaBtn: string;
  ctaSecondary: string;

  howTitle: string;
  howLead: string;
  how1title: string;
  how1: string;
  how2title: string;
  how2: string;
  how3title: string;
  how3: string;
  howFoot: string;
};

export const EUR_LOCALE: Record<Lang, string> = {
  sk: "sk-SK",
  en: "en-US",
  ja: "ja-JP",
  de: "de-DE",
  cs: "cs-CZ",
};

export const CALC_T: Record<Lang, CalculatorCopy> = {
  sk: {
    metaTitle: "ROI kalkulačka — KobiKan",
    metaDescription:
      "Zistite, koľko vám KobiKan ušetrí ročne: čas technikov strávený hľadaním, rýchlejšie opravy a zachytené znalosti seniorov.",

    back: "Späť na hlavnú",
    eyebrow: "ROI kalkulačka",
    h1a: "Koľko vás stojí,",
    h1b: "že KobiKan ešte nemáte.",
    sub: "6 rýchlych otázok o údržbe. Výsledok hneď vpravo — bez formulárov.",

    resultLabel: "Toľko ročne strácate",
    perYear: "/ rok",
    savedLabel: "S KobiKanom ušetríte",
    payback: "KobiKan sa vám vráti za",
    paybackUnit: "mesiacov",

    q1: "Koľko máte technikov údržby?",
    q1hint: "Ľudia, ktorí opravujú stroje.",

    q2: "Koľko hodín denne strávi jeden technik hľadaním informácií?",
    q2hint: "Manuály, schémy, e-maily, kolegovia. Bežne 1–2 h denne.",
    q2unit: "h / deň",

    q3: "Koľko neplánovaných porúch máte mesačne?",
    q3hint: "Také, na ktoré sa nedá pripraviť dopredu.",
    q3unit: "porúch / mesiac",

    q4: "Ako dlho v priemere trvá jedna oprava?",
    q4hint: "Od hlásenia po znovu spustenie stroja.",
    q4unit: "hodín",

    q5: "Koľko vás stojí jedna hodina, keď stroj stojí?",
    q5hint: "Strata výroby + ľudia, ktorí čakajú.",
    q5unit: "€ / hodina",

    q6: "Koľko skúsených údržbárov vám odíde za rok?",
    q6hint: "Dôchodok, výpoveď — a s nimi roky nezapísaného know-how.",
    q6unit: "ľudí / rok",

    decrease: "Znížiť hodnotu",
    increase: "Zvýšiť hodnotu",

    breakdownTitle: "Kde vám tečú peniaze",
    b1: "Technici hľadajú info namiesto opravovania",
    b1sub: "Každá hodina hľadania = hodina, ktorú vám nikto nevráti.",
    b2: "Stroje stoja dlhšie ako musia",
    b2sub: "Pomalá oprava = drahý prestoj.",
    b3: "Odchádzajúci ľudia si berú know-how",
    b3sub: "Roky skúseností miznú spolu s nimi.",

    savedFast: "Rýchlejšie hľadanie",
    savedMttr: "Kratšie prestoje",
    savedKnow: "Zachytené know-how",

    ctaTitle: "Chcete presné číslo na vašich dátach?",
    ctaSub: "Za 14 dní urobíme audit vášho CMMS, incident logov a SAP.",
    ctaBtn: "Naplánovať audit",
    ctaSecondary: "Pozrieť riešenie",

    howTitle: "Ako to počítame — bez matematiky",
    howLead: "Kalkulačka sčíta tri veci, ktoré poznáte z vlastnej dielne.",
    how1title: "1. Stratený čas technikov",
    how1: "Technik hľadajúci 1,5 h denne stratí ročne 330+ hodín (220 dní). Vynásobené počtom technikov a sadzbou (35 € / h). KobiKan skracuje hľadanie o ~65 % vďaka okamžitej odpovedi z jedného miesta.",
    how2title: "2. Predĺžené prestoje strojov",
    how2: "Poruchy / mesiac × 12 × dĺžka opravy × cena prestoja = strata z nečinných strojov. Rýchly prístup k dokumentácii skracuje MTTR o ~26 %.",
    how3title: "3. Odchod znalostí spolu s ľuďmi",
    how3: "Odchodom seniora mizne aj jeho know-how. Počítame s hodnotou 80 000 € na seniora. KobiKan znalosti priebežne zachytáva — udrží sa odhadom 80 %.",
    howFoot:
      "Predpoklady: 220 dní / rok · 35 € / h · 80 000 € hodnota seniora · 10 000 € implementácia. Konzervatívne priemery — presné čísla dá audit.",
  },
  en: {
    metaTitle: "ROI Calculator — KobiKan",
    metaDescription:
      "See how much KobiKan saves you per year: technician search time, faster repairs, and captured senior know-how.",

    back: "Back to home",
    eyebrow: "ROI Calculator",
    h1a: "What it costs you",
    h1b: "not to have KobiKan.",
    sub: "6 quick questions about your maintenance. Results appear instantly — no forms, no signup.",

    resultLabel: "This is what you lose per year",
    perYear: "/ year",
    savedLabel: "With KobiKan you save",
    payback: "KobiKan pays back in",
    paybackUnit: "months",

    q1: "How many maintenance technicians do you have?",
    q1hint: "The people who fix the machines.",

    q2: "How many hours a day does one technician spend searching for information?",
    q2hint: "Manuals, schematics, emails, colleagues. Usually 1–2 hours a day.",
    q2unit: "h / day",

    q3: "How many unplanned breakdowns do you have per month?",
    q3hint: "The ones you can't prepare for.",
    q3unit: "breakdowns / month",

    q4: "How long does an average repair take?",
    q4hint: "From alert to machine running again.",
    q4unit: "hours",

    q5: "What does one hour of machine downtime cost you?",
    q5hint: "Lost production + people waiting around.",
    q5unit: "€ / hour",

    q6: "How many experienced technicians leave per year?",
    q6hint: "Retirement, resignation — years of undocumented know-how walk out with them.",
    q6unit: "people / year",

    decrease: "Decrease value",
    increase: "Increase value",

    breakdownTitle: "Where the money leaks",
    b1: "Technicians search instead of fixing",
    b1sub: "Every hour spent searching is an hour nobody will give back.",
    b2: "Machines stay down longer than they need to",
    b2sub: "Slow repair = expensive downtime.",
    b3: "Leaving people take the know-how with them",
    b3sub: "Years of experience disappear with them.",

    savedFast: "Faster search",
    savedMttr: "Shorter downtime",
    savedKnow: "Retained know-how",

    ctaTitle: "Want the exact number on your data?",
    ctaSub: "In 14 days we audit your CMMS, incident logs and SAP.",
    ctaBtn: "Book an audit",
    ctaSecondary: "See the solution",

    howTitle: "How we calculate this — no math required",
    howLead: "The calculator adds up three things you already know from your shop floor.",
    how1title: "1. Lost technician time",
    how1: "A technician searching 1.5 h/day loses 330+ hours a year (220 working days) — multiplied by technician count and hourly rate (€35/h). KobiKan cuts search time by ~65 % with instant answers from one place.",
    how2title: "2. Extended machine downtime",
    how2: "Breakdowns/month × 12 × repair time × downtime cost = what you lose from idle machines. Fast access to documentation cuts repair time (MTTR) by ~26 %.",
    how3title: "3. Knowledge leaving with the people",
    how3: "When a senior leaves, their undocumented know-how leaves too. We value one senior at €80,000. KobiKan captures this knowledge continuously — retaining an estimated 80 %.",
    howFoot:
      "Assumptions: 220 working days/year · €35/h technician rate · €80,000 senior value · €10,000 one-off implementation. Conservative averages — get your real numbers in an audit.",
  },
  de: {
    metaTitle: "ROI-Rechner — KobiKan",
    metaDescription:
      "Erfahren Sie, wie viel KobiKan Ihnen jährlich spart: Suchzeit der Techniker, schnellere Reparaturen und gesichertes Senior-Know-how.",

    back: "Zurück zur Startseite",
    eyebrow: "ROI-Rechner",
    h1a: "Was es Sie kostet,",
    h1b: "KobiKan noch nicht zu haben.",
    sub: "6 kurze Fragen zur Instandhaltung. Ergebnis sofort rechts — ohne Formular.",

    resultLabel: "So viel verlieren Sie jährlich",
    perYear: "/ Jahr",
    savedLabel: "Mit KobiKan sparen Sie",
    payback: "KobiKan amortisiert sich in",
    paybackUnit: "Monaten",

    q1: "Wie viele Instandhaltungstechniker haben Sie?",
    q1hint: "Die Menschen, die die Maschinen reparieren.",

    q2: "Wie viele Stunden pro Tag verbringt ein Techniker mit der Suche nach Informationen?",
    q2hint: "Handbücher, Pläne, E-Mails, Kollegen. Meist 1–2 Std./Tag.",
    q2unit: "h / Tag",

    q3: "Wie viele ungeplante Ausfälle haben Sie pro Monat?",
    q3hint: "Die, auf die Sie sich nicht vorbereiten können.",
    q3unit: "Ausfälle / Monat",

    q4: "Wie lange dauert eine durchschnittliche Reparatur?",
    q4hint: "Von der Meldung bis zum erneuten Anlauf der Maschine.",
    q4unit: "Stunden",

    q5: "Was kostet Sie eine Stunde Maschinenstillstand?",
    q5hint: "Produktionsausfall + wartende Mitarbeiter.",
    q5unit: "€ / Stunde",

    q6: "Wie viele erfahrene Techniker verlieren Sie pro Jahr?",
    q6hint: "Ruhestand, Kündigung — und mit ihnen Jahre nicht dokumentierten Know-hows.",
    q6unit: "Personen / Jahr",

    decrease: "Wert verringern",
    increase: "Wert erhöhen",

    breakdownTitle: "Wo Ihr Geld verloren geht",
    b1: "Techniker suchen, statt zu reparieren",
    b1sub: "Jede Stunde Suche ist eine Stunde, die niemand zurückgibt.",
    b2: "Maschinen stehen länger still als nötig",
    b2sub: "Langsame Reparatur = teurer Stillstand.",
    b3: "Ausscheidende Mitarbeiter nehmen das Know-how mit",
    b3sub: "Jahre an Erfahrung verschwinden mit ihnen.",

    savedFast: "Schnellere Suche",
    savedMttr: "Kürzere Stillstände",
    savedKnow: "Gesichertes Know-how",

    ctaTitle: "Möchten Sie die genaue Zahl für Ihre Daten?",
    ctaSub: "In 14 Tagen prüfen wir Ihr CMMS, Ihre Störungsprotokolle und SAP.",
    ctaBtn: "Audit vereinbaren",
    ctaSecondary: "Lösung ansehen",

    howTitle: "So rechnen wir — ohne Mathematik",
    howLead: "Der Rechner addiert drei Dinge, die Sie aus Ihrer Werkstatt kennen.",
    how1title: "1. Verlorene Technikerzeit",
    how1: "Ein Techniker mit 1,5 Std./Tag Suche verliert 330+ Std./Jahr (220 Tage), × Technikerzahl × Stundensatz (35 €/h). KobiKan senkt die Suchzeit um ~65 % durch sofortige Antworten aus einer Quelle.",
    how2title: "2. Verlängerte Maschinenstillstände",
    how2: "Ausfälle/Monat × 12 × Reparaturzeit × Stillstandskosten = Verlust durch stehende Maschinen. Schneller Dokumentenzugriff senkt die MTTR um ~26 %.",
    how3title: "3. Wissen, das mit den Mitarbeitern geht",
    how3: "Geht ein Senior, geht sein Know-how mit. Wir setzen 80.000 € pro Senior an. KobiKan sichert dieses Wissen laufend — geschätzt bleiben ~80 % erhalten.",
    howFoot:
      "Annahmen: 220 Tage/Jahr · 35 €/h · 80.000 € Senior-Wert · 10.000 € Einmalimplementierung. Konservative Werte — genaue Zahlen liefert das Audit.",
  },
  cs: {
    metaTitle: "ROI kalkulačka — KobiKan",
    metaDescription:
      "Zjistěte, kolik vám KobiKan ušetří ročně: čas techniků strávený hledáním, rychlejší opravy a zachycené znalosti seniorů.",

    back: "Zpět na hlavní",
    eyebrow: "ROI kalkulačka",
    h1a: "Kolik vás stojí,",
    h1b: "že KobiKan ještě nemáte.",
    sub: "6 rychlých otázek o údržbě. Výsledek hned vpravo — bez formulářů.",

    resultLabel: "Tolik ročně ztrácíte",
    perYear: "/ rok",
    savedLabel: "S KobiKanem ušetříte",
    payback: "KobiKan se vám vrátí za",
    paybackUnit: "měsíců",

    q1: "Kolik máte techniků údržby?",
    q1hint: "Lidé, kteří opravují stroje.",

    q2: "Kolik hodin denně stráví jeden technik hledáním informací?",
    q2hint: "Manuály, schémata, e-maily, kolegové. Obvykle 1–2 h denně.",
    q2unit: "h / den",

    q3: "Kolik neplánovaných poruch máte měsíčně?",
    q3hint: "Takové, na které se nedá připravit dopředu.",
    q3unit: "poruch / měsíc",

    q4: "Jak dlouho v průměru trvá jedna oprava?",
    q4hint: "Od nahlášení po opětovné spuštění stroje.",
    q4unit: "hodin",

    q5: "Kolik vás stojí jedna hodina, kdy stroj stojí?",
    q5hint: "Ztráta výroby + lidé, kteří čekají.",
    q5unit: "€ / hodina",

    q6: "Kolik zkušených údržbářů vám odejde za rok?",
    q6hint: "Důchod, výpověď — a s nimi roky nezapsaného know-how.",
    q6unit: "lidí / rok",

    decrease: "Snížit hodnotu",
    increase: "Zvýšit hodnotu",

    breakdownTitle: "Kde vám tečou peníze",
    b1: "Technici hledají místo opravování",
    b1sub: "Každá hodina hledání = hodina, kterou vám nikdo nevrátí.",
    b2: "Stroje stojí déle, než musí",
    b2sub: "Pomalá oprava = drahý výpadek.",
    b3: "Odcházející lidé si berou know-how s sebou",
    b3sub: "Roky zkušeností mizí spolu s nimi.",

    savedFast: "Rychlejší hledání",
    savedMttr: "Kratší výpadky",
    savedKnow: "Zachycené know-how",

    ctaTitle: "Chcete přesné číslo na vašich datech?",
    ctaSub: "Za 14 dní uděláme audit vašeho CMMS, incident logů a SAP.",
    ctaBtn: "Naplánovat audit",
    ctaSecondary: "Podívat se na řešení",

    howTitle: "Jak to počítáme — bez matematiky",
    howLead: "Kalkulačka sečte tři věci, které znáte z vlastní dílny.",
    how1title: "1. Ztracený čas techniků",
    how1: "Technik hledající 1,5 h denně ztratí ročně 330+ hodin (220 dní), × počet techniků × sazba (35 € / h). KobiKan zkracuje hledání o ~65 % díky okamžité odpovědi z jednoho místa.",
    how2title: "2. Prodloužené výpadky strojů",
    how2: "Poruchy / měsíc × 12 × délka opravy × cena výpadku = ztráta ze stojících strojů. Rychlý přístup k dokumentaci zkracuje MTTR o ~26 %.",
    how3title: "3. Odchod znalostí spolu s lidmi",
    how3: "Odchodem seniora mizí i jeho know-how. Počítáme s hodnotou 80 000 € na seniora. KobiKan znalosti průběžně zachycuje — udrží se odhadem 80 %.",
    howFoot:
      "Předpoklady: 220 dní / rok · 35 € / h · 80 000 € hodnota seniora · 10 000 € implementace. Konzervativní průměry — přesná čísla dá audit.",
  },
  ja: {
    metaTitle: "ROI計算ツール — KobiKan",
    metaDescription:
      "KobiKanが年間どれだけ節約できるかを試算します：技術者の検索時間、修理の迅速化、ベテランの知識継承。",

    back: "ホームに戻る",
    eyebrow: "ROI計算ツール",
    h1a: "KobiKanがまだないことで、",
    h1b: "あなたが失っているコスト。",
    sub: "メンテナンスに関する6つの質問。結果はすぐ右に表示 — フォーム不要。",

    resultLabel: "年間の損失額",
    perYear: "/ 年",
    savedLabel: "KobiKan導入による年間削減額",
    payback: "投資回収期間",
    paybackUnit: "ヶ月",

    q1: "メンテナンス技術者は何人いますか?",
    q1hint: "機械を修理する人たちです。",

    q2: "技術者1人あたり、情報検索に1日何時間かかっていますか?",
    q2hint: "マニュアル、図面、メール、同僚への確認。通常1〜2時間/日。",
    q2unit: "時間 / 日",

    q3: "月に何件の突発的な故障が発生していますか?",
    q3hint: "事前に準備できないものです。",
    q3unit: "件 / 月",

    q4: "1件の修理に平均どのくらいかかりますか?",
    q4hint: "通報から機械の再稼働までの時間です。",
    q4unit: "時間",

    q5: "機械が1時間停止すると、どれくらいのコストがかかりますか?",
    q5hint: "生産損失 + 待機する人員のコスト。",
    q5unit: "€ / 時間",

    q6: "経験豊富な技術者は年間何人退職しますか?",
    q6hint: "定年退職や離職 — それとともに何年分もの未記録のノウハウが失われます。",
    q6unit: "人 / 年",

    decrease: "値を減らす",
    increase: "値を増やす",

    breakdownTitle: "コストが漏れている場所",
    b1: "技術者が修理ではなく検索をしている",
    b1sub: "検索に費やす1時間は、誰も取り戻せない1時間です。",
    b2: "機械が必要以上に長く停止している",
    b2sub: "修理が遅い = 高くつく停止時間。",
    b3: "退職する人がノウハウを持ち去ってしまう",
    b3sub: "長年の経験が、その人とともに消えてしまいます。",

    savedFast: "検索の高速化",
    savedMttr: "停止時間の短縮",
    savedKnow: "ノウハウの継承",

    ctaTitle: "自社データに基づく正確な数字を知りたいですか?",
    ctaSub: "14日間で、CMMS・インシデントログ・SAPの監査を行います。",
    ctaBtn: "監査を予約する",
    ctaSecondary: "ソリューションを見る",

    howTitle: "計算方法 — 難しい数式は不要です",
    howLead: "現場でおなじみの3つの要素を合計するだけです。",
    how1title: "1. 技術者の失われた時間",
    how1: "1日1.5時間検索する技術者は年間330時間以上を失います(220日)。技術者数×時給(35€/時)。KobiKanは1か所からの即答で検索時間を約65%削減。",
    how2title: "2. 延長された機械停止時間",
    how2: "月間故障数×12×修理時間×停止コスト=停止による損失。迅速な資料アクセスでMTTRを約26%短縮。",
    how3title: "3. 人とともに失われる知識",
    how3: "ベテランの退職とともに知識も失われます。1人あたり80,000€と算定。KobiKanは知識を継続的に蓄積し、約80%を保持。",
    howFoot:
      "前提: 年間220日・時給35€・ベテラン価値80,000€・導入費10,000€。保守的な平均値 — 正確な数字は監査で。",
  },
};
