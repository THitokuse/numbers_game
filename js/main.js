'use strict';

{
  class Panel {
    constructor() {
      this.el = document.createElement('li');
      this.el.classList.add('pressed');
    }

    getEl() {
      return this.el;
    }

    activate(num) {
      this.el.classList.remove('pressed');
      this.el.textContent = num;
    }
  }

  class Board {
    constructor() {
      this.panels = [];
      for (let i = 0; i < 20; i++) {
        this.panels.push(new Panel());
      }
      this.setup();
    }

    setup() {
      const board = document.getElementById('board');
      this.panels.forEach(panel => {
        board.appendChild(panel.getEl()); // カプセル化
      });
    }

    activate() {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      this.panels.forEach(panel => {
        const num = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
        panel.activate(num);
      });
    }
  }

  const board = new Board();

  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    board.activate();
  });
}
