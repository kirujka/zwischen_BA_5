/* Beschwerdeantwort — конструктор v5.0 (17.11.2026) · ЧЕРНОВИК ДО КОРРЕКТОРА
   Deutsch-Test für den Beruf B2, часть «Lesen und Schreiben». Источник: build_v5.py (claude/Beschwerde_v5_build.py в проекте).
   v5.0 по сравнению с v4.5: блоки 10 и 12 убраны (16 → 14); вступление из исходника; извинение без möchten;
   блок 6 без рамки «Abhilfe schaffen», сроки без zum; блок 7б «Gerne bieten wir Ihnen … an»; причины блока 4 и концовки
   блока 8 — парами; новый короткий финал + вариант «не отменяйте». Прогон: 56 из 56 (54 прямо, 2 по смыслу).
   К каждой немецкой единице — русский перевод. kreis: 1 = ядро (учить первым), 2 = второй круг (только если шеф просит) */

const DATA_VERSION = "5.0";

const BLOECKE = [
 {
  "id": "1",
  "kreis": 1,
  "haeuf": "100 %",
  "de": "Anrede",
  "ru": "Обращение",
  "rahmen": {
   "de": "Sehr geehrte Frau [Nachname],   /   Sehr geehrter Herr [Nachname],",
   "ru": "Глубокоуважаемая госпожа [фамилия],   /   Глубокоуважаемый господин [фамилия],"
  },
  "slots": [
   {
    "de": "Sehr geehrte Damen und Herren,",
    "ru": "Уважаемые дамы и господа,",
    "note": "фамилии в задании нет",
    "joker": true
   }
  ],
  "falle": "В дырку — только ФАМИЛИЯ: Sehr geehrte Frau Weber. Имя не ставится (❌ Frau Anna), название фирмы тоже. После запятой текст идёт со следующей строки с МАЛЕНЬКОЙ буквы, если первое слово не существительное и не Sie / Ihr / Ihre. Твоё письмо начинается с «Ihre» — оно всегда с большой, так что правило тебе не мешает.",
  "c1": []
 },
 {
  "id": "2",
  "kreis": 1,
  "haeuf": "100 %",
  "de": "Einstieg",
  "ru": "Жалоба получена",
  "rahmen": {
   "de": "Ihre Beschwerde ist bei uns eingegangen.",
   "ru": "Ваша жалоба к нам поступила."
  },
  "slots": [],
  "falle": "Фраза из твоего исходного шаблона. ist eingegangen — глагол движения, Perfekt с sein (не hat). Подходит к любому заданию: клиент всегда пишет жалобу, поэтому вариантов E-Mail / Brief больше не нужно.",
  "c1": [
   "Perfekt mit «sein» — Perfekt с sein"
  ]
 },
 {
  "id": "3",
  "kreis": 1,
  "haeuf": "100 %",
  "pflicht": true,
  "de": "Entschuldigung",
  "ru": "Понимание и извинение",
  "rahmen": {
   "de": "Wir verstehen Ihren Ärger und entschuldigen uns aufrichtig für die entstandenen Unannehmlichkeiten.",
   "ru": "Мы понимаем Ваше раздражение и искренне извиняемся за возникшие неудобства."
  },
  "slots": [
   {
    "de": "Wir bedauern den Vorfall sehr und entschuldigen uns aufrichtig für die entstandenen Unannehmlichkeiten.",
    "ru": "Мы очень сожалеем о случившемся и искренне извиняемся за возникшие неудобства.",
    "note": "шеф пишет «Bedauern ausdrücken» / «bedauern» — вместо блока 10 из v4.5"
   }
  ],
  "falle": "Твоя фраза без «möchten»: глагол entschuldigen встал на второе место, uns — сразу за ним. Извинение ЗА НЕУДОБСТВА вину не признаёт — поэтому подходит и туда, где виноваты не мы (отказ, форма Е).",
  "c1": [
   "sich entschuldigen für + Akkusativ"
  ]
 },
 {
  "id": "4",
  "kreis": 1,
  "haeuf": "89 %",
  "de": "Ursache",
  "ru": "Почему так вышло",
  "rahmen": {
   "de": "Aufgrund [причина] kam es zu dieser misslichen Situation.",
   "ru": "Из-за [причина] возникла эта досадная ситуация."
  },
  "slots": [
   {
    "de": "eines internen Fehlers",
    "ru": "внутренней ошибки",
    "note": "подходит к ЛЮБОЙ ситуации · пара в блоке 8: джокер",
    "joker": true
   },
   {
    "de": "eines krankheitsbedingten Personalausfalls",
    "ru": "отсутствия персонала по болезни",
    "note": "из твоего шаблона · опоздание, недоделки, плохой сервис, не дозвониться — самая частая (18 из 56) · пара: Team erweitert"
   },
   {
    "de": "eines Bearbeitungsfehlers",
    "ru": "ошибки при обработке",
    "note": "путаница, не тот товар, не тот размер, ошибка в счёте · пара: jeder Auftrag kontrolliert"
   },
   {
    "de": "eines internen Planungsfehlers",
    "ru": "внутренней ошибки планирования",
    "note": "из твоего шаблона · мероприятия, смена зала, накладки · пара: verantwortlicher Mitarbeiter"
   },
   {
    "de": "eines technischen Defekts",
    "ru": "технической неисправности",
    "note": "машины, приборы, автоматы, отопление · пара: Technik gewartet"
   },
   {
    "de": "eines internen Systemfehlers",
    "ru": "внутреннего системного сбоя",
    "note": "из твоего шаблона · счета, сайт, IT · пара: Software aktualisiert"
   },
   {
    "de": "eines Produktionsfehlers",
    "ru": "производственного брака",
    "note": "из твоего шаблона · дефект, поломка · пара: jeder Auftrag kontrolliert"
   }
  ],
  "gruppen": [
   {
    "titel": "Причина у поставщика или подрядчика (если шеф пишет, что вина не наша, — дальше блок 5: «außerhalb unseres Einflussbereichs»)",
    "items": [
     {
      "de": "eines Fehlers unseres Zulieferers",
      "ru": "ошибки нашего поставщика",
      "note": "товар: задержка, недопоставка, не тот товар · пара: Partner sorgfältiger auswählen"
     },
     {
      "de": "eines Fehlers unseres Dienstleisters",
      "ru": "ошибки нашего подрядчика",
      "note": "услуга: доставка, монтаж, ремонт, уборка, IT · пара: Partner sorgfältiger auswählen"
     }
    ]
   }
  ],
  "falle": "Каркас — из твоего шаблона. ОДНО правило Genitiv на все причины: aufgrund + eines + (прилагательное на -en) + существительное на -s / -es. Ошибаются в окончании артикля: eines, не einen. Если шеф в записке сам называет причину — бери его причину. У каждой причины есть пара-концовка в блоке 8. Короткая рамка на выбор корректору (−3 слова): Dazu kam es aufgrund [причина]. — Это произошло из-за [причины].",
  "c1": [
   "Präpositionen mit Genitiv — предлоги с родительным падежом"
  ]
 },
 {
  "id": "6",
  "kreis": 1,
  "haeuf": "31 из 56",
  "de": "Abhilfe + Termin",
  "ru": "Что делаем и когда",
  "rahmen": {
   "de": "Alle beanstandeten Punkte werden [когда] erledigt.",
   "ru": "Все указанные Вами пункты будут [когда] выполнены."
  },
  "slots": [
   {
    "de": "Die fehlenden Artikel werden [когда] nachgeliefert.",
    "ru": "Недостающие товары будут [когда] допоставлены.",
    "note": "из твоего шаблона · недопоставка, задержка заказа"
   },
   {
    "de": "Ein Ersatz wird Ihnen [когда] zugesandt.",
    "ru": "Замена будет Вам [когда] выслана.",
    "note": "из твоего шаблона · брак, не тот товар, не тот размер"
   },
   {
    "de": "Die Rechnung wird [когда] korrigiert und der Betrag erstattet.",
    "ru": "Счёт будет [когда] исправлен, а сумма возвращена.",
    "note": "из твоего шаблона · деньги. Нужна только половина — отрежь: Die Rechnung wird … korrigiert. / Der Betrag wird Ihnen … erstattet."
   },
   {
    "de": "Das Problem ist inzwischen behoben.",
    "ru": "Проблема тем временем устранена.",
    "note": "шеф пишет, что всё уже исправлено — без [когда]"
   }
  ],
  "gruppen": [
   {
    "titel": "Вставка [когда] — одно правило: дата и день без zum",
    "items": [
     {
      "de": "unverzüglich",
      "ru": "незамедлительно",
      "note": "срока в записке нет",
      "joker": true
     },
     {
      "de": "bis spätestens 12. Mai",
      "ru": "самое позднее до 12 мая",
      "note": "шеф даёт дату — БЕЗ zum"
     },
     {
      "de": "bis spätestens Mittwoch",
      "ru": "самое позднее до среды",
      "note": "день недели — тоже без предлога"
     },
     {
      "de": "bis spätestens Anfang nächster Woche",
      "ru": "самое позднее до начала следующей недели",
      "note": "расплывчатый срок — то же правило"
     },
     {
      "de": "am Mittwoch um 10 Uhr",
      "ru": "в среду в 10 часов",
      "note": "шеф назначает визит, монтаж — конкретный день через am"
     },
     {
      "de": "frühestens am 19. Oktober",
      "ru": "не раньше 19 октября",
      "note": "НЕ РАНЬШЕ: шеф пишет «frühestens», «nicht vor», «erst ab»"
     }
    ]
   }
  ],
  "falle": "Каркас — само предложение-джокер, рамки «Selbstverständlich schaffen wir Abhilfe:» больше нет. Все действия — Passiv: werden + причастие в самом конце. Срок: дата и день недели БЕЗ zum (bis spätestens 12. Mai), визит в конкретный день — am (am Mittwoch um 10 Uhr). spätestens = самое позднее, frühestens = не раньше. Исполнителя можно назвать: … werden am Mittwochmorgen von zwei Mitarbeitern erledigt (… двумя сотрудниками). Связка с извинением — слово selbstverständlich внутри: Alle beanstandeten Punkte werden selbstverständlich unverzüglich erledigt. Клиент просил до 1.10, шеф пишет 12.10 → сначала блок 5 («до 1.10 невозможно»), потом здесь 12.10 — форма Д.",
  "c1": [
   "Passiv — страдательный залог"
  ]
 },
 {
  "id": "8",
  "kreis": 1,
  "haeuf": "26 из 56",
  "de": "Prävention",
  "ru": "Чтобы не повторилось",
  "rahmen": {
   "de": "Zur Vermeidung solcher Vorfälle [концовка]",
   "ru": "Во избежание таких случаев [концовка]"
  },
  "slots": [
   {
    "de": "haben wir bereits entsprechende Maßnahmen ergriffen.",
    "ru": "мы уже приняли соответствующие меры.",
    "note": "подходит всегда · пара к джокеру блока 4",
    "joker": true
   },
   {
    "de": "wird unser Team zeitnah erweitert.",
    "ru": "наша команда в ближайшее время будет расширена.",
    "note": "из твоего шаблона · пара к Personalausfall"
   },
   {
    "de": "wird jeder Auftrag künftig zusätzlich kontrolliert.",
    "ru": "каждый заказ впредь дополнительно проверяется.",
    "note": "пара к Bearbeitungsfehler, Produktionsfehler, недопоставке"
   },
   {
    "de": "wird künftig ein verantwortlicher Mitarbeiter alle Aufträge persönlich koordinieren.",
    "ru": "впредь ответственный сотрудник будет лично координировать все заказы.",
    "note": "из твоего шаблона · пара к Planungsfehler"
   },
   {
    "de": "wird unsere Technik künftig regelmäßig gewartet.",
    "ru": "наша техника впредь будет регулярно обслуживаться.",
    "note": "пара к technischer Defekt"
   },
   {
    "de": "wurde unsere Software bereits aktualisiert.",
    "ru": "наше программное обеспечение уже обновлено.",
    "note": "пара к Systemfehler — заодно объясняет, как устранили"
   },
   {
    "de": "wählen wir unsere Partner künftig sorgfältiger aus.",
    "ru": "мы впредь будем тщательнее выбирать партнёров.",
    "note": "пара к Zulieferer, Dienstleister · auswählen — разделяемый: aus в самый конец"
   },
   {
    "de": "wird unser Personal gezielt geschult.",
    "ru": "наш персонал пройдёт целенаправленное обучение.",
    "note": "не по причине, а по жалобе: грубость, курение, плохой сервис"
   },
   {
    "de": "informieren wir Sie künftig umgehend über jede Änderung.",
    "ru": "впредь мы будем немедленно сообщать Вам о любом изменении.",
    "note": "по жалобе: не сообщили, молчали"
   }
  ],
  "gruppen": [
   {
    "titel": "Другие рамки — на выбор, концовки те же",
    "items": [
     {
      "de": "Um solche Vorfälle zu vermeiden, [концовка]",
      "ru": "Чтобы избежать таких случаев, [концовка]",
      "note": "Infinitiv mit «um … zu»"
     },
     {
      "de": "Damit sich so etwas nicht wiederholt, [концовка]",
      "ru": "Чтобы такое не повторилось, [концовка]",
      "note": "Finalsatz mit «damit»"
     },
     {
      "de": "Wir werden alles tun, um solche Vorfälle künftig zu vermeiden.",
      "ru": "Мы сделаем всё, чтобы в будущем избежать таких случаев.",
      "note": "АВАРИЙНЫЙ — целое предложение из твоего шаблона, без концовки",
      "joker": true
     }
    ]
   }
  ],
  "falle": "Каркас — из твоего шаблона. После любой рамки глагол СРАЗУ: Zur Vermeidung … haben wir / wird / wählen wir. В русском «Во избежание … мы приняли» подлежащее первым, и рука пишет «Zur Vermeidung … wir haben» — ошибка. Концовка подбирается парой к причине из блока 4 — пометки у каждой концовки.",
  "c1": [
   "Nominalstil «zur Vermeidung + Genitiv» — именной стиль",
   "Inversion — глагол сразу после рамки"
  ]
 },
 {
  "id": "7",
  "kreis": 1,
  "haeuf": "23 из 56",
  "de": "Angebot",
  "ru": "Что даём или предлагаем",
  "rahmen": {
   "de": "Als Entschuldigung gewähren wir Ihnen [объект].",
   "ru": "В качестве извинения мы предоставляем Вам [объект]."
  },
  "slots": [
   {
    "de": "einen Preisnachlass in Höhe von 20 %",
    "ru": "скидку в размере 20 %",
    "note": "деньги · шеф не уточнил, что давать",
    "joker": true
   },
   {
    "de": "einen Gutschein im Wert von 100 €",
    "ru": "ваучер на сумму 100 €",
    "note": "из твоего шаблона"
   }
  ],
  "gruppen": [
   {
    "titel": "Вещь, услуга или вариант на выбор — второй каркас: Gerne bieten wir Ihnen [объект] an. (Мы охотно предлагаем Вам [объект].)",
    "items": [
     {
      "de": "eine kostenfreie Lieferung Ihrer nächsten Bestellung",
      "ru": "бесплатную доставку Вашего следующего заказа",
      "note": "джокер второго каркаса",
      "joker": true
     },
     {
      "de": "ein vergleichbares Modell aus unserem Sortiment",
      "ru": "сопоставимую модель из нашего ассортимента",
      "note": "товара нет или задержка — вариант на выбор"
     },
     {
      "de": "eine kostenfreie Nachbesserung durch unser Fachpersonal",
      "ru": "бесплатное устранение недостатков нашими специалистами",
      "note": "работа сделана плохо"
     },
     {
      "de": "eine kostenfreie Einweisung durch unseren Techniker",
      "ru": "бесплатный инструктаж нашим техником",
      "note": "клиент не справляется с прибором"
     }
    ]
   }
  ],
  "falle": "Два каркаса: ДАРИМ ДЕНЬГИ → gewähren (твой шаблон); ПРЕДЛАГАЕМ вещь, услугу или вариант на выбор → bieten … an, an в самый конец. Вина не наша или шеф пишет «Kulanz» — начало Aus Kulanz: Aus Kulanz gewähren wir Ihnen … / Aus Kulanz bieten wir Ihnen … an. Объект всегда Akkusativ: einen (м.р.) / ein (ср.р.) / eine (ж.р.). Шеф диктует, что дать, — его слова в Akkusativ (превращение А). Два объекта — один каркас, между ними sowie.",
  "c1": [
   "trennbares Verb «anbieten» — разделяемый глагол",
   "Konnektor «sowie» — а также"
  ]
 },
 {
  "id": "9",
  "kreis": 1,
  "haeuf": "100 %",
  "pflicht": true,
  "letzter": true,
  "de": "Schluss",
  "ru": "Финал",
  "rahmen": {
   "de": "Wir hoffen, dass Sie uns trotz dieses Vorfalls treu bleiben, und stehen Ihnen bei Rückfragen gerne zur Verfügung.\n\nMit freundlichen Grüßen\n[Vorname Nachname]",
   "ru": "Мы надеемся, что Вы, несмотря на этот случай, останетесь нам верны, и охотно ответим на Ваши вопросы.\n\nС уважением\n[Имя Фамилия]"
  },
  "slots": [
   {
    "de": "Angesichts unserer langjährigen Zusammenarbeit hoffen wir, dass Sie uns trotz dieses Vorfalls treu bleiben. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.",
    "ru": "Ввиду нашего многолетнего сотрудничества мы надеемся, что Вы, несмотря на этот случай, останетесь нам верны. При вопросах мы охотно в Вашем распоряжении.",
    "note": "ВМЕСТО первой строки — шеф пишет «давний клиент», «langjährig» (10 из 56). «Bei Rückfragen …» здесь отдельным предложением"
   },
   {
    "de": "Wir hoffen, dass Sie von einer [Stornierung / Kündigung] absehen, und stehen Ihnen bei Rückfragen gerne zur Verfügung.",
    "ru": "Мы надеемся, что Вы откажетесь от [отмены заказа / расторжения договора], и охотно ответим на Ваши вопросы.",
    "note": "ВМЕСТО первой строки — клиент грозит отменить заказ (Stornierung) или расторгнуть договор (Kündigung) (4 из 56)"
   }
  ],
  "falle": "trotz + Genitiv: trotz dieses Vorfalls. uns treu bleiben — Dativ (верны НАМ); Kundin / Kunde выбирать больше не надо. absehen von + Dativ: von einer Kündigung. Подпись — имя и фамилия, без «Herr». Старый длинный финал из твоего шаблона — в Справке.",
  "c1": [
   "Präposition mit Genitiv «trotz», «angesichts»"
  ]
 },
 {
  "id": "5",
  "kreis": 1,
  "haeuf": "9 из 56 · 3 раза из 3 на реальном экзамене",
  "de": "Hinweis",
  "ru": "Обращаем внимание: однако…",
  "rahmen": {
   "de": "Wir möchten Sie jedoch darauf hinweisen, dass [X].",
   "ru": "Однако мы хотели бы обратить Ваше внимание на то, что [X]."
  },
  "slots": [
   {
    "de": "dies nur im Rahmen unserer Geschäftsbedingungen möglich ist",
    "ru": "это возможно только в рамках наших условий",
    "note": "мягкое ограничение — подходит почти всегда",
    "joker": true
   },
   {
    "de": "die Ursache außerhalb unseres Einflussbereichs lag",
    "ru": "причина лежала вне нашей сферы влияния",
    "note": "из твоего шаблона · виноваты не мы — после причины «поставщик / подрядчик» в блоке 4"
   },
   {
    "de": "Ihre Wünsche über den vereinbarten Leistungsumfang hinausgehen",
    "ru": "Ваши пожелания выходят за рамки согласованного объёма услуг",
    "note": "вне договора — часто вместе со следующей вставкой через und"
   },
   {
    "de": "alle weiteren Leistungen kostenpflichtig sind",
    "ru": "все дальнейшие услуги платные",
    "note": "впредь платно — вместо блока 12 из v4.5. Шеф назвал сумму: für jede weitere Änderung 200 € berechnet werden (за каждое дальнейшее изменение будет взиматься 200 €)"
   },
   {
    "de": "eine Lieferung bis [дата клиента] leider nicht möglich ist",
    "ru": "доставка до [дата клиента], к сожалению, невозможна",
    "note": "срок позже требуемого — свой срок дальше в блоке 6. Дата без zum: bis 1. Oktober"
   },
   {
    "de": "wir Ihre Forderungen in dieser Form leider nicht erfüllen können",
    "ru": "мы, к сожалению, не можем выполнить Ваши требования в таком виде",
    "note": "прямой отказ — только если шеф пишет «ablehnen»"
   }
  ],
  "falle": "Каркас — из твоего шаблона. hinweisen стоит с möchten, поэтому целиком в конце: … darauf hinweisen, dass. После dass глагол — в самый конец: … möglich ist, … lag, … sind. Два пункта шефа — один каркас, второе придаточное через und, dass не повторяется: … dass Ihre Wünsche über den vereinbarten Leistungsumfang hinausgehen und alle weiteren Leistungen kostenpflichtig sind. Шеф сам пишет, на что указать, — его фраза идёт после dass (превращение Б). Рамку не меняй на «Bitte beachten Sie, dass …»: здесь единственная в письме конструкция darauf, dass.",
  "c1": [
   "Korrelat «darauf, dass» — местоименное наречие",
   "Nebensatz mit «dass» — глагол в конце"
  ]
 },
 {
  "id": "16",
  "kreis": 2,
  "haeuf": "3 из 56 · реальный экзамен",
  "de": "Selbstkritik",
  "ru": "Упрёк себе: не сообщили",
  "rahmen": {
   "de": "Sie hätten von uns automatisch eine Zwischennachricht erhalten müssen.",
   "ru": "Вы должны были автоматически получить от нас промежуточное сообщение."
  },
  "slots": [],
  "falle": "Konjunktiv II Perfekt с модальным глаголом: двойной инфинитив в конце (erhalten müssen), hätten на втором месте — учится целиком. Ставится сразу после блока 3, когда шеф просит объяснить, почему клиента не известили.",
  "c1": [
   "Konjunktiv II Perfekt mit Modalverb"
  ]
 },
 {
  "id": "11",
  "kreis": 2,
  "haeuf": "2 из 56",
  "de": "Schadensübernahme",
  "ru": "Берём ущерб на себя",
  "rahmen": {
   "de": "Für den verursachten Schaden kommen wir in vollem Umfang auf.",
   "ru": "За причинённый ущерб мы отвечаем в полном объёме."
  },
  "slots": [],
  "falle": "für etwas aufkommen — устойчивое выражение; приставка auf уходит в конец. Ставится сразу после блока 4.",
  "c1": [
   "trennbares Verb — разделяемый глагол"
  ]
 },
 {
  "id": "13",
  "kreis": 2,
  "haeuf": "3 из 56",
  "de": "Prüfung",
  "ru": "Дело ещё изучается",
  "rahmen": {
   "de": "Der Sachverhalt wird derzeit intern geprüft; über das Ergebnis informieren wir Sie zeitnah.",
   "ru": "Обстоятельства дела в настоящее время проверяются внутри компании; о результате мы сообщим Вам в ближайшее время."
  },
  "slots": [],
  "falle": "Шеф пишет, что решения ещё нет («wird geprüft», «Umstände klären», «Ursachen ermitteln»). derzeit, а не jetzt: jetzt в деловом письме звучит разговорно.",
  "c1": [
   "Passiv — страдательный залог"
  ]
 },
 {
  "id": "14",
  "kreis": 2,
  "haeuf": "2 из 56",
  "de": "Konditional ohne «wenn»",
  "ru": "Если не устроит — свяжитесь",
  "rahmen": {
   "de": "Sollte Ihnen [X] nicht zusagen, melden Sie sich bitte bei uns.",
   "ru": "Если Вас не устроит [X], пожалуйста, свяжитесь с нами."
  },
  "slots": [
   {
    "de": "dieser Vorschlag",
    "ru": "это предложение",
    "note": "подходит к любому решению",
    "joker": true
   },
   {
    "de": "der Termin",
    "ru": "дата / время",
    "note": "визит, ремонт, встреча"
   },
   {
    "de": "der neue Liefertermin",
    "ru": "новая дата доставки",
    "note": "срок позже требуемого"
   },
   {
    "de": "der Ersatzartikel",
    "ru": "заменный товар",
    "note": "замена, другая модель"
   }
  ],
  "falle": "Условие БЕЗ wenn: sollte на первом месте. В русском «если» обязательно, поэтому учится целиком. [X] — Nominativ и всегда единственное число. zusagen + Dativ: Ihnen. Ставится сразу после блока 6.",
  "c1": [
   "Konditionalsatz ohne «wenn» — условное придаточное без союза"
  ]
 },
 {
  "id": "15",
  "kreis": 2,
  "haeuf": "3 из 56",
  "de": "Rückfrage",
  "ru": "Что нужно от клиента",
  "rahmen": {
   "de": "Bitte teilen Sie uns mit, ob Sie einverstanden sind.",
   "ru": "Пожалуйста, сообщите нам, согласны ли Вы."
  },
  "slots": [
   {
    "de": "Bitte schicken Sie uns die entsprechenden Unterlagen.",
    "ru": "Пожалуйста, пришлите нам соответствующие документы.",
    "note": "ВТОРОЙ КАРКАС — просим прислать. Шеф назвал что — его слово в Akkusativ: einen Kaufbeleg (чек), ein Foto (фото), die Auftragsnummer (номер заказа)",
    "joker": true
   },
   {
    "de": "Bitte schicken Sie uns einige Fotos des Schadens.",
    "ru": "Пожалуйста, пришлите нам несколько фотографий повреждения.",
    "note": "повреждение"
   }
  ],
  "falle": "Два каркаса: «сообщите, согласны ли Вы» и «пришлите нам [что]». Что прислать — Akkusativ. Место: прямо перед финалом.",
  "c1": []
 }
];

