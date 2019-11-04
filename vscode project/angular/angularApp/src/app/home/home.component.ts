import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { LoggingService} from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  // 准备数据
  // homeTitle = 'welcome my friend!! ';
  // myString = 'i like you baby ';
  // person = {
  //   name : 'Henry',
  //   color : 'yellow',
  // };

  @Input ( ) personzidingyi;
  @Output( ) zidingyionYell = new EventEmitter();
  // clickme(e) {
  //   alert(e);
  // }
  // hitme() {
  //   // 实现父组类中yell() 方法
  //   this.zidingyionYell.emit();
  // }
  constructor(private loggar:LoggingService) { }
    logit() {
    this.loggar.log();
  }
  ngOnInit() {
  }

}
