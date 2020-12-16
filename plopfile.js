module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'Enter component name: ',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.js.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/index.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.index.js.hbs',
      },
    ],
  });
};
