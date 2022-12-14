import * as yup from 'yup';

const inputPattern = /^([^0-9]*)$/
export const createValidationSchema = yup.object().shape({
    name: yup.string().matches(inputPattern, "Name should contain letters only").min(3, "Name should be of minimum 3 characters length").max(50, "Name should be of maximum 50 characters length").required("Name is required"),
    description: yup.string().max(300, "Description should be of maximum 50 characters length").required("Description is required"),
})