import Points from './Points';

export default function BlocoHabilidade({name, inepto, list}) {
  return (
    <div>
      <h1 className="pt-10 px-4 font-bold w-full text-center">{ name }</h1>
      <p className="w-full text-center pb-5">{ inepto }</p>
      <div className="w-full">
        {
          list.map((habilidade, index) => (
            <div className="flex w-full items-center" key={index}>
              <p className="pl-3 w-1/2">{habilidade}:</p>
              <Points type="habilidade w-1/2" />
            </div>
          ))
        }
      </div>
    </div>
  );
}