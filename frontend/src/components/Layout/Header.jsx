import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
function Header(props){
  return (
    <>
      <header className={classes.header}>
        <h1>LoungeMeals</h1>
        <button onClick={props.onViewMenu}>View Menu</button>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}
export default Header;