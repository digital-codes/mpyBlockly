
// this is the generated toolbox configuration.
// do not edit. instead, update custom modules
// in src/block/custom_toolbox.js
export const full_toolbox = `<xml xmlns="https://developers.google.com/blockly/xml">
  <category name="Logic" colour="%{BKY_LOGIC_HUE}">
    <block type="controls_if"/>
    <block type="logic_compare"/>
    <block type="logic_operation"/>
    <block type="logic_negate"/>
    <block type="logic_boolean"/>
    <block type="logic_null" disabled="true"/>
    <block type="logic_ternary"/>
  </category>
  <category name="Loops" colour="%{BKY_LOOPS_HUE}">
    <block type="controls_repeat_ext">
      <value name="TIMES">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="controls_repeat" disabled="true"/>
    <block type="controls_whileUntil"/>
    <block type="controls_for">
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
      <value name="BY">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="controls_forEach"/>
    <block type="controls_flow_statements"/>
  </category>
  <category name="Math" colour="%{BKY_MATH_HUE}">
    <block type="math_number" gap="32">
      <field name="NUM">123</field>
    </block>
    <block type="math_arithmetic">
      <value name="A">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="B">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="math_single">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">9</field>
        </shadow>
      </value>
    </block>
    <block type="math_trig">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">45</field>
        </shadow>
      </value>
    </block>
    <block type="math_constant"/>
    <block type="math_number_property">
      <value name="NUMBER_TO_CHECK">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="math_round">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">3.1</field>
        </shadow>
      </value>
    </block>
    <block type="math_on_list"/>
    <block type="math_modulo">
      <value name="DIVIDEND">
        <shadow type="math_number">
          <field name="NUM">64</field>
        </shadow>
      </value>
      <value name="DIVISOR">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="math_constrain">
      <value name="VALUE">
        <shadow type="math_number">
          <field name="NUM">50</field>
        </shadow>
      </value>
      <value name="LOW">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="HIGH">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="math_random_int">
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="math_random_float"/>
  </category>
  <category name="Text" colour="%{BKY_TEXTS_HUE}">
    <block type="text"/>
    <block type="text_join"/>
    <block type="text_append">
      <value name="TEXT">
        <shadow type="text"/>
      </value>
    </block>
    <block type="text_length">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_isEmpty">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT"/>
        </shadow>
      </value>
    </block>
    <block type="text_indexOf">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">text</field>
        </block>
      </value>
      <value name="FIND">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_charAt">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">text</field>
        </block>
      </value>
    </block>
    <block type="text_getSubstring">
      <value name="STRING">
        <block type="variables_get">
          <field name="VAR">text</field>
        </block>
      </value>
    </block>
    <block type="text_changeCase">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_trim">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_count">
      <value name="SUB">
        <shadow type="text"/>
      </value>
      <value name="TEXT">
        <shadow type="text"/>
      </value>
    </block>
    <block type="text_replace">
      <value name="FROM">
        <shadow type="text"/>
      </value>
      <value name="TO">
        <shadow type="text"/>
      </value>
      <value name="TEXT">
        <shadow type="text"/>
      </value>
    </block>
    <block type="text_reverse">
      <value name="TEXT">
        <shadow type="text"/>
      </value>
    </block>
    <label text="Input/Output:" web-class="ioLabel"/>
    <block type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_prompt_ext">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
  </category>
  <category name="Lists" colour="%{BKY_LISTS_HUE}">
    <block type="lists_create_with">
      <mutation items="0"/>
    </block>
    <block type="lists_create_with"/>
    <block type="lists_repeat">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">5</field>
        </shadow>
      </value>
    </block>
    <block type="lists_length"/>
    <block type="lists_isEmpty"/>
    <block type="lists_indexOf">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">list</field>
        </block>
      </value>
    </block>
    <block type="lists_getIndex">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">list</field>
        </block>
      </value>
    </block>
    <block type="lists_setIndex">
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR">list</field>
        </block>
      </value>
    </block>
    <block type="lists_getSublist">
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR">list</field>
        </block>
      </value>
    </block>
    <block type="lists_split">
      <value name="DELIM">
        <shadow type="text">
          <field name="TEXT">,</field>
        </shadow>
      </value>
    </block>
    <block type="lists_sort"/>
    <block type="lists_reverse"/>
  </category>
  <category name="Colour" colour="%{BKY_COLOUR_HUE}">
    <block type="colour_picker"/>
    <block type="colour_random"/>
    <block type="colour_rgb">
      <value name="RED">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
      <value name="GREEN">
        <shadow type="math_number">
          <field name="NUM">50</field>
        </shadow>
      </value>
      <value name="BLUE">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="colour_blend">
      <value name="COLOUR1">
        <shadow type="colour_picker">
          <field name="COLOUR">#ff0000</field>
        </shadow>
      </value>
      <value name="COLOUR2">
        <shadow type="colour_picker">
          <field name="COLOUR">#3333ff</field>
        </shadow>
      </value>
      <value name="RATIO">
        <shadow type="math_number">
          <field name="NUM">0.5</field>
        </shadow>
      </value>
    </block>
  </category>
  <sep/>
  <category name="Variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"/>
  <category name="Functions" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"/>
  <sep/>
  <category name="Object" colour="%{BKY_CUSTOM_HUE}">
    <block type="map"/>
    <block type="map_pair"/>
  </category>
  <category name="Sensors" colour="%{BKY_CUSTOM_HUE}">
    <block type="sensor_read"/>
    <!-- Add more sensor blocks here -->
  </category>
  <category name="BuiltIn" colour="%{BKY_CUSTOM_HUE}">
    <block type="atom_matrix">
      <field name="FIELDNAME">0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0</field>
    </block>
  </category>
</xml>`;