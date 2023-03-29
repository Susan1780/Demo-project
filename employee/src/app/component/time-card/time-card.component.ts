import { AfterViewInit, Component, OnInit} from '@angular/core';
import { TimeService } from 'src/app/service/time.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.scss']
})
export class TimeCardComponent implements OnInit{
  checkinTime:any
  temp:any
  user:any
  users:any

  constructor(private ser:TimeService){}
  value2:any
  employeeform = new FormGroup({
  id:new FormControl(''),
  name:new FormControl(''),
  date:new FormControl(''),
  checkin:new FormControl(''),
  checkout:new FormControl(''),

  })
  ngOnInit(){

  }
  displayedColumns: string[] = ['id', 'name', 'date', 'checkin','checkout'];
  dataSource:any
  get(){
    this.ser.getdata().subscribe(res=>{
      this.temp = res
      this.dataSource = this.temp;
    })
  }
  submit(){
   this.user = this.employeeform.value;
    this.ser.postData(this.user).subscribe(res=>{
      this.users={id:res.id,name:res.name,date:res.date,checkin:res.checkin,checkout:res.checkout}
      this.get();


  })
}
}
