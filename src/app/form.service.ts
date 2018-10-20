import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";


@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(private formBuilder: FormBuilder) {
    }

    public createLoginUserFormBuilderValidator() {
        return this.formBuilder.group({
            email: ['', Validators.compose([
                Validators.minLength(2),
                Validators.maxLength(200),
                Validators.required
            ])],
            password: ['', Validators.compose([
                Validators.minLength(2),
                Validators.maxLength(200),
                Validators.required
            ])]
        });
    }


}
