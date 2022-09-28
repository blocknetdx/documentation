title: Blocknet Fork Management Guide
description: This guide explains what a fork is, how to tell if you're on a fork, and what to do in order to get off the fork and onto the main chain.


# Fork Management
A fork in blockchain is similar to a fork in a road. In a perfect world, everybody running the Blocknet blockchain would have identical data and transaction history. However in the real world, technical events such as a wallet or protocol upgrade may cause a user's blockchain to start having different data after a certain point. The start of a fork is the point at which the blockchain data starts to differ. If you are the user with the different data from everyone else, then you are on a fork (forked chain).

![Fork Diagram](/img/forking/fork-diagram.png)

??? info "Note: BLOCK staked on a fork are not valid on the main chain."
	If you are on a fork you will likely earn many more staking rewards than usual. Many people mistaken continue to stay on the fork on purpose thinking that the BLOCK earned can be used on the main chain, which is incorrect. Once you get back on the main chain, there will be no record of any actions performed on a fork. In this case, being on a fork is similar to being in a parallel universe. 

---

## Check If You Are on a Fork
Use the following guide to check if you're on a fork by comparing the current block height of your wallet with the block height on the explorer.

??? example "Check using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	1. Select *Tools* from the left menu, then the *Debug Console* tab. The input field at the bottom is where you will type commands.

		![Debug Console](/img/wallet-redesign/tools-console.png)

	1. Type `getblockcount` into the debug console and press the *Enter* or *Return* key.
		```
		getblockcount
		```

		![getblockcount Command](/img/forking/redesign-getblockcount-command.png)

	1. The command will appear in the console window followed by a response with your current block height.

		![Block Height](/img/forking/redesign-getblockcount-response.png)

	1. Type `getblockhash <BLOCK HEIGHT>` into the debug console with `<BLOCK HEIGHT>` replaced with the block height returned in the previous step and press the *Enter* or *Return* key. Example:
		```
		getblockhash 11050942
		```

		![getblockhash Command](/img/forking/redesign-getblockhash-command.png)

	1. The command will appear in the console window followed by a response with the hash of your current block height.

		![Block Hash](/img/forking/redesign-getblockhash-response.png)

	1. Open a Blocknet blockchain explorer: [visit cryptoID](https://chainz.cryptoid.info/block/)
	1. Type the block height returned in step 4 into the search bar and press the *Enter* or *Return* key.

		![Search Block](/img/forking/redesign-chainz-block-search.png)

	1. The search result will return the hash of the block. Compare the returned block hash form the explorer with the block hash from your wallet returned in step 6. If the block hashed are different then you are on a fork. There is a chance that the explorer is on a fork, but this is much less likely to be the case.

		![Search Result](/img/forking/redesign-chainz-block-search-result.png)

	1. If you are on a fork, follow the [Bootstrap guide](/wallet/syncing/#bootstrap) to resync your chain. Make sure to follow all the directions and remove the listed files.



??? example "Check using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	1. In the program menu, go to *Window* > *Console*. A new window will appear with an input field at the bottom where you will type commands.
	1. Type `getblockcount` into the debug console and press the *Enter* or *Return* key.
		```
		getblockcount
		```

		![getblockcount Command](/img/forking/classic-getblockcount-command.png)

	1. The command will appear in the console window followed by a response with your current block height.

		![Block Height](/img/forking/classic-getblockcount-response.png)

	1. Type `getblockhash <BLOCK HEIGHT>` into the debug console with `<BLOCK HEIGHT>` replaced with the block height returned in the previous step and press the *Enter* or *Return* key. Example:
		```
		getblockhash 1105645
		```

		![getblockhash Command](/img/forking/classic-getblockhash-command.png)

	1. The command will appear in the console window followed by a response with the hash of your current block height.

		![Block Hash](/img/forking/classic-getblockhash-response.png)

	1. Open a Blocknet blockchain explorer: [visit cryptoID](https://chainz.cryptoid.info/block/)
	1. Type the block height returned in step 4 into the search bar and press the *Enter* or *Return* key.

		![Search Block](/img/forking/classic-chainz-block-search.png)

	1. The search result will return the hash of the block. Compare the returned block hash form the explorer with the block hash from your wallet returned in step 6. If the block hashed are different then you are on a fork. There is a chance that the explorer is on a fork, but this is much less likely to be the case.

		![Search Result](/img/forking/classic-chainz-block-search-result.png)

	1. If you are on a fork, follow the [Bootstrap guide](/wallet/syncing/#bootstrap) to resync your chain. Make sure to follow all the directions and remove the listed files.


--8<-- "troubleshooting.md"

---

## How to Unfork
If you are on a fork, follow the [Bootstrap guide](/wallet/syncing/#bootstrap) to resync your chain. Make sure to follow all the directions and remove the listed files.












<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





