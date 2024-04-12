import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SmartEditorComponent, SmartField} from "../../projects/smart/src/lib/smart-editor/smart-editor.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        SmartEditorComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Web UI';

    fields: SmartField[] = [
        {
            key: 'test', label: 'test', type: 'radio',
            options: [
                {label: "A", value: 'a'},
                {label: "B", value: 'b'}
            ]
        },
        {key: 'test2', label: 'test2', type: 'checkbox'},
        {key: 'test3', label: 'test3', type: 'rate'},
    ];

    constructor() {
    }
}
