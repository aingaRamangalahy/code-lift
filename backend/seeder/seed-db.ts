// import mongoose from 'mongoose';
// import { IUser } from '@api/user/user.interface';
// import { ITopic } from '@api/topic/topic.interface';
// import userModel from '@api/user/user.model';
// import topicModel from '@api/topic/topic.model';
// import { DB_URI } from '@config/index';
import { options } from './options';
import { users, categories, resources, topics } from './data';

async function seedDB() {
  try {
    console.log('options', options)
    // await mongoose.connect(DB_URI);

    // console.log('Connected to the database.');

    // // Drop collections if needed
    if (options.drop) {
      console.log('drop option')
      // await userModel.collection.drop();
      // await topicModel.collection.drop();
    }

    if (options.users) {
      console.log('drop or seed user')
    }

    // // Seed users
    // await userModel.insertMany(users as IUser[]);
    // console.log('Users seeded successfully.');

    // // Seed topics
    // await topicModel.insertMany(topics as ITopic[]);
    // console.log('Topics seeded successfully.');

    // mongoose.disconnect();
    // console.log('Disconnected from the database.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
}

seedDB();