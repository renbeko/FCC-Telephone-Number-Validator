function telephoneCheck(str) {
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gi;
    return regex.test(str);
  }

  // test 
    console.log(telephoneCheck("555-555-5555"));
    console.log(telephoneCheck("(555)555-5555"));
    console.log(telephoneCheck("(555) 555-5555"));
    console.log(telephoneCheck("555 555 5555"));
    console.log(telephoneCheck("5555555555"));
    console.log(telephoneCheck("1 555 555 5555"));