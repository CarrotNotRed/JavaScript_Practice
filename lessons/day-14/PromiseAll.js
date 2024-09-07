/**
 * 1. returnedValue1 must be used in async2 and async3
 * 2. Wait until all promises from async2 async3 resolved then print out
 */

asyncFunc01("firstParam")
  .then(function (returnedValue1) {
    return Promise.all([
      asyncFunc02(returnedValue1),
      asyncFunc03(returnedValue1),
    ]);
  })
  .then(function (results) {
    const [result2, result3] = results;
    console.log(`result 2: ${result2}`);
    console.log(`result 3: ${result3}`);
  });

function asyncFunc01(param1) {
  console.log(`Processing param: ${param1}`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const returnedValue = "asyncFunc01: " + param1;
      resolve(returnedValue);
    }, 1000);
  });
}

function asyncFunc02(param2) {
  console.log(`Processing param: ${param2}`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const returnedValue = "asyncFunc02: " + param2;
      resolve(returnedValue);
    }, 1000);
  });
}

function asyncFunc03(param3) {
  console.log(`Processing param: ${param3}`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const returnedValue = "asyncFunc03: " + param3;
      resolve(returnedValue);
    }, 1000);
  });
}
