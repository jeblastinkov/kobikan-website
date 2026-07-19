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
    metaTitle: "Kalkulačka úspor — KobiKan",
    metaDescription:
      "Zistite, koľko vám KobiKan ušetrí ročne: čas technikov strávený hľadaním, rýchlejšie opravy a zachytené znalosti seniorov.",

    back: "Späť na hlavnú",
    eyebrow: "Kalkulačka úspor",
    h1a: "Koľko vás stojí,",
    h1b: "že KobiKan ešte nemáte.",
    sub: "6 jednoduchých otázok o vašej údržbe. Výsledok vidíte hneď vpravo — bez formulárov, bez registrácie.",

    resultLabel: "Toľko ročne strácate",
    perYear: "/ rok",
    savedLabel: "S KobiKanom ušetríte",
    payback: "KobiKan sa vám vráti za",
    paybackUnit: "mesiacov",

    q1: "Koľko máte technikov údržby?",
    q1hint: "Ľudia, ktorí opravujú stroje.",

    q2: "Koľko hodín denne strávi jeden technik hľadaním informácií?",
    q2hint: "Manuály, schémy, staré emaily, otázky kolegov. Bežne 1–2 hodiny denne.",
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
    b1: "Technici hľadajú namiesto opravovania",
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
    howLead:
      "Kalkulačka nič nevymýšľa. Berie vaše čísla a spočíta tri jednoduché veci, ktoré poznáte z vlastnej dielne.",
    how1title: "1. Stratený čas technikov",
    how1: "Ak jeden technik hľadá informácie napríklad 1,5 hodiny denne, za rok (220 pracovných dní) je to viac ako 330 hodín. Vynásobíme počtom technikov a ich hodinovou sadzbou (predvolene 35 € / h — dá sa upraviť). KobiKan hľadanie skracuje o zhruba 65 %, lebo odpoveď dostanete okamžite z jedného miesta.",
    how2title: "2. Predĺžené prestoje strojov",
    how2: "Vezmeme počet porúch za mesiac, prenásobíme 12 mesiacmi, priemernou dĺžkou opravy a cenou jednej hodiny prestoja. To je suma, ktorú stratíte len tým, že stroj stojí. Skúsenosť z prevádzok hovorí, že rýchly prístup k dokumentácii a histórii porúch skracuje priemerný čas opravy (MTTR) o približne 26 %.",
    how3title: "3. Odchod znalostí spolu s ľuďmi",
    how3: "Keď odíde skúsený údržbár, s ním odíde aj to, čo mal iba v hlave. Predvolene počítame hodnotu jedného seniora na 80 000 € (roky nezapísaných postupov, rýchlych fintov, kontaktov na dodávateľov). KobiKan tieto znalosti zachytáva priebežne — odhadujeme, že sa podarí udržať približne 80 % z nich.",
    howFoot:
      "Predpoklady: 220 pracovných dní / rok · hodinová sadzba technika 35 € · hodnota seniora 80 000 € · implementácia KobiKan jednorazovo 10 000 €. Všetko sú konzervatívne priemery — reálne čísla u vás sa dozviete v audite.",
  },
  en: {
    metaTitle: "Savings Calculator — KobiKan",
    metaDescription:
      "See how much KobiKan saves you per year: technician search time, faster repairs, and captured senior know-how.",

    back: "Back to home",
    eyebrow: "Savings calculator",
    h1a: "What it costs you",
    h1b: "not to have KobiKan.",
    sub: "6 simple questions about your maintenance. See the result on the right — no forms, no signup.",

    resultLabel: "This is what you lose per year",
    perYear: "/ year",
    savedLabel: "With KobiKan you save",
    payback: "KobiKan pays back in",
    paybackUnit: "months",

    q1: "How many maintenance technicians do you have?",
    q1hint: "The people who fix the machines.",

    q2: "How many hours a day does one technician spend searching for information?",
    q2hint: "Manuals, schematics, old emails, asking colleagues. Usually 1–2 hours a day.",
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
    howLead:
      "The calculator doesn't invent anything. It takes your numbers and adds up three simple things you already know from your own shop floor.",
    how1title: "1. Lost technician time",
    how1: "If a technician spends, say, 1.5 hours a day searching for information, that's over 330 hours per year (220 working days). Multiply by the number of technicians and their hourly rate (default 35 € / h — adjustable). KobiKan cuts search time by roughly 65 % because the answer arrives instantly from a single place.",
    how2title: "2. Extended machine downtime",
    how2: "We take the number of breakdowns per month × 12 months × average repair time × downtime cost per hour. That is the amount you lose purely because the machine is standing still. Plant experience shows fast access to documentation and history shortens the average repair time (MTTR) by about 26 %.",
    how3title: "3. Knowledge leaving with the people",
    how3: "When a senior technician leaves, everything they only kept in their head leaves with them. We default the value of one senior to €80,000 (years of undocumented procedures, quick fixes, supplier contacts). KobiKan captures this knowledge continuously — we estimate roughly 80 % is retained.",
    howFoot:
      "Assumptions: 220 working days / year · technician hourly rate €35 · senior value €80,000 · KobiKan implementation one-off €10,000. All are conservative averages — your real numbers come out in the audit.",
  },
  de: {
    metaTitle: "Einsparungsrechner — KobiKan",
    metaDescription:
      "Erfahren Sie, wie viel KobiKan Ihnen jährlich spart: Suchzeit der Techniker, schnellere Reparaturen und gesichertes Senior-Know-how.",

    back: "Zurück zur Startseite",
    eyebrow: "Einsparungsrechner",
    h1a: "Was es Sie kostet,",
    h1b: "KobiKan noch nicht zu haben.",
    sub: "6 einfache Fragen zu Ihrer Instandhaltung. Das Ergebnis sehen Sie sofort rechts — ohne Formulare, ohne Registrierung.",

    resultLabel: "So viel verlieren Sie jährlich",
    perYear: "/ Jahr",
    savedLabel: "Mit KobiKan sparen Sie",
    payback: "KobiKan amortisiert sich in",
    paybackUnit: "Monaten",

    q1: "Wie viele Instandhaltungstechniker haben Sie?",
    q1hint: "Die Menschen, die die Maschinen reparieren.",

    q2: "Wie viele Stunden pro Tag verbringt ein Techniker mit der Suche nach Informationen?",
    q2hint: "Handbücher, Schaltpläne, alte E-Mails, Fragen an Kollegen. Meist 1–2 Stunden am Tag.",
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
    howLead:
      "Der Rechner erfindet nichts. Er nimmt Ihre Zahlen und addiert drei einfache Dinge, die Sie aus Ihrer eigenen Werkstatt kennen.",
    how1title: "1. Verlorene Technikerzeit",
    how1: "Wenn ein Techniker beispielsweise 1,5 Stunden täglich mit der Informationssuche verbringt, sind das über 330 Stunden pro Jahr (220 Arbeitstage). Multipliziert mit der Anzahl der Techniker und ihrem Stundensatz (Standard 35 € / h — anpassbar). KobiKan verkürzt die Suchzeit um rund 65 %, weil die Antwort sofort aus einer einzigen Quelle kommt.",
    how2title: "2. Verlängerte Maschinenstillstände",
    how2: "Wir nehmen die Anzahl der Ausfälle pro Monat × 12 Monate × durchschnittliche Reparaturzeit × Stillstandskosten pro Stunde. Das ist der Betrag, den Sie allein dadurch verlieren, dass die Maschine stillsteht. Erfahrungen aus der Praxis zeigen: schneller Zugriff auf Dokumentation und Historie verkürzt die durchschnittliche Reparaturzeit (MTTR) um etwa 26 %.",
    how3title: "3. Wissen, das mit den Mitarbeitern geht",
    how3: "Wenn ein erfahrener Techniker geht, geht auch alles mit, was nur in seinem Kopf war. Standardmäßig setzen wir den Wert eines Senior-Mitarbeiters mit 80.000 € an (Jahre nicht dokumentierter Abläufe, Kniffe, Lieferantenkontakte). KobiKan erfasst dieses Wissen fortlaufend — wir schätzen, dass rund 80 % davon erhalten bleiben.",
    howFoot:
      "Annahmen: 220 Arbeitstage / Jahr · Stundensatz Techniker 35 € · Wert eines Senior-Mitarbeiters 80.000 € · einmalige KobiKan-Implementierung 10.000 €. Alles konservative Durchschnittswerte — Ihre tatsächlichen Zahlen erfahren Sie im Audit.",
  },
  cs: {
    metaTitle: "Kalkulačka úspor — KobiKan",
    metaDescription:
      "Zjistěte, kolik vám KobiKan ušetří ročně: čas techniků strávený hledáním, rychlejší opravy a zachycené znalosti seniorů.",

    back: "Zpět na hlavní",
    eyebrow: "Kalkulačka úspor",
    h1a: "Kolik vás stojí,",
    h1b: "že KobiKan ještě nemáte.",
    sub: "6 jednoduchých otázek o vaší údržbě. Výsledek vidíte hned vpravo — bez formulářů, bez registrace.",

    resultLabel: "Tolik ročně ztrácíte",
    perYear: "/ rok",
    savedLabel: "S KobiKanem ušetříte",
    payback: "KobiKan se vám vrátí za",
    paybackUnit: "měsíců",

    q1: "Kolik máte techniků údržby?",
    q1hint: "Lidé, kteří opravují stroje.",

    q2: "Kolik hodin denně stráví jeden technik hledáním informací?",
    q2hint: "Manuály, schémata, staré e-maily, dotazy kolegů. Obvykle 1–2 hodiny denně.",
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
    howLead:
      "Kalkulačka nic nevymýšlí. Bere vaše čísla a sečte tři jednoduché věci, které znáte z vlastní dílny.",
    how1title: "1. Ztracený čas techniků",
    how1: "Pokud jeden technik hledá informace například 1,5 hodiny denně, za rok (220 pracovních dní) je to přes 330 hodin. Vynásobíme počtem techniků a jejich hodinovou sazbou (výchozí 35 € / h — lze upravit). KobiKan hledání zkracuje o zhruba 65 %, protože odpověď dostanete okamžitě z jednoho místa.",
    how2title: "2. Prodloužené výpadky strojů",
    how2: "Vezmeme počet poruch za měsíc, vynásobíme 12 měsíci, průměrnou délkou opravy a cenou jedné hodiny výpadku. To je částka, kterou ztratíte jen tím, že stroj stojí. Zkušenosti z provozů ukazují, že rychlý přístup k dokumentaci a historii poruch zkracuje průměrný čas opravy (MTTR) přibližně o 26 %.",
    how3title: "3. Odchod znalostí spolu s lidmi",
    how3: "Když odejde zkušený údržbář, odejde s ním i to, co měl jen v hlavě. Výchozí hodnota jednoho seniora je 80 000 € (roky nezapsaných postupů, rychlých finiek, kontaktů na dodavatele). KobiKan tyto znalosti zachycuje průběžně — odhadujeme, že se podaří udržet přibližně 80 % z nich.",
    howFoot:
      "Předpoklady: 220 pracovních dní / rok · hodinová sazba technika 35 € · hodnota seniora 80 000 € · implementace KobiKan jednorázově 10 000 €. Vše jsou konzervativní průměry — reálná čísla u vás zjistíte v auditu.",
  },
  ja: {
    metaTitle: "コスト削減シミュレーター — KobiKan",
    metaDescription:
      "KobiKanが年間どれだけ節約できるかを試算します：技術者の検索時間、修理の迅速化、ベテランの知識継承。",

    back: "ホームに戻る",
    eyebrow: "コスト削減シミュレーター",
    h1a: "KobiKanがまだないことで、",
    h1b: "あなたが失っているコスト。",
    sub: "メンテナンスに関する6つの簡単な質問。結果はすぐ右側に表示されます — フォーム入力も登録も不要です。",

    resultLabel: "年間の損失額",
    perYear: "/ 年",
    savedLabel: "KobiKan導入による年間削減額",
    payback: "投資回収期間",
    paybackUnit: "ヶ月",

    q1: "メンテナンス技術者は何人いますか?",
    q1hint: "機械を修理する人たちです。",

    q2: "技術者1人あたり、情報検索に1日何時間かかっていますか?",
    q2hint: "マニュアル、図面、古いメール、同僚への質問。通常1〜2時間/日です。",
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
    howLead:
      "このシミュレーターは何も作り出しません。あなたの数字をもとに、現場でよく知られている3つの要素を単純に合計するだけです。",
    how1title: "1. 技術者の失われた時間",
    how1: "技術者1人が1日1.5時間情報検索に費やすとすると、年間(220営業日)で330時間を超えます。これに技術者数と時給(デフォルト35€/時間 — 調整可能)を掛け合わせます。KobiKanは1か所から即座に回答が得られるため、検索時間を約65%削減します。",
    how2title: "2. 延長された機械停止時間",
    how2: "月間の故障件数 × 12か月 × 平均修理時間 × 1時間あたりの停止コストで計算します。これは機械が停止しているだけで失う金額です。現場の経験から、ドキュメントと履歴への迅速なアクセスにより平均修理時間(MTTR)が約26%短縮されることが分かっています。",
    how3title: "3. 人とともに失われる知識",
    how3: "ベテラン技術者が退職すると、その人の頭の中にしかなかった知識も一緒に失われます。デフォルトでは、ベテラン1人の価値を80,000€としています(未記録の手順、応急処置のコツ、サプライヤーとの連絡先など、長年の蓄積)。KobiKanはこの知識を継続的に蓄積し、約80%を保持できると見積もっています。",
    howFoot:
      "前提条件: 年間220営業日 · 技術者の時給35€ · ベテラン1人の価値80,000€ · KobiKan導入費用(一括)10,000€。いずれも保守的な平均値であり、実際の数字は監査で明らかになります。",
  },
};
