import { Component, OnInit } from '@angular/core';
import { LoggingService} from '../logging.service';
import { from } from 'rxjs';
import { DataService} from '../data.service';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],

})
export class DirectoryComponent implements OnInit {
  // classes ={ "blue" : false , 'red' : true, 'underline': true };
  bool = false;
  people = [

  ];

  // 构造函数
  constructor(private loggar:LoggingService, private dataService: DataService) {
  }
  logit() {
    this.loggar.log();
  }
  ngOnInit() {
    this.dataService.fetchData()
    .subscribe((data) => this.people = data);
  }

}
