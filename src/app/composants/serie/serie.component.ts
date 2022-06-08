import { Component, OnInit } from '@angular/core';
import {GestionSeriesService} from "../../service/gestion-series.service";
import {Serie} from "../../modeles/Serie";
import {firstValueFrom, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  public series$: Observable<Serie[]>;

  private serie$!: Observable<Serie>;

  constructor(private svc: GestionSeriesService, private http: HttpClient) {
    this.series$ = this.svc.getSerie();

  }

  ngOnInit(): void {
  }

  public clicSurImage(id: any) {
    this.serie$ = this.http.get<Serie>("http://10.103.0.254:8000/api/series/"+id+".json");
    console.log(id);
  }
}
