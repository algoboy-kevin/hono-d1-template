import { type OpenAPIHono } from '@hono/zod-openapi';

export const setupSwagger = (app: OpenAPIHono) => {
//   app.openAPIRegistry.registerComponent('securitySchemes', 'Bearer', {
//     type: 'http',
//     scheme: 'bearer',
//   });

  app.openAPIRegistry.registerComponent('securitySchemes', 'secret_key', {
    type: 'apiKey',
    name: 'secret_key',
    in: 'header',
  });

//   app.openAPIRegistry.registerComponent('securitySchemes', 'app-pub-key', {
//     type: 'apiKey',
//     name: 'app-pub-key',
//     in: 'header',
//   });

  app.doc('/doc', {
    info: {
      title: 'Hono D1 API',
      version: 'v1',
    },
    openapi: '3.1.0',
  });
};
