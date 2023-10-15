title: Access XLite Coin Daemons via RPC
description: This page shows you how to access the individual coin daemons of XLite via RPC calls.

## Access XLite Coin Daemons via RPC

If you are doing something like writing a trading bot which
trades out of XLite, you may find it useful to have direct access to
the individual coin daemons of XLite. The following examples show you
how.

### Firstly, make sure CloudChains daemon is running

The CloudChains daemon must be running to access the coin daemons
of XLite. The easiest way to start the CloudChains daemon running
is simply to open XLite and login. Alternatively, you can run CloudChains daemon
without opening XLite by following these steps:

1. [Download the CloudChains daemon for your OS](https://github.com/blocknetdx/xlite/blob/master/bin.json)
1. Extract the executable file, `Cloudchains-SPV` from the `.zip` download.
1. Start the CloudChains daemon in a Terminal (Linux, Mac) or Command Prompt	(Windows) with `Cloudchains-SPV`
1. Select option `2` to have CloudChains daemon use the XLite
wallet you created previously when you installed XLite.
1. Enter your XLite login password when prompted for a password.

### Accessing coin daemons via RPC calls

!!! warning "Note: Windows users will need to [install curl](https://curl.se/download.html) if it is not already installed."
			  
1. Navigate to the CloudChains settings directory:
	- Windows:
	```
	C:\Users\[YourUsername]\AppData\CloudChains\settings
	```
	Or paste `%appdata%\CloudChains\settings` into the File Explorer path field.
   
    - MacOS:
	```
	~/Library/Application Support/CloudChains/settings
	```
	Open Finder and in the program menu select *Go* > *Go to Folder...* and enter the above path.
   
	- Linux:
	```
	~/.config/CloudChains/settings
	```

1. Extract the RPC login credentials for the coin daemon you want
   to access. These credentials are found in a file called,
   `config-<coin>.json` where `<coin>` is the coin daemon you
   want to access. For example, if you want to access the BTC
   daemon, examine `config-BTC.json`. It will look something like this:
   ```
   {
	   "rpcPassword": "8vCaDSpOKJ8ZhJdukZxaU4Z4NGFFDa9mPy1b-ZT6tHA",
	   "fee": 0.0001,
	   "rpcUsername": "VMvT5inMA0841-458cOxSgz5V0mxJR8J",
	   "rpcPort": 8333,
	   "feeFlat": true,
	   "rpcEnabled": true,
	   "addressCount": 40
   }
   ```

	The RPC login credentials you'll need are the `rpcPassword`, `rpcUsername`
	and `rpcPort` values in this file. In this example
	these values are
	`8vCaDSpOKJ8ZhJdukZxaU4Z4NGFFDa9mPy1b-ZT6tHA`,
	`VMvT5inMA0841-458cOxSgz5V0mxJR8J` and `8333`, respectively.
   
   1. Open a Terminal window (Mac/Linux) or a Command
	  Prompt (Windows) and issue an RPC access command via
	  `curl`. Here are some examples of sending `listunspent` and `dumpprivkey`
	  commands to an XLite coin daemon:
	  - `listunspent` example (no parameters passed)
			```
			curl -H "Content-Type: application/json" -d '{"method":
			"listunspent", "params": []}'
			http://rpcUsername:rpcPassword@127.0.0.1:rpcPort/
			```
			where `rpcUsername`, `rpcPassword` and
			`rpcPort` are the values found in the previous step.

	  - `dumpprivkey`example (one parameters passed)
			```
			curl -H "Content-Type: application/json" -d '{"method":
			"dumpprivkey", "params": ["address"]}'
			http://rpcUsername:rpcPassword@127.0.0.1:rpcPort/
			```
			where `address` is the address for which you want to
			dump the private key, and `rpcUsername`, `rpcPassword` and
			`rpcPort` are the values found in the previous step.
			  
	Note: This second example allows you to dump the private keys of
	particular addresses of particular coins. If you save these
	private keys in a secure (preferably encrypted) place, you can
	import them later into the native wallets of those coins. These
	private keys can thereby act as a kind of backup
	which will allow you to access your XLite funds, even
	if XLite itself is down or unavailable for some reason.
	For example, if you want to access LTC in your XLite and you've dumped the private
	keys of your LTC in XLite, you can import those private keys at
	any time into an LTC native wallet. Alternatively, you can import
	the private keys from XLite into another noncustodial
	multi-wallet, like [Exodus](https://www.exodus.com).

1. The coin daemons of XLite can also be accessed via RPC calls made
   programmatically (using the RPC login credentials found in step 2 above). [Here is an example of a Python program which dumps private keys of XLite addresses](https://github.com/tryiou/xlite_toolkit/blob/main/Xlite_privateKeysExtractor.py).



--8<-- "troubleshooting.md"






<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





