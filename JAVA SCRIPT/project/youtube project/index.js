async function Youtube() {
  let res = await fetch("./data.json");
  let data = await res.json();
  console.log(data);

  data.map((val, ind) => {
    console.log(val);
    console.log(val.video_url);
    console.log(val.video_title);
    console.log(val.video_thumbnail);

   
    let main = document.createElement("main");
    main.innerHTML = `
        <img  src="${val.video_thumbnail}">
        <h3>${val.video_title}</h3>
      `;
    console.log(main);

    let playBox = document.getElementById("playBox");
    let playList = document.getElementById("playList");

    
    playList.append(main);

    
    main.addEventListener("click", () => {
      playBox.innerHTML = `
      <video src="${val.video_url}" controls autoplay ></video>
        `;
    });
  });
}
Youtube();