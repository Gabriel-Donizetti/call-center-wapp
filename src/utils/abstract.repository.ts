export abstract class GenericRepository<T> {
    abstract getAll(): Promise<T[]>;
  
    abstract get(id: string): Promise<T>;
  
    abstract create(data: T): boolean;
  
    abstract update(id: string, data: T);

    abstract delete(id: string);
  }