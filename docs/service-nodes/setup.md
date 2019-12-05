title: Blocknet Service Node Setup Guide
description: This guide explains step-by-step how to setup a Service Node, which earns block rewards and 100% of fees from Blocknet's services (XBridge, XRouter, XCloud).


# Service Node Setup
This guide explains step-by-step how to setup a [Service Node](/service-nodes/introduction). Operating a Service Node requires 5000 BLOCK collateral. This BLOCK will need to be locked for the Service Node to be valid and active. This means that the 5000 BLOCK will still be in your wallet and in your control, but it can't be moved or spent.

Operating as a Service Node requires two computers:

* __Collateral Computer__ - The computer will contain the 5000 BLOCK collateral and does *not* need to remain on.
* __SNode Server Computer__ - This computer will act as the Service Node and must remain on with the wallet open.

To setup your Service Node, complete the following guides in order:

1. [Collateral Computer Setup](/service-nodes/setup/#collateral-computer-setup)
1. [SNode Server Computer Setup](/service-nodes/setup/#snode-server-computer-setup)
1. [Additional Setup](/service-nodes/setup/#additional-configuration)
1. [Service Node Deployment](/service-nodes/setup/#service-node-deployment)

---

## Collateral Computer Setup

??? example "Setup using the redesign wallet"
	![Redesign Wallet](/img/service-nodes/redesign-wallet.png)

	1. [Install the Blocknet wallet](/wallet/installation).
	1. [Fully sync the wallet](/wallet/syncing).
	1. [Encrypt the wallet](/wallet/encrypting).
	1. Select *Tools* from the left menu, then the *Debug Console* tab. The input field at the bottom is where you will type commands.

		![Debug Console](/img/service-nodes/redesign-debug-console.png)

	1. Create a new public address for the Service Node. A unique name for this address will need to be provided as an alias. To do this, type `getnewaddress <ALIAS>` into the debug console with `<ALIAS>` replaced with the alias you will be using for this address. Example:
		```
		getnewaddress snode01
		```

		![Create Address](/img/service-nodes/redesign-getnewaddress-command.png)

	1. Press the *Enter* or *Return* key. The command will appear in the console window followed by a response with the created address.

		![Address](/img/service-nodes/redesign-getnewaddress-response.png)

	1. Type `servicenode genkey` into the debug console and press the *Enter* or *Return* key.
		```
		servicenode genkey
		```

		![Create Key](/img/service-nodes/redesign-genkey-command.png)

	1. The command will appear in the console window followed by a response with the Service Node key.

		![Key](/img/service-nodes/redesign-genkey-response.png)

	1. Copy the responses from the 2 commands for use in a later step.
	1. Retrieve your private key for the newly created address. Type `dumpprivkey <ADDRESS>` using the new address and press the *Enter* or *Return* key. Example:
		```
		dumpprivkey BWrNeqmsFCkYkvFHd4Hv8UvuynmtcAiW4g
		```

		--8<-- "privkey-warning.md"

	1. Select *Send Funds* from the left menu. We will now be sending the 5000 BLOCK collateral as a single transaction to the address we created.

		![Send](/img/service-nodes/redesign-send-1.png)

		!!! info "Note"
			If your BLOCK funds are located on a different wallet, you will need to first send the 5000 BLOCK to this collateral Blocknet wallet. Make sure to include a little extra (0.1 BLOCK) to have enough to cover transaction fees when continuing this step.

	1. Enter the newly created address in this field and select *Continue*.
		* You can also select *Open Address Book* and select the address by double-clicking it.

		![Send Address](/img/service-nodes/redesign-send-2.png)

	1. Fill out the form and select *Continue*.
		1. Set amount to exactly 5000.00 BLOCK.
		1. If you are not using *Coin Control* leave the ‘Default (Recommended)’ option selected.

		![Send Amount](/img/service-nodes/redesign-send-3.png)

	1. Make sure *Recommended fee* is selected and then select *Continue*.
	1. Review the transaction details and confirm the payment.
		1. Ensure the amount is 5000 BLOCK and it lists your Service Node address.
		1. The total at the bottom should be the 5000 BLOCK + Transaction Fee. 
	1. Select *Transaction History* from the left menu. You should see the 5000 BLOCK transaction that was sent. Hover your mouse over the row and proceed to the next step when you see 1 confirmation.

		![Confirmations](/img/service-nodes/redesign-confirmations.png)

	1. Go back to the debug console, type `servicenode outputs` into the debug console, and press the *Enter* or *Return* key. This command generates the Service Node transaction information.
		```
		servicenode outputs
		```

		![Outputs](/img/service-nodes/redesign-outputs-command.png)

	1. The command will appear in the console window followed by a response with the Service Node transaction information. Copy this information for later use. Example response:
		```
		{
	        "txhash" : "e12d35c18c2498d7ad683ec53ebb5c6accf197b693ccfcbb048c83bd4ad3287e",
	        "outputidx" : 0
	    }
		```

		![Outputs](/img/service-nodes/redesign-outputs-response.jpg)

	1. **On the SNode Server computer**, [Google *"what's my ip"*](https://www.google.com/search?q=whats+my+ip).
		1. If you’re using a VPS for the SNode Server computer, retrieve that public IP address.

		![Snode IP](/img/service-nodes/whats-my-ip.png)

	1. Copy your public IP address for later use.
	1. **Moving back to the Collateral wallet**, from the program menu select *Tools* then *Open Service Node Configuration File*.

		??? info "Note: The *servicenode.conf* file can be found in the Blocknet data directory."
			--8<-- "data-directories.md"

		![Snode Config](/img/service-nodes/redesign-menu-snode-conf-1.png)

	1. A file will be opened with your default text editor. Enter the following with the placeholders replaced with the information from the earlier steps:
		```
		<ALIAS> <PUBLIC_IP>:41412 <SERVICE_NODE_KEY> <TXHASH> <OUTPUTIDX>
		```

		!!! info "Note"
			The `<SERVICE_NODE_KEY>` is the value returned from the `servicenode genkey` command. It is *NOT* the value from the `dumpprivkey <ADDRESS>` command.

	1. After the information is replaced it should look similar to the following:
		```
		snode01 138.28.1.27:41412 6B1XGPVzE7MRszNXjXqcYtr5ApcCBkST5Bds43gSHcJd22kuHZe e12d35c18c2498d7ad683ec53ebb5c6accf197b693ccfcbb048c83bd4ad3287e 0
		```

		!!! info "Note: The entire entry must be on a single line."
	1. If setting up multiple Service Nodes, repeat these steps for each 5000 BLOCK input.
	1. Save and close the `servicenode.conf` file.
	1. Restart the Blocknet wallet.
	1. Continue on to [SNode Server Computer Setup](/service-nodes/setup/#snode-server-computer-setup).

??? example "Setup using the classic wallet"
	![Classic Wallet](/img/service-nodes/classic-wallet.png)

	1. [Install the Blocknet wallet](/wallet/installation).
	1. [Fully sync the wallet](/wallet/syncing).
	1. [Encrypt the wallet](/wallet/encrypting).
	1. In the program menu, select *Tools* then *Debug Console*.

		![Menu](/img/service-nodes/classic-menu-debug-console-1.png)

	1. The debug console will open. The black bar at the bottom is the input field where you will type commands.

		![Debug Console](/img/service-nodes/classic-debug-console.png)

	1. Create a new public address for the Service Node. A unique name for this address will need to be provided as an alias. To do this, type `getnewaddress <ALIAS>` into the debug console with `<ALIAS>` replaced with the alias you will be using for this address. Example:
		```
		getnewaddress snode01
		```

		![Create Address](/img/service-nodes/classic-getnewaddress-command.png)

	1. Press the *Enter* or *Return* key. The command will appear in the console window followed by a response with the created address.

		![Address](/img/service-nodes/classic-getnewaddress-response.png)

	1. Type `servicenode genkey` into the debug console and press the *Enter* or *Return* key.
		```
		servicenode genkey
		```

		![Create Key](/img/service-nodes/classic-genkey-command.png)

	1. The command will appear in the console window followed by a response with the Service Node key.

		![Key](/img/service-nodes/classic-genkey-response.png)

	1. Copy the responses from the 2 commands for use in a later step.
	1. Retrieve your private key for the newly created address. Type `dumpprivkey <ADDRESS>` using the new address and press the *Enter* or *Return* key. Example:
		```
		dumpprivkey Bgcfsgh2FSHPVLB4VgmLYZdsyDR5pb8jKB
		```

		--8<-- "privkey-warning.md"

	1. Select the *Send* tab. We will now be sending the 5000 BLOCK collateral as a single transaction to the address we created.

		![Send](/img/service-nodes/classic-send.png)

	1. Fill out the form.
		1. Enter the newly created address in the *Pay To* field.
		1. Set *Amount* to exactly 5000.00000000 BLOCK.

		!!! info "Note"
			If your BLOCK funds are located on a different wallet, you will need to first send the 5000 BLOCK to this collateral Blocknet wallet. Make sure to include a little extra (0.1 BLOCK) to have enough to cover transaction fees when continuing this step.

	1. Double check the form is filled out correctly.

		![Send Collateral](/img/service-nodes/classic-send-filled.png)

	1. Select *Send* to submit the transaction to your new address.

		![Send Button](/img/service-nodes/classic-send-button.png)

	1. Select the *Transactions* tab. You should see the 5000 BLOCK transaction that was sent. Hover your mouse over the row and proceed to the next step when you see 1 confirmation.

		![Confirmations](/img/service-nodes/classic-confirmations.png)

	1. Go back to the debug console, type `servicenode outputs` into the debug console, and press the *Enter* or *Return* key. This command generates the Service Node transaction information.
		```
		servicenode outputs
		```

		![Outputs](/img/service-nodes/classic-outputs-command.png)

	1. The command will appear in the console window followed by a response with the Service Node transaction information. Copy this information for later use. Example response:
		```
		{
	        "txhash" : "e12d35c18c2498d7ad683ec53ebb5c6accf197b693ccfcbb048c83bd4ad3287e",
	        "outputidx" : 0
	    }
		```

		![Outputs](/img/service-nodes/classic-outputs-response.jpg)

	1. **On the SNode Server computer**, [Google *"what's my ip"*](https://www.google.com/search?q=whats+my+ip).
		1. If you’re using a VPS for the SNode Server computer, retrieve that public IP address.

		![Snode IP](/img/service-nodes/whats-my-ip.png)

	1. Copy your public IP address for later use.
	1. **Moving back to the Collateral wallet**, from the program menu select *Tools* then *Open Service Node Configuration File*.

		??? info "Note: The *servicenode.conf* file can be found in the Blocknet data directory."
			--8<-- "data-directories.md"

		![Snode Config](/img/service-nodes/classic-menu-snode-conf-1.png)

	1. A file will be opened with your default text editor. Enter the following with the placeholders replaced with the information from the earlier steps:
		```
		<ALIAS> <PUBLIC_IP>:41412 <SERVICE_NODE_KEY> <TXHASH> <OUTPUTIDX>
		```

		!!! info "Note"
			The `<SERVICE_NODE_KEY>` is the value returned from the `servicenode genkey` command. It is *NOT* the value from the `dumpprivkey <ADDRESS>` command.

	1. After the information is replaced it should look similar to the following:
		```
		snode01 138.28.1.27:41412 6C4h8c87UGizAk67E97fTKSSgVn2ezsgbKzehcySniEhYyMNuQF e12d35c18c2498d7ad683ec53ebb5c6accf197b693ccfcbb048c83bd4ad3287e 0
		```

		!!! info "Note: The entire entry must be on a single line."
	1. If setting up multiple Service Nodes, repeat these steps for each 5000 BLOCK input.
	1. Save and close the `servicenode.conf` file.
	1. Restart the Blocknet wallet.
	1. Continue on to [SNode Server Computer Setup](/service-nodes/setup/#snode-server-computer-setup).

---

## SNode Server Computer Setup

??? example "Setup using the redesign wallet"
	![Redesign Wallet](/img/service-nodes/redesign-wallet.png)

	1. [Install the Blocknet wallet](/wallet/installation).
	1. [Fully sync the wallet](/wallet/syncing). Encryption is not needed on this wallet since it will not be holding funds.
	1. In the program menu, select *Tools* then *Open Wallet Configuration File* to configure the `blocknetdx.conf` file.

		??? info "Note: The *blocknetdx.conf* file can be found in the Blocknet data directory."
			--8<-- "data-directories.md"

		![Wallet Config](/img/service-nodes/redesign-menu-wallet-conf-1.png)

	1. A file will be opened with your default text editor. Enter the following information with the placeholders replaced:
		```
		enableexchange=1
		servicenode=1
		servicenodeaddr=<PUBLIC_IP>:41412
		servicenodeprivkey=<SERVICE_NODE_KEY>
		rpcthreads=8
		```
	1. After the information is replaced it should look similar to the following:
		```
		enableexchange=1
		servicenode=1
		servicenodeaddr=138.28.1.27:41412
		servicenodeprivkey=6B1XGPVzE7MRszNXjXqcYtr5ApcCBkST5Bds43gSHcJd22kuHZe
		rpcthreads=8
		```
	1. For best performance, a `maxconnections=` setting should **not** be specified.
	1. Save and close the `blocknetdx.conf` file.
	1. Shut down the Blocknet wallet.

??? example "Setup using the classic wallet"
	![Classic Wallet](/img/service-nodes/classic-wallet.png)

	1. [Install the Blocknet wallet](/wallet/installation).
	1. [Fully sync the wallet](/wallet/syncing). Encryption is not needed on this wallet since it will not be holding funds.
	1. In the program menu, select *Tools* then *Open Wallet Configuration File* to configure the `blocknetdx.conf` file.

		??? info "Note: The *blocknetdx.conf* file can be found in the Blocknet data directory."
			--8<-- "data-directories.md"

		![Wallet Config](/img/service-nodes/classic-menu-wallet-conf-1.png)

	1. A file will be opened with your default text editor. Enter the following information with the placeholders replaced:
		```
		enableexchange=1
		servicenode=1
		servicenodeaddr=<PUBLIC_IP>:41412
		servicenodeprivkey=<SERVICE_NODE_KEY>
		rpcthreads=8
		```
	1. After the information is replaced it should look similar to the following:
		```
		enableexchange=1
		servicenode=1
		servicenodeaddr=138.28.1.27:41412
		servicenodeprivkey=6C4h8c87UGizAk67E97fTKSSgVn2ezsgbKzehcySniEhYyMNuQF
		rpcthreads=8
		```
	1. For best performance, a `maxconnections=` setting should **not** be specified.
	1. Save and close the `blocknetdx.conf` file.
	1. Shut down the Blocknet wallet.

---

## Additional Configuration
With the current configurations the Service Node will only be eligible to earn block rewards. However, you can also setup a Service Node to support services on the network where 100% of fees are distributed to Service Nodes:



* With [XBridge](/protocol/xbridge/introduction), the decentralized exchange component of the Blocknet Protocol, 100% of [trading fees](/protocol/xbridge/fees) are distributed to Service Nodes for hosting full blockchain nodes and providing verification checks for trustless exchange between digital assets. For setup, see the [XBridge Configuration Guide](/service-nodes/xbridge-configuration).
* With [XRouter](/protocol/xrouter/introduction)\*, the decentralized inter-chain communication component of the Blocknet Protocol, 100% of fees are distributed to Service Nodes for hosting full blockchain nodes for SPV calls. For setup, see the [XRouter Configuration Guide](/service-nodes/xrouter-configuration).
* With [XCloud](/protocol/xcloud/introduction)\*, a decentralized microservice cloud network build on XRouter, allows you to monetize any microservice, blockchain, API, or cloud tech on your own hardware, in many cases without having to write any code. For setup, see the [XCloud Configuration Guide](/service-nodes/xcloud-configuration).


\* For XRouter and XCloud services, your Service Node Computer IP address must remain unchanged. If using a VPN with an IP that changes, it will impact your ability to provide XRouter services.

---

## Deploying Service Node

??? example "Setup using the redesign wallet"

	> **Preparation**

	1. On the SNode Server computer:
		1. Start or restart the Blocknet wallet.
			* Make sure this contains the previously configured `blocknetdx.conf` file with the Service Node credentials.
		1. Fully sync the wallet and additional network data.
		1. This wallet must stay running.
	1. On the Collateral computer:
		1. Select *Transaction History* from the menu on the left.
		1. Find the 5000 BLOCK transaction and hover over it to see the amount of *confirmations* it has. Take a note of this value for future reference.
		1. From the side menu, select *Tools* > *Debug Console*.
		1. Enter the following command to view the total number of Service Nodes on the network:
			```
			servicenode count
			```
		1. The confirmations on your 5000 BLOCK transaction has to be greater than or equal to the value returned for `servicenode count`. Once this has been achieved head to the next step.

	> **Starting the Service Node**

	1. On the Collateral Blocknet wallet, select ‘Service Nodes’ from the menu on the left. If the setup was done correctly you should see your ‘Alias(s)’ listed.

		![Service Nodes](/img/service-nodes/redesign-service-nodes-missing.jpg)

	1. Fully unlock the wallet.
	1. Open the debug console and enter `servicenode start-alias <ALIAS>`. Example:
		```
		servicenode start-alias snode01
		```
	1. You should receive a `successful` response.
	1. If starting multiple Service Nodes, repeat these steps for each Alias.
	1. The *Status* of your Service Node(s) should show *ENABLED* and an *Active* time. This may take up to 10 minutes to update.

		![Service Nodes](/img/service-nodes/redesign-service-nodes-enabled.jpg)

	1. You can now close the Collateral Blocknet wallet. The collateral wallet can remain closed as it's not needed to operate the Service Node.

	> **Check Service Node Active Status**

	1. On the SNode Server computer, open the debug console and enter `servicenode status`. If the Service Node is active, you will see a `Servicenode successfully started` response.

		![Snode Status](/img/service-nodes/redesign-status-response.png)

??? example "Setup using the classic wallet"

	> **Preparation**

	1. On the SNode Server computer:
		1. Start or restart the Blocknet wallet.
			* Make sure this contains the previously configured `blocknetdx.conf` file with the Service Node credentials.
		1. Fully sync the wallet and additional network data.
		1. This wallet must stay running.
	1. On the Collateral computer:
		1. Select the *Transactions* tab.
		1. Find the 5000 BLOCK transaction and hover over it to see the amount of *confirmations* it has. Take a note of this value for future reference.
		1. From the program menu, select *Tools* > *Debug Console*.
		1. Enter the following command to view the total number of Service Nodes on the network:
			```
			servicenode count
			```
		1. The confirmations on your 5000 BLOCK transaction has to be greater than or equal to the value returned for `servicenode count`. Once this has been achieved head to the next step.

	> **Starting the Service Node**

	1. On the Collateral Blocknet wallet, select the ‘Service Nodes’ tab. If the setup was done correctly you should see your ‘Alias(s)’ listed.

		![Service Nodes](/img/service-nodes/classic-service-nodes-missing.jpg)

	1. Fully unlock the wallet.
	1. Open the debug console and enter `servicenode start-alias <ALIAS>`. Example:
		```
		servicenode start-alias snode01
		```
	1. You should receive a `successful` response.
	1. If starting multiple Service Nodes, repeat these steps for each Alias.
	1. The *Status* of your Service Node(s) should show *ENABLED* and an *Active* time. This may take up to 10 minutes to update.

		![Service Nodes](/img/service-nodes/classic-service-nodes-enabled.jpg)

	1. You can now close the Collateral Blocknet wallet. The collateral wallet can remain closed as it's not needed to operate the Service Node.

	> **Check Service Node Active Status**

	1. On the SNode Server computer, open the Debug console and enter `servicenode status`. If the Service Node is active, you will see a `Servicenode successfully started` response. 

		![Snode Status](/img/service-nodes/classic-status-response-1.png)



---

## Troubleshooting
* Ensure you have the latest wallet and that it's fully synced and unlocked.
* Ensure the 5000 BLOCK is *__exactly__* 5000 BLOCK, no more or no less, and ensure the transaction has at least 1 confirmation.
* Ensure you don't have `<` or `>` in any of the configuration files. Examples:
	* Correct: `servicenodeaddr=138.28.1.27:41412`
	* Incorrect: `servicenodeaddr=<138.28.1.27:41412>`
* Ensure you are using the correct port number (`41412`). Examples:
	* Correct: `servicenodeaddr=138.28.1.27:41412`
	* Incorrect: `servicenodeaddr=138.28.1.27:41414`
	* Incorrect: `servicenodeaddr=138.28.1.27`
* Ensure your `servicenode.conf` information is correct to your settings and the `<SERVICE_NODE_KEY>` is the value that was returned from the `servicenode genkey` command.
* Ensure on the Collateral computer only has the `servicenode.conf` file. The `blocknetdx.conf` file is not needed on the Collateral computer.
* Ensure on the SNode Server computer only has the `blocknetdx.conf` file. The `servicenode.conf` file is not needed on the SNode Server computer.
* Ensure your configuration files are not `servicenode.conf.txt`.






<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





