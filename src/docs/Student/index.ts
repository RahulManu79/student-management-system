const student = {
    "/api/student/list-tasks/{studentId}": {
        "get": {
            "tags": ["Student"],
            "description": "To list tasks assigned to a student by their ID",
            "operationId": "listTasks",
            "parameters": [
                {
                    "name": "studentId",
                    "in": "path",
                    "required": true,
                    "description": "The ID of the student",
                    "schema": {
                        "type": "string",
                        "example": "64b7c2a334f97d2e8b123456"
                    }
                },
                {
                    name: "page",
                    in: "query",
                    type: "integer",
                    required: true,
                },
                {
                    name: "limit",
                    in: "query",
                    type: "integer",
                    required: true,
                },
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            responses: {
                201: {
                    description: "",
                },
                500: {
                    description: "Server error",
                },
            },
        },
    },
    "/api/student/view-tasks/{studentId}/{taskId}": {
        "get": {
            "tags": ["Student"],
            "description": "To view tasks assigned to a student by their ID",
            "operationId": "viewTasks",
            "parameters": [
                {
                    "name": "studentId",
                    "in": "path",
                    "required": true,
                    "description": "The ID of the student",
                    "schema": {
                        "type": "string",
                        "example": "64b7c2a334f97d2e8b123456"
                    }
                },
                {
                    "name": "taskId",
                    "in": "path",
                    "required": true,
                    "description": "The ID of the student",
                    "schema": {
                        "type": "string",
                        "example": "64b7c2a334f97d2e8b123456"
                    }
                }
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            responses: {
                201: {
                    description: "",
                },
                500: {
                    description: "Server error",
                },
            },
        },
    },
    "/api/student/update-tasks-status": {
        "put": {
            "tags": ["Student"],
            "description": "Update the status of a specific task assigned to a student",
            "operationId": "updateTaskStatus",
            "parameters": [],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/updateTaskStatus"
                        }
                    }
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            responses: {
                201: {
                    description: "",
                },
                500: {
                    description: "Server error",
                },
            },
        },
    },
}

export default student