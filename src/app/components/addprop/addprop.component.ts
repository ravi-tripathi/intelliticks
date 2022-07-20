import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-addprop',
  templateUrl: './addprop.component.html',
  styleUrls: ['./addprop.component.scss']
})
export class AddpropComponent implements OnInit {

  constructor() { }
  name = new FormControl('');
  description = new FormControl('');
  size = new FormControl('');
  proplist: any = [];

  @Output() newPropAddedEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.proplist =JSON.parse(sessionStorage.getItem('properties') || '[]');
    console.log(this.proplist);
  }

  submitForm() {
    var data = {
      id: Math.round(Math.random() * Math.random() * 10000),
      name: this.name?.value,
      description: this.description?.value,
      size: this.size?.value
    };
    console.log(data);
    this.proplist = JSON.parse(sessionStorage.getItem('properties') || '[]');
    console.log(this.proplist);
    this.proplist.push(data);
    console.log(this.proplist);
    sessionStorage.setItem('properties', JSON.stringify(this.proplist));
    this.newPropAddedEvent.emit(this.proplist);
  }

}
