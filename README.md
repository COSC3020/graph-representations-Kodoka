# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Matrix to List Runtime Analysis

My algorithm works through each vertex of the input matrix in the outer for loop,
then the inner for loop works through each vertex a second time, checking for
edges leading from the vertices of the outer loop, to vertices of the inner
loop. Regardless of whether an edge exists between any two vertices the check
still occurs, so the runtime complexity is dependent on vertices, not edges.
As mentioned above my code has two nested loops performing $n$ work where $n$
is representative of the number of vertices in the input matrix, so the
runtime complexity is $O(n^2)$.  

## Sources

I was having troule visualizing the input for some reason, so I did peek at the
test code briefly to get a general idea of what the input data would look like,
but I did heed your warning, and only used the peek to get an idea of what the
input data structure would be, then verified my suspicion by making a push to
github where I had my code just print out the input from the test code. With my
suspicion verified, I coded my solution independent of other sources, and the
test code's assistance.  

I guessed the runtime complexity of .includes() from the docs at:  

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes  

And trusted that this souces wouldn't lie to me about my guess of $O(n)$ being accurate:  

https://medium.com/@inbasekaran18/understanding-time-complexity-of-array-methods-in-javascript-cc7bb30b3e9d  

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.  

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.  

![Notes_250412_160913](https://github.com/user-attachments/assets/9a245dee-b563-4992-815c-2cf5b6ee7389)

## List to Matrix Runtime Analysis

Much like the matrix to list algorithm, we have two nested loops performing $n$
work where $n$ is representative of the number of verticies. However, within the
inner for loop, a .includes(j) call is made. Due to this .includes call, which
itterates through the edges of a vertex, this algorithm's time complexity depends
on both vertices and edges, and in instances where all vertices feature all
edges, has a worst case time complexity of $\Theta(n^3)$ as each vertice may
feature $n$ edges, causing the .includes(j) call to need to be made $n$ times as
the adjacency list is converted to an adjacency matrix.  

// Update to pass jslint.
