import React, {memo} from "react";
import PropTypes from "prop-types";

import {TailSpin} from 'react-loader-spinner';


const Spinner = memo( ( {loading=true, width=100, height=100} ) => {
    return(
        <TailSpin
            visible={loading}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{
                position: 'fixed',
                zIndex: 9999,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            wrapperClass="tail_spin_wrapper"
        />
    );
} );

// 데이터 타입 설정
Spinner.propTypes = {
    loading: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number
};

export default Spinner;
