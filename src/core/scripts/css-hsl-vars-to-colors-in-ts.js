#!/usr/bin/env node

// Read more on shebang here:
// https://alexewerlof.medium.com/node-shebang-e1d4b02f731d

const fs = require('fs')
const readline = require('readline')

const inputFilePath = process.argv.at(2)
const outputFilePath = process.argv.at(3) ?? './colors.ts'

// Check if the output file exists
if (fs.existsSync(outputFilePath)) {
  // If the file exists, clear its contents
  fs.truncateSync(outputFilePath, 0)
} else {
  // If the file does not exist, create an empty file
  fs.writeFileSync(outputFilePath, '')
}

fs.appendFileSync(outputFilePath, 'const appColors = {\n')

// Create a read stream for the input file
const inputStream = fs.createReadStream(inputFilePath)

// Create an interface to read the file line by line
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
})

// Handle each line from the input file
rl.on('line', (line) => {
  if (containsCSSVariableDefinition(line)) {
    let { name, value } = extractCSSVariable(line)
    const camelName = toCamelCase(name)
    const twPropertyName = `tw${camelName.slice(0, 1).toUpperCase()}${camelName.slice(1)}`

    fs.appendFileSync(outputFilePath, `  ${camelName}: 'hsl(${value})',\n`)
    fs.appendFileSync(outputFilePath, `  ${twPropertyName}: 'hsl(var(--${name}) / <alpha-value>)',\n`)
  }
})

// Handle the end of the input file
rl.on('close', () => {
  fs.appendFileSync(outputFilePath, '}\n')
  fs.appendFileSync(outputFilePath, 'export { appColors }\n')
  console.log('All lines have been written to the output file.')
})

function containsCSSVariableDefinition(input) {
  input = input.trim()
  if (input.startsWith('//')) return false
  if (input.startsWith('/*')) return false
  // Regular expression to match CSS variable definitions
  const cssVariablePattern = /--[\w-]+\s*:\s*[^;]+;/

  // Test the input string against the pattern
  return cssVariablePattern.test(input)
}

function extractCSSVariable(input) {
  // Regular expression to capture CSS variable name and value
  const cssVariablePattern = /--([\w-]+)\s*:\s*([^;]+);/

  // Execute the pattern on the input string
  const match = input.match(cssVariablePattern)

  // If a match is found, return the variable name and value
  if (match) {
    const variableName = match[1].trim()
    const variableValue = match[2].trim()
    return { name: variableName, value: variableValue }
  }
  // If no match is found, return null
  return null
}

function toCamelCase(str) {
  return str
    .split(/[^a-zA-Z0-9]+/) // Split the string by any non-alphanumeric characters
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase() // Lowercase the first word
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter of subsequent words
    })
    .join('') // Join all words into a single string
}
