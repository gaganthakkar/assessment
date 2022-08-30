/*Write a function which combines an array of objects, grouped by a key you provide (this
    key will correspond to a key found in the objects. The function will index the new object
    with the value of those keys. */


    const users = [
      { id: 1, name: "bob" },
      { id: 2, name: "sally" },
      { id: 3, name: "bob", age: 30 },
      { id: 4, name1: "bob" },
      null, // passed requirement, getting output
      undefined, // passed requirement, getting output
      "hello", // passed requirement, getting output
      [1], // passed requirement, getting output
    ];
    
    const newArr = [];
    function arrangeByName(users) {
      // Created function
      const newUser = {};
      users.map((user) => {
        // map iteration
        if (user && user.name) {
          if (!newUser.hasOwnProperty(user.name)) {
            newUser[`${user.name}`] = [];
            // newUser[`${user.name}`].push(user[0]);
            newUser[`${user.name}`].push(user);
            // return newUser;
          } else {
            // newUser[`${user.name}`].push(user[0]);
            newUser[`${user.name}`].push(user);
          }
        }
      });
      return newUser;
    }
    
    console.log(arrangeByName(users)); // Function Called