const REIHENFOLGE = [
 "1",
 "2",
 "3",
 "16",
 "4",
 "11",
 "5",
 "13",
 "6",
 "14",
 "8",
 "7",
 "15",
 "9"
];

const KETTE = [
 {
  "schritt": "Получили жалобу",
  "bloecke": [
   "1",
   "2"
  ],
  "link": ""
 },
 {
  "schritt": "Извиняемся",
  "bloecke": [
   "3",
   "16"
  ],
  "link": ""
 },
 {
  "schritt": "Объясняем, почему так вышло",
  "bloecke": [
   "4",
   "11",
   "5"
  ],
  "link": "«dieser misslichen Situation» → ссылка на извинение; «jedoch» — «однако» к причине"
 },
 {
  "schritt": "Что делаем и когда",
  "bloecke": [
   "13",
   "6",
   "14"
  ],
  "link": "действие сразу, без рамки; можно связать словом «selbstverständlich» внутри"
 },
 {
  "schritt": "Чтобы не повторилось",
  "bloecke": [
   "8"
  ],
  "link": "«solcher Vorfälle» → ссылка на всё выше; концовка — пара к причине"
 },
 {
  "schritt": "Компенсация или вариант на выбор (если шеф даёт)",
  "bloecke": [
   "7"
  ],
  "link": "«Als Entschuldigung» → ссылка на извинение в блоке 3"
 },
 {
  "schritt": "Что нужно от клиента (если шеф просит)",
  "bloecke": [
   "15"
  ],
  "link": "«ob Sie einverstanden sind» → согласие на всё предложенное выше"
 },
 {
  "schritt": "Надежда + всегда в распоряжении",
  "bloecke": [
   "9"
  ],
  "link": "«trotz dieses Vorfalls» → ссылка на всё письмо"
 }
];

