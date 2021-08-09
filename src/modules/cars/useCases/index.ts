import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryController } from './createCategory/CreateCategoryController';
import { CreateCategoryUseCase } from './createCategory/CreateCategoryUseCase';

const categoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export { createCategoryController };
