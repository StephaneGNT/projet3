import React from 'react';
import CakeStoryDisplay from './CakeStoryDisplay';

const CakeSizeDisplay = () => {
  this.chosenStory = [];
  const storys = [5, 10, 20, 30, 50];
  const tailles = ['10 cm', '12 cm', '14 cm', '16 cm', '18 cm'];

  const renderDisplay = () => {
    const render = [];
    for (let i = 0; i < storys.length; i += 1) {
      const width = `${storys[i] / storys[storys.length - 1] * 100}%`;
      render.push(
        <CakeStoryDisplay
          width={width}
          story={storys[i]}
          taille={tailles[i]}
        />,
      );
    }
    return render;
  };

  return (renderDisplay());
};

export default CakeSizeDisplay;
