module.exports = {
  test: [
    {
      "name": "LinearRegression",
      "display_name": "Linear Regression",
      "parent": "ml.regression",
      "input": [
          {
              "name": "inputCol",
              "display_name": "Input Column",
              "description": "",
              "value": "features",
              "datatype": "vector",
              "mandatory": true
          },
          {
              "name": "labelCol",
              "display_name": "Label Column",
              "description": "",
              "value": "label",
              "datatype": "double",
              "mandatory": true
          }
      ],
      "output": [
          {
              "name": "predictionCol",
              "display_name": "Prediction Column",
              "description": "",
              "value": "prediction",
              "datatype": "double",
              "mandatory": true
          }
      ],
      "params": [
          {
              "name": "maxIter",
              "display_name": "Maximum Iteration",
              "description": "max number of iterations (>= 0).",
              "datatype": "int",
              "value": 100,
              "mandatory": true
          },
          {
              "name": "loss",
              "display_name": "Loss Function",
              "description": "The loss function to be optimized.",
              "datatype": "str",
              "value": "squaredError",
              "mandatory": true
          }
      ]
    },
    {
        "name": "LinearRegression2",
        "display_name": "Linear Regression 2",
        "parent": "ml.regression",
        "input": [
            {
                "name": "inputCol",
                "display_name": "Input Column",
                "description": "",
                "value": "features",
                "datatype": "vector",
                "mandatory": true
            },
            {
                "name": "labelCol",
                "display_name": "Label Column",
                "description": "",
                "value": "label",
                "datatype": "double",
                "mandatory": true
            }
        ],
        "output": [
            {
                "name": "predictionCol",
                "display_name": "Prediction Column",
                "description": "",
                "value": "prediction",
                "datatype": "double",
                "mandatory": true
            }
        ],
        "params": [
            {
                "name": "maxIter",
                "display_name": "Maximum Iteration",
                "description": "max number of iterations (>= 0).",
                "datatype": "int",
                // "value": ['kampret 1', 'kampret 2', 'kampret 3'],
                "value": [2, 3, 4],
                "mandatory": true,
            },
            {
                "name": "loss",
                "display_name": "Loss Function",
                "description": "The loss function to be optimized.",
                "datatype": "str",
                "value": true,
                "mandatory": true,
                "options": [true, false]
            }
        ]
      }
  ]
}