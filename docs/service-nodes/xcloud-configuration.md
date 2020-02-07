title: Service Node XCloud Configuration Guide
description: This guide explains how to setup and configure your Service Node to support XCloud and earn additional fees.

# XCloud Configuration Guide
This guide explains how to setup and configure your Service Node to support XCloud. If you have not yet setup your Service Node, start with the [Service Node Setup Guide](/service-nodes/setup). Since XCloud is built on XRouter, you must also complete [XRouter configuration](/service-nodes/xrouter-configuration).

!!! warning "Note: XCloud requires a static IP"
  	For XCloud services, your Service Node Computer **IP address must remain unchanged** (static IP). If using a VPN with an IP that changes, it will impact your ability to provide XCloud services.

    XCloud makes direct connections and you'll need a WAN IP as your Service Node IP address and if it's behind a router you'll need to port-forward to it.

XCloud is a decentralized microservice cloud network that allows you to monetize any microservice, blockchain, API, or cloud tech on your own hardware, in many cases without having to write any code. Some examples of these services are blockchain-based calls such as those provided by Infura, one that returns a list of Syscoin marketplace listings, third party data calls such as one that provides access to CMC's API, or a custom call for a service you create yourself. You have the option to offer these services for free or to charge a fee for each call. Fees can be specified individually for each call.

To host a service, follow these steps:

