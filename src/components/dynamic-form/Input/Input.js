import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.Input];
  if (!props.isValid && props.isTouched) {
    inputClasses.push(classes.invalid);
  }
  switch (props.type) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          type={props.templateOptions.type}
          placeholder={props.templateOptions.placeholder || ''}
          value={props.value}
          onChange={(event) => props.changed(props.keyStr, event.target.value)}
          onBlur={(event) => props.blured(props.keyStr, event)}
        />
      );
      break;

    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={(event) => props.changed(props.keyStr, event.target.value)}
          onBlur={(event) => props.blured(props.keyStr, event)}
        >
          {props.templateOptions.options.map((option) => (
            <option key={JSON.stringify(option)} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          type={props.templateOptions.type}
          placeholder={props.templateOptions.placeholder || ''}
          value={props.value}
          onChange={(event) => props.changed(props.keyStr, event.target.value)}
          onBlur={(event) => props.blured(props.keyStr, event)}
        />
      );
  }

  return (
    <div className={classes.Input_Container}>
      <label className={classes.Lable}>{props.templateOptions.label}</label>
      {inputElement}
      {!props.isValid && props.isTouched ? (
        <div className={classes.Error}>Please enter valid {props.keyStr}</div>
      ) : null}
    </div>
  );
};

export default React.memo(Input);
