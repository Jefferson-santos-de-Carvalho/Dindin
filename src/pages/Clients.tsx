import React, { useState } from 'react';
import { Users, Plus, Search, Phone, Mail, Calendar, Edit, Trash2 } from 'lucide-react';

const Clients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const clients = [
    {
      id: 1,
      name: 'Maria Silva',
      email: 'maria.silva@email.com',
      phone: '(11) 99999-9999',
      lastVisit: '2024-01-15',
      totalVisits: 12,
      totalSpent: 1440,
      notes: 'Prefere horários pela manhã'
    },
    {
      id: 2,
      name: 'João Santos',
      email: 'joao.santos@email.com',
      phone: '(11) 88888-8888',
      lastVisit: '2024-01-10',
      totalVisits: 8,
      totalSpent: 400,
      notes: ''
    },
    {
      id: 3,
      name: 'Fernanda Oliveira',
      email: 'fernanda.oliveira@email.com',
      phone: '(11) 77777-7777',
      lastVisit: '2024-01-12',
      totalVisits: 15,
      totalSpent: 2100,
      notes: 'Alérgica a produtos com amônia'
    },
    {
      id: 4,
      name: 'Pedro Almeida',
      email: 'pedro.almeida@email.com',
      phone: '(11) 66666-6666',
      lastVisit: '2024-01-08',
      totalVisits: 6,
      totalSpent: 210,
      notes: ''
    }
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  const AddClientForm = () => (
    <div className="card p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Novo Cliente</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input type="text" className="input" placeholder="Digite o nome completo" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="input" placeholder="email@exemplo.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
          <input type="tel" className="input" placeholder="(11) 99999-9999" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
          <input type="date" className="input" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Observações</label>
          <textarea className="input" rows={3} placeholder="Observações sobre o cliente..."></textarea>
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
            Salvar Cliente
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
          <h2 className="text-2xl font-bold text-gray-900">Clientes</h2>
          <p className="text-gray-600">Gerencie sua base de clientes</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Cliente</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nome, email ou telefone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input pl-10"
        />
      </div>

      {/* Add Client Form */}
      {showAddForm && <AddClientForm />}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total de Clientes</p>
              <p className="text-xl font-bold text-gray-900">{clients.length}</p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Ativos este Mês</p>
              <p className="text-xl font-bold text-gray-900">
                {clients.filter(c => new Date(c.lastVisit) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Novos este Mês</p>
              <p className="text-xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Média de Visitas</p>
              <p className="text-xl font-bold text-gray-900">
                {Math.round(clients.reduce((acc, c) => acc + c.totalVisits, 0) / clients.length)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Clients List */}
      <div className="grid gap-4">
        {filteredClients.map((client) => (
          <div key={client.id} className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{client.name}</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{client.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{client.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Última visita: {new Date(client.lastVisit).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 mt-3 text-sm">
                    <span className="text-blue-600 font-medium">{client.totalVisits} visitas</span>
                    <span className="text-green-600 font-medium">R$ {client.totalSpent} gastos</span>
                  </div>
                  
                  {client.notes && (
                    <div className="mt-2 p-2 bg-yellow-50 rounded text-sm text-yellow-800">
                      <strong>Observações:</strong> {client.notes}
                    </div>
                  )}
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

      {filteredClients.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum cliente encontrado</h3>
          <p className="text-gray-500">Tente ajustar a busca ou adicione um novo cliente.</p>
        </div>
      )}
    </div>
  );
};

export default Clients;