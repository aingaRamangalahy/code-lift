#!/usr/bin/env node
const { program } = require('commander');
const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');
const Mustache = require('mustache');
const chalk = require("chalk");

const templateTypes = [
  "controller",
  "interface",
  "model",
  "repository",
  "route",
  "service",
];

const generateTemplate = (name, templateType) => {
  console.log(chalk.blue('generating', templateType, '...'))
  const templatePath = path.join(__dirname, 'templates', `template.${templateType}.mustache`);
    const outputDir = path.join(process.cwd(), `src/api/${name}`);

    // Read the template file
    const templateContent = fs.readFileSync(templatePath, 'utf8');

    // Render the template with the provided data
    const templateData = {
      fileName: name,
      className: name[0].toUpperCase() + name.slice(1)
    };
    
    const renderedContent = Mustache.render(templateContent, templateData);

    // Determine the output file path based on the template type and provided name
    const outputFile = path.join(outputDir, `${name}.${templateType}.ts`);

    // Write the rendered content to the output file
    fs.outputFileSync(outputFile, renderedContent);

    console.log(chalk.green(`Generated ${name} ${templateType}`));
}

program
  .command('api')
  .argument('<name>', 'the name of the template')
  .option('-t, --type <type>', 'Specify the template type')
  .action((name, options) => {
    const templateType = options.type
    console.log('got type', templateType)
    if (templateType) {
      generateTemplate(name, templateType)
    } else {
      for(const type of templateTypes) {
        generateTemplate(name, type)
      }
    }
  });

program.parse(process.argv);

