// Callback Hell Example
asyncFunction1(1, function (result1) {
  console.log("fun1");
  asyncFunction2(result1, function (result2) {
    console.log("fun2");
    asyncFunction3(result2, function (result3) {
      console.log("fun3");

      // Nested callback level 3
      asyncFunction4(result3, function (result4) {
        console.log("fun4");

        // Nested callback level 4
        asyncFunction5(result4, function (result5) {
          console.log("fun5");

          // Nested callback level 5
          // ... and so on
        });
      });
    });
  });
});

// Example asynchronous functions
function asyncFunction1(param, callback) {
  // Simulating an asynchronous operation
  setTimeout(function () {
    const result = param + 1;
    callback(result);
  }, 1000);
}

function asyncFunction2(param, callback) {
  // Simulating an asynchronous operation
  setTimeout(function () {
    const result = param * 2;
    callback(result);
  }, 5000);
}

function asyncFunction3(param, callback) {
  // Simulating an asynchronous operation
  setTimeout(function () {
    const result = param - 3;
    callback(result);
  }, 1000);
}
function asyncFunction4(param, callback) {
  // Simulating an asynchronous operation
  setTimeout(function () {
    const result = param - 3;
    callback(result);
  }, 1000);
}

function asyncFunction5(param, callback) {
  // Simulating an asynchronous operation
  setTimeout(function () {
    const result = param - 3;
    callback(result);
  }, 1000);
}
// ... similar implementations for asyncFunction4 and asyncFunction5
