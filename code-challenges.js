// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy"}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

// INITIAL PSEUDO CODE
// function with an array of objects as an argument
// iterate through array
// iterate through each object using a for in object loop
// split string and capitalize each word
// string interpolation to create a sentence that incluldes the name and occupation
// return result


const coolPeople = arr => {
  // return the result of the array mapped through
  return arr.map((object, index) => {
    // as the array is mapped through, each of the obj within the array is accessible
    // map thru the obj's name prop by spliting each word; converting it into an array
    // the result of that plus its mapped result is stored within the variable, name
    let name = object.name.split(" ").map(word => {
      // after the split, this is what's being mapped thru => ["ford", "prefect"]
      // the result of each word at the first character is uppercased
      // the uppercased word will be concatanated with the rest of the string starting at index 1
      return word.charAt(0).toUpperCase() + word.substring(1);
      // join is used to convert the capitalized words back into a single string
    }).join(" ");

    if (index === 1) {
      return `${name} is the ${object.occupation}.`;
    }

    return `${name} is a ${object.occupation}.`;
  })
}

console.log(coolPeople(people));

// the following code is the exact same as above
// except that it includes a for loop which console.logs each item in the array
const logCoolPeople = arr => {
  arr = arr.map(object => {
    let name = object.name.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    }).join(" ");

    if (object.occupation === "president of the galaxy") {
      return `${name} is the ${object.occupation}.`;
    }

    return `${name} is a ${object.occupation}.`;
  })

  // the for loop will log each person with their occupation versus being inside an array
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

console.log(logCoolPeople(people));





// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// INITIAL PSEUDO CODE
// function that takes an array
// filter thru array
// check for number data types
// return num % 3


// VERSION 1.0
const mod3V1 = arr => {
  // filter through array for numbers only
  // map through filtered array to find remainder
  return arr.filter(num => typeof num === "number").map(num => num % 3);
}

console.log(mod3V1(testingArray1));
console.log(mod3V1(testingArray2));


// VERSION 2.0
const mod3V2 = arr => {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      temp.push(arr[i] % 3);
    }
  }

  return temp;
}

console.log(mod3V2(testingArray1));
console.log(mod3V2(testingArray2));





// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]


// function that takes in two arrays
const noDups = (arr1, arr2) => {
  // spread both arrays into one
  let arr = [...arr1, ...arr2];
  // use the Set object to remove duplicates and convert it back into an array
  return arr = [...new Set(arr)];
}

console.log(noDups(testingArray3, testingArray4));


const noDupsV2 = (arr1, arr2) => {
  let temp = [];
  // concatanate both arrays into one
  let arr = arr1.concat(arr2);
  // loop through array
  // if element within array is not present in the temp array
  // push that element into the temp array
  for (let i = 0; i < arr.length; i++) {
    if (temp.indexOf(arr[i]) === -1) {
      temp.push(arr[i]);
    }
  }

  return temp;
}

// VERSION 3.0
console.log(noDupsV2(testingArray3, testingArray4))

const noDupsV3 = (arr1, arr2) => {
  let temp = [];
  let arr = arr1.concat(arr2);
  arr.map(el => {
    if (temp.includes(el) === false) {
      temp.push(el);
    }
  })
  return temp;
}

console.log(noDupsV3(testingArray3, testingArray4))
