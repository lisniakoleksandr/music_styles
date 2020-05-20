/*Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.*/


var styles= ['Djazz', 'Blues',];


styles.push=('Rock_n_Roll');

console.log(styles);

console.log(styles.shift() );

styles.unshift('Rap', 'Raggy');

console.log(styles);