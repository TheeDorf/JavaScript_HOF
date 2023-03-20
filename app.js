console.log("Hello World!\n==========\n");

// Exercise 1 Section
function plus(number){
    return ((plusNumber)=> {
        return plusNumber + number
    })
}

let = plus15 = plus(15);
console.log(plus15(10));




// ex 2

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach ((hobbit)=>{
    console.log(hobbit.name);
});

// ex3

const nameAndScore = users.map((user)=>{
    return {
        name: user.name,
        score: user.score,
    };
});
console.log(nameAndScore)

// ex4

const active = users.filter((user)=>{
    return user.isActive == true
});

console.log(active);

// ex 5

const sort = users.sort((a,b)=>{
   return b.score - a.score;
});

console.log(sort)
// ex 6

const scoreSum = users.reduce((total, user)=>{
    return total + user.score;
},0);

const averageScore = scoreSum / users.length;

console.log(scoreSum);
console.log(averageScore);
