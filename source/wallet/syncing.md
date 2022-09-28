title: Blocknet Wallet Syncing Guide
description: This guide explains how to sync your Blocknet wallet with and without bootstrap chain files containing the Blocknet blockchain.


# Syncing the Wallet
Whenever you start the wallet, it must sync with the blockchain. This means that it is downloading all the data (accounts and transactions) on the Blocknet blockchain. This process is required for the wallet to function properly.

??? info "Note: Wallet balance may be incorrect until fully synced."
	When the wallet syncs, it downloads the data in chronological order. Therefore, if the wallet is not fully synced, it may not reflect recent transactions. This can cause the an incorrect balance to be shown until syncing is finished.

---

## Synchronization

When the wallet is opened, it begins syncing automatically. If this is the first time syncing the wallet or if you haven't opened the wallet in a few weeks, you can use a [bootstrap](/wallet/syncing/#bootstrap) to sync the wallet faster.

To view the syncing status, use the following instructions:


??? abstract "View syncing status using redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	- In the upper-right corner of the wallet you will see a set of icons.

		![Status Bar](/img/wallet-redesign/status-bar.png)

	- The bar shows how far out of sync the wallet is. This is __*NOT*__ an estimate of how long it will take to sync.

		![Sync Status](/img/wallet-redesign/status-syncing-1.png)

	- After syncing the blockchain data, it will begin syncing other network information.

		![Sync Status](/img/wallet-redesign/status-syncing-2.png)
		![Sync Status](/img/wallet-redesign/status-syncing-3.png)

	- When syncing is complete, it will read *Fully synced*, followed by the latest block.

		![Sync Complete](/img/wallet-redesign/status-syncing-complete.png)

	- The left-most symbol is how many peers you have. The number of peer is important because you download the blockchain data from them. If you don't have any peers, you will be unable to sync. When you first start the wallet this number will be low, but will increase after a few minutes. Typically you will have 8-16 peers.

		![Peers Status](/img/wallet-redesign/status-peers.png)

	- If you have 0 peers, make sure your firewall or antivirus software isn't blocking outgoing connections.


??? abstract "View syncing status using classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	- At the bottom of the wallet you will see a set of icons.

		![Status Bar](/img/wallet-classic/status-bar.png)

	- The bar shows how far out of sync the wallet is. This is __*NOT*__ an estimate of how long it will take to sync.

		![Sync Status](/img/wallet-classic/status-syncing-1.png)

	- After syncing the blockchain data, it will begin syncing other network information.

		![Sync Status](/img/wallet-classic/status-syncing-2.png)
		![Sync Status](/img/wallet-classic/status-syncing-3.png)

	- When syncing is complete, it will read *Fully synced*, followed by the latest block.

		![Sync Complete](/img/wallet-classic/status-syncing-complete-1.png)

	- Hover over the symbol second from the right to show how many peers you have. The number of peer is important because you download the blockchain data from them. If you don't have any peers, you will be unable to sync. When you first start the wallet this number will be low, but will increase after a few minutes. Typically you will have 8-16 peers.

		![Peers Status](/img/wallet-classic/status-peers.png)

	- If you have 0 peers, make sure your firewall isn't blocking outgoing connections. This also may be due to antivirus software.

### Troubleshoot Syncing Issues

