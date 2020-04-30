title: BLOCK Specs - Blocknet's Utility Token
description: BLOCK is the utility token that powers the Blocknet blockchain. BLOCK is used to pay fees for usage of the Blocknet Protocol.

# Introduction

BLOCK is the utility token that powers the Blocknet Protocol. Fees are paid in BLOCK when using the network and 100% of those fees are distributed to Service Nodes for supporting the network and infrastructure. Normal transaction fees on the network are also paid in BLOCK and awarded to stakers. If seeking to acquire BLOCK, [there are various options available](/project/exchanges).

---

## BLOCK Specifications

|BLOCK Details           |                   |
-------------------------|--------------------
Creation Date            | October 20th, 2014
Release Method           | ITO, No Premine
Proof Type               | Proof of Work (PoW): blocks 0-2000 (ended) <br>Proof of Stake (PoS): blocks 2001+ (current)
Algo                     | Quark
Block Time               | 60 seconds
Block Reward             | 1.0 BLOCK
Superblock               | Up to 40,000 BLOCK
Difficulty               | Adjusted per block<span id="spec_difficulty"></span>
Staking Requirement      | No minimum
Service Node Requirement | 5000 BLOCK
Circulation              | <span id="spec_circulation">[View here](https://chainz.cryptoid.info/block/)</span>
Max Supply               | No maximum supply (PoS), but there is a maximum to inflation
Circulation Lockup       | Average lockup is ~45% due to Service Node collateral <br>Average lockup is ~60% when also considering staked funds

<script type="text/javascript">
	function spec_numberPretty(num) {
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
	function spec_getDifficulty() {
		var url = "https://chainz.cryptoid.info/block/api.dws?q=getdifficulty";
		spec_ajax(url, false).then(function(data) {
			if (!isNaN(Number(data))) {
				var difficulty = spec_numberPretty(Math.round( Number(data) ));
				document.getElementById("spec_difficulty").innerHTML = ", currently " + difficulty;
			}
		});
	}
	function spec_getCirculation() {
		var url = "https://chainz.cryptoid.info/block/api.dws?q=totalcoins";
		spec_ajax(url, false).then(function(data) {
			if (!isNaN(Number(data))) {
				var circulation = spec_numberPretty(Math.round( Number(data) ));
				document.getElementById("spec_circulation").innerHTML = '<a href="https://chainz.cryptoid.info/block/" target="_blank">Currently ' + circulation + ' BLOCK</a>';
			}
		});
	}
	function spec_ajax(url, json) {
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
		spec_getDifficulty();
		spec_getCirculation();
	});
</script>

---

## Scaling
The Blocknet Protocol is fast and the capacity of the protocol increases with its user base. Since order broadcast and order matching are completely decentralized, there are no bottlenecks other than the ones which lie with users, namely their local internet connections. In addition though, there is a shared capacity in the broadcasting system, which is extremely high. Here is a [relevant quotation from a Bitcoin wiki](https://en.bitcoin.it/wiki/Scalability#Scalability_targets): 

???+ quote "Bitcoin Wiki"
	Let's assume an average rate of 2000tps, so just VISA. Transactions vary in size from about 0.2 kilobytes to over 1 kilobyte, but it's averaging half a kilobyte today. 

	That means that you need to keep up with around 8 megabits/second of transaction data (2000tps * 512 bytes) / 1024 bytes in a kilobyte / 1024 kilobytes in a megabyte = 0.97 megabytes per second * 8 = 7.8 megabits/second. 

	This sort of bandwidth is already common for even residential connections today, and is certainly at the low end of what colocation providers would expect to provide you with.

	When blocks are solved, the current protocol will send the transactions again, even if a peer has already seen it at broadcast time. Fixing this to make blocks just list of hashes would resolve the issue and make the bandwidth needed for block broadcast negligible. So whilst this optimization isn't fully implemented today, we do not consider block transmission bandwidth here. 

<!-- Finally, there is an inherent limitation in the blockchains a party chooses to use that affects the time between exchanging tokens and performing subsequent exchanges with them, which is the blockchain's confirmation time. If a party wishes to exchange Bitcoin at a "trustless" (well, widely regarded as non-risky) level of security, (s)he should wait an hour before re-trading an address. However, there is the ability to adjust the number of confirmations required when performing an exchange, and even the ability to perform a “0-conf” exchange. It should be noted, though, that the risk increases with less confirmations used.  -->

---

## BLOCK Inflation

While there is no maximum limit due to the Blocknet blockchain being Proof of Stake, there is a limit to the amount that can be minted per period (limited inflation). This means that over time the inflation rate decreases as the circulation increases and the amount of BLOCK minted remains constant. Below are 2 sets of data that demonstrate this.

**Lower Bound of Inflation**

In this first set of data, the inflation rate displayed takes into account **just block rewards**. The below data represents the minimum inflation possible.

??? summary "View data"
	<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUGVYPXkYDso16xDhnGUes4OGGmNGE1wR1QhMtqHO7DtlymWCyZWQd5jQ3DNZqqOl12FvLQIrqM7gJ/pubhtml?gid=795490604&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="400px"></iframe>

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUGVYPXkYDso16xDhnGUes4OGGmNGE1wR1QhMtqHO7DtlymWCyZWQd5jQ3DNZqqOl12FvLQIrqM7gJ/pubchart?oid=1462390457&amp;format=interactive"></iframe>


**Upper Bound of Inflation**

In this second set of data, the inflation rate displayed takes into account **both block rewards and the maximum [Superblocks](/governance/introduction#superblock) amount**. It's important to note that the Superblock does not need to mint the full 40,000 BLOCK so in reality the inflation will likely never reach these levels. The below data represents the maximum inflation possible.

??? summary "View data"
	<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUGVYPXkYDso16xDhnGUes4OGGmNGE1wR1QhMtqHO7DtlymWCyZWQd5jQ3DNZqqOl12FvLQIrqM7gJ/pubhtml?gid=222507205&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="400px"></iframe>

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUGVYPXkYDso16xDhnGUes4OGGmNGE1wR1QhMtqHO7DtlymWCyZWQd5jQ3DNZqqOl12FvLQIrqM7gJ/pubchart?oid=2133394205&amp;format=interactive"></iframe>












<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





