import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../api';
import ProductCard from '../components/ProductCard';

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory(category.replace('-', ' '));
        setProducts(data);
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">{category.replace('-', ' ')} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;