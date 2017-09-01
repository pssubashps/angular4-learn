import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService} from './hero.service';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
