import axios from "axios";

async function getData(user_id) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );

  let postArray = new Array();
  for (let index = user_id; index <= 10; index++) {
    let araislem = await axios(
      `https://jsonplaceholder.typicode.com/posts/${index}`
    );
    postArray.push(araislem.data);
  }
  console.log(user, postArray);
};

export default getData;
