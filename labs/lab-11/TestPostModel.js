const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

testPost();

async function testPost() {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const SLUG = "/posts";
  const userId = 1;
  const postId = 1;

  let requestHandler = new RequestHandler(BASE_URL, SLUG);

  const allPosts = await requestHandler.printAllPosts(userId);
  console.log(`All posts for user ${userId}: `);
  console.log(allPosts);
  
  const specificPost = await requestHandler.printSpecificPost(userId, postId);
  console.log(`Post content for user ${userId} with id ${postId}`);
  console.log(specificPost);
}
