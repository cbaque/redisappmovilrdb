import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionRegistrosService {

  constructor() { }

  validationMessages = {
    nombre: [
      { type: 'required', message: 'Nombre es obligatorio.' },
      { type: 'pattern', message: 'Verifique nombre.' },
    ],
    username: [
      { type: 'required', message: 'Usuario es obligatorio.' },
      { type: 'minlength', message: ' Mínimo 6 caracteres.' },
    ],
    contrasenia: [
      { type: 'required', message: 'Contraseña es obligatorio.' },
      { type: 'minlength', message: ' Mínimo 6 caracteres.' },
      { type: 'mustMatch', message: ' Contraseña debe ser igual.' },
    ],
    correo_electronico: [
      { type: 'required', message: 'Correo Electrónico es obligatorio.' },
      { type: 'email', message: 'Correo Electrónico inválido.' },
    ],
    ruc_ci: [
      { type: 'required', message: 'Identificación es obligatorio.' },
    ],
    inicio_actividades: [
      { type: 'required', message: 'Fecha Actividades es obligatorio.' },
    ]
  };

}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  };
}
