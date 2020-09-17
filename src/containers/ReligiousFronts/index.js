import React from 'react'
import CongressChart from '../../components/CongressChart'

import './styles.css';

const ReligiousFronts = data => {
  const { data: graphData } = data

  const totalDeputados = graphData.filter((pessoa) => pessoa.cargo === "DEPUTADO");
  const totalSenadores = graphData.filter((pessoa) => pessoa.cargo === "SENADOR");
  
  return (
    <div className="religiousFronts">
      <div className="description">
        <span className="descriptionNumber">396</span>
        <p className="descriptionText">estão presentes nas três principais frentes religiosas</p>
      </div>
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={400} height={250} data={totalDeputados}/>
          <span>xx</span>
          <span>deputados federais</span>
        </div>
        <div className="graphItem">
          <CongressChart width={400} height={250} data={totalSenadores} />
          <span>xx</span>
          <span>senadores</span>
        </div>
      </div>
    </div>
  )
}

export default ReligiousFronts