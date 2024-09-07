/**
 * 1. returnedValue1 must be used in async2 and async3
 * 2. Wait until all promises from async2 async3 resolved then print out
 */

/**
 * using allSettled (pending/fulfilled/rejected) -> one of the failed function -> result can return data with rejected
 * using Promise.all -> one of the failed function -> error will be returned
 */

// asyncFunc01("firstParam")
//   .then(function (returnedValue1) {
//     return Promise.allSettled([
//       asyncFunc02(returnedValue1),
//       asyncFunc03(returnedValue1),
//     ]);
//   })
//   .then(function (results) {
//     const [result2, result3] = results;
//     console.log(`result 2: ${JSON.stringify(result2)}`);
//     console.log(`result 3: ${JSON.stringify(result3)}`);
//   });

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
  }).catch(function(err){
    console.log(err);
  })

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
    throw Error("Error when using Promise all");
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
