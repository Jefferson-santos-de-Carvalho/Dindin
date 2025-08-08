import React from 'react';
import { Calendar, Users, DollarSign, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Agendamentos Hoje',
      value: '12',
      change: '+2 desde ontem',
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      title: 'Clientes Ativos',
      value: '248',
      change: '+12 este mês',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Receita Semanal',
      value: 'R$ 3.240',
      change: '+15% vs semana passada',
      icon: DollarSign,
      color: 'bg-primary-500'
    },
    {
      title: 'Taxa de Ocupação',
      value: '85%',
      change: '+5% este mês',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  const todayAppointments = [
    {
      id: 1,
      time: '09:00',
      client: 'Maria Silva',
      service: 'Corte + Escova',
      professional: 'Ana Costa',
      status: 'confirmed'
    },
    {
      id: 2,
      time: '10:30',
      client: 'João Santos',
      service: 'Corte Masculino',
      professional: 'Carlos Lima',
      status: 'scheduled'
    },
    {
      id: 3,
      time: '14:00',
      client: 'Fernanda Oliveira',
      service: 'Coloração',
      professional: 'Ana Costa',
      status: 'confirmed'
    },
    {
      id: 4,
      time: '15:30',
      client: 'Pedro Almeida',
      service: 'Barba + Bigode',
      professional: 'Carlos Lima',
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmado';
      case 'scheduled': return 'Agendado';
      case 'completed': return 'Concluído';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Agendamentos de Hoje</h3>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{appointment.client}</p>
                    <p className="text-sm text-gray-600">{appointment.service}</p>
                    <p className="text-sm text-gray-500">com {appointment.professional}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{appointment.time}</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                    {getStatusText(appointment.status)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Ações Rápidas</h3>
          
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary-600" />
                <span className="font-medium text-primary-700">Novo Agendamento</span>
              </div>
              <span className="text-primary-600">→</span>
            </button>
            
            <button className="w-full flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-700">Cadastrar Cliente</span>
              </div>
              <span className="text-green-600">→</span>
            </button>
            
            <button className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-700">Registrar Despesa</span>
              </div>
              <span className="text-blue-600">→</span>
            </button>
            
            <button className="w-full flex items-center justify-between p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-purple-700">Ver Relatórios</span>
              </div>
              <span className="text-purple-600">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;