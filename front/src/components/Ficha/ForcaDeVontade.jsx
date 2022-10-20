export default function ForcaDeVontade() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="mt-6 flex flex-col items-center text-2xl font-bold">
      <p className="p-2">Força de Vontade</p>
      <div className="flex">
        {
          list.map((li, index) => (
            <div
              key={index}
              className={`m-1 rounded-full w-5 h-5 border border-black`}
            />  
          ))
        }
      </div>
      <div className="flex">
        {
          list.map((li, index) => (
            <div
              key={index}
              className={`m-1 w-5 h-5 border border-black`}
            />  
          ))
        }
      </div>
    </div>
  );
}