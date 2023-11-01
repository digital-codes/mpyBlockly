
// colors are defined in Blockly.Msg, without the leading BKY_
// can be added in onMounted
export const CUSTOM_TOOLBOX_XML = `
<xml xmlns="http://www.w3.org/1999/xhtml">
  <sep></sep>
  <category name="Object" colour="%{BKY_CUSTOM_HUE}">
    <block type="map"></block>
    <block type="map_pair"></block>
  </category>
  <category name="Sensors" colour="%{BKY_CUSTOM_HUE}">
    <block type="sensor_read"></block>
    <!-- Add more sensor blocks here -->
  </category>
  <category name="BuiltIn" colour="%{BKY_CUSTOM_HUE}">
    <block type="atom_matrix">
      <field name="FIELDNAME">0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0</field>
      </block>
  </category>
</xml>
`
