function convertToAdjList(adjMatrix)
{
    var adjArray = []

    // For each vertex of the adjacency matrix...
    for(var i = 0; i < adjMatrix.length; i++)
    {
        var vertexArr = []
        // Check if an edge exists between element i and j, edges == 1.
        for(var j = 0; j < adjMatrix[i].length; j++)
        {
            // If an edge exists, push the index of the receiving vertex onto the current
            // vertex's vertexArr.
            if(adjMatrix[i][j] == 1)
            {
                vertexArr.push(j);
            }
        }
        // Push current vertex's vertexArr onto adjArray.
        adjArray.push(vertexArr);
    }
    
    return adjArray;
}
