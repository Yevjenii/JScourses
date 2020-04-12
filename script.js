'use strict';

let collectionBooks = document.querySelectorAll('div');
collectionBooks[0].before(collectionBooks[1]);
collectionBooks[5].after(collectionBooks[2]);
collectionBooks[4].after(collectionBooks[3]);
//Два варианта удаления рекламы

// let advertising = document.querySelector('.adv');
// advertising.remove();

for (let i = 0; i < collectionBooks.length; i++) {
    if(collectionBooks[i].className != 'book') {
        collectionBooks[i].remove();
    }    
}

document.body.style.backgroundImage = ('url(../10/image/you-dont-know-js.jpg)');

let links = document.querySelectorAll('a'); 
links[2].textContent = 'Книга 3. this и Прототипы Объектов';

const collectionLi = document.querySelectorAll('li');

collectionLi[9].after(collectionLi[8]);
collectionLi[9].after(collectionLi[12]);
collectionLi[12].after(collectionLi[14]);
collectionLi[15].after(collectionLi[8]);

collectionLi[40].after(collectionLi[38]);
collectionLi[37].after(collectionLi[45]);
collectionLi[43].after(collectionLi[41]);

const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
collectionBooks[2].childNodes[3].appendChild(newElem);
newElem.after(collectionLi[56]);