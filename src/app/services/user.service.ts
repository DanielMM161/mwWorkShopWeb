import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/User';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userService: AngularFirestore, private auth: AngularFireAuth) { }

  getAllUser(){
    return this.userService.collection('Users').snapshotChanges();
  }

  getUser(user: User){
    return this.userService.collection('Users').doc(user.email).snapshotChanges();
  }

  createUser(user: User){
    return this.userService.collection('Users').doc(user.email).set({
      name: user.name,
      email: user.email,
      rol: user.workPosition
    });
  }

  createUserAuth(email: any, pass: any){
    return this.auth.auth.createUserWithEmailAndPassword(email, pass);
  }

  deleteUserAuth(){
    const userD = this.auth.auth.currentUser;
    userD.delete().then(function() {
      // User deleted.
    }).catch(function(error) {
      // An error happened.
    });
  }

  UpadateUser(user: User){
    return this.userService.collection('Users').doc(user.email).set(user);
  }

  deleteUser(email: any) {
    return this.userService.collection('Users').doc(email).delete();
  }
}
