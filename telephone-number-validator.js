function telephoneCheck(str) {

  const regexPattern = /^(1 ?)?( ?\([0-9]{3}\) ?|[0-9]{3})([0-9]{3}|-[0-9]{3}-| [0-9]{3} |[0-9]{3}-)[0-9]{4}$/

  if(regexPattern.test(str)){
    return true
  }

  return false;
}