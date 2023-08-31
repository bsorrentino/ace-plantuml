const general = 
`
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
snippet title multi
	title 
	\${1:multi-line text}$0
	end title
# Caption
snippet caption
	caption \${1:Figure x.x description...}
	$0
# Legend
snippet legend
	legend,
		$0
	end legend
# node under
snippet link
	\${1:objAlias} \${2:.}. \${3:noteAlias}
	$0
# Note with direction
snippet note alias
	note "\${1:single-line note}" as \${2:noteAlias}
	$0
# Note Link
snippet note link
	note \${1|left,right,top,bottom|} of \${2:objAlias}: \${3:single-line note}
# Note multilines
snippet note link multi
	note \${1|left,right,top,bottom|} of \${2:objAlias}
		$0
	end note
# Header
# This may be used to provide a date/time stamp of when the diagram was authored/reviewed
snippet header
	header \${1:last-updated xx/xx/xxxx}
	$0
# Header multilines
snippet header multi
	header
	\${1:last-updated xx/xx/xxxx}$0
	end header
# Footer      
snippet footer
	footer \${1:authored by xxx}
	$0
# Footer multilines
snippet footer multi
	footer
	\${1:authored by xxx}$0",
	end footer
# Separator
snippet sep newpage
	newpage \${1:title text}
	$0
`;

const sequence = 
`
# actor
snippet actor
	\${1:actor} \${2:alias}\${3: as "\${4:longName}"}\${5: <<(\${6:P},\${7:#ADD1B2})\${8|actor,participant,boundary,control,database,entity|}>>}
	$0

# auto incrementing numbered sequence 
snippet auto number
	autonumber \${1:nStartFrom} \${2:nStepBy}\${3: "###"}
$0

# message between two objects 
snippet msg
	\${1:objAlias1} \${2:->} \${3:objAlias2}: \${4:message}
	\${1:objAlias1} <-- \${3:objAlias2}: \${5:returnVal}
	\${6:'Alt=> async msg: A->>B or A-\\B; lost msg: A->o]; found msg: Ao<-]}

# incoming
snippet incoming msg
	[-> \${1:objAlias}: \${2:message}

# outgoing
snippet outgoing msg
	\${1:bjAlias} ->] : \${2:message}

# hide footbox
snippet footbox hide
	hide footbox

# alternative or conditional execution
snippet alt
	alt \${1:cond1}
		$0
	else \${2:cond2...}
		
	end

# Adds an opt 
snippet if opt
	opt \${1:cond}
		$0
	end

# Adds a loop 
snippet loop
	loop \${1:cond}
		$0
	end

# parallel execution 
snippet parallel
	par \${1:threadName1}
		$0
	else \${2:threadName2...}
		
	end

# exception/error handling block 
snippet break exception
	break \${1:catchCond1}
		$0
	else \${2:catchCond2...}
		
	else finally
		
	end

# critical flow section
snippet critical
	critical \${1:cond}
		$0
	end

# group
snippet group
	group \${1:basis}
		$0
	end

# bounding box
snippet box
	box "\${1:caption}"
		participant \${2:alias1}
		\${3:participant \${4:alias2}}$0
	end box

# note
snippet note
	note \${1|left,right|} : \${3:single-line note}
$0

# note of the preceding message
snippet note multi
	note \${1|left,right|}
	\${3:multi-line note}$0
	end note

# note over
snippet note over
	note over \${1:commaSepAliases} : \${2:single-line note}
$0

# note over multiline
snippet note over multi
	note over \${1:commaSepAliases}
	\${2:multi-line note}$0
	end note

# section divider 
snippet div
	== \${1:section} ==
$0

# text reference 
snippet ref
	ref over \${1:commaSepAliases}
	\${2:multi-line note}$0
	end ref


# delay
snippet delay ...
	... \${1:elapsed time}...
$0

# additional spacing
snippet spacing
	||\${1:nPixels}||
$0

# object creation
snippet create new
	create \${1:objAlias}
$0

# object destruction
snippet destroy delete
	destroy \${1:objAlias}
$0

# active execution
snippet active on
	activate \${1:objAlias}
$0

#  deactive execution
snippet deactive off
	deactivate \${1:objAlias}
$0

# return
snippet return ret
	return \${1:label}
$0
`;

module.exports = general + sequence;