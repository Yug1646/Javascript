/*
{
const myPromise = new Promise((resolve, reject) => {
  let myData = true;

  if (myData) {
    resolve("Successfully Done");
  } else {
    reject("Data not found");
  }
});

myPromise
  .then((result) => console.log("Success: ", result))
  // .then = WHAT TO DO WHEN IT'S DONE
  .catch((error) => console.log("Error: ", error));
//.catch = WHAT TO DO WHEN IT'S FAIL
}
*/

// https://jsonplaceholder.typicode.com/users

// const fetchUser = new Promise((resolve, reject) => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json)
//     .then((data) => resolve(data))
//     .catch((error) => reject("Failed to fetch: " + error));
// });

// fetchUser
//   .then((users) => {
//     console.log("Fetched User: ", users);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
/*
{
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log("Posts: ", data);
    })
    .catch((error) => {
      console.error("Error Fetching Posts: ", error);
    });
}
*/
const userReq = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);
const postReq = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json(),
);

Promise.all([userReq, postReq])
  .then(([users, posts]) => {
    console.log("Users: ", users[0]);
    console.log("Posts: ", posts[0]);
  })
  .catch((error) => {
    console.error(error);
  });

//   Promise.any()  - // one valid source to work
