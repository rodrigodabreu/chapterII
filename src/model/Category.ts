import { v4 as uuidv4 } from 'uuid';

class Category {
  create(name: any, description: any) {
    throw new Error('Method not implemented.');
  }
  name: string;
  description: string;
  created_at: Date;
  id?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Category };
