import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.html',
    styles:[`
        .card-custom {width: 5em; height: 5em; }
        .card-style {
            opacity: 0.95;
            box-shadow: 0 0 11px rgba(33,33,33,.2);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .card-style:hover {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            cursor: pointer;
        }
    `]
})
export class CardComponent implements OnInit {
    private isLoading: boolean = false
    @Input() name:string
    @Input() url:string
    @Input() index:number 
    @Input() isRoutable:boolean

    ngOnInit(): void {
        this.isLoading = true;
    }
    handleLoading(isError){
        this.isLoading = false;
    }
    ngOnDestroy(): void {
        this.isLoading = false;
        
    }
}
