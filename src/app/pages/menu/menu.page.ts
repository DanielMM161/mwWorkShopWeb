import { Component, OnInit } from '@angular/core';
import { DataList } from '../../models/dataList';
import { ServicesService } from '../../services/services.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  auxData: DataList = {
    IdIncidence: '',
    enrollment: '',
    customerName: '',
    nifCustomer: ''
 };
  details = [];
  incidents = [];
  dataList: DataList[] = [];
  vehicles = [];
  customers = [];
 constructor(private services: ServicesService, private menuCtrl: MenuController) { }

 ngOnInit() {
   this.getAll();
 }

 async getAll() {

   await this.services.getCustomers().subscribe(data => {
     this.customers = [];
     data.forEach((detailsData: any) => {
     this.customers.push({
       data: detailsData.payload.doc.data()
     });
   });
   });

   await this.services.getVehicles().subscribe((vehSnapshot) => {
     this.vehicles = [];
     vehSnapshot.forEach((vehData: any)=> {
       this.vehicles.push({
         id: vehData.payload.doc.id,
         data: vehData.payload.doc.data()
       });
     });
   });

   await this.services.getDetails().subscribe((detSnapshot) => {
     this.details = [];
     detSnapshot.forEach((detailsData: any) => {
       this.details.push({
         id: detailsData.payload.doc.id,
         data: detailsData.payload.doc.data()
       });
     });
   });

   await this.services.getIncidents().subscribe((custSnapshot)  => {
     this.incidents = [];
     custSnapshot.forEach((detailsData: any) => {
      this.incidents.push({
        data: detailsData.payload.doc.data()
       });
     });

     for (let inc of this.incidents) {
       this.auxData.IdIncidence = inc.data.idInc;
       this.auxData.enrollment = inc.data.idCar;
       this.auxData.nifCustomer = this.getNifCustomer(this.auxData.enrollment);
       this.auxData.customerName = this.getNameCustomer(this.auxData.nifCustomer);
       this.dataList.push({
         IdIncidence: this.auxData.IdIncidence,
         enrollment: this.auxData.enrollment,
         customerName: this.auxData.customerName,
         nifCustomer: this.auxData.nifCustomer
       });
     }
     console.log('data list', this.dataList);
   });
 }

 /**
  * Recojo el dueño(nif) del coche de la incidencia
  * @param enrollment 
  * @param idCustomer 
  */
 getNifCustomer(enrollment: string): any {
   let nifCustomer: any = '';
   for (let v of this.vehicles) {
     if (enrollment == v.data.enrollment) {
       nifCustomer = v.data.owner;
     }
   }
   return nifCustomer;
 }

 getNameCustomer(nif: string): any {
   let name: string = '';
   for (let c of this.customers) {
     if (nif == c.data.nif) {
       name = c.data.name;
     }
   }
   return name;
 }

 deleteIncidence(idInc: any){
   this.services.deleteIncidence(idInc);

 }

 toggle(){
  this.menuCtrl.toggle();
 }
}
