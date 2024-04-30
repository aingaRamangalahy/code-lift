export interface IDatabase<T> {
    find(payload?: any): Promise<T[]>;
    findOne(payload: any): Promise<T>;
    findById(id: string): Promise<T>;
    create(payload: T): Promise<T>;
    update(id: string, payload: T): Promise<T>;
    delete(id: string): Promise<T>;
}

export interface IFindPayload {
    filter?: any;
    populateFields?: string[];
    additionalField?: string;
    sortBy?: {
        field?: string;
        direction?: 'desc' | 'asc';
    };
}
