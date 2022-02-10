import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  genericUrl = "https://api.github.com/orgs/";
  inputs: string[] = ["Google", "10", "5"];
  
  display1 : boolean = false ;
  display2 : boolean = false ;
  responseRepositeries: any;
  responseForkers: any;

  constructor(public http: HttpClient) { }

  getRepositery() {
    this.display2 = false ;
    console.log("Getting Repositery from " + 'https://api.github.com/orgs/' + this.inputs[0] + "/repos?per_page=" +this.inputs[1]);
    this.http.get('https://api.github.com/orgs/' + this.inputs[0] + "/repos?per_page=" +this.inputs[1]).subscribe(
      (response) => {
        this.responseRepositeries = response ;
        console.log(this.responseRepositeries);
      },
      (error) => { console.log(error); });
      this.display1 = true ;
  }

  getForkers(url: string) {
    this.display1 = false ;
    console.log("Getting Forkers from " + url  + "?per_page=" +this.inputs[2]);
    this.http.get(url  + "?per_page=" +this.inputs[2]).subscribe(
      (response) => {
        this.responseForkers = response ;
        console.log(this.responseForkers);
      },
      (error) => { console.log(error); });
    this.display2 = true ;
  }

  viewRepositery(url:string) {
    console.log("Viewing forker from " + url) ;
    window.open(url, "_blank");
  }

  viewForker(url:string) {
    console.log("Viewing forker from " + url) ;
    window.open(url, "_blank");
  }

}
