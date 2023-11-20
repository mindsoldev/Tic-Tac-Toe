import { Component, Input } from '@angular/core';

type AvatarChar = 'X' | 'O';

@Component({
  selector: 'app-square',
  template: `<p>
    <button>{{ value }}</button>
  </p>`,
  styles: ['button { width: 180px; height: 180px; font-size: 5em !important; }']
})
export class SquareComponent {

  @Input() value!: AvatarChar;
  
}