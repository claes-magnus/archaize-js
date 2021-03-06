# The Abstract Syntax Tree
<pre>
In this  project, the real  work  begins *after*,  or rather
*with* the Abstract Syntax Tree, AST, since Archaize JS make
use   of   [Esprima](https://www.npmjs.com/package/esprima).
Let's begin by explaining what comes before an AST.

Any  compiler  or  transpiler  starts out  with  streams  of
characters. The streams of characters constitute the program
code.

Consider this JavaScript code:
</pre>

```
function addNums(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(`2 + 2 = ${addNums(2, 2)}`); 
// output: 2 + 2 = 4
```

<pre>
Esprima includes both a lexical analyzer (a tokenizer) and a
syntax   analyzer (another  word   for  AST, well what comes 
before). Somewhere in its inner workings, it starts out with 
by  performing a lexical analysis of  the code (["function", 
"addNums",  "(", "...", "nums", ")" ...]).

A  lexical analysis  breaks down  the code  into atoms,  the
smallest possible semantic  unit of the code,  and creates a
symbol table  for all sorts  of declared names (in  the case
above: nums, a and b).

The  'atoms' would  also include  'keywords' like  function,
return,  reduce etc.  At the  end of  this process,  a token
stream emerges, replacing the  character stream. I guess you
could see it  as a sort of word-list of  'words', present in
the program code.

The next step is called syntax analysis and creates the AST. 

For  purposes of  understanding,  I think  it's valuable  to
contemplate  the difference  between something  abstract and
concrete. Something abstract or abstractions in general, are
only  possible  as derivations  of  a  concrete 'entity'  of
some sort;  it provides  a 'distance'  and brings  about the
essentials of  the concrete  subject matter,  while ignoring
what's trivial (depending on the context).

When  the code  is  considered in  the  syntax analysis,  it
focuses  on  the  semantics  of  the  programming  language,
ignoring, for  instance, the visual  elements of a  code. In
most  programming  languages  (Python  being  an  exception)
indentations (tabs) are for 'us', not the machine - it's not
an essential part of the code to the machine.

The same thing  is true also for the 'concrete'  syntax of a
language. Most  programming languages use functions,  but in
the inner  workings of  an AST  *how a  programming language
actually  programmatically requires  the  user  to spell  is
trivial*  (func  or  function). Therefore  what  things  are
"called"  -  that  is,  the  naming  of  the  "abstractions"
-  are   contingent.  One   would  hope  though,   that  the
transpiler would  make use  of a explanatory  naming system,
something that's  the case with Esprima  (and Acorn, another
quite  famous  AST-ifier)  who  follows  the  suggestion  of
the  project [ESTree](https://github.com/estree/estree/),  a
standardization project.

These  kind  of abstractions  are  useful  to the  compiler,
enabling a  way to translate  from one language  to another.
Esprima,  following ESTree,  would  articulate a  AST for  a
function with this kind of terminology:
</pre>

```
{
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "addNums"
}
```

<pre>
As you can  see, an AST much resembles any  JSON object with
data. Everything has  a key and value; and a  value can also
be another key holding other values.























</pre>




