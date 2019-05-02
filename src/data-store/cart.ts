import { Bagel } from "../models/bagel";
import { Observable } from 'rxjs';
import { of } from "rxjs/observable/of";

export class Cart{
    bagels: Bagel [];

    addToCart(bagel: Bagel){
        this.bagels.push(bagel);
    }
    
    getBagels(): Observable<Bagel[]> {
        return of(this.bagels);
    }
    
    getTotal(): Observable<number>{
        let total: number;
        this.bagels.forEach(element => {
            element.addOns.forEach(addon => {
                total+= addon.price;
            })
            total+= element.price + element.smear.price;
        });
        return of(total);
    }
}