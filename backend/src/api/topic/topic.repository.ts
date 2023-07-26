import { ITopicDocument } from "./topic.interface";
import { BaseRepository } from "@core/repositories";

export class TopicRepository extends BaseRepository<ITopicDocument> {
  addTopic = (topic: any) => {
    return this.create(topic);
  };

  getTopics = () => {
    return this.find();
  };

  getOneTopic = (options: any, additionalField?: string) => {
    return this.findOne(options, additionalField);
  };

  getTopicById = (id: string) => {
    return this.findById(id);
  };

  updateTopic = (id: string, topic: ITopicDocument) => {
    return this.update(id, topic);
  };

  deleteTopic = (id: string) => {
    return this.delete(id);
  };
}