import Points from './Points';

export default function Attributes() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center w-full pb-10">
        <h1 className="pt-4 px-4 text-4xl font-bold">Atributos</h1>
        <div className="flex flex-col items-center w-full pb-5">
        <p>
          Atributos 5/4/3, uma quantidade para cada coluna - O primeiro ponto não conta
        </p>
      </div>
        <div className="flex flex-col w-full">
          
          <div className="flex w-full justify-around">
            {/* <p className="w-2/12 text-right pr-3">Poder</p> */}
            <div className="flex items-center justify-between w-1/5">
              <p>Inteligência:</p>
              <Points type="Inteligência" />
            </div>
            <div className="flex items-center justify-between w-1/5">
              <p>Força:</p>
              <Points type="Força" />
            </div>
            <div className="flex items-center justify-between w-1/5">
              <p>Presença:</p>
              <Points type="Presença" />
            </div>
          </div>
          <div className="flex w-full justify-around">
            {/* <p className="w-2/12 text-right pr-3">Refinamento</p> */}
            <div className="flex items-center justify-between w-1/5">
              <p>Raciocínio:</p>
              <Points type="Raciocínio" />
            </div>
            <div className="flex items-center justify-between w-1/5">
              <p>Destreza:</p>
              <Points type="Destreza" />
            </div>
            <div className="flex items-center justify-between w-1/5">
              <p className="pr-3">Manipulação:</p>
              <Points type="Manipulação" />
            </div>
          </div>
          <div className="flex w-full justify-around">
            {/* <p className="w-2/12 text-right pr-3">Resistência</p> */}
            <div className="flex items-center justify-between w-1/5">
              <p>Perseverança:</p>
              <Points type="Perseverança" />
            </div>
            <div className="flex items-center justify-between w-1/5">
              <p>Vigor:</p>
              <Points type="Vigor" />
            </div>
            <div className="flex items-center justify-between w-1/5">
              <p>Autocontrole:</p>
              <Points type="Autocontrole" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}