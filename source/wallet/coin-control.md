title: Coin Control
description: This guide explains how to use the Coin Control feature of Blocknet wallet

#Coin Control

In the [redesigned GUI/Qt
wallet](/wallet/installation/#redesigned-vs-classical-guiqt-wallet),
there is a Coin Control feature which allows you to explore the
[addresses](/resources/glossary/#address) and [inputs](/resources/glossary/#input) where funds are
stored in your wallet. This feature also allows you to *lock* specific
inputs to prevent them from being spent.

1. Select *Window->Coin Control* to display the [addresses](/resources/glossary/#address) and [inputs](/resources/glossary/#input) where funds are stored in your
wallet:

	![Coin Control](/img/wallet/coin-control-window.png) 

	This will display a screen like this (*in Tree mode*):
	![Coin Control](/img/wallet/coin-control-screen.png)

	- *List mode* - Displays all funded
       [inputs](/resources/glossary/#input) in a wallet in a list
       format, not collapsing all inputs of an address into an
       "address group."
	- *Tree mode* - Displays all funded
       [inputs](/resources/glossary/#input) in a wallet in a
       hierarchical tree format, collapsing all inputs of an address
       into an (expandable) "address group."

1. Right click on an *input* to see options associated with that input:

	![Coin Control Right Click](/img/wallet/cc-right-click.png) 

1. After right-clicking on an *input*, select *Lock unspent* to lock
   that *input* and thereby prevent it from being spent. While an *input* is *locked*, it __cannot__ be spent by [Sending
   Funds](/wallet/send-funds), by a [BlockDX](/blockdx/introduction) transaction,
   or by a call to the *servicenodecreateinputs* method
   (sometimes called during [Collateral Wallet Setup](/service-nodes/setup/#collateral-wallet-setup-for-exr-service-node)).





--8<-- "troubleshooting.md"



<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





