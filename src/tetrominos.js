export const TETROMINOS = {
    0: {shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '14, 250, 222',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '50, 100, 220',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '220, 160, 40',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '230, 200, 20',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '50, 210, 60',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '130, 170, 40',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '230, 80, 80',
    },
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = 
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}