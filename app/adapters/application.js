import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorize(xhr) {
    let { token } = this.get('session.data.authenticated'); 
    if (token) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`); }
    }
});
