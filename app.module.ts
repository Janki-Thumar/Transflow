import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { DemocarouselComponent } from './democarousel/democarousel.component';
import { ChooseComponent } from './choose/choose.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CarouselComponent,
    AboutComponent,
    TeamComponent,
    FooterComponent,
    DemocarouselComponent,
    ChooseComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
