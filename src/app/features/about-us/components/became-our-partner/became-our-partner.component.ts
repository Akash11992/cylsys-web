import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-became-our-partner',
  templateUrl: './became-our-partner.component.html',
  styleUrls: ['./became-our-partner.component.css']
})
export class BecameOurPartnerComponent implements OnInit {
  isChecked: boolean = false;
  ischeckclick: boolean = false;
  industry_id: any;
  PartnerForm: any = FormGroup;
  show_eye: boolean = false;
  show_button: boolean = false;
  submitted: boolean = false;
  industrydata: any[] = []; // Initialize with an empty array
  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private ngxloaderService: NgxUiLoaderService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getAllIndustryApi();
  }
  createForm() {
    this.PartnerForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],

      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'),
        ],
      ],
      organization_name: ['', [Validators.required, Validators.minLength(3)]],

      organization_type: ['', [Validators.required]],
      expexctations: [''],

    });
  }

  getAllIndustryApi() {
    // console.log('get services');

    this.sharedService.getAllIndustryApi().subscribe(
      (res: any) => {
        if (res) {
          this.industrydata = res;
          // console.log(this.industrydata);
          // this.sharedService.getToastPopup(res.message,'','success');
        }
      },
      (err: any) => {
        console.log('error');
      }
    );
  }

  get saveFormControl() {
    return this.PartnerForm.controls;
  }

  changeIndustry(e: any) {
    this.industry_id = e.target.value;
    // console.log('e', e.target.value);
  }
  SaveRequestEndpointApi() {
    // console.log(this.PartnerForm.invalid);
    // Mark all controls as touched
    Object.values(this.PartnerForm.controls).forEach((control: any) => {
      control.markAsTouched();
    });
    if (this.PartnerForm.invalid) {
      // console.log("hii");
      // console.log(this.PartnerForm.value);

      // this.sharedService.getToastPopup('Please fill all fields!', '', 'error');
    } else {
      let body = {
        First_name: this.PartnerForm.value.first_name,
        Last_name: this.PartnerForm.value.last_name,

        Email: this.PartnerForm.value.email,
        Organization_name: this.PartnerForm.value.organization_name,
        Organization_type: this.industry_id,
        Expectations: this.PartnerForm.value.expexctations,
      };
      // console.log('payload', body);

      this.ngxloaderService.start();
      this.sharedService.SavePartnerRequestEndpointApi(body).subscribe(
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
  }

  resetForm() {
    this.PartnerForm.reset();
    this.ischeckclick = false;

    // Set the "services" control (Select Services dropdown) to an empty string (placeholder)
    this.PartnerForm.get('organization_type')?.setValue('');
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
