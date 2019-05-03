import { Bagel } from "../models/bagel";
import { Observable } from 'rxjs';
import { of } from "rxjs/observable/of";

export class Cart{
    private static bagels: Bagel [];

    static addToCart(bagel: Bagel){
        this.bagels.push(bagel);
    }
    
    static getBagels(): Observable<Bagel[]> {
        return of(this.bagels);
    }

    static getTotal(): Observable<number>{
        let total: number;
        this.bagels.forEach(element => {
            element.addOns.forEach(addon => {
                total+= addon.price;
            })
            total += element.price + element.smear.price;
        });
        return of(total);
    }

    static clearCart(){
        this.bagels = [];
    }
}