const FORMEN = [
 {
  "id": "А",
  "titel": "А · Виноваты — исправляем",
  "ru": "самая частая",
  "bloecke": [
   "1",
   "2",
   "3",
   "4",
   "6",
   "8",
   "7",
   "9"
  ],
  "wann": "шеф просит извиниться, объяснить причину, исправить, не допустить повторения, компенсировать"
 },
 {
  "id": "Б",
  "titel": "Б · Отказ",
  "ru": "говорим «нет» и смягчаем",
  "bloecke": [
   "1",
   "2",
   "3",
   "4",
   "5",
   "7",
   "9"
  ],
  "wann": "шеф пишет «ablehnen», «nicht möglich»"
 },
 {
  "id": "В",
  "titel": "В · Делаем, но дальше платно",
  "ru": "реальный экзамен · «платно» — вставка блока 5",
  "bloecke": [
   "1",
   "2",
   "3",
   "4",
   "5",
   "6",
   "9"
  ],
  "wann": "шеф пишет, что лимит исчерпан и дальше за деньги"
 },
 {
  "id": "Г",
  "titel": "Г · Ещё разбираемся",
  "ru": "решения пока нет",
  "bloecke": [
   "1",
   "2",
   "3",
   "13",
   "7",
   "15",
   "9"
  ],
  "wann": "шеф пишет «wird geprüft», «Umstände klären»"
 },
 {
  "id": "Д",
  "titel": "Д · Срок позже требуемого",
  "ru": "клиент просит до 1.10, шеф пишет 12.10",
  "bloecke": [
   "1",
   "2",
   "3",
   "4",
   "5",
   "6",
   "14",
   "7",
   "9"
  ],
  "wann": "клиент требует замену / недостающий / верный товар к дате, шеф называет дату позже"
 },
 {
  "id": "Е",
  "titel": "Е · Виноваты не мы",
  "ru": "поставщик, подрядчик",
  "bloecke": [
   "1",
   "2",
   "3",
   "4",
   "5",
   "6",
   "7",
   "9"
  ],
  "wann": "шеф пишет «Lieferant», «Paketdienst», «Subunternehmer», «liegt nicht bei uns»"
 }
];

