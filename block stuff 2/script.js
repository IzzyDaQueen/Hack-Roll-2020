let blocklyArea = document.getElementById('blocklyArea');
let blocklyDiv = document.getElementById('blocklyDiv');
let workspace = Blockly.inject(blocklyDiv, {
  toolbox: document.getElementById('toolbox')
});
let onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  let element = blocklyArea;
  let x = 0;
  let y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);
let my_id = {};
async function runcode() {
  let serverip = 'http://192.168.1.67:8088'; //SERVER IP HERE
  let id = 0;

  try {
    let idfetch = await fetch(`${serverip}/assign`);
    console.log(idfetch);
    let idjson = await idfetch.json();
    console.log(idjson);
    my_id['id'] = idjson.Id;
    console.log(my_id);
  } catch (e) {
    console.log(e);
  }

  //CHANGE IP HERE
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP =
    'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
  await Blockly.JavaScript.addReservedWords('code');
  let code = await Blockly.JavaScript.workspaceToCode(workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  //fetch(`https://${ip}/${id}/`)
  fetch(`${serverip}/${id}/restart`);
  try {
    await eval(code);
  } catch (e) {
    await alert(e);
  }
}
