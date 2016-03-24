import './card.css';
import uuid from 'node-uuid';
import { create } from '../../libs/dom';


/** Class representing a card. */
export default class Card {


  /**
   * Create a card.
   * @param {string} type The card type.
   */
  constructor(type) {
    this.id = uuid.v4();
    this.type = type;
    this.setupElement();
  }


  /**
   * Create the card element.
   */
  setupElement() {
    this.element = create('div', {
      id: this.id,
      class: `card ${this.type}`,
    });
  }

}
