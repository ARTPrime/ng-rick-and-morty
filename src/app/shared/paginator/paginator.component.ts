import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagionationInfo } from '../../models/paginated-response';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  standalone: false,
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  @Input() paginationInfo: PagionationInfo = {
    count: 0,
    next: '',
    prev: '',
    pages: 0,
  };
  @Output() pageEvent = new EventEmitter<PageEvent>();
  public currentPage = 1;
  public currentPageIndex = 0;

  public onPageChange(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex + 1;
    this.currentPageIndex = this.currentPage - 1;
    this.pageEvent.emit({
      ...pageEvent,
      pageIndex: this.currentPage,
    });
  }

  public onPageInputChange() {
    if (!this.currentPage) {
      this.currentPage = 1;
    }
    this.currentPageIndex = this.currentPage - 1;
    this.pageEvent.emit({
      pageIndex: this.currentPage,
      pageSize: 20,
      length: this.paginationInfo.count,
    });
  }
}
