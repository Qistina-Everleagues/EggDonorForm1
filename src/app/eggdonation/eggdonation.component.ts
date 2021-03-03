import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eggdonation',
  templateUrl: './eggdonation.component.html',
  styleUrls: ['./eggdonation.component.css']
})
export class EggdonationComponent implements OnInit {

  checked = false;
  showForm: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    confirm_email: new FormControl('', Validators.required),
    telephone_number: new FormControl('', Validators.required),
    streetAdd: new FormControl('', Validators.required),
    address_2: new FormControl(''),
    city: new FormControl('', Validators.required),
    state: new FormControl('', [Validators.required]),
    // outside_USA: new FormControl(''),
    zip_code: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    birthDate: new FormControl(new Date(), Validators.required),
    country_birth: new FormControl('', Validators.required),
    height_feet: new FormControl('', Validators.required),
    height_in: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    eye_color: new FormControl('', [Validators.required]),
    hair_color: new FormControl('', [Validators.required]),
    bloodType: new FormControl('', [Validators.required]),
    highest_level_education : new FormControl('', [Validators.required]),
    Black: new FormControl(false),
    Asian: new FormControl(false),
    Caucasian: new FormControl(false),
    Latina: new FormControl(false),
    Middle_Eastern: new FormControl(false),
    tribe: new FormControl(0, [Validators.required]),
    parentage: new FormControl(0, [Validators.required]),
    bioChildren: new FormControl(0, [Validators.required]),
    pregnant: new FormControl(0, [Validators.required]),
    // list_ages_children: new FormControl(''),
    breastfeeding: new FormControl(0, [Validators.required]),
    ovaries: new FormControl(0, [Validators.required]),
    tobacco: new FormControl(0, [Validators.required]),
    used: new FormControl(0, [Validators.required]),
    medications: new FormControl(0, [Validators.required]),
    alcoholism: new FormControl(0, [Validators.required]),
    felony: new FormControl(0, [Validators.required]),
    hear_about_us: new FormControl('', [Validators.required]),
    // explain_about_us: new FormControl(''),
    check: new FormControl(false),
    agree: new FormControl(0, [Validators.required])

    //old formControlNames

    /* experience: new FormControl(0, [Validators.required]),
    race: new FormControl('', Validators.required),
    registered_BIA: new FormControl('', [Validators.required]), 
    why_date_last_used: new FormControl(''),
    yes_positive_carrier: new FormControl('', Validators.required),
    preferred_languange: new FormControl('', [Validators.required]),
    others_languange: new FormControl(''), */
    
    // dummy ones
    /*
    contact_method:new FormControl(''),
    others_contact_method:new FormControl(''),
    height:new FormControl(''),
    city_country_residence:new FormControl('')
    */
  });

}
