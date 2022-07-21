import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { PropertiesService } from 'src/app/propservice.service';


@Component({
  selector: 'app-addprop',
  templateUrl: './addprop.component.html',
  styleUrls: ['./addprop.component.scss']
})
export class AddpropComponent implements OnInit {

  constructor(private _propservice: PropertiesService) { }
  name = new FormControl('');
  description = new FormControl('');
  size = new FormControl('');
  proplist: any = [];

  @Output() newPropAddedEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  submitForm() {
    var data = {fields: {
      name: this.name?.value,
      description: this.description?.value,
      size: this.size?.value
    }};

    this._propservice.addNewPropertytoList(data).subscribe(list => {
      this.proplist = list;
      this.newPropAddedEvent.emit(this.proplist);
    });
    
  }

}
