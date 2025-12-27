// You are required to create a tool through which a gym can manage its members.
//     The main class is Member, which stores information about each gym member, and a subclass PremiumMember that adds specific details for premium clients.
//     Additionally, there is a Gym class that maintains a collection of members, with methods for managing and analyzing the gym’s membership base.
//
//     The Member class should have the following attributes:
//
//     fullname (String) – full name of the member;
//
// membershipType (String) – type of membership, which can be “monthly” оr “yearly”;
//
// startDate (Date) – date when the membership started;
//
// expiryDate (Date) – the date when the membership expires (1 month after start for monthly, 1 year for yearly);
//
// attendance (int) – number of attended sessions;
//
// isActive (boolean) – a membership is currently active if the current date is before the expiry date;
//
// id (String) – unique identifier formed by combining the first letter of the first name and the first two letters of the last name in uppercase (example "John Doe" => "JDO").
//
// The Member class should implement:
//
//     renewMembership() – extends the expiration date depending on the membership type (yearly - extends it for a year, monthly - extends for a month);
//
// attendSession(hours) – increases the attendance count;
//
// toString() – returns a formatted description of the member in the following format:
//     "Member %id ("%fullname") has a %membershipType membership and has attended %attendance sessions. They are currently %activeStatus."
//
// The PremiumMember class extends Member and adds:
//
//     hasTrainer (boolean) – indicates if the member has a personal trainer;
//
// wellnessPoints (int) – calculated score representing wellness progress.
//
//     This class should implement:
//
//     calculateWellnessPoints() – calculates wellness points using the formula:
//     attendance * 12 if the member has a trainer, otherwise attendance * 8;
// if the membership type is yearly, the total is increased by 20%.
//
// getPremiumTier() – determines the member tier based on total wellness points:
//
//     ≥ 2000 → “God Tier Member”
//
// ≥ 1200 → “Top Tier Member”
//
// ≥ 700 → “Distinguished Member”
//
//         otherwise → “Advanced Member”
//     toString() returns a formatted description of the member in the following format:
//     "Premium %baseToString This member %has/doesn't have a personal trainer, has earned %wellnessPoints wellness points and is ranked as %tier."
//
// The Gym class should have an attribute:
//
//     members (Array) – a list containing all members of the gym.
//
//     This class should implement the following methods:
//
//     addMember(member) – adds a new member to the collection;
//
// updateMembershipStatuses() – updates the isActive status of each member depending on whether their membership has expired;
//
// averageWellnessOfActive() – calculates and returns the average wellness points of all currently active premium members;
//
// printMembers() – prints all members, first premium members sorted in descending order by wellness points, then regular members sorted by attendance, using the toString() method for formatting.
//
//                                                                                                                                                                                      == EN ==============================================
//
//                                                                                                                                                                                          Потребно е да се креира алатка преку која фитнес центарот може да ги управува своите членови.
//     Главната класа е Member, која зачувува информации за секој член, а подкласа PremiumMember додава специфични детали за премиум клиентите.
//     Дополнително, постои и класа Gym, која одржува колекција од членови и овозможува методи за управување и анализа на податоците за членовите.
//
//     Класата Member треба да ги содржи следниве атрибути:
//
//     fullname (String) – целосно име на членот;
//
// membershipType (String) – тип на членство („monthly“ или „yearly“);
//
// startDate (Date) – датум на започнување на членството;
//
// expiryDate (Date) – датум на истекување на членството (1 месец за месечно, 1 година за годишно членство);
//
// isActive (boolean) – членството е моментално активно ако тековниот датум е пред датумот на истекување
//
// attendance (int) – број на посетени сесии;
// id (String) – уникатен идентификатор, составен од првата буква од името и првите две букви од презимето со големи букви (пример: "John Doe" => "JDO").
//
// Класата Member треба да имплементира:
//
//     renewMembership() – го продолжува рокот на траење во зависност од видот на членство (годишно - го продолжува за една година, месечно - го продолжува за еден месец);
//
// attendSession(hours) – го зголемува бројот на посетени тренинзи;
//
// toString() – враќа форматиран опис на членот во следниот формат:
//     "Member %id ("%fullname") has a %membershipType membership and has attended %attendance sessions. They are      currently %activeStatus."
//
// Класата PremiumMember ја наследува Member и додава:
//
//     hasTrainer (boolean) – дали членот има личен тренер;
//
// wellnessPoints (int) – пресметани поени кои ја претставуваат физичката активност и напредокот.
//
//     Оваа класа треба да имплементира:
//
//     calculateWellnessPoints() – ги пресметува поените со формула:
//     attendance * 12 ако има тренер, инаку attendance * 8;
// ако членството е годишно, вкупниот резултат се зголемува за 20%.
//
// getPremiumTier() – го одредува премиум нивото врз основа на поените:
//
//     ≥ 2000 → „God Tier Member“
//
// ≥ 1200 → „Top Tier Member“
//
// ≥ 700 → „Distinguished Member“
//
//         инаку → „Advanced Member“
//     toString() враќа форматиран опис на членот во следниот формат:
//     "Premium %baseToString Овој член %има/нема личен тренер, има освоено %wellnessPoints поени за физичка благосостојба и е класифициран како %tier."
//
// Класата Gym треба да има атрибут:
//
//     members (Array) – листа со сите членови на фитнес центарот.
//
//     Оваа класа треба да имплементира следниве методи:
//
//     addMember(member) – додава нов член во колекцијата;
//
// updateMembershipStatuses() – ја ажурира состојбата на сите членови, поставувајќи isActive на false за оние со истечено членство;
//
// averageWellnessOfActive() – пресметува и враќа просечен број на поени на сите активни премиум членови;
//
// printMembers() – ги печати сите членови, прво премиум членовите сортирани во опаѓачки редослед според поените wellnessPoints, потоа редовните членови сортирани според attendence, користејќи го методот toString() за форматирање.
//
// For example:
// Test:
//
// const gym = new Gym();
//
// const m1 = new Member('Ana Petrova', 'monthly', '2025-11-01', 30);
// const m2 = new PremiumMember('Marko Jovanov', 'yearly', '2025-11-01', 150, true);
// const m3 = new PremiumMember('Sara Ilievska', 'monthly', '2025-10-15', 80, false);
//
//
// gym.addMember(m1);
// gym.addMember(m2);
// gym.addMember(m3);
//
// gym.updateMembershipStatuses();
// gym.printMembers();
//
// console.log(`\nAverage wellness of active premium members: ${gym.averageWellnessOfActive()}`);
//
// Result:
// Premium Members:
// Premium Member MJO ("Marko Jovanov") has a yearly membership and has attended 150 sessions. They are currently an active member until Sun Nov 01 2026. This member has a personal trainer, has earned 2160 wellness points and is ranked as God Tier Member.
// Premium Member SIL ("Sara Ilievska") has a monthly membership and has attended 80 sessions. They are currently an active member until Sat Nov 15 2025. This member trains independently, has earned 640 wellness points and is ranked as Advanced Member.
//
// Regular Members:
// Member APE ("Ana Petrova") has a monthly membership and has attended 30 sessions. They are currently an active member until Mon Dec 01 2025.
//
// Average wellness of active premium members: 1400.00

