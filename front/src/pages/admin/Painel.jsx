import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Painel() {
  const history = useHistory();
  useEffect(() => {
    const authToken = async () => {
    const token = localStorage.getItem('token');
    const authentication = await axios.post ('http://localhost:3301/painel', {
      token, 
    });
    if (!authentication.data.token) {
      history.push('/login');
    }
    }
    authToken();
  }, []);
  return(
    <div className="grid grid-rows-3 grid-cols-5 gap-2 m-4 items-center justify-center">
      <Link className="col-span-3 sm:col-span-2 h-30vh relative">
        <img
          src={require('../../images/menu/earthblood.gif')}
          alt="werewolf"
          className="h-full w-full absolute object-cover"
        />
        <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
          Tribos
        </p>
      </Link>
      <Link className="col-span-2 sm:col-span-2 h-30vh relative">
        <img
          src={require('../../images/menu/lupus.jpg')}
          alt="werewolf"
          className="h-full w-full absolute object-cover"
        />
        <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
          Raças
        </p>
      </Link>
      <Link className="col-span-2 sm:col-span-1 h-30vh relative">
        <img
          src={require('../../images/menu/moon.jpg')}
          alt="werewolf"
          className="h-full w-full object-cover absolute"
        />
        <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
          Augúrios
        </p>
      </Link>
      <Link className="col-span-3 sm:col-span-1 h-30vh relative">
        <img
          src={require('../../images/menu/watterfall.gif')}
          alt="werewolf"
          className="h-full w-full object-cover absolute"
        />
        <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
          Blog
        </p>
      </Link>
      <Link className="col-span-5 sm:col-span-1 h-30vh relative">
        <img
          src={require('../../images/menu/night-forest.jpg')}
          alt="werewolf"
          className="h-full w-full object-cover absolute"
        />
        <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
          Sobre
        </p>
      </Link>
      <Link to="/painel-dons" className="col-span-3 sm:col-span-3 h-30vh relative">
        <img
          src={require('../../images/menu/forest.gif')}
          alt="werewolf"
          className="h-full w-full object-cover absolute"
        />
        <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
          Dons
        </p>
      </Link>
      <Link className="col-span-2 sm:col-span-2 h-30vh relative">
        <img
          src={require('../../images/menu/heaven.jpg')}
          alt="werewolf"
          className="h-full w-full object-cover object-top absolute"
        />
        <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
          Perfil
        </p>
      </Link>
      <Link className="col-span-2 sm:col-span-1 h-30vh relative">
        <img
          src={require('../../images/menu/ritual.gif')}
          alt="werewolf"
          className="h-full w-full object-cover absolute"
        />
        <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
          Rituais
        </p>
      </Link>
      <Link className="col-span-3 sm:col-span-2 h-30vh relative">
        <img
          src={require('../../images/menu/forest2.jpg')}
          alt="werewolf"
          className="h-full w-full object-cover absolute"
        />
        <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
          Parceiros
        </p>
      </Link>
    </div>
  );
}