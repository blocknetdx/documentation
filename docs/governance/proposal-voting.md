title: 
description:


# Proposal Voting
**An active Service Node (required 5000 [BLOCK](/blockchain/introduction)) is required in order to vote.** The process of voting can take place from within the Service Node wallet or the collateral wallet. After voting, the Service Node must remain active until the Superblock passes. If the Service Node goes offline then you will need to recast your votes when it's active again. Voting closes 2880 blocks prior to the Superblock.

Proposals should be carefully reviewed along with the amount requested. It's a good idea to consider the total Superblock budget (40,000 BLOCK), the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with background information and objectives.

---

## Voting from the Qt Wallet

??? example "Vote using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	1. Open the wallet and in the side menu, go to *Tools* > *Proposals*. The wallet does not need to be unlocked.
	1. The Proposals screen shows all the proposals submitted to the network. Above the list of proposals there is an option to filter by *Upcoming*, which displays the proposals that can currently be voted on. Select this filter to view all proposals currently open for voting.

		![Filter Proposals](/img/wallet-redesign/filter-proposals.png)

	1. **Review the proposals and the amount requested.** It's a good idea to consider the total Superblock budget, the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with some background information and objectives.
	1. When ready to vote on a proposal, select the *Vote* button. A popup will appear that will be used to vote from. Select whether you'd like to approve the proposal (*Yes*) or vote against the proposal (*No*). After you have selected how you wish to vote, select the *Vote* button. This registers your vote to the network.

		![Proposal Voting](/img/wallet-redesign/proposal-voting.png)

		??? tip "Tip: Voting for Multiple Service Nodes"
			To vote for multiple Services Nodes at the same time, select the *Vote many* option on the voting screen. This needs to be performed from the Blocknet wallet that contains the 5000 BLOCK collateral.

	1. Once you have voted you can change your vote by selecting the *Change Vote* button and selecting you new vote. **At least 60 minutes must pass before you can change your vote.** You can view your current vote above the *Change Vote* button.

		![Proposal Voted](/img/wallet-redesign/proposal-voted.png)

	1. Voting Complete!
		1. Repeat this process for every proposal you are voting for.
		1. Keep your Service Node active until the Superblock.


??? example "Vote using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	1. In the program menu, go to *Tools* > *Debug Console*
	1. A new window will appear with an input field at the bottom, type in `mnbudget show`, then press the *Enter* key.

		![Show Proposals Command](/img/wallet-classic/mnbudget-show-command.png)

	1. A message showing each of the ongoing proposals will be returned. Here is an example of a proposal:

		![Show Proposals](/img/wallet-classic/mnbudget-show-result.png)

	1. **Review the proposals and the amount requested.** It's a good idea to consider the total Superblock budget, the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with some background information and objectives.

	1. The proposal hash, which is a unique identifier for the proposal, can be found in each proposal’s details. The voting command uses the following command structure: `mnbudget vote [PROPOSAL-HASH] [VOTE]`

		* `PROPOSAL-HASH`:  The hash listed for the proposal you are voting for
		* `VOTE`:  Your vote (‘yes’ or ‘no’). `yes` means you'd like to vote to fund the proposal and `no` means you'd like to vote against the proposal so it isn't funded.

	1. To vote, type the above command with `[PROPOSAL-HASH]` and `[VOTE]` replaced with the respective variables in place. Below is an example:

			mnbudget vote 06a50c125aa305fbe38fa0fe9a1b39db1b1318838aadaec55f95c7a52101d83f yes

		??? tip "Tip: Voting for Multiple Service Nodes"
			To vote for multiple Services Nodes at the same time, use the following format instead: `mnbudget vote-many [PROPOSAL-HASH] [VOTE]`. Notice the second term is now `vote-many` instead of `vote`. This needs to be performed from the Blocknet wallet that contains the 5000 BLOCK collateral.

	1.	Press the *Enter* key to submit the command and register your vote to the network.
	1. Voting Complete!
		1. Repeat this process for every proposal you are voting for.
		1. If you want to change a vote, you must wait at least 60 minutes to be able to vote again.
		1. Keep your Service Node active until the Superblock.


---


## Voting from the Terminal

