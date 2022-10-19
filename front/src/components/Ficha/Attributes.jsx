import Points from './Points';

export default function Attributes() {
  return (
    <form className="w-full">
      <div className="flex flex-col items-center">
        <h1 className="p-4 text-xl font-bold">Atributos</h1>
        <div className="flex-col w-full">
          <div className="flex w-full">
            <p className="w-2/12 text-right pr-3">Poder</p>
            <p className="pl-3 w-1/12">Inteligência:</p>
            <Points type="Inteligência" />
            <p className="pl-3 w-1/12">Força:</p>
            <Points type="Força" />
            <p className="pl-3 w-1/12">Presença:</p>
            <Points type="Presença" />
          </div>
          <div className="flex w-full">
            <p className="w-2/12 text-right pr-3">Refinamento</p>
            <p className="pl-3 w-1/12">Raciocínio:</p>
            <Points type="Raciocínio" />
            <p className="pl-3 w-1/12">Destreza:</p>
            <Points type="Destreza" />
            <p className="pl-3 w-1/12">Manipulação:</p>
            <Points type="Manipulação" />
          </div>
          <div className="flex w-full">
            <p className="w-2/12 text-right pr-3">Resistência</p>
            <p className="pl-3 w-1/12">Perseverança:</p>
            <Points type="Perseverança" />
            <p className="pl-3 w-1/12">Vigor:</p>
            <Points type="Vigor" />
            <p className="pl-3 w-1/12">Autocontrole:</p>
            <Points type="Autocontrole" />
          </div>
        </div>
      </div>
    </form>
  );
}