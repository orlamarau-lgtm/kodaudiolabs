import React from 'react';

const Especialidades = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossas Especialidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Reparo de Equipamentos Eletrônicos</h3>
            <p>Oferecemos serviços de reparo especializado em equipamentos eletrônicos de consumo, desde smartphones até aparelhos de áudio profissionais.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Diagnóstico Avançado</h3>
            <p>Utilizamos equipamentos de última geração para realizar diagnósticos precisos e identificar problemas complexos em circuitos eletrônicos.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Prototipagem e Desenvolvimento</h3>
            <p>Desenvolvemos protótipos de circuitos eletrônicos e sistemas embarcados, desde a concepção até a implementação final.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Especialidades;