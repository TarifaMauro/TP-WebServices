import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/public/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-portal',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './news-portal.component.html',
  styleUrl: './news-portal.component.css'
})
export class NewsPortalComponent implements OnInit {
  noticias: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNoticias().subscribe(data => {
      console.log('Datos recibidos:', data);
      this.noticias = data.homepageArticles || [];
    },
    error => {
      console.error('Error al obtener las noticias:', error);
    }
    );
  }

}
