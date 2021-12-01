import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-zipcode-form',
    templateUrl: './zipcode-form.component.html',
    styleUrls: ['./zipcode-form.component.css']
})
export class ZipcodeFormComponent {

    zipcodeForm: FormGroup;

    @Output() zipcodeAddedEvent = new EventEmitter<number>();

    constructor(private fb: FormBuilder) {
        this.zipcodeForm = fb.group({
            zipcode: fb.control('', [
                Validators.required,
                Validators.pattern("[0-9]+"),
                Validators.minLength(5),
            ])
        });
    }

    public submitZipcode(): void {
        if(this.zipcodeForm.valid) {
            let toAdd = Number(this.zipcodeForm.get("zipcode")?.value);
            this.zipcodeAddedEvent.emit(toAdd)
            this.zipcodeForm.reset();
        } else {
            console.error('ZipcodeForm: Submitting invalid value ' + this.zipcodeForm.get("zipcode")?.value);
        }

    }

}
