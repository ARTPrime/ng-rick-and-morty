export interface PaginatedResponse<T> {
  info: PagionationInfo;
  results: T[];
}

export interface PagionationInfo {
  count: number;
  next: string;
  prev: string;
  pages: number;
}
