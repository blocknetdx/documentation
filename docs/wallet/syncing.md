title: 
description:


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

	- If you have 0 peers, make sure your firewall isn't blocking outgoing connections.


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

	- The symbol second from the right is how many peers you have. The number of peer is important because you download the blockchain data from them. If you don't have any peers, you will be unable to sync. When you first start the wallet this number will be low, but will increase after a few minutes. Typically you will have 8-16 peers.

		![Peers Status](/img/wallet-classic/status-peers.png)

	- If you have 0 peers, make sure your firewall isn't blocking outgoing connections. This also may be due to antivirus software.



--8<-- "troubleshooting.md"

---

## Bootstrap

A bootstrap is a set of files containing blockchain data up to a certain point in time. Using these files helps shorten the amount of time it takes to sync the wallet since you don't need to sync the blockchain from scratch.

1. [Install the wallet](/wallet/installation) or update to the [latest release](https://github.com/BlocknetDX/blocknet/releases/latest).
1. Download the [latest bootstrap files](https://github.com/BlocknetDX/blocknet-blockchain-bootstrap/releases/download/v1.0/BlocknetDX.zip).
1. Find the downloaded `BlocknetDX.zip` file. The default location is in *Downloads*.
1. Double-click the file to unzip and reveal a folder named `BlocknetDX`.
1. Close and quit the Blocknet wallet if it is running.
--8<-- "data-directories-2.md"

1. Remove all files and folders **EXCEPT** for `wallet.dat`, `blocknetdx.conf`, `xbridge.conf`, `servicenode.conf`, and the `backups/` folder. Again, **DO NOT** delete the `wallet.dat` file as it contains the private keys for your funds. Deleting this file will result in loss of funds.
1. Inside the unzipped `BlocknetDX` folder there are `blocks/` and `chainstate/` folders. Move these 2 folders into the Blocknet wallet's data directory that you just removed files from.
1. Start the wallet and syncing should begin at the bootstrap's last block.
1. Read more about syncing [above](/wallet/syncing/#synchronization).

---

<!-- 
# Troubleshooting


trouble shooting
	no peers - firewall
	no connection - firewall
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





