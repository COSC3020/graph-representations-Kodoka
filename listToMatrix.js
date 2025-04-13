function convertToAdjMatrix(adjList)
{
    var adjMatrix = [];

    // For each vertex in adjacency list...
    for(var i = 0; i < adjList.length; i++)
    {
        vertexArr = [];
        // For each potential vertex...
        for(var j = 0; j < adjList.length; j++)
        {
            // If receiving vertex is in i's edge array, push 1 onto vertexArr, to represent
            // existance of edge from vertex i to vertex j.
            if(adjList[i].includes(j))
            {
                vertexArr.push(1);
            }
            // Otherwise push 0 onto vertexArr, as no edge leads from vertex i to vertex j.
            else
            {
                vertexArr.push(0);
            }
        }
        // Push current vertex's vertex matrix onto adjMatrix array.
        adjMatrix.push(vertexArr);
    }

    return adjMatrix;
}
