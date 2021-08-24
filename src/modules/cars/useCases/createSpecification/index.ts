import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificcationsRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificcationsRepository,
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export { createSpecificationController };
