import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    bookmark: null,
    router: Ember.inject.service('-routing'),
    actions: {
        save(bookmark) {
            Ember.Logger.info('save called')
            bookmark.save()
            .then(
                (value) => {
                    Ember.Logger.info(value);
                    this.get('router').transitionTo('bookmarks');
                }
            )
            .catch(
                () => {
                    Ember.Logger.info('failure to save');
                }
            )

        },
        cancel() {Ember.Logger.info('cancel called')},
        delete(bookmark) {
            Ember.Logger.info('delete called');
            bookmark.destroyRecord();
            this.get('router').transitionTo('bookmarks');
        }
    }
});
