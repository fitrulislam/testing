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
      "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
      "datasetId": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
      "derivative": false,
      "latestDataFlow": {
        "type": "MAIN_DATA_FLOW",
        "id": {
          "datasetId": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
          "sourceName": "dataset 1",
          "version": 1,
          "timestamp": 1535634174560
        },
        "dataIntegrationMeta": {
          "type": "MAIN_DATA_META",
          "mainArangoDBConfig": {
            "nodeCollection": "node_8ea53eb6-12e2-4f2a-b519-da4ef17702ed_1_1535634c174560",
            "relCollection": "rel_8ea53eb6-12e2-4f2a-b519-da4ef17702ed_1_1535634174560",
            "graphName": "graph_8ea53eb6-12e2-4f2a-b519-da4ef17702ed_1_1535634174560"
          },
          "mainHdfsFileConfig": {
            "mappedNodeFile": "/laniakea/asset/dataset/mapped/8ea53eb6-12e2-4f2a-b519-da4ef17702ed/node_1_1535634174560.parquet",
            "mappedRelationFile": "/laniakea/asset/dataset/mapped/8ea53eb6-12e2-4f2a-b519-da4ef17702ed/rel_1_1535634174560.parquet",
            "rawFolder": "/laniakea/asset/dataset/raw/8ea53eb6-12e2-4f2a-b519-da4ef17702ed/1/1535634174560"
          },
          "dataSourceConfig": {
            "dataSourceType": "SQL_MYSQL",
            "id": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "hostName": "159.65.142.155",
            "port": 13306,
            "username": "root",
            "password": "DataMarketplace123!@#",
            "databaseName": "bbo_app",
            "filePath": null,
            "fileUrl": "",
            "delimiter": "",
            "quoteCharacter": "",
            "escapeCharacter": "",
            "encoding": ""
          },
          "mappingConfig": {
            "id": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "dataSourceType": "SQL_MYSQL",
            "dataSourceConfigId": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "mappingScheme": "{\"data_source_type\":\"SQL\",\"vertices\":[{\"vertex\":\"vertex_name1\",\"type\":\"person\",\"properties\":{\"_data_source_id\":\"UUID\",\"_id\":\"column_name_PK1\",\"_label\":\"person\",\"property_key1\":\"age\",\"property_key2\":\"name\"},\"table\":\"table_name1\",\"primary_key\":\"column_name_PK1\"},{\"vertex\":\"vertex_name2\",\"type\":\"item\",\"properties\":{\"_data_source_id\":\"UUID\",\"_id\":\"column_name_PK2\",\"_label\":\"item\",\"property_key1\":\"brand\",\"property_key2\":\"count\"},\"table\":\"table_name2\",\"primary_key\":\"column_name_PK2\"}],\"edges\":[{\"edge\":\"edge_name1\",\"type\":\"knows\",\"properties\":{\"_data_source_id\":\"UUID\",\"_id\":\"column_name_PK3\",\"_label\":\"knows\",\"property_key1\":\"column_name3\",\"property_key2\":\"column_name4\"},\"table\":\"table_name3\",\"primary_key\":\"column_name_PK3\",\"vertex1\":{\"vertex\":\"vertex_name1\",\"child_key\":\"foreign_key1\",\"parent_key\":\"primary_key1\"},\"vertex2\":{\"vertex\":\"vertex_name2\",\"child_key\":\"foreign_key2\",\"parent_key\":\"primary_key2\"}}]}"
          }
        },
        "dataServingMeta": {
          "endpointId": "ceb2393a-721b-41c9-a2b1-debbde2cf469",
          "asyncRestApi": true,
          "asyncRestApiConfig": {
            "id": "768d62d3-d460-4a7e-80e1-c4df8ff48d4d",
            "name": "768d62d3-d460-4a7e-80e1-c4df8ff48d4d",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 1,
            "basePrice": 0,
            "upstreamHost": "localhost:8080",
            "upstreamPath": "/v1/query/async/dataset/8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "downstreamPath": "/v1/query/async/dataset/ceb2393a-721b-41c9-a2b1-debbde2cf469"
          },
          "syncRestApi": true,
          "syncRestApiConfig": {
            "id": "c1348584-f7fe-4fde-bc33-34b06da5eb64",
            "name": "c1348584-f7fe-4fde-bc33-34b06da5eb64",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 1,
            "basePrice": 0,
            "upstreamHost": "localhost:8080",
            "upstreamPath": "/v1/query/sync/dataset/8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "downstreamPath": "/v1/query/sync/dataset/ceb2393a-721b-41c9-a2b1-debbde2cf469"
          },
          "webSocketApi": false,
          "webSocketApiConfig": null
        },
        "scheduledJob": {
          "dataIntegrationMetaTypes": "MAIN_DATA_META",
          "jobEventType": "CREATE",
          "dataFlowId": {
            "datasetId": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "sourceName": "UNDEFINED",
            "version": 1,
            "timestamp": 1535634174560
          },
          "period": 1,
          "periodUnit": "HOUR",
          "nextRun": "2018-08-30T14:02:54.560+0000",
          "lastRun": null,
          "lastRunStatus": "PENDING",
          "lastRunDetail": null,
          "autoUpdate": true
        },
        "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3"
      },
      "pricing": {
        "type": "FREE",
        "marginPrice": 1,
        "basePrice": 0
      }
    },
    {
      "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
      "datasetId": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
      "derivative": false,
      "latestDataFlow": {
        "type": "MAIN_DATA_FLOW",
        "id": {
          "datasetId": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
          "sourceName": "dataset 2",
          "version": 1,
          "timestamp": 1535634174560
        },
        "dataIntegrationMeta": {
          "type": "MAIN_DATA_META",
          "mainArangoDBConfig": {
            "nodeCollection": "node_8ea53eb6-12e2-4f2a-b519-da4ef17702ed_1_1535634c174560",
            "relCollection": "rel_8ea53eb6-12e2-4f2a-b519-da4ef17702ed_1_1535634174560",
            "graphName": "graph_8ea53eb6-12e2-4f2a-b519-da4ef17702ed_1_1535634174560"
          },
          "mainHdfsFileConfig": {
            "mappedNodeFile": "/laniakea/asset/dataset/mapped/8ea53eb6-12e2-4f2a-b519-da4ef17702ed/node_1_1535634174560.parquet",
            "mappedRelationFile": "/laniakea/asset/dataset/mapped/8ea53eb6-12e2-4f2a-b519-da4ef17702ed/rel_1_1535634174560.parquet",
            "rawFolder": "/laniakea/asset/dataset/raw/8ea53eb6-12e2-4f2a-b519-da4ef17702ed/1/1535634174560"
          },
          "dataSourceConfig": {
            "dataSourceType": "SQL_MYSQL",
            "id": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "hostName": "159.65.142.155",
            "port": 13306,
            "username": "root",
            "password": "DataMarketplace123!@#",
            "databaseName": "bbo_app",
            "filePath": null,
            "fileUrl": "",
            "delimiter": "",
            "quoteCharacter": "",
            "escapeCharacter": "",
            "encoding": ""
          },
          "mappingConfig": {
            "id": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "dataSourceType": "SQL_MYSQL",
            "dataSourceConfigId": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "mappingScheme": "{\"data_source_type\":\"SQL\",\"vertices\":[{\"vertex\":\"vertex_name1\",\"type\":\"person\",\"properties\":{\"_data_source_id\":\"UUID\",\"_id\":\"column_name_PK1\",\"_label\":\"person\",\"property_key1\":\"gender\",\"property_key2\":\"hobby\"},\"table\":\"table_name1\",\"primary_key\":\"column_name_PK1\"},{\"vertex\":\"vertex_name2\",\"type\":\"item\",\"properties\":{\"_data_source_id\":\"UUID\",\"_id\":\"column_name_PK2\",\"_label\":\"item\",\"property_key1\":\"height\",\"property_key2\":\"price\"},\"table\":\"table_name2\",\"primary_key\":\"column_name_PK2\"}],\"edges\":[{\"edge\":\"edge_name1\",\"type\":\"knows\",\"properties\":{\"_data_source_id\":\"UUID\",\"_id\":\"column_name_PK3\",\"_label\":\"knows\",\"property_key1\":\"column_name3\",\"property_key2\":\"column_name4\"},\"table\":\"table_name3\",\"primary_key\":\"column_name_PK3\",\"vertex1\":{\"vertex\":\"vertex_name1\",\"child_key\":\"foreign_key1\",\"parent_key\":\"primary_key1\"},\"vertex2\":{\"vertex\":\"vertex_name2\",\"child_key\":\"foreign_key2\",\"parent_key\":\"primary_key2\"}}]}"
          }
        },
        "dataServingMeta": {
          "endpointId": "ceb2393a-721b-41c9-a2b1-debbde2cf469",
          "asyncRestApi": true,
          "asyncRestApiConfig": {
            "id": "768d62d3-d460-4a7e-80e1-c4df8ff48d4d",
            "name": "768d62d3-d460-4a7e-80e1-c4df8ff48d4d",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 1,
            "basePrice": 0,
            "upstreamHost": "localhost:8080",
            "upstreamPath": "/v1/query/async/dataset/8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "downstreamPath": "/v1/query/async/dataset/ceb2393a-721b-41c9-a2b1-debbde2cf469"
          },
          "syncRestApi": true,
          "syncRestApiConfig": {
            "id": "c1348584-f7fe-4fde-bc33-34b06da5eb64",
            "name": "c1348584-f7fe-4fde-bc33-34b06da5eb64",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 1,
            "basePrice": 0,
            "upstreamHost": "localhost:8080",
            "upstreamPath": "/v1/query/sync/dataset/8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "downstreamPath": "/v1/query/sync/dataset/ceb2393a-721b-41c9-a2b1-debbde2cf469"
          },
          "webSocketApi": false,
          "webSocketApiConfig": null
        },
        "scheduledJob": {
          "dataIntegrationMetaTypes": "MAIN_DATA_META",
          "jobEventType": "CREATE",
          "dataFlowId": {
            "datasetId": "8ea53eb6-12e2-4f2a-b519-da4ef17702ed",
            "sourceName": "UNDEFINED",
            "version": 1,
            "timestamp": 1535634174560
          },
          "period": 1,
          "periodUnit": "HOUR",
          "nextRun": "2018-08-30T14:02:54.560+0000",
          "lastRun": null,
          "lastRunStatus": "PENDING",
          "lastRunDetail": null,
          "autoUpdate": true
        },
        "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3"
      },
      "pricing": {
        "type": "FREE",
        "marginPrice": 1,
        "basePrice": 0
      }
    }
    // {
    //   "name": "dataset2",
    //   "display_name": "Dataset 2",
    //   "path": "hdfs://.../source/...",
    //   "params": [
    //     {
    //       "name": "property1",
    //       "display_name": "Property 1",
    //       "description": "",
    //       "value": ""
    //     }
    //   ],
    //   "columns": [
    //     {
    //       "name": "availableColumns",
    //       "display_name": "Available Columns",
    //       "description": "",
    //       "value": [
    //         {
    //           "columnName": "Weight",
    //           "dataType": "int"
    //         },
    //         {
    //           "columnName": "Height",
    //           "dataType": "double"
    //         },
    //         {
    //           "columnName": "Size",
    //           "dataType": "int"
    //         }
    //       ]
    //     }
    //   ]
    // }
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