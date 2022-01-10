module.exports = (mongoose) => {
  const User = mongoose.model(
    "User",
    mongoose.Schema(
      {
        name: String,
        city: String,
        age: Number,
      },
      { timestamps: true }
    )
  );

  return User;
};
