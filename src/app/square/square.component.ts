import { Component, Input } from '@angular/core';

type SquareChar = 'X' | 'O';

@Component({
  selector: 'app-square',
  template: `
      <button mat-button color="disabled" *ngIf="!value">{{ value }}</button>
      <button mat-raised-button color="primary" *ngIf="value == 'X'">{{ value }}</button>
      <button mat-raised-button color="accent" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
      'button { width: 100%; height: 100%; font-size: 5em !important;}',
      '.mat-disabled { background-color: #dbdbdb; color: #fff;}'
    ]
})
export class SquareComponent {

  @Input() value!: SquareChar;

}
