import Attributes from './Attributes';
import Habilidades from './Habilidades';
import OutrasCaracteristicas from './OutrasCaracteristicas';

export default function Ficha() {
  return (
    <form>
      <Attributes />
      <div className="flex w-full">
        <div className="w-1/3 border-r-4 border-black m-10">
          <Habilidades />
        </div>
        <div className="w-2/3">
          <OutrasCaracteristicas />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
      <button
        className="px-6 py-3 bg-black text-white m-4"
      >
        Salvar
      </button>
      </div>
    </form>
  );
}