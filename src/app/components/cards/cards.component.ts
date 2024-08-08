import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {



  aoClicarNoObjeto() {

    const elemento = document.getElementById('componenteExibicao');
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  }


  proximoSlide(){

    const btn_next = document.querySelector(".next")
    const btn_preview = document.querySelector(".preview")
    const btn_nextR = document.querySelector(".nextR")
    const btn_previewR = document.querySelector(".previewR")
    const desc = document.querySelectorAll(".card-text")
    btn_next?.classList.toggle("desactive")
    btn_preview?.classList.toggle("desactive")
    btn_nextR?.classList.toggle("desactive")
    btn_previewR?.classList.toggle("desactive")
    desc[0].classList.toggle("desactive")
    desc[1].classList.toggle("desactive")
    desc[2].classList.toggle("desactive")
    desc[3].classList.toggle("desactive")
    desc[4].classList.toggle("desactive")



  }


}
