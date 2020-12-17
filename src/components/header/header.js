import styles from './header.module.css';

const HeaderComponent = (props) => {
  return (
    <div>
      <h1>This is my first react app</h1>
      <p>It's really working!</p>
      <button className={styles.toggleButton} onClick={props.personsToggle}>
        Toggle Persons
      </button>
    </div>
  );
};

export const Header = HeaderComponent;
