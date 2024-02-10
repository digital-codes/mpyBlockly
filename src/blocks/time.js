import * as Blockly from 'blockly';
import {pythonGenerator} from 'blockly/python';

Blockly.defineBlocksWithJsonArray([
    {
      "type": "sensor_read",
      "message0": "read sensor %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SENSOR",
          "options": [["Temperature", "TEMP"], ["Humidity", "HUM"]]
        }
      ],
      "output": "Number",
      "colour": 230,
      "tooltip": "Read a sensor value",
      "helpUrl": ""
    }
    // Define more sensor blocks as needed
  ]);
  

  pythonGenerator['sensor_read'] = function(block) {
    const sensorType = block.getFieldValue('SENSOR');
    
    let code;
    if (sensorType === 'TEMP') {
      code = 'read_temperature_sensor()';
    } else if (sensorType === 'HUM') {
      code = 'read_humidity_sensor()';
    }
    
    return [code, pythonGenerator.ORDER_FUNCTION_CALL];
  };
