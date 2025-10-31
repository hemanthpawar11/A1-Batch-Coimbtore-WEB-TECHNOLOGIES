let p = new Promise((resolve, reject ) => {
    let API_Request = true;
    if (API_Request == true) {
        resolve ([
        { empname: "Hemanth", role: "web developer", sal: "50000" },
        { empname: "barath", role: "Java developer", sal: "500000" },
        { empname: "Arun", role: "ML developer", sal: "40000" },
        { empname: "Punch", role: "Java developer", sal: "70000" },
          
        ]);
    } else {
        reject ("Sometjhing went wrong, Please try again later");
    };

});

p.then((data) => {
    console.log(data);
    console.log("I am then , I will work only if the is fullfilled");
}).catch((err) => {
    console.log(err);
    console.log(" I am catch , I will work only if the promise is rejected");
});

p.finally(() => {
    console.log("I am finally , I will work either the promise is fullfilled or rejected");
});