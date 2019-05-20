import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-send-client-budget',
  templateUrl: './send-client-budget.page.html',
  styleUrls: ['./send-client-budget.page.scss'],
})
export class SendClientBudgetPage implements OnInit {

  @ViewChild('content') content: ElementRef;
  customer: any;
  a: any;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.customer = this.service.customer;
    console.log(this.customer);
  }

  savePdf(){
    console.log(this.a);
    let doc = new jsPDF();
    let content = this.content.nativeElement;

    doc.text(this.a ,15 ,15);
    const a = doc.save('d.pdf');
  }

}
