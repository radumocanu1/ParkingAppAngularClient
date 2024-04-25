import { Component, OnInit } from '@angular/core';
import {ListingService} from "../service/listing-service";
import {Listing} from "../model/listing";
;

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.css']
})
export class ListingListComponent implements OnInit {
  listings!: Listing[];

  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.getListings();
  }

  getListings(): void {
    this.listingService.getAllListings()
      .subscribe(listings => this.listings = listings);
  }
}
