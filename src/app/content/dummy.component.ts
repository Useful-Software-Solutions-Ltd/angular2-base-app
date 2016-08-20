import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'my-dummy',
    templateUrl: './dummy.component.html',
})
export class DummyComponent implements OnInit{
    greeting: string = 'que'; 
    
    constructor(private router: Router) {
        
    }

    go() {
        this.greeting = 'hola hombre';
    }

    ngOnInit() {
        this.router.navigate(['/home']);
    }
}