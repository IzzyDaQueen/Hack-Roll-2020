let serverip = '192.168.1.67:8088';

Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  //To change
  return code;
};

Blockly.JavaScript['check'] = function(block) {
  var angle_checkangle = block.getFieldValue('CheckAngle');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['turn_left'] = function(block) {
  var code;

  code = `fetch("http://${serverip}/${my_id['id']}/tl")\n`;

  return code;
};

Blockly.JavaScript['turn_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  code = `fetch("http://${serverip}/${my_id['id']}/tr")\n`;
  return code;
};

Blockly.JavaScript['move'] = function(block) {
  var code;

  code = `fetch("http://${serverip}/${my_id['id']}/mf")\n`;

  return code;
};

Blockly.JavaScript['end'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.JavaScript['special_ability'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};
