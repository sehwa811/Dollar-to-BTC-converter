import PropTypes from "prop-types";
import styles from "./Button.module.css"

function Button({text}) {
    return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}
/*prop types를 설치한 후 사용할 수 있다. 버튼 컴포넌트의 프롭 타입은
뭐뭐가 들어가야 한다고 알려주는 함수 생성 가능
*/

export default Button;