1. Find a service you'd like to provide or create a custom one.
1. [Create the configuration file](#create-configuration-file)
1. [Determine the service type](#determine-service-type)
1. [Configure the service](#configure-service)
1. [Deploy service](#deploy-service)
1. [Additional information](#additional-information)

For these examples we will use Ethereum's `eth_getBalance` call.

---

## Create Configuration File
You will need to create a configuration file (.conf) for the service's settings. Each service requires its own configuration file. These files are kept within the `plugins` folder in the Blocknet wallet data directory.

Create the service's configuration file within the `plugins` folder. Make sure to follow the naming rules:

* The service name is also the call that is used when interacting with the service.
* The service name and service filename must be the same.
* Service filenames must have the `.conf` file extention.
* A service name can only use the following characters: a-z, A-Z, 0-9, \_, -, and :
* If the service is a blockchain call not supported in the default SPV commands, such as `eth_getBalance` for Ethereum, the recommended convention for the service name is [asset ticker]\_[native_command-name] with the ticker lowercase (if the ticker isn't already part of the name).
    * E.g. `eth_getBalance` (call) and `eth_getBalance.conf` (config file)

Here are examples of service names and filenames:

Format                                      | Service Name     | Service Filename     | Reason 
--------------------------------------------|------------------|----------------------|--------
<i class="fa fa-check"></i> Correct         | eth_getBalance   | eth_getBalance.conf  | Follows correct convention and the names are equal.
<i class="fa fa-times">&nbsp;</i> Incorrect | eth_getBalance   | eth_getbalance.conf  | The service name and service filename do not match.
<i class="fa fa-times">&nbsp;</i> Incorrect | eth_getBalance   | eth-getbalance.conf  | The service name and service filename do not match.
<i class="fa fa-times">&nbsp;</i> Incorrect | eth_getBalance   | ETH_getbalance.conf  | The asset ticker should be all lowercase.
<i class="fa fa-times">&nbsp;</i> Incorrect | getbalanceETH    | getbalanceETH.conf   | The asset ticker should be first followed by and underscore then the command.
<i class="fa fa-check"></i> Correct         | weatherData      | weatherData.conf     | Names match and only uses allowed characters.
<i class="fa fa-times">&nbsp;</i> Incorrect | weatherData      | weather-data.conf    | The service name and service filename do not match.
<i class="fa fa-times">&nbsp;</i> Incorrect | weatherData      | weatherData.txt      | The filename extension is .txt instead of .conf.






---

## Determine Service Type
The type of service is determined by how it's interacted with and will need different configurations. Here are the current supported types with explanations on when to use each:

* __rpc__ - Use if a service is for a blockchain call on a wallet that's not in a container. See [RPC Service Setup](#rpc).
* __docker__ - Use if you are running your service within a Docker container, whether it's a wallet or any other type of miscroservice. See [Docker Service Setup](#docker).
* __shell__ - Unsupported at this time.

---

## Configure Service
The configuration file has information required to connect with your service, interact with it, and additional settings like fees and request limits. Follow the guide that pertains to your [service type](#determine-service-type).

Note: The configuration file has a 2mb size limit.

### RPC
!!! warning "Note: RPC Services also require *xbridge.conf* configuration."
    To support SPV calls, you must also have your `xbridge.conf` file setup for each of the chains you wish to support and those wallets must remain open and running ([view XBridge setup guide](/service-nodes/xbridge-configuration)). If you already have this setup for XRouter SPV calls then you don't need to do anything extra unless you want to support additional chains.

    For ETH, you will also need `JSONVersion=2.0` and `ContentType=application/json` added to the `[ETH]` entry in `xbridge.conf`. This applies to GETH and Parity clients.

Here is an example service config file:

`eth_getBalance.conf`

```
parameters=string,string
fee=0.01
clientrequestlimit=100

private::type=rpc
private::rpcip=127.0.0.1
private::rpcport=8370
private::rpcuser=username
private::rpcpassword=password
private::rpccommand=eth_getBalance

#! Equivalent to: parity-cli eth_getBalance [address] [block_parameter]
```

Settings                | Description
------------------------|-------------
parameters              | Optional. Use this if the call takes parameters. List the value type of each parameter in the order the parameters are used (e.g. `parameters: int,string,string,bool`). Supported types are `string`, `bool`, `double`, and `int`.
fee                     | The fee (in BLOCK) you require for this call. A value of `0` means there is no fee and that the calls are free (*default* - see note below).
clientrequestlimit      | The minimum time allowed between calls in milliseconds. A value of `-1` means there is no limit (*default* - see note below). If client requests exceed this value they will be penalized and eventually banned by your node.
fetchlimit              | The maximum number of blocks processed. The default value is `50` (see note below). A value of `-1` means there is no limit.
disabled                | Used to disable a call. A value of `1` means the call is disabled and `0` means the call is enabled (*default* - see note below).
private::type=rpc\*\*   | The type of connection. For other connection types, see [Service Types](#determine-service-type).
private::rpcip          | The IP of the Service Node hosting this service. If left blank, localhost is assumed.
private::rpcport\*\*    | The service's RPC port. 
private::rpcuser\*\*    | The service's RPC username. 
private::rpcpassword\*\*| The service's RPC password. 
private::rpccommand\*\* | The service's RPC command.
private::response       | Used to hide private responses. For example, if this is a Twilio service and the user sends a text message, the service can send back a "sent" response instead of the Twilio response using `private::response=sent`.
private::               | Used to keep entries private. These will not be shared with connecting clients.
\#                      | Used at the beginning of a line for public comments. These **will be shared** with connecting clients.
\#!                     | Used at the beginning of a line for private comments. These **will NOT be shared** with connecting clients.

\*\* Config entries `private::type=rpc`, `private::rpcport`, `private::rpcuser`, `private::rpcpassword`, and `private::rpccommand` are mandatory for RPC services.

!!! info "Note: Setting values use hierarchy priority."
    Values set under `[Main]` override the default values and become the new default settings for all services that don't have the respective setting specified. Service settings override `[Main]` and default settings.

    The setting hierarchy from highiest priority to lowest priority is as follows: *Service Settings > [Main] > default*. The higher priority settings override the lower priority settings.

!!! tip "Tip: Add comments for service description and help messages."
	
    * Using a public comment, add a description so users know *what* the service is. Example:
      ```
      #description: Returns the balance for the provided Ethereum address.
      ```
    * Using a public comment, add a help message so users know *how* to use a service. Example:
      ```
      #help: eth_getBalance [address] [block_parameter]; [address] = (string) The address to check for balance; [block_parameter] = (string) Integer block number, or the string 'latest', 'earliest' or 'pending'.
      ```

    There are development plans to add dedicated, officially supported description and help settings.


### Docker
Here is an example service config file:

`eth_getBalance.conf`

```
parameters=string
fee=0.01
clientrequestlimit=100

private::type=docker
private::containername=eth
private::command=parity-cli eth_getBalance
private::args=$1
private::quoteargs=1

!# Equivalent to: docker exec eth parity-cli eth_getBalance [address] [block_parameter]
```

Settings                | Description
------------------------|-------------
parameters              | Optional. Use this if the call takes parameters. List the value type of each parameter in the order the parameters are used (e.g. `parameters: int,string,string,bool`). Supported types are `string`, `bool`, `double`, and `int`.
fee                     | The fee (in BLOCK) you require for this call. A value of `0` means there is no fee and that the calls are free (*default* - see note below).
clientrequestlimit      | The minimum time allowed between calls in milliseconds. A value of `-1` means there is no limit (*default* - see note below). If client requests exceed this value they will be penalized and eventually banned by your node.
fetchlimit              | The maximum number of blocks processed. The default value is `50` (see note below). A value of `-1` means there is no limit.
disabled                | Used to disable a call. A value of `1` means the call is disabled and `0` means the call is enabled (*default* - see note below).
private::type=docker*   | The type of connection. For other connection types, see [Service Types](#determine-service-type).
private::containername* | The name of the service's Docker container.
private::command*       | The service's Docker command.
private::args           | The arguments from `parameters` to pass to the command, denoted with a `$` and the number of the argument passed as a parameter. The order the arguments are specified is the order they will be passed to the command. This order does not have to be the same order as used in parameters, although the numbers correlate with that order placement. You can pass additional values that haven't been passed as parameters (see example below).
private::quoteargs      | Use this to quote the arguments in `args`. A value of `1` will quote each argument and `0` will not (*default* - see note below).
private::response       | Used to hide private responses. For example, if this is a Twilio service and the user sends a text message, the service can send back a "sent" response instead of the Twilio response using `private::response=sent`.
private::               | Used to keep entries private. These will not be shared with connecting clients.
\#                      | Used at the beginning of a line for public comments. These *will be* shared with connecting clients.
\#!                     | Used at the beginning of a line for private comments. These *will not be* shared with connecting clients.

`*` Config entries `private::type=docker`, `private::containername`, and `private::command` are mandatory for Docker services.

!!! info "Note: Setting values use hierarchy priority."
    Values set under `[Main]` override the default values and become the new default settings for all services that don't have the respective setting specified. Service settings override `[Main]` and default settings.

    The setting hierarchy from highiest priority to lowest priority is as follows: *Service Settings > [Main] > default*. The higher priority settings override the lower priority settings.

!!! tip "Tip: Add comments for service description and help messages."
  
    * Using a public comment, add a description so users know *what* the service is. Example:
      ```
      #description: Returns the balance for the provided Ethereum address.
      ```
    * Using a public comment, add a help message so users know *how* to use a service. Example:
      ```
      #help: eth_getBalance [address] [block_parameter]; [address] = (string) The address to check for balance; [block_parameter] = (string) Integer block number, or the string 'latest', 'earliest' or 'pending'.
      ```

    There are development plans to add dedicated, officially supported description and help settings.

---

## Deploy Service
1. Add the service name to the `plugins=` entry in `xrouter.conf`. The service name listed must be the exact name of your config file without the file extension. Separate each service name with a comma.
    * Example: If you had 3 services that you wanted to deply with config names `eth_getBalance.conf`, `eth_blockNumber.conf`, and `weatherData.conf`, the `plugins=` setting would read as follows: `plugins=eth_getBalance,eth_blockNumber,weatherData`
1. Use `xrReloadConfigs` to load your newly configured settings to `xrouter.conf` without needing to restart your Service Node.
1. Use `servicenodesendping` to propogate these new settings to the network immediately or wait up to 3 minutes for this to happen automatically.
1. You can view your configs using `xrStatus` ([See example output](https://api.blocknet.co/#service-node)).
1. Post your services to [the forum](https://forum.blocknet.co/c/xcloud-services) so others can discover, learn more, and find instructions on how to interact with your service.

---

## Additional Information

#### Fees
While Service Nodes can set their own fees, users can also set the max fee they will pay. Any Service Node's with a fee that is higher than a user's max fee will not be used. It is recommended to offer free calls for any call that are not computationally intesive. Lower fees will help encourage an ecosystem to build around the network. A healthy ecosystem will lead to much more usage of the network and receiving a lot of small fees will be more beneficial than receiving a few high fees. Granted, some calls may actually take computational time and will therefore require a higher fee.

#### Snode Scoring
Clients keep a score of each Service Node. When a Service Node reaches a score of `-200`, the Service Node will be banned by the client for a 24hr period. After this 24hr period, the Service Node will start with a score of `-25`.

Action                                  | Change in Score
----------------------------------------|-----------------
Failure to respond to call within 30s   | -25
Failure to meet majority consensus      | -5
Matching consensus                      | correct_nodes * 2
Sending bad XRouter config              | -10
Sending bad XCloud config               | -2

These values are subject to change in future releases. Join the [Service Node mailing list](https://eepurl.com/c5OJMj) to stay updated.







<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





