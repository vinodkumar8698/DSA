// function factorial(n) {
//     if (n === 0 || n == 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log("factorial number of given number is", factorial(5))

// // indirect recursion
// let applePurchased = 0;
// function buyApple(m) {
//     if (m > 0) {
//         buyMore(m)
//     } else {
//         console.log("purchased enough apples and don't have money", applePurchased)
//     }
// }

// function buyMore(m) {
//     applePurchased++;
//     console.log("remaining amount", m - 5)
//     buyApple(m - 5);
// }

// buyApple(100)

let arr = [1, 5, 4, 2, 6, 8]

let temp;

function reverseArr(data, start, end) {
    try {
        if (start <= end) {
            temp = data[start];
            data[start] = data[end]
            data[end] = temp;
            reverseArr(data, start + 1, end - 1)
        }
        return data
    } catch (error) {
        console.log(" reverseArr ~~ error:", error)
    }
}

console.log(reverseArr(arr, 0, arr.length - 1))