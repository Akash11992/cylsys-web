import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  submitForm:any = FormGroup;
  service_id: any;

  serviceList: any[] = []; // Initialize with an empty array

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private sharedService: SharedService,
    private ngxloaderService: NgxUiLoaderService,
  ) {

   }

  ngOnInit(): void {
this.enquiryForm(); 
this.getAllServicesApi();

  }
  enquiryForm() {
    this.submitForm = this.formBuilder.group({
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
  get submitFormControl() {
    return this.submitForm.controls;
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

  getAllServicesApi() {
    // console.log('get services');

    this.sharedService.getAllServicesApi().subscribe(
      (res: any) => {
        if (res) {
          this.serviceList = res;

        }
      },
      (err: any) => {
        console.log('error');
      }
    );
  }

  changeService(e: any) {
    this.service_id = e.target.value;
    // console.log('e', e.target.value);
  }

  SaveRequestEndpointApi() {
    // console.log(this.saveForm.invalid);
    // Mark all controls as touched
    Object.values(this.submitForm.controls).forEach((control: any) => {
      control.markAsTouched();
    });
    if (this.submitForm.invalid) {
      // console.log("hii");
      // console.log(this.submitForm.value);

      // this.sharedService.getToastPopup('Please fill all fields!', '', 'error');
    } else {
      let body = {
        name: this.submitForm.value.name,
        email: this.submitForm.value.email,
        phoneNo: this.submitForm.value.phoneNo,
        services: this.service_id,
        requirementBrief: this.submitForm.value.requirementBrief,
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
            document.getElementById('myModal')?.click();
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
  }


  resetForm() {
    this.submitForm.reset();
    // this.ischeckclick = false;

    // Set the "services" control (Select Services dropdown) to an empty string (placeholder)
    this.submitForm.get('services')?.setValue('');
  }
  onModalHidden() {
    this.resetForm();
  }

  closeModal() {
    // Add any logic you need before closing the modal
    this.resetForm();
    document.getElementById('myModal')?.click(); // Trigger the modal close
  }
}
