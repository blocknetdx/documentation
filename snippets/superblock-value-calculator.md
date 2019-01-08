<form>
	BLOCK dollar value: $<input id="sb_input" type="number" onkeyup="sb_calculate()" placeholder="Enter value"/>
	<br><br>
	Superblock value: <strong>$<span id="sb_output">0</span></strong>
</form>
<script type="text/javascript">
	function sb_calculate() {
		var price = document.getElementById("sb_input").value;
		var amount = 40000;
		var value = Number(price)*amount;
		document.getElementById("sb_output").innerHTML = sb_numberPretty(value);
	}
	function sb_numberPretty(num) {
		var number = num.toString().split('.');
		var prettyNum;
		if (number[0] > 0) {
			number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			if (number[1]) {
				number[1] = number[1].substr(0,2);
			}
	    prettyNum = number.join(".");
		} else {
			prettyNum = Math.round(num*1000000)/1000000;
		}
		return prettyNum;
	}
	function sb_getPrice() {
		var url = "https://api.coingecko.com/api/v3/coins/blocknet/tickers";
		sb_ajax(url, true).then(function(data) {
			if (data["tickers"][0]["converted_last"]["usd"]) {
				var price = data["tickers"][0]["converted_last"]["usd"];
				document.getElementById("sb_input").value = Math.round(price*100)/100;
				sb_calculate();
			}
		});
	}
	function sb_ajax(url, json) {
		var ajaxPromise = new Promise(function(resolve, reject){
			var xhr = new XMLHttpRequest();
			var status = true;
			xhr.open('GET', url);
			xhr.send();
			xhr.onreadystatechange = function(){
				// check state of call
				if (xhr.readyState === 4){
					// check if call was successful
					if (xhr.status === 200){
						if (json) {
							var response = JSON.parse(this.responseText);
							// return data from callback
							resolve(response);
						} else {
							var response = this.responseText;
							// return data from callback
							resolve(response);
						}
					} else {
						// return error
						return console.log("failed request");
					}
				} else {
					if (status) {
						console.log("fetching...");
						status = false;
					}
				}
			}
		});
		return ajaxPromise;
	}
	document.addEventListener("DOMContentLoaded", function() {
		sb_getPrice();
	});
</script>