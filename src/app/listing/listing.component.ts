import {Component, OnInit} from '@angular/core';
import {ListingService} from "../service/listing-service";
import {ActivatedRoute} from "@angular/router";
import {Listing} from "../model/listing";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent implements OnInit {
  listing!: Listing;
  mapOptions!: google.maps.MapOptions;
  marker!: any;
  constructor(private route: ActivatedRoute, private listingService: ListingService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.listingService.getListing(params.get('listingId')).subscribe(
        (data: Listing) => {
          this.listing = data;
          this.initializeMap();
        }
      );
    });  }
  initializeMap(): void {
    this.mapOptions = {
      center: { lat: parseFloat(this.listing.latitude), lng: parseFloat(this.listing.longitude) },
      zoom: 14
    };
    this.marker = {
      position: { lat: parseFloat(this.listing.latitude), lng: parseFloat(this.listing.longitude) },
    }




  }
}
