import { Component, Directive, ElementRef, HostListener, OnInit } from '@angular/core';
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
      destino: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3),
        matchOtherValidator('origen')
      ])),
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
      this.jorneyToFind.price=0
      this.jorneyToFind.flights=[]
      this.jorneyToFind.origin=this.myForm.get('origen')?.value,
      this.jorneyToFind.destination=this.myForm.get('destino')?.value,
      this.service.getJorney(this.jorneyToFind).subscribe((data:Journey)=>{
          this.jorneyToFind=data
      })
    }
  }

}



 @Directive({
   selector: '[uppercase]',
   host: {
     '(input)': '$event'
   }
 })
 export class UppercaseInputDirective {
 
   public lastValue: string | undefined;
 
   constructor(public ref: ElementRef) { }
 
   @HostListener('input', ['$event']) onInput($event:any) 
   {
     var start = $event.target.selectionStart;
     var end = $event.target.selectionEnd;
     $event.target.value = $event.target.value.toUpperCase();
     $event.target.setSelectionRange(start, end);
     $event.preventDefault();
 
     if (!this.lastValue || (this.lastValue && $event.target.value.length > 0 && this.lastValue !== $event.target.value)) {
       this.lastValue = this.ref.nativeElement.value = $event.target.value;
       // Propagation
       const evt = document.createEvent('HTMLEvents');
       evt.initEvent('input', false, true);
       $event.target.dispatchEvent(evt);
     }
   }
 }

 