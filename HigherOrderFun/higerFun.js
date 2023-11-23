const users = [
  {
    firstName: "shashi",
    lastName: "kushwaha",
    age: 24,
  },
  {
    firstName: "amit",
    lastName: "kushwaha",
    age: 20,
  },
  {
    firstName: "donald",
    lastName: "trump",
    age: 54,
  },
  {
    firstName: "elon",
    lastName: "musk",
    age: 45,
  },
  {
    firstName: "narendra",
    lastName: "modi",
    age: 75,
  },
  {
    firstName: "sad",
    lastName: "guru",
    age: 5,
  },
  {
    firstName: "kumar",
    lastName: "vishwas",
    age: 45,
  },
];

const less = users.map((x) => {
  if (x.age < 25) {
    return x.firstName;
  } else {
    return "";
  }
});
console.log(less);

const correct = users
  .filter((x) => {
    return x.age < 30;
  })
  .map((X) => {
    return X.firstName;
  });
console.log(correct);
const a = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(a);

const sortedAge = users.sort((a, b) => {
  return a.age > b.age ? 1 : -1;
});
console.log(sortedAge);

// const ans = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = acc[curr.age];
//   } else {
//     acc[curr.age] = [];
//   }
//   acc[curr.age].push(curr);
//   return acc;
// });
// console.log(ans);
// console.log(
//   "--------------------------------------------------------------------------------------------"
// );

// // const output = users.reduce((acc, curr) => {
// //   if (acc[curr.age]) {
// //     acc[curr.age] = ++acc[curr.age];
// //   } else {
// //     acc[curr.age] = 1;
// //   }
// //   return acc;
// // }, {});
// // console.log(output);

// // const users = [{
// //   firstName: "shashi",
// //   lastName: "kushwaha",
// //   age: 24,
// // }];

// // users.reduce((acc, curr) => {

// // },{})

// const inventory = [
//   { name: "asparagus", type: "vegetables", quantity: 5 },
//   { name: "bananas", type: "fruit", quantity: 0 },
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "cherries", type: "fruit", quantity: 5 },
//   { name: "fish", type: "meat", quantity: 22 },
// ];

// const op = inventory.reduce((acc, curr) => {
//   if (acc[curr.type]) {
//     acc[curr.type] = acc[curr.type];
//   } else {
//     acc[curr.type] = [];
//   }
//   acc[curr.type].push(curr);
//   return acc;
// }, {});
// console.log(op);
// // const result = Object.groupBy(inventory, ({ type }) => type);

// /* Result is:
// {
//   vegetables: [
//     { name: 'asparagus', type: 'vegetables', quantity: 5 },
//   ],
//   fruit: [
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "cherries", type: "fruit", quantity: 5 }
//   ],
//   meat: [
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "fish", type: "meat", quantity: 22 }
//   ]
// }
// */
// var cars = [
//     { make: "audi", model: "r8", year: "2012" },
//     { make: "audi", model: "rs5", year: "2013" },
//     { make: "ford", model: "mustang", year: "2012" },
//     { make: "ford", model: "fusion", year: "2015" },
//     { make: "kia", model: "optima", year: "2012" },
//   ],
//   result = cars.reduce(function (r, a) {
//     if (r[a.make]) {
//       r[a.make] = r[a.make];
//     } else {
//       r[a.make] = [];
//     }
//     r[a.make].push(a);
//     return r;
//   }, {});

// console.log(result);
