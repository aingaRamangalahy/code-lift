import mongoose from 'mongoose';

import userModel from '@api/user/user.model';
import topicModel from '@api/topic/topic.model';
import categoryModel from '@api/category/category.model';
import resourceModel from '@api/resource/resource.model';

import { DB_URI } from '@config/index';
import { options } from './options';
import { users, categories, resources, topics } from './data';


const dbActions = {
  users: async () => await userModel.insertMany(users),
  categories: async() => await categoryModel.insertMany(categories),
  resoures: async() =>  await resourceModel.insertMany(resources),
  topics: async () => await topicModel.insertMany(topics),
}

async function seedDB() {
  try {
    console.log('options', options)
    await mongoose.connect(DB_URI);

    console.log('Seeder connected to the database.');
    const actionList = Object.keys(dbActions);

    for (const [key, value] of Object.entries(options)) {
      if (typeof value === "boolean" && value && actionList.includes(key)) {
        const action = dbActions[key];
        console.log('seeding::', key, value, action)
        await action();
        console.log('action', action)
        console.log('seeding done', key)
      }
    }

  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await mongoose.disconnect()
  }
}

seedDB();