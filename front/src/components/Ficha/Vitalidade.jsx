export default function Vitalidade() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="mt-6 flex flex-col items-center text-2xl font-bold">
      <p className="pb-2">Vitalidade</p>
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