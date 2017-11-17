import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  public theme: string;
  constructor() {
    this.theme = 'dark';
  }

  updateTheme(theme: string) {
    this.theme = theme;
  }
}
