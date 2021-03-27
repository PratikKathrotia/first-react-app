import { Component } from 'react';

import { DynamicForm } from '../dynamic-form/dynamic-form';
import classes from './example-form.module.css';

class ExampleFormComponent extends Component {
  state = {
    formFileds: [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name',
          type: 'text',
          placeholder: 'Enter your name',
        },
        validation: {
          required: true,
          minLength: 10,
          maxLength: 30,
        },
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email',
          type: 'text',
          placeholder: 'Enter your email',
        },
        validation: {
          required: true,
          isEmail: (val) =>
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
              val
            ),
        },
      },
      {
        key: 'phone',
        type: 'input',
        templateOptions: {
          label: 'Phone',
          type: 'number',
          placeholder: 'Enter your phone',
        },
        validation: {
          required: true,
          minLength: 10,
          maxLength: 10,
        },
      },
      {
        key: 'gender',
        type: 'select',
        templateOptions: {
          label: 'Gender',
          options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ],
        },
      },
    ],
    model: {},
  };

  handleFormSubmit = (formData) => {
    console.log(formData);
  };

  render() {
    return (
      <div className={classes.Main_form}>
        <DynamicForm
          formFields={this.state.formFileds}
          model={this.state.model}
          submit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export const ExampleForm = ExampleFormComponent;
