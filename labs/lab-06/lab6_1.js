const readline = require("readline-sync");

const postUrl = "https://jsonplaceholder.typicode.com/posts";

function processNext() {
    console.log("--- Choose your option:---");
    console.log("1. Print out post content by userId and postId");
    console.log("2. Print all posts");
    console.log("0. Exit the program");

    let choice = readline.questionInt("Enter your choice: ");

    switch (choice) {
        case 1:
        let userId1 = readline.questionInt("Enter the user id: ");
        let postId = readline.questionInt("Enter the post id: ");
        printPostByUserIdAndPostId(userId1, postId)
            .then(() => {
            console.log("Operation completed.");
            processNext(); // Continue to next operation
            })
            .catch((error) => {
            console.error("Error:", error);
            processNext(); // Continue to next operation even if error occurs
            });
        break;
        case 2:
        let userId2 = readline.questionInt("Enter the user id: ");
        printAllPosts(userId2)
            .then(() => {
            console.log("Operation completed.");
            processNext(); // Continue to next operation
            })
            .catch((error) => {
            console.error("Error:", error);
            processNext(); // Continue to next operation even if error occurs
            });
        break;
        case 0:
        console.log("Exiting the program");
        continueLoop = false; // Exit the loop
        break;
        default:
        console.log("Invalid option");
        processNext(); // Continue to next operation
        break;
    }
}
processNext();

// Function to fetch a specific post by userId and postId using Promises
function printPostByUserIdAndPostId(userId, postId) {
  return fetch(`${postUrl}?userId=${userId}&id=${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.length > 0) {
        console.log(`Post ${postId} for user ${userId}:`);
        console.log(data[0]);
      } else {
        console.log(`No post found for user ${userId} with id ${postId}`);
      }
    })
    .catch((error) => {
      console.error("Error fetching post:", error);
    });
}

// Function to fetch all posts by userId using Promises
function printAllPosts(userId) {
  return fetch(`${postUrl}?userId=${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.length > 0) {
        console.log(`All posts for user ${userId}:`);
        console.log(data);
      } else {
        console.log(`No posts found for user with id ${userId}`);
      }
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
}