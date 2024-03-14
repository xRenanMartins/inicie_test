import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { take } from 'rxjs';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  getScreenWidth: any = 0;
  currentIndex: any = 0;
  items = ['item1','item2','item3','item4','item5','item6','item7','item8','item9','item1','item1','item1','item1','item1','item1'];
  itemsPerPage = 5;
  itemWidth: number = 0;
  params: any = {
    // nome: '',
    length: 20,
  };
  isLoading = false;
  total = 0;
  data: any = [];

  constructor(private pokemonService: PokemonService){
  }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.itemWidth = 100 / this.itemsPerPage;
    console.log(this.getScreenWidth);
    this.load('');
    console.log(this.data);
  }


  nextSlide() {
    this.currentIndex += this.itemsPerPage;
    if (this.currentIndex > this.items.length) {
      this.currentIndex = 0;
    }
    console.log(this.items.length)
    console.log(this.currentIndex)
  }

  prevSlide() {
    if (this.currentIndex >= this.itemsPerPage) {
      this.currentIndex -= this.itemsPerPage;
    } else {
      this.currentIndex = Math.max(this.items.length - this.itemsPerPage, 0);
    }
  }

  load(isSearch: any) {
    if (isSearch) {
      // this.paginate.page = 1;
    }
    this.isLoading = true;
    // this.params.page = this.paginate.page;
    // this.params.length = this.paginate.perPage;

    this.pokemonService
      .listPokemon(this.params)
      .pipe(take(1))
      .subscribe({
        next: (data: any) => {
          this.data = data.data.results;
          this.total = data.data.count;
          console.log(this.data)
        },
        error: () => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  firstLetterUpper(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

}
