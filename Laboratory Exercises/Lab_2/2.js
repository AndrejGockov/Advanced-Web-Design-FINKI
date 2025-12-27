// Број во низа е балансиран ако збирот на броевите пред него е еднаков на збирот на броевите по него.
//
//     За првиот елемент, сметајте го збирот пред него како 0.
// За последниот елемент, сметајте го збирот по него како 0.
//
// Напиши JavaScript функција countBalancedNumbers што брои колку балансирани броеви постојат во низата.
//
//     Напомена:
//
// Доколку задачата се реши итеративно, следуваат максимум 50% од предвидените поени.
//     Доколку задачата се реши со употреба на методите од array класата (пр. map, filter, reduce, etc.), без употреба на циклуси, тогаш следат максумум 90% од поените.
//     Доколку задача се реши со употреба на само една метода од array класата (пр. само filter, само reduce, итн. ) и без употреба на циклуси, може да добиете максимум 100% од поените.
//
//     = EN =======================================
//
//     A number in an array is balanced if the sum of numbers before it equals the sum of numbers after it.
//
//     For the first element, consider the sum before it as 0.
//
// For the last element, consider the sum after it as 0.
//
// Write a JavaScript function countBalancedNumbers that counts how many balanced numbers exist in the array.
//
//     Note:
//
// If the task is solved iteratively, a maximum of 50% of the available points will be awarded.
//     If the task is solved using the methods of the array class (e.g. map, filter, reduce, etc.), without using cycles, then a maximum of 90% of the points will be awarded.
//     If a task is solved using only one method from the array class (e.g. only filter, only reduce, etc.) and without using loops, you can get a maximum of 100% of the points.
//
//
// For example:
// Test:
// console.log(countBalancedNumbers([1, 2, 3, 3]));
//
// 	Result:
// 	1


function countBalancedNumbers(arr) {
    return arr.reduce((state, value, i) => {
        state.prefix += value;

        const suffix = state.total - state.prefix;

        if (state.prefix - value === suffix)
            state.count++;

        return state;
    }, {
        total: arr.reduce((a, b) => a + b, 0),
        prefix: 0,
        count: 0
    }).count;
}

// Normal Way:
// function countBalancedNumbers(arr){
//     let ans = 0;
//     let prefix = 0;
//     let suffix = 0;
//
//     arr.forEach(a => suffix += a);
//
//     arr.forEach(elem => {
//         suffix -= elem;
//
//         if(prefix == suffix)
//             ans++;
//
//         prefix += elem;
//     });
//
//     return ans;
// }