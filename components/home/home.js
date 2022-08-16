import { read } from '../../environment.js';

export class home {
  init() {
    read("tips")
      .then(
        res=>{
          let tips = document.querySelector('.tip-cards')
          if(tips) {
            for (let i = 0; i < 3; i++) {
              let color
              switch (i) {
                case 0:
                  color = "#FF720D";
                  break;
  
                case 1:
                  color = "#E88300";
                  break;
  
                case 2:
                  color = "#FFAB00";
                  break;
              
                default:
                  color = "#FF720D";
                  break;
              }
              tips.innerHTML += `
              <input type="checkbox" id="${res[i].id}" name="${res[i].id}" value="${res[i].id}">
              <label class="card" for="${res[i].id}">
                <div class="summary">
                  <div class="color" style="background-color: ${color}"></div>
                  <h3>${res[i].name}</h3>
                  <p class="resume">${res[i].summary}</p>
                  <p class="observation">Clique para ver mais</p>
                </div>
                <div class="description" style="background-color: ${color}">
                  <h3>${res[i].name}</h3>
                  <p>${res[i].description}</p>
                </div>
              </label>
              `
            }
          }
        }
      )
      .catch(
        error=> console.log(error)
      );

    read("ongs")
      .then(
        res=>{
          res = res.filter(ong=>{if(ong.acao && ong.description) {return ong}})
          let image = document.querySelector(".images .actions-cards")
          let text = document.querySelector(".text .actions-cards")
          for (let i = 0; i < 3; i++) {
            image.innerHTML += `
              <li>
                <img
                  src="${res[i].acao}"
                  alt="ONG ${res[i].name}">
              </li>
            `
            text.innerHTML += `
              <li>
                <h3 class="name">${res[i].name}</h3>
                <p class="description">${res[i].description}</p>
                <div class="buttons">
                  <a class="website btn" target="_blank" href="${res[i].url}">saiba mais</a>
                </div>
              </li>
            `
          }
        }
      )
      .catch(
        error => console.log(error)
      )
    
    read("depositions")
      .then(
        res => {
          let dep = document.querySelector('.test-list')
          for (let i = 0; i < 3; i++) {
            dep.innerHTML += `
              <li class="card">
                <img
                  src="${res[i].image}"
                  alt="${res[i].name}">
                <h3>${res[i].name}</h3>
                <p>${res[i].description}</p>
              </li>
            `
          }
        }
      )
      .catch(
        error => console.log(error)
      )
  }
}


