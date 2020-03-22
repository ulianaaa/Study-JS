// console.log('hello uliana');
//  let number = 15;
//  let string = 'uliana';
// const CONST = 'not change';
//  console.log(number);
 

// const NAME = prompt('what`s up');

// let name = "john";

// let admin = 'john';

// alert(admin);


// beetroot

// first

// let name = prompt('what is your name?');
// alert (`hello ${name}!`);

// // second
// let birthYear = prompt ('input your birth year');
// const currentYear = 2020;
// alert (`you are ${currentYear - birthYear} old year`);

// // third
// let sideLength = prompt('what is side length of square');
// alert (`square area = ${sideLength * 4}`);



// // fifth
// let distance = prompt('what is distance between two cities(km)?');
// let time = prompt ('what time?');
// // let V = distance / time;
// alert(`you musish dibratys z takoyu V ${distance / time} km/h`)

// // sixth
// let dolar = prompt('enter dolar$$$');
// const cursvalut = 0.9;
// let euro = dolar * cursvalut;
// console.log(euro);
// alert ('euro will be = ' + euro);
// // alert ('your euro' = $euro);
// // alert  (`your euro = ${dolar * cursvalut}`);

// // seven
// let memory = prompt('what memory(GB)');
// let fullMemory = memory * 1000;
// const file = 820;
// let quantity = fullMemory / file;
// let mainQuantity = quantity.toFixed();
// alert (mainQuantity  + ' ' + 'quantity files will on flesh drive');



// // eight

// let money = prompt ('how money?');
// let price = prompt ('how match?');

// let quantity = money/price;
// let fullQuantity = quantity.toFixed();
// let balance = money % price;
// alert (fullQuantity  + ' quantity choko' );
// alert (balance +  ' UAN balance');


// // ninth
// let number = prompt ('enter a three digit number');
// alert(('' + number).split('').reverse().join(''));

// // tenth
// let money = prompt('money');
// let time = 2;
// const percent = 5;
// let sum = 



// lesson23-------------------------------------------------------------

// // first

// let age = prompt('how old are you?');

// if (age >= 0 && age < 12){

// alert('child');
// }

// else if (age >=12 && age < 18){

//     alert('teenager');
//   }
// else if  (age >=18 && age < 60){

//   alert('adult');
// }
// else if (age >=60){

//   alert('retired');
// }

// second

// let number = prompt ('enter number 0-9');
//  switch(number){
//   case '0':
//     alert(')');
//     break;
//    case '1':
//      alert('!');
//     break;
//     case '2':
//       alert('@');
//     break;
//     case '3':
//      alert('#');
//     break;
//     case '4':
//       alert('$');
//     break;
//     case '5':
//       alert('%');
//     break;
//     case '6':
//       alert('^');
//     break;
//     case '7':
//       alert('&');
//     break;
//     case '8':
//        alert('*');
//     break;
//     case '9':
//        alert('(');
//     break;
//     default:
//       alert('from 0 to 9!!');
//  }


// third

// let number = prompt('Enter the number from 100 to 999');
//     number = number + '';
//     if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
//     {
//         alert('true');
//     }
//     else
//         alert('false');


// fourth
//  let year = prompt('enter a year');

//  if (year % 4 == 0 && year % 100 !== 0)
//  {
// alert ('leap year');
//  } else{
// alert ('not leap year');}


// fifth


// let number = prompt('enter a five digit number');    
// number = number + '';
//     if (number === number.split('').reverse().join(''))
//         alert('palindrome');
//     else
//         alert('NOT palindrome');


// let number = prompt('enter a five digit number');
// let numberLength = number.length, 
// numberReverse = number.split('').reverse().join('');
// if (numberReverse == number)
// {
//   alert ('is Palindrome')
// } else{
// alert ('is not palindrome')
// }

// task 6

// let money = prompt('enter a USD');
// let currency = prompt('enter currency: EUR=1, UAN=2, AZN=3');
// switch(currency){
//      case '1':
//      alert (money * 0.9 + ' EUR');
//      break;
//      case '2':
//      alert (money * 25 + ' UAN');
//      break;
//      case '3':
//      alert (money * 8 + ' AZN');
//      break;
//      default:
//      alert('Error')
// }


// task 7

// let money = prompt ('enter purchase amount');
// if (money >= 200 && money <300){
//   alert(`Sale 3% = ${money/100*97}`);
// } else if (money >= 300 && money <500){
//   // alert('Sale 5% = ' + money);
//   alert(money/100*95 + '$ with 5% sale');
// }
// else if (money >=500){
//   alert(money/100*93 + '$ with 7% sale');
// }

// task 8
// let perimeter = prompt('enter square perimeter')
// let circle = prompt ('enter circumference');

// if (circle <= perimeter){
//   alert('yeap');
// } else{
//   alert('nope')
// }


// task9

// let home = prompt ('Where she lives?  1 - Kyiv, 2 - Lviv, 3 - Odesa');
// let age = prompt ('How old is she?  1 - 15, 2 - 40, 3 - 150');
// let name = prompt ('What is her name?  1 - Kate, 2 - Mary, 3 - Mon');

