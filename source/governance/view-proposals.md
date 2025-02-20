title: Blocknet Superblock Proposal Viewing Guide
description: This guide explains how to view Blocknet's Superblock proposals for funding initiatives and governance management.


# View Proposals
This guide explains how to view Blocknet's [Superblock](/governance/introduction/#superblock) proposals for funding initiatives and governance management. The ability to view proposals is important for the decentralized governance model to function properly, enabling informed discussions and [voting](/governance/proposal-voting).

??? warning "Voting Requirements & Important Information"
	**5000 [BLOCK](/blockchain/introduction) is required in order to vote.** The [process of voting](/governance/proposal-voting) can take place from a wallet containing at least 5000 BLOCK, or a Service Node collateral wallet. An active [Service Node](/service-nodes/introduction) is *not* required.

	Additional important information:

	* The UTXO inputs used for the 5000 BLOCK (to vote) must be 100 BLOCK or larger.
	* If you spend or stake any of your 5000 BLOCK inputs after you vote, the vote is marked invalid and you will need to cast your vote(s) again (an auto-revote mechanism will be created).
	* Since the votes are recorded on-chain, casting a vote requires you to pay a network fee. It is best practice to have a small UTXO input for each vote to pay for the network fees.
	* Your vote is not counted until the voting transaction fee has 1 confirmation (typically 1 minute), after which your votes will be accounted for when viewing the `listproposals` command.
	* If you vote again you will have to pay another network fee to do so.
	* The voting system will automatically calculate how many votes you have available according to your balance (1 vote per 5000 BLOCK) and cast your full vote weight when voting (5562 BLOCK balance = 1 vote, 49635 BLOCK balance = 9 votes.
	* At least 60 minutes must pass before you can change your vote(s).
	* The deadline for creating proposals is 2880 blocks prior to the Superblock.
	* Voting for proposals ends 60 blocks prior the Superblock.

Proposals should be carefully reviewed along with the amount requested. It's a good idea to consider the total Superblock budget (40,000 BLOCK), the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with background information and objectives.

---

## Viewing from the Qt Wallet
--8<-- "wallet-comparison.md"


??? example "View using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	1. Open the [wallet](/wallet/setup) and in the side menu, go to *Proposals*. The wallet does not need to be unlocked.
	1. The Proposals screen shows all the proposals submitted to the network. Above the list of proposals there is an option to filter by *Upcoming*, which displays the proposals that can currently be voted on. Select this filter to view all proposals currently open for voting.

		![Filter Proposals](/img/wallet-redesign/proposals-filter.png)

	1. [Vote on a proposal](/governance/proposal-voting/#voting-from-the-qt-wallet).


??? example "View using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	1. In the program menu, go to *Window* > *Console*. The debug console will open in a new window.
	1. In the input field at the bottom, type in `listproposals`, then press the *Enter* key. To view proposals since a specific block, use `listproposals [BLOCK_NUMBER]` instead. Example: `listproposals 1209600`
	1. A message showing all proposals will be returned.
	1. [Vote on a proposal](/governance/proposal-voting/#voting-from-the-qt-wallet).

---

## Viewing from the Browser
There are various options for viewing the proposals in the browser. Each option has its own unique features. As of this writing, the websites where proposals can be viewed include the following:

<!--[Proposal Forum](https://forum.blocknet.co/c/draft-proposals)!-->

[Blocknet Monitor](https://blocknetmonitor.com/?p=proposals)
<!--
Below is a comparison list with the features of each website.

| Website | [Proposal Forum](https://forum.blocknet.co/c/draft-proposals) | [blockdx.co](https://blockdx.co/funding-proposals)
------------------------|-----------------------------|----------------------------|
Mobile friendly         | <i class="fa fa-check"></i> | <i class="fa fa-check"></i>
Lists proposals         | <i class="fa fa-check"></i> | <i class="fa fa-check"></i>
Shows descriptions      | <i class="fa fa-check"></i> | (hyperlinked)              
Shows vote counts       | <i class="fa fa-times"></i> | <i class="fa fa-check"></i>
Shows pass/fail status  | <i class="fa fa-times"></i> | <i class="fa fa-check"></i>
Shows amounts requested | <i class="fa fa-check"></i> | <i class="fa fa-check"></i>
Shows deposit addresses | <i class="fa fa-times"></i> | <i class="fa fa-times"></i>
Shows past proposals    | <i class="fa fa-check"></i> | (in progress)              
Allows for discussion   | <i class="fa fa-check"></i> | <i class="fa fa-check"></i>
Easy to navigate        | <i class="fa fa-check"></i> | <i class="fa fa-check"></i>

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

	1. The wallet process will begin in the current terminal window. You will need to open a new terminal window or tab and navigate to the same location before continuing.
	1. If your wallet was just started, you may need to wait a few minutes for the proposals to sync, otherwise you may not see the full list of proposals. Use the following command to view the proposals:

			./blocknet-cli listproposals

	1. To view proposals since a specific block:

			./blocknet-cli listproposals [BLOCK_NUMBER]

		*Example:*

			./blocknet-cli listproposals 1209600

	1. [Vote on a proposal](/governance/proposal-voting/#voting-from-the-terminal).


??? example "Windows"
	1. Start the wallet. If it's not already running, use the following instructions to start it. 
		1. Navigate to the `bin` folder within your Blocknet wallet installation directory (EG: `C:\Users\[YourUsername]\Downloads\blocknet\bin\`)

			??? tip "Tip: This requires the *blocknet-[version]-win64.zip* download version."
				To interact with the wallet via the command line, the `blocknet-[version]-win64.zip` wallet version is needed.

		1. Type in the following command, replacing `[USERNAME]` and `[PASSWORD]` with the respective `rpcuser=` and `rpcpassword=` values from your `blocknet.conf` file located in the `C:\Users\[YourUsername]\AppData\Roaming\Blocknet` directory. This directory can be found by opening the file explorer and pasting in `%appdata%\Blocknet\` into the file explorer path field.

				blocknetd -rpcuser=[USERNAME] -rpcpassword=[PASSWORD]

			*Example:*

				blocknetd -rpcuser=JohnBlocknet -rpcpassword=supersecretpassword

	1. The wallet process will begin in the current terminal window. You will need to open a new terminal window or tab and navigate to the same location before continuing.
	1. If your wallet was just started, you may need to wait a few minutes for the proposals to sync, otherwise you may not see the full list of proposals. Use the following command to view the proposals:

			./blocknet-cli listproposals

	1. To view proposals since a specific block:

			./blocknet-cli listproposals [BLOCK_NUMBER]

		*Example:*

			./blocknet-cli listproposals 1209600

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

	1. The wallet process will begin in the current terminal window. You will need to open a new terminal window or tab and navigate to the same location before continuing.
	1. If your wallet was just started, you may need to wait a few minutes for the proposals to sync, otherwise you may not see the full list of proposals. Use the following command to view the proposals:

			./blocknet-cli listproposals

	1. To view proposals since a specific block:

			./blocknet-cli listproposals [BLOCK_NUMBER]

		*Example:*

			./blocknet-cli listproposals 1209600

	1. [Vote on a proposal](/governance/proposal-voting/#voting-from-the-terminal).








<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





