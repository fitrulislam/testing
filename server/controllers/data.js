const Algorithm = require('../models/algo');
const MachineLearning = require('../helpers/algorithm/machineLearning');
const { dtypes } = require('../helpers/algorithm/transformator');
const { test, model, dataset, output } = require('../helpers/algorithm/test');

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
        MachineLearning,
        output,
        dataset,
        test,
        model,
        dtypes
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
  },
  waiting: (req, res) => {
    try {
      setTimeout(
        function(){
          res.status(200).json({
            message1: 'ok',
            message2: 'waiting'
          });
          // res.status(200).json({
          //   validation: [
          //     {
          //       details: [
          //         [[], [], {}],
          //         [[], [], {}],
          //         [[], [], {}],
          //         [[], [], {}],
          //         [[], [], {}],
          //         [[], [], {}]
          //       ],
          //       valid: true
          //     }
          //   ]
          // })
          // res.status(200).json({
          //   validation: [
          //     {
          //       details: [
          //         [[], [], {}],
          //         [[], [], {}],
          //         [[], [], {}],
          //         [['age', 'count', 'prediction', 'age', 'gender', 'prediction'], [], {}],
          //         [['label', 'features'], ['prediction'], {}],
          //         [[], [], {}]
          //       ],
          //       valid: False
          //     }
          //   ]
          // })
      }, 3000);
    } catch (error) {
      res.status(500).json({
        message: 'something went wrong'
      })
    }
  },
  check: (req, res) => {
    try {
      res.status(200).json({
        message: 'empty'
      })
    } catch (error) {
      res.status(500).json({
        message: 'something went wrong'
      })
    }
  }
};