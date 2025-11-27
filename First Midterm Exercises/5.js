// Дел сте од организацијата на некој долгорочен проект, и потребно е да изработите систем за водење на евиденциај за партнерите. За таа цел, потребни се најпрво помошни класи. Partner е класа во која се чува името на партнер компанијата, областа на дејност на партнер компанијата, датумот на кој се склучило партнерството, и основната годишна котизација за партнерството.
//
//     За оваа класа треба да се импленетира toString функција која ќе го печати следното: Partner %name has %value base subscription.
//
//
//     Класата PremiumPartner наследува од класата Partner, со тоа што дополнително чува листа од цени за дополнителните услуги (претплати) кои партнер компанијата тековно ги користи, и дали партнерот е долгогодишен партнер или не (true/false)(на почеток никој партнер не е долгогодишен). Функции кои треба да се имплементираат во оваа класа:
//
//
//     Функција за статус -> печати кој е статусот на партнерството, и колку плаќаат годишно. Сумата што одреден премиум партнер ја плаќа годишно се пресметува со тоа што на основната годишна котизација се додава и вкупната цена за дополнителни услуги кои тековно ги користи. Статусот на партнерството се одредува на следниот начин:
//
//
//     Доколку се работи за долгогодишен партнер, и:
// Тековно користи помалку од 3 дополнителни услуги -> bronze partner
// Тековно користи барем 3, но помалку од 5 дополнителни услуги -> silver partner
// Тековно користи барем 5 дополнителни услуги -> gold partner
// Доколку не се работи за долгогодишен партнер, и:
// Тековно користи помалку од 5 дополнителни услуги -> bronze partner
// Тековно користи барем 5 дополнителни услуги и вкупната цена за истите е помала од 500 -> silver partner
// Тековно користи барем 5 дополнителни услуги и вкупната цена за истите е барем 500 -> gold partner
//
//
// toString (override) -> да го печати партнерот во следниот формат: Premium Partner %name has %value base subscription and is/is not a long-term partner.
//
//
//     ProjectPartners е класа составена од листа на партнери за проектот (може да има и обични и премиум партнери), каде е потребно да се имплементираат следните функционалности:
//
//
//     додади партнер (addPartner): додавање на нов партнер во листата.
//     ажурирање на долгогодишни партнери (updatePartners()): за секој премиум партнер се проверува доколку партнерството е склучено пред барем 1 година, се поставува дека тој партнер е долгогодишен. Дополнително, доколку овој услов е исполнет и се работи за gold partner (објаснето погоре како се одредува), основната годишна котизација која треба да ја плаќа истиот се намалува за 20 %. После ажурирањето, го печати и статусот на партнерството. (како што е горе дефинирано)
// пресметување на процент на премиум партнери од одредена област на дејност (premiumPercentage): за дадена област на дејност, да се пресмета колкав процент од партнерите од таа област се премиум партнери.
// печати (print()): печати ги сите партнери, со тоа што ќе се печатат прво премиум па обичните партнери.
//
//
//
// -------------------------------------------
//
//
//     You are a part of the organisation team of a long-term project, and you need to create a system for running evidence of the partners. For that purpose, you firstly need some base helper classes. Partner is a class in which we keep the name of the partner company, it's field of work, the date when the partnership started and the base yearly fee for the partnership.
//
// In this class you should implement the method toString which will print the following: Partner %name has %value base subscription.
//
//
//     The class PremiumPartner extends the Partner class, and it additionally keeps a list of fees for additional services (subscriptions) which the partner company currently uses, and whether the partner is a long-term partner or not (true/false) (in the beginning NONE of the partners is a long-term partner). The methods that you should implement in this class are:
//
//
// Status method -> prints what is the status of the partner and how much yearly do they pay in total. The total sum that they pay is calculated so that on the base fee you add the total of the fees for additional services. The status of the partner is determined as following:
//
//
//     If it is a long-term partner, and:
// They currently use less than 3 additional services -> bronze partner
// They currently use at lest 3, but less than 5 additional services -> silver partner
// They currently use at least 5 additional services -> gold partner
// If it is not a long-term partner, and:
// They currently use less than 5 additional services -> bronze partner
// They currently use at least 5 additional services, and the total fee for those services is less than 500 -> silver partner
// They currently use at least 5 additional services, and the total fee for those services is at least 500 -> gold partner
//
//
// toString (override) -> it prints the partner in the following format: Premium Partner %name has %value base subscription and is/is not a long-term partner.
//
//
//     The class ProjectPartners is a class that contains a list of partners for the project (there can be ordinary and premium partners both), where the following functionalities need to be implemented:
//
//
//     add a partner (addPartner): adding a new partner to the list.
//     updating long-term partners (updatePartners()): for each premium partner we check if the partnership was formed at least a year ago, it is set that it is a long-term partner. Additionally, if this condition is met and it is a gold partner (the determination of the partner status is described above), the base yearly fee should be reduced by 20 %. After the update, you should print the status of the partnership. (as defined above)
// calculating the percent of premium partners in a certain field of work (premiumPercentage): for a given field of work, the percent of partners that are premium partners should be calculated.
// printing (print()): prints all the partners, but the premium partners first and then the ordinary partners.
//
// Result
//
// var projectPartners = new ProjectPartners();
//
// var p1 = new Partner("BuildBetter", "Civil Engineering", new Date(2022, 9, 20), 400);
// var p2 = new PremiumPartner("Butterfly", "IT", new Date(2022, 0, 10), 800, [200, 150, 100]);
// var p3 = new PremiumPartner("El", "Electrical Engineering", new Date(2022, 2, 1), 600, [150]);
// var p4 = new Partner("Vit", "IT", new Date(2021, 1, 1), 650);
// var p5 = new PremiumPartner("Node", "IT", new Date(2023, 0, 10), 1000, [100, 50, 150, 200, 100]);
// var p6 = new PremiumPartner("NewHome", "Civil Engineering", new Date(2022, 1, 3), 700, [50, 100, 50, 100, 150]);
// var p7 = new PremiumPartner("Link", "IT", new Date(2022, 0, 25), 1000, [100, 200]);
//
// projectPartners.addPartner(p1);
// projectPartners.addPartner(p2);
// projectPartners.addPartner(p3);
// projectPartners.addPartner(p4);
// projectPartners.addPartner(p5);
// projectPartners.addPartner(p6);
// projectPartners.addPartner(p7);
//
// projectPartners.updatePartners();
// console.log();
// projectPartners.print();
// console.log();
//
// projectPartners.premiumPercentage("IT");
//
// Test
//     Premium Partner Butterfly is a silver partner and is currently paying a total of 1250 yearly fee.
//     Premium Partner El is a bronze partner and is currently paying a total of 750 yearly fee.
//     Premium Partner Node is a gold partner and is currently paying a total of 1400 yearly fee.
//     Premium Partner NewHome is a gold partner and is currently paying a total of 1010 yearly fee.
//     Premium Partner Link is a bronze partner and is currently paying a total of 1300 yearly fee.
//
//     Premium Partner Butterfly has 800 base subscription and is a long-term partner.
//     Premium Partner El has 600 base subscription and is a long-term partner.
//     Premium Partner Node has 800 base subscription and is a long-term partner.
//     Premium Partner NewHome has 560 base subscription and is a long-term partner.
//     Premium Partner Link has 1000 base subscription and is a long-term partner.
//     Partner BuildBetter has 400 base subscription.
//     Partner Vit has 650 base subscription.
//
//     75.00% of the partners that are in the IT field are premium partners.

    class Partner{
    constructor(name, field, startDate, fee) {
        this.name = name;
        this.field = field;
        this.startDate = startDate;
        this.fee = fee;
    }

    toString(){
        return `Partner ${this.name} has ${this.fee} base subscription.`;
    }
}

