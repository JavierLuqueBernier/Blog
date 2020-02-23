import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/Post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listaPost: Post[];

  constructor(private activatedRoute: ActivatedRoute, private blogservice: BlogService) {
    this.listaPost = [];
   }

  ngOnInit() {
    this.listaPost = this.blogservice.getAllPosts();
    // console.log(this.listaPost);
  }

  manejarFiltro($event) {
    this.blogservice.getPostByCategoria($event.target.value)
    .then(arrPost => {
      this.listaPost = arrPost;
    });
  }

}
