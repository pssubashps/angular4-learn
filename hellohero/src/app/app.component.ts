import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit }  from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heros';
  heroes:Hero[];
  selectedHero:Hero ;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor(private heroService: HeroService) {

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
}
