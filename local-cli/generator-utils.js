/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

var fs = require('fs');
var path = require('path');

function copyAndReplace(src, dest, replacements) {
  if (fs.lstatSync(src).isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
  } else {
    var content = fs.readFileSync(src, 'utf8');
    Object.keys(replacements).forEach(function(regex) {
      content = content.replace(new RegExp(regex, 'gm'), replacements[regex]);
    });
    fs.writeFileSync(dest, content);
  }
}

function walk(current) {
  if (!fs.lstatSync(current).isDirectory()) {
    return [current];
  }

  var files = fs.readdirSync(current).map(function(child) {
    child = path.join(current, child);
    return walk(child);
  });
  return [].concat.apply([current], files);
}

module.exports = {
  copyAndReplace: copyAndReplace,
  walk: walk
};