??? example "Linux"
	1. Start the wallet. If it's not already running, use the following instructions to start it. 
		1. Navigate to the `bin` folder within your Blocknet wallet installation directory (EG: `~/blocknet/bin/`)
		1. Type in the following command, replacing `[USERNAME]` and `[PASSWORD]` with the respective `rpcuser=` and `rpcpassword=` values from your `blocknetdx.conf` file located in your `~/.blocknetdx/` directory.

				./blocknetdxd -rpcuser=[USERNAME] -rpcpassword=[PASSWORD] -daemon

			*Example:*

				./blocknetdxd -rpcuser=JohnBlocknet -rpcpassword=supersecretpassword -daemon

	1. If your wallet was just started, you may need to wait a few minutes for the proposals to sync, otherwise you may not see the full list of proposals. Use the following command to view the proposals:

			./blocknetdx-cli mnbudget show

	1. From this list, all proposals where `"BlockStart"` is equal the upcoming Superblock number are open for voting. You can filter the proposals to only show the upcoming proposals using the following command with `[SB-NUMBER]` replaced with the upcoming Superblock number:

			./blocknetdx-cli mnbudget show | grep ": [SB-NUMBER]" -B 5 -A 15

		*Example:*

			./blocknetdx-cli mnbudget show | grep ": 648000" -B 5 -A 15

	1. **Review the proposals and the amount requested.** It's a good idea to consider the total Superblock budget, the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with some background information and objectives.
	1. Vote for the proposal using the following command, replacing the variable with the respective values:

			./blocknetdx-cli mnbudget vote [PROPOSAL-HASH] [VOTE]

		* `PROPOSAL-HASH`:  The hash listed for the proposal you are voting for
		* `VOTE`:  Your vote (‘yes’ or ‘no’). `yes` means you'd like to vote to fund the proposal and `no` means you'd like to vote against the proposal so it isn't funded.

		*Example:*

			./blocknetdx-cli mnbudget vote 06a50c125aa305fbe38fa0fe9a1b39db1b1318838aadaec55f95c7a52101d83f yes

		??? tip "Tip: Voting for Multiple Service Nodes"
			To vote for multiple Services Nodes at the same time, use the following format instead: `./blocknetdx-cli mnbudget vote-many [PROPOSAL-HASH] [VOTE]`. Notice the second term is now `vote-many` instead of `vote`. This needs to be performed from the Blocknet wallet that contains the 5000 BLOCK collateral.

	1. Press the *Enter* key to submit the command and register your vote to the network.
	1. Voting Complete!
		1. Repeat this process for every proposal you are voting for.
		1. If you want to change a vote, you must wait at least 60 minutes to be able to vote again.
		1. Keep your Service Node active until the Superblock.


