const Post = require("./Post");

class RequestHandler {
  constructor(baseUrl, slug) {
    //reuse
    this.url = `${baseUrl}${slug}`;
  }

  //service method
  async printSpecificPost(userId, postId) {
    const allPosts = await this.printAllPosts(userId);
    return allPosts.find(function(post){
      return (post._id === postId);
    })
  }

  //service method
  async printAllPosts(userId) {
    const allPosts = await this._getAllPosts();
    return allPosts.filter(function(post){
      return (post._userId === userId);
    })
  }

  //support method
  async _getAllPosts() {
    const response = await fetch(this.url);
    const jsonResponse = await response.json();
    return jsonResponse.map(function(postContent){
      const {userId, id, title, body} = postContent;
      return new Post(userId, id, title, body);
    })
  }
}

module.exports = RequestHandler;
