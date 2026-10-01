// Данные товаров и героев (основано на bg3.wiki)
// Путь к картинке строится из id: /items/001.png, /items/002.png и т.д.

const img = (id) => `/items/${String(id).padStart(3, '0')}.png`;
const st = (вес, редкость, эффект) => ({ вес, редкость, эффект });

export const products = [
  /* ===== ЗЕЛЬЯ (21) ===== */
  { id:1, cat:'potion', name:{ru:'Зелье лечения',en:'Potion of Healing'}, price:50, discount:10, img:img(1), desc:{ru:'Восстанавливает 2d4+2 хита',en:'Restores 2d4+2 HP'}, stats:st('0.5 кг','Обычное','2d4+2 HP') },
  { id:2, cat:'potion', name:{ru:'Большое зелье лечения',en:'Potion of Greater Healing'}, price:120, discount:0, img:img(2), desc:{ru:'4d4+4 хита',en:'4d4+4 HP'}, stats:st('0.5 кг','Необычное','4d4+4 HP') },
  { id:3, cat:'potion', name:{ru:'Превосходное зелье лечения',en:'Potion of Superior Healing'}, price:250, discount:15, img:img(3), desc:{ru:'8d4+8 хита',en:'8d4+8 HP'}, stats:st('0.5 кг','Редкое','8d4+8 HP') },
  { id:4, cat:'potion', name:{ru:'Зелье силы холмов',en:'Elixir of Hill Giant Strength'}, price:300, discount:0, img:img(4), desc:{ru:'Сила = 21',en:'STR = 21'}, stats:st('0.5 кг','Редкое','STR 21') },
  { id:5, cat:'potion', name:{ru:'Зелье силы камня',en:'Elixir of Stone Giant Strength'}, price:500, discount:10, img:img(5), desc:{ru:'Сила = 23',en:'STR = 23'}, stats:st('0.5 кг','Редкое','STR 23') },
  { id:6, cat:'potion', name:{ru:'Зелье силы облака',en:'Elixir of Cloud Giant Strength'}, price:1200, discount:0, img:img(6), desc:{ru:'Сила = 27',en:'STR = 27'}, stats:st('0.5 кг','Очень редкое','STR 27') },
  { id:7, cat:'potion', name:{ru:'Зелье героизма',en:'Potion of Heroism'}, price:180, discount:0, img:img(7), desc:{ru:'+10 временных хитов',en:'+10 temp HP'}, stats:st('0.5 кг','Редкое','+10 HP') },
  { id:8, cat:'potion', name:{ru:'Зелье скорости',en:'Potion of Speed'}, price:220, discount:5, img:img(8), desc:{ru:'Ускорение на 3 хода',en:'Haste for 3 turns'}, stats:st('0.5 кг','Редкое','Haste') },
  { id:9, cat:'potion', name:{ru:'Зелье невидимости',en:'Potion of Invisibility'}, price:200, discount:0, img:img(9), desc:{ru:'Невидимость на 1 час',en:'Invisible 1 hour'}, stats:st('0.5 кг','Редкое','Invisible') },
  { id:10, cat:'potion', name:{ru:'Зелье сопротивления огню',en:'Elixir of Fire Resistance'}, price:90, discount:0, img:img(10), desc:{ru:'Сопротивление огню',en:'Fire resistance'}, stats:st('0.5 кг','Необычное','Resist Fire') },
  { id:11, cat:'potion', name:{ru:'Зелье сопротивления яду',en:'Elixir of Poison Resistance'}, price:90, discount:0, img:img(11), desc:{ru:'Сопротивление яду',en:'Poison resistance'}, stats:st('0.5 кг','Необычное','Resist Poison') },
  { id:12, cat:'potion', name:{ru:'Зелье ясновидения',en:'Elixir of See Invisibility'}, price:150, discount:0, img:img(12), desc:{ru:'Видеть невидимое',en:'See invisible'}, stats:st('0.5 кг','Необычное','Detect') },
  { id:13, cat:'potion', name:{ru:'Зелье полёта',en:'Potion of Flying'}, price:260, discount:10, img:img(13), desc:{ru:'Полёт на 10 ходов',en:'Fly 10 turns'}, stats:st('0.5 кг','Редкое','Fly') },
  { id:14, cat:'potion', name:{ru:'Зелье дыхания под водой',en:'Elixir of Water Breathing'}, price:80, discount:0, img:img(14), desc:{ru:'Дышать под водой',en:'Breathe water'}, stats:st('0.5 кг','Обычное','Water') },
  { id:15, cat:'potion', name:{ru:'Алхимический огонь',en:"Alchemist's Fire"}, price:40, discount:0, img:img(15), desc:{ru:'1d4 огня',en:'1d4 fire'}, stats:st('0.5 кг','Обычное','1d4 Fire') },
  { id:16, cat:'potion', name:{ru:'Кислота',en:'Acid Vial'}, price:35, discount:0, img:img(16), desc:{ru:'2d6 кислоты',en:'2d6 acid'}, stats:st('0.5 кг','Обычное','2d6 Acid') },
  { id:17, cat:'potion', name:{ru:'Святая вода',en:'Holy Water'}, price:60, discount:0, img:img(17), desc:{ru:'2d6 урона нежити',en:'2d6 vs undead'}, stats:st('0.5 кг','Обычное','2d6 Undead') },
  { id:18, cat:'potion', name:{ru:'Яд вирма',en:'Wyvern Toxin'}, price:140, discount:0, img:img(18), desc:{ru:'1d10 яд',en:'1d10 poison'}, stats:st('0.5 кг','Необычное','1d10') },
  { id:19, cat:'potion', name:{ru:'Зелье ангельского сна',en:'Potion of Angelic Slumber'}, price:400, discount:20, img:img(19), desc:{ru:'Полный отдых как сон 8ч',en:'Full long rest'}, stats:st('0.5 кг','Очень редкое','Long Rest') },
  { id:20, cat:'potion', name:{ru:'Зелье ясности',en:'Elixir of Clarity'}, price:180, discount:0, img:img(20), desc:{ru:'Преимущество на Инт',en:'Advantage INT'}, stats:st('0.5 кг','Редкое','Adv INT') },
  { id:21, cat:'potion', name:{ru:'Эликсир вампира',en:'Elixir of Vampirism'}, price:700, discount:0, img:img(21), desc:{ru:'Вампиризм на удар',en:'Vampiric touch'}, stats:st('0.5 кг','Легендарное','Vampiric') },

  /* ===== ОРУЖИЕ (21) ===== */
  { id:22, cat:'weapon', name:{ru:'Длинный меч',en:'Longsword'}, price:15, discount:0, img:img(22), desc:{ru:'1d8 рубящий',en:'1d8 slashing'}, stats:st('1.5 кг','Обычное','1d8') },
  { id:23, cat:'weapon', name:{ru:'Длинный меч +1',en:'Longsword +1'}, price:220, discount:15, img:img(23), desc:{ru:'1d8+1 рубящий',en:'1d8+1 slashing'}, stats:st('1.5 кг','Необычное','1d8+1') },
  { id:24, cat:'weapon', name:{ru:'Длинный меч +2',en:'Longsword +2'}, price:550, discount:0, img:img(24), desc:{ru:'1d8+2 рубящий',en:'1d8+2 slashing'}, stats:st('1.5 кг','Редкое','1d8+2') },
  { id:25, cat:'weapon', name:{ru:'Кровавый клинок',en:'Bloodthirst'}, price:900, discount:0, img:img(25), desc:{ru:'Легендарный кинжал Орин',en:"Orin's legendary dagger"}, stats:st('0.5 кг','Легендарное','1d4+3') },
  { id:26, cat:'weapon', name:{ru:'Клинок гор',en:'Mountain Blade'}, price:300, discount:10, img:img(26), desc:{ru:'1d10 двуручный',en:'1d10 two-handed'}, stats:st('3 кг','Редкое','1d10') },
  { id:27, cat:'weapon', name:{ru:'Секира берсерка',en:'Berserker Axe'}, price:400, discount:0, img:img(27), desc:{ru:'1d12 рубящий',en:'1d12 slashing'}, stats:st('3 кг','Редкое','1d12') },
  { id:28, cat:'weapon', name:{ru:'Лук меткого стрелка',en:'Bow of the Marksman'}, price:180, discount:0, img:img(28), desc:{ru:'1d8 колющий, дальний',en:'1d8 piercing ranged'}, stats:st('1 кг','Необычное','1d8') },
  { id:29, cat:'weapon', name:{ru:'Арбалет гномов',en:'Dwarven Crossbow'}, price:220, discount:5, img:img(29), desc:{ru:'1d10 колющий',en:'1d10 piercing'}, stats:st('2.5 кг','Редкое','1d10') },
  { id:30, cat:'weapon', name:{ru:'Копьё Шар',en:'Spear of Shar'}, price:600, discount:0, img:img(30), desc:{ru:'1d6+некротика',en:'1d6+necro'}, stats:st('1.5 кг','Очень редкое','1d6+Necro') },
  { id:31, cat:'weapon', name:{ru:'Молот Латандера',en:'Hammer of Lathander'}, price:750, discount:0, img:img(31), desc:{ru:'1d8+свет',en:'1d8+radiant'}, stats:st('2 кг','Очень редкое','1d8+Radiant') },
  { id:32, cat:'weapon', name:{ru:'Посох мага',en:"Wizard's Staff"}, price:120, discount:0, img:img(32), desc:{ru:'+1 к DC заклинаний',en:'+1 spell DC'}, stats:st('2 кг','Необычное','+1 DC') },
  { id:33, cat:'weapon', name:{ru:'Посох Маркешешир',en:'Markoheshkir'}, price:1500, discount:0, img:img(33), desc:{ru:'Легендарный посох',en:'Legendary staff'}, stats:st('2 кг','Легендарное','+2 DC') },
  { id:34, cat:'weapon', name:{ru:'Кинжал ассасина',en:"Assassin's Dagger"}, price:340, discount:10, img:img(34), desc:{ru:'1d4+2, +криты',en:'1d4+2, +crits'}, stats:st('0.5 кг','Редкое','1d4+2') },
  { id:35, cat:'weapon', name:{ru:'Рапира изящества',en:'Rapier of Grace'}, price:280, discount:0, img:img(35), desc:{ru:'1d8 колющий, точный',en:'1d8 piercing, finesse'}, stats:st('1 кг','Необычное','1d8') },
  { id:36, cat:'weapon', name:{ru:'Катана Кровавой луны',en:'Blood Moon Katana'}, price:480, discount:15, img:img(36), desc:{ru:'1d10+урон кровью',en:'1d10+bleed'}, stats:st('1.5 кг','Редкое','1d10+Bleed') },
  { id:37, cat:'weapon', name:{ru:'Молот громобоя',en:'Thunderhammer'}, price:520, discount:0, img:img(37), desc:{ru:'1d8+гром',en:'1d8+thunder'}, stats:st('2.5 кг','Редкое','1d8+Thunder') },
  { id:38, cat:'weapon', name:{ru:'Серп друида',en:"Druid's Sickle"}, price:80, discount:0, img:img(38), desc:{ru:'1d4+природа',en:'1d4+primal'}, stats:st('0.5 кг','Обычное','1d4') },
  { id:39, cat:'weapon', name:{ru:'Трезубец Посейдона',en:'Poseidon Trident'}, price:680, discount:0, img:img(39), desc:{ru:'1d6+холод',en:'1d6+cold'}, stats:st('2 кг','Очень редкое','1d6+Cold') },
  { id:40, cat:'weapon', name:{ru:'Кастет монаха',en:"Monk's Gauntlets"}, price:160, discount:0, img:img(40), desc:{ru:'1d6+Ловк',en:'1d6+DEX'}, stats:st('0.5 кг','Необычное','1d6+DEX') },
  { id:41, cat:'weapon', name:{ru:'Кнут Ллос',en:'Whip of Lolth'}, price:560, discount:0, img:img(41), desc:{ru:'1d4+яд',en:'1d4+poison'}, stats:st('1 кг','Редкое','1d4+Poison') },
  { id:42, cat:'weapon', name:{ru:'Скимитар Небес',en:'Sky Scimitar'}, price:340, discount:5, img:img(42), desc:{ru:'1d6+электричество',en:'1d6+lightning'}, stats:st('1 кг','Редкое','1d6+Light') },

  /* ===== БРОНЯ (21) ===== */
  { id:43, cat:'armor', name:{ru:'Кожаный доспех',en:'Leather Armor'}, price:10, discount:0, img:img(43), desc:{ru:'AC 11 + Ловк',en:'AC 11 + DEX'}, stats:st('5 кг','Обычное','AC 11') },
  { id:44, cat:'armor', name:{ru:'Клёпаный кожаный',en:'Studded Leather'}, price:45, discount:0, img:img(44), desc:{ru:'AC 12 + Ловк',en:'AC 12 + DEX'}, stats:st('6.5 кг','Обычное','AC 12') },
  { id:45, cat:'armor', name:{ru:'Кольчуга',en:'Chain Mail'}, price:75, discount:0, img:img(45), desc:{ru:'AC 16, средняя',en:'AC 16, medium'}, stats:st('25 кг','Обычное','AC 16') },
  { id:46, cat:'armor', name:{ru:'Кольчуга +1',en:'Chain Mail +1'}, price:250, discount:10, img:img(46), desc:{ru:'AC 17, средняя',en:'AC 17, medium'}, stats:st('25 кг','Необычное','AC 17') },
  { id:47, cat:'armor', name:{ru:'Чешуйчатый доспех',en:'Scale Mail'}, price:50, discount:0, img:img(47), desc:{ru:'AC 14 + Ловк (макс 2)',en:'AC 14 + DEX (max 2)'}, stats:st('22 кг','Обычное','AC 14') },
  { id:48, cat:'armor', name:{ru:'Полулаты',en:'Half Plate'}, price:750, discount:0, img:img(48), desc:{ru:'AC 15 + Ловк (макс 2)',en:'AC 15 + DEX (max 2)'}, stats:st('20 кг','Редкое','AC 15') },
  { id:49, cat:'armor', name:{ru:'Латы',en:'Full Plate'}, price:1500, discount:0, img:img(49), desc:{ru:'AC 18, тяжёлая',en:'AC 18, heavy'}, stats:st('30 кг','Очень редкое','AC 18') },
  { id:50, cat:'armor', name:{ru:'Мантия Чародея',en:"Wizard's Robe"}, price:400, discount:20, img:img(50), desc:{ru:'+2 к DC заклинаний',en:'+2 spell DC'}, stats:st('1 кг','Редкое','+2 DC') },
  { id:51, cat:'armor', name:{ru:'Мантия Архимага',en:'Archmage Robe'}, price:1200, discount:0, img:img(51), desc:{ru:'+3 к DC, +1 AC',en:'+3 DC, +1 AC'}, stats:st('1 кг','Легендарное','+3 DC') },
  { id:52, cat:'armor', name:{ru:'Одеяние Шар',en:"Shar's Vestment"}, price:850, discount:0, img:img(52), desc:{ru:'AC 15 + некро',en:'AC 15 + necro'}, stats:st('10 кг','Очень редкое','AC 15') },
  { id:53, cat:'armor', name:{ru:'Броня Астариона',en:"Astarion's Armor"}, price:520, discount:15, img:img(53), desc:{ru:'AC 14 + скрытность',en:'AC 14 + stealth'}, stats:st('8 кг','Редкое','AC 14') },
  { id:54, cat:'armor', name:{ru:'Панцирь Лаэзель',en:"Lae'zel's Plate"}, price:980, discount:0, img:img(54), desc:{ru:'AC 17 + гитьянки',en:'AC 17 + gith'}, stats:st('28 кг','Очень редкое','AC 17') },
  { id:55, cat:'armor', name:{ru:'Щит деревянный',en:'Wooden Shield'}, price:10, discount:0, img:img(55), desc:{ru:'+2 AC',en:'+2 AC'}, stats:st('3 кг','Обычное','+2 AC') },
  { id:56, cat:'armor', name:{ru:'Щит стальной',en:'Steel Shield'}, price:100, discount:0, img:img(56), desc:{ru:'+2 AC',en:'+2 AC'}, stats:st('6 кг','Обычное','+2 AC') },
  { id:57, cat:'armor', name:{ru:'Щит башни',en:'Tower Shield'}, price:280, discount:5, img:img(57), desc:{ru:'+3 AC, -Ловк',en:'+3 AC, -DEX'}, stats:st('10 кг','Редкое','+3 AC') },
  { id:58, cat:'armor', name:{ru:'Шлем рыцаря',en:'Knight Helm'}, price:180, discount:0, img:img(58), desc:{ru:'+1 AC',en:'+1 AC'}, stats:st('2 кг','Необычное','+1 AC') },
  { id:59, cat:'armor', name:{ru:'Капюшон тени',en:'Shadow Hood'}, price:220, discount:0, img:img(59), desc:{ru:'+2 скрытность',en:'+2 stealth'}, stats:st('0.5 кг','Редкое','+2 Stealth') },
  { id:60, cat:'armor', name:{ru:'Перчатки силы',en:'Gauntlets of Strength'}, price:340, discount:0, img:img(60), desc:{ru:'Сила = 19',en:'STR = 19'}, stats:st('1 кг','Редкое','STR 19') },
  { id:61, cat:'armor', name:{ru:'Сапоги скорости',en:'Boots of Speed'}, price:400, discount:10, img:img(61), desc:{ru:'+3 м скорости',en:'+3m movement'}, stats:st('1 кг','Редкое','+3m') },
  { id:62, cat:'armor', name:{ru:'Плащ защиты',en:'Cloak of Protection'}, price:280, discount:0, img:img(62), desc:{ru:'+1 AC, +1 спасброски',en:'+1 AC, +1 saves'}, stats:st('0.5 кг','Редкое','+1 AC') },
  { id:63, cat:'armor', name:{ru:'Амулет здоровья',en:'Amulet of Health'}, price:600, discount:0, img:img(63), desc:{ru:'Телосложение = 19',en:'CON = 19'}, stats:st('0.5 кг','Очень редкое','CON 19') },

  /* ===== ЕДА (21) ===== */
  { id:64, cat:'food', name:{ru:'Хлеб',en:'Bread'}, price:2, discount:0, img:img(64), desc:{ru:'Припасы +1',en:'Camp supply +1'}, stats:st('0.5 кг','Обычное','+1') },
  { id:65, cat:'food', name:{ru:'Сыр',en:'Cheese'}, price:3, discount:0, img:img(65), desc:{ru:'Припасы +1',en:'Camp supply +1'}, stats:st('0.5 кг','Обычное','+1') },
  { id:66, cat:'food', name:{ru:'Жареная курица',en:'Roast Chicken'}, price:15, discount:0, img:img(66), desc:{ru:'Припасы +5',en:'Camp supply +5'}, stats:st('1 кг','Обычное','+5') },
  { id:67, cat:'food', name:{ru:'Эль Глубокой Воды',en:'Waterdeep Ale'}, price:8, discount:5, img:img(67), desc:{ru:'Припасы +2',en:'Camp supply +2'}, stats:st('0.5 кг','Обычное','+2') },
  { id:68, cat:'food', name:{ru:'Вино Амна',en:'Amnian Wine'}, price:20, discount:0, img:img(68), desc:{ru:'Припасы +3',en:'Camp supply +3'}, stats:st('1 кг','Необычное','+3') },
  { id:69, cat:'food', name:{ru:'Копчёная рыба',en:'Smoked Fish'}, price:12, discount:0, img:img(69), desc:{ru:'Припасы +4',en:'Camp supply +4'}, stats:st('0.5 кг','Обычное','+4') },
  { id:70, cat:'food', name:{ru:'Рагу гурмана',en:'Gourmet Stew'}, price:30, discount:0, img:img(70), desc:{ru:'Припасы +8',en:'Camp supply +8'}, stats:st('1.5 кг','Необычное','+8') },
  { id:71, cat:'food', name:{ru:'Пир героев',en:"Heroes' Feast"}, price:120, discount:10, img:img(71), desc:{ru:'Припасы +20',en:'Camp supply +20'}, stats:st('3 кг','Редкое','+20') },
  { id:72, cat:'food', name:{ru:'Яблоко',en:'Apple'}, price:1, discount:0, img:img(72), desc:{ru:'Припасы +1',en:'Camp supply +1'}, stats:st('0.2 кг','Обычное','+1') },
  { id:73, cat:'food', name:{ru:'Груша',en:'Pear'}, price:1, discount:0, img:img(73), desc:{ru:'Припасы +1',en:'Camp supply +1'}, stats:st('0.2 кг','Обычное','+1') },
  { id:74, cat:'food', name:{ru:'Мясо кабана',en:'Boar Meat'}, price:18, discount:0, img:img(74), desc:{ru:'Припасы +6',en:'Camp supply +6'}, stats:st('2 кг','Обычное','+6') },
  { id:75, cat:'food', name:{ru:'Оленина',en:'Venison'}, price:25, discount:0, img:img(75), desc:{ru:'Припасы +7',en:'Camp supply +7'}, stats:st('2 кг','Необычное','+7') },
  { id:76, cat:'food', name:{ru:'Мёд',en:'Honey'}, price:6, discount:0, img:img(76), desc:{ru:'Припасы +2, лечение',en:'+2 supply, heal'}, stats:st('0.5 кг','Обычное','+2') },
  { id:77, cat:'food', name:{ru:'Сушёные травы',en:'Dried Herbs'}, price:4, discount:0, img:img(77), desc:{ru:'Припасы +2',en:'Camp supply +2'}, stats:st('0.1 кг','Обычное','+2') },
  { id:78, cat:'food', name:{ru:'Грибы Подземья',en:'Underdark Mushrooms'}, price:10, discount:0, img:img(78), desc:{ru:'Припасы +3, яд?',en:'+3 supply, poison?'}, stats:st('0.3 кг','Необычное','+3') },
  { id:79, cat:'food', name:{ru:'Пирог с ягодами',en:'Berry Pie'}, price:14, discount:0, img:img(79), desc:{ru:'Припасы +5',en:'Camp supply +5'}, stats:st('0.8 кг','Обычное','+5') },
  { id:80, cat:'food', name:{ru:'Эль дварфов',en:'Dwarven Ale'}, price:16, discount:0, img:img(80), desc:{ru:'Припасы +3, стойкость',en:'+3 supply, endurance'}, stats:st('0.5 кг','Необычное','+3') },
  { id:81, cat:'food', name:{ru:'Икра рыбы-меча',en:'Swordfish Roe'}, price:60, discount:0, img:img(81), desc:{ru:'Припасы +12',en:'Camp supply +12'}, stats:st('0.5 кг','Редкое','+12') },
  { id:82, cat:'food', name:{ru:'Пряности Калимшана',en:'Calishite Spices'}, price:45, discount:0, img:img(82), desc:{ru:'Припасы +10',en:'Camp supply +10'}, stats:st('0.3 кг','Редкое','+10') },
  { id:83, cat:'food', name:{ru:'Королевский торт',en:'Royal Cake'}, price:80, discount:15, img:img(83), desc:{ru:'Припасы +15',en:'Camp supply +15'}, stats:st('1 кг','Редкое','+15') },
  { id:84, cat:'food', name:{ru:'Пища-эликсир',en:'Food Elixir'}, price:100, discount:0, img:img(84), desc:{ru:'Припасы +18',en:'Camp supply +18'}, stats:st('0.5 кг','Редкое','+18') },

  /* ===== СВИТКИ (21) ===== */
  { id:85, cat:'scroll', name:{ru:'Свиток воскрешения',en:'Scroll of Revivify'}, price:500, discount:0, img:img(85), desc:{ru:'Вернуть павшего',en:'Revive fallen'}, stats:st('0.1 кг','Редкое','Revivify') },
  { id:86, cat:'scroll', name:{ru:'Свиток огненного шара',en:'Scroll of Fireball'}, price:250, discount:10, img:img(86), desc:{ru:'8d6 огнём',en:'8d6 fire'}, stats:st('0.1 кг','Необычное','8d6') },
  { id:87, cat:'scroll', name:{ru:'Свиток молнии',en:'Scroll of Lightning Bolt'}, price:240, discount:0, img:img(87), desc:{ru:'8d6 электричеством',en:'8d6 lightning'}, stats:st('0.1 кг','Необычное','8d6') },
  { id:88, cat:'scroll', name:{ru:'Свиток лечения',en:'Scroll of Cure Wounds'}, price:60, discount:0, img:img(88), desc:{ru:'2d8+мод лечения',en:'2d8+mod healing'}, stats:st('0.1 кг','Обычное','2d8') },
  { id:89, cat:'scroll', name:{ru:'Свиток щита',en:'Scroll of Shield'}, price:80, discount:0, img:img(89), desc:{ru:'+5 AC на ход',en:'+5 AC 1 turn'}, stats:st('0.1 кг','Обычное','+5 AC') },
  { id:90, cat:'scroll', name:{ru:'Свиток магической стрелы',en:'Scroll of Magic Missile'}, price:70, discount:0, img:img(90), desc:{ru:'3×1d4+1',en:'3×1d4+1'}, stats:st('0.1 кг','Обычное','3d4+3') },
  { id:91, cat:'scroll', name:{ru:'Свиток невидимости',en:'Scroll of Invisibility'}, price:180, discount:0, img:img(91), desc:{ru:'Невидимость',en:'Invisibility'}, stats:st('0.1 кг','Редкое','Invisible') },
  { id:92, cat:'scroll', name:{ru:'Свиток полёта',en:'Scroll of Fly'}, price:200, discount:5, img:img(92), desc:{ru:'Полёт 10 ходов',en:'Fly 10 turns'}, stats:st('0.1 кг','Редкое','Fly') },
  { id:93, cat:'scroll', name:{ru:'Свиток телепорта',en:'Scroll of Teleport'}, price:350, discount:0, img:img(93), desc:{ru:'Прыжок на 9 м',en:'Teleport 9m'}, stats:st('0.1 кг','Редкое','Teleport') },
  { id:94, cat:'scroll', name:{ru:'Свиток ускорения',en:'Scroll of Haste'}, price:260, discount:0, img:img(94), desc:{ru:'Ускорение на 3 хода',en:'Haste 3 turns'}, stats:st('0.1 кг','Редкое','Haste') },
  { id:95, cat:'scroll', name:{ru:'Свиток сна',en:'Scroll of Sleep'}, price:120, discount:0, img:img(95), desc:{ru:'Усыпить до 24 HP',en:'Sleep up to 24 HP'}, stats:st('0.1 кг','Необычное','Sleep') },
  { id:96, cat:'scroll', name:{ru:'Свиток страха',en:'Scroll of Fear'}, price:150, discount:0, img:img(96), desc:{ru:'Испуг в конусе',en:'Fear cone'}, stats:st('0.1 кг','Необычное','Fear') },
  { id:97, cat:'scroll', name:{ru:'Свиток обнаружения мыслей',en:'Scroll of Detect Thoughts'}, price:100, discount:0, img:img(97), desc:{ru:'Читать мысли',en:'Read minds'}, stats:st('0.1 кг','Обычное','Detect') },
  { id:98, cat:'scroll', name:{ru:'Свиток очарования',en:'Scroll of Charm Person'}, price:110, discount:0, img:img(98), desc:{ru:'Очаровать гуманоида',en:'Charm humanoid'}, stats:st('0.1 кг','Обычное','Charm') },
  { id:99, cat:'scroll', name:{ru:'Свиток проклятия',en:'Scroll of Bestow Curse'}, price:220, discount:0, img:img(99), desc:{ru:'Проклятие на цель',en:'Curse target'}, stats:st('0.1 кг','Редкое','Curse') },
  { id:100, cat:'scroll', name:{ru:'Свиток массового исцеления',en:'Scroll of Mass Healing'}, price:400, discount:10, img:img(100), desc:{ru:'Лечит всех союзников',en:'Heal all allies'}, stats:st('0.1 кг','Редкое','Mass Heal') },
  { id:101, cat:'scroll', name:{ru:'Свиток метеора',en:'Scroll of Meteor Swarm'}, price:1000, discount:0, img:img(101), desc:{ru:'40d6 огня+дробящий',en:'40d6 fire+bludge'}, stats:st('0.1 кг','Легендарное','40d6') },
  { id:102, cat:'scroll', name:{ru:'Свиток желания',en:'Scroll of Wish'}, price:2500, discount:0, img:img(102), desc:{ru:'Исполнить желание',en:'Fulfill a wish'}, stats:st('0.1 кг','Легендарное','Wish') },
  { id:103, cat:'scroll', name:{ru:'Свиток остановки времени',en:'Scroll of Time Stop'}, price:1800, discount:0, img:img(103), desc:{ru:'Остановить время',en:'Stop time'}, stats:st('0.1 кг','Легендарное','Time Stop') },
  { id:104, cat:'scroll', name:{ru:'Свиток массового воскрешения',en:'Scroll of Mass Revivify'}, price:900, discount:0, img:img(104), desc:{ru:'Воскресить всех',en:'Revive all'}, stats:st('0.1 кг','Очень редкое','Mass Revive') },
  { id:105, cat:'scroll', name:{ru:'Свиток истинного зрения',en:'Scroll of True Seeing'}, price:300, discount:0, img:img(105), desc:{ru:'Истинное зрение',en:'True sight'}, stats:st('0.1 кг','Редкое','True Sight') },
];

