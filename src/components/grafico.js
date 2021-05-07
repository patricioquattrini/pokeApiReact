import React, { Component } from 'react';
import {Radar} from "react-chartjs-2";

class GraficoPolar extends Component {
    render(){
        return(
            <div>
                <Radar 

                    options={{
                        scales: {
                            r: {
                                suggestedMin: 0,
                                suggestedMax: 150
                            }
                        }
                    }}

                    data={{
                        labels: [
                            'Hp',
                            'Atq',
                            'Atq Esp',
                            'Def',
                            'Def Esp',
                            'Vel'
                        ],
                        datasets: [{
                            label: 'Stats',
                            data: [this.props.stats[0].base_stat, this.props.stats[1].base_stat, this.props.stats[2].base_stat, this.props.stats[3].base_stat, this.props.stats[4].base_stat, this.props.stats[5].base_stat],
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgb(255, 99, 132)',
                            pointBackgroundColor: 'rgb(255, 99, 132)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(255, 99, 132)'
                        }],
                    }}
                   
                
                />
                
            </div>
        );
    }  
}

export default GraficoPolar;

