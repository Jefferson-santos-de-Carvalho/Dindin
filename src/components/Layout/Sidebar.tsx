import React from 'react';
import { 
  Calendar, 
  Users, 
  UserCheck, 
  Scissors, 
  DollarSign, 
  Receipt, 
  BarChart3, 
  MessageSquare,
  Home,
  LogOut
} from 'lucide-react';
import { signOut } from '../../lib/supabase';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'appointments', label: 'Agendamentos', icon: Calendar },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'professionals', label: 'Profissionais', icon: UserCheck },
    { id: 'services', label: 'Serviços', icon: Scissors },
    { id: 'commissions', label: 'Comissões', icon: DollarSign },
    { id: 'expenses', label: 'Despesas', icon: Receipt },
    { id: 'reports', label: 'Relatórios', icon: BarChart3 },
    { id: 'notifications', label: 'Notificações', icon: MessageSquare },
  ];

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="bg-white h-screen w-64 shadow-lg flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-primary-600">
          💄 Salon Manager
        </h1>
        <p className="text-sm text-gray-500 mt-1">Sistema Administrativo</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-primary-100 text-primary-700 border-r-4 border-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sair
        </button>
      </div>
    </div>
  );
};

export default Sidebar;