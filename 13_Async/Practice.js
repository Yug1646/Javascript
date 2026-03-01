/*
const dataReq = fetch("./data.json").then((res) => res.json());

const Users = dataReq.then((data) => data.users);
const Posts = dataReq.then((data) => data.posts);
const Comments = dataReq.then((data) => data.comments);
*/

/*
const dataReq = async () => {
  try {
    const response = await fetch("./data.json");
    const { users, posts, comments } = await response.json();
  } catch (error) {
    console.log(error);
  }
};

dataReq();
*/

const getUsers = async () => {
  try {
    const response = await fetch("./data.json");
    const { users } = await response.json();
    // console.log(users);
    return users;
  } catch (error) {
    console.log("Error fetching User data " + error);
  }
};

const getPosts = async () => {
  try {
    const response = await fetch("./data.json");
    const { posts } = await response.json();
    console.log(posts);
  } catch (error) {
    console.log("Error fetching Posts data " + error);
  }
};

const getComments = async () => {
  try {
    const response = await fetch("./data.json");
    const { comments } = await response.json();
    console.log(comments);
  } catch (error) {
    console.log("Error fetching Comments data " + error);
  }
};
// getPosts();
// getComments();

// FIRST METHOD
{
  const main = async () => {
    const users = await getUsers();
    console.log(users.length);
  };
  main();
}

// SECOND METHOD
{
  getUsers().then((users) => {
    console.log(users);
  });
}
