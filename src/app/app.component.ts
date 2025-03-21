import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DynamicIpComponent} from './components/dynamic-ip/dynamic-ip.component';
import {MatButton} from '@angular/material/button';
import {StaticComponent} from './components/static/static.component';

import {JsonPipe} from '@angular/common';
import {IpServiceService} from './ip-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DynamicIpComponent, MatButton, StaticComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'cisco-doc';

  selectType:string = '';
  yourIp : string | any;

  constructor(
   private ipSeIpService: IpServiceService
  ) {

  }

  ngOnInit(): void {
    this.ipSeIpService.getIpAddress().subscribe(res=>{
      this.yourIp = res.ip;
    });
    }


}
