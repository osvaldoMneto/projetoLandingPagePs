import { Component, Input, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AtividadesService } from 'src/app/services/atividades.service';



@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.css']
})
export class SmallCardsComponent {
  constructor(private atividadeService: AtividadesService) {}

  Small = false;
  ngOnInit() {

  }

  quantidadeCards = 4;

  Heroes: any[] = [
    { id: 1, imageURl:"https://lunetas.com.br/wp-content/uploads/2021/07/passos-para-incentivar-autonomia-das-criancas-portal-lunetas.jpg" , name: 'Psicoterapia: ', text: 'Psicoterapia é um processo. real entre cliente e psicologo', show: false},
    { id: 2,  imageURl:"/../assets/crianças.jpg", name: 'Acompanhamento: ', text: 'With supporting text below as a natural lead-in to additional content.', show: false },
    { id: 3, imageURl:"/../assets/crianças.jpg", name: 'Treinamento: ', text: 'With supporting text below as a natural lead-in to additional content.', show: false },
    { id: 4,  imageURl:"/../assets/crianças.jpg", name: 'Consultas: ', text: 'With supporting text below as a natural lead-in to additional content.', show: false }
  ];


aoClicarNoObjeto() {
  console.log('Objeto clicado:', this.Heroes);
  const elemento = document.getElementById('componenteExibicao');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

enviarParaComponenteB(hero: any) {
   this.atividadeService.enviarObjetoClicado(hero);
}



selectHero(hero: any) {
  this.enviarParaComponenteB(hero); // Envie o objeto clicado para o serviço
  console.log('Herói clicado:', hero);
  const elemento = document.getElementById('componenteExibicao');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

}
