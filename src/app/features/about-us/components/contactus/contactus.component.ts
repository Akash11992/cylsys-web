import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  isChecked: boolean = false;
  ischeckclick: boolean = false;
  service_id: any;
  contactUsForm: any = FormGroup;
  submitted: boolean = false;
  serviceList: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private sharedService: SharedService,
    private ngxloaderService: NgxUiLoaderService,
  ) { }

  ngOnInit(): void {
    this.createContactUsForm();
    this.getAllServicesApi();

  }
  createContactUsForm() {
    this.contactUsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'),
        ],
      ],

      phoneNo: ['', [Validators.required, Validators.minLength(10)]],
      services: ['', [Validators.required]],
      requirementBrief: ['', [Validators.required]],
    });
  }

  
  changeService(e: any) {
    this.service_id = e.target.value;
    // console.log('e', e.target.value);
  }

  getAllServicesApi() {


    this.sharedService.getAllServicesApi().subscribe(
      (res: any) => {
        if (res) {
          this.serviceList = res;
          console.log(this.serviceList);
          // this.sharedService.getToastPopup(res.message,'','success');
        }
      },
      (err: any) => {
        console.log('error');
      }
    );
  }

  get saveFormControl() {
    return this.contactUsForm.controls;
  }
  SaveRequestEndpointApi() {
    console.log(this.contactUsForm.invalid);
    // Mark all controls as touched
    Object.values(this.contactUsForm.controls).forEach((control: any) => {
      control.markAsTouched();
    });

      let body = {
        name: this.contactUsForm.value.name,
        email: this.contactUsForm.value.email,
        phoneNo: this.contactUsForm.value.phoneNo,
        services: this.service_id,
        requirementBrief: this.contactUsForm.value.requirementBrief,
      };
      // console.log('payload', body);
      this.ngxloaderService.start();

      this.sharedService.SaveRequestEndpointApi(body).subscribe(
        (res: any) => {
          this.ngxloaderService.stop();

          if (res.status) {
            this.sharedService.getToastPopup(
              'Request Sent Succesfully!',
              '',
              'success'
            );
            this.resetForm();
          }
        },
        (err: any) => {
          this.sharedService.getToastPopup(
            'Internal server error', '', 'error'
          );
          this.ngxloaderService.stop();

        }
      );
    
  }

  resetForm() {
    this.contactUsForm.reset();
    this.ischeckclick = false;

    // Set the "services" control (Select Services dropdown) to an empty string (placeholder)
    this.contactUsForm.get('services')?.setValue('');
  }
  //key press validation
  keyPressNumbers(event: any) {
    var charCode = event.which ? event.which : event.keyCode;
    // Only Numbers 0-9
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  keyPressAlphabet(event: any) {
    var input = String.fromCharCode(event.keyCode);
    if (/[a-z A-Z]/.test(input)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  onCheckboxChange(event: any) {
    // Handle checkbox change event
    // Handle checkbox change event
    // console.log('Checkbox value:', this.isChecked);

    this.isChecked = event.target.checked;

    // console.log('Checkbox value:', this.isChecked);
    if (!this.isChecked) {
      this.ischeckclick = true;
    } else {
      this.ischeckclick = false;
    }
  }

}
