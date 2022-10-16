import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function RegisterGift() {

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

  const [edition, setEdition] = useState('');
  const [book, setBook] = useState('');
  const [page, setPage] = useState(0);
  const [belong, setBelong] = useState('');
  const [vName, setVName] = useState('');
  
  const [name, setName] = useState('');
  const [rank, setRank] = useState(0);
  const [textPtbr, setTextPtBr] = useState('');
  const [systemPtbr, setSystemPtBr] = useState('');
  const [textOriginal, setTextOriginal] = useState('');
  const [systemOriginal, setSystemOriginal] = useState('');
  const [listOfFonts, setListOfFonts] = useState([]);
  const [listOfBelongs, setListOfBelongs] = useState([]);
  
  const addFont = () => {
    if(book === '') {
      window.alert('Necessário escolher uma das opções de livro para cadastrar a Fonte');
    } else if (page <= 0) {
      window.alert('Necessário inserir um valor para a página maior e diferente de zero para cadastrar a Fonte');
    } else if (edition === '') {
      window.alert('Necessário escolher uma das edições oferecidas para cadastrar a Fonte');
    } else {
      setListOfFonts([ ...listOfFonts, { book, page, edition, }]);
      setBook('');
      setPage(0);
      setEdition('');
    }
    const bookSelect = document.getElementById("book");
    bookSelect.selectedIndex = 0;
  }

  const addNewBelong = () => {
    if (belong === '') {
      window.alert('Necessário escolher uma das opções disponíveis para cadastrar uma nova referência de pertencimento');
    } else {
      setListOfBelongs([ ...listOfBelongs, belong]);
    }
    setBelong('');
    const selectBelong = document.getElementById("selectBelong");
    selectBelong.selectedIndex = 0;
  }

  const deleteFont = (fonts) => {
    const newList = listOfFonts.filter((f) => fonts.book !== f.book && fonts.page !== f.page && fonts.edition !== f.edition);
    setListOfFonts(newList);
  }

  const deleteBelong = (bel) => {
    const newList = listOfBelongs.filter((b) => bel !== b);
    setListOfBelongs(newList);
  }

  const addGift = async () => {
    if (name === '' || name.length < 4) {
      window.alert('Necessário adicionar um nome com pelo menos quatro caracteres para o dom');
    } else if (rank === 0) {
      window.alert('Necessário escolher um Posto');
    } else if (listOfFonts.length === 0) {
      window.alert('Necessário cadastrar um Livro como referẽncia');
    } else if (listOfBelongs.length === 0) {
      window.alert('Necessário inserir a quem este dom pertence');
    } else if (textPtbr.length <= 10 ) {
      window.alert('Necessário inserir uma descrição maior para o campo "Texto Traduzido".');
    } else if (systemPtbr.length <= 10 ) {
      window.alert('Necessário inserir uma descrição maior para o campo "Sistema Traduzido".');
    } else if (textOriginal.length <= 10 ) {
      window.alert('Necessário inserir uma descrição maior para o campo "Texto original".');
    } else if (systemOriginal.length <= 10 ) {
      window.alert('Necessário inserir uma descrição maior para o campo "Sistema original"');
    } else {
      const register = await axios.post('http://localhost:3301/gifts', {
        name,
        rank,
        font: listOfFonts,
        belong: listOfBelongs,
        textPtbr,
        systemPtbr,
        textOriginal,
        systemOriginal
      });

      const rankSelect = document.getElementById("rank");
      rankSelect.selectedIndex = 0;
      setName('');
      setTextPtBr('');
      setSystemPtBr('');
      setTextOriginal('');
      setSystemOriginal('');
      setListOfFonts([]);
      setListOfBelongs([]);
      window.alert(`Dom adicionado com sucesso!`);
    }
  }

  const verifyName = async () => {
    if (name === '' || name.length < 4) {
      window.alert('Necessário adicionar um nome com pelo menos quatro caracteres para o dom');
    } else {
      const verify = await axios.post('http://localhost:3301/gifts/name', {
        name,
      });
      if (verify.data.length === 0) {
        setVName("Nome disponível para cadastro");
      } else {
        setVName("Nome já existente na base de dados");
      }
    }
    setTimeout(() => {
      setVName("");
    }, 2000);
  }

  return (
    <div className="w-full min-h-screen flex flex-row relative">
      <img
        src={require('../../images/werewolf.png')}
        className="w-full h-full object-cover absolute z-1"
      />
      <form className="glassmorphism w-1/2 m-8 bg-white w-1/2 flex flex-col p-8 z-10">
        <label
          htmlFor="name"
          className="mb-2 w-full flex items-center"
        >
          <span className="p-2 w-1/3">Nome do Dom:</span>
          <input
            type="text"
            value={name}
            id="name"
            className="w-2/3 p-2 border"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="button"
            className="ml-2 p-2 border"
            onClick={verifyName}
          >
            Verificar
          </button>
        </label>
        <div className="w-full text-center">
          <p className="my-2">{vName}</p>
        </div>
        <label
          htmlFor='rank'
          className="p-2 w-full flex items-center"
        >
          <span className="w-1/3"> Rank / Posto:</span>
          <select
            id="rank"
            className="w-2/3 p-2 border text-center"
            onChange={(e) => setRank(e.target.value)}
          >
            <option disabled selected>Selecione um Posto</option>
            <option value={1}>Cliath (1)</option>
            <option value={2}>Fostern (2)</option>
            <option value={3}>Adren (3)</option>
            <option value={4}>Athro (4)</option>
            <option value={5}>Ancião (5)</option>
            <option value={6}>Lendário (6)</option>
          </select>
        </label>
        <p className="p-2 pb-5 w-1/3">Fonte:</p>
        {
          listOfFonts.map((fonts, index) => (
            <div key={index} className="bg-gray-200 my-2 p-2 flex">
              <div className="w-10/12">
                <p>Livro: { fonts.book }</p>
                <p>Página: { fonts.page }</p>
                <p>Edição: { fonts.edition }</p>
              </div>
              <button
                type="button"
                className=""
                onClick={ () => deleteFont(fonts) }
                >
                Excluir
              </button>
            </div>
          ))
        }
        <div className="pl-4 bg-gray-200 p-4">
          <label
              htmlFor="book"
              className="p-2 w-full flex items-center"
            >
              <span className="w-1/3">Livro</span>
              <select
                id="book"
                className="w-2/3 p-2 border text-center"
                onChange={(e) =>  setBook(e.target.value)}
              >
                <option disabled selected>Selecione um Livro</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </label>
          <label
            htmlFor="page"
            className="p-2 w-full flex items-center"
          >
          <span className="w-1/3">Página</span>
            <input
              className="w-2/3 p-2 border text-center"
              type="number"
              id="page"
              value={page}
              onChange={(e) => setPage(e.target.value)}
            />
          </label>
          <label
            htmlFor="edition"
            className="p-2 w-full flex items-center"
          >
            <span className="w-1/3">Edição:</span>
            <select
              id="edition"
              className="w-2/3 p-2 border text-center"
              onChange={(e) =>  setEdition(e.target.value)}
            >
              <option disabled selected>Selecione uma Edição</option>
              <option value="W20">W20</option>
              <option value="Revisada">Revisada</option>
              <option value="Segunda">Segunda</option>
            </select>
          </label>
        </div>
        <button
          type="button"
          className="p-4 bg-gray-200 my-2"
          onClick={addFont}
        >
          Adicionar
        </button>
        <span className="w-1/3 my-4">Pertencente a:</span>
        <div className="flex flex-col">
            {
            listOfBelongs.map((bel, index) => (
              <div key={index} className="bg-gray-200 m-1 p-2 flex">
                <div className="w-10/12 mr-4">
                  { bel }
                </div>
                <button
                  type="button"
                  className=""
                  onClick={ () => deleteBelong(bel) }
                  >
                  Excluir
                </button>
              </div>
            ))
          }
        </div>
        <label
          htmlFor="belong"
          id="idBelong"
          className="p-2 w-full flex items-center">
          <select
            id="selectBelong"
            className="w-2/3 p-2 border text-center"
            onChange={(e) => setBelong(e.target.value)}
          >
            <option disabled value={0} selected>Selecione</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
          <button
            type="button"
            className="ml-2 p-2 border w-1/3"
            onClick={addNewBelong}
          >
            Adicionar
          </button>
        </label>
        <label htmlFor="textPtBr" className="p-2 flex flex-col">
          <span>Texto Traduzido:</span>
          <textarea
            className="w-full border p-2"
            id="textPtBr"
            value={textPtbr}
            onChange={ (e) => setTextPtBr(e.target.value) }
          />
        </label>
        <label htmlFor="systemPtBr" className="p-2 flex flex-col">
          <span>Sistema Traduzido:</span>
          <textarea
            className="border p-2"
            id="systemPtBr"
            value={systemPtbr}
            onChange={ (e) => setSystemPtBr(e.target.value) }
          />
        </label>
        <label
          htmlFor="TextOriginal"
          className="p-2 flex flex-col"
        >
          <span>Texto original:</span>
          <textarea
            id="TextOriginal"
            className="border p-2"
            value={textOriginal}
            onChange={ (e) => setTextOriginal(e.target.value) }
          />
        </label>
          <label
            htmlFor="systemOrig"
            className="p-2 flex flex-col"
          >
            <span>Sistema original:</span>
            <textarea
              id="systemOrig"
              className="border p-2"
              value={systemOriginal}
              onChange={ (e) => setSystemOriginal(e.target.value) }
            />
          </label>
          <button
            type="button"
            className="p-4 bg-gray-200 my-2"
            onClick={addGift}
          >
            Adicionar dom
          </button>
      </form>
    </div>
  );
}

// "name": "Mais um pedido de socorro",
// 	"rank": 4,
//   "font": [
// 		{
// 		"book": "book of spirits",
// 		"page": 2,
// 		"edition": "revised"
// 		}
// 	],
// 	"belong": ["get of fenris"],
//   "textPtbr": "Esse dom é muito louco",
//   "systemPtbr": "Você fica muito louco",
//   "textOriginal": "This gift is very crazy",
//   "systemOriginal": "You turns so very crazy"