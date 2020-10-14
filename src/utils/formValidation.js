// Signup form validation
export const signupFormvalidate = values => {
    let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const errors = {};

    switch(true) {
        case !values.username:
            errors.username = 'Required'
          break;
        case specialChar.test(values.username):
            errors.username = 'username cannot contain special characters'
        case !values.password1:
            errors.password1 = 'Required'
          break;
        case !values.password2:
          errors.password2 = 'Required'
        case values.password1 !== values.password2:
            errors.password2 = 'passwords does not match' 
        break;
        
      }

    return errors;
}


// Signin form validation
export const loginFormvalidate = values => {
    let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const errors = {};

    switch(true) {
        case specialChar.test(values.username):
            errors.username = 'username cannot contain special characters'
        break;
      }

    return errors;
}


// chat input validator
export const chatInputvalidate = values => {
  const errors = {};

  switch(true) {
      case !values.message:
        errors.username = 'Required'
      break;
    }

  return errors;
}