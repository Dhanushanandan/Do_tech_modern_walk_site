import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching category products:', error);
        setError('Failed to load products for this category.');
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 py-8 px-4">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-6">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition"
        >
          ← Back to Homepage
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 capitalize text-gray-800">
        {category}
      </h1>

      {/* Error */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.length > 0 ? (
          products.map((product) => {
            const bgColor = category === "men's clothing" ? 'bg-teal-400' : category === "women's clothing" ? 'bg-pink-400' : 'bg-gray-300';

            return (
              <div
                key={product.id}
                className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 bg-white h-[360px] flex flex-col justify-between"
              >
                {/* Title */}
                <div className="text-center px-3 pt-4">
                  <h3 className="text-sm font-semibold text-black leading-snug">
                    {product.title.length > 28 ? product.title.slice(0, 28) + '...' : product.title}
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

                {/* Price & Description */}
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
          <p className="col-span-full text-center text-gray-700">
            No products available in this category
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
