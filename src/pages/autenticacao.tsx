import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {

  const [modo, setModo] = useState<'login' | 'cadastro'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className="flex flex-col">
      <h1>Autenticação</h1>
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
    </div>
  )
}