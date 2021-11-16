import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';

function ItensListaTarefas(props){
    return (
        props.tarefas.map(tarefa => 
            <tr key={tarefa.id} data-testid="tarefa">
                <td width="75%" 
                    data-testid="nome-tarefa">
                    {tarefa.nome}

                </td>
            </tr>
        )
    );
}

ItensListaTarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    recarregarTarefas: PropTypes.func.isRequired

};

export default ItensListaTarefas;