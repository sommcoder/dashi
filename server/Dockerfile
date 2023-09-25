FROM node:16

WORKDIR /src

COPY package*.json ./

RUN npm install

# Copy our app
COPY . .

ENV PORT=3000

# Expose port to access server
EXPOSE 3000

# Command to run our app
CMD ["npm", "start"]