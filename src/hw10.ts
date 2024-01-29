interface Film {
  name: string;
  year: number;
  rating: number;
  awards: string[];
}
interface Category {
  name: string;
  films: Film[];
}

enum FilterTypeEnum {
  Match = 'match',
  Range = 'range',
  Values = 'values',
}

type MatchFilter = {
  type: FilterTypeEnum.Match;
  filter: string;
};

type RangeFilter = {
  type: FilterTypeEnum.Range;
  filter: number;
  filterTo: number;
};

type ValuesFilter = {
  type: FilterTypeEnum.Values;
  values: string[];
};

type Filter = MatchFilter | RangeFilter | ValuesFilter;

type BaseListState = {
  search: string;
  filters?: Filter[];
};
type MovieListState = BaseListState & {
  yearFilter?: RangeFilter;
  ratingFilter?: RangeFilter;
  awardFilter?: ValuesFilter;
};
type CategoryListState = BaseListState;

interface List<T> {
  state: T;
  applyFiltersValue(filters: Filter[]): void;
}

interface FilmList extends List<MovieListState> {
  movies: Film[];
}

interface CategoryList extends List<CategoryListState> {
  categories: Category[];
}
abstract class BaseList<T extends BaseListState> implements List<T> {
  constructor(public state: T) {}

  applyFiltersValue(filters: Filter[]): void {
    this.state.filters = filters;
  }
}

class MovieListImpl extends BaseList<MovieListState> implements FilmList {
  constructor(public state: MovieListState, public movies: Film[]) {
    super(state);
  }
}

class CategoryListImpl extends BaseList<CategoryListState> implements CategoryList {
  constructor(public state: CategoryListState, public categories: Category[]) {
    super(state);
  }
}

// const KillersOfTheFlowerMoon = {
//   name: 'Killers of the Flower Moon',
//   year: 2023,
//   rating: 8.0,
//   awards: ['best dahd', 'best dasda'],
// };
// const TheIndependent = {
//   name: 'The Independent',
//   year: 2022,
//   rating: 5.7,
//   awards: [],
// };
// const list = new MovieListImpl({ search: 'Killers of the Flower Moon' }, [KillersOfTheFlowerMoon, TheIndependent]);
// list.applyFiltersValue([{ type: FilterTypeEnum.Range, filter: 2021, filterTo: 2023 }]);
// console.log(list.state);
