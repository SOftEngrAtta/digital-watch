import { Component , OnInit} from '@angular/core';

import { TimeData } from './models/timemodel';

@Component({
  selector: 'digital-watch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  displayBtn : { play : boolean , pause : boolean } = { play : true , pause : false }

  timer = new TimeData();

  ActionType = ['Play' , 'Stop'];

  intervalMethod ; // for clear settimeout method 

  timerList : Array<any> = []; // timer list save in timerList variable 
  
  constructor(){}

  ngOnInit(){}

  /***************************
   * show time functionality 
   * *************************/
  showtime(action){
    if(this.ActionType[0] == action ) {
      if(this.timer['milsecond'] < 100 ){
        this.intervalMethod =  setTimeout(()=>{ 
          this.timer['milsecond'] += 1; this.showtime(this.ActionType[0])
        },10)
      }else{
        if( this.timer['second'] < 59 ){
          this.timer['second'] +=1;
          this.timer['milsecond'] = 0;
          setTimeout(()=>{ this.showtime(this.ActionType[0])},10);
        }else{
          this.timer['minute'] +=1;
          this.timer['milsecond'] = 0;
          this.timer['second'] = 0;
          setTimeout(()=>{ this.showtime(this.ActionType[0])},10);
        }
      }
    }else {
      clearTimeout(this.intervalMethod);
    };
  }


  /************************
   * play functionality 
   * *********************/
  play(){ 
    this.displayBtn.pause = true ; this.displayBtn.play = false;
    this.showtime(this.ActionType[0]);
  }
  
  /***********************
   * pause functionality 
   * *********************/ 
  pause(){ 
    this.displayBtn.play = true ; this.displayBtn.pause = false; 
    this.showtime(this.ActionType[1]);
  }


  /************************************
   * update timer list functionality
   ***********************************/  
  getTimeData(){ 
    if(!this.timer.milsecond){
      alert('please play stop watch');
      return false;
    }
    this.timerList.push(Object.assign({},this.timer));
  }


  /*********************************
   * remove time object from array 
   * @param index time index 
   ********************************/ 
  rmTm(index){this.timerList.splice(index ,1)}


  /***************************************************
   * clear lst and also stop watch time functionality 
   **************************************************/  
  clrAll(){
    this.timerList = [];
    this.timer = new TimeData();
    this.pause();
  }

}
