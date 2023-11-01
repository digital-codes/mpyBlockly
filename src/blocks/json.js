import * as Blockly from 'blockly';
import { pythonGenerator } from 'blockly/python';

Blockly.defineBlocksWithJsonArray([
    {
        "type": "map",
        "message0": "dict %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "map_pair"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "output": null,
        "colour": 230,
        "tooltip": "tt",
        "helpUrl": "url"
      },
      {
        "type": "map_pair",
        "message0": "key %1 value %2",
        "args0": [
          {
            "type": "field_input",
            "name": "key",
            "check": "String"
          },
          {
            "type": "input_value",
            "name": "val"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
])

pythonGenerator.forBlock['map'] = function(block, generator) {
    console.log("map gen",block.id,block)
    var pairs = generator.statementToCode(block, 'map_pair');

    // function to remove trailing , and whitespace
    function cleanString(str) {
      // Remove whitespace from both ends of the string
      str = str.trim();
      
      // Find the last comma in the string
      var lastCommaIndex = str.lastIndexOf(",");
      
      // If a comma is found, remove it
      if (lastCommaIndex !== -1) {
        str = str.substring(0, lastCommaIndex) + str.substring(lastCommaIndex + 1);
      }
      
      return str;
    }
    pairs = cleanString(pairs)

    /* */
    // TODO: Assemble python into code variable.
    var code = `{ ${pairs} }`

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, pythonGenerator.ORDER_ATOMIC];
    //return code
  };
  
  pythonGenerator.forBlock['map_pair'] = function(block, generator) {
    console.log("pair gen")
    var key = block.getFieldValue('key')
    //var value = block.getFieldValue('val')
    var value = generator.valueToCode(block, 'val', pythonGenerator.ORDER_ATOMIC);
    
    console.log("k,v:",key,value)
    // TODO: Assemble python into code variable.
    var code = `"${key}":${value},`

    return code
  };
  
