## PlantUML syntax

To integrate plantuml syntax in ace editor the easier way seems start from  a `.tmLanguage` file that define the syntax highlighting and other language features for text editors (originally used by TextMate)

I've identified two sites that containing plantuml syntax information alreadi defined 
1. [vscode-plantuml] - Rich PlantUML support for Visual Studio Code.
2. [plantuml-syntax] - vim syntax file for plantuml

### [vscode-plantuml] 

This project provides a [plantuml.yaml-tmLanguage](https://github.com/qjebbs/vscode-plantuml/blob/master/syntaxes/plantuml.yaml-tmLanguage) that must be converted running `npm run buildsyntax`

### [plantuml-syntax] 

This project provides [plantuml.vim](https://github.com/aklt/plantuml-syntax/blob/master/syntax/plantuml.vim) that could be converted in an equivalent `.tmLanguage`


[plantuml-syntax]: https://github.com/aklt/plantuml-syntax
[vscode-plantuml]: https://github.com/qjebbs/vscode-plantuml