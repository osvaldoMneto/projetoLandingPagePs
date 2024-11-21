import { Component, Input } from '@angular/core';
import { AtividadesService } from 'src/app/services/atividades.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() Heroes:any;

  heroiClicado: any;

  constructor(private atividadeService: AtividadesService) {}

  ngOnInit() {
    this.atividadeService.objetoClicado$.subscribe((heroiClicado: any) => {

      this.heroiClicado = heroiClicado;
      console.log('Herói clicado:', heroiClicado)
      //this.Heroes = objeto;
    });


  }
}

