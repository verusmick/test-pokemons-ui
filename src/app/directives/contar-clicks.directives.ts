import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: 'li[count-clicks]'
})
export class CountClicksDirective {
    clickN = 0;
    @HostBinding('style.opacity') opacity: number = .1;
    @HostListener('click', ['$event.target']) onclick(btn) {
        this.clickN++;
        this.opacity += .1;
        // console.log('click', btn, );
    }
}
