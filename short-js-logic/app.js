//reverse a number
function reverseString(str) {
    console.log(str.toString().split("").reverse().join(""));
}
reverseString(2333);

//get palindrome (the same backward as forward, e.g., madam)
function palindromeValue(palin) {
    let pLength = palin.length;
    let result;

    if (pLength == 1) {
        result = true;
    }
    for (let i = 0; i < pLength / 2; i++) {
        if (palin[i] === palin[pLength - 1 - i]) {
            result = true;
        } else {
            result = false
        }
    }

    if (result) {
        console.log("palindrome")
    } else {
        console.log("not palindrome")
    }
}
palindromeValue("madam");

// //factorialize value
// function factorialize(num) {
//     if (num === 0) {
//         return 1;
//     } else {
//         return num * factorialize(num - 1)
//     }
// }
// console.log(factorialize(5));

// //get prime number 
// function isPrime(num) {
//     if (num < 2) return false;
//     for (var i = 2; i < num; i++) {
//         if (num % i == 0)
//             return false;
//     }
//     return true;
// }

// for (let i = 0; i <= 100; i++) {
//     if (isPrime(i)) {
//         console.log(i)
//     }
// }

// //get divider
// function getDivider(n) {
//     let arr = [];
//     for (let i = 0; i <= n / 2; i++) {
//         if (n % i === 0 && !arr.includes(n / i)) {
//             {
//                 arr.push(i);
//                 arr.push(n / i);
//             }
//         }
//     }
//     arr = arr.sort((a, b) => a - b)
//     console.log(arr);
// }
// getDivider(20)

// //get the first overlapping chars
// function getChar(str) {
//     for (let i = 0; i < (str.length - 1); i++) {
//         if (str[i] === str[i + 1]) {
//             console.log(str[i]);
//         }
//     }
// }
// getChar('abcca');