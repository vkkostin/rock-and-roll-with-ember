import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { buildValidations } from 'ember-cp-validations';
import email from 'rarwe/validations/email-field'; 
import password from 'rarwe/validations/password-field';
import { computed } from '@ember/object';

const Validations = buildValidations({ email, password });

export default Controller.extend(Validations, {

  showErrors: computed('_showErrors', {
    get() {
      return this._showErrors || { email: false, password: false };
    },
    set(key, value) {
      this.set('_showErrors', value);
      return this._showErrors; 
    }
  }),

  session: inject(),

  actions: {
    async signIn(event) {
      event.preventDefault();
      let { email, password } = this;
      await this.session.authenticate('authenticator:credentials', email, password);
      await this.transitionToRoute('bands');
    }
  }
});
