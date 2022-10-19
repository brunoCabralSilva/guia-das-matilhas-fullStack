import Points from './Points';
import Vantagens from './Vantagens';
import Desvantagens from './Desvantagens';
import Ataque from './Ataque';
import Equipamento from './Equipamento';
import Experiencia from './Experiencia';
import Vitalidade from './Vitalidade';
import ForcaDeVontade from './ForcaDeVontade';
import Essencia from './Essencia';
import InstintoPrimitivo from './InstintoPrimitivo';
import Harmonia from './Harmonia';
import Renome from './Renome';

export default function OutrasCaracteristicas() {
  return (
    <div className="w-full">
      <h1 className="p-4 text-xl font-bold">Outras Características</h1>
      <div className="flex">
        <div className="w-1/2">
            <Vantagens />
            <Desvantagens />
            <Ataque />
            <Equipamento />
            <Experiencia />
        </div>
        <div className="w-1/2">
            <Vitalidade />
            <ForcaDeVontade />
            <Essencia />
            <InstintoPrimitivo />
            <Harmonia />
            <Renome />
        </div>
      </div>
    </div>
  );
}