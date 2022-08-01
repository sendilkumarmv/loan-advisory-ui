import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, merge } from 'rxjs';
import { ScottishEvent, ScottishEventsResponse } from '../scottish-events/entities';

@Component({
  selector: 'app-scottish-events-ser',
  templateUrl: './scottish-events-ser.component.html',
  styleUrls: ['./scottish-events-ser.component.css']
})
export class ScottishEventsSerComponent implements OnInit, AfterViewInit {

  data: ScottishEvent[];
  displayedColumns: Array<string> = ['eventID', 'title', 'date', 'sponsor']
  dataSource: MatTableDataSource<ScottishEvent>;

  constructor(private httpClient: HttpClient, private cdRef: ChangeDetectorRef) {
    this.data = [];
    this.dataSource = new MatTableDataSource<ScottishEvent>(this.data);
   }
  pageSizeOptions = [5, 10, 20];
  pageIndex = 0;
  pageSize = 5;
  sortName = 'EventID';
  sortDirection = -1;
  searchTerm = '*';
  searchValue = '*';
  totalCount = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.paginator.pageSize = this.pageSize;
    this.paginator.pageIndex = this.pageIndex;
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {
    this.getEvents();    
  }

  pageChanged(event: PageEvent) {
    console.log(event);
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getEvents();
  }

  sortChange(sort: Sort) {
    this.sortName = sort.active;
    this.sortDirection = sort.direction === 'asc' ? 1 : -1;
    this.getEvents();
  }

  searchApps() {
    console.log('search apps');
    this.pageIndex = 0;
    this.pageSize = 5;
    this.searchTerm = 'Title';
    this.searchValue = 'Walking';
    this.paginator.pageSize = this.pageSize;
    this.paginator.pageIndex = this.pageIndex;
    this.getEvents();
  }

  getEvents() {
    const url: string =
      `https://localhost:7093/api/scottishevents/getpage?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}&sortName=${this.sortName}&sortOrder=${this.sortDirection}&searchTerm=${this.searchTerm}&searchValue=${this.searchValue}`;
    this.httpClient.get<ScottishEventsResponse>(url).subscribe(res => {
      this.data = res.events;
      this.totalCount = res.totalCount;
      this.dataSource = new MatTableDataSource(this.data);
    })
  }
}
