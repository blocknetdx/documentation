title: Block DX Trading Guide
description: These Block DX trading guides explain how to check your balances, select your market, make orders, take orders, check order status, and view order history.


# Block DX Trading
[Block DX](/blockdx/introduction) is the fastest, most secure, most reliable, and most decentralized exchange (DEX), built on the [Blocknet Protocol](/project/introduction). Follow the guides below to learn how to check your balances, select your market, make orders, take orders, check order status, and view order history. If Block DX has not been setup yet, please follow the [setup guide](/blockdx/setup).

<iframe width="560" height="315" src="https://www.youtube.com/embed/6QcyazmnXws?start=214" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

--8<-- "acquire-initial-block.md"

---

??? example "Balances"
	The first thing you want to do when starting Block DX is to check your balances. *Balances* displays the connected wallets along with the *available* balance. A connected wallet is one that has been configured and is currently open and unlocked. The *available* balance is the balance of the funds in a wallet that are not locked up.

	![Balances](/img/blockdx/balances-unequal.png)

	The *Available* balance may show a value different than what's displayed in the wallet if:

	* The wallet is locked.
	* You have already made a trade that has locked up funds. You will want to create smaller inputs so that a single trade won't lock up more funds than needed.
	* Funds aren't in a legacy address. Right now only legacy addresses are compatible. If you are using a Segwit address, please create a new address to send the funds to. If the wallet has been configured via Block DX, then a legacy address will automatically be created when generating a new address.
	* The wallet was not [configured](/blockdx/configuration).
	* The wallet was not restarted after the configuration.
	* If inputs have been locked via Coin Control.


??? example "Select Market"
	1. The market selection tool can be found in the upper-left corned.

		![Select Market](/img/blockdx/select-market-1.png)

	1. Click the *Select market pair* button.
	1. A downdown will appear with two lists: the assets of the wallets you have connected and all assets listed on Block DX.

		![Select Market](/img/blockdx/select-market-2.png)

	1. From *Connected Tokens*, select the asset you would like to trade.
	1. Select the asset you would like to trade the first asset with. The first asset will be priced in terms of this asset. This asset must have a wallet configured.

		![Select Market](/img/blockdx/select-market-3.png)

	1. Select *Select* to view the chosen market.
		
		![Select Market](/img/blockdx/select-market-4.png)


??? example "Market Information"
	??? Tip "Tip: To view currently active BlockDX orders from a browser, visit the [Open Orders Page](https://blockdx.com/orders/)"
	??? warning "Warning: When opening BlockDX for the first time it can take up to 3 minutes for all currently active orders to display on the screen."
		This is simply the nature of a fully decentralized, peer-to-peer network. If your
		XBridge client is connected to very few peers, it can even
		take slightly longer than 3 minutes.

		??? tip "Hint: Check your peer count."
			- Redesign Wallet:
 
				![Peers Status](/img/wallet-redesign/status-peers.png)

			- Classic Wallet: 

				![Peers Status](/img/wallet-classic/status-peers.png)

	Within BlockDX, each market has a price chart, depth chart, and market stats available.

	![Market Data](/img/blockdx/market-data.png)

	The market stats are above the price chart and show the last trade price, percent in price change over the last 24 hour rolling period, and volume over the last 24 hour rolling period.

	![Stats](/img/blockdx/navbar-stats.png)

	The chart has the ability to zoom. To zoom in, click and drag the pointer over the are you want to zoom in on.

	![Price Chart Zoom](/img/blockdx/price-chart-zoom.png)

	You can hover over the candles to show the information of each data point in the legend.

	![Price Chart Zoomed](/img/blockdx/price-chart-zoomed.png)

	To reset the chart, select the *Show All* button in the upper-right corner of the chart.

	![Show All](/img/blockdx/price-chart-show-all.png)

	To the right of the price chart there's also a depth chart. The depth chart shows how much market depth there is of orders at certain prices.

	![Depth Chart](/img/blockdx/depth-chart.png)

	Hover order the depth chart to view the data values.

	![Depth Chart Hover](/img/blockdx/depth-chart-hover.png)


