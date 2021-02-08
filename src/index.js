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
}
