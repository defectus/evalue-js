# evalue-js

a small application to manage notes

## what's in the box
All CRUD commands are implemented. You can take, view, edit and delete notes as you want.

Application implemented with ECMA5.1 - under heavy sufferance. 

## what's not in the box
You can't switch locale at the moment. There's no confirmation before deleting a note. If something goes wrong there's no warning. All this stuff can be implemented later.

Finally, there's no test for the time being. 

## how to run this thing
Make sure you have the usual node.js setup. Ideally use `nvm`.

Make sure you have `grunt` installed globally. If not do `npm install grunt-cli -g`.
 
Do `npm install`.

Finally run `grunt`. This will launch the application. By default the app runs on port 9000 (configurable).

Navigate to <http://localhost:9000/>

That's it.
