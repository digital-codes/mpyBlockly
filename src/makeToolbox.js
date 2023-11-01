//const fs = import('fs');
import fs from 'fs'
import xml2js from 'xml-js'

import {BLOCKLY_TOOLBOX_XML} from "./assets/toolbox_standard.js"

import {CUSTOM_TOOLBOX_XML} from "./blocks/custom_toolbox.js"


const outputXmlPath = "./src/assets/full_toolbox.js"

const options = { compact: false, spaces: 2 };

const xml1jsObj = xml2js.xml2js(BLOCKLY_TOOLBOX_XML, options);
const xml2jsObj = xml2js.xml2js(CUSTOM_TOOLBOX_XML, options);

// Append the elements of xml2Obj to xml1Obj
xml1jsObj.elements[0].elements = xml1jsObj.elements[0].elements.concat(xml2jsObj.elements[0].elements);


const combinedXmlString = xml2js.js2xml(xml1jsObj, options)
const hdr = `
// this is the generated toolbox configuration.
// do not edit. instead, update custom modules
// in src/block/custom_toolbox.js
`
const jsContent = hdr + `export const full_toolbox = \`${combinedXmlString}\`;`;

fs.writeFileSync(outputXmlPath, jsContent, 'utf8');


