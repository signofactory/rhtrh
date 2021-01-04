
echo 'Removing previous build...'
rm -rf dist/*
rm export.zip

echo 'Recreating folders...'
mkdir -p dist
mkdir -p dist/js

echo 'Copying other js files...'
cp src/js/main.js dist/js
cp src/js/background.js dist/js

echo 'Copying images...'
cp -r src/images dist/

echo 'Copying popup...'
cp -r src/popup dist/

echo 'Copying manifest...'
cp -r manifest.json dist/

echo 'Bundling script...'
webpack --config webpack.config.js

echo 'Creating zip folder...'
zip -r export.zip dist

echo 'Cleaning up...'

echo 'Completed!'