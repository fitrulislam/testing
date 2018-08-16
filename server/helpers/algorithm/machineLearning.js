module.exports = {
  MachineLearning: 
    [
      { 
        "name" : "logisticReg", // done!
        "params" : 
          [{
            "name":"maxIter",
            "type" : "int",
            "default" : 100,
            "value" : null,
            "options" : "maxIter > 0",
            "notes" : ""
          }, 
          {
            "name" : "regParam",
            "type" : "float",
            "default" : 0.0,
            "value" : null,
            "options" : "",
            "notes" : "regularization parameter value should be in range [0,1]"
          },  
          {
            "name" : "elasticNetParam",
            "type" : "float",
            "options" : "",
            "default": 0.0,
            "value" : null,
            "notes" : "elasticNetParam value should be [0,1]"
          },
          {
            "name" : "tol",
            "type" : "float",
            "options" : "",
            "default" : 1e-6,
            "value" : null,
            "notes" : "floating point"
          },
          {
            "name" : "fitIntercept",
            "type" : "bool",
            "options" : "bool",
            "default" : true,
            "value" : null,
            "notes" : "Boolean type"
          },
          {
            "name" : "threshold",
            "type" : "float",
            "options" : "",
            "default" : 0.5,
            "value" : null,
            "notes" : ""
          },
          {
            "name" : "thresholds",
            "type" : "int",
            "options" : "",
            "default" : null,
            "value" : null,
            "notes" : ""
          },
          {
            "name" : "standardization",
            "type" : "bool",
            "options" : "",
            "default" : true,
            "value" : null,
            "notes" : ""
          },
          {
            "name" : "aggregationDepth",
            "type" : "int",
            "options" : "",
            "default" : 2,
            "value" : null,
            "notes" : ""
          },
          {
            "name" : "weightCol",
            "type" : "str",
            "options" : "",
            "default" : null,
            "value" : null,
            "notes" : ""
          },
          {
            "name" : "family",
            "type" : "str",
            "options" : "",
            "default" : "auto",
            "value" : null,
            "notes" : ""
          }],
        "task" : "classification",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs"],
        "after" : []
      },
      {
        "name" : "decisionTreeClassifier", // done!
        "params" : 
          [{
            "name" : "maxDepth",
            "type" : "int",
            "options" : "",
            "default" : 5,
            "value" : null,
            "notes" : ""
          }, 
          {
            "name" : "labelCol",
            "type" : "str",
            "options" : "",
            "default" : "indexed",
            "value" : null,
            "notes" : ""
          },{
            "name" : "maxBins",
            "type" : "int",
            "options" : "",
            "default" : 32,
            "value" : null,
            "notes" : ""
          },{
            "name" : "minInstancePerNode",
            "type" : "int",
            "options" : "",
            "default" : 1,
            "value" : null,
            "notes" : ""
          },{
            "name" : "minInfoGain",
            "type" : "float",
            "options" : "",
            "default" : 0.0,
            "value" : null,
            "notes" : ""
          },{
            "name" : "maxMemoryInMB",
            "type" : "int",
            "options" : "",
            "default" : 256,
            "value" : null,
            "notes" : ""
          },{
            "name" : "cacheNodeIds",
            "type" : "bool",
            "options" : "",
            "default" : false,
            "value" : null,
            "notes" : ""
          },{
            "name" : "checkPointInterval",
            "type" : "float",
            "options" : "",
            "default" : 10,
            "value" : null,
            "notes" : ""
          },{
            "name" : "impurity", 
            "type" : "str",
            "options" : "",
            "default": "gini",
            "value" : null,
            "notes" : ""
          },{
            "name" : "seed",
            "type" : "int",
            "options" : "",
            "default" : null,
            "value" : null,
            "notes" : ""
          }],
        "task" : "classification",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs"],
        "after" : []
      },
      {
        "name" : "randomForestClassifier",
        "params" : 
          [{
            "name" : "maxDepth",
            "type" : "int",
            "options" : "",
            "default" : 5,
            "value" : null,
            "notes" : ""
          },
          {
            "name" : "labelCol",
            "type" : "str",
            "options" : "",
            "default" : "indexed",
            "value" : null,
            "notes" : ""
          },{
            "name" : "maxBins",
            "type" : "int",
            "options" : "",
            "default" : 32,
            "value" : null,
            "notes" : ""
          },{
            "name" : "minInstancePerNode",
            "type" : "int",
            "options" : "",
            "default" : 1,
            "value" : null,
            "notes" : ""
          },{
            "name" : "minInfoGain",
            "type" : "float",
            "options" : "",
            "default" : 0.0,
            "value" : null,
            "notes" : ""
          },{
            "name" : "maxMemoryInMB",
            "type" : "int",
            "options" : "",
            "default" : 256,
            "value" : null,
            "notes" : ""
          },{
            "name" : "cacheNodeIds",
            "type" : "bool",
            "options" : "",
            "default" : false, 
            "value" : null,
            "notes" : ""
          },{
            "name" : "checkPointInterval",
            "type" : "float",
            "options" : "",
            "default" : 10,
            "value" : null,
            "notes" : ""
          },{
            "name" : "impurity", 
            "type" : "str",
            "options" : "",
            "default": "gini",
            "value" : null,
            "notes" : ""
          },{
            "name" : "numTrees",
            "type" : "int",
            "options" : "",
            "default": 20,
            "value" : null,
            "notes" : ""
          },{
            "name" : "featureSubsetStrategy",
            "type" : "str",
            "options" : "",
            "default": "auto",
            "value" : null,
            "notes" : ""
          },{
            "name" : "subSamplingRate", // belom
            "type" : "float",
            "options" : "",
            "default": 1.0,
            "value" : null,
            "notes" : ""
          },{
            "name" : "seed",
            "type" : "int",
            "options" : "",
            "default" : null,
            "value" : null,
            "notes" : ""
          }],
        "task" : "classification",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs"],
        "after" : []
      },
      {
        "name" : "gradientBoostingTreeParams",
        "params" : 
          [{
            "name" : "maxDepth",
            "type" : "int",
            "options" : "",
            "default" : 5,
            "value" : null,
            "notes" : ""
          },{
            "name" : "labelCol",
            "type" : "str",
            "options" : "",
            "default" : "indexed",
            "value" : null,
            "notes" : ""
          },{
            "name" : "maxBins",
            "type" : "int",
            "options" : "",
            "default" : 32,
            "value" : null,
            "notes" : ""
          },{
            "name" : "minInstancePerNode",
            "type" : "int",
            "options" : "",
            "default" : 1,
            "value" : null,
            "notes" : ""
          },{
            "name" : "minInfoGain",
            "type" : "float",
            "options" : "",
            "default" : 0.0,
            "value" : null,
            "notes" : ""
          },{
            "name" : "maxMemoryInMB",
            "type" : "int",
            "options" : "",
            "default" : 256,
            "value" : null,
            "notes" : ""
          },{
            "name" : "cacheNodeIds",
            "type" : "bool",
            "options" : "",
            "default" : false,
            "value" : null,
            "notes" : ""
          },{
            "name" : "checkPointInterval",
            "type" : "float",
            "options" : "",
            "default" : 10,
            "value" : null,
            "notes" : ""
          },{
            "name" : "lossType",
            "type" : "str",
            "options" : "",
            "default" : "logistic",
            "value" : null,
            "notes" : ""
          },{
            "name" : "maxIter",
            "type" : "int",
            "options" : "",
            "default" : 20,
            "value" : null,
            "notes" : ""
          },{
            "name" : "stepSize",
            "type" : "float",
            "options" : "",
            "default" : 0.1,
            "value" : null,
            "notes" : ""
          },{
            "name" : "impurity", 
            "type" : "str",
            "options" : ["gini"],
            "default": "gini",
            "value" : null,
            "notes" : ""
          },{
            "name" : "subsamplingRate", // belom
            "type" : "float",
            "options" : "",
            "default" : 1.0,
            "value" : null,
            "notes" : ""
          },{
            "name" : "seed",
            "type" : "int",
            "options" : "",
            "default" : null,
            "value" : null,
            "notes" : ""
          }],
        "task" : "classification",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs"],
        "after" : []
      },
      {
        "name" : "naiveBayesClassifier", // done!
        "params" :
          [{
            "name" : "smoothing",
            "type" : "float",
            "options" : "",
            "default" : 1.0,
            "value" : null,
            "notes" : ""
          },
          {
            "name" : "modelType",
            "type" : "str",
            "options" : "",
            "default" : "multinomial",
            "value" : null,
            "notes" : ""
          },
          {
            "name" : "thresholds",
            "type" : "int",
            "options" : "",
            "default" : null,
            "value" : null,
            "notes" : ""
          },
          {
            "name" : "weightCol",
            "type" : "str",
            "options" : "",
            "default" : null,
            "value" : null,
            "notes" : ""
          }],
        "task" : "classification",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs"],
        "after" : []
      },
      {
        "name" : "multilayerPerceptronParams",
        "params" :
          [{
            "name" : "layers", // belom
            "type" : "list",
            "options" : "",
            "default" : [2, 3, 4],
            "value" : null,
            "notes" : ""
          },
          {
            "name" : "maxIter",
            "type" : "int",
            "options" : "",
            "default" : 10,
            "value" : null,
            "notes" : ""
          },
          {
            "name" : "steps", // belom
            "type" : "int",
            "options" : "",
            "default" : 0.01,
            "value" : null,
            "notes" : ""
          }],
        "task" : "classification",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs"],
        "after" : []
      },
      { 
        "name" : "CrossValidation", 
        "params" :
          [{
            "name" : "numFolds", // belom
            "type" : "int",
            "options" : "",
            "numFolds" : 3,
            "value" : null,
            "notes" : ""
          }, 
          {
            "name" : "paramGrids",  // belom
            "type" : "list",
            "options" : "",
            "default" : null,
            "value" : null,
            "notes" : ""
          }, 
          {
            "name" : "estimator",
            "type" : "str",
            "options" : "",
            "default" : null,
            "value" : null,
            "notes" : ""
          }, 
          {
            "name" : "evaluator",
            "type" : "str",
            "options" : "",
            "default" : null,
            "value" : null,
            "notes" : ""
          }],
        "task" : "classification",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs"],
        "after" : []
      },
      {
        "name" : "aftsurvivalRegression",
        "params" :
          [{
            "name" : "predictionCol",
            "type" : "str",
            "default": "prediction",
            "value" : null,
            "options" : "any string",
            "notes" : "prediction column name"
          },
          {
            "name" : "labelCol",
            "type" : "str",
            "default": "label",
            "value" : null,
            "options" : "any string",
            "notes" : "label column name"
          },
          { 
            "name" : "featuresCol",
            "type" : "str",
            "default": "features",
            "value" : null,
            "options" : "any string",
            "notes" : "features column name"
          },
          { 
            "name" : "censorCol",
            "type" : "str",
            "default": "censor",
            "value" : null,
            "options" : [0, 1],
            "notes" : "Censor column name. The value of this column could be 0 or 1.If the value is 1, it means the event has occurred i.e. uncensored, otherwise censored"
          },
          { 
            "name" : "quantilesCol",
            "type" : "str",
            "default": null,
            "value" : null,
            "options" : "any string",
            "notes" :"Quantiles column name. This column will output quantiles of corresponding quantileProbabilities if it is set"
          },
          { 
            "name" : "fitIntercept",
            "type" : "bool",
            "default": true,
            "value" : null,
            "options" : "bool",
            "notes" : "whether to fit an intercept term."
          },
          { 
            "name" : "maxIter",
            "type" : "int",
            "default": 100,
            "value" : null,
            "options" : "",
            "notes" : "max number of iterations (>=0)"
          },
          { 
            "name" : "tol",
            "type" : "float",
            "default": 1e-06,
            "value" : null,
            "options" : "",
            "notes" : "the convergence tolerance for iterative algorithms (>= 0)"
          },	
          {
            "name" : "quantileProbabilities", // belom
            "type" : "list",
            "default": [0.01, 0.05, 0.1, 0.25, 0.5, 0.75, 0.9, 0.95, 0.99],
            "value" : null,
            "options" : "",
            "notes" : "Quantile probabilities array. Values of the quantile probabilities array should be in the range (0, 1) and the array should be non-empty"
          },
          {
            "name" : "aggregationDepth",
            "type" : "int",
            "default": 2,
            "value" : null,
            "options" : "",
            "notes" : "suggested depth for treeAggregate (>=2)"
          }],
        "task" : "regression",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs", "normalizer"],
        "after" : []
      },
      {
        "name" : "linearRegression",
        "params" :
          [{
            "name" : "maxIter",
            "type" : "int",
            "default": 100,
            "value" : null,
            "options" : "",
            "notes" : "max number of iterations (>= 0)"
          },
          {
            "name" : "regParam",
            "type" : "float",
            "default": 0.01,
            "value" : null,
            "options" : "",
            "notes" : "regularization parameter value (>= 0)"
          },  
          {
            "name" : "elasticNetParam",
            "type" : "float",
            "default": 1.0,
            "value" : null,
            "options" : "",
            "notes" : "the ElasticNet mixing parameter, in range [0, 1]. For alpha = 0, the penalty is an L2 penalty. For alpha = 1, it is an L1 penalty"
          },
          {
            "name" : "tol",
            "type" : "float",
            "default": 1e-06,
            "value" : null,
            "options" : "",
            "notes" : "the convergence tolerance for iterative algorithms (>= 0)	"
          },
          {
            "name" : "fitIntercept",
            "type" : "bool",
            "default": true,
            "value" : null,
            "options" : "bool",
            "notes" : "whether to fit an intercept term"
          },
          {
            "name" : "standardization",
            "type" : "bool",
            "default": true,
            "value" : null,
            "options" : "bool",
            "notes" : "whether to standardize the training features before fitting the model."
          },
          {
            "name" : "solver", // belom
            "type" : "str",
            "default": "auto",
            "value" : null,
            "options" : ["auto", "normal", "l-bfgs"],
            "notes" : "The solver algorithm for optimization."
          }, 
          {
            "name" : "weightCol",
            "type" : "str",
            "default": null,
            "value" : null,
            "options" : "any string",
            "notes" : "weight column name. If this is not set or empty, we treat all instance weights as 1.0	"
          }, 
          {
            "name" : "aggregationDepth",
            "type" : "int",
            "default": 2,
            "value" : null,
            "options" : "",
            "notes" : "suggested depth for treeAggregate (>=2)"
          },
          {
            "name" : "loss", // belom
            "type" : "str",
            "default": "squaredError",
            "value" : null,
            "options" : ["squaredError", "huber"],
            "notes" : "The loss function to be optimized. Supported options: squaredError, huber"
          }, 
          {
            "name" : "epsilon", // belom
            "type" : "float",
            "default": 1.35,
            "value" : null,
            "options" : "",
            "notes" : "The shape parameter to control the amount of robustness. Must be > 1.0. Only valid when loss parameter is huber"
          }],
        "task" : "regression",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs", "normalizer"],
        "after" : []
      },
      {
        "name" : "isotonicRegression",
        "params" :
          [{
            "name" : "predictionCol",
            "type" : "str",
            "default": "prediction",
            "value" : null,
            "options" : "any string",
            "notes" : "prediction column name"
          },
          {
            "name" : "labelCol",
            "type" : "str",
            "default": "label",
            "value" : null,
            "options" : "any string",
            "notes" : "label column name",
          },  
          {
            "name" : "featuresCol",
            "type" : "str",
            "default": "features",
            "value" : null,
            "options" : "any string",
            "notes" : "features column name"
          },
          {
            "name" : "weightCol",
            "type" : "str",
            "default": "weight",
            "value" : null,
            "options" : "any string",
            "notes" : "weight column name"
          },
          {
            "name" : "isotonic",
            "type" : "bool",
            "default": true,
            "value" : null,
            "options" : "bool",
            "notes" : "whether the output sequence should be isotonic/increasing (true) or antitonic/decreasing (false)"
          },
          {
            "name" : "featureIndex",
            "type" : "int",
            "default": 0,
            "value" : null,
            "options" : "",
            "notes" : "The index of the feature if featuresCol is a vector column, no effect otherwise (>=0)"
          }],
        "task" : "regression",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs", "normalizer"],
        "after" : []
      },
      { 
        "name" : "decisiontreeRegression",
        "params" :
          [{
            "name" : "maxDepth",
            "type" : "int",
            "default": 3,
            "value" : null,
            "options" : "",
            "notes" : "Maximum depth of the tree. (>= 0) E.g., depth 0 means 1 leaf node; depth 1 means 1 internal node + 2 leaf nodes."
          },
          {
            "name" : "featuresCol",
            "type" : "str",
            "default": "features",
            "value" : null,
            "options" : "any string",
            "notes" : "features columns name"
          },  
          {
            "name" : "labelCol",
            "type" : "str",
            "default": "label",
            "value" : null,
            "options" : "any string",
            "notes" : "label column name"
          },
          {
            "name" : "predictionCol",
            "type" : "str",
            "default": "prediction",
            "value" : null,
            "options" : "any string",
            "notes" : "prediction column name"
          },
          {
            "name" : "maxBins",
            "type" : "int",
            "default": 32,
            "value" : null,
            "options" : "",
            "notes" : "Max number of bins for discretizing continuous features (Must be >=2 and >= number of categories for any categorical feature)"
          },
          {
            "name" : "minInstancesPerNode",
            "type" : "int",
            "default": 1,
            "value" : null,
            "options" : "",
            "notes" : "Minimum number of instances each child must have after split. If a split causes the left or right child to have fewer than minInstancesPerNode, the split will be discarded as invalid. (>=1)"
          },
          {
            "name" : "minInfoGain",
            "type" : "float",
            "default": 0.0,
            "value" : null,
            "options" : "",
            "notes" : "Minimum information gain for a split to be considered at a tree node, (>=0)"
          }, 
          {
            "name" : "maxMemoryInMB",
            "type" : "int",
            "default": 256,
            "value" : null,
            "options" : "",
            "notes" : "Maximum memory in MB allocated to histogram aggregation. If too small, then 1 node will be split per iteration, and its aggregates may exceed this size (>=0)"
          }, 
          {
            "name" : "cacheNodeIds",
            "type" : "bool",
            "default": false,
            "value" : null,
            "options" : "bool",
            "notes" : "If false, the algorithm will pass trees to executors to match instances with nodes. If true, the algorithm will cache node IDs for each instance. Caching can speed up training of deeper trees. Users can set how often should the cache be checkpointed or disable it by setting checkpointInterval"
          }, 
          {
            "name" : "checkPointInterval",
            "type" : "int",
            "default": 10,
            "value" : null,
            "options" : "set checkpoint interval (>= 1) or disable checkpoint (-1).",
            "notes" : "E.g., 10 means that the cache will get checkpointed every 10 iterations. Note: this setting will be ignored if the checkpoint directory is not set in the SparkContext"
          },
          {
            "name" : "impurity",
            "type" : "str",
            "default": "variance",
            "value" : null,
            "options" :"variance",
            "notes" : "Criterion used for information gain calculation (case-insensitive)"
          }, 
          {
            "name" : "seed",
            "type" : "int",
            "default": null,
            "value" : null,
            "options" : "",
            "notes" : "random seed, E.g., 123"
          },
          {
            "name" : "varianceCol",
            "type" : "str",
            "default": null,
            "value" : null,
            "options" : "any string",
            "notes" : "column name for the biased sample variance of prediction"
          }],
        "task" : "regression",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs", "normalizer"],
        "after" : []
      },
      {
        "name" : "randomforestRegression",
        "params" :
          [{
            "name" : "featuresCol",
            "type" : "str",
            "default": "features",
            "value" : null,
            "options" : "any string",
            "notes" : "features column name"
          },  
          {
            "name" : "labelCol",
            "type" : "str",
            "default": "label",
            "value" : null,
            "options" : "any string",
            "notes" : "label column name"
          },
          {
            "name" : "predictionCol",
            "type" : "str",
            "default": "prediction",
            "value" : null,
            "options" : "any string",
            "notes" : "prediction column name"
          },
          {
            "name" : "maxDepth",
            "type" : "int",
            "default": 5,
            "value" : null,
            "options" : "",
            "notes" : "Maximum depth of the tree. (>= 0) E.g., depth 0 means 1 leaf node; depth 1 means 1 internal node + 2 leaf nodes."
          },
          {
            "name" : "maxBins",
            "type" : "int",
            "default": 32,
            "value" : null,
            "options" : "",
            "notes" : "Max number of bins for discretizing continuous features (Must be >=2 and >= number of categories for any categorical feature)"
          },
          {
            "name" : "minInstancesPerNode",
            "type" : "int",
            "default": 1,
            "value" : null,
            "options" : "",
            "notes" : "Minimum number of instances each child must have after split. If a split causes the left or right child to have fewer than minInstancesPerNode, the split will be discarded as invalid. (>=0)"
          },
          {
            "name" : "minInfoGain",
            "type" : "float",
            "default": 0.0,
            "value" : null,
            "options" : "",
            "notes" : "Minimum information gain for a split to be considered at a tree node (>=0)"
          }, 
          {
            "name" : "maxMemoryInMB",
            "type" : "int",
            "default": 256,
            "value" : null,
            "options" : "",
            "notes" : "Maximum memory in MB allocated to histogram aggregation. If too small, then 1 node will be split per iteration, and its aggregates may exceed this size (>=0)"
          }, 
          {
            "name" : "cacheNodeIds",
            "type" : "bool",
            "default": false,
            "value" : null,
            "options" :"bool",
            "notes" : "If false, the algorithm will pass trees to executors to match instances with nodes. If true, the algorithm will cache node IDs for each instance. Caching can speed up training of deeper trees. Users can set how often should the cache be checkpointed or disable it by setting checkpointInterval."
          }, 
          {
            "name" : "checkPointInterval",
            "type" : "int",
            "default": 10,
            "value" : null,
            "options" : "set checkpoint interval (>= 1) or disable checkpoint (-1).",
            "notes" : "E.g. 10 means that the cache will get checkpointed every 10 iterations. Note: this setting will be ignored if the checkpoint directory is not set in the SparkContext."
          },
          {
            "name" : "impurity",
            "type" : "str",
            "default": "variance",
            "value" : null,
            "options" : "variance",
            "notes" : "Criterion used for information gain calculation (case-insensitive)"
          }, 
          {
            "name" : "subsamplingRate",
            "type" : "float",
            "default": 1.0,
            "value" : null,
            "options" : "",
            "notes" : "Fraction of the training data used for learning each decision tree, in range [0, 1]."
          },
          {
            "name" : "seed",
            "type" : "int",
            "default": null,
            "value" : null,
            "options" : "",
            "notes" : "random seed, E.g., 123"
          },
          {
            "name" : "numTrees",
            "type" : "int",
            "default": 20,
            "value" : null,
            "options" : "",
            "notes" : "Number of trees to train (>= 1)."
          },
          {
            "name" : "featureSubsetstrategy", // belom
            "type" : "str",
            "default": "auto",
            "value" : null,
            "options" : ["auto", "all", "onethird", "sqrt", "log2", "(0.0-1.0]", "(1-n)"],
            "notes" : "The number of features to consider for splits at each tree node."
          }],
        "task" : "regression",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs", "normalizer"],
        "after" : []
      },
      {
        "name" : "gradientboostedtreesRegression" ,
        "params" :
          [{
            "name" : "maxIter",
            "type" : "int",
            "default": 20,
            "value" : null,
            "options" : "",
            "notes" : "max number of iterations	(>=0)"
          },  
          {
            "name" : "maxDepth",
            "type" : "int",
            "default": 5,
            "value" : null,
            "options" : "",
            "notes" : "Maximum depth of the tree. (>= 0) E.g., depth 0 means 1 leaf node; depth 1 means 1 internal node + 2 leaf nodes."
          },
          {
            "name" : "featuresCol",
            "type" : "str",
            "default": "features",
            "value" : null,
            "options" : "any string",
            "notes" : "features column name"
          },
          {
            "name" : "labelCol",
            "type" : "str",
            "default": "label",
            "value" : null,
            "options" : "any string",
            "notes" : "label column name"
          },
          {
            "name" : "predictionCol",
            "type" : "str",
            "default": "prediction",
            "value" : null,
            "options" : "any string",
            "notes" : "prediction column name"
          },
          {
            "name" : "maxBins",
            "type" : "int",
            "default": 32,
            "value" : null,
            "options" : "",
            "notes" : "Max number of bins for discretizing continuous features (Must be >=2 and >= number of categories for any categorical feature)"
          },
          {
            "name" : "minInstancesPerNode",
            "type" : "int",
            "default": 1,
            "value" : null,
            "options" : "",
            "notes" : "Minimum number of instances each child must have after split. If a split causes the left or right child to have fewer than minInstancesPerNode, the split will be discarded as invalid. (>=1)"
          },
          {
            "name" : "minInfoGain",
            "type" : "float",
            "default": 0.0,
            "value" : null,
            "options" : "",
            "notes" : "Minimum information gain for a split to be considered at a tree node	(>=0)"
          }, 
          {
            "name" : "maxMemoryInMB",
            "type" : "int",
            "default": 256,
            "value" : null,
            "options" : "",
            "notes" : "Maximum memory in MB allocated to histogram aggregation. If too small, then 1 node will be split per iteration, and its aggregates may exceed this size	(>0)"
          }, 
          {
            "name" : "cacheNodeIds",
            "type" : "bool",
            "default": false,
            "value" : null,
            "options" : "bool",
            "notes" : "If false, the algorithm will pass trees to executors to match instances with nodes. If true, the algorithm will cache node IDs for each instance. Caching can speed up training of deeper trees. Users can set how often should the cache be checkpointed or disable it by setting checkpointInterval"
          }, 
          {
            "name" : "subsamplingRate",
            "type" : "float",
            "default": 1.0,
            "value" : null,
            "options" : "",
            "notes" : "Fraction of the training data used for learning each decision tree, in range (0, 1]	"
          },
          {
            "name" : "checkPointInterval",
            "type" : "int",
            "default": 10,
            "value" : null,
            "options" : "set checkpoint interval (>= 1) or disable checkpoint (-1)",
            "notes" : " E.g. 10 means that the cache will get checkpointed every 10 iterations. Note: this setting will be ignored if the checkpoint directory is not set in the SparkContext	"
          },
          {
            "name" : "lossType", // belom
            "type" : "str",
            "default": "squared",
            "value" : null,
            "options" : ["squared", "huber"],
            "notes" : "The loss function to be optimized."
          },
          {
            "name" : "stepSize",
            "type" : "float",
            "default": 0.1,
            "value" : null,
            "options" : "",
            "notes" : "Step size (a.k.a. learning rate) in interval (0, 1] for shrinking the contribution of each estimator.	"
          },
          {
            "name" : "seed",
            "type" : "int",
            "default": null,
            "value" : null,
            "options" : "",
            "notes" : "random seed, E.g, 123"
          },
          {
            "name" : "impurity",
            "type" : "str",
            "default": "variance",
            "value" : null,
            "options" : "variance",
            "notes" : "Criterion used for information gain calculation (case-insensitive)"
          }],
        "task" : "regression",
        "output_type" : "transformer",
        "before" : ["minmaxscaler", "maxabs", "normalizer"],
        "after" : []
      },
      {
        "name": "bisectingKmeans",
        "params":
          [{
            "name" : "featuresCol",
            "type" : "str",
            "default": "features",
            "value": null,
            "options" : "any string",
            "notes" : "features column name"
          },
          {
            "name" : "k",
            "type" : "int",
            "default": 4,
            "value": null,
            "options" : '> 1',
            "notes" : "the desired number of leaf cluster"
          },  
          {
            "name" : "maxIter",
            "type" : "int",
            "default": 20,
            "value": null,
            "options" : ">=0",
            "notes" : "maximum number of iterations"
          },
          {
            "name" : "minDivisibleClusterSize", // tanya lagi
            "type" : "float",
            "default": 1.0,
            "value": null,
            "options" : 'any float number',
            "notes" : "the minimum number of points (if >= 1.0) or the minimum proportion of points (if < 1.0) of a divisible cluster"
          },
          {
            "name" : "predictionCol",
            "type" : "str",
            "default": 'prediction',
            "value": null,
            "options" : "any string",
            "notes" : "prediction column name"
          },
          {
            "name" : "seed",
            "type" : "int",
            "default": null,
            "value": null,
            "options" : "any integer",
            "notes" : "Random seed, must be Integer, float number will error exept 0 after comma"
          }]
      },
      {
        "name": "gaussianMixture",
        "params":
          [{
            "name" : "featuresCol",
            "type" : "str",
            "default": "features",
            "value": null,
            "options" : "any string",
            "notes" : "features column name"
          },
          {
            "name" : "k",
            "type" : "int",
            "default": 2,
            "value": null,
            "options" : '>1',
            "notes" : "the desired number of leaf cluster"
          },  
          {
            "name" : "maxIter",
            "type" : "int",
            "default": 100,
            "value": null,
            "options" : ">=0",
            "notes" : "maximum number of iterations"
          },
          {
            "name" : "predictionCol",
            "type" : "str",
            "default": 'prediction',
            "value": null,
            "options" : "any string",
            "notes" : "prediction column name"
          },
          {
            "name" : "probabilityCol",
            "type" : "str",
            "default": "probability",
            "value": null,
            "options" : 'any string',
            "notes" : "cColumn name for predicted class conditional probabilities. Note: Not all models output well-calibrated probability estimates! These probabilities should be treated as confidences, not precise probabilities'"
          },
          {
            "name" : "seed",
            "type" : "int",
            "default": null,
            "value": null,
            "options" : "any integer",
            "notes" : "Random seed, must be Integer, float number will error exept 0 after comma"
          },
          {
            "name" : "tol",
            "type" : "float",
            "default": 0.01,
            "value": null,
            "options" : ">=0",
            "notes" : "the convergence tolerance for iterative algorithms"
          }]
      },
      {
        "name": "kmeans",
        "params":
          [{
            "name" : "featuresCol",
            "type" : "str",
            "default": "features",
            "value": null,
            "options" : "any string",
            "notes" : "features column name"
          },
          {
            "name" : "initMode", // belom
            "type" : "str",
            "default": 'k-means||',
            "value": null,
            "options" : "'random' or 'k-means||'",
            "notes" : "the initialization algorithm. Supported options: 'random' and 'k-means||'"
          },
          {
            "name" : "initSteps",
            "type" : "int",
            "default": 2,
            "value": null,
            "options" : ">0",
            "notes" : "the number of steps for k-means|| initialization mode. Must be > 0"
          },
          {
            "name" : "k",
            "type" : "int",
            "default": 2,
            "value": null,
            "options" : '>1',
            "notes" : "the number of clusters to create. Must be > 1"
          }, 
          {
            "name" : "maxIter",
            "type" : "int",
            "default": 20,
            "value": null,
            "options" : ">=0",
            "notes" : "maximum number of iterations"
          },
          {
            "name" : "predictionCol",
            "type" : "str",
            "default": 'prediction',
            "value": null,
            "options" : "any string",
            "notes" : "prediction column name"
          },
          {
            "name" : "seed",
            "type" : "int",
            "default": null,
            "value": null,
            "options" : "any integer",
            "notes" : "random seed, must be Integer, float number will error exept 0 after comma"
          },     
          {
            "name" : "tol",
            "type" : "float",
            "default": 0.0001,
            "value": null,
            "options" : ">=0",
            "notes" : "the convergence tolerance for iterative algorithms"
          }]
      },
      {
        "name": "lda",
        "params":
          [{
            "name" : "checkPointInterval",
            "type" : "str",
            "default": 10,
            "value": null,
            "options" : ">=1 set check point, (-1) for disable. ",
            "notes" : "Set checkpoint interval (>= 1) or disable checkpoint (-1). E.g. 10 means that the cache will get checkpointed every 10 iterations, this setting will be ignored if the checkpoint directory is not set in the SparkContext"
          },
          {
            "name" : "featuresCol",
            "type" : "str",
            "default": "features",
            "value": null,
            "options" : "any string",
            "notes" : "features column name"
          },
          {
            "name" : "k",
            "type" : "int",
            "default": 10,
            "value": null,
            "options" : '>1',
            "notes" : "the number of topics (clusters) to infer"
          },
          {
            "name" : "keepLastCheckpoint",
            "type" : "boolean",
            "default": true,
            "value": null,
            "options" : "true or false",
            "notes" : "(for em optimizer) if using checkpointing, this indicates whether to keep the last checkpoint. if false, then the checkpoint will be deleted. deleting the checkpoint can cause failures if a data partition is lost, so set this bit with care"
          },
          {
            "name" : "learningDecay", // belom
            "type" : "float",
            "default": 0.51,
            "value": null,
            "options" : "(0.5, 1.0]",
            "notes" : "this should be between (0.5, 1.0] to guarantee asymptotic convergence. (for online optimizer) learning rate, set as an exponential decay rate"
          },       
          {
            "name" : "learningOffset", // belom
            "type" : "float",
            "default": 1024.0,
            "value": null,
            "options" : ">0.0",
            "notes" : "(for online optimizer) a (positive) learning parameter that downweights early iterations. larger values make early iterations count less"
          },        
          {
            "name" : "maxIter",
            "type" : "int",
            "default": 20,
            "value": null,
            "options" : ">=0",
            "notes" : "maximum number of iterations"
          },       
          {
            "name" : "optimizeDocConcentration",
            "type" : "boolean",
            "default": true,
            "value": null,
            "options" : "true or false",
            "notes" : "(For online optimizer only, currently) Indicates whether the docConcentration (Dirichlet parameter for document-topic distribution) will be optimized during training"
          },
          {
            "name" : "optimizer",
            "type" : "str",
            "default": 'online',
            "value": null,
            "options" : "'online' or 'em'",
            "notes" : "optimizer or inference algorithm used to estimate the LDA model"
          },
          {
            "name" : "seed",
            "type" : "int",
            "default": null,
            "value": null,
            "options" : "any integer",
            "notes" : "Random seed, must be Integer, float number will error exept 0 after comma"
          },
          {
            "name" : "subsamplingRate", // belom
            "type" : "float",
            "default": 0.05,
            "value": null,
            "options" : "(0,1]",
            "notes" : "(for online optimizer) fraction of the corpus to be sampled and used in each iteration of mini-batch gradient descent"
          },          
          {
            "name" : "topicDistributionCol",
            "type" : "str",
            "default": 'topicDistribution',
            "value": null,
            "options" : "any string",
            "notes" : "output column with estimates of the topic mixture distribution for each document (often called 'theta' in the literature). returns a vector of zeros for an empty document"
          },        
          {
            "name" : "topicConcentration", // belom
            "type" : "float",
            "default": null,
            "value": null,
            "options" : ">1.0 or -1 for auto",
            "notes" : "concentration parameter (commonly named 'beta' or 'eta') for the prior placed on topic\' distributions over terms"
          }]
      }
    ]
}