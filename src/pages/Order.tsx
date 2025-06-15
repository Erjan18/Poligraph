import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ChevronRight, Upload, CheckCircle, ArrowLeft, Calculator } from 'lucide-react';
import { useOrder } from '../contexts/OrderContext';
import { useAuth } from '../contexts/AuthContext';

const Order = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { currentOrder, updateCurrentOrder, submitOrder, clearCurrentOrder } = useOrder();
  const [currentStep, setCurrentStep] = useState(1);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

  const services = {
    'business-cards': { name: 'Визитки', basePrice: 50 },
    'brochures': { name: 'Буклеты', basePrice: 100 },
    'flyers': { name: 'Листовки', basePrice: 30 },
    'banners': { name: 'Баннеры', basePrice: 500 },
    'calendars': { name: 'Календари', basePrice: 200 },
    'postcards': { name: 'Открытки', basePrice: 80 },
    'booklets': { name: 'Каталоги', basePrice: 300 },
    'stickers': { name: 'Наклейки', basePrice: 25 }
  };

  const selectedService = serviceId ? services[serviceId as keyof typeof services] : null;
  
  const watchedValues = watch();

  useEffect(() => {
    if (selectedService) {
      updateCurrentOrder({
        serviceId: serviceId!,
        serviceName: selectedService.name
      });
    }
  }, [serviceId, selectedService]);

  useEffect(() => {
    calculatePrice();
  }, [watchedValues, selectedService]);

  const calculatePrice = () => {
    if (!selectedService) return;
    
    let price = selectedService.basePrice;
    const quantity = parseInt(watchedValues.quantity) || 1;
    
    // Базовая цена за количество
    price = price * quantity;
    
    // Скидки за большой тираж
    if (quantity >= 1000) price *= 0.8;
    else if (quantity >= 500) price *= 0.85;
    else if (quantity >= 250) price *= 0.9;
    
    // Доплата за материал
    if (watchedValues.material === 'premium') price *= 1.2;
    else if (watchedValues.material === 'exclusive') price *= 1.5;
    
    // Доплата за срочность
    if (watchedValues.urgency === 'urgent') price *= 1.5;
    else if (watchedValues.urgency === 'express') price *= 2;
    
    // Доплата за ламинацию
    if (watchedValues.lamination) price += quantity * 15;
    
    setCalculatedPrice(Math.round(price));
  };

  const steps = [
    { number: 1, title: 'Выбор услуги', description: 'Параметры продукции' },
    { number: 2, title: 'Загрузка макета', description: 'Файлы для печати' },
    { number: 3, title: 'Контактные данные', description: 'Информация о заказчике' },
    { number: 4, title: 'Доставка и оплата', description: 'Способ получения' },
    { number: 5, title: 'Подтверждение', description: 'Проверка заказа' }
  ];

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: any) => {
    if (currentStep === 5) {
      const order = {
        id: Date.now().toString(),
        serviceId: serviceId!,
        serviceName: selectedService!.name,
        parameters: {
          size: data.size,
          material: data.material,
          color: data.color,
          lamination: data.lamination,
          quantity: parseInt(data.quantity),
          urgency: data.urgency
        },
        files: data.files || [],
        price: calculatedPrice,
        status: 'processing' as const,
        createdAt: new Date(),
        deliveryMethod: data.deliveryMethod,
        customerInfo: {
          name: data.customerName,
          phone: data.customerPhone,
          email: data.customerEmail,
          address: data.customerAddress
        }
      };
      
      submitOrder(order);
      navigate('/my-orders');
    } else {
      updateCurrentOrder(data);
      nextStep();
    }
  };

  if (!selectedService) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Услуга не найдена</h2>
          <button 
            onClick={() => navigate('/services')}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg"
          >
            Выбрать услугу
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/services')}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Назад к услугам</span>
          </button>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Заказ: {selectedService.name}
          </h1>
          <p className="text-gray-600">Заполните форму для оформления заказа</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.number 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    step.number
                  )}
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="h-5 w-5 text-gray-400 mx-2" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="text-sm font-medium text-gray-900">{steps[currentStep - 1].title}</div>
            <div className="text-sm text-gray-500">{steps[currentStep - 1].description}</div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Параметры продукции</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Размер
                      </label>
                      <select
                        {...register('size', { required: 'Выберите размер' })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Выберите размер</option>
                        <option value="standard">Стандарт (90×50 мм)</option>
                        <option value="euro">Евро (85×55 мм)</option>
                        <option value="american">Американский (89×51 мм)</option>
                        <option value="square">Квадрат (70×70 мм)</option>
                      </select>
                      {errors.size && (
                        <p className="text-red-500 text-sm mt-1">{errors.size.message as string}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Материал
                      </label>
                      <select
                        {...register('material', { required: 'Выберите материал' })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Выберите материал</option>
                        <option value="standard">Картон 300г/м² (базовый)</option>
                        <option value="premium">Картон 350г/м² (+20%)</option>
                        <option value="exclusive">Дизайнерский картон (+50%)</option>
                      </select>
                      {errors.material && (
                        <p className="text-red-500 text-sm mt-1">{errors.material.message as string}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Цветность
                      </label>
                      <select
                        {...register('color', { required: 'Выберите цветность' })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Выберите цветность</option>
                        <option value="full">Полноцветная печать (4+4)</option>
                        <option value="one-side">Полноцветная одна сторона (4+0)</option>
                        <option value="black">Черно-белая печать</option>
                      </select>
                      {errors.color && (
                        <p className="text-red-500 text-sm mt-1">{errors.color.message as string}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Количество
                      </label>
                      <input
                        type="number"
                        min="1"
                        {...register('quantity', { 
                          required: 'Укажите количество',
                          min: { value: 1, message: 'Минимальное количество: 1' }
                        })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Введите количество"
                      />
                      {errors.quantity && (
                        <p className="text-red-500 text-sm mt-1">{errors.quantity.message as string}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Срок изготовления
                      </label>
                      <select
                        {...register('urgency', { required: 'Выберите срок' })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Выберите срок</option>
                        <option value="standard">Стандарт (3-5 дней)</option>
                        <option value="urgent">Срочно (1-2 дня) +50%</option>
                        <option value="express">Экспресс (в день заказа) +100%</option>
                      </select>
                      {errors.urgency && (
                        <p className="text-red-500 text-sm mt-1">{errors.urgency.message as string}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          {...register('lamination')}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-700">
                          Ламинация (+15 сом за штуку)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Загрузка макета</h2>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Загрузите файлы для печати
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Поддерживаемые форматы: PDF, PNG, JPG, AI, PSD
                    </p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.png,.jpg,.jpeg,.ai,.psd"
                      {...register('files')}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="bg-purple-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-purple-700 transition-colors duration-200"
                    >
                      Выбрать файлы
                    </label>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Требования к макету:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Разрешение не менее 300 dpi</li>
                      <li>• Цветовая модель CMYK</li>
                      <li>• Припуски на обрез 2-3 мм</li>
                      <li>• Шрифты в кривых или приложены отдельно</li>
                    </ul>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Контактные данные</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя *
                      </label>
                      <input
                        type="text"
                        {...register('customerName', { required: 'Введите имя' })}
                        defaultValue={user?.name || ''}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      {errors.customerName && (
                        <p className="text-red-500 text-sm mt-1">{errors.customerName.message as string}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        {...register('customerPhone', { required: 'Введите номер телефона' })}
                        defaultValue={user?.phone || ''}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="+996 555 123 456"
                      />
                      {errors.customerPhone && (
                        <p className="text-red-500 text-sm mt-1">{errors.customerPhone.message as string}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('customerEmail', { 
                          required: 'Введите email',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Введите корректный email'
                          }
                        })}
                        defaultValue={user?.email || ''}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      {errors.customerEmail && (
                        <p className="text-red-500 text-sm mt-1">{errors.customerEmail.message as string}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Доставка и оплата</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Способ получения
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="pickup"
                          {...register('deliveryMethod', { required: 'Выберите способ получения' })}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                        />
                        <span className="ml-3">
                          <span className="font-medium">Самовывоз</span>
                          <span className="block text-sm text-gray-500">
                            ул. Чуй 123, Бишкек (бесплатно)
                          </span>
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="delivery"
                          {...register('deliveryMethod', { required: 'Выберите способ получения' })}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                        />
                        <span className="ml-3">
                          <span className="font-medium">Доставка курьером</span>
                          <span className="block text-sm text-gray-500">
                            По Бишкеку (+200 сом)
                          </span>
                        </span>
                      </label>
                    </div>
                    {errors.deliveryMethod && (
                      <p className="text-red-500 text-sm mt-1">{errors.deliveryMethod.message as string}</p>
                    )}
                  </div>

                  {watchedValues.deliveryMethod === 'delivery' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Адрес доставки
                      </label>
                      <input
                        type="text"
                        {...register('customerAddress', { 
                          required: watchedValues.deliveryMethod === 'delivery' ? 'Введите адрес' : false 
                        })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Улица, дом, квартира"
                      />
                      {errors.customerAddress && (
                        <p className="text-red-500 text-sm mt-1">{errors.customerAddress.message as string}</p>
                      )}
                    </div>
                  )}

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Способы оплаты</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Наличными при получении</li>
                      <li>• Банковской картой при получении</li>
                      <li>• Безналичный расчет для юр. лиц</li>
                    </ul>
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Подтверждение заказа</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-4">Детали заказа:</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Услуга:</span>
                        <span className="font-medium">{selectedService.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Размер:</span>
                        <span>{watchedValues.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Материал:</span>
                        <span>{watchedValues.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Количество:</span>
                        <span>{watchedValues.quantity} шт.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Срок:</span>
                        <span>{watchedValues.urgency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Получение:</span>
                        <span>{watchedValues.deliveryMethod === 'pickup' ? 'Самовывоз' : 'Доставка'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-sm text-purple-800">
                      После подтверждения заказа мы свяжемся с вами для уточнения деталей 
                      и согласования макета.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Назад
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                >
                  {currentStep === 5 ? 'Подтвердить заказ' : 'Далее'}
                </button>
              </div>
            </div>

            {/* Sidebar - Price Calculator */}
            <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-8">
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Калькулятор цены</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Базовая цена:</span>
                  <span>{selectedService.basePrice} сом</span>
                </div>
                <div className="flex justify-between">
                  <span>Количество:</span>
                  <span>{watchedValues.quantity || 1} шт.</span>
                </div>
                {watchedValues.material === 'premium' && (
                  <div className="flex justify-between text-orange-600">
                    <span>Премиум материал:</span>
                    <span>+20%</span>
                  </div>
                )}
                {watchedValues.material === 'exclusive' && (
                  <div className="flex justify-between text-orange-600">
                    <span>Эксклюзивный материал:</span>
                    <span>+50%</span>
                  </div>
                )}
                {watchedValues.urgency === 'urgent' && (
                  <div className="flex justify-between text-red-600">
                    <span>Срочный заказ:</span>
                    <span>+50%</span>
                  </div>
                )}
                {watchedValues.urgency === 'express' && (
                  <div className="flex justify-between text-red-600">
                    <span>Экспресс заказ:</span>
                    <span>+100%</span>
                  </div>
                )}
                {watchedValues.lamination && (
                  <div className="flex justify-between text-blue-600">
                    <span>Ламинация:</span>
                    <span>+15 сом/шт</span>
                  </div>
                )}
                {watchedValues.deliveryMethod === 'delivery' && (
                  <div className="flex justify-between text-purple-600">
                    <span>Доставка:</span>
                    <span>+200 сом</span>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Итого:</span>
                  <span className="text-2xl font-bold text-purple-600">
                    {calculatedPrice + (watchedValues.deliveryMethod === 'delivery' ? 200 : 0)} сом
                  </span>
                </div>
              </div>
              
              <div className="mt-4 text-xs text-gray-500">
                * Цена может измениться после проверки макета
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;