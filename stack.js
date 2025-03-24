// let arr = [];
// let currentSize = arr.length; // current size is 0
// let maxSize = 10;

// function push(newVal) {
//     if (currentSize >= maxSize) {
//         console.log('Stack is full, you can"t add more values');
//         return;
//     } else {
//         arr[currentSize] = newVal;
//         currentSize++;
//         console.log("after pushing values: arr, arr.length: " + arr, arr.length);
//     }
// }

// function pop() {
//     if (currentSize <= 0) {
//         console.log('Stack is empty, you can"t remove values');
//         return;
//     } else {
//         currentSize--;
//         arr.length = currentSize
//     }
// }

// push(23)
// push(45)
// push(67)
// push(89)
// push(101)
// pop()
// pop()
// pop()

//  reverse the string

// let str = 'vinodkumar';


// function reverseString(str) {
//     let arrStr = str.split("");
//     for (let i = arrStr.length - 1; i >= 0; i--) {
//         console.log("reverseString ~~ arrStr[i]:", arrStr[i])
//         push(arrStr[i])
//     }
// }
// reverseString(str)
// console.log("after popping values: ", arr.join(""))


// Stack using class 

// class Stack {
//     data = [];
//     currentSize;
//     maxSize;
//     constructor(size) {
//         this.currentSize = this.data.length;
//         this.maxSize = size;
//     }
//     push(val) {
//         if (this.currentSize > this.maxSize) {
//             console.log("Stack is full");
//         } else {
//             this.data[this.currentSize] = val;
//             this.currentSize++;
//         }

//     }
//     pop() {
//         if (this.currentSize <= 0) {
//             console.log("Stack is empty");
//         } else {
//             this.currentSize--;
//             this.data.length = this.currentSize;
//         }
//     }
//     display() {
//         console.log("stack is ", this.data)
//     }
// }

// let stack1 = new Stack(10)
// stack1.push(20)
// stack1.push(30)
// stack1.push(40)
// stack1.display()


