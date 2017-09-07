import 'rxjs/add/operator/switchMap';
import {Component,Input,OnInit} from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';

@Component({
    selector:"hero-detail",
    templateUrl:'./hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
   @Input() hero: Hero;
   constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    console.log("hero detqails");
  }
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}