import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  customer: any;

  constructor(private service: AngularFirestore) { }

  /**
   * collect data from the BD
   */
  getDetails() {
    return this.service.collection('details').snapshotChanges();
  }

  getIncidents() {
    return this.service.collection('incidents').snapshotChanges();
  }

  getVehicles() {
    return this.service.collection('vehicles').snapshotChanges();
  }

  getCustomers() {
    return this.service.collection('customers').snapshotChanges();
  }

  deleteIncidence(idInc: any){
    return this.service.collection('incidents').doc(idInc).delete();
  }
}
