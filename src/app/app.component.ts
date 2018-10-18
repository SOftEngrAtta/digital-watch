import { Component , OnInit} from '@angular/core';

import { TimeData } from './models/timemodel';

@Component({
  selector: 'digital-watch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'digital-watch';

  displaybtn : { play : boolean , pause : boolean } = { play : true , pause : false }

  timer = new TimeData();

  ActionType = ['Play' , 'Stop'];

  intervalmethod ; // for clear settimeout method 

  timerlist : Array<any> = [];
  
  constructor(){}

  ngOnInit(){}

  /***************************
   * show time functionality 
   * *************************/
  showtime(action){
    if(this.ActionType[0] == action ) {
      if(this.timer['milsecond'] < 100 ){
        this.intervalmethod =  setTimeout(()=>{ 
          this.timer['milsecond'] += 1; this.showtime(this.ActionType[0])
        },10)
      }else{
        if(this.timer['second'] < 60){
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
      clearTimeout(this.intervalmethod);
    };
  }


  /************************
   * play functionality 
   * *********************/
  play(){ 
    this.displaybtn.pause = true ; this.displaybtn.play = false;
    this.showtime(this.ActionType[0]);
  }
  
  /***********************
   * pause functionality 
   * *********************/ 
  pause(){ 
    this.displaybtn.play = true ; this.displaybtn.pause = false; 
    this.showtime(this.ActionType[1]);
  }


  // update timer list functionality 
  getTimeData(){ 
    if(!this.timer.milsecond){
      alert('please play stop watch');
      return false;
    }
    this.timerlist.push(Object.assign({},this.timer));
  }


  // rm item 
  rmTm(index){this.timerlist.splice(index ,1)}

  // clear lst and also stop watch time 
  clrAll(){
    this.timerlist = [];
    this.timer = new TimeData();
    this.pause();
  }

}
