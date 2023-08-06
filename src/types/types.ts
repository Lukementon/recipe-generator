export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface CategoriesReponse {
  categories: Category[];
}

export interface SearchRecipeResponse {
  meals: Meal[];
}