??? example "Make Order"
	
	![Make Order](/img/blockdx/make-order.png)

	1. Review the [trading fees](/blockdx/fees/#maker-fee) for making orders.
	1. At the left side of Block DX you will find an order form.
	1. Select either the buy or sell tab.
	1. For *Amount* (the first input), enter the amount you would like to buy or sell.

		??? info "Note: There are no limit, market, or partial orders."
			At the moment there are just *Exact* orders, meaning that orders must be taken for the exact amounts. Due to this setup, if trading a large amount it may be best to instead break the order into a few smaller separate orders.

	1. For *Price* (the second input), enter the price (rate) for
       which you would like to trade the first asset. Note, there is
       also an option to enter *Price* in terms of BTC.
	1. *Total* shows the total amount of the 2nd asset that will be traded for the first asset.
	1. In the *Address* fields, enter the addresses the funds will be
       going to for each asset. In the above example, buying BLOCK
       with LTC, the *BLOCK Address* is the address where the BLOCK
       you buy will be sent, and the *LTC Address* is the
       [change address](/resources/glossary/#change-address) where LTC
       change from the transaction will be sent. If you don't mind having funds sent to new/empty addresses in your
       BLOCK and LTC wallets, you can just click the *Generate New BLOCK/LTC
       Address* options to fill in both of these *Address* fields
       automatically. However, if you
       want the asset you're acquiring or the change from the transaction to go
       to specific addresses in your wallet, you'll
       need to copy/paste those specific addresses from your wallets into
       these fields. (For now, these *Address* fields must be legacy addresses,
       not Segwit addresses.) [See these hints](/xlite/blockdx-xlite) for help finding
       specific addresses in XLite. Note, the address from which
       the trade is funded is chosen automatically by BlockDX. BlockDX
       funds the trade from the address with the smallest [UTXO](/resources/glossary/#utxo)
       which can cover the expense of the trade.
	1. Ignore *Order ID*, that should be blank when creating an order.
	1. Review your order.
	1. Select the place order button.
	1. The trade will now be visible as *Open* under *Active Orders*.

		![Active](/img/blockdx/orders-active.png)

	The Blocknet wallet and the wallets that are being traded out of must remain open and unlocked during trading. If the Blocknet wallet is closed, any open orders will automatically be cancelled.


??? example "Take Order"
	1. Review the [trading fees](/blockdx/fees/#taker-fee) for taking orders.
	1. On the right side of Block DX you will find the order book.

	    ![Order Book](/img/blockdx/order-book.png)

	1. Click on the order you would like to take.

		??? info "Note: There are no limit, market, or partial orders."
			At the moment there are just *Exact* orders, meaning that orders must be taken for the exact amounts. Due to this setup, you must have enough funds to cover the entire sell amount of the order selected.

	1. The order form on the left side of Block DX will auto-populate.

		![Take Order](/img/blockdx/take-order.png)

	1. Make sure *Balances* shows enough funds in the *Available* column to cover the order.
	1.  In the *Address* fields, enter the addresses the funds will be
       going to for each asset. In the above example, selling BLOCK
       for LTC, the *BLOCK Address* is the
       [change address](/resources/glossary/#change-address) where BLOCK
       change from the transaction will be sent, and the *LTC Address* is the address where the LTC
       you acquire from the sale will be sent. If you don't mind having funds sent to new/empty addresses in your
       BLOCK and LTC wallets, you can just click the *Generate New BLOCK/LTC
       Address* options to fill in both of these *Address* fields
       automatically. However, if you
       want the asset you're acquiring or the change from the transaction to go
       to specific addresses in your wallet, you'll
       need to copy/paste those specific addresses from your wallets into
       these fields. (For now, these address fields must be legacy addresses,
       not Segwit addresses.) [See these hints](/xlite/blockdx-xlite) for help finding
       specific addresses in XLite. Note, the address from which
       the trade is funded is chosen automatically by BlockDX. BlockDX
       funds the trade from the address with the smallest [UTXO](/resources/glossary/#utxo)
       which can cover the expense of the trade.
	1. Review your order.
	1. Select the place order button.
	1. The trade will now be visible under *Active Orders*.
	1. The trade should complete in about 20-30 seconds.

	The Blocknet wallet and the wallets that are being traded out of must remain open and unlocked during trading. If the Blocknet wallet is closed, any open orders will automatically be cancelled.


??? example "Order Status"
	Any orders that are open or in progress can be found in *Active Orders*.

	![Active](/img/blockdx/orders-active.png)

	You can hover over the order to read the order state.

	![Active](/img/blockdx/orders-active-open.png)

	Any orders that are cancelled, completed, or failed can be found in *Inactive Orders*

	![Inactive](/img/blockdx/orders-inactive.png)

	Again, you can hover over the order to read the order state. There are different icons to represent each order state.

	![Inactive Complete](/img/blockdx/orders-inactive-complete.png)
	![Inactive Cancelled](/img/blockdx/orders-inactive-cancelled.png)

	If you have created an order, it will be indicated in the order book with a white dot.

	![Order Book](/img/blockdx/order-book-own-order.png)

	The Blocknet wallet and the wallets that are being traded out of must remain open and unlocked during trading. If the Blocknet wallet is closed, any open orders will automatically be cancelled.


??? example "Order History"
	At the bottom-right corner of Block DX you can find the trade history. The trade history information is gathered only for the wallets that are configured. Therefore, the trade history will only show the orders that have been completed since Blocknet wallet and wallets for the currently viewed market have been opened and unlocked. If the Blocknet wallet is restarted, this information will be cleared and no longer visible.

	![Trade History](/img/blockdx/trade-history.png)

??? bug "Bug: If you used *Generate New Address* in BlockDX to generate the address to which the asset you just acquired should be sent, and the trade completed successfully but the asset didn't arrive in XLite as expected, click here for instructions what to do."
	1. Click on *Receive* in the upper right corner of XLite.
	1. Select the asset which did not arrive in XLite.
	1. Click *Generate new address* until the address to which the
       missing asset was sent appears in the *Your address* box.










<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





