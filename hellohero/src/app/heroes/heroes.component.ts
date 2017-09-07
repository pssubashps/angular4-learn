import { Component } from '@angular/core';
import { Hero } from './../hero';
import { HeroService } from './../hero.service';
import { OnInit }  from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  title = 'Tour of Heros';
  heroes:Hero[];
  selectedHero:Hero ;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor(private heroService: HeroService,
    private router: Router,
  ) {

  }
  
  geHeroes() : void {
    this.heroService.getHeroesSlowly().then(heros => this.heroes = heros);
  }
  onSelect(hero:Hero) : void {
    this.selectedHero = hero;
  }
  ngOnInit() : void {
    this.geHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
