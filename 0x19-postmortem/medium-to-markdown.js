const mediumToMarkdown = require('medium-to-markdown');

mediumToMarkdown.convertFromUrl('https://medium.com/@dintonharold/incident-report-post-mortem-for-web-application-downtime-due-to-database-malfunction-5ec6b4908af7')
  .then(function (markdown) {
    console.log(markdown); //= > Markdown content of medium post
  });
