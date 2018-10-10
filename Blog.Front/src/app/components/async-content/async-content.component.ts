import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ddj-async-content',
    templateUrl: './async-content.component.html',
    styleUrls: ['./async-content.component.scss']
})
export class AsyncContentComponent implements OnInit {
    @Input()
    isLoading: boolean;
    @Input()
    loadingText: string;

    @Input()
    error: string;

    constructor() {}

    ngOnInit() {}
}
