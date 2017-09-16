#!/bin/sh

npm i --loglevel=warn
./node_modules/.bin/grunt release
(cd web && npm i --loglevel=warn && ./node_modules/.bin/au build --env prod)
rm -rf release
mkdir -p release
cp -r resources dist web package.json release
(cd release && npm install --production)
(cd release && node_modules/.bin/electron-packager . --platform=win32 --arch=x64)
