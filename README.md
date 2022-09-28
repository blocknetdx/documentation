# Blocknet Documentation
This repository contains the source code for Blocknet's [documentation portal website](https://docs.blocknet.org). These documents are currently under progressive and iterative development.

> Powered by [MkDocs](https://github.com/mkdocs/mkdocs/) and [MkDocs Material](https://github.com/squidfunk/mkdocs-material).


## Contributing
To contribute to this project, follow the
[Fork-and-Branch Git Workflow](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/):
Fork this repository and in your own forked repository create a new
branch off `draft`. In this
new branch you can commit and push your updates by following the
[Editing](#Editing) guidelines stated below in this README. Following
the MkDocs instructions below under
[Getting Started](#getting-started), you can
also view how your changes will look when rendered by MkDocs to
HTML. Once you're satisfied with the way your edits look in HTML, merge
your new branch to your forked `draft` branch. Subsequently, create a pull request to merge from your forked repository `draft` branch into the original repository `draft` branch.

If you're not familiar enough with how to do this, feel free to create a [Github issue](https://github.com/blocknetdx/documentation/issues/new) with corrections, edits, or additions. If you have a lot of content to add, the best method would be to enter the content into a Google Doc (with settings set to public comments allowed) and link that in your Github issue.


## Getting Started
MkDocs supports Python versions 2.7, 3.4, 3.5, 3.6, 3.7, 3.8 and pypy.

Using Linux, MacOS and Windows 10:

```shell
# go to directory where you want to clone the repository. (e.g., cd ./src/repos)

# clone this repo
git clone https://github.com/blocknetdx/documentation.git

# change directory to documentation

cd documentation

# create a virtual environment
python -m venv venv

# activate virtual environment
# for Linux and MacOS
source ./venv/bin/activate

# for Windows 10
.\venv\Scripts\activate.bat # cmd.exe
.\venv\Scripts\Activate.ps1 # PowerShell

# install dependencies in virtual environment
python -m pip install -r requirements.txt
```

Run dev server:

```
# use from within /documentation/
mkdocs serve
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

Exit the virtual environment:
```
deactivate
```


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
		* `inline code` - Reference code, commands (`servicenode list`), calls (`dxGetOrders`), file contents (`ExchangeWallets=`), state (`finished`), parameters (`dryrun`) , files (`blocknet.conf`), directories (`Blocknet/`)
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

1. Build the docs with the `mkdocs build` command. This will render the website's html files in the `docs/` directory.
1. In the `docs/` directory, remove any folders and subfolders that begin with `-`. This prefix is manually used to flag pages that have not been completed yet.
1. Deploy `docs/` contents to staging site for testing.
1. Deploy `docs/` contents to [https://docs.blocknet.org/](https://docs.blocknet.org/) by commiting the changes in `docs/` directory, then pushing the commit to the `master` branch of the `documentation` repo.

Note, if you don't have permissions to push to `master` branch of the `documentation` repo, you'll need to push to a branch or fork of it, then make a Pull Request to have your changes merged to `master` branch.<br><br>
Hint: If you haven't yet committed your changes to markdown (`.md`) files, and you want to review all your changes using git utilities like `git status` and `git diff`, you can exclude all the changes in the `docs` folder from being considered by these tools by temporarily adding `docs/` to the `.gitignore` file.


