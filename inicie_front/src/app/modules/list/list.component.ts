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
    page: 0,
    length: 20,
  };
  isLoading = false;
  total = 0;
  data: any = [];
  itemView: any = [];
  showSide: boolean = false;
  itemParam: any = [];

  constructor(private pokemonService: PokemonService){
  }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.itemWidth = 100 / this.itemsPerPage;
    console.log(this.getScreenWidth);
    this.load();
    console.log(this.data);
  }


  nextSlide() {
    this.currentIndex++;
    console.log(this.currentIndex)
    this.load(this.currentIndex)
  }

  prevSlide() {
    if (this.currentIndex >= this.itemsPerPage) {
      this.currentIndex -= this.itemsPerPage;
    } else {
      this.currentIndex = Math.max(this.items.length - this.itemsPerPage, 0);
    }
  }

  load(page: any = 0) {

    this.isLoading = true;
    this.params.page = page;

    this.pokemonService
      .listPokemon(this.params)
      .pipe(take(1))
      .subscribe({
        next: (data: any) => {
          this.data = data.data.results;
          this.total = data.data.count;
          console.log(this.data)
          this.isLoading = false;
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

  openSide(id: any){
    this.showSide = true;
    this.show(id.charAt(id.length-2));
  }

  show(id: any) {
    this.itemView = [];
    this.pokemonService
      .showPokemon(id)
      .pipe(take(1))
      .subscribe({
        next: (data: any) => {
          this.itemParam = data.data;
          console.log(this.itemParam)
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

}
