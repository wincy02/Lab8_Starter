// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// test for valid phone numbers
test('valid phone number', () => {
    expect(functions.isPhoneNumber('(858)789-1324)')).toBe(true);
});
test('valid phone number', () => {
    expect(functions.isPhoneNumber('(400) 321-4324)')).toBe(true);
});
test('invalid phone number: w/o -', () => {
    expect(functions.isPhoneNumber('(858)7891324)')).toBe(false);
});
test('invalid phone number: incorrect format', () => {
    expect(functions.isPhoneNumber('8561324')).toBe(false);
});
  


// test for valid emails
test('valid email', () => {
    expect(functions.isEmail('kjlskdjf@hotmail.com')).toBe(true);
});
test('valid email', () => {
    expect(functions.isEmail('a@gmail.com')).toBe(true);
});
test('invalid email: missing @ ', () => {
    expect(functions.isEmail('abcdefg.com')).toBe(false);
});
test('invalid email: incorrect TLD of email address ', () => {
    expect(functions.isEmail('abcd@efghijk.m')).toBe(false);
});



//test for password
test('valid password',() =>{
    expect(functions.isStrongPassword('a_598746dhgjgk')).toBe(true);

});
test('valid password',() =>{
    expect(functions.isStrongPassword('kpoeuyr_5697841')).toBe(true);

});
test('invalid password: more than 15 characters',() =>{
    expect(functions.isStrongPassword('?2598_lkjhslhg_aslieoyurieob')).toBe(false);

});
test('invalid password: numbers only',() =>{
    expect(functions.isStrongPassword('12398765')).toBe(false);

});


// test for date
test('valid date',() =>{
    expect(functions.isDate('05/28/2023')).toBe(true);

});
test('valid date',() =>{
    expect(functions.isDate('5/9/2023')).toBe(true);

});
test('invalid date: missing / ',() =>{
    expect(functions.isDate('112023')).toBe(false);

});
test('invalid date: two digits long YYYY',() =>{
    expect(functions.isDate('05/28/23')).toBe(false);

});


//test for hexcolor
test('valid hex code', () =>{
    expect(functions.isHexColor('#d00')).toBe(true);
});
test('valid hex code', () =>{
    expect(functions.isHexColor('#751')).toBe(true);
});
test('invalid hex code: more than 6 characters', () =>{
    expect(functions.isHexColor('#dfghj123557')).toBe(false);
});
test('invalid hex code: missing # and 2 characters only', () =>{
    expect(functions.isHexColor('25')).toBe(false);
});

  
