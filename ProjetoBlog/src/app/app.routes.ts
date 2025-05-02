import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ContentComponent } from "./pages/content/content.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
    {
        path: 'a',
        component:HomeComponent
    },
      {
        path: 'content/:id',
        component:ContentComponent
    }
    

  ];

  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })

  export class ContentRoutes{}