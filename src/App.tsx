import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import LoginForm from './components/Auth/LoginForm';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Clients from './pages/Clients';
import Professionals from './pages/Professionals';
import Services from './pages/Services';

function App() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'appointments': return 'Agendamentos';
      case 'clients': return 'Clientes';
      case 'professionals': return 'Profissionais';
      case 'services': return 'Serviços';
      case 'commissions': return 'Comissões';
      case 'expenses': return 'Despesas';
      case 'reports': return 'Relatórios';
      case 'notifications': return 'Notificações';
      default: return 'Dashboard';
    }
  };

  const renderPage = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'appointments': return <Appointments />;
      case 'clients': return <Clients />;
      case 'professionals': return <Professionals />;
      case 'services': return <Services />;
      case 'commissions': return <div className="text-center py-12"><h3 className="text-lg font-medium text-gray-900">Comissões - Em desenvolvimento</h3></div>;
      case 'expenses': return <div className="text-center py-12"><h3 className="text-lg font-medium text-gray-900">Despesas - Em desenvolvimento</h3></div>;
      case 'reports': return <div className="text-center py-12"><h3 className="text-lg font-medium text-gray-900">Relatórios - Em desenvolvimento</h3></div>;
      case 'notifications': return <div className="text-center py-12"><h3 className="text-lg font-medium text-gray-900">Notificações - Em desenvolvimento</h3></div>;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
      title={getPageTitle()}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;