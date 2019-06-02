'use strict';

{
  class Panel {
    constructor() {
      this.el = document.createElement('li');
      this.el.classList.add('pressed');
      this.el.addEventListener('click', () => {
        this.check();
      });
    }

    getEl() {
      return this.el;
    }

    activate(num) {
      this.el.classList.remove('pressed');
      this.el.textContent = num;
    }

    check() {
      if (currentNum === parseInt(this.el.textContent, 10)) {
        this.el.classList.add('pressed');

        if (currentNum === 20) {
          clearTimeout(timeoutId);
        }
        currentNum++;
      }
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

  function runTimer() {
    const timer = document.getElementById('timer');
    timer.textContent = ((Date.now() - startTime) / 1000).toFixed(2);

    timeoutId = setTimeout(() => {
      runTimer();
    }, 10);
  }

  const board = new Board();

  let currentNum = 1;
  let startTime;
  let timeoutId;

  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    board.activate();

    startTime = Date.now();
    runTimer();
  });
}
