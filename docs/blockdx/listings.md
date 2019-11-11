title: Block DX Exchange Listings
description: Block DX is a decentralized exchange with over 100 assets trading. The exchange has free listings with more continuously being added.


# Block DX Listings
[Block DX](/blockdx/introduction) is the fastest, most secure, most reliable, and most decentralized exchange (DEX), built on the [Blocknet Protocol](/project/introduction). The exchange has over 100 [digital assets](/resources/glossary/#digital-asset) trading ([see below](/blockdx/listings/#listed-digital-assets)), with the number continuously growing as more are made compatible. There is complete trading pair freedom, meaning any two assets can be traded, totaling to over 5000 tradable pairs.

---

## Listing Process
A Block DX listing holds many benefits beyond just being traded on the exchange. Being listed means the asset has been integrated with the [Blocknet Protocol](/project/introduction), which powers Block DX, and allows other services to be built utilizing the asset. This extends the demand, utility, and accessibility of the asset to the rest of the ecosystem.

Getting listed on Block DX is 100% free. If you would like to have a digital asset listed, please ask a member of that project to fill out the [integration form](https://bit.ly/blocknet-compatibility).

#### Requirements
In order for for a blockchain to be compatible it must support JSON RPC, CLTV atomic swaps, and the following calls:

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

## Listed Digital Assets
**Note**: Block DX is not yet compatible with hardware wallets such as Ledger, web wallets such as MyEtherWallet (MEW), or lite wallets such as Jaxx. Desktop Qt wallets must be used. Below is a list of compatible assets and respective wallet versions. 

--8<-- "xbridge-compatibility.md"









<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





