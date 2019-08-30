import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let GolfDataService = class GolfDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getGolfData(id) {
        const url = 'https://golf-courses-api.herokuapp.com/courses/';
        const golfId = id;
        return this.httpClient.get((url + golfId));
    }
};
GolfDataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GolfDataService);
export { GolfDataService };
//# sourceMappingURL=golf-data.service.js.map