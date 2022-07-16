import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateCallBackRequest } from './createRequest.model';
import { RequestService } from './requet.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  public form: FormGroup;
  public message: string = '';
  public ticketTime: string = ''

  constructor(private requestService: RequestService) {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      mobileNumber: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  reset() {
    this.form.reset();
  }

  createRequest() {
    if(this.form.valid) {
      var createRequest: CreateCallBackRequest = { 
        firstName: this.form.controls["firstName"].value,
        lastName: this.form.controls["lastName"].value,
        mobileNumber: this.form.controls["mobileNumber"].value
      };
     this.requestService.createRequest(createRequest).subscribe(response => {
      console.log(response);
      this.message = `Call back request created successfully`;
      this.ticketTime = response.createdTime;
     });
    }
  }
}
