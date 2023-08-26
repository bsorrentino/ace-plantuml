## PlantUML syntax

To integrate plantuml syntax in ace editor the easier way seems start from  a `.tmLanguage` file that define the syntax highlighting and other language features for text editors (originally used by TextMate)

I've identified two sites that containing plantuml syntax information alreadi defined 
1. [vscode-plantuml] - Rich PlantUML support for Visual Studio Code.
2. [plantuml-syntax] - vim syntax file for plantuml

### [vscode-plantuml] 

This project provides a [plantuml.yaml-tmLanguage](https://github.com/qjebbs/vscode-plantuml/blob/master/syntaxes/plantuml.yaml-tmLanguage) that must be converted running `npm run buildsyntax`

### [plantuml-syntax] 

This project provides [plantuml.vim](https://github.com/aklt/plantuml-syntax/blob/master/syntax/plantuml.vim) that could be converted in an equivalent `.tmLanguage`

## PlantUML snippets

In addition to the syntax highlighting, it would be useful to provide code snippets for common plantuml elements like classes, actors, use cases etc. we have translated the [snippets][vscode-snippets] from [vscode-plantuml] project 

### Translate snippets

A great way to translate vscode snippets is to use **ChatGPT Code Interpreter** using the follwing prompt:
```
the Jason file has the following format:

"snippet_id": {
		"prefix": "snippet_prefix",
		"body": [
			"snippet_line1",
            "snippet_line2", 
           ...
        ],
		"description": "snippet_description"
	},
convert this Jason file in  text file using the follow transformation rules for each snippet_id:

1. write "# snippet_description" and compact  snippet_description in one line summarising as much as possible content
2. write: "snippet snippet_prefix
3. write "snippet_lines" starting each line with a tab character and replace each "${" with "\${
```

[plantuml-syntax]: https://github.com/aklt/plantuml-syntax
[vscode-snippets]: https://code.visualstudio.com/docs/editor/userdefinedsnippets
[vscode-plantuml]: https://github.com/qjebbs/vscode-plantuml

