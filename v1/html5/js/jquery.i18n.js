(function(gt){$.i18n=function(n,i){var t=i||$.i18n.lang;return this.i18n[t]&&this.i18n[t].strings&&this.i18n[t].strings[n]||n},gt.gettext=$.i18n,$.i18n.setLocale=function(n){$.i18n.lang=n},$.i18n.getLocale=function(){return $.i18n.lang},$.i18n._n=function(num,locale){if(locale=locale||$.i18n.lang,!this.i18n[locale]||!this.i18n[locale].numBase)return num;var numBase=$.i18n[$.i18n.lang].numeralBase||48,prefix=$.i18n[$.i18n.lang].numeralPrefix||"u00",convertDigit=function(n){return"\\"+prefix+(numBase+parseInt(n)).toString(16)},charArray=num.toString().split("").map(convertDigit);return eval('"'+charArray.join("")+'"')},$._n=$.i18n._n})(jQuery);