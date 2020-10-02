// function to generate markdown for README
function generateMarkdown(data) {
  
  let Badge = ''

  if (data.license === 'GPL v3') {

    Badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  
  }

  else if (data.license === 'MIT') {

    Badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  
  }
  else if (data.license === 'Mozilla') {

    Badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
 
  }

  else if (data.license === 'Unilicense') {

    Badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  
  }

  else if (data.license === 'WTFPL') {

    Badge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
 
  }    

  return `# ${data.title}

}

module.exports = generateMarkdown;
