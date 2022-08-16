import { read } from '../../environment.js';

export class tips {
  init() {
    read("tips")
      .then(
        res=>{
          let ongs = document.querySelector('.person-list')
          for (let i = 0, e = 0; i < res.length; i++) {
            let color
            switch (e) {
              case 0:
                color = "#FF720D";
                e = 1
                break;

              case 1:
                color = "#E88300";
                e = 2
                break;

              case 2:
                color = "#FFAB00";
                e = 0
                break;
            
              default:
                color = "#FF720D";
                e = 1
                break;
            }
            ongs.innerHTML += `
              <input type="checkbox" id="${res[i].id}" name="${res[i].id}" value="${res[i].id}">
              <label class="card" for="${res[i].id}" style="background-color: ${color}">
                <div class="resume">
                  <div class="color" style="background-color: ${color}">
                    
                  </div>
                  <h3>${res[i].name}</h3>
                  <p class="obs">Clique para ver mais</p>
                </div>
                <div class="info" style="background-color: ${color}">
                  <h3>${res[i].name}</h3>
                  <p>${res[i].description}</p>
                </div>
                </a>
              </label>
            `            
          }
        }
      )
      .catch(
        error => console.log(error)
      )
  }
}


