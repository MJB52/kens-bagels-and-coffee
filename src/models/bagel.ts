import { Smear } from './smear'
import { AddOn } from './add-ons';
export class Bagel {
    name: string;
    imageLocation: string;
    price: number;
    description: string;
    smear?: Smear;
    addOns?: AddOn [];
}