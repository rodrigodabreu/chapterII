import { response, Router } from 'express';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoriyService = new CreateCategoryService(
    categoriesRepository,
  );

  createCategoriyService.execute({ description, name });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.findAll();
  return response.json(categories);
});

export { categoriesRoutes };
