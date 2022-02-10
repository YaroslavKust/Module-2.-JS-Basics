const formatter = require('../tasks/task05_textFormatter');

const wrapTypes = formatter.WrapTypes;

const text = "Some text. This text contains few sentences. It can be formatted.";
const text_wrap_letter = "Some text. This text\n contains few senten\nces. It can be forma\ntted.";
const text_wrap_letter_3lines = "Some text. This text\n contains few senten\nces. It can be forma";
const text_wrap_word = "Some text. This text\ncontains few \nsentences. It can be\nformatted.";
const text_wrap_sentence = "Some text.\nThis text contains few sentences.\nIt can be formatted.";
const text_1line = "Some text. This text";


test('formatted text with letter-wrap',()=>{
    expect(formatter.textFormatter(text,20,100,wrapTypes.Letter)).toEqual(text_wrap_letter);
}); 

test('formatted text with letter-wrap and max lines count = 3',()=>{
    expect(formatter.textFormatter(text,20,3,wrapTypes.Letter)).toEqual(text_wrap_letter_3lines);
}); 

test('formatted text with word-wrap',()=>{
    expect(formatter.textFormatter(text,20,100,wrapTypes.Word)).toEqual(text_wrap_word);
}); 

test('formatted text with sentence-wrap',()=>{
    expect(formatter.textFormatter(text,20,100,wrapTypes.Sentence)).toEqual(text_wrap_sentence);
}); 

test('formatted text with no-wrap',()=>{
    expect(formatter.textFormatter(text,20,100,wrapTypes.NoWrap)).toEqual(text_1line);
}); 