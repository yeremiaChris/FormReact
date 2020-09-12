import React from 'react'

import {Formik, Form } from 'formik'

import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {
    const dropdownOptions = [
        {key: 'select an option', value: ''},
        { key: 'option1', value: 'option1'},
        { key: 'option2', value: 'option2'},
        { key: 'option3', value: 'option3'}
    ]
    const radioOptions = [
        { key: 'option1', value: 'roption1'},
        { key: 'option2', value: 'roption2'},
        { key: 'option3', value: 'roption3'}
    ]
    const checkOptions = [
        { key: 'option1', value: 'coption1'},
        { key: 'option2', value: 'coption2'},
        { key: 'option3', value: 'coption3'}
    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkOption: []    
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('required'),
        description: Yup.string().required('required'),
        selectOption: Yup.string().required('required'),
        radioOption: Yup.string().required('required'),
        checkOption: Yup.array().required('required')
    })
    const onSubmit = values => console.log('form data', values);
    return (
        <Formik initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
            >
            {
                formik => <Form>
                    <FormikControl 
                                control='input' 
                                type='email' 
                                label='email' 
                                name='email'
                            />
                    <FormikControl 
                                control='textarea' 
                                label='Description' 
                                name='description'
                            />
                    <FormikControl 
                                control='select' 
                                label='Select an option' 
                                name='selectOption'
                                options={dropdownOptions}
                            />
                    <FormikControl 
                                control='radio' 
                                label='radio topik' 
                                name='radioOption'
                                options={radioOptions}
                            />
                    <FormikControl 
                                control='checkbox' 
                                label='check topik' 
                                name='checkOption'
                                options={checkOptions}
                            />
                    <button type="submit">submit</button>
                </Form>
            }
        </Formik>
    )
}

export default FormikContainer
