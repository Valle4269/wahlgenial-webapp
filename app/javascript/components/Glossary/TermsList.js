import React from 'react'
import TermItem from './TermItem'
import icons from '../../images/icons'
export const TermsEmpty = _ => {
  return (
    <div className="call-to-action col-lg-6 col-md-12 px-1 py-5 mx-auto text-center">
      <img className="" src={ icons.glossaryCallToAction } />
      Wähle einen Buchstaben aus
    </div>
  )
}

class TermsList extends React.Component {
  state = { selectedTermIndex: null }

  handleSelectTerm (termIndex) {
    const {selectedTermIndex, handleSelectTerm} = this.props
    if (selectedTermIndex !== termIndex) {
      handleSelectTerm(termIndex)
    } else {
      handleSelectTerm(null)
    }
  }

  render () {
    const {letterData, selectedTermIndex} = this.props
    return (
      <div className="col-lg-6 col-md-12 px-1 py-5 mx-auto text-center">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="terms-list">
              {letterData.terms.map((term, index) => (
                <TermItem
                  key={ index }
                  title={ term.title }
                  description= { term.description }
                  imageThumb={ term.image_thumb }
                  image={ term.image }
                  onClick={ () => { this.handleSelectTerm(index) } }
                  selected = { selectedTermIndex === index } />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TermsList
