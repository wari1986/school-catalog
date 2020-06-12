class School {
    constructor(name,level,numberOfStudents){
       this._name=name;
       this._level=level;
       this._numberOfStudents=numberOfStudents; 
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    quickFacts(){
        console.log(`${this.name}' educates ${this.numberOfStudents} students at the ${this.level} school level`);
    }

    static pickSubstituteTeachers (substituteTeachers) {
        const index= Math.floor(Math.random()*substituteTeachers.lenght);
        return substituteTeachers[index];
    }

    set numberOfStudents(newNumberOfStudents) {
        if(typeof newNumberOfStudents==='number'){
            return this._numberOfStudents=this.numberOfStudents
        }else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        };
    }
}

class PrimarySchool extends School {
    constructor(name,numberOfStudents,pickUpPolicy) {
        super(name,'primary',numberOfStudents);
        this._pickUpPolicy=pickUpPolicy;
    }

    get pickUpPolicy(){
        return this._pickUpPolicy;
    }
    
}

class HighSchool extends School {
    constructor(name,numberOfStudents,sportsTeam) {
        super(name,'high',numberOfStudents);
        this._sportsTeam=sportsTeam;
    }

    get sportsTeam() {
        console.log(this._sportsTeam);
    }
}

const lorraineHansbury=new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13');

lorraineHansbury.quickFacts();

School.pickSubstituteTeachers(['Mr.Camacho','Mr.Dorigo','MsPerez','Ms Diaz']);

const alSmith=new HighSchool('Al E. Smith',415,['Baseball','Basketball','Volleyball','Track and Field']);


// alSmith.sportsTeam(alSmith);

