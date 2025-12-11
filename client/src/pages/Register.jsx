import React, { useState } from 'react';
import { Link } from "react-router-dom";
import googleLogo from "../assets/images/google.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const [nome, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha, nome }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error("Erro: " + res.status + " — " + text);
      }

      const data = await res.json();
      console.log("Resposta:", data);
      alert("Cadastro realizado com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Erro ao criar conta!");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg flex flex-col items-center gap-5">

        {/* Logo */}
        <img 
          className='h-18'
          src="../src/assets/images/Logo.png"
          alt="Logo Eureka"
        />

        {/* Título */}
        <h1 className='text-2xl font-lato-bold'>
          Cadastre-se grátis
        </h1>

        {/* Formulário */}
        <form className='flex flex-col gap-2 w-full font-lato' onSubmit={handleSubmit}>
          
          <p>Endereço de e-mail</p>
          <input
            id="email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className='w-full border border-gray-300 px-4 py-2'
            placeholder='Digite seu e-mail'
          />

          <p>Senha de acesso</p>
          <input
            id="senha"
            type="password"
            value={senha}
            required
            onChange={(e) => setPassword(e.target.value)}
            className='w-full border border-gray-300 px-4 py-2'
            placeholder='Digite sua senha'
          />

          <p>Nome completo</p>
          <input
            id="nome"
            type="text"
            value={nome}
            required
            onChange={(e) => setName(e.target.value)}
            className='w-full border border-gray-300 px-4 py-2'
            placeholder='Digite seu nome'
          />

          <button className='cursor-pointer text-white bg-blue-800 w-full rounded-full hover:bg-blue-700 px-4 py-2'>
            Criar conta
          </button>
        </form>

        {/* Botão Google opcional
        <button
          onClick={() => console.log("Login com Google")}
          className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-full hover:bg-gray-100 transition-all"
        >
          <img src={googleLogo} alt="Google" className="h-6" />
          <span>Continuar com Google</span>
        </button>
        */}
      </div>
    </section>
  );
};

export default Register;
