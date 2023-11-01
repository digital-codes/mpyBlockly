import * as Blockly from 'blockly';
import {pythonGenerator} from 'blockly/python';

// load raw python code
import pySetup from '../assets/py/blocks/setup.py?raw'
console.log("Setup:",pySetup)

// Define the setup block
Blockly.defineBlocksWithJsonArray([
  {
    "type": "setup_block",
    "message0": "Setup",
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Setup block for necessary imports and initialization",
    "helpUrl": ""
  }
]);

// Define the Python generator for the setup block
pythonGenerator['setup_block'] = function(block) {
  return pySetup
};


