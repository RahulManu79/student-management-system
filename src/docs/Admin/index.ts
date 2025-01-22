export const admin = {
    "/api/admin/create-student": {
        "post": {
            "tags": ["Admin"],
            "description": "to create new student",
            "operationId": "createStudent",
            "parameters": [],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/createStudent"
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
    "/api/admin/assign-task": {
        "post": {
            "tags": ["Admin"],
            "description": "to create and assign tasks to students",
            "operationId": "assignTask",
            "parameters": [],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/assignTask"
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
    }
}

