import mongoose from 'mongoose';

import app from './app.js';

const DB_HOST = "mongodb+srv://Roman:8lMGZnNx8bVkQZw7@cluster0.tkcmzd5.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.connect(DB_HOST)
    .then(() => console.log("connect to data base"))
    .catch((err) => console.log(err.message));

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})
