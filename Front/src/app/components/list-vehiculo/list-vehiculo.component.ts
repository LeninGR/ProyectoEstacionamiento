import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../model/vehiculo';
import { VehiculoService } from '../../services/vehiculo.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styles: []
})
export class ListVehiculoComponent implements OnInit {
  vehiculos: Vehiculo[];

  constructor(private router: Router, private service: VehiculoService) {}
  
  ngOnInit() {
      this.obtenerLstVehiculo();
  }

  registroSalidaVehiculo(vehiculo: Vehiculo): void {
    swal.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea registrar la salida del vehículo con placa ${vehiculo.placaVehiculo}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, registrar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.registrarSalidaVehiculo(vehiculo.id).subscribe(data => {
          this.obtenerLstVehiculo();
        });

        swal.fire('Registrado!', 'Se ha registrado la salida del vehículo.', 'success');
      }
    });   
  }

  addVehiculo(): void {
    this.router.navigate(['add-vehiculo']);
  }


  public obtenerLstVehiculo () {
    this.service.consultarVehiculos().subscribe(
      (data: any)  => {
        this.vehiculos = data;

        this.vehiculos.forEach(
          (valor, item) => {
            if(valor.estado === "PENDIENTE"){
              valor.estadoPendiente = false;
            }else{
              valor.estadoPendiente = true;
            }
          })

      })
  }
}
