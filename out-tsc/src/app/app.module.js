import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatOptionModule, MatSelectModule, } from '@angular/material';
import { AppComponent } from './app.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            HttpClientModule,
            CommonModule,
            FormsModule,
            BrowserModule,
            BrowserAnimationsModule,
            MatListModule,
            MatButtonModule,
            MatToolbarModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatOptionModule,
            MatSelectModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map