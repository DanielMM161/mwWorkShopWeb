import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Constants } from 'src/app/interfaces/Constants';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

   //Attributes

   formGroupUser: FormGroup;

   user: User = {
      name: '',
      email: '',
      pass: '',
      workPosition: ''
   };

   constantUser: Observable<Constants[]>;

   messagesUser = {
      'name': [
        { type: 'required', message: 'Campo Obligatorio.' },
      ],
      'email': [
        { type: 'required', message: 'Campo Obligatorio.' },
        { type: 'pattern', message: 'Introduzca un email valido' }
      ],
      'pass': [
          { type: 'required', message: 'Campo Obligatorio.' },
          { type: 'minLength', message: 'Minimo 8 caracteres' }
      ],
      'workPosition': [
        { type: 'required', message: 'Campo Obligatorio.' }
    ],
        
  };
 
   constructor(private formBuilder: FormBuilder, private dataService: DataService,
    private auth: AngularFireAuth, private alert: AlertController, private userService: UserService) {}

   ngOnInit() {
    this.getConstantUser();
    this.buildFormGroupUser();
   }
 
   //Methods
 
   getConstantUser() {
     this.constantUser = this.dataService.getConstantUser();
   }

   createrUser() {
    this.userService.createUserAuth(this.user.email, this.user.pass).then(data => {
      console.log('entro');
      this.userService.createUser(this.user);
    }, err => {
      this.mensageErro();
    });
   }

   async mensageErro(){

    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'Usuario ya registrado',
      message: 'Esta cuenta ya esta registrada',
      buttons: ['ACEPTAR']
    });
    return await alert.present();
   }

 
   /**
    * Metodo en el cual creo mi FormGroup de usuarios
    */
   buildFormGroupUser() {
     this.formGroupUser =  this.formBuilder.group({
       name: new FormControl('', Validators.compose([
         Validators.required
       ])),
       email: new FormControl('', Validators.compose([
         Validators.required,
         Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
       ])),
       pass: new FormControl('', Validators.compose([
         Validators.required,
         Validators.minLength(8)
       ])),
       workPosition: new FormControl('', Validators.compose([
         Validators.maxLength(30),
         Validators.minLength(0),
         Validators.required
       ])),
     }, { updateOn: 'blur' });
   }

   public getErrorUser(controlName: string): string {
    let error = '';
    const control = this.formGroupUser.get(controlName);

    switch (controlName) {
      case 'name': {
          this.messagesUser.name.forEach( res => {
            if (control.hasError(res.type)) {
                error = res.message;
            }
          });
          break;
      }
      case 'pass': {
        this.messagesUser.pass.forEach( res => {
          if (control.hasError(res.type)) {
              error = res.message;
          }
        });
        break;
      }
      case 'email': {
        this.messagesUser.email.forEach( res => {
          if (control.hasError(res.type) ) {
              error = res.message;
          }
        });
        break;
      }
      case 'workPosition': {
        this.messagesUser.workPosition.forEach( res => {
          if (control.hasError(res.type)) {
              error = res.message;
          }
        });
        break;
    }
    }
    return error;
  }

}
