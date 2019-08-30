import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(golfCourseDataService, golfDataService) {
        this.golfCourseDataService = golfCourseDataService;
        this.golfDataService = golfDataService;
        this.title = 'angularGolf';
    }
    ngOnInit() {
        this.golfCourseDataService
            .getGolfCourses()
            .subscribe(data => this.courses = data);
    }
    onCourseSelect(id) {
        this.golfDataService
            .getGolfData(id)
            .subscribe(data => {
            this.selectedCourse = data.data;
            console.log(data.data);
        });
        setTimeout(function () { console.log(this.selectedCourse); }, 2000);
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map