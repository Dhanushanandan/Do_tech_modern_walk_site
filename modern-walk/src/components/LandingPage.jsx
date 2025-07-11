import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 flex flex-col items-center justify-center px-6 py-16 sm:px-8 lg:px-12 overflow-hidden">
      
      {/* Logo */}
      <img
        src="/Logo.png"
        alt="Modern Walk Logo"
        className="w-28 h-28 sm:w-32 sm:h-32 mb-6 rounded-full shadow-lg object-contain"
      />

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-8 drop-shadow-lg text-center leading-tight">
        Welcome to <span className="text-purple-600">Modern Walk</span>
      </h1>

      {/* Category Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
        <Link
          to="/category/men's clothing"
          className="group bg-white border border-green-500 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center text-center hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="text-4xl sm:text-5xl font-bold mb-3">👔</span>
          <span className="text-xl sm:text-2xl font-semibold">Men's Clothing</span>
          <span className="text-sm sm:text-base text-gray-500 group-hover:text-white mt-2">
            Explore shirts, pants & more
          </span>
        </Link>

        <Link
          to="/category/women's clothing"
          className="group bg-white border border-pink-500 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center text-center hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="text-4xl sm:text-5xl font-bold mb-3">👗</span>
          <span className="text-xl sm:text-2xl font-semibold">Women's Clothing</span>
          <span className="text-sm sm:text-base text-gray-500 group-hover:text-white mt-2">
            Find dresses, tops & more
          </span>
        </Link>
      </div>

      {/* Navigation Link */}
      <Link
        to="/home"
        className="mt-12 text-blue-600 hover:underline hover:text-green-800 text-2xl transition font-bold"
      >
        Browse Flash Sale →
      </Link>
    </div>
  );
};

export default LandingPage;
