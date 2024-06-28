## Resource Sharing Platform for Learning Coding

This repository is a resource sharing platform designed to help individuals learn coding. It allows users to upload and discover coding resources such as articles, tutorials, videos, and more. Users can categorize resources based on difficulty levels, comment on resources, mark resources as favorites, and interact with other users on the platform.

### Installation

To set up the resource sharing platform locally, follow these steps:

1. Clone the repository to your local machine.

2. Install the necessary dependencies by running the command: `npm install`.

3. Configure the environment variables by creating a `.env` file and providing the required values. Refer to the `.env.example` file for the required variables.

4. Start the development server by running the command: `npm run dev`.

### Contributing

Contributions to this project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository and create a new branch for your feature or bug fix.

2. Make your changes, ensuring that you follow the coding conventions and best practices.

3. Commit your changes with a descriptive commit message. Use the following format for your commit messages:

    - `feat`: A new feature is introduced with the changes
    - `fix`: A bug fix has occurred
    - `chore`: Changes that do not relate to a fix or feature and don't modify src or test files
    - `refactor`: Refactored code that neither fixes a bug nor adds a feature
    - `docs`: Updates to documentation such as the README or other markdown files
    - `style`: Changes that do not affect the meaning of the code, likely related to code formatting
    - `test`: Including new or correcting previous tests
    - `perf`: Performance improvements
    - `ci`: Continuous integration related
    - `build`: Changes that affect the build system or external dependencies
    - `revert`: Reverts a previous commit

4. Push your changes to your forked repository.

5. Submit a pull request with a clear description of the changes and the problem it solves.

### Contact

If you have any questions or need further assistance, please feel free to contact the project maintainers at [aingaramangalahy@gmail.com](mailto:aingaramangalahy@gmail.com).

Happy learning and coding!

### project structure

```
code-lift
├─ apps
│  ├─ backend
│  │  ├─ __tests__
│  │  ├─ cli
│  │  ├─ jest.config.js
│  │  ├─ jest.setup.ts
│  │  ├─ nodemon.json
│  │  ├─ package.json
│  │  ├─ seeder
│  │  ├─ src
│  │  │  ├─ api
│  │  │  │  ├─ auth
│  │  │  │  ├─ category
│  │  │  │  ├─ comment
│  │  │  │  ├─ resource
│  │  │  │  ├─ topic
│  │  │  │  └─ user
│  │  │  ├─ app.ts
│  │  │  ├─ config
│  │  │  ├─ core
│  │  │  │  ├─ database
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ interfaces
│  │  │  │  ├─ middlewares
│  │  │  │  └─ utils
│  │  │  ├─ router.ts
│  │  │  └─ server.ts
│  │  ├─ tsconfig.json
│  │  └─ tsconfig.test.json
|  |   Dockerfile
│  └─ client
│     ├─ README.md
│     ├─ app.config.ts
│     ├─ app.vue
│     ├─ assets
│     │  └─ scss
│     ├─ components
│     ├─ composables
│     ├─ enums
│     ├─ eslint.config.ts
│     ├─ layouts
│     ├─ nuxt.config.ts
│     ├─ package.json
│     ├─ pages
│     ├─ public
│     ├─ services
│     ├─ stores
│     ├─ tailwind.config.ts
│     ├─ tsconfig.json
│     └─ types
│        └─ httpResponse.ts
|     |   Dockerfile
├─ common
│  └─ types
├─ pnpm-lock.yaml
└─ pnpm-workspace.yaml

```
