import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { GameConfigComponent } from './components/game-config/game-config.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { OptionSelectComponent } from './components/modal/option-select/option-select.component';
import { StateManagerService } from './service/state-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomBtnComponent,
    GameConfigComponent,
    HomeComponent,
    OptionSelectComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [StateManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
