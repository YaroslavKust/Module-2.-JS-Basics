const dateFormatter = require('../tasks/task04_dateFormatter');

let strDate1 = "10022022";
let timestamp = 1644482773000;
let outputDate = "10-02-2022";
let outputDateWithMonth = "10 February 2022";

let strDate2 = "10.02.2022";
let inputTemplate = "DD.MM.YYYY";
let outputTemplate = "MM/DD/YYYY";
let outputDateByTemplate = "02/10/2022";

test('default format date from string',()=>{
    expect(dateFormatter.format(strDate1)).toEqual(outputDate);
});

test('default format from number',()=>{
    expect(dateFormatter.format(timestamp)).toEqual(outputDate);
});

test('format with month from number',()=>{
    expect(dateFormatter.dateWithMonthName(timestamp)).toEqual(outputDateWithMonth);
});

test('format with month from string',()=>{
    expect(dateFormatter.dateWithMonthName(strDate1)).toEqual(outputDateWithMonth);
});

test('format from custom input template',()=>{
    expect(dateFormatter.formatByTemplate(strDate2,inputTemplate)).toEqual(outputDateWithMonth);
});

test('custom output from custom input',()=>{
    expect(dateFormatter.formatByTemplate(strDate2,inputTemplate,outputTemplate)).toEqual(outputDateByTemplate);
});