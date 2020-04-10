import {
    Directive,
    Renderer,
    HostBinding,
    ElementRef,
    Input,
    SimpleChanges
} from '@angular/core';

@Directive({
    selector: "[loaderDirective]"
})
export class LoaderDirective {
    private loaderMarkup = `
    <div class="text-center">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    `

    @Input('loaderDirective') config

    constructor(private el: ElementRef,
        private renderer: Renderer) {
        // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    }
    ngOnChanges(changes: SimpleChanges) {
        for (let key in changes) {
            // if (changes[key].currentValue === true) {
            //     // var node = document.createElement("div");
            //     // node.innerHTML += this.loaderMarkup;
            //     // this.el.nativeElement.appendChild(node);
                
            // }
            // if (changes[key].currentValue === false) {
            //     let node = document.getElementById("dynamic_loader");
            //     if (node.parentNode) {
            //         // node.parentNode.removeChild(node);
            //     }
            //     // this.el.nativeElement.removeChild(this.el.nativeElement.getElementById('div2'));
            // }
            // var loaderClassDiv = this.el.nativeElement.parentNode.getElementsByClassName('dynamic_loader');
            var loaderClassDiv = document.getElementById(`dynamic_loader_${this.config.id}`);

            if(loaderClassDiv){
                if(!changes[key].currentValue.isLoading){
                    // let node = this.el.nativeElement.previousSibling;
                    // if (node.parentNode) {
                    //     node.parentNode.removeChild(node);
                    // }
                    if (loaderClassDiv.parentNode) {
                        loaderClassDiv.parentNode.removeChild(loaderClassDiv);
                    }
                }
                // loaderClassDiv[0].style.display = changes[key].currentValue ? 'block' : 'none';
            } else{
                var loader = this.createLoader();
                this.el.nativeElement.parentNode.insertBefore(loader,this.el.nativeElement);
                // loaderClassDiv[0].style.display = 'none !important';
                // loaderClassDiv[0].style.display = changes[key].currentValue ? 'block' : 'none';

            }
        }
    }
    createLoader(): any{
        var div = document.createElement('div');
        div.innerHTML += this.loaderMarkup;
        div.className = 'dynamic_loader d-flex align-items-center justify-content-center';
        div.id= `dynamic_loader_${this.config.id}`
        return div;
    }
}