??? warning "Check Peer Connection Count; Fix No Peers Issue"
	1. If your wallet fails to sync, first count how many peers it has:

	    ??? abstract "Count Peers in Redesigned Wallet"
		The left-most symbol is how many peers you have:
		![Peers Status](/img/wallet-redesign/status-peers.png)

	    ??? abstract "Count Peers in Classic Wallet"
		Hover over the symbol second from the right to show peer connections:
		![Peers Status](/img/wallet-classic/status-peers.png)

	    ??? abstract "Count Peers in CLI Wallet"
		In the directory containing `blocknet-cli`,  issue the command:
		```
		./blocknet-cli getconnectioncount
		```

	1. If you have 0 peers, verify your firewall or antivirus software
       isn't blocking outgoing connections. (Hint: See if you get peers
       when you disable firewall and antivirus).
	1. If the Internet connection on your staking computer may have
       been unstable, it will be good to see if your wallet has mistakenly banned
       peers it shouldn't have banned.
		   - Check this in the GUI/Qt wallet
			   by going to *Tools->Debug Console* and issuing the following command:
			   ```
			   listbanned
			   ```
		   - In the CLI wallet, simply type this in the dir where `blocknet-cli` exists:
			   ```
			   ./blocknet-cli listbanned 
			   ```
	   If *listbanned* shows you have lots
       of banned peers, it will likely be helpful to issue the *clearbanned* command.
		   - In *Tools->Debug Console* of
			   the GUI/Qt wallet:
			   ```
			   clearbanned
			   ```
		   - Or in the CLI wallet, simply type this in the dir where `blocknet-cli` exists:
			   ```
			   ./blocknet-cli clearbanned
			   ```
	   If peer banning becomes a recurring problem, you may
       want to limit the time for which a peer is banned by adding the
       following line to your `blocknet.conf` file, located by default
       in your
       [Blocknet Data Directory](/wallet/backup-restore/#data-directory):
	   ```
	   bantime=180
	   ```
	   Then restart your Blocknet wallet for the new bantime to take effect.
	1. If, after verifying neither firewall nor antivirus nor banned
       peers is blocking outgoing connections, you still have 0 peers, try adding peers manually:
		 1. *Quit/Close* your wallet
		 1. Navigate to your data directory:
			 --8<-- "data-directories.md"
		 1. Open the `blocknet.conf` file in your data directory with a text editor (e.g. Notepad for Windows; TextEdit for Mac).
		 1. Find a list of active peer nodes to add:
			1. Navigate in a browser to [Chainz Blocknet Explorer Network Page](https://chainz.cryptoid.info/block/#!network):
			![Node List A](/img/wallet/node-list-a.png) 
			1. Click on *node list* next to the wallet version you are
			running:
			![Node List A](/img/wallet/node-list-b.png)
			1. Select at least 12 `addnode=xxx.xxx.xxx.xxx` statements
               and copy them into the clipboard
	    1. Paste the contents of the clipboard into your
           `blocknet.conf` file and save the file.
	    1. Reopen your Blocknet wallet.

??? warning "Syncing Halts Unexpectedly"
	Occasionally, even when there are plenty of peer connections, a wallet will get stuck while syncing the
	blockchain. When this happens, syncing simply stops on a
	particular block and doesn't continue beyond that block. When this
	happens, it is often possible to resume syncing progress with the
	following procedure:

	1. Open *Tools->Debug Console*.
		![Reconsider Block](/img/wallet/reconsider-block.png)
	1. In the *Debug Console*, type
	```getblockcount```
	1. Select & copy the blockcount returned by that command into the
       clipboard (`1889667` in the example above).
	1. Type the command,
	```getblockhash <blockcount>```
	where `<blockcount>` is pasted into the *Debug Console* from
	the clipboard.
	1. Select & copy the blockhash returned by that command into the
       clipboard (`7512a3a315040e69f6f850b002697d0c6360b8fedf931e7be0f770c906f72c2f`
       in the example above).
	1. Type the command,
	```reconsiderblock <blockhash>```
	where `<blockhash>` is pasted into the *Debug Console* from
	the clipboard.
	1. When you've finished issuing these three commands, your *Debug
	Console* should look something like the screenshot above. Notice how
	the number returned from the first command is used in the
	second command, and the number returned from the second
	command is used in the third command.
	1. After issuing these three commands, wait a couple minutes to see if your
    wallet resumes syncing.
	1. If it doesn't resume syncing, *Quit/Close* your wallet and try
    the [bootstrap](#bootstrap) procedure.
	1. If the Bootstrap procedure also fails, see the __Troubleshooting__ instructions
    below for getting help from the Blocknet Discord Server.

	!!! info "Note: If using the CLI wallet, the same three commands given above can be issued through the Command Line Interface."


--8<-- "troubleshooting.md"

---

## Bootstrap

A bootstrap is a set of files containing blockchain data up to a certain point in time. Using these files helps shorten the amount of time it takes to sync the wallet since you don't need to sync the blockchain from scratch.

???+ info "Video Tutorials"
	* [Windows](https://www.youtube.com/watch?v=66o0fQ0sHxQ)
	* [MacOS](https://www.youtube.com/watch?v=kTJ-YBdHrtM)

1. [Install the wallet](/wallet/installation) or update to the [latest release](https://blocknet.co/#downloads).
1. Download the [latest bootstrap files](https://blocknet.co/files/Blocknet.zip).
1. Find the downloaded `Blocknet.zip` file. The default location is in your *Downloads* folder.
1. Double-click the file to unzip and reveal a folder named `Blocknet`.
1. Close and quit the Blocknet wallet if it is running.
--8<-- "data-directories-2.md"

1. Remove all files and folders **EXCEPT** for `wallet.dat`, `blocknet.conf`, `xbridge.conf`, `xrouter.conf`, `servicenode.conf`, and the `wallets/` folder (you may not have all these files). Again, **DO NOT** delete the `wallet.dat` file or `wallets/` folder as it contains the private keys for your funds. Deleting these will result in loss of funds.
1. Inside the downloaded `Blocknet` folder there are the `blocks/`, `chainstate/`, and `indexes/` folders. Move these 3 folders into the Blocknet wallet's data directory that you just removed files from.
1. Start the wallet and syncing should begin at the bootstrap's last block.
1. Read more about syncing [above](/wallet/syncing/#synchronization).

---

<!-- 
# Troubleshooting


trouble shooting
	no peers - firewall
		add peers guide https://www.youtube.com/watch?v=7dRyb6eGjCc
	no connection - firewall
-->












<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





