// function callAfterNsec(n, callback) {
//   setTimeout(() => {
//     if (n % 2 == 0) {
//       callback(new Error("galat hai"));
//     } else {
//       callback(null, 3.14);
//     }
//   }, n * 1000);
// }
// callAfterNsec(5.14, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });

// function p(callback) {
//   setTimeout(() => {
//     return 15;
//   }, 5000);
//   return 1500;
// }
// const a = p(() => {});
// console.log(a);
////// one more example to understand callback;
// phle order karenge to order id milega
// phir use order id se hum payment karenge
// lekin ye check karn apadega ki phle order ho fir payment ke liye jaye

const cart = ["shoes", "pants", "jeans", "kurtas"];

createOrder(cart, function (paymentId, a) {
  console.log(a);
  doPayment(paymentId, function (userId) {
    orderSummery(userId, function (id) {
      updateWallet(id, function (a) {
        console.log(a);
      });
    });
  });
});

function createOrder(cart, callback) {
  callback(1, "orderIsCompleteDoPayement");
}

function doPayment(paymentId, callback) {
  setTimeout(() => {
    console.log(`payment is done with id ${paymentId}`);
    callback(2);
  }, 5000);
}
function orderSummery(userId, callback) {
  console.log(`order summary is done with id ${userId}`);
  callback(10);
}
function updateWallet(id, callback) {
  console.log(`successfully update ${id}`);

  callback("all done");
}
