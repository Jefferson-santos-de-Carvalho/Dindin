import React, { useState } from 'react';
import { Scissors, Plus, Search, Clock, DollarSign, Edit, Trash2, Tag } from 'lucide-react';

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);

  const services = [
    {
      id: 1,
      name: 'Corte Feminino',
      description: 'Corte personalizado para cabelos femininos',
      duration: 60,
      price: 80,
      category: 'Cabelo',
      isActive: true,
      popularity: 95
    },
    {
      id: 2,
      name: 'Coloração Completa',
      description: 'Coloração completa com produtos premium',
      duration: 180,
      price: 200,
      category: 'Cabelo',
      isActive: true,
      popularity: 78
    },
    {
      id: 3,
      name: 'Escova Progressiva',
      description: 'Tratamento alisante com escova progressiva',
      duration: 240,
      price: 350,
      category: 'Tratamento',
      isActive: true,
      popularity: 65
    },
    {
      id: 4,
      name: 'Corte Masculino',
      description: 'Corte moderno para cabelos masculinos',
      duration: 45,
      price: 50,
      category: 'Cabelo',
      isActive: true,
      popularity: 88
    },
    {
      id: 5,
      name: 'Manicure',
      description: 'Cuidados completos para as unhas das mãos',
      duration: 45,
      price: 35,
      category: 'Unhas',
      isActive: true,
      popularity: 92
    },
    {
      id: 6,
      name: 'Pedicure',
      description: 'Cuidados completos para as unhas dos pés',
      duration: 60,
      price: 45,
      category: 'Unhas',
      isActive: true,
      popularity: 85
    }
  ];

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const AddServiceForm = () => (
    <div className="card p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Novo Serviço</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Serviço</label>
          <input type="text" className="input" placeholder="Ex: Corte Feminino" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
          <select className="input">
            <option value="">Selecione uma categoria</option>
            <option value="Cabelo">Cabelo</option>
            <option value="Unhas">Unhas</option>
            <option value="Tratamento">Tratamento</option>
            <option value="Estética">Estética</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Duração (minutos)</label>
          <input type="number" className="input" placeholder="60" min="15" step="15" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preço (R$)</label>
          <input type="number" className="input" placeholder="80.00" min="0" step="0.01" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
          <textarea className="input" rows={3} placeholder="Descrição detalhada do serviço..."></textarea>
        </div>
        <div className="md:col-span-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
            <span className="text-sm text-gray-700">Serviço ativo</span>
          </label>
        </div>
        <div className="md:col-span-2 flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => setShowAddForm(false)}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button type="submit" className="btn-primary">
            Salvar Serviço
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Serviços</h2>
          <p className="text-gray-600">Gerencie o portfólio de serviços do salão</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Serviço</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar serviços..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="input w-auto"
        >
          <option value="all">Todas as categorias</option>
          {categories.filter(cat => cat !== 'all').map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Add Service Form */}
      {showAddForm && <AddServiceForm />}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Scissors className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total de Serviços</p>
              <p className="text-xl font-bold text-gray-900">{services.length}</p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Tag className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Categorias</p>
              <p className="text-xl font-bold text-gray-900">{categories.length - 1}</p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Preço Médio</p>
              <p className="text-xl font-bold text-gray-900">
                R$ {Math.round(services.reduce((acc, s) => acc + s.price, 0) / services.length)}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Duração Média</p>
              <p className="text-xl font-bold text-gray-900">
                {Math.round(services.reduce((acc, s) => acc + s.duration, 0) / services.length)}min
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
              <div className="flex space-x-1">
                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration} min</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600 font-medium">
                  <DollarSign className="w-4 h-4" />
                  <span>R$ {service.price}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Popularidade</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full" 
                      style={{ width: `${service.popularity}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{service.popularity}%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  service.isActive 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {service.isActive ? 'Ativo' : 'Inativo'}
                </span>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <Scissors className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum serviço encontrado</h3>
          <p className="text-gray-500">Tente ajustar os filtros ou adicione um novo serviço.</p>
        </div>
      )}
    </div>
  );
};

export default Services;