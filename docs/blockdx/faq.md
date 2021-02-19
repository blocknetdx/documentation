title: Block DX FAQ
description: A compiled list of frequently asked questions about Block DX, including technical questions about setup and trading.


# Block DX FAQs (Frequently Asked Questions)
Below are a list of Block DX frequently asked questions. For any questions not answered below, please join the Blocknet community on Discord for further discussion: [Discord Invite](https://discord.gg/2e6s7H8)

??? bug "Bug: If you used *Generate New Address* in BlockDX to generate the address to which the asset you just acquired should be sent, and the trade completed successfully but the asset didn't arrive in XLite as expected, click here for instructions what to do."
	1. Click on *Receive* in the upper right corner of XLite.
	1. Select the asset which did not arrive in XLite.
	1. Click *Generate new address* until the address to which the
       missing asset was sent appears in the *Your address* box.

??? question "How can I view currently active orders on BlockDX without opening the BlockDX application?"
	Visit the [Open Orders Page](https://blockdx.com/orders/).

???+ question "My version of [blockchain] wallet isn’t one of the options to select in the set up process. Can I use this version? Will it still work?""
	Only use wallet versions that are listed. If a version is not listed, it has either not been tested yet or is not compatible. Using a wallet version not listed may result in failed trades or loss of funds.


??? question "I have Block DX currently working with two wallets. I want to add a third blockchain wallet. Do I need to restart all wallets and go through the set up process again?""
	Yes, at this point in time the setup process needs to be repeated to add additional wallets. However, the blockchains previously selected will be remembered at the initial selection screen when repeating the setup process. The option to go through the setup process again can be found in the sidebar menu under the ‘Settings’ section.


<!-- ??? question "When I try to make an order, it says “There is a problem with your order.” What does that mean?""
	This error can be caused by a number of items. The most common reasons are that you are trying to take your own order, your wallets are locked, there are insufficient funds in the addresses you’re trading with, or those addresses have too little inputs. Insufficient funds can be caused by funds being immature due to staking at the same time or too many inputs being locked up in other orders. Error messaging will be improved in future versions to provide clearer messaging. -->


??? question "I am trading with BLOCK/LTC. If I make an order with BUY, does that mean I want to buy BLOCK (and sell LTC)? If I select “SELL,” that means I am selling BLOCK and will receive LTC?""
	If in the BLOCK/LTC market and using BUY order form, you will be buying BLOCK with LTC. Using the SELL order form means you will be selling BLOCK to receive LTC.


??? question "Do I always need to download and use full blockchains when trading?""
	Block DX is a full decentralized exchange with no central components, which requires the full blockchains to be installed and synced locally to submit the trades as transactions on the network. However, if the assets you want to trade are supported by [XLite wallet](/xlite/setup), you can use XLite and avoid downloading the full blockchains.


??? question "Do I need to have BLOCK in order to trade?""
	If you are making (placing) an order, no BLOCK is needed. If you are taking (filling) an order, BLOCK is need to cover the trade fee. [Read more...](/blockdx/fees)


??? question "If I want to place or accept multiple trades, I need to split my tokens into multiple UTXOs within the same address. How do I do that?""
	Splitting of tokens (inputs) can be done using the Coin Control functionality within the respective wallet. A tutorial will be released to explain this process.


??? question "I keep getting change addresses after making trades. How do I consolidate them all back into one address and then split them back up into multiple UTXOs again?""
	Combining and splitting of tokens (inputs) can be done using the Coin Control functionality within the respective wallet. A tutorial will be released to explain this process.


??? question "Why is my balance shown as 0 even though I have funds in it.""
	Some blockchains have Segwit enabled, which uses a different address system. At the moment these new Segwit addresses are not supported so legacy addresses must be used. For example, with Litecoin ‘L’ addresses should be used instead of ‘M’ addresses and with Monacoin ‘M’ addresses should be used instead of ‘P’ addresses.


??? question "Why is my balance on Block DX different than in my wallet?""
	The balance reported in Block DX may be less than the amount reported in the respective wallet because the Block DX reports the available balance. This is the balance showing in your wallet minus any immature funds (such as from staking) and funds locked up in open trades.


??? question "Why is market pricing showing as ‘N/A’?""
	If the alternate market pricing is shown as ‘N/A’, this means that the current API source selected does not support the current market. When this happens, another API source should be selected.













<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





