import CardDeck from "../lib/cardDeck";
import React from "react";

interface ICardProps extends React.PropsWithChildren {
}

const cardView: React.FC<ICardProps> = props => {
  new CardDeck();
  const getCards = () => {
    const cardDeck = new CardDeck();
    return cardDeck.getCards(5);
  };

  const cards = getCards();


  if (cards.length === 0){
    return <button onClick={getCards}>Раздать карты</button>;
  }

  return (
    <div className="playingCards faceImages">
    <span className={`card rank-${cards[0].rank} ${cards[0].suit}`.toLowerCase()}>
      <span className={cards[0].rank}>{cards[0].rank}</span>
      <span className={cards[0].suit}>{cards[0].suit}</span>
    </span>
    <span className={`card rank-${cards[1].rank} ${cards[1].suit}`.toLowerCase()}>
      <span className={cards[1].rank}>{cards[1].rank}</span>
      <span className={cards[1].suit}>{cards[1].suit}</span>
    </span>
    <span className={`card rank-${cards[2].rank} ${cards[2].suit}`.toLowerCase()}>
      <span className={cards[2].rank}>{cards[2].rank}</span>
      <span className={cards[2].suit}>{cards[2].suit}</span>
    </span>
    <span className={`card rank-${cards[3].rank} ${cards[3].suit}`.toLowerCase()}>
      <span className={cards[3].rank}>{cards[3].rank}</span>
      <span className={cards[3].suit}>{cards[3].suit}</span>
    </span>
    <span className={`card rank-${cards[4].rank} ${cards[4].suit}`.toLowerCase()}>
      <span className={cards[4].rank}>{cards[4].rank}</span>
      <span className={cards[4].suit}>{cards[4].suit}</span>
    </span>
      <div>
        <button onClick={getCards}>Раздать карты</button>
      </div>
    </div>
  );
};

export default cardView;