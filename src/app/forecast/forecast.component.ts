import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() zcode_id! : number
  ngOnInit(): void {
    this.getData();
  }
  img1!: string;img2!: string;img3!: string;img4!: string;img5!: string;
  url2='http://api.openweathermap.org/data/2.5/forecast?zip=';
  ccond1!: string;    temp_max1!: number;      temp_min1!: number;
  ccond2!: string;    temp_max2!: number;      temp_min2!: number;
  ccond3!: string;    temp_max3!: number;      temp_min3!: number;
  ccond4!: string;    temp_max4!: number;      temp_min4!: number;
  ccond5!: string;    temp_max5!: number;      temp_min5!: number;
  d = new Date();day1!: string;mon1!: string;date1!: number;day2!: string;mon2!: string;
date2!: number;day3!: string;mon3!: string;date3!: number;day4!: string;mon4!: string;
date4!: number;day5!: string;mon5!: string;
date5!: number;data: any;  zcode1: any;
weekday = [" ","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
month=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  constructor(private service: UtilService) {}

  getData() {
    // let zcode2 = JSON.parse(localStorage.getItem('user') || '{}');
    // let zcode1 = parseInt(zcode2[0])
    this.zcode_id = this.service.sData()
    
    this.service.getData(this.url2+this.zcode_id+'&appid=5a4b2d457ecbef9eb2a71e480b947604').subscribe((res) => {
      this.data = res;
      this.ccond1 = this.data.list[0].weather[0].main;
      this.temp_max1 = this.data.list[0].main.temp_max;
      this.temp_min1 = this.data.list[0].main.temp_min;
      this.ccond2 = this.data.list[1].weather[0].main;
      this.temp_max2 = this.data.list[1].main.temp_max;
      this.temp_min2 = this.data.list[1].main.temp_min;
      this.ccond3 = this.data.list[2].weather[0].main;
      this.temp_max3 = this.data.list[2].main.temp_max;
      this.temp_min3 = this.data.list[2].main.temp_min;
      this.ccond4 = this.data.list[3].weather[0].main;
      this.temp_max4 = this.data.list[3].main.temp_max;
      this.temp_min4 = this.data.list[3].main.temp_min;
      this.ccond5 = this.data.list[4].weather[0].main;
      this.temp_max5 = this.data.list[4].main.temp_max;
      this.temp_min5 = this.data.list[4].main.temp_min;

      this.img1 = "https://www.angulartraining.com/images/weather/"+this.ccond1.toLowerCase()+".png"
      this.img2 = "https://www.angulartraining.com/images/weather/"+this.ccond2.toLowerCase()+".png"
      this.img3 = "https://www.angulartraining.com/images/weather/"+this.ccond3.toLowerCase()+".png"
      this.img4 = "https://www.angulartraining.com/images/weather/"+this.ccond4.toLowerCase()+".png"
      this.img5 = "https://www.angulartraining.com/images/weather/"+this.ccond5.toLowerCase() +".png"
  });
  

  this.date1 = this.d.getDate();
  this.day1 = this.weekday[this.CheckDay(1)];
  this.mon1 = this.month[this.CheckMonth(this.d.getMonth())];

  this.date2 = this.d.getDate()+1;
  this.day2 = this.weekday[this.CheckDay(2)];
  this.mon2 = this.month[this.CheckMonth(this.d.getMonth())];

  this.date3 = this.d.getDate()+2;
  this.day3 = this.weekday[this.CheckDay(3)];
  this.mon3 = this.month[this.CheckMonth(this.d.getMonth())];

  this.date4 = this.d.getDate()+3;
  this.day4 = this.weekday[this.CheckDay(4)];
  this.mon4 = this.month[this.CheckMonth(this.d.getMonth())];

  this.date5 = this.d.getDate()+4;
  this.day5 = this.weekday[this.CheckDay(5)];
  this.mon5 = this.month[this.CheckMonth(this.d.getMonth())];

}
  CheckDay(day:any){
    if(day + this.d.getDay() > 7){
        return day + this.d.getDay() - 7;
    }
    else{
        return day + this.d.getDay();
    }
    }
    CheckMonth(month:any){
    if(month + this.d.getMonth() > 11){
      return month + this.d.getMonth() - 12;
    }
    else{
      return month + this.d.getMonth();
    }
  }
}
