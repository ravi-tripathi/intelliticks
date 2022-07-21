import { Component, OnDestroy, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/propservice.service';

@Component({
  selector: 'app-proplist',
  templateUrl: './proplist.component.html',
  styleUrls: ['./proplist.component.scss']
})
export class ProplistComponent implements OnInit, OnDestroy {

  showaddform = false;
  proplist: any =[];
  
  constructor(private _propservice: PropertiesService) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this._propservice.getAllProperties().subscribe(list => {
      this.proplist = list;
      console.log(list);
    })
    // this.proplist = this.proplist.push(JSON.parse(sessionStorage.getItem('properties') || '[]'));

  }

  addNewProperty() {
    this.showaddform = !this.showaddform;
  }

  deleteProperty(id: any) {
    console.log(id);
    this._propservice.deleteProperty(id).subscribe(list => {
      this._propservice.getAllProperties().subscribe(list => {
        this.proplist = list;
        console.log(list);
      });
    })
    // this.proplist = JSON.parse(sessionStorage.getItem('properties') || '[]').filter((e:any) => e.id != id)
    // sessionStorage.setItem('properties', JSON.stringify(this.proplist));
    console.log(this.proplist);
  }
  updateView(e: any){
    console.log(e);
    this._propservice.getAllProperties().subscribe(list => {
      this.proplist = list;
      console.log(list);
    })
    // this.proplist = e.fields;
    // sessionStorage.setItem('properties', JSON.stringify(this.proplist));
    this.showaddform = false;
  }
  ngOnDestroy(): void {
    sessionStorage.clear();
  }

}
