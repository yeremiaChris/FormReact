import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

function DatePicker(props) {
    const {name,label, ...rest} = props
    return (
        <div>
            <label htmlFor="name"></label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        // method ini mengizinkan kita untuk meng set value di formik state
                        const {setFieldValue} = form
                        // value itu memberikan value dari datepicker di setiap waktu yang diberikan
                        const {value} = field
                        return( 
                            <>
                                <label htmlFor={name}>{label}</label>
                                <DateView 
                                    id={name} 
                                    {...field} 
                                    {...rest} 
                                    selected={value} 
                                    onChange={val => setFieldValue(name, val)}
                                />
                            </>
                        )    
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default DatePicker
