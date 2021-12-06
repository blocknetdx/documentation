title: Blocknet Superblock Governance
description: Blocknet is a self-funded and community-governed project through a 2-part governing system consisting of Service Nodes and Superblocks.


# Introduction
[Blocknet](/project/introduction) is a self-funded and community-governed project. Decentralization defines the template for group decision-making and is self-managed through a 2-part governing system consisting of Service Nodes and Superblocks. There is also additional funding aside from the Superblock, which is explained under [Community Funds](#community-funds).

---

## Superblock
Superblocks are special blocks that occur every 43,200 blocks, or approximately once each month. On each Superblock, **up to a maximum of 40,000 [BLOCK](/blockchain/introduction)** can be minted to fund the project. It's important to note that only the total amount of BLOCK requested by *passing* proposals will be minted, so **if no proposals pass then no BLOCK will be minted in the Superblock**. 

To request funding from a Superblock, a proposal must be submitted to the network prior to the Superblock. Service Node operators then have the opportunity to review these proposals and [vote on each proposal](/governance/proposal-voting) with either a ‘yes’ or ‘no’ to approve or decline funding. 

---

#### Passing Criteria
For a proposal to pass and receive funding:

* 25% of all Service Nodes operating in this Superblock is the minumum
  number of votes that must have been cast on the proposal (for or against)
* 60% of votes must be "yes" (in favor)
* At this point all valid proposals are prioritized according to these requirements:
    1. Descending order by the sum of yes votes minus no votes
    1. Descending order by amount of yes votes
    1. Sequential order by block height the proposal is submitted (earlier blocks are first)
* The Superblock is then filled by as many valid proposals as possible according to the priority defined by (a), (b), and (c)
* If there are not enough funds remaining in the Superblock for a proposal to fit, it is skipped (not paid out), and the next proposal in the priority list is checked for qualification

---

#### Superblock Value Calculator

--8<-- "superblock-value-calculator.md"

---

#### Superblock Voting Deadline

Voting for proposals ends 60 blocks prior the Superblock.

--8<-- "next-voting-deadline.md"

#### Future Superblock Dates

--8<-- "superblock-dates.md"
















<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





