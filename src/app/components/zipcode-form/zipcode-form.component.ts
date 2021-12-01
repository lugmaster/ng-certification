import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
    selector: 'app-zipcode-form',
    templateUrl: './zipcode-form.component.html',
    styleUrls: ['./zipcode-form.component.css']
})
export class ZipcodeFormComponent {

    zipcodeForm: FormGroup;

    @Output() zipcodeAddedEvent = new EventEmitter<number>();

    constructor(private fb: FormBuilder, private lsService: LocalStorageService) {
        this.zipcodeForm = fb.group({
            zipcode: fb.control('', [
                Validators.required,
                Validators.pattern("[0-9]+"),
                Validators.minLength(4),
            ])
        });
    }

    public submitZipcode(): void {
        if(this.zipcodeForm.valid) {
            let toAdd = Number(this.zipcodeForm.get("zipcode")?.value);
            this.zipcodeAddedEvent.emit(toAdd)
            console.log('added to zipcodes: ' + toAdd);
        } else {
            console.error('ZipcodeForm: Submitting invalid value ' + this.zipcodeForm.get("zipcode")?.value);
        }

    }

}
