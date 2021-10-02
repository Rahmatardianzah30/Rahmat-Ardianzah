const txtElement = ['Rahmat Ardianzah'] ;
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let word = '';

(function ngetik() {
    if(count == txtElement.length){
        count = 0;
    }
    currentTxt = txtElement[count] ;
    words = currentTxt.slice(0, ++txtIndex) ;
    console.log(words) ;
    document.querySelector('.efek-ngetik').textContent = words ;

    setTimeout(ngetik, 250) ;
})();