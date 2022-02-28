import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arra1:any[] = [];
  zipCode! : number;
  zcode!: number;data:any;
  url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  user: any;
  ngOnInit(): void { 
    this.setData()
  }
  constructor(private service: UtilService) {}

    async setData() {    
        let exm = [];
        if(localStorage.getItem('user')) {
          exm = JSON.parse(localStorage.getItem('user') || '{}');
        }
        this.user=exm
        this.arra1=[]
        for(var i=0;i<this.user.length;i++)
        {
          await this.delay(i);
        }
    }
    setZip(zipcode:any) {
      this.zcode = zipcode;
      let exm = [];
      if(localStorage.getItem('user')) {
        exm = JSON.parse(localStorage.getItem('user') || '{}');
        exm = [zipcode, ...exm];
      }else {
        exm = [zipcode];
      }
      localStorage.setItem('user',JSON.stringify(exm));
      this.setData()
    }
    idna(id:any)
    {
      return '/forecast/'+id
    }
    idan(id:any)
    {
      this.service.gData(id)
    }
    delay = (i:any)=> new Promise(resolve =>{
      let arr1 = {id:'',ccond:'',temp:'',temp_max:'',temp_min:''}
      resolve(
        this.service.getData(this.url + this.user[i]+'&appid=5a4b2d457ecbef9eb2a71e480b947604').subscribe((res) => {
          this.data = res;        
          arr1.id = this.user[i]; 
          arr1.ccond = this.data.weather[0].main;
          arr1.temp = this.data.main.temp;
          arr1.temp_max = this.data.main.temp_max;
          arr1.temp_min = this.data.main.temp_min;
          this.arra1.push(arr1)
        })
      )
    })
    imgna(ccond:string)
    {
      return "https://www.angulartraining.com/images/weather/"+ccond.toLowerCase()+".png"
    }
    sub(id:any){
      let exm = []; let us = [];var k=0;
      if(localStorage.getItem('user')) {
        exm = JSON.parse(localStorage.getItem('user') || '{}');
      }
      for(var l=0;l<exm.length;l++)
      {
        if(id!=exm[l])
          us[k++] = exm[l];
      }
      localStorage.setItem('user',JSON.stringify(us));
      this.setData();
  }
}
