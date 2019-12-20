title: Blocknet Superblock Proposal Viewing Guide
description: This guide explains how to view Blocknet's Superblock proposals for funding initiatives and governance management.


# View Proposals
This guide explains how to view Blocknet's [Superblock](/governance/introduction/#superblock) proposals for funding initiatives and governance management. The ability to view proposals is important for the governance model to work properly, enabling informed discussions and [voting](/governance/proposal-voting).

??? info "Note: An active Service Node is required in order to vote."
	**An active [Service Node](/service-nodes/introduction) (required 5000 [BLOCK](/blockchain/introduction)) is required in order to vote.** The process of voting can take place from within the Service Node wallet or the collateral wallet. After voting, the Service Node must remain active until the [Superblock](/governance/introduction/#superblock) passes. If the Service Node goes offline then you will need to recast your votes when it's active again. Voting closes 2880 blocks prior to the Superblock.

	Proposals should be carefully reviewed along with the amount requested. It's a good idea to consider the total Superblock budget (40,000 BLOCK), the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with background information and objectives.

---

## Viewing from the Qt Wallet
--8<-- "wallet-comparison.md"


??? example "View using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	1. Open the [wallet](/wallet/setup) and in the side menu, go to *Tools* > *Proposals*. The wallet does not need to be unlocked.
	1. The Proposals screen shows all the proposals submitted to the network. Above the list of proposals there is an option to filter by *Upcoming*, which displays the proposals that can currently be voted on. Select this filter to view all proposals currently open for voting.

		![Filter Proposals](/img/wallet-redesign/proposals-filter.png)

	1. [Vote on a proposal](/governance/proposal-voting/#voting-from-the-qt-wallet).


??? example "View using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	1. In the program menu, go to *Tools* > *Debug Console*
	1. A new window will appear with an input field at the bottom, type in `mnbudget show`, then press the *Enter* key.

		![Show Proposals Command](/img/wallet-classic/mnbudget-show-command.png)

	1. A message showing each of the ongoing proposals will be returned. Here is an example of a proposal:

		![Show Proposals](/img/wallet-classic/mnbudget-show-result.png)

	1. [Vote on a proposal](/governance/proposal-voting/#voting-from-the-qt-wallet).

---

## Viewing from the Browser
There are various options for viewing the proposals in the browser. Below is a comparison list with the features of each website.


|Website | [Proposal Forum](https://forum.blocknet.co/c/final-proposals) |	[blockdx.co](https://blockdx.co/funding-proposals)	|	[block-node.info](https://block-node.info/node_info2.php)
------------------------|--------------------|--------------------|--------------------|
Mobile friendly 		|<i class="fa fa-check"></i>|<i class="fa fa-check"></i>|<i class="fa fa-times"></i>
Lists proposals 		|<i class="fa fa-check"></i>|<i class="fa fa-check"></i>|<i class="fa fa-check"></i>
Shows descriptions		|<i class="fa fa-check"></i>|(hyperlinked)|<i class="fa fa-check"></i>
Shows vote counts		|<i class="fa fa-times"></i>|<i class="fa fa-check"></i>|<i class="fa fa-check"></i>
Shows pass/fail status	|<i class="fa fa-times"></i>|<i class="fa fa-check"></i>|<i class="fa fa-times"></i>
Shows amounts requested |<i class="fa fa-check"></i>|<i class="fa fa-check"></i>|<i class="fa fa-check"></i>
Shows deposit addresses |<i class="fa fa-times"></i>|<i class="fa fa-times"></i>|<i class="fa fa-check"></i>
Shows past proposals 	|<i class="fa fa-check"></i>|(in progress)|<i class="fa fa-check"></i>
Allows for discussion 	|<i class="fa fa-check"></i>|<i class="fa fa-check"></i>|<i class="fa fa-times"></i>
Easy to navigate 		|<i class="fa fa-minus"></i>|<i class="fa fa-check"></i>|<i class="fa fa-check"></i>



<!-- 
??? example "View using the proposal forum"

??? example "View using blockdx.co"

??? example "View using block-node.info" 
-->

---

## Viewing from the Terminal

??? example "Linux"
	1. Start the wallet. If it's not already running, use the following instructions to start it. 
		1. Navigate to the `bin` folder within your Blocknet wallet installation directory (EG: `~/blocknet/bin/`)
		1. Type in the following command, replacing `[USERNAME]` and `[PASSWORD]` with the respective `rpcuser=` and `rpcpassword=` values from your `blocknet.conf` file located in your `~/.blocknet/` directory.

				./blocknetd -rpcuser=[USERNAME] -rpcpassword=[PASSWORD] -daemon

			*Example:*

				./blocknetd -rpcuser=JohnBlocknet -rpcpassword=supersecretpassword -daemon

	1. If your wallet was just started, you may need to wait a few minutes for the proposals to sync, otherwise you may not see the full list of proposals. Use the following command to view the proposals:

			./blocknet-cli mnbudget show

	1. From this list, all proposals where `"BlockStart"` is equal the upcoming Superblock number are open for voting. You can filter the proposals to only show the upcoming proposals using the following command with `[SB-NUMBER]` replaced with the upcoming Superblock number:

			./blocknet-cli mnbudget show | grep ": [SB-NUMBER]" -B 5 -A 15

		*Example:*

			./blocknet-cli mnbudget show | grep ": 648000" -B 5 -A 15

	1. [Vote on a proposal](/governance/proposal-voting/#voting-from-the-terminal).


??? example "Windows"
	1. Start the wallet. If it's not already running, use the following instructions to start it. 
		1. Navigate to the `bin` folder within your Blocknet wallet installation directory (EG: `C:\Users\[YourUsername]\Downloads\blocknet\bin\`)

			??? tip "Tip: This requires the *blocknet-[version]-win64.zip* download version."
				To interact with the wallet via the command line, the `blocknet-[version]-win64.zip` wallet version is needed.

		1. Type in the following command, replacing `[USERNAME]` and `[PASSWORD]` with the respective `rpcuser=` and `rpcpassword=` values from your `blocknet.conf` file located in the `C:\Users\[YourUsername]\AppData\Roaming\Blocknet` directory. This directory can be found by opening the file explorer and pasting in `%appdata%\Roaming\Blocknet\` into the file explorer path field.

				blocknetd -rpcuser=[USERNAME] -rpcpassword=[PASSWORD]

			*Example:*

				blocknetd -rpcuser=JohnBlocknet -rpcpassword=supersecretpassword

	1. The wallet process will begin in the current terminal window. You will need to open a new terminal window or tab and navigate to the same location before continuing.
	1. If your wallet was just started, you may need to wait a few minutes for the proposals to sync, otherwise you may not see the full list of proposals. Use the following command to view the proposals:

			blocknet-cli mnbudget show

	1. From this list, all proposals where `"BlockStart"` is equal the upcoming Superblock number are open for voting. You can filter the proposals to only show the upcoming proposals using the following command with `[SB-NUMBER]` replaced with the upcoming Superblock number:

			blocknet-cli mnbudget show | grep ": [SB-NUMBER]" -B 5 -A 15

		*Example:*

			blocknet-cli mnbudget show | grep ": 648000" -B 5 -A 15

	1. [Vote on a proposal](/governance/proposal-voting/#voting-from-the-terminal).


??? example "MacOS"
	1. Start the wallet. If it's not already running, use the following instructions to start it. 
		1. Navigate to the `bin` folder within your Blocknet wallet installation directory (EG: `~/Downloads/blocknet/bin/`)

			??? tip "Tip: This requires the *blocknet-[version]-osx64.tar.gz* download version"
				To interact with the wallet via the command line, the `blocknet-[version]-osx64.tar.gz` wallet version is needed.

		1. Type in the following command, replacing `[USERNAME]` and `[PASSWORD]` with the respective `rpcuser=` and `rpcpassword=` values from your `blocknet.conf` file located in your `~/Library/Application Support/Blocknet/` directory. This directory can be found by opening the Finder, in the program menu selecting *Go* > *Go to Folder*, entering `~/Library/Application Support/Blocknet/` in the path, and pressing *Enter*.

				./blocknetd -rpcuser=[USERNAME] -rpcpassword=[PASSWORD] -daemon

			*Example:*

				./blocknetd -rpcuser=JohnBlocknet -rpcpassword=supersecretpassword -daemon

	1. If your wallet was just started, you may need to wait a few minutes for the proposals to sync, otherwise you may not see the full list of proposals. Use the following command to view the proposals:

			./blocknet-cli mnbudget show

	1. From this list, all proposals where `"BlockStart"` is equal the upcoming Superblock number are open for voting. You can filter the proposals to only show the upcoming proposals using the following command with `[SB-NUMBER]` replaced with the upcoming Superblock number:

			./blocknet-cli mnbudget show | grep ": [SB-NUMBER]" -B 5 -A 15

		*Example:*

			./blocknet-cli mnbudget show | grep ": 648000" -B 5 -A 15

	1. [Vote on a proposal](/governance/proposal-voting/#voting-from-the-terminal).








<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





