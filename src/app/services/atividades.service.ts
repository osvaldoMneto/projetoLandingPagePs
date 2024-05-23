import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AtividadesService {

  private atividadeClicadoSource = new BehaviorSubject<any>(null);
  objetoClicado$ = this.atividadeClicadoSource.asObservable();

  enviarObjetoClicado(heroiClicado: any) {
    console.log('Herói clicado:', heroiClicado);
    this.atividadeClicadoSource.next(heroiClicado);

  }
}
