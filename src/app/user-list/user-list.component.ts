import { Component, OnInit } from '@angular/core';
import { Users } from '../models/Users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public listuser:Users[]
  constructor() { }

  ngOnInit(): void {
    this.listuser=[
      {
        id: 1,
        name: 'James Nix',
        job: 'Full Stack Developer',
        phone: '046 5685 6969',
        email:'JamesNix@spy.com',
        address:'5 Boar Lane SELLING 2LG',
        picture:'https://bootdey.com/img/Content/avatar/avatar2.png'
      },
      {
        id: 2,
        name: 'Darlene Smith',
        job: 'UI/UX Designer',
        phone: '012 6587 1236',
        email:'DarleneSmith@spy.com',
        address:'57 Guildry Street GAMRIE',
        picture:'https://bootdey.com/img/Content/avatar/avatar3.png'
      },
      {
        id: 3,
        name: 'William Swift',
        job: 'Backend Developer',
        phone: '012 6587 1236',
        email:' WilliamSwift@spy.co',
        address:'80 South Street MONKW',
        picture:'https://bootdey.com/img/Content/avatar/avatar4.png'
      },




    ]
  }

  deleteuser( user:Users):void{
    console.log(user)
    let i=this.listuser.indexOf(user);
    console.log(i)
          this.listuser.splice(i,1);




  }

}
