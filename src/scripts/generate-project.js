const readlineSync = require('readline-sync');
const { createFile, tags, urlRegex } = require('./utils');

const data = {};
data.id = readlineSync.question('Enter project id in format "name-of-project": ');
data.title = readlineSync.question('Enter project name: ');
data.description = readlineSync.question('Enter project description: ');
data.date = readlineSync.question('Enter project date in format "YYYY-MM-DD": ');
data.links = [];
const demoLink = readlineSync.question('Enter demo url: ', {
  limit: [urlRegex, 'no url'],
  limitMessage: 'The demolink is not in an url format',
});
const githubLink = readlineSync.question('Enter github url: ', {
  limit: [urlRegex, 'no url'],
  limitMessage: 'The githubLink is not in an url format',
});

if (demoLink !== 'no url') data.links.push({ type: 'link', id: `${data.id}-demo`, link: demoLink });
if (githubLink !== 'no url')
  data.links.push({ type: 'github', id: `${data.id}-github`, link: githubLink });

tags(data);

createFile('projects', data);
