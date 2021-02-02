title: Block DX Configuration Guide
description: This guide explains how to configure wallets for trading on Block DX for decentralized peer-to-peer exchange directly from your own wallet.


# Block DX Configuration
[Block DX](/blockdx/introduction) is a truly decentralized exchange that enables peer-to-peer trading. Since trading with Block DX is performed directly from the wallet of the assets being traded, these wallets must be properly configured. This guide will walk you through the configuration process, all performed through a few simple screens within Block DX. For the full setup process, see the [Block DX Setup Guide](/blockdx/setup).

<iframe width="560" height="315" src="https://www.youtube.com/embed/6QcyazmnXws?start=92" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. [Install the Blocknet wallet](/wallet/setup). The Blocknet wallet is **required** to facilitate peer-to-peer trading on Block DX.
1. Install the wallets of the [digital assets](/resources/glossary/#digital-asset) you will be trading and/or the [XLite wallet](/xlite/setup). These wallets are **required** to store your funds since Block DX is non-custodial. [View the list compatible digital assets and wallet versions](/blockdx/listings).

	???+ info "Note: XLite wallet is the only supported lite wallet at this time. Other lite wallets in general, and Electrum wallets, are not supported."
		Due to the interactions the wallet needs to make to ensure secure trading, lite wallets and Electrum wallets are not currently supported. However, Blocknet's XRouter allows for the development of decentralized, noncustodial SPV wallets, and  [XLite wallet](/xlite/setup) is one such wallet. If XLite supports the assets you want to trade, you can use XLite instead of installing the native wallets of those assets. Installing the native wallet of an asset will require downloading the full blockchain of the asset; using XLite will not.

1. [Install Block DX](/blockdx/installation). This is a desktop dApp and not supported in-browser.
	
???+ warning "Warning"
    You *__must__* have the Blocknet wallet and the wallets of the assets you will be trading and/or the [XLite wallet](/xlite/setup) installed  *before* continuing. You __*must also*__ have BlockDX v1.9.x or greater to use XLite with BlockDX. [Read about when to use XLite vs when to use asset native wallets](/blockdx/setup#setup)

## 2 Step Configuration

??? example "Step 1 - This step is required for everyone. __*This step must be performed before Step 2*__"

    When you first open BlockDX, you should see the __FRESH SETUP__ screen below. (If you don't see this screen, choose the __Fresh Setup__ option when it's presented, or arrive at the __Fresh Setup__ option through *Menu->Add & Update Wallets*.):

	![Configuration](/img/blockdx/config-fresh-setup.png) 

    * It is recommended you use the *Quick Setup* option, but if you use custom data directories for your wallets then you'll need to use the *Expert Setup* option.

	![Configuration](/img/blockdx/select-native-wallets.png) 

	* It's recommended to configure all native coin wallets you have installed.
	* __*Skip those assets you will trade from XLite, even if their native coin wallets are installed.*__
	* Blocknet native wallet cannot be skipped, but you can still trade BLOCK from XLite if you wish.

	![Configuration](/img/blockdx/restart.png) 

	* When you arrive at the __CONFIGURATION COMPLETE__ screen, be sure to carefully read and follow steps 1 & 2 __*BEFORE*__ clicking *RESTART*

	![Configuration](/img/blockdx/menu.png) 

    * After configuration is complete, you can add new wallets or reconfigure existing wallets at any time under *MENU->Add & Update Wallets*. 

??? example "Step 2 - This step is required if *some* of the [digital assets](/resources/glossary/#digital-asset) you'll be trading will be stored in [XLite wallet](/xlite/setup). "
	
	* Firstly, if you haven't already done so, [install XLite wallet](/xlite/setup), create a new XLite wallet for yourself, and backup your 12 word mnemonic phrase, then leave XLite open and unlocked.
	* At this point, you should have Blocknet wallet open and unlocked, XLite open and unlocked, and BlockDX also open.
	* In BlockDX, you will likely see an __OPEN CONFIGURATION__ screen like this:

	![Configuration](/img/blockdx/open-configuration.png) 

	* On this screen, you should click *OPEN CONFIGURATION*

	??? example "If you didn't see the __OPEN CONFIGURATION__ screen pictured above, click here."
	    You will likely see a screen similar to this:

	    ![Configuration](/img/blockdx/menu.png) 

	    * On this screen, select *MENU->Add & Update Wallets*.

	* You should now see a screen like the following and you should select `Litewallet Setup`.

	![Configuration](/img/blockdx/lite-wallet-setup.png) 

	??? info "Note: Future versions of BlockDX may give an option at this point to specify a non-standard path for the Cloudchains, xlite and/or BLOCK-DX directories."
		The defaults for these three directories are:

		* Windows: `BLOCK-DX` dir is found in `%localappdata%`; `xlite` and `Cloudchains` dirs are found in `%appdata%`.
		* MacOS: `~/Library/Application Support/`
		* linux: `~/.config/`

	* Clicking *CONTINUE* on the above screen will take you to the following screen:

	![Configuration](/img/blockdx/select-xlite-assets.png) 

	* On this screen, __*uncheck*__ all assets you __*don't*__ want to trade from XLite.
	* For example, any assets for which you configured the asset's native wallet in Step 1 above should be __*unchecked*__. One possible exception to this is the Blocknet native wallet. Even though the Blocknet native wallet was configured in Step 1 above, you should check the Blocknet box here if you want to trade BLOCK from XLite rather than trading it from the Blocknet native wallet.

	??? tip "Tip: Keep a few BLOCK in your Blocknet native wallet to cover [Taker Fees](/blockdx/fees)."
        [Taker Fees](/blockdx/fees) are currently deducted from Blocknet native wallet. Therefore, to avoid `Insufficient Funds` errors, it's a good idea to keep a few BLOCK in your Blocknet native wallet. Any BLOCK you may have in your XLite wallet cannot currently be used to pay Taker Fees.

--8<-- "complete-blockdx-configuration.md"















<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





