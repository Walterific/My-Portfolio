import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./components/about/about.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { UsesComponent } from "./components/uses/uses.component";

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'uses', component: UsesComponent}
]

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
        FontAwesomeModule,
    ],

    exports: [
        RouterModule
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        HomepageComponent,
        AboutComponent,
        ProjectsComponent,
        UsesComponent,
        FooterComponent,
    ],

    providers: [

    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}