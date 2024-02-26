import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Search } from '../models';
import { Weathersvc } from '../weathersvc.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  //use either 1.this or lower case inject or use constructor(private fb: Formbuilder){}
  // this is where you inject the weather svc.
 constructor(private fb: FormBuilder,private svc: Weathersvc){}

 searchForm !: FormGroup;

 ngOnInit(): void {
  //this.formgroup = this.creationmethod(this.input)
  this.searchForm = this.createForm();
  }


  private createForm(): FormGroup{
    return this.fb.group({
      city: this.fb.control("",[Validators.required])
    });
  }
  pressed(): void {
    // when clicked assign the form value to the object
    const s: Search = this.searchForm.value;
    // Use service as a trigger then parse in the relevant values
    this.svc.getWeather(s.city);
    // make a new form.
    this.searchForm = this.createForm();
  }
}
