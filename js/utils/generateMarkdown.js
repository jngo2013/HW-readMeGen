function generateMarkdown(data) {
  console.log(data);
let newstring =`
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)
  # ${data.title}
  
  ## Table of Contents
  - Description
  - Installation
  - Usage
  - License
  - Contributions
  - Tests
  - Questions
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  ### Github
  ![Github Image](${data.image})  

  [${data.github}](https://github.com/${data.github})

  ### License
  This project is licensed under the MIT License - see the [LICENSE.md](https://choosealicense.com/licenses/mit/#) 
  `;
  return newstring;
}

module.exports = generateMarkdown;
