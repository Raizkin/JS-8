// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

// Спочатку через for

for (let i = 0; i < friends.length; i += 1) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ',';
  }
}
console.log(string);


// join

const stringing = friends.join(',');
console.log(stringing); 


// Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5', 'Карточка-6'];

//Видалити

let cardToRemove = cards.splice(2, 1);

console.log(cards);

//Додати

const cardToInsert = cards.push('Карточка-6');

console.log(cards);

//Оновити

// я не зрозумів як