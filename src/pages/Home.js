import React, { useState } from 'react';
import { Smartphone, Laptop, Tv, Gamepad2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <header className="bg-slate-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Microchip className="h-8 w-8 text-blue-500 mr-2" />
            <span className="text-xl font-bold">TechFix Pro</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-blue-500">Início</a>
            <a href="/especialidades" className="hover:text-blue-500">Especialidades</a>
            <a href="/diagnostico-avancado" className="hover:text-blue-500">Diagnóstico Avançado</a>
            <a href="/rastrear-os" className="hover:text-blue-500">Rastrear O.S.</a>
            <a href="/empresa" className="hover:text-blue-500">Empresa</a>
            <a href="/contato" className="hover:text-blue-500">Contato</a>
          </nav>
          <div className="flex space-x-4">
            <a href="/admin-login" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md">Área do Cliente</a>
            <a href="/admin" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">Portal do Técnico/Admin</a>
          </div>
        </div>
      </header>
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Engenharia de Precisão e Reparo Eletrônico Avançado</h1>
        <p className="text-xl md:text-2xl mb-8">Laboratório com certificação antiestática (ESD), microscopia eletrônica e equipamentos de última geração</p>
        <div className="flex justify-center space-x-4">
          <a href="/contato" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md">Agende uma Consulta</a>
          <a href="/especialidades" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-md">Nossas Especialidades</a>
        </div>
      </section>
  const [osNumber, setOsNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleOsSubmit = (e) => {
    e.preventDefault();
    if (osNumber === '1001') {
      setOrderStatus({
        status: 'Pronto',
        timeline: [
          { status: 'Recebido', date: '2023-05-01' },
          { status: 'Em Análise', date: '2023-05-02' },
          { status: 'Aguardando Peças', date: '2023-05-03' },
          { status: 'Pronto', date: '2023-05-05' }
        ]
      });
    } else {
      setOrderStatus(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Assistência Técnica Premium</h1>
            <p className="text-xl text-slate-300 mb-6">Reparação especializada em eletrônicos com tecnologia de ponta e atendimento personalizado.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">Agende um Orçamento</button>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1551836027-36d5f266d4e6" alt="Tech Repair" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex justify-center mb-4">
                <Smartphone className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Smartphones</h3>
              <p className="text-slate-300 text-center">Reparação e manutenção de smartphones de todas as marcas.</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex justify-center mb-4">
                <Laptop className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Notebooks</h3>
              <p className="text-slate-300 text-center">Conserto e atualização de notebooks e computadores.</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex justify-center mb-4">
                <Tv className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">TVs</h3>
              <p className="text-slate-300 text-center">Reparação de televisores e aparelhos de som.</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex justify-center mb-4">
                <Gamepad2 className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Consoles</h3>
              <p className="text-slate-300 text-center">Manutenção e conserto de consoles de videogame.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Status Section */}
      <section className="py-16 px-4 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Consulte o Status da Sua OS</h2>
          <form onSubmit={handleOsSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="text"
                value={osNumber}
                onChange={(e) => setOsNumber(e.target.value)}
                placeholder="Número da OS"
                className="flex-grow px-4 py-2 rounded-l-lg bg-slate-700 text-slate-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg transition-colors duration-200">Consultar</button>
            </div>
          </form>

          {orderStatus && (
            <div className="mt-8 max-w-md mx-auto bg-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Status da OS: {orderStatus.status}</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500"></div>
                {orderStatus.timeline.map((item, index) => (
                  <div key={index} className="mb-8 flex items-center">
                    <div className="z-10 flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">{item.status}</h4>
                      <p className="text-sm text-slate-400">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;