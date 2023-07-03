export interface IDatabase<T> {
  find(payload?: any): Promise<T[]>;
  findOne(payload: any): Promise<T>;
  findById(id: string): Promise<T>;
  create(payload: T): Promise<T>;
  update(id: string, payload: T): Promise<T>;
  delete(id: string): Promise<T>;
}