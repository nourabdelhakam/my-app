import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { LogginComponent } from './loggin/loggin.component';

import { GaurdService } from './gaurd.service';



const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HeaderComponent },
  { path: 'About', component: IntroComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Loggin', component: LogginComponent },
  { path: 'Services', component: ContentComponent },
  { path: 'Testimonials', component: TestimonialComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'Blog', component: BlogComponent, canActivate: [GaurdService] },
  { path: 'Article/:id', component: ArticleComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
