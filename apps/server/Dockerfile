FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
COPY packages/shared ./packages/shared
COPY apps/server ./apps/server

RUN npm install --workspaces --legacy-peer-deps

# Build
RUN npm run build -w apps/server

# Remove dev dependencies
RUN npm prune --production --workspaces

EXPOSE 3000

CMD ["npm", "start", "-w", "apps/server"]
