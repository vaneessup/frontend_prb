import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .container{
    margin: 10px;
  }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor(private CarsService: CarsService) { }

  ngOnInit(): void {
     this.CarsService.getCars().subscribe((response)=>{console.log((response as Array<any>)[0])});
      //console.log("HOLA");

  }

}
