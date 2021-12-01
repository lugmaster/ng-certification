import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    private static readonly LOCAL_STORAGE_KEY = 'LOCAL_STORAGE_KEY';

    constructor() {
    }

    public saveNumber(numberToSave: number): number[] {
        let savedNumbers = this.loadNumbers();
        savedNumbers.push(numberToSave);
        this.saveNumbers(savedNumbers);
        return savedNumbers;
    }

    private saveNumbers(numbersToSave: number[]): void {
        try {
            localStorage.setItem(LocalStorageService.LOCAL_STORAGE_KEY, JSON.stringify(numbersToSave));
        } catch (e) {
            console.error('Error at saving ' + numbersToSave + ' to local storage', e);
        }
    }

    public loadNumbers(): number[] {
        let numbersInJson = localStorage.getItem(LocalStorageService.LOCAL_STORAGE_KEY);
        if (numbersInJson) {
            try {
                return JSON.parse(numbersInJson);
            } catch (e) {
                console.error('Error at parsing numbers from ' + numbersInJson, e);
                return [];
            }
        } else {
            return [];
        }
    }

    public deleteNumber(numberToDelete: number): void {
        try {
            let savedNumbers = this.loadNumbers();
            let index = savedNumbers.indexOf(numberToDelete, 0);
            if (index > -1) {
                savedNumbers.splice(index, 1);
                this.saveNumbers(savedNumbers);
            }
        } catch (e) {
            console.error('Cannot remove ' + numberToDelete + ' from local storage', e);
        }

    }
}
