import { Component, Output, ViewEncapsulation } from '@angular/core';
import { MnFullpageOptions } from 'ngx-fullpage';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   @Output() public options: MnFullpageOptions = new MnFullpageOptions({
        slidesNavigation: true,
        navigation: true,
        keyboardScrolling: true,
        controlArrows: true,
        css3: true,
        scrollOverflow: true
      });
}
