import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  list!: any[];
  
  title = 'CarStore';
  constructor(private _service:CategorieService){
    
  }
  ngOnInit(){}
    
  
}
