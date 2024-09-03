const readline = require(`readline-sync`);
/**
 * url: https://jsonplaceholder.typicode.com
 * Library: fetch
 * GET	/posts
 * Please using PROMISE and aync await to solve this
 * Allow user to input an userid and postId, print out that post content
 * Print all posts for that user
 */

const postUrl = "https://jsonplaceholder.typicode.com/posts";

async function run() {
  while (true) {
    console.log("--- Choose your option:---");
    console.log("1. Print out post content by userId and postId");
    console.log("2. Print all posts");
    console.log("0. Exit the program");
    let choice = readline.questionInt("Enter your choice: ");
    switch (choice) {
      case 1:
        let userId1 = readline.questionInt("Enter the user id: ");
        let postId = readline.questionInt("Enter the post id: ");
        await printPostByUserIdAndPostId(userId1, postId);
        break;
      case 2:
        let userId2 = readline.questionInt("Enter the user id: ");
        await printAllPosts(userId2);
        break;
      case 0:
        console.log("Exitting the program");
        return;
      default:
        console.log("Invalid option");
        break;
    }
  }
}

run();

function printPostByUserIdAndPostId(userId, postId) {
  return fetch(`${postUrl}?userId=${userId}&id=${postId}`).then(function (response) {
    return response.json();
  }).then(function (response1) {
    return validatePostIdAndUserId(response1, userId, postId);
  });
}

function validatePostIdAndUserId(data, userId, postId) {
  if (data.length > 0) {
    console.log(`Post ${postId} for user ${userId}: `);
    console.log(data[0]);
  } else {
    console.log(`No found post for user ${userId} with id ${postId}`);
  }
}

function printAllPosts(userId) {
  return fetch(`${postUrl}?userId=${userId}`).then(function (response) {
    return response.json();
  }).then(function (response2) {
    return validateUserId(response2, userId);
  });
}

function validateUserId(data, userId) {
  if (data.length > 0) {
    console.log(`All post for user ${userId}`);
    console.log(data);
  } else {
    console.log(`No found user with id ${userId}`);
  }
}
