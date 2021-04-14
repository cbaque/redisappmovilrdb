import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ValidacionRegistrosService, MustMatch } from 'src/app/helpers/validacion-registros.service';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page implements OnInit, OnDestroy {
  usuario: Usuario;
  userForm: FormGroup;
  segmentModel = 'agua';

  @ViewChild('chart', { static: true }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    public loginSrv: LoginService,
    private usrServ: UsuarioService,
    private formBuilder: FormBuilder,
    public validator: ValidacionRegistrosService,
  ) {
      this.chartOptions = {
        series: [70],
        chart: {
          height: 350,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%'
            }
          }
        },
        labels: ['Cricket']
      };
  }


  saveUsuario() {

    console.log( this.f );

  }

  ngOnInit() {
    
    this.userForm = this.createUsuarioActForm();

    this.usrServ.getUsuario()
    .then((res) => {
      this.usuario = res;
      this.setValueFormData();
    });
  }


  setValueFormData(): void {
    this.userForm.get('username').patchValue( this.usuario.username );
    this.userForm.get('correo_electronico').patchValue( this.usuario.email );
  }


  createUsuarioActForm() {
    return this.formBuilder.group({
      username:             new FormControl( '' , [ Validators.required, Validators.minLength(6) ] ),
      contrasenia:          new FormControl( '' , [ Validators.required, Validators.minLength(6) ] ),
      confirmPassword:      new FormControl( '' , [ Validators.required ] ),
      correo_electronico:   new FormControl( '' , [ Validators.required, Validators.email ] ),
      notificaciones:       new FormControl(false),
    }, {
      validator: MustMatch('contrasenia', 'confirmPassword')
    });
  }

  get f() {
    return this.userForm.controls;
  }

  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    // (this.recicladorSubs) ? this.recicladorSubs.unsubscribe() : '';
  }

}
