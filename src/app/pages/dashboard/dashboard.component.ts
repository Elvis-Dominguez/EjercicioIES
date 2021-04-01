import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dia: any = [] = [];
  city: any [] = [];

  constructor( public service: ServiceService ) { }

  ngOnInit() {
    this.getFecha();
    this.getService();
    this.service.getAPI();
  }

  getFecha(){
    const fecha = new Date();
      // console.log(fecha);

      const formatoMap = {
        dd: fecha.getDate() + 1,
        mm: fecha.getMonth() + 1,
        yy: fecha.getFullYear().toString().slice(-2)
    };
    this.dia =  formatoMap;
    // console.log('Mostrando', this.dia);
  }

  getService() {
    // let cityA;
    // this.service.getAPI().subscribe((data: any) => {
      // console.log('Uno', data.data);
      // cityA = data;
      // cityA.map( dat => {

      // });
      // this.city = cityA;
      // console.log('Mostrando afuera', this.city);
    // });
  }
}
