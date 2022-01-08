function transpose(mat) 
{
    for (var i = 0; i < mat.length; i++) 
    {
        for (var j = 0; j < i; j++) 
        {
            const tmp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = tmp;
        }
    }
}
var array = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
];
transpose(array);