import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { userContext } from '../context/UserContext';

const AddressForm = () => {
    const { setTableNumberAction } = useContext(userContext);

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log(values);
        setTableNumberAction(values);
        navigate('/payment');
    };

    Yup.setLocale({
        mixed: {
            notType: 'Wartość musi być liczbą',
        },
    });

    const validationSchema = Yup.object().shape({
        tableNumber: Yup.number().required('Numer stolika jest wymagany'),
    });

    return (
    <div className='d-flex flex-column align-items-center'>
        <h2>Numer stolika</h2>
        <Formik
            initialValues={{
                tableNumber: '',
            }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
            <Form className='w-50'>
                <div className="mb-3">
                    <Field type="number" id="tableNumber" name="tableNumber" className="form-control" />
                    <ErrorMessage name="tableNumber" component="div" className="error text-danger" />
                </div>
                <div className='text-center'>
                    <button type="submit" className="ovr-btn">Zatwierdź</button>
                </div>
            </Form>
        </Formik>
    </div>
  );
};

export default AddressForm;