class PremiumPartner extends Partner {
    constructor(name, field, startDate, fee, feesList) {
        super(name, field, startDate, fee);
        this.feesList = feesList;
        this.isLongTerm = false;
    }

    status(){
        this.sum = 0;
        this.feesList.forEach(num => {this.sum += num;});

        if(this.isLongTerm){
            if(this.feesList.length < 3) this.currStatus = `bronze partner`;
            else if(this.feesList.length >= 3 && this.feesList.length < 5) this.currStatus = `silver partner`;
            else if(this.feesList.length >= 5) this.currStatus = `gold partner`;
        }else{
            if(this.feesList.length < 5) this.currStatus = `bronze partner`;
            else if(this.feesList.length >= 5 && this.sum < 500) this.currStatus = `silver partner`;
            else if(this.feesList.length >= 5 && this.sum >= 500) this.currStatus = `gold partner`;
        }

        if(this.currStatus === 'gold partner')
            this.fee *= 0.8;

        this.sum += this.fee;

        console.log(`Premium Partner ${this.name} is a ${this.currStatus} and is currently paying a total of ${this.sum} yearly fee.`);
    }

    toString(){
        if(this.isLongTerm){
            this.lt = `and is a long-term partner`;
        }else{
            this.lt = `and is not a long-term partner`;
        }

        return `Premium Partner ${this.name} has ${this.fee} base subscription ${this.lt}.`;
    }
}

class ProjectPartners{
    constructor() {
        this.partners = [];
    }

    addPartner(partner){
        this.partners.push(partner);
    }

    updatePartners(){
        this.partners.forEach(partner => {
            if(partner instanceof PremiumPartner){
                partner.isLongTerm = (new Date() - partner.startDate) / (1000 * 3600 * 24 * 365) > 1;
                partner.status();
            }
        });
    }

    premiumPercentage(field){
        this.worksInField = this.partners.filter(partner => partner.field === field);
        this.premium = this.worksInField.filter(partner => partner instanceof PremiumPartner).length;

        console.log(`${((this.premium / this.worksInField.length) * 100).toFixed(2)}% of the partners that are in the ${field} field are premium partners.`);
    }

    print(){
        this.partners.forEach(partner => {
            if(partner instanceof PremiumPartner){
                console.log(partner.toString());
            }
        });

        this.partners.forEach(partner => {
            if(!(partner instanceof PremiumPartner)){
                console.log(partner.toString());
            }
        });
    }
}