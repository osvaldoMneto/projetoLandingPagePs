import { AtividadesService } from './../../services/atividades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})



export class MenuBarComponent {

index = false
constructor(private atividadeservice : AtividadesService){

}
  OnInit(){
    this.abrirMenu()
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

abrirMenu(){
  const menu = document.querySelector('.mainMenu_resp')
  menu?.classList.toggle('nav-bar-aberta')
  //const icone = document.getElementById('menu')as HTMLLIElement
 // const lista = document.getElementById('lista')as HTMLLIElement
  //if(this.index==false){
  //icone.style.order='2'
 // lista.style.order='1'
  //this.index=true
  //}else if(this.index==true){
   // icone.style.order='1'
   // lista.style.order='2'
   // this.index=false
 // }
}

}
