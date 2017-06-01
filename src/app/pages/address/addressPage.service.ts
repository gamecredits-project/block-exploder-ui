import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../../appSettings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AddressPageService {
    private baseApiUrl: string = AppSettings.API_ENDPOINT;

    constructor(
        private _http: Http,
    ) { }
    
    getAddressAllTransactions(hash: string) : Observable<any> {
        const url   = this.baseApiUrl + 'addresses/' + hash + '?limit=25';
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, {headers})
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

    getAddressUnspent(hash: string) : Observable<any> {
        const url   = this.baseApiUrl + 'addresses/' + hash + '/unspent';
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, {headers})
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }


    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(error);
    }

}
