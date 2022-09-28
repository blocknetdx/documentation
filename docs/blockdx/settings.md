title: Block DX Settings
description: Guide on how to change BlockDX settings

## Access BlockDX settings via the MENU button
![Menu Button](/img/blockdx/menu-button.png)

Selecting the *MENU* button will display a *Settings Menu*:

##### Settings Menu

![Settings Categories](/img/blockdx/settings-menu.png)

### Market Pricing (also How to Fix "N/A" in BTC price column)

??? example "Market Pricing (also How to Fix 'N/A' in BTC price column)"
	The Market Pricing feature allows orders to be viewed and placed in
		terms of BTC price for any market pair. To access Market Pricing
			settings:

	1. Select *General Settings* from the [Settings Menu](#settings-menu).
	   ![Market Pricing](/img/blockdx/market-pricing.png)
	1. Select *Market Pricing*.

	If you're seeing "N/A" in the BTC columns on BlockDX, it
	could be because the *Price Source* used by BlockDX is currently
	offline or doesn't support the selected market pair. You can try
	changing the *Price Source* on this screen to see if BTC pricing is
	fixed by doing so.

	!!! info "Note: At the bottom of the Market Pricing screen there is also an option to *Disable* Market Pricing. This will remove all BTC pricing information from the main BlockDX screen."

### Show Blocknet Core Wallet Balance in BlockDX

??? example "Show Blocknet Core Wallet Balance in BlockDX"
	If you've configured BlockDX to trade BLOCK from
	[XLite](/xlite/setup/) instead of trading it from
	[Blocknet Core wallet](/wallet/setup/), then the BLOCK balance in
	your XLite wallet will be displayed in the *Balances* section of
	BlockDX. However, by default, the balance of your Blocknet Core wallet
	will *not* be displayed in BlockDX. You can change this behavior to
	also display your Blocknet Core wallet balance in the *Balances*
	section of BlockDX as follows:

	1. Select *General Settings* from the [Settings Menu](#settings-menu).
	   ![Select Balances](/img/blockdx/show-core-wallet-balance.png)
	1. Select *Balances* and select *Yes* for *Show Wallet in Balances*:
   
	The BLOCK balance in your Blocknet Core wallet is now displayed
	as *Wallet* balance, and your XLite balance is displayed as
	*BLOCK* balance, like this:

	![Core Balance](/img/blockdx/core-wallet-balance.png)

	!!! tip "Tip: It's a good idea to always keep a few BLOCK in your Blocknet Core wallet because [Taker Fees](/blockdx/fees/#taker-fee) can *only* be paid from the Blocknet Core wallet."

### Auto-Generate Addresses in Order Form

??? example "Auto-Generate Addresses in Order Form"
	When making or taking an order in BlockDX, the ORDER FORM requires an
	address from the wallet of the asset being bought, and an address
	from the wallet of the asset being sold. In the following ORDER
	FORM example, *BLOCK Address* is an address from the wallet of the
	asset being bought, and *LTC Address* is an address from the wallet of the
	asset being sold:

	![Select Balances](/img/blockdx/make-order.png)

	To control whether those two address fields are filled in automatically, or
    whether the user must select *Generate New Address* to generate those addresses manually:

	1. Select *General Settings* from the [Settings Menu](#settings-menu).
	   ![Select Balances](/img/blockdx/auto-gen-addresses.png)
	1. Select *Order Form*
	1. In the *Auto Generate Address?* dropdown, select *Yes* or *No*, according to your preference. 
	   

<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





