import Points from './Points';
import BlocoHabilidade from './BlocoHabilidade';

export default function Habilidades() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="pt-4 px-4 text-xl font-bold w-full text-center">Habilidades</h1>
      <BlocoHabilidade
        name="Mentais"
        inepto="(-3 se inepto)"
        list={['Ciências', 'Erudição', 'Informática', 'Investigação', 'Medicina', 'Ocultismo', 'Ofícios', 'Política']}
      />
      <BlocoHabilidade
        name="Físicas"
        inepto="(-1 se inepto)"
        list={['Armamento', 'Armas de Fogo', 'Briga', 'Condução', 'Dissimulação', 'Esportes', 'Furto', 'Sobrevivência']}
      />
      <BlocoHabilidade
        name="Sociais"
        inepto="(-1 se inepto)"
        list={['Astúcia', 'Empatia', 'Expressão', 'Intimidação', 'Manha', 'Persuasão', 'Socialização', 'Trato c/ Animais']}
      />
    </div>
  );
}