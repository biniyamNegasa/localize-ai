// this schema will be for validation using express-validation Schema Validation
const signInSchema = {
    email : {
        isEmail: {
            errorMessage : "Check your email"
        }
    },
    password : {
        notEmpty : {
            errorMessage: "Password Field is empty!"
        }
    },
    name: {
        notEmpty : {
    
            errorMessage : "Name cannot be empty"
        },
        
        
    }  
}
const logInSchema = {
    email : {
        isEmail: {
            errorMessage : "Check your email"
        }
    },
    password : {
        notEmpty : {
            errorMessage: "Password Field is empty!"
        }
    }
}


const chatMessageSchema = {
    chatMessage : {
        notEmpty :{
            errorMessage : "Chat Cannot be empty"
        }
    }
}


module.exports = {
    signInSchema,
    logInSchema,
    chatMessageSchema
}