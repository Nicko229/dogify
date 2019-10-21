import {
  AUTHENTICATED,
  USER,
  AUTHENTICATING,
  USERNAME,
  PASSWORD,
  ERRORS,
  // REGISTERUSERNAME,
  // REGISTEREMAIL,
  // REGISTERPASSWORD,
  // REGISTERCONFIRMPASSWORD,
  // REGISTERERRORS,
  // REGISTERRESETERRORS,
  // REGISTERCOGNITOERRORS
} from './types';

export let authenticated = () => {
  return {
    type: AUTHENTICATED,
    payload: true
  }
}

export let user = (user) => {
  return {
    type: USER,
    payload: user
  }
}

export let authenticating = () => {
  return {
    type: AUTHENTICATING,
    payload: false
  }
}

export let usernameState = (event) => {
  return {
    type: USERNAME,
    payload: event.target.value
  }
}

export let passwordState = (event) => {
  return {
    type: PASSWORD,
    payload: event.target.value
  }
}

export let errorsState = (event) => {
  return {
    type: ERRORS,
    payload: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }
}

// export let registerUsernameState = (event) => {
//   return {
//     type: REGISTERUSERNAME,
//     payload: event.target.value
//   }
// }

// export let registerEmailState = (event) => {
//   return {
//     type: REGISTEREMAIL,
//     payload: event.target.value
//   }
// }

// export let registerPasswordState = (event) => {
//   return {
//     type: REGISTERPASSWORD,
//     payload: event.target.value
//   }
// }

// export let registerConfirmPasswordState = (event) => {
//   return {
//     type: REGISTERCONFIRMPASSWORD,
//     payload: event.target.value
//   }
// }

// export let registerErrorsState = (errors, error) => {
//   return {
//     type: REGISTERERRORS,
//     payload: {
//       errors: {
//         ...errors,
//         ...error
//       }
//     }
//   }
// }

// export let registerResetErrorsState = (event) => {
//   return {
//     type: REGISTERRESETERRORS,
//     payload: {
//       errors: {
//         cognito: null,
//         blankfield: false,
//         passwordmatch: false
//       }
//     }
//   }
// }

// export let registerCognitoErrorsState = (errors, error) => {
//   return {
//     type: REGISTERCOGNITOERRORS,
//     payload: {
//       errors: {
//         ...errors,
//         cognito: error
//       }
//     }
//   }
// }