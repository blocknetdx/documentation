title: Blocknet Proposal - Single Tier Block Reward
description: This proposal is to have a single tier block reward system where both Service Nodes and stakers would be combined into the same pool for block rewards.


# Single Tier Block Reward

---

???+ success "Status: Passed"
    **Superblock**: 604800

    **Results**: 442 Service Nodes, 122 Yes, 39 No

    **Status**: Complete

## Proposal
This proposal is to have a single tier block reward system. This means that out of every block reward, instead of having 70% (0.7 BLOCK) going to Service Nodes and 30% (0.3 BLOCK) going stakers, both Service Nodes and stakers would be combined into the same pool for 100% of the block reward.

There's 3 technical reasons for this proposal:

1. The Service Node list for block rewards is too fragile to maintain and causes forks in the network due to the structure of the block reward payouts. The single tier block reward system remove need for this list in this context and the issues associated with it.
1. The current difference in staking and Service Node rewards incentivizes Service Node operators to switch to staking, which causes fluctuations in Service Node support.
1. This change increases the amount of stakers on the network, therefore increasing the security of the blockchain.

The ROI of stakers and Service Nodes should be barely affected over time as the constant rebalancing of BLOCK from Service Nodes to staking naturally brings the ROI of the Service Nodes and stakers to an equilibrium. The ROI of an equilibrium state in the double tier block reward system we have now is equal to the ROI of the single tier block reward system as can be seen below.

In this single tier block reward system:

* Everyone can stake, even Service Nodes.
* The total block reward will continue to be 1 BLOCK.
* There will only be one block reward winner, either a typical staker or a Service Node, and they receive the entire 1 BLOCK reward.
* Winning a block reward will remain probabilistic based off the amount you're staking vs the amount staked on the network.
* A 5k BLOCK input will still be required to run a Service Node.
* A 5k input will still be required to vote.


### Calculations

![Dual Tier Block Reward System](/img/proposals/dual-tier-block-reward-calcs.png)

![Single Tier Block Reward System](/img/proposals/single-tier-block-reward-calcs.png)









<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"






