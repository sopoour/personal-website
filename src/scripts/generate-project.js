const fs = require('fs');
const readlineSync = require('readline-sync');
const path = require('path');

const urlRegex =
  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
const data = {};
data.id = readlineSync.question('Enter project id in format "name-of-project": ');
data.title = readlineSync.question('Enter project name: ');
data.description = readlineSync.question('Enter project description: ');
data.links = [];
data.tags = [];
const demoLink = readlineSync.question('Enter demo url: ', {
  limit: urlRegex,
  limitMessage: 'The demolink is not in an url format',
});
const githubLink = readlineSync.question('Enter github url: ', {
  limit: urlRegex,
  limitMessage: 'The githubLink is not in an url format',
});

if (demoLink.length > 0) data.links.push({ type: 'link', id: `${data.id}-demo`, link: demoLink });
if (githubLink.length > 0)
  data.links.push({ type: 'github', id: `${data.id}-github`, link: githubLink });

console.log(
  'Add tags by entering tech/tool/skill in the prompt and a label within quotation mark. Once done enter "done"',
);

readlineSync.promptCLLoop({
  tech: (label) => {
    if (label.length > 0) data.tags.push({ type: 'tech', label });
    console.log('tech tag with label ' + label + ' is added.');
  },
  tool: (label) => {
    if (label.length > 0) data.tags.push({ type: 'tool', label });
    console.log('tool tag with label ' + label + ' is added.');
  },
  skill: (label) => {
    if (label.length > 0) data.tags.push({ type: 'skill', label });
    console.log('skill tag with label ' + label + ' is added.');
  },
  done: () => {
    return true;
  },
});

// Specify the directory and file path
const directory = path.join(__dirname, '../../public/data/projects');
const filePath = path.join(directory, `${data.id}.json`);

// Ensure the output directory exists, create it if not
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

// Write data to JSON file
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

console.log(`JSON file has been created at: ${filePath}`);
