//! 1-masala

// function power(a, n) {
//     return a ** n;
// }
// console.log("1-masala:", power(3, 5));

//! 2-masala

// function mean(a, b) {
//     return [(a + b) / 2, Math.sqrt(a * b)];
// }
// console.log("2-masala:", mean(12, 48)); 

//! 3-masala

// function sign(n) {
//     if (n > 0) return 1;
//     else if (n < 0) return -1;
//     else return 0;
// }
// console.log("3-masala:", sign(10)); 

//! 4-masala

// function numberOfRoots(A, B, C) {
//     let D = B * B - 4 * A * C;
//     if (D > 0) return 2;
//     else if (D === 0) return 1;
//     else return 0;
// }
// console.log("4-masala:", numberOfRoots(1, -6, 9)); 

//! 5-masala

// function areaCircle(R) {
//     return Math.PI * R ** 2;
// }
// console.log("5-masala:", areaCircle(3).toFixed(2)); // => 28.27

//! 6-masala

// function sumRange(A, B) {
//     if (A > B) return 0;
//     let sum = 0;
//     for (let i = A; i <= B; i++) sum += i;
//     return sum;
// }
// console.log("6-masala:", sumRange(8, 10));

//! 7-masala

// function calc(A, B, S) {
//     switch (S) {
//         case '+': return A + B;
//         case '-': return A - B;
//         case '*': return A * B;
//         case '/': return B !== 0 ? A / B : 0;
//         default: return 0;
//     }
// }
// console.log("7-masala 1:", calc(10, 15, '*')); 
// console.log("7-masala 2:", calc(7, 8, '+'));   

//! 8-masala

// function isEven(K) {
//     return K % 2 === 0;
// }
// console.log("8-masala:", isEven(10)); 

//! 9-masala

// function sortABC(a, b, c) {
//     let arr = [a, b, c];
//     arr.sort((x, y) => x - y);
//     return arr;
// }
// console.log("9-masala:", sortABC(10, 5, 8)); 

//! 10-masala

// function isPowerN(K, N) {
//     let result = 1;
//     while (result < K) {
//         result *= N;
//     }
//     return result === K;
// }
// console.log("10-masala:", isPowerN(243, 3)); 

//! 11-masala

// function isPrime(N) {
//     if (N <= 1) return false;
//     for (let i = 2; i < N; i++) {
//         if (N % i === 0) return false;
//     }
//     return true;
// }
// console.log("11-masala:", isPrime(7));

//! 12-masala

// function numberOfPrime(N) {
//     let count = 0;
//     for (let i = 2; i <= N; i++) {
//         if (isPrime(i)) count++;
//     }
//     return count;
// }
// console.log("12-masala:", numberOfPrime(10)); 

//! 13-masala

// function digitNth(K, N) {
//     let str = K.toString();
//     return N <= str.length ? parseInt(str[N - 1]) : -1;
// }
// console.log("13-masala 1:", digitNth(105782, 5)); 
// console.log("13-masala 2:", digitNth(1057, 5));   

//! 14-masala

// function inverseNumber(N) {
//     return parseInt(N.toString().split('').reverse().join(''));
// }
// console.log("14-masala:", inverseNumber(56814)); 

//! 15-masala

// function isPalindrom(N) {
//     return N === inverseNumber(N);
// }
// console.log("15-masala:", isPalindrom(1678761)); 

//! 16-masala

// function factorial(N) {
//     if (N < 0) return 1;
//     let result = 1;
//     for (let i = 1; i <= N; i++) result *= i;
//     return result;
// }
// console.log("16-masala:", factorial(5)); 

//! 17-masala

// function getSum3(N) {
//     let sum = 0;
//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0) sum += i;
//     }
//     return sum;
// }
// console.log("17-masala:", getSum3(15)); 

//! 18-masala

// function sumOddEven(N) {
//     let even = 0, odd = 0;
//     for (let i = 1; i <= N; i++) {
//         if (i % 2 === 0) even += i;
//         else odd += i;
//     }
//     return [even, odd];
// }
// console.log("18-masala:", sumOddEven(10)); 

//! 19-masala

// function invertTime(H, M, S) {
//     return H * 3600 + M * 60 + S;
// }
// console.log("19-masala:", invertTime(0, 6, 40)); 

//! 20-masala

// function decTime(H, M, S) {
//     let total = invertTime(H, M, S) - 1;
//     let h = Math.floor(total / 3600);
//     let m = Math.floor((total % 3600) / 60);
//     let s = total % 60;
//     return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
// }
// console.log("20-masala:", decTime(0, 6, 40)); 

//! 21-masala

// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }
// console.log("21-masala:", isLeapYear(2020)); 

//! 22-masala

// function monthDays(M, Y) {
//     if (M === 2) return isLeapYear(Y) ? 29 : 28;
//     if ([1, 3, 5, 7, 8, 10, 12].includes(M)) return 31;
//     if ([4, 6, 9, 11].includes(M)) return 30;
//     return -1;
// }
// console.log("22-masala:", monthDays(2, 2020)); 

//! 23-masala

// function prevDate(D, M, Y) {
//     D--;
//     if (D < 1) {
//         M--;
//         if (M < 1) {
//             M = 12;
//             Y--;
//         }
//         D = monthDays(M, Y);
//     }
//     return `${D.toString().padStart(2, '0')}.${M.toString().padStart(2, '0')}.${Y}`;
// }
// console.log("23-masala:", prevDate(10, 3, 2022));

//! 24-masala

// function nextDate(D, M, Y) {
//     D++;
//     let daysInMonth = monthDays(M, Y);
//     if (D > daysInMonth) {
//         D = 1;
//         M++;
//         if (M > 12) {
//             M = 1;
//             Y++;
//         }
//     }
//     return `${D.toString().padStart(2, '0')}.${M.toString().padStart(2, '0')}.${Y}`;
// }
// console.log("24-masala:", nextDate(10, 3, 2022)); 

//! 25-masala

// function getDividersNumberAndSum(N) {
//     let count = 0, sum = 0;
//     for (let i = 1; i <= N; i++) {
//         if (N % i === 0) {
//             count++;
//             sum += i;
//         }
//     }
//     return [count, sum];
// }
// console.log("25-masala:", getDividersNumberAndSum(12));
