import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { GoogleIcon } from "../components/icons/index";

export default function Autenticacao() {

  const [modo, setModo] = useState<'login' | 'cadastro'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function submeter() {
    if (modo === 'login') {
      console.log('login');
    } else {
      console.log('cadastrar');
    }
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="w-1/2">
        <h1 className={`
      text-xl font-bold mb-5
      `}>
          {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na Plataforma'}
        </h1>
        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          required
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          required
        />

        <button onClick={submeter} className={`
          w-full bg-blue-500 hover:bg-blue-400
          text-white rounded-lg px-4 py-3 mt-6
      `}>
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
        <hr className="my-6 border-gray-300 w-full" />

        <button onClick={submeter} className={`
          w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-4 py-3 mt-6
          flex flex-row justify-center items-center
      `}>
          {GoogleIcon}
          <span className="ml-2">Entrar com Google</span>
        </button>
      </div>
    </div>
  )
}