import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { setSession, removeSession } from '../store/actions/session.actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setSession,
    removeSession,
}, dispatch);

const mapStateToProps = ({session}) => ({
    session,
});

export const props = {
    session       : PropTypes.any,
    setSession    : PropTypes.func,
    removeSession : PropTypes.func
};

/**
 * Inyecta propiedades para controlar el estado {session} en Redux
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @returns {function(*)}
 */
export default WrappedComponent => (
    connect(mapStateToProps, mapDispatchToProps)(class extends React.PureComponent {
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                />
            );
        }
    })
);