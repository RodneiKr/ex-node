const router = require("express").Router();

// services router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

module.exports = router;
