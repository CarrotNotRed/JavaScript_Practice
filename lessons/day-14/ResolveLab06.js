const { sendRequest } = require("./RequestHelper");
const postUrl = "https://jsonplaceholder.typicode.com/posts";
const userId = 1;
const postId = 1;

printAllPosts(userId);
printSpecificPost(userId, postId);

function printSpecificPost(userId, postId) {
  getFilteredPostByUserId(userId).then(function (posts) {
    const targetPost = posts.filter(function (post) {
      return post.id === postId;
    })[0];
    if (targetPost) {
      console.log(`Post for user ${userId} with id ${postId}:`);
      console.log(targetPost);
    } else {
      console.log(`No found post with id ${postId} for user ${userId}`);
    }
  });
}

function printAllPosts(userId) {
  getFilteredPostByUserId(userId).then(function (posts) {
    console.log(`All post for user ${userId}:`);
    console.log(posts);
  });
}

function getFilteredPostByUserId(userId) {
  return sendRequest(postUrl).then(function (posts) {
    return posts.filter(function (post) {
      return post.userId === userId;
    });
  });
}
