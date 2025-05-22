import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarServiceService } from '../../../services/public/car/car-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-maker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-maker.component.html',
  styleUrls: ['./car-maker.component.css']
})
export class CarMakerComponent implements OnInit {
  marcas: any[] = [];
  modelos: any[] = [];
  marcaSeleccionada: string = '';

  constructor(private carService: CarServiceService) {}

  ngOnInit(): void {
    this.carService.getMarcas().subscribe(response => {
      this.marcas = response;
    });
  }

  cargarModelos(): void {
    if (!this.marcaSeleccionada) return;
    this.carService.getModelosPorMarca(this.marcaSeleccionada).subscribe(data => {
      this.modelos = data;
    });
  }
}
