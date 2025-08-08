import React, { useState } from 'react';
import { Calendar, Clock, User, Scissors, Plus, Filter, Search } from 'lucide-react';

const Appointments: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const appointments = [
    {
      id: 1,
      time: '09:00',
      client: 'Maria Silva',
      clientPhone: '(11) 99999-9999',
      service: 'Corte + Escova',
      professional: 'Ana Costa',
      duration: 90,
      price: 120,
      status: 'confirmed',
      notes: 'Cliente prefere água morna'
    },
    {
      id: 2,
      time: '10:30',
      client: 'João Santos',
      clientPhone: '(11) 88888-8888',
      service: 'Corte Masculino',
      professional: 'Carlos Lima',
      duration: 45,
      price: 50,
      status: 'scheduled',
      notes: ''
    },
    {
      id: 3,
      time: '14:00',
      client: 'Fernanda Oliveira',
      clientPhone: '(11) 77777-7777',
      service: 'Coloração',
      professional: 'Ana Costa',
      duration: 180,
      price: 200,
      status: 'confirmed',
      notes: 'Teste de alergia realizado'
    },
    {
      id: 4,
      time: '15:30',
      client: 'Pedro Almeida',
      clientPhone: '(11) 66666-6666',
      service: 'Barba + Bigode',
      professional: 'Carlos Lima',
      duration: 30,
      price: 35,
      status: 'completed',
      notes: ''
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmado';
      case 'scheduled': return 'Agendado';
      case 'completed': return 'Concluído';
      case 'cancelled': return 'Cancelado';
      default: return status;
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.professional.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Data
            </label>
            <input
              id="date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="input w-auto"
            />
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input w-auto"
            >
              <option value="all">Todos</option>
              <option value="scheduled">Agendado</option>
              <option value="confirmed">Confirmado</option>
              <option value="completed">Concluído</option>
              <option value="cancelled">Cancelado</option>
            </select>
          </div>
        </div>

        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Novo Agendamento</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por cliente, serviço ou profissional..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input pl-10"
        />
      </div>

      {/* Appointments List */}
      <div className="grid gap-4">
        {filteredAppointments.map((appointment) => (
          <div key={appointment.id} className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{appointment.client}</h3>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(appointment.status)}`}>
                      {getStatusText(appointment.status)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{appointment.time} ({appointment.duration}min)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{appointment.professional}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Scissors className="w-4 h-4" />
                      <span>{appointment.service}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-green-600">R$ {appointment.price}</span>
                    </div>
                  </div>
                  
                  {appointment.notes && (
                    <div className="mt-2 p-2 bg-yellow-50 rounded text-sm text-yellow-800">
                      <strong>Observações:</strong> {appointment.notes}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="px-4 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                  Confirmar
                </button>
                <button className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                  Editar
                </button>
                <button className="px-4 py-2 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum agendamento encontrado</h3>
          <p className="text-gray-500">Tente ajustar os filtros ou criar um novo agendamento.</p>
        </div>
      )}
    </div>
  );
};

export default Appointments;