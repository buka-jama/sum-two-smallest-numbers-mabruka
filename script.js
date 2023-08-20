function sumTwoSmaalestNum(numb) {

    let smallest= Number.MAX_VALUE;

    let secondSmallest = Number.MAX_VALUE;

    for (let i = 0; i < numb.length; i++) {
        if (numb[i]<smallest) {

            secondSmallest = smallest;

            smallest=numb[i];
            

            
        }else if (numb[i]<secondSmallest) {

            secondSmallest = numb[i]
            
        }
        
    }

    return smallest+secondSmallest;

}
console.log(sumTwoSmaalestNum([12, 5, 24, 55, 18]));

console.log(sumTwoSmaalestNum([190, 300, 230, 800]));