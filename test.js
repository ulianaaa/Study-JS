// task 1

// Реалізуй функцію, яка повертає довжину рядка.

// TEST 1 PASSED
// It should work for an empty string

// TEST 2 PASSED
// It should work for a single character string

// TEST 3 PASSED
// It should work for an upper case single character string

// TEST 4 PASSED
// It should work for a digits string

// TEST 5 PASSED
// It should work for a multi character string

// TEST 6 PASSED
// It should work for a special symbols string



function getStringLength(string) {
    let totalLength = 0;
    for(let char in string){
      totalLength += 1;
    }
    return totalLength;
  }
  
  let stringLength = getStringLength('My String');
  console.log(stringLength);







  // task 2---------------------------------------------------------------------------------
// Реалізуй функцію, яка повертає останній символ рядка.


// TEST 1 PASSED
// It should work for a single lowercase character string

// TEST 2 PASSED
// It should work for a single uppercase character string

// TEST 3 PASSED
// It should work for a digits string

// TEST 4 PASSED
// It should work for a multi character string

// TEST 5 PASSED
// It should work for a special symbols string


/**
 * 
 * @param {string} input
 * 
 * @returns {string}
 */


  function getLastCharacter(string) {
    return string.slice(-1);
  
  }
  
  
  // Tests
  test(getLastCharacter('a'), 'a', 'singleLowercaseCharacterString');
  test(getLastCharacter('A'), 'A', 'singleUpperCharacterString');
  test(getLastCharacter('123'), '3', 'digitsString');
  test(getLastCharacter('asdf'), 'f', 'multiCharacterString');
  test(getLastCharacter('!@#$'), '$', 'specialSymbolsString');
  
  function test(actual, expected, testName = '') {
    if (actual !== expected) {
      const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
      console.error(errorMessage);  
    } else {
      console.log(`Test ${testName} passed!`);
    }
    
  }

//   task 3--------------------------------------------------------------------------------

// Реалізуй функцію, яка поверне найменший елемент масиву.

// It should work for an array with one element

// TEST 2 PASSED
// It should work for an array with equal elements

// TEST 3 PASSED
// It should work for an array with the smallest element at the end

// TEST 4 PASSED
// It should work for an array with the smallest element in the middle

// TEST 5 PASSED
// It should work for an array with negative elements


function findSmallestElement(arr) {
    // write code here
    let smallestElement = 0;
    
    if (arr.length === 0) {
      return smallestElement;
    } else {
      smallestElement = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestElement) {
          smallestElement = arr[i];
        }
      }
      return smallestElement;
    }
  }
  let element = findSmallestElement([264, 6, 32, 85]);
  console.log(element);

  

//   task 4--------------------------------------------------------------------------

// Дано масив країн з кількістю їхнього населення.
// Підрахуй середню кількість населення в даних країнах.

// [
//   { name: 'Ukraine', population: 42000000},
//   { name: 'Belarus', population: 9500000},
//   { name: 'Moldova', population: 3500000},
//   { name: 'Switzerland', population: 8400000},
// ]
// Сумарна кількість населення = 42M + 9.5M + 3.5M + 8.4M = 63.4M
// Середня = 63.4M / 4


// TEST 1 PASSED
// It should work for a single country

// TEST 2 PASSED
// It should work for an empty array

// TEST 3 PASSED
// It should work for multiple countries


/**
 * @typedef {Object} Country
 * @property {string} name
 * @property {number} age
 * 
 * @param {Country[]} countries 
 * 
 * @returns {number}
 */

