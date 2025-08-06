


//! 1-masala

// function daraja (a = 2, b = 2){
//    let c =  a ** b
//    return c;
// }

// console.log(daraja(3, 5))

//! 2-masala

// function urta (x = 1, y = 2){
//    return [ Math.floor((x + y) / 2),  Math.floor(Math.sqrt(x * y))]
// }

// let son = urta(2,5);

// console.log( ` bu arifmitigi ${son} -- bu geomitirigi ${son}`)

//! 3-masala

// function sign(n){
//    if(n > 0 ){
//       return 1;
//    }
//    else if(n < 0){
//       return -1;
//    }
//    else if(n == 0){
//       return 0;
//    }
//    else{
//       console.log("bunday son yuq")
//    }
// }

// console.log(sign(-5))

//! 4-masala

// function numberOfRoots (a,b,c ){
//    let d = b ** 2 - 4 * a * c;

//    if(d > 0){
//       return 2;
//    }
//    else if(d == 0){
//       return 1;
//    }
//    else if (d < 0){
//       return 0;
//    }
//    else{
//       console.log("bunday son yuq")
//    }

// }

// let son = numberOfRoots(1,-6 ,9);

// console.log(son);

//! 5-masala

// function areaCircle(R){
//    let P = Math.PI;
//    let S = (P * R ** 2)
//    return S;
// }

// let son = areaCircle(3);
// console.log(son.toFixed(1))

//! 6-masala

// function sumRange(A, B) {
//    if(A >= B){
//       return 0;
//    }
//    else if(A < B){
//     let total = 0

//       for (let i = A; i <= B; i++) {
//          total += i
//         }
//         return total;
//    }
// }
// console.log(sumRange(8, 10))

//! 7-masala

// function calc(A, B, S){
//   S = '-'
//   let son = NaN
//   switch (S) {
//     case '*':
//        son = A * B
//       return son;
//       break;
//     case '/':
//        son = A / B
//       return son;
//       break;
//     case '+':
//        son = A + B
//        return son;
//        break;
//     case '-':
//        son = A - B
//       return son;
//       break;

//     default:
//       console.log("bunday naija niqlanmadi")
//       break;
//   }
// }
// console.log(calc(15, 5, '-'))

//! 8-masala

// function  isEven(K) {
//   if(K % 2 == 0){
//     return true
//   }
//   else{
//     return false
//   }
// }
// console.log(isEven(14))

//! 9-masala

// function  sortABC(a, b, c) {

//   if(a < b && a < c){
//     return "eng kichigi a" ,a
//   }
//   else if(b < a && b < c){
//     return "eng kichigi b"
//   }
//   else if(c < b && c < a){
//     return "eng kichigi c ",c
//   }
//   else{
//     return "bunday qiymat yuq"
//   }
// }

// console.log(sortABC(10,45,55))

//! 10-masala

// function  isPowerN(K, N) {
//    if(K > 0){
//       if(N ** 1 ||N ** 2 || N ** 3 || N ** 4 || N ** 4 || N ** 5 || N ** 6 || N ** 7 || N ** 8 || N ** 9 || N ** 10  == K){
//          return "ha N ni nechinchidar darajasi K ga teng"
//       }
//       else{
//          return "yuq teng emas"
//       }
//    }
//    else{
//       return "k soni 0 dan katta emas yokim dasturda qandaydir muammo bor"
//    }
// }
// let natija = isPowerN(1,0);
// console.log(natija)

//! 11-masala

// function isPrime(N) {
//    if(N <= 1){
//       return "son 1 dan kichik yokim boshqa muammo bor "
//    }

//    for (let i = 2; i <  N; i++) {
//          if(N % 2 === 0){
//             return false;
//          }
//    }

//    return true;
// }

// console.log(isPrime(3))

//! 12-masala

// function isPrime(N) {
//   if (N <= 1) return false;

//   for (let i = 2; i < N; i++) {
//     if (N % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function numberOfPrime(N) {
//   let count = 0;

//   for (let i = 1; i <= N; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(numberOfPrime(10));
// console.log(numberOfPrime(20));

//! 13-masala

// function digitNth(K, N) {
//    if(K > 0){
//       return N;
//    }
//    else if(K < 0){
//       return -1
//    }
// }

// console.log(digitNth(-15, 5 ) )

//! 14-masala

// function inverseNumber(K = 1 ,N = 1){

//    let natija = K.toString()

//    if(N > natija){
//       return -1
//    }
//    return parseInt(natija[N - 1])
// }

// console.log(inverseNumber(1, 15))    //! xat qayta ishlayman

//! 15-masala

// function isPalindrom(N) {
  
//   let natija = N;
//   let teskari = 0

//   while (N > 0) {
//     let oxirgi = N % 10
//     teskari = teskari *  10 + oxirgi
//      N = Math.floor(N / 10);
//   }
//   return natija === teskari
// }

// console.log(isPalindrom(11));

//! 16-masala

// function factorial(N) {
//     if (N < 0) {
//         return 1;
//     }

//     let result = 1;
//     for (let i = 1; i <= N; i++) {
//         result *= i;
//     }

//     return result;
// }

// console.log(factorial(5));   



//! 17-masala


// function getSum3(N) {
//     let sum = 0;
//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(getSum3(15));



//! 18-masala

// function sumOddEven(N) {
//     let evenSum = 0;
//     let oddSum = 0;

//     for (let i = 1; i <= N; i++) {
//         if (i % 2 === 0) {
//             evenSum += i;
//         } else {
//             oddSum += i;
//         }
//     }

//     return `${evenSum}, ${oddSum}`;
// }

// console.log(sumOddEven(10)); 



//! 19-masala

// function invertTime(H, M, S) {
//     return H * 3600 + M * 60 + S;
// }

// console.log(invertTime(1, 0, 0));



//! 20-masala
      // buni ishlaolmadim

//! 21-masala

// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// console.log(isLeapYear(2020)); 



//! 22-masala


// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     if (M === 2) {
//         return isLeapYear(Y) ? 29 : 28;
//     }

//     if ([1, 3, 5, 7, 8, 10, 12].includes(M)) {
//         return 31;
//     }

//     if ([4, 6, 9, 11].includes(M)) {
//         return 30;
//     }

//     return -1;
// }

// console.log(monthDays(11, 2022)); 


//!23 masala ->
//!24 masala   - >  bu uchalasini ishla olmadim
//!25 masala ->