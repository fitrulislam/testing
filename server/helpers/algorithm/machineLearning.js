module.exports = {
  "Binarizer": {
    "name": "Binarizer",
    "display_name": "Binarizer",
    "parent": "ml.feature",
    "input": [
      {
        "name": "inputCol",
        "display_name": "Input Column",
        "description": "input column name.",
        "mandatory": true,
        "datatype": "double",
        "value": null
      }
    ],
    "output": [
      {
        "name": "outputCol",
        "display_name": "Output Column",
        "description": "output column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "binarizer_output"
      }
    ],
    "params": [
      {
        "name": "threshold",
        "display_name": "Threshold",
        "description": "threshold in binary classification prediction, in range [0, 1]",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      }
    ]
  },
  "ChiSqSelector": {
    "name": "ChiSqSelector",
    "display_name": "Chi-Squared Selector",
    "parent": "ml.feature",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "outputCol",
        "display_name": "Output Column",
        "description": "output column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "chi_sq_selector_output"
      }
    ],
    "params": [
      {
        "name": "numTopFeatures",
        "display_name": "Number of Top Features",
        "description": "Number of features that selector will select, ordered by ascending p-value. If the number of features is < numTopFeatures, then this will select all features.",
        "mandatory": true,
        "datatype": "int",
        "value": 50
      },
      {
        "name": "selectorType",
        "display_name": "Selector Type",
        "description": "The selector type of the ChisqSelector. Supported options: numTopFeatures (default), percentile, fpr, fdr, fwe.",
        "mandatory": true,
        "datatype": "str",
        "value": "numTopFeatures"
      },
      {
        "name": "percentile",
        "display_name": "Percentile",
        "description": "Percentile of features that selector will select, ordered by ascending p-value.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.1
      },
      {
        "name": "fpr",
        "display_name": "FPR",
        "description": "The highest p-value for features to be kept.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.05
      },
      {
        "name": "fdr",
        "display_name": "FDR",
        "description": "The upper bound of the expected false discovery rate.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.05
      },
      {
        "name": "fwe",
        "display_name": "FWE",
        "description": "The upper bound of the expected family-wise error rate.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.05
      }
    ]
  },
  "DCT": {
    "name": "DCT",
    "display_name": "Discrete Cosine Transformer",
    "parent": "ml.feature",
    "input": [
      {
        "name": "inputCol",
        "display_name": "Input Column",
        "description": "input column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": null
      }
    ],
    "output": [
      {
        "name": "outputCol",
        "display_name": "Output Column",
        "description": "output column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "dct_output"
      }
    ],
    "params": [
      {
        "name": "inverse",
        "display_name": "Inverse",
        "description": "Set transformer to perform inverse DCT, default False.",
        "mandatory": true,
        "datatype": "bool",
        "value": false
      }
    ]
  },
  "MaxAbsScaler": {
    "name": "MaxAbsScaler",
    "display_name": "Maximum-Absolute Scaler",
    "parent": "ml.feature",
    "input": [
      {
        "name": "inputCol",
        "display_name": "Input Column",
        "description": "input column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": null
      }
    ],
    "output": [
      {
        "name": "outputCol",
        "display_name": "Output Column",
        "description": "output column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "max_abs_scaler_output"
      }
    ],
    "params": []
  },
  "MinMaxScaler": {
    "name": "MinMaxScaler",
    "display_name": "Minimum-Maximum Scaler",
    "parent": "ml.feature",
    "input": [
      {
        "name": "inputCol",
        "display_name": "Input Column",
        "description": "input column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": null
      }
    ],
    "output": [
      {
        "name": "outputCol",
        "display_name": "Output Column",
        "description": "output column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "min_max_scaler_output"
      }
    ],
    "params": [
      {
        "name": "min",
        "display_name": "Minimum",
        "description": "Lower bound of the output feature range",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "max",
        "display_name": "Maximum",
        "description": "Upper bound of the output feature range",
        "mandatory": true,
        "datatype": "float",
        "value": 1.0
      }
    ]
  },
  "PCA": {
    "name": "PCA",
    "display_name": "Principal Component Analysis",
    "parent": "ml.feature",
    "input": [
      {
        "name": "inputCol",
        "display_name": "Input Column",
        "description": "input column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": null
      }
    ],
    "output": [
      {
        "name": "outputCol",
        "display_name": "Output Column",
        "description": "output column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "pca_output"
      }
    ],
    "params": [
      {
        "name": "k",
        "display_name": "Number of Principal Components",
        "description": "the number of principal components",
        "mandatory": true,
        "datatype": "int",
        "value": 2
      }
    ]
  },
  "StandardScaler": {
    "name": "StandardScaler",
    "display_name": "Standard Scaler",
    "parent": "ml.feature",
    "input": [
      {
        "name": "inputCol",
        "display_name": "Input Column",
        "description": "input column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": null
      }
    ],
    "output": [
      {
        "name": "outputCol",
        "display_name": "Output Column",
        "description": "output column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "standard_scaler_output"
      }
    ],
    "params": [
      {
        "name": "withMean",
        "display_name": "Center Data with Mean",
        "description": "Center data with mean",
        "mandatory": true,
        "datatype": "bool",
        "value": false
      },
      {
        "name": "withStd",
        "display_name": "Scale to Unit Standard Deviation",
        "description": "Scale to unit standard deviation",
        "mandatory": true,
        "datatype": "bool",
        "value": true
      }
    ]
  },
  "LinearSVC": {
    "name": "LinearSVC",
    "display_name": "Linear Support Vector Classifier",
    "parent": "ml.classification",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      },
      {
        "name": "weightCol",
        "display_name": "Weight Column",
        "description": "weight column name. If this is not set or empty, we treat all instance weights as 1.0.",
        "mandatory": false,
        "datatype": "double",
        "value": null
      }
    ],
    "output": [
      {
        "name": "rawPredictionCol",
        "display_name": "Raw Prediction Column",
        "description": "raw prediction (a.k.a. confidence) column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "rawPrediction"
      },
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "threshold",
        "display_name": "Threshold",
        "description": "The threshold in binary classification applied to the linear model prediction.  This threshold can be any real number, where Inf will make all predictions 0.0 and -Inf will make all predictions 1.0.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "aggregationDepth",
        "display_name": "Aggregation Depth",
        "description": "suggested depth for treeAggregate (>= 2).",
        "mandatory": true,
        "datatype": "int",
        "value": 2
      },
      {
        "name": "standardization",
        "display_name": "Standardization",
        "description": "whether to standardize the training features before fitting the model.",
        "mandatory": true,
        "datatype": "bool",
        "value": true
      },
      {
        "name": "fitIntercept",
        "display_name": "Fit Intercept",
        "description": "whether to fit an intercept term.",
        "mandatory": true,
        "datatype": "bool",
        "value": true
      },
      {
        "name": "maxIter",
        "display_name": "Maximum Iteration",
        "description": "max number of iterations (>= 0).",
        "mandatory": true,
        "datatype": "int",
        "value": 100
      },
      {
        "name": "regParam",
        "display_name": "Regularization Parameter",
        "description": "regularization parameter (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "tol",
        "display_name": "Tolerance",
        "description": "the convergence tolerance for iterative algorithms (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 1e-06
      }
    ]
  },
  "LogisticRegression": {
    "name": "LogisticRegression",
    "display_name": "Logistic Regression",
    "parent": "ml.classification",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      },
      {
        "name": "weightCol",
        "display_name": "Weight Column",
        "description": "weight column name. If this is not set or empty, we treat all instance weights as 1.0.",
        "mandatory": false,
        "datatype": "double",
        "value": null
      }
    ],
    "output": [
      {
        "name": "rawPredictionCol",
        "display_name": "Raw Prediction Column",
        "description": "raw prediction (a.k.a. confidence) column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "rawPrediction"
      },
      {
        "name": "probabilityCol",
        "display_name": "Probability Column",
        "description": "Column name for predicted class conditional probabilities. Note: Not all models output well-calibrated probability estimates! These probabilities should be treated as confidences, not precise probabilities.",
        "mandatory": true,
        "datatype": "vector",
        "value": "probability"
      },
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "aggregationDepth",
        "display_name": "Aggregation Depth",
        "description": "suggested depth for treeAggregate (>= 2).",
        "mandatory": true,
        "datatype": "int",
        "value": 2
      },
      {
        "name": "standardization",
        "display_name": "Standardization",
        "description": "whether to standardize the training features before fitting the model.",
        "mandatory": true,
        "datatype": "bool",
        "value": true
      },
      {
        "name": "fitIntercept",
        "display_name": "Fit Intercept",
        "description": "whether to fit an intercept term.",
        "mandatory": true,
        "datatype": "bool",
        "value": true
      },
      {
        "name": "elasticNetParam",
        "display_name": "ElasticNet Mixing Parameter",
        "description": "the ElasticNet mixing parameter, in range [0, 1]. For alpha = 0, the penalty is an L2 penalty. For alpha = 1, it is an L1 penalty.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "maxIter",
        "display_name": "Maximum Iteration",
        "description": "max number of iterations (>= 0).",
        "mandatory": true,
        "datatype": "int",
        "value": 100
      },
      {
        "name": "regParam",
        "display_name": "Regularization Parameter",
        "description": "regularization parameter (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "tol",
        "display_name": "Tolerance",
        "description": "the convergence tolerance for iterative algorithms (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 1e-06
      },
      {
        "name": "threshold",
        "display_name": "Threshold",
        "description": "Threshold in binary classification prediction, in range [0, 1]. If threshold and thresholds are both set, they must match.e.g. if threshold is p, then thresholds must be equal to [1-p, p].",
        "mandatory": true,
        "datatype": "float",
        "value": 0.5
      },
      {
        "name": "family",
        "display_name": "Family",
        "description": "The name of family which is a description of the label distribution to be used in the model. Supported options: auto, binomial, multinomial",
        "mandatory": true,
        "datatype": "str",
        "value": "auto"
      },
      {
        "name": "lowerBoundsOnCoefficients",
        "display_name": "Lower Bounds on Coefficients",
        "description": "The lower bounds on coefficients if fitting under bound constrained optimization. The bound matrix must be compatible with the shape (1, number of features) for binomial regression, or (number of classes, number of features) for multinomial regression.",
        "mandatory": false,
        "datatype": "List[int]",
        "value": null
      },
      {
        "name": "lowerBoundsOnIntercepts",
        "display_name": "Lower Bounds on Intercepts",
        "description": "The lower bounds on intercepts if fitting under bound constrained optimization. The bounds vector size must beequal with 1 for binomial regression, or the number oflasses for multinomial regression.",
        "mandatory": false,
        "datatype": "List[int]",
        "value": null
      },
      {
        "name": "thresholds",
        "display_name": "Thresholds",
        "description": "Thresholds in multi-class classification to adjust the probability of predicting each class. Array must have length equal to the number of classes, with values > 0, excepting that at most one value may be 0. The class with largest value p/t is predicted, where p is the original probability of that class and t is the class's threshold.",
        "mandatory": false,
        "datatype": "List[float]",
        "value": null
      },
      {
        "name": "upperBoundsOnCoefficients",
        "display_name": "Upper Bounds on Coefficients",
        "description": "The upper bounds on coefficients if fitting under bound constrained optimization. The bound matrix must be compatible with the shape (1, number of features) for binomial regression, or (number of classes, number of features) for multinomial regression.",
        "mandatory": false,
        "datatype": "List[int]",
        "value": null
      },
      {
        "name": "upperBoundsOnIntercepts",
        "display_name": "Upper Bounds on Intercepts",
        "description": "The upper bounds on intercepts if fitting under bound constrained optimization. The bound vector size must be equal with 1 for binomial regression, or the number of classes for multinomial regression.",
        "mandatory": false,
        "datatype": "List[int]",
        "value": null
      }
    ]
  },
  "DecisionTreeClassifier": {
    "name": "DecisionTreeClassifier",
    "display_name": "Decision Tree Classifier",
    "parent": "ml.classification",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "rawPredictionCol",
        "display_name": "Raw Prediction Column",
        "description": "raw prediction (a.k.a. confidence) column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "rawPrediction"
      },
      {
        "name": "probabilityCol",
        "display_name": "Probability Column",
        "description": "Column name for predicted class conditional probabilities. Note: Not all models output well-calibrated probability estimates! These probabilities should be treated as confidences, not precise probabilities.",
        "mandatory": true,
        "datatype": "vector",
        "value": "probability"
      },
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "seed",
        "display_name": "Random Seed",
        "description": "random seed.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      },
      {
        "name": "maxDepth",
        "display_name": "Maximum Depth",
        "description": "Maximum depth of the tree. (>= 0) E.g., depth 0 means 1 leaf node; depth 1 means 1 internal node + 2 leaf nodes.",
        "mandatory": true,
        "datatype": "int",
        "value": 5
      },
      {
        "name": "maxBins",
        "display_name": "Maximum Bins",
        "description": "Max number of bins for discretizing continuous features.  Must be >=2 and >= number of categories for any categorical feature.",
        "mandatory": true,
        "datatype": "int",
        "value": 32
      },
      {
        "name": "minInstancesPerNode",
        "display_name": "Minimum Instances per Node",
        "description": "Minimum number of instances each child must have after split. If a split causes the left or right child to have fewer than minInstancesPerNode, the split will be discarded as invalid. Should be >= 1.",
        "mandatory": true,
        "datatype": "int",
        "value": 1
      },
      {
        "name": "minInfoGain",
        "display_name": "Minimum Information Gain",
        "description": "Minimum information gain for a split to be considered at a tree node.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "maxMemoryInMB",
        "display_name": "Maximum Memory in MB",
        "description": "Maximum memory in MB allocated to histogram aggregation. If too small, then 1 node will be split per iteration, and its aggregates may exceed this size.",
        "mandatory": true,
        "datatype": "int",
        "value": 256
      },
      {
        "name": "cacheNodeIds",
        "display_name": "Cache Node Ids",
        "description": "If false, the algorithm will pass trees to executors to match instances with nodes. If true, the algorithm will cache node IDs for each instance. Caching can speed up training of deeper trees. Users can set how often should the cache be checkpointed or disable it by setting checkpointInterval.",
        "mandatory": true,
        "datatype": "bool",
        "value": false
      },
      {
        "name": "checkpointInterval",
        "display_name": "Checkpoint Interval",
        "description": "set checkpoint interval (>= 1) or disable checkpoint (-1). E.g. 10 means that the cache will get checkpointed every 10 iterations. Note: this setting will be ignored if the checkpoint directory is not set in the SparkContext.",
        "mandatory": true,
        "datatype": "int",
        "value": 10
      },
      {
        "name": "impurity",
        "display_name": "Impurity",
        "description": "Criterion used for information gain calculation (case-insensitive). Supported options: entropy, gini",
        "mandatory": true,
        "datatype": "str",
        "value": "gini"
      }
    ]
  },
  "GBTClassifier": {
    "name": "GBTClassifier",
    "display_name": "Gradient-Boosted Trees Classifier",
    "parent": "ml.classification",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "seed",
        "display_name": "Random Seed",
        "description": "random seed.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      },
      {
        "name": "maxDepth",
        "display_name": "Maximum Depth",
        "description": "Maximum depth of the tree. (>= 0) E.g., depth 0 means 1 leaf node; depth 1 means 1 internal node + 2 leaf nodes.",
        "mandatory": true,
        "datatype": "int",
        "value": 5
      },
      {
        "name": "maxBins",
        "display_name": "Maximum Bins",
        "description": "Max number of bins for discretizing continuous features.  Must be >=2 and >= number of categories for any categorical feature.",
        "mandatory": true,
        "datatype": "int",
        "value": 32
      },
      {
        "name": "minInstancesPerNode",
        "display_name": "Minimum Instances per Node",
        "description": "Minimum number of instances each child must have after split. If a split causes the left or right child to have fewer than minInstancesPerNode, the split will be discarded as invalid. Should be >= 1.",
        "mandatory": true,
        "datatype": "int",
        "value": 1
      },
      {
        "name": "minInfoGain",
        "display_name": "Minimum Information Gain",
        "description": "Minimum information gain for a split to be considered at a tree node.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "maxMemoryInMB",
        "display_name": "Maximum Memory in MB",
        "description": "Maximum memory in MB allocated to histogram aggregation. If too small, then 1 node will be split per iteration, and its aggregates may exceed this size.",
        "mandatory": true,
        "datatype": "int",
        "value": 256
      },
      {
        "name": "cacheNodeIds",
        "display_name": "Cache Node Ids",
        "description": "If false, the algorithm will pass trees to executors to match instances with nodes. If true, the algorithm will cache node IDs for each instance. Caching can speed up training of deeper trees. Users can set how often should the cache be checkpointed or disable it by setting checkpointInterval.",
        "mandatory": true,
        "datatype": "bool",
        "value": false
      },
      {
        "name": "checkpointInterval",
        "display_name": "Checkpoint Interval",
        "description": "set checkpoint interval (>= 1) or disable checkpoint (-1). E.g. 10 means that the cache will get checkpointed every 10 iterations. Note: this setting will be ignored if the checkpoint directory is not set in the SparkContext.",
        "mandatory": true,
        "datatype": "int",
        "value": 10
      },
      {
        "name": "lossType",
        "display_name": "Loss Type",
        "description": "Loss function which GBT tries to minimize (case-insensitive). Supported options: logistic",
        "mandatory": true,
        "datatype": "str",
        "value": "logistic"
      },
      {
        "name": "maxIter",
        "display_name": "Maximum Iteration",
        "description": "max number of iterations (>= 0).",
        "mandatory": true,
        "datatype": "int",
        "value": 20
      },
      {
        "name": "stepSize",
        "display_name": "Step Size",
        "description": "Step size (a.k.a. learning rate) in interval (0, 1] for shrinking the contribution of each estimator.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.1
      },
      {
        "name": "subsamplingRate",
        "display_name": "Subsampling Rate",
        "description": "Fraction of the training data used for learning each decision tree, in range (0, 1].",
        "mandatory": true,
        "datatype": "float",
        "value": 1.0
      }
    ]
  },
  "RandomForestClassifier": {
    "name": "RandomForestClassifier",
    "display_name": "Random Forest Classifier",
    "parent": "ml.classification",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "probabilityCol",
        "display_name": "Probability Column",
        "description": "Column name for predicted class conditional probabilities. Note: Not all models output well-calibrated probability estimates! These probabilities should be treated as confidences, not precise probabilities.",
        "mandatory": true,
        "datatype": "vector",
        "value": "probability"
      },
      {
        "name": "rawPredictionCol",
        "display_name": "Raw Prediction Column",
        "description": "raw prediction (a.k.a. confidence) column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "rawPrediction"
      },
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "seed",
        "display_name": "Random Seed",
        "description": "random seed.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      },
      {
        "name": "maxDepth",
        "display_name": "Maximum Depth",
        "description": "Maximum depth of the tree. (>= 0) E.g., depth 0 means 1 leaf node; depth 1 means 1 internal node + 2 leaf nodes.",
        "mandatory": true,
        "datatype": "int",
        "value": 5
      },
      {
        "name": "maxBins",
        "display_name": "Maximum Bins",
        "description": "Max number of bins for discretizing continuous features.  Must be >=2 and >= number of categories for any categorical feature.",
        "mandatory": true,
        "datatype": "int",
        "value": 32
      },
      {
        "name": "minInstancesPerNode",
        "display_name": "Minimum Instances per Node",
        "description": "Minimum number of instances each child must have after split. If a split causes the left or right child to have fewer than minInstancesPerNode, the split will be discarded as invalid. Should be >= 1.",
        "mandatory": true,
        "datatype": "int",
        "value": 1
      },
      {
        "name": "minInfoGain",
        "display_name": "Minimum Information Gain",
        "description": "Minimum information gain for a split to be considered at a tree node.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "maxMemoryInMB",
        "display_name": "Maximum Memory in MB",
        "description": "Maximum memory in MB allocated to histogram aggregation. If too small, then 1 node will be split per iteration, and its aggregates may exceed this size.",
        "mandatory": true,
        "datatype": "int",
        "value": 256
      },
      {
        "name": "cacheNodeIds",
        "display_name": "Cache Node Ids",
        "description": "If false, the algorithm will pass trees to executors to match instances with nodes. If true, the algorithm will cache node IDs for each instance. Caching can speed up training of deeper trees. Users can set how often should the cache be checkpointed or disable it by setting checkpointInterval.",
        "mandatory": true,
        "datatype": "bool",
        "value": false
      },
      {
        "name": "checkpointInterval",
        "display_name": "Checkpoint Interval",
        "description": "set checkpoint interval (>= 1) or disable checkpoint (-1). E.g. 10 means that the cache will get checkpointed every 10 iterations. Note: this setting will be ignored if the checkpoint directory is not set in the SparkContext.",
        "mandatory": true,
        "datatype": "int",
        "value": 10
      },
      {
        "name": "impurity",
        "display_name": "Impurity",
        "description": "Criterion used for information gain calculation (case-insensitive). Supported options: entropy, gini",
        "mandatory": true,
        "datatype": "str",
        "value": "gini"
      },
      {
        "name": "numTrees",
        "display_name": "Number of Trees",
        "description": "Number of trees to train (>= 1).",
        "mandatory": true,
        "datatype": "int",
        "value": 20
      },
      {
        "name": "featureSubsetStrategy",
        "display_name": "Feature Subset Strategy",
        "description": "The number of features to consider for splits at each tree node. Supported options: auto, all, onethird, sqrt, log2, (0.0-1.0], [1-n].",
        "mandatory": true,
        "datatype": "str",
        "value": "auto"
      },
      {
        "name": "subsamplingRate",
        "display_name": "Subsampling Rate",
        "description": "Fraction of the training data used for learning each decision tree, in range (0, 1].",
        "mandatory": true,
        "datatype": "float",
        "value": 1.0
      }
    ]
  },
  "NaiveBayes": {
    "name": "NaiveBayes",
    "display_name": "Naive Bayes Classifier",
    "parent": "ml.classification",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      },
      {
        "name": "weightCol",
        "display_name": "Weight Column",
        "description": "weight column name. If this is not set or empty, we treat all instance weights as 1.0.",
        "mandatory": false,
        "datatype": "double",
        "value": null
      }
    ],
    "output": [
      {
        "name": "rawPredictionCol",
        "display_name": "Raw Prediction Column",
        "description": "raw prediction (a.k.a. confidence) column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "rawPrediction"
      },
      {
        "name": "probabilityCol",
        "display_name": "Probability Column",
        "description": "Column name for predicted class conditional probabilities. Note: Not all models output well-calibrated probability estimates! These probabilities should be treated as confidences, not precise probabilities.",
        "mandatory": true,
        "datatype": "vector",
        "value": "probability"
      },
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "smoothing",
        "display_name": "Smoothing Parameter",
        "description": "The smoothing parameter, should be >= 0, default is 1.0",
        "mandatory": true,
        "datatype": "float",
        "value": 1.0
      },
      {
        "name": "modelType",
        "display_name": "Model Type",
        "description": "The model type which is a string (case-sensitive). Supported options: multinomial (default) and bernoulli.",
        "mandatory": true,
        "datatype": "str",
        "value": "multinomial"
      },
      {
        "name": "thresholds",
        "display_name": "Thresholds",
        "description": "Thresholds in multi-class classification to adjust the probability of predicting each class. Array must have length equal to the number of classes, with values > 0, excepting that at most one value may be 0. The class with largest value p/t is predicted, where p is the original probability of that class and t is the class's threshold.",
        "mandatory": false,
        "datatype": "List[float]",
        "value": null
      }
    ]
  },
  "MultilayerPerceptronClassifier": {
    "name": "MultilayerPerceptronClassifier",
    "display_name": "Multilayer Perceptron Classifier",
    "parent": "ml.classification",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "rawPredictionCol",
        "display_name": "Raw Prediction Column",
        "description": "raw prediction (a.k.a. confidence) column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "rawPrediction"
      },
      {
        "name": "probabilityCol",
        "display_name": "Probability Column",
        "description": "Column name for predicted class conditional probabilities. Note: Not all models output well-calibrated probability estimates! These probabilities should be treated as confidences, not precise probabilities.",
        "mandatory": true,
        "datatype": "vector",
        "value": "probability"
      },
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "solver",
        "display_name": "Solver Algorithm",
        "description": "The solver algorithm for optimization. Supported options: l-bfgs, gd.",
        "mandatory": true,
        "datatype": "str",
        "value": "l-bfgs"
      },
      {
        "name": "seed",
        "display_name": "Random Seed",
        "description": "random seed.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      },
      {
        "name": "maxIter",
        "display_name": "Maximum Iteration",
        "description": "max number of iterations (>= 0).",
        "mandatory": true,
        "datatype": "int",
        "value": 100
      },
      {
        "name": "tol",
        "display_name": "Tolerance",
        "description": "the convergence tolerance for iterative algorithms (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 1e-06
      },
      {
        "name": "blockSize",
        "display_name": "Block Size",
        "description": "Block size for stacking input data in matrices. Data is stacked within partitions. If block size is more than remaining data in a partition then it is adjusted to the size of this data. Recommended size is between 10 and 1000, default is 128.",
        "mandatory": true,
        "datatype": "int",
        "value": 128
      },
      {
        "name": "stepSize",
        "display_name": "Step Size",
        "description": "Step size to be used for each iteration of optimization (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 0.03
      },
      {
        "name": "initialWeights",
        "display_name": "Initial Weights",
        "description": "The initial weights of the model.",
        "mandatory": false,
        "datatype": "List[float]",
        "value": null
      },
      {
        "name": "layers",
        "display_name": "Layers",
        "description": "Sizes of layers from input layer to output layer E.g., Array(780, 100, 10) means 780 inputs, one hidden layer with 100 neurons and output layer of 10 neurons.",
        "mandatory": true,
        "datatype": "List[int]",
        "value": null
      }
    ]
  },
  "BisectingKMeans": {
    "name": "BisectingKMeans",
    "display_name": "Bisecting K-Means Clustering",
    "parent": "ml.clustering",
    "input": [
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "int",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "seed",
        "display_name": "Random seed",
        "description": "random seed.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      },
      {
        "name": "maxIter",
        "display_name": "Maximum Iteration",
        "description": "max number of iterations (>= 0).",
        "mandatory": true,
        "datatype": "int",
        "value": 20
      },
      {
        "name": "k",
        "display_name": "Number of Leaf Cluster",
        "description": "The desired number of leaf clusters. Must be > 1.",
        "mandatory": true,
        "datatype": "int",
        "value": 4
      },
      {
        "name": "minDivisibleClusterSize",
        "display_name": "Minimum Divisible Cluster Size",
        "description": "The minimum number of points (if >= 1.0) or the minimum proportion of points (if < 1.0) of a divisible cluster.",
        "mandatory": true,
        "datatype": "float",
        "value": 1.0
      }
    ]
  },
  "KMeans": {
    "name": "KMeans",
    "display_name": "K-Means Clustering",
    "parent": "ml.clustering",
    "input": [
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "int",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "seed",
        "display_name": "Random Seed",
        "description": "random seed.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      },
      {
        "name": "k",
        "display_name": "Number of Cluster",
        "description": "The number of clusters to create. Must be > 1.",
        "mandatory": true,
        "datatype": "int",
        "value": 2
      },
      {
        "name": "initMode",
        "display_name": "Initialization Mode",
        "description": "The initialization algorithm. This can be either \"random\" to choose random points as initial cluster centers, or \"k-means||\" to use a parallel variant of k-means++",
        "mandatory": true,
        "datatype": "str",
        "value": "k-means||"
      },
      {
        "name": "initSteps",
        "display_name": "Initialization Steps",
        "description": "The number of steps for k-means|| initialization mode. Must be > 0.",
        "mandatory": true,
        "datatype": "int",
        "value": 2
      },
      {
        "name": "tol",
        "display_name": "Tolerance",
        "description": "the convergence tolerance for iterative algorithms (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0001
      },
      {
        "name": "maxIter",
        "display_name": "Maximum Iteration",
        "description": "max number of iterations (>= 0).",
        "mandatory": true,
        "datatype": "int",
        "value": 20
      }
    ]
  },
  "GaussianMixture": {
    "name": "GaussianMixture",
    "display_name": "Gaussian Mixture Clustering",
    "parent": "ml.clustering",
    "input": [
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "probabilityCol",
        "display_name": "Probability Column",
        "description": "Column name for predicted class conditional probabilities. Note: Not all models output well-calibrated probability estimates! These probabilities should be treated as confidences, not precise probabilities.",
        "mandatory": true,
        "datatype": "vector",
        "value": "probability"
      },
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "int",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "seed",
        "display_name": "Random Seed",
        "description": "random seed.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      },
      {
        "name": "k",
        "display_name": "Number of Independent Gaussians",
        "description": "Number of independent Gaussians in the mixture model. Must be > 1.",
        "mandatory": true,
        "datatype": "int",
        "value": 2
      },
      {
        "name": "tol",
        "display_name": "Tolerance",
        "description": "the convergence tolerance for iterative algorithms (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 0.01
      },
      {
        "name": "maxIter",
        "display_name": "Maximum Iteration",
        "description": "max number of iterations (>= 0).",
        "mandatory": true,
        "datatype": "int",
        "value": 100
      }
    ]
  },
  "LDA": {
    "name": "LDA",
    "display_name": "Latent Dirichlet Allocation",
    "parent": "ml.clustering",
    "input": [
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "topicDistributionCol",
        "display_name": "Topic Distribution Column",
        "description": "Output column with estimates of the topic mixture distribution for each document (often called \"theta\" in the literature). Returns a vector of zeros for an empty document.",
        "mandatory": true,
        "datatype": "vector",
        "value": "topicDistribution"
      }
    ],
    "params": [
      {
        "name": "seed",
        "display_name": "Random Seed",
        "description": "random seed.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      },
      {
        "name": "maxIter",
        "display_name": "Maximum Iteration",
        "description": "max number of iterations (>= 0).",
        "mandatory": true,
        "datatype": "int",
        "value": 20
      },
      {
        "name": "checkpointInterval",
        "display_name": "Checkpoint Interval",
        "description": "set checkpoint interval (>= 1) or disable checkpoint (-1). E.g. 10 means that the cache will get checkpointed every 10 iterations. Note: this setting will be ignored if the checkpoint directory is not set in the SparkContext.",
        "mandatory": true,
        "datatype": "int",
        "value": 10
      },
      {
        "name": "k",
        "display_name": "Number of Topics",
        "description": "The number of topics (clusters) to infer. Must be > 1.",
        "mandatory": true,
        "datatype": "int",
        "value": 10
      },
      {
        "name": "optimizer",
        "display_name": "Optimizer",
        "description": "Optimizer or inference algorithm used to estimate the LDA model.  Supported: online, em",
        "mandatory": true,
        "datatype": "str",
        "value": "online"
      },
      {
        "name": "learningOffset",
        "display_name": "Learning Offset",
        "description": "A (positive) learning parameter that downweights early iterations. Larger values make early iterations count less",
        "mandatory": true,
        "datatype": "float",
        "value": 1024.0
      },
      {
        "name": "learningDecay",
        "display_name": "Learning Decay",
        "description": "Learning rate, set as anexponential decay rate. This should be between (0.5, 1.0] to guarantee asymptotic convergence.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.51
      },
      {
        "name": "subsamplingRate",
        "display_name": "Subsampling Rate",
        "description": "Fraction of the corpus to be sampled and used in each iteration of mini-batch gradient descent, in range (0, 1].",
        "mandatory": true,
        "datatype": "float",
        "value": 0.05
      },
      {
        "name": "optimizeDocConcentration",
        "display_name": "Optimize Document Concentration",
        "description": "Indicates whether the docConcentration (Dirichlet parameter for document-topic distribution) will be optimized during training.",
        "mandatory": true,
        "datatype": "bool",
        "value": true
      },
      {
        "name": "keepLastCheckpoint",
        "display_name": "Keep Last Checkpoint",
        "description": "(For EM optimizer) If using checkpointing, this indicates whether to keep the last checkpoint. If false, then the checkpoint will be deleted. Deleting the checkpoint can cause failures if a data partition is lost, so set this bit with care.",
        "mandatory": true,
        "datatype": "bool",
        "value": true
      },
      {
        "name": "docConcentration",
        "display_name": "Document Concentration",
        "description": "Concentration parameter (commonly named \"alpha\") for the prior placed on documents' distributions over topics (\"theta\").",
        "mandatory": false,
        "datatype": "float",
        "value": null
      },
      {
        "name": "topicConcentration",
        "display_name": "Topic Concentration",
        "description": "Concentration parameter (commonly named \"beta\" or \"eta\") for the prior placed on topic' distributions over terms.",
        "mandatory": false,
        "datatype": "float",
        "value": null
      }
    ]
  },
  "DecisionTreeRegressor": {
    "name": "DecisionTreeRegressor",
    "display_name": "Decision Tree Regressor",
    "parent": "ml.regression",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      },
      {
        "name": "varianceCol",
        "display_name": "Variance Column",
        "description": "column name for the biased sample variance of prediction.",
        "mandatory": false,
        "datatype": "double",
        "value": null
      }
    ],
    "params": [
      {
        "name": "seed",
        "display_name": "Random Seed",
        "description": "random seed.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      },
      {
        "name": "maxDepth",
        "display_name": "Maximum Depth",
        "description": "Maximum depth of the tree. (>= 0) E.g., depth 0 means 1 leaf node; depth 1 means 1 internal node + 2 leaf nodes.",
        "mandatory": true,
        "datatype": "int",
        "value": 5
      },
      {
        "name": "maxBins",
        "display_name": "Maximum Bins",
        "description": "Max number of bins for discretizing continuous features.  Must be >=2 and >= number of categories for any categorical feature.",
        "mandatory": true,
        "datatype": "int",
        "value": 32
      },
      {
        "name": "minInstancesPerNode",
        "display_name": "Minimum Instances per Node",
        "description": "Minimum number of instances each child must have after split. If a split causes the left or right child to have fewer than minInstancesPerNode, the split will be discarded as invalid. Should be >= 1.",
        "mandatory": true,
        "datatype": "int",
        "value": 1
      },
      {
        "name": "minInfoGain",
        "display_name": "Minimum Information Gain",
        "description": "Minimum information gain for a split to be considered at a tree node.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "maxMemoryInMB",
        "display_name": "Maximum Memory in MB",
        "description": "Maximum memory in MB allocated to histogram aggregation. If too small, then 1 node will be split per iteration, and its aggregates may exceed this size.",
        "mandatory": true,
        "datatype": "int",
        "value": 256
      },
      {
        "name": "cacheNodeIds",
        "display_name": "Cache Node Ids",
        "description": "If false, the algorithm will pass trees to executors to match instances with nodes. If true, the algorithm will cache node IDs for each instance. Caching can speed up training of deeper trees. Users can set how often should the cache be checkpointed or disable it by setting checkpointInterval.",
        "mandatory": true,
        "datatype": "bool",
        "value": false
      },
      {
        "name": "checkpointInterval",
        "display_name": "Checkpoint Interval",
        "description": "set checkpoint interval (>= 1) or disable checkpoint (-1). E.g. 10 means that the cache will get checkpointed every 10 iterations. Note: this setting will be ignored if the checkpoint directory is not set in the SparkContext.",
        "mandatory": true,
        "datatype": "int",
        "value": 10
      },
      {
        "name": "impurity",
        "display_name": "Impurity",
        "description": "Criterion used for information gain calculation (case-insensitive). Supported options: variance",
        "mandatory": true,
        "datatype": "str",
        "value": "variance"
      }
    ]
  },
  "GBTRegressor": {
    "name": "GBTRegressor",
    "display_name": "Gradient-Boosted Trees Regressor",
    "parent": "ml.regression",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "seed",
        "display_name": "Random Seed",
        "description": "random seed.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      },
      {
        "name": "maxDepth",
        "display_name": "Maximum Depth",
        "description": "Maximum depth of the tree. (>= 0) E.g., depth 0 means 1 leaf node; depth 1 means 1 internal node + 2 leaf nodes.",
        "mandatory": true,
        "datatype": "int",
        "value": 5
      },
      {
        "name": "maxBins",
        "display_name": "Maximum Bins",
        "description": "Max number of bins for discretizing continuous features.  Must be >=2 and >= number of categories for any categorical feature.",
        "mandatory": true,
        "datatype": "int",
        "value": 32
      },
      {
        "name": "minInstancesPerNode",
        "display_name": "Minimum Instances per Node",
        "description": "Minimum number of instances each child must have after split. If a split causes the left or right child to have fewer than minInstancesPerNode, the split will be discarded as invalid. Should be >= 1.",
        "mandatory": true,
        "datatype": "int",
        "value": 1
      },
      {
        "name": "minInfoGain",
        "display_name": "Minimum Information Gain",
        "description": "Minimum information gain for a split to be considered at a tree node.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "maxMemoryInMB",
        "display_name": "Maximum Memory in MB",
        "description": "Maximum memory in MB allocated to histogram aggregation. If too small, then 1 node will be split per iteration, and its aggregates may exceed this size.",
        "mandatory": true,
        "datatype": "int",
        "value": 256
      },
      {
        "name": "cacheNodeIds",
        "display_name": "Cache Node Ids",
        "description": "If false, the algorithm will pass trees to executors to match instances with nodes. If true, the algorithm will cache node IDs for each instance. Caching can speed up training of deeper trees. Users can set how often should the cache be checkpointed or disable it by setting checkpointInterval.",
        "mandatory": true,
        "datatype": "bool",
        "value": false
      },
      {
        "name": "subsamplingRate",
        "display_name": "Subsampling Rate",
        "description": "Fraction of the training data used for learning each decision tree, in range (0, 1].",
        "mandatory": true,
        "datatype": "float",
        "value": 1.0
      },
      {
        "name": "checkpointInterval",
        "display_name": "Checkpoint Interval",
        "description": "set checkpoint interval (>= 1) or disable checkpoint (-1). E.g. 10 means that the cache will get checkpointed every 10 iterations. Note: this setting will be ignored if the checkpoint directory is not set in the SparkContext.",
        "mandatory": true,
        "datatype": "int",
        "value": 10
      },
      {
        "name": "lossType",
        "display_name": "Loss Type",
        "description": "Loss function which GBT tries to minimize (case-insensitive). Supported options: squared, absolute",
        "mandatory": true,
        "datatype": "str",
        "value": "squared"
      },
      {
        "name": "maxIter",
        "display_name": "Maximum Iteration",
        "description": "max number of iterations (>= 0).",
        "mandatory": true,
        "datatype": "int",
        "value": 20
      },
      {
        "name": "stepSize",
        "display_name": "Step Size",
        "description": "Step size (a.k.a. learning rate) in interval (0, 1] for shrinking the contribution of each estimator.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.1
      },
      {
        "name": "impurity",
        "display_name": "Impurity",
        "description": "Criterion used for information gain calculation (case-insensitive). Supported options: variance",
        "mandatory": true,
        "datatype": "str",
        "value": "variance"
      }
    ]
  },
  "GeneralizedLinearRegression": {
    "name": "GeneralizedLinearRegression",
    "display_name": "Generalized Linear Regression",
    "parent": "ml.regression",
    "input": [
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      },
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "offsetCol",
        "display_name": "Offset Column",
        "description": "The offset column name. If this is not set or empty, we treat all instance offsets as 0.0",
        "mandatory": false,
        "datatype": "double",
        "value": null
      },
      {
        "name": "weightCol",
        "display_name": "Weight Column",
        "description": "weight column name. If this is not set or empty, we treat all instance weights as 1.0.",
        "mandatory": false,
        "datatype": "double",
        "value": null
      }
    ],
    "output": [
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      },
      {
        "name": "linkPredictionCol",
        "display_name": "Link Prediction Column",
        "description": "link prediction (linear predictor) column name",
        "mandatory": false,
        "datatype": "double",
        "value": null
      }
    ],
    "params": [
      {
        "name": "solver",
        "display_name": "Solver Algorithm",
        "description": "The solver algorithm for optimization. Supported options: irls.",
        "mandatory": true,
        "datatype": "str",
        "value": "irls"
      },
      {
        "name": "fitIntercept",
        "display_name": "Fit Intercept",
        "description": "whether to fit an intercept term.",
        "mandatory": true,
        "datatype": "bool",
        "value": true
      },
      {
        "name": "family",
        "display_name": "Family",
        "description": "The name of family which is a description of the error distribution to be used in the model. Supported options: gaussian (default), binomial, poisson, gamma and tweedie.",
        "mandatory": true,
        "datatype": "str",
        "value": "gaussian"
      },
      {
        "name": "maxIter",
        "display_name": "Maximum Iteration",
        "description": "max number of iterations (>= 0).",
        "mandatory": true,
        "datatype": "int",
        "value": 25
      },
      {
        "name": "tol",
        "display_name": "Tolerance",
        "description": "the convergence tolerance for iterative algorithms (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 1e-06
      },
      {
        "name": "regParam",
        "display_name": "Regularization Parameter",
        "description": "regularization parameter (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "variancePower",
        "display_name": "Variance Power",
        "description": "The power in the variance function of the Tweedie distribution which characterizes the relationship between the variance and mean of the distribution. Only applicable for the Tweedie family. Supported values: 0 and [1, Inf).",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "link",
        "display_name": "Link Function",
        "description": "The name of link function which provides the relationship between the linear predictor and the mean of the distribution function. Supported options: identity, log, inverse, logit, probit, cloglog and sqrt.",
        "mandatory": false,
        "datatype": "str",
        "value": null
      },
      {
        "name": "linkPower",
        "display_name": "Link Power",
        "description": "The index in the power link function. Only applicable to the Tweedie family.",
        "mandatory": false,
        "datatype": "int",
        "value": null
      }
    ]
  },
  "IsotonicRegression": {
    "name": "IsotonicRegression",
    "display_name": "Isotonic Regression",
    "parent": "ml.regression",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      },
      {
        "name": "weightCol",
        "display_name": "Weight Column",
        "description": "weight column name. If this is not set or empty, we treat all instance weights as 1.0.",
        "mandatory": false,
        "datatype": "double",
        "value": null
      }
    ],
    "output": [
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "isotonic",
        "display_name": "Isotonic",
        "description": "whether the output sequence should be isotonic/increasing (true) orantitonic/decreasing (false).",
        "mandatory": true,
        "datatype": "bool",
        "value": true
      },
      {
        "name": "featureIndex",
        "display_name": "Feature Index",
        "description": "The index of the feature if featuresCol is a vector column, no effect otherwise.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      }
    ]
  },
  "LinearRegression": {
    "name": "LinearRegression",
    "display_name": "Linear Regression",
    "parent": "ml.regression",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      },
      {
        "name": "weightCol",
        "display_name": "Weight Column",
        "description": "weight column name. If this is not set or empty, we treat all instance weights as 1.0.",
        "mandatory": false,
        "datatype": "double",
        "value": null
      }
    ],
    "output": [
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "aggregationDepth",
        "display_name": "Aggregation Depth",
        "description": "suggested depth for treeAggregate (>= 2).",
        "mandatory": true,
        "datatype": "int",
        "value": 2
      },
      {
        "name": "solver",
        "display_name": "Solver Algorithm",
        "description": "The solver algorithm for optimization. Supported options: auto, normal, l-bfgs.",
        "mandatory": true,
        "datatype": "str",
        "value": "auto"
      },
      {
        "name": "standardization",
        "display_name": "Standardization",
        "description": "whether to standardize the training features before fitting the model.",
        "mandatory": true,
        "datatype": "bool",
        "value": true
      },
      {
        "name": "fitIntercept",
        "display_name": "Fit Intercept",
        "description": "whether to fit an intercept term.",
        "mandatory": true,
        "datatype": "bool",
        "value": true
      },
      {
        "name": "elasticNetParam",
        "display_name": "ElasticNet Parameter",
        "description": "the ElasticNet mixing parameter, in range [0, 1]. For alpha = 0, the penalty is an L2 penalty. For alpha = 1, it is an L1 penalty.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "maxIter",
        "display_name": "Maximum Iteration",
        "description": "max number of iterations (>= 0).",
        "mandatory": true,
        "datatype": "int",
        "value": 100
      },
      {
        "name": "regParam",
        "display_name": "Regularization Parameter",
        "description": "regularization parameter (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "tol",
        "display_name": "Tolerance",
        "description": "the convergence tolerance for iterative algorithms (>= 0).",
        "mandatory": true,
        "datatype": "float",
        "value": 1e-06
      },
      {
        "name": "loss",
        "display_name": "Loss",
        "description": "The loss function to be optimized. Supported options: squaredError, huber.",
        "mandatory": true,
        "datatype": "str",
        "value": "squaredError"
      },
      {
        "name": "epsilon",
        "display_name": "Epsilon",
        "description": "The shape parameter to control the amount of robustness. Must be > 1.0. Only valid when loss is huber",
        "mandatory": true,
        "datatype": "float",
        "value": 1.35
      }
    ]
  },
  "RandomForestRegressor": {
    "name": "RandomForestRegressor",
    "display_name": "Random Forest Regressor",
    "parent": "ml.regression",
    "input": [
      {
        "name": "labelCol",
        "display_name": "Label Column",
        "description": "label column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "label"
      },
      {
        "name": "featuresCol",
        "display_name": "Features Column",
        "description": "features column name.",
        "mandatory": true,
        "datatype": "vector",
        "value": "features"
      }
    ],
    "output": [
      {
        "name": "predictionCol",
        "display_name": "Prediction Column",
        "description": "prediction column name.",
        "mandatory": true,
        "datatype": "double",
        "value": "prediction"
      }
    ],
    "params": [
      {
        "name": "seed",
        "display_name": "Random Seed",
        "description": "random seed.",
        "mandatory": true,
        "datatype": "int",
        "value": 0
      },
      {
        "name": "maxDepth",
        "display_name": "Maximum Depth",
        "description": "Maximum depth of the tree. (>= 0) E.g., depth 0 means 1 leaf node; depth 1 means 1 internal node + 2 leaf nodes.",
        "mandatory": true,
        "datatype": "int",
        "value": 5
      },
      {
        "name": "maxBins",
        "display_name": "Maximum Bins",
        "description": "Max number of bins for discretizing continuous features.  Must be >=2 and >= number of categories for any categorical feature.",
        "mandatory": true,
        "datatype": "int",
        "value": 32
      },
      {
        "name": "minInstancesPerNode",
        "display_name": "Minimum Instances per Node",
        "description": "Minimum number of instances each child must have after split. If a split causes the left or right child to have fewer than minInstancesPerNode, the split will be discarded as invalid. Should be >= 1.",
        "mandatory": true,
        "datatype": "int",
        "value": 1
      },
      {
        "name": "minInfoGain",
        "display_name": "Minimum Information Gain",
        "description": "Minimum information gain for a split to be considered at a tree node.",
        "mandatory": true,
        "datatype": "float",
        "value": 0.0
      },
      {
        "name": "maxMemoryInMB",
        "display_name": "Maximum Memory in MB",
        "description": "Maximum memory in MB allocated to histogram aggregation. If too small, then 1 node will be split per iteration, and its aggregates may exceed this size.",
        "mandatory": true,
        "datatype": "int",
        "value": 256
      },
      {
        "name": "cacheNodeIds",
        "display_name": "Cache Node Ids",
        "description": "If false, the algorithm will pass trees to executors to match instances with nodes. If true, the algorithm will cache node IDs for each instance. Caching can speed up training of deeper trees. Users can set how often should the cache be checkpointed or disable it by setting checkpointInterval.",
        "mandatory": true,
        "datatype": "bool",
        "value": false
      },
      {
        "name": "checkpointInterval",
        "display_name": "Checkpoint Interval",
        "description": "set checkpoint interval (>= 1) or disable checkpoint (-1). E.g. 10 means that the cache will get checkpointed every 10 iterations. Note: this setting will be ignored if the checkpoint directory is not set in the SparkContext.",
        "mandatory": true,
        "datatype": "int",
        "value": 10
      },
      {
        "name": "impurity",
        "display_name": "Impurity",
        "description": "Criterion used for information gain calculation (case-insensitive). Supported options: variance",
        "mandatory": true,
        "datatype": "str",
        "value": "variance"
      },
      {
        "name": "subsamplingRate",
        "display_name": "Subsampling Rate",
        "description": "Fraction of the training data used for learning each decision tree, in range (0, 1].",
        "mandatory": true,
        "datatype": "float",
        "value": 1.0
      },
      {
        "name": "numTrees",
        "display_name": "Number of Trees",
        "description": "Number of trees to train (>= 1).",
        "mandatory": true,
        "datatype": "int",
        "value": 20
      },
      {
        "name": "featureSubsetStrategy",
        "display_name": "Feature Subset Strategy",
        "description": "The number of features to consider for splits at each tree node. Supported options: auto, all, onethird, sqrt, log2, (0.0-1.0], [1-n].",
        "mandatory": true,
        "datatype": "str",
        "value": "auto"
      }
    ]
  }
}