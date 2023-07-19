const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) => {
  const priceSum = services.reduce((sum, service) => sum + service.price, 0);
  console.log(">>> ", priceSum, "\n>>> ", budget);
  return !(priceSum > budget);
}

const partyController = {
  create: async (req, res) => {
    console.log("--- partyController.create");
    try {
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services
      };
      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({msg: "O seu orcamento eh insuficiente!"});
        return;
      }
      const response = await PartyModel.create(party);
      res.status(201).json({response, msg: "Festa criada com sucesso!"});
    } catch(error) {
      console.log("+++ partyController.create:\n", error);
    }
  },
  getAll: async (req, res) => {
    console.log("--- partyController.getAll");
    try {
      const parties = await PartyModel.find();
      res.json(parties);
    } catch(error) {
      console.log("+++ partyController.getAll:\n", error);
    }
  },
  get: async (req, res) => {
    console.log("--- partyController.get");
    try {
      const id = req.params.id;
      const party = await PartyModel.findById(id);
      if (!party) {
        res.status(404).json({msg: "Festa nao encontrada!"});
        return;
      }
      res.json(party);
    } catch(error) {
      console.log("+++ partyController.get:\n", error);
    }
  },
  delete: async (req, res) => {
    console.log("--- partyController.delete");
    try {
      const id = req.params.id;
      const party = await PartyModel.findById(id);
      if (!party) {
        res.status(404).json({msg: "Festa nao encontrada!"});
        return;
      }
      const deletedParty = await PartyModel.findByIdAndDelete(id);
      res.status(200).json({deletedParty, "msg": "Festa excluida com sucesso!"});
    } catch(error) {
      console.log("+++ partyController.delete:\n", error);
    }
  },
  update: async (req, res) => {
    console.log("--- partyController.update");
    try {
      const id = req.params.id;
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services
      };
      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({msg: "O seu orcamento eh insuficiente!"});
        return;
      }
      const updatedParty = await PartyModel.findByIdAndUpdate(id, party);
      if(!updatedParty) {
        res.status(404).json({"msg": "Festa nao encontrada"});
        return;
      }
      res.status(200).json({party, "msg": "Festa alterada com sucesso!"});
    } catch(error) {
      console.log("+++ partyController.update:\n", error);
    }
  }
};

module.exports = partyController;