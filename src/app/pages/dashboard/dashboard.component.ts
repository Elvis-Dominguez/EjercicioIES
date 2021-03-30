import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( public service: ServiceService ) { }

  dia: any = [] = [];

  ngOnInit() {
    this.getFecha();
    // this.getService();
  }

  getFecha(){
    const fecha = new Date();
      console.log(fecha);

      const formatoMap = {
        dd: fecha.getDate() + 1,
        mm: fecha.getMonth() + 1,
        yy: fecha.getFullYear().toString().slice(-2)
    };
    this.dia =  formatoMap;
    console.log('Mostrando', this.dia);
  }

  // getService() {
    // this.service.getApi().subscribe(data => {
      // console.log(data);
    // });
  // }
}
