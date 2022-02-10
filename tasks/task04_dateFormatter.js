const dateFormatter = {
    months: [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ],

    getDateFromNumber: function(numDate){
        let year, month, day;

        let fullDate = new Date(numDate);
        year = fullDate.getFullYear();

        month = fullDate.getMonth() + 1;
        if(month < 10)
            month = '0' + month;
        
        day = fullDate.getDate();
        if(day < 10)
            day = '0' + day;
        
        return [year, month, day];
    },

    format: function(date){
        let year, month, day;
        if(typeof date == 'number'){
            [year, month, day] = this.getDateFromNumber(date);

            let strDate = day + '-' + month + '-' + year;
            return strDate;
        }
        else if(typeof date == 'string'){
            day = date.slice(0,2);
            month = date.slice(2,4);
            year = date.slice(4,8);
            dateFormat = day + '-' + month + '-' + year;
            return dateFormat;
        }
    },

    dateWithMonthName: function(date){
        let day, month, year;
        if(typeof date == 'string'){
            day = date.slice(0,2);
            month = date.slice(2,4);
            year = date.slice(4,8);
        }
        else if(typeof date == 'number'){
            [year, month, day] = this.getDateFromNumber(date);
        }
            let dateFormat = day + ' ' + this.months[parseInt(month) - 1] + ' ' + year;
            return dateFormat;
    },

    formatByTemplate: function(date, inputFormat, outputFormat){
        let day, month, year, yearpos, monthpos, daypos;

        if(outputFormat == undefined)
            outputFormat = "DD month YYYY";

        yearpos = inputFormat.indexOf('YYYY');
        if(yearpos == -1)
            year = '0000';
        else{
            year = date.slice(yearpos, yearpos + 4);
        }

        monthpos = inputFormat.indexOf('MM');
        if(monthpos == -1)
            month = '01';
        else{
            month = date.slice(monthpos, monthpos + 2);
        }
        
        daypos = inputFormat.indexOf('DD');
        if(daypos == -1)
            day = '01';
        else{
            day = date.slice(daypos, daypos + 2);
        }
        
        let result = outputFormat;

        if(outputFormat.includes('YYYY'))
            result = result.replace('YYYY', year);

        if(outputFormat.includes('MM')){
            result = result.replace('MM', month);
        }
        else if(outputFormat.includes('month')){
            result = result.replace('month', this.months[month - 1]);
        }

        if(outputFormat.includes('DD'))
            result = result.replace('DD', day);

        return result;
    }
}

module.exports = dateFormatter;