import React from 'react';

export default class GiftExibition extends React.Component {
  state = {
    giftDescription: 'hidden',
  }

  enableDisableGift = () => {
    const { giftDescription } = this.state;
    if (giftDescription === 'hidden') {
      this.setState({ giftDescription: 'gift-found-content' });
    } else {
      this.setState({ giftDescription: 'hidden' });
    }
  }
  render() {
    const {
      source,
      arrayCategories,
      arraysubtypes,
      description,
      system,
      name,
      level,
    } = this.props;
    const { giftDescription } = this.state;
    return (
      <section className={
        giftDescription !== 'hidden'
          ? "w-full bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3"
          : "w-full sm:w-48% bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3"}
      >
        <div className='flex items-center justify-between' onClick={this.enableDisableGift}>
          <p
            className={
              giftDescription !== 'hidden'
                ? "w-full"
                : "w-full sm:w-1/2"
            }
            onClick={this.enableDisableGift}
          >
            <strong>{name} (Nível {level})</strong>
          </p>
          {
            giftDescription === 'hidden'
              ? <img
                alt="seta para baixo"
                src={require('../images/logos/arrow-down.png')}
                className="h-12 pr-4"
              />
              : <img
                alt="seta para cima"
                src={require('../images/logos/arrow-up.png')}
                className="h-12 pr-4"
              />
          }
        </div>
        {giftDescription !== 'hidden' && <hr className="my-3 w-9/12 sm:w-10/12 bg-white text-white" />}
        <div className={giftDescription}>
          <p className="my-2"><strong>Fonte:</strong> {source}, pg. X</p>
          <p className="my-2"><strong>Pertencente a: </strong>{arrayCategories}</p>
          {arraysubtypes.length === 0
            ? <p> </p>
            : <p className="my-2"><strong>Pré-Requisito: </strong>{arraysubtypes}</p>}
          <p className="my-2">Texto Traduzido</p>
          <p className="my-2"><strong>Sistema:</strong> Sistema Traduzido</p>
          <p className="my-2"><strong>Texto do livro:</strong></p>
          <p className="my-2">{description}</p>
          <p className="my-2"><strong>System:</strong> {system}</p>
        </div>
      </section >
    );
  }
}