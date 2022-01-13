// CORS option and config
const corsOptions = {
  origin: process.env.APP_ORIGIN,
  optionsSuccessStatus: 200,
  methods: "GET, PUT, POST, DELETE",
};

module.exports = corsOptions;
