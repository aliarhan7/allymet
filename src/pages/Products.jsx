import React from 'react';

const categories = [
  { id: 1, title: "YALITIMLI KAPI & PENCERE SİSTEMLERİ", image: "/path/to/image1.jpg" },
  { id: 2, title: "YALITIMSIZ KAPI & PENCERE SİSTEMLERİ", image: "/path/to/image2.jpg" },
  { id: 3, title: "YALITIMLI SÜRME SİSTEMLER", image:"/path/to/image3.jpg"},
  { id: 4, title: "YALITIMSIZ SÜRME SİSTEMLER", image:"/path/to/image4.jpg"},
  { id: 5, title: "GİYDİRME CEPHE SİSTEMİ", image:"/path/to/image5.jpg"},
  { id: 6, title: "İÇ MEKAN SİSTEMLERİ", image:"/path/to/image6.jpg"},
  { id: 7, title: "KATLANIR KAPI SİSTEMLERİ", image:"/path/to/image7.jpg"},
  { id: 8, title: "HEMYÜZ KAPI SİSTEMİ", image:"/path/to/image8.jpg"}
  // Asistal sitesindeki diğer kategorileri buraya ekleyin
];

const Product = () => {
  return (
    <div>
      <div className='w-full h-55 bg-gradient-to-r from-first to-red-600  flex items-center'>
        <h1 className="text-3xl font-bold mb-10 ml-6 text-white">Products</h1>
      </div>
      <div className='text-center mt-15'>
        <h1 className='text-red-600 text-xl'>Mimari Sistemler</h1>
        <p className='mt-7 text-gray-700'>Sektöründe uzman kadromuzla birlikte estetik, sağlamlık, uygulanabilirlik ve tüm mimari ihtiyaçları karşılayabilecek şekilde tasarlanan sistemlerimizdir.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-1 hover:cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;