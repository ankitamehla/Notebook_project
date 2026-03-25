import mongoose from "mongoose";

const Connection = async () => {
  const Url =
    "mongodb+srv://notebook:notebook@cluster0.b7duzxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  await mongoose
    .connect(Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(console.log("Database connected successfully"))
    .catch((err) => console.log(err));
};

export default Connection;
