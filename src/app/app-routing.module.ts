import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImageComponent } from './add-image/add-image.component';
import { AddComponent } from './add/add.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AuthGuard } from './auth.guard';
import { LoggedUser } from './guard/LoggedUser';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAnnouncementComponent } from './my_announcement/my-announcement.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [LoggedUser]

  },
  {
    path: 'my_announcement',
    component: MyAnnouncementComponent
  },
  {
    path: 'edit_announcement/:id',
    component: EditAnnouncementComponent,
    canActivate: [LoggedUser]
  },
  {
    path: 'announcement/:id',
    component: AnnouncementComponent,
  },
  {
    path: 'favourite',
    component: FavouriteComponent,
    canActivate: [LoggedUser]

  },
  {
    path: 'add_image/:id',
    component: AddImageComponent
  },
  {
    path: 'edit_profile',
    component: EditProfileComponent,
    canActivate: [LoggedUser]

  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
