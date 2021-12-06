import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['../../../heroes-app.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) =>
          this.heroeService.getHeroesPorId(id))
      )
      .subscribe( heroe => this.heroe = heroe );
  }

  editar(){
    this.router.navigate(['heroesapp/heroes/editar', this.heroe.id ]);
  }

  regresar(){
    this.router.navigate(['heroesapp/heroes']);
  }
}
