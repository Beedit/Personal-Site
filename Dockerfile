# -----
# Setup
# -----
# NodeJS version
ARG NODE_VERSION=26-alpine3.23
FROM node:${NODE_VERSION} AS base
WORKDIR /app

# Copy only package files. 
COPY package.json package-lock.json ./

ENV NODE_ENV=production

# Clean install dependencies 
RUN npm ci --omit=dev && npm cache clean --force


# -----
# Build NextJS
# -----
FROM base AS builder

COPY . .

RUN npm run build

# -----
# Run
# -----

FROM node:${NODE_VERSION} AS runner

USER node

# Disable NextJS telemetary
ENV NEXT_TELEMETRY_DISABLE=1

WORKDIR /app

COPY --from=builder /app/ ./      

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]
