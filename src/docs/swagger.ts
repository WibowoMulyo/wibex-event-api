import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];
const doc = {
  info: {
    version: "1.0.0",
    title: "Wibex Event API",
    description: "API documentation for Wibex Event",
  },
  servers: [
    {
      url: "http://localhost:5000/api",
      description: "Development Server",
    },
    {
      url: "https://wibex-event-api.vercel.app/api",
      description: "Production Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      LoginRequest: {
        identifier: "wibowooo",
        password: "pass",
      },
    },
  },
};

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
