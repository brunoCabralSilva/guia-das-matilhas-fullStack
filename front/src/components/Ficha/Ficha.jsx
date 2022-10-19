import Attributes from "./Attributes";

export default function Ficha() {
  return (
    <div>
      <Attributes />
      <div className="w-full flex items-center justify-center">
      <button
        className="px-6 py-3 bg-black text-white m-4"
      >
        Salvar
      </button>
      </div>
    </div>
  );
}