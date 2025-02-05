#!/bin/zsh
webpack --config=./project/list/components/webpack.config.js --color
webpack --config=./project/list/frontend/webpack.config.js --color
webpack --config=./project/list/backend/webpack.config.js --color
node ./project/list/backend/server/index.js
