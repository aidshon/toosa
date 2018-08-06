const games = [
  {
    id: 0,
    name: "Крокодил",
    icon: require("../static/images/icons/games/crocodile.png"),
    screenName: "CrocodileOptionsScreen",
    description:
      "Игроки делятся на 2 команды. Игроки одной команды загадывают слово другой, выбирая жертву, которая будет объяснять его своей команде. Объяснения сопровождаются ТОЛЬКО жестами и мимикой."
  },
  {
    id: 1,
    name: "Объясни соседу",
    icon: require("../static/images/icons/games/secret.png"),
    screenName: "ExplainOptionsScreen",
    description:
      "Играют четное количество человек, в каждой команде по 2 игрока. Каждый игрок вписывает слово, которое хочет загадать. Дается минута на объяснение загаданного слова напарнику, не используя однокоренные слова. В конце игры считываются очки по количеству отгаданных слов."
  },
  {
    id: 2,
    name: "В процессе",
    icon: require("../static/images/icons/games/innovation.png"),
    description: "Скоро!"
  },
  {
    id: 3,
    name: "В процессе",
    icon: require("../static/images/icons/games/innovation.png"),
    description: "Скоро!"
  },
  {
    id: 4,
    name: "В процессе",
    icon: require("../static/images/icons/games/innovation.png"),
    description: "Скоро!"
  },
  {
    id: 5,
    name: "В процессе",
    icon: require("../static/images/icons/games/innovation.png"),
    description: "Скоро!"
  }
];

const categories = [
  {
    id: 0,
    name: "Профессии",
    icon: require("../static/images/icons/categories/profession.png"),
    words: [
      "сантехник",
      "пожарный",
      "переводчик",
      "дальнобойщик",
      "оператор",
      "инженер",
      "менеджер",
      "психиатр",
      "ветеринар",
      "шахтер",
      "доктор",
      "дизайнер",
      "электрик",
      "космонавт",
      "учитель"
    ]
  },
  {
    id: 1,
    name: "Живые существа",
    icon: require("../static/images/icons/categories/animal.png"),
    words: [
      "хамелеон",
      "динозавр",
      "чайка",
      "морская звезда",
      "утконос",
      "муравьед",
      "божья коровка",
      "краб",
      "журавль",
      "павлин",
      "тигр",
      "лев",
      "муравей",
      "комар",
      "удав"
    ]
  },
  {
    id: 2,
    name: "ТВ",
    icon: require("../static/images/icons/categories/tv.png"),
    words: [
      "Мадагаскар",
      "Камеди клаб",
      "Дом 2",
      "Минута славы",
      "Что? Где? Когда?",
      "Поле чудес",
      "Один дома",
      "Симпсоны",
      "Х фактор",
      "The Voice",
      "Top Gear",
      "Снимите это немедленно",
      "Матрица",
      "В мире животных",
      "Давай поженимся"
    ]
  },
  {
    id: 3,
    name: "Личности",
    icon: require("../static/images/icons/categories/person.png"),
    words: [
      "Элвис Пресли",
      "Джеки Чан",
      "Ксения Собчак",
      "Леди Гага",
      "Рианна",
      "Наполеон Бонапарт",
      "Майкл Джексон",
      "Брюс Ли",
      "Илон Маск",
      "Адольф Гитлер",
      "Максим Галкин",
      "Алла Пугачева",
      "Джейсон Стэтхэм",
      "Тимати",
      "Уилл Смит"
    ]
  },
  {
    id: 4,
    name: "Бренды",
    icon: require("../static/images/icons/categories/top.png"),
    words: [
      "Google",
      "YouTube",
      "Windows",
      "Apple",
      "KFC",
      "Mac",
      "Whiskas",
      "Rolls Royce",
      "Nokia",
      "Samsung",
      "Raffaello",
      "Snickers",
      "Adidas",
      "Yandex",
      "Toyota"
    ]
  },
  {
    id: 5,
    name: "Предметы быта",
    icon: require("../static/images/icons/categories/everyday.png"),
    words: [
      "Веер",
      "Мыло",
      "Ножницы",
      "Расческа",
      "Тряпка",
      "Фонарь",
      "Диван",
      "Ручка",
      "Диван",
      "Стакан",
      "Утюг",
      "Розетка",
      "Удлинитель",
      "Дверь",
      "Стиральная машина"
    ]
  },
  {
    id: 6,
    name: "Сложные слова",
    icon: require("../static/images/icons/categories/think.png"),
    words: [
      "Цивилизация",
      "Судьба",
      "Ресурс",
      "Регистрация",
      "Перспектива",
      "Гибрид",
      "Афоризма",
      "Чувство",
      "Век",
      "Суперсила",
      "Маньяк",
      "Проводник",
      "Династия",
      "Экспорт",
      "Юриспруденция"
    ]
  },
  {
    id: 7,
    name: "Природные явления",
    icon: require("../static/images/icons/categories/eruption.png"),
    words: [
      "Снег",
      "Гроза",
      "Землетрясение",
      "Дождь",
      "Град",
      "Цунами",
      "Тайфун",
      "Наводнение",
      "Буря",
      "Лесной пожар",
      "Молния",
      "Солнечное затмение",
      "Радуга",
      "Извержение вулкана",
      "Ураган"
    ]
  }
];

export { games, categories };
