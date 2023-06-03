import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddressForm = () => {
    const handleSubmit = (values) => {
        console.log(values);
        window.location.href = '/payment';
    };

    Yup.setLocale({
        mixed: {
            notType: 'Wartość musi być liczbą',
        },
    });

    const validationSchema = Yup.object().shape({
            city: Yup.string().required('Miasto jest wymagane'),
            postalCode: Yup.string().required('Kod pocztowy jest wymagany'),
            street: Yup.string().required('Nazwa ulicy jest wymagana'),
            buildingNumber: Yup.string().required('Numer budynku jest wymagany'),
            apartmentNumber: Yup.number(),
            phoneNumber: Yup.number().required('Numer telefonu jest wymagany'),
            firstName: Yup.string().required('Imię jest wymagane'),
            lastName: Yup.string().required('Nazwisko jest wymagane'),
            email: Yup.string().email('Niepoprawny email').required('Email jest wymagany'),
    });

    return (
    <div className='d-flex flex-column align-items-center'>
        <h1>Adres Dostawy</h1>
        <Formik
            initialValues={{
            city: '',
            postalCode: '',
            street: '',
            buildingNumber: '',
            apartmentNumber: '',
            phoneNumber: '',
            firstName: '',
            lastName: '',
            email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
        <Form className='w-50'>
        <div className="row">
        <div className="col-md-6">
            <h3>Dane personalne</h3>

            <div className="mb-3">
                <label htmlFor="firstName">Imię:</label>
                <Field type="text" id="firstName" name="firstName" className="form-control" />
                <ErrorMessage name="firstName" component="div" className="error text-danger" />
            </div>

            <div className="mb-3">
                <label htmlFor="lastName">Nazwisko:</label>
                <Field type="text" id="lastName" name="lastName" className="form-control" />
                <ErrorMessage name="lastName" component="div" className="error text-danger" />
            </div>

            <div className="mb-3">
                <label htmlFor="email">Email:</label>
                <Field type="text" id="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="error text-danger" />
            </div>

            <div className="mb-3">
                <label htmlFor="phoneNumber">Numer telefonu:</label>
                <Field type="text" id="phoneNumber" name="phoneNumber" className="form-control" />
                <ErrorMessage name="phoneNumber" component="div" className="error text-danger" />
            </div>
            </div>

            <div className="col-md-6">
            <h3>Dane adresowe</h3>

            <div className="mb-3">
                <label htmlFor="street">Ulica:</label>
                <Field type="text" id="street" name="street" className="form-control" />
                <ErrorMessage name="street" component="div" className="error text-danger" />
            </div>

            <div className="mb-3">
                <label htmlFor="buildingNumber">Numer budynku:</label>
                <Field type="text" id="buildingNumber" name="buildingNumber" className="form-control" />
                <ErrorMessage name="buildingNumber" component="div" className="error text-danger" />
            </div>

            <div className="mb-3">
                <label htmlFor="apartmentNumber">(opcjonalnie) Numer mieszkania:</label>
                <Field type="text" id="apartmentNumber" name="apartmentNumber" className="form-control" />
                <ErrorMessage name="apartmentNumber" component="div" className="error text-danger" />
            </div>

            <div className="mb-3">
                <label htmlFor="postalCode">Kod pocztowy:</label>
                <Field type="text" id="postalCode" name="postalCode" className="form-control" />
                <ErrorMessage name="postalCode" component="div" className="error text-danger" />
            </div>

            <div className="mb-3">
                <label htmlFor="city">Miasto:</label>
                <Field type="text" id="city" name="city" className="form-control" />
                <ErrorMessage name="city" component="div" className="error text-danger" />
            </div>
        </div>
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
