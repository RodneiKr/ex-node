const {Service: ServiceModel} = require("../models/Service");

const serviceController = {

  create: async(req, res) => {
    console.log(">>> serviceController.create")
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
     console.log("++++++++ service.create:\n", error);
    }
  },
  getAll: async(req, res) => {
    console.log(">>> serviceController.getAll")
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (error) {
      console.log("++++++++ service.getAll:\n", error);
    }
  },
  get: async(req, res) => {
    console.log(">>> serviceController.get")
    try {
      const id = req.params.id;   console.log("--- id="+id);
      const service = await ServiceModel.findById(id);
      if (!service) {
        res.status(404).json({msg: "Servico nao encontrado"});
        return;
      }
      res.json(service);
    } catch(error) {
      console.log("++++++++ service.get:\n", error);
    }
  },
  delete: async(req, res) => {
    console.log(">>> serviceController.delete")
    try {
      const id = req.params.id;   console.log("--- id="+id);
      const service = await ServiceModel.findById(id);
      if (!service) {
        res.status(404).json({msg: "Servico nao encontrado"});
        return;
      }
      const deletedService = await ServiceModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deletedService, msg: "Servico excluido com sucesso!"});
    } catch(error) {
      console.log("++++++++ service.delete:\n", error);
    }
  },
  update: async(req, res) => {
    console.log(">>> serviceController.update")
    try {
      const id = req.params.id;   console.log("--- id="+id);
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
      }
      const updatedService = await ServiceModel.findByIdAndUpdate(id, service);
      if (!updatedService) {
        res.status(404).json({msg: "Servico nao encontrado"});
        return;
      }
      res.status(200).json({service, msg: "Servico atualizado com sucesso!"});
    } catch(error) {
      console.log("++++++++ service.update:\n", error);
    }
  }
};

module.exports = serviceController;