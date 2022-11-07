const mongoose = require("mongoose");
try {
  mongoose.connect(
    "mongodb+srv://achraf99:achraf99@cluster0.4ekkwvm.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
