## Was sind Annotations?

Annotations sind Sprachelemente in einer Programmiersprache (bspw. Java) Die es einem Erlauben Metadaten in den Quelltext einzufügen. Metadaten sind in diesem Fall Daten die der Compiler Interpreter oder VM Extra informationen Über den Code gibt (@Deprecated, @Override).

## Warum werden Annotations in Frameworks benutzt? (TODO) 

Um immer wiederkehrende teile des codes zu Abstrahieren. Für IOC (Inversion Of Control), Dependency Injection

## Was sind RetentionPolicies?

RetentionPolicies sind Annotations die bestimmen wie lange Anderer Annotations existieren. es gibt drei verschiedene RetentionPolicies. Source, Class und Runtime.

um eine RetentionPolicy auf eine Annotation anzuwenden markiert man sie mit einer @Retention meta-annotation.

@RetentionPolicy.SOURCE:
Annotations mit der @RetentionPolicy.SOURCE werden vor dem Compilieren ausgewertet und landen nicht in den .class dateien, da sie nicht während der runtime benötigt werden.

Beispiele: @SuppressWarnings, @Override


@RetentionPolicy.CLASS:

Annotations mit der @RetentionPolicy.CLASS werden mit in die .class files compiliert, werden aber am vor der Runtime verworfen.

Beispiele: TODO

@RetentionPolicy.RUNTIME:

Annotation mit der @RetentionPolicy.RUNTIME bleiben selbst während der runtime bestehen


Beispiele: TODO


## Zusammenhang zwischen Annotations und Dependency Injection

TODO













