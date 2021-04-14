import { Component, OnInit } from '@angular/core';
import { RecicladorService } from 'src/app/services/reciclador.service';
import { Observable } from 'rxjs';
import { AgendaReciclador } from 'src/app/interfaces/reciclador';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-landing-reciclador',
  templateUrl: './landing-reciclador.component.html',
  styleUrls: ['./landing-reciclador.component.scss'],
})
export class LandingRecicladorComponent implements OnInit {

  // agenda: Observable<AgendaReciclador[]>;
  fechActual = new Date();
  agenda: AgendaReciclador[] = [];

  constructor(
    private reciclaSrv: RecicladorService,
    private router: Router,
    private dataSrv: DataService
  ) { }

  ngOnInit() {
    // this.agenda = this.reciclaSrv.getDataAgenda();
    this.reciclaSrv.getDataAgenda()
    .subscribe( (res: AgendaReciclador[]) => {
      this.agenda = res;
    });
  }


  goConfirmEntrega(id: number) {

    this.dataSrv.setData(id, this.agenda.filter( a => a.id_cabecera === id ) );
    this.router.navigate(['/dashboard/reciclar', id]);

  }

}
