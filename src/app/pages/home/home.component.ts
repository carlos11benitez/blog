import { Component } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

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

  filteredPostsColumns: any[] = []
  posts: Post[] = [
    {
      postUrl: 'https://lapirateca.com/textos-sagrados/los-libros-del-tao-tao-te-ching-lao-tse/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/03/9788498797411.png',
      title: '1) Los libros del Tao. Tao Te ching – Lao Tse',
      categoryUrl: 'https://lapirateca.com/category/textos-sagrados/',
      category: 'Textos Sagrados',
      likes: 5,
    },
    {
      postUrl: 'https://lapirateca.com/filosofia/el-cultivo-de-los-gestos-entre-plantas-animales-y-humanos-hacer-mundos-con-gestos-andre-haudricourt-marie-bardet/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/02/logdfo-400x545.jpg',
      title: '2) El cultivo de los gestos entre plantas, animales y humanos; Hacer mundos con gestos – André Haudricourt; Marie Bardet',
      categoryUrl: 'https://lapirateca.com/category/filosofia/',
      category: 'Filosofia',
      likes: 1
    },
    {
      postUrl: 'https://lapirateca.com/ensayo-literario/la-segunda-mano-o-el-trabajo-de-la-cita-antoine-compagnon/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/02/Cubierta-La-segunda-mano-400x632.jpg',
      title: '3) La segunda mano o el trabajo de la cita – Antoine Compagnon',
      categoryUrl: 'https://lapirateca.com/category/ensayo-literario/',
      category: 'Ensayo Literario',
      likes: 1
    },
    {
      postUrl: 'https://lapirateca.com/filosofia/mundo-nosotros-yo-ensayos-cosmopolieticos-antonio-campillo/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/01/9788425441202_1_2-400x612.jpg',
      title: '4) Mundo, nosotros, yo. Ensayos cosmopoliéticos – Antonio Campillo',
      categoryUrl: 'https://lapirateca.com/category/filosofia/',
      category: 'Filosofia',
      likes: 1
    },
    {
      postUrl: 'https://lapirateca.com/textos-sagrados/los-libros-del-tao-tao-te-ching-lao-tse/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/03/9788498797411.png',
      title: '5) Los libros del Tao. Tao Te ching – Lao Tse',
      categoryUrl: 'https://lapirateca.com/category/textos-sagrados/',
      category: 'Textos Sagrados',
      likes: 5,
    },
    {
      postUrl: 'https://lapirateca.com/filosofia/el-cultivo-de-los-gestos-entre-plantas-animales-y-humanos-hacer-mundos-con-gestos-andre-haudricourt-marie-bardet/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/02/logdfo-400x545.jpg',
      title: '6) El cultivo de los gestos entre plantas, animales y humanos; Hacer mundos con gestos – André Haudricourt; Marie Bardet',
      categoryUrl: 'https://lapirateca.com/category/filosofia/',
      category: 'Filosofia',
      likes: 1
    },
    {
      postUrl: 'https://lapirateca.com/ensayo-literario/la-segunda-mano-o-el-trabajo-de-la-cita-antoine-compagnon/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/02/Cubierta-La-segunda-mano-400x632.jpg',
      title: '7) La segunda mano o el trabajo de la cita – Antoine Compagnon',
      categoryUrl: 'https://lapirateca.com/category/ensayo-literario/',
      category: 'Ensayo Literario',
      likes: 1
    },
    {
      postUrl: 'https://lapirateca.com/filosofia/mundo-nosotros-yo-ensayos-cosmopolieticos-antonio-campillo/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/01/9788425441202_1_2-400x612.jpg',
      title: '8) Mundo, nosotros, yo. Ensayos cosmopoliéticos – Antonio Campillo',
      categoryUrl: 'https://lapirateca.com/category/filosofia/',
      category: 'Filosofia',
      likes: 1
    },
    {
      postUrl: 'https://lapirateca.com/textos-sagrados/los-libros-del-tao-tao-te-ching-lao-tse/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/03/9788498797411.png',
      title: '9) Los libros del Tao. Tao Te ching – Lao Tse',
      categoryUrl: 'https://lapirateca.com/category/textos-sagrados/',
      category: 'Textos Sagrados',
      likes: 5,
    },
    {
      postUrl: 'https://lapirateca.com/filosofia/el-cultivo-de-los-gestos-entre-plantas-animales-y-humanos-hacer-mundos-con-gestos-andre-haudricourt-marie-bardet/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/02/logdfo-400x545.jpg',
      title: '10) El cultivo de los gestos entre plantas, animales y humanos; Hacer mundos con gestos – André Haudricourt; Marie Bardet',
      categoryUrl: 'https://lapirateca.com/category/filosofia/',
      category: 'Filosofia',
      likes: 1
    },
    {
      postUrl: 'https://lapirateca.com/ensayo-literario/la-segunda-mano-o-el-trabajo-de-la-cita-antoine-compagnon/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/02/Cubierta-La-segunda-mano-400x632.jpg',
      title: '11) La segunda mano o el trabajo de la cita – Antoine Compagnon',
      categoryUrl: 'https://lapirateca.com/category/ensayo-literario/',
      category: 'Ensayo Literario',
      likes: 1
    },
    {
      postUrl: 'https://lapirateca.com/filosofia/mundo-nosotros-yo-ensayos-cosmopolieticos-antonio-campillo/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/01/9788425441202_1_2-400x612.jpg',
      title: '12) Mundo, nosotros, yo. Ensayos cosmopoliéticos – Antonio Campillo',
      categoryUrl: 'https://lapirateca.com/category/filosofia/',
      category: 'Filosofia',
      likes: 1
    },
    {
      postUrl: 'https://lapirateca.com/filosofia/el-cultivo-de-los-gestos-entre-plantas-animales-y-humanos-hacer-mundos-con-gestos-andre-haudricourt-marie-bardet/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/02/logdfo-400x545.jpg',
      title: '13) El cultivo de los gestos entre plantas, animales y humanos; Hacer mundos con gestos – André Haudricourt; Marie Bardet',
      categoryUrl: 'https://lapirateca.com/category/filosofia/',
      category: 'Filosofia',
      likes: 1
    },
    {
      postUrl: 'https://lapirateca.com/ensayo-literario/la-segunda-mano-o-el-trabajo-de-la-cita-antoine-compagnon/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/02/Cubierta-La-segunda-mano-400x632.jpg',
      title: '14) La segunda mano o el trabajo de la cita – Antoine Compagnon',
      categoryUrl: 'https://lapirateca.com/category/ensayo-literario/',
      category: 'Ensayo Literario',
      likes: 1
    },
    {
      postUrl: 'https://lapirateca.com/filosofia/mundo-nosotros-yo-ensayos-cosmopolieticos-antonio-campillo/',
      img: 'https://lapirateca.com/wp-content/uploads/2023/01/9788425441202_1_2-400x612.jpg',
      title: '15) Mundo, nosotros, yo. Ensayos cosmopoliéticos – Antonio Campillo',
      categoryUrl: 'https://lapirateca.com/category/filosofia/',
      category: 'Filosofia',
      likes: 1
    }
  ]

  constructor() {
    this.reorder5(this.posts)
  }

  onResized(event: ResizedEvent) {
    console.log(Math.floor(event.newRect.width))
    // if (Math.floor(event.newRect.width) >= 1200) {
    //   this.reorder5(this.posts)
    // } else if (Math.floor(event.newRect.width) >= 950 && Math.floor(event.newRect.width) < 1200) {
    //   this.reorder4(this.posts)
    // } else if (Math.floor(event.newRect.width) >= 620 && Math.floor(event.newRect.width) < 950) {
    //   this.reorder3(this.posts)
    // } else if (Math.floor(event.newRect.width) < 620) {
    //   this.filteredPostsColumns = this.posts
    // }
  }

  reorder5(array: Post[]) {
    let uno: Post[] = []
    let dos: Post[] = []
    let tres: Post[] = []
    let cuatro: Post[] = []
    let cinco: Post[] = []
    for (let index = 0; index < array.length;) {
      array[index] ? uno.push(array[index]) : null
      index++
      array[index] ? dos.push(array[index]) : null
      index++
      array[index] ? tres.push(array[index]) : null
      index++
      array[index] ? cuatro.push(array[index]) : null
      index++
      array[index] ? cinco.push(array[index]) : null
      index++
    }
    this.filteredPostsColumns = [[...uno], [...dos], [...tres], [...cuatro], [...cinco]]
  }

  reorder4(array: Post[]) {
    let uno: Post[] = []
    let dos: Post[] = []
    let tres: Post[] = []
    let cuatro: Post[] = []
    for (let index = 0; index < array.length;) {
      array[index] ? uno.push(array[index]) : null
      index++
      array[index] ? dos.push(array[index]) : null
      index++
      array[index] ? tres.push(array[index]) : null
      index++
      array[index] ? cuatro.push(array[index]) : null
      index++
    }
    this.filteredPostsColumns = [[...uno], [...dos], [...tres], [...cuatro]]
  }

  reorder3(array: Post[]) {
    let uno: Post[] = []
    let dos: Post[] = []
    let tres: Post[] = []
    for (let index = 0; index < array.length;) {
      array[index] ? uno.push(array[index]) : null
      index++
      array[index] ? dos.push(array[index]) : null
      index++
      array[index] ? tres.push(array[index]) : null
      index++
    }
    this.filteredPostsColumns = [[...uno], [...dos], [...tres]]
    console.log(this.filteredPostsColumns)
  }

  shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

}
