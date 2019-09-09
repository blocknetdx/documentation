title: Block DX Configuration Guide
description: This guide explains how to configure wallets for trading on Block DX for decentralized peer-to-peer exchange directly from your own wallet.


# Block DX Configuration
[Block DX](/blockdx/introduction) is a truly decentralized exchange that enables peer-to-peer trading. Since trading with Block DX is performed directly from the wallet of the assets being traded, these wallets must be properly configured. This guide will walk you through the configuration process, all performed through a few simple screens within Block DX. For the full setup process, see the [Block DX Setup Guide](/blockdx/setup).

<iframe width="560" height="315" src="https://www.youtube.com/embed/6QcyazmnXws?start=92" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. [Install the Blocknet wallet](/wallet/setup). The Blocknet wallet is **required** to facilitate peer-to-peer trading on Block DX.
1. Install the wallets of the [digital assets](/resources/glossary/#digital-asset) you will be trading. These wallets are **required** to store your funds since Block DX is non-custodial. [View the list compatible digital assets and wallet versions](/blockdx/listings).

	??? info "Note: Lite wallets and Electrum wallets are not supported."
		Due to the interactions the wallet needs to make in order to ensure secure trading, lite wallets and Electrum wallets are not currently supported. However, Blocknet's XRouter will allow for the development of decentralized SPV wallets so downloading the blockchains will not be required in the future.

1. [Install Block DX](/blockdx/installation). This is a desktop dApp and not supported in-browser.
	
	???+ warning "Warning"
		You *__must__* have the Blocknet wallet and the wallets of the assets you will be trading installed  *before* continuing.

1. Follow the instructions on the screen to complete the setup. 
	* It is recommended you use the *Quick Setup* option, but if you use custom data directories for your wallets then you'll need to use the *Expert Setup* option.
	* It's recommended to configure all wallets you have installed even if you won't be trading those assets right now. Any time you want to trade additional assets, you will need to go through the configuration process again so including those wallets now will save time.
	* After configuration is complete, you can add new wallets or reconfigure existing wallets with the *Add & Update Wallets* menu option.

	![Configuration](/img/blockdx/config-fresh-setup.png)


--8<-- "complete-blockdx-configuration.md"















<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





