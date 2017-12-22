# num_converter
A simple phone number converter

This is a simple library for converting phone numbers entered as strings into E.164 format

The phone_number_converter() method takes one argument (a phone number in string format)
and converts it to a US E.164 format number ('+1' is added in front of the number, and all spaces are removed)

This method will also filter out invalid characters (it only allows for the numbers from 0 to 9) and will return null if you enter in a bogus number, such as '1234abcd'.

It will also return null and log('invalid number') if the input is not exactly 12 characters in length. So, the method expects a 3-digit area code, and a 7-digit phone number, in addition to the  '+1'.


