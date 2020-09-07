import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile.component';
import { AboutComponent } from './about/about.component';
import { NgxSpinnerModule } from 'node_modules/ngx-spinner';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { IntroComponent } from './intro/intro.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxSpinnerModule,
        SnotifyModule
    ],

    declarations:[
        ProfileComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        IntroComponent,
        ExperienceComponent,
        ProjectsComponent,
        SkillsComponent,
        EducationComponent,
        PortfolioComponent,
        ReferenceComponent,
        ContactComponent
    ],

    providers: [
       {
           provide: 'SnotifyToastConfig', useValue: ToastDefaults
       },
       SnotifyService
    ]
})

export class ProfileModule{}