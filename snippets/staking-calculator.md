<form>
	BLOCK dollar value: $<input id="bn_sb_input" type="number" onkeyup="sb_calculate()" placeholder="Enter value"/>
	<br><br>
	Superblock value: <strong>$<span id="bn_sb_output">0</span></strong>
</form>
<script>


getRewardInfo(1000).then(calcStakeRewards);
function getRewardInfo(stakedBlock) {
	var stakingURL = "https://api.block-node.info/getrevenue.php?val=1000";
	var rewardInfoPromise = new Promise(function(resolve, reject){
		ajax(stakingURL, true).then(function(data, stakedBlock) {
			resolve(data);
		}, false);
	});
	return rewardInfoPromise;
}

function ajax(url, json) {
	var ajaxPromise = new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		var status = true;
		xhr.open('GET', url);
		xhr.send();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4 && xhr.status === 200){
				var response = json ? JSON.parse(this.responseText) : this.responseText
				resolve(response);
			}
		}
	});
	return ajaxPromise;
}

function calcStakeRewards(data, stakedBlock) {
	console.log("working");
	var block = 1000;
	// if (window.manifestJSON == undefined) {
	// 	ajax(manifestURL, true).then(function(manifest) {
	// 		// save manifest to global variable
	// 		manifestJSON = manifest;
	// 		// return data from callback
	// 		resolve(manifestJSON);
	// 	}, false);
	// // manifest already retrieved
	// } else {
	// 	// return data from callback
	// 	resolve(manifestJSON);
	// }
	var blockPrice = data[1]["getrevenue"]["block_price_usd"];
	var totalStaking = parseFloat(data[1]["getrevenue"]["total_being_staked"]);
	var totalSnodes = parseFloat(data[1]["getrevenue"]["total_number_nodes"]);
	var stakingROI = parseFloat(data[1]["getrevenue"]["current_staking_interest_percentage"]);
	var snodeROI = parseFloat(data[1]["getrevenue"]["current_node_interest_percentage"]);

	// var dailyStake = 

	var staking = data[1]["getrevenue"]["total_being_staked"];

	console.log(stakedBlock);
}
</script>

<!-- 
block per day, week, month, year
$ per day, week, month, year
est time between rewards
roi
-->
<!--
[  
   {  
      "getrevenue":{  
         "Message":"Sample used : 100000"
      }
   },
   {  
      "getrevenue":{  
         "block_price_usd":"2.49",
         "daily_generated_total":1440,
         "daily_assigned_to_staking":57.02627839828676,
         "your_daily_stake_total":"47.88",
         "your_daily_stake_total_usd":"119.04",
         "est_time_1st_stake":"0.15",
         "your_yearly_stake_total":19149.985636837882,
         "your_staking_value_usd":"248,600.00",
         "your_yearly_stake_value_usd":"47,606.86",
         "current_staking_interest_percentage":"19.15",
         "total_number_nodes":"455",
         "total_amount_blocks_allocated_node":"2,275,000.00",
         "current_node_interest_percentage":"16.17",
         "amount_neither_staking_or_node":"2,421,527.59",
         "block_height":"819426",
         "difficulty":"9975.12956352",
         "total_being_staked":"902,183.34",
         "cmc_price_btc":"0.00064003",
         "cmc_rank":"179",
         "cmc_market_cap_usd":"13,920,346.12",
         "cmc_24h_volume_usd":"52,876.71",
         "cmc_percent_change_24h":"-5.47"
      }
   }
]

-->

15.768%
157.68 a year
0.432 a day










































