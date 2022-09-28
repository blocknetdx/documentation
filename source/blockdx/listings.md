title: Block DX Exchange Listings
description: Block DX is a decentralized exchange with over 100 assets trading. The exchange has free listings with more continuously being added.


# Block DX Listings
[Block DX](/blockdx/introduction) is the fastest, most secure, most reliable, and most decentralized exchange (DEX), built on the [Blocknet Protocol](/project/introduction). The exchange has over 100 [digital assets](/resources/glossary/#digital-asset) trading ([see below](/blockdx/listings/#listed-digital-assets)), with the number continuously growing as more are made compatible. There is complete trading pair freedom, meaning any two assets can be traded, totaling to over 5000 tradable pairs.

--8<-- "explore-service-nodes.md"

---

## Listing Process
A Block DX listing holds many benefits beyond just being traded on the exchange. Being listed means the asset has been integrated with the [Blocknet Protocol](/project/introduction), which powers Block DX, and allows other services to be built utilizing the asset. This extends the demand, utility, and accessibility of the asset to the rest of the ecosystem.

Getting listed on Block DX is 100% free. If you would like to have a
digital asset listed, the first step is to confirm the asset meets the following
requirements. If it doesn't currently meet all these requirements, please work with
the developers of the project/asset to ensure they
are all met. If you have questions about any of these requirements, please
[join Blocknet Discord Server](https://discord.gg/WnaygWwqFy) and ask your
questions in the *#block-dx-listing* channel.

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

##  Requirements Met
When all of the above requirements are met,
you are ready to proceed to the next step in listing your asset. At this point, you basically have two options:

??? example "Option 1. Do it yourself."

	This option is 100% free. It could be for you if...

	1. You are comfortable working with [Git Fork-and-Branch](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/) workflow.
	1. You are comfortable editing JSON format files
       [like this](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/manifest-latest.json)
       and creating configuration files [like this](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/autobuild/configs/ltc.base.j2).
	1. You can __*thoroughly test*__ your asset in BlockDX, and that requires
       a [Service Node](/service-nodes/introduction) to host your
       asset's native wallet. The easiest way to have a Service Node
       host your asset's wallet is to own your own Service Node and
       host it yourself. However, if it's not feasible for you to run
       your own Service Node, you can probably find someone in the
       Blocknet Community who will host your asset on their Service
       Node at a very reasonable rate. (If you get lucky, or if your
       asset is expected to have high trade volume, you might
       even find someone to host it for free.) To look for someone to
       host your asset on their Service Node,
       [join Blocknet Discord Server](https://discord.gg/WnaygWwqFy)
       and ask around in the *#block-dx-listing* channel.

	1. If you meet criteria 1, 2 & 3 above, use
       [Git Fork-and-Branch](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/)
       workflow and follow the instructions given in [this README](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/README.md).

??? example "Option 2. Contract a member of the Blocknet Community to do it for you."

	This option is obviously not 100% free, but there are Blocknet Community members who are willing to do the work of listing & testing your asset, and also willing to host your asset on their Service Node at very reasonable rates. To pursue this option:

	1. [join Blocknet Discord Server](https://discord.gg/WnaygWwqFy)
	1. Navigate to the *#block-dx-listing* channel in Blocknet Discord.
	1. Post a message requesting __listing__ and __hosting__ services, tagging
       __*@walkjivefly#7204*__ in the post.

## Future Listing Process
In the near future, the listing process will become more automated and it
will be easier for people to "Do It Yourself." There will be a form
where listing applicants fill in all the
[XBridge Configuration](/protocol/xbridge/setup) values for their
asset, then all the necessary file creations and updates will happen
automatically. Note, even with this helpful automation, it will still
be necessary to __*thoroughly test*__ each new asset
on BlockDX before it can be listed.

---

## Listed Digital Assets
**Note**: Block DX is not compatible with hardware wallets such as Ledger, web wallets such as MyEtherWallet (MEW), or lite wallets such as Jaxx. Desktop Qt wallets must be used. Below is a list of compatible assets and respective wallet versions. 

--8<-- "xbridge-compatibility.md"









<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





