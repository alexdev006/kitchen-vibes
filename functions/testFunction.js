exports.handler = async () => {
  console.log("yoooooooooo");

  const data = { name: "Jon", age: 20, job: "Dev" };

  //return resp to browser
  return {
    satusCode: 200,
    body: JSON.stringify(data),
  };
};