function calculateAverageCountryPopulation(countries) {
    var sum= 0;
    var count = countries.length;
    for (var i=0; i < count; i++) {
      sum += countries[i].population;
    } avg = sum/count;
    if (!avg) {  // Matches +0, -0, NaN
      return 0;
    }
    return avg;   
    // Only change code above this line
  }
  
  // Tests
  test(calculateAverageCountryPopulation([{ name: 'Ukraine', population: 42000000}]), 42000000, 'singleCountry');
  test(calculateAverageCountryPopulation([]), 0, 'emptyArray');
  test(calculateAverageCountryPopulation(
    [{ name: 'Ukraine', population: 42000000},
     { name: 'Belarus', population: 9500000},
     { name: 'Moldova', population: 3500000},
     { name: 'Switzerland', population: 8400000}]), 
    15850000, 
    'multipleCountries');
  
  
  function test(actual, expected, testName = '') {
    if (actual !== expected) {
      const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
      console.error(errorMessage);  
    } else {
      console.log(`Test ${testName} passed!`);
    }  
  }


//   task 5------------------------------------------------------

// Поверни true, якщо у phrase немає жодної літери із blacklist.
// Якщо хоч одна літера із blacklist наявна у phrase поверни false.
// Порівняння має бути нечутливим до регістру, тобто 'A' == 'a'.

// TEST 1 PASSED
// It should return false if one letter overlaps

// TEST 2 PASSED
// It should return true if no matching letters

// TEST 3 PASSED
// It should return false if the is a case insensitive overlap

// TEST 4 PASSED
// It should return phrase case insensitive overlap

/**
 * 
 * @param {string} blacklist
 * @param {string} phrase
 * 
 * @returns {boolean}
 */

function hasNoneLetters(blacklist, phrase) {
    // write code here
    blacklist = blacklist.toLowerCase();
     phrase = phrase.toLowerCase();
      for (let i = 0; i<blacklist.length; i++) {
       if (phrase[i] ==' ')
          i++;
                if (blacklist.indexOf(phrase[i]) !==-1)
          return false;
        else return true;
      }
      
      }
  
      // Tests
  test(hasNoneLetters('abcdef', 'fgh'), false, 'one letter overlap');
  test(hasNoneLetters('abcdef', 'gh'), true, 'contains none');
  test(hasNoneLetters('ABCD', 'def'), false, 'blacklist case insensitive overlap');
  test(hasNoneLetters('abcd', 'DEF'), false, 'phrase case insensitive overlap');
  
  
  function test(actual, expected, testName = '') {
    if (actual !== expected) {
      const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
      console.error(errorMessage);  
    } else {
      console.log(`Test ${testName} passed!`);
    }
  }




  
return negative



// task1
// Є число зроби його від'ємним. Але, можливо, воно вже від'ємне?

Приклад:
makeNegative(1); // -1
makeNegative(-5); // -5
makeNegative(0); // 0
makeNegative(0.12); // -0.12

/**
 * 
 * @param {number} num
 * 
 * @returns {number}
 */
function makeNegative(num) {
  // write code here

    if (num>0)	{
        return num * -1
    }
    else {
      return num
    }
  }
  
  makeNegative(-5)
 






// task2
// Номер кредитної карти складається з 16 цифр 1234567890987654. Відформатуйте його наступним чином 1234 ** ** 7654 (Розбийте на 4 групи та замініть 2-гу та 3-ю групи на ****)



/**
 * 
 * @param {string} cardNumber
 * 
 * @returns {string}
 */
function formatCredicCardNumber(cardNumber) {
  // write code here
}



// task3

// Дано масив чисел. Кожне число відповідає кольору шкарпетки.
// Визнач скільки пар шкарпеток однакового кольору можна сформувати.

// Приклади:
// [10, 10] - одна пара шкарпеток кольору 10.
// [2, 2, 2, 2, 2] - дві пари шкарпеток кольору 2.
// [10, 20, 30, 40, 50, 60] - всі шкарпетки різних кольорів - 0 пар.
// [10, 20, 30, 10, 20, 60] - 2 пари. Одна кольору 10 і одна кольору 20.



/**
 * 
 * @param {number[]} colors
 * 
 * @returns {number}
 */
function countMatchingSocks(colors) {
  // write code here
}

