FROM node:14.18.0-alpine as builder
# Setting up working directory of our app
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
COPY package-lock.json ./
RUN npm i



# Some general expose things
ENV HOST=0.0.0.0
EXPOSE 8080

# Magic to set ENV shit so stupid nuxt build can fuck off
#ARG NODE_ENV=development
#ENV NODE_ENV ${NODE_ENV}

# Copy app files
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .

# Build NUXT files
RUN #yarn build

# Run the app
CMD ["npm", "run", "dev"]
