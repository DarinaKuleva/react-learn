export type TRestaurants = Array<IRestaurant>;

export interface IRestaurant {
  id: string;
  name: string;
  menu: TMenu;
  reviews: TReviews;
}

export type TMenu = Array<IMenu>;

interface IMenu {
  id: string;
  name: string;
  price: number;
  ingredients: Array<string>;
}

export type TReviews = Array<IReview>;

interface IReview {
  id: string;
  user: string;
  text: string;
  rating: number;
}
