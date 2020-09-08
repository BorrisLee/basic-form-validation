// Validation Module
const Validate = () => {

  const elementList = [];

  // push in all input and textarea elements
  elementList.push(...document.querySelectorAll('input'));
  elementList.push(...document.querySelectorAll('textarea'));

  elementList.forEach(element => {

    if (element.nodeName === 'INPUT') {

      // type === email
      if (element.getAttribute('type') === 'email') {

        const emailRegex = /\b\w+@\w+\.\w+\b/;

        element.addEventListener('focusout', () => {

          // valid
          if (emailRegex.test(element.value)) {
            element.setCustomValidity('');
            document.getElementById('email-checkmark').style.visibility = 'visible';
            document.getElementById('email-exclamation').style.visibility = 'hidden';
            document.getElementById('email-error-message').style.visibility = 'hidden';
          }

          // invalid
          else {
            element.setCustomValidity('Whoops! That\'s an invalid email.');
            document.getElementById('email-checkmark').style.visibility = 'hidden';
            document.getElementById('email-exclamation').style.visibility = 'visible';
            document.getElementById('email-error-message').textContent = 'invalid email address';
            document.getElementById('email-error-message').style.visibility = 'visible';
          }

          // old code
          // (emailRegex.test(element.value)) ? element.setCustomValidity('') : element.setCustomValidity('Whoops! That\'s an invalid email.');

        });
      }

      // type === password
      else if (element.getAttribute('type') === 'password') {

        // original password
        if (element.getAttribute('id') === 'password') {

          const passwordRegex = /\b\w{6,14}\b/;

          element.addEventListener('focusout', () => {

            // valid
            if (passwordRegex.test(element.value)) {
              element.setCustomValidity('');
              document.getElementById('password-checkmark').style.visibility = 'visible';
              document.getElementById('password-exclamation').style.visibility = 'hidden';
              document.getElementById('password-error-message').style.visibility = 'hidden';
            }

            // invalid
            else {
              element.setCustomValidity('Password not secure.');
              document.getElementById('password-checkmark').style.visibility = 'hidden';
              document.getElementById('password-exclamation').style.visibility = 'visible';
              document.getElementById('password-error-message').textContent = 'invalid password';
              document.getElementById('password-error-message').style.visibility = 'visible';
            }

            // (passwordRegex.test(element.value)) ? element.setCustomValidity('') : element.setCustomValidity('Password not secure.');
          });
        }

        // confirm password
        else if (element.getAttribute('id') === 'password-confirm') {

          element.addEventListener('focusout', () => {

            // valid
            if (document.getElementById('password').value === document.getElementById('password-confirm').value) {
              element.setCustomValidity('');
              document.getElementById('password-confirm-checkmark').style.visibility = 'visible';
              document.getElementById('password-confirm-exclamation').style.visibility = 'hidden';
              document.getElementById('password-confirm-error-message').style.visibility = 'hidden';
            }

            // invalid
            else {
              element.setCustomValidity('Passwords do not match.');
              document.getElementById('password-confirm-checkmark').style.visibility = 'hidden';
              document.getElementById('password-confirm-exclamation').style.visibility = 'visible';
              document.getElementById('password-confirm-error-message').textContent = 'Passwords do not match';
              document.getElementById('password-confirm-error-message').style.visibility = 'visible';
            }

            // (document.getElementById('password').value === document.getElementById('password-confirm').value) ? element.setCustomValidity('') : element.setCustomValidity('Doesn\'t match the password above.');
          });
        }
      }

      // type === text
      else {

        // country
        if (element.getAttribute('id') === 'country') {

          const countryRegex = /\b[A-Za-z -]{4,}\b/;

          element.addEventListener('focusout', () => {

            // valid
            if (countryRegex.test(element.value)) {
              element.setCustomValidity('');
              document.getElementById('country-checkmark').style.visibility = 'visible';
              document.getElementById('country-exclamation').style.visibility = 'hidden';
              document.getElementById('country-error-message').style.visibility = 'hidden';
            }

            // invalid
            else {
              element.setCustomValidity('Not a valid country name.');
              document.getElementById('country-checkmark').style.visibility = 'hidden';
              document.getElementById('country-exclamation').style.visibility = 'visible';
              document.getElementById('country-error-message').textContent = 'Not a valid country name';
              document.getElementById('country-error-message').style.visibility = 'visible';
            }

            // (countryRegex.test(element.value)) ? element.setCustomValidity('') : element.setCustomValidity('Interesting! I\'ve never heard of that country before.');
          });
        }

        // postal code
        else if (element.getAttribute('id') === 'postal-code') {

          const postalCodeRegex = /\b[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d\b/;

          element.addEventListener('focusout', () => {

            // valid
            if (postalCodeRegex.test(element.value)) {
              element.setCustomValidity('');
              document.getElementById('postal-code-checkmark').style.visibility = 'visible';
              document.getElementById('postal-code-exclamation').style.visibility = 'hidden';
              document.getElementById('postal-code-error-message').style.visibility = 'hidden';
            }

            // invalid
            else {
              element.setCustomValidity('That\'s not a postal code.');
              document.getElementById('postal-code-checkmark').style.visibility = 'hidden';
              document.getElementById('postal-code-exclamation').style.visibility = 'visible';
              document.getElementById('postal-code-error-message').textContent = 'That\'s not a postal code.';
              document.getElementById('postal-code-error-message').style.visibility = 'visible';
            }

            // (postalCodeRegex.test(element.value)) ? element.setCustomValidity('') : element.setCustomValidity('Hey! Are you sure that\'s the right postal code?');
          });
        }

        // default
        else {
          console.log('Oops! Sorry I don\'t know how to validate this.');
        }
      }
    }

    else if (element.nodeName === 'TEXTAREA') {

      // validate textarea
      // console.log('textarea detected');
    }

    else {
      console.log('Woah! Some other worldly element detected. How did you end up here?');
    }
  });
}

export { Validate };