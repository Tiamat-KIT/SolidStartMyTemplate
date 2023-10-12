export default function(
    /** @type{import('plop').NodePlopAPI} */
    plop
  ) {
    plop.setGenerator('Page', {
      description: 'Generate Page Component',
      prompt: [
        {
          type: 'input',
          name: 'name',
          message: 'ComponentName Please',
        },
      ],
      actions: [
        {
          type: 'add',
          path: './src/routes/{{name}}.tsx',
          templateFile: './src/templates/Page-Component.tsx.hbs',
        },
      ],
    }),
    plop.setGenerator('Component', {
      description: 'Generate New Component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'ComponentName Please',
        },
      ],
      actions: [
        {
          type: 'add',
          path: './src/components/{{name}}.tsx',
          templateFile: './src/templates/Duty-Component.tsx.hbs',
        },
      ],
    });
  }