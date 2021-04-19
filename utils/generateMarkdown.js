// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![mit](https://img.shields.io/badge/license-MIT-green)`
  } else if (license === 'APACHE 2.0') {
    return `![apache](https://img.shields.io/badge/license-APACHE%202.0-blue)`
  } else if (license === 'GPL 3.0') {
    return `[gpl](https://img.shields.io/badge/license-GPL%203.0-blue)`
  } else if (license === 'BSD 3') {
    return `[bsd](https://img.shields.io/badge/license-BSD%203-green)`
  } else if (license === 'None') {
    return ``
  };
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT license](https://www.apache.org/licenses)`
  } else if (license === 'APACHE 2.0') {
    return `[APACHE 2.0 license](https://www.apache.org/licenses)`
  } else if (license === 'GPL 3.0') {
    return `[GPL 3.0 license](https://www.apache.org/licenses)`
  } else if (license === 'BSD 3') {
    return `[BSD 3 license](https://www.apache.org/licenses)`
  } else if (license === 'None') {
    return ``
  };
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === 'APACHE 2.0') {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === 'GPL 3.0') {
    return ``
  } else if (license === 'BSD 3') {
    return `A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the project or its contributors to promote derived products without written consent.`
  } else if (license === 'None') {
    return ``
  };
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
${renderLicenseBadge(data.license)}

## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.dependencies}
\`\`\`
## Usage
${data.repoInfo}
## License
This project is licensed under the ${renderLicenseLink(data.license)}.

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}
## Tests
To run tests, run the following command:
\`\`\`
${data.testCommand}
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/caitbopp).
`;
}

module.exports = generateMarkdown;
