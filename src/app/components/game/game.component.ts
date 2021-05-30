import { EnumNumberOfGames, EnumWhoStarts, StateManagerService } from 'src/app/service/state-manager.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const checkInline = 4;
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  turn: string;
  lastGameTurn: string;
  cells = [];
  gameEnd = false;
  tornamentEnd = false;
  tournamentWinnerName: string;
  roundWinnerName: string;

  games = {
    whoStarts: EnumWhoStarts.ALTERNATE,
    totalGames: 0,
    currentGame: 0,
    firstPlayerName: '',
    secondPlayerName: '',
    firstPlayerScore: 0,
    secondPlayerScore: 0
  }

  constructor(
    private readonly service: StateManagerService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.startNewGame();
  }

  private decideTurn() {
    switch (this.games.whoStarts) {
      case EnumWhoStarts.ALTERNATE:
        if (this.lastGameTurn === 'P1') {
          this.turn = 'P2';
          this.lastGameTurn = 'P2';
        } else {
          this.turn = 'P1';
          this.lastGameTurn = 'P1';
        }
      break;
      case EnumWhoStarts.FIRST_PLAYER:
        this.turn = 'P1';
      break;
      case EnumWhoStarts.SECOND_PLAYER:
        this.turn = 'P2';
      break;
      case EnumWhoStarts.LOOSER:
        if (this.games.firstPlayerName === this.roundWinnerName) {
          this.turn = 'P2';
        } else {
          this.turn = 'P1';
        }
      break;
      case EnumWhoStarts.WINNER:
        if (this.games.firstPlayerName === this.roundWinnerName) {
          this.turn = 'P1';
        } else {
          this.turn = 'P2';
        }
      break;
      default:
        break;
    }
  }

  private startNewGame() {
    this.roundWinnerName = '';
    this.gameEnd = false;
    if (!this.service.config) {
      this.router.navigate(['/']);
    }
    const {firstPlayerName, secondPlayerName, numberOfGames, whoStarts} = this.service.config;
    this.games.firstPlayerName = firstPlayerName;
    this.games.secondPlayerName = secondPlayerName;
    this.games.whoStarts = whoStarts;
    this.games.currentGame++;
    switch (numberOfGames) {
      case EnumNumberOfGames.TWO:
        this.games.totalGames = 2;
      break;
      case EnumNumberOfGames.THREE:
        this.games.totalGames = 3;
      break;
      case EnumNumberOfGames.FIVE:
        this.games.totalGames = 5;
      break;
      case EnumNumberOfGames.TEN:
        this.games.totalGames = 10;
      break;
    }
    this.cells =  [
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0]];

    this.decideTurn();
  }

  private switchTurn() {
    if (this.turn === 'P1') {
      this.turn = 'P2';
    } else {
      this.turn = 'P1';
    }
  }

  private findDestinationCell(rowIndex: number, cellIndex: number) {
    if (rowIndex < this.cells.length - 1) {
      if (!this.cells[rowIndex + 1][cellIndex]) {
        this.findDestinationCell(rowIndex + 1, cellIndex);
      } else {
        this.cells[rowIndex][cellIndex] = this.turn;
        this.checkWin(rowIndex, cellIndex);
      }
    } else {
      if (!this.cells[rowIndex][cellIndex]) {
        this.cells[rowIndex][cellIndex] = this.turn;
        this.checkWin(rowIndex, cellIndex);
      }
    }
  }

  cellSelected(rowIndex: number, cellIndex: number) {
    if (this.gameEnd) {
      return;
    }
    if (!this.cells[rowIndex][cellIndex]) {
      this.findDestinationCell(rowIndex, cellIndex);
    }
  }

  private checkVerticle(rowIndex: number, cellIndex: number): boolean {
    let success = false;
    let counter = 0;
    let playerId = this.cells[rowIndex][cellIndex];
    for (let i = 0; i < this.cells.length; i++) {
      if (playerId === this.cells[i][cellIndex]) {
        counter++;
        if (counter > 3) {
          success = true;
          break;
        }
      } else {
        counter = 0;
      }
    }
    return success;
  }

  private checkHorizontal(rowIndex: number, cellIndex: number): boolean {
    let success = false;
    let counter = 0;
    let playerId = this.cells[rowIndex][cellIndex];
    for (let i = 0; i < this.cells.length; i++) {
      if (playerId === this.cells[rowIndex][i]) {
        counter++;
        if (counter > 3) {
          success = true;
          break;
        }
      } else {
        counter = 0;
      }
    }
    return success;
  }

  // check diagonal \
  private checkFirstDiagonal(rowIndex: number, cellIndex: number): boolean {
    let success = false;
    let counter = 0;
    const playerId = this.cells[rowIndex][cellIndex];
    let startRowIndex = rowIndex;
    let startCellIndex = cellIndex;
    while (!(startRowIndex === 0 || startCellIndex === 0)) {
      startRowIndex--;
      startCellIndex--;
    }

    while (!(startRowIndex === this.cells.length || startCellIndex === this.cells.length)) {
      if (playerId === this.cells[startRowIndex][startCellIndex]) {
        counter++;
        if (counter > 3) {
          success = true;
          break;
        }
      } else {
        counter = 0;
      }
      startRowIndex++;
      startCellIndex++;
    }

    return success;
  }

  // check diagonal /
  private checkOtherDiagonal(rowIndex: number, cellIndex: number): boolean {
    let success = false;
    let counter = 0;
    const playerId = this.cells[rowIndex][cellIndex];
    let startRowIndex = rowIndex;
    let startCellIndex = cellIndex;
    while (!(startRowIndex === 0 || startCellIndex === this.cells.length - 1)) {
      startRowIndex--;
      startCellIndex++;
    }

    while (!(startRowIndex === this.cells.length || startCellIndex === 0)) {
      if (playerId === this.cells[startRowIndex][startCellIndex]) {
        counter++;
        if (counter > 3) {
          success = true;
          break;
        }
      } else {
        counter = 0;
      }
      startRowIndex++;
      startCellIndex--;
    }

    return success;
  }

  private checkDiagonals(rowIndex: number, cellIndex: number): boolean {
    // first-daigonal
    let success = false;
    success = this.checkFirstDiagonal(rowIndex, cellIndex);
    if (!success) {
      success = this.checkOtherDiagonal(rowIndex, cellIndex);
    }
    return success;
  }

  private checkWin(rowIndex: number, cellIndex: number): boolean {
    let success;
    success = this.checkVerticle(rowIndex, cellIndex);
    if (!success) {
      success = this.checkHorizontal(rowIndex, cellIndex);
    }
    if (!success) {
      success = this.checkDiagonals(rowIndex, cellIndex);
    }
    if (!success) {
      this.switchTurn();
    } else {
      this.gameEnd = true;
      if (this.turn === 'P1') {
        this.games.firstPlayerScore++;
        this.roundWinnerName = this.games.firstPlayerName;
      } else {
        this.games.secondPlayerScore++;
        this.roundWinnerName = this.games.secondPlayerName;
      }

      if (this.games.totalGames === this.games.currentGame) {
        this.endGame();
      }
    }
    return success;
  }

  endGame() {
    this.tornamentEnd = true;
    if (this.games.firstPlayerScore > this.games.secondPlayerScore) {
      this.tournamentWinnerName = this.games.firstPlayerName;
    } else {
      this.tournamentWinnerName = this.games.secondPlayerName;
    }
  }

}
