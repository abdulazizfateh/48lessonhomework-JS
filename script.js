// 1. array ichidagi eng katta sonni toping 
// 2. array ichidagi eng kichik sonni toping 
// 3. Foydalanuvchi son kiritadi va arrey ichidagi foydalanuvchi sonidan kichik bo’lgan sonlarni ekranga chiqaring 
// 4. argument sifatida qabul qilingan sonning mukammal yoki mukammal son emasligini aniqlaydigan function yarating 
// 5. raqamlar kiritilgan arreyni teskari qilish (for dan foydalaning) 
// 6. arrey ichidagi tub sonlar ni toping 
// 7. Ixtiyoriy function va value lari sonlardan iborat bo'lgan object yaratilsin, va object value laridan tashkil topgan arrayga function parametri
//  ham oxiridan ham boshidan qo'shilsin






// TASK1

// let array = [1, 11, 20, 9, 71];
// let maxNum = Math.max(...array); 
// console.log("Eng katta son:", maxNum);
// // (...array) => Array elementlarini alohida qiymat qilib ajratadi.
// // Ya'ni [3, 1, 7, 9, 5] arrayidagi elementlarni 3, 1, 7, 9, 5 qilib alohida elementlarga aylantiradi.



// TASK2

// let array = [3,5,10,30,12];
// let minNum = Math.min(...array);
// console.log(`Eng kichik son:`, minNum);



// TASK3

// 1-USUL
// let array = [1, 2, 3, 4, 5];
// let userInput = prompt("Son kiriting:");
// userInput = parseInt(userInput);

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < userInput) {
//         console.log(array[i]);
//     }
// }


// 2-USUL
// let array = [1, 2, 3, 4, 5];
// let userInput = prompt("Son kiriting:");
// userInput = parseInt(userInput);

// let found = false;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < userInput) {
//         console.log(array[i]);
//         found = true;
//     }
// }

// if (found !== true) {
//     console.log("Kiritilgan sondan kichik son arrayda topilmadi");
// }



// TASK4
// Tushunmadim



// TASK5

// let array = [1, 2, 3, 4, 5];
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }





// TASK6

// let array = [3, 1, 7, 9, 5];

// for (let j = 0; j < array.length; j++) {
//     let num = array[j];
//     if (num > 1) {
//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(`Tub son: ${array[j]}`);
//         }
//     }
// }


// TASK7
// Tushunmadim