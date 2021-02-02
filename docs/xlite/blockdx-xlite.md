title: Using BlockDX w/ XLite
description: This page gives hints on how to use BlockDX with XLite.

## Configure BlockDX for XLite
After you have [configured BlockDX to connect to XLite](/blockdx/configuration/), you are now ready to trade XLite assets in BlockDX. Below are a few hints you may find helpful.

## Filling in address fields in BlockDX from XLite

BlockDX requires you to fill in two addresses in the ORDER FORM before you are can place a trade:

1. The address funds will be coming from.  (__*Funding Address*__)
1. The address funds will be going to.  (__*Receive Funds Address*__)

For Example, an ORDER FORM to *Buy BLOCK*, paying for it with *LTC*, looks like this:

![Order Form](/img/blockdx/take-order.png)

In this case, some LTC address will be the __*Funding Address*__, and some
BLOCK address will be the __*Receive Funds Address*__.

??? example "Get Funding Address from XLite (LTC address example)"

	If the purchase will be funded with LTC stored in your XLite wallet, you can get the address of the LTC in your XLite wallet like this:

	1. Open XLite wallet to reveal a screen like this:
	![XLite Dashboard](/img/xlite/dashboard.png)
	1. Click *Transactions* in the upper left area of the screen to reveal this screen:
	![XLite Transactions](/img/xlite/transactions.png)
	1. Click *Unspent* in the upper right area of the screen to reveal this screen:
	![XLite Unspent](/img/xlite/unspent.png)
	1. Select the LTC address you'd like to use
	to fund the transaction. (Note, you can limit the assets displayed
	on this screen to  __*only*__ Litecoin by selecting *Litecoin* in the lower left area of the screen.)
	1. Copy the LTC address you just selected into the clipboard (Ctrl-C Windows, Command-C Mac).
	1. Paste the LTC address into the *LTC Address* field of the ORDER
	FORM in BlockDX.

??? example "Get Receive Funds Address from XLite (BLOCK address example)"

	If the the BLOCK being purchased will be sent to your XLite
    wallet, you can find the address to which BLOCK can be sent in XLite like this:

	1. Open XLite wallet to reveal a screen like this:
	![XLite Dashboard](/img/xlite/dashboard.png)
	1. Click *Transactions* in the upper left area of the screen to reveal this screen:
	![XLite Transactions](/img/xlite/transactions.png)
	1. Click *Unspent* in the upper right area of the screen to reveal this screen:
	![XLite Unspent Blocknet](/img/xlite/unspent-blocknet.png)
	1. On this screen you can see if you already have BLOCK stored at
	some address in XLite. (Note, you can limit the assets displayed
	on this screen to  __*only*__ Blocknet by selecting *Blocknet* in
	the lower left area of the screen.)
	If you do have BLOCK already stored at some address in XLite, and you want to send the new
	BLOCK you're about to purchase to that same BLOCK address, follow
	these steps:
	
		??? example "Steps to send BLOCK purchase to an existing BLOCK address"
		1. Select the BLOCK address to which you'd like to send the BLOCK you're about to purchase (see image above).
		1. Copy the BLOCK address you just selected into the clipboard (Ctrl-C Windows, Command-C Mac).
		1. Paste the BLOCK address into the *BLOCK Address* field of the ORDER FORM in BlockDX.

	1. If you don't already have some BLOCK stored in XLite, or if for
       some reason you want to send the BLOCK you're about to purchase
       to a new BLOCK address in XLite, follow these steps:

	    ??? example "Steps to send BLOCK purchase to a new BLOCK address"
		1. Click *Receive* in the far upper right corner of the screen to reveal this screen:
		![New Receive Address](/img/xlite/new-receive-address.png)
		1. In the *Select currency to receive* dropdown, select *Blocknet(BLOCK)*
		1. Click the *clipboard* symbol next to the BLOCK address to copy the BLOCK address into the clipboard.
		1. Click *Done*
		1. Paste the BLOCK address into the *BLOCK Address* field of the ORDER FORM in BlockDX.






<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





