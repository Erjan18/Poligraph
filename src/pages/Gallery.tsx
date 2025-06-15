import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Все работы' },
    { id: 'business-cards', name: 'Визитки' },
    { id: 'brochures', name: 'Буклеты' },
    { id: 'banners', name: 'Баннеры' },
    { id: 'flyers', name: 'Листовки' },
    { id: 'calendars', name: 'Календари' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Визитки для IT-компании',
      category: 'business-cards',
      image: 'https://ventumprintshared.s3.eu-central-003.backblazeb2.com/attachments/c-7/s-8/widgets/0e60b55e033410e1faab2a3de576991b879e8410450234fade700e78973ff45f3431402b/id107814-ru.jpg',
      description: 'Современные визитки с минималистичным дизайном'
    },
    {
      id: 2,
      title: 'Рекламный буклет ресторана',
      category: 'brochures',
      image: 'https://vpcloud.b-cdn.net/attachments/c-7/s-8/widgets/4cd427fa678016710281a61cd63d544906ee50cbeef06525d47e1cb0d408584c32cf7069/variants/v-550x550-contain.webp',
      description: 'Яркий буклет с фотографиями блюд'
    },
    {
      id: 3,
      title: 'Баннер для магазина одежды',
      category: 'banners',
      image: 'https://bandesign.ru/wp-content/uploads/2019/08/10_1-2.jpg',
      description: 'Большой баннер для наружной рекламы'
    },
    {
      id: 4,
      title: 'Листовки для акции',
      category: 'flyers',
      image: 'https://cdn-b.printut.com/upload/templates/mockups/2022/10/ac21c548/18/FPEF5LOysR.jpg',
      description: 'Промо-листовки с яркими цветами'
    },
    {
      id: 5,
      title: 'Корпоративный календарь',
      category: 'calendars',
      image: 'https://wedesigngroup.ru/upload/medialibrary/75a/m81cfzlhkd30jkenbftixse2jbddjqt1/altx-soft-redcheck-calendar-bukvi-all-wedesign.jpg',
      description: 'Настенный календарь с фирменным стилем'
    },
    {
      id: 6,
      title: 'Премиум визитки',
      category: 'business-cards',
      image: 'https://dpl-print.ru/upload/medialibrary/550/550c96c336e4c42be364a53f40aa4b53.jpg',
      description: 'Визитки с тиснением и ламинацией'
    },
    {
      id: 7,
      title: 'Каталог продукции',
      category: 'brochures',
      image: 'https://static.tildacdn.com/tild3961-3035-4138-b366-656234366435/2020-08-25_17-36-11.png',
      description: 'Многостраничный каталог с переплетом'
    },
    {
      id: 8,
      title: 'Информационные листовки',
      category: 'flyers',
      image: 'https://moscowbrand.ru/wp-content/uploads/2016/12/informacionnaya-listovka.jpg',
      description: 'Листовки для медицинского центра'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Галерея работ
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Примеры наших лучших работ в области полиграфии
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Поиск работ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">По вашему запросу ничего не найдено</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;