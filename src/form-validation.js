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

        element.addEventListener('input', () => {

          (emailRegex.test(element.value)) ? element.setCustomValidity('') : element.setCustomValidity('Whoops! That\'s an invalid email.');
        });
      }

      // type === password
      else if (element.getAttribute('type') === 'password') {

        // original password
        if (element.getAttribute('id') === 'password') {

          const passwordRegex = /\b\w{6,14}\b/;

          element.addEventListener('input', () => {

            (passwordRegex.test(element.value)) ? element.setCustomValidity('') : element.setCustomValidity('Password not secure.');
          });
        }

        // confirm password
        else if (element.getAttribute('id') === 'password-confirm') {

          element.addEventListener('input', () => {
            (document.getElementById('password').value === document.getElementById('password-confirm').value) ? element.setCustomValidity('') : element.setCustomValidity('Doesn\'t match the password above.');
          });
        }
      }

      // type === text
      else {

        // country
        if (element.getAttribute('id') === 'country') {

          const countryRegex = /\b[A-Za-z -]{4,}\b/;

          element.addEventListener('input', () => {

            (countryRegex.test(element.value)) ? element.setCustomValidity('') : element.setCustomValidity('Interesting! I\'ve never heard of that country before.');
          });
        }

        // postal code
        else if (element.getAttribute('id') === 'postal-code') {

          const postalCodeRegex = /\b[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d\b/;

          element.addEventListener('input', () => {

            (postalCodeRegex.test(element.value)) ? element.setCustomValidity('') : element.setCustomValidity('Hey! Are you sure that\'s the right postal code?');
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