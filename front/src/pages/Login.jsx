import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [user, setUser ] = useState('');
  const [password, setpassword ] = useState('');
  const history = useHistory();

  const submit = async () => {
    const resp = await axios.post('http://localhost:3301/login',
      {
        user,
        password,
      }
    );
    localStorage.setItem('token', resp.data.token );

    if(resp.data.message === 'Usuário autorizado!') {
        history.push('/painel-admin');
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
    <form onSubmit={submit} className="flex flex-col">
      <input
        type="text"
        placeholder="Login"
        className="p-2 m-2 text-center"
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="p-2 m-2 text-center"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button
        type="button"
        onClick={submit}
        className="p-2 m-2 bg-black text-white"
      >
        Entrar
      </button>
    </form>
    </div>
  );
}