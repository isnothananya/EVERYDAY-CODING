const texts = ['Feel the morning', 'on my face' , 'Ain’t a pill', 'that I didn’t take', 'Just a lifetime' ,'could say...' ,'it’s been a long day'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if(count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    // slice(start,end) = medthod to cut-off

    document.querySelector('.typing').textContent = letter
    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type,300);




})();
//  for run fn imediently 