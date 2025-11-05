// ! Fetch API

/* 
- Fetch is an inbuilt method available in browsers.
- It allows us to fetch data.
- The fetch method requires a parameter, which is the URL of the data location.
- The fetch method returns a promise.
*/

// console.log(window);
// console.log(window.fetch); // whole function
// console.log(window.fetch("./data.json")); // Promise

/* 
- fetch method ---- > promise ---> then, catch, finally
- Promise contains ---> Response Object
- ResponseObj.text() / ResponseObj.json() ---> Promise ---> then, catch, finally
*/

// ? Example 1:
function getData(path_address) {
  fetch(path_address)
    .then(response => {
      // console.log("I am the then method of the fetch Promise");
      console.log(response.json());
      
      response.json().then(data => {
        // console.log("I am the then method of the readableStream promise");
        console.log(data);
      });
    });
}

getData("./data.json");
getData("./productsData.json");
getData("./usersData.json");
getData("https://dog.ceo/api/breeds/list/all");

// ? Example 2: Promises Way
function getData(path_address) {
  fetch(path_address)
    .then(response => 
      response.json().then(data => console.log(data))
    );
}

// getData("./data.json");
// getData("./productsData.json");
// getData("./usersData.json");
// getData("https://dog.ceo/api/breeds/list/all");
// getData("https://fakestoreapi.com/products/1");

// ? Example 3: Async Await
async function getData2(path_address) {
  let res = await fetch(path_address);
  let data = await res.json();
  console.log(data);
}

getData2("./data.json");
getData2("./productsData.json");






// example 1

function getdata(path_address){
    fetch(path_address).then(response => {
        console.log("i am fetch Priomise");
        console.log(response.json());

        response.json().then(data => {
        console.log("i am data Priomise");
        console.log(data);
        });
    });

}

getdata("data.json");
getdata("")

