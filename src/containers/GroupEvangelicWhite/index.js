import React from 'react'
import BubbleChart from '../../components/BubbleChart';

const GroupEvangelicWhite = data => {
  const { data: graphData } = data

  const totalTresFrentes = graphData.filter((pessoa) => pessoa.carreiraParlamentar === 'projeção' && pessoa.confessionalidade2 === 'Evangélico' && pessoa.raca === '1');

  return (
    <div className="groupEvangelicWhite">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalTresFrentes} />
          <span>69%</span>
          <span>são brancos</span>
        </div>
      </div>
    </div>
  )
}

export default GroupEvangelicWhite