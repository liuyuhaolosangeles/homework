import { Component } from '@angular/core';

import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to my world!!!';

// 准备数据
  // person = {
  //     name : 'Henry',
  //     color : 'yellow',
  //   };

    yell() {
        alert( 'i am getting!');
      };
}
