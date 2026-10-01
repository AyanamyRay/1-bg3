import { createContext, useContext, useEffect, useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { fetchProducts, fetchProduct, fetchHeroes, placeOrder } from './api';
import { categories } from './products';
import './App.css';

/* ---------- Словарь ---------- */
const dict = {
  ru: { home:'Главная', shop:'Товары', about:'О нас', heroes:'О персонажах', cart:'Корзина',
    search:'Поиск...', sort:'Сортировка', byName:'По имени', priceAsc:'Дешевле', priceDesc:'Дороже',
    addCart:'В корзину', buy:'Оформить заказ', total:'Итого', empty:'Корзина пуста',
    description:'Описание', stats:'Характеристики', back:'Назад', loading:'Загрузка...',
    orderPlaced:'Заказ оформлен! Спасибо, искатель приключений.',
    aboutTitle:'О нашем магазине', heroesTitle:"Герои Baldur's Gate 3", ordering:'Оформляем заказ...' },
  en: { home:'Home', shop:'Shop', about:'About', heroes:'Heroes', cart:'Cart',
    search:'Search...', sort:'Sort', byName:'By name', priceAsc:'Cheapest', priceDesc:'Priciest',
    addCart:'Add to cart', buy:'Checkout', total:'Total', empty:'Cart is empty',
    description:'Description', stats:'Stats', back:'Back', loading:'Loading...',
    orderPlaced:'Order placed! Thank you, adventurer.',
    aboutTitle:'About our shop', heroesTitle:"Heroes of Baldur's Gate 3", ordering:'Placing order...' },
};

/* ---------- Контекст ---------- */
const AppContext = createContext();
const useApp = () => useContext(AppContext);

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('ru');
  const [cart, setCart] = useState([]);

  useEffect(() => { document.body.className = theme; }, [theme]);

  const addToCart = (p) => setCart(c => {
    const ex = c.find(i => i.id === p.id);
    return ex ? c.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i)
              : [...c, { ...p, qty: 1 }];
  });
  const removeFromCart = (id) => setCart(c => c.filter(i => i.id !== id));
  const t = (k) => dict[lang][k];

  return (
    <AppContext.Provider value={{ theme, setTheme, lang, setLang, cart, addToCart, removeFromCart, t }}>
      <header className="header">
        <Link to="/" className="logo">⚔️ BG3 Shop</Link>
        <nav>
          <Link to="/">{t('home')}</Link>
          <Link to="/shop">{t('shop')}</Link>
          <Link to="/about">{t('about')}</Link>
          <Link to="/heroes">{t('heroes')}</Link>
          <Link to="/cart">{t('cart')} ({cart.reduce((s,i)=>s+i.qty,0)})</Link>
        </nav>
        <div className="controls">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}>
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>
        </div>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2025 BG3 Shop — фанатский магазин по Baldur's Gate 3</p>
        <p>Данные: bg3.wiki | Сделано с ❤️ для искателей приключений</p>
      </footer>
    </AppContext.Provider>
  );
}

/* ---------- Главная ---------- */
function Home() {
  const { t, lang } = useApp();
  return (
    <section className="hero">
      <h1>{lang === 'ru' ? 'Лавка приключений Фаэруна' : "Adventurer's Shop of Faerûn"}</h1>
      <p>{lang === 'ru'
        ? 'Зелья, клинки и свитки — всё для победы над Абсолютом.'
        : 'Potions, blades and scrolls — all to defeat the Absolute.'}</p>
      <Link to="/shop" className="btn">{t('shop')}</Link>
    </section>
  );
}

