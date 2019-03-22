title: Blocknet Wallet Encryption Guide
description: This guide explains how to encrypt your Blocknet wallet so you have the ability to controll the access to your wallet and keep your funds secure.


# Wallet Encryption
All users should encrypt their wallets upon installation. Your wallet contains sensitive information, a `wallet.dat` file, that allows you to access your funds. This information is not encrypted by default, which means your funds are not protected and can be spent if somebody gains access to your computer.

The wallet can be ecrypted with a passphrase you create. By encrypting the wallet, you have the ability to lock your funds and protect them from being spent by an attacker, even if they gained access to your computer.

---

## Encrypt Wallet

??? example "Encrypt using the GUI wallet"
	1. If you have already sent funds to the wallet:
		1. Shut down the wallet.
		1. Create a backup of the wallet.
	1. Start the wallet.
	1. In the program menu, select *Settings* > *Encrypt Wallet*.

		![Menu](/img/wallet-classic/menu-encrypt-wallet.png)

	1. A new window will appear to create and confirm a passphrase.
		
		!!! danger "Warning: Do NOT lose the passphrase."
			This passphrase is the only way you will be able to access your funds. If you lose this passphrase, you will lose your funds. Make sure to save it in a safe place.

		!!! tip "Tip: Use a strong passphrase!"
			It's best practice to use a very strong passphrase that contains numbers, upper and lowercase letters, and symbols. This passphrase should be difficult, but keep in mind you have to enter it manually every time you want to send funds or enable staking.

		![Encrypt](/img/wallet-classic/encrypt-wallet.png)

	1. Select *OK* after entering your passphrase.

		!!! bug "Bug: Selecting *Cancel* requires restart."
			If you select *Cancel*, the option to *Encrypt Wallet* is no longer in the menu. It will instead show *Unlock Wallet*, but the wallet is not yet encrypted. To view the *Encrypt Wallet* option again, you must restart the wallet.

	1. Read the warning and select *Yes*.

		![Confirm](/img/wallet-classic/encrypt-confirm.png)

	1. The encryption process may take a few minutes.
	1. Once complete, a prompt will appear. Select *OK*.

		![Finish](/img/wallet-classic/encrypt-finish.png)

	1. The wallet will close and shut down.
	1. After the wallet is completely shut down, it can be reopened again.
	--8<-- "complete-wallet-encrypt.md"

---

## Change Passphrase

??? example "Change passphrase using the GUI wallet"
	1. If you have already sent funds to the wallet:
		1. Shut down the wallet.
		1. Create a backup of the wallet.
	1. Start the wallet.
	1. In the program menu, select *Settings* > *Change PAssphrase*.

		![Menu](/img/wallet-classic/menu-change-passphrase.png)

	1. A new window will appear.

		![Change Passphrase](/img/wallet-classic/change-passphrase.png)

	1. Enter your current passphrase in the top input.
	1. Enter your new passphrase in the bottom 2 inputs.
		
		!!! danger "Warning: Do NOT lose the passphrase."
			This passphrase is the only way you will be able to access your funds. If you lose this passphrase, you will lose your funds. Make sure to save it in a safe place.

		!!! tip "Tip: Use a strong passphrase!"
			It's best practice to use a very strong passphrase that contains numbers, upper and lowercase letters, and symbols. This passphrase should be difficult, but keep in mind you have to enter it manually every time you want to send funds or enable staking.

	1. Select *OK*.
	1. A success message will appear.

		![Changes](/img/wallet-classic/change-passphrase-success.png)

	1. Select *OK*.
	--8<-- "complete-wallet-encrypt.md"


<!-- 
======= Start: Related Links Section =======
- This is the related links section at the bottom of each page.
- It lists the links in the relatedLinks array variable below.
	Example: relatedLinks = [{"name":"Blocknet Website","link":"https://blocknet.co"},{"name":"API Docs","link":"https://api.blocknet.co"}];
- If the array is empty, ie. relatedLinks = [], then the related links section will not be displayed.
related-links.html
- The template and logic for the related links section can be found in docs/snippets/related-links.html
- The base path is defaulted to docs/snippets/, which can be edited in the mkdocs.yml file
- The template and logic is linked with markdown_extensions: pymdownx.snippets
-->
<script type="text/javascript">
var relatedLinks = [];
</script>

--8<--
related-links.html
--8<-- 
<!-- 
======= End: Related Links Section ======= 
-->





