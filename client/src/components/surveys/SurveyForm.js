//SurveyForm shows a form a user to add input

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends Component {

  render() {
    return (
      <div>
        SurveyForm!
      </div>
    );

  }
}

export default reduxForm({
form: 'SurveyForm'
})(SurveyForm);
