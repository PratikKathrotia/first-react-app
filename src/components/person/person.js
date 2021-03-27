import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styles from './person.module.css';

const PersonComponent = (props) => {
  const { personInfo } = props;
  return (
    <div className={styles.Person}>
      <h4>{personInfo.name}</h4>
      <p>Hi, I'm {personInfo.age} years old.</p>
      <div className={styles.footer}>
        <Button
          variant="contained"
          color="primary"
          className={styles.EditButton}
          onClick={props.edit}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={styles.DeleteButton}
          onClick={props.delete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export const Person = withRouter(PersonComponent);
