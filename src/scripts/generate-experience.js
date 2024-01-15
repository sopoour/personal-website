const readlineSync = require('readline-sync');

const { createFile, tags, urlRegex } = require('./utils');

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

tags(data);

createFile('experiences', data);
