import { Component, OnInit } from '@angular/core';
import { PieceService } from '../service/piece.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {

  listPiece!: any;
  list!: any;
  categorieId!: number;
  constructor(private _piece:PieceService,private _route: ActivatedRoute){
    
    }
  
      ngOnInit(): void {
      //this.categorieId = this._route.snapshot.params['id'];
      this._route.params.subscribe(p => {
        this.categorieId = p.id;
        this._piece.getById(this.categorieId).subscribe(data => {
        console.log(data);
        this.listPiece = data;
        console.log(this.listPiece);
      })
        
      
    })
    
  }
 

}

