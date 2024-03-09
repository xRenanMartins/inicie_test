import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';

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

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.itemWidth = 100 / this.itemsPerPage;
    console.log(this.getScreenWidth);
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


}
