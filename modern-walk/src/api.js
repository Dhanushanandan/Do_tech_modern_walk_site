export const getProducts = async (params = {}) => {
  const url = new URL('https://fakestoreapi.in/api/products');
  url.search = new URLSearchParams({
    sort: 'desc',
    ...params
  }).toString();
  const response = await fetch(url);
  return response.json();
};

export const getProductsByCategory = async (category, params = {}) => {
  const url = new URL(`https://fakestoreapi.in/api/products/category?type=${category}`);
  url.search = new URLSearchParams({
    sort: 'desc',
    ...params
  }).toString();
  const response = await fetch(url);
  return response.json();
};