import { ISpecificationRepository } from '../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ description, name }: IRequest): void {
    //valida se existe alguma descrição com esse nome no array de specifications
    const specificationAlreadyExists =
      this.specificationRepository.findByname(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!s');
    }
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
