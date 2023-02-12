# Homework Week 9
## Project-README-Generator

### User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

### Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
### Work Description
I first looked through the criteria of what exact requirements needed to be met and then I planned what the layout of what my markdown file would look like. I next looked at what had been provided to start from and wrote the questions I would be asking the console. I then used npm init and npm install inquirer to install the needed packages to make the console prompts. I then set the questions using the inquirer package to write into the console and collect response from user. I then exported that response to the generateMarkdown.js file and sorted data into correct positions to make a useable and readable Markdown file. I also wrote functions to add a shield and link for the license that the user selects from a list added in from the inquirer package. I exported the final Markdown text back into the index.js file to be written into a README.md file of the name the user inputs.

I had a few trials and errors trying to export and input data between the two JavaScript files but after playing around with the response array sent from the inquirer function I was able to transfer the data easily and without failure.

### Link to Tutorial Video
[Tutorial Video for README generator](https://drive.google.com/file/d/1cO798tf2ILP1Y_plhfxkb03s785l0OPs/view?usp=sharing)

![Project README Generator](./Assets/Project%209%20Screenshot.png)

---
Lucien Haines UADL 2023