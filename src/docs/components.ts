const { any } = require("joi");
const { format } = require("path");

module.exports = {
  components: {
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "in": "header",
        "name": "Authorization",
        "description": "Bearer token to access these API endpoints",
        "scheme": "bearer"
      }
    },

    schemas: {

      loginInput: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "User email ID",
            example: "somthing@somthing.com",
          },
          password: {
            type: "string",
            description: "",
          },
        },
      },

      createStudent : {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "User email ID",
            example: "somthing@somthing.com",
          },
          name: {
            type: "string",
            description: "",
          },
          department: {
            type: "string",
            description: "",
          },
          password: {
            type: "string",
            description: "",
          },
        },
      },

      assignTask : {
        type: "object",
        properties: {

          title: {
            type: "string",
            description: "",
          },
          assignedTo: {
            type: "string",
            description: "",
          },
          dueDate: {
            type: "string",
            format:'date',
            description: "",
          },
        },
      },

      updateTaskStatus: {
        type: "object",
        properties: {
          taskId: {
            type: "string",
            description: "",
            example: "64b7c2a334f97d2e8b654321"
          },
          studentId: {
            type: "string",
            description: "",
            example: "64b7c2a334f97d2e8b654321"
          },
          status: {
            type: "string",
            description: "",
            enum: ["pending", "overdue", "completed"],
            example: "completed"
          }
        },
        required: ["taskId", "status","studentId"]
      } 


      
    },
  },
};
