import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [flashSale, setFlashSale] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const mensResponse = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
        const womensResponse = await axios.get("https://fakestoreapi.com/products/category/women's clothing");

        const allProducts = [...mensResponse.data, ...womensResponse.data];

        // Optionally shuffle or sort
        setFlashSale(allProducts.slice(0, 4));
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products.');

        // Fallback to another category
        try {
          const fallback = await axios.get('https://fakestoreapi.com/products/category/electronics');
          setFlashSale(fallback.data.slice(0, 4));
        } catch (fallbackErr) {
          console.error('Fallback fetch failed:', fallbackErr);
          setError('Failed to load fallback products.');
        }
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Flash Sale</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {flashSale.length > 0 ? (
          flashSale.map((product) => {
            const bgColor = product.category === "men's clothing" ? 'bg-teal-400' : 'bg-pink-400';

            return (
              <div
                key={product.id}
                className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 bg-white h-[360px] flex flex-col justify-between"
              >
                {/* Title */}
                <div className="text-center px-3 pt-4">
                  <h3 className="text-sm font-semibold text-black leading-snug">
                    {product.title.length > 28
                      ? product.title.slice(0, 28) + '...'
                      : product.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="flex justify-center items-center h-36 px-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain"
                  />
                </div>

                {/* Price + Description */}
                <div className={`${bgColor} text-white p-4 text-center`}>
                  <p className="text-md font-bold text-blue-900 mb-2">Rs {product.price}</p>
                  <p className="text-xs text-black">
                    {product.description.slice(0, 90)}...
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-700">No products available</p>
        )}
      </div>

      {/* Category Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-16 max-w-lg mx-auto">
        <Link
          to="/category/men's clothing"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 rounded-xl text-center shadow-md transition"
        >
          Men’s Clothing
        </Link>
        <Link
          to="/category/women's clothing"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 rounded-xl text-center shadow-md transition"
        >
          Women’s Clothing
        </Link>
      </div>
    </div>
  );
};

export default Home;
