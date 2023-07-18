const {Service: ServiceModel} = require("../models/Service");

const serviceController = {

  create: async(req, res) => {
    console.log(">>> serviceController")
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
      }
      const response = await ServiceModel.create(service);
      res.status(201).json({response, msg: "servico criado com sucesso!!!"});
    } catch(error) {
      console.log("++++++++\n", error);
    }
  }



};

module.exports = serviceController;

