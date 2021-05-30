import { GameConfigComponent } from 'src/app/components/game-config/game-config.component';
import { GameComponent } from 'src/app/components/game/game.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path:'',
    pathMatch: 'full',
    component: HomeComponent
  },{
    path: 'two-player',
    component: GameConfigComponent
  },{
    path: 'game',
    component: GameComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
