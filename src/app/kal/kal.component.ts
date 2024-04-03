import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';


@Component({
  selector: 'app-kal',
  standalone: true,
  imports: [NgFor],
  templateUrl: './kal.component.html',
  styleUrl: './kal.component.scss'
})
export class KalComponent implements OnInit {
  czas:any = null;
  nag:any = ["Po","Wt","Śr","Cz","Pi","So", "Ni"];
  ngOnInit(): void {
    this.czas = moment("2024-02-01");
  }
  class_pole(item:any):any{
    return "pole dt"+ item.czas.format("E");
  }

  beck():void {
    this.czas.add(-1, 'months');
  }
  next():void {
    this.czas.add(1, 'months');
  }
  events(): any {
    let arr:any = [];
    let start = moment(this.czas.format("YYYY-MM-01"));
    let koniec = moment(this.czas.format("YYYY-MM-01")).add(1, 'months');

    while(start < koniec){
      arr.push({
        czas: moment(start)
      })

      start.add(1, 'days');
    }
    //console.log(start);
    

    return arr;
  }

}
