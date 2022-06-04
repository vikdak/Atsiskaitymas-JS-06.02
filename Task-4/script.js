/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

async function loadData(){
    const response = await fetch("./cars.json");
    const cars= await response.json();
 
    createCarListCards(cars);
  } 
 
  let createCarListCards = async (cars) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
     
    cars.forEach((car) => {
      const carCards = document.createElement("div");
      carCards.setAttribute("class", "car-card");
      outputDiv.append(carCards);
     
      const carBrand = document.createElement("h1");
      carBrand.innerHTML = `${car.brand} gaminami modeliai:`;
      carCards.append(carBrand);

      const carModels=car.models;
      for (const model of carModels) {
        const listitem=document.createElement("li");
        listitem.textContent=model;
        carCards.appendChild(listitem)
        }
      
    })
    
  }
    
  loadData()
  
  