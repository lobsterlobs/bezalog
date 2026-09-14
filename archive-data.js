// ============================================================
// БЕЗ ЗАЛОГ — съдържание на Медийна библиотека
// ------------------------------------------------------------
// Този файл е ЕДИНСТВЕНОТО място, което трябва да се редактира,
// за да се добавя/маха съдържание от Медийната библиотека на сайта.
// index.html не се пипа повече — само чете от тук.
//
// 8 СЕКЦИИ (без страница "Всички"):
//   infographic  -> Инфографики
//   visii        -> Визии и текстови послания
//   story        -> Анимирани Stories
//   banner       -> Банери
//   video        -> Видеоклипове с послание
//   explainer    -> Анимационно видео
//   podcast      -> Подкаст
//   qna          -> Q&A сесии
//
// Как да добавиш нещо готово:
// 1. Копирай един ред от ARCHIVE_ITEMS отдолу
// 2. Смени cat/title/desc/thumb/type/typeColor/proof
// ============================================================

const ARCHIVE_ITEMS = [
  // ---------------- ВИДЕОКЛИПОВЕ С ПОСЛАНИЕ ----------------

{
    cat: 'video',
    title: 'Казиното и майка',
    desc: 'Документален стил — синът и хазартната зависимост през очите на майка му',
    thumb: 'images/archive/web/video-kazinoto-poster.jpg',
    video: 'images/archive/video/kazinoto-i-mayka.mp4',
    type: 'Видеоклип с послание',
    typeColor: '#E53E3E'
  },
  {
    cat: 'video',
    title: 'Цената на залога',
    desc: 'Обяснително видео — защо мозъкът не може да спре: допамин, near-miss ефект и биологията на хазартната зависимост',
    thumb: 'images/archive/web/video-tsenata-poster.jpg',
    video: 'images/archive/video/tsenata-na-zaloga.mp4',
    type: 'Видеоклип с послание',
    typeColor: '#E53E3E'
  },

  // ---------------- АНИМАЦИОННО ВИДЕО ----------------
  {
    cat: 'explainer',
    title: 'Как хазартът завладя света',
    desc: 'Анимационно explainer видео — 5000-годишна история на хазарта, от Месопотамия до джоба ти',
    thumb: 'images/archive/web/visii-story-istoria-poster.jpg',
    video: 'images/archive/video/story-istoria.mp4',
    type: 'Анимационно видео',
    typeColor: '#E53E3E'
  },

  // ---------------- ИНФОГРАФИКИ ----------------
  {
    cat: 'infographic',
    title: 'Хазартът пише историята',
    desc: 'Най-странните и драматични истории от хазарта',
    thumb: 'images/archive/web/infographic-istorii.jpg',
    full: 'images/archive/social/infographic-istorii.jpg',
    type: 'Инфографика',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'infographic',
    title: 'Хазартът пренарежда мозъка',
    desc: 'Невробиологията на хазартната зависимост — допаминов цикъл',
    thumb: 'images/archive/web/infographic-mozak.jpg',
    full: 'images/archive/social/infographic-mozak.jpg',
    type: 'Инфографика',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'infographic',
    title: 'Хазартът не засяга само теб',
    desc: 'Ефектът върху семейството и близките',
    thumb: 'images/archive/web/infographic-semeistvo.jpg',
    full: 'images/archive/social/infographic-semeistvo.jpg',
    type: 'Инфографика',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'infographic',
    title: 'bezalog.bg — платформата',
    desc: '4-те модула на платформата',
    thumb: 'images/archive/web/infographic-platforma.jpg',
    full: 'images/archive/social/infographic-platforma.jpg',
    type: 'Инфографика',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'infographic',
    title: 'Хазартът прогресира',
    desc: '5-те етапа на хазартната зависимост',
    thumb: 'images/archive/web/infographic-progresira.jpg',
    full: 'images/archive/social/infographic-progresira.jpg',
    type: 'Инфографика',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'infographic',
    title: 'Хазартът расте',
    desc: 'България в числа — НАП и ESPAD 2024',
    thumb: 'images/archive/web/infographic-statistika.jpg',
    full: 'images/archive/social/infographic-statistika.jpg',
    type: 'Инфографика',
    typeColor: 'var(--teal)'
  },

  // ---------------- ВИЗИИ И ТЕКСТОВИ ПОСЛАНИЯ ----------------
  {
    cat: 'visii',
    title: '7 години',
    desc: 'Средно чакане преди зависимият да потърси помощ',
    thumb: 'images/archive/web/visii-stat-7godini.jpg',
    full: 'images/archive/social/visii-stat-7godini.jpg',
    type: 'Визия — статистика',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: '74%',
    desc: 'Залагат само онлайн — телефонът е новото казино',
    thumb: 'images/archive/web/visii-stat-74pct.jpg',
    full: 'images/archive/social/visii-stat-74pct.jpg',
    type: 'Визия — статистика',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: '26× Монте Карло, 1913',
    desc: 'Рулетката излезе черно 26 пъти подред',
    thumb: 'images/archive/web/visii-stat-montecarlo.jpg',
    full: 'images/archive/social/visii-stat-montecarlo.jpg',
    type: 'Визия — статистика',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: '$204M — Лас Вегас, 2007',
    desc: 'Продаде фирмата си, загуби всичко в едно казино',
    thumb: 'images/archive/web/visii-stat-watanabe.jpg',
    full: 'images/archive/social/visii-stat-watanabe.jpg',
    type: 'Визия — статистика',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: '6 часа — Мелбърн, 2006',
    desc: 'Загуби $105 милиона за 6 часа, съди казиното — и загуби',
    thumb: 'images/archive/web/visii-stat-kakavas.jpg',
    full: 'images/archive/social/visii-stat-kakavas.jpg',
    type: 'Визия — статистика',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: '42 939',
    desc: 'Души в България в регистъра на хазартно уязвими лица',
    thumb: 'images/archive/web/visii-stat-42939.jpg',
    full: 'images/archive/social/visii-stat-42939.jpg',
    type: 'Визия — статистика',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: '1 от 5',
    desc: 'Момчета на 15–16 години залагат онлайн',
    thumb: 'images/archive/web/visii-stat-1ot5.jpg',
    full: 'images/archive/social/visii-stat-1ot5.jpg',
    type: 'Визия — статистика',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: '60 000+',
    desc: 'Млади хора ще достигне кампанията БЕЗ ЗАЛОГ',
    thumb: 'images/archive/web/visii-stat-60000.jpg',
    full: 'images/archive/social/visii-stat-60000.jpg',
    type: 'Визия — статистика',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: '0% шанс',
    desc: 'Да печелиш постоянно от казиното — математиката винаги е в негова полза',
    thumb: 'images/archive/web/visii-stat-0shans.jpg',
    full: 'images/archive/social/visii-stat-0shans.jpg',
    type: 'Визия — статистика',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: '1990',
    desc: 'Годината, в която СЗО признава хазартната зависимост за болест',
    thumb: 'images/archive/web/visii-stat-1990.jpg',
    full: 'images/archive/social/visii-stat-1990.jpg',
    type: 'Визия — статистика',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: 'Хазартната зависимост е заболяване',
    desc: 'Тя засяга психичното здраве, отношенията и финансите',
    thumb: 'images/archive/web/visii-photo-zabolyavane.jpg',
    full: 'images/archive/social/visii-photo-zabolyavane.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Всеки залог е заем от утрешния ти ден',
    desc: 'Парите, които губиш днес, не се връщат',
    thumb: 'images/archive/web/visii-photo-zaem.jpg',
    full: 'images/archive/social/visii-photo-zaem.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Когато сметките станат по-важни от играта',
    desc: 'Това е признак, не слабост',
    thumb: 'images/archive/web/visii-photo-smetki.jpg',
    full: 'images/archive/social/visii-photo-smetki.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: '02:47 часа. Кога последно си спал нормално?',
    desc: 'Безсънните нощи са един от първите сигнали',
    thumb: 'images/archive/web/visii-photo-247chasa.jpg',
    full: 'images/archive/social/visii-photo-247chasa.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Всички се радват. Ти изпускаш момента',
    desc: 'Когато залагаш, загубваш момента',
    thumb: 'images/archive/web/visii-photo-momenta.jpg',
    full: 'images/archive/social/visii-photo-momenta.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Пари, които трябва да скриеш',
    desc: 'Тайната е първият сигнал',
    thumb: 'images/archive/web/visii-photo-pari.jpg',
    full: 'images/archive/social/visii-photo-pari.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Семейната вечеря. Без теб',
    desc: 'Хазартът отдалечава. Дори на вечеря',
    thumb: 'images/archive/web/visii-photo-vecherya.jpg',
    full: 'images/archive/social/visii-photo-vecherya.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Мит: Всичко започва с една мисъл',
    desc: 'Факт: "Може би имам проблем."',
    thumb: 'images/archive/web/visii-myth-misal.jpg',
    full: 'images/archive/social/visii-myth-misal.jpg',
    type: 'Визия — мит vs факт',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Мит: "Мога да спра когато искам."',
    desc: 'Факт: Зависимостта е болест, не липса на воля',
    thumb: 'images/archive/web/visii-myth-spra.jpg',
    full: 'images/archive/social/visii-myth-spra.jpg',
    type: 'Визия — мит vs факт',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Мит: "Аз контролирам колко залагам."',
    desc: 'Факт: Мозъкът иска още един залог',
    thumb: 'images/archive/web/visii-myth-kontrol.jpg',
    full: 'images/archive/social/visii-myth-kontrol.jpg',
    type: 'Визия — мит vs факт',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Мит: "Аз разбирам от футбол."',
    desc: 'Факт: Хазартът не е игра на умения',
    thumb: 'images/archive/web/visii-myth-futbol.jpg',
    full: 'images/archive/social/visii-myth-futbol.jpg',
    type: 'Визия — мит vs факт',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Мит: "Онлайн е по-безопасно."',
    desc: 'Факт: Хазартът е хазарт — онлайн или не',
    thumb: 'images/archive/web/visii-myth-onlayn.jpg',
    full: 'images/archive/social/visii-myth-onlayn.jpg',
    type: 'Визия — мит vs факт',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Мит: "След загуба идва голяма печалба."',
    desc: 'Факт: Математиката не се интересува от загубите ти',
    thumb: 'images/archive/web/visii-myth-zaguba.jpg',
    full: 'images/archive/social/visii-myth-zaguba.jpg',
    type: 'Визия — мит vs факт',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Картата е отказана. Сметката е празна',
    desc: 'Залозите изпразниха това, което трябваше да остане за теб',
    thumb: 'images/archive/web/visii-photo-kasa.jpg',
    full: 'images/archive/social/visii-photo-kasa.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Всеки заем отдалечава повече',
    desc: 'Хазартът коства повече от пари — коства доверие',
    thumb: 'images/archive/web/visii-photo-zaem2.jpg',
    full: 'images/archive/social/visii-photo-zaem2.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Всички са вътре. Ти си в тъмния коридор',
    desc: 'Хазартът те отдалечава от собствения ти живот',
    thumb: 'images/archive/web/visii-photo-rojdenden.jpg',
    full: 'images/archive/social/visii-photo-rojdenden.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Влезе с надежда. Излиза съсипан',
    desc: 'Хазартът винаги ти взима повече, отколкото дава',
    thumb: 'images/archive/web/visii-photo-izlizane.jpg',
    full: 'images/archive/social/visii-photo-izlizane.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Говори с някого',
    desc: 'Линията работи. Ти трябва само да се обадиш',
    thumb: 'images/archive/web/visii-photo-govori.jpg',
    full: 'images/archive/social/visii-photo-govori.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Остави лошото зад себе си',
    desc: 'Помощта съществува. Усмивката се връща',
    thumb: 'images/archive/web/visii-photo-ostavi.jpg',
    full: 'images/archive/social/visii-photo-ostavi.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },
  {
    cat: 'visii',
    title: 'Усещаш ли се различен?',
    desc: 'Хазартът те отдалечава — дори когато си сред хората',
    thumb: 'images/archive/web/visii-photo-razlichen.jpg',
    full: 'images/archive/social/visii-photo-razlichen.jpg',
    type: 'Визия — снимка+текст',
    typeColor: '#E53E3E'
  },

  // ---------------- АНИМИРАНИ STORIES ----------------
  {
    cat: 'story',
    title: 'Илюзията за голямата печалба',
    desc: 'Анимирано Story — near-miss ефектът и защо мозъкът иска още веднъж',
    thumb: 'images/archive/web/visii-story-iliuzia-poster.jpg',
    video: 'images/archive/video/story-iliuzia.mp4',
    type: 'Story',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'story',
    title: 'Само още веднъж',
    desc: 'Анимирано Story — допаминовият цикъл в действие',
    thumb: 'images/archive/web/visii-story-samo-poster.jpg',
    video: 'images/archive/video/story-samo.mp4',
    type: 'Story',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'story',
    title: 'Телефонът като казино',
    desc: 'Анимирано Story — телефонът винаги в джоба ти',
    thumb: 'images/archive/web/visii-story-telefon-poster.jpg',
    video: 'images/archive/video/story-telefon.mp4',
    type: 'Story',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'story',
    title: 'Финансов срив',
    desc: 'Анимирано Story — всеки залог е дълг от утре',
    thumb: 'images/archive/web/visii-story-finsriv-poster.jpg',
    video: 'images/archive/video/story-finsriv.mp4',
    type: 'Story',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'story',
    title: 'Започва като искра',
    desc: 'Анимирано Story — как малкото прераства в нещо неконтролируемо',
    thumb: 'images/archive/web/visii-story-iskra2-poster.jpg',
    video: 'images/archive/video/story-iskra2.mp4',
    type: 'Story',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'story',
    title: 'Толкова близо',
    desc: 'Анимирано Story — near-miss ефектът и защо мозъкът иска още веднъж',
    thumb: 'images/archive/web/visii-story-nearmiss-poster.jpg',
    video: 'images/archive/video/story-nearmiss.mp4',
    type: 'Story',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'story',
    title: 'Изглежда безопасно',
    desc: 'Анимирано Story — митът, че онлайн залагането е по-безопасно',
    thumb: 'images/archive/web/visii-story-phone-poster.jpg',
    video: 'images/archive/video/story-phone.mp4',
    type: 'Story',
    typeColor: 'var(--teal)'
  }
,
  {
    cat: 'story',
    title: 'Скрит дълг',
    desc: 'Жена сама с сметките на кухненската маса през нощта',
    thumb: 'images/archive/web/story-womenvsfact-poster.jpg',
    video: 'images/archive/video/womenVSfact.mov',
    type: 'Story',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'story',
    title: 'Празен портфейл',
    desc: 'Мъж сам на банкомат навън през нощта',
    thumb: 'images/archive/web/story-nomoney-poster.jpg',
    video: 'images/archive/video/Nomoney.mp4',
    type: 'Story',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'story',
    title: '2:47 часа',
    desc: 'Кога последно спа нормално?',
    thumb: 'images/archive/web/story-247-poster.jpg',
    video: 'images/archive/video/247.mp4',
    type: 'Story',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'story',
    title: 'Митове за хазарта',
    desc: 'Мит vs факт — най-честите заблуди за хазартната зависимост',
    thumb: 'images/archive/web/story-mvsf-poster.jpg',
    video: 'images/archive/video/mVSf.MOV',
    type: 'Story',
    typeColor: 'var(--teal)'
  },
{
    cat: 'banner',
    title: 'Instagram — лого БЕЗ ЗАЛОГ',
    desc: 'Платено рекламно разположение в Instagram, 15-17.07.2026 г. <a href="https://www.facebook.com/ads/library/?id=1458153403024937" target="_blank" rel="noopener">Виж в Meta Библиотека с реклами</a>',
    thumb: 'images/archive/web/banner-meta-01.jpg',
    type: 'Instagram',
    typeColor: '#E4405F'
  },
  {
    cat: 'banner',
    title: 'Facebook — Мит: Аз разбирам от футбол',
    desc: 'Платено рекламно разположение във Facebook, 16-20.07.2026 г. <a href="https://www.facebook.com/ads/library/?id=1275906821117563" target="_blank" rel="noopener">Виж в Meta Библиотека с реклами</a>',
    thumb: 'images/archive/web/banner-meta-02.jpg',
    type: 'Facebook',
    typeColor: '#1877F2'
  },
  {
    cat: 'banner',
    title: 'Meta — Мислиш, че контролираш?',
    desc: 'Платено рекламно разположение във Facebook и Instagram, 16-20.07.2026 г. <a href="https://www.facebook.com/ads/library/?id=2588577144910715" target="_blank" rel="noopener">Виж в Meta Библиотека с реклами</a>',
    thumb: 'images/archive/web/banner-meta-03.jpg',
    type: 'Meta',
    typeColor: '#1877F2'
  },
  {
    cat: 'banner',
    title: 'Meta — Аз контролирам колко залагам',
    desc: 'Платено рекламно разположение във Facebook, Instagram и Messenger, 16-20.07.2026 г. <a href="https://www.facebook.com/ads/library/?id=2798641997202676" target="_blank" rel="noopener">Виж в Meta Библиотека с реклами</a>',
    thumb: 'images/archive/web/banner-meta-04.jpg',
    type: 'Meta',
    typeColor: '#1877F2'
  },
  {
    cat: 'banner',
    title: 'Instagram — 2:47 през нощта',
    desc: 'Платено рекламно разположение в Instagram, 22-23.07.2026 г. <a href="https://www.facebook.com/ads/library/?id=2271308100370164" target="_blank" rel="noopener">Виж в Meta Библиотека с реклами</a>',
    thumb: 'images/archive/web/banner-meta-05.jpg',
    type: 'Instagram',
    typeColor: '#E4405F'
  },
  {
    cat: 'banner',
    title: 'Facebook — 2:47 през нощта',
    desc: 'Платено рекламно разположение във Facebook и Messenger, 22-24.07.2026 г. <a href="https://www.facebook.com/ads/library/?id=4033957123407181" target="_blank" rel="noopener">Виж в Meta Библиотека с реклами</a>',
    thumb: 'images/archive/web/banner-meta-05.jpg',
    type: 'Facebook',
    typeColor: '#1877F2'
  },
  {
    cat: 'banner',
    title: 'Instagram — Сметките не крещят',
    desc: 'Платено рекламно разположение в Instagram, 28.07.2026 г. <a href="https://www.facebook.com/ads/library/?id=1035759132602726" target="_blank" rel="noopener">Виж в Meta Библиотека с реклами</a>',
    thumb: 'images/archive/web/banner-meta-07.jpg',
    type: 'Instagram',
    typeColor: '#E4405F'
  },
  {
    cat: 'banner',
    title: 'Instagram — Мога да спра когато искам',
    desc: 'Платено рекламно разположение в Instagram, 04.08.2026 г. <a href="https://www.facebook.com/ads/library/?id=1586415589517585" target="_blank" rel="noopener">Виж в Meta Библиотека с реклами</a>',
    thumb: 'images/archive/web/banner-meta-08.jpg',
    type: 'Instagram',
    typeColor: '#E4405F'
  },
  {
    cat: 'banner',
    title: 'Meta — Зависимостта не е слабост на характера',
    desc: 'Платено рекламно разположение във Facebook и Instagram, 05.08.2026 г. <a href="https://www.facebook.com/ads/library/?id=1587013642793510" target="_blank" rel="noopener">Виж в Meta Библиотека с реклами</a>',
    thumb: 'images/archive/web/banner-meta-09.jpg',
    type: 'Meta',
    typeColor: '#1877F2'
  },
  {
    cat: 'banner',
    title: 'Meta — 1 от 5',
    desc: 'Платено рекламно разположение във Facebook и Instagram, 09.08.2026 г. <a href="https://www.facebook.com/ads/library/?id=2044602426196019" target="_blank" rel="noopener">Виж в Meta Библиотека с реклами</a>',
    thumb: 'images/archive/web/banner-meta-10.jpg',
    type: 'Meta',
    typeColor: '#1877F2'
  },
  {
    cat: 'banner',
    title: 'TikTok — 14-18.07.2026',
    desc: 'Платено рекламно разположение в TikTok, 14-18.07.2026 г. <a href="https://library.tiktok.com/ads?region=BG&adv_biz_ids=7662474351198994448" target="_blank" rel="noopener">Виж в TikTok Ad Library</a>',
    thumb: 'images/archive/web/banner-tiktok-01.jpg',
    type: 'TikTok',
    typeColor: '#0E2945'
  },
  {
    cat: 'banner',
    title: 'TikTok — 16-20.07.2026',
    desc: 'Платено рекламно разположение в TikTok, 16-20.07.2026 г. <a href="https://library.tiktok.com/ads?region=BG&adv_biz_ids=7662474351198994448" target="_blank" rel="noopener">Виж в TikTok Ad Library</a>',
    thumb: 'images/archive/web/banner-tiktok-02.jpg',
    type: 'TikTok',
    typeColor: '#0E2945'
  },
  {
    cat: 'banner',
    title: 'TikTok — Чувал ли си за голямата печалба? (21.07.2026)',
    desc: 'Платено рекламно разположение в TikTok, 21.07.2026 г. <a href="https://library.tiktok.com/ads?region=BG&adv_biz_ids=7662474351198994448" target="_blank" rel="noopener">Виж в TikTok Ad Library</a>',
    thumb: 'images/archive/web/banner-tiktok-03.jpg',
    type: 'TikTok',
    typeColor: '#0E2945'
  },
  {
    cat: 'banner',
    title: 'TikTok — Чувал ли си за голямата печалба? (24.07.2026)',
    desc: 'Платено рекламно разположение в TikTok, 24.07.2026 г. <a href="https://library.tiktok.com/ads?region=BG&adv_biz_ids=7662474351198994448" target="_blank" rel="noopener">Виж в TikTok Ad Library</a>',
    thumb: 'images/archive/web/banner-tiktok-03.jpg',
    type: 'TikTok',
    typeColor: '#0E2945'
  },
  {
    cat: 'banner',
    title: 'TikTok — Мит: Аз разбирам от футбол',
    desc: 'Платено рекламно разположение в TikTok, 02-03.08.2026 г. <a href="https://library.tiktok.com/ads?region=BG&adv_biz_ids=7662474351198994448" target="_blank" rel="noopener">Виж в TikTok Ad Library</a>',
    thumb: 'images/archive/web/banner-tiktok-05.jpg',
    type: 'TikTok',
    typeColor: '#0E2945'
  },
  {
    cat: 'banner',
    title: 'TikTok — Чувал ли си за голямата печалба? (05.08.2026)',
    desc: 'Платено рекламно разположение в TikTok, 05.08.2026 г. <a href="https://library.tiktok.com/ads?region=BG&adv_biz_ids=7662474351198994448" target="_blank" rel="noopener">Виж в TikTok Ad Library</a>',
    thumb: 'images/archive/web/banner-tiktok-03.jpg',
    type: 'TikTok',
    typeColor: '#0E2945'
  },
  {
    cat: 'banner',
    title: 'YouTube — видеореклама',
    desc: 'Платено видео рекламно разположение в YouTube, 19-31.07.2026 г. <a href="https://adstransparency.google.com/advertiser/AR17964035044364255233/creative/CR18018561475253108737?region=BG" target="_blank" rel="noopener">Виж в Google Ads Transparency Center</a>',
    thumb: 'images/archive/web/banner-youtube.jpg',
    type: 'YouTube',
    typeColor: '#FF0000'
  },
  {
    cat: 'banner',
    title: 'Google Търсене',
    desc: 'Платено рекламно разположение в Google Търсене по ключови думи за хазартна зависимост, 07-14.08.2026 г. <a href="https://adstransparency.google.com/advertiser/AR17964035044364255233?region=BG" target="_blank" rel="noopener">Виж в Google Ads Transparency Center</a>',
    thumb: 'images/archive/web/banner-google-search.jpg',
    type: 'Google Ads',
    typeColor: '#4285F4'
  },

  {
    cat: 'qna',
    title: 'Какво мислят младите за хазарта?',
    desc: 'Улична Q&A сесия — млади хора отговарят на въпроси за залагането и споделят своята гледна точка',
    thumb: 'images/archive/web/qna-mladite-poster.jpg',
    video: 'images/archive/video/qna-mladite.mp4',
    type: 'Q&A сесия',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'qna',
    title: 'Задай въпрос към психолог',
    desc: 'Изпрати своя въпрос анонимно на pitam@bezalog.bg — отговорите ще бъдат включени в подкаста',
    thumb: 'images/archive/web/qna-psiholog-poster.jpg',
    video: 'images/archive/video/qna-psiholog.mp4',
    type: 'Q&A сесия',
    typeColor: 'var(--teal)'
  },
  {
    cat: 'visii',
    title: 'Резултатът от теста достатъчен ли е за диагноза?',
    desc: 'Q&A визия — резултатът е ориентир, не медицинска диагноза',
    thumb: 'images/archive/social/qa_11-test-rezultat.png',
    full: 'images/archive/social/qa_11-test-rezultat.png',
    type: 'Визия — Q&A',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: 'Хазартната зависимост наследствена ли е?',
    desc: 'Q&A визия — наследствена предразположеност и влияние на средата',
    thumb: 'images/archive/social/qa_12-nasledstveno.png',
    full: 'images/archive/social/qa_12-nasledstveno.png',
    type: 'Визия — Q&A',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: 'Как да разбера дали партньорът ми крие хазарт?',
    desc: 'Q&A визия — признаци, по които близък човек може да разпознае проблем',
    thumb: 'images/archive/social/qa_13-partnyor-krie.png',
    full: 'images/archive/social/qa_13-partnyor-krie.png',
    type: 'Визия — Q&A',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: 'Мога ли да блокирам хазартните приложения?',
    desc: 'Q&A визия — технически бариери и доброволно ограничаване на достъпа',
    thumb: 'images/archive/social/qa_14-prilozhenia-blokirane.png',
    full: 'images/archive/social/qa_14-prilozhenia-blokirane.png',
    type: 'Визия — Q&A',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: 'Малки суми всеки ден опасни ли са?',
    desc: 'Q&A визия — честотата на залагане е по-важна от размера на отделния залог',
    thumb: 'images/archive/social/qa_15-malki-sumi.png',
    full: 'images/archive/social/qa_15-malki-sumi.png',
    type: 'Визия — Q&A',
    typeColor: 'var(--yellow)'
  },
  {
    cat: 'visii',
    title: 'Как да кажа на близките си, че искам да спра?',
    desc: 'Q&A визия — как да започнеш разговор и да потърсиш подкрепа',
    thumb: 'images/archive/social/qa_16-kak-da-spra.png',
    full: 'images/archive/social/qa_16-kak-da-spra.png',
    type: 'Визия — Q&A',
    typeColor: 'var(--yellow)'
  },

  // ---------------- ПОДКАСТ ----------------
  {
    cat: 'podcast',
    title: 'Епизод 1: Защо тази програма съществува',
    desc: 'Ивайло и Диана обясняват какво е „БЕЗ ЗАЛОГ“, кой го финансира и защо хазартната зависимост е болест на мозъка, а не на характера.',
    thumb: 'images/archive/podcast/podcast-ep1.png',
    type: 'Подкаст · Епизод 1',
    typeColor: 'var(--teal)',
    platforms: [
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=Ueoz63EtT1Q' },
      { label: 'Spotify', url: 'https://open.spotify.com/show/0KPQstEAHNmqV0CaVSw7lt' },
      { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/us/podcast/%D0%B1%D0%B5%D0%B7-%D0%B7%D0%B0%D0%BB%D0%BE%D0%B3/id6811751015' }
    ]
  },
  {
    cat: 'podcast',
    title: 'Епизод 2: Шестте изречения, които си казваме',
    desc: 'За най-честите мисли и оправдания, с които младите хора подхранват хазартната зависимост, и за разликата между мит и факт.',
    thumb: 'images/archive/podcast/podcast-ep2.png',
    type: 'Подкаст · Епизод 2 · 20 мин.',
    typeColor: 'var(--teal)',
    platforms: [
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=UguXDaRigJ0' },
      { label: 'Spotify', url: 'https://open.spotify.com/show/0KPQstEAHNmqV0CaVSw7lt' },
      { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/us/podcast/%D0%B1%D0%B5%D0%B7-%D0%B7%D0%B0%D0%BB%D0%BE%D0%B3/id6811751015' }
    ]
  },
  {
    cat: 'podcast',
    title: 'Епизод 3: Казиното в джоба',
    desc: 'Как телефонът направи хазарта постоянно достъпен, защо младите хора са уязвими и как родителите да разпознаят тревожните признаци.',
    thumb: 'images/archive/podcast/podcast-ep3.png',
    type: 'Подкаст · Епизод 3 · 16 мин.',
    typeColor: 'var(--teal)',
    platforms: [
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=03_CTgL_oGA' },
      { label: 'Spotify', url: 'https://open.spotify.com/show/0KPQstEAHNmqV0CaVSw7lt' },
      { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/us/podcast/%D0%B1%D0%B5%D0%B7-%D0%B7%D0%B0%D0%BB%D0%BE%D0%B3/id6811751015' }
    ]
  },

  // ⬇ добавяй нови готови материали тук, по същия образец
];

// Placeholder карти за категории, които още не са напълно готови.
// Без бройки в текста — само име на секцията + бележка.
const ARCHIVE_PLACEHOLDERS = [];
