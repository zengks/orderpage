import { Component, Input } from '@angular/core';

@Component({
    selector: 'orderSummary',
    templateUrl: 'orderSummary.html',
    styleUrls: ['./app.component.css', './bootstrap.min.css']
})

export class OrderSummary{

    tax:number = 0.07;

    @Input()
    allOrders: Array<any>;

    @Input()
    userDetails: Array<any>;

    deleteOrderItem(index)
    {
        this.allOrders.splice(index,1);
    }

    subtotal(allOrders)
    {
        let result:number = 0;
       
        allOrders.forEach(order => {
            result = result + order[3];
        });

        return result.toFixed(2);
    }

    getTax(subtotal)
    {
        let calculatedTax: number = 0.0;
        calculatedTax = subtotal * this.tax;
        return calculatedTax.toFixed(2);
    }

    total()
    {
        let subtotal:number = Number(this.subtotal(this.allOrders));
        let calculatedTax:number = Number(this.getTax(subtotal));
        let result:number = Number(calculatedTax + subtotal);
        return result.toFixed(2);
    }

}