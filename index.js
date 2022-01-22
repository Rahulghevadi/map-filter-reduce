
const arr = [1, 2, 3, 4, 5, 6, 7, 2, 4, 9];


const isOdd = arr.filter((x) => x % 2);
const isEven = arr.filter((x) => x % 2 === 0);

console.log('odd numbers', isOdd);
console.log('even numbers', isEven);

const users = [
    { firstName: "Virat", lastName: "Kohli", age: 22 },
    { firstName: "Sachin", lastName: "Tendulkar", age: 24 },
    { firstName: "Rohit", lastName: "Sharma", age: 23 },
    { firstName: "Rahul", lastName: "Dravid", age: 23 }
];

const output1 = users.map((x) => x.firstName + " " + x.lastName);

console.log(output1);

// {22:1,23:2,24:1};

const output2 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output2);

// print names whos age is less grater than 23

const output3 = users.filter((x) => x.age > 23).map((x) => x.firstName + " " + x.lastName);

console.log(output3)


// print names whos age is less than 23 using reduce function
const output4 = users.reduce(function (acc, curr) {
    if (curr.age < 23) {
        acc.push(curr.firstName)
    }
    return acc;
}, []);

console.log(output4)


