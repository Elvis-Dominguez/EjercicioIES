import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/observable/ConnectableObservable';

@Component({
  selector: 'app-componete-uno',
  templateUrl: './componete-uno.component.html',
  styleUrls: ['./componete-uno.component.css']
})
export class ComponeteUnoComponent implements OnInit {

  arrayF: any[];

  constructor() { }

  ngOnInit() {
    this.get();
  }

  get() {
    // tslint:disable-next-line:max-line-length
    const array = [{ value: 1, name: 'CampoUno' }, { value: 2, name: 'CampoDos' }, { value: 3, name: 'CampoTres' }, { value: 4, name: 'CampoCuatro' }, { value: 5, name: 'CampoCinco' }, { value: 6, name: 'CampoSeis' },];
    // console.log('Mostrando Informacion', array);
    this.arrayF = array;

    this.arrayF.map( data => {
      console.log('Mostrando Primer array', data);
    });

    // tslint:disable-next-line:max-line-length
    const array2 = [ { value: 21 , name: 'a'}, { value: 20 , name: 'b'}, { value: 19 , name: 'c'}, { value: 18 , name: 'd'}, { value: 17 , name: 'e'}, { value: 16 , name: 'f'}, ];
    console.log('Mostrando segundo Array:', array2)
  }

}
