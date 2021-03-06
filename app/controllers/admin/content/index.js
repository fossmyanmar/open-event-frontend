import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveSocials() {
      this.set('isLoading', true);
      let settings = this.get('model');
      settings.save()
        .then(() => {
          this.notify.success(this.get('l10n').t('Social links have been saved successfully.'));
        })
        .catch(() => {
          this.notify.error(this.get('l10n').t('An unexpected error has occurred. Social links not saved.'));
        })
        .finally(() => {
          this.set('isLoading', false);
        });
    }
  }
});
