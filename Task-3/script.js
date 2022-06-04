/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';


  


document.getElementById('btn').addEventListener('click', loadData)





async function loadData(e){
  e.preventDefault();
  const response = await fetch('https://api.github.com/users');
  const users= await response.json();

  createUserListCards(users);
} 



let createUserListCards = async (users) => {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
   
  users.forEach((user) => {
    const userCards = document.createElement("div");
    userCards.setAttribute("class", "user-card");
    outputDiv.append(userCards);
   
    const userLogin = document.createElement("h2");
    userLogin.innerText = `Login: ${user.login}`;
    const userAvatarUrl= document.createElement("h3");
    userAvatarUrl.innerText = `Avatar_url: ${user.avatar_url}`;
    userCards.append(userLogin,userAvatarUrl);
      
  })
  
}
  

