/**
 * @license
 * Copyright 2012 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

// goog.provide('Blockly.Blocks.colour');  // Deprecated
// goog.provide('Blockly.Constants.Character');

// goog.require('Blockly');
// goog.require('Blockly.Blocks');
// goog.require('Blockly.FieldDropdown');
// goog.require('Blockly.FieldLabel');
// goog.require('Blockly.FieldNumber');
// goog.require('Blockly.FieldVariable');

/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.Constants.Colour.HUE = 90;

Blockly.defineBlocksWithJsonArray([{
  "type": "start",
  "message0": "Start",
  "nextStatement": "Action",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "check",
  "message0": "Check %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_angle",
      "name": "CheckAngle",
      "angle": 90
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 20,
  "tooltip": "Checks if there is a wall at the specified direction",
  "helpUrl": ""
},
{
  "type": "turn_left",
  "message0": "Turn Left",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "turn_right",
  "message0": "Turn Rightt",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "move",
  "message0": "Move Forward",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "end",
  "message0": "End",
  "previousStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "special_ability",
  "message0": "SpEcIaL aBiLiTy",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "PEW pew",
  "helpUrl": ""
}]);  // END JSON EXTRACT (Do not delete this comment.)
