module.exports = function toReadable (number) {
   let numberCount = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
   let numberTwo = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
   let numberTens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
   if(number >= 0 && number <= 10){
      for(let i = 0; i < numberCount.length; i++){
         if(number === i){
            return numberCount[i];
         }
      }
   }
   if(number > 10 && number < 20){
      for(let i = 0; i < numberTwo.length; i++){
         if(number % 10 === i + 1){
            return numberTwo[i];
         }
      }
   }
   if(number >= 20 && number < 100){
      let strElements;
      let strDecimals;
      let element = number % 10;
      if(Number.isInteger(number / 10)){
         strElements = '';
      }
      else{
         for(let i = 0; i < numberCount.length; i++){
            if(element === i){
               strElements = numberCount[i];
            }
         }
      }
      for(let i = 0; i < numberTens.length; i++){
         if(Math.floor(number / 10) === i + 2){
            strDecimals = numberTens[i];
         }
      }
      if(strElements){
         return strDecimals + " " + strElements;
      }
      else{
         return strDecimals;
      }
   }

}
