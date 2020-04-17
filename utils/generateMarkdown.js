function generateMarkdown(data) {
  console.log(data);
let newstring =`
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ### Email
  ${data.email}
  `;
  return newstring;
}

module.exports = generateMarkdown;
