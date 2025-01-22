export const auth = {
    "/api/auth/login": {
        post: {
            tags: ["Auth"],
            description: "To login in to application",
            operationId: "login",
            "requestBody": {  
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/loginInput"
                        }
                    }
                }
            },
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