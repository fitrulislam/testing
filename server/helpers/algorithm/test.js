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
          "sourceName": "UNDEFINED",
          "version": 1,
          "timestamp": 1535634174560
        },
        "dataIntegrationMeta": {
          "type": "MAIN_DATA_META",
          "mainArangoDBConfig": {
            "nodeCollection": "node_8ea53eb6-12e2-4f2a-b519-da4ef17702ed_1_1535634174560",
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
            "mappingScheme": "{\"data_source_type\":\"SQL\",\"vertices\":[{\"vertex\":\"vertex_name1\",\"type\":\"person\",\"Properties\":{\"_data_source_id\":\"UUID\",\"_id\":\"column_name_PK1\",\"_label\":\"person\",\"property_key1\":\"column_name0\",\"property_key2\":\"column_name2\"},\"table\":\"table_name1\",\"primary_key\":\"column_name_PK1\"},{\"vertex\":\"vertex_name2\",\"type\":\"item\",\"properties\":{\"_data_source_id\":\"UUID\",\"_id\":\"column_name_PK2\",\"_label\":\"item\",\"property_key1\":\"column_name1\",\"property_key2\":\"column_name2\"},\"table\":\"table_name2\",\"primary_key\":\"column_name_PK2\"}],\"edges\":[{\"edge\":\"edge_name1\",\"type\":\"knows\",\"properties\":{\"_data_source_id\":\"UUID\",\"_id\":\"column_name_PK3\",\"_label\":\"knows\",\"property_key1\":\"column_name3\",\"property_key2\":\"column_name4\"},\"table\":\"table_name3\",\"primary_key\":\"column_name_PK3\",\"vertex1\":{\"vertex\":\"vertex_name1\",\"child_key\":\"foreign_key1\",\"parent_key\":\"primary_key1\"},\"vertex2\":{\"vertex\":\"vertex_name2\",\"child_key\":\"foreign_key2\",\"parent_key\":\"primary_key2\"}}]}"
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
            "marginPrice": 7,
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
            "marginPrice": 7,
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
        "type": "PREMIUM",
        "marginPrice": 7,
        "basePrice": 0
      }
    },
    {
      "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
      "datasetId": "a1152428-4146-4acb-b058-7d94ac8464ac",
      "derivative": false,
      "latestDataFlow": {
        "type": "MAIN_DATA_FLOW",
        "id": {
          "datasetId": "a1152428-4146-4acb-b058-7d94ac8464ac",
          "sourceName": "UNDEFINED",
          "version": 1,
          "timestamp": 1536045261447
        },
        "dataIntegrationMeta": {
          "type": "MAIN_DATA_META",
          "mainArangoDBConfig": {
            "nodeCollection": "node_a1152428-4146-4acb-b058-7d94ac8464ac_1_1536045261447",
            "relCollection": "rel_a1152428-4146-4acb-b058-7d94ac8464ac_1_1536045261447",
            "graphName": "graph_a1152428-4146-4acb-b058-7d94ac8464ac_1_1536045261447"
          },
          "mainHdfsFileConfig": {
            "mappedNodeFile": "/laniakea/asset/dataset/mapped/a1152428-4146-4acb-b058-7d94ac8464ac/node_1_1536045261447.parquet",
            "mappedRelationFile": "/laniakea/asset/dataset/mapped/a1152428-4146-4acb-b058-7d94ac8464ac/rel_1_1536045261447.parquet",
            "rawFolder": "/laniakea/asset/dataset/raw/a1152428-4146-4acb-b058-7d94ac8464ac/1/1536045261447"
          },
          "dataSourceConfig": {
            "dataSourceType": "XLSX",
            "id": "a1152428-4146-4acb-b058-7d94ac8464ac",
            "hostName": "",
            "port": null,
            "username": "",
            "password": "",
            "databaseName": "",
            "filePath": "/storage/file-assets/dataset-files/a1152428-4146-4acb-b058-7d94ac8464ac.xls",
            "fileUrl": "",
            "delimiter": ",",
            "quoteCharacter": "\"",
            "escapeCharacter": "/",
            "encoding": "utf8"
          },
          "mappingConfig": {
            "id": "a1152428-4146-4acb-b058-7d94ac8464ac",
            "dataSourceType": "XLSX",
            "dataSourceConfigId": "a1152428-4146-4acb-b058-7d94ac8464ac",
            "mappingScheme": "{\"data_source_type\":\"XLSX\",\"vertices\":[{\"vertex\":\"customer\",\"type\":\"person\",\"properties\":{\"person_id\":\"Customer ID\",\"_label\":\"person\",\"_id\":\"Customer ID\",\"_data_source_id\":\"a1152428-4146-4acb-b058-7d94ac8464ac\"},\"sheet\":\"People\"},{\"vertex\":\"create order\",\"type\":\"shop\",\"properties\":{\"shop_id\":\"Order ID\",\"_label\":\"shop\",\"_id\":\"Order ID\",\"_data_source_id\":\"a1152428-4146-4acb-b058-7d94ac8464ac\"},\"sheet\":\"Orders\"}],\"edges\":[{\"edge\":\"retur\",\"type\":\"sends\",\"properties\":{\"item_count\":\"Returned\",\"_data_source_id\":\"a1152428-4146-4acb-b058-7d94ac8464ac\",\"_id\":\"Order ID\"},\"vertex1\":{\"vertex\":\"customer\"},\"vertex2\":{\"vertex\":\"create order\"},\"sheet\":\"Returns\"}]}"
          }
        },
        "dataServingMeta": {
          "endpointId": "2b02b277-8234-41b5-a321-e45ea5b306d6",
          "asyncRestApi": true,
          "asyncRestApiConfig": {
            "id": "6117e9a3-9aa2-4c73-ae06-ea6d5b89f7c3",
            "name": "6117e9a3-9aa2-4c73-ae06-ea6d5b89f7c3",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 1,
            "basePrice": 0,
            "upstreamHost": "localhost:8080",
            "upstreamPath": "/v1/query/async/dataset/a1152428-4146-4acb-b058-7d94ac8464ac",
            "downstreamPath": "/v1/query/async/dataset/2b02b277-8234-41b5-a321-e45ea5b306d6"
          },
          "syncRestApi": true,
          "syncRestApiConfig": {
            "id": "9462d354-fc2d-4b30-82f8-8d73c4014851",
            "name": "9462d354-fc2d-4b30-82f8-8d73c4014851",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 1,
            "basePrice": 0,
            "upstreamHost": "localhost:8080",
            "upstreamPath": "/v1/query/sync/dataset/a1152428-4146-4acb-b058-7d94ac8464ac",
            "downstreamPath": "/v1/query/sync/dataset/2b02b277-8234-41b5-a321-e45ea5b306d6"
          },
          "webSocketApi": false,
          "webSocketApiConfig": null
        },
        "scheduledJob": {
          "dataIntegrationMetaTypes": "MAIN_DATA_META",
          "jobEventType": "CREATE",
          "dataFlowId": {
            "datasetId": "a1152428-4146-4acb-b058-7d94ac8464ac",
            "sourceName": "UNDEFINED",
            "version": 1,
            "timestamp": 1536045261447
          },
          "period": 1,
          "periodUnit": "HOUR",
          "nextRun": "2018-09-04T08:14:21.448+0000",
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
      "datasetId": "a22ebdc4-4f72-459c-8b7a-8365259e6890",
      "derivative": false,
      "latestDataFlow": {
        "type": "MAIN_DATA_FLOW",
        "id": {
          "datasetId": "a22ebdc4-4f72-459c-8b7a-8365259e6890",
          "sourceName": "UNDEFINED",
          "version": 1,
          "timestamp": 1536311396758
        },
        "dataIntegrationMeta": {
          "type": "MAIN_DATA_META",
          "mainArangoDBConfig": {
            "nodeCollection": "node_a22ebdc4-4f72-459c-8b7a-8365259e6890_1_1536311396758",
            "relCollection": "rel_a22ebdc4-4f72-459c-8b7a-8365259e6890_1_1536311396758",
            "graphName": "graph_a22ebdc4-4f72-459c-8b7a-8365259e6890_1_1536311396758"
          },
          "mainHdfsFileConfig": {
            "mappedNodeFile": "/laniakea/asset/dataset/mapped/a22ebdc4-4f72-459c-8b7a-8365259e6890/node_1_1536311396758.parquet",
            "mappedRelationFile": "/laniakea/asset/dataset/mapped/a22ebdc4-4f72-459c-8b7a-8365259e6890/rel_1_1536311396758.parquet",
            "rawFolder": "/laniakea/asset/dataset/raw/a22ebdc4-4f72-459c-8b7a-8365259e6890/1/1536311396758"
          },
          "dataSourceConfig": {
            "dataSourceType": "CSV",
            "id": "a22ebdc4-4f72-459c-8b7a-8365259e6890",
            "hostName": "",
            "port": null,
            "username": "",
            "password": "",
            "databaseName": "",
            "filePath": "/storage/file-assets/dataset-files/a22ebdc4-4f72-459c-8b7a-8365259e6890.csv",
            "fileUrl": "",
            "delimiter": ",",
            "quoteCharacter": "\"",
            "escapeCharacter": "/",
            "encoding": "utf8"
          },
          "mappingConfig": {
            "id": "a22ebdc4-4f72-459c-8b7a-8365259e6890",
            "dataSourceType": "CSV",
            "dataSourceConfigId": "a22ebdc4-4f72-459c-8b7a-8365259e6890",
            "mappingScheme": "{\"data_source_type\":\"CSV\",\"vertices\":[{\"vertex\":\"toko\",\"type\":\"shop\",\"properties\":{\"phone_number\":\"user_rating\",\"mobile_phone_number\":\"user_rating_ver\",\"_label\":\"shop\",\"_id\":\"id\",\"_data_source_id\":\"a22ebdc4-4f72-459c-8b7a-8365259e6890\"}}],\"edges\":[]}"
          }
        },
        "dataServingMeta": {
          "endpointId": "19e46140-2557-42ed-9d1b-7495b9608526",
          "asyncRestApi": true,
          "asyncRestApiConfig": {
            "id": "cc1b5708-5dbf-4900-8250-fbda4a4f33c2",
            "name": "cc1b5708-5dbf-4900-8250-fbda4a4f33c2",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 1,
            "basePrice": 0,
            "upstreamHost": "206.189.34.231:18002",
            "upstreamPath": "/v1/query/async/dataset/a22ebdc4-4f72-459c-8b7a-8365259e6890",
            "downstreamPath": "/v1/query/async/dataset/19e46140-2557-42ed-9d1b-7495b9608526"
          },
          "syncRestApi": true,
          "syncRestApiConfig": {
            "id": "3c2a9ef5-c3c6-475a-9333-7965e2c3cfba",
            "name": "3c2a9ef5-c3c6-475a-9333-7965e2c3cfba",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 1,
            "basePrice": 0,
            "upstreamHost": "206.189.34.231:18002",
            "upstreamPath": "/v1/query/sync/dataset/a22ebdc4-4f72-459c-8b7a-8365259e6890",
            "downstreamPath": "/v1/query/sync/dataset/19e46140-2557-42ed-9d1b-7495b9608526"
          },
          "webSocketApi": false,
          "webSocketApiConfig": null
        },
        "scheduledJob": {
          "dataIntegrationMetaTypes": "MAIN_DATA_META",
          "jobEventType": "CREATE",
          "dataFlowId": {
            "datasetId": "a22ebdc4-4f72-459c-8b7a-8365259e6890",
            "sourceName": "UNDEFINED",
            "version": 1,
            "timestamp": 1536311396758
          },
          "period": 1,
          "periodUnit": "HOUR",
          "nextRun": "2018-09-07T10:09:56.758+0000",
          "lastRun": null,
          "lastRunStatus": "SUCCESS",
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
      "datasetId": "d3b75101-3902-45f4-8b93-a3f29489cddf",
      "derivative": false,
      "latestDataFlow": {
        "type": "MAIN_DATA_FLOW",
        "id": {
          "datasetId": "d3b75101-3902-45f4-8b93-a3f29489cddf",
          "sourceName": "UNDEFINED",
          "version": 1,
          "timestamp": 1535949004616
        },
        "dataIntegrationMeta": {
          "type": "MAIN_DATA_META",
          "mainArangoDBConfig": {
            "nodeCollection": "node_d3b75101-3902-45f4-8b93-a3f29489cddf_1_1535949004616",
            "relCollection": "rel_d3b75101-3902-45f4-8b93-a3f29489cddf_1_1535949004616",
            "graphName": "graph_d3b75101-3902-45f4-8b93-a3f29489cddf_1_1535949004616"
          },
          "mainHdfsFileConfig": {
            "mappedNodeFile": "/laniakea/asset/dataset/mapped/d3b75101-3902-45f4-8b93-a3f29489cddf/node_1_1535949004616.parquet",
            "mappedRelationFile": "/laniakea/asset/dataset/mapped/d3b75101-3902-45f4-8b93-a3f29489cddf/rel_1_1535949004616.parquet",
            "rawFolder": "/laniakea/asset/dataset/raw/d3b75101-3902-45f4-8b93-a3f29489cddf/1/1535949004616"
          },
          "dataSourceConfig": {
            "dataSourceType": "XLS",
            "id": "d3b75101-3902-45f4-8b93-a3f29489cddf",
            "hostName": "",
            "port": 3306,
            "username": "",
            "password": "",
            "databaseName": "",
            "filePath": null,
            "fileUrl": "http://satpolpp.jatengprov.go.id/2015/files/sample-sales-data.xls",
            "delimiter": "",
            "quoteCharacter": "",
            "escapeCharacter": "",
            "encoding": ""
          },
          "mappingConfig": {
            "id": "d3b75101-3902-45f4-8b93-a3f29489cddf",
            "dataSourceType": "XLS",
            "dataSourceConfigId": "d3b75101-3902-45f4-8b93-a3f29489cddf",
            "mappingScheme": "{}"
          }
        },
        "dataServingMeta": {
          "endpointId": "df48ace7-a123-4a2b-b905-7915d99bc89a",
          "asyncRestApi": true,
          "asyncRestApiConfig": {
            "id": "4c28d9cd-9234-4f09-8af0-a89e65d0ea29",
            "name": "4c28d9cd-9234-4f09-8af0-a89e65d0ea29",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 1,
            "basePrice": 0,
            "upstreamHost": "localhost:8080",
            "upstreamPath": "/v1/query/async/dataset/d3b75101-3902-45f4-8b93-a3f29489cddf",
            "downstreamPath": "/v1/query/async/dataset/df48ace7-a123-4a2b-b905-7915d99bc89a"
          },
          "syncRestApi": true,
          "syncRestApiConfig": {
            "id": "dd9bfdfb-ec7b-4e3d-ad8d-89acd9f7f054",
            "name": "dd9bfdfb-ec7b-4e3d-ad8d-89acd9f7f054",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 1,
            "basePrice": 0,
            "upstreamHost": "localhost:8080",
            "upstreamPath": "/v1/query/sync/dataset/d3b75101-3902-45f4-8b93-a3f29489cddf",
            "downstreamPath": "/v1/query/sync/dataset/df48ace7-a123-4a2b-b905-7915d99bc89a"
          },
          "webSocketApi": false,
          "webSocketApiConfig": null
        },
        "scheduledJob": {
          "dataIntegrationMetaTypes": "MAIN_DATA_META",
          "jobEventType": "CREATE",
          "dataFlowId": {
            "datasetId": "d3b75101-3902-45f4-8b93-a3f29489cddf",
            "sourceName": "UNDEFINED",
            "version": 1,
            "timestamp": 1535949004616
          },
          "period": 1,
          "periodUnit": "HOUR",
          "nextRun": "2018-09-03T05:30:04.616+0000",
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
      "datasetId": "fc7c8662-7a14-43b1-916e-966d0906f82f",
      "derivative": false,
      "latestDataFlow": {
        "type": "MAIN_DATA_FLOW",
        "id": {
          "datasetId": "fc7c8662-7a14-43b1-916e-966d0906f82f",
          "sourceName": "UNDEFINED",
          "version": 1,
          "timestamp": 1535885107201
        },
        "dataIntegrationMeta": {
          "type": "MAIN_DATA_META",
          "mainArangoDBConfig": {
            "nodeCollection": "node_fc7c8662-7a14-43b1-916e-966d0906f82f_1_1535885107201",
            "relCollection": "rel_fc7c8662-7a14-43b1-916e-966d0906f82f_1_1535885107201",
            "graphName": "graph_fc7c8662-7a14-43b1-916e-966d0906f82f_1_1535885107201"
          },
          "mainHdfsFileConfig": {
            "mappedNodeFile": "/laniakea/asset/dataset/mapped/fc7c8662-7a14-43b1-916e-966d0906f82f/node_1_1535885107201.parquet",
            "mappedRelationFile": "/laniakea/asset/dataset/mapped/fc7c8662-7a14-43b1-916e-966d0906f82f/rel_1_1535885107201.parquet",
            "rawFolder": "/laniakea/asset/dataset/raw/fc7c8662-7a14-43b1-916e-966d0906f82f/1/1535885107201"
          },
          "dataSourceConfig": {
            "dataSourceType": "CSV",
            "id": "fc7c8662-7a14-43b1-916e-966d0906f82f",
            "hostName": "",
            "port": 3306,
            "username": "",
            "password": "",
            "databaseName": "",
            "filePath": null,
            "fileUrl": "http://insight.dev.schoolwires.com/HelpAssets/C2Assets/C2Files/HalfHourParentTeacherConferenceSampleImportFile.csv",
            "delimiter": "",
            "quoteCharacter": "",
            "escapeCharacter": "",
            "encoding": ""
          },
          "mappingConfig": {
            "id": "fc7c8662-7a14-43b1-916e-966d0906f82f",
            "dataSourceType": "CSV",
            "dataSourceConfigId": "fc7c8662-7a14-43b1-916e-966d0906f82f",
            "mappingScheme": "{}"
          }
        },
        "dataServingMeta": {
          "endpointId": "f6ef7397-13ad-48d0-ac03-2be8a83541c5",
          "asyncRestApi": true,
          "asyncRestApiConfig": {
            "id": "d7b1d3d3-46d4-44ac-807c-c81f9a046372",
            "name": "d7b1d3d3-46d4-44ac-807c-c81f9a046372",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 5,
            "basePrice": 0,
            "upstreamHost": "localhost:8080",
            "upstreamPath": "/v1/query/async/dataset/fc7c8662-7a14-43b1-916e-966d0906f82f",
            "downstreamPath": "/v1/query/async/dataset/f6ef7397-13ad-48d0-ac03-2be8a83541c5"
          },
          "syncRestApi": true,
          "syncRestApiConfig": {
            "id": "1ee2d001-8666-495e-a7fc-213057adb834",
            "name": "1ee2d001-8666-495e-a7fc-213057adb834",
            "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3",
            "category": "free",
            "marginPrice": 5,
            "basePrice": 0,
            "upstreamHost": "localhost:8080",
            "upstreamPath": "/v1/query/sync/dataset/fc7c8662-7a14-43b1-916e-966d0906f82f",
            "downstreamPath": "/v1/query/sync/dataset/f6ef7397-13ad-48d0-ac03-2be8a83541c5"
          },
          "webSocketApi": false,
          "webSocketApiConfig": null
        },
        "scheduledJob": {
          "dataIntegrationMetaTypes": "MAIN_DATA_META",
          "jobEventType": "CREATE",
          "dataFlowId": {
            "datasetId": "fc7c8662-7a14-43b1-916e-966d0906f82f",
            "sourceName": "UNDEFINED",
            "version": 1,
            "timestamp": 1535885107201
          },
          "period": 1,
          "periodUnit": "HOUR",
          "nextRun": "2018-09-02T11:45:07.201+0000",
          "lastRun": null,
          "lastRunStatus": "PENDING",
          "lastRunDetail": null,
          "autoUpdate": true
        },
        "ownerId": "ca9fe20d-7581-4a5b-a00d-b2c34bd699d3"
      },
      "pricing": {
        "type": "PREMIUM",
        "marginPrice": 5,
        "basePrice": 0
      }
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