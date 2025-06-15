import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
                  <Printer className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Полиграф Плюс</h3>
                  <p className="text-gray-400 text-sm">Типография в Бишкеке</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Современная типография с более чем 10-летним опытом работы. 
                Качественная печать любой сложности с быстрым выполнением заказов.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-white transition-colors">Визитки</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Буклеты</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Листовки</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Баннеры</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Календари</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Все услуги</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Контакты</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-purple-400" />
                  <span>+996 555 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span>info@poligraf-plus.kg</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span>ул. Чуй 123, Бишкек</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-4 w-4 text-purple-400" />
                  <span>WhatsApp: +996 555 123 456</span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Режим работы</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-purple-400" />
                  <div>
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Сб: 10:00 - 16:00</p>
                    <p>Вс: выходной</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Link
                  to="/order"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Заказать онлайн
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Полиграф Плюс. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;