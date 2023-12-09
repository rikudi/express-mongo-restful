# Node Express + MongoAtlas RESTful API -template

This repository provides a simple template for setting up a RESTful API using Express.js and MongoDB Atlas. It is designed to offer a quick start for projects requiring backend functionality with database integration.

## Features

- Basic CRUD operations
- RESTful API structure
- Express.js for server-side logic
- MongoDB Atlas integration using Mongoose
- Organized directory structure with controllers, models, and utilities

## Getting Started

### Needed:

- Node.js
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rikudi/express-mongo-restful.git
   ```
2. Navigate to directory & install dependencies
   ```bash
   cd express-mongo-restful
   npm install
   ```
3. Setup .env file & variables
   ```bash
   MONGODB_URI="your_mongodb_atlas_auth_string"
   PORT=PORT_NUMBER
   ```
4. Run application
   ```bash
   npm run dev
   ```
## Dependencies used
- Node
- Express
- Nodemon
- CORS
- Mongoose
- Dotenv
