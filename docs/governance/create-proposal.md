title: Blocknet Superblock Proposal Submission Guide
description: This guide explains how to create and submit Blocknet Superblock proposals for funded initiatives to be voted on by the Service Node network.


# Proposal Submission
This guide explains how to create and submit Blocknet Superblock proposals for funded initiatives to be voted on by the Service Node network. Proposal submission is important for the decentralized governance model to function properly.

???+ info "Proposal Submission Deadline"
    The deadline for creating proposals is 2880 blocks prior to the Superblock.

---

## Create A Proposal

1. It's recommended to submit a draft proposal to the [proposal forum](https://forum.blocknet.co/c/draft-proposals) that clearly and accurately conveys the following relevant information:
  * Proposal name using only alpha-numerics (*example*: Qt-Exchange-Widget)
  * What is being proposed
  * Rationale and further explanation of proposal & background info
  * Technical explanation/agenda of feature/proposal
  * Estimated time for components in the proposal
  * Teams/person undertaking and responsible for the work
  * Cost assessment
  * Fund custodians
1. See [this guide](https://forum.blocknet.co/t/a-guide-to-proposals-viewing-voting-creating/23) for help posting.
1. After allowing some time for the draft proposal to be reviewed, the final proposal with any edits should be submitted to the relevant [final proposal Superblock category](https://forum.blocknet.co/c/final-proposals).
1. Once a final proposal is submitted to the forum, copy the post URL and create a shortened URL: [https://bit.ly/](https://bit.ly/)
1. Continue on to [submit the proposal from the Qt wallet](/governance/create-proposal/#submit-from-the-qt-wallet) or to [submit the proposal via command line](/governance/create-proposal/#submit-from-the-terminal).

---

## Submit from the Qt Wallet

??? example "Submit using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	1. Open and sync the [Blocknet wallet](/wallet/setup). The wallet needs to be unlocked to submit a proposal.
	1. Ensure there is a minimum of 11 BLOCK in your wallet to pay for the proposal submission fee (10 BLOCK fee + transaction fee). This fee should be added to the proposal amount (in a later step) so that you are reimbursed if the proposal passes (see [passing criteria](/governance/introduction/#passing-criteria)). If you would like to confirm the submission fee you can use the `proposalfee` command.
	1. In the side menu, go to *Proposals*.
	1. Click on the *Create New Proposal* button at the top of the screen.
	1. Fill out the form fields:

		* *Proposal name* = The name of the proposal using only alpha-numerics.
		* *URL* = The shortened URL for the proposal link created.
		* *Description* = A short description of the proposal.
		* *Superblock #* = The Superblock block number the proposal is being submitted for.
		* *Amount* = The amount of funding requested (must be a whole number).
		* *Payment address* = The BLOCK address the funding will be paid out to.
		* A total of 107 characters can be used for the proposal name, URL, and description combined.

	1. Click the *Continue* button at the bottom of the screen.
	1. Follow the screens to review the information and submit the proposal.
	1. Wait for the transaction to have 1 confirmation (about 1 minute) then verify the proposal has been properly submitted by [viewing the proposals](/governance/view-proposals).


??? example "Submit using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	1. Open and sync the [Blocknet wallet](/wallet/setup). The wallet needs to be unlocked to submit a proposal.
	1. Ensure there is a minimum of 11 BLOCK in your wallet to pay for the proposal submission fee (10 BLOCK fee + transaction fee). This fee should be added to the proposal amount (in a later step) so that you are reimbursed if the proposal passes (see [passing criteria](/governance/introduction/#passing-criteria)). If you would like to confirm the submission fee you can use the `proposalfee` command.
	1. In the program menu, go to *Window* > *Console*. The debug console will open in a new window.
	1. The proposal submission command uses the following command structure (all one line): 

			createproposal [PROPOSAL_NAME] [SUPERBLOCK_BLOCK] [AMOUNT] [ADDRESS] [URL] [DESCRIPTION]

		* `PROPOSAL_NAME` = The name of the proposal using only alpha-numerics.
		* `SUPERBLOCK_BLOCK` = The Superblock block number the proposal is being submitted for.

			  * Specifying a value of `0` automatically submits for the next Superblock.
			  * If you know the Superblock block number you wish to create a proposal for, then enter that value instead of `0`.

		* `AMOUNT` = The amount of funding requested.
		* `ADDRESS` = The BLOCK address the funding will be paid out to.
		* `URL` = The shortened URL for the proposal link created.
		* `DESCRIPTION` = A short description of the proposal.
		* A total of 107 characters can be used for PROPOSAL_NAME, URL, and DESCRIPTION combined.

	1. Type the above command replacing the variables with the respective values in place. Below is an example:

			createproposal privacy-mixer 0 100 Bxxxxxxxxxxxxxxxxxxxxxxxxx https://goo.gl/xxxxxxx "Build privacy mixer app"

	1. Press the *Enter* key to submit the proposal to the network.
	1. Wait for the transaction to have 1 confirmation (about 1 minute) then verify the proposal has been properly submitted by [viewing the proposals](/governance/view-proposals).

---

## Submit from the Terminal

??? example "Linux"
	1. Start the [wallet](/wallet/setup). If it's not already running, use the following instructions to start it. 
		1. Navigate to the `bin` folder within your Blocknet wallet installation directory (EG: `~/blocknet/bin/`)
		1. Type in the following command, replacing `[USERNAME]` and `[PASSWORD]` with the respective `rpcuser=` and `rpcpassword=` values from your `blocknet.conf` file located in your `~/.blocknet/` directory.

				./blocknetd -rpcuser=[USERNAME] -rpcpassword=[PASSWORD] -daemon

			*Example:*

				./blocknetd -rpcuser=JohnBlocknet -rpcpassword=supersecretpassword -daemon

	1. The wallet process will begin in the current terminal window. You will need to open a new terminal window or tab and navigate to the same location before continuing.
	1. If your wallet was just started, you may need to wait a few minutes for the wallet to sync.
	1. Ensure there is a minimum of 11 BLOCK in your wallet to pay for the proposal submission fee (10 BLOCK fee + transaction fee). This fee should be added to the proposal amount (in a later step) so that you are reimbursed if the proposal passes (see [passing criteria](/governance/introduction/#passing-criteria)). If you would like to confirm the submission fee you can use the `proposalfee` command.
	1. The proposal submission command uses the following command structure (all one line): 

			./blocknet-cli createproposal [PROPOSAL_NAME] [SUPERBLOCK_BLOCK] [AMOUNT] [ADDRESS] [URL] [DESCRIPTION]

		* `PROPOSAL_NAME` = The name of the proposal using only alpha-numerics.
		* `SUPERBLOCK_BLOCK` = The Superblock block number the proposal is being submitted for.

			  * Specifying a value of `0` automatically submits for the next Superblock.
			  * If you know the Superblock block number you wish to create a proposal for, then enter that value instead of `0`.

		* `AMOUNT` = The amount of funding requested.
		* `ADDRESS` = The BLOCK address the funding will be paid out to.
		* `URL` = The shortened URL for the proposal link created.
		* `DESCRIPTION` = A short description of the proposal.
		* A total of 107 characters can be used for PROPOSAL_NAME, URL, and DESCRIPTION combined.

	1. Type the above command replacing the variables with the respective values in place. Below is an example:

			./blocknet-cli createproposal privacy-mixer 0 100 Bxxxxxxxxxxxxxxxxxxxxxxxxx https://goo.gl/xxxxxxx "Build privacy mixer app"

	1. Press the *Enter* key to submit the proposal to the network.
	1. Wait for the transaction to have 1 confirmation (about 1 minute) then verify the proposal has been properly submitted by [viewing the proposals](/governance/view-proposals).


??? example "Windows"
	1. Start the [wallet](/wallet/setup). If it's not already running, use the following instructions to start it. 
		1. Navigate to the `bin` folder within your Blocknet wallet installation directory (EG: `C:\Users\[YourUsername]\Downloads\blocknet\bin\`)

			??? tip "Tip: This requires the *blocknet-[version]-win64.zip* download version"
				To interact with the wallet via the command line, the `blocknet-[version]-win64.zip` wallet version is needed.

		1. Type in the following command, replacing `[USERNAME]` and `[PASSWORD]` with the respective `rpcuser=` and `rpcpassword=` values from your `blocknet.conf` file located in the `C:\Users\[YourUsername]\AppData\Roaming\Blocknet` directory. This directory can be found by opening the file explorer and pasting in `%appdata%\Roaming\Blocknet\` into the file explorer path field.

				./blocknetd -rpcuser=[USERNAME] -rpcpassword=[PASSWORD] -daemon

			*Example:*

				./blocknetd -rpcuser=JohnBlocknet -rpcpassword=supersecretpassword -daemon

	1. The wallet process will begin in the current terminal window. You will need to open a new terminal window or tab and navigate to the same location before continuing.
	1. If your wallet was just started, you may need to wait a few minutes for the wallet to sync.
	1. Ensure there is a minimum of 11 BLOCK in your wallet to pay for the proposal submission fee (10 BLOCK fee + transaction fee). This fee should be added to the proposal amount (in a later step) so that you are reimbursed if the proposal passes (see [passing criteria](/governance/introduction/#passing-criteria)). If you would like to confirm the submission fee you can use the `proposalfee` command.
	1. The proposal submission command uses the following command structure (all one line): 

			./blocknet-cli createproposal [PROPOSAL_NAME] [SUPERBLOCK_BLOCK] [AMOUNT] [ADDRESS] [URL] [DESCRIPTION]

		* `PROPOSAL_NAME` = The name of the proposal using only alpha-numerics.
		* `SUPERBLOCK_BLOCK` = The Superblock block number the proposal is being submitted for.

			  * Specifying a value of `0` automatically submits for the next Superblock.
			  * If you know the Superblock block number you wish to create a proposal for, then enter that value instead of `0`.

		* `AMOUNT` = The amount of funding requested.
		* `ADDRESS` = The BLOCK address the funding will be paid out to.
		* `URL` = The shortened URL for the proposal link created.
		* `DESCRIPTION` = A short description of the proposal.
		* A total of 107 characters can be used for PROPOSAL_NAME, URL, and DESCRIPTION combined.

	1. Type the above command replacing the variables with the respective values in place. Below is an example:

			./blocknet-cli createproposal privacy-mixer 0 100 Bxxxxxxxxxxxxxxxxxxxxxxxxx https://goo.gl/xxxxxxx "Build privacy mixer app"

	1. Press the *Enter* key to submit the proposal to the network.
	1. Wait for the transaction to have 1 confirmation (about 1 minute) then verify the proposal has been properly submitted by [viewing the proposals](/governance/view-proposals).


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
	1. If your wallet was just started, you may need to wait a few minutes for the wallet to sync.
	1. Ensure there is a minimum of 11 BLOCK in your wallet to pay for the proposal submission fee (10 BLOCK fee + transaction fee). This fee should be added to the proposal amount (in a later step) so that you are reimbursed if the proposal passes (see [passing criteria](/governance/introduction/#passing-criteria)). If you would like to confirm the submission fee you can use the `proposalfee` command.
	1. The proposal submission command uses the following command structure (all one line): 

			./blocknet-cli createproposal [PROPOSAL_NAME] [SUPERBLOCK_BLOCK] [AMOUNT] [ADDRESS] [URL] [DESCRIPTION]

		* `PROPOSAL_NAME` = The name of the proposal using only alpha-numerics.
		* `SUPERBLOCK_BLOCK` = The Superblock block number the proposal is being submitted for.

			  * Specifying a value of `0` automatically submits for the next Superblock.
			  * If you know the Superblock block number you wish to create a proposal for, then enter that value instead of `0`.

		* `AMOUNT` = The amount of funding requested.
		* `ADDRESS` = The BLOCK address the funding will be paid out to.
		* `URL` = The shortened URL for the proposal link created.
		* `DESCRIPTION` = A short description of the proposal.
		* A total of 107 characters can be used for PROPOSAL_NAME, URL, and DESCRIPTION combined.

	1. Type the above command replacing the variables with the respective values in place. Below is an example:

			./blocknet-cli createproposal privacy-mixer 0 100 Bxxxxxxxxxxxxxxxxxxxxxxxxx https://goo.gl/xxxxxxx "Build privacy mixer app"

	1. Press the *Enter* key to submit the proposal to the network.
	1. Wait for the transaction to have 1 confirmation (about 1 minute) then verify the proposal has been properly submitted by [viewing the proposals](/governance/view-proposals).










<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





