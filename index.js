"use strict";

// 1.
// написати скрипт (можна функцію можна без), який виводить індекс максимального елемента в масиві. Якщо максимальних елементів декілька(значення однакові) - виводить індекс останнього
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5

const arrNums = [1, 9, 5, 6, 7, 9, 4, 6];
function checkKeys(array) {
  let maxElem = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[maxElem + 1]) {
      maxElem = array[i];
    }
  }
  return array.lastIndexOf(maxElem);
}
console.log(checkKeys(arrNums));
