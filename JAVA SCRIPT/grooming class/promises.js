let p = new Promise((res, rej) => {
    let API_Requst = true;
    if (API_Requst) {
        // code res
        res([
            { sname: "hemanth" }, 
            { sname: "Barath" }, 
            { sname: "Harish" }
        ]);
    }
    else {
        rej("error");
    }
});
console.log(p);