??? example "Windows"
	1. Start the wallet. If it's not already running, use the following instructions to start it. 
		1. Navigate to the `bin` folder within your Blocknet wallet installation directory (EG: `C:\Users\[YourUsername]\Downloads\blocknet\bin\`)

			??? tip "Tip: This requires the *blocknetdx-[version]-win64.zip* download version"
				To interact with the wallet via the command line, the `blocknetdx-[version]-win64.zip` wallet version is needed.

		1. Type in the following command, replacing `[USERNAME]` and `[PASSWORD]` with the respective `rpcuser=` and `rpcpassword=` values from your `blocknetdx.conf` file located in the `C:\Users\[YourUsername]\AppData\Roaming\BlocknetDX` directory. This directory can be found by opening the file explorer and pasting in `%appdata%\Roaming\BlocknetDX\` into the file explorer path field.

				blocknetdxd -rpcuser=[USERNAME] -rpcpassword=[PASSWORD]

			*Example:*

				blocknetdxd -rpcuser=JohnBlocknet -rpcpassword=supersecretpassword

	1. The wallet process will begin in the current terminal window. You will need to open a new terminal window or tab and navigate to the same location before continuing.
	1. If your wallet was just started, you may need to wait a few minutes for the proposals to sync, otherwise you may not see the full list of proposals. Use the following command to view the proposals:

			blocknetdx-cli mnbudget show

	1. From this list, all proposals where `"BlockStart"` is equal the upcoming Superblock number are open for voting. You can filter the proposals to only show the upcoming proposals using the following command with `[SB-NUMBER]` replaced with the upcoming Superblock number:

			blocknetdx-cli mnbudget show | grep ": [SB-NUMBER]" -B 5 -A 15

		*Example:*

			blocknetdx-cli mnbudget show | grep ": 648000" -B 5 -A 15

	1. **Review the proposals and the amount requested.** It's a good idea to consider the total Superblock budget, the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with some background information and objectives.
	1. Vote for the proposal using the following command, replacing the variable with the respective values:

			blocknetdx-cli mnbudget vote [PROPOSAL-HASH] [VOTE]

		* `PROPOSAL-HASH`:  The hash listed for the proposal you are voting for
		* `VOTE`:  Your vote (‘yes’ or ‘no’). `yes` means you'd like to vote to fund the proposal and `no` means you'd like to vote against the proposal so it isn't funded.

		*Example:*

			blocknetdx-cli mnbudget vote 06a50c125aa305fbe38fa0fe9a1b39db1b1318838aadaec55f95c7a52101d83f yes

		??? tip "Tip: Voting for Multiple Service Nodes"
			To vote for multiple Services Nodes at the same time, use the following format instead: `blocknetdx-cli mnbudget vote-many [PROPOSAL-HASH] [VOTE]`. Notice the second term is now `vote-many` instead of `vote`. This needs to be performed from the Blocknet wallet that contains the 5000 BLOCK collateral.

	1. Press the *Enter* key to submit the command and register your vote to the network.
	1. Voting Complete!
		1. Repeat this process for every proposal you are voting for.
		1. If you want to change a vote, you must wait at least 60 minutes to be able to vote again.
		1. Keep your Service Node active until the Superblock.


??? example "MacOS"
	1. Start the wallet. If it's not already running, use the following instructions to start it. 
		1. Navigate to the `bin` folder within your Blocknet wallet installation directory (EG: `~/Downloads/blocknet/bin/`)

			??? tip "Tip: This requires the *blocknetdx-[version]-osx64.tar.gz* download version"
				To interact with the wallet via the command line, the `blocknetdx-[version]-osx64.tar.gz` wallet version is needed.

		1. Type in the following command, replacing `[USERNAME]` and `[PASSWORD]` with the respective `rpcuser=` and `rpcpassword=` values from your `blocknetdx.conf` file located in your `~/Library/Application Support/BlocknetDX/` directory. This directory can be found by opening the Finder, in the program menu selecting *Go* > *Go to Folder*, entering `~/Library/Application Support/BlocknetDX/` in the path, and pressing *Enter*.

				./blocknetdxd -rpcuser=[USERNAME] -rpcpassword=[PASSWORD] -daemon

			*Example:*

				./blocknetdxd -rpcuser=JohnBlocknet -rpcpassword=supersecretpassword -daemon

	1. If your wallet was just started, you may need to wait a few minutes for the proposals to sync, otherwise you may not see the full list of proposals. Use the following command to view the proposals:

			./blocknetdx-cli mnbudget show

	1. From this list, all proposals where `"BlockStart"` is equal the upcoming Superblock number are open for voting. You can filter the proposals to only show the upcoming proposals using the following command with `[SB-NUMBER]` replaced with the upcoming Superblock number:

			./blocknetdx-cli mnbudget show | grep ": [SB-NUMBER]" -B 5 -A 15

		*Example:*

			./blocknetdx-cli mnbudget show | grep ": 648000" -B 5 -A 15

	1. **Review the proposals and the amount requested.** It's a good idea to consider the total Superblock budget, the other proposals amounts requested, the priorities of the project, and if the proposal aligns with those priorities and greater vision of the project. The link for each proposal should lead to a description of what the proposal is for with some background information and objectives.
	1. Vote for the proposal using the following command, replacing the variable with the respective values:

			./blocknetdx-cli mnbudget vote [PROPOSAL-HASH] [VOTE]

		* `PROPOSAL-HASH`:  The hash listed for the proposal you are voting for
		* `VOTE`:  Your vote (‘yes’ or ‘no’). `yes` means you'd like to vote to fund the proposal and `no` means you'd like to vote against the proposal so it isn't funded.

		*Example:*

			./blocknetdx-cli mnbudget vote 06a50c125aa305fbe38fa0fe9a1b39db1b1318838aadaec55f95c7a52101d83f yes

		??? tip "Tip: Voting for Multiple Service Nodes"
			To vote for multiple Services Nodes at the same time, use the following format instead: `./blocknetdx-cli mnbudget vote-many [PROPOSAL-HASH] [VOTE]`. Notice the second term is now `vote-many` instead of `vote`. This needs to be performed from the Blocknet wallet that contains the 5000 BLOCK collateral.

	1. Press the *Enter* key to submit the command and register your vote to the network.
	1. Voting Complete!
		1.	Repeat this process for every proposal you are voting for.
		1.	If you want to change a vote, you must wait at least 60 minutes to be able to vote again.
		1. Keep your Service Node active until the Superblock.










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





