import { connect } from 'react-redux'
import { saveTheme } from '../Actions/changeTheme';
import Footer from '../../Components/Layout/Footer';

//Map "dispatch action tới reducer" thành các props
const mapDispatchToProps = dispatch => ({
    dispatch,
    saveColorTheme: color => dispatch(saveTheme(color)),
});

//Map state cho các props để component sử dụng
const mapStateToProps = state =>{
    return {
        themeColor: state.color
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Footer);