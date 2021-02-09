let num1 = '';
let num2 = '';
let operator = '';
let total = '';



function numberFunc(num){
	{
		if (num1 === ''){
			 num1 = num;
			}else{
				num2 = num;}
	}
}

function operatorFunc(oper) {
}



$('button').on('click', function (e) {
	 let btn = e.target.innerHTML; if (btn >= '0' && btn <= '9')
	 { numberFunc(btn);
	} else {
		 operatorFunc(btn)
		}
	})
