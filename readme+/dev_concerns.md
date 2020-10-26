# Overall development concerns
That's what i learned from numerous corporate and tailor-made projects, and would like to share.&nbsp;&nbsp;&nbsp;<sup>**_d**</sup>

&nbsp;&nbsp;<sup>**_d**</sup><sub>&nbsp;&nbsp;Disclaimer:&nbsp;Do not treat this project as a pure sample. Due to the lack of time and huge amount of coding/refactoring i couldn't follow all those practicies alone.</sub>

## Naming code entities
Names of libraries, packages (assemblies), classes, methods, vars - it's the ultimate challenge: intricate and time consuming for the whole team.&nbsp;&nbsp;<sup>**_t**</sup>\
However the benefits are
+ collaboration, common comprehension of a domain that result in 'common tongue' throughout the team. which in that turns unite the team more than one expects
+ sound architecture and self-descriptive code
+ less code, and of better quality
+ inspiration for Test Driven Development
+ escape from piles of reqs, specs, other papers that are hard to follow but easy to misunderstood, forget, but mostly ignored
+ reduced time to get on a project for a newcomer 

Well, under time pressure even the best expert will name logics classes as *services*, *helpers*, *utils*, *handlers* but would be barely proud of that.

&nbsp;&nbsp;<sup>**_t**</sup><sub>&nbsp;&nbsp;The team aren't only developers but customers, testers, and, sure, end users</sub>

## Comments
Self-descriptive, clean codes need no comments. Otherwise this signalises poor naming.\
However there're some exclusions: third-party bugs (that required a bizzare workaround), courtesy of Q&A sites, worthy tricks that harm readability, snippets in docu, and subjects-explaining quotes from wikis
## Code cleaning and refactoring
Never change a running system. That's what would opponents of the refactoring tell.\
`True` if this is a stable part, which can be treated as a black box.

Otherwise changes and enhancements w/out refactoring will sooner or later bring the code to the badly controllable chaos.\
Thus i'd use any change request to clean the code, update syntax, refactor, improve naming and delete as much as possible.

## Test driven development
Broadly misunderstood as test coverage. IMHO it's more about concepts, where a good question is already an answer.

On the other side i'm not an advocate of unit tests for everything.\
If a method does `2+2` and a postfactum test checks it against `2+2`, is that really of great value?\
But Ok when tests are conceptual and written first.

## Interfaces
It's not an enlightment of mine, but independent of language interfaces shall be high-granuled, to be further combined in various higher-level domain interfaces.
With this done, one is safe with the first letter in **S**.O.L.I.D. As well a cast to a basic interface will make development cleaner and prevent much of bugs.