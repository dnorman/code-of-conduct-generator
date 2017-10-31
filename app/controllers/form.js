import Ember from 'ember';

export default Ember.Controller.extend({
    orgName: "",
    missionStatementOption: "one",
    document: Ember.computed('orgName','missionStatementOption',function () {
        return this.get('orgName') + ' ' +  this.get('missionStatementOption') + " test";
    })
});
