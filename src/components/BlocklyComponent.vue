<template>
    <div>
      <button @click="showBlocks">Blocks</button>
      <button @click="showCode">Python Code</button>
    </div>
    <div v-show="isBlocksVisible"  ref="blocklyDiv" style="height: 600px; width: 1000px;"></div>
    <textarea v-show="isCodeVisible" readonly style="height: 480px; width: 600px;">
      {{ pythonCode }}
    </textarea>    
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Blockly from 'blockly';
  // import 'blockly/python';
  import {pythonGenerator} from 'blockly/python';

  // toolbox, generated
  import {full_toolbox} from "../assets/full_toolbox"
  // add some custom colors
  Blockly.Msg["CUSTOM_HUE"] = 100

  // custom blocks
  import '../blocks/setup'; 
  import '../blocks/sensors'; // Import the sensor blocks  
  import '../blocks/leds'; 
  import '../blocks/matrix'; 
  import '../blocks/json'; 
  


  const blocklyDiv = ref(null);

  const isBlocksVisible = ref(true);
const isCodeVisible = ref(false);
const pythonCode = ref('');

const showBlocks = () => {
    console.log("Blocks")
  isBlocksVisible.value = true;
  isCodeVisible.value = false;
};

const showCode = () => {
    console.log("Code")
  isBlocksVisible.value = false;
  isCodeVisible.value = true;
  const workspace = Blockly.getMainWorkspace();
  pythonCode.value = pythonGenerator.workspaceToCode(workspace);
};
  
  // csutom xml in blocks/custom_toolbox


function ensureSetupBlock(workspace) {
  // Check if the setup block already exists in the workspace
  const setupBlocks = workspace.getBlocksByType('setup_block', false);
  
  if (setupBlocks.length === 0) {
    // If it doesn’t exist, create and add the setup block
    const setupBlock = workspace.newBlock('setup_block');
    setupBlock.initSvg();
    setupBlock.render();
    setupBlock.setDeletable(false);
        
    // Optionally, you can position the new block
    setupBlock.moveBy(20, 20);
  }
}

  onMounted(() => {
    // make sure to set local path to media. copy from node_modules
    const workspace = Blockly.inject(blocklyDiv.value, {
      toolbox: full_toolbox, //BLOCKLY_TOOLBOX_XML["standard"], //toolboxXML,
      media: "/media/"
    });
    ensureSetupBlock(workspace);

    // add matrix color stuff
    const mx = Blockly.Blocks['atom_matrix']
    console.log(mx)
    mx.onchange = function(changeEvent) {
      var colorField = this.getField('COLOR');
      var mxField = this.getField('MATRIX');
      if (!colorField.validator_) { // Check if validator is not already set
        colorField.setValidator(function(newColor) {
          // console.log("Color changed to:", newColor); // Your callback code here
          mxField.setCurrentColor(newColor)
          return newColor;
        });
      }
    };
  
    // Custom code for generating Python from blocks can go here
  });



  </script>
  
  <style>
  /* You can add styles here if necessary */
  </style>
  