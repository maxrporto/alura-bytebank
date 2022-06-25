import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

 // transferencias: any[] = [];
  //destino: number;
  //valor: number;

  constructor(private service: TransferenciaService){

  }

  transferir($event){
    this.service.adicionar($event);


    /**
     * operador spread operator (...) , desconstrói o objeto $event
     * >> Ou seja, se estão chegando duas propriedades, que são valor e destino, ao invés de pegar o objeto e passar para dentro de transferencia
     * estou pegando apenas as propriedades internas dele e passando para dentro do objeto transferencia.
     */
    //const transferencia = {...$event, data: new Date()}
    //this.transferencias.push(transferencia);
   //this.transferencias.push($event);
    //this.destino = $event.destino;
    //this.valor =$event.valor;
  }
}
