import FormData from './FormData';

export default function Forms() {
  return(
    <div className="w-full flex">
      <div className="w-1/5 text-center">
        Hominídeo
        <p>Tamanho: 0</p>
        <p>Defesa: 0</p>
        <p>Iniciativa: 0</p>
        <p>Desl: </p>
        <p>Blindagem: 0</p>
        <p>Percepção: 0</p>
      </div>
      <div className="w-1/5 text-center">
        Glabro
        <FormData />
        <div className="text-center px-8">
          Induz Delírio: observadores têm 4 dados extras no teste de Força de Vontade para resistir.
        </div>
      </div>
      <div className="w-1/5 text-center">
        Crinos
        <FormData />
        <div className="text-center px-8">
        Fúria. Induz Delírio total. Ignoram-se penalidades devidas a ferimentos, nada de testes de inconsciência. -2 para resistir à Fúria Mortal. Provoca dano letal. Falha na maioria dos testes Mentais e Sociais.
        </div>
      </div>
      <div className="w-1/5 text-center">
        Hispo
        <FormData />
        <div className="text-center px-8">
        Induz Delírio: observadores têm 4 dados extras no teste de Força de Vontade para resistir. Provoca dano letal.
        </div>
      </div>
      <div className="w-1/5 text-center">
        Lupino
        <FormData />
        <div className="text-center px-8">
          Mordida provoca dano letal
        </div>
      </div>
    </div>
  );
}