import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TopBar } from './components/top-bar/top-bar';
import { PostList } from './components/post-list/post-list';
import { PostListItem } from './components/post-list-item/post-list-item';
import { PostDetail } from './components/post-detail/post-detail';
import { PostCreate } from './components/post-create/post-create';

@NgModule({
  declarations: [App, TopBar, PostList, PostListItem, PostDetail, PostCreate],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
