import { Injectable } from '@angular/core';
import { Post } from './models/Post';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  arrPost: Post[];
  id: number;

  constructor() {
    this.id = 4
    if(localStorage.getItem('blogsLS')) {
      this.arrPost = JSON.parse(localStorage.getItem('blogsLS')) //comprobamos si ya hay algo en local storage
    } else {                                                     // y si no creamos un array vacio
      this.arrPost = [];
    }

    this.arrPost = [
      // tslint:disable-next-line: max-line-length
      new Post('Abra', 'blablabla', 'Javier', 'https://www.pngitem.com/pimgs/m/513-5136720_pokemon-alakazam-kadabra-pokemon-yellow-hd-png-download.png', 'serCuqui', 1),
      // tslint:disable-next-line: max-line-length
      new Post( 'Kadabra', 'blebleble', 'cristian', 'https://www.kindpng.com/picc/m/0-9845_kadabra-pokemon-hd-png-download.png', 'hipnotismo', 2),
      // tslint:disable-next-line: max-line-length
      new Post('Alakazam', 'bliblibli', 'Natan', 'https://www.pngitem.com/pimgs/m/1-10176_abra-kadabra-alakazam-png-download-pixel-art-pokemon.png', 'follarteLaMente', 3),
    ];
  }

  agregarPost($event) { let Post = {...$event}
    this.arrPost.unshift(Post); // Unshift es para que en lugar de agregarse al final de la lista, los nuevos elementos se agreguen al inicio
    this.id++;
    localStorage.setItem('blogsLS', JSON.stringify(this.arrPost))
    return this.getAllPosts();
    
  }

  getAllPosts(): Post[] {
    return this.arrPost;
  }

  getPostByCategoria(pCategoria: string): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      if ( pCategoria === 'eligeCategoria')
      {
        resolve (this.arrPost)
      } else {
      const arrFiltrado = this.arrPost.filter(item => item.categoria === pCategoria);
      resolve(arrFiltrado);
      //console.log(pCategoria);
      }
    });
    return prom;
  }

  borrarPost() { 

  }


}
