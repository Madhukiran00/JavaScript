let promise = new Promise((resolve,reject) => {
    let a = 1 + 1;
    if(a==2){
        resolve("success")
    }
    else{
        relect("Failure")
    }
    
});



findKeys(function(keys) {
  goToATM(keys, function(cash) {
    checkBalance(cash, function(balance) {
      buyGroceries(balance, function(items) {
        throwParty(items, function() {
          console.log("Party time!");
        });
      });
    });
  });
});
