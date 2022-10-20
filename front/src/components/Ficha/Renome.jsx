import Points from './Points';
export default function Renome() {
    return (
      <div className="flex flex-col items-center mt-10">
        Renome
        <div className="flex w-full items-center">
          <p className="w-1/2 text-center">Glória</p>
          <Points />
        </div>
        <div className="flex w-full items-center">
        <p className="w-1/2 text-center">Honra</p>
          <Points />
        </div>
        <div className="flex w-full items-center">
        <p className="w-1/2 text-center">Pureza</p>
          <Points />
        </div>
        <div className="flex w-full items-center">
        <p className="w-1/2 text-center">Sabedoria</p>
          <Points />
        </div>
        <div className="flex w-full items-center">
        <p className="w-1/2 text-center">Sagacidade</p>
          <Points />
        </div>
      </div>
    );
  }