import { Component, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  
  constructor(/*private http:HttpClient*/) { 
    
  }

  channels = [];

  /*public getChannels() {

    this.http.get<any>("http://ec2-54-196-29-226.compute-1.amazonaws.com:8082/FacelessBook-0.0.1-SNAPSHOT/channels")
    .subscribe(
      resp =>  {this.channels = JSON.stringify(resp)}, 
      error => console.log(error)
  );
    
  }*/
  
    ngOnInit() {
  }

}
