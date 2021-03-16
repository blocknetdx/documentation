title: Blocknet Wallet  Backup & Restore Guide
description: This guide explains how to backup and restore your Blocknet wallet.

# Backup & Restore

## Backup

After your wallet is [encrypted](/wallet/encrypting), it should immediately be backup up. The file
called `wallet.dat` contains all the critical information for
accessing your wallet, and that is the file which should be backed up
(copied) to multiple, physically different locations. For example, it
is recommended to keep copies of this file on multiple USB drives and
store them in different locations. Whenever
funds are added to a new address in your wallet, the latest version of
`wallet.dat` should be backed up. Your `wallet.dat`
file is stored in your data directory:

### Data Directory

--8<-- "data-directories.md"

### CLI Wallet Backup Option (also works for GUI wallet) 

In the data directory there is usually a subdirectory called `wallets` which
is the default place for `wallet.dat` to be stored. If there is no
`wallet.dat` file in the `wallets` subdirectory of the data
directory, then there should be a `wallet.dat` in the data directory
itself, and that one is used by the Blocknet application.

If you only find one `wallet.dat` file after looking in both the data directory and its
`wallets` subdirectory, then you can be certain you've found the
`wallet.dat` which should be backed up. If you find more than one
`wallet.dat` and you're not sure which one is being used, close
your wallet, rename one of the `wallet.dat` files temporarily, then restart your
wallet. If your wallet still shows the correct balance, then the
`wallet.dat` you renamed was not the one being used and is not the one
to back up.

### GUI Backup Option

If you are using the GUI wallet, one way to be certain to back up the
correct `wallet.dat` file is to select the *File->Backup Wallet...*
option in the GUI interface:

![File Backup](/img/wallet/file-backup.png)

This gives you the option to write a
backup of your current `wallet.dat` to any location and give it any name.

---

## Restore

To restore a previously backed up Blocknet wallet, follow these steps:

1. If you haven't already done so,
   [Install Blocknet Wallet](/wallet/installation) and [sync it](/wallet/syncing)
1. Close your Blocknet wallet application.
1. Rename or move any `wallet.dat` files you find in your
[data directory](#data-directory) and/or the `wallets` subdirectory
within the data directory. 
1. Copy your backup copy of `wallet.dat` to the `wallets` subdirectory
   of your [data directory](#data-directory) (or to the data directory
   itself).
1. Restart Blocknet wallet.





<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





