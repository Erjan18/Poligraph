import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();

  // Данные всех услуг
  const servicesData = {
    'business-cards': {
      id: 'business-cards',
      name: 'Визитки',
      description: 'Профессиональные визитки для бизнеса любой сложности',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceFrom: 50,
      category: 'Визитки и карточки',
      turnaround: '1-2 рабочих дня',
      fullDescription: `
        Визитки — это ваша визитная карточка в деловом мире. Мы печатаем качественные визитки 
        на различных материалах с применением современных технологий печати. Предлагаем как 
        стандартные решения, так и эксклюзивные визитки с дополнительными опциями.
      `,
      sizes: [
        { name: 'Стандарт', size: '90×50 мм', price: 50 },
        { name: 'Евро', size: '85×55 мм', price: 55 },
        { name: 'Американский', size: '89×51 мм', price: 60 },
        { name: 'Квадрат', size: '70×70 мм', price: 65 }
      ],
      materials: [
        { name: 'Картон 300г/м²', description: 'Стандартный вариант', price: 0 },
        { name: 'Картон 350г/м²', description: 'Премиум качество', price: 10 },
        { name: 'Дизайнерский картон', description: 'Эксклюзивный материал', price: 25 },
        { name: 'Пластик', description: 'Водостойкий материал', price: 100 }
      ],
      options: [
        { name: 'Матовая ламинация', price: 15 },
        { name: 'Глянцевая ламинация', price: 15 },
        { name: 'УФ-лак', price: 20 },
        { name: 'Тиснение фольгой', price: 50 },
        { name: 'Скругленные углы', price: 10 },
        { name: 'Перфорация', price: 12 }
      ],
      quantities: [
        { qty: 100, pricePerUnit: 2.5 },
        { qty: 250, pricePerUnit: 2.0 },
        { qty: 500, pricePerUnit: 1.5 },
        { qty: 1000, pricePerUnit: 1.0 },
        { qty: 2000, pricePerUnit: 0.8 }
      ],
      features: [
        'Высокое разрешение печати 1440 dpi',
        'Цифровая и офсетная печать',
        'Полноцветная печать CMYK',
        'Профессиональная дизайн-проверка',
        'Быстрое изготовление',
        'Гарантия качества'
      ],
      gallery: [
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3299/office-supplies-colorful-pens-markers.jpg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    'brochures': {
      id: 'brochures',
      name: 'Буклеты',
      description: 'Информационные и рекламные буклеты любого формата',
      image: 'https://static.tildacdn.com/tild6130-3335-4138-b265-666166386565/802625.jpg',
      priceFrom: 100,
      category: 'Печатная продукция',
      turnaround: '2-3 рабочих дня',
      fullDescription: `
        Буклеты — эффективный инструмент для презентации вашего бизнеса, продуктов или услуг. 
        Мы создаем качественные буклеты различных форматов с профессиональной печатью и 
        послепечатной обработкой. Идеально подходят для выставок, презентаций и рекламных кампаний.
      `,
      sizes: [
        { name: 'A4 (297×210 мм)', size: 'A4', price: 100 },
        { name: 'A5 (210×148 мм)', size: 'A5', price: 80 },
        { name: 'A6 (148×105 мм)', size: 'A6', price: 60 },
        { name: 'Евро (210×99 мм)', size: 'Евро', price: 70 }
      ],
      materials: [
        { name: 'Мелованная бумага 130г/м²', description: 'Стандартный вариант', price: 0 },
        { name: 'Мелованная бумага 170г/м²', description: 'Премиум качество', price: 20 },
        { name: 'Картон 250г/м²', description: 'Плотный материал', price: 40 },
        { name: 'Дизайнерская бумага', description: 'Эксклюзивный материал', price: 80 }
      ],
      options: [
        { name: 'Биговка', price: 25 },
        { name: 'Фальцовка', price: 15 },
        { name: 'Ламинация', price: 30 },
        { name: 'УФ-лак', price: 40 },
        { name: 'Тиснение', price: 100 }
      ],
      quantities: [
        { qty: 100, pricePerUnit: 5.0 },
        { qty: 250, pricePerUnit: 4.0 },
        { qty: 500, pricePerUnit: 3.0 },
        { qty: 1000, pricePerUnit: 2.5 },
        { qty: 2000, pricePerUnit: 2.0 }
      ],
      features: [
        'Полноцветная печать',
        'Различные виды фальцовки',
        'Профессиональная биговка',
        'Ламинация и УФ-лак',
        'Быстрое изготовление',
        'Контроль качества'
      ],
      gallery: [
        'https://static.tildacdn.com/tild6130-3335-4138-b265-666166386565/802625.jpg',
        'https://gcprint.ru/upload/iblock/272/5%20(2).jpg',
        'https://static.tildacdn.com/tild3561-3832-4464-b262-666133623636/802625.jpg'
      ]
    },
    'flyers': {
      id: 'flyers',
      name: 'Листовки',
      description: 'Рекламные листовки для промо-акций и мероприятий',
      image: 'https://printside.ru/uploads/global/listovki-4.jpg',
      priceFrom: 30,
      category: 'Печатная продукция',
      turnaround: '1 рабочий день',
      fullDescription: `
        Листовки — быстрый и эффективный способ донести информацию до вашей аудитории. 
        Мы печатаем яркие и качественные листовки для рекламных акций, мероприятий, 
        анонсов и промо-кампаний. Быстрое изготовление и доступные цены.
      `,
      sizes: [
        { name: 'A4 (297×210 мм)', size: 'A4', price: 30 },
        { name: 'A5 (210×148 мм)', size: 'A5', price: 25 },
        { name: 'A6 (148×105 мм)', size: 'A6', price: 20 },
        { name: 'A7 (105×74 мм)', size: 'A7', price: 15 }
      ],
      materials: [
        { name: 'Офсетная бумага 80г/м²', description: 'Экономичный вариант', price: 0 },
        { name: 'Мелованная бумага 115г/м²', description: 'Стандартный вариант', price: 5 },
        { name: 'Мелованная бумага 130г/м²', description: 'Премиум качество', price: 10 },
        { name: 'Картон 250г/м²', description: 'Плотный материал', price: 20 }
      ],
      options: [
        { name: 'Ламинация', price: 10 },
        { name: 'УФ-лак', price: 15 },
        { name: 'Перфорация', price: 8 },
        { name: 'Скругленные углы', price: 5 }
      ],
      quantities: [
        { qty: 100, pricePerUnit: 1.5 },
        { qty: 250, pricePerUnit: 1.2 },
        { qty: 500, pricePerUnit: 1.0 },
        { qty: 1000, pricePerUnit: 0.8 },
        { qty: 2000, pricePerUnit: 0.6 }
      ],
      features: [
        'Быстрое изготовление',
        'Яркая полноцветная печать',
        'Различные форматы',
        'Доступные цены',
        'Большие тиражи',
        'Экспресс-печать'
      ],
      gallery: [
        'https://www.roliksprint.ru/upload/iblock/20d/listovki-600.png',
        'https://print-style.org/upload/iblock/a8e/a8e97f3086aedf2e8ebfc3793f248af6.jpg',
      ]
    },
    'banners': {
      id: 'banners',
      name: 'Баннеры',
      description: 'Наружные баннеры любых размеров для рекламы',
      image: 'https://rpk-rostov.ru/wp-content/uploads/2021/10/fl1455871649-2048x1574-min-1024x787.jpg',
      priceFrom: 500,
      category: 'Наружная реклама',
      turnaround: '1-2 рабочих дня',
      fullDescription: `
        Баннеры — эффективное решение для наружной рекламы. Мы изготавливаем баннеры любых 
        размеров на качественных материалах с яркой и стойкой печатью. Подходят для 
        размещения на улице, в помещениях, на выставках и мероприятиях.
      `,
      sizes: [
        { name: '1×1 м', size: '1×1 м', price: 500 },
        { name: '2×1 м', size: '2×1 м', price: 800 },
        { name: '3×2 м', size: '3×2 м', price: 1500 },
        { name: 'Индивидуальный размер', size: 'custom', price: 250 }
      ],
      materials: [
        { name: 'Баннерная ткань 440г/м²', description: 'Стандартный материал', price: 0 },
        { name: 'Баннерная ткань 510г/м²', description: 'Усиленный материал', price: 50 },
        { name: 'Mesh-баннер', description: 'Сетчатый материал', price: 30 },
        { name: 'Самоклеящаяся пленка', description: 'Для гладких поверхностей', price: 100 }
      ],
      options: [
        { name: 'Люверсы', price: 100 },
        { name: 'Карманы для трубок', price: 150 },
        { name: 'Усиленные края', price: 80 },
        { name: 'Сварные швы', price: 120 }
      ],
      quantities: [
        { qty: 1, pricePerUnit: 250 },
        { qty: 3, pricePerUnit: 230 },
        { qty: 5, pricePerUnit: 200 },
        { qty: 10, pricePerUnit: 180 },
        { qty: 20, pricePerUnit: 150 }
      ],
      features: [
        'Любые размеры',
        'УФ-стойкая печать',
        'Водостойкие материалы',
        'Люверсы и крепления',
        'Быстрое изготовление',
        'Долговечность'
      ],
      gallery: [
        'https://vizart-ptz.ru/wp-content/uploads/bfi_thumb/shablon-2yao7zwy4lr390ps7agivwu840jt2qww7zmncjd9eyei6gnta.jpg',
        'https://unior-print.ru/wp-content/uploads/2019/03/2287433.jpg',
      ]
    },
    'calendars': {
      id: 'calendars',
      name: 'Календари',
      description: 'Настенные, настольные и карманные календари',
      image: 'https://st29.stpulscen.ru/images/product/256/618/211_original.jpg',
      priceFrom: 200,
      category: 'Сувенирная продукция',
      turnaround: '3-5 рабочих дней',
      fullDescription: `
        Календари — отличный способ напоминать о вашем бизнесе круглый год. Мы изготавливаем 
        настенные, настольные и карманные календари с индивидуальным дизайном. Качественная 
        печать, различные форматы и варианты переплета.
      `,
      sizes: [
        { name: 'Настенный A3', size: 'A3', price: 200 },
        { name: 'Настенный A4', size: 'A4', price: 150 },
        { name: 'Настольный', size: '210×150 мм', price: 120 },
        { name: 'Карманный', size: '70×100 мм', price: 80 }
      ],
      materials: [
        { name: 'Мелованная бумага 170г/м²', description: 'Стандартный вариант', price: 0 },
        { name: 'Мелованная бумага 250г/м²', description: 'Премиум качество', price: 30 },
        { name: 'Картон 300г/м²', description: 'Плотный материал', price: 50 },
        { name: 'Дизайнерская бумага', description: 'Эксклюзивный материал', price: 100 }
      ],
      options: [
        { name: 'Пружина', price: 50 },
        { name: 'Ламинация обложки', price: 40 },
        { name: 'УФ-лак', price: 60 },
        { name: 'Перфорация', price: 20 },
        { name: 'Индивидуальный дизайн', price: 500 }
      ],
      quantities: [
        { qty: 50, pricePerUnit: 8.0 },
        { qty: 100, pricePerUnit: 6.0 },
        { qty: 250, pricePerUnit: 4.5 },
        { qty: 500, pricePerUnit: 3.5 },
        { qty: 1000, pricePerUnit: 2.8 }
      ],
      features: [
        'Индивидуальный дизайн',
        'Различные форматы',
        'Качественная пружина',
        'Ламинированная обложка',
        'Полноцветная печать',
        'Долговечность'
      ],
      gallery: [
        'https://st29.stpulscen.ru/images/product/256/618/211_original.jpg',
        'https://rukodelielux.ru/wp-content/uploads/2023/08/kalendar-.jpg',
      ]
    },
    'postcards': {
      id: 'postcards',
      name: 'Открытки',
      description: 'Поздравительные и рекламные открытки',
      image: 'https://img.freepik.com/free-vector/modern-business-card-template-with-photo_23-2148339128.jpg?semt=ais_hybrid&w=740',
      priceFrom: 80,
      category: 'Визитки и карточки',
      turnaround: '1-2 рабочих дня',
      fullDescription: `
        Открытки — прекрасный способ поздравить клиентов или партнеров с праздниками, 
        а также эффективный инструмент для рекламы. Мы печатаем качественные открытки 
        различных форматов с возможностью дополнительной обработки.
      `,
      sizes: [
        { name: 'A6 (148×105 мм)', size: 'A6', price: 80 },
        { name: 'A5 (210×148 мм)', size: 'A5', price: 100 },
        { name: 'Квадрат 150×150 мм', size: '150×150', price: 90 },
        { name: 'Индивидуальный размер', size: 'custom', price: 85 }
      ],
      materials: [
        { name: 'Картон 300г/м²', description: 'Стандартный вариант', price: 0 },
        { name: 'Картон 350г/м²', description: 'Премиум качество', price: 15 },
        { name: 'Дизайнерский картон', description: 'Эксклюзивный материал', price: 40 },
        { name: 'Картон с тиснением', description: 'Фактурный материал', price: 60 }
      ],
      options: [
        { name: 'Матовая ламинация', price: 20 },
        { name: 'Глянцевая ламинация', price: 20 },
        { name: 'УФ-лак', price: 30 },
        { name: 'Тиснение фольгой', price: 80 },
        { name: 'Скругленные углы', price: 15 },
        { name: 'Конгрев', price: 100 }
      ],
      quantities: [
        { qty: 100, pricePerUnit: 3.0 },
        { qty: 250, pricePerUnit: 2.5 },
        { qty: 500, pricePerUnit: 2.0 },
        { qty: 1000, pricePerUnit: 1.5 },
        { qty: 2000, pricePerUnit: 1.2 }
      ],
      features: [
        'Высокое качество печати',
        'Различные форматы',
        'Премиум материалы',
        'Дополнительная обработка',
        'Быстрое изготовление',
        'Индивидуальный дизайн'
      ],
      gallery: [
        'https://img.freepik.com/free-vector/abstract-business-card-template-with-photo_23-2148359756.jpg',
        'https://img.freepik.com/free-vector/business-card-blue-tones_23-2147586894.jpg',
      ]
    },
    'booklets': {
      id: 'booklets',
      name: 'Каталоги',
      description: 'Каталоги продукции и услуг с переплетом',
      image: 'https://imakofset.kg/wp-content/uploads/2021/04/katalogi.jpg',
      priceFrom: 300,
      category: 'Печатная продукция',
      turnaround: '3-5 рабочих дней',
      fullDescription: `
        Каталоги — профессиональный способ представить ваши товары или услуги. Мы изготавливаем 
        качественные каталоги с различными видами переплета, любым количеством страниц и 
        высококачественной печатью. Идеально для презентации продукции.
      `,
      sizes: [
        { name: 'A4 (297×210 мм)', size: 'A4', price: 300 },
        { name: 'A5 (210×148 мм)', size: 'A5', price: 250 },
        { name: 'Квадрат 210×210 мм', size: '210×210', price: 280 },
        { name: 'Индивидуальный размер', size: 'custom', price: 320 }
      ],
      materials: [
        { name: 'Мелованная бумага 130г/м²', description: 'Стандартный вариант', price: 0 },
        { name: 'Мелованная бумага 170г/м²', description: 'Премиум качество', price: 50 },
        { name: 'Обложка картон 300г/м²', description: 'Плотная обложка', price: 80 },
        { name: 'Дизайнерская бумага', description: 'Эксклюзивный материал', price: 150 }
      ],
      options: [
        { name: 'Скрепка', price: 30 },
        { name: 'Термоклей', price: 80 },
        { name: 'Пружина', price: 100 },
        { name: 'Ламинация обложки', price: 60 },
        { name: 'УФ-лак обложки', price: 80 },
        { name: 'Тиснение', price: 200 }
      ],
      quantities: [
        { qty: 50, pricePerUnit: 15.0 },
        { qty: 100, pricePerUnit: 12.0 },
        { qty: 250, pricePerUnit: 10.0 },
        { qty: 500, pricePerUnit: 8.0 },
        { qty: 1000, pricePerUnit: 6.5 }
      ],
      features: [
        'Любое количество страниц',
        'Различные виды переплета',
        'Высокое качество печати',
        'Ламинированная обложка',
        'Профессиональный дизайн',
        'Быстрое изготовление'
      ],
      gallery: [
        'https://fainaidea.com/wp-content/uploads/2015/05/Katalogi.jpg',
        'https://adv-f1.ru/wp-content/uploads/2021/03/pechatny-katalog.jpg',
      ]
    },
    'stickers': {
      id: 'stickers',
      name: 'Наклейки',
      description: 'Рекламные и декоративные наклейки',
      image: 'https://basket-10.wbbasket.ru/vol1357/part135795/135795670/images/big/1.webp',
      priceFrom: 25,
      category: 'Сувенирная продукция',
      turnaround: '1-2 рабочих дня',
      fullDescription: `
        Наклейки — универсальный рекламный материал для брендинга и декора. Мы изготавливаем 
        наклейки различных форм и размеров на качественных самоклеящихся материалах. 
        Подходят для внутреннего и наружного применения.
      `,
      sizes: [
        { name: 'Круглые Ø50 мм', size: 'Ø50', price: 25 },
        { name: 'Круглые Ø70 мм', size: 'Ø70', price: 30 },
        { name: 'Прямоугольные 50×30 мм', size: '50×30', price: 25 },
        { name: 'Фигурная резка', size: 'custom', price: 40 }
      ],
      materials: [
        { name: 'Самоклеящаяся пленка', description: 'Стандартный материал', price: 0 },
        { name: 'Прозрачная пленка', description: 'Прозрачная основа', price: 10 },
        { name: 'Голографическая пленка', description: 'Голографический эффект', price: 25 },
        { name: 'Водостойкая пленка', description: 'Для наружного применения', price: 15 }
      ],
      options: [
        { name: 'Фигурная резка', price: 15 },
        { name: 'Ламинация', price: 10 },
        { name: 'УФ-лак', price: 12 },
        { name: 'Перфорация', price: 8 }
      ],
      quantities: [
        { qty: 100, pricePerUnit: 1.0 },
        { qty: 250, pricePerUnit: 0.8 },
        { qty: 500, pricePerUnit: 0.6 },
        { qty: 1000, pricePerUnit: 0.4 },
        { qty: 2000, pricePerUnit: 0.3 }
      ],
      features: [
        'Различные формы и размеры',
        'Водостойкие материалы',
        'Фигурная резка',
        'Яркие цвета',
        'Долговечность',
        'Быстрое изготовление'
      ],
      gallery: [
        'https://basket-11.wbbasket.ru/vol1630/part163004/163004006/images/big/1.webp',
        'https://basket-10.wbbasket.ru/vol1455/part145549/145549744/images/big/1.webp',
      ]
    }
  };

  // Получаем данные услуги по ID
  const service = servicesData[id as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Услуга не найдена</h2>
          <Link 
            to="/services"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Вернуться к услугам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-purple-600">Главная</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-purple-600">Услуги</Link>
          <span>/</span>
          <span className="text-gray-900">{service.name}</span>
        </div>

        {/* Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Назад к услугам</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-purple-600">
                от {service.priceFrom} сом
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {service.gallery.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                  {service.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.9 (127 отзывов)</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {service.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-gray-900">Срок изготовления</span>
                </div>
                <p className="text-gray-600">{service.turnaround}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Гарантия качества</span>
                </div>
                <p className="text-gray-600">100% гарантия</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Особенности</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Button */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Цена от</p>
                  <p className="text-2xl font-bold text-gray-900">{service.priceFrom} сом</p>
                </div>
                <Link
                  to={`/order/${service.id}`}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>Заказать</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-xs text-gray-500">
                * Итоговая цена зависит от тиража, материала и дополнительных опций
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Options */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sizes */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Размеры</h3>
            <div className="space-y-3">
              {service.sizes.map((size, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{size.name}</p>
                    <p className="text-sm text-gray-600">{size.size}</p>
                  </div>
                  <span className="text-purple-600 font-semibold">
                    {size.price === 0 ? 'Базовая' : `от ${size.price} сом`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Материалы</h3>
            <div className="space-y-3">
              {service.materials.map((material, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-gray-900">{material.name}</p>
                    <span className="text-purple-600 font-semibold">
                      {material.price === 0 ? 'Базовая' : `+${material.price} сом`}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{material.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Options */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Дополнительные опции</h3>
            <div className="space-y-3">
              {service.options.map((option, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">{option.name}</p>
                  <span className="text-purple-600 font-semibold">+{option.price} сом</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quantity Pricing */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Цены в зависимости от тиража</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Количество</th>
                  {service.quantities.map((qty, index) => (
                    <th key={index} className="text-center py-3 px-4 font-semibold text-gray-900">
                      {qty.qty} шт
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Цена за штуку</td>
                  {service.quantities.map((qty, index) => (
                    <td key={index} className="text-center py-3 px-4 font-semibold text-purple-600">
                      {qty.pricePerUnit} сом
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;