title: Blocknet Wallet Send Funds & Coin Control
description: This guide explains how to Send Funds from the Blocknet wallet

#Send Funds

![Send Funds](/img/wallet/send-funds.png)

1. Selecting the *Send Funds* option as illustrated above will display
   the following screen where you can enter the address(es) to which
   you want to send BLOCK:
![Send Address](/img/wallet/send-address.png)
1. On the above screen you can paste one or more Blocknet addresses in the box, or
   select *Open Address Book* if you want to select address(es) from
   your *Address Book*. Selecting *Open Address Book* will display
   the following screen:
![Address Book](/img/wallet/address-book.png)
1. In the above *Address Book* screen, select the "+" sign next to the
   address(es) to which you want to send funds, then select *Done* at
   the bottom of the *Address Book*.
1. Next, select *Continue* at the bottom of the *Select Address*
screen to display a screen like this:
![Coin Control](/img/wallet/coin-control.png)
1. On this screen, enter the amount of BLOCK to be sent. Then, if
desired, enter a custom
[change address](/resources/glossary/#change-address).
1. Next, in the [Coin Control](#coin-control) section of this screen you have the option to either let the Blocknet wallet
automatically select the [inputs](/resources/glossary/#input) from
which it will send BLOCK, or choose the
[inputs](/resources/glossary/#input) manually. Select either __*Default (Recommended)*__  or __*Choose
inputs manually*__ as per your choice. If you select __*Choose
inputs manually*__, then click the __*Select coin inputs*__ button below
that selection to choose the inputs. (Continued below under [Coin Control](#coin-control).)

    ### Coin Control 

	!!! warning "If you don't see the Coin Control features as shown in the screen above, use your mouse wheel or trackpad to scroll the window until they appear. Alternatively, expand the size of the window until the Coin Control features appear."
	Funds are organized in your wallet in terms of
	[addresses](/resources/glossary/#address) and
	[inputs](/resources/glossary/#input). To illustrate, we can make an
	analogy to a physical wallet. An
	[address](/resources/glossary/#address) would be like a section of your physical wallet which is separated
	from other sections by some kind of physical divider. An
	[input](/resources/glossary/#input)
	would be a bill that gets stored in one
	of the sections of your wallet. In one section of your physical
	wallet you might have three $20 bills and two $5 bills, for a
	total of $70 in that section of your wallet. In a similar way, one
	address of your Blocknet wallet might contain three 20 BLOCK
	inputs and two 5 BLOCK inputs, for a total of 70 BLOCK in that
	address of your Blocknet wallet.

	When you click the __*Select coin inputs*__ button in the *Coin
	Control* section of the screen
	above, a screen like the following will appear:
	![Select Inputs](/img/wallet/select-inputs.png)
	On the above screen you can check the boxes next to the
	[inputs](/resources/glossary/#input) from which
	 your BLOCK should be sent. There are two display modes on this
	screen: 

	- *List mode* - Displays all funded
       [inputs](/resources/glossary/#input) in a wallet in a list
       format, not collapsing all inputs of an address into an
       "address group."
	- *Tree mode* - Displays all funded
       [inputs](/resources/glossary/#input) in a wallet in a
       hierarchical tree format, collapsing all inputs of an address
       into an (expandable) "address group."

	When all inputs have been selected by checking the associated
    boxes, select *Confirm* on the *Input Selection* screen, then
    select *Continue* on the next screen to display the following
    screen:
	![Subtract Fee](/img/wallet/subtract-fee.png)

	On the above screen, you have the option to enter a *specific
    total fee* (not recommended), and an option to *subtract fee from
    total*. If you are sending *all* the funds in your wallet, or
    *all* the funds available in the sum of the
    [inputs](/resources/glossary/#input) you selected via
    [Coin Control](#coin-control), then you'll want to check the box for __*Subtract fee from total*__. Otherwise, probably not. Next, select *Continue* and complete the final confirmations on the next screens.

##### Sending Error	

??? info "If you get an error message saying 'The specified transaction information is bad, please review,' or 'Not enough coin inputs selected to cover this transaction,' click here for what to do..."
	These errors can occur when the wallet tries to create a
	transaction out of too many very small
	[inputs](/resources/glossary/#input). Try to select inputs
	manually with [Coin Control](#coin-control). You can also try to
	lower the amount you are trying to send.


--8<-- "troubleshooting.md"



<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





