import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../shared/interface/profile';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  phoneFormat: any;
  @Input() profile: IProfile = {
    name: '',
    dob: '',
    phoneNumber: '',
  };

  ngOnInit(): void {}

}
