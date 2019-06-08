#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')

console.log('Creating from template')

const projectName = process.argv[2]

if (projectName){
  const dest = path.join(process.cwd(), projectName);
  fs.mkdir(dest)
  fs.copy(path.join(__dirname, './template'), dest)

  console.log(`Created project at "${dest}" 
  \n don't forget to "npm install"`)

  // + install dependencies
  // + update package.json

} else {
  throw('Destination not defined')
}

