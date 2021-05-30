import { OptionSelectComponent } from 'src/app/components/modal/option-select/option-select.component';
import { EnumNumberOfGames, EnumWhoStarts, numberOfGames, StateManagerService, whoStarts } from 'src/app/service/state-manager.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss']
})
export class GameConfigComponent implements OnInit {

  form: FormGroup;
  selectedNumberOfGames = numberOfGames[EnumNumberOfGames.TWO];
  selectedwhoStarts = whoStarts[EnumWhoStarts.ALTERNATE];
  constructor(
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly service: StateManagerService,
    private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstPlayerName: ['David'],
      secondPlayerName: ['Maria'],
      numberOfGames: [EnumNumberOfGames.TWO],
      whoStarts: [EnumWhoStarts.ALTERNATE],
    });
  }

  openTurnModal() {
    const dialogRef = this.dialog.open(OptionSelectComponent, {
      width: '450px',
      data: { selection: this.form.getRawValue().whoStarts, options: whoStarts, title: 'Who Starts' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.form.controls['whoStarts'].setValue(result);
        this.selectedwhoStarts = whoStarts[result];
      }
    });
  }

  openGameNumbersModal() {
    const dialogRef = this.dialog.open(OptionSelectComponent, {
      width: '450px',
      data: {selection: this.form.getRawValue().numberOfGames, options: numberOfGames, title: 'Number Of Game' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.form.controls['numberOfGames'].setValue(result);
        this.selectedNumberOfGames = numberOfGames[result];
      }
    });
  }

  start() {
    this.service.config = this.form.getRawValue();
    this.router.navigate(['/game']);
  }

}
