title: 
description:


<!-- 
- link to setup + rewards
- hardware
- startup sequence
- restarting
- checking status
- updating
- tools
Verify Communication Between Wallets
Wallet Communication Problem Diagnosis


After both are updated with the new versions and are fully synced, you will need to run the “servicenode start-all” command from the collateral client.

basic
xbridge
xrouter
xcloud

### Update Your Configs
After updating `xrouter.conf` or a plugins file, use `xrReloadConfigs` to apply newly configured settings without needing to restart the Blocknet client. Any new clients connecting to your Service Node will now receive your updated configs. Any clients already connected to your Service Node will automatically call for the updated configs when it's been more than 10 minutes since the last connection. Any client can manually update the configs of the connected nodes using `xrUpdateConfigs`.


### View Your Configs
You can view your configs using `xrStatus`. This returns your SPV wallets, SPV calls and settings, plugin calls and settings, and the raw text of your `xrouter.conf` file.

nodepubkey
score
banned
paymentaddress
spvwallets
spvconfigs
spvwallet
commands
command
fee
requestlimit
paymentaddress
disabled
feedefault
fees
services
parameters
fee
requestlimit
paymentaddress
xrouter
servicenode
config


#### Protocol Version
You can view the blockchain and XRouter protocol version with the `getinfo` command:

```
getinfo
```

```
{
    "version" : 3120200,
    "protocolversion" : 70712,
    "xbridgeprotocolversion" : 4278190144,
    "xrouterprotocolversion" : 4278190115,
    "walletversion" : 61000,
    ....
}
```




-->











<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





