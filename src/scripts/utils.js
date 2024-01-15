const path = require('path');
const fs = require('fs');
const readlineSync = require('readline-sync');

const urlRegex =
  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

const tags = (data) => {
  data.tags = [];

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
};

const createFile = (fileFolder, data) => {
  // Specify the directory and file path
  const directory = path.join(__dirname, `../../public/data/${fileFolder}`);
  const filePath = path.join(directory, `${data.id}.json`);

  // Ensure the output directory exists, create it if not
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  // Write data to JSON file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  console.log(`JSON file has been created at: ${filePath}`);
};

module.exports = { urlRegex, tags, createFile };
