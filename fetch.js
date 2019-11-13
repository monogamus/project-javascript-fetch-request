async function getFollowers() {
    const item = document.createElement("div");
  
    item.className = "row";
  
    fetch("https://api.github.com/users/monogamus/followers")
      .then(res => res.json())
      .then(follower => {
        follower.map(data => {
          const img = document.createElement("img");
  
          const cardHolder = document.createElement("div");
          const card = document.createElement("div");
          const cardBody = document.createElement("div");
          const followerName = document.createElement("a");
          const followerInfo = document.createElement("p");
  
          cardHolder.className = "col-md-4 align-items-stretch";
          card.className = "card mb-4 shadow-sm ";
  
          img.setAttribute("src", data.avatar_url);
          img.className = "foto-follower img-fluid max-width:100%";
          img.style = "height : 100 px";
          followerName.innerText = data.login;
          followerName.href = data.html_url;
          followerName.className = "follower-text";
          followerInfo.innerText = `${data.id}  ${data.login}`;
          cardBody.className = "card-body follower-link";
  
          item.append(cardHolder);
          cardHolder.append(card);
          card.append(img);
          card.append(cardBody);
          cardBody.append(followerName);
          cardBody.append(followerInfo);
  
          document.getElementById("Main").append(item);
        });
      });
  }
  
  getFollowers();