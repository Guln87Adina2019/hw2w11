let num = +prompt('кез-келген сан жазыңыз:')


for (let i=1; i<=num; i++){
    if  (i%3==0 && i%5==0){
        console.log("3-ке  және 5ке қалдықсыз бөлінетін сан:" +i)
    }
    
    else if (num%2 == 0){
        break;
    }
     
}console.log('30 саны 3ке және 5-ке бөлінеді жәнеде ол жұп сан = > Break!' );