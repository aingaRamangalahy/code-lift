# Stage 1: Install dependencies and build the application
FROM node:18-alpine AS build

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /usr/src/app

# Copy pnpm files
COPY pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy only the package.json files for the client and common types
COPY apps/client/package.json apps/client/
COPY common/types/package.json common/types/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the entire client and common directories
COPY apps/client/ apps/client/
COPY common/types/ common/types/

# Build the frontend
RUN pnpm --filter @cl/client run build

# Stage 2: Create the final image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy the built frontend code and dependencies from the build stage
COPY --from=build /usr/src/app/apps/client/.output ./.output
COPY --from=build /usr/src/app/apps/client/node_modules ./node_modules
COPY --from=build /usr/src/app/apps/client/package.json ./package.json

# Expose the frontend port
EXPOSE 3000

# Start the frontend server
CMD ["node", ".output/server/index.mjs"]
