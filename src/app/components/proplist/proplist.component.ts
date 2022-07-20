import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-proplist',
  templateUrl: './proplist.component.html',
  styleUrls: ['./proplist.component.scss']
})
export class ProplistComponent implements OnInit, OnDestroy {

  showaddform = false;
  proplist: any =[];
  
  constructor() { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.proplist = this.proplist.push(JSON.parse(sessionStorage.getItem('properties') || '[]'));

  }

  addNewProperty() {
    this.showaddform = !this.showaddform;
  }

  deleteProperty(id: any) {
    console.log(id);
    this.proplist = JSON.parse(sessionStorage.getItem('properties') || '[]').filter((e:any) => e.id != id)
    sessionStorage.setItem('properties', JSON.stringify(this.proplist));
    console.log(this.proplist);
  }
  updateView(e: any){
    console.log(e);
    this.proplist = e;
    sessionStorage.setItem('properties', JSON.stringify(this.proplist));
    this.showaddform = false;
  }
  ngOnDestroy(): void {
    sessionStorage.clear();
  }

}
