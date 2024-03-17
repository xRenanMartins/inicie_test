import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() public showSide: boolean = false;
  @Input() public item: any = [];
  @Output() public closeSide = new EventEmitter();

  isLoading: boolean = false;

  ngOnInit(): void {
    console.log(this.item)
  }

  constructor(private pokemonService: PokemonService){
  }

  openSidebar() {
    this.showSide = true;
  }
  closeSidebar() {
    this.showSide = false;
    this.closeSide.emit(false)
  }
}
