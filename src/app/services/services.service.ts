import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private service: AngularFirestore) { }

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
