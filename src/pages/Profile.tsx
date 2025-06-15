import React, { useState } from 'react';
import { User, Mail, Phone, Edit, Save, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Здесь будет логика сохранения данных
    setIsEditing(false);
    alert('Профиль обновлен!');
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    });
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Войдите в аккаунт</h2>
          <p className="text-gray-600">Для просмотра профиля необходимо войти в систему</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Мой профиль</h1>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                <Edit className="h-4 w-4" />
                <span>Редактировать</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <Save className="h-4 w-4" />
                  <span>Сохранить</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <X className="h-4 w-4" />
                  <span>Отмена</span>
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Имя
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl ${
                    isEditing 
                      ? 'focus:ring-2 focus:ring-purple-500 focus:border-transparent' 
                      : 'bg-gray-50 cursor-not-allowed'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl ${
                    isEditing 
                      ? 'focus:ring-2 focus:ring-purple-500 focus:border-transparent' 
                      : 'bg-gray-50 cursor-not-allowed'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Телефон
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl ${
                    isEditing 
                      ? 'focus:ring-2 focus:ring-purple-500 focus:border-transparent' 
                      : 'bg-gray-50 cursor-not-allowed'
                  }`}
                  placeholder="+996 555 123 456"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={logout}
              className="w-full bg-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-200"
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;