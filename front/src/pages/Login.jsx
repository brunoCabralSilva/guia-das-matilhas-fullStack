import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [user, setUser ] = useState('');
  const [password, setpassword ] = useState('');
  const [response, setResponse] = useState('');
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const resp = await axios.post('http://localhost:3301/login',
      {
        user: user,
        password: password,
      }
    );
    setResponse(resp);

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
        type="submit"
        className="p-2 m-2 bg-black text-white"
      >
        Entrar
      </button>
      <p className="my-10 w-full text-center text-white font-bold">
        {response && response.data.message}</p>
    </form>
    </div>
  );
}