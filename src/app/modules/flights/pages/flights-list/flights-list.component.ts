import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Journey } from 'src/app/interfaces/jorney.interface';
import { DataService } from 'src/app/services/data.service';
import { matchOtherValidator } from 'src/app/validators/customs.validators';



@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.scss']
})
export class FlightsListComponent implements OnInit {
  public validation_messages = {
    origen: [
      { type: 'required', message: 'Este campo es obligatorio' },
      { type: 'maxlength', message: 'Maximo son 3 caracteres' },
      { type: 'minlength', message: 'Maximo son 3 caracteres' },
    ],
    destino: [
      { type: 'required', message: 'Este campo es obligatorio' },
      { type: 'maxlength', message: 'Maximo son 3 caracteres' },
      { type: 'minlength', message: 'Maximo son 3 caracteres' },
      { type: 'matchOther', message: 'Origen y destino No pueden ser iguales' },
    ],
  };
  public myForm: FormGroup;
  public   jorneyToFind:Journey={
    origin:"",
    destination:"",
    flights:[],
    price:0
  }
  public listsScales=[
    {
      name:"1",
      value:1,
    },
    {
      name:"2",
      value:2,
    },
    {
      name:"3",
      value:3,
    },
    {
      name:"4",
      value:4,
    }
  ]
  public moneys=[
    {
      name:"COP",
      value:5000,
    },
    {
      name:"USD",
      value:1,
    },
    {
      name:"EUR",
      value:1,
    }
  ]
  constructor(private service:DataService) {
    this.myForm = new FormGroup({
      origen: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3)
      ])),
      maxScales: new FormControl( {
        name:"1",
        value:1,
      }, Validators.compose([
        Validators.required,
      ])),
      destino: new FormControl('',  [   Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3),
        matchOtherValidator('origen')]),
      money: new FormControl(  {
        name:"USD",
        value:1,
      }, Validators.compose([

      ]))
    });
   }

  ngOnInit(): void {
   
  }

  changeTypeMoney(){
    
  }

  findJorney(){
    if(this.myForm.valid){
      let jorneyToFindTemporal:Journey={
        origin:this.myForm.get('origen')?.value,
        destination:this.myForm.get('destino')?.value,
        price:0,
        flights:[]
      }
      this.service.maxScales=this.myForm.get('maxScales')?.value.value
      this.service.getJorney(jorneyToFindTemporal).subscribe((data:Journey)=>{
          this.jorneyToFind=data
      })
    }
  }

}
