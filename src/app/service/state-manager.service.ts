import { Injectable } from '@angular/core';

export enum EnumNumberOfGames {
  TWO = 'TWO',
  THREE = 'THREE',
  FIVE = 'FIVE',
  TEN = 'TEN'
}

export enum EnumWhoStarts {
  ALTERNATE = 'ALTERNATE',
  LOOSER = 'LOOSER',
  WINNER = 'WINNER',
  FIRST_PLAYER = 'FIRST_PLAYER',
  SECOND_PLAYER = 'SECOND_PLAYER'
}

export interface GameConfig {
  firstPlayerName: string;
  secondPlayerName: string;
  numberOfGames: EnumNumberOfGames;
  whoStarts: EnumWhoStarts;
}

export interface IterableOptions {
  [key:string]: string
}

export const numberOfGames: IterableOptions = {
  TWO: '2 Games',
  THREE: '3 Games',
  FIVE: '5 Games',
  TEN: '10 Games'
}

export const whoStarts: IterableOptions = {
  ALTERNATE: 'Alternative turn',
  LOOSER: 'Looser first',
  WINNER: 'Winner first',
  FIRST_PLAYER: 'Always player 01',
  SECOND_PLAYER: 'Always player 02'
}

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  config: GameConfig;
  constructor() { }
}
