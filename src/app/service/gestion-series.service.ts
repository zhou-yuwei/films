import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Serie} from "../modeles/Serie";
import {Observable} from "rxjs";
import {Saison} from "../modeles/Saison";

@Injectable({
  providedIn: 'root'
})
export class GestionSeriesService {
  private series$: Observable<Serie[]>;

  constructor(private http: HttpClient) {
    this.series$ = this.http.get<Serie[]>("http://10.103.0.254:8000/series");

  }

  public getSerie(): Observable<Serie[]> {
    return this.series$;
  }

}
