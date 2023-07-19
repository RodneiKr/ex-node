const router = require("express").Router();

// services router
const servicesRouter = require("./services");
router.use("/", servicesRouter);

// parties router
const partiesRouter = require("./parties");
router.use("/", partiesRouter);

module.exports = router;
