export interface INewsMessage {
  data: {
    id: number;
    documentId: string;
    title: string;
    description: string;
    date: string;
    url: string;
    cover?: {
      url: string;
    };
  }[];
  meta: IPagination;
}

export interface IPagination {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
