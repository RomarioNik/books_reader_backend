import mongoose from "mongoose";
// import 'dotenv/config'
import app from "./app.js";

mongoose.set('strictQuery', true);
const {DB_HOST, PORT} = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
