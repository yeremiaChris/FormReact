import React from 'react'

import {Field,ErrorMessage} from 'formik'
import TextError from './TextError';
function Checkbox(props) {
    const {label, name, options, ...rest} = props
    return (
        <div>
            <Field as='checkbox' id={name} name={name} {...rest}>
                {
                    ({field}) => {
                        console.log(field);
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input 
                                        type="checkbox"
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        // jika value dari checkbox ada di dalam araray dari values di fieldny jika ya maka di set ke true
                                        checked={field.value.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>     
            <ErrorMessage name={name} component={TextError}/>       
        </div>
    )
}

export default Checkbox
