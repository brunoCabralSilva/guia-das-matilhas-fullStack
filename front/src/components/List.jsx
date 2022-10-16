import React from 'react';

export default class List extends React.Component {
  render() {
    const {
      list,
      select,
      type,
      itemsSelected,
    } = this.props;

    const divList = list.map((element) => {
      const {
        imagemGlifoBranco,
        imgGlifoSemFundo,
        imgGlifo,
        nome,
        posto,
      } = element;
      if (type === "Augúrios") {
        return (
          <div
            className={
              itemsSelected.includes(nome)
              ? "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-boca bg-cover p-2 m-2"
              : "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-night bg-cover p-2 m-2"
            }
            name={nome} onClick={select}
          >
            <img
              src={require(`../images/auspices/${imagemGlifoBranco}`)}
              alt={nome}
              name={nome}
              className="object-contain sm:h-32 h-28 p-2"
            />
            <p name={nome} className="leading-6 pb-2 text-sm sm:text-xl font-bold w-90% text-center">{nome}</p>
          </div>
        );
      }

      if (type === "Tribos") {
        return (
          <div
            className={
              itemsSelected.includes(nome)
              ? "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-boca bg-cover p-2 m-2"
              : "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-night bg-cover p-2 m-2"
            }
            name={nome} onClick={select}
          >
            <img
              src={require(`../images/trybes/${imgGlifoSemFundo}`)}
              className="object-contain sm:h-32 h-28 p-2"
              alt={nome}
              name={nome}
            />
            <p className="leading-6 pb-2 text-sm sm:text-base font-bold w-95% text-center">{nome}</p>
          </div>
        );
      }

      if (type === 'Postos') {
        return (
          <div
            className={
              itemsSelected.includes(posto)
              ? "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-boca bg-cover p-2 m-2"
              : "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-night bg-cover p-2 m-2"
            }
            name={nome} onClick={select}
          >
            <p name={nome} className="leading-6 pb-2 text-sm sm:text-xl font-bold w-95% text-center">{posto}</p>
          </div>
        );
      }

      if (type === 'Raças') {
        return (
          <div
            className={
              itemsSelected.includes(nome)
              ? "w-full h-40 mob-5:w-40% mob-4:w-32% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-boca bg-cover p-2 m-2"
              : "w-full h-40 mob-5:w-40% mob-4:w-32% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-night bg-cover p-2 m-2"
            }
            name={nome} onClick={select}
          >
            <img
              src={require(`../images/breeds/${imgGlifo}`)}
              className="object-contain sm:h-32 h-28 p-2"
              alt={nome}
              name={nome}
            />
            <p name={nome} className="leading-6 pb-2 text-sm sm:text-xl font-bold w-95% text-center">{nome}</p>
          </div>
        );
      }

      return (
        <div
            className={
              itemsSelected.includes(element)
              ? "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-boca bg-cover p-2 m-2"
              : "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-night bg-cover p-2 m-2"
            }
            name={nome} onClick={select}
          >
          <p name={element} className="leading-6 pb-2 text-sm sm:text-xl font-bold w-95% text-center">{element}</p>
        </div>
      );
    });

    return (
      <div className="flex flex-row flex-wrap justify-start">
        {divList}
      </div>
    );
  }
}