# Blocknet Documentation
This repository contains the source code for [Blocknet's documentation portal](https://docs.blocknet.co). These documents are currently under progressive and iterative development.

> Powered by [MkDocs](https://github.com/mkdocs/mkdocs/) and [MkDocs Material](https://github.com/squidfunk/mkdocs-material).




## Getting Started
MkDocs supports Python versions 2.7, 3.4, 3.5, 3.6, 3.7 and pypy.

Using Linux or MacOS:

```shell
# clone this repo
git clone https://github.com/blocknetdx/documentation.git

# update pip
pip install --upgrade pip

# install mkdocs and mkdocs-material
pip install mkdocs
pip install mkdocs-material

# install required extensions
pip install markdown
pip install fontawesome-markdown
pip install pygments
pip install pymdown-extensions
```

Run dev server:

```
# use from within /documentation/
mkdocs server
```

This will compile the docs and output the localhost address where the changes can be previewed:

```
$ mkdocs serve
INFO    -  Building documentation...
INFO    -  Cleaning site directory
[I 160402 15:50:43 server:271] Serving on http://127.0.0.1:8000
[I 160402 15:50:43 handlers:58] Start watching changes
[I 160402 15:50:43 handlers:60] Start detecting changes
```

You can now see the docs at `http://127.0.0.1:8000/`. This will reload automatically when changes are saved. Note that the address is not always the same so it's best to check the output for the correct address.




## Editing

* __Syntax__ - These documents use [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) along with additional syntax for specialty formatting:
	* [Informational cards](https://squidfunk.github.io/mkdocs-material/extensions/admonition/)
	* [Meta data](https://squidfunk.github.io/mkdocs-material/extensions/metadata/)
	* [Snippets](https://facelessuser.github.io/pymdown-extensions/extensions/snippets/)
	* [Code superfences](https://facelessuser.github.io/pymdown-extensions/extensions/superfences/)
* __Content__ 
	* For better navigation, instructions for different OS's should be nested in a collapsible panel.
	* Any repeatable sections should be made into a snippet.
	* Page sections should be separated with a diver line `---`.
* __Layout__ - The page meta tags are managed with `theme/main.html` and styling s managed in `docs/css/style.css`.
* __Informational Cards__:
	* Types - note, abstract, info, tip, warning, danger, bug, example, quote
	* Standard - `!!! type "title"`
	* No Title - `!!! type ""`
	* Collapsible (default closed) - `??? type "title"`
	* Collapsible (default open) - `???+ type "title"`
* __Formatting Conventions__: 
	* __Styling__:
		* *Italics* - Referencing menu/button text (*Settings*, *Submit*, *Cancel*, etc)
		* __*Bold+Italics*__ - Word emphasis (__*available*__ balances, __*fully*__ unlock)
		* __Bold__ - Sub-subsection titles
		* `__Bold Bullet Point__`
		* `inline code` - Reference code, commands (`servicenode list`), calls (`dxGetOrders`), file contents (`ExchangeWallets=`), state (`finished`), parameters (`dryrun`) , files (`blocknetdx.conf`), directories (`BlocknetDX/`)
		* ` ```code block``` ` - Multiline code or fule contents or anything that might need to be copied such as single line commands.
	* __Images__ - `![optional alt text](imagelink "optional hover text")`
	* __Spacing__:
		* Do not skip a line after section headers.
		* Tables require a newline above and below them for parsing/formatting.
		* Informational panels require a newline above and below them for parsing/formatting.
		* Lists require a newline above and below them for parsing/formatting.
* __Internal Linking__:
	* __Correct__:
		* `[](/folder_path/page)`
		* `[](/folder_path/page#section)`
		* `[](/folder_path/page/)`
		* `[](/folder_path/page/#section)`
	* __Incorrect__:
		* `[](folder_path/page)`
		* `[](folder_path/page#section)`
		* `[](../folder_path/page)`
		* `[](../folder_path/page#section)`
		* `[](/folder_path/page.md)`
		* `[](/folder_path/page.md#section)`
		* `[](/folder_path/page.html)`
		* `[](/folder_path/page.html#section)`

See full wiki: [MkDocs]](https://www.mkdocs.org/) | [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)




## Adding Pages

1. Create a markdown file (`.md`) within one of the directories in the `docs/` folder.
1. Add a `title:` and `description:` at the top of the file.
1. Add an `--8<-- "extras.md"` tag at the end of the file.
1. Add a link to the menu (if needed) by listing it under `nav:` in `mkdocs.yml`.
1. Preview the page to make sure everything is rendering correctly.




## Creating and Using Snippets

1. Create a markdown file (`.md`) within the `snippets/` directory.
1. Use `--8<-- "snippetfilename.md"` tag to embed the snippet in a page.
	* The filenames are relative to the `snippets/` directory.
1. Preview the page to make sure everything is rendering correctly.




## Publishing

1. Build the docs with the `mkdocs build` command.
1. In the `site/` directory, remove any folders and subfolders that begin with `-`. This prefix is used to flag pages that have not been completed yet.
1. Deploy `site/` contents to staging site for testing.
1. Deploy `site/` contents to [https://docs.blocknet.co/](https://docs.blocknet.co/).