// let score = 0;
// if (home ==1)
// score +=2;
// if (age ==1)
// score +=2;
// if (name ==2)
// score +=2;

// alert('Your score = '+ score );
 

// task 10

// let date = prompt('Enter the date - day-month-year ');
// date = date.split('-');

// let oldDate = new Date(date[2], date[1]-1, date[0]); //месяцы начинаются с 0
// oldDate.setDate(oldDate.getDate()+1);
// alert(oldDate);


// lesson 24---------------------------------------------------------

// task1

// let i = prompt('enter start of range');
// let n = prompt ('enter end of range');
// let sum = 0;

//  while (i <= n){
 
//    sum = sum + i;
//    i++;
   
// //  }
// //  alert(sum);
// // for (let i = 0; i<=100; i++){
// // sum = sum +i;
// // sum +=i;
// }
//  alert(sum);

// task4

function calculateDigits(n){
  for(let i = 0; n>1; i++){
    n /=10;
  }
  return i;
}










// function getStringLength(input) {
//     // write code here
//     let string = prompt('input some text');
//     let lengthName= string.length;
//     document.write(lengthName);
//   }


  // test

  // task1
 // let text = +prompt(`Input text`); 
//  let str = 'some text';
//  let n = str.length;
//  return
//  document.getElementById("demo").innerHTML = n;
// let str = +prompt(`input Some random text`).length;
// document.write(str.length)


// function getStringLength() {
// let str =prompt('Input text');
// alert(str.length)
// }


// function getStringLength(str) {
//   return str;
// }
// console.log(getStringLength('').length);


// // ----------------------------------------
//   function getStringLength(string) {
//     let totalLength = 0;
//     for(let char in string){
//       totalLength += 1;
//     }
//     return totalLength;
//   }
  
//   let StringLength = getStringLength('My String');
//   console.log(StringLength); 
// // ---------------------------------






// let x = 'string';
// let empty = '';
// console.log('Довжина рядка' + x.length);
// console.log('довжина пустого рядка ' + empty.length);



  // // task2


  // function getLastCharacter(input) {
  //   // Only change code below this line
  //   return input.slice(-1);
  //   // Only change code above this line
  // }
  
  
  // // Tests
  // test(getLastCharacter('a'), 'a', 'singleLowercaseCharacterString');
  // test(getLastCharacter('A'), 'A', 'singleUpperCharacterString');
  // test(getLastCharacter('123'), '3', 'digitsString');
  // test(getLastCharacter('asdf'), 'f', 'multiCharacterString');
  // test(getLastCharacter('!@#$'), '$', 'specialSymbolsString');
  
  // function test(actual, expected, testName = '') {
  //   if (actual !== expected) {
  //     const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
  //     console.error(errorMessage);  
  //   } else {
  //     console.log(`Test ${testName} passed!`);
  //   }
    
  // }

  // function getLastCharacter(){
  //   let myString = "Task2k";
  //   console.log(myString[myString.length-1])
  //   }
// // ------------------------------------
// function getLastCharacter(string) {
//   // write code here
//   let stringLast = 0;
  
//   for (let i = 0, chr; i < stringLast.length; i++) {
//     if ((chr = getWholeChar(str, i)) === false) {
//       return;
// }
//   string.charAt(string.length-1); 

//   let lastCharacter = getLastCharacter('My String') 
// console.log(chr);
//   }
// }
// // -------------------------------------

// var lastFive = id.substr(id.length - 5); // => "Tabs1"
// var lastChar = id.substr(id.length - 1); // => "1"
// var res = str.substr(-1);






  // task3



// function findSmallestElement(){

// let number =[2,5,1,78,56];

//   Array.prototype.min = function() {
//     return Math.min.apply(null, this);
//   };
//   alert("Min value is: "+ number.min());
// }



  // function findSmallestElement(arr) {
  //   // write code here
  //   let smallestElement = 0;
    
  //   if (arr.length === 0) {
  //     return smallestElement;
  //   } else {
  //     smallestElement = arr[0];
  //     for (let i = 0; i < arr.length; i++) {
  //       if (arr[i] < smallestElement) {
  //         smallestElement = arr[i];
  //       }
  //     }
  //     return smallestElement;
  //   }
  // }
  // let element = findSmallestElement([264, 6, 32, 85]);
  // console.log(element);



  // // task4


  // function calculateAverageCountryPopulation(countries) {
  //   var sum= 0;
  //   var count = countries.length;
  //   for (var i=0; i < count; i++) {
  //     sum += countries[i].population;
  //   } avg = sum/count;
  //   if (!avg) {  // Matches +0, -0, NaN
  //     return 0;
  //   }
  //   return avg;   
  //   // Only change code above this line
  // }
  
  // // Tests
  // test(calculateAverageCountryPopulation([{ name: 'Ukraine', population: 42000000}]), 42000000, 'singleCountry');
  // test(calculateAverageCountryPopulation([]), 0, 'emptyArray');
  // test(calculateAverageCountryPopulation(
  //   [{ name: 'Ukraine', population: 42000000},
  //    { name: 'Belarus', population: 9500000},
  //    { name: 'Moldova', population: 3500000},
  //    { name: 'Switzerland', population: 8400000}]), 
  //   15850000, 
  //   'multipleCountries');
  
  
  // function test(actual, expected, testName = '') {
  //   if (actual !== expected) {
  //     const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
  //     console.error(errorMessage);  
  //   } else {
  //     console.log(`Test ${testName} passed!`);
  //   }  
  // }

  // const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length


