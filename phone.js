

function phone_number_converter(number){
  let temp = number.split('')
  let e164_num = '+1'
  temp.forEach(function(digit){
    if(digit >= 0 && digit <= 9){
      e164_num += digit
    }
  })
  if (e164_num.length === 12) {
    console.log('Here\'s your number:', e164_num)
    return e164_num
  } else {
    console.error('Invalid number')
    return null
  }
}

// Example with valid format
phone_number_converter('281-771-9380')

// Example with invalid format
phone_number_converter('1abcd23-111')
