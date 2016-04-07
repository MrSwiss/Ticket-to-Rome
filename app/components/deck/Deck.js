import './deck.css';
import { qs, addClass, removeClass } from '../../libs/dom';
import { listen } from '../../libs/events';
import IO from '../communications/IO';
import Message from '../communications/Message';
//import PubSub from '../communications/PubSub';
import Card from '../card/Card';
import Player from '../player/Player';


export default class Deck {


  constructor(gameId, cardsCount) {
    this.game = gameId;
    this.counter = cardsCount;

    this.el = { deck: document.getElementById('deck') };
    this.el.counter = qs('span', this.el.deck);
    this.el.counter.textContent = this.counter;

    listen(this.el.deck, 'click', this.draw);
  }


  update = cardsCount => {
    this.counter = cardsCount;
    this.el.counter.textContent = this.counter;
    if (this.counter) {
      removeClass(this.el.deck, 'empty');
    } else {
      addClass(this.el.deck, 'empty');
    }
  }


  draw = () => {
    if (Player.active && this.counter > 1) {
      Player.setActive(false);
      IO.emit('Deck.draw', { id: this.game })
        .then(response => {
          this.update(this.counter - 1);
          console.log(response.body);
          Player.hand.addCard(new Card(response.body));
          console.log(Player.hand);
          Message.success(response.message);
          Player.setActive(true);
        })
        .catch(response => {
          Message.error(response.error);
          Player.setActive(true);
        });
    }
  }

}
