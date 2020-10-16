# Overall development concepts
That's what i learned from numerous corporate and tailor-made projects, and would like to share. <sup>**_d**</sup>

<sup>**_d**</sup><sub> Disclaimer: due to the lack of time and big amount of coding i couldn't follow all these practies in this project</sub>

## Naming code entities
Names of libraries, packages, classes, methods, vars - it's the ultimate challenge: hard and time consuming work of the whole team. <sup>**_t**</sup>
However benefits are
+ collaboration, common understanding of a domain and establishing one 'common language' throughout the team 
+ sound architecture and self-descriptive APIs
+ inspiration to Test Driven Development
+ elimination of piles of requirements, specification, and other docu that are hard to read and easy to misunderstood or forget
+ lesser time for a newcomer to get on a project

Well, under time pressure i may also name logics classes as *services*, *helpers*, but it's barely a good practice 

<sup>**_t**</sup><sub> The team aren't only developers but customers, end users</sub>

## Comments in the code
Self descriptive, clean code requires no comments. Otherwise this signalises poor naming.
Exclusions are notes, like a ref to a framework bug (that required a bizzare workaround), courtesy of stackoverflow.com (that explains a cool tech solution).

## Code cleaning and refactoring
Never change a running system. That's what would opponents of the refactoring tell.
True, if this is a fixed part that can be treated as black box.

Otherwise changes and additions within continuos developement will sooner or later bring the code to the hardly controlled chaos.
Thus i'd use any change in code to clean it, update syntax, refactor, improve naming and delete as much as possible.

## Test driven development
Broadly misunderstood as test coverage. In my humble opinion it's more about concepts, where a good question is already an answer.

On the other side i'm not on advocate of unit tests for everything. 

If a method does *2+2* and the unit test checks against *2+2* is it really of great value? Actually these are unit tests created after the coding of classes.

