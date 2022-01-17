module.exports = (mongoose) => {
  const User = mongoose.model(
    "User",
    mongoose.Schema(
      {
        username: String,
        password: String,
        name: String,
        age: Number,
      },
      { timestamps: true }
    )
  );

  return User;
};
