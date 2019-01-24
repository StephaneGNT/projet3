import React from 'react';
import CakeStoryDisplay from './CakeStoryDisplay';

const CakeSizeDisplay = () => {
  const storys = [5, 10, 15, 20, 30, 50];
  const tailles = ['10 cm', '12 cm', '13 cm', '14 cm', '16 cm', '18 cm'];

  const renderDisplay = () => {
    const render = [];
    for (let i = 0; i < storys.length; i += 1) {
      const width = storys[i] / storys[storys.length - 1] * 110 > 100 ? '100%' : `${storys[i] / storys[storys.length - 1] * 110}%`;
      render.push(
        <CakeStoryDisplay
          width={width}
          story={storys[i]}
          taille={tailles[i]}
          key={width}
        />,
      );
    }
    return render;
  };

  return (renderDisplay());
};

export default CakeSizeDisplay;
