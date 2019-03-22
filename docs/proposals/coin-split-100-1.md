title: Blocknet Proposal - Coin Split 1:100
description: This is a proposal to increase BLOCK circulation by 100x. All existing holdings, fees, rewards, and collaterals will be increased proportionally.


# Coin Split 1:100 

---

???+ success "Status: Passed"
    **Superblock**: 561600

    **Results**: 435 Service Nodes, 182 Yes, 35 No

    **Status**: Awaiting a future hard fork for implementation and activation

## Proposal
This is a proposal to increase BLOCK circulation by 100x. All existing holdings, fees, rewards, and collaterals will be increased proportionally. This change is needed to preemptively address an anticipated technical problem regarding microfees conflicting with dust amounts.

### Issue

If the price were to increase to a certain value, Blocknet would find itself facing a problem that would require an emergency hard fork to fix, potentially diverting the team and community. Why? As you know, microservices provided by the XRouter and plug-in services charge fees. At a high enough BLOCK value, these fees become reach dust values and would be unable to subit to the network.

???+ quote "Comments from 86B on Discord regarding dust amounts"
	Lets say we moved the relay fee out to match BTCs at 0.00001. Using the 2000bytes example, sending a $0.005 (half cent) microfee would be charged $0.02 by the network for a 366% charge.
	
	Now lets assume we make XRouter transactions feeless. At $2000/BLOCK (optimists anyone?), we'd see minimum transactions required to be over $0.01 - effectively not allowing us to charge under a penny for various simple XRouter calls/etc.
	
	So despite changing the feeperbyte, changing the minrelaytxfee, etc - we'll still eventually run into this issue. It's easier to just move the decimals out and be done with it for good.

### Solution

A hard fork will be required to undertake this and would not incur any costs to owners of BLOCK. Moving the decimal place does not effect the value of investors' holdings or the block rewards.


???+ quote "Comments from 86B on Discord regarding an added benefit"
	I think it’s wise to add as many unique community members as possible, daytraders or not, because I think once people are here and learn about what we’re doing, they will stay. I think there’s a consensus that a small price per coin attracts at least one additional buyer due to the current mindset of your typical crypto trader. There are so many different coins and tokens out there to choose from that narrowing down “moonable” prices per coin is done subconsciously. You’ll find 20:1 people who don’t understand inflation or market cap. You can see a similar “overwhelming effect” as it pertains to the top 10. The majority of new money first dabbles with Bitcoin, then finds alts, usually buying the top 10, then expands within the top 100. Everything beyond that is perceived as “too high risk” to new money (beyond the high risk they already think they’re taking). Also subconsciously, it’s far more appealing to own “more” of something or deal in whole numbers vs decimals. I personally think it’s a pain dealing in BTC decimals. 

	Having said that, any split we do would be based on charging microfees for our XRouter and plug-in services. In the future, if our price is extremely high it becomes more and more difficult to stay above dust amounts with a microfee.











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






