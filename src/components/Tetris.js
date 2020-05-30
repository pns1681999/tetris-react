import React from 'react';

import { creatStage } from '../gameHelpers';
import {StyledTetris, StyledTetrisWrapper} from './styles/StyledTetris'

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={creatStage()} />
                <aside>
                    <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                        <StartButton />
                    </div>

                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
