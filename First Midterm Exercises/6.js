// Задача - MK
//
// За дадени две низи arr1 и arr2 треба да се врати нова низа mergedArray.
//
//     За сите објекти кои присутни во влезните низи (аrr1 и arr2) содржат поле id кое е цел број.  Новодобиената низа (meredArray)
// се добива така што се спојуваат двете низи (arr1 и arr2) врз основа на полето id. Должината на новодобиената низа (mergedArray) треба да биде составена од објекти кои имаат уникатна вредност за id полето, сортирани во растечки редослед врз оснва на клучот.
//
//     Ако објект со соодветно id постои во едната низа а не во другата, треба тој објект да се вклучи во резултантната низа.
//
//     Доколку во двете низи има објекти со исто вредност за id полето, треба да се спојат останатите полиња (props) од објектите на следниот начин:
//
//     ако едно поле постои во едниот објект а не во другиот, таа вредност треба да биде вклучена во резултантниот објект
// ако едно поле постои во двата објекти, треба да се земе вредноста од објектот кој припаѓа на arr2.
//
//     ЗАБЕЛЕШКА: Забрането е користење на останати библиотеки или веќе готови функции
// Task - EN
//
// Given two arrays arr1 and arr2, return a new array mergedArray.
//     All the objects in each of the two inputs arrays will contain an id field that has an integer value. meredArray is an array formed by merging arr1 and arr2 based on their id key. The length of mergedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.
//
//     If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.
//
//     If two objects share an id, their properties should be merged into a single object:
//
//     If a key only exists in one object, that single key-value pair should be included in the object.
//     If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
//
//     Пример/Example:
//
// Input:
//     arr1 = [
//         {"id": 1, "x": 2, "y": 3},
//         {"id": 2, "x": 3, "y": 6}
//     ],
//         arr2 = [
//             {"id": 2, "x": 10, "y": 20},
//             {"id": 3, "x": 0, "y": 0}
//         ]
// Output:
//     [
//         {"id": 1, "x": 2, "y": 3},
//         {"id": 2, "x": 10, "y": 20},
//         {"id": 3, "x": 0, "y": 0}
//     ]
//
// Објаснување: Објектите со id=1 и id=3 се вклучени во резултантната низа без модификации. Двата објекти со id=2 се спојуваат.
//     Вредностите на полињата од arr2 ги пребришуваат вредностите за истите полиња од arr1.
//
//     Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction.
//     The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var merge = function(arr1, arr2) {
    let arr3 = [];
    let i = 0;
    let j = 0;
    let n = arr1.length;
    let m = arr2.length;

    while (i < n && j < m) {

        if (arr1[i].id < arr2[j].id) {
            arr3.push(arr1[i]);
            i++;
        } else if (arr1[i].id > arr2[j].id) {
            arr3.push(arr2[j]);
            j++;
        } else {
            arr3.push({...arr1[i], ...arr2[j]});
            i++;
            j++;
        }
    }

    while (i < n) {
        arr3.push(arr1[i]);
        i++;
    }

    while (j < m) {
        arr3.push(arr2[j]);
        j++;
    }

    return arr3;
};
