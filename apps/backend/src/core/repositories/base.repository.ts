import { IDatabase, IFindPayload } from "@core/interfaces";
import { filter } from "async";
import { Model } from "mongoose";

export abstract class BaseRepository<T> implements IDatabase<T> {
  constructor(private model: Model<T>) {}

  find(payload: IFindPayload = {}): Promise<T[]> {
    const { filter = {}, populateFields = [], additionalField } = payload;
    const query = this.model.find(filter);
    if (populateFields.length > 0) {
      query.populate(populateFields.join(','))
    }
    if (additionalField) {
      query.select(`${additionalField ? "+" + additionalField : ""}`);
    }
    return query.exec();
  }

  findOne(payload: IFindPayload = {}): Promise<T> {
    const { filter = {}, populateFields = [], additionalField } = payload;
    const query = this.model.findOne(filter);
    if (populateFields.length > 0) {
      query.populate(populateFields.join(','))
    }
    if (additionalField) {
      query.select(`${additionalField ? "+" + additionalField : ""}`);
    }
    return query.exec();
  }

  findById(id: string, populateFields = []): Promise<T> {
    const query = this.model.findById(id);
    if (populateFields.length > 0) {
      query.populate(populateFields.join(','))
    }
    return query.exec();
  }

  create(data: T): Promise<T> {
    return this.model.create(data);
  }

  update(id: string, data: T, populateFields = []): Promise<T> {
    const query = this.model.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (populateFields.length > 0) {
      query.populate(populateFields.join(','))
    }
    return query.exec();
  }

  updateOne(filter: any, data: T, populateFields = []): Promise<T> {
    const query = this.model.findOneAndUpdate(filter, data, {
      new: true,
      runValidators: true,
    });
    if (populateFields.length > 0) {
      query.populate(populateFields.join(','))
    }
    return query.exec();
  }

  delete(id: string): Promise<T> {
    return this.model.findByIdAndDelete(id);
  }

  countDocuments() {
    return this.model.countDocuments();
  }

  async paginate(req, populate: string) {
    let query;

    //Copy req
    const reqQuery = { ...req };

    //Fields to exclude
    const removeFields = ["select", "sort", "page", "limit"];

    //Delete remeveFields from reqQuery
    removeFields.forEach((element) => delete reqQuery[element]);

    // create query string to replace filter keywords
    let queryString = JSON.stringify(reqQuery);

    // Create operator
    queryString = queryString.replace(
      /\b(gt|gte|lt|lte|in)/g,
      (match) => `$${match}`
    );

    /*Build query*/
    // Find ressources
    query = this.model.find(JSON.parse(queryString));

    //Select Fields
    if (req.select) {
      const fields = req.select.split(",").join(" ");
      query = query.select(fields);
    }

    //Sort
    if (req.sort) {
      const sortBy = req.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // Paginate
    const page = +req.page || 1;
    const limit = +req.limit || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await this.countDocuments();

    query = query.skip(startIndex).limit(limit);

    if (populate) {
      populate = populate.split(",").join(" ");
      query = query.populate(populate);
    }

    /** execute query */
    const results = query;

    //Paginate results
    const pagination: any = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit,
      };
    }

    return {
      success: true,
      count: results.length,
      data: results,
      pagination,
    };
  }
}
