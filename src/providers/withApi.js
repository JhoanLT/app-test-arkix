import React from 'react';
import {connect} from 'react-redux';
import {fetchApi} from "../store/actions/api.actions";
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

const mapStateToProps = () => ({
    
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchApi,
}, dispatch);

export const props = {
    fetchApi : PropTypes.func,
};

/**
 * Inyecta propiedades de API
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @returns {function(*)}
 */
export default WrappedComponent => (
    connect(mapStateToProps, mapDispatchToProps)(
        class extends React.PureComponent {
            render() {
                return (
                    <WrappedComponent
                        {...this.props}
                    />
                );
            }
        })
);