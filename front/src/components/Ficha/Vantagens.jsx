import Points from './Points';

export default function Vantagens() {
  const list=[1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <p className="py-4 text-2xl font-bold">Vantagens</p>
      <div>
        {
          list.map(() => (
            <div className="flex w-full items-center justify-between">
              <input
                type="text"
                className="pl-3 w-full"
              />
              <Points type="habilidade" />
            </div>
          ))
        }
      </div>
    </div>
  );
}