title: Block DX Configuration Guide
description: This guide explains how to configure wallets for trading on Block DX for decentralized peer-to-peer exchange directly from your own wallet.


# Block DX Configuration
[Block DX](/blockdx/introduction) is a truly decentralized exchange that enables peer-to-peer trading. Since trading with Block DX is performed directly from the wallet of the assets being traded, these wallets must be properly configured. This guide will walk you through the configuration process, all performed through a few simple screens within Block DX. For the full setup process, see the [Block DX Setup Guide](/blockdx/setup).

<iframe width="560" height="315" src="https://www.youtube.com/embed/6QcyazmnXws?start=92" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. [Install the Blocknet wallet](/wallet/setup). The Blocknet wallet is **required** to facilitate peer-to-peer trading on Block DX.
1. Install the wallets of the [digital assets](/resources/glossary/#digital-asset) you will be trading. These wallets are **required** to store your funds since Block DX is non-custodial. [View the list compatible digital assets and wallet versions](/blockdx/listings).

	??? abstract "Note: Lite wallets and Electrum wallets are not supported."
		Due to the interactions the wallet needs to make in order to ensure secure trading, lite wallets and Electrum wallets are not currently supported. However, Blocknet's XRouter will allow for the development of decentralized SPV wallets so downloading the blockchains will not be required in the future.

1. [Install Block DX](/blockdx/installation). This is a desktop dApp and not supported in-browser.
	
	???+ warning "Warning"
		You *__must__* have the Blocknet wallet and the wallets of the assets you will be trading installed  *before* continuing.

1. Scroll through the list and select the wallets of the assets you will be trading. It's recommended to select all wallets you have installed even if you won't be trading those assets right now. Any time you want to trade additional assets, you will need to go through the configuration process again so including those wallets now will save time.

	![Wallets](/img/blockdx/config-select-wallets.png)
	
1. Select *CONTINUE*.
1. Select the version of each wallet you have installed. Use the dropdown to view all versions.

	![Versions](/img/blockdx/config-versions.png)

	![Version](/img/blockdx/config-versions-options.png)

	!!! danger "Warning"
		*__DO NOT__* use any wallet versions that are not listed. This may result in **LOSS OF FUNDS**.

1. Select *CONTINUE*.
1. Select the location where each of your wallets is installed. If you use the default install locations then you may select *CONTINUE*.

	![Locations](/img/blockdx/config-data-dirs-1.png)
	
	1. If you see errors this can be that either the wallet is not installed in the default location or that you do not have this wallet installed. Selecting *CONTINUE* will skip configuring any wallets that have errors.

		![Location Error](/img/blockdx/config-data-dirs-2.png)
	
1. In order for Block DX to communicate with the wallets, usernames and passwords must be created. Select *CONTINUE* to use the *Quick Setup* option. It is **HIGHLY RECOMMENDED** to generate these automatically.

	![Credentials](/img/blockdx/config-credential-options.png)
	
1. Select *FINISH* to save these configurations.

	![Finish](/img/blockdx/config-finish.png)

1. If you have any wallets open, including the Blocknet wallet, they must be restarted. This is **required** so the wallets are running the newly configured settings.
1. [Open and fully unlock](/wallet/lock-unlock/#fully-unlock) the Blocknet wallet. Since Block DX uses the Blocknet wallet to facilitate trading, it is **required** to have the Blocknet wallet open and fully unlocked to use Block DX.
1. Open and fully unlock the wallets of the assets you will be trading. This is required since you will be trading directly from those wallets.

	!!! info "Note: Make sure the wallet is fully unlocked and not just unlocked for staking."

1. Select *RESTART*.

	![Restart](/img/blockdx/config-restart.png)

1. Block DX will now restart automatically.
1. If you see the following error when Block DX restarts, it is most likely because on of the following:
	1. The Blocknet wallet was not restarted and unlocked before restarting Block DX.
	1. The Blocknet wallet is not open and unlocked before restarting Block DX.

	![Connection Error](/img/blockdx/connection-error.png)

--8<-- "complete-blockdx-configuration.md"














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