const TRANSFORM = [
 {
  "id": "А",
  "titel": "Шеф диктует, ЧТО дать, предложить или прислать → блоки 7 и 15",
  "regel": "Из записки берёшь существительное с прилагательным и ставишь в Akkusativ: einen (м.р.) / ein (ср.р.) / eine (ж.р.). Глагол из записки выбрасываешь — он уже есть в каркасе. Деньги → gewähren, вещь, услуга или вариант на выбор → bieten … an.",
  "bsp": [
   {
    "notiz": "vergleichbares Modell aus Lagerbestand anbieten",
    "de": "ein vergleichbares Modell aus unserem Lagerbestand",
    "ru": "сопоставимую модель из нашего складского запаса"
   },
   {
    "notiz": "Techniker kostenfrei zur Einweisung",
    "de": "eine kostenfreie Einweisung durch unseren Techniker",
    "ru": "бесплатный инструктаж нашим техником"
   },
   {
    "notiz": "Schadensbericht anfordern",
    "de": "Bitte schicken Sie uns einen kurzen Schadensbericht.",
    "ru": "Пожалуйста, пришлите нам краткий акт о повреждении."
   }
  ]
 },
 {
  "id": "Б",
  "titel": "Шеф диктует, НА ЧТО указать или в чём отказать → блок 5",
  "regel": "Фразу из записки превращаешь в придаточное после dass: глагол уходит в самый конец. «Клиент» меняешь на «Sie» — ты пишешь ему самому.",
  "bsp": [
   {
    "notiz": "Garantie ist abgelaufen",
    "de": "die Garantie bereits abgelaufen ist",
    "ru": "гарантия уже истекла"
   },
   {
    "notiz": "Kosten der Überprüfung trägt der Kunde",
    "de": "die Kosten der Überprüfung von Ihnen zu tragen sind",
    "ru": "расходы на проверку несёте Вы"
   },
   {
    "notiz": "weitere Änderungen nur gegen Gebühr",
    "de": "alle weiteren Leistungen kostenpflichtig sind",
    "ru": "все дальнейшие услуги платные"
   }
  ]
 },
 {
  "id": "В",
  "titel": "Шеф диктует СРОК → вставка [когда] в блоке 6",
  "regel": "Дата и день недели — без zum: bis spätestens 12. Oktober. Визит в конкретный день — am. Шеф пишет «frühestens», «erst ab» — frühestens am.",
  "bsp": [
   {
    "notiz": "Nachlieferung bis 12.10.",
    "de": "bis spätestens 12. Oktober",
    "ru": "самое позднее до 12 октября"
   },
   {
    "notiz": "Mittwochmorgen, 2 Mitarbeiter",
    "de": "am Mittwochmorgen von zwei Mitarbeitern",
    "ru": "в среду утром двумя сотрудниками"
   },
   {
    "notiz": "Anfang nächster Woche",
    "de": "bis spätestens Anfang nächster Woche",
    "ru": "самое позднее до начала следующей недели"
   },
   {
    "notiz": "Nachlieferung frühestens 12.05.",
    "de": "frühestens am 12. Mai",
    "ru": "не раньше 12 мая"
   }
  ]
 }
];

