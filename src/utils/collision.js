export const canMoveTo = (field, shape, x, y) => {
    const fieldWidth = field[0].length - 1;
    const fieldHeight = field.length - 1;
    let result = true;

    for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[row].length; col++) {
            if (shape[row][col] !== 0) {
                const actualX = col + x;
                const actualY = row + y;
                
                let actualFieldCell = null;
                if (field[actualY] != null) {
                    actualFieldCell = field[actualY][actualX];
                }

                if (actualX < 0 || actualX > fieldWidth || actualY > fieldHeight || actualFieldCell > 0) {
                    result = false;
                    break;
                }
            }
        }
    }

    return result;
};

export const mergeShapeWithField = (field, shape, x, y) => {
    const updatedField = [...field];
    let gameOver = false;

    // Merge the shape into the field
    shape.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            if (col !== 0) {
                const actualX = colIndex + x;
                const actualY = rowIndex + y;

                if (actualY < 0) {
                    gameOver = true;
                    return;
                }

                updatedField[actualY][actualX] = col;
            }
        });
    });

    const scorePoints = [0, 40, 100, 300, 1200];
    let completedRows = 0;

    if (!gameOver) {
        // Check field for completed rows
        for (let i = 0; i < updatedField.length; i++) {
            if (updatedField[i].indexOf(0) === -1) {
                completedRows++;
                updatedField.splice(i, 1);
                updatedField.unshift(Array(10).fill(0));
            }
        };

        if (completedRows > 4) {
            completedRows = 4;
        }
    }
    

    return { updatedField, score: scorePoints[completedRows], gameOver };
}