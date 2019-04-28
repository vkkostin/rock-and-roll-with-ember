import DS from 'ember-data';
import { buildValidations } from 'ember-cp-validations';
import email from 'rarwe/validations/email-field'; 
import password from 'rarwe/validations/password-field';

const { Model, attr } = DS;

const Validations = buildValidations({ email, password });

export default Model.extend(Validations, {
  email: attr('string'),
  password: attr('string'),
});