title: Blocknet Service Node Operation Guide
description: This page explains how to go about common Service Node operations such as staking, voting, updating, restarting, and checking your Service Node configs.

# Service Node Operation
This page explains how to go about common [Service Node](/service-nodes/introduction) operations such as staking, voting, updating, restarting, and checking your Service Node configs. For instructions on setting up a Service Node, see the [Service Node Setup Guide](/service-nodes/setup).

---

### Service Node Staking
To stake your Service Node collateral, you can enable staking as you normally would. The inputs used for your Service Node collateral are all tracked, so when you "hit" a stake and it generates a new input it will auto-register for you to keep the Service Node active. 

After a stake, the Service Node is still active for all existing clients, but will be inactive for new clients until the 2 confirmations are complete.

**Note**: If you register the Service Node from a collateral wallet then import the Service Node's BLOCK address to another machine for staking, the Service Node will go offline. Make sure you register the Service Node (`servicenoderegister`) from the machine that will be staking so that it will know to auto-register on stake.


### Check Service Node Status
1. On the SNode wallet you can use `servicenodestatus`.
1. On the Collateral wallet you can use `servicenodelist`. 
  * If you're using the command line you can filter the list with `blocknet-cli servicenode list | sed -n '/"snodekey": "#####/,/},/p'`, replacing `#####` with your Service Node's snodekey. Example:
    ```
    ./blocknet-cli servicenode list | sed -n '/"snodekey": "\(0b38bfac90cc5c683b6a27f952b2346a1009fc0f9c1a0790809f185ab27b14ecc6\)/,/},/p
    ```
  * You can also filter for multiple Service Nodes by separating each snodekey with `\|`. Example:
    ```
    ./blocknet-cli servicenode list | sed -n '/"snodekey": "\(#####\|#####\|#####\)/,/},/p
    ```


### Updated Your Blocknet Wallets
If you have just updated your Collateral Computer wallet and SNode Computer wallet, follow these instructions:

1. Open the Collateral Computer wallet and let it sync.
1. Open the SNode Computer wallet and let it sync.
1. From the Collateral Computer wallet, re-register the node with the `servicenoderegister` command.
1. From the SNode Computer wallet, send the network ping with `servicenodesendping`.


### Restarted Your SNode Computer Wallet
If you have just restarted your SNode Computer wallet, follow these instructions:

1. Open the SNode Computer wallet and let it sync.
1. From the SNode Computer, check if your Service Nodes status still shows `"running"` with the `servicenodestatus` command.
1. If they show `"status": "running"` then you don't need to do anything. If they show `"offline"` then continue.
1. From the Collateral Computer wallet, re-register the node with the `servicenoderegister` command.
1. From the SNode Computer wallet, send the network ping with `servicenodesendping`.


### Restarted Your Collateral Computer Wallet
If you have just restarted your Collateral Computer wallet you don't need to do anything.


### Updated Your SNode Computer blocknet.conf
If you have just updated the *blocknet.conf* on your SNode Computer wallet, follow these instructions:

1. Restart the SNode Computer wallet and let it sync.
1. Open the Collateral Computer wallet and let it sync.
1. From the SNode Computer, check if your Service Nodes status still shows `"running"` with the `servicenodestatus` command.
1. If they show `"status": "running"` then you don't need to do anything. If they show `"offline"` then continue.
1. From the Collateral Computer wallet, re-register the node with the `servicenoderegister` command.
1. From the SNode Computer wallet, send the network ping with `servicenodesendping`.

### Updated Your SNode Computer xbridge.conf
If you have just updated the *xbridge.conf* on your SNode Computer wallet, follow these instructions:

1. Add the blockchains you want to add trading support for in the `ExchangeWallets=` entry in `xbridge.conf`, denoted by the chain's asset's ticker. Separate each wallet name with a comma (no space). You can keep the rest of the configuration body the same, only the `ExchangeWallets=` setting needs to be updated (unless adding new support).
  * Example: `ExchangeWallets=BLOCK,LTC,BTC,SYS,DGB`
1. Restart the Blocknet wallet or use the [dxLoadXBridgeConf](https://api.blocknet.org/#dxloadxbridgeconf) command (from either the Debug Console or the command line) to load the updated settings.
1. Use `servicenodesendping` to propogate these new settings to the network immediately or wait up to 3 minutes for this to happen automatically.
1. You can view the blockchains you are supporting with the `dxGetLocalTokens` command.


### Updated XRouter Services or Configs
If you have just updated the *xrouter.conf* on your SNode Computer wallet, follow these instructions:

1. Add the chains you want to support SPV calls for in the `wallets=` entry in `xrouter.conf`, denoted by the chain's asset's ticker. Separate each wallet name with a comma.
  * Example: `wallets=SYS,BLOCK,BTC,ETH,MNP`
1. If you added or removed blockchain support, make sure to also update the `rpcthreads=` value in the `blocknet.conf` file.
1. Use `xrReloadConfigs` to load your newly configured settings to `xrouter.conf` without needing to restart your Service Node.
1. Use `servicenodesendping` to propogate these new settings to the network immediately or wait up to 3 minutes for this to happen automatically.
1. You can view your configs using `xrStatus`.


### Updated XCloud Services or Plugin Files
If you have just updated your XCloud services or plugin files, follow these instructions:

1. Add the service name to the `plugins=` entry in `xrouter.conf`. The service name listed must be the exact name of your config file without the file extension. Separate each service name with a comma.
    * Example: If you had 3 services that you wanted to deploy with config names `eth_getBalance.conf`, `eth_blockNumber.conf`, and `weatherData.conf`, the `plugins=` setting would read as follows: `plugins=eth_getBalance,eth_blockNumber,weatherData`
1. Use `xrReloadConfigs` to load your newly configured settings to `xrouter.conf` without needing to restart your Service Node.
1. Use `servicenodesendping` to propogate these new settings to the network immediately or wait up to 3 minutes for this to happen automatically.
1. You can view your configs using `xrStatus` ([See example output](https://api.blocknet.org/#service-node)).
1. Post your services to [Discord](https://discord.gg/vGa7GeCu8B) so others can discover, learn more, and find instructions on how to interact with your service.


### View Your XRouter or XCloud Configs
You can view your configs using `xrStatus`. This returns your SPV wallets, SPV calls and settings, plugin calls and settings, and the raw text of your `xrouter.conf` file. See usage details in the [API Docs](https://api.blocknet.org/#xrstatus)


### Check the Wallet and Protocol Versions
You can view the wallet version and blockchain, XBridge, XRouter protocol versions using the `getblockchaininfo` command. See usage details in the [API Docs](https://api.blocknet.org/#getnetworkinfo)














<!-- 

todo:

- hardware
- startup sequence
- restarting
- checking status
- tools

 -->


<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





