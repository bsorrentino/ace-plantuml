module.exports = `
# Boundaries
snippet start
	@startuml \${1:diagram name}
	$0
	@enduml
# Scale
snippet scale
	scale \${1:1.5}
	\${2:scale 1.5 | scale 200 width | scale 100 height | scale [max] 200x100}
# Title
snippet tt
	title 
	\${1:multi-line text}$0
	end title
# Caption
snippet cap
	caption \${1:Figure x.x description...}
	$0
# Legend
snippet leg
	legend,
		$0
	end legend
# node under
snippet lnk
	\${1:objAlias} \${2:.}. \${3:noteAlias}
	$0
# Note with direction
snippet nta
	note "\${1:single-line note}" as \${2:noteAlias}
	$0
# Link
snippet nts
	note \${1|left,right,top,bottom|} of \${2:objAlias}: \${3:single-line note}
# Note multilines
snippet ntm
	note \${1|left,right,top,bottom|} of \${2:objAlias}
		$0
	end note
# Header
# This may be used to provide a date/time stamp of when the diagram was authored/reviewed
snippet hd
	header \${1:last-updated xx/xx/xxxx}
	$0
# Header multilines
snippet hdn
	header
	\${1:last-updated xx/xx/xxxx}$0
	end header
# Footer      
snippet ft
	footer \${1:authored by xxx}
	$0
# Footer multilines
snippet ftn
	footer
	\${1:authored by xxx}$0",
	end footer
# Separator
snippet sep
	newpage \${1:title text}
	$0
`;
