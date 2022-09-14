import { AbstractControl } from "@angular/forms";

export class MisValidaciones {

  
    
    static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password')?.value;
        const confirmPassword: string = control.value; 
      
        if (confirmPassword !== password) {
         
          control.value.setErrors({ NoPassswordMatch: true });
        
        }
      
       return null;
      }
    }