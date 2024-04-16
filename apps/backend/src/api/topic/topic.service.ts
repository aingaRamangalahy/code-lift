import { Service } from "typedi";
import { ITopicDocument } from "./topic.interface";
import Topic from "./topic.model";
import { ErrorResponse } from "@core/utils";
import { TopicRepository } from "./topic.repository";

@Service()
export default class TopicService {
    private readonly topicRepository: TopicRepository;

    constructor() {
        this.topicRepository = new TopicRepository(Topic);
    }

    createTopic = async (topicPayload: ITopicDocument) => {
        try {
            const topic = await this.topicRepository.addTopic(topicPayload);
            return {
                success: true,
                data: topic,
            };
        } catch (error) {
            /**thorw errors to let erroHandler handle them */
            throw error;
        }
    };

    getAllTopics = async () => {
        try {
            const topics = await this.topicRepository.getTopics();
            return {
                success: true,
                data: topics,
            };
        } catch (error) {
            throw error;
        }
    };

    getTopicById = async (id: string) => {
        try {
            const topic = await this.topicRepository.getTopicById(id);

            if (!topic) {
                throw new ErrorResponse(`Topic with id: ${id} not found`, 404);
            }

            return {
                success: true,
                data: topic,
            };
        } catch (error) {
            throw error;
        }
    };

    updateTopic = async (id: string, topicPayload: ITopicDocument) => {
        try {
            const topic = await this.topicRepository.updateTopic(id, topicPayload);

            if (!topic) {
                throw new ErrorResponse(`Topic with id: ${id} not found`, 404);
            }

            return {
                success: true,
                data: topic,
            };

        } catch (error) {
            throw error;
        }
    };

    deleteTopic = async (id: string) => {
        try {
            const topic = await this.topicRepository.deleteTopic(id);
            if (!topic) {
                throw new ErrorResponse(`Topic with id: ${id} not found`, 404);
            }
            return {
                success: true,
                data: `Topic removed successfully`,
            };
            
        } catch (error) {
            throw error;
        }
    };
}