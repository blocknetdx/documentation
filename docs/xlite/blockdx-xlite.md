title: Using BlockDX w/ XLite
description: This page gives hints on how to use BlockDX with XLite.

## Configure BlockDX for XLite
After you have [configured BlockDX to connect to XLite](/blockdx/configuration/), you are now ready to trade XLite assets in BlockDX. Below are a few hints you may find helpful.

## Expand XLite Window Size
When XLite is open to the Dashboard in a large enough window, it should look something
like this:
![XLite Dashboard](/img/xlite/dashboard.png)
If you don't see the circular *Portfolio* graph and the *Latest
Transactions* listed below it, expand the size of the XLite window
until they appear.
## Filling in address fields in BlockDX from XLite

BlockDX requires you to fill in two addresses in the ORDER FORM before
you are can place a trade. One is the address to which the
asset you're acquiring will be sent. The other is the
[change address](/resources/glossary/#change-address) to which the
leftover change from the transaction will be sent.

For Example, an ORDER FORM to *Buy BLOCK*, paying for it with *LTC*, looks like this:

![Order Form](/img/blockdx/make-order.png)

In this example, the *BLOCK Address* is the address where the BLOCK
       you'll buy will be sent, and the *LTC Address* is the
       [change address](/resources/glossary/#change-address) where LTC
       change from the transaction will be sent. Lets also assume in
       this example that both your BLOCK and LTC wallets are
       within XLite. If you don't mind having funds sent to new/empty addresses in your
       BLOCK and LTC wallets, you can just click the *Generate New BLOCK/LTC
       Address* options in the ORDER FORM to fill in both of these *Address* fields
       automatically. However, if you
       want the BLOCK you're buying or the LTC change from the transaction to go
       to specific addresses in your wallet, you'll
       need to copy/paste those specific addresses from your wallets into
       these *Address* fields. If you want to send both the BLOCK you're buying,
       and the LTC change from the transaction to addresses which
       already have funds in them, here's how to find those funded
       addresses in XLite:

??? example "Find Funded BLOCK address within XLite"

	1. Open XLite wallet to reveal a screen like this:
	![XLite Dashboard](/img/xlite/dashboard.png)
	1. Click *Transactions* in the upper left area of the screen to reveal this screen:
	![XLite Transactions](/img/xlite/transactions.png)
	1. Click *Unspent* in the upper right area of the screen to reveal this screen:
	![XLite Unspent Blocknet](/img/xlite/unspent-blocknet.png)
	1. On this screen you can see if you already have some funded BLOCK addresses in XLite. (Note, you can limit the assets displayed
	on this screen to  __*only*__ Blocknet (BLOCK) by selecting *Blocknet* in
	the lower left area of the screen.)
	1. If you don't see any funded BLOCK addresses here, click *Generate New BLOCK Address* in the ORDER FORM and you're done.
	1. If you do find a funded BLOCK address to which you'd like to
    send the BLOCK you're about to purchase,
		1. Select the BLOCK address (see image above).
		1. Copy the BLOCK address you just selected into the clipboard (Ctrl-C Windows, Command-C Mac).
		1. Paste the BLOCK address into the *BLOCK Address* field of
           the ORDER FORM in BlockDX.  (Ctrl/Cmd-V)

??? example "Find Funded LTC address within XLite"

	1. Open XLite wallet to reveal a screen like this:
	![XLite Dashboard](/img/xlite/dashboard.png)
	1. Click *Transactions* in the upper left area of the screen to reveal this screen:
	![XLite Transactions](/img/xlite/transactions.png)
	1. Click *Unspent* in the upper right area of the screen to reveal this screen:
	![XLite Unspent](/img/xlite/unspent.png)
	1. On this screen you can see if you already have  some funded LTC
	addresses in XLite. (Note, you can limit the assets displayed
	on this screen to  __*only*__ Litecoin (LTC) by selecting *Litecoin* in
	the lower left area of the screen.)
	1. If you don't see any funded LTC addresses here, click *Generate New LTC Address* in the ORDER FORM and you're done.
	1. If you do find a funded LTC address to which you'd like to
    send the LTC change from the transaction,
		1. Select the LTC address (see image above).
		1. Copy the LTC address you just selected into the clipboard (Ctrl-C Windows, Command-C Mac).
		1. Paste the LTC address into the *LTC Address* field of the
           ORDER FORM in BlockDX.  (Ctrl/Cmd-V)






<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





