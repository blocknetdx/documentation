title: Recover XLite Private Keys
description: This page guides you through the process of recovering XLite private keys from the 12 word mnemonic passphrase.

## Recover XLite Private Keys

In the unlikely event that you cannot access the funds in your XLite
wallet, follow this guide to recover the private keys of your funds
using your 12 word mnemonic passphrase. Once you have your private keys, you can import
them into the native wallet of the coin you want to access. For example, if you want to
access LTC in your XLite, follow this guide to recover the private
keys of your LTC in XLite, then import those private keys into LTC
native wallet. Alternatively, you can
import the private keys from XLite into another noncustodial  multi-wallet, like
[Exodus](https://www.exodus.com).

### Steps to recover private keys from XLite

1. Visit
[Ian Coleman's Repository](https://github.com/iancoleman/bip39/releases/tag/0.5.2)
1. Scroll down on that site and click on `bip39-standalone.html` to download that
file:
![Ian Coleman Repo](/img/xlite/ian-coleman-repo.png)
1. (Recommended) Verify the integrity of the downloaded file in the
same style as you [verify the download of the Blocknet wallet](/wallet/installation/#verifying-downloads).
(i.e. compare the sha256sum value of the downloaded file to the expected sha256sum
value listed on [Ian Coleman's Repository](https://github.com/iancoleman/bip39/releases/tag/0.5.2)).
1. (Recommended) For maximum security, disconnect the internet from your computer.
1. Double-click the file, `bip39-standalone.html` from wherever you
downloaded it on your computer. This will open the *Ian Coleman Tool* in your
default browser:
![Ian Coleman Tool](/img/xlite/ian-coleman-1.png)
1. Paste your XLite 12 word mnemonic in the field labeled, *BIP39 Mnemonic*.
1. Select the *Coin* whose private key you want to recover. ("BTC -
   Bitcoin" in the example image above.) Leave all other fields untouched.
1. Scroll down to display the *Derivation Path* section:
![Ian Coleman Tool](/img/xlite/ian-coleman-2.png) 
1. Under *Derivation Path*, click on the *BIP32* tab. (By default it's on *BIP44*.)
1. In the field labeled, *BIP32 Derivation Path*, paste the following value:
```
m/0'/0
```
1. Scroll down to display the *Derived Addresses* section:
![Ian Coleman Tool](/img/xlite/ian-coleman-3.png) 
1. Search for the XLite address(es) of your coin in the *Address* column.
1. In most cases, you'll find your XLite address(es) in the first 20
   rows. If you don't see your address(es), increase the numbers of
   rows at bottom of the
   address list to *Show 50 more rows*: 
![Ian Coleman Tool](/img/xlite/ian-coleman-4.png)
1. When you find your coin's address(es), the private key(s) of your address(es)
   will be listed in the same row on the
   far right, in the *Private Key* column.

??? tip "Tip: How to find the XLite address(es) of your coin..."
	Continuing with the example of recovering private keys for Bitcoin (BTC),
	open XLite and select *Transactions->Bitcoin->Unspent*:
	![BTC XLite Address](/img/xlite/btc-xlite-address.png) 
	There you will see the BTC address(es) in XLite where your BTC
	funds are stored. You can copy address(es) from here and search
	for them in the *Derived Addresses* section of the *Ian Coleman
	Tool* (To search in a browser, use *Cmd-f* in Mac; Ctrl-f in Windows).

	!!! info "If for some reason you are unable to open XLite, you can often find the XLite address(es) of your coins by opening the wallet from which you sent the coins to XLite. Then search the *Transaction History* in that wallet to see the XLite address(es) to which the coins were sent."

--8<-- "troubleshooting.md"






<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





