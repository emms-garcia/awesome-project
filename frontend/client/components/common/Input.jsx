import React, { Component } from 'react';
import _ from 'lodash';

class Input extends Component {
    static propTypes = {
        hasError: React.PropTypes.bool,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func,
        type: React.PropTypes.oneOf(['email', 'text', 'password']),
        value: React.PropTypes.string.isRequired,
    };

    static uniqueID = _.uniqueId('input_');

    state = { labelFocus: false };

    render () {
        const { hasError, label, type, value } = this.props;
        const labelClass = (
            hasError || this.state.labelFocus || value
        )  ? 'active' : '';
        return (
            <div className='input-field'>
                <input
                    className={hasError ? 'invalid' : ''}
                    id={this.uniqueID}
                    onChange={this.onChange.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    type={type}
                    value={value}
                />
                <label
                    data-error='wrong'
                    className={labelClass}
                    htmlFor={this.uniqueID}>{label}
                </label>
            </div>
        );
    }

    onChange (e) {
        this.props.onChange && this.props.onChange(e.target.value);
    }

    onBlur () {
        this.setState({labelFocus: false});
    }

    onFocus () {
        this.setState({labelFocus: true});
    }
}

export default Input;
