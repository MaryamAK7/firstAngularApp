import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:Boolean = false;
  serverCreationStatus:string = 'No server was created!';
  serverName:string = "";
  userName ="";
  serverCreated = false;
  display = false;
  displayLog: number[] = [];

  constructor() { 
    setTimeout(()=>{this.allowNewServer=true;},2000)
    
  }
  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = "Server Created! it's called " + this.serverName;
    this.serverCreated = true;
  }
  onUpdateServerName(event:any){
    // console.log(event.target.value);
    this.serverName = event.target.value;
  }
  onResetUserName(){
    
    this.userName ="";
  }
  onDisplay(){
    
    this.display = !this.display;
    this.displayLog.push(this.displayLog.length+1);
      
  }
 
}
