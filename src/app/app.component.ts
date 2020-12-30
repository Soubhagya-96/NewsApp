import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mArticles!: any;
  mSources!: any;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    //load articles
    this.newsapi.initArticles().subscribe((data) => {
      console.log("data recieved" + typeof (data));
      this.mArticles = data; 
    });
    //load news sources
    this.newsapi.initSources().subscribe(data => {
      this.mSources = data;
    });
  }

  searchArticles(source: any) {
    console.log("selected source is: " + source);
    this.newsapi.getArticlesByID(source).subscribe(data => {
      this.mArticles = data;
    });
  }

}
