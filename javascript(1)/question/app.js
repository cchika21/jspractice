// Q1
let nickname = 'ごっしー';
let age = '28';
let message = '私のニックネームは' + nickname + 'です。年齢は'+ age + '歳です。'
console.log(message);

// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let langText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`
console.log(langText);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5
let totalAge = 0;
for (let player of playerList) {
  totalAge += player.age;
}
let averageAge = totalAge / playerList.length;
console.log(averageAge);

// Q6
function sayHello() {
  console.log('Hello!');
}
sayHello();

sayWorld = function() {
  return  console.log('World');
}

sayWorld();

// Q7
Object.defineProperty(user, 'birthday', {value:'2000-09-27'});
user.sayHello = function() {
  console.log('Hello!');
}
user.sayHello();

// Q8
let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
};

calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.divide = function(x, y) {
  console.log(x / y);
};

calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(25, 5);

// Q9
function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);

console.log(`${5} を ${3} で割った余りは ${result} です。`);

// Q10
/* JavaScriptでは、関数の中で定義した変数は関数内でしか使えないため、関数外でxを使おうとしても、
スコープが有効ではなくエラーが発生してしまいます。変数を関数外で定義することで、関数内でも参照することができるようになります。*/

// PART 2

// Q1
const randInt = Math.floor(Math.random() * 10);
console.log(randInt);

// Q2
setTimeout(() => {
  console.log('Hello World!');
}, 3000);

// Q3
let num = 12;

if (num > 0) {
  console.log(`${num} is greater than 0`);
} else if (num < 0) {
  console.log(`${num} is less than 0`);
} else {
  console.log(`${num} is 0`);
}

// Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

mixed.forEach(element => {
  if (typeof element === 'number') {
    if (element % 2 === 0) {
      console.log(`${element} is even`);
    } else {
      console.log(`${element} is odd`);
    }
  } else {
    console.log(`${element} is not number`);
  }
});