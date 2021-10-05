import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-verticalnav',
  templateUrl: './verticalnav.component.html',
  styleUrls: ['./verticalnav.component.scss']
})
export class VerticalnavComponent implements OnInit {


  categorieList!: any[];
  constructor(private _categoriService:CategorieService){
   
    }
  
    ngOnInit(): void {
        
      this._categoriService.getCategorie().subscribe(result => {
        this.categorieList = result;
        console.log(this.categorieList);
      })
    
   
  }

}