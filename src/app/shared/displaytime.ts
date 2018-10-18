import { Pipe , PipeTransform } from '@angular/core'

@Pipe({
    name : 'displaytime'
})

export class DisplayTime implements PipeTransform{
    transform(value : any ){
        if(value){
            let val = value;
            if(val < 10){
                return '0'+val;
            }return val;
        }else return '00';
    }
}