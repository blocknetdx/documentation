title: 
description:

# Lock/Unlock Wallet
Controlling when the wallet is locked, fully unlocked, or unlocked just for staking is important for increasing the security of your funds. You must first encrypt the wallet to be able to lock it.

- **Locked** - When the wallet is locked, you are unable to spend funds or to stake. However, you can still navigate around it, see your balance and transaction history, receive funds, create an address, and edit address labels. If somebody were to gain access to your computer, they would not be able to access your funds without your passphrase to unlock it.
- **Unlocked** - When the wallet is unlocked, all functionality of the wallet is available, including spending your funds and staking. It is recommended to only have your wallet fully unlocked when you are spending funds and making transactions. If somebody were to gain access to your computer, they could easily access and steal your funds.
- **Unlocked for staking only** - When the wallet is unlocked for staking, it has the security of the wallet being locked, but has the benefit of allowing your funds to stake.

The passphrase used to encrypt the wallet is required to fully unlock the wallet or just unlock for staking.

---

## View Lock/Unlock State

??? example "View state using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	1. In the upper-right corner of the wallet you will see a set of icons.

		![Status Bar](/img/wallet-redesign/status-bar-synced.png)

	1. The blue padlock icon on the right represents the lock/unlocked state.
	1. Hover over the icon to read the current state.

	![Status](/img/wallet-redesign/status-locked.png)
	![Status](/img/wallet-redesign/status-unlocked.png)
	![Status](/img/wallet-redesign/status-unlocked-staking.png)

??? example "View state using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	1. At the bottom-right corner of the wallet you will see a set of icons.

		![Status Bar](/img/wallet-classic/status-bar-icons.png)

	1. The padlock icon on the left represents the lock/unlocked state.
	1. Hover over the icon to read the current state.

	![Status](/img/wallet-classic/status-locked.png)
	![Status](/img/wallet-classic/status-unlocked.png)
	![Status](/img/wallet-classic/status-unlocked-staking.png)

---

## Lock Wallet

??? example "Lock using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	There are 2 ways to lock the wallet in the redesign:

	??? example "Lock using status icon"
		1. Open the wallet.
		1. In the upper-right corner of the wallet you will see a set of icons.

			![Status Bar](/img/wallet-redesign/status-bar-synced.png)

		1. The blue padlock icon on the right can be used to change the locked state.
		1. Click on the icon.

			![Menu](/img/wallet-redesign/menu-lock-wallet-1.png)

		1. Select *Lock Wallet*.
		1. The wallet is now locked.

	??? example "Lock using the program menu"
		1. Open the wallet.
		1. In the program menu, select *Settings* then *Lock Wallet*.

			![Menu](/img/wallet-redesign/menu-lock-wallet-2.png)

		1. The wallet is now locked.

??? example "Lock using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	1. Open the wallet.
	1. In the program menu, select *Settings* then *Lock Wallet*.

		![Menu](/img/wallet-classic/menu-lock-wallet.png)

	1. The wallet is now locked.


---

## Unlock for Staking

??? example "Unlock for staking using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	There are 2 ways to unlock the wallet for staking in the redesign:

	??? example "Unlock for staking using status icon"
		1. Open the wallet.
		1. In the upper-right corner of the wallet you will see a set of icons.

			![Status Bar](/img/wallet-redesign/status-bar-synced.png)

		1. The blue padlock icon on the right can be used to change the locked state.
		1. Click on the icon.

			![Menu](/img/wallet-redesign/menu-unlock-staking.png)

		1. Select *Unlock Wallet for Staking Only*.
		1. A window will appear asking for passphrase. 

			![Unlock](/img/wallet-redesign/unlock-staking.png)

		1. Enter your passphrase, select *OK*.
		1. The wallet is now unlocked for staking only.

	??? example "Unlock for staking using the program menu"
		1. Open the wallet.
		1. In the program menu, select *Settings* then *Unock Wallet*.

			![Menu](/img/wallet-redesign/menu-unlock-wallet-2.png)

		1. A window will appear asking for passphrase. 

			![Unlock](/img/wallet-redesign/unlock-staking.png)

		1. Ensure the *Unlock for staking only* option is selected.
		1. Enter your passphrase, select *OK*.
		1. The wallet is now unlocked for staking only.

??? example "Unlock for staking using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	1. Open the wallet.
	1. In the program menu, select *Settings* then *Unlock Wallet*.

		![Menu](/img/wallet-classic/menu-unlock-wallet.png)

	1. A window will appear asking for passphrase. 

		![Unlock](/img/wallet-classic/unlock-staking.png)

	1. Ensure the *Unlock for staking only* option is selected.
	1. Enter your passphrase, select *OK*.
	1. The wallet is now unlocked for staking only.

---

## Fully Unlock

??? example "Unlock using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	There are 2 ways to fully unlock the wallet in the redesign:

	??? example "Fully unlock using status icon"
		1. Open the wallet.
		1. In the upper-right corner of the wallet you will see a set of icons.

			![Status Bar](/img/wallet-redesign/status-bar-synced.png)

		1. The blue padlock icon on the right can be used to change the locked state.
		1. Click on the icon.

			![Menu](/img/wallet-redesign/menu-unlock-wallet-1.png)

		1. Select *Unlock Wallet*.
		1. A window will appear asking for passphrase. 

			![Unlock](/img/wallet-redesign/unlock-wallet.png)

		1. Enter your passphrase, select *OK*.
		1. The wallet is now fully unlocked.

	??? example "Fully unlock using the program menu"
		1. Open the wallet.
		1. In the program menu, select *Settings* then *Unlock Wallet*.

			![Menu](/img/wallet-redesign/menu-unlock-wallet-2.png)

		1. A window will appear asking for passphrase. 

			![Unlock](/img/wallet-redesign/unlock-wallet.png)

		1. Ensure the *Unlock for staking only* option is not selected.
		1. Enter your passphrase, select *OK*.
		1. The wallet is now fully unlocked.

??? example "Unlock using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)
		
	1. Open the wallet.
	1. In the program menu, select *Settings* then *Unlock Wallet*.

		![Menu](/img/wallet-classic/menu-unlock-wallet.png)

	1. A window will appear asking for passphrase. 

		![Unlock](/img/wallet-classic/unlock-wallet.png)

	1. Ensure the *Unlock for staking only* option is not selected.
	1. Enter your passphrase, select *OK*.
	1. The wallet is now fully unlocked.





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





