import React from 'react';
import { Link } from "react-router-dom";
import googleLogo from "../assets/images/google.png";

const Register = () => {
  return ( 
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400">
      
      {/* Card branco */}
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg flex flex-col items-center gap-5">

        {/* Imagem do eureka */}
        <img 
          className='h-18'
          src="images/Logo.png"
          alt="Logo Eureka"
        />

        {/* Texto maior */}
        <h1 className='text-2xl font-lato-bold'>
          Cadastre-se grátis
        </h1>

        {/* inicio do formulario */}
        {/* texto acima do email */}
        <form className='flex flex-col gap-2 w-full font-lato'>
          <p>
            Endereço de e-mail
          </p>

          {/* Section de colocar o email */}
          <input type="email" className='w-full border border-gray-300 px-4 py-2' placeholder='Digite seu e-mail' />

          {/* texto acima da senha */}
          <p>
            Senha de acesso
          </p>

          {/* Section de colocar a senha */}
          <input type="password" className='w-full border border-gray-300 px-4 py-2' placeholder='Digite sua senha' />
          
          {/* texto acima da senha */}
          <p>
            Nome completo
          </p>

          {/* Section de colocar a senha */}
          <input type="text" className='w-full border border-gray-300 px-4 py-2' placeholder='Digite seu nome' />

          {/* Botão de iniciar sessão */}
          <button className='cursor-pointer text-amber-50 bg-blue-800 w-full font-momo rounded-full border border-gray-300 hover:bg-blue-700 px-4 py-2'>
            Criar conta
          </button>

        {/* fim do formulario */}
        </form>

        {/* Botão Login com Google */}
        <button
          /* onClick - é para testar se o botão funciona ( -- funciona :) -- ) */
          onClick={() => console.log("Login com Google")} 
          className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-full hover:bg-gray-100 transition-all"
        >
          <img src={googleLogo} alt="Google" className="w-6 h-6" />
          <span className="font-lato text-gray-700 font-medium">
            Registe-se com Google
          </span>
        </button>

      </div>
    </section>
  );
};

export default Register
