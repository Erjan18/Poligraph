import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все услуги' },
    { id: 'cards', name: 'Визитки и карточки' },
    { id: 'print', name: 'Печатная продукция' },
    { id: 'outdoor', name: 'Наружная реклама' },
    { id: 'souvenirs', name: 'Сувенирная продукция' }
  ];

  const services = [
    {
      id: 'business-cards',
      name: 'Визитки',
      category: 'cards',
      description: 'Классические и премиум визитки на различных материалах',
      image: 'https://moscowbrand.ru/wp-content/uploads/2020/03/dvuhstoronnyaya-korporativnaya-vizitka.jpg',
      priceFrom: 50,
      features: ['Различные размеры', 'Ламинация', 'Тиснение', 'Скругленные углы'],
      materials: ['Картон 300г', 'Картон 350г', 'Пластик', 'Металл'],
      turnaround: '1-2 дня'
    },
    {
      id: 'brochures',
      name: 'Буклеты',
      category: 'print',
      description: 'Информационные и рекламные буклеты любого формата',
      image: 'https://static.tildacdn.com/tild6130-3335-4138-b265-666166386565/802625.jpg',
      priceFrom: 100,
      features: ['Двухсторонняя печать', 'Фальцовка', 'Ламинация', 'УФ-лак'],
      materials: ['Мелованная бумага', 'Офсетная бумага', 'Картон'],
      turnaround: '2-3 дня'
    },
    {
      id: 'flyers',
      name: 'Листовки',
      category: 'print',
      description: 'Рекламные листовки для промо-акций и мероприятий',
      image: 'https://printside.ru/uploads/global/listovki-4.jpg',
      priceFrom: 30,
      features: ['Цветная печать', 'Различные форматы', 'Быстрое изготовление'],
      materials: ['Офсетная бумага 80г', 'Мелованная бумага 115г', 'Картон 250г'],
      turnaround: '1 день'
    },
    {
      id: 'banners',
      name: 'Баннеры',
      category: 'outdoor',
      description: 'Наружные баннеры любых размеров для рекламы',
      image: 'https://rpk-rostov.ru/wp-content/uploads/2021/10/fl1455871649-2048x1574-min-1024x787.jpg',
      priceFrom: 500,
      features: ['Люверсы', 'Водостойкость', 'УФ-защита', 'Любые размеры'],
      materials: ['Баннерная ткань', 'Mesh-баннер', 'Самоклеящаяся пленка'],
      turnaround: '1-2 дня'
    },
    {
      id: 'calendars',
      name: 'Календари',
      category: 'souvenirs',
      description: 'Настенные, настольные и карманные календари',
      image: 'https://st29.stpulscen.ru/images/product/256/618/211_original.jpg',
      priceFrom: 200,
      features: ['Пружина', 'Ламинация', 'Перфорация', 'Индивидуальный дизайн'],
      materials: ['Мелованная бумага', 'Картон', 'Офсетная бумага'],
      turnaround: '3-5 дней'
    },
    {
      id: 'postcards',
      name: 'Открытки',
      category: 'cards',
      description: 'Поздравительные и рекламные открытки',
      image: 'https://img.freepik.com/free-vector/modern-business-card-template-with-photo_23-2148339128.jpg?semt=ais_hybrid&w=740',
      priceFrom: 80,
      features: ['Глянцевая/матовая печать', 'Тиснение', 'Скругленные углы'],
      materials: ['Картон 300г', 'Картон 350г', 'Дизайнерский картон'],
      turnaround: '1-2 дня'
    },
    {
      id: 'booklets',
      name: 'Каталоги',
      category: 'print',
      description: 'Каталоги продукции и услуг с переплетом',
      image: 'https://imakofset.kg/wp-content/uploads/2021/04/katalogi.jpg',
      priceFrom: 300,
      features: ['Скрепка', 'Термоклей', 'Ламинация обложки', 'Любое количество страниц'],
      materials: ['Мелованная бумага', 'Офсетная бумага', 'Картон для обложки'],
      turnaround: '3-5 дней'
    },
    {
      id: 'stickers',
      name: 'Наклейки',
      category: 'souvenirs',
      description: 'Рекламные и декоративные наклейки',
      image: 'https://basket-10.wbbasket.ru/vol1357/part135795/135795670/images/big/1.webp',
      priceFrom: 25,
      features: ['Водостойкие', 'Прозрачные', 'Фигурная резка', 'Голографические'],
      materials: ['Самоклеящаяся пленка', 'Прозрачная пленка', 'Голографическая пленка'],
      turnaround: '1-2 дня'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный спектр полиграфических услуг с гарантией качества и быстрым исполнением
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Поиск услуг..."
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-purple-600">
                  от {service.priceFrom} сом
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Особенности:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Срок: {service.turnaround}</span>
                    <span>{service.materials.length} материалов</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Подробнее
                  </Link>
                  <Link
                    to={`/order/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-1"
                  >
                    <span>Заказать</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">По вашему запросу ничего не найдено</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Не нашли нужную услугу?
          </h2>
          <p className="text-lg mb-6 text-purple-100">
            Свяжитесь с нами для индивидуального решения вашей задачи
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <span>Связаться с нами</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;