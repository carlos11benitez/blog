import { Component } from '@angular/core';

interface Post {
  postUrl: string;
  img: string;
  title: string;
  categoryUrl: string;
  category: string;
  likes: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts: Post[] = [
    {
      postUrl: 'https://lapirateca.com/textos-sagrados/los-libros-del-tao-tao-te-ching-lao-tse/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/03/9788498797411.png',
      title: 'Los libros del Tao. Tao Te ching – Lao Tse',
      categoryUrl: 'https://lapirateca.com/category/textos-sagrados/',
      category: 'Textos Sagrados',
      likes: 5
    },
    {
      postUrl: 'https://lapirateca.com/filosofia/el-cultivo-de-los-gestos-entre-plantas-animales-y-humanos-hacer-mundos-con-gestos-andre-haudricourt-marie-bardet/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/02/logdfo-400x545.jpg',
      title: 'El cultivo de los gestos entre plantas, animales y humanos; Hacer mundos con gestos – André Haudricourt; Marie Bardet',
      categoryUrl: 'https://lapirateca.com/category/filosofia/',
      category: 'Filosofia',
      likes: 10
    },
    {
      postUrl: 'https://lapirateca.com/ensayo-literario/la-segunda-mano-o-el-trabajo-de-la-cita-antoine-compagnon/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/02/Cubierta-La-segunda-mano-400x632.jpg',
      title: 'La segunda mano o el trabajo de la cita – Antoine Compagnon',
      categoryUrl: 'https://lapirateca.com/category/ensayo-literario/',
      category: 'Ensayo Literario',
      likes: 1
    }
  ]

}