// //  ------------------------------------------ 
//   let country = [
//     { name: 'Ukraine', population: '42 000 000'},
//     { name: 'Belarus', population: '9 500 000'},
//     { name: 'Moldova', population: '3 500 000'},
//     { name: 'Switzerland', population: '8 400 000'}
// ];

 
// function calculateAverageCountryPopulation(countries){
//     let populationAverage = 0;
 
//     for(let i=0; i<countries.length; i++){
//       populationAverage += parseInt(countries[i].population.replace(/\s+/g, ''));
//     }
 
//     console.log(populationAverage / countries.length);
// }
// calculateAverageCountryPopulation(country);
// // -----------------------------
// }

  // function calculateAverageCountryPopulation(countries) {
  //   // write code here
  //   let country = [
  //     { name: 'Ukraine', population: 42000000},
  //     { name: 'Belarus', population: 9500000},
  //     { name: 'Moldova', population: 3500000},
  //     { name: 'Switzerland', population: 8400000},
  //   ]
  //   const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
  // }





  // function calculateAverageCountryPopulation(){
    // test(calculateAverageCountryPopulation([{ name: 'Ukraine', population: 42000000}]), 42000000, 'singleCountry');
    // test(calculateAverageCountryPopulation([]), 0, 'emptyArray');
    // test(calculateAverageCountryPopulation(
    //   [{ name: 'Ukraine', population: 42000000},
    //    { name: 'Belarus', population: 9500000},
    //    { name: 'Moldova', population: 3500000},
    //    { name: 'Switzerland', population: 8400000}]), 
    //   15850000, 
    //   'multipleCountries');
    // function test(actual, expected, testName = '') {
    //   if (actual !== expected) {
    //     const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
    //     console.error(errorMessage);  
    //   } else {
    //     console.log(`Test ${testName} passed!`);
    //   } 
    // }
    // } 
    







    // function calculateAverageCountryPopulation(countries) {

    //   let country = [
    //     { name: 'Ukraine', population: '42 000 000'},
    //     { name: 'Belarus', population: '9 500 000'},
    //     { name: 'Moldova', population: '3 500 000'},
    //     { name: 'Switzerland', population: '8 400 000'}
    // ];
    //   if (!countries || !countries.length) return 0;
    
    //     return countries.reduce((sum, country) => {
    //         return sum + (country.population | 0);
    //     }, 0);
    // }

    

     
     
    // function getAverage(data){

    //   if (!countries || !countries.length) return 0;
    
    //     return countries.reduce((sum, country) => {
    //         return sum + (country.population | 0);
    //     }, 0);
    //     var pop_average = 0;
     
    //     for(var i=0; i<data.length; i++){
    //         pop_average += parseInt(data[i].population.replace(/\s+/g, ''));
    //     }
     
    //     alert(pop_average / data.length);
    // }
     
    // getAverage(countres);


  // // task5

  // function hasNoneLetters(blacklist, phrase) {
  // // write code here
  // blacklist = blacklist.toLowerCase();
  //  phrase = phrase.toLowerCase();
  //   for (let i = 0; i<blacklist.length; i++) {
  //    if (phrase[i] ==' ')
  //       i++;
  //             if (blacklist.indexOf(phrase[i]) !==-1)
  //       return false;
  //     else return true;
  //   }
    
  //   }

//     // Tests
// test(hasNoneLetters('abcdef', 'fgh'), false, 'one letter overlap');
// test(hasNoneLetters('abcdef', 'gh'), true, 'contains none');
// test(hasNoneLetters('ABCD', 'def'), false, 'blacklist case insensitive overlap');
// test(hasNoneLetters('abcd', 'DEF'), false, 'phrase case insensitive overlap');


// function test(actual, expected, testName = '') {
//   if (actual !== expected) {
//     const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
//     console.error(errorMessage);  
//   } else {
//     console.log(`Test ${testName} passed!`);
//   }
// }
  
// ----------------------
// function hasNoneLetters(blacklist, phrase) {

//   let hasNoneLetters = (str, substr) => str.match(new RegExp(`[${substr}]`, `i`)) ? false : true;
// console.log(hasNoneLetters(phrase, blacklist));
  // write code here
// }

  // }
// let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

// if (year < 2015) {
//   alert( 'Это слишком рано...' );
// } else if (year > 2015) {
//   alert( 'Это поздновато' );
// } else {
//   alert( 'Верно!' );
// }