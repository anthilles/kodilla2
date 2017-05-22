function setup() {
    data = loadJSON("https://poloniex.com/public?command=returnTicker", gotData);
}

function gotData(data) {
    var last = data.BTC_XEM.last;
    var hight = data.BTC_XEM.highestBid;
    var low = data.BTC_XEM.lowestAsk;
    var zmianaproc = data.BTC_XEM.percentChange;
    var high24hr = data.BTC_XEM.high24hr;
    var low24hr = data.BTC_XEM.low24hr;
    
   
   }  


document.getElementById('output').innerHTML += '<div class="skrypt">'+
        '<h2>'+'Ostatnia transakcja: '+'</h2>'+last+
        '<h2>'+' najwyższa oferta kupna: '+'</h2>'+hight+
        '<h2>'+' najniższa oferta sprzedaży: '+'</h2>'+low+
        '<h2>'+' zmiana procentowa:  '+'</h2>'+zmianaproc*100+'%'+
        '<h2>'+' najwyższa oferta (24godziny):  '+'</h2>'+high24hr+
        '<h2>'+' najniższa oferta (24godziny):  '+'</h2>'+low24hr+'</div>';


/* Skrypt do dowolnej modyfikacji, ustawiony jest na parę BTC - XEM ale spokojnie można rozbudować je o kolejne pary. 

Kontakt: anthilles@outlook.com

Dowody wdzięczności :) 
XEM: NC4GTK2WZMO4ZQJQKCQ5C5GDRVT7TEDG76KNSHMN
BTC: 16pEmLGMKzYX93qsSX2nwaavZB8B7gcPc8 */