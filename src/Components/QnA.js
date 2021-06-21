import React from "react";
import PropTypes from 'prop-types';

import { FaMinus, FaPlus } from 'react-icons/fa'


export default class QnA extends React.Component {
    render() {
        return (
            <div className="question" id={this.props.qID}>
                <a className="question-link whitespace-pre-line" href={`#${this.props.qID}`}>
                    {this.props.question}
                    <FaMinus className="icon minus" />
                    <FaPlus className="icon plus" />
                </a>
                <div className="answer">
                    {this.props.answer}
                    
                </div>
            </div>
        )
    }
}
// //<p>{this.props.answer.split('\n').map( (it, i) => <div key={'x'+i}>{it}</div> )}</p>
QnA.defaultProps = {
    qID: "q0",
    question: "Question?",
    answer: <p>Answer!</p>,

}

QnA.propTypes = {
    qID: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.element.isRequired,
}