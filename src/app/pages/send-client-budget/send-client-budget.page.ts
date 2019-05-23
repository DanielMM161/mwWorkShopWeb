import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import * as jsPDF from 'jspdf';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-send-client-budget',
  templateUrl: './send-client-budget.page.html',
  styleUrls: ['./send-client-budget.page.scss'],
})
export class SendClientBudgetPage implements OnInit {

  @ViewChild('content') content: ElementRef;
  customer: any;
  vehicle: any;
  details: any;
  incident: any;
  document: any;

  constructor(private service: ServicesService,private email: EmailComposer) { }

  ngOnInit() {
    this.customer = this.service.customer;
   /* this.vehicle = this.service.vehicle;
    this.details = this.service.details;
    this.incident = this.service.incident;*/
  }

  saveSendPdf(){

      /*  let email = {
          to: 'danielmmarquez161@gmail.com ',
          cc: 'diabeticman666@gmail.com',
          subject: 'Cordova Icons',
          body: 'How are you? Nice greetings from Leipzig',
          isHtml: true
        }
        
        // Send a text message using default options
        this.email.open(email);*/

   const doc = new jsPDF();
    let specialEH = {
      "editor" : function(element, renderer){
        return true;
      }
   };
   let content = this.content.nativeElement;
   this.document = doc.fromHTML(content.innerHTML,15, {
     'width': 190,
     'elementHandlers': specialEH
   });
   doc.save('prueba.pdf');
   console.log(this.document);
  }

}
