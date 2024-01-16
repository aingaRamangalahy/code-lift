import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

console.log(process.argv)
// Define command-line options
export const options = yargs(hideBin(process.argv))
    .option('drop', {
        alias: 'd',
        describe: 'Drop collections before seeding',
        type: 'boolean',
    })
    .option('all', {
        alias: 'a',
        describe: 'Seed all collections',
        type: 'boolean',
    })
    .option('users', {
        alias: 'u',
        describe: 'Seed only users data',
        type: 'boolean',
    })
    .option('resources', {
        alias: 'r',
        describe: 'Seed only resources data',
        type: 'boolean',
    })
    .option('categories', {
        alias: 'c',
        describe: 'Seed only categories data',
        type: 'boolean',
    })
    .option('topics', {
        alias: 't',
        describe: 'Seed only topics data',
        type: 'boolean',
    }).parseSync();
