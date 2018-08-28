// {
//   forEdit !== null && (
//     <div>
//       <div className="title is-size-5 is-text-grey fw400">
//         {forEdit.display_name}
//       </div>
//       {
//         forEdit.columns !== undefined && (
//           forEdit.columns.map((col, index) => (
//             <div className="block mt2" key={index}>
//               <div className="control-label fw500 " htmlFor="input">
//                 {col.display_name}
//               </div>
//               <p className="mt0h fw300">
//                 {col.description}
//               </p>
//               <Select
//                 className="field multi-field"
//                 labelClassName="label"
//                 value={col.value.map(i => (
//                   {
//                     label: `${i.columnName}`,
//                     value: i.columnName
//                   }))
//                 }
//                 multi
//               />
//               {/* error={(error && error[`${param.name}`]) || ''}
//               touched={(touched && touched[`${param.name}`]) || false} */}
//             </div>))
//         )
//       }
//       {
//         forEdit.input !== undefined && (
//           forEdit.input.map((inp, index) => (
//             <div className="block mt2" key={index}>
//               <div className="control-label fw500 " htmlFor="input">
//                 {inp.display_name}
//               </div>
//               <p className="mt0h fw300">
//                 {inp.description}
//               </p>
//               <Creatable
//                 allowCreate={true} // eslint-disable-line
//                 className="field multi-field white-color"
//                 labelClassName="label"
//                 value={inp.tempValue ? inp.tempValue : []}
//                 options={optionsForInput.map(opt => (
//                   { label: opt.columnName, value: opt.columnName }
//                 ))}
//                 onChange={(e) => this.handleMulti(e, inp.name, forEdit.id)}
//                 multi
//               />
//               {/* error={(error && error[`${param.name}`]) || ''}
//               touched={(touched && touched[`${param.name}`]) || false} */}
//             </div>))
//         )
//       }
//       {
//         forEdit.output !== undefined && (
//           forEdit.output.map((outp, index) => (
//             <div className="block mt2" key={index}>
//               <div className="control-label fw500 " htmlFor="input">
//                 {outp.display_name}
//               </div>
//               <p className="mt0h fw300">
//                 {outp.description}
//               </p>
//               <Input
//                 name={outp.name}
//                 value={outp.value}
//                 type="text"
//                 className="pl0"
//                 onChange={this.handleOnChangeForm}
//                 error={(error && error[`${outp.name}`]) || ''}
//                 touched={(touched && touched[`${outp.name}`]) || false}
//               />
//               <i className="bar" />
//             </div>))
//         )
//       }
//       {
//         forEdit.params.map((param, index) => (
//           <div className="block mt2" key={index}>
//             <div className="control-label fw500 " htmlFor="input">
//               {param.display_name}
//             </div>
//             <p className="mt0h fw300">
//               {param.description}
//             </p>
//             {
//               (param.value === true || param.value === false || typeof param.options === 'object') ? ( // eslint-disable-line
//                 <Select
//                   name={param.name}
//                   className="field multi-field"
//                   labelClassName="label"
//                   value={{ label: `${param.value}`, value: param.value }}
//                   options={param.options !== undefined ? (param.options.map(opt => (
//                     {
//                       label: `${opt}`,
//                       value: opt,
//                       name: param.name,
//                       id: forEdit.id,
//                       type: 'params'
//                     }))) : null
//                   }
//                   searchable
//                   deleteRemoves
//                   backspaceRemoves
//                   simpleValue
//                   onChange={(e) => this.handleSelect(e)}
//                   error={modelStatus === 'None' && ((error && error[`${param.name}`]) || '')}
//                   touched={modelStatus === 'None' && ((touched && touched[`${param.name}`]) || false)}
//                 />
//               ) : (typeof param.value === 'object' ? (
//                 <Creatable
//                   allowCreate={true} // eslint-disable-line
//                   className="field multi-field white-color"
//                   labelClassName="label"
//                   value={param.tempValue ? param.tempValue : []}
//                   options={datasetInput.map(inp => (
//                     { label: inp.columnName, value: inp.columnName, name: param.name }
//                   ))}
//                   onChange={(e) => this.handleMulti(e, param.name, forEdit.id)}
//                   multi
//                 />
//               ) : (
//                 <div>
//                   <Input
//                     name={param.name}
//                     value={`${param.value}`}
//                     type="text"
//                     className="pl0"
//                     onChange={(e) => this.handleOnChangeForm(e, typeof param.value, forEdit.id)}
//                     error={modelStatus === 'None' && ((error && error[`${param.name}`]) || '')}
//                     touched={modelStatus === 'None' && ((touched && touched[`${param.name}`]) || false)}
//                   />
//                   <i className="bar" />
//                 </div>
//               )
//               )
//             }
//           </div>))
//       }
//     </div>
//   )
// }
module.exports = {
  Transformator: 
    [
      {
        "name" : "MinMaxScaler",
        "params" :
          [{
            "name" : "min", // belom
            "type" : "float",
            "default" : 0.0,
            "value" : null,
            "options" : "any",
            "notes" : "minimum value"
          },
          {
            "name" : "max", // belom
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