const TRIGGER = [
 {
  "de": "sich entschuldigen",
  "ru": "извиниться",
  "blk": "3"
 },
 {
  "de": "das Bedauern zum Ausdruck bringen",
  "ru": "выразить сожаление",
  "blk": "3"
 },
 {
  "de": "die Ursache nennen / erklären, wie es dazu kam",
  "ru": "назвать причину, объяснить, как так вышло",
  "blk": "4"
 },
 {
  "de": "Gründe seitens des Herstellers erläutern",
  "ru": "объяснить причины со стороны производителя",
  "blk": "4"
 },
 {
  "de": "erklären, dass der Lieferant / Paketdienst den Fehler gemacht hat",
  "ru": "объяснить, что ошибся поставщик / служба доставки",
  "blk": "4"
 },
 {
  "de": "über eine IT-Störung informieren",
  "ru": "сообщить о сбое IT",
  "blk": "4"
 },
 {
  "de": "Verantwortung für die Schäden übernehmen",
  "ru": "взять ответственность за ущерб",
  "blk": "11"
 },
 {
  "de": "mitteilen, dass die Forderungen geprüft werden",
  "ru": "сообщить, что требования проверяются",
  "blk": "13"
 },
 {
  "de": "genaue Umstände klären",
  "ru": "прояснить точные обстоятельства",
  "blk": "13"
 },
 {
  "de": "die Forderung ablehnen",
  "ru": "отклонить требование",
  "blk": "5"
 },
 {
  "de": "erklären, dass die Verantwortung nicht bei uns liegt",
  "ru": "объяснить, что ответственность не на нас",
  "blk": "5"
 },
 {
  "de": "darauf hinweisen, dass dies außerhalb der Vereinbarung liegt",
  "ru": "указать, что это вне договорённости",
  "blk": "5"
 },
 {
  "de": "mitteilen, dass der Wunschtermin nicht machbar ist",
  "ru": "сообщить, что желаемый срок невозможен",
  "blk": "5"
 },
 {
  "de": "darauf hinweisen, dass weitere Leistungen kostenpflichtig sind",
  "ru": "предупредить, что дальнейшие услуги платные",
  "blk": "5"
 },
 {
  "de": "versichern, dass alles korrigiert wird",
  "ru": "заверить, что всё будет исправлено",
  "blk": "6"
 },
 {
  "de": "Ersatz zusenden / fehlende Ware nachliefern",
  "ru": "выслать замену, допоставить недостающее",
  "blk": "6"
 },
 {
  "de": "die Rechnung korrigieren / den Betrag erstatten",
  "ru": "исправить счёт, вернуть деньги",
  "blk": "6"
 },
 {
  "de": "mitteilen, dass das Problem bereits behoben ist",
  "ru": "сообщить, что проблема уже устранена",
  "blk": "6"
 },
 {
  "de": "einen Termin nennen / Lieferung bis …",
  "ru": "назвать срок, доставка до …",
  "blk": "6"
 },
 {
  "de": "um Rückmeldung bitten, falls der Termin / die Lösung nicht passt",
  "ru": "попросить ответ, если дата / решение не подходит",
  "blk": "14"
 },
 {
  "de": "eine Entschädigung / Wiedergutmachung anbieten",
  "ru": "предложить компенсацию",
  "blk": "7"
 },
 {
  "de": "einen Preisnachlass / Gutschein gewähren",
  "ru": "предоставить скидку / ваучер",
  "blk": "7"
 },
 {
  "de": "ein vergleichbares Modell anbieten",
  "ru": "предложить сопоставимую модель",
  "blk": "7"
 },
 {
  "de": "die nächste Lieferung kostenfrei anbieten",
  "ru": "предложить бесплатную следующую доставку",
  "blk": "7"
 },
 {
  "de": "zusichern, dass sich der Vorfall nicht wiederholt",
  "ru": "заверить, что случай не повторится",
  "blk": "8"
 },
 {
  "de": "Maßnahmen zur künftigen Vermeidung mitteilen",
  "ru": "сообщить меры по предотвращению",
  "blk": "8"
 },
 {
  "de": "Fotos / einen Schadensbericht anfordern",
  "ru": "запросить фото, акт о повреждении",
  "blk": "15"
 },
 {
  "de": "Zustimmung einholen / Rückmeldung erbitten",
  "ru": "получить согласие, попросить ответ",
  "blk": "15"
 },
 {
  "de": "einräumen, dass der Kunde früher hätte informiert werden müssen",
  "ru": "признать, что клиента надо было проинформировать раньше",
  "blk": "16"
 },
 {
  "de": "die langjährige Geschäftsbeziehung betonen",
  "ru": "подчеркнуть многолетние деловые отношения",
  "blk": "9"
 },
 {
  "de": "den Kunden halten / Kündigung oder Stornierung verhindern",
  "ru": "удержать клиента, не допустить отмены или расторжения",
  "blk": "9"
 }
];

