# Stage 1: Install dependencies and build the application
FROM node:18-alpine AS build

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /usr/src/app

# Copy pnpm files
COPY pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy only the package.json files for the backend and common types
COPY apps/backend/package.json apps/backend/
COPY common/types/package.json common/types/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the entire backend and common directories
COPY apps/backend/ apps/backend/
COPY common/types/ common/types/

# Build the backend TypeScript code
RUN pnpm --filter @cl/backend run build

# Stage 2: Create the final image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy the built backend code and dependencies from the build stage
COPY --from=build /usr/src/app/apps/backend/build ./build
COPY --from=build /usr/src/app/apps/backend/node_modules ./node_modules
COPY --from=build /usr/src/app/apps/backend/package.json ./package.json

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "build/src/app.js"]
