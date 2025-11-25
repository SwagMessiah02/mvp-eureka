import React from 'react'
{/* Abandonai toda a esperança, vós que entrais */}
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Linha 1 */}
        
        <p className="text-white font-semibold texxt-lg tracking-wide">
          CURSINHO ONLINE PARA ENEM E VESTIBULARES
        </p>

        {/* Linha 2 – título */}
        <h1 className="text-white font-extrabold text-4xl mt-4">
          APRENDIZAGEM <span className="tracking-widest">EUREKA</span>
        </h1>

        {/* Descrição */}
        <p className="text-white text-lg max-w-xl mt-6 leading-relaxed">
          Empresa Especializada e registrada desde 2020 com serviços de Reforço Escolar,
          Aulas Particulares e Cursos para crianças e adolescentes estudantes na
          Educação Básica
        </p>

        {/* Botões */}
        <div className="flex gap-6 mt-8">
          <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition">
            COMECE AGORA
          </button>

          <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition">
            VER AULA DE APRESENTAÇÃO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


