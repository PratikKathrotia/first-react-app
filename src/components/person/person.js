import { withRouter } from 'react-router-dom';
import styles from './person.module.css';

const PersonComponent = (props) => {
  const { personInfo } = props;
  return (
    <div className={styles.Person}>
      <h4>{personInfo.name}</h4>
      <p>Hi, I'm {personInfo.age} years old.</p>
      <div className={styles.footer}>
        <button className={styles.EditButton} onClick={props.edit}>
          Edit
        </button>
        <button className={styles.DeleteButton} onClick={props.delete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export const Person = withRouter(PersonComponent);
