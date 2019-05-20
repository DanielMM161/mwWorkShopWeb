import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {

  userList = [];

  constructor(private userS: UserService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.getAllUsers();
  }

 async getAllUsers() {

    await this.userS.getAllUser().subscribe( (userSnapshot)  => {
      this.userList = [];
      userSnapshot.forEach((usData: any) => {
        this.userList.push({
          data: usData.payload.doc.data()
        });
      });
    });
  }

  deleteUser(user: User) {
    this.userS.deleteUser(user.email);

    this.userS.deleteUserAuth();

    this.getAllUsers();
  }

  toggle(){
    this.menuCtrl.toggle();
   }

}
