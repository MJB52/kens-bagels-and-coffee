import { Bagel } from "../models/bagel";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

export class Bagels{
    bagels: Bagel[] = [
        {name: "baby", price: 5.00, imageLocation: "", description: "", smear: undefined, addOns: undefined}];

    getBagels(): Observable<Bagel[]>{
        return of(this.bagels);
    }
}