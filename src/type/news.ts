export type ResultNewsType = {
  items: NewsType[],
  nav: CurrentType,
}

export type CurrentType = {
  current: number;
  total: number;
}

export type NewsCategoryType = {
  value: string,
  xmlId: string,
}

export type NewsType = {
  name: string,
  code: string,
  previewText: string,
  type: NewsCategoryType,
  date: number,
  link: string,
  image: string,
}
