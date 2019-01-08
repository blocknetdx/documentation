meta_title: 
meta_description:

# Block DX FAQs (Frequently Asked Questions)


???+ question "My version of [blockchain] wallet isn’t one of the options to select in the set up process. Can I use this version? Will it still work?""
	Only use wallet versions that are listed. If a version is not listed, it has either not been tested yet or is not compatible. Using a wallet version not listed may result in failed trades or loss of funds.


??? question "I have Block DX currently working with two wallets. I want to add a third blockchain wallet. Do I need to restart all wallets and go through the set up process again?""
	Yes, at this point in time the setup process needs to be repeated to add additional wallets. However, the blockchains previously selected will be remembered at the initial selection screen when repeating the setup process. The option to go through the setup process again can be found in the sidebar menu under the ‘Settings’ section.


??? question "When I try to make an order, it says “There is a problem with your order.” What does that mean?""
	This error can be caused by a number of items. The most common reasons are that you are trying to take your own order, your wallets are locked, there are insufficient funds in the addresses you’re trading with, or those addresses have too little inputs. Insufficient funds can be caused by funds being immature due to staking at the same time or too many inputs being locked up in other orders. Error messaging will be improved in future versions to provide clearer messaging.


??? question "I am trading with BLOCK/LTC. If I make an order with BUY, does that mean I want to buy BLOCK (and sell LTC)? If I select “SELL,” that means I am selling BLOCK and will receive LTC?""
	If in the BLOCK/LTC market and using BUY order form, you will be buying BLOCK with LTC. Using the SELL order form means you will be selling BLOCK to receive LTC.


??? question "Why do I need to download and use full blockchains when trading?""
	Block DX is a full decentralized exchange with no central components, which requires the full blockchains to be installed and synced locally to submit the trades as transactions on the network. In future updates, using Blocknet’s breakthrough blockchain router (XRouter), it will be possible to trade without the need for the full blockchains to be installed locally.


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





