import { useState } from 'react';
import context from './index';

export default function Provider({ children }) {
  //atributos
  const [inteligencia, setInteligencia] = useState(1);
  const [raciocinio, setRaciocinio] = useState(1);
  const [perseveranca, setPerseveranca] = useState(1);
  const [forca, setForca] = useState(1);
  const [destreza, setDestreza] = useState(1);
  const [vigor, setVigor] = useState(1);
  const [presenca, setPresenca] = useState(1);
  const [manipulacao, setManipulacao] = useState(1);
  const [autocontrole, setAutocontrole] = useState(1);

  //habilidades
  const [ciencias, setCiencias] = useState({ especializacao: '', valor: 0});
  const [erudicao, setErudicao] = useState({ especializacao: '', valor: 0});
  const [informatica, setInformatica] = useState({ especializacao: '', valor: 0});
  const [investigacao, setInvestigacao] = useState({ especializacao: '', valor: 0});
  const [medicina, setMedicina] = useState({ especializacao: '', valor: 0});
  const [ocultismo, setOcultismo] = useState({ especializacao: '', valor: 0});
  const [oficios, setOficios] = useState({ especializacao: '', valor: 0});
  const [politica, setPolitica] = useState({ especializacao: '', valor: 0});
  const [armamento, setArmamento] = useState({ especializacao: '', valor: 0});
  const [armasDeFogo, setArmasDeFogo] = useState({ especializacao: '', valor: 0});
  const [briga, setBriga] = useState({ especializacao: '', valor: 0});
  const [conducao, setConducao] = useState({ especializacao: '', valor: 0});
  const [dissimulacao, setDissimulacao] = useState({ especializacao: '', valor: 0});
  const [esportes, setEsportes] = useState({ especializacao: '', valor: 0});
  const [furto, setFurto] = useState({ especializacao: '', valor: 0});
  const [sobrevivencia, setSobrevivencia] = useState({ especializacao: '', valor: 0});
  const [astucia, setAstucia] = useState({ especializacao: '', valor: 0});
  const [empatia, setEmpatia] = useState({ especializacao: '', valor: 0});
  const [expressao, setExpressao] = useState({ especializacao: '', valor: 0});
  const [intimidacao, setIntimidacao] = useState({ especializacao: '', valor: 0});
  const [manha, setManha] = useState({ especializacao: '', valor: 0});
  const [persuacao, setPersuacao] = useState({ especializacao: '', valor: 0});
  const [socializacao, setSocializacao] = useState({ especializacao: '', valor: 0});
  const [tratoCAnimais, setTratoCAnimais] = useState({ especializacao: '', valor: 0});
 
  //renome
  const [gloria, setGloria] = useState(0);
  const [honra, setHonra] = useState(0);
  const [pureza, setPureza] = useState(0);
  const [sabedoria, setSabedoria] = useState(0);
  const [sagacidade, setSagacidade] = useState(0);

  //Outras Características
  const [vantagens, setVantagens] = useState([{ nome: '', valor: 0 }]);
  const [vitalidade, setForcaDeVitalidade] = useState([{ total: 0, utilizado: 0 }]);
  const [forcaDeVontade, setForcaDeVontade] = useState([{ total: 0, utilizado: 0 }]);
  const [essencia, setEssencia] = useState(0);
  const [instintoPrimitivo, setInstintoPrimitivo] = useState(0);
  const [harmonia, setHarmonia] = useState(0);

  //data
  const [desvantagens, setDesvantagens] = useState('');
  const [ataque, setAtaque] = useState('');
  const [equipamentos, setEquipamentos] = useState('');
  const [experiencia, setExperiencia] = useState(0);

  const exports = { 

  };

  return (
    <context.Provider value={{ exports }}>
      {children}
    </context.Provider>
  );
}