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

  private checkBottomFour(rowIndex: number, cellIndex: number): boolean {
    let success = true;
    for (let i = 1; i < checkInline; i++) {
      if(rowIndex + i < this.cells.length
        && this.cells[rowIndex + i][cellIndex] === this.turn) {
          continue;
      } else {
        success = false;
        break;
      }
    }
    return success;
  }

  private checkRightFour(rowIndex: number, cellIndex: number): boolean {
    let success = true;
    for (let i = 1; i < checkInline; i++) {
      if(cellIndex + i < this.cells.length
        && this.cells[rowIndex][cellIndex + i] === this.turn) {
          continue;
      } else {
        success = false;
        break;
      }
    }
    return success;
  }

  private checkLeftFour(rowIndex: number, cellIndex: number): boolean {
    let success = true;
    for (let i = 1; i < checkInline; i++) {
      if(cellIndex - i > -1
        && this.cells[rowIndex][cellIndex - i] === this.turn) {
          continue;
      } else {
        success = false;
        break;
      }
    }
    return success;
  }

  private checkDiagonalFour(rowIndex: number, cellIndex: number): boolean {
    let success = true;
    // down-right 4
    for (let i = 1; i < checkInline; i++) {
      if(cellIndex + i < this.cells.length && rowIndex + i < this.cells.length
        && this.cells[rowIndex + i][cellIndex + i] === this.turn) {
          success = true;
          continue;
      } else {
        success = false;
        break;
      }
    }

    // top-left 4
    if (!success) {
      success = true;
      for (let i = 1; i < checkInline; i++) {
        if(cellIndex - i > -1 && rowIndex - i > -1
          && this.cells[rowIndex - i][cellIndex - i] === this.turn) {
            continue;
        } else {
          success = false;
          break;
        }
      }
    }

    //down-left
    if (!success) {
      success = true;
      for (let i = 1; i < checkInline; i++) {
        if(cellIndex - i > -1 && rowIndex + i < this.cells.length
          && this.cells[rowIndex + i][cellIndex - i] === this.turn) {
            continue;
        } else {
          success = false;
          break;
        }
      }
    }

    //top-right
    if (!success) {
      success = true;
      for (let i = 1; i < checkInline; i++) {
        if(cellIndex + i < this.cells.length && rowIndex - i > -1
          && this.cells[rowIndex - i][cellIndex + i] === this.turn) {
            continue;
        } else {
          success = false;
          break;
        }
      }
    }
    return success;
  }

  private checkWin(rowIndex: number, cellIndex: number): boolean {
    let success;
    success = this.checkBottomFour(rowIndex, cellIndex);
    if (!success) {
      success = this.checkRightFour(rowIndex, cellIndex);
    }
    if (!success) {
      success = this.checkLeftFour(rowIndex, cellIndex);
    }
    if (!success) {
      success = this.checkDiagonalFour(rowIndex, cellIndex);
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
