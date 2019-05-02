import { Bagel } from "../models/bagel";
import { Smear } from "../models/smear";

export class Cart{
    bagels: Bagel [];

    addToCart(bagel: Bagel){
        this.bagels.push(bagel);
    }

    // getTotal(): number{
        
    // }
}