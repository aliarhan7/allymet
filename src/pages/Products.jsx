import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/Categories';

const Products = () => {

  const { categoryId } = useParams();

  const selectedCategory = categoryId ? categories.find((cat) => cat.id === parseInt(categoryId)) : null;

  const itemsToRender = selectedCategory ? selectedCategory.subCategories : categories;

  return (
    <div>
      <div className='w-full h-55 bg-gradient-to-r from-first to-red-600  flex items-center'>
        <h1 className="text-3xl font-bold mb-10 ml-6 text-white">Products
          
        </h1>
      </div>
      <div className='text-center mt-15'>
        <h1 className='text-red-600 text-xl'>Mimari Sistemler</h1>
        <p className='mt-7 text-gray-700'>Sektöründe uzman kadromuzla birlikte estetik, sağlamlık, uygulanabilirlik ve tüm mimari ihtiyaçları karşılayabilecek şekilde tasarlanan sistemlerimizdir.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {itemsToRender.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-1 hover:cursor-pointer"
          >
            {selectedCategory ? (
              // Alt kategori gösterimi
              <>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                </div>
              </>
            ) : (
              // Kategori gösterimi
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Geri Dön Butonu */}
      {selectedCategory && (
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Tüm Kategorilere Geri Dön
          </Link>
        </div>
      )}
    </div>
  );
};

export default Products;