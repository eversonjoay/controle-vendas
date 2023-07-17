import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.css']
})
export class ToolbarHeaderComponent {
  @Input() title: string;

  srcLogo = "./assets/icon.png";

}
