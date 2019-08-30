import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let GolfCourseDataService = class GolfCourseDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getGolfCourses() {
        const url = 'http://golf-courses-api.herokuapp.com/courses';
        return this.httpClient.get(url).pipe(map(data => data.courses));
    }
};
GolfCourseDataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GolfCourseDataService);
export { GolfCourseDataService };
//# sourceMappingURL=golf-course-data.service.js.map