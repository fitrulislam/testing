module.exports = {
  Transformator: 
    [
      {
        "name" : "MinMaxScaler",
        "params" :
          [{
            "name" : "min",
            "type" : "float",
            "default" : 0.0,
            "value" : null,
            "options" : "any",
            "notes" : "minimum value"
          },
          {
            "name" : "max",
            "type" : "float",
            "default": 1.0,
            "value" : null,
            "options" : "any",
            "notes" : "maximum value"
          },
          { 
            "name" : "inputCol",
            "type" : "str",
            "default": "features",
            "value" : null,
            "options" : "any",
            "notes" : "input columns name"
          },
          { 
            "name" : "outputCol",
            "type" : "str",
            "default": "scaledFeatures",
            "value" : null,
            "options" : "any",
            "notes" : "output columns name"
          }],
        "task" : "preprocessing",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs"],
        "after" : ["logisticRegression", "decisionTreeClassifier"]
      },
      {
        "name" : "MaxAbsScaler",
        "params" : 
          [{ 
            "name" : "inputCol",
            "type" : "str",
            "default": "features",
            "value" : null,
            "options" : "any",
            "notes" : "input columns name"
          },
          { 
            "name" : "outputCol",
            "type" : "str",
            "default": "scaledFeatures",
            "value" : null,
            "options" : "any",
            "notes" : "output columns name"
          }],
        "task" : "preprocessing",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs"],
        "after" : ["logisticRegression", "decisionTreeClassifier"]
      },
      {
        "name" : "BinaryNormalization",
        "params" : 
          [{
            "name" : "threshold",
            "type" : "float",
            "default" : 0.0,
            "value" : null,
            "options" : "in range [0,1]",
            "notes" : "threshold [0,1]"
          },
          { 
            "name" : "inputCol",
            "type" : "str",
            "default": "features",
            "value" : null,
            "options" : "any",
            "notes" : "input columns name"
          },
          { 
            "name" : "outputCol",
            "type" : "str",
            "default": "scaledFeatures",
            "value" : null,
            "options" : "any",
            "notes" : "output columns name"
          }],
        "task" : "preprocessing",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs"],
        "after" : ["logisticRegression", "decisionTreeClassifier"]
      },
      {
        "name" : "StandardScaler",
        "params" :
          [{
            "name" : "withMean",
            "type" : "bool",
            "default" : false,
            "options" : "bool",
            "notes" : ""
          },
          {
            "name" : "withStd",
            "type" : "bool",
            "default": true,
            "options" : "bool",
            "notes" : ""
          },
          { 
            "name" : "inputCol",
            "type" : "str",
            "default": "features",
            "value" : null,
            "options" : "any",
            "notes" : "input columns name"
          },
          { 
            "name" : "outputCol",
            "type" : "str",
            "default": "scaledFeatures",
            "value" : null,
            "options" : "any",
            "notes" : "output columns name"
          }],
        "task" : "preprocessing",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs"],
        "after" : ["logisticRegression", "decisionTreeClassifier"]
      },
      {
        "name": "dct",
        "params":
          [{
            "name" : "outputCol",
            "type" : "str",
            "default": null,
            "value": null,
            "options" : "any string",
            "notes" : "output column name"
          },
          {
            "name" : "inputCol",
            "type" : "str",
            "default": null,
            "value": null,
            "options" : "any string",
            "notes" : "input column name"
          },  
          {
            "name" : "inverse",
            "type" : "boolean",
            "default": "false",
            "value": null,
            "options" : "'true' or 'false'",
            "notes" : "set transformer to perform inverse dct, default false"
          }]
      },
      {
        "name": "pca",
        "params":
          [{
            "name" : "outputCol",
            "type" : "str",
            "default": null,
            "value": null,
            "options" : "any string",
            "notes" : "output column name"
          },
          {
            "name" : "inputCol",
            "type" : "str",
            "default": null,
            "value": null,
            "options" : "any string",
            "notes" : "input column name"
          },  
          {
            "name" : "k",
            "type" : "int",
            "default": null,
            "value": null,
            "options" : ">0",
            "notes" : "the number of principal components "
          }]
      }
    ]
}