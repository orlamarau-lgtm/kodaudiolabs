import React, { useState } from 'react';
import { Smartphone, Laptop, Tv, Gamepad2 } from 'lucide-react';

const SiteEletronica = () => {
  const [osNumber, setOsNumber] = useState('');
  const [osStatus, setOsStatus] = useState(null);

  const handleOsSubmit = (e) => {
    e.preventDefault();
    if (osNumber === '1001') {
      setOsStatus([
        { status: 'Recebido', date: '2023-01-01', description: 'Ordem de serviço recebida e em análise.' },
        { status: 'Em Análise', date: '2023-01-02', description: 'Análise técnica em andamento.' },
        { status: 'Aguardando Peças', date: '2023-01-03', description: 'Peças necessárias para conserto.' },
        { status: 'Pronto', date: '2023-01-04', description: 'Ordem de serviço concluída.' }
      ]);
    } else {
      setOsStatus(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Assistência Técnica Premium</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Reparamos e consertamos seus dispositivos eletrônicos com qualidade e eficiência.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">Agende um Serviço</button>
      </section>

      {/* Serviços Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <Smartphone className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 text-center">Smartphones</h3>
            <p className="text-slate-400 text-center">Reparação e conserto de smartphones de todas as marcas.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <Laptop className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 text-center">Notebooks</h3>
            <p className="text-slate-400 text-center">Conserto de notebooks e computadores portáteis.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <Tv className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 text-center">TVs</h3>
            <p className="text-slate-400 text-center">Reparação de televisores e equipamentos de áudio.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <Gamepad2 className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 text-center">Consoles</h3>
            <p className="text-slate-400 text-center">Conserto de consoles de videogame e acessórios.</p>
          </div>
        </div>
      </section>

      {/* Consulta de OS Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Consulta de Ordem de Serviço</h2>
        <form onSubmit={handleOsSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              value={osNumber}
              onChange={(e) => setOsNumber(e.target.value)}
              placeholder="Digite o número da OS"
              className="bg-slate-800 text-slate-100 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">Consultar</button>
          </div>
        </form>

        {osStatus && (
          <div className="mt-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Status da Ordem de Serviço</h3>
            <div className="relative border-l-2 border-blue-500">
              {osStatus.map((item, index) => (
                <div key={index} className="mb-8 ml-6">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <h4 className="text-lg font-bold">{item.status}</h4>
                  <p className="text-slate-400 mb-2">{item.date}</p>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SiteEletronica;