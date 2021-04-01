import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ServiceService {

    API = [];

    // url: string = 'https://api.first.org/data/v1/countries?region=africa&limit=10&pretty=true';
    constructor( private http: HttpClient ) {}
    getAPI() {
        return this.http.get('https://api.first.org/data/v1/countries?region=africa&limit=10&pretty=true').subscribe( (res: any) => {
        res.forEach(data => {
            this.API = this.API.concat(data);
            console.log(this.API);
        })
        });
    }
}
