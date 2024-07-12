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


module.exports = {
    signInSchema,
    logInSchema
}