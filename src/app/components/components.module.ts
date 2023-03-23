import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostCardComponent } from './blog-post-card/blog-post-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    BlogPostCardComponent,
    SidebarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogPostCardComponent,
    SidebarComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
