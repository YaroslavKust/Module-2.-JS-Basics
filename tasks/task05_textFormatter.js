const WrapTypes = Object.freeze({
    Letter: Symbol("letter"),
    Word: Symbol("word"),
    Sentence: Symbol("sentence"),
    NoWrap: Symbol("noFormat")
});

function textFormatter(text, maxLineLength, maxLines, formatType){
    let formattedText = '';

    if(formatType == WrapTypes.NoWrap){
        if(maxLineLength == undefined)
            maxLineLength = text.length;
        formattedText = text.slice(0, maxLineLength);
        return formattedText;
    }

    if(maxLineLength == undefined)
            maxLineLength = 20;

    let lines = [];

    if(formatType == WrapTypes.Letter){
        let pos = 0;
        while(pos < text.length){
            lines.push(text.slice(pos, pos + maxLineLength));
            pos += maxLineLength;
        }
    }

    if(formatType == WrapTypes.Word){
        let words = text.split(' ');
        let line = '';
        words.forEach((word)=>{
            if(line.length + word.length > maxLineLength){
                lines.push(line);
                line = '';
            }
            if(line.length + word.length == maxLineLength)
                line = line.concat(word);
            else
                line = line.concat(word + ' ');
        });
        line = line.slice(0, -1);
        lines.push(line);    
    }

    if(formatType == WrapTypes.Sentence){
        let sentences = text.split('.');
        let line = '';
        sentences.forEach((sentence)=>{
            if(line.length + sentence.length > maxLineLength){
                lines.push(line);
                sentence = sentence.trim();
                line = '';
            }
            line = line.concat(sentence + '.');
        });

        line = line.slice(0, -1);
        lines.push(line);
    }

    if(maxLines != undefined && lines.length > maxLines)
        lines = lines.slice(0, maxLines);
    formattedText = lines.join('\n');

    return formattedText;
}

module.exports = {WrapTypes, textFormatter};