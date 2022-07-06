let quotes = [
    {'author': 'Jim rohn', 
     'quote': 'المشي البطال ياما بهدل أبطال.'
    },
    {'author': 'Epictetus', 
     'quote': 'مش هقول كلام كبار عشان الكبار مابيتكلموش.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'الرجولة مقامات ماتتحطش على سيديهات'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'اوعي تعمل الغلط وتقول مضطر.. هو ينفع تلبس شتوي وتقول الدنيا حر.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'هات آخرك ومش هكلمك ولما تخلص هطلع أعلمك.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'ما تبصش يا عبيط دى جاية بالتقسيط.'
    },
];

function quotePrint(){
    let random = Math.floor( Math.random() * (quotes.length + 1) );
    document.getElementById("quoteOutput").innerHTML = `"${quotes[random]["quote"]}"`;
    document.getElementById("authorOutput").innerHTML = `--${quotes[random]['author']}`;
}
