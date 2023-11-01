import * as Blockly from 'blockly';
import {pythonGenerator} from 'blockly/python';

Blockly.defineBlocksWithJsonArray([
  {
      "type": "atom_matrix",
      "message0": "bitmap",
      "message1": "color %1",
      "args1": [
        {
          "type": "field_colour",
          "name": "COLOR",
          "colour": "#ffffff"
        },
      ],
      "message2": "matrix %1",
      "args2":
      [
        {
              "type": "matrix_bitmap",
              "name": "MATRIX"
          }
      ],
      "nextStatement": null,
      "previousStatement": null,
      "colour": 160,
      "tooltip": "Custom function block",
      "helpUrl": ""
    }]);

 

  pythonGenerator['atom_matrix'] = function(block) {
    
    const color = block.getFieldValue('COLOR');
    const matrix = block.getFieldValue('MATRIX');
    var mxField = this.getField('MATRIX');

    //console.log("col,mat: ",color,matrix,mxField)
    const colorList = mxField.getColorList()
    console.log("colors: ",colorList)

    function hexToRgb(hex) {
      // Remove the hash at the start if it's there
      hex = hex.replace(/^#/, '');
  
      // Parse r, g, b values
      var bigint = parseInt(hex, 16);
      var r = (bigint >> 16) & 255;
      var g = (bigint >> 8) & 255;
      var b = bigint & 255;
  
      return [r, g, b];
    }
    let cmd = ""
    for (const c in colorList) {
      const cc = hexToRgb(colorList[c])
      console.log(colorList[c],cc)
      cmd += "rgbSet(" + String(c) + ", (" 
        + String(cc[0]) + "," + String(cc[1]) +  "," +  String(cc[2]) + "))\n" 
    }
    console.log(cmd)

    /*
    let code;
    code = `
# do something with leds
matrix = "${colorList}"
color = "${color}"
print("Matrix:",matrix) 
print("Color:",color) 
    `;
    */

    /*
    # do something with leds
    matrix = "0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0"
    print("Matrix:",matrix)

    */

    //return [code, pythonGenerator.ORDER_FUNCTION_CALL];
    return cmd
    
  };
