import { read } from '../../environment.js';

export class partners {
  init() {
    read("ongs")
      .then(
        res=>{
          let ongs = document.querySelector('.ongs-list')
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
                  <div class="logo">
                    <img
                      src="${res[i].logo}"
                      alt="${res[i].name}">
                  </div>
                  <h3>${res[i].name}</h3>
                  <p class="obs">Clique para ver mais</p>
                </div>
                <div class="info" style="background-color: ${color}">
                  <h3>${res[i].name}</h3>
                  <p><strong>${res[i].location}</strong></p>
                  <img
                    src="${res[i].image}"
                    alt="${res[i].name}">
                </div>
                <a
                  href="${res[i].url}"
                  target="_blank"
                  class="external-link material-icons">
                  <span class="material-symbols-outlined">
                    open_in_new
                  </span>
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


