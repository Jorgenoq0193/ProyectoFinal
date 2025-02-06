import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestión de Equipos de Fútbol';

  // Modelo del equipo
  equipo = {
    id: 0,
    nombre: '',
    estadio: '',
    presidente: '',
    costoMaximo: 0,
    costoMinimo: 0
  };

  equipos = [
    { id: 1, nombre: 'Real Madrid', estadio: 'Santiago Bernabéu', presidente: 'Florentino Pérez', costoMaximo: 1000, costoMinimo: 500 },
    { id: 2, nombre: 'Barcelona', estadio: 'Camp Nou', presidente: 'Joan Laporta', costoMaximo: 950, costoMinimo: 480 },
    { id: 3, nombre: 'Manchester United', estadio: 'Old Trafford', presidente: 'Joel Glazer', costoMaximo: 900, costoMinimo: 450 },
  ];

  // Agregar equipo
  agregarEquipo() {
    if (this.equipo.id === 0) {
      alert('El ID debe ser diferente de CERO');
      return;
    }

    if (this.equipos.find(eq => eq.id === this.equipo.id)) {
      alert('Ya existe un equipo con ese ID');
      return;
    }

    this.equipos.push({ ...this.equipo });

    this.reiniciarEquipo();
  }

  // Seleccionar equipo para edición
  seleccionarEquipo(equipoSeleccionado: any) {
    this.equipo = { ...equipoSeleccionado };
  }

  // Modificar equipo
  modificarEquipo() {
    const equipoEncontrado = this.equipos.find(eq => eq.id === this.equipo.id);
    if (equipoEncontrado) {
      Object.assign(equipoEncontrado, this.equipo);
      this.reiniciarEquipo();
    } else {
      alert('No existe ese ID');
    }
  }

  // Eliminar equipo
  eliminarEquipo(id: number) {
    this.equipos = this.equipos.filter(eq => eq.id !== id);
  }

  // Reiniciar formulario
  reiniciarEquipo() {
    this.equipo = { id: 0, nombre: '', estadio: '', presidente: '', costoMaximo: 0, costoMinimo: 0 };
  }
}