/* ---------- Магазин ---------- */
function Shop() {
  const { t, lang } = useApp();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('name');
  const [cat, setCat] = useState('all');

  useEffect(() => {
    fetchProducts().then(data => { setList(data); setLoading(false); });
  }, []);

  let shown = list.filter(p => p.name[lang].toLowerCase().includes(q.toLowerCase()));
  if (cat !== 'all') shown = shown.filter(p => p.cat === cat);
  shown = [...shown].sort((a, b) => {
    if (sort === 'priceAsc')  return a.price - b.price;
    if (sort === 'priceDesc') return b.price - a.price;
    return a.name[lang].localeCompare(b.name[lang]);
  });

  if (loading) return <div className="loader">{t('loading')}</div>;

  return (
    <section className="shop">
      <h2>{t('shop')} ({shown.length})</h2>
      <div className="filters">
        <input placeholder={t('search')} value={q} onChange={e => setQ(e.target.value)} />
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="name">{t('byName')}</option>
          <option value="priceAsc">{t('priceAsc')}</option>
          <option value="priceDesc">{t('priceDesc')}</option>
        </select>
      </div>
      <div className="cats">
        {categories.map(c => (
          <button key={c.id} className={cat === c.id ? 'active' : ''} onClick={() => setCat(c.id)}>
            {c[lang]}
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map(p => <Card key={p.id} p={p} />)}
      </div>
    </section>
  );
}

/* ---------- Карточка ---------- */
function Card({ p }) {
  const { t, lang, addToCart } = useApp();
  const final = p.discount ? Math.round(p.price * (1 - p.discount / 100)) : p.price;
  return (
    <div className="card">
      <Link to={`/product/${p.id}`}>
        <img src={p.img} alt={p.name[lang]} />
        <h3>{p.name[lang]}</h3>
      </Link>
      {p.discount > 0 && <span className="badge">-{p.discount}%</span>}
      <p className="price">
        {p.discount > 0 && <s>{p.price}</s>} <b>{final}</b> зол.
      </p>
      <button className="btn" onClick={() => addToCart(p)}>{t('addCart')}</button>
    </div>
  );
}

/* ---------- Страница товара ---------- */
function ProductPage() {
  const { id } = useParams();
  const { t, lang, addToCart } = useApp();
  const [p, setP] = useState(null);

  useEffect(() => { fetchProduct(id).then(setP); }, [id]);

  if (!p) return <div className="loader">{t('loading')}</div>;
  const final = p.discount ? Math.round(p.price * (1 - p.discount / 100)) : p.price;
  return (
    <section className="product-page">
      <Link to="/shop" className="back">← {t('back')}</Link>
      <div className="product-flex">
        <img src={p.img} alt={p.name[lang]} />
        <div>
          <h1>{p.name[lang]}</h1>
          <p><b>{t('description')}:</b> {p.desc[lang]}</p>
          <p className="price">
            {p.discount > 0 && <s>{p.price}</s>} <b>{final}</b> зол.
          </p>
          <h3>{t('stats')}</h3>
          <ul>{Object.entries(p.stats).map(([k, v]) => <li key={k}>{k}: {v}</li>)}</ul>
          <button className="btn" onClick={() => addToCart(p)}>{t('addCart')}</button>
        </div>
      </div>
    </section>
  );
}

/* ---------- О нас ---------- */
function About() {
  const { t, lang } = useApp();
  return (
    <section className="page">
      <h1>{t('aboutTitle')}</h1>
      <p>{lang === 'ru'
        ? "Мы — небольшая гильдия торговцев из Нижнего города Балдурс-Гейта. Продаём снаряжение искателям приключений с самого открытия Врат Балдура. Все товары проверены в бою с гоблинами, гитьянки и самим Абсолютом."
        : "We are a small merchant guild from the Lower City of Baldur's Gate. We sell gear to adventurers since the city gates first opened. All goods are battle-tested against goblins, githyanki and the Absolute itself."}</p>
      <p>{lang === 'ru'
        ? 'Информация о товарах основана на открытой вики bg3.wiki.'
        : 'Product info is based on the open bg3.wiki.'}</p>
    </section>
  );
}

/* ---------- О персонажах ---------- */
function Heroes() {
  const { t, lang } = useApp();
  const [heroes, setHeroes] = useState([]);

  useEffect(() => { fetchHeroes().then(setHeroes); }, []);

  if (!heroes.length) return <div className="loader">{t('loading')}</div>;

  return (
    <section className="page">
      <h1>{t('heroesTitle')}</h1>
      <div className="heroes-grid">
        {heroes.map(h => (
          <article key={h.id} className="hero-card">
            <img src={h.img} alt={h.name[lang]} className="hero-img" />
            <div>
              <h2>{h.name[lang]}</h2>
              <p>{h.bio[lang]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Корзина ---------- */
function Cart() {
  const { cart, removeFromCart, t, lang } = useApp();
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');

  const total = cart.reduce((s, i) => {
    const final = i.discount ? Math.round(i.price * (1 - i.discount / 100)) : i.price;
    return s + final * i.qty;
  }, 0);

  const checkout = async () => {
    setStatus('loading');
    await placeOrder(cart);
    setStatus('done');
    setTimeout(() => navigate('/'), 2500);
  };

  if (status === 'loading') return <div className="loader">{t('ordering')}</div>;
  if (status === 'done')    return <div className="loader">{t('orderPlaced')}</div>;

  return (
    <section className="page">
      <h1>{t('cart')}</h1>
      {cart.length === 0 ? <p>{t('empty')}</p> : (
        <>
          {cart.map(i => {
            const final = i.discount ? Math.round(i.price * (1 - i.discount / 100)) : i.price;
            return (
              <div key={i.id} className="cart-row">
                <img src={i.img} alt="" width="50" />
                <span>{i.name[lang]} × {i.qty}</span>
                <span><b>{final * i.qty}</b> зол.</span>
                <button onClick={() => removeFromCart(i.id)}>✕</button>
              </div>
            );
          })}
          <h2>{t('total')}: {total} зол.</h2>
          <button className="btn" onClick={checkout}>{t('buy')}</button>
        </>
      )}
    </section>
  );
}