import React, { useState } from 'react';
import { UserCheck, Plus, Search, Phone, Mail, Star, Edit, Trash2, DollarSign } from 'lucide-react';

const Professionals: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const professionals = [
    {
      id: 1,
      name: 'Ana Costa',
      email: 'ana.costa@salon.com',
      phone: '(11) 99999-1111',
      specialties: ['Corte Feminino', 'Coloração', 'Escova'],
      isActive: true,
      rating: 4.8,
      totalServices: 156,
      monthlyRevenue: 4200,
      commissionRate: 40
    },
    {
      id: 2,
      name: 'Carlos Lima',
      email: 'carlos.lima@salon.com',
      phone: '(11) 99999-2222',
      specialties: ['Corte Masculino', 'Barba', 'Bigode'],
      isActive: true,
      rating: 4.9,
      totalServices: 98,
      monthlyRevenue: 2450,
      commissionRate: 45
    },
    {
      id: 3,
      name: 'Beatriz Santos',
      email: 'beatriz.santos@salon.com',
      phone: '(11) 99999-3333',
      specialties: ['Manicure', 'Pedicure', 'Nail Art'],
      isActive: false,
      rating: 4.6,
      totalServices: 203,
      monthlyRevenue: 1800,
      commissionRate: 35
    }
  ];

  const filteredProfessionals = professionals.filter(professional =>
    professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    professional.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    professional.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const AddProfessionalForm = () => (
    <div className="card p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Novo Profissional</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input type="text" className="input" placeholder="Digite o nome completo" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="input" placeholder="email@salon.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
          <input type="tel" className="input" placeholder="(11) 99999-9999" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Taxa de Comissão (%)</label>
          <input type="number" className="input" placeholder="40" min="0" max="100" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Especialidades</label>
          <input type="text" className="input" placeholder="Ex: Corte Feminino, Coloração, Escova" />
          <p className="text-xs text-gray-500 mt-1">Separe as especialidades por vírgula</p>
        </div>
        <div className="md:col-span-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
            <span className="text-sm text-gray-700">Profissional ativo</span>
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
            Salvar Profissional
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
          <h2 className="text-2xl font-bold text-gray-900">Profissionais</h2>
          <p className="text-gray-600">Gerencie sua equipe de profissionais</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Profissional</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nome, email ou especialidade..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input pl-10"
        />
      </div>

      {/* Add Professional Form */}
      {showAddForm && <AddProfessionalForm />}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-xl font-bold text-gray-900">{professionals.length}</p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Ativos</p>
              <p className="text-xl font-bold text-gray-900">
                {professionals.filter(p => p.isActive).length}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avaliação Média</p>
              <p className="text-xl font-bold text-gray-900">
                {(professionals.reduce((acc, p) => acc + p.rating, 0) / professionals.length).toFixed(1)}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Receita Mensal</p>
              <p className="text-xl font-bold text-gray-900">
                R$ {professionals.reduce((acc, p) => acc + p.monthlyRevenue, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Professionals List */}
      <div className="grid gap-4">
        {filteredProfessionals.map((professional) => (
          <div key={professional.id} className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-primary-600" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{professional.name}</h3>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      professional.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {professional.isActive ? 'Ativo' : 'Inativo'}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{professional.rating}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{professional.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{professional.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {professional.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <span className="text-blue-600 font-medium">{professional.totalServices} serviços</span>
                    <span className="text-green-600 font-medium">R$ {professional.monthlyRevenue}/mês</span>
                    <span className="text-purple-600 font-medium">{professional.commissionRate}% comissão</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProfessionals.length === 0 && (
        <div className="text-center py-12">
          <UserCheck className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum profissional encontrado</h3>
          <p className="text-gray-500">Tente ajustar a busca ou adicione um novo profissional.</p>
        </div>
      )}
    </div>
  );
};

export default Professionals;