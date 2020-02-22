import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-reasons-to-join',
  templateUrl: './reasons-to-join.component.html',
  styleUrls: ['./reasons-to-join.component.css']
})
export class ReasonsToJoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayBylaws(){
    this.openFile("DDSR-BYLAWS.pdf");

  }

  openFile(fileName){
    window.open('/src/assets/' + fileName);
  }

}
