title: Fix Wrong Balance
description: This guide explains how to fix your wallet balance in your Blocknet wallet if it displayes incorrectly.


# Fix Wrong Wallet Balance

If you are staking and "you hit a stake," then
the [UTXO](/resources/glossary/#utxo) which hit the stake will become
*immature* for a 101 confirmations, and the BLOCK in that UTXO will not be included in
your *Available Balance* while it is *immature*. However, that UTXO will still be
part of your *Total Balance*. Also, if you are using the
[BlockDX](/blockdx/introduction) to sell BLOCK from your Blocknet wallet, the BLOCK balance in your wallet can temporarily drop by
more than the amount of BLOCK you are selling. This can happen if your
wallet's smallest available UTXO is
larger than the amount of BLOCK you are selling in the transaction.

In both of the cases mentioned above, your total available balance will automatically
return to the expected value after a short time. However, for various reasons, the [Blocknet Wallet](/wallet/setup) can occasionally display the
wrong balance for an  extended time, in which case you'll need to *Recover Transactions* from the blockchain before it will display the correct balance. You can confirm if your wallet needs a *Recover Transactions* operation as follows:

1. Select *Window->Coin Control* to display the addresses (and
[UTXOs](/resources/glossary/#utxo)) where funds are stored in your
wallet:

	![Coin Control](/img/wallet/coin-control.png) 

	This will display a screen like this (*in Tree mode*):
	![Coin Control](/img/wallet/coin-control-screen.png)

	Note: If using the Command Line Interface (CLI) to the wallet, you can
    get the same information as above by issuing the `listunspent`
    command from the directory where your `blocknet-cli` program is
    stored, like this:
	```
	./blocknet-cli listunspent
	```
	You can also issue `listunspent` from *Tools->Debug Console* in
    the GUI/Qt wallet.

1. Use the [Blocknet Explorer](https://chainz.cryptoid.info/block/) to explore the addresses displayed under *Coin Control*.
1. The total BLOCK available at each address as displayed in *Coin
   Control* (or `listunspent`) should match the total BLOCK available at each
   address as displayed by the [Blocknet Explorer](https://chainz.cryptoid.info/block/). If they don't match,
   you can sync your wallet address balances with the blockchain as
   described below in
   [Recover Transactions](#recover-transactions):

## Recover Transactions

There are several options to *Recover Transactions* and sync you
wallet balance with the blockchain:

#### Option 1: From the GUI/Qt interface

??? example "From the GUI/Qt interface"
	From the GUI/Qt wallet, select *Tools->Wallet Repair->Recover
	Transactions(Drop metadata)*:
	![Tools Wallet Repair Recover](/img/wallet/tools-recover-transactions.png)
	This will cause your wallet to close and restart.

	??? bug "Bug: Sometimes, especially if it takes a long time for your wallet to close, this operation attempts to restart the wallet too quickly - before it has shutdown completely, then it displays a message saying: *Can't obtain a lock on data directory...*. More..."
		![Cannot Obtain Lock](/img/wallet/cannot-obtain-lock.png)

		If you get this error, simply restart the wallet and try once again to perform *Tools->Wallet Repair->Recover Transactions(Drop metadata)*. If it happens a second time, try a third time.

#### Option 2: Add `zapwallettxes=2` to `blocknet.conf` file, then restart wallet.

??? example "Add `zapwallettxes=2` to `blocknet.conf` file, then restart wallet."
	This option can be used with either GUI/Qt wallet or CLI wallet.
	The easiest way to edit your `blocknet.conf` file is as follows:

	1. Select *Blocknet->Preferences*:

	    ![Preferences](/img/wallet/preferences.png)

	1. Click *Open Configuration File*:

	    ![Open Config File](/img/wallet/open-configuration.png)

	1. Click *OK* to dismiss the warning:

	    ![Open Config File](/img/wallet/edit-config-warning.png)

	This will open the `blocknet.conf` file in your default editor.

	An alternate way to edit your `blocknet.conf` file is to locate it
    in your Blocknet data directory, right-click (trackpad two-finger
    click) on the file, select *Open With*, then open it with a simple
    text editor
    (e.g. NotePad on Windows, TextEdit on Mac). If `blocknet.conf`
    does not exist in your data directory, create it there with the
    text editor. The data directory is found as follows:

	--8<-- "data-directories.md"

	Once you have your `blocknet.conf` file open in an editor, simply
    add the following line to the file:
	```
	zapwallettxes=2
	```

	Then save the file and restart your Blocknet wallet.

	After your Blocknet wallet has finished syncing, remove the
    `zapwallettxes=2` line from your `blocknet.conf` and save the file
    again. This will prevent your wallet from recovering all transactions
    from the blockchain every time you open it.

#### Option 3: Open Blocknet wallet with the parameter, `-zapwallettxes=2`

??? example "Open Blocknet wallet with the parameter, `-zapwallettxes=2`"
	This option can be used if you are starting the Blocknet wallet
	from the command line and passing a parameter. Close your
	Blocknet wallet, then open it from the directory where `blocknet-qt` or `blocknetd` is located, like this:
	```
	./blocknet-qt -zapwallettxes=2 
	```
	or
	```
	./blocknetd -zapwallettxes=2 
	```
	


<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





