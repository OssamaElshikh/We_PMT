let man1 = [
  {
    name: "ossama",
    age: 22,
    gender: "male",
  },

  {
    name: "ahmed",
    age: 20,
    gender: "male",
  },
  {
    name: "hussein",
    age: 25,
    gender: "male",
  },
];

// for (let i=0;i<man1.length;i++)
// {
//     console.log(man1[i])
// }

// using map
const man2 = man1.map(myfunc);

function myfunc(value, index, array) {
  return value;
}
console.log(man1);

// using for in
for (let x in man1) {
  {
    console.log(man1[x]);
  }
}
console.log(1 == "1");

// using for each
man1.forEach(myfunc2);
function myfunc2(value, index, array) {
  console.log(value);
}

// Looping (For in), map and forEach

// Return an array with 1 element (id === 1)

//filter and find

//testing foreach and map

const arr = [1, 2, 3, 4];

const arr_with_map = arr.map((item) => item + 1);
const arr_with_forEach = arr.forEach((item) => item);

console.log(arr_with_map, "map");
console.log(arr_with_forEach, "forEach");

//example using filter
const ages = [20, 30, 40, 50, 60];
const checkage = (age) => {
  return age > 40;
};
console.log(ages.filter(checkage));

//example using find
console.log(ages.find(checkage));

//ecma script 6

let newArray = [
  {
    name: "Ossama",
    ids: 1,
    age: 22,
  },
  {
    name: "khadija",
    ids: 2,
    age: 22,
  },
  { name: "Abdallah", ids: 3, age: 26 },
];


const myfunc3 = (object,name) => {
    for(let i=0 ; i<object.lenght;i++){
        if (object[i].name== name){
            return object.ids;
        }

    }
 }


