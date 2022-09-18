        var balance = 1000
        function withdraw(){
            var amountEntered = Number(userInput.value)
            if(amountEntered<0){
                disp.innerHTML = "<h2>out of bound</h2>"
                disp.style.color = "red"
            }else if(amountEntered==""){
                disp.innerHTML = "<h2>Please enter an Amount</h2>"
                disp.style.color = "red"
            }else if(amountEntered>balance){
                disp.innerHTML = "<h2>Insufficient funds</h2>"
                disp.style.color = "red"
            }
            else if (amountEntered){
                balance = balance-amountEntered
                disp.innerHTML = "<h2>Withdrawal successful please take your cash. Do you want to perform any other transaction? If No press Exit button</h2>"
                disp.style.color = "black"
            }
            else if(amountEntered !== Number){
                disp.innerHTML = "<h2>Invalid</h2>"
                disp.style.color = "red"
            }
        }
        function transfer(){
            var amountEntered = Number(userInput.value)
            if(amountEntered>balance){
                disp.innerHTML = "<h2>Insufficient funds</h2>"
                disp.style.color = "red"
            }else if(amountEntered<0){
                disp.innerHTML = "<h2>out of bound</h2>"
                disp.style.color = "red"
            }else if(amountEntered==""){
                disp.innerHTML = "<h2>Please enter an Amount</h2>"
                disp.style.color = "red"
            }else if (amountEntered){
                balance = balance - amountEntered
                disp.innerHTML = "<h2>Transfer successful. Do you want to perform any other transaction? If No press Exit button</h2>"
                disp.style.color = "black"
            }
            else if(amountEntered !== Number){
                disp.innerHTML = "<h2>Invalid</h2>"
                disp.style.color = "red"
            }
        }
        function deposit(){
            var amountEntered = Number(userInput.value)
            if(amountEntered<0){
                disp.innerHTML = "<h2>out of bound</h2>"
                disp.style.color = "red"
            }else if(amountEntered==""){
                disp.innerHTML = "<h2>Please enter an Amount</h2>"
                disp.style.color = "red"
            }else if (amountEntered){
                balance = balance + Number(amountEntered)
                disp.innerHTML = "<h2>Deposit successful, your available balance is $" + balance + "<br>" + " Do you want to perform any other transaction? If No press Exit button</h2>"
                disp.style.color = "black"
            }
            else if(amountEntered !== Number){
                disp.innerHTML = "<h2>Invalid</h2>"
                disp.style.color = "red"
            }
        }
        function checkBalance(){
            var amountEntered = Number(userInput.value)
            disp.innerHTML = "<h1>Your balance is $" + balance + " press exit to remove your card"
            disp.style.color = "black"
        }
        function exit(){
            disp.innerHTML = " "
        }
    