const REGELN = [
 {
  "titel": "Письмо — цепочка, а не набор",
  "text": "Каждый блок цепляется за предыдущий: «dieser misslichen Situation» → к извинению, «jedoch» → к причине, «solcher Vorfälle» → ко всему выше, «Als Entschuldigung» → к блоку 3, «trotz dieses Vorfalls» → ко всему письму. Поэтому порядок один и не меняется.",
  "de": "",
  "ru": ""
 },
 {
  "titel": "Записка — чек-лист, а не план письма",
  "text": "Пункты в записке идут как попало. Выбираешь форму письма (А–Е), отмечаешь по записке, какие блоки добавить или убрать, ставишь их в порядке цепочки — и только потом пишешь.",
  "de": "",
  "ru": ""
 },
 {
  "titel": "Не знаешь, что вставить, — джокер",
  "text": "В каждой дырке есть ДЖОКЕР. Он подходит к любой ситуации — менее точно, зато без риска. Пустая дырка или фраза, сочинённая на ходу, хуже джокера.",
  "de": "",
  "ru": ""
 },
 {
  "titel": "Причина и концовка — парой",
  "text": "Выбрал причину в блоке 4 — концовку блока 8 бери её пару (пометка у концовки). Персонал → Team erweitert, ошибка обработки или брак → jeder Auftrag kontrolliert, планирование → verantwortlicher Mitarbeiter, техника → Technik gewartet, IT → Software aktualisiert, поставщик или подрядчик → Partner sorgfältiger auswählen.",
  "de": "",
  "ru": ""
 },
 {
  "titel": "Шеф продиктовал — бери его слова",
  "text": "Если в записке сказано, что предложить, на что указать или какой срок назвать, — слова шефа вставляются в дырку по одному из трёх превращений (А, Б, В). Предложение из записки целиком не переписывается никогда.",
  "de": "",
  "ru": ""
 },
 {
  "titel": "Два пункта в блоке 5 — один каркас, союз und",
  "text": "Каркас не повторяется. Второе придаточное цепляется через und, dass не повторяется, глагол во втором придаточном тоже уходит в конец.",
  "de": "Wir möchten Sie jedoch darauf hinweisen, dass Ihre Wünsche über den vereinbarten Leistungsumfang hinausgehen und alle weiteren Leistungen kostenpflichtig sind.",
  "ru": "Однако мы хотели бы обратить Ваше внимание на то, что Ваши пожелания выходят за рамки согласованного объёма услуг и все дальнейшие услуги платные."
 },
 {
  "titel": "Два объекта в блоке 7 — один каркас, союз sowie",
  "text": "Каркас не повторяется. Два объекта соединяются через sowie («а также»), оба в Akkusativ. Если хоть один — вещь, услуга или вариант на выбор, бери второй каркас (bieten … an).",
  "de": "Gerne bieten wir Ihnen ein vergleichbares Modell aus unserem Sortiment sowie einen Preisnachlass in Höhe von 20 % an.",
  "ru": "Мы охотно предлагаем Вам сопоставимую модель из нашего ассортимента, а также скидку в размере 20 %."
 },
 {
  "titel": "После прямого отказа — смягчитель",
  "text": "За отказом в блоке 5 идёт блок 7 (компенсация или вариант на выбор). Голый отказ режет критерий Kommunikative Gestaltung.",
  "de": "",
  "ru": ""
 },
 {
  "titel": "Повторы слов — не страшно",
  "text": "Повтор служебного или модального слова (wir, bitte, leider) баллов не снимает. Не трать время на экзамене на поиск синонимов.",
  "de": "",
  "ru": ""
 },
 {
  "titel": "Мало места на бланке",
  "text": "Сокращается в таком порядке: в блоке 8 — аварийный джокер одной строкой → в блоке 4 короткая рамка «Dazu kam es aufgrund …» (если корректор одобрит) → блоки 14 и 15 только если шеф прямо просит. Блоки 1, 2, 3 и 9 не трогаются никогда.",
  "de": "",
  "ru": ""
 }
];

const KRITERIEN = [
 {
  "de": "Kommunikative Aufgabenbewältigung",
  "ru": "Решение коммуникативной задачи",
  "text": "Закрыты ли ВСЕ пункты записки шефа. Пропущенный пункт стоит дороже любой грамматической ошибки. Один пункт — один блок."
 },
 {
  "de": "Kommunikative Gestaltung",
  "ru": "Коммуникативное оформление",
  "text": "Звучит ли письмо как обращение к живому человеку: признание эмоции, вежливость, отказ со смягчителем, связная цепочка."
 },
 {
  "de": "Formale Richtigkeit",
  "ru": "Формальная правильность",
  "text": "Грамматика и орфография. Выученные каркасы не ломаются; ошибки появляются там, где собираешь на ходу. Поэтому джокер лучше импровизации."
 },
 {
  "de": "Spektrum sprachlicher Mittel",
  "ru": "Спектр языковых средств",
  "text": "Разнообразие и уровень конструкций: Genitiv, Passiv, Konjunktiv II, условие без wenn, инверсия. Ставится по BA и Forumsbeitrag вместе — основную долю конструкций C1 несёт Forumsbeitrag."
 }
];

