const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello shashi");
  }, 6000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello reddy");
  }, 10000);
});

async function handlePromise() {
  console.log("1");
  const val = await p1;
  console.log(val);
  console.log("2");
  const val2 = await p2;

  console.log(val2);
  console.log(3);
}
function main() {
  console.log("main function");
  setTimeout(() => {
    console.log("main hu main");
  }, 1000);
}
// handlePromise();
// main();

// fetching data from apis
async function fetchApi() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();
    console.log(jsonData);
  } catch (error) {
    console.error(error);
  }
}

fetchApi();
