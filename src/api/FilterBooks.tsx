export interface FilterBookResponse {
  total: string
  page: string
  books: IBook[]
}

export interface IBook {
  title: string
  isbn13: string
}

export const FilterBooks = async (search: string): Promise<FilterBookResponse> => {
  return await fetch('https://api.itbook.store/1.0/search/' + search)
    .then(async (response) => {
      return response.json()
    })
}