const RESERVE = [
 {
  "blk": "2 · v4.5",
  "de": "Ihre Anfrage hat uns erreicht.",
  "ru": "Ваш запрос до нас дошёл. — Anfrage = запрос, а клиент прислал жалобу"
 },
 {
  "blk": "3 · v4.5 (твой исходник)",
  "de": "Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
  "ru": "Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства. — 14 слов; в v5 без möchten"
 },
 {
  "blk": "10 · v4.5 (убран)",
  "de": "Das tut uns sehr leid. / Die Verzögerung tut uns sehr leid.",
  "ru": "Нам очень жаль. / Нам очень жаль, что возникла задержка. — заменён вариантом блока 3 с bedauern"
 },
 {
  "blk": "12 · v4.5 (убран)",
  "de": "Ausnahmsweise übernehmen wir die Kosten dieses Mal noch. Alle weiteren Leistungen werden wir Ihnen jedoch in Rechnung stellen.",
  "ru": "В порядке исключения в этот раз расходы мы ещё берём на себя. Все дальнейшие услуги мы, однако, выставим Вам в счёт. — 19 слов; заменён вставкой блока 5"
 },
 {
  "blk": "6 · v4.5",
  "de": "Selbstverständlich schaffen wir Abhilfe: [действие]",
  "ru": "Разумеется, мы примем меры: [действие] — рамка убрана, действие идёт сразу"
 },
 {
  "blk": "4 · v4.5 джокер",
  "de": "eines bedauerlichen Zusammentreffens mehrerer ungünstiger Umstände",
  "ru": "прискорбного стечения нескольких неблагоприятных обстоятельств — 6 слов; новый джокер eines internen Fehlers"
 },
 {
  "blk": "4 · v4.5",
  "de": "eines Lieferengpasses bei unserem Hersteller / eines Fehlers unseres Lieferanten / eines Fehlers des Paketdienstes / eines Fehlers unseres Subunternehmers",
  "ru": "перебоев с поставками у нашего производителя / ошибки нашего поставщика / ошибки службы доставки / ошибки нашего субподрядчика — 0 из 56; их закрывают Zulieferer и Dienstleister"
 },
 {
  "blk": "4 · запасная рамка (твой старый шаблон)",
  "de": "Die Ursache des Problems liegt darin, dass [причина — целое придаточное, глагол в конце].",
  "ru": "Причина проблемы в том, что [причина]. — если причины из записки нет в списке"
 },
 {
  "blk": "4 · вторая конструкция",
  "de": "Dies ist auf [причина в Akkusativ] zurückzuführen.",
  "ru": "Это объясняется [причиной]. — не решено, не учить"
 },
 {
  "blk": "7 · v4.5",
  "de": "Als Zeichen unseres Entgegenkommens bieten wir Ihnen [объект] an.",
  "ru": "В знак нашего расположения мы предлагаем Вам [объект]. — в v5 короче: Gerne bieten wir Ihnen … an."
 },
 {
  "blk": "7 · твой исходник",
  "de": "eine vollständige Rückerstattung des zu viel gezahlten Betrags",
  "ru": "полный возврат переплаченной суммы — 0 из 56; это исправление, а не подарок → блок 6 «сумма возвращена». Вернуть можно"
 },
 {
  "blk": "7 · v4.5",
  "de": "eine Gutschrift in Höhe von 100 €",
  "ru": "зачисление на сумму 100 € (кредит-нота) — трудное слово, 0 из 56"
 },
 {
  "blk": "8 · v4.5 кандидаты (не вошли)",
  "de": "arbeiten wir künftig mit einem anderen Paketdienst zusammen / wird jede Lieferung künftig vor dem Versand kontrolliert",
  "ru": "мы впредь будем работать с другой службой доставки / каждая поставка впредь проверяется перед отправкой — их закрывают «Partner» и «jeder Auftrag»"
 },
 {
  "blk": "5 · твой исходник",
  "de": "Bitte beachten Sie, dass …",
  "ru": "Пожалуйста, учтите, что … — короче на 2 слова, но тогда из письма уходит «darauf, dass»"
 },
 {
  "blk": "9 · v4.5 (твой исходник)",
  "de": "Wir hoffen darauf, dass Sie trotz dieses Vorfalls auch weiterhin unsere treue Kundin bleiben. Unsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.",
  "ru": "Мы надеемся на то, что Вы, несмотря на этот случай, и впредь останетесь нашей верной клиенткой. Наши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении. — 38 слов; в v5 — 18"
 },
 {
  "blk": "9 · кандидаты на выбор корректору",
  "de": "Wir hoffen, dass Sie uns auch künftig Ihr Vertrauen schenken. / Wir hoffen, Sie trotz dieses Vorfalls weiterhin zu unseren Kunden zählen zu dürfen.",
  "ru": "Мы надеемся, что Вы и впредь будете нам доверять. / Мы надеемся, что Вы, несмотря на этот случай, и дальше останетесь в числе наших клиентов."
 }
];

