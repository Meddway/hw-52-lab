import Card from "./card";

class CardDeck{
  private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
  private readonly suits = ['♦', '♥', '♣', '♠'];
  public deck: Card[] = [];

  constructor() {
    this.suits.forEach(suit =>{
      this.ranks.forEach(rank =>{
        const card = new Card(rank, suit);
        this.deck.push(card);
      });
    });
  }
  //
  getCard(): Card {
    const randomNumber = Math.floor(Math.random() * this.deck.length);
    let randomCard = this.deck.slice(randomNumber);
    return randomCard[0];
  }

  getCards(howMany: number): Card[]{
    let cards = []
    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard());
    }
    return cards
  };
}

export default CardDeck;
