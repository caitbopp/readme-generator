// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![mit](https://img.shields.io/badge/license-MIT-brightgreen)`
  } else if (license === 'APACHE 2.0') {
    return
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Same list as above but with license links
function renderLicenseLink(license) {
  if (license === 'None') {
    return ``
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Same list as above but with license statements
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
// add in readme template here



## license
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}


`;
}

module.exports = generateMarkdown;
