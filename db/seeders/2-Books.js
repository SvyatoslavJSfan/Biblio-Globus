'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const books = [
      {
        title: 'Мертвые души',
        author: 'Н.В. Гоголь',
        year: 1997,
        genre_id: 1,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10737626.jpg&width=400',
        description: 'В "Мертвых душах" автор сделал такой великий шаг, что все, доселе им написанное, кажется слабым и бледным в сравнении с ними", - так писал Белинский о бессмертном творении Гоголя. "Подаренный" Пушкиным сюжет давал основу для авантюрно-плутовского романа, но традиционный жанр не смог вместить в себя все богатство гоголевского замысла. "Вся Русь явится в нем", - говорил Гоголь о своем будущем романе, позднее названном им поэмой. Такое определение прозаического произведения не случайно - столь поэтичен созданный писателем образ Руси, птицы-тройки. "Русь, куда ж несешься ты? Дай ответ. Не дает ответа...',
        price: 259,
        amount: 89
      },
      {
        title: 'Евгений Онегин',
        author: 'А.С. Пушкин',
        year: 2024,
        genre_id: 1,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10390683.jpg&width=400',
        description: 'Роман в стихах А.С. Пушкина «Евгений Онегин» (1823–1831) – одно из самых значительных произведений русской литературы. Роман охватывает события с 1819 по 1825 год: от заграничных походов русской армии после разгрома Наполеона до восстания декабристов. По словам известного критика В.Г. Белинского роман – «энциклопедия русской жизни» начала XIX века. Из романа можно узнать практически всё об эпохе: о том, как одевались и что было в моде, что люди ценили больше всего, о чём разговаривали, что смотрели в театрах, какими интересами жили. Пушкин показал крепостную деревню, барскую Москву, светский Санкт-Петербург; атмосферу городских дворянских салонов, в которых прошла молодость Онегина.',
        price: 339,
        amount: 2
      },
      {
        title: 'Похвала глупости',
        author: 'Эразм Роттердамский',
        year: 2020,
        genre_id: 1,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10656242.jpg&width=400',
        description: 'Пер. с лат. П. К. Губера, С. П. Маркиша Послесл., коммент. Л. Е. Пинского Коммент. С. П. Маркиша; Иллюстрации М. А. Гавричкова Впервые опубликованная в Париже в 1511 году и сразу завоевавшая широкую известность и читательское признание, «Похвала Глупости» Эразма Роттердамского (1466-1536), крупнейшего писателя-гуманиста и ученого Северного Возрождения, до сих пор остается самым читаемым произведением автора и не теряет актуальности благодаря «покоряющей неувядаемой свежести парадоксально заостренной мысли». Рассматривая различные виды и характеристики Мории (Глупости), автор пропускает непосредственные жизненные наблюдения через призму античных реминисценций. Издание дополняют избранные диалоги из книги Эразма «Разговоры запросто» (1518), в которой многие сатирические мотивы речи Мории переработаны в маленькие комедии, забавные сценки и полные метких наблюдений беседы. Издание содержит подробную статью о жизни и творчестве Эразма и обширные комментарии. Цикл иллюстраций известного петербургского художника Михаила Гавричкова создан специально для издательства «Вита Нова» и публикуется впервые.',
        price: 6739,
        amount: 1
      },
      {
        title: 'Корабль дураков',
        author: 'Себастьян Брант',
        year: 2013,
        genre_id: 1,
        image: 'https://static1.bgshop.ru/extraimagehandler.ashx?filename=10244344.jpg&size=XXXS&view=R',
        description: 'Миниатюрное издание с золотым обрезом в шелковом переплете ручной работы',
        price: 6000,
        amount: 28
      },
      {
        title: 'Сто лет одиночества',
        author: 'Габриэль Гарсиа Маркес',
        year: 2023,
        genre_id: 1,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10186017.jpg&width=400',
        description: 'Одна из величайших книг ХХ века. Странная, поэтичная, причудливая история города Макондо, затерянного где-то в джунглях, – от сотворения до упадка. История рода Буэндиа – семьи, в которой чудеса столь повседневны, что на них даже не обращают внимания. Клан Буэндиа порождает святых и грешников, революционеров, героев и предателей, лихих авантюристов – и женщин, слишком прекрасных для обычной жизни. В нем кипят необычайные страсти – и происходят невероятные события. Однако эти невероятные события снова и снова становятся своеобразным «волшебным зеркалом», сквозь которое читателю является подлинная история Латинской Америки…',
        price: 609,
        amount: 4
      },
      {
        title: 'Быстрые деньги',
        author: 'Дж.Ч. Чейз',
        year: 2021,
        genre_id: 2,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10752976.jpg&width=400',
        description: 'Произведения Джеймса Хэдли Чейза со временем не перестали пользоваться успехом у читателей. Виртуоз лихо закрученного сюжета и классик детективного жанра, он создал порядка 90 романов, и более половины из них было экранизировано. «Я, как ищейка, беру след и знаю, чего хочет читатель. И что он купит», — так мэтр объяснял популярность своих романов, охотно раскрывая творческий секрет: читателей привлекают «действие и ритм». В настоящее издание вошли романы, написанные в начале 1950-х годов, — «Догадайся сам» и «Быстрые деньги». В них, как часто бывает у Чейза, жажда обогащения толкает героев на преступления, но предугадать, как будет развиваться сюжет, не по силу даже самым искушенным поклонникам этого мастера детектива. Тексты печатаются в новых переводах.',
        price: 307,
        amount: 74
      },
      {
        title: 'Зло под Солнцем',
        author: 'Агата Кристи',
        year: 2018,
        genre_id: 2,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10551900.jpg&width=400',
        description: 'В романе "Зло под солнцем" Эркюлю Пуаро предстоит побывать на респектабельном курорте. Однако покой великому сыщику только снится: даже на отдыхе ему придется заняться привычным делом - расследовать убийство. На первый взгляд картина ясна - виной всему любовный треугольник. Но треугольник может оказаться и четырех- и пятиугольником, а вполне вероятно, и куда более сложной геометрической фигурой.',
        price: 312,
        amount: 15
      },
      {
        title: 'Стойкий оловянный солдатик',
        author: 'Г.Х. Андерсен',
        year: 2010,
        genre_id: 3,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10843513.jpg&width=400',
        description: 'На страницах этой книги вас ждет встреча с любимыми героями сказок Ханса Кристиана Андерсена "Дюймовочка", "Дикие лебеди", Свинопас" и "Стойкий оловянный солдатик", Для детей младшего школьного возраста',
        price: 749,
        amount: 92
      },
      {
        title: 'Приключения Буратино, или Золотой ключик',
        author: 'А.Н. Толстой',
        year: 2010,
        genre_id: 3,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10843513.jpg&width=400',
        description: 'Книгу «Приключения Буратино, или Золотой ключик» Алексей Николаевич Толстой придумал специально для малышей. Художник Леонид Владимирский нарисовал к ней иллюстрации. В ней большие картинки и самые интересные приключения весёлого Буратино. Книга познакомит самых маленьких читателей с историей деревянного мальчишки. Для дошкольного возраста.',
        price: 777,
        amount: 205
      },
      {
        title: 'Сумма технологии',
        author: 'Станислав Лем',
        year: 2023,
        genre_id: 4,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10536368.jpg&width=400',
        description: '"Сумма технологии" подвела итог классической эпохе исследования Будущего. В своей книге Станислав Лем провел уникальный и смелый технологический анализ цивилизаций. Он проанализировал возможности возникновения принципиально новых групп научных дисциплин и полностью отказался от простых экстраполяционных построений Будущего. Написанная более сорока лет назад книга нисколько не устарела и является классикой футурологии.',
        price: 459,
        amount: 321
      },
      {
        title: 'Трудно быть богом',
        author: 'Стругацкие',
        year: 2023,
        genre_id: 4,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10572644.jpg&width=400',
        description: '«Трудно быть богом».Возможно, самое известное из произведений братьев Стругацких. Один из самых прославленных повестей отечественной фантастики.Увлекательная, полная драматизма история жизни, любви и приключений «дона Руматы» из королевства Арканар на далекой планете – рыцаря с двумя мечами, под именем которого скрывается резидент с планеты Земля ХХII века Антон.',
        price: 459,
        amount: 321
      },
      {
        title: 'Теоретическая механика',
        author: 'В.А. Диевский',
        year: 2022,
        genre_id: 5,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10868872.jpg&width=400',
        description: 'Рекомендовано УМО по университетскому политехническому образованию в качестве учебного пособия для студентов вузов, обучающихся по направлению подготовки 150300 - Прикладная механика. Книга предназначена для ознакомления студентов и курсантов высших технических учебных заведений с основами теоретической механики — статики, кинематики и динамики. Она представлена разделами «Статика», «Кинематика», «Динамика материальной точки и общие теоремы динамики», «Основы аналитической механики» и «Малые колебания механических систем и элементарная теория удара». Книга может быть также полезна инженерам и научным работникам для углубления знаний по основам теоретической механики.',
        price: 859,
        amount: 11
      },
      {
        title: 'Детали машин',
        author: 'Александр Владимирович Титенок',
        year: 2022,
        genre_id: 6,
        image: 'https://static1.bgshop.ru/imagehandler.ashx?filename=10870049.jpg&width=400',
        description: 'Представлены сведения об устройстве, расчете и конструировании - от элементарных деталей машин и до конструкции редуктора. Рассматривается специфика работы открытых зубчатых передач. Даны рекомендации по проектированию привода. Для студентов среднего профессионального образования всех форм обучения.',
        price: 1859,
        amount: 8
      },



    ]
    
     await queryInterface.bulkInsert('Books', books, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Books', null, {});
     
  }
};
