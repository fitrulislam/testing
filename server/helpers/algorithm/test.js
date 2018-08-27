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
              "value": ["features"],
              "datatype": "vector",
              "mandatory": true
          },
          {
              "name": "labelCol",
              "display_name": "Label Column",
              "description": "",
              "value": ["label"],
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
                "value": ["features"],
                "datatype": "vector",
                "mandatory": true
            },
            {
                "name": "labelCol",
                "display_name": "Label Column",
                "description": "",
                "value": ["label"],
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
  ],
  model: [
    {
      "name": "model1",
      "display_name": "Model 1",
      "params": [
        {
          "name": "property1",
          "display_name": "Property 1",
          "description": "",
          "value": ""
        }
      ]
    },
    {
      "name": "model2",
      "display_name": "Model 2",
      "params": [
        {
          "name": "property1",
          "display_name": "Property 1",
          "description": "",
          "value": ""
        }
      ]
    }
  ],
  dataset: [
    {
      "name": "dataset1",
      "display_name": "Dataset 1",
      "path": "hdfs://.../source/...",
      "params": [
        {
          "name": "property1",
          "display_name": "Property 1",
          "description": "",
          "value": ""
        }
      ],
      "columns": [
        {
          "name": "availableColumns",
          "display_name": "Available Columns",
          "description": "",
          "value": [
            {
              "columnName": "Weather",
              "dataType": "int"
            },
            {
              "columnName": "Temperature",
              "dataType": "double"
            },
            {
              "columnName": "Humadity",
              "dataType": "str"
            }
          ]
        }
      ]
    },
    {
      "name": "dataset2",
      "display_name": "Dataset 2",
      "path": "hdfs://.../source/...",
      "params": [
        {
          "name": "property1",
          "display_name": "Property 1",
          "description": "",
          "value": ""
        }
      ],
      "columns": [
        {
          "name": "availableColumns",
          "display_name": "Available Columns",
          "description": "",
          "value": [
            {
              "columnName": "Weight",
              "dataType": "int"
            },
            {
              "columnName": "Height",
              "dataType": "double"
            },
            {
              "columnName": "Size",
              "dataType": "int"
            }
          ]
        }
      ]
    }
  ],
  output: [
    {
      "name": "asNewDataset",
      "display_name": "As New Dataset",
      "path": "hdfs://.../sink/...",
      "params": [
        {
          "name": "datasetName",
          "display_name": "Dataset Name",
          "description": "",
          "value": ""
        },
        {
          "name": "description",
          "display_name": "Description",
          "description": "Enter the detailed description about your dataset",
          "value": ""
        }
      ]
    },
    {
      "name": "asNewModel",
      "display_name": "As New Model",
      "path": "hdfs://.../sink/...",
      "params": [
        {
          "name": "modelName",
          "display_name": "Model Name",
          "description": "",
          "value": ""
        },
        {
          "name": "type",
          "display_name": "Type",
          "description": "",
          "value": "None",
          "options": ["None", "CV", "TVS"]
        },
        {
          "name": "description",
          "display_name": "Description",
          "description": "Enter the detailed description about your model",
          "value": ""
        }
      ]
    }
  ]
}