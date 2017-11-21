import Ember from 'ember';
import Service from '@ember/service';

const { get, inject, computed } = Ember;

export default Service.extend({
  // the `fb` service comes from ember-cli-facebook-js-sdk
  fb: inject.service(),

  SDK: computed(function SDK() {
    return get(this, 'fb').FBInit();
  }),

  SDKWithUser: computed(function SDKWithUser() {
    return get(this, 'fb').getLoginStatus().then(() => window.FB);
  }),

});
