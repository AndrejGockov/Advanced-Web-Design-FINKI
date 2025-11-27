//     Да се напише функција со име getDoubleN која прима број n и враќа нова функција што не прима аргументи.
//
//     Секојпат кога оваа вратена функција ќе се повика, таа треба да врати двојна вредност од претходниот повик.
//     При првото повикување, функцијата треба да ја врати двојната вредност на n.
//
//     ---
//
//     Write a function named getDoubleN that takes a number n and returns a new function that takes no arguments.
//
//     Every time this second function is invoked, it should return the double of the previous invocation. The first invocation should return the double on n.
//
//     For example:
//     Test:
//     const test1 = getDoubleN(3);
//     console.log(test1());
//     console.log(test1());
//     console.log(test1());
//
//     Result:
//     6
//     12
//     24
//
//     Test:
//
//     const test2 = getDoubleN(5);
//     console.log(test2());
//     console.log(test2());
//     console.log(test2());
//
//     Result:
//     10
//     20
//     40

function getDoubleN(num){
    return function(){
        num *= 2;
        return num;
    };
}