/* ===== ГЕРОИ (6) ===== */
export const heroes = [
  { id:'dark_urge', name:{ru:'Тёмный Соблазн',en:'The Dark Urge'}, img:'/heroes/dark_urge.png',
    bio:{
      ru:'Ты пробуждаешься без памяти о своём прошлом. Но кровь на твоих руках шепчет: ты был рождён для чего-то ужасного. Каждую ночь тебя тянет к насилию — сможешь ли ты противостоять зову Баала или принять его как своё наследие?',
      en:'You awaken with no memory of your past. But blood on your hands whispers: you were born for something terrible. Every night the pull of violence grows — will you resist Bhaal\'s calling or embrace it as your birthright?'
    }},
  { id:'shadowheart', name:{ru:'Шэдоухарт',en:'Shadowheart'}, img:'/heroes/shadowheart.png',
    bio:{
      ru:'Жрица Шар, лишённая памяти и веры. Она несёт тёмную реликвию, не зная её истинной силы. По мере странствий она задаётся вопросом: кому она служит на самом деле — богине Ночи или собственному сердцу?',
      en:'A cleric of Shar stripped of memory and faith. She carries a dark relic unaware of its true power. As she travels she wonders: whom does she truly serve — the goddess of Night, or her own heart?'
    }},
  { id:'astarion', name:{ru:'Астарион',en:'Astarion'}, img:'/heroes/astarion.png',
    bio:{
      ru:'Эльф-вампир, две сотни лет служивший жестокому хозяину как раб и ловец. Внезапно получив свободу от паразита в голове, он видит шанс обрести настоящую власть. Обаятельный и опасный, он ищет способ избавиться от вечной зависимости.',
      en:'A vampire elf who served a cruel master as a slave for two centuries. Freed by the parasite in his head, he sees a chance for real power. Charming and dangerous, he seeks to escape eternal dependency.'
    }},
  { id:'gale', name:{ru:'Гейл из Вотердипа',en:'Gale of Waterdeep'}, img:'/heroes/gale.png',
    bio:{
      ru:'Когда-то — великий волшебник и возлюбленный самой Мистры, богини магии. Теперь в его груди горит невыносимая сфера, требующая поглощения магии. Если Гейл не найдёт способ её обуздать — он уничтожит всё, что любит.',
      en:'Once a great wizard and lover of Mystra herself, goddess of magic. Now an unbearable orb burns in his chest, demanding to consume magic. If Gale cannot master it — he will destroy everything he loves.'
    }},
  { id:'laezel', name:{ru:'Лаэзель',en:"Lae'zel"}, img:'/heroes/laezel.png',
    bio:{
      ru:'Воительница гитьянки, рождённая для служения королеве Влаакит. Её вера в свою расу пошатнулась, когда она узнала правду о личе-королеве. Теперь Лаэзель ищет новый смысл и готова сражаться за свободу своего народа.',
      en:'A githyanki warrior born to serve Queen Vlaakith. Her faith in her race was shaken when she learned the truth about the lich-queen. Now Lae\'zel seeks new purpose and is ready to fight for her people\'s freedom.'
    }},
  { id:'karlach', name:{ru:'Карлах',en:'Karlach'}, img:'/heroes/karlach.png',
    bio:{
      ru:'Тифлинг-варвар, десять лет сражавшаяся в Войне Крови на стороне архидьяволицы Зариэль. Продана в рабство Гортшем, который заменил её сердце адским двигателем. Сбежав из Аверно на наутилоиде, она впервые за долгие годы обрела свободу — но двигатель пылает всё жарче. Карлах ценит каждый миг свободы, ищет мести предателям и готова сгореть, но не сдаться.',
      en:'A tiefling barbarian who fought in the Blood War for ten years under archdevil Zariel. Sold into slavery by Gortash, who replaced her heart with an infernal engine. Escaping Avernus on a nautiloid, she tasted freedom for the first time in years — but the engine burns ever hotter. Karlach savors every moment of freedom, seeks vengeance on those who betrayed her, and would rather burn out than give in.'
    }},
];

export const categories = [
  { id:'all',    ru:'Всё',     en:'All' },
  { id:'potion', ru:'Зелья',   en:'Potions' },
  { id:'weapon', ru:'Оружие',  en:'Weapons' },
  { id:'armor',  ru:'Броня',   en:'Armor' },
  { id:'food',   ru:'Еда',     en:'Food' },
  { id:'scroll', ru:'Свитки',  en:'Scrolls' },
];