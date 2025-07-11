```markdown
# 🛍️ Modern Walk – Fashion E-Commerce Site

A sleek, responsive e-commerce single-page application (SPA) built with **React**, **Tailwind CSS**, and **React Router**, featuring a flash sale and category-based browsing of men's and women's clothing. Powered by [FakeStoreAPI](https://fakestoreapi.com/) for faux product data.

---

## 🚀 Features

- 🌟 **Landing Page** with full-screen hero and category navigation
- 🧥 **Flash Sale** section showcasing featured products
- 👚 **Category Browsing** for Men’s and Women’s Clothing
- 🖼️ **Stylish product cards** with dynamic visuals, pricing, and truncated descriptions
- 📱 Fully **responsive design** (1–4 column grid layouts)
- 🔁 **API-driven updates** using Axios
- 🎨 **Tailwind CSS** for utility-first styling and gradients

---

## 📁 Repository Structure

```modern\_walk\_site/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── Home.jsx
│   │   └── CategoryPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md

````

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Data fetching**: Axios
- **API**: FakeStoreAPI
- **Build tools**: Vite, PostCSS

---

## 🎯 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Dhanushanandan/Do_tech_modern_walk_site.git
cd Do_tech_modern_walk_site
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. View the app

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔍 Sample Code

### Flash Sale – Top 4 products

```js
const all = [/* men’s */, /* women’s */];
setFlashSale(all.slice(0, 4));
```

### Product Card Styling

```jsx
<div className={`${bgColor} text-white p-4 text-center`}>
  <p className="text-md font-bold text-blue-900">Rs {product.price}</p>
  <p className="text-xs text-black">{product.description.slice(0, 90)}…</p>
</div>
```

---

## 🌐 Deployment

Use commands like:

```bash
npm run build
npm run preview
```

Then deploy the `dist/` or `build/` output via Vercel, Netlify, or GitHub Pages.

---

## 📄 API Endpoints

* `/category/men's clothing`
* `/category/women's clothing`
* `/category/electronics` (fallback)

---

## 🧾 Thanks & Acknowledgements

* FakeStoreAPI for demo product data
* Tailwind CSS for styling
* React and Vite for modern frontend tooling

---

```
