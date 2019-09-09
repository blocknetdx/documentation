title: Blocknet Protocol - XBridge Asset Compatibility
description: Blocknet has over 100 digital assets tested and confirmed to be supported by XBridge, with the number continuously growing as more are integrated. 


# XBridge Digital Asset Compatibility

Any digital asset that supports lock time checks and has a JSON RPC interface will be compatible with Blocknet's XBridge. As a result, most digital assets in existence today are compatible. 

Currently Blocknet has over 100 [digital assets](/resources/glossary/#digital-asset) tested and confirmed to be supported by XBridge, with the number continuously growing as more are integrated. 

---

## Integration
Being integrated with Blocknet holds many benefits. Not only does it allow an asset to be traded using Block DX, a decentralized exchange built on XBridge, but it allows other services to be built utilizing the asset. This extends the demand, utility, and accessibility of the asset to the rest of the ecosystem.

Integration of assets is a free and open process, without permission required. All configuration files are located in Blocknet's [blockchain-configuration-files](https://github.com/blocknetdx/blockchain-configuration-files/) Github repository.

If you would like to have a digital asset supported, please ask a member of that project to fill out the [integration form](https://bit.ly/blocknet-compatibility) or create a pull request.

#### Blockchain Requirements
In order for for a blockchain to be compatible it must support JSON RPC and the following calls:

* createrawtransaction
* decoderawtransaction
* getblock
* getblockchaininfo (fallback getnetworkinfo, getinfo)
* getblockhash
* getnewaddress
* getrawmempool
* getrawtransaction
* gettransaction
* gettxout
* listunspent
* sendrawtransaction
* signmessage
* signrawtransaction (or signrawtransactionwithwallet)
* verifymessage

---

## Supported Digital Assets
**Note**: XBridge is not yet compatible with hardware wallets such as Ledger, web wallets such as MyEtherWallet (MEW), or lite wallets such as Jaxx. Desktop Qt/cli wallets must be used. Below is a list of compatible assets and respective wallet versions. 

--8<-- "xbridge-compatibility.md"








<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





