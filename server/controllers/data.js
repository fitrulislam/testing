const Algorithm = require('../models/algo');
const { MachineLearning } = require('../helpers/algorithm/machineLearning');
const { Transformator } = require('../helpers/algorithm/transformator');

module.exports = {
  algorithm: async (req, res) => {
    try {
      let algo = await Algorithm.findOne({
        name: req.headers.name
      });
      res.status(200).json({
        message: 'this is algo',
        data: algo
      })
    } catch (error) {
      res.status(500).json({
        message: 'something went wrong'
      })
    }
  },
  makeAlgo: async (req, res) => {
    try {
      let newAlgo = await Algorithm.create({
        name: req.body.name,
        property: {
          prop1: req.body.prop1,
          prop2: req.body.prop2
        }
      })
      res.status(201).json({
        message: 'new algo created',
        data: newAlgo
      })
    } catch (error) {
      res.status(500).json({
        message: 'something went wrong'
      })
    }
  },
  getAll: async (req, res) => {
    try {
      res.status(200).json({
        message: 'all algo data',
        machineLearning: MachineLearning,
        transformator: Transformator
      })
    } catch (error) {
      res.status(500).json({
        message: 'something went wrong'
      })
    }
  },
  getAllAlgo: async (req, res) => {
    try {
      let algo = await Algorithm.find({})
      res.status(200).json({
        message: 'all algo data',
        data: algo
      })
    } catch (error) {
      res.status(500).json({
        message: 'something went wrong'
      })
    }
  }
};