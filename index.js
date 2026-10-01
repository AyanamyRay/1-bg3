// Имитация API: задержка + отдача данных

const delay = (ms) => new Promise(r => setTimeout(r, ms));

export async function fetchProducts() {
  await delay(700);
  const { products } = await import('../products.js');
  return products;
}

export async function fetchProduct(id) {
  await delay(400);
  const { products } = await import('../products.js');
  return products.find(p => p.id === Number(id));
}

export async function fetchHeroes() {
  await delay(500);
  const { heroes } = await import('../products.js');
  return heroes;
}

export async function placeOrder(cart) {
  await delay(900);
  const total = cart.reduce((s, i) => {
    const final = i.discount ? Math.round(i.price * (1 - i.discount / 100)) : i.price;
    return s + final * i.qty;
  }, 0);
  return {
    ok: true,
    orderId: 'BG3-' + Math.floor(Math.random() * 90000 + 10000),
    total,
  };
}