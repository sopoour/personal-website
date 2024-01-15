const fs = require('fs');
const readlineSync = require('readline-sync');
const path = require('path');

const urlRegex =
  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
let data = {
  date: {
    startDate: '',
    endDate: '',
    current: false,
  },
};
data.id = readlineSync.question('Enter experience id in format "nameofcompany": ');
data.title = readlineSync.question('Enter experience title (role): ');
data.companyName = readlineSync.question('Enter company name of experience: ');
data.companyLink = readlineSync.question('Enter company link of experience: ', {
  limit: [urlRegex, 'no url'],
  limitMessage: 'The link is not in an url format',
});
data.description = readlineSync.question('Enter experience description: ');
data.date.startDate = readlineSync.question('Enter start date in format "YYYY-MM-DD": ');
data.date.endDate = readlineSync.question('Enter end date in format "YYYY-MM-DD": ');
data.date.current = readlineSync.keyInYN('Is experience your current one?');
data.location = readlineSync.question('Enter location of experience: ');
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

// Specify the directory and file path
const directory = path.join(__dirname, '../../public/data/experiences');
const filePath = path.join(directory, `${data.id}.json`);

// Ensure the output directory exists, create it if not
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

// Write data to JSON file
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

console.log(`JSON file has been created at: ${filePath}`);
