title: aBLOCK
description: How to buy aBLOCK on Uniswap and redeem it for BLOCK

# aBLOCK

---

## Buy/trade aBLOCK on Uniswap

## First, set up MetaMask<sup>1</sup>...

1. Open Chrome, FireFox, Brave, or Edge browser, install [MetaMask](https://metamask.io/download.html)<sup>1</sup> as a Browser Extension, then create a MetaMask<sup>1</sup> wallet (if you haven't done so previously).
1. Ensure the Network Dropdown at the top of MetaMask<sup>1</sup> is set to *Ethereum Mainnet*, and that you have some ETH in your MetaMask<sup>1</sup> wallet to cover gas fees.
1. Add the aBLOCK token to MetaMask<sup>1</sup>:
   	1. Open MetaMask<sup>1</sup> and scroll to the bottom of your Assets list
   	1. Click "Add Token."
   	1. Select "Custom Token."
   	1. Paste `0xe692c8d72bd4ac7764090d54842a305546dd1de5` into Token Contract Address.
   	1. Click "Next."
   	1. Click "Add Tokens."

### Buy/Trade aBLOCK
- To Trade aBLOCK on Uniswap, visit [Uniswap aBLOCK](https://app.uniswap.org/#/swap?outputCurrency=0xe692c8d72bd4ac7764090d54842a305546dd1de5) and make sure MetaMask<sup>1</sup> is unlocked and connected to Uniswap. Then select the desired swap directioin (ETH->aBLOCK or aBLOCK->ETH), fill in the desired amount, then click "Swap."
- To Trade aBLOCK on Anyswap, visit [Anyswap Swap](https://v1.anyswap.exchange/swap), make sure "ETH Mainnet" is selected at the top of the page and MetaMask<sup>1</sup> is unlocked and connected to Anyswap. Then select the desired swap directioin (ETH->aBLOCK or aBLOCK->ETH), fill in the desired amount and click "Swap."

## Redeem aBLOCK for BLOCK or Bridge BLOCK to aBLOCK on Anyswap

1. Make sure MetaMask<sup>1</sup> has been set up and funded with some ETH according to steps 1 - 3 above.
1. Navigate to [Anyswap Bridge](https://v1.anyswap.exchange/bridge)
1. Select *Ethereum Mainnet* at the top of the Anyswap page, then click "Connect to Wallet" and select, "MetaMask." Make sure MetaMask<sup>1</sup> is unlocked and the network dropdown menu at the top of MetaMask<sup>1</sup> is set to *Ethereum Network*.

#### Unbridge aBLOCK->BLOCK (redeem aBLOCK for BLOCK)

1. Ensure your aBLOCK is in your MetaMask<sup>1</sup> wallet.
1. Set up the bridge to go from "aBLOCK (Blocknet ERC20)" to "BLOCK"
![redeem](/img/blockchain/ablock-block.png)
1. Enter the amount of BLOCK you want to redeem.
1. Enter the "Recipient BLOCK address"
1. Click, "Redeem."

#### Bridge BLOCK->aBLOCK

1. Set up the bridge to go from "BLOCK" to "aBLOCK (Blocknet ERC20)"
![deposit](/img/blockchain/block-ablock.png)
1. Enter the amount of BLOCK you want to bridge
1. Send that amount of BLOCK to the "Deposit BLOCK address"
1. Click "CrossChain Deposit."
After your deposit has enough confirmations, you will then have ERC20 aBLOCK in your MetaMask<sup>1</sup> wallet.

#### Unwrapping fees

There is no fee for wrapping BLOCK into aBLOCK (a.k.a. bridging BLOCK to aBLOCK). However, when unwrapping aBLOCK to redeem the BLOCK inside (a.k.a. unbridging aBLOCK to BLOCK), there is a 0.1%  "gateway" fee, payable in BLOCK. (min  gateway fee = 5 BLOCK; min redeem amount = 10 BLOCK). Also, to cover gas fees, users should maintain some ETH in their wallets. __NOTE:__ It's recently been reported that these unwrapping fees can be *much* higher than listed here when eth gas fees are high.

## Add Liquidity
### Add Uniswap Liquidity
Visit [Uniswap Liquidity](https://app.uniswap.org/#/add/ETH/0xe692c8d72bd4ac7764090d54842a305546dd1de5/3000), make sure MetaMask<sup>1</sup> is unlocked and connected to Uniswap, and that it contains both ETH and aBLOCK, then continue to follow the instructions.

### Add Anyswap Liquidity
Visit [Anyswap Liquidity](https://v1.anyswap.exchange/add-liquidity), make sure "ETH Mainnet" is selected at the top of the page, make sure MetaMask<sup>1</sup> is unlocked and connected to Anyswap, and that it contains both ETH and aBLOCK, then set up to add liquidity like this:
![Add Liquidity](/img/blockchain/anyswap-liquidity.png)

## See Current USD Prices of aBLOCK

- To see USD price on Uniswap, Visit [Uniswap aBLOCK](https://v3.info.uniswap.org/#/tokens/0xe692c8d72bd4ac7764090d54842a305546dd1de5)
- To see USD price on Anyswap, visit [Anyswap Dashboard](https://v1.anyswap.exchange/dashboard), then scroll down the assets list under *My Balance* till you see aBLOCK. (Make sure you have *ETH Mainnet* selected at the top of the page.)

#### <sup>1</sup> **Note About MetaMask Security**
MetaMask Chrome Browser extension is a convenient wallet to use for interacting with Anyswap and Uniswap. Be aware, however, that it is the target of many scammers, some of whom have written very ingenious malware to steal your MetaMask private keys. The Internet is full of reports of funds being stolen from MetaMask wallets. If you use MetaMask, take prudent safety precautions:

1. Run a good Anti-Virus program, such as Bitdefender, at all times. Configure it to give Web protection for Chrome browsing.
1. Never leave MetaMask unlocked any longer than you must to complete your transactions.
1. Never surf the web in Chrome with MetaMask unlocked, and never unlock MetaMask with tab(s) open to questionable sites. Even if a malicious site is open in a different tab, its malware can still access MetaMask.
1. Only confirm transactions in MetaMask after carefully reading *all* the details of the transaction. Note, some malware can display fake transaction details on top of parts of the transaction. That's why you need to read *all* the details of the transaction before confirming it.

For Anyswap, there aren't any options other than MetaMask (and Ledger). However, for providing liquidity on Uniswap, you have these alternatives to MetaMask: *Coinbase Wallet*, *Walletconnect*, *Fortmatic*, *Portis*.

--------------------

## What is aBLOCK?

aBLOCK is a "wrapped" version of the BLOCK coin. It's the same BLOCK we know and love, but with a wrapper around it which allows it to exist on the Ethereum blockchain as an ERC-20 token. Just as a man needs to wear a spacesuit to exist on the moon, so does BLOCK need to don a wrapper to exist on a non-native blockchain.

By design, there is exactly one BLOCK coin wrapped inside each aBLOCK token. In other words, there is a 1:1 mapping between BLOCK and aBLOCK at the bridge where wrapping and unwrapping take place. This does not mean the price of aBLOCK will always be exactly the same as the price of BLOCK. Just as the price of BLOCK can be different from one exchange to another, so too can the price of aBLOCK be different from one exchange to another. Likewise, the price of aBLOCK on one exchange can be different from the price of BLOCK on another exchange.

The only thing guaranteed about the price of aBLOCK is that it will be exactly equal to the price of BLOCK at the wrapping/unwrapping bridge. This one guarantee, however, can create arbitrage opportunities for anyone who notices a discrepancy between the price of aBLOCK on one exchange and the price of BLOCK on another exchange. For example, if aBLOCK is selling for $150 / aBLOCK on Anyswap, while BLOCK is simultaneously selling for only $125 / BLOCK on BlockDX, one can buy BLOCK on BlockDX, wrap it into aBLOCK, then sell the aBLOCK on Anyswap for a $25 / BLOCK profit!

## Why aBLOCK?

aBLOCK has been created to meet a couple of immediate needs:

### 1. Liquidity & Accessibility.

As of this writing, BLOCK is not listed on many high liquidity exchanges. Our own BlockDX has also not yet acheived a high level of liquidity. Even if BlockDX had high liquidity, at present it still requires more setup than is convenient for some potential investors. Furthermore, the exchange on which BLOCK currently has the highest liquidity (Bittrex Global) is not even accessible to investors in the USA. The net result of all this is that those wanting to invest in BLOCK sometimes feel it is inconvenient to do so, or they feel it's difficult to invest in volume at a fair market price.

aBLOCK will make it possible for people from every country to buy BLOCK (as aBLOCK) on Uniswap, an easily accessible, easy to use, very high liquidity, decentralized exchange. (Note, aBLOCK will also be tradable on Anyswap and possibly other exchanges.)

Having purchased aBLOCK, investors will then have several options of what to do with it:

   * They can HODL it and watch it increase in value over time.
   * They can trade it on Uniswap, Anyswap, Etc. for some other asset.
   * They can earn steady income with it by adding liquidity to some aBLOCK liquidity pool on Uniswap, Anyswap, Etc.
   * They can "unwrap" it. In other words, they can bridge it back to native BLOCK at a ratio of 1:1. Native BLOCK can then be used for [Blocknet network staking](/wallet/staking/) and/or [Blocknet Service Node collateral](/service-nodes/introduction/).

### 2. Payment vehicle for Hydra, Blocknet's Decentralized Infura Solution

Another advantage of having aBLOCK is that it will serve as a convenient payment vehicle for Hydra, Blocknet's Decentralized Infura Solution. Since Hydra is a Blocknet service, it makes sense to charge  for its use in Blocknet's own BLOCK coin. However, since many Hydra clients will not have a Blocknet wallet, it will be more convenient for them if we charge usage fees in a token which exists on the Ethereum chain, i.e an ERC20 token. aBLOCK satisfies both the desire to charge Hydra fees in our own BLOCK coin (wrapped as aBLOCK), and also the desire to accept fees in an ERC20 token  which can be very easily obtained on Uniswap.

## How aBLOCK?

BLOCK is wrapped into aBLOCK, and aBLOCK is unwrapped to redeem the BLOCK inside at [https://v1.anyswap.exchange/bridge](https://v1.anyswap.exchange/bridge). Management of wrapping and unwrapping is powered by Fusion's [Distributed Control Rights Management (DCRM)](https://www.fusion.org/en/tech/dcrm). DCRM uses a decentralized custodian model which locks BLOCK coins as it wraps them into aBLOCK, and keeps them securely locked until an equal amount of aBLOCK is burnt/unwrapped.

--------------------

#### For administrative purposes only:

**aBLOCK token contract address (Do not send any funds here):**
0xe692c8d72bd4ac7764090d54842a305546dd1de5

**BLOCK cross-chain bridge address (Do not send any funds here):**
0x716A7A3424A8f56718Ef52CdaB48A68602c25f2D



<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





