import React from 'react'
import BubbleChart from '../../components/BubbleChart';

const GroupEvangelicWhiteMale = data => {
  const { data: graphData } = data

  const totalTresFrentes = graphData.filter((pessoa) => pessoa.carreiraParlamentar === 'projeção' && pessoa.confessionalidade2 === 'Evangélico' && pessoa.raca === '1' && pessoa.genero === 'M');

  return (
    <div className="groupEvangelicWhiteMale">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalTresFrentes} />
          <span>80%</span>
          <span>são homens</span>
        </div>
      </div>
    </div>
  )
}

export default GroupEvangelicWhiteMale