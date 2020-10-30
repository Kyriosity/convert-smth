# Overall development concerns
That's what i learned from numerous corporate and tailor-made projects, **cutting-edge colleagues**. What i try to follow and i'd like to share. And it's all IMHO.

## Naming
Names of libraries, packages (assemblies), classes, methods, vars - it's the ultimate challenge: intricate and time consuming headache for the best orchestrated team.

However the great benefits are:
+ collaboration, common comprehension of a domain that establishes a kind of *lingua franca* throughout the really being bound team&nbsp;&nbsp;<sup>**_t**</sup>
+ sound architecture and self-descriptive code
+ less code, and of better quality
+ inspiration for Test/Behavior Driven Development
+ escape from piles of reqs, specs, other papers that are hard to follow but easy to misunderstood, forget, though mostly ignored
+ reduced time to get on a project for a newcomer 
+ comfy navigation within the source code (both by IDE's explorer and CTRL+F)

Well, under time pressure even the best experts name logics classes as *services*, *helpers*, *utils*, *handlers* but would be barely proud of that.

&nbsp;&nbsp;<sup>**_t**</sup><sub>&nbsp;&nbsp;The team aren't only developers but customers, testers, and, sure, end users</sub>

## Comments
Self-descriptive, clean codes need no comments. Otherwise this signalises poor naming.\
However they're fully liable for 
+ third-party bugs (requiring a bizzare workaround)
+ courtesy of Q&A sites
+ worthy tricks that harm readability
+ snippets in readme-s
+ domain-explaining quotes from wikis

This statement was for renowned high-level languages.

One more exclusion - *ToDo*s. Though notably subject of jokes and memes, i'd consider them a good compromise between YAGNI&nbsp;<sup>**_y**</sup> and vision.\
A good idea is to transform them to *work items* by release.\
&nbsp;&nbsp;<sup>**_y**</sup><sub>&nbsp;&nbsp;[You aren't gonna need it](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)</sub>

## Code cleaning and refactoring
Never change a running system. That's what would opponents of the refactoring tell.\
And really `true` if this is a stable part, which can be treated as a black box.

Otherwise changes and enhancements w/out refactoring will sooner or later bring the code to the badly controllable chaos.\
Thus, when possible, i'd use any change request to
+ clean and refactor
+ update syntax in the favour of the last version
+ improve naming
+ delete as much as possible

## Test driven development
Broadly misunderstood as test coverage. It's more about concepts, when a good question is already an answer.

On the other side i'm not an advocate of unit tests for everything.\
If a method does `2+2` and a postfactum test checks it against `2+2`, is that really of great value?\
But Ok when tests are conceptual and written first.

## Interfaces
It's not an enlightment of mine, but independent of prog. language interfaces shall be fine-granuled, to be further combined in various higher-level domain definitions.
With this done, one is safe with the first letter in **S**.O.L.I.D. As well a cast to a basic interface makes development cleaner and prevents much of bugs.

## Code review and pair programming
No comment - it's the best part of team work.