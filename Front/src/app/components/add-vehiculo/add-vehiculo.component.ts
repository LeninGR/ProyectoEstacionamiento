import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculoService } from '../../services/vehiculo.service';
import swal from 'sweetalert2';
import { Vehiculo } from 'src/app/model/vehiculo';
import { $ } from 'protractor';

@Component({
  selector: 'app-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  styles: []
})
export class AddVehiculoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: VehiculoService) { 
    this.addForm = this.formBuilder.group({
      placaVehiculo: ['', [Validators.required, Validators.minLength(6)]],
      tipoVehiculo: ['', [Validators.required]],
      cilindrajeMoto: []
    });     
  }

  addForm: FormGroup;

  vehiculo : Vehiculo;

  ngOnInit() {   
  }

  saveData(){
    console.log(this.addForm.value);
  }

  onSubmit() {
    //console.log('::::+>Se va a enviar registro entrada'+JSON.stringify(this.addForm.value));

    this.service.registrarEntradaVehiculo( this.addForm.value )
      .subscribe((data: any) => {
        this.vehiculo = data;
        if(null==this.vehiculo.error){
          this.router.navigate(['list-vehiculo']);
          swal.fire({
            position: 'top',
            type: 'success',
            title: `Vehículo registrado con éxito`,
            showConfirmButton: false,
            timer: 1500
          });
        }else{
          this.router.navigate(['add-vehiculo']);
          swal.fire({
            position: 'top',
            type: 'error',
            title: this.vehiculo.error,
            showConfirmButton: false,
            timer: 1500
          });          
        }
      });
  }

}
