# Overall development concepts
That's what i learned from numerous corporate and tailor-made projects, and would like to share.&nbsp;&nbsp;&nbsp;<sup>**_d**</sup>

<sup>**_d**</sup><sub>&nbsp;&nbsp;Disclaimer:&nbsp;due to the lack of time and hunge amount of coding/refactoring i couldn't follow all those practicies in this project</sub>

## Naming code entities
Names of libraries, packages, classes, methods, vars - it's the ultimate challenge: hard and time consuming work of the whole team.&nbsp;&nbsp;<sup>**_t**</sup>\
However the benefits are
+ collaboration, common understanding of a domain and establishing one 'common tongue' throughout the team 
+ sound architecture and self-descriptive APIs
+ inspiration for Test Driven Development
+ eliminating the piles of requirements, specifications and other docu that are hard to comprehense but easy to misunderstood, forget, or mostly ignore
+ lesser time for a newcomer to get on a project

Well, under time pressure i may also name logics classes as *services*, *helpers*, *utils* but it's barely a good piece of practice.

&nbsp;&nbsp;<sup>**_t**</sup><sub>&nbsp;&nbsp;The team aren't only developers but customers, testers, and, sure, end users</sub>

## Comments in the code
Self-descriptive, clean codes need no comments. Otherwise this signalises poor naming.\
Exclusions are, e.g., references to not fixed third-party bugs (that required a bizzare workaround), courtesy of stackoverflow.com (that explains a cool tech solution), or snippets in readmy's.

## Code cleaning and refactoring
Never change a running system. That's what would opponents of the refactoring tell.
True, if this is a stable part, which can be treated as black box.

Otherwise changes and additions within continuos developement will sooner or later bring the code to the hardly controllable chaos.\
Thus i'd use any change request to clean the code, update syntax, refactor, improve naming and delete as much as possible.

## Test driven development
Broadly misunderstood as test coverage. In my humble opinion it's more about concepts, where a good question is already an answer.

On the other side i'm not an advocate of unit tests for everything.\
If a method does `2+2` and the postfactum unit test checks it against `2+2`, is it really of great value?\
But this is ok when tests are logical and written first.

## Interfaces
It's not an enlightment щf mine, but in each language interfaces shall be high-granuled, to be further combined in higher-level business-domain interfaces.
With this done, one is safe with the first letter in **S**.O.L.I.D. As well a cast to a basic interface will make development cleaner and prevent much of bugs.