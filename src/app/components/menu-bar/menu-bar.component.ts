import { AtividadesService } from './../../services/atividades.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

constructor(private atividadeservice : AtividadesService){

}
  enviarParaComponenteB(hero: any) {
    this.atividadeservice.enviarObjetoClicado(hero)
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
