title: Blocknet Superblock Proposal Voting Guide
description: This guide explains how to vote on Blocknet's Superblock proposals for funding initiatives and governance management with a Service Node.


# Proposal Voting
This guide explains how to vote on Blocknet's [Superblock](/governance/introduction/#superblock) proposals for funding initiatives and governance management. Voting on proposals is important for the decentralized governance model to function properly.

???+ warning "Voting Requirements & Important Information"
	**5000 [BLOCK](/blockchain/introduction) is required in order to vote.** The process of voting can take place from a wallet containing at least 5000 BLOCK, or a Service Node collateral wallet. An active [Service Node](/service-nodes/introduction) is *not* required.

	* **Voting for proposals ends 60 blocks prior the Superblock.** It'd be safer to make sure you vote no later than 61 blocks before the Superblock to make sure your voting transaction gets at least 1 confirmation.
	* The inputs (UTXOs) used for the 5000 BLOCK (to vote) must be 100 BLOCK or larger.
	* The inputs used for the 5000 BLOCK must be in the same address.
	* Since the votes are recorded on-chain, casting a vote requires you to pay a network fee. This requires *each address* to have an input *separate* from the inputs used for the 5000 BLOCK to pay for the network fees. 
	* You will not be able to vote if your funds are immature. Funds will remain immature for about 60 minutes (60 blocks) after they staked.
	* If you are staking, your vote will automatically re-cast.
	* Your vote is not counted until the voting transaction fee has 1 confirmation (typically 1 minute), after which your votes will be accounted for when viewing the `listproposals` command.
	* If you vote again you will have to pay another network fee to do so.
	* The voting system will automatically calculate how many votes you have available according to your balance (1 vote per 5000 BLOCK) and cast your full vote weight when voting (5562 BLOCK balance = 1 vote, 49635 BLOCK balance = 9 votes.
	* At least 60 minutes must pass before you can change your vote(s).
	* The deadline for creating proposals is 2880 blocks prior to the Superblock.

??? info "Examples Of Valid Setups"

	1. Counts as 1 single vote:
		* Address A
			* Inputs: 2500, 2500, 1 (tx fee input)
			* Total: 5000 + 1 (tx fee input)
	1. Counts as 1 single vote:
		* Address A
			* Inputs: 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 1 (tx fee input)
			* Total: 5000 + 1 (tx fee input)
	1. Counts as 1 single vote wth excess:
		* Address A
			* Inputs: 3000, 2500, 2500, 1 (tx fee input)
			* Total: 8000 + 1 (tx fee input)
		* Address B
			* Inputs: 3000 + 1 (tx fee input)
			* Total: 3000 + 1 (tx fee input)
	1. Counts as 1 vote
		* Address A
			* Inputs: 2000, 2000, 1000, 1 (tx fee input)
			* Total: 5000 + 1 (tx fee input)
		* Address B
			* Inputs: 3000, 2000
			* Total: 5000 (no tx fee input)
	1. Counts as 2 votes:
		* Address A
			* Inputs: 3000, 2000, 1000, 2000, 2000, 1 (tx fee input)
			* Total: 10000 + 1 (tx fee input)
	1. Counts as 3 votes with excess:
		* Address A
			* Inputs: 5000, 3000, 2000, 2000, 1 (tx fee input)
			* Total: 7000 + 1 (tx fee input)
		* Address B
			* Inputs: 3000, 3000, 2000, 1000, 1 (tx fee input)
			* Total: 9000 + 1 (tx fee input)

??? info "Examples Of Invalid Setups"

	1. Not at least 5000 BLOCK:
		* Address A
			* Inputs: 2500, 2000, 1 (tx fee input)
			* Total: 4500 + 1 (tx fee input)
	1. Not enought to cover fee:
		* Address A
			* Inputs: 2500, 2500
			* Total: 5000
	1. Fee is not a separate input:
		* Address A
			* Inputs: 2500, 2501
			* Total: 5001
	1. 5000 BLOCK not in a single address:
		* Address A
			* Inputs: 3000, 1 (tx fee input)
			* Total: 3000 + 1 (tx fee input)
		* Address A
			* Inputs: 2000, 1 (tx fee input)
			* Total: 2000 + 1 (tx fee input)

Proposals should be carefully reviewed along with the amount requested. It's a good idea to consider the total Superblock budget (40,000 BLOCK), the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with background information and objectives. See [how to view proposals](/governance/view-proposals).

---

## Voting from the Qt Wallet
--8<-- "wallet-comparison.md"


??? example "Vote using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	1. Open the [wallet](/wallet/setup) and in the side menu, go to *Proposals*. The wallet needs to be unlocked to cast votes.
	1. The Proposals screen shows all the proposals submitted to the network. Above the list of proposals there is an option to filter by *Upcoming*, which displays the proposals that can currently be voted on. Select this filter to view all proposals currently open for voting.

		![Filter Proposals](/img/wallet-redesign/proposals-filter.png)

	1. **Review the proposals and the amount requested.** It's a good idea to consider the total Superblock budget, the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with some background information and objectives.
	1. The voting system will automatically calculate how many votes you have available according to your balance (1 vote per 5000 BLOCK) and cast your full vote weight when voting (5562 BLOCK balance = 1 vote, 49635 BLOCK balance = 9 votes.
	1. When ready to vote on a proposal, select the *Vote* button. A popup will appear that will be used to vote from. Select whether you'd like to approve the proposal (*Yes*) or vote against the proposal (*No*). After you have selected how you wish to vote, select the *Vote* button. This registers your vote to the network after the vote transaction has 1 confirmation (about 1 minute).
	1. Once you have voted you can change your vote by selecting the *Change Vote* button and selecting you new vote. **At least 60 minutes must pass before you can change your vote.** You can view your current vote above the *Change Vote* button.

		![Proposal Voted](/img/wallet-redesign/proposal-voted.png)

	--8<-- "complete-proposal-voting.md"


??? example "Vote using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	1. Open the [wallet](/wallet/setup). The wallet needs to be unlocked to cast votes.
	1. In the program menu, go to *Window* > *Console*. The debug console will open in a new window.
	1. In the input field at the bottom, type in `listproposals`, then press the *Enter* key. To view proposals since a specific block, use `listproposals [BLOCK_NUMBER]` instead. Example: `listproposals 1209600`
	1. A message showing all proposals will be returned.
	1. **Review the proposals and the amount requested.** It's a good idea to consider the total Superblock budget, the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with some background information and objectives.
	1. The proposal hash, which is a unique identifier for the proposal, can be found in each proposal’s details. The voting command uses the following command structure: `vote [PROPOSAL_HASH] [VOTE]`

		* `PROPOSAL_HASH`:  The hash of the proposal you are voting for
		* `VOTE`:  Your vote (‘yes’ or ‘no’). `yes` means you'd like to vote to fund the proposal and `no` means you'd like to vote against the proposal so it isn't funded.

	1. The voting system will automatically calculate how many votes you have available according to your balance (1 vote per 5000 BLOCK) and cast your full vote weight when voting (5562 BLOCK balance = 1 vote, 49635 BLOCK balance = 9 votes.
	1. To vote, type the above command with `[PROPOSAL_HASH]` and `[VOTE]` replaced with the respective variables in place. Below is an example:

			vote 06a50c125aa305fbe38fa0fe9a1b39db1b1318838aadaec55f95c7a52101d83f yes

	1.	Press the *Enter* key to submit the command and register your vote to the network.
	--8<-- "complete-proposal-voting.md"


---


## Voting from the Terminal

??? example "Linux"
	1. Start the [wallet](/wallet/setup). If it's not already running, use the following instructions to start it. 
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

	1. **Review the proposals and the amount requested.** It's a good idea to consider the total Superblock budget, the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with some background information and objectives.
	1. The voting system will automatically calculate how many votes you have available according to your balance (1 vote per 5000 BLOCK) and cast your full vote weight when voting (5562 BLOCK balance = 1 vote, 49635 BLOCK balance = 9 votes.
	1. Vote for the proposal using the following command, replacing the variable with the respective values:

			./blocknet-cli vote [PROPOSAL_HASH] [VOTE]

		* `PROPOSAL_HASH`:  The hash listed for the proposal you are voting for
		* `VOTE`:  Your vote (‘yes’ or ‘no’). `yes` means you'd like to vote to fund the proposal and `no` means you'd like to vote against the proposal so it isn't funded.

		*Example:*

			./blocknet-cli vote 06a50c125aa305fbe38fa0fe9a1b39db1b1318838aadaec55f95c7a52101d83f yes

	1. Press the *Enter* key to submit the command and register your vote to the network.
	--8<-- "complete-proposal-voting.md"


??? example "Windows"
	1. Start the [wallet](/wallet/setup). If it's not already running, use the following instructions to start it. 
		1. Navigate to the `bin` folder within your Blocknet wallet installation directory (EG: `C:\Users\[YourUsername]\Downloads\blocknet\bin\`)

			??? tip "Tip: This requires the *blocknet-[version]-win64.zip* download version"
				To interact with the wallet via the command line, the `blocknet-[version]-win64.zip` wallet version is needed.

		1. Type in the following command, replacing `[USERNAME]` and `[PASSWORD]` with the respective `rpcuser=` and `rpcpassword=` values from your `blocknet.conf` file located in the `C:\Users\[YourUsername]\AppData\Roaming\Blocknet` directory. This directory can be found by opening the file explorer and pasting in `%appdata%\Roaming\Blocknet\` into the file explorer path field.

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

	1. **Review the proposals and the amount requested.** It's a good idea to consider the total Superblock budget, the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with some background information and objectives.
	1. The voting system will automatically calculate how many votes you have available according to your balance (1 vote per 5000 BLOCK) and cast your full vote weight when voting (5562 BLOCK balance = 1 vote, 49635 BLOCK balance = 9 votes.
	1. Vote for the proposal using the following command, replacing the variable with the respective values:

			./blocknet-cli vote [PROPOSAL_HASH] [VOTE]

		* `PROPOSAL_HASH`:  The hash listed for the proposal you are voting for
		* `VOTE`:  Your vote (‘yes’ or ‘no’). `yes` means you'd like to vote to fund the proposal and `no` means you'd like to vote against the proposal so it isn't funded.

		*Example:*

			./blocknet-cli vote 06a50c125aa305fbe38fa0fe9a1b39db1b1318838aadaec55f95c7a52101d83f yes

	1. Press the *Enter* key to submit the command and register your vote to the network.
	--8<-- "complete-proposal-voting.md"


??? example "MacOS"
	1. Start the [wallet](/wallet/setup). If it's not already running, use the following instructions to start it. 
		1. Navigate to the `bin` folder within your Blocknet wallet installation directory (EG: `~/Downloads/blocknet/bin/`)

			??? tip "Tip: This requires the *blocknet-[version]-osx64.tar.gz* download version."
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

	1. **Review the proposals and the amount requested.** It's a good idea to consider the total Superblock budget, the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with some background information and objectives.
	1. The voting system will automatically calculate how many votes you have available according to your balance (1 vote per 5000 BLOCK) and cast your full vote weight when voting (5562 BLOCK balance = 1 vote, 49635 BLOCK balance = 9 votes.
	1. Vote for the proposal using the following command, replacing the variable with the respective values:

			./blocknet-cli vote [PROPOSAL_HASH] [VOTE]

		* `PROPOSAL_HASH`:  The hash listed for the proposal you are voting for
		* `VOTE`:  Your vote (‘yes’ or ‘no’). `yes` means you'd like to vote to fund the proposal and `no` means you'd like to vote against the proposal so it isn't funded.

		*Example:*

			./blocknet-cli vote 06a50c125aa305fbe38fa0fe9a1b39db1b1318838aadaec55f95c7a52101d83f yes

	1. Press the *Enter* key to submit the command and register your vote to the network.
	--8<-- "complete-proposal-voting.md"











<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinkks = [];
</script>

--8<-- "extras.md"





