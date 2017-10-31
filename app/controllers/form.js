import Ember from 'ember';


export default Ember.Controller.extend({
    orgName: "Acme Industries",
    orgType: "company",
    experienceType: "safe",
    policyUrl:"https://acmeindustries.com/code-of-conduct",    
    missionStatementOption: "one",
    sexualImagery: true,
    mentionDignity: true,
    correctiveAction: true,
    emotionalIntelligence: true,
    reportingNoncompliance: true,
    prioritizeMarginalized: true,
    responseTeamName: "",
    responseTeamEmail: "compliance@acmeindustries.com",
    mentionProtected: true,
    protectGender: true,
    protectGenderIdentityExpression: true,
    protectSexualOrientation: true,
    protectDisability: true,
    protectPhysicalAppearance: true,
    protectBodySize: true,
    protectAge: true,
    protectRace: true,
    protectReligion: true,
    protectNeuro: true,
    protectPoliticalAffiliation: true,
    protectOther:"",
    disableProtected: Ember.computed('mentionProtected',function() { return !this.get("mentionProtected") }),
    protectedGroups: Ember.computed('mentionProtected','protectGender','protectGenderIdentityExpression','protectSexualOrientation',
                                    'protectDisability','protectPhysicalAppearance','protectBodySize','protectAge',
                                    'protectRace','protectReligion','protectPoliticalAffiliation','protectOther',
            function() {

                if (!this.get("mentionProtected")) return "";

                var list = [];
                if (this.get("protectGender"))                   list.push("Gender");
                if (this.get("protectGender"))                   list.push("Gender");
                if (this.get("protectGenderIdentityExpression")) list.push("Gender Identity or Expression");
                if (this.get("protectSexualOrientation"))        list.push("Sexual Orientation");
                if (this.get("protectDisability"))               list.push("Disability");
                if (this.get("protectPhysicalAppearance"))       list.push("Physical Appearance");
                if (this.get("protectBodySize"))                 list.push("Body Size");
                if (this.get("protectAge"))                      list.push("Age");
                if (this.get("protectRace"))                     list.push("Race");
                if (this.get("protectReligion"))                 list.push("Religion");
                if (this.get("protectNeuro"))                    list.push("Neuro(a)typicality");
                if (this.get("protectPoliticalAffiliation"))     list.push("Political Affiliation");
                if (this.get("protectOther"))                    list.push(this.get("protectOther"));
                return list.join(", ");
    }),
    memberType: Ember.computed('orgType',function(){
        switch (this.get("orgType")) {
            case "company":    return ["Employee",   "Employes",    "employee",   "employees",   "employ",        "terminated"];
            case "conference": return ["Attendee",   "Addendees",   "addendee",   "addendees",   "attendence",    "removed"];
            case "online":     return ["Participant","Participants","participant","participants","participation", "banned"];
        }
    }),
    responseTeam: Ember.computed('responseTeamName','orgType',function(){
        if (this.get("responseTeamName")) return this.get("responseTeamName")
        switch (this.get("orgType")) {
            case "company":    return "Human Resources department";
            case "conference": return "duty officer";
            case "online":     return "admins";
        }
    }),
    document: Ember.computed('orgName','missionStatementOption',function () {
        return this.get('orgName') + ' ' +  this.get('missionStatementOption') + " test";
    })
});