import { Component } from '@angular/core';
import { AtividadesService } from './services/atividades.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-nayane';


  heroiClicado: any;

  constructor(private atividadeService: AtividadesService) {}

  ngOnInit() {
    this.atividadeService.objetoClicado$.subscribe((heroiClicado: any) => {

      console.log('Herói clicado:', heroiClicado)
      this.heroiClicado = heroiClicado;
      //this.Heroes = objeto;

      const elemento = document.getElementById('componenteExibicao');
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

    });


  }
}
