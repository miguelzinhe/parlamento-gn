import React from 'react'
import BubbleChart from '../../components/BubbleChart';

import './styles.css';

const GroupEvangelic = data => {
  const { data: graphData } = data

  const totalTresFrentes = graphData.filter((pessoa) => pessoa.carreiraParlamentar === 'projeção' && pessoa.confessionalidade2 === 'Evangélico');

  return (
    <div className="groupEvangelic">
      <div className="description">
        <p className="descriptionText">Eles são principalmente evangélicos</p>
      </div>
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalTresFrentes} />
          <span>57%</span>
          <span>são evangélicos</span>
        </div>
      </div>
    </div>
  )
}

export default GroupEvangelic