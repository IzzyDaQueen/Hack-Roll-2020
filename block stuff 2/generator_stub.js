
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
  // TODO: Assemble JavaScript into code variable.
  var code = 'fetch(`https://${ip}/${id}/tr`);\n';
  return code;
};

Blockly.JavaScript['turn_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'fetch(`https://${ip}/${id}/tr`);\n';
  return code;
};

Blockly.JavaScript['move'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'fetch(`https://${ip}/${id}/`);\n';
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