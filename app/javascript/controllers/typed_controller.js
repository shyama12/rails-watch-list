import { Controller } from "@hotwired/stimulus";
import Typed from 'typed.js';

// Connects to data-controller="typed"
export default class extends Controller {
  connect() {
    var options = {
      strings: ['Make your own movie lists.', 'Share your lists with friends.'],
      typeSpeed: 40,
      loop: true,
      showCursor: false
    };

    var typed = new Typed(this.element, options);
  }
}
