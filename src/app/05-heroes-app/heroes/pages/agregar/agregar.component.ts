import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['../../../heroes-app.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editar')){
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap( ({id})=> this.heroesService.getHeroesPorId (id)))
      .subscribe( heroe => this.heroe = heroe);
  }

  guardar(): void {
    if( this.heroe.superhero.trim().length == 0 ) {
      return;
    }
    if (this.heroe.id ) {
      // Actualizar
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe( heroe =>
          this.mostrarSnackBar('Registro actualizado'));
    } else {
      // Crear
      this.heroesService.agregarHeroe( this.heroe )
        .subscribe( heroe => {
          this.mostrarSnackBar('Registro creado correctamente'),
          this.router.navigate(['/heroesapp/heroes', heroe.id]);
        })
    }
  }

  borrarHeroe(): void{
    this.heroesService.borrarHeroe( this.heroe.id! )
      .subscribe( resp => {
        this.router.navigate(['/heroesapp/heroes']);
      })
  }

  mostrarSnackBar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'Cerrar', {
      duration: 2000
    });
  }

}
