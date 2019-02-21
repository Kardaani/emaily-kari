//SurveyForm shows a form a user to add input

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
{label: 'Survey Title', name: 'title'},
{label: 'Subject Line', name: 'subject'},
{label: 'Email Body', name: 'body'},
{label: 'Recipient Lists', name: 'emails'}

];

class SurveyForm extends Component {


//helper function renderFields

renderFields(){
  return (
    <div>
      <Field
      label="Survey title"
       type="text"
        name="title"
         component={SurveyField}
      />
      <Field
      label="Subject Line"
       type="text"
        name="subject"
         component={SurveyField}
      />
      <Field
      label="Email Body"
       type="text"
        name="body"
         component={SurveyField}
      />
      <Field
      label="Recipient List"
       type="text"
        name="emails"
         component={SurveyField}
      />
    </div>
  );
}

//render function tulostukseen

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        {this.renderFields()}

        <button type="submit">Submit</button>
        </form>
      </div>
    );

  }
}

export default reduxForm({
form: 'SurveyForm'
})(SurveyForm);
