/*
    SINGLE FETCH
*/

/*
{
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      const user = await response.json();
      console.log(`User name is ${user.name}`);
    } catch (error) {
      console.log(error);
    }
  };

  fetchUsers();
}
*/

/*
    MULTIPLE FETCH
*/

const fetchMultiData = async () => {
  try {
    const userPromise = fetch("https://jsonplaceholder.typicode.com/users/1");
    const postPromise = fetch("https://jsonplaceholder.typicode.com/posts/1");

    const [userRes, postRes] = await Promise.all([userPromise, postPromise]);

    const user = await userRes.json();
    const post = await postRes.json();
    console.log(user, post);
    console.log("User 1:", user);
    // console.log(`Post 1: ${post}`);  // WHY THIS RETURNS ONLY AS OBJECT ??
  } catch (error) {
    console.error(`Current Error: ${error}`);
  }
};

fetchMultiData();

/*
    IN THIS FILE I HAVE LEARN:

    1. ASYNC
    2. AWAIT
    3 TRY / CATCH

    1. ASYNC - ASYNC KEYWORD IS USE TO TELL THE V8 ENGINE THAT THE PROCESS IS ASYNCHRONOUS

    2. AWAIT - AWAIT KEYWORD IS USE TO TELL THAT LET THE TASK/PROMISE GET WISH FIRST

    3. TRY - TRY BLOCK IS WHERE YOU WRITE THE CODE WHICH YOU FEEL LIKE IT WILL GENERATE AN ERROR A TRY BLOCK OF CODE 

    4. CATCH - CATCH BLOCK IS USED TO DISPLAY THE ERROR GENERATED FROM TRY BLOCK; IF AN ERROR IS GENERATED FROM CODE OF TRY BLOCK THAN CATCH WILL CATCH THE ERROR AND DISPLAY IT 

    5. PROMISE.ALL - THIS IS USED TO RUN MULTIPLE PROMISE AT SAME TIME WITHOUT DELAYING THE PROCESS AND IT CAN GENERATE ALL THE PROMISE DATA OR ONE DATA AS PROMISE.ALL FUNCTION IS THAT 
*/
