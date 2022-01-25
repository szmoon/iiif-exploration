#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# copy iiif files to build output
mkdir ./dist/using-internet-archive
cp -r ../using-internet-archive dist

mkdir ./dist/static-tiles
cp -r ../static-tiles dist

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:szmoon/iiif-exploration.git main:gh-pages
cd -

# reference: https://medium.com/swlh/deploy-vue-app-to-github-pages-2ada48d7397e