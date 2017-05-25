import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    imports: [ BrowserModule ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}