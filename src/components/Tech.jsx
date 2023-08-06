import React from 'react';

import { technologies } from '../constants';
import Wrapper from './Wrapper';
import { Ball } from './canvas';

function Tech() {
    return (
        <Wrapper idName="tech">
            <div className='mt-5 flex flex-wrap justify-center gap-10'>
                {technologies.map((tech, index) => (
                    <div key={index} className='w-32 h-32'>
                        <Ball tech={tech} />
                    </div>
                ))}

            </div>
        </Wrapper>

    )
}

export default Tech