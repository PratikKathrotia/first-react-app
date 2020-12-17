import styles from './person.module.css';

const PersonComponent = (props) => {
  const { personInfo } = props;
  return (
    <div className={styles.Person}>
      <p>
        Hi, I'm {personInfo.name} and I am {personInfo.age} years old.
      </p>
      <input
        type="text"
        placeholder="Enter your name"
        value={personInfo.name}
        onChange={(event) => props.nameChange(event, personInfo.id)}
      />
    </div>
  );
};

export const Person = PersonComponent;