class Member{
    constructor(fullname, membershipType, startDate, attendance) {
        this.id = fullname.slice(0, 1) + fullname.split(" ")[1].slice(0, 2).toUpperCase();
        this.fullname = fullname;
        this.attendance = attendance;
        this.membershipType = membershipType;
        this.startDate = new Date(startDate);
        this.expiryDate = new Date(startDate);

        if(this.membershipType === "monthly")
            this.expiryDate.setMonth(this.expiryDate.getMonth() + 1);
        else
            this.expiryDate.setFullYear(this.expiryDate.getFullYear() + 1);

        this.isActive = this.startDate < this.expiryDate;
    }

    renewMembership(){
        if(this.membershipType === "monthly")
            this.expiryDate.setMonth(this.expiryDate.getMonth() + 1);
        else
            this.expiryDate.setFullYear(this.expiryDate.getFullYear() + 1);
    }

    attendSession(hours){
        this.attendance += hours;
    }

    toString(){
        this.finalDate = this.expiryDate.toString().split(" ");
        this.formatedDate = `${this.finalDate[0]} ${this.finalDate[1]} ${this.finalDate[2]} ${this.finalDate[3]}`;

        if(this.isActive)
            this.activeMem = `an active member until ${this.formatedDate}`;
        else
            this.activeMem = `an inactive member since ${this.formatedDate}`;

        return `Member ${this.id} (\"${this.fullname}\") has a ${this.membershipType} membership and has attended ${this.attendance} sessions. They are currently ${this.activeMem}.`;
    }

    getAttendance(){
        return this.attendance;
    }
}

class PremiumMember extends Member{
    constructor(fullname, membershipType, startDate, attendance, hasTrainer) {
        super(fullname, membershipType, startDate, attendance);
        this.hasTrainer = hasTrainer;
        this.wellnessPoints = 0;

        this.calculateWellnessPoints()
        this.getPremiumTier()
    }

    calculateWellnessPoints(){
        if(this.hasTrainer)
            this.wellnessPoints = (super.getAttendance() * 12);
        else
            this.wellnessPoints = (super.getAttendance() * 8);

        if(this.membershipType === "yearly")
            this.wellnessPoints += (this.wellnessPoints * 0.2);

        this.getPremiumTier()
    }

    getPremiumTier(){
        if(this.wellnessPoints >= 2000)
            this.premiumTier = "God Tier";
        else if(this.wellnessPoints >= 1200)
            this.premiumTier = "Top Tier";
        else if(this.wellnessPoints >= 700)
            this.premiumTier = "Distinguished";
        else
            this.premiumTier = "Advanced";
    }

    toString(){
        if(this.hasTrainer)
            this.trainer = "has a personal trainer";
        else
            this.trainer = "trains independently";

        return `Premium ${super.toString()} This member ${this.trainer}, has earned ${this.wellnessPoints} wellness points and is ranked as ${this.premiumTier} Member.`;
    }
}

class Gym{
     constructor() {
         this.members = [];
     }

    addMember(member){
        this.members.push(member);
    }

    updateMembershipStatuses(){
        this.members
            .forEach(member => {
                member.isActive = member.startDate < member.expiryDate;
            });
    }

    printMembers(){
         console.log("Premium Members:")

        this.members.
        sort((a, b) => b.wellnessPoints - a.wellnessPoints)
            .forEach(member => {
                if(member instanceof PremiumMember)
                    console.log(member.toString());
            });

         console.log("\nRegular Members:")
        this.members.
        sort((a, b) => b.attendance - a.attendance)
            .forEach(member => {
                if(!(member instanceof PremiumMember))
                    console.log(member.toString());
            });
    }

    averageWellnessOfActive(){
         this.n = 0;
         this.total = 0.0;

         this.members
             .forEach(member => {
                 if(member instanceof PremiumMember) {
                     this.total += member.wellnessPoints;
                     this.n++;
                 }
             });

         return (this.total / this.n).toFixed(2);
    }
}