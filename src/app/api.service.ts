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
  display3 : boolean = false ;
  responseRepositeries: any;
  responseForkers: any;

  constructor(public http: HttpClient) { }

  getRepositery() {
    this.display1 = false ;
    this.display2 = false ;
    this.display3 = false ;
    console.log("Getting Repositery from " + 'https://api.github.com/orgs/' + this.inputs[0] + "/repos?per_page=" +this.inputs[1]);
    this.http.get('https://api.github.com/orgs/' + this.inputs[0] + "/repos?per_page=" +this.inputs[1]).subscribe(
      (response) => {
        this.responseRepositeries = response ;
        console.log(this.responseRepositeries);
        this.display1 = true ;
      },
      (error) => {
        console.log(error);
        this.display3 = true ;
      });
  }

  getForkers(url: string) {
    this.display1 = false ;
    this.display2 = false ;
    this.display3 = false ;
    console.log("Getting Forkers from " + url  + "?per_page=" +this.inputs[2]);
    this.http.get(url  + "?per_page=" +this.inputs[2]).subscribe(
      (response) => {
        this.responseForkers = response ;
        console.log(this.responseForkers);
        this.display2 = true ;
      },
      (error) => {
        console.log(error);
        this.display3 = true ;
      });
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
