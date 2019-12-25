title: Blocknet Proposal - Coin Split 1:100
description: This is a proposal to proportionally multiply all BLOCK values by 100x. All existing holdings, fees, rewards, and collaterals will be increased proportionally.


# Coin Split 1:100 

---

???+ success "Status: Passed"
    **Superblock**: 561600

    **Results**: 435 Service Nodes, 182 Yes, 35 No

    **Status**: Awaiting a future hard fork for implementation and activation

## Proposal
This is a proposal to proportionally multiply all BLOCK values by 100x. All existing holdings, fees, rewards, and collaterals will be increased proportionally. This change is needed to preemptively address an anticipated technical problem regarding microfees conflicting with dust amounts.

**Note: If you own BLOCK, your own balance will multiply by 100. This seems to be a common misconception. All values will be multiplied by 100. It's effectively similar to moving the decimal point 2 digits to the right.**

### Issue

Currently there's a limit to how small of a transaction you can spend due to something called dust values. When sending really small amounts the network transaction fee also accounts for a larger percent of the total amount sent. These two things pose an issue for XRouter, where it's important to support really small micro fees for services. As the dollar ($USD) value of BLOCK increases, so does the limit for how small of a dollar ($USD) value you can send. This means that even at the smallest available amount to send, XRouter transactions can become expensive which isn't good as you want to be able to support those micro fees. Rather than waiting until this issue comes to a head resulting in an emergency hard fork, we would like to get ahead of the problem.

???+ quote "Comments from 86B on Discord regarding dust amounts"
	Lets say we moved the relay fee out to match BTCs at 0.00001. Using the 2000bytes example, sending a $0.005 (half cent) microfee would be charged $0.02 by the network for a 366% charge.
	
	Now lets assume we make XRouter transactions feeless. At $2000/BLOCK (optimists anyone?), we'd see minimum transactions required to be over $0.01 - effectively not allowing us to charge under a penny for various simple XRouter calls/etc.
	
	So despite changing the feeperbyte, changing the minrelaytxfee, etc - we'll still eventually run into this issue. It's easier to just move the decimals out and be done with it for good.

### Solution

A hard fork will be required to undertake this and would not incur any costs to owners of BLOCK. Moving the decimal place does not effect the value of investors' holdings or the block rewards. 













<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"






