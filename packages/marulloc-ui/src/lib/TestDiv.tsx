import React from 'react';

type TProps = {
    propA: string;
};

const TestDiv: React.FC<TProps> = ({ propA }) => {
    return <div>{propA}</div>;
};

export default React.memo(TestDiv);