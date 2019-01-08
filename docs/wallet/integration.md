title: 
description:



# Wallet Integration Guide
Developers and enterprises are integrating with the Blocknet Protocol as a second layer to interoperate with blockchains and power multi-chain microservice architectures. This page serves as technical documentation for integrating the Blocknet Protocol via the wallet to benefit from:

* Trustless cross-chain token exchanges
* Blockchain interoperability
* Existing blockchain services
* Existing blockchain user bases
* Existing ecosystem and network effect

---

## Installation
There are a few options for wallet installation:

* Install directly via [various compiled formats](https://github.com/BlocknetDX/BlockDX/releases/)
* Use Blocknet’s [official Docker container](https://hub.docker.com/r/blocknetdx/servicenode)
* Build from source ([sample Dockerfile](https://github.com/BlocknetDX/dockerimages/blob/master/servicenode/Dockerfile)) 

**For Docker:**
Here's a sample docker run command for Blocknet’s official Docker container:

	docker run -d --name=block -p 41412:41412 --memory=1024m --cpus="2" --restart=unless-stopped -v=/LOCATION_OF_YOUR_DATA_DIR:/opt/blockchain/data blocknetdx/servicenode:latest blocknetdxd -daemon=0 -rpcuser=user1 -rpcpassword=blocknet123
In there you can see it's limiting the container to 2 CPUs and 1GB of RAM, specifying a custom data directory, and will restart automatically if it crashes.

To interact with the wallet:

	sudo docker exec -it block blocknetdx-cli getinfo

---
 
## Configuration
After installing the wallet, encrypt the wallet with password. By default the password is an empty string. The password can be updated through command line via the `walletpassphrasechange` command or with the GUI by selecting *Settings* > *Encrypt Wallet* or *Settings* > *Change Passphrase* in the the program menu.
 
Below are starter settings to be added to the *`blocknetdx.conf`* file:

	datadir=/opt/blockchain/data  
	dbcache=256                   
	maxmempool=512                
	                              
	port=41412    # testnet: 41474
	rpcport=41414 # testnet: 41419
	                              
	listen=1                      
	server=1                      
	staking=0                     
	maxconnections=25             
	logtimestamps=1               
	logips=1                      
	                              
	rpcallowip=127.0.0.1          
	rpcuser=                      
	rpcpassword=                  
	rpctimeout=15                 
	rpcclienttimeout=15           
	rpcthreads=8                   

Values will need to be specified for `datadir`, `rpcuser`, `rpcpassword`, `rpcallowip`, and `rpcthreads`. The `rpcthreads` should be set to 1 thread per blockchain that's being interacted with and should be set to `rpcthreads=8` if interacting with 8 blockchains or less.  The server should be isolated from public network with ports 41412/41474 open publically and ports 41414/41419 only open locally.
 
If your platform supports PoS staking, you may set `staking=1`. Otherwise, keep `staking=0` or withdrawals may not function properly due to locked inputs.
 
All [Bitcoin 0.8 configuration settings](https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_calls_list) are valid with this wallet.
 
---

## Integration
The standard RPC command list is the same as [Bitcoin 0.8](https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_calls_list), with the addition of chain-specific XBridge and XRouter commands that can be found in the [Blocknet API documentation](https://api.blocknet.co).

---

## Other
If using an address validator, the Blocknet addresses are standard Base58 with:

* `PUBKEY_ADDRESS` = 26;
* `SCRIPT_ADDRESS` = 28;
















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