/* Образцы писем — собраны автоматически из блоков выше */
const MUSTER = [
 {
  "id": "J",
  "titel": "Письмо из одних джокеров",
  "ru": "выучить ПЕРВЫМ — подходит к любому заданию, даже если в записке ничего не понял",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Beschwerde ist bei uns eingegangen.",
    "ru": "Ваша жалоба к нам поступила."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und entschuldigen uns aufrichtig für die entstandenen Unannehmlichkeiten.",
    "ru": "Мы понимаем Ваше раздражение и искренне извиняемся за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines internen Fehlers kam es zu dieser misslichen Situation.",
    "ru": "Из-за внутренней ошибки возникла эта досадная ситуация."
   },
   {
    "id": "6",
    "de": "Alle beanstandeten Punkte werden unverzüglich erledigt.",
    "ru": "Все указанные Вами пункты будут незамедлительно выполнены."
   },
   {
    "id": "8",
    "de": "Zur Vermeidung solcher Vorfälle haben wir bereits entsprechende Maßnahmen ergriffen.",
    "ru": "Во избежание таких случаев мы уже приняли соответствующие меры."
   },
   {
    "id": "7",
    "de": "Als Entschuldigung gewähren wir Ihnen einen Preisnachlass in Höhe von 20 %.",
    "ru": "В качестве извинения мы предоставляем Вам скидку в размере 20 %."
   },
   {
    "id": "9",
    "de": "Wir hoffen, dass Sie uns trotz dieses Vorfalls treu bleiben, und stehen Ihnen bei Rückfragen gerne zur Verfügung.",
    "ru": "Мы надеемся, что Вы, несмотря на этот случай, останетесь нам верны, и охотно ответим на Ваши вопросы."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "А",
  "titel": "А · Виноваты — исправляем",
  "ru": "шеф просит извиниться, объяснить причину, исправить, не допустить повторения, компенсировать",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Beschwerde ist bei uns eingegangen.",
    "ru": "Ваша жалоба к нам поступила."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und entschuldigen uns aufrichtig für die entstandenen Unannehmlichkeiten.",
    "ru": "Мы понимаем Ваше раздражение и искренне извиняемся за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines Produktionsfehlers kam es zu dieser misslichen Situation.",
    "ru": "Из-за производственного брака возникла эта досадная ситуация."
   },
   {
    "id": "6",
    "de": "Ein Ersatz wird Ihnen unverzüglich zugesandt.",
    "ru": "Замена будет Вам незамедлительно выслана."
   },
   {
    "id": "8",
    "de": "Zur Vermeidung solcher Vorfälle wird jeder Auftrag künftig zusätzlich kontrolliert.",
    "ru": "Во избежание таких случаев каждый заказ впредь дополнительно проверяется."
   },
   {
    "id": "7",
    "de": "Als Entschuldigung gewähren wir Ihnen einen Preisnachlass in Höhe von 20 %.",
    "ru": "В качестве извинения мы предоставляем Вам скидку в размере 20 %."
   },
   {
    "id": "9",
    "de": "Wir hoffen, dass Sie uns trotz dieses Vorfalls treu bleiben, und stehen Ihnen bei Rückfragen gerne zur Verfügung.",
    "ru": "Мы надеемся, что Вы, несмотря на этот случай, останетесь нам верны, и охотно ответим на Ваши вопросы."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "Б",
  "titel": "Б · Отказ",
  "ru": "шеф пишет «ablehnen», «nicht möglich»",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Beschwerde ist bei uns eingegangen.",
    "ru": "Ваша жалоба к нам поступила."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und entschuldigen uns aufrichtig für die entstandenen Unannehmlichkeiten.",
    "ru": "Мы понимаем Ваше раздражение и искренне извиняемся за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines internen Fehlers kam es zu dieser misslichen Situation.",
    "ru": "Из-за внутренней ошибки возникла эта досадная ситуация."
   },
   {
    "id": "5",
    "de": "Wir möchten Sie jedoch darauf hinweisen, dass wir Ihre Forderungen in dieser Form leider nicht erfüllen können.",
    "ru": "Однако мы хотели бы обратить Ваше внимание на то, что мы, к сожалению, не можем выполнить Ваши требования в таком виде."
   },
   {
    "id": "7",
    "de": "Als Entschuldigung gewähren wir Ihnen einen Preisnachlass in Höhe von 20 %.",
    "ru": "В качестве извинения мы предоставляем Вам скидку в размере 20 %."
   },
   {
    "id": "9",
    "de": "Wir hoffen, dass Sie uns trotz dieses Vorfalls treu bleiben, und stehen Ihnen bei Rückfragen gerne zur Verfügung.",
    "ru": "Мы надеемся, что Вы, несмотря на этот случай, останетесь нам верны, и охотно ответим на Ваши вопросы."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "В",
  "titel": "В · Делаем, но дальше платно",
  "ru": "шеф пишет, что лимит исчерпан и дальше за деньги",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Beschwerde ist bei uns eingegangen.",
    "ru": "Ваша жалоба к нам поступила."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und entschuldigen uns aufrichtig für die entstandenen Unannehmlichkeiten.",
    "ru": "Мы понимаем Ваше раздражение и искренне извиняемся за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines krankheitsbedingten Personalausfalls kam es zu dieser misslichen Situation.",
    "ru": "Из-за отсутствия персонала по болезни возникла эта досадная ситуация."
   },
   {
    "id": "5",
    "de": "Wir möchten Sie jedoch darauf hinweisen, dass Ihre Wünsche über den vereinbarten Leistungsumfang hinausgehen und alle weiteren Leistungen kostenpflichtig sind.",
    "ru": "Однако мы хотели бы обратить Ваше внимание на то, что Ваши пожелания выходят за рамки согласованного объёма услуг и все дальнейшие услуги платные."
   },
   {
    "id": "6",
    "de": "Alle beanstandeten Punkte werden noch heute erledigt.",
    "ru": "Все указанные Вами пункты будут ещё сегодня выполнены."
   },
   {
    "id": "9",
    "de": "Wir hoffen, dass Sie uns trotz dieses Vorfalls treu bleiben, und stehen Ihnen bei Rückfragen gerne zur Verfügung.",
    "ru": "Мы надеемся, что Вы, несмотря на этот случай, останетесь нам верны, и охотно ответим на Ваши вопросы."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "Г",
  "titel": "Г · Ещё разбираемся",
  "ru": "шеф пишет «wird geprüft», «Umstände klären»",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Beschwerde ist bei uns eingegangen.",
    "ru": "Ваша жалоба к нам поступила."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und entschuldigen uns aufrichtig für die entstandenen Unannehmlichkeiten.",
    "ru": "Мы понимаем Ваше раздражение и искренне извиняемся за возникшие неудобства."
   },
   {
    "id": "13",
    "de": "Der Sachverhalt wird derzeit intern geprüft; über das Ergebnis informieren wir Sie zeitnah.",
    "ru": "Обстоятельства дела в настоящее время проверяются внутри компании; о результате мы сообщим Вам в ближайшее время."
   },
   {
    "id": "7",
    "de": "Als Entschuldigung gewähren wir Ihnen einen Preisnachlass in Höhe von 20 %.",
    "ru": "В качестве извинения мы предоставляем Вам скидку в размере 20 %."
   },
   {
    "id": "15",
    "de": "Bitte teilen Sie uns mit, ob Sie einverstanden sind.",
    "ru": "Пожалуйста, сообщите нам, согласны ли Вы."
   },
   {
    "id": "9",
    "de": "Wir hoffen, dass Sie uns trotz dieses Vorfalls treu bleiben, und stehen Ihnen bei Rückfragen gerne zur Verfügung.",
    "ru": "Мы надеемся, что Вы, несмотря на этот случай, останетесь нам верны, и охотно ответим на Ваши вопросы."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "Д",
  "titel": "Д · Срок позже требуемого",
  "ru": "клиент требует замену / недостающий / верный товар к дате, шеф называет дату позже",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Beschwerde ist bei uns eingegangen.",
    "ru": "Ваша жалоба к нам поступила."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und entschuldigen uns aufrichtig für die entstandenen Unannehmlichkeiten.",
    "ru": "Мы понимаем Ваше раздражение и искренне извиняемся за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines Fehlers unseres Zulieferers kam es zu dieser misslichen Situation.",
    "ru": "Из-за ошибки нашего поставщика возникла эта досадная ситуация."
   },
   {
    "id": "5",
    "de": "Wir möchten Sie jedoch darauf hinweisen, dass eine Lieferung bis 1. Oktober leider nicht möglich ist.",
    "ru": "Однако мы хотели бы обратить Ваше внимание на то, что доставка до 1 октября, к сожалению, невозможна."
   },
   {
    "id": "6",
    "de": "Die fehlenden Artikel werden bis spätestens 12. Oktober nachgeliefert.",
    "ru": "Недостающие товары будут самое позднее до 12 октября допоставлены."
   },
   {
    "id": "14",
    "de": "Sollte Ihnen der neue Liefertermin nicht zusagen, melden Sie sich bitte bei uns.",
    "ru": "Если Вас не устроит новая дата доставки, пожалуйста, свяжитесь с нами."
   },
   {
    "id": "7",
    "de": "Als Entschuldigung gewähren wir Ihnen einen Preisnachlass in Höhe von 20 %.",
    "ru": "В качестве извинения мы предоставляем Вам скидку в размере 20 %."
   },
   {
    "id": "9",
    "de": "Wir hoffen, dass Sie uns trotz dieses Vorfalls treu bleiben, und stehen Ihnen bei Rückfragen gerne zur Verfügung.",
    "ru": "Мы надеемся, что Вы, несмотря на этот случай, останетесь нам верны, и охотно ответим на Ваши вопросы."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "Е",
  "titel": "Е · Виноваты не мы",
  "ru": "шеф пишет «Lieferant», «Paketdienst», «Subunternehmer», «liegt nicht bei uns»",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Beschwerde ist bei uns eingegangen.",
    "ru": "Ваша жалоба к нам поступила."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und entschuldigen uns aufrichtig für die entstandenen Unannehmlichkeiten.",
    "ru": "Мы понимаем Ваше раздражение и искренне извиняемся за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines Fehlers unseres Dienstleisters kam es zu dieser misslichen Situation.",
    "ru": "Из-за ошибки нашего подрядчика возникла эта досадная ситуация."
   },
   {
    "id": "5",
    "de": "Wir möchten Sie jedoch darauf hinweisen, dass die Ursache außerhalb unseres Einflussbereichs lag.",
    "ru": "Однако мы хотели бы обратить Ваше внимание на то, что причина лежала вне нашей сферы влияния."
   },
   {
    "id": "6",
    "de": "Ein Ersatz wird Ihnen unverzüglich zugesandt.",
    "ru": "Замена будет Вам незамедлительно выслана."
   },
   {
    "id": "7",
    "de": "Gerne bieten wir Ihnen eine kostenfreie Lieferung Ihrer nächsten Bestellung an.",
    "ru": "Мы охотно предлагаем Вам бесплатную доставку Вашего следующего заказа."
   },
   {
    "id": "9",
    "de": "Wir hoffen, dass Sie uns trotz dieses Vorfalls treu bleiben, und stehen Ihnen bei Rückfragen gerne zur Verfügung.",
    "ru": "Мы надеемся, что Вы, несмотря на этот случай, останетесь нам верны, и охотно ответим на Ваши вопросы."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 }
];
