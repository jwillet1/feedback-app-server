import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false }
  
  rednerContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview 
        onCancel={() => this.setState({ showFormReview: false })}
      />;
    }
    
    return <SurveyForm 
      onSurveySubmit={() => this.setState({ showFormReview: true })}
    />;
  }

  render() {
    return (
      <div>
        {this.renderContent}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
