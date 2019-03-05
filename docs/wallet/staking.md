title: 
description:

# Staking BLOCK

---

## What is Staking
Staking is the Proof-of-Stake equivelant of mining in Proof-of-Work blockchains. Stakers validate transactions on the network and are compensated with block rewards. These transactions are grouped in blocks. With [Blocknet](/project/introduction), there is 1 block every minute with a 1 [BLOCK](/blockchain/introduction) reward. From this 1 BLOCK reward, 0.3 BLOCK is awarded to a staker as compensation for helping secure and validate the network and 0.7 BLOCK is sent to a Service Node operator as compensation for supporting the network's services.

---

## Staking Guide
Staking can be performed with any amount of BLOCK, there is no minimum. However, since staking with Blocknet is probability-based, will receive rewards more frequently by owning and staking more BLOCK. BLOCK can be acquired through [various options available](/project/exchanges).

Use the following guide to enable staking and start earning rewards.

??? example "Stake using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	1. [Install and setup](/wallet/setup) the Blocknet wallet.
	1. Open and [sync the wallet](/wallet/syncing).
	1. Make sure there's BLOCK in your wallet.
	1. [Unlock the wallet for staking only](/wallet/lock-unlock/#unlock-for-staking).
	1. It may take a minute for the staking to activate. 
	1. You can verify the wallet is staking with the status icon in the upper-right corner.

		![Status Bar](/img/wallet-redesign/status-bar-synced.png)

		1. The 2nd icon from the left indicates the staking status. If it is grey, staking is inactive. If it is blue, staking is active. You can also hover over the icon to read the staking status.

			![Staking Inactive](/img/wallet-redesign/status-staking-inactive.png)
			![Staking Active](/img/wallet-redesign/status-staking-active.png)

		??? info "Note: Staking will not activate if the wallet is not synced."
			Since staking is the act of confirming the latest transactions, staking cannot be active until the wallet is synced to the more recent transaction on the network.

		??? info "Note: Newly deposited BLOCK can't stake for 60 minutes."
			Funds cannot stake until they have had 60 confirmation on the network. This a security precaution and will take roughly 60 minutes (1 confirmation a minute) to be eligible for staking.

	1. When staking, you may see your wallet balance show as *Immature*. This is a normal part of staking. The funds in your wallet that "won" the staking reward will remain immature until they have 101 confirmations (101 minutes). When funds are immature, they are unspendable and do not count towards your probability for receiving another reward. After 101 confirmations, these funds can be spent again and the balance will show up as normal.

		![Immature](/img/wallet-redesign/balance-immature.png)


??? example "Stake using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	1. [Install and setup](/wallet/setup) the Blocknet wallet.
	1. Open and [sync the wallet](/wallet/syncing).
	1. Make sure there's BLOCK in your wallet.
	1. [Unlock the wallet for staking only](/wallet/lock-unlock/#unlock-for-staking).
	1. It may take a minute for the staking to activate. 
	1. You can verify the wallet is staking with the status icon in the bottom-right corner.

		![Status Bar](/img/wallet-classic/status-bar-icons.png)

		1. The up-arrow icon indicates the staking status. If it is grey, staking is inactive. If it is green, staking is active. You can also hover over the icon to read the staking status.

			![Staking Inactive](/img/wallet-classic/status-staking-inactive.png)
			![Staking Active](/img/wallet-classic/status-staking-active.png)

		??? info "Note: Staking will not activate if the wallet is not synced."
			Since staking is the act of confirming the latest transactions, staking cannot be active until the wallet is synced to the more recent transaction on the network.

		??? info "Note: Newly deposited BLOCK can't stake for 60 minutes."
			Funds cannot stake until they have had 60 confirmation on the network. This a security precaution and will take roughly 60 minutes (1 confirmation a minute) to be eligible for staking.

	1. When staking, you may see your wallet balance show as *Immature*. This is a normal part of staking. The funds in your wallet that "won" the staking reward will remain immature until they have 101 confirmations (101 minutes). When funds are immature, they are unspendable and do not count towards your probability for receiving another reward. After 101 confirmations, these funds can be spent again and the balance will show up as normal.

		![Immature](/img/wallet-redesign/balance-immature.png)

--8<-- "troubleshooting.md"

---

## Staking Rewards
### Probability
The selection of the staker that confirms each block is probability-based. This means that everyone’s chance of being selected to confirm the next block is equal to the amount of BLOCK staking divided by the total amount of BLOCK being staked on the network. The amount of staked BLOCK on the network [can be seen here](https://chainz.cryptoid.info/explorer/index.stakes.dws?coin=block). The value will have to be calculated by totaling each `amount`.

![Staking Probability](/img/wallet/staking-probability.png)

??? abstract "Example: Calculating staking reward probability."
	Assume:

	* You're staking 1000 BLOCK
	* There's a total of 900,000 BLOCK staking on the network

	The probability you will earn the next reward is: 

		1000 / 900000 = 0.00111111111 * 100 = 0.11%

	This mean that, on average, you will earn a reward every:

		1 / 0.00111111111 = 900 minutes = 15 hours

	And the average amount of BLOCK rewarded per day is:

		1440 minutes a day / 900 minutes per reward * 0.3 BLOCK per reward = 0.48 BLOCK

	With BLOCK valued at $50, that would equate to $24 per day.


### ROI
Building off the probabilistic ratio above, the following equation can be derived to estimate the yearly return (in BLOCK) on the initial amount started with. This does not account for compounding, which would increase this value. The amount of staked BLOCK on the network [can be seen here](https://chainz.cryptoid.info/explorer/index.stakes.dws?coin=block). The value will have to be calculated by totaling each `amount`.

![Staking ROI](/img/wallet/staking-roi.png)

* *157680 = 0.3 BLOCK reward per minute * 1440 minutes per day * 365 days per year*

??? abstract "Example: Calculating staking reward ROI."
	Assume:

	* There's a total of 900,000 BLOCK staking on the network
	* The amount you're staking is irrelevant because ROI is a per unit value

	The yearly ROI under these conditions will be:

		157680 / 900000 = 0.1752 * 100 = 17.52%

	This means that in a year, if you staked 1000 BLOCK the rewards would be:

		1000 * .1752 = 175.2 BLOCK

	With BLOCK valued at $50, that would equate to $8,760 per year.



---

<!-- 

## Reward Calculator
-->


<script>

var stakingURL = "https://chainz.cryptoid.info/explorer/index.stakes.dws?coin=block";

getStakers().then(calcStaking);
function getStakers() {
	var stakersPromise = new Promise(function(resolve, reject){
		ajax(stakingURL, true).then(function(stakers) {
			stakersJSON = stakers;
			localStorage.setItem('stakers', JSON.stringify(stakers));
			resolve(stakersJSON);
		}, false);
	});
	return stakersPromise;
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
// calcStaking(data);
function calcStaking(staking) {
	console.log("working");
	var stakes = staking["stakes"];
	var totalStaked = 0;
	for (var stake in stakes) {
		// console.log(stakes[stake]["amount"]);
		totalStaked += stakes[stake]["amount"];
	}
	console.log(totalStaked);
}
</script>






<!-- 
- rewards
	- equation
	- calculator
		- how much
		- how often
-->
<!-- 
what are the cli commands to do the following on windows:
1) start wallet
2) close wallet
3) start syncing
4) get syncing status
5) encrypt wallet

-->











<!-- 
======= Start: Related Links Section =======
- This is the related links section at the bottom of each page.
- It lists the links in the relatedLinks array variable below.
	Example: relatedLinks = [{"name":"Blocknet Website","link":"https://blocknet.co"},{"name":"API Docs","link":"https://api.blocknet.co"}];
- If the array is empty, ie. relatedLinks = [], then the related links section will not be displayed.
related-links.html
- The template and logic for the related links section can be found in docs/snippets/related-links.html
- The base path is defaulted to docs/snippets/, which can be edited in the mkdocs.yml file
- The template and logic is linked with markdown_extensions: pymdownx.snippets
-->
<script type="text/javascript">
var relatedLinks = [];
</script>

--8<--
related-links.html
--8<-- 
<!-- 
======= End: Related Links Section ======= 
-->





