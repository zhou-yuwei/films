import { Component, OnInit } from '@angular/core';
import {GestionSeriesService} from "../../service/gestion-series.service";

@Component({
  selector: 'app-saison',
  templateUrl: './saison.component.html',
  styleUrls: ['./saison.component.css']
})
export class SaisonComponent implements OnInit {


  constructor(private svc: GestionSeriesService) {

  }

  ngOnInit(): void {
  }

}
