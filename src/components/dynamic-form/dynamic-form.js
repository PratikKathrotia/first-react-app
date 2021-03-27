import { Component } from 'react';
import { Button } from '@material-ui/core';
import cloneDeep from 'lodash/cloneDeep';

import Input from './Input/Input';

class DynamicFormComponent extends Component {
  state = {
    canRender: false,
    fields: [],
    model: {},
  };

  componentDidMount() {
    const { formFields, model } = this.props;
    if (formFields && formFields.length) {
      const formattedFields = {};
      const updatedModel = {};
      formFields.forEach((field) => {
        formattedFields[field.key] = {
          ...field,
          isValid: !field.validation,
          isTouched: false,
        };
        updatedModel[field.key] =
          model[field.key] || field.templateOptions.defaultValue || '';
      });
      this.setState({
        canRender: true,
        fields: formattedFields,
        model: updatedModel,
      });
    }
  }

  handleValueChange = (key, value) => {
    const clonedFields = cloneDeep(this.state.fields);
    clonedFields[key] = {
      ...clonedFields[key],
      isValid: validateInput(value, this.state.fields[key].validation || {}),
    };

    this.setState((prevState) => {
      return {
        fields: clonedFields,
        model: {
          ...prevState.model,
          [key]: value,
        },
      };
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.props.submit(this.state.model);
    }
  };

  handleInputBlured = (key) => {
    const clonedFields = cloneDeep(this.state.fields);
    clonedFields[key] = {
      ...clonedFields[key],
      isTouched: true,
    };
    this.setState({ fields: clonedFields });
  };

  isFormValid = () => {
    const fieldValidationMap = this.state.fields.map((field) => field.isValid);
    return fieldValidationMap.every((v) => !!v);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        {Object.keys(this.state.fields).map((field) => (
          <Input
            key={field}
            keyStr={field}
            {...this.state.fields[field]}
            value={this.state.model[field]}
            changed={this.handleValueChange}
            blured={this.handleInputBlured}
          />
        ))}
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export const DynamicForm = DynamicFormComponent;

// Out source below logic to a service

const validation = {
  required: (val) => {
    return !!val;
  },

  minLength: (val, length) => {
    return val.length >= length;
  },

  maxLength: (val, length) => {
    return val.length <= length;
  },
};

const validateInput = (val, validationObj) => {
  if (Object.keys(validationObj).length) {
    const results = [];
    Object.keys(validationObj).forEach((key) => {
      if (typeof validationObj[key] === 'function') {
        results.push(validationObj[key](val));
        return;
      }
      if (validation[key]) {
        results.push(validation[key](val, validationObj[key]));
      }
    });
    return results.every((el) => !!el);
  }
  return true;
};
