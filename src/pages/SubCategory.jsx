import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/Categories';

const SubCategoryDetail = () => {
  const { categoryId, subCategoryId } = useParams();
  const category = categories.find((cat) => cat.id === parseInt(categoryId));
  const subCategory = category?.subCategories.find((sub) => sub.id === parseInt(subCategoryId));

  if (!subCategory) {
    return <div>Alt kategori bulunamadı!</div>;
  }

  // Teknik özellikleri render etme fonksiyonu
  const renderTechnicalDetails = (details) => {
    return Object.entries(details).map(([key, value]) => {
      // Eğer değer bir nesne ise (örneğin, INTERNO KAPI için Sistem Pervaz Genişliği)
      if (typeof value === 'object' && value !== null) {
        return (
          <div key={key} className="mt-4">
            <h3 className="text-lg font-medium text-red-700">{key}</h3>
            <table className="mt-2 w-full text-left border-collapse">
              <tbody>
                {Object.entries(value).map(([subKey, subValue]) => (
                  <tr key={subKey} className="border-b">
                    <td className="py-2 font-medium text-gray-600">{subKey}</td>
                    <td className="py-2 text-gray-600">{subValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      // Eğer değer bir string ise (normal özellikler)
      return (
        <tr key={key} className="border-b">
          <td className="py-2 font-medium text-gray-700">{key}</td>
          <td className="py-2 text-gray-600">{value}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="w-full h-55 bg-gradient-to-r from-first to-red-600 flex items-center">
        <h1 className="text-3xl font-bold mb-10 ml-6 text-white">{subCategory.title}</h1>
      </div>
      <div className="container mx-auto mt-10">
        <img src={subCategory.image} alt={subCategory.title} className="w-full h-64 object-cover rounded-lg" />
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Teknik Özellikler</h2>
          <table className="mt-4 w-full text-left border-collapse">
            <tbody>{renderTechnicalDetails(subCategory.technicalDetails)}</tbody>
          </table>
        </div>
        <div className="mt-10 text-center">
          <Link
            to={`/products/${categoryId}`}
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Geri Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryDetail;