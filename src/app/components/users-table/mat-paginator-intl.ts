import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorIntlCustom extends MatPaginatorIntl {
  constructor() {
    super();

    this.itemsPerPageLabel = 'Пользователей на странице: ';
    this.nextPageLabel = 'Следующая страница';
    this.previousPageLabel = 'Предыдущая страница';
    this.firstPageLabel = 'Первая страница';
    this.lastPageLabel = 'Последняя страница';
    this.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (!length || !pageSize) {
        return '0 из 0';
      }

      const lengthMax = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex =
        startIndex < lengthMax
          ? Math.min(startIndex + pageSize, lengthMax)
          : startIndex + pageSize;
      return startIndex + 1 + ' - ' + endIndex + ' из ' + lengthMax;
    };
  }
}
