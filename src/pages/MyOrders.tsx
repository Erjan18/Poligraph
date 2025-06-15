import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Clock, CheckCircle, Truck, X, Eye, RotateCcw } from 'lucide-react';
import { useOrder } from '../contexts/OrderContext';
import { useAuth } from '../contexts/AuthContext';

const MyOrders = () => {
  const { orders, updateOrderStatus } = useOrder();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Войдите в аккаунт</h2>
          <p className="text-gray-600 mb-6">Для просмотра заказов необходимо войти в систему</p>
          <Link
            to="/auth"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Войти
          </Link>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'printing':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'ready':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'delivered':
        return <Truck className="h-5 w-5 text-purple-500" />;
      case 'cancelled':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processing':
        return 'В обработке';
      case 'printing':
        return 'В печати';
      case 'ready':
        return 'Готов';
      case 'delivered':
        return 'Доставлен';
      case 'cancelled':
        return 'Отменен';
      default:
        return 'Неизвестно';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'printing':
        return 'bg-blue-100 text-blue-800';
      case 'ready':
        return 'bg-green-100 text-green-800';
      case 'delivered':
        return 'bg-purple-100 text-purple-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Мои заказы</h1>
          <p className="text-gray-600">Отслеживайте статус ваших заказов</p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">У вас пока нет заказов</h3>
            <p className="text-gray-600 mb-6">Оформите первый заказ и он появится здесь</p>
            <Link
              to="/services"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Выбрать услугу
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{order.serviceName}</h3>
                      <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span>{getStatusText(order.status)}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Заказ №:</span>
                        <p className="text-gray-900">#{order.id.slice(-6)}</p>
                      </div>
                      <div>
                        <span className="font-medium">Количество:</span>
                        <p className="text-gray-900">{order.parameters.quantity} шт.</p>
                      </div>
                      <div>
                        <span className="font-medium">Размер:</span>
                        <p className="text-gray-900">{order.parameters.size}</p>
                      </div>
                      <div>
                        <span className="font-medium">Дата заказа:</span>
                        <p className="text-gray-900">{new Date(order.createdAt).toLocaleDateString('ru-RU')}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-2xl font-bold text-purple-600">
                        {order.price} сом
                      </div>
                      <div className="flex space-x-2">
                        <button className="inline-flex items-center space-x-1 px-3 py-1 text-sm text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors duration-200">
                          <Eye className="h-4 w-4" />
                          <span>Подробнее</span>
                        </button>
                        {order.status === 'processing' && (
                          <button 
                            onClick={() => updateOrderStatus(order.id, 'cancelled')}
                            className="inline-flex items-center space-x-1 px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                          >
                            <X className="h-4 w-4" />
                            <span>Отменить</span>
                          </button>
                        )}
                        <Link
                          to={`/order/${order.serviceId}`}
                          className="inline-flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          <RotateCcw className="h-4 w-4" />
                          <span>Повторить</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Обработка</span>
                    <span>Печать</span>
                    <span>Готов</span>
                    <span>Доставлен</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        order.status === 'processing' ? 'w-1/4 bg-yellow-500' :
                        order.status === 'printing' ? 'w-2/4 bg-blue-500' :
                        order.status === 'ready' ? 'w-3/4 bg-green-500' :
                        order.status === 'delivered' ? 'w-full bg-purple-500' :
                        order.status === 'cancelled' ? 'w-1/4 bg-red-500' :
                        'w